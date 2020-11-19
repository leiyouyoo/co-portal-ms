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

PROXY_CONFIG['/apps/crm'] = {
    target: 'http://localhost:3003',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/apps/frm'] = {
    target: 'http://localhost:3004',
    secure: false,
    changeOrigin: false
};

PROXY_CONFIG['/apps/fam'] = {
    target: 'http://localhost:3005',
    secure: false,
    changeOrigin: false
};


PROXY_CONFIG['/apps/wf'] = {
    target: 'http://localhost:3006',
    secure: false,
    changeOrigin: false
};
module.exports = PROXY_CONFIG;
