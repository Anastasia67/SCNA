// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      "module:metro-react-native-babel-preset", // Transpile React Native code
      "babel-preset-expo",
      "@babel/preset-react", // Enable JSX support
    ],
    plugins: [
      "@babel/plugin-transform-runtime", // Optional: Support async/await
    ],
  };
};

// [
//   "module:metro-react-native-babel-preset",
//   {
//     useTransformReactJSXExperimental: true,
//   },
// ],
