((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).firebase=t()})(this,function(){let F=()=>{},r=function(t){var r=[];let n=0;for(let a=0;a<t.length;a++){let e=t.charCodeAt(a);e<128?r[n++]=e:(e<2048?r[n++]=e>>6|192:(55296==(64512&e)&&a+1<t.length&&56320==(64512&t.charCodeAt(a+1))?(e=65536+((1023&e)<<10)+(1023&t.charCodeAt(++a)),r[n++]=e>>18|240,r[n++]=e>>12&63|128):r[n++]=e>>12|224,r[n++]=e>>6&63|128),r[n++]=63&e|128)}return r},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let h=0;h<r.length;h+=3){var i=r[h],s=h+1<r.length,o=s?r[h+1]:0,l=h+2<r.length,c=l?r[h+2]:0;let e=(15&o)<<2|c>>6,t=63&c;l||(t=64,s)||(e=64),a.push(n[i>>2],n[(3&i)<<4|o>>4],n[e],n[t])}return a.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(r,n){if(this.HAS_NATIVE_SUPPORT&&!n)return atob(r);{var a=this.decodeStringToByteArray(r,n);var i=[];let e=0,t=0;for(;e<a.length;){var s,o,l,c=a[e++];c<128?i[t++]=String.fromCharCode(c):191<c&&c<224?(s=a[e++],i[t++]=String.fromCharCode((31&c)<<6|63&s)):239<c&&c<365?(s=((7&c)<<18|(63&a[e++])<<12|(63&a[e++])<<6|63&a[e++])-65536,i[t++]=String.fromCharCode(55296+(s>>10)),i[t++]=String.fromCharCode(56320+(1023&s))):(o=a[e++],l=a[e++],i[t++]=String.fromCharCode((15&c)<<12|(63&o)<<6|63&l))}return i.join("");return}},decodeStringToByteArray(e,t){this.init_();var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let l=0;l<e.length;){var a=r[e.charAt(l++)],i=l<e.length?r[e.charAt(l)]:0,s=++l<e.length?r[e.charAt(l)]:64,o=++l<e.length?r[e.charAt(l)]:64;if(++l,null==a||null==i||null==s||null==o)throw new M;n.push(a<<2|i>>4),64!==s&&(n.push(i<<4&240|s>>2),64!==o)&&n.push(s<<6&192|o)}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),(this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e)>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class M extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}function j(e){var t=r(e);return n.encodeByteArray(t,!0)}let i=function(e){return j(e).replace(/\./g,"")},z=function(e){try{return n.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var r in t)t.hasOwnProperty(r)&&"__proto__"!==r&&(e[r]=l(e[r],t[r]));return e}function x(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}let H=()=>x().__FIREBASE_DEFAULTS__,V=()=>{var e;return"undefined"!=typeof process&&void 0!==process.env&&(e=process.env.__FIREBASE_DEFAULTS__)?JSON.parse(e):void 0},$=()=>{if("undefined"!=typeof document){let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}var t=e&&z(e[1]);return t&&JSON.parse(t)}},W=()=>{try{return F()||H()||V()||$()}catch(e){console.info("Unable to get __FIREBASE_DEFAULTS__ due to: "+e)}},U=()=>{var e;return null==(e=W())?void 0:e.config};class J{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(r){return(e,t)=>{e?this.reject(e):this.resolve(t),"function"==typeof r&&(this.promise.catch(()=>{}),1===r.length?r(e):r(e,t))}}}function G(){return"undefined"!=typeof WorkerGlobalScope&&"undefined"!=typeof self&&self instanceof WorkerGlobalScope}class s extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,s.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){var n,r=t[0]||{},a=this.service+"/"+e,i=this.errors[e],i=i?(n=r,i.replace(K,(e,t)=>{var r=n[t];return null!=r?String(r):`<${t}?>`})):"Error",i=this.serviceName+`: ${i} (${a}).`;return new s(a,i,r)}}let K=/\{\$([^}]+)}/g;function Y(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){if(e!==t){var r,n,a=Object.keys(e),i=Object.keys(t);for(r of a){if(!i.includes(r))return;var s=e[r],o=t[r];if(X(s)&&X(o)){if(!c(s,o))return}else if(s!==o)return}for(n of i)if(!a.includes(n))return}return 1}function X(e){return null!==e&&"object"==typeof e}function q(e,t){var r=new Z(e,t);return r.subscribe.bind(r)}class Z{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=((e,t)=>{if("object"==typeof e&&null!==e)for(var r of t)if(r in e&&"function"==typeof e[r])return 1})(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=o),void 0===n.error&&(n.error=o),void 0===n.complete&&(n.complete=o);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],--this.observerCount,0===this.observerCount)&&void 0!==this.onNoObservers&&this.onNoObservers(this)}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function o(){}class h{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}let d="[DEFAULT]";class Q{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new J;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!=(r=null==e?void 0:e.optional)&&r;if(!this.isInitialized(t)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:d})}catch(e){}for(var[t,r]of this.instancesDeferred.entries()){t=this.normalizeInstanceIdentifier(t);try{var n=this.getOrInitializeService({instanceIdentifier:t});r.resolve(n)}catch(e){}}}}clearInstance(e=d){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){var e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=d){return this.instances.has(e)}getOptions(e=d){return this.instancesOptions.get(e)||{}}initialize(e={}){var{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(this.name+`(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);var n,a,i=this.getOrInitializeService({instanceIdentifier:r,options:t});for([n,a]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(n)&&a.resolve(i);return i}onInit(e,t){var r=this.normalizeInstanceIdentifier(t);let n=null!=(a=this.onInitCallbacks.get(r))?a:new Set;n.add(e),this.onInitCallbacks.set(r,n);var a=this.instances.get(r);return a&&e(a,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){var r=this.onInitCallbacks.get(t);if(r)for(var n of r)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e)===d?void 0:n,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(e){}var n;return r||null}normalizeInstanceIdentifier(e=d){return!this.component||this.component.multipleInstances?e:d}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ee{constructor(e){this.name=e,this.providers=new Map}addComponent(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with `+this.name);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){var t;return this.providers.has(e)?this.providers.get(e):(t=new Q(e,this),this.providers.set(e,t),t)}getProviders(){return Array.from(this.providers.values())}}let p=[];var u,f;(e=u=u||{})[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT";let te={debug:u.DEBUG,verbose:u.VERBOSE,info:u.INFO,warn:u.WARN,error:u.ERROR,silent:u.SILENT},re=u.INFO,ne={[u.DEBUG]:"log",[u.VERBOSE]:"log",[u.INFO]:"info",[u.WARN]:"warn",[u.ERROR]:"error"},ae=(e,t,...r)=>{if(!(t<e.logLevel)){var n=(new Date).toISOString(),a=ne[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...r)}};class ie{constructor(e){this.name=e,this._logLevel=re,this._logHandler=ae,this._userLogHandler=null,p.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in u))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?te[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,u.DEBUG,...e),this._logHandler(this,u.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,u.VERBOSE,...e),this._logHandler(this,u.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,u.INFO,...e),this._logHandler(this,u.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,u.WARN,...e),this._logHandler(this,u.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,u.ERROR,...e),this._logHandler(this,u.ERROR,...e)}}let se=(t,e)=>e.some(e=>t instanceof e),oe,le;let ce=new WeakMap,g=new WeakMap,he=new WeakMap,b=new WeakMap,v=new WeakMap;let m={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return g.get(e);if("objectStoreNames"===t)return e.objectStoreNames||he.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function de(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(le=le||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(n)?function(...e){return n.apply(y(this),e),_(ce.get(this))}:function(...e){return _(n.apply(y(this),e))}:function(e,...t){var r=n.call(y(this),e,...t);return he.set(r,e.sort?e.sort():[e]),_(r)}}function pe(e){var i,t;return"function"==typeof e?de(e):(e instanceof IDBTransaction&&(i=e,g.has(i)||(t=new Promise((e,t)=>{let r=()=>{i.removeEventListener("complete",n),i.removeEventListener("error",a),i.removeEventListener("abort",a)},n=()=>{e(),r()},a=()=>{t(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",n),i.addEventListener("error",a),i.addEventListener("abort",a)}),g.set(i,t))),se(e,oe=oe||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,m):e)}function _(e){var i,t;return e instanceof IDBRequest?(i=e,(t=new Promise((e,t)=>{let r=()=>{i.removeEventListener("success",n),i.removeEventListener("error",a)},n=()=>{e(_(i.result)),r()},a=()=>{t(i.error),r()};i.addEventListener("success",n),i.addEventListener("error",a)})).then(e=>{e instanceof IDBCursor&&ce.set(e,i)}).catch(()=>{}),v.set(t,i),t):b.has(e)?b.get(e):((t=pe(e))!==e&&(b.set(e,t),v.set(t,e)),t)}let y=e=>v.get(e);let ue=["get","getKey","getAll","getAllKeys","count"],fe=["put","add","delete","clear"],E=new Map;function ge(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(E.get(t))return E.get(t);let a=t.replace(/FromIndex$/,""),i=t!==a,s=fe.includes(a);var r;return a in(i?IDBIndex:IDBObjectStore).prototype&&(s||ue.includes(a))?(r=async function(e,...t){var r=this.transaction(e,s?"readwrite":"readonly");let n=r.store;return i&&(n=n.index(t.shift())),(await Promise.all([n[a](...t),s&&r.done]))[0]},E.set(t,r),r):void 0}}m={...f=m,get:(e,t,r)=>ge(e,t)||f.get(e,t,r),has:(e,t)=>!!ge(e,t)||f.has(e,t)};class be{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{var t;return"VERSION"===(null==(t=e.getComponent())?void 0:t.type)?(t=e.getImmediate()).library+"/"+t.version:null}).filter(e=>e).join(" ")}}let C="@firebase/app",w="0.11.2",I=new ie("@firebase/app");var e;let D="[DEFAULT]",ve={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},S=new Map,O=new Map,A=new Map;function N(t,r){try{t.container.addComponent(r)}catch(e){I.debug(`Component ${r.name} failed to register with FirebaseApp `+t.name,e)}}function me(e,t){e.container.addOrOverwriteComponent(t)}function L(e){var t,r,n=e.name;if(A.has(n))return I.debug(`There were multiple attempts to register component ${n}.`),!1;A.set(n,e);for(t of S.values())N(t,e);for(r of O.values())N(r,e);return!0}function _e(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function ye(e){return void 0!==e.options}let B=new a("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});class Ee{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new h("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw B.create("app-deleted",{appName:this._name})}}function Ce(e,t){var r=z(e.split(".")[1]);null===r?console.error(`FirebaseServerApp ${t} is invalid: second part could not be parsed.`):void 0===JSON.parse(r).exp?console.error(`FirebaseServerApp ${t} is invalid: expiration claim could not be parsed`):1e3*JSON.parse(r).exp-(new Date).getTime()<=0&&console.error(`FirebaseServerApp ${t} is invalid: the token has expired.`)}class we extends Ee{constructor(e,t,r,n){var a=void 0!==t.automaticDataCollectionEnabled&&t.automaticDataCollectionEnabled,i={name:r,automaticDataCollectionEnabled:a};void 0!==e.apiKey?super(e,i,n):super(e.options,i,n),this._serverConfig=Object.assign({automaticDataCollectionEnabled:a},t),this._serverConfig.authIdToken&&Ce(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&Ce(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,"undefined"!=typeof FinalizationRegistry&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,R(C,w,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,void 0!==e&&null!==this._finalizationRegistry&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){t(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw B.create("server-app-deleted")}}let Ie="11.4.0";function T(e,t={}){let r=e;if("object"!=typeof t){let e=t;t={name:e}}var n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t);let a=n.name;if("string"!=typeof a||!a)throw B.create("bad-app-name",{appName:String(a)});if(!(r=r||U()))throw B.create("no-options");var i=S.get(a);if(i){if(c(r,i.options)&&c(n,i.config))return i;throw B.create("duplicate-app",{appName:a})}var s,o=new ee(a);for(s of A.values())o.addComponent(s);i=new Ee(r,n,o);return S.set(a,i),i}async function t(e){let t=!1;var r=e.name;S.has(r)?(t=!0,S.delete(r)):O.has(r)&&e.decRefCount()<=0&&(O.delete(r),t=!0),t&&(await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function R(e,t,r){let n,a=null!=(n=ve[e])?n:e;r&&(a+="-"+r);var i,s=a.match(/\s|\//),o=t.match(/\s|\//);s||o?(i=[`Unable to register library "${a}" with version "${t}":`],s&&i.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&i.push("and"),o&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),I.warn(i.join(" "))):L(new h(a+"-version",()=>({library:a,version:t}),"VERSION"))}function De(e,t){if(null!==e&&"function"!=typeof e)throw B.create("invalid-log-argument");var r,i=e,n=t;for(r of p){let a=null;n&&n.level&&(a=te[n.level]),r.userLogHandler=null===i?null:(e,t,...r)=>{var n=r.map(e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}}).filter(e=>e).join(" ");t>=(null!=a?a:e.logLevel)&&i({level:u[t].toLowerCase(),message:n,args:r,type:e.name})}}}function Se(e){var t;t=e,p.forEach(e=>{e.setLogLevel(t)})}let Oe="firebase-heartbeat-database",Ae=1,k="firebase-heartbeat-store",Ne=null;function Le(){return Ne=Ne||((e,t,{blocked:r,upgrade:n,blocking:a,terminated:i})=>{let s=indexedDB.open(e,t);var o=_(s);return n&&s.addEventListener("upgradeneeded",e=>{n(_(s.result),e.oldVersion,e.newVersion,_(s.transaction),e)}),r&&s.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),a&&e.addEventListener("versionchange",e=>a(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})(Oe,Ae,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(k)}catch(e){console.warn(e)}}}).catch(e=>{throw B.create("idb-open",{originalErrorMessage:e.message})})}async function Be(e,t){try{var r=(await Le()).transaction(k,"readwrite");await r.objectStore(k).put(t,Te(e)),await r.done}catch(e){e instanceof s?I.warn(e.message):(r=B.create("idb-set",{originalErrorMessage:null==e?void 0:e.message}),I.warn(r.message))}}function Te(e){return e.name+"!"+e.options.appId}class Re{constructor(e){this.container=e,this._heartbeatsCache=null;var t=this.container.getProvider("app").getImmediate();this._storage=new Pe(t),this._heartbeatsCachePromise=this._storage.read().then(e=>this._heartbeatsCache=e)}async triggerHeartbeat(){var e,r;try{var n,a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString();let t=ke();if(null!=(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null==(r=this._heartbeatsCache)?void 0:r.heartbeats)))if(this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some(e=>e.date===t))return this._heartbeatsCache.heartbeats.push({date:t,agent:a}),30<this._heartbeatsCache.heartbeats.length&&(n=(e=>{if(0===e.length)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t})(this._heartbeatsCache.heartbeats),this._heartbeatsCache.heartbeats.splice(n,1)),this._storage.overwrite(this._heartbeatsCache)}catch(e){I.warn(e)}}async getHeartbeatsHeader(){var e,t,r,n,a;try{return(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null==(e=this._heartbeatsCache)?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)?"":(t=ke(),{heartbeatsToSend:r,unsentEntries:n}=((e,t=1024)=>{let r=[],n=e.slice();for(let i of e){var a=r.find(e=>e.agent===i.agent);if(a){if(a.dates.push(i.date),Fe(r)>t){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Fe(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}})(this._heartbeatsCache.heartbeats),a=i(JSON.stringify({version:2,heartbeats:r})),this._heartbeatsCache.lastSentHeartbeatDate=t,0<n.length?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a)}catch(e){return I.warn(e),""}}}function ke(){return(new Date).toISOString().substring(0,10)}class Pe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(()=>{try{return"object"==typeof indexedDB}catch(e){}})()&&new Promise((n,a)=>{try{let e=!0,t="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(t);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(t),n(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var e;a((null==(e=r.error)?void 0:e.message)||"")}}catch(e){a(e)}}).then(()=>!0).catch(()=>!1)}async read(){var e;return await this._canUseIndexedDBPromise&&null!=(e=await(async e=>{try{var t=(await Le()).transaction(k),r=await t.objectStore(k).get(Te(e));return await t.done,r}catch(e){e instanceof s?I.warn(e.message):(t=B.create("idb-get",{originalErrorMessage:null==e?void 0:e.message}),I.warn(t.message))}})(this.app))&&e.heartbeats?e:{heartbeats:[]}}async overwrite(e){var t,r;if(await this._canUseIndexedDBPromise)return r=await this.read(),Be(this.app,{lastSentHeartbeatDate:null!=(t=e.lastSentHeartbeatDate)?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}async add(e){var t,r;if(await this._canUseIndexedDBPromise)return r=await this.read(),Be(this.app,{lastSentHeartbeatDate:null!=(t=e.lastSentHeartbeatDate)?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}}function Fe(e){return i(JSON.stringify({version:2,heartbeats:e})).length}e="",L(new h("platform-logger",e=>new be(e),"PRIVATE")),L(new h("heartbeat",e=>new Re(e),"PRIVATE")),R(C,w,e),R(C,w,"esm2017"),R("fire-js","");var Me=Object.freeze({__proto__:null,SDK_VERSION:Ie,_DEFAULT_ENTRY_NAME:D,_addComponent:N,_addOrOverwriteComponent:me,_apps:S,_clearComponents:function(){A.clear()},_components:A,_getProvider:_e,_isFirebaseApp:ye,_isFirebaseServerApp:function(e){return null!=e&&void 0!==e.settings},_registerComponent:L,_removeServiceInstance:function(e,t,r=D){_e(e,t).clearInstance(r)},_serverApps:O,deleteApp:t,getApp:function(e=D){var t=S.get(e);if(!t&&e===D&&U())return T();if(t)return t;throw B.create("no-app",{appName:e})},getApps:function(){return Array.from(S.values())},initializeApp:T,initializeServerApp:function(e,t){if(("undefined"!=typeof window||G())&&!G())throw B.create("invalid-server-app-environment");void 0===t.automaticDataCollectionEnabled&&(t.automaticDataCollectionEnabled=!1);let r;r=ye(e)?e.options:e;var n=Object.assign(Object.assign({},t),r);if(void 0!==n.releaseOnDeref&&delete n.releaseOnDeref,void 0!==t.releaseOnDeref&&"undefined"==typeof FinalizationRegistry)throw B.create("finalization-registry-not-supported",{});var n=""+[...JSON.stringify(n)].reduce((e,t)=>Math.imul(31,e)+t.charCodeAt(0)|0,0),a=O.get(n);if(a)a.incRefCount(t.releaseOnDeref);else{var i,s=new ee(n);for(i of A.values())s.addComponent(i);a=new we(r,t,n,s),O.set(n,a)}return a},onLog:De,registerVersion:R,setLogLevel:Se,FirebaseError:s});class je{constructor(e,t){this._delegate=e,this.firebase=t,N(e,new h("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),t(this._delegate)))}_getService(e,t=D){this._delegate.checkDestroyed();var r,n=this._delegate.container.getProvider(e);return n.isInitialized()||"EXPLICIT"!==(null==(r=n.getComponent())?void 0:r.instantiationMode)||n.initialize(),n.getImmediate({identifier:t})}_removeServiceInstance(e,t=D){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){N(this._delegate,e)}_addOrOverwriteComponent(e){me(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}let ze=new a("app-compat","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."});function xe(a){let i={},s={__esModule:!0,initializeApp:function(e,t={}){var r=T(e,t);if(Y(i,r.name))return i[r.name];var n=new a(r,s);return i[r.name]=n},app:o,registerVersion:R,setLogLevel:Se,onLog:De,apps:null,SDK_VERSION:Ie,INTERNAL:{registerComponent:function(t){let r=t.name,n=r.replace("-compat","");{var e;L(t)&&"PUBLIC"===t.type&&(e=(e=o())=>{if("function"!=typeof e[n])throw ze.create("invalid-app-argument",{appName:r});return e[n]()},void 0!==t.serviceProps&&l(e,t.serviceProps),s[n]=e,a.prototype[n]=function(...e){return this._getService.bind(this,r).apply(this,t.multipleInstances?e:[])})}return"PUBLIC"===t.type?s[n]:null},removeApp:function(e){delete i[e]},useAsService:function(e,t){if("serverAuth"===t)return null;var r=t;return r},modularAPIs:Me}};function o(e){if(e=e||D,Y(i,e))return i[e];throw ze.create("no-app",{appName:e})}return s.default=s,Object.defineProperty(s,"apps",{get:function(){return Object.keys(i).map(e=>i[e])}}),o.App=a,s}var He=function e(){let t=xe(je);return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){l(t,e)},createSubscribe:q,ErrorFactory:a,deepExtend:l}),t}(),Ve=new ie("@firebase/app-compat");try{var $e,P=x();void 0!==P.firebase&&(Ve.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `),$e=P.firebase.SDK_VERSION)&&0<=$e.indexOf("LITE")&&Ve.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}catch(e){}P=He;R("@firebase/app-compat","0.2.51",void 0);return P.registerVersion("firebase","11.4.0","app-compat-cdn"),P});
//# sourceMappingURL=firebase-app-compat.js.map
