import React from 'react';
import {Link} from 'react-router-dom';
import {FaNpm, FaGithub, FaCodeBranch, FaBug, FaStickyNote} from 'react-icons/fa';
import {HOME} from '../../routes/Router.routes';
import {Container, Divider} from '../';
import amdocsLogo from '../../resources/images/amdocs-logo-light-small.png';
import webrixLogo from '../../resources/images/webrix-logo-text-light.png';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <div className='logo-container'>
            <div className='graphic'/>
            <Link to={HOME.path}>
                <img src={webrixLogo} alt='Webrix logo' height='30px' loading='lazy'/>
            </Link>
            <Divider/>
        </div>
        <Container>
            <div className='copyright-notice'>
                <a href='https://amdocs.com'>
                    <img src={amdocsLogo} alt='Amdocs Corp. Logo' loading='lazy'/>
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
                    <li><FaGithub/><a href='https://github.com/open-amdocs/webrix'>GitHub</a></li>
                    <li><FaNpm/><a href='https://www.npmjs.com/package/webrix'>NPM</a></li>
                    <li><FaCodeBranch/><a href='https://github.com/open-amdocs/webrix/blob/master/CONTRIBUTING.md'>Contributing</a></li>
                    <li><FaStickyNote/><a href='#'>Code of Conduct</a></li>
                    <li><FaBug/><a href='https://github.com/open-amdocs/webrix/issues'>Bugs</a></li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;