module.exports = {
  publicPath: "./",
  lintOnSave: false,
  devServer: {
    before: require('./mock/index.js'),//引入mock/index.js
    proxy: {
      '/dxs/mtapi': {
        target: "http://10.0.0.11",
        ws: true,
        changeOrigin: true,
      }
    }
  }
}
