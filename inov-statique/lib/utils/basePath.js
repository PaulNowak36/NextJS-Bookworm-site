function withBasePath(path) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!path || /^(https?:|data:|blob:)/.test(path)) return path;

  if (path.startsWith("/") && basePath) {
    if (path.startsWith(basePath + "/") || path === basePath) return path;
    return `${basePath}${path}`;
  }

  return path;
}

export default withBasePath;