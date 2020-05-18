import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, DOCS, TUTORIAL} from '../../routes/Router.routes';
import './Header.scss';

const Header = () => (
    <header id='header'>
        <Link to={HOME.path} className='logo'>
            <img src='resources/images/webrix-logo-text-light.png' alt='Webrix logo'/>
        </Link>
        <div className='routes'>
            <Link to={DOCS.path}>{DOCS.name}</Link>
            <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
        </div>
        <div className='version'>v1.0.0</div>
    </header>
);

export default Header;