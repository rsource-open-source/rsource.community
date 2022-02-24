// const rsource_routes = require("rsource-routes");
// console.log(rsource_routes);

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
  images: {
    domains: ["web-platforms.sfo2.cdn.digitaloceanspaces.com"],
  },
  reactStrictMode: true,
  async redirects() {
    return nextRoutes;
  },
};

module.exports = nextConfig;
