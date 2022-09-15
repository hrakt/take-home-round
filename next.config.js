//@ts-check

const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");

const relay = require("./relay.config.json");

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
  compiler: {
    relay: {
      src: relay.src,
      artifactDirectory: relay.artifactDirectory,
      language: "typescript",
    },
  },
};

module.exports = nextConfig;
