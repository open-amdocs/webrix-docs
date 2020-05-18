export default scene => {
    // DOF (see https://www.babylonjs-playground.com/#8F5HYV#9)
    const pipeline = new BABYLON.DefaultRenderingPipeline("default", true, scene, [scene.activeCamera]);
    pipeline.depthOfFieldBlurLevel = BABYLON.DepthOfFieldEffectBlurLevel.Medium;
    pipeline.depthOfFieldEnabled = true;
    pipeline.depthOfField.focalLength = 500;
    pipeline.depthOfField.fStop = 1;
    pipeline.depthOfField.focusDistance = 35000;
    pipeline.samples = 3; // Antialiasing
    return pipeline;
};