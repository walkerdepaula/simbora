module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'localhost:8080',
        ws: true,
        changeOrigin: true
      }
    }
  }
}