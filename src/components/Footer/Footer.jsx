import React from 'react';
import {Link} from 'react-router-dom';
import {HOME, DOCS, TUTORIAL} from '../../routes/Router.routes';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <Link to={HOME.path} className='logo'>WEBRIX</Link>
        <div className='routes'>
            <Link to={DOCS.path}>{DOCS.name}</Link>
            <Link to={TUTORIAL.path}>{TUTORIAL.name}</Link>
        </div>
    </footer>
);

export default Footer;