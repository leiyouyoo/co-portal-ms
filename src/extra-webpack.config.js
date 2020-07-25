const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const package = require('../package.json');

module.exports = {
    optimization: {
        runtimeChunk: false
    },
    plugins: [new webpack.DefinePlugin({
        "process.env.APP_VERSION": JSON.stringify(package.version),
        "process.env.APP_RELEASEDATE": JSON.stringify(new Date())
  }),new WebpackAssetsManifest() ]
};
