import React from 'react';
import Scene from './components/Scene/Scene';
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className='title'>
                <h1>WEBRIX</h1>
                <h2>Powerful building blocks for React-based web applications</h2>
            </div>
            <Scene/>
        </>
    )
};

export default Home;