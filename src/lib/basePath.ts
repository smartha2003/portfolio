export const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

/**
 * Prefix a path with Next.js basePath (prod only).
 * Use for files served from /public (e.g. "/avatar.png").
 */
export function withBasePath(path: string) {
  if (!path) return path;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return `${BASE_PATH}/${path}`;
  return `${BASE_PATH}${path}`;
}

