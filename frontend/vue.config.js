module.exports = {
    
    // views: {
    //   'about': {
    //     entry: '../frontend/public/index.js',
    //     template: '../frontend/public/index.html',
    //     title: 'About',
    //   }
    // },
  
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