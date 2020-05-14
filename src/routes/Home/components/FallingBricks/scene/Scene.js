import {Camera, Ground, Light, Pipeline, Shadows} from './index';

const Scene = engine => {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = BABYLON.Color3.Black();

    // Physics
    scene.enablePhysics(null, new BABYLON.OimoJSPlugin());

    return scene;
};

export default engine => {
    const scene = new Scene(engine);
    const camera = new Camera(scene);
    const light = new Light(scene);
    const shadows = new Shadows(scene, light);
    const pipeline = new Pipeline(scene);
    const ground = new Ground(scene);

    const materials = ['brick', 'brick1', 'brick2', 'brick3', 'brick4'].map(name => {
        const material = new BABYLON.StandardMaterial("brick", scene);
        material.diffuseTexture = new BABYLON.Texture(`resources/images/${name}.jpg`, scene);
        material.specularColor = new BABYLON.Color3(0, 0, 0);
        material.backFaceCulling = false;
        return material;
    });

    // Add bricks every few seconds
    let prev = Date.now();
    const bricks = [];
    scene.onBeforeRenderObservable.add(() => {
        if (Date.now() - prev > 500) {
            prev = Date.now();
            const brick = BABYLON.MeshBuilder.CreateBox("brick", {height: 1, width: 5, depth: 2}, scene);
            brick.position = new BABYLON.Vector3(Math.random() *10 - 5, 30, Math.random() *10 - 5);
            brick.rotation.y = Math.PI/(Math.random() * 2);
            brick.rotation.x = Math.PI/(Math.random());
            brick.material = materials[Math.floor(Math.random() * materials.length)];
            shadows.addShadowCaster(brick);
            brick.physicsImpostor = new BABYLON.PhysicsImpostor(brick, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 20, friction: 0.4, restitution: 0.05}, scene);
            bricks.push(brick);
            if (bricks.length > 50) {
                bricks.shift().dispose();
            }
        }
    });

    return scene;
};