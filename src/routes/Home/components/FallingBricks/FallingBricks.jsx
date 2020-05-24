import React, {useRef, useEffect, useCallback} from 'react';
import Worker from 'worker-loader!./FallingBricks.worker';
import './FallingBricks.scss';

/**
 * This component spawns a webworker for rendering the 3D scene in a thread
 * parallel to the main thread, to avoid blocking it and improve performance.
 */
const FallingBricks = () => {
    const canvas = useRef();
    const worker = useRef(new Worker());

    const handleOnResize = useCallback(() => {
        const {clientWidth, clientHeight} = canvas.current;
        worker.current.postMessage({type: 'resize', size: {width: clientWidth, height: clientHeight}});
    }, [worker.current]);

    useEffect(() => {
        canvas.current.width = canvas.current.clientWidth;
        canvas.current.height = canvas.current.clientHeight;
        const offscreen = canvas.current.transferControlToOffscreen();
        worker.current.postMessage({type: 'canvas', canvas: offscreen}, [offscreen]);
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