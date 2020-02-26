module.exports = {
  ...require("./jest-common"),
  displayName: "client",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: [
    "jest-styled-components",
    "@testing-library/jest-dom/extend-expect",
  ],
};
