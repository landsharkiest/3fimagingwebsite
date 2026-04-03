import express from "express";
import { getSignedUrl } from "@aws-sdk/cloudfront-signer";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function encodeObjectKey(key: string): string {
  return key
    .split("/")
    .map(segment => encodeURIComponent(segment))
    .join("/");
}

function getCloudFrontConfig() {
  const domain = process.env.CLOUDFRONT_DOMAIN;
  const keyPairId = process.env.CLOUDFRONT_KEY_PAIR_ID;
  const rawPrivateKey = process.env.CLOUDFRONT_PRIVATE_KEY;
  const expiresSeconds = Number.parseInt(process.env.CLOUDFRONT_URL_EXPIRES_SECONDS ?? "3600", 10);

  if (!domain || !keyPairId || !rawPrivateKey) {
    return null;
  }

  return {
    domain,
    keyPairId,
    privateKey: rawPrivateKey.replace(/\\n/g, "\n"),
    expiresSeconds: Number.isFinite(expiresSeconds) ? expiresSeconds : 3600,
  };
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  app.use(express.json());

  app.get("/api/video-urls", (req, res) => {
    const filesParam = String(req.query.files ?? "");
    const files = filesParam
      .split(",")
      .map(file => decodeURIComponent(file.trim()))
      .filter(Boolean);

    if (files.length === 0) {
      return res.status(400).json({ error: "Missing files query parameter." });
    }

    const config = getCloudFrontConfig();
    if (!config) {
      return res.status(503).json({
        error: "CloudFront signing is not configured.",
      });
    }

    const now = Date.now();
    const expiresAt = new Date(now + config.expiresSeconds * 1000).toISOString();
    const urls: Record<string, string> = {};

    for (const file of files) {
      const url = `https://${config.domain.replace(/^https?:\/\//, "").replace(/\/$/, "")}/${encodeObjectKey(file)}`;
      urls[file] = getSignedUrl({
        url,
        keyPairId: config.keyPairId,
        privateKey: config.privateKey,
        dateLessThan: new Date(now + config.expiresSeconds * 1000).toISOString(),
      });
    }

    return res.json({ urls, expiresAt });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
