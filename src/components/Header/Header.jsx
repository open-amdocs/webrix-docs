import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FaGithub} from 'react-icons/fa';
import cls from 'classnames';
import pkg from '../../../package.json';
import {HOME, DOCS, MOTIVATION, EXAMPLES} from '../../routes/Router.routes';
import logo from '../../resources/images/webrix-logo-text-dark.png';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import './Header.scss';

const Header = () => {
    const {pathname} = useLocation();
    const current = pathname.split('/')[1];
    return (
        <header id='header'>
            <Link to={HOME.path} className='logo'>
                <img src={logo} alt='Webrix logo' width='140' height='20' loading='lazy'/>
            </Link>
            <nav className='menu'>
                {[DOCS, MOTIVATION, EXAMPLES].map(({name, path}) => (
                    <Link key={name} to={path} className={cls({active: current === name})}>{name}</Link>
                ))}
            </nav>
            <a href='https://github.com/open-amdocs/webrix/releases' className='version'>v{pkg.dependencies.webrix}</a>
            <a href='https://github.com/open-amdocs/webrix/' className='github-link'><FaGithub/></a>
            <HamburgerMenu/>
        </header>
    );
}

export default Header;