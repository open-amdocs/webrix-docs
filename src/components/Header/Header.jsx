import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, DOCS, TUTORIAL} from '../../routes/Router.routes';
import './Header.scss';

const Header = () => (
    <header id='header'>
        <Link to={HOME.path} className='logo'>WEBRIX</Link>
        <div className='routes'>
            <Link to={DOCS.path} className='asdas'>{DOCS.name}</Link>
            <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
        </div>
    </header>
);

export default Header;