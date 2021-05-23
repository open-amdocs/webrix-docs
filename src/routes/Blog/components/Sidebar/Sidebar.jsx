import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cls from 'classnames';
import ROUTES from '../../Blog.routes';
import './Sidebar.scss';

const Sidebar = () => {
    const {pathname} = useLocation();
    console.log(pathname);
    return (
        <nav className='blog-sidebar'>
            <div className='blog-title'>Recent Posts:</div>
            {ROUTES.map(({fileName, title}, i) => (
                <Link key={i} to={{pathname: `/blog/post/${fileName}`}} className={cls('blog-link', pathname === `/blog/post/${fileName}` && 'active')}>{title}</Link>
            ))}
        </nav>
    );
}

export default Sidebar;