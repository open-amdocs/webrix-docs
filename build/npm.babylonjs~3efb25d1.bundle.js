(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{DwXJ:function(t,r,n){"use strict";n.d(r,"a",(function(){return e}));var o=n("j2cH"),e=function(){function t(){}return t.GetPlanes=function(r){for(var n=[],e=0;e<6;e++)n.push(new o.a(0,0,0,0));return t.GetPlanesToRef(r,n),n},t.GetNearPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]+n[2],r.normal.y=n[7]+n[6],r.normal.z=n[11]+n[10],r.d=n[15]+n[14],r.normalize()},t.GetFarPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]-n[2],r.normal.y=n[7]-n[6],r.normal.z=n[11]-n[10],r.d=n[15]-n[14],r.normalize()},t.GetLeftPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]+n[0],r.normal.y=n[7]+n[4],r.normal.z=n[11]+n[8],r.d=n[15]+n[12],r.normalize()},t.GetRightPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]-n[0],r.normal.y=n[7]-n[4],r.normal.z=n[11]-n[8],r.d=n[15]-n[12],r.normalize()},t.GetTopPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]-n[1],r.normal.y=n[7]-n[5],r.normal.z=n[11]-n[9],r.d=n[15]-n[13],r.normalize()},t.GetBottomPlaneToRef=function(t,r){var n=t.m;r.normal.x=n[3]+n[1],r.normal.y=n[7]+n[5],r.normal.z=n[11]+n[9],r.d=n[15]+n[13],r.normalize()},t.GetPlanesToRef=function(r,n){t.GetNearPlaneToRef(r,n[0]),t.GetFarPlaneToRef(r,n[1]),t.GetLeftPlaneToRef(r,n[2]),t.GetRightPlaneToRef(r,n[3]),t.GetTopPlaneToRef(r,n[4]),t.GetBottomPlaneToRef(r,n[5])},t}()},MhaC:function(t,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"c",(function(){return e})),n.d(r,"a",(function(){return i}));var o=1/2.2,e=2.2,i=.001},SYzJ:function(t,r,n){"use strict";n.d(r,"b",(function(){return o})),n.d(r,"a",(function(){return i}));var o,e=n("/SR9");!function(t){t[t.LOCAL=0]="LOCAL",t[t.WORLD=1]="WORLD",t[t.BONE=2]="BONE"}(o||(o={}));var i=function(){function t(){}return t.X=new e.e(1,0,0),t.Y=new e.e(0,1,0),t.Z=new e.e(0,0,1),t}()},Xeau:function(t,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return u})),n.d(r,"c",(function(){return h}));var o=n("sH6m"),e=n("MhaC"),i=n("mHtN"),a=n("WHS4"),s=function(){function t(t,r,n){void 0===t&&(t=0),void 0===r&&(r=0),void 0===n&&(n=0),this.r=t,this.g=r,this.b=n}return t.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+"}"},t.prototype.getClassName=function(){return"Color3"},t.prototype.getHashCode=function(){var t=255*this.r|0;return t=397*(t=397*t^(255*this.g|0))^(255*this.b|0)},t.prototype.toArray=function(t,r){return void 0===r&&(r=0),t[r]=this.r,t[r+1]=this.g,t[r+2]=this.b,this},t.prototype.toColor4=function(t){return void 0===t&&(t=1),new u(this.r,this.g,this.b,t)},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.toLuminance=function(){return.3*this.r+.59*this.g+.11*this.b},t.prototype.multiply=function(r){return new t(this.r*r.r,this.g*r.g,this.b*r.b)},t.prototype.multiplyToRef=function(t,r){return r.r=this.r*t.r,r.g=this.g*t.g,r.b=this.b*t.b,this},t.prototype.equals=function(t){return t&&this.r===t.r&&this.g===t.g&&this.b===t.b},t.prototype.equalsFloats=function(t,r,n){return this.r===t&&this.g===r&&this.b===n},t.prototype.scale=function(r){return new t(this.r*r,this.g*r,this.b*r)},t.prototype.scaleToRef=function(t,r){return r.r=this.r*t,r.g=this.g*t,r.b=this.b*t,this},t.prototype.scaleAndAddToRef=function(t,r){return r.r+=this.r*t,r.g+=this.g*t,r.b+=this.b*t,this},t.prototype.clampToRef=function(t,r,n){return void 0===t&&(t=0),void 0===r&&(r=1),n.r=o.a.Clamp(this.r,t,r),n.g=o.a.Clamp(this.g,t,r),n.b=o.a.Clamp(this.b,t,r),this},t.prototype.add=function(r){return new t(this.r+r.r,this.g+r.g,this.b+r.b)},t.prototype.addToRef=function(t,r){return r.r=this.r+t.r,r.g=this.g+t.g,r.b=this.b+t.b,this},t.prototype.subtract=function(r){return new t(this.r-r.r,this.g-r.g,this.b-r.b)},t.prototype.subtractToRef=function(t,r){return r.r=this.r-t.r,r.g=this.g-t.g,r.b=this.b-t.b,this},t.prototype.clone=function(){return new t(this.r,this.g,this.b)},t.prototype.copyFrom=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this},t.prototype.copyFromFloats=function(t,r,n){return this.r=t,this.g=r,this.b=n,this},t.prototype.set=function(t,r,n){return this.copyFromFloats(t,r,n)},t.prototype.toHexString=function(){var t=255*this.r|0,r=255*this.g|0,n=255*this.b|0;return"#"+o.a.ToHex(t)+o.a.ToHex(r)+o.a.ToHex(n)},t.prototype.toLinearSpace=function(){var r=new t;return this.toLinearSpaceToRef(r),r},t.prototype.toHSV=function(){var r=new t;return this.toHSVToRef(r),r},t.prototype.toHSVToRef=function(t){var r=this.r,n=this.g,o=this.b,e=Math.max(r,n,o),i=Math.min(r,n,o),a=0,s=0,u=e,h=e-i;0!==e&&(s=h/e),e!=i&&(e==r?(a=(n-o)/h,n<o&&(a+=6)):e==n?a=(o-r)/h+2:e==o&&(a=(r-n)/h+4),a*=60),t.r=a,t.g=s,t.b=u},t.prototype.toLinearSpaceToRef=function(t){return t.r=Math.pow(this.r,e.c),t.g=Math.pow(this.g,e.c),t.b=Math.pow(this.b,e.c),this},t.prototype.toGammaSpace=function(){var r=new t;return this.toGammaSpaceToRef(r),r},t.prototype.toGammaSpaceToRef=function(t){return t.r=Math.pow(this.r,e.b),t.g=Math.pow(this.g,e.b),t.b=Math.pow(this.b,e.b),this},t.HSVtoRGBToRef=function(t,r,n,o){var e=n*r,i=t/60,a=e*(1-Math.abs(i%2-1)),s=0,u=0,h=0;i>=0&&i<=1?(s=e,u=a):i>=1&&i<=2?(s=a,u=e):i>=2&&i<=3?(u=e,h=a):i>=3&&i<=4?(u=a,h=e):i>=4&&i<=5?(s=a,h=e):i>=5&&i<=6&&(s=e,h=a);var c=n-e;o.set(s+c,u+c,h+c)},t.FromHexString=function(r){if("#"!==r.substring(0,1)||7!==r.length)return new t(0,0,0);var n=parseInt(r.substring(1,3),16),o=parseInt(r.substring(3,5),16),e=parseInt(r.substring(5,7),16);return t.FromInts(n,o,e)},t.FromArray=function(r,n){return void 0===n&&(n=0),new t(r[n],r[n+1],r[n+2])},t.FromInts=function(r,n,o){return new t(r/255,n/255,o/255)},t.Lerp=function(r,n,o){var e=new t(0,0,0);return t.LerpToRef(r,n,o,e),e},t.LerpToRef=function(t,r,n,o){o.r=t.r+(r.r-t.r)*n,o.g=t.g+(r.g-t.g)*n,o.b=t.b+(r.b-t.b)*n},t.Red=function(){return new t(1,0,0)},t.Green=function(){return new t(0,1,0)},t.Blue=function(){return new t(0,0,1)},t.Black=function(){return new t(0,0,0)},Object.defineProperty(t,"BlackReadOnly",{get:function(){return t._BlackReadOnly},enumerable:!0,configurable:!0}),t.White=function(){return new t(1,1,1)},t.Purple=function(){return new t(.5,0,.5)},t.Magenta=function(){return new t(1,0,1)},t.Yellow=function(){return new t(1,1,0)},t.Gray=function(){return new t(.5,.5,.5)},t.Teal=function(){return new t(0,1,1)},t.Random=function(){return new t(Math.random(),Math.random(),Math.random())},t._BlackReadOnly=t.Black(),t}(),u=function(){function t(t,r,n,o){void 0===t&&(t=0),void 0===r&&(r=0),void 0===n&&(n=0),void 0===o&&(o=1),this.r=t,this.g=r,this.b=n,this.a=o}return t.prototype.addInPlace=function(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this.a+=t.a,this},t.prototype.asArray=function(){var t=new Array;return this.toArray(t,0),t},t.prototype.toArray=function(t,r){return void 0===r&&(r=0),t[r]=this.r,t[r+1]=this.g,t[r+2]=this.b,t[r+3]=this.a,this},t.prototype.equals=function(t){return t&&this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a},t.prototype.add=function(r){return new t(this.r+r.r,this.g+r.g,this.b+r.b,this.a+r.a)},t.prototype.subtract=function(r){return new t(this.r-r.r,this.g-r.g,this.b-r.b,this.a-r.a)},t.prototype.subtractToRef=function(t,r){return r.r=this.r-t.r,r.g=this.g-t.g,r.b=this.b-t.b,r.a=this.a-t.a,this},t.prototype.scale=function(r){return new t(this.r*r,this.g*r,this.b*r,this.a*r)},t.prototype.scaleToRef=function(t,r){return r.r=this.r*t,r.g=this.g*t,r.b=this.b*t,r.a=this.a*t,this},t.prototype.scaleAndAddToRef=function(t,r){return r.r+=this.r*t,r.g+=this.g*t,r.b+=this.b*t,r.a+=this.a*t,this},t.prototype.clampToRef=function(t,r,n){return void 0===t&&(t=0),void 0===r&&(r=1),n.r=o.a.Clamp(this.r,t,r),n.g=o.a.Clamp(this.g,t,r),n.b=o.a.Clamp(this.b,t,r),n.a=o.a.Clamp(this.a,t,r),this},t.prototype.multiply=function(r){return new t(this.r*r.r,this.g*r.g,this.b*r.b,this.a*r.a)},t.prototype.multiplyToRef=function(t,r){return r.r=this.r*t.r,r.g=this.g*t.g,r.b=this.b*t.b,r.a=this.a*t.a,r},t.prototype.toString=function(){return"{R: "+this.r+" G:"+this.g+" B:"+this.b+" A:"+this.a+"}"},t.prototype.getClassName=function(){return"Color4"},t.prototype.getHashCode=function(){var t=255*this.r|0;return t=397*(t=397*(t=397*t^(255*this.g|0))^(255*this.b|0))^(255*this.a|0)},t.prototype.clone=function(){return new t(this.r,this.g,this.b,this.a)},t.prototype.copyFrom=function(t){return this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this},t.prototype.copyFromFloats=function(t,r,n,o){return this.r=t,this.g=r,this.b=n,this.a=o,this},t.prototype.set=function(t,r,n,o){return this.copyFromFloats(t,r,n,o)},t.prototype.toHexString=function(){var t=255*this.r|0,r=255*this.g|0,n=255*this.b|0,e=255*this.a|0;return"#"+o.a.ToHex(t)+o.a.ToHex(r)+o.a.ToHex(n)+o.a.ToHex(e)},t.prototype.toLinearSpace=function(){var r=new t;return this.toLinearSpaceToRef(r),r},t.prototype.toLinearSpaceToRef=function(t){return t.r=Math.pow(this.r,e.c),t.g=Math.pow(this.g,e.c),t.b=Math.pow(this.b,e.c),t.a=this.a,this},t.prototype.toGammaSpace=function(){var r=new t;return this.toGammaSpaceToRef(r),r},t.prototype.toGammaSpaceToRef=function(t){return t.r=Math.pow(this.r,e.b),t.g=Math.pow(this.g,e.b),t.b=Math.pow(this.b,e.b),t.a=this.a,this},t.FromHexString=function(r){if("#"!==r.substring(0,1)||9!==r.length)return new t(0,0,0,0);var n=parseInt(r.substring(1,3),16),o=parseInt(r.substring(3,5),16),e=parseInt(r.substring(5,7),16),i=parseInt(r.substring(7,9),16);return t.FromInts(n,o,e,i)},t.Lerp=function(r,n,o){var e=new t(0,0,0,0);return t.LerpToRef(r,n,o,e),e},t.LerpToRef=function(t,r,n,o){o.r=t.r+(r.r-t.r)*n,o.g=t.g+(r.g-t.g)*n,o.b=t.b+(r.b-t.b)*n,o.a=t.a+(r.a-t.a)*n},t.FromColor3=function(r,n){return void 0===n&&(n=1),new t(r.r,r.g,r.b,n)},t.FromArray=function(r,n){return void 0===n&&(n=0),new t(r[n],r[n+1],r[n+2],r[n+3])},t.FromInts=function(r,n,o,e){return new t(r/255,n/255,o/255,e/255)},t.CheckColors4=function(t,r){if(t.length===3*r){for(var n=[],o=0;o<t.length;o+=3){var e=o/3*4;n[e]=t[o],n[e+1]=t[o+1],n[e+2]=t[o+2],n[e+3]=1}return n}return t},t}(),h=function(){function t(){}return t.Color3=i.a.BuildArray(3,s.Black),t.Color4=i.a.BuildArray(3,(function(){return new u(0,0,0,0)})),t}();a.a.RegisteredTypes["BABYLON.Color3"]=s,a.a.RegisteredTypes["BABYLON.Color4"]=u},lJNW:function(t,r,n){"use strict";n.d(r,"b",(function(){return e})),n.d(r,"a",(function(){return i}));var o=n("/SR9");function e(t,r,n,e,i){void 0===i&&(i=null);for(var a=new o.e(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),s=new o.e(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),u=n;u<n+e;u++){var h=3*r[u],c=t[h],p=t[h+1],f=t[h+2];a.minimizeInPlaceFromFloats(c,p,f),s.maximizeInPlaceFromFloats(c,p,f)}return i&&(a.x-=a.x*i.x+i.y,a.y-=a.y*i.x+i.y,a.z-=a.z*i.x+i.y,s.x+=s.x*i.x+i.y,s.y+=s.y*i.x+i.y,s.z+=s.z*i.x+i.y),{minimum:a,maximum:s}}function i(t,r,n,e,i){void 0===e&&(e=null);var a=new o.e(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),s=new o.e(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);i||(i=3);for(var u=r,h=r*i;u<r+n;u++,h+=i){var c=t[h],p=t[h+1],f=t[h+2];a.minimizeInPlaceFromFloats(c,p,f),s.maximizeInPlaceFromFloats(c,p,f)}return e&&(a.x-=a.x*e.x+e.y,a.y-=a.y*e.x+e.y,a.z-=a.z*e.x+e.y,s.x+=s.x*e.x+e.y,s.y+=s.y*e.x+e.y,s.z+=s.z*e.x+e.y),{minimum:a,maximum:s}}}}]);