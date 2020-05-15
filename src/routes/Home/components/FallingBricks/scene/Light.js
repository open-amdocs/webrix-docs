export default scene => {
    const light = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(15, -15, 15), scene);
    const p = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(-20, 100, 0), scene);
    p.intensity = 0.1;
    return light;
};