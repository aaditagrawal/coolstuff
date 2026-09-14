import stylexOptions from "./stylex.config.cjs";

const stylexLoader = {
  loader: "babel-loader",
  options: {
    babelrc: false,
    configFile: false,
    plugins: [["@stylexjs/babel-plugin", stylexOptions]],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compile only StyleX definitions so Next keeps SWC and next/font support.
  turbopack: { rules: { "*.stylex.js": { loaders: [stylexLoader], as: "*.js" } } },
  webpack(config) {
    config.module.rules.push({ test: /\.stylex\.js$/, use: [stylexLoader] });
    return config;
  },
};

export default nextConfig;
