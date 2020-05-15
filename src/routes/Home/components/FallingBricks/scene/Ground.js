const Material = scene => {
    const material = new BABYLON.StandardMaterial("groundMat", scene);
    material.diffuseColor = new BABYLON.Color3.FromHexString('#162447');
    material.emissiveColor = new BABYLON.Color3.FromHexString('#162447');
    material.backFaceCulling = false;
    return material;
};

export default scene => {
    const material = new Material(scene);
    const ground = BABYLON.Mesh.CreateBox("Ground", 1, scene);
    ground.scaling = new BABYLON.Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;
    ground.material = material;
    ground.receiveShadows = true;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
    return ground;
};