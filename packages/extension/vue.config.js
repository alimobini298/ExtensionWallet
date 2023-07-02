const baseConfigs = require("./configs/base-build");
const browserConfigs = require("./configs/browser-build");

module.exports = {
  pages: {
    index: {
      template: "public/index.html",
      entry: "./src/ui/provider-pages/main.ts",
      title: "IBC Wallet extension",
    },
    action: {
      template: "public/index.html",
      entry: "./src/ui/action/main.ts",
      title: "IBC Wallet extension popup",
    },
    onboard: {
      template: "public/index.html",
      entry: "./src/ui/onboard/main.ts",
      title: "IBC wallet extension onboard",
    },
  },
  indexPath: "index.html",
  devServer: {
    https: true,
    host: "localhost",
    hotOnly: true,
    port: 8080,
  },
  chainWebpack: (config) => {
    baseConfigs.setConfig(config);
    browserConfigs.setConfig(config);
  },
};
