const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const app = express();

module.exports = function() {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:3002',
            changeOrigin: true
            // pathRewrite: {
            //     '^/api': 'http://localhost:3002', 
            // },
        })
    );
};
