/**
 * Resolves a video filename to a full URL.
 * Set VITE_VIDEO_ASSETS_BASE_URL to your S3 (or CloudFront) HTTPS prefix, e.g.
 * https://your-bucket.s3.us-east-1.amazonaws.com/3FImagingVideos/
 * If unset, falls back to /filename.mp4 from Vite public/.
 */
export function publicVideoUrl(relativePath: string): string {
  if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) {
    return relativePath;
  }
  const name = relativePath.replace(/^\//, "");
  const base = import.meta.env.VITE_VIDEO_ASSETS_BASE_URL as string | undefined;
  if (base?.trim()) {
    const normalized = base.endsWith("/") ? base : `${base}/`;
    return `${normalized}${encodeURIComponent(name)}`;
  }
  return `/${name}`;
}
