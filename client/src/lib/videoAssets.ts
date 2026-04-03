export function publicVideoUrl(relativePath: string): string {
  if (relativePath.startsWith("http://") || relativePath.startsWith("https://")) {
    return relativePath;
  }
  // Always serve from local `client/public` so the site works without external hosting.
  const name = relativePath.replace(/^\//, "");
  return `/${encodeURIComponent(name)}`;
}
