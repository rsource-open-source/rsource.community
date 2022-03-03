const { readFileSync } = require("fs");
const query = readFileSync("./public/request.gql", "utf8");
const redirectRoutes = require("./utils/routes").default;

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
    /*
    let redirectRoutes = [];

    const { ghroutes, aliases, routes } = await import("rsource-routes");

    let waitedghoutes = await ghroutes.formatRepos(
      await ghroutes.getGitHubRepos(process.env.GITHUB_TOKEN, query)
    );

    waitedghoutes.forEach((n) => {
      if (n.name.startsWith("rsource-")) n.name = n.name.slice(8);
    });

    waitedghoutes.forEach((n) => {
      redirectRoutes.push({
        source: `/repo/${n.name}`,
        destination: n.url,
        permanent: true,
      });
    });

    aliases.aliases.forEach((n, k) => {
      redirectRoutes.push({
        source: `/${k}`,
        destination: `/${n}`,
        permanent: true,
      });
    });

    Object.keys(routes.routes).forEach((n) => {
      redirectRoutes.push({
        source: `/${n}`,
        destination: routes.routes[n],
        permanent: true,
      });
    });

    redirectRoutes.push({
      source: "/repo",
      destination: "https://github.com/orgs/rsource-open-source/repositories",
      permanent: true,
    });

    console.log(redirectRoutes);
    return redirectRoutes;
    */
    return await redirectRoutes(process.env.GITHUB_TOKEN, query);
  },
};

module.exports = nextConfig;
