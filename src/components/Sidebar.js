import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import brandLogo from '../assets/puza-logo-white-transparent.svg';

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <div className="brand-logo">
                <a href="/">
                    <div className="brand-logo-img">
                        <img src={brandLogo} alt="Puza Brand Logo"/>
                    </div>
                </a>
            </div>
            <div className="nav-wrapper">
                <nav className="nav">
                    <ul className="nav">
                        { props.routes.map((route, key) => {
                            let submenu = ''
                            if (route.redirect) return null;
                            if (route.submenu) 
                                submenu = (
                                    <div className="collapse">
                                        <ul className="nav">
                                            {
                                                route.submenu.map((submenuRoute, key) => {
                                                    return (
                                                        <li key={key}>
                                                            <a className="nav-link" href={submenuRoute.path}>
                                                                <span>{submenuRoute.name}</span>
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                )
                            return (
                                <li key={key} className={ props.location.pathname == '/' && route.path == '/' ? "active" : props.location.pathname.indexOf(route.path) > -1 && route.path != '/' ? "active" : "" }>
                                    <NavLink className="nav-link" to={route.path} activeClassName="active">
                                        <FontAwesomeIcon icon={route.icon} />
                                        <span>{route.name}{route.submenu ? <FontAwesomeIcon icon={faCaretDown} /> : ''}</span>
                                    </NavLink>
                                    {submenu}
                                </li>
                            )
                        }) }
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar;