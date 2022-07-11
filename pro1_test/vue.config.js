module.exports = {
  lintOnSave:false,
    devServer: {
      host: "localhost",
      port: 8080, // 端口号
      proxy: {
          '/api': {
              target: `http://13.38.228.50:8088/`,
              changeOrigin: true,
              pathRewrite: {
                  '^/api' : ''
              }
          }
      }
  }

}
