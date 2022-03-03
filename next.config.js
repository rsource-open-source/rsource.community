const { readFileSync } = require("fs");
const query = readFileSync("./public/request.gql", "utf8");

// let redirects = await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN);

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
  async redirects() {
    let redirectRoutes = [];

    const { ghroutes } = await import("rsource-routes");
    let waitedghoutes = await ghroutes.getrsourcePrefixedRepos(
      await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN, query),
      true
    );

    waitedghoutes.forEach((n) => {
      redirectRoutes.push({
        source: `/repo/${n.name}`,
        destination: n.url,
        permanent: true,
      });
    });
    console.log(redirectRoutes);
    return redirectRoutes;
  },
};

module.exports = nextConfig;
