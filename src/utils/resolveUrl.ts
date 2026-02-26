// helper to fix asset paths with Vite base URL
export function resolveUrl(path: string): string {
  if (!path) return path;
  // if external link, return as-is
  if (/^https?:\/\//.test(path)) return path;
  const base = import.meta.env.BASE_URL || "/";
  // remove leading slash to avoid double
  return base + path.replace(/^\//, "");
}