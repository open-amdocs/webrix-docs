import React, {useCallback, useState} from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import pkg from '../../../package.json';
import {HOME, DOCS, TUTORIAL, PLAYGROUND} from '../../routes/Router.routes';
import logo from '../../resources/images/webrix-logo-text-dark.png';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import './Header.scss';

const Header = () => {
    const [active, setActive] = useState(false);
    const handleOnClick = useCallback(() => {
        setActive(!active);
    }, [setActive, active]);
    return (
        <header id='header'>
            <Link to={HOME.path} className='logo'>
                <img src={logo} alt='Webrix logo' loading='lazy'/>
            </Link>
            <nav className={classNames('menu', {active})}>
                <Link to={DOCS.path}>{DOCS.name}</Link>
                <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
                <Link to={PLAYGROUND.path}>{PLAYGROUND.name}</Link>
                <Link to={TUTORIAL.path}>Examples</Link>
            </nav>
            <div className='version'>v{pkg.dependencies.webrix}</div>
            <HamburgerMenu active={active} onClick={handleOnClick}/>
        </header>
    );
}

export default Header;