// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')


/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname)


// Add AI model file extensions to react-native-executorch
if (!Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts = []
}
if (Array.isArray(config.resolver.assetExts)) {
  config.resolver.assetExts.push('pte')
  config.resolver.assetExts.push('bin')
}


module.exports = config
