module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}