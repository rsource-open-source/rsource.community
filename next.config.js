let redirectRoutes = [];

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
    return await ghroutes
      .getrsourcePrefixedRepos(
        await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN),
        true
      )
      .ghredirects.forEach((n) => {
        redirectRoutes.push({
          source: `/repo/${n.name}`,
          destination: n.url,
          permanent: true,
        });
      });
  },
};

module.exports = nextConfig;
