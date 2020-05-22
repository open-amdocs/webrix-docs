import React, {useRef, useEffect, useCallback} from 'react';
import {Engine} from './scene';
import './FallingBricks.scss';

const FallingBricks = () => {
    const canvas = useRef();
    const engine = useRef();

    const handleOnResize = useCallback(() => {
        engine.current.resize();
    }, [engine.current]);

    useEffect(() => {
        engine.current = new Engine(canvas.current);
        window.addEventListener('resize', handleOnResize);
        return () => window.removeEventListener('resize', handleOnResize);
    }, []);

    return (
        <>
            <canvas id='scene' ref={canvas}/>
            <div className='gradient-overlay'/>
        </>
    );
}

export default FallingBricks;