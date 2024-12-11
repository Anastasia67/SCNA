module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

module.exports = {
  preset: 'module:metro-react-native-babel-preset', // Belangrijk voor React Native,
};
