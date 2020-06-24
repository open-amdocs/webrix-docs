import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {
    const match = useRouteMatch();
    return (
        <nav id='sidebar'>
            <ul>
                <li>
                    <div className='title'>Introduction</div>
                    <ul>
                        <li><Link to={`${match.url}/installation`}>Installation</Link></li>
                    </ul>
                </li>
                <li>
                    <div className='title'>Components</div>
                    <ul>
                        <li>
                            <Link to={`${match.url}/movable`}>Collapsible</Link>
                            <ul>
                                <li className='active'><Link to={`${match.url}/movable`}>API</Link></li>
                                <li><Link to={`${match.url}/movable`}>Examples</Link></li>
                                <li><Link to={`${match.url}/movable`}>Playground</Link></li>
                            </ul>
                        </li>
                        <li><Link to={`${match.url}/movable`}>Movable</Link></li>
                        <li><Link to={`${match.url}/movable`}>Pannable</Link></li>
                        <li><Link to={`${match.url}/movable`}>Poppable</Link></li>
                        <li><Link to={`${match.url}/movable`}>Resizable</Link></li>
                        <li><Link to={`${match.url}/movable`}>Stackable</Link></li>
                        <li><Link to={`${match.url}/movable`}>Zoomable</Link></li>
                    </ul>
                </li>
                <li>
                    <div className='title'>Hooks</div>
                    <ul>
                        <li><Link to={`${match.url}/installation`}>useBoolean</Link></li>
                        <li><Link to={`${match.url}/installation`}>useBoolean</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
