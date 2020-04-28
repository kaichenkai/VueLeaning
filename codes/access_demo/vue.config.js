const target = 'http://10.10.19.250:9000';

module.exports = {
    // publicPath: '/', // nginx部署，nginx静态资源处理的相当于根目录部署
    devServer: {
        host: '0.0.0.0',
        https: false,
        hotOnly: false,
        // disableHostCheck: true,
        port: 8080,
        open: true,
        proxy: {
            "/": {
                target,
                changeOrigin: true,
            },
        }
    }
};

