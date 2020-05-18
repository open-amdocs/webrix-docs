import React from 'react';
import {Link} from 'react-router-dom';
import {HOME} from '../../routes/Router.routes';
import {Container} from '../';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <div className='logo-container'>
            <div className='graphic'/>
            <Link to={HOME.path}>
                <img src='resources/images/webrix-logo-text-light.png' alt='Webrix logo' height='30px'/>
            </Link>
        </div>
        <Container>
            <div className='copyright-notice'>
                <a href='https://amdocs.com'>
                    <img src='./resources/images/amdocs-logo-light-small.png' alt='Amdocs Corp. Logo'/>
                </a>
                <p>Copyright © 2020 Amdocs Corp.</p>
            </div>
            <div className='links'>
                <h4>ELEMENTS</h4>
                <ul>
                    <li><a href='#'>Movable</a></li>
                    <li><a href='#'>Stackable</a></li>
                    <li><a href='#'>Poppable</a></li>
                    <li><a href='#'>Resizable</a></li>
                    <li><a href='#'>Pannable</a></li>
                    <li><a href='#'>Scrollable</a></li>
                </ul>
            </div>
            <div className='links'>
                <h4>TRY IT</h4>
                <ul>
                    <li><a href='#'>Playground</a></li>
                    <li><a href='#'>Examples</a></li>
                </ul>
            </div>
            <div className='links'>
                <h4>COMMUNITY</h4>
                <ul>
                    <li><a href='https://github.com/open-amdocs/webrix'>GitHub</a></li>
                    <li><a href='https://www.npmjs.com/package/webrix'>NPM</a></li>
                    <li><a href='https://github.com/open-amdocs/webrix/blob/master/CONTRIBUTING.md'>Contributing</a></li>
                    <li><a href='#'>Code of Conduct</a></li>
                    <li><a href='https://github.com/open-amdocs/webrix/issues'>Bugs</a></li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;