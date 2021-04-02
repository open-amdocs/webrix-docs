import React from 'react';
import {FaCode, FaCog} from 'react-icons/fa';
import cls from 'classnames';
import {Link} from 'react-router-dom';
import {useVisibilityState} from 'webrix/hooks';
import introduction from 'content/docs/introduction/introduction.routes';
import components from 'content/docs/components/components.routes';
import hooks from 'content/docs/hooks/hooks.routes';
import tools from 'content/docs/tools/tools.routes';
import examples from 'routes/Examples/Examples.routes';
import Button from './Button';
import './HamburgerMenu.scss';

const Menu = ({visible, onClick}) => (
    <nav className={cls('mobile-menu', {visible})} onClick={onClick}>
        <h2><Link to='/motivation'>Motivation</Link></h2>
        <h2><Link to='/docs'>Docs</Link></h2>
        <h3>Introduction</h3>
        <ul>
            {introduction.map(({title, path, icon: Icon}) => (
                <li key={title}><Icon/><Link to={`/docs/introduction${path}`}>{title}</Link></li>
            ))}
        </ul>
        <h3>Components</h3>
        <ul>
            {components.map(({title, path, icon: Icon}) => (
                <li key={title}><Icon/><Link to={`/docs/components${path}`}>{title}</Link></li>
            ))}
        </ul>
        <h3>Hooks</h3>
        <ul>
            {hooks.map(({title, path}) => (
                <li key={title}><FaCode/><Link to={`/docs/hooks${path}`}>{title}</Link></li>
            ))}
        </ul>
        <h3>Tools</h3>
        <ul>
            {tools.map(({title, path}) => (
                <li key={title}><FaCode/><Link to={`/docs/tools${path}`}>{title}</Link></li>
            ))}
        </ul>
        <h2><Link to='/examples'>Examples</Link></h2>
        <ul>
            {examples.map(({title, path}) => (
                <li key={title}><FaCog/><Link to={`${path}`}>{title}</Link></li>
            ))}
        </ul>
    </nav>
);

const HamburgerMenu = () => {
    const {visible, toggle, hide} = useVisibilityState();
    return (
        <>
            <Button active={visible} onClick={toggle}/>
            <Menu visible={visible} onClick={hide}/>
        </>
    );
}

export default HamburgerMenu;