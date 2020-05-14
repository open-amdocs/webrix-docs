export default (scene, light) => {
    const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
    shadowGenerator.useBlurExponentialShadowMap = true;
    shadowGenerator.useKernelBlur = true;
    shadowGenerator.blurKernel = 2;
    return shadowGenerator;
};