/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  devServer: {
    host: 'localhost',
    hot: true,
  },
  productionSourceMap: false,

  configureWebpack: {
    devtool: 'source-map',
  }
};
