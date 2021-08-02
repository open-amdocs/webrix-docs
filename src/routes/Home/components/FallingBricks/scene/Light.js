import {Vector3} from '@babylonjs/core/Maths/math.vector';
import {DirectionalLight} from '@babylonjs/core/Lights/directionalLight';

export default scene => {
    const light = new DirectionalLight('dir02', new Vector3(-135, -155, 155), scene);
    return light;
};