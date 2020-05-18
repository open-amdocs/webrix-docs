import {Camera, Ground, Light, Pipeline, Shadows, Brick} from './index';
import {MAX_BRICKS, BRICK_DROP_INTERVAL} from "../FallingBricks.constants";

const Scene = engine => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Black();

    // Physics
    scene.enablePhysics(null, new BABYLON.OimoJSPlugin());

    return scene;
};

// createScene(...):
export default engine => {
    const scene = new Scene(engine);
    const camera = new Camera(scene);
    const light = new Light(scene);
    const shadows = new Shadows(scene, light);
    const pipeline = new Pipeline(scene);
    const ground = new Ground(scene);

    // Add bricks every few seconds
    let prev = Date.now();
    const bricks = [];
    BABYLON.SceneLoader.ImportMesh('', 'resources/models/', 'bricks.obj', scene, meshes => {
        meshes.forEach(mesh => mesh.setEnabled(false)); // Hide the original mesh
        scene.onBeforeRenderObservable.add(() => {
            if (Date.now() - prev > BRICK_DROP_INTERVAL) {
                prev = Date.now();
                const brick = new Brick(scene, meshes[Math.floor(Math.random() * meshes.length)]);
                shadows.addShadowCaster(brick);
                bricks.push(brick);
                if (bricks.length > MAX_BRICKS) {
                    bricks.shift().dispose();
                }
            }
        });
    });

    return scene;
};