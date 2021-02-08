import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import cls from 'classnames';
import pkg from '../../../package.json';
import {HOME, DOCS, TUTORIAL, PLAYGROUND, EXAMPLES} from '../../routes/Router.routes';
import logo from '../../resources/images/webrix-logo-text-dark.png';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import './Header.scss';

const Header = () => {
    const {pathname} = useLocation();
    const current = pathname.split('/')[1];
    return (
        <header id='header'>
            <Link to={HOME.path} className='logo'>
                <img src={logo} alt='Webrix logo' loading='lazy'/>
            </Link>
            <nav className='menu'>
                {[DOCS, TUTORIAL, PLAYGROUND, EXAMPLES].map(({name, path}) => (
                    <Link key={name} to={path} className={cls({active: current === name})}>{name}</Link>
                ))}
            </nav>
            <div className='version'>v{pkg.dependencies.webrix}</div>
            <HamburgerMenu/>
        </header>
    );
}

export default Header;