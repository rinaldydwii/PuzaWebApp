import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import indexRoutes from 'routes/index';

import './sass/style.scss';

const hist = createBrowserHistory();

const Home = () => {
    return (
        <div>
            Hello World!<br/>
            This is Progressive Web Apps 😃
        </div>
    )
}

const App = () => {
    console.log('%cInterest to build Website? Visit:\nhttps://rinaldydwii.com/','color: red; font-size: 32px;');
    return (
        <Router history={hist}>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </Router>
    );
};

export default App;