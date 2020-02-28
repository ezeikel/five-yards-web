// next.config.js

const withCSS = require("@zeit/next-css");
const withSourceMaps = require("@zeit/next-source-maps");
require("dotenv").config();

module.exports = withCSS(
  withSourceMaps({
    target: "serverless",
    env: {
      NODE_ENV: process.env.NODE_ENV,
      SENTRY_DSN: process.env.SENTRY_DSN,
    },
    // eslint-disable-next-line
    webpack(config, options) {
      return config;
    },
  }),
);
