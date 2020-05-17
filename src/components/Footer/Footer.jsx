import React from 'react';
import {Link} from 'react-router-dom';
import {HOME} from '../../routes/Router.routes';
import {Container} from '../';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <div className='logo-container'>
            <Link to={HOME.path}>WEBRIX</Link>
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
                    <li>Movable</li>
                    <li>Stackable</li>
                    <li>Poppable</li>
                    <li>Resizable</li>
                    <li>Pannable</li>
                    <li>Scrollable</li>
                </ul>
            </div>
            <div className='links'>
                <h4>COMMUNITY</h4>
                <ul>
                    <li>GitHub</li>
                    <li>Contributing</li>
                    <li>Code of Conduct</li>
                </ul>
            </div>
        </Container>
    </footer>
);

export default Footer;