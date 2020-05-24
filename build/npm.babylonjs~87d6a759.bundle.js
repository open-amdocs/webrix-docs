(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UpSL:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var i=function(){function e(){this._defines={},this._currentRank=32,this._maxRank=-1,this._mesh=null}return e.prototype.unBindMesh=function(){this._mesh=null},e.prototype.addFallback=function(e,t){this._defines[e]||(e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e),this._defines[e]=new Array),this._defines[e].push(t)},e.prototype.addCPUSkinningFallback=function(e,t){this._mesh=t,e<this._currentRank&&(this._currentRank=e),e>this._maxRank&&(this._maxRank=e)},Object.defineProperty(e.prototype,"hasMoreFallbacks",{get:function(){return this._currentRank<=this._maxRank},enumerable:!0,configurable:!0}),e.prototype.reduce=function(e,t){if(this._mesh&&this._mesh.computeBonesUsingShaders&&this._mesh.numBoneInfluencers>0){this._mesh.computeBonesUsingShaders=!1,e=e.replace("#define NUM_BONE_INFLUENCERS "+this._mesh.numBoneInfluencers,"#define NUM_BONE_INFLUENCERS 0"),t._bonesComputationForcedToCPU=!0;for(var r=this._mesh.getScene(),i=0;i<r.meshes.length;i++){var n=r.meshes[i];if(n.material){if(n.computeBonesUsingShaders&&0!==n.numBoneInfluencers)if(n.material.getEffect()===t)n.computeBonesUsingShaders=!1;else if(n.subMeshes)for(var s=0,o=n.subMeshes;s<o.length;s++){if(o[s].effect===t){n.computeBonesUsingShaders=!1;break}}}else!this._mesh.material&&n.computeBonesUsingShaders&&n.numBoneInfluencers>0&&(n.computeBonesUsingShaders=!1)}}else{var a=this._defines[this._currentRank];if(a)for(i=0;i<a.length;i++)e=e.replace("#define "+a[i],"");this._currentRank++}return e},e}()},Z6Y1:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var i=r("ps+7"),n=r("h87I"),s=r("uyO6"),o=r("E6EV"),a=function(){function e(t,r,s,a,h,u,c,l,p,_){var f,d,g=this;if(void 0===a&&(a=null),void 0===u&&(u=null),void 0===c&&(c=null),void 0===l&&(l=null),void 0===p&&(p=null),this.name=null,this.defines="",this.onCompiled=null,this.onError=null,this.onBind=null,this.uniqueId=0,this.onCompileObservable=new i.a,this.onErrorObservable=new i.a,this._onBindObservable=null,this._wasPreviouslyReady=!1,this._bonesComputationForcedToCPU=!1,this._uniformBuffersNames={},this._samplers={},this._isReady=!1,this._compilationError="",this._allFallbacksProcessed=!1,this._uniforms={},this._key="",this._fallbacks=null,this._vertexSourceCode="",this._fragmentSourceCode="",this._vertexSourceCodeOverride="",this._fragmentSourceCodeOverride="",this._transformFeedbackVaryings=null,this._pipelineContext=null,this._valueCache={},this.name=t,r.attributes){var m=r;if(this._engine=s,this._attributesNames=m.attributes,this._uniformsNames=m.uniformsNames.concat(m.samplers),this._samplerList=m.samplers.slice(),this.defines=m.defines,this.onError=m.onError,this.onCompiled=m.onCompiled,this._fallbacks=m.fallbacks,this._indexParameters=m.indexParameters,this._transformFeedbackVaryings=m.transformFeedbackVaryings||null,m.uniformBuffersNames)for(var b=0;b<m.uniformBuffersNames.length;b++)this._uniformBuffersNames[m.uniformBuffersNames[b]]=b}else this._engine=h,this.defines=null==u?"":u,this._uniformsNames=s.concat(a),this._samplerList=a?a.slice():[],this._attributesNames=r,this.onError=p,this.onCompiled=l,this._indexParameters=_,this._fallbacks=c;this._attributeLocationByName={},this.uniqueId=e._uniqueIdSeed++;var y=n.a.IsWindowObjectExist()?this._engine.getHostDocument():null;t.vertexSource?f="source:"+t.vertexSource:t.vertexElement?(f=y?y.getElementById(t.vertexElement):null)||(f=t.vertexElement):f=t.vertex||t,t.fragmentSource?d="source:"+t.fragmentSource:t.fragmentElement?(d=y?y.getElementById(t.fragmentElement):null)||(d=t.fragmentElement):d=t.fragment||t;var E={defines:this.defines.split("\n"),indexParameters:this._indexParameters,isFragment:!1,shouldUseHighPrecisionShader:this._engine._shouldUseHighPrecisionShader,processor:this._engine._shaderProcessor,supportsUniformBuffers:this._engine.supportsUniformBuffers,shadersRepository:e.ShadersRepository,includesShadersStore:e.IncludesShadersStore,version:(100*this._engine.webGLVersion).toString(),platformName:this._engine.webGLVersion>=2?"WEBGL2":"WEBGL1"};this._loadShader(f,"Vertex","",(function(e){g._loadShader(d,"Fragment","Pixel",(function(r){o.a.Process(e,E,(function(e){E.isFragment=!0,o.a.Process(r,E,(function(r){g._useFinalCode(e,r,t)}))}))}))}))}return Object.defineProperty(e.prototype,"onBindObservable",{get:function(){return this._onBindObservable||(this._onBindObservable=new i.a),this._onBindObservable},enumerable:!0,configurable:!0}),e.prototype._useFinalCode=function(e,t,r){if(r){var i=r.vertexElement||r.vertex||r.spectorName||r,n=r.fragmentElement||r.fragment||r.spectorName||r;this._vertexSourceCode="#define SHADER_NAME vertex:"+i+"\n"+e,this._fragmentSourceCode="#define SHADER_NAME fragment:"+n+"\n"+t}else this._vertexSourceCode=e,this._fragmentSourceCode=t;this._prepareEffect()},Object.defineProperty(e.prototype,"key",{get:function(){return this._key},enumerable:!0,configurable:!0}),e.prototype.isReady=function(){try{return this._isReadyInternal()}catch(e){return!1}},e.prototype._isReadyInternal=function(){return!!this._isReady||!!this._pipelineContext&&this._pipelineContext.isReady},e.prototype.getEngine=function(){return this._engine},e.prototype.getPipelineContext=function(){return this._pipelineContext},e.prototype.getAttributesNames=function(){return this._attributesNames},e.prototype.getAttributeLocation=function(e){return this._attributes[e]},e.prototype.getAttributeLocationByName=function(e){return this._attributeLocationByName[e]},e.prototype.getAttributesCount=function(){return this._attributes.length},e.prototype.getUniformIndex=function(e){return this._uniformsNames.indexOf(e)},e.prototype.getUniform=function(e){return this._uniforms[e]},e.prototype.getSamplers=function(){return this._samplerList},e.prototype.getCompilationError=function(){return this._compilationError},e.prototype.allFallbacksProcessed=function(){return this._allFallbacksProcessed},e.prototype.executeWhenCompiled=function(e){var t=this;this.isReady()?e(this):(this.onCompileObservable.add((function(t){e(t)})),this._pipelineContext&&!this._pipelineContext.isAsync||setTimeout((function(){t._checkIsReady(null)}),16))},e.prototype._checkIsReady=function(e){var t=this;try{if(this._isReadyInternal())return}catch(t){return void this._processCompilationErrors(t,e)}setTimeout((function(){t._checkIsReady(e)}),16)},e.prototype._loadShader=function(t,r,i,s){var o;if("undefined"!=typeof HTMLElement&&t instanceof HTMLElement)return void s(n.a.GetDOMTextContent(t));"source:"!==t.substr(0,7)?"base64:"!==t.substr(0,7)?e.ShadersStore[t+r+"Shader"]?s(e.ShadersStore[t+r+"Shader"]):i&&e.ShadersStore[t+i+"Shader"]?s(e.ShadersStore[t+i+"Shader"]):(o="."===t[0]||"/"===t[0]||t.indexOf("http")>-1?t:e.ShadersRepository+t,this._engine._loadFile(o+"."+r.toLowerCase()+".fx",s)):s(window.atob(t.substr(7))):s(t.substr(7))},e.prototype._rebuildProgram=function(e,t,r,i){var n=this;this._isReady=!1,this._vertexSourceCodeOverride=e,this._fragmentSourceCodeOverride=t,this.onError=function(e,t){i&&i(t)},this.onCompiled=function(){var e=n.getEngine().scenes;if(e)for(var t=0;t<e.length;t++)e[t].markAllMaterialsAsDirty(31);n._pipelineContext._handlesSpectorRebuildCallback(r)},this._fallbacks=null,this._prepareEffect()},e.prototype._prepareEffect=function(){var e=this,t=this._attributesNames,r=this.defines;this._valueCache={};var i=this._pipelineContext;try{var n=this._engine;this._pipelineContext=n.createPipelineContext();var s=this._rebuildProgram.bind(this);this._vertexSourceCodeOverride&&this._fragmentSourceCodeOverride?n._preparePipelineContext(this._pipelineContext,this._vertexSourceCodeOverride,this._fragmentSourceCodeOverride,!0,s,null,this._transformFeedbackVaryings):n._preparePipelineContext(this._pipelineContext,this._vertexSourceCode,this._fragmentSourceCode,!1,s,r,this._transformFeedbackVaryings),n._executeWhenRenderingStateIsCompiled(this._pipelineContext,(function(){if(n.supportsUniformBuffers)for(var r in e._uniformBuffersNames)e.bindUniformBlock(r,e._uniformBuffersNames[r]);var s;if(n.getUniforms(e._pipelineContext,e._uniformsNames).forEach((function(t,r){e._uniforms[e._uniformsNames[r]]=t})),e._attributes=n.getAttributes(e._pipelineContext,t),t)for(var o=0;o<t.length;o++){var a=t[o];e._attributeLocationByName[a]=e._attributes[o]}for(s=0;s<e._samplerList.length;s++){null==e.getUniform(e._samplerList[s])&&(e._samplerList.splice(s,1),s--)}e._samplerList.forEach((function(t,r){e._samplers[t]=r})),n.bindSamplers(e),e._compilationError="",e._isReady=!0,e.onCompiled&&e.onCompiled(e),e.onCompileObservable.notifyObservers(e),e.onCompileObservable.clear(),e._fallbacks&&e._fallbacks.unBindMesh(),i&&e.getEngine()._deletePipelineContext(i)})),this._pipelineContext.isAsync&&this._checkIsReady(i)}catch(e){this._processCompilationErrors(e,i)}},e.prototype._processCompilationErrors=function(e,t){void 0===t&&(t=null),this._compilationError=e.message;var r=this._attributesNames,i=this._fallbacks;s.a.Error("Unable to compile effect:"),s.a.Error("Uniforms: "+this._uniformsNames.map((function(e){return" "+e}))),s.a.Error("Attributes: "+r.map((function(e){return" "+e}))),s.a.Error("Defines:\r\n"+this.defines),s.a.Error("Error: "+this._compilationError),t&&(this._pipelineContext=t,this._isReady=!0,this.onError&&this.onError(this,this._compilationError),this.onErrorObservable.notifyObservers(this)),i?(this._pipelineContext=null,i.hasMoreFallbacks?(this._allFallbacksProcessed=!1,s.a.Error("Trying next fallback."),this.defines=i.reduce(this.defines,this),this._prepareEffect()):(this._allFallbacksProcessed=!0,this.onError&&this.onError(this,this._compilationError),this.onErrorObservable.notifyObservers(this),this.onErrorObservable.clear(),this._fallbacks&&this._fallbacks.unBindMesh())):this._allFallbacksProcessed=!0},Object.defineProperty(e.prototype,"isSupported",{get:function(){return""===this._compilationError},enumerable:!0,configurable:!0}),e.prototype._bindTexture=function(e,t){this._engine._bindTexture(this._samplers[e],t)},e.prototype.setTexture=function(e,t){this._engine.setTexture(this._samplers[e],this._uniforms[e],t)},e.prototype.setDepthStencilTexture=function(e,t){this._engine.setDepthStencilTexture(this._samplers[e],this._uniforms[e],t)},e.prototype.setTextureArray=function(e,t){var r=e+"Ex";if(-1===this._samplerList.indexOf(r+"0")){for(var i=this._samplerList.indexOf(e),n=1;n<t.length;n++){var s=r+(n-1).toString();this._samplerList.splice(i+n,0,s)}for(var o=0,a=0,h=this._samplerList;a<h.length;a++){var u=h[a];this._samplers[u]=o,o+=1}}this._engine.setTextureArray(this._samplers[e],this._uniforms[e],t)},e.prototype.setTextureFromPostProcess=function(e,t){this._engine.setTextureFromPostProcess(this._samplers[e],t)},e.prototype.setTextureFromPostProcessOutput=function(e,t){this._engine.setTextureFromPostProcessOutput(this._samplers[e],t)},e.prototype._cacheMatrix=function(e,t){var r=this._valueCache[e],i=t.updateFlag;return(void 0===r||r!==i)&&(this._valueCache[e]=i,!0)},e.prototype._cacheFloat2=function(e,t,r){var i=this._valueCache[e];if(!i||2!==i.length)return i=[t,r],this._valueCache[e]=i,!0;var n=!1;return i[0]!==t&&(i[0]=t,n=!0),i[1]!==r&&(i[1]=r,n=!0),n},e.prototype._cacheFloat3=function(e,t,r,i){var n=this._valueCache[e];if(!n||3!==n.length)return n=[t,r,i],this._valueCache[e]=n,!0;var s=!1;return n[0]!==t&&(n[0]=t,s=!0),n[1]!==r&&(n[1]=r,s=!0),n[2]!==i&&(n[2]=i,s=!0),s},e.prototype._cacheFloat4=function(e,t,r,i,n){var s=this._valueCache[e];if(!s||4!==s.length)return s=[t,r,i,n],this._valueCache[e]=s,!0;var o=!1;return s[0]!==t&&(s[0]=t,o=!0),s[1]!==r&&(s[1]=r,o=!0),s[2]!==i&&(s[2]=i,o=!0),s[3]!==n&&(s[3]=n,o=!0),o},e.prototype.bindUniformBuffer=function(t,r){var i=this._uniformBuffersNames[r];void 0!==i&&e._baseCache[i]!==t&&(e._baseCache[i]=t,this._engine.bindUniformBufferBase(t,i))},e.prototype.bindUniformBlock=function(e,t){this._engine.bindUniformBlock(this._pipelineContext,e,t)},e.prototype.setInt=function(e,t){var r=this._valueCache[e];return void 0!==r&&r===t||(this._valueCache[e]=t,this._engine.setInt(this._uniforms[e],t)),this},e.prototype.setIntArray=function(e,t){return this._valueCache[e]=null,this._engine.setIntArray(this._uniforms[e],t),this},e.prototype.setIntArray2=function(e,t){return this._valueCache[e]=null,this._engine.setIntArray2(this._uniforms[e],t),this},e.prototype.setIntArray3=function(e,t){return this._valueCache[e]=null,this._engine.setIntArray3(this._uniforms[e],t),this},e.prototype.setIntArray4=function(e,t){return this._valueCache[e]=null,this._engine.setIntArray4(this._uniforms[e],t),this},e.prototype.setFloatArray=function(e,t){return this._valueCache[e]=null,this._engine.setArray(this._uniforms[e],t),this},e.prototype.setFloatArray2=function(e,t){return this._valueCache[e]=null,this._engine.setArray2(this._uniforms[e],t),this},e.prototype.setFloatArray3=function(e,t){return this._valueCache[e]=null,this._engine.setArray3(this._uniforms[e],t),this},e.prototype.setFloatArray4=function(e,t){return this._valueCache[e]=null,this._engine.setArray4(this._uniforms[e],t),this},e.prototype.setArray=function(e,t){return this._valueCache[e]=null,this._engine.setArray(this._uniforms[e],t),this},e.prototype.setArray2=function(e,t){return this._valueCache[e]=null,this._engine.setArray2(this._uniforms[e],t),this},e.prototype.setArray3=function(e,t){return this._valueCache[e]=null,this._engine.setArray3(this._uniforms[e],t),this},e.prototype.setArray4=function(e,t){return this._valueCache[e]=null,this._engine.setArray4(this._uniforms[e],t),this},e.prototype.setMatrices=function(e,t){return t?(this._valueCache[e]=null,this._engine.setMatrices(this._uniforms[e],t),this):this},e.prototype.setMatrix=function(e,t){return this._cacheMatrix(e,t)&&this._engine.setMatrices(this._uniforms[e],t.toArray()),this},e.prototype.setMatrix3x3=function(e,t){return this._valueCache[e]=null,this._engine.setMatrix3x3(this._uniforms[e],t),this},e.prototype.setMatrix2x2=function(e,t){return this._valueCache[e]=null,this._engine.setMatrix2x2(this._uniforms[e],t),this},e.prototype.setFloat=function(e,t){var r=this._valueCache[e];return void 0!==r&&r===t||(this._valueCache[e]=t,this._engine.setFloat(this._uniforms[e],t)),this},e.prototype.setBool=function(e,t){var r=this._valueCache[e];return void 0!==r&&r===t||(this._valueCache[e]=t,this._engine.setInt(this._uniforms[e],t?1:0)),this},e.prototype.setVector2=function(e,t){return this._cacheFloat2(e,t.x,t.y)&&this._engine.setFloat2(this._uniforms[e],t.x,t.y),this},e.prototype.setFloat2=function(e,t,r){return this._cacheFloat2(e,t,r)&&this._engine.setFloat2(this._uniforms[e],t,r),this},e.prototype.setVector3=function(e,t){return this._cacheFloat3(e,t.x,t.y,t.z)&&this._engine.setFloat3(this._uniforms[e],t.x,t.y,t.z),this},e.prototype.setFloat3=function(e,t,r,i){return this._cacheFloat3(e,t,r,i)&&this._engine.setFloat3(this._uniforms[e],t,r,i),this},e.prototype.setVector4=function(e,t){return this._cacheFloat4(e,t.x,t.y,t.z,t.w)&&this._engine.setFloat4(this._uniforms[e],t.x,t.y,t.z,t.w),this},e.prototype.setFloat4=function(e,t,r,i,n){return this._cacheFloat4(e,t,r,i,n)&&this._engine.setFloat4(this._uniforms[e],t,r,i,n),this},e.prototype.setColor3=function(e,t){return this._cacheFloat3(e,t.r,t.g,t.b)&&this._engine.setFloat3(this._uniforms[e],t.r,t.g,t.b),this},e.prototype.setColor4=function(e,t,r){return this._cacheFloat4(e,t.r,t.g,t.b,r)&&this._engine.setFloat4(this._uniforms[e],t.r,t.g,t.b,r),this},e.prototype.setDirectColor4=function(e,t){return this._cacheFloat4(e,t.r,t.g,t.b,t.a)&&this._engine.setFloat4(this._uniforms[e],t.r,t.g,t.b,t.a),this},e.prototype.dispose=function(){this._engine._releaseEffect(this)},e.RegisterShader=function(t,r,i){r&&(e.ShadersStore[t+"PixelShader"]=r),i&&(e.ShadersStore[t+"VertexShader"]=i)},e.ResetCache=function(){e._baseCache={}},e.ShadersRepository="src/Shaders/",e._uniqueIdSeed=0,e._baseCache={},e.ShadersStore={},e.IncludesShadersStore={},e}()},stmW:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var i=r("mrSG"),n=r("ADVu"),s=r("ps+7"),o=r("YKqZ"),a=r("Xeau"),h=r("Qdxt"),u=r("0YF5"),c=(function(e){function t(){var t=e.call(this)||this;return t.IMAGEPROCESSING=!1,t.VIGNETTE=!1,t.VIGNETTEBLENDMODEMULTIPLY=!1,t.VIGNETTEBLENDMODEOPAQUE=!1,t.TONEMAPPING=!1,t.TONEMAPPING_ACES=!1,t.CONTRAST=!1,t.COLORCURVES=!1,t.COLORGRADING=!1,t.COLORGRADING3D=!1,t.SAMPLER3DGREENDEPTH=!1,t.SAMPLER3DBGRMAP=!1,t.IMAGEPROCESSINGPOSTPROCESS=!1,t.EXPOSURE=!1,t.rebuild(),t}Object(i.c)(t,e)}(h.a),function(){function e(){this.colorCurves=new u.a,this._colorCurvesEnabled=!1,this._colorGradingEnabled=!1,this._colorGradingWithGreenDepth=!0,this._colorGradingBGR=!0,this._exposure=1,this._toneMappingEnabled=!1,this._toneMappingType=e.TONEMAPPING_STANDARD,this._contrast=1,this.vignetteStretch=0,this.vignetteCentreX=0,this.vignetteCentreY=0,this.vignetteWeight=1.5,this.vignetteColor=new a.b(0,0,0,0),this.vignetteCameraFov=.5,this._vignetteBlendMode=e.VIGNETTEMODE_MULTIPLY,this._vignetteEnabled=!1,this._applyByPostProcess=!1,this._isEnabled=!0,this.onUpdateParameters=new s.a}return Object.defineProperty(e.prototype,"colorCurvesEnabled",{get:function(){return this._colorCurvesEnabled},set:function(e){this._colorCurvesEnabled!==e&&(this._colorCurvesEnabled=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingTexture",{get:function(){return this._colorGradingTexture},set:function(e){this._colorGradingTexture!==e&&(this._colorGradingTexture=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingEnabled",{get:function(){return this._colorGradingEnabled},set:function(e){this._colorGradingEnabled!==e&&(this._colorGradingEnabled=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingWithGreenDepth",{get:function(){return this._colorGradingWithGreenDepth},set:function(e){this._colorGradingWithGreenDepth!==e&&(this._colorGradingWithGreenDepth=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"colorGradingBGR",{get:function(){return this._colorGradingBGR},set:function(e){this._colorGradingBGR!==e&&(this._colorGradingBGR=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"exposure",{get:function(){return this._exposure},set:function(e){this._exposure!==e&&(this._exposure=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingEnabled",{get:function(){return this._toneMappingEnabled},set:function(e){this._toneMappingEnabled!==e&&(this._toneMappingEnabled=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"toneMappingType",{get:function(){return this._toneMappingType},set:function(e){this._toneMappingType!==e&&(this._toneMappingType=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"contrast",{get:function(){return this._contrast},set:function(e){this._contrast!==e&&(this._contrast=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vignetteBlendMode",{get:function(){return this._vignetteBlendMode},set:function(e){this._vignetteBlendMode!==e&&(this._vignetteBlendMode=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vignetteEnabled",{get:function(){return this._vignetteEnabled},set:function(e){this._vignetteEnabled!==e&&(this._vignetteEnabled=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"applyByPostProcess",{get:function(){return this._applyByPostProcess},set:function(e){this._applyByPostProcess!==e&&(this._applyByPostProcess=e,this._updateParameters())},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(e){this._isEnabled!==e&&(this._isEnabled=e,this._updateParameters())},enumerable:!0,configurable:!0}),e.prototype._updateParameters=function(){this.onUpdateParameters.notifyObservers(this)},e.prototype.getClassName=function(){return"ImageProcessingConfiguration"},e.PrepareUniforms=function(e,t){t.EXPOSURE&&e.push("exposureLinear"),t.CONTRAST&&e.push("contrast"),t.COLORGRADING&&e.push("colorTransformSettings"),t.VIGNETTE&&(e.push("vInverseScreenSize"),e.push("vignetteSettings1"),e.push("vignetteSettings2")),t.COLORCURVES&&u.a.PrepareUniforms(e)},e.PrepareSamplers=function(e,t){t.COLORGRADING&&e.push("txColorTransform")},e.prototype.prepareDefines=function(t,r){if(void 0===r&&(r=!1),r!==this.applyByPostProcess||!this._isEnabled)return t.VIGNETTE=!1,t.TONEMAPPING=!1,t.TONEMAPPING_ACES=!1,t.CONTRAST=!1,t.EXPOSURE=!1,t.COLORCURVES=!1,t.COLORGRADING=!1,t.COLORGRADING3D=!1,t.IMAGEPROCESSING=!1,void(t.IMAGEPROCESSINGPOSTPROCESS=this.applyByPostProcess&&this._isEnabled);switch(t.VIGNETTE=this.vignetteEnabled,t.VIGNETTEBLENDMODEMULTIPLY=this.vignetteBlendMode===e._VIGNETTEMODE_MULTIPLY,t.VIGNETTEBLENDMODEOPAQUE=!t.VIGNETTEBLENDMODEMULTIPLY,t.TONEMAPPING=this.toneMappingEnabled,this._toneMappingType){case e.TONEMAPPING_ACES:t.TONEMAPPING_ACES=!0;break;default:t.TONEMAPPING_ACES=!1}t.CONTRAST=1!==this.contrast,t.EXPOSURE=1!==this.exposure,t.COLORCURVES=this.colorCurvesEnabled&&!!this.colorCurves,t.COLORGRADING=this.colorGradingEnabled&&!!this.colorGradingTexture,t.COLORGRADING?t.COLORGRADING3D=this.colorGradingTexture.is3D:t.COLORGRADING3D=!1,t.SAMPLER3DGREENDEPTH=this.colorGradingWithGreenDepth,t.SAMPLER3DBGRMAP=this.colorGradingBGR,t.IMAGEPROCESSINGPOSTPROCESS=this.applyByPostProcess,t.IMAGEPROCESSING=t.VIGNETTE||t.TONEMAPPING||t.CONTRAST||t.EXPOSURE||t.COLORCURVES||t.COLORGRADING},e.prototype.isReady=function(){return!this.colorGradingEnabled||!this.colorGradingTexture||this.colorGradingTexture.isReady()},e.prototype.bind=function(e,t){if(this._colorCurvesEnabled&&this.colorCurves&&u.a.Bind(this.colorCurves,e),this._vignetteEnabled){var r=1/e.getEngine().getRenderWidth(),i=1/e.getEngine().getRenderHeight();e.setFloat2("vInverseScreenSize",r,i);var n=null!=t?t:i/r,s=Math.tan(.5*this.vignetteCameraFov),a=s*n,h=Math.sqrt(a*s);a=o.b.Mix(a,h,this.vignetteStretch),s=o.b.Mix(s,h,this.vignetteStretch),e.setFloat4("vignetteSettings1",a,s,-a*this.vignetteCentreX,-s*this.vignetteCentreY);var c=-2*this.vignetteWeight;e.setFloat4("vignetteSettings2",this.vignetteColor.r,this.vignetteColor.g,this.vignetteColor.b,c)}if(e.setFloat("exposureLinear",this.exposure),e.setFloat("contrast",this.contrast),this.colorGradingTexture){e.setTexture("txColorTransform",this.colorGradingTexture);var l=this.colorGradingTexture.getSize().height;e.setFloat4("colorTransformSettings",(l-1)/l,.5/l,l,this.colorGradingTexture.level)}},e.prototype.clone=function(){return n.a.Clone((function(){return new e}),this)},e.prototype.serialize=function(){return n.a.Serialize(this)},e.Parse=function(t){return n.a.Parse((function(){return new e}),t,null,null)},Object.defineProperty(e,"VIGNETTEMODE_MULTIPLY",{get:function(){return this._VIGNETTEMODE_MULTIPLY},enumerable:!0,configurable:!0}),Object.defineProperty(e,"VIGNETTEMODE_OPAQUE",{get:function(){return this._VIGNETTEMODE_OPAQUE},enumerable:!0,configurable:!0}),e.TONEMAPPING_STANDARD=0,e.TONEMAPPING_ACES=1,e._VIGNETTEMODE_MULTIPLY=0,e._VIGNETTEMODE_OPAQUE=1,Object(i.b)([Object(n.g)()],e.prototype,"colorCurves",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_colorCurvesEnabled",void 0),Object(i.b)([Object(n.k)("colorGradingTexture")],e.prototype,"_colorGradingTexture",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_colorGradingEnabled",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_colorGradingWithGreenDepth",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_colorGradingBGR",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_exposure",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_toneMappingEnabled",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_toneMappingType",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_contrast",void 0),Object(i.b)([Object(n.c)()],e.prototype,"vignetteStretch",void 0),Object(i.b)([Object(n.c)()],e.prototype,"vignetteCentreX",void 0),Object(i.b)([Object(n.c)()],e.prototype,"vignetteCentreY",void 0),Object(i.b)([Object(n.c)()],e.prototype,"vignetteWeight",void 0),Object(i.b)([Object(n.f)()],e.prototype,"vignetteColor",void 0),Object(i.b)([Object(n.c)()],e.prototype,"vignetteCameraFov",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_vignetteBlendMode",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_vignetteEnabled",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_applyByPostProcess",void 0),Object(i.b)([Object(n.c)()],e.prototype,"_isEnabled",void 0),e}());n.a._ImageProcessingConfigurationParser=c.Parse}}]);