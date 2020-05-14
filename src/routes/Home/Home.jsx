import React from 'react';
import FallingBricks from './components/FallingBricks/FallingBricks';
import {Button} from '../../components';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className='title'>
                <h1>WEBRIX</h1>
                <h2>Powerful building blocks for React-based web applications</h2>
                <div className='actions'>
                    <Button>Get Started</Button>
                    <Button type={Button.Types.SECONDARY}>Documentation</Button>
                </div>
            </div>
            <FallingBricks/>
        </>
    )
};

export default Home;