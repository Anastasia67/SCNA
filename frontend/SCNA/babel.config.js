module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "module:metro-react-native-babel-preset",
        {
          useTransformReactJSXExperimental: true, // Correct geplaatst als optie binnen de preset
        },
      ],
      "babel-preset-expo",
    ],
  };
};
