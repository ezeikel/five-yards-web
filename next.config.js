// next.config.js

const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");

module.exports = withCSS(
  withSourceMaps({
    target: "serverless",
    // eslint-disable-next-line
    webpack(config, options) {
      return config;
    },
  }),
);
