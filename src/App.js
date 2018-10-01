import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import indexRoutes from './routes/Index';

import './sass/style.scss';

const hist = createBrowserHistory();

const App = () => {
    console.log('%cInterest to build Website? Visit:\nhttps://rinaldydwii.com/','color: red; font-size: 32px;');
    return (
        <Router history={hist}>
            <Switch>
                {
                    indexRoutes.map((prop, key) => {
                        return <Route path={ prop.path } key={ key } component={ prop.component } />;
                    })
                }
            </Switch>
        </Router>
    );
};

export default App;