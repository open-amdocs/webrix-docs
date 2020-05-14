import {createScene} from './index';

export default canvas => {
    const engine = new BABYLON.Engine(canvas, true);
    const scene = createScene(engine);

    // run the render loop
    engine.runRenderLoop(() => {
        scene.render();
    });

    return engine;
};