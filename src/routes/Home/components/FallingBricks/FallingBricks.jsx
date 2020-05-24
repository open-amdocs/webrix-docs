import React, {useRef, useEffect, useCallback} from 'react';
import './FallingBricks.scss';

const oscSupported = canvas => (
    'OffscreenCanvas' in window && 'transferControlToOffscreen' in canvas
);

/**
 * This component spawns a webworker for rendering the 3D scene in a thread
 * parallel to the main thread, to avoid blocking it and improve performance.
 */
const FallingBricks = () => {
    const canvas = useRef();
    const engine = useRef();
    const worker = useRef(new Worker('./FallingBricks.worker', {type: 'module'}));

    const handleOnResize = useCallback(() => {
        if (oscSupported(canvas.current)) {
            const {clientWidth, clientHeight} = canvas.current;
            worker.current.postMessage({type: 'resize', size: {width: clientWidth, height: clientHeight}});
        } else {
            engine.current.resize();
        }
    }, [worker.current]);

    useEffect(() => {
        if (oscSupported(canvas.current)) {
            canvas.current.width = canvas.current.clientWidth;
            canvas.current.height = canvas.current.clientHeight;
            const offscreen = canvas.current.transferControlToOffscreen();
            worker.current.postMessage({type: 'canvas', canvas: offscreen}, [offscreen]);
        } else {
            import('./scene').then(({Engine}) => {
                engine.current = new Engine(canvas.current);
            });
        }
        window.addEventListener('resize', handleOnResize);
        return () => {
            window.removeEventListener('resize', handleOnResize);
            worker.current.terminate();
        }
    }, []);

    return (
        <>
            <canvas id='scene' ref={canvas}/>
            <div className='gradient-overlay'/>
        </>
    );
}

export default FallingBricks;