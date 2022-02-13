// const withTM = require("next-transpile-modules")([""]);

const routes = {
  records: "https://github.com/rsource-open-source/rsource-records",
  android: "https://github.com/rsource-open-source/rsource-android",
  redirect: "https://github.com/rsource-open-source/rsource-redirect",
  api: "https://github.com/rsource-open-source/rsource-api",
  twitch: "https://github.com/rsource-open-source/rsource-twitch",
  pylon: "https://github.com/rsource-open-source/server-pylon",
  website: "https://github.com/rsource-open-source/website",
  ahks: "https://github.com/rsource-open-source/ahks",
  extractor: "https://github.com/rsource-open-source/extractor",
  gist: "https://github.com/rsource-open-source/gists",
  proposal: "https://github.com/rsource-open-source/strafes-net-api-proposal",
  projects: "https://github.com/orgs/rsource-open-source/projects/3",
  discord: "https://discord.gg/2uFfQ3WYNX",
  organization: "https://github.com/rsource-open-source",
};

let nextRoutes = [];

for (const route in routes) {
  nextRoutes.push({
    source: `/${route}`,
    destination: routes[route],
    permanent: false,
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { isServer }) => {
  //   if (isServer) return;
  //   config.node = {
  //     fs: "empty",
  //   };
  // },
  reactStrictMode: true,
  async redirects() {
    return nextRoutes;
  },
};

module.exports = nextConfig;
