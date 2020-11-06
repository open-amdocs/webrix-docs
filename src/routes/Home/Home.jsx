import React from 'react';
import logo from '../../resources/images/webrix-logo-light.png';
import FallingBricks from './components/FallingBricks/FallingBricks';
import Introduction from './sections/Introduction/Introduction';
import Features from './sections/Features/Features';
import Components from './sections/Components/Components';
import Hooks from './sections/Hooks/Hooks';
import './Home.scss';

const Home = () => (
    <>
        <div className='title'>
            <img src={logo} alt='Webrix logo' loading='lazy'/>
            <h2>Powerful building blocks for React-based web applications</h2>
        </div>
        <FallingBricks/>
        <Introduction/>
        <Features/>
        <Components/>
        <Hooks/>
    </>
);

export default Home;