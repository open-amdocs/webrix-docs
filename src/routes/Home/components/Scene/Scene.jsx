import React, {useRef, useEffect} from 'react';
import './Scene.scss';

const createScene = (engine, canvas) => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Green();

    // Camera
    const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0, 0, -20), scene);
    camera.attachControl(canvas, true);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.setTarget(new BABYLON.Vector3(0, 0, 0));

    // Light
    const light = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(0.2, -1, 0), scene);
    light.position = new BABYLON.Vector3(0, 80, 0);

    // Shadows
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.useKernelBlur = true;
    shadowGenerator.blurKernel = 2;

    // Physics
    // scene.enablePhysics(null, new BABYLON.CannonJSPlugin());
    scene.enablePhysics(null, new BABYLON.OimoJSPlugin());

    // Fog
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.03;

    // DOF (see https://www.babylonjs-playground.com/#8F5HYV#9)
    const pipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
    pipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
    pipeline.depthOfFieldEnabled = true;
    pipeline.depthOfField.focalLength = 100;
    pipeline.depthOfField.fStop = 7;
    pipeline.depthOfField.focusDistance = 2250;
    pipeline.samples = 4; // Antialiasing

    // Playground
    const ground = BABYLON.Mesh.CreateBox("Ground", 1, scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;

    const border0 = BABYLON.Mesh.CreateBox("border0", 1, scene);
    border0.scaling = new BABYLON.Vector3(1, 100, 100);
    border0.position.y = -5.0;
    border0.position.x = -50.0;
    border0.checkCollisions = true;

    const border1 = BABYLON.Mesh.CreateBox("border1", 1, scene);
    border1.scaling = new BABYLON.Vector3(1, 100, 100);
    border1.position.y = -5.0;
    border1.position.x = 50.0;
    border1.checkCollisions = true;

    const border2 = BABYLON.Mesh.CreateBox("border2", 1, scene);
    border2.scaling = new BABYLON.Vector3(100, 100, 1);
    border2.position.y = -5.0;
    border2.position.z = 50.0;
    border2.checkCollisions = true;

    const border3 = BABYLON.Mesh.CreateBox("border3", 1, scene);
    border3.scaling = new BABYLON.Vector3(100, 100, 1);
    border3.position.y = -5.0;
    border3.position.z = -50.0;
    border3.checkCollisions = true;

    const groundMat = new BABYLON.StandardMaterial("groundMat", scene);
    groundMat.diffuseColor = new BABYLON.Color3(0, 0.05, 0.12);
    groundMat.emissiveColor = new BABYLON.Color3(0, 0.11, 0.22);
    groundMat.backFaceCulling = false;
    ground.material = groundMat;
    border0.material = groundMat;
    border1.material = groundMat;
    border2.material = groundMat;
    border3.material = groundMat;
    ground.receiveShadows = true;

    const materialBrick = new BABYLON.StandardMaterial("brick", scene);
    materialBrick.diffuseTexture = new BABYLON.Texture("resources/images/brick.jpg", scene);
    materialBrick.specularColor = new BABYLON.Color3(0, 0, 0);
    // materialBrick.emissiveColor = new BABYLON.Color3(0.02, 0.1, 0.19);

    // Add bricks every few seconds
    let prev = Date.now();
    const bricks = [];
    scene.onBeforeRenderObservable.add(() => {
        if (Date.now() - prev > 1000) {
            prev = Date.now();
            const brick = BABYLON.MeshBuilder.CreateBox("brick", {height: 1, width: 5, depth: 2}, scene);
            brick.position = new BABYLON.Vector3(Math.random() *10 - 5, 12, Math.random() *10 - 5);
            brick.rotation.y = Math.PI/(Math.random() * 2);
            brick.rotation.x = Math.PI/(Math.random());
            brick.material = materialBrick;
            shadowGenerator.addShadowCaster(brick);
            brick.physicsImpostor = new BABYLON.PhysicsImpostor(brick, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 20, friction: 0.4, restitution: 0.05}, scene);
            bricks.push(brick);
            if (bricks.length > 50) {
                bricks.shift().dispose();
            }
        }
    });

    // Physics
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
    border0.physicsImpostor = new BABYLON.PhysicsImpostor(border0, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);
    border1.physicsImpostor = new BABYLON.PhysicsImpostor(border1, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);
    border2.physicsImpostor = new BABYLON.PhysicsImpostor(border2, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);
    border3.physicsImpostor = new BABYLON.PhysicsImpostor(border3, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0 }, scene);

    return scene;
};


const Scene = () => {
    const canvas = useRef();
    useEffect(() => {
        window.addEventListener('load', function() {
            console.log(canvas.current);
            const engine = new BABYLON.Engine(canvas.current, true);
            const scene = createScene(engine, canvas.current);

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

    return <canvas id='scene' ref={canvas}></canvas>;
}

export default Scene;