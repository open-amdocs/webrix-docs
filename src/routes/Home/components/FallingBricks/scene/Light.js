import {Vector3} from '@babylonjs/core/Maths/math.vector';
import {DirectionalLight} from '@babylonjs/core/Lights/directionalLight';
import {PointLight} from '@babylonjs/core/Lights/pointLight';

export default scene => {
    const light = new DirectionalLight("dir02", new Vector3(15, -15, 15), scene);
    const p = new PointLight("pointLight", new Vector3(-20, 100, 0), scene);
    p.intensity = 0.1;
    return light;
};