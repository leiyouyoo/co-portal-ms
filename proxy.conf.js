const PROXY_CONFIG = {};

PROXY_CONFIG['/apps/platform'] = {
    target: 'http://localhost:3001',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/apps/fcm'] = {
    target: 'http://localhost:3002',
    secure: false,
    changeOrigin: false
};


module.exports = PROXY_CONFIG;
