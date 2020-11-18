import {Link, useLocation} from 'react-router-dom';
import React from 'react';
import cls from 'classnames';
import ITEMS from '../../Examples.routes';
import './Sidebar.scss';

const Sidebar = () => {
    const {pathname} = useLocation();
    return (
        <nav>
            <ul>
                {ITEMS.map(({title, path, tags}) => (
                    <li key={title} className={cls({active: pathname === path})}>
                        <Link to={path}>
                            {title}
                            <div className='tags'>
                                {tags.map(tag => (
                                    <div key={tag} className='tag'>{tag}</div>
                                ))}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Sidebar;