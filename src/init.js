import 'react-app-polyfill/ie11';
import '@babel/polyfill';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import 'normalize.css';


import App from 'containers/App';

import configureStore from 'store';

export const store = configureStore();
const containers = new Map();

const renderApp = (containerId) => {
    const container = document.getElementById(containerId);
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        container,
    );
    containers.set(containerId, container);
};


export const init = (containerId) => {
    renderApp(containerId);
};
