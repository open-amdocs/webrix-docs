import React from 'react';
import {FaNpm, FaGithub, FaCodeBranch, FaBug, FaCode, FaTag, FaTwitter, FaCodepen, FaBalanceScale, FaHandsHelping} from 'react-icons/fa';
import components from 'content/docs/components/components.routes';
import hooks from 'content/docs/hooks/hooks.routes';
import {Container} from '../';
import Logo from './Components/Logo';
import Copyright from './Components/Copyright';
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
            <li><a href='https://unpkg.com/browse/webrix@latest/'>UNPKG</a></li>
            <li><a href='https://www.skypack.dev/view/webrix/'>Skypack</a></li>
            <li><a href='https://www.jsdelivr.com/package/npm/webrix'>JSDELIVR</a></li>
        </ul>
    </div>
);

const Community = () => (
    <div className='links'>
        <h4>COMMUNITY</h4>
        <ul>
            <li><FaTwitter/><a href='https://twitter.com/search?q=%23webrixjs'>Tweets</a></li>
            <li><FaCodepen/><a href='https://codepen.io/tag/webrix'>Pens</a></li>
            <li><FaGithub/><a href='https://github.com/open-amdocs/webrix'>Source Code (Webrix)</a></li>
            <li><FaGithub/><a href='https://github.com/open-amdocs/webrix-docs'>Source Code (Docs)</a></li>
            <li><FaTag/><a href='https://github.com/open-amdocs/webrix/releases'>Changelog</a></li>
            <li><FaNpm/><a href='https://www.npmjs.com/package/webrix'>NPM</a></li>
            <li><FaCodeBranch/><a href='https://stackshare.io/webrix-js'>Stackshare</a></li>
            <li><FaHandsHelping/><a href='https://github.com/open-amdocs/webrix/blob/master/CONTRIBUTING.md'>Contributing</a></li>
            <li><FaBug/><a href='https://github.com/open-amdocs/webrix/issues'>Bugs</a></li>
            <li><FaBalanceScale/><a href='https://github.com/open-amdocs/webrix/blob/master/LICENSE'>License</a></li>
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