export default scene => {
    const camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(10, 30, 0), scene);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.setTarget(new BABYLON.Vector3(0, -10, 0));
    return camera;
};