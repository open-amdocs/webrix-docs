import {Vector3} from '@babylonjs/core/Maths/math.vector';
import {Color3} from '@babylonjs/core/Maths/math.color';
import {StandardMaterial} from '@babylonjs/core/Materials/standardMaterial';
import {PhysicsImpostor} from '@babylonjs/core/Physics/physicsImpostor';
import {Mesh} from '@babylonjs/core/Meshes/mesh';

const Material = scene => {
    const material = new StandardMaterial('groundMat', scene);
    material.diffuseColor = new Color3.FromHexString('#162447');
    material.emissiveColor = new Color3.FromHexString('#162447');
    material.backFaceCulling = false;
    return material;
};

export default scene => {
    const material = new Material(scene);
    const ground = Mesh.CreateBox('Ground', 1, scene);
    ground.scaling = new Vector3(100, 1, 100);
    ground.position.y = -5.0;
    ground.checkCollisions = true;
    ground.material = material;
    ground.receiveShadows = true;
    ground.physicsImpostor = new PhysicsImpostor(ground, PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0.7 }, scene);
    return ground;
};