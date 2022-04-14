const {
  useBabelRc,
  removeModuleScopePlugin,
  override,
  addWebpackResolve
} = require("customize-cra")

module.exports = override(addWebpackResolve({
  fallback: {
    crypto: require.resolve("crypto-browserify"),
    buffer: require.resolve("buffer/"),
    stream: require.resolve("stream-browserify")
  }
}), useBabelRc(), removeModuleScopePlugin())
