import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cls from 'classnames';
import ROUTES from '../../Blog.routes';
import './Sidebar.scss';

const Sidebar = () => {
    const {pathname} = useLocation();
    return (
        <nav className='blog-sidebar'>
            <div className='blog-title'>Recent Posts:</div>
            {ROUTES.map(({path, title}, i) => (
                <Link key={i} to={{pathname: path}} className={cls('blog-link', pathname === path && 'active')}>{title}</Link>
            ))}
        </nav>
    );
}

export default Sidebar;