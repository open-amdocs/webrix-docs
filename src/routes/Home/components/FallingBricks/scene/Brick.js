import {Color3} from '@babylonjs/core/Maths/math.color';
import {Vector3} from '@babylonjs/core/Maths/math.vector';
import {StandardMaterial} from '@babylonjs/core/Materials/standardMaterial';
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor';

const Material = scene => {
    const material = new StandardMaterial('brick', scene);
    const color = new Color3.FromHexString(['#e43f5a', '#162447'][Math.floor(Math.random() * 2)])
    material.diffuseColor = color;
    material.specularColor = color;
    material.backFaceCulling = false;
    return material;
};

export default (scene, mesh) => {
    const material = new Material(scene);
    const brick = mesh.clone('brick');
    brick.position = new Vector3(Math.random() * 10 - 4, 23, Math.random() * 60 - 30);
    brick.rotation.y = Math.PI/(Math.random() * 2);
    brick.rotation.x = Math.PI/(Math.random());
    brick.physicsImpostor = new PhysicsImpostor(brick, PhysicsImpostor.BoxImpostor, {mass: 20, friction: 0.4, restitution: 0.05}, scene);
    brick.material = material;

    return brick;
}