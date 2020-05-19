import React, {useRef, useEffect, useState, useCallback} from 'react';
import {Engine} from './scene';
import './FallingBricks.scss';

const FallingBricks = () => {
    const canvas = useRef();
    const engine = useRef();
    const [loaded, setLoaded] = useState(!!BABYLON);

    const handleOnResize = useCallback(() => {
        engine.current.resize();
    }, [engine.current]);

    useEffect(() => {
        if (loaded) {
            engine.current = new Engine(canvas.current);
            window.addEventListener('resize', handleOnResize);
            return () => window.removeEventListener('resize', handleOnResize);
        }
    }, [loaded]);

    useEffect(() => {
        window.addEventListener('load', () => setLoaded(true));
    }, []);

    return (
        <>
            <canvas id='scene' ref={canvas}/>
            <div className='gradient-overlay'/>
        </>
    );
}

export default FallingBricks;