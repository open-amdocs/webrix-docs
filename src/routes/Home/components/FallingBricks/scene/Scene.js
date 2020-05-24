import {Color3} from '@babylonjs/core/Maths/math.color';
import {Scene as _Scene} from '@babylonjs/core/scene';
import {SceneLoader} from '@babylonjs/core/Loading/sceneLoader';
import * as OIMO from 'oimo';
import {OimoJSPlugin} from '@babylonjs/core/Physics/Plugins/oimoJSPlugin';
import {Camera, Ground, Light, Pipeline, Shadows, Brick} from './index';
import {MAX_BRICKS, BRICK_DROP_INTERVAL} from '../FallingBricks.constants';
import models from '../../../../../resources/models/bricks.obj';
import '@babylonjs/core/Lights/Shadows/shadowGeneratorSceneComponent';
import '@babylonjs/core/Physics/physicsEngineComponent';
import '@babylonjs/core/Meshes/meshBuilder';
import "@babylonjs/loaders/OBJ/objFileLoader";

const Scene = engine => {
    const scene = new _Scene(engine);
    scene.clearColor = Color3.Black();

    // Physics
    scene.enablePhysics(null, new OimoJSPlugin(undefined, OIMO));

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
    const path = location.pathname.match(__webpack_public_path__) ? models.replace(__webpack_public_path__, '') : models; // When working through a web-worker, the import path becomes relative to the script's path, not the root, so the public path may get added twice
    SceneLoader.ImportMesh('', path, '', scene, meshes => {
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