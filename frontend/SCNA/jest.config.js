//jest.config.js
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transpile JS, JSX, TS, TSX files using Babel
  },
  testEnvironment: "node",
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|@react-native|@react-native-firebase|react-navigation|expo|@react-native-community)/)", // Add Firebase to the whitelist
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  testMatch: ["<rootDir>/_test_/**/*.(spec|test).[jt]s?(x)"],
  collectCoverage: true,
  coverageDirectory: "../coverage",
  coverageReporters: ["lcov", "text"],
};
