import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import ROUTES from '../../Docs.routes';
import './Sidebar.scss';

const Sidebar = () => {
    const match = useRouteMatch();
    return (
        <nav id='sidebar'>
            <ul>
                {ROUTES.map((section, i) => (
                    <li key={i}>
                        <div className='title'>{section.title}</div>
                        <ul>
                            {section.routes.map((page, i) => (
                                <li key={i}>
                                    <Link to={`${match.url}${section.path}${page.path}`}>{page.title}</Link>
                                    <ul>
                                        <li className='active'><Link to={`${match.url}/movable`}>API</Link></li>
                                        <li><Link to={`${match.url}/movable`}>Examples</Link></li>
                                        <li><Link to={`${match.url}/movable`}>Playground</Link></li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
                <li>
                    <div className='title'>Test</div>
                    <ul>
                        <li>
                            <Link to={`${match.url}/movable`}>Collapsible</Link>
                            <ul>
                                <li className='active'><Link to={`${match.url}/movable`}>API</Link></li>
                                <li><Link to={`${match.url}/movable`}>Examples</Link></li>
                                <li><Link to={`${match.url}/movable`}>Playground</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
