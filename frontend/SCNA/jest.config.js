module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transpile JavaScript and TypeScript
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
    "node_modules/(?!(react-native|react|@react-native|@react-native-firebase)/)",
  ],
  testMatch: [
    "<rootDir>/_test_/**/*.(spec|test).[jt]s?(x)", // Look for tests in `_test_`
  ],
  moduleNameMapper: {
    "@react-native-firebase/auth":
      "<rootDir>/_mocks_/@react-native-firebase/auth.js",
  },
};
