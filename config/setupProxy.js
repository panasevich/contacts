const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/lam-ui/settings.json', {
        target: 'http://localhost:3000',
    }));
};
