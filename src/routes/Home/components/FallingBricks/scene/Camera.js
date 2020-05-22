import {Vector3} from '@babylonjs/core/Maths/math.vector';
import {UniversalCamera} from '@babylonjs/core/Cameras/universalCamera';

export default scene => {
    const camera = new UniversalCamera("Camera", new Vector3(10, 30, 0), scene);
    camera.checkCollisions = true;
    camera.applyGravity = true;
    camera.setTarget(new Vector3(0, -10, 0));
    return camera;
};