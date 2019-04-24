let cookie = "connect.sid=s%3A5Zf60I4T4dyX_MlbZmZZl5PDz18UnMa0.pGO%2FdkCxQ7gEVpqeOVGfQ3a2LHUBtKUPICmBQYUlyoM; io=SVQYLWgMVXXwVaQKAAAA"

module.exports = {
    devServer: {
      proxy: {
        '/socket.io': {
          target: 'http://localhost:8081/',
          ws: true,
          changeOrigin: true,
          onProxyReq: (proxyReq) => {
            proxyReq.setHeader('Cookie', cookie);
          }
        },
        '/api': {
          target: 'http://localhost:8081/',
          changeOrigin: true,
          onProxyReq: (proxyReq) => {
            proxyReq.setHeader('Cookie', cookie);
          }
        },
        '/auth': {
          target: 'http://localhost:8081/',
          changeOrigin: true,
          onProxyReq: (proxyReq) => {
            proxyReq.setHeader('Cookie', cookie);
          }
        }
      }
    }
  }