const { readFileSync } = require("fs");
const query = readFileSync("./public/request.gql", "utf8");
const redirectRoutes = require("./utils/routes").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   if (isServer) return;
  //   config.node = {
  //     fs: "empty",
  //   };
  // },
  images: {
    domains: ["web-platforms.sfo2.cdn.digitaloceanspaces.com"],
  },
  reactStrictMode: true,
  // async redirects() {
  //   return await redirectRoutes(process.env.GITHUB_TOKEN, query, true);
  // },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
