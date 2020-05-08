const target = 'http://127.0.0.1:9000';
// const target = 'http://10.10.19.250:9000';

module.exports = {
    // publicPath: '/', // nginx部署，nginx静态资源处理的相当于根目录部署
    publicPath: '/dist', // python tornado 部署，会加上 /dist 前缀
    devServer: {
        host: '0.0.0.0',
        https: false,
        hotOnly: false,
        // disableHostCheck: true,
        port: 8080,
        open: true,
        proxy: {
            "/access": {
                target,
                changeOrigin: true,
            },
        }
    }
};
