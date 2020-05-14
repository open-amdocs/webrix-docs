export default scene => {
    const light = new BABYLON.DirectionalLight("dir02", new BABYLON.Vector3(15, -15, 15), scene);
    return light;
};