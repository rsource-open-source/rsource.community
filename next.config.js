const { readFileSync } = require("fs");
const query = readFileSync("./request.gql", "utf8");
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
    domains: ["web-platforms.sfo2.cdn.digitaloceanspaces.com", "aixxe.net"],
  },
  reactStrictMode: true,
  async redirects() {
    let routes = await redirectRoutes(process.env.GITHUB_TOKEN, query, true);
    console.log(routes);
    return routes;
  },
  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
