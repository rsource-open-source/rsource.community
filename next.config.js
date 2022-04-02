const { readFileSync } = require("fs");
const query = readFileSync("./gql/everything.gql", "utf8");
const { redirectRoutes } = require("./utils/routes");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "repository-images.githubusercontent.com",
      "avatars.githubusercontent.com",
    ],
  },
  reactStrictMode: true,
  async redirects() {
    let routes = await redirectRoutes(process.env.GITHUB_TOKEN, query, true);
    return routes;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
