import React from 'react';
import FallingBricks from './components/FallingBricks/FallingBricks';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className='title'>
                <h1>WEBRIX</h1>
                <h2>Powerful building blocks for React-based web applications</h2>
            </div>
            <FallingBricks/>
        </>
    )
};

export default Home;