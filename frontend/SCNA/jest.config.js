module.exports = {
    preset: 'react-native',
    transform: {
      '^.+\.[jt]sx?$': 'babel-jest', // Gebruik babel-jest om JavaScript en TypeScript te transpilen
    },
    collectCoverage: true,
    coverageDirectory: '../coverage', // Zorg dat coverage buiten rootDir wordt opgeslagen
    coverageReporters: ['lcov', 'text'],
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
      '/*.{js,jsx,ts,tsx}', // Alle JavaScript en TypeScript bestanden in de map
      '!/nodemodules/', // Sluit node_modules uit
      '!/coverage/',     // Sluit de coverage map uit
    ],
    testMatch: [
      '/tests/*/.test.js', // Zoek tests in _tests mappen
      '*/?(.)+(spec|test).[jt]s?(x)', // Zoek tests met .test.js of .spec.js extensie
    ],
  };