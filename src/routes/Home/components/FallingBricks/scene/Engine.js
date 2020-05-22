import {Engine} from '@babylonjs/core/Engines/engine';
import {createScene} from './index';

export default canvas => {
    const engine = new Engine(canvas, true);
    const scene = createScene(engine);

    // run the render loop
    engine.runRenderLoop(() => {
        scene.render();
    });

    return engine;
};