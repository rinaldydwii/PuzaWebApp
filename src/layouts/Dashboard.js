import React from 'react';

import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

import DashboardRoutes from '../routes/Dashboard';

export default class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            navopen: false,
        };
        this.handleNav = this.handleNav.bind();
    }
    handleNav = () => {
        let navopen = !this.state.navopen;
        this.setState({navopen: navopen});
        let elemClass = document.getElementsByTagName('body')[0].classList
        this.state.navopen ? elemClass.remove('nav-open') : elemClass.add('nav-open');
    }
    render() {
        return (
            <div className="container">
                <Sidebar {...this.props} routes={DashboardRoutes} />
                <div className="main-panel">
                    <Header toggleSidebar={this.handleNav} />
                </div>
            </div>
        )
    }
}