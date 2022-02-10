// const fs = require("fs");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/test",
        destination: "https://google.com/about",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
