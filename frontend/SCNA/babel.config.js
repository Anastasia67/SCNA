// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "module:metro-react-native-babel-preset",
        {
          useTransformReactJSXExperimental: true,
        },
      ],
      "babel-preset-expo",
      "@babel/preset-react", // Add this to handle JSX
    ],
  };
};
