import {Link} from 'react-router-dom';
import React from 'react';
import ITEMS from './Sidebar.items';
import './Sidebar.scss';

const Sidebar = () => (
    <nav>
        <ul>
            {ITEMS.map(({title, path, tags}) => (
                <li key={title}>
                    <Link to={path}>{title}</Link>
                    <div className='tags'>
                        {tags.map(tag => (
                            <div key={tag} className='tag'>{tag}</div>
                        ))}
                    </div>
                </li>
            ))}
        </ul>
    </nav>
);

export default Sidebar;