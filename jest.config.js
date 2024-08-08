module.exports = {
    transform: {
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    moduleNameMapper: {
      ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
      ".+\\.(jpg|jpeg|png|gif|webp|svg)$": `<rootDir>/__mocks__/file-mock.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testEnvironment: `jest-environment-jsdom`,
    setupFiles: [`<rootDir>/loadershim.js`],
    setupFilesAfterEnv: [`<rootDir>/setup-test-env.js`],
  }