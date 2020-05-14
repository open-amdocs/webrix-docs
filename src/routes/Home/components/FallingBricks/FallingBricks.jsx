import React, {useRef, useEffect} from 'react';
import {createScene} from './scene';
import './FallingBricks.scss';

const FallingBricks = () => {
    const canvas = useRef();
    useEffect(() => {
        window.addEventListener('load', function() {
            console.log(canvas.current);
            const engine = new BABYLON.Engine(canvas.current, true);
            const scene = createScene(engine);

            // run the render loop
            engine.runRenderLoop(function () {
                scene.render();
            });

            // the canvas/window resize event handler
            window.addEventListener('resize', function () {
                engine.resize();
            });
        });
    }, []);

    return <canvas id='scene' ref={canvas}/>;
}

export default FallingBricks;