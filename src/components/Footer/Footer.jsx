import React from 'react';
import {FaNpm, FaGithub, FaCodeBranch, FaBug, FaCode} from 'react-icons/fa';
import {Container} from '../';
import Logo from './Components/Logo';
import Copyright from './Components/Copyright';
import components from '../../routes/Docs/content/components/components.routes';
import hooks from '../../routes/Docs/content/hooks/hooks.routes';
import './Footer.scss';

const Footer = () => (
    <footer id='footer'>
        <Logo/>
        <Container>
            <div className='links'>
                <h4>COMPONENTS</h4>
                <ul>
                    {components.map(({title, path, icon: Icon}) => (
                        <li key={title}><Icon/><a href={`/docs/components${path}`}>{title}</a></li>
                    ))}
                </ul>
            </div>
            <div className='links'>
                <h4>HOOKS</h4>
                <ul>
                    {hooks.map(({title, path}) => (
                        <li key={title}><FaCode/><a href={`/docs/hooks${path}`}>{title}</a></li>
                    ))}
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
                    <li><FaBug/><a href='https://github.com/open-amdocs/webrix/issues'>Bugs</a></li>
                </ul>
            </div>
        </Container>
        <Copyright/>
    </footer>
);

export default Footer;