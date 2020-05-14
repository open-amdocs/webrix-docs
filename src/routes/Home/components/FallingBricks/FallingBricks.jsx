import React, {useRef, useEffect, useState} from 'react';
import {Engine} from './scene';
import './FallingBricks.scss';

const FallingBricks = () => {
    const canvas = useRef();
    const [loaded, setLoaded] = useState(!!BABYLON);

    useEffect(() => {
        if (loaded) {
            const engine = new Engine(canvas.current);
            window.addEventListener('resize',  engine.resize);
            return () => window.removeEventListener('resize', engine.resize);
        }
    }, [loaded]);

    useEffect(() => {
        window.addEventListener('load', () => setLoaded(true));
    }, []);

    return <canvas id='scene' ref={canvas}/>;
}

export default FallingBricks;