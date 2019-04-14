module.exports = {
    devServer: {
      proxy: {
        '/socket.io': {
          target: 'http://localhost:8081/',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }