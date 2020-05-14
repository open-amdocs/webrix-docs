export default scene => {
    const brick = BABYLON.MeshBuilder.CreateBox("brick", {height: 1, width: 5, depth: 2}, scene);
    brick.position = new BABYLON.Vector3(Math.random() *10 - 5, 30, Math.random() *10 - 5);
    brick.rotation.y = Math.PI/(Math.random() * 2);
    brick.rotation.x = Math.PI/(Math.random());
    brick.physicsImpostor = new BABYLON.PhysicsImpostor(brick, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 20, friction: 0.4, restitution: 0.05}, scene);

    return brick;
}