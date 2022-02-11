/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return ({ nextRoutes } = await import("./utils/functions/route"));
  },
};

module.exports = nextConfig;
