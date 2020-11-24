import React from 'react';
import {FaNpm, FaGithub, FaCodeBranch, FaBug, FaCode} from 'react-icons/fa';
import {Container} from '../';
import Logo from './Components/Logo';
import Copyright from './Components/Copyright';
import components from '../../routes/Docs/content/components/components.routes';
import hooks from '../../routes/Docs/content/hooks/hooks.routes';
import './Footer.scss';

const Components = () => (
    <div className='links'>
        <h4>COMPONENTS</h4>
        <ul>
            {components.map(({title, path, icon: Icon}) => (
                <li key={title}><Icon/><a href={`/docs/components${path}`}>{title}</a></li>
            ))}
        </ul>
    </div>
);

const Hooks = () => (
    <div className='links'>
        <h4>HOOKS</h4>
        <ul>
            {hooks.map(({title, path}) => (
                <li key={title}><FaCode/><a href={`/docs/hooks${path}`}>{title}</a></li>
            ))}
        </ul>
    </div>
);

const CDN = () => (
    <div className='links'>
        <h4>CDN</h4>
        <ul>
            <li><a href='https://unpkg.com/browse/webrix@1.0.0/'>UNPKG</a></li>
            <li><a href='https://www.skypack.dev/view/webrix/'>Skypack</a></li>
            <li><a href='https://www.jsdelivr.com/package/npm/webrix'>JSDELIVR</a></li>
        </ul>
    </div>
);

const Community = () => (
    <div className='links'>
        <h4>COMMUNITY</h4>
        <ul>
            <li><FaGithub/><a href='https://github.com/open-amdocs/webrix'>GitHub</a></li>
            <li><FaNpm/><a href='https://www.npmjs.com/package/webrix'>NPM</a></li>
            <li><FaCodeBranch/><a href='https://github.com/open-amdocs/webrix/blob/master/CONTRIBUTING.md'>Contributing</a></li>
            <li><FaBug/><a href='https://github.com/open-amdocs/webrix/issues'>Bugs</a></li>
        </ul>
    </div>
);

const Footer = () => (
    <footer id='footer'>
        <Logo/>
        <Container>
            <Components/>
            <Hooks/>
            <CDN/>
            <Community/>
        </Container>
        <Copyright/>
    </footer>
);

export default Footer;