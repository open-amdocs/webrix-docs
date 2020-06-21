import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    const match = useRouteMatch();
    return (
        <ul id='sidebar'>
            <li><Link to={`${match.url}/installation`}>Installation</Link></li>
            <li><Link to={`${match.url}/movable`}>Movable</Link></li>
        </ul>
    );
};

export default Sidebar;
