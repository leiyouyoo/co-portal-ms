const PROXY_CONFIG = {};

PROXY_CONFIG['/static/app3'] = {
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: false
};


module.exports = PROXY_CONFIG;
