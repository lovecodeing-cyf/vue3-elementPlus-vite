module.exports = {
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      https: false,
      hotOnly: false,
      // 代理成 http://localhost:8080
      proxy: { // 配置跨域
        '/api': {
            target: 'http://imissu.herokuapp.com/api/',
            ws: true,
            changOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
      },
      before: app => { }
    }
  }