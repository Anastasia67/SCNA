//jest.config.js
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transpile JS, JSX, TS, and TSX using Babel
  },
  collectCoverage: true,
  coverageDirectory: "../coverage",
  coverageReporters: ["lcov", "text"],
  //testEnvironment: "jsdom",
  testEnvironment: "node", // Ensures Jest runs in a Node-like environment
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-native-firebase|react-navigation|expo|@react-native-community)/)",
  ],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testMatch: [
    "<rootDir>/_test_/**/*.(spec|test).[jt]s?(x)", // Look for tests in `_test_`
  ],
};
