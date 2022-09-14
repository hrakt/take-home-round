//@ts-check

const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.join("node_modules/ionicons/dist/svg"),
            to: path.join(__dirname, "public/svg"),
          },
        ],
      })
    );
    return config;
  },
  images: {
    domains: ["ionicframework.com"],
  },
};

module.exports = nextConfig;
