const path = require("path");

module.exports = {
  rootDir: path.join(__dirname, ".."),
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.css$": require.resolve("./style-mock.js"),
  },
  watchPlugins: [
    "jest-watch-select-projects",
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};
