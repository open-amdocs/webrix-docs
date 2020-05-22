import {ShadowGenerator} from '@babylonjs/core/Lights/Shadows/shadowGenerator';

export default (scene, light) => {
    const shadowGenerator = new ShadowGenerator(2048, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.useKernelBlur = true;
    shadowGenerator.blurKernel = 2;
    return shadowGenerator;
};