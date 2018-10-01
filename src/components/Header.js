import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <nav className="nav-bar">
            <div className="bar-left">
                <button className="button button-navbar"
                   onClick={ e => {
                       e.preventDefault();
                       props.toggleSidebar();
                    } }
                    ><FontAwesomeIcon icon={faBars} /></button>
            </div>
            <div className="bar-center">
                Home
            </div>
            <div className="bar-right">
                <button className="button button-navbar"><FontAwesomeIcon icon={faEllipsisH} /></button>
            </div>
        </nav>
    )
}

export default Header;