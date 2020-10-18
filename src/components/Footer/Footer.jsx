import React from 'react';
import {FaNpm, FaGithub, FaCodeBranch, FaBug, FaStickyNote} from 'react-icons/fa';
import {Container} from '../';
import Logo from './Components/Logo';
import Copyright from './Components/Copyright';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <Logo/>
        <Container>
            <Copyright/>
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