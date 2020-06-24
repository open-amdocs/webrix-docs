import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    const match = useRouteMatch();
    return (
        <nav id='sidebar'>
            <ul>
                <li><Link to={`${match.url}/installation`}>Installation</Link></li>
                <li><Link to={`${match.url}/movable`}>Movable</Link></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
