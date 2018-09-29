import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';

import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

// const store = configureStore();

const render = (Component) => {
    ReactDOM.render(
        // <Provider store={store}>
            <Component />,
        // </Provider>,
        document.getElementById('root')
    );
    registerServiceWorker();  // Runs register() as default function
};

render(App);

if (module.hot) module.hot.accept('./App', () => render(App));