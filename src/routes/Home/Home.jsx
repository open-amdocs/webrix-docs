import React from 'react';
import {Helmet} from 'react-helmet';
import {Logo} from 'components';
import FallingBricks from './components/FallingBricks/FallingBricks';
import Introduction from './sections/Introduction/Introduction';
import Examples from './sections/Examples/Examples';
import Features from './sections/Features/Features';
import Components from './sections/Components/Components';
import Hooks from './sections/Hooks/Hooks';
import './Home.scss';

const Home = () => (
    <>
        <Helmet>
            <title>Webrix.js</title>
            <meta name='description' content='Powerful building blocks for React-based web applications'/>
        </Helmet>
        <div className='title'>
            <Logo.Icon/>
            <Logo.Text/>
            <h2>Powerful building blocks for React-based web applications</h2>
        </div>
        <FallingBricks/>
        <Introduction/>
        <Examples/>
        <Features/>
        <Components/>
        <Hooks/>
    </>
);

export default Home;