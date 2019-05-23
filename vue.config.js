module.exports = {
    devServer: {
        proxy: {
            '/proxyApi': {
                target: 'http://192.168.1.108:3000',
                changeOrigin: true,
                pathRewrite: {
                    '/proxyApi': ''
                }
            }
        }
    }
}