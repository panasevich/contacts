if (typeof Promise === 'undefined') {
    require('promise/lib/rejection-tracking').enable(); // eslint-disable-line global-require
    window.Promise = require('promise/lib/es6-extensions.js'); // eslint-disable-line global-require
}

import('./init').then(lam => lam.init('app'));
