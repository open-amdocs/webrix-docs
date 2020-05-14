export default scene => {
    // DOF (see https://www.babylonjs-playground.com/#8F5HYV#9)
    const pipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
    pipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
    pipeline.depthOfFieldEnabled = true;
    pipeline.depthOfField.focalLength = 120;
    pipeline.depthOfField.fStop = 1;
    pipeline.depthOfField.focusDistance = 10000;
    pipeline.samples = 2; // Antialiasing
    return pipeline;
};