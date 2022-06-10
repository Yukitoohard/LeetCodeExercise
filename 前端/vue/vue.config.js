module.exports = {
    devServer: {
        proxy: {
            '/api' : {
                target: 'url',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api/old-path' : '^/api/new-path'
                }
            }
        }
    }
}