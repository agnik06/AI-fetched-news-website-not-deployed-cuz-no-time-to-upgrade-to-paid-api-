((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)})(this,function(Te,Ce){try{!(function(){function B(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var t,e,r=B(Te);let a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var a=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let l=0;l<r.length;l+=3){var i=r[l],n=l+1<r.length,s=n?r[l+1]:0,h=l+2<r.length,c=h?r[l+2]:0;let e=(15&s)<<2|c>>6,t=63&c;h||(t=64,n)||(e=64),o.push(a[i>>2],a[(3&i)<<4|s>>4],a[e],a[t])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray((t=>{var r=[];let a=0;for(let o=0;o<t.length;o++){let e=t.charCodeAt(o);e<128?r[a++]=e:(e<2048?r[a++]=e>>6|192:(55296==(64512&e)&&o+1<t.length&&56320==(64512&t.charCodeAt(o+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++o)),r[a++]=e>>18|240,r[a++]=e>>12&63|128):r[a++]=e>>12|224,r[a++]=e>>6&63|128),r[a++]=63&e|128)}return r})(e),t)},decodeString(r,a){if(this.HAS_NATIVE_SUPPORT&&!a)return atob(r);{var o=this.decodeStringToByteArray(r,a);var i=[];let e=0,t=0;for(;e<o.length;){var n,s,h,c=o[e++];c<128?i[t++]=String.fromCharCode(c):191<c&&c<224?(n=o[e++],i[t++]=String.fromCharCode((31&c)<<6|63&n)):239<c&&c<365?(n=((7&c)<<18|(63&o[e++])<<12|(63&o[e++])<<6|63&o[e++])-65536,i[t++]=String.fromCharCode(55296+(n>>10)),i[t++]=String.fromCharCode(56320+(1023&n))):(s=o[e++],h=o[e++],i[t++]=String.fromCharCode((15&c)<<12|(63&s)<<6|63&h))}return i.join("");return}},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let h=0;h<e.length;){var o=r[e.charAt(h++)],i=h<e.length?r[e.charAt(h)]:0,n=++h<e.length?r[e.charAt(h)]:64,s=++h<e.length?r[e.charAt(h)]:64;if(++h,null==o||null==i||null==n||null==s)throw new H;a.push(o<<2|i>>4),64!==n&&(a.push(i<<4&240|n>>2),64!==s)&&a.push(n<<6&192|s)}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class H extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let n=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};class s{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(r){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof r&&(this.promise.catch(()=>{}),1===r.length?r(e):r(e,t))}}}function o(){try{return"object"==typeof indexedDB}catch(e){}}class h extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,h.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i.prototype.create)}}class i{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var a,r=t[0]||{},o=this.service+"/"+e,i=this.errors[e],i=i?(a=r,i.replace(x,(e,t)=>{var r=a[t];return null!=r?String(r):`<${t}?>`})):"Error",i=this.serviceName+`: ${i} (${o}).`;return new h(o,i,r)}}let x=/\{\$([^}]+)}/g;function c(e){return JSON.parse(e)}function j(e){var t=(e=>{let t={},r={},a={},o="";try{var i=e.split(".");t=c(n(i[0])||""),r=c(n(i[1])||""),o=i[2],a=r.d||{},delete r.d}catch(e){}return{header:t,claims:r,data:a,signature:o}})(e).claims;return"object"==typeof t&&t.hasOwnProperty("iat")?t.iat:null}let W=144e5,F=.5;class l{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}(e=t=t||{})[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let $={debug:t.DEBUG,verbose:t.VERBOSE,info:t.INFO,warn:t.WARN,error:t.ERROR,silent:t.SILENT},V=t.INFO,K={[t.DEBUG]:"log",[t.VERBOSE]:"log",[t.INFO]:"info",[t.WARN]:"warn",[t.ERROR]:"error"},U=(e,t,...r)=>{if(!(t<e.logLevel)){var a=(new Date).toISOString(),o=K[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${a}]  ${e.name}:`,...r)}};let p=new Map,z={activated:!1,tokenObservers:[]},u={initialized:!1,enabled:!1};function d(e){return p.get(e)||Object.assign({},z)}let g="https://content-firebaseappcheck.googleapis.com/v1",q="exchangeDebugToken",G={OFFSET_DURATION:3e5,RETRIAL_MIN_WAIT:3e4,RETRIAL_MAX_WAIT:96e4};class X{constructor(e,t,r,a,o){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=a,this.upperBound=o,this.pending=null,o<(this.nextErrorWaitInterval=a))throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new s,this.pending.promise.catch(e=>{}),t=this.getNextRun(e),await new Promise(e=>{setTimeout(e,t)}),this.pending.resolve(),await this.pending.promise,this.pending=new s,this.pending.promise.catch(e=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(e){this.retryPolicy(e)?this.process(!1).catch(()=>{}):this.stop()}var t}getNextRun(e){var t;return e?(this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration()):(t=this.nextErrorWaitInterval,this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t)}}let f=new i("appCheck","AppCheck",{"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"});function v(e=!1){var t;return e?null==(t=self.grecaptcha)?void 0:t.enterprise:self.grecaptcha}function E(e){if(!d(e).activated)throw f.create("use-before-activation",{appName:e.name})}function w(e){var t=Math.round(e/1e3),r=Math.floor(t/86400),a=Math.floor((t-3600*r*24)/3600),o=Math.floor((t-3600*r*24-3600*a)/60),t=t-3600*r*24-3600*a-60*o;let i="";return r&&(i+=_(r)+"d:"),a&&(i+=_(a)+"h:"),i+=_(o)+"m:"+_(t)+"s"}function _(e){return 0===e?"00":10<=e?e.toString():"0"+e}async function m({url:e,body:t},r){var a={"Content-Type":"application/json"},o=r.getImmediate({optional:!0}),o=(o&&(o=await o.getHeartbeatsHeader())&&(a["X-Firebase-Client"]=o),{method:"POST",body:JSON.stringify(t),headers:a});let i;try{i=await fetch(e,o)}catch(e){throw f.create("fetch-network-error",{originalErrorMessage:null==e?void 0:e.message})}if(200!==i.status)throw f.create("fetch-status-error",{httpStatus:i.status});let n;try{n=await i.json()}catch(e){throw f.create("fetch-parse-error",{originalErrorMessage:null==e?void 0:e.message})}var a=n.ttl.match(/^([\d.]+)(s)$/);if(a&&a[2]&&!isNaN(Number(a[1])))return o=1e3*Number(a[1]),a=Date.now(),{token:n.token,expireTimeMillis:a+o,issuedAtTimeMillis:a};throw f.create("fetch-parse-error",{originalErrorMessage:"ttl field (timeToLive) is not in standard Protobuf Duration format: "+n.ttl})}function J(e,t){var{projectId:r,appId:a,apiKey:o}=e.options;return{url:`${g}/projects/${r}/apps/${a}:${q}?key=`+o,body:{debug_token:t}}}let Y="firebase-app-check-database",Z=1,k="firebase-app-check-store",Q="debug-token",ee=null;function te(){return ee=ee||new Promise((t,r)=>{try{var e=indexedDB.open(Y,Z);e.onsuccess=e=>{t(e.target.result)},e.onerror=e=>{var t;r(f.create("storage-open",{originalErrorMessage:null==(t=e.target.error)?void 0:t.message}))},e.onupgradeneeded=e=>{var t=e.target.result;0===e.oldVersion&&t.createObjectStore(k,{keyPath:"compositeKey"})}}catch(e){r(f.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}})}async function re(e,t){let a=(await te()).transaction(k,"readwrite"),o=a.objectStore(k).put({compositeKey:e,value:t});return new Promise((t,r)=>{o.onsuccess=e=>{t()},a.onerror=e=>{var t;r(f.create("storage-set",{originalErrorMessage:null==(t=e.target.error)?void 0:t.message}))}})}async function ae(e){let t=(await te()).transaction(k,"readonly"),o=t.objectStore(k).get(e);return new Promise((r,a)=>{o.onsuccess=e=>{var t=e.target.result;r(t?t.value:void 0)},t.onerror=e=>{var t;a(f.create("storage-get",{originalErrorMessage:null==(t=e.target.error)?void 0:t.message}))}})}function oe(e){return e.options.appId+"-"+e.name}let b=new class{constructor(e){this.name=e,this._logLevel=V,this._logHandler=U,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in t))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?$[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,t.DEBUG,...e),this._logHandler(this,t.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,t.VERBOSE,...e),this._logHandler(this,t.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,t.INFO,...e),this._logHandler(this,t.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,t.WARN,...e),this._logHandler(this,t.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,t.ERROR,...e),this._logHandler(this,t.ERROR,...e)}}("@firebase/app-check");async function ie(t){if(o()){let e=void 0;try{e=await ae(oe(t))}catch(e){b.warn("Failed to read token from IndexedDB. Error: "+e)}return e}}function y(e,t){return o()?re(oe(e),t).catch(e=>{b.warn("Failed to write token to IndexedDB. Error: "+e)}):Promise.resolve()}async function ne(){let e=void 0;try{e=await ae(Q)}catch(e){}var t,r;return e||(t=crypto.randomUUID(),r=t,re(Q,r).catch(e=>b.warn("Failed to persist debug token to IndexedDB. Error: "+e)),t)}function A(){return u.enabled}async function T(){var e=u;if(e.enabled&&e.token)return e.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function se(){var e,t=(()=>{if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")})(),r=u;r.initialized=!0,"string"!=typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN&&!0!==t.FIREBASE_APPCHECK_DEBUG_TOKEN||(r.enabled=!0,e=new s,r.token=e,"string"==typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN?e.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):e.resolve(ne()))}let he={error:"UNKNOWN_ERROR"};async function C(e,t=!1){var r,a=e.app;E(a);let o=d(a),i=o.token,n=void 0;if(i&&!P(i)&&(o.token=void 0,i=void 0),i||(r=await o.cachedTokenPromise)&&(P(r)?i=r:await y(a,void 0)),!t&&i&&P(i))return{token:i.token};let s=!1;if(A())try{o.exchangeTokenPromise||(o.exchangeTokenPromise=m(J(a,await T()),e.heartbeatServiceProvider).finally(()=>{o.exchangeTokenPromise=void 0}),s=!0);var h=await o.exchangeTokenPromise;return await y(a,h),{token:(o.token=h).token}}catch(e){return"appCheck/throttled"===e.code?b.warn(e.message):b.error(e),I(e)}try{o.exchangeTokenPromise||(o.exchangeTokenPromise=o.provider.getToken().finally(()=>{o.exchangeTokenPromise=void 0}),s=!0),i=await d(a).exchangeTokenPromise}catch(e){"appCheck/throttled"===e.code?b.warn(e.message):b.error(e),n=e}let c;return i?n?c=P(i)?{token:i.token,internalError:n}:I(n):(c={token:i.token},await y(a,o.token=i)):c=I(n),s&&le(a,c),c}function S(t,e,r,a){var o=t.app,o=d(o),i={next:r,error:a,type:e};if(o.tokenObservers=[...o.tokenObservers,i],o.token&&P(o.token)){let e=o.token;Promise.resolve().then(()=>{r({token:e.token}),ce(t)}).catch(()=>{})}o.cachedTokenPromise.then(()=>ce(t))}function R(e,t){var r=d(e),a=r.tokenObservers.filter(e=>e.next!==t);0===a.length&&r.tokenRefresher&&r.tokenRefresher.isRunning()&&r.tokenRefresher.stop(),r.tokenObservers=a}function ce(e){var t=e.app,t=d(t);let r=t.tokenRefresher;r||(r=(r=>{let a=r.app;return new X(async()=>{var e=d(a);let t;if((t=e.token?await C(r,!0):await C(r)).error)throw t.error;if(t.internalError)throw t.internalError},()=>!0,()=>{var e,t=d(a);return t.token?(e=t.token.issuedAtTimeMillis+.5*(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)+3e5,t=t.token.expireTimeMillis-3e5,e=Math.min(e,t),Math.max(0,e-Date.now())):0},G.RETRIAL_MIN_WAIT,G.RETRIAL_MAX_WAIT)})(e),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function le(e,t){var r;for(r of d(e).tokenObservers)try{"EXTERNAL"===r.type&&null!=t.error?r.error(t.error):r.next(t)}catch(e){}}function P(e){return 0<e.expireTimeMillis-Date.now()}function I(e){return{token:(t=he,a.encodeString(JSON.stringify(t),!1)),error:e};var t}class pe{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){var e,t=d(this.app).tokenObservers;for(e of t)R(this.app,e.next);return Promise.resolve()}}function ue(t){return{getToken:e=>C(t,e),getLimitedUseToken:()=>(async e=>{var t=e.app,r=(E(t),d(t)).provider;return A()?{token:t=(await m(J(t,await T()),e.heartbeatServiceProvider)).token}:{token:t=(await r.getToken()).token}})(t),addTokenListener:e=>S(t,"INTERNAL",e),removeTokenListener:e=>R(t.app,e)}}let de="https://www.google.com/recaptcha/api.js",ge="https://www.google.com/recaptcha/enterprise.js";function fe(t,r){let a=new s;d(t).reCAPTCHAState={initialized:a};let o=Ee(t);var e,i=v(!1);return i?D(t,r,i,o,a):(e=()=>{var e=v(!1);if(!e)throw new Error("no recaptcha");D(t,r,e,o,a)},(i=document.createElement("script")).src=de,i.onload=e,document.head.appendChild(i)),a.promise}function ve(t,r){let a=new s;d(t).reCAPTCHAState={initialized:a};let o=Ee(t);var e,i=v(!0);return i?D(t,r,i,o,a):(e=()=>{var e=v(!0);if(!e)throw new Error("no recaptcha");D(t,r,e,o,a)},(i=document.createElement("script")).src=ge,i.onload=e,document.head.appendChild(i)),a.promise}function D(a,o,i,n,s){i.ready(()=>{var e,t,r;e=a,t=i.render(n,{sitekey:o,size:"invisible",callback:()=>{d(e).reCAPTCHAState.succeeded=!0},"error-callback":()=>{d(e).reCAPTCHAState.succeeded=!1}}),(r=d(e)).reCAPTCHAState=Object.assign(Object.assign({},r.reCAPTCHAState),{widgetId:t}),s.resolve(i)})}function Ee(e){var t="fire_app_check_"+e.name,r=document.createElement("div");return r.id=t,r.style.display="none",document.body.appendChild(r),t}async function we(a){E(a);let o=await d(a).reCAPTCHAState.initialized.promise;return new Promise((e,t)=>{let r=d(a).reCAPTCHAState;o.ready(()=>{e(o.execute(r.widgetId,{action:"fire_app_check"}))})})}class O{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){me(this._throttleData);var t,r=await we(this._app).catch(e=>{throw f.create("recaptcha-error")});if(null==(t=d(this._app).reCAPTCHAState)||!t.succeeded)throw f.create("recaptcha-error");let e;try{e=await m(((e,t)=>{var{projectId:r,appId:a,apiKey:o}=e.options;return{url:g+`/projects/${r}/apps/${a}:exchangeRecaptchaV3Token?key=`+o,body:{recaptcha_v3_token:t}}})(this._app,r),this._heartbeatServiceProvider)}catch(e){throw null!=(t=e.code)&&t.includes("fetch-status-error")?(this._throttleData=_e(Number(null==(r=e.customData)?void 0:r.httpStatus),this._throttleData),f.create("throttled",{time:w(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,e}initialize(e){this._app=e,this._heartbeatServiceProvider=Ce._getProvider(e,"heartbeat"),fe(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof O&&this._siteKey===e._siteKey}}class N{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){me(this._throttleData);var t,r=await we(this._app).catch(e=>{throw f.create("recaptcha-error")});if(null==(t=d(this._app).reCAPTCHAState)||!t.succeeded)throw f.create("recaptcha-error");let e;try{e=await m(((e,t)=>{var{projectId:r,appId:a,apiKey:o}=e.options;return{url:g+`/projects/${r}/apps/${a}:exchangeRecaptchaEnterpriseToken?key=`+o,body:{recaptcha_enterprise_token:t}}})(this._app,r),this._heartbeatServiceProvider)}catch(e){throw null!=(t=e.code)&&t.includes("fetch-status-error")?(this._throttleData=_e(Number(null==(r=e.customData)?void 0:r.httpStatus),this._throttleData),f.create("throttled",{time:w(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):e}return this._throttleData=null,e}initialize(e){this._app=e,this._heartbeatServiceProvider=Ce._getProvider(e,"heartbeat"),ve(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof N&&this._siteKey===e._siteKey}}class M{constructor(e){this._customProviderOptions=e}async getToken(){var e=await this._customProviderOptions.getToken(),t=j(e.token),t=null!==t&&t<Date.now()&&0<t?1e3*t:Date.now();return Object.assign(Object.assign({},e),{issuedAtTimeMillis:t})}initialize(e){this._app=e}isEqual(e){return e instanceof M&&this._customProviderOptions.getToken.toString()===e._customProviderOptions.getToken.toString()}}function _e(e,t){var r,a,o;return 404===e||403===e?{backoffCount:1,allowRequestsAfter:Date.now()+864e5,httpStatus:e}:(r=t?t.backoffCount:0,t=2,a=1e3*Math.pow(t,r),o=Math.round(F*a*(Math.random()-.5)*2),a=Math.min(W,a+o),{backoffCount:r+1,allowRequestsAfter:Date.now()+a,httpStatus:e})}function me(e){if(e&&Date.now()-e.allowRequestsAfter<=0)throw f.create("throttled",{time:w(e.allowRequestsAfter-Date.now()),httpStatus:e.httpStatus})}function ke(e=Ce.getApp(),r){e=(n=e)&&n._delegate?n._delegate:n;var t=Ce._getProvider(e,"app-check");if(u.initialized||se(),A()&&T().then(e=>console.log(`App Check debug token: ${e}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){var a=t.getImmediate(),o=t.getOptions();if(o.isTokenAutoRefreshEnabled===r.isTokenAutoRefreshEnabled&&o.provider.isEqual(r.provider))return a;throw f.create("already-initialized",{appName:e.name})}o=t.initialize({options:r});{var i=e,n=r.provider;r=r.isTokenAutoRefreshEnabled;let t=((e,t)=>(p.set(e,t),p.get(e)))(i,Object.assign({},z));t.activated=!0,t.provider=n,t.cachedTokenPromise=ie(i).then(e=>(e&&P(e)&&(t.token=e,le(i,{token:e.token})),e)),t.isTokenAutoRefreshEnabled=void 0===r?i.automaticDataCollectionEnabled:r,t.provider.initialize(i)}return d(e).isTokenAutoRefreshEnabled&&S(o,"INTERNAL",()=>{}),o}let be="app-check-internal";Ce._registerComponent(new l("app-check",e=>{var t,r=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat");return e=r,t=a,new pe(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider(be).initialize()})),Ce._registerComponent(new l(be,e=>ue(e.getProvider("app-check").getImmediate()),"PUBLIC").setInstantiationMode("EXPLICIT")),Ce.registerVersion("@firebase/app-check","0.8.12");let L=new i("appCheck","AppCheck",{"use-before-activation":"App Check is being used before activate() is called for FirebaseApp {$appName}. Call activate() before instantiating other Firebase services."});class ye{constructor(e){this.app=e}activate(e,t){let r;r="string"==typeof e?new O(e):e instanceof N||e instanceof O||e instanceof M?e:new M({getToken:e.getToken}),this._delegate=ke(this.app,{provider:r,isTokenAutoRefreshEnabled:t})}setTokenAutoRefreshEnabled(e){if(!this._delegate)throw L.create("use-before-activation",{appName:this.app.name});var t,r;t=this._delegate,e=e,(r=d(t.app)).tokenRefresher&&(!0===e?r.tokenRefresher.start():r.tokenRefresher.stop()),r.isTokenAutoRefreshEnabled=e}getToken(e){if(this._delegate)return(async(e,t)=>{var r=await C(e,t);if(r.error)throw r.error;return{token:r.token}})(this._delegate,e);throw L.create("use-before-activation",{appName:this.app.name})}onTokenChanged(r,a,e){if(this._delegate){var o=this._delegate;let e=()=>{},t=()=>{};return e=null!=r.next?r.next.bind(r):r,null!=r.error?t=r.error.bind(r):a&&(t=a),S(o,"EXTERNAL",e,t),()=>R(o.app,e)}throw L.create("use-before-activation",{appName:this.app.name})}}let Ae=e=>{var t=e.getProvider("app-compat").getImmediate();return new ye(t)};r.default.INTERNAL.registerComponent(new l("appCheck-compat",Ae,"PUBLIC").setServiceProps({ReCaptchaEnterpriseProvider:N,ReCaptchaV3Provider:O,CustomProvider:M})),r.default.registerVersion("@firebase/app-check-compat","0.3.19")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-app-check-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-app-check-compat.js.map
