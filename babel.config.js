module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // module alias
    ["module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@": ["./src"],
          "@assets": ["./assets"],
        },
      }],
    'react-native-reanimated/plugin'
  ]
};
