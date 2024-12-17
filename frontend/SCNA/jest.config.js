//jest.config.js
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transpile JS, JSX, TS, and TSX using Babel
  },
  collectCoverage: true,
  coverageDirectory: "../coverage",
  coverageReporters: ["lcov", "text"],
  testEnvironment: "jsdom",
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
  ],
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-native-firebase|react-navigation|expo|@react-native-community)/)",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testMatch: [
    "<rootDir>/_test_/**/*.(spec|test).[jt]s?(x)", // Look for tests in `_test_`
  ],
};
