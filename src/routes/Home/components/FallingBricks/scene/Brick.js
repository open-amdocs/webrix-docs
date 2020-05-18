const Material = scene => {
    const material = new BABYLON.StandardMaterial("brick", scene);
    const color = new BABYLON.Color3.FromHexString(['#e43f5a', '#162447'][Math.floor(Math.random() * 2)])
    material.diffuseColor = color;
    material.specularColor = color;
    material.backFaceCulling = false;
    return material;
};

export default (scene, mesh) => {
    const material = new Material(scene);
    const brick = mesh.clone('brick');
    brick.position = new BABYLON.Vector3(Math.random() * 5 - 2, 23, Math.random() * 10 - 5);
    brick.rotation.y = Math.PI/(Math.random() * 2);
    brick.rotation.x = Math.PI/(Math.random());
    brick.physicsImpostor = new BABYLON.PhysicsImpostor(brick, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 20, friction: 0.4, restitution: 0.05}, scene);
    brick.material = material;

    return brick;
}