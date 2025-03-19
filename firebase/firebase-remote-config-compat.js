((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)})(this,function(We,Ge){try{!(function(){function A(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var g,r,R=A(We);function h(){try{return"object"==typeof indexedDB}catch(e){}}class c extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,s.prototype.create)}}class s{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){var r,a=t[0]||{},s=this.service+"/"+e,i=this.errors[e],i=i?(r=a,i.replace(B,(e,t)=>{var a=r[t];return null!=a?String(a):`<${t}?>`})):"Error",i=this.serviceName+`: ${i} (${s}).`;return new c(s,i,a)}}let B=/\{\$([^}]+)}/g;function i(e){return e&&e._delegate?e._delegate:e}class e{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}(w=g=g||{})[w.DEBUG=0]="DEBUG",w[w.VERBOSE=1]="VERBOSE",w[w.INFO=2]="INFO",w[w.WARN=3]="WARN",w[w.ERROR=4]="ERROR",w[w.SILENT=5]="SILENT";let x={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},H=g.INFO,$={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},V=(e,t,...a)=>{if(!(t<e.logLevel)){var r=(new Date).toISOString(),s=$[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...a)}};class q{constructor(e){this.name=e,this._logLevel=H,this._logHandler=V,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in g))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?x[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...e),this._logHandler(this,g.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...e),this._logHandler(this,g.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,g.INFO,...e),this._logHandler(this,g.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,g.WARN,...e),this._logHandler(this,g.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...e),this._logHandler(this,g.ERROR,...e)}}let K=(t,e)=>e.some(e=>t instanceof e),a,t;let n=new WeakMap,o=new WeakMap,U=new WeakMap,l=new WeakMap,u=new WeakMap;let d={get(e,t,a){if(e instanceof IDBTransaction){if("done"===t)return o.get(e);if("objectStoreNames"===t)return e.objectStoreNames||U.get(e);if("store"===t)return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return f(e[t])},set(e,t,a){return e[t]=a,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function z(r){return r!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t=t||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(r)?function(...e){return r.apply(p(this),e),f(n.get(this))}:function(...e){return f(r.apply(p(this),e))}:function(e,...t){var a=r.call(p(this),e,...t);return U.set(a,e.sort?e.sort():[e]),f(a)}}function W(e){var i,t;return"function"==typeof e?z(e):(e instanceof IDBTransaction&&(i=e,o.has(i)||(t=new Promise((e,t)=>{let a=()=>{i.removeEventListener("complete",r),i.removeEventListener("error",s),i.removeEventListener("abort",s)},r=()=>{e(),a()},s=()=>{t(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",r),i.addEventListener("error",s),i.addEventListener("abort",s)}),o.set(i,t))),K(e,a=a||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,d):e)}function f(e){var i,t;return e instanceof IDBRequest?(i=e,(t=new Promise((e,t)=>{let a=()=>{i.removeEventListener("success",r),i.removeEventListener("error",s)},r=()=>{e(f(i.result)),a()},s=()=>{t(i.error),a()};i.addEventListener("success",r),i.addEventListener("error",s)})).then(e=>{e instanceof IDBCursor&&n.set(e,i)}).catch(()=>{}),u.set(t,i),t):l.has(e)?l.get(e):((t=W(e))!==e&&(l.set(e,t),u.set(t,e)),t)}let p=e=>u.get(e);let G=["get","getKey","getAll","getAllKeys","count"],J=["put","add","delete","clear"],m=new Map;function Y(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(m.get(t))return m.get(t);let s=t.replace(/FromIndex$/,""),i=t!==s,n=J.includes(s);var a;return s in(i?IDBIndex:IDBObjectStore).prototype&&(n||G.includes(s))?(a=async function(e,...t){var a=this.transaction(e,n?"readwrite":"readonly");let r=a.store;return i&&(r=r.index(t.shift())),(await Promise.all([r[s](...t),n&&a.done]))[0]},m.set(t,a),a):void 0}}d={...r=d,get:(e,t,a)=>Y(e,t)||r.get(e,t,a),has:(e,t)=>!!Y(e,t)||r.has(e,t)};var Z="@firebase/installations",v="0.6.13";let Q=1e4,X="w:"+v,ee="FIS_v2",te="https://firebaseinstallations.googleapis.com/v1",ae=36e5;var w;let _=new s("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function re(e){return e instanceof c&&e.code.includes("request-failed")}function se({projectId:e}){return te+`/projects/${e}/installations`}function ie(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function ne(e,t){var a=(await t.json()).error;return _.create("request-failed",{requestName:e,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function oe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ce(e,{refreshToken:t}){var a=oe(e);return a.append("Authorization",(e=t,ee+" "+e)),a}async function le(e){var t=await e();return 500<=t.status&&t.status<600?e():t}function ue(t){return new Promise(e=>{setTimeout(e,t)})}let ge=/^[cdef][\w-]{21}$/,y="";function he(){try{var e=new Uint8Array(17),t=((self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16,(e=>btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_"))(e).substr(0,22));return ge.test(t)?t:y}catch(e){return y}}function S(e){return e.appName+"!"+e.appId}let de=new Map;function fe(e,t){var a=S(e),e=(pe(a,t),a),a=(()=>(!b&&"BroadcastChannel"in self&&((b=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{pe(e.data.key,e.data.fid)}),b))();a&&a.postMessage({key:e,fid:t}),0===de.size&&b&&(b.close(),b=null)}function pe(e,t){var a=de.get(e);if(a)for(var r of a)r(t)}let b=null;let me="firebase-installations-database",ve=1,C="firebase-installations-store",we=null;function E(){return we=we||((e,t,{blocked:a,upgrade:r,blocking:s,terminated:i})=>{let n=indexedDB.open(e,t);var o=f(n);return r&&n.addEventListener("upgradeneeded",e=>{r(f(n.result),e.oldVersion,e.newVersion,f(n.transaction),e)}),a&&n.addEventListener("blocked",e=>a(e.oldVersion,e.newVersion,e)),o.then(e=>{i&&e.addEventListener("close",()=>i()),s&&e.addEventListener("versionchange",e=>s(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})(me,ve,{upgrade:(e,t)=>{0===t&&e.createObjectStore(C)}})}async function I(e,t){var a=S(e),r=(await E()).transaction(C,"readwrite"),s=r.objectStore(C),i=await s.get(a);return await s.put(t,a),await r.done,i&&i.fid===t.fid||fe(e,t.fid),t}async function _e(e){var t=S(e),a=(await E()).transaction(C,"readwrite");await a.objectStore(C).delete(t),await a.done}async function T(e,t){var a=S(e),r=(await E()).transaction(C,"readwrite"),s=r.objectStore(C),i=await s.get(a),n=t(i);return void 0===n?await s.delete(a):await s.put(n,a),await r.done,!n||i&&i.fid===n.fid||fe(e,n.fid),n}async function L(a){let r;var e=await T(a.appConfig,e=>{var t=Se(e||{fid:he(),registrationStatus:0}),t=((e,t)=>{var a,r;return 0===t.registrationStatus?navigator.onLine?(a={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=(async(t,a)=>{try{var e=await(async({appConfig:e,heartbeatServiceProvider:t},{fid:a})=>{let r=se(e);var s=oe(e),i=((i=t.getImmediate({optional:!0}))&&(i=await i.getHeartbeatsHeader())&&s.append("x-firebase-client",i),{fid:a,authVersion:ee,appId:e.appId,sdkVersion:X});let n={method:"POST",headers:s,body:JSON.stringify(i)};if((s=await le(()=>fetch(r,n))).ok)return{fid:(i=await s.json()).fid||a,registrationStatus:2,refreshToken:i.refreshToken,authToken:ie(i.authToken)};throw await ne("Create Installation",s)})(t,a);return I(t.appConfig,e)}catch(e){throw re(e)&&409===e.customData.serverCode?await _e(t.appConfig):await I(t.appConfig,{fid:a.fid,registrationStatus:0}),e}})(e,a),{installationEntry:a,registrationPromise:r}):(a=Promise.reject(_.create("app-offline")),{installationEntry:t,registrationPromise:a}):1===t.registrationStatus?{installationEntry:t,registrationPromise:(async e=>{let t=await ye(e.appConfig);for(;1===t.registrationStatus;)await ue(100),t=await ye(e.appConfig);var a,r;return 0!==t.registrationStatus?t:({installationEntry:a,registrationPromise:r}=await L(e),r||a)})(e)}:{installationEntry:t}})(a,t);return r=t.registrationPromise,t.installationEntry});return e.fid===y?{installationEntry:await r}:{installationEntry:e,registrationPromise:r}}function ye(e){return T(e,e=>{if(e)return Se(e);throw _.create("installation-not-found")})}function Se(e){var t;return 1===(t=e).registrationStatus&&t.registrationTime+Q<Date.now()?{fid:e.fid,registrationStatus:0}:e}async function be({appConfig:e,heartbeatServiceProvider:t},a){[s,i]=[e,a.fid];let r=se(s)+`/${i}/authTokens:generate`;var s,i,n=ce(e,a),o=t.getImmediate({optional:!0}),o=(o&&(o=await o.getHeartbeatsHeader())&&n.append("x-firebase-client",o),{installation:{sdkVersion:X,appId:e.appId}});let c={method:"POST",headers:n,body:JSON.stringify(o)};n=await le(()=>fetch(r,c));if(n.ok)return ie(await n.json());throw await ne("Generate Auth Token",n)}async function M(r,s=!1){let i;var e=await T(r.appConfig,e=>{if(!Ee(e))throw _.create("not-registered");var t,a=e.authToken;if(s||2!==(t=a).requestStatus||(e=>{var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ae})(t)){if(1===a.requestStatus)return i=(async(e,t)=>{let a=await Ce(e.appConfig);for(;1===a.authToken.requestStatus;)await ue(100),a=await Ce(e.appConfig);var r=a.authToken;return 0===r.requestStatus?M(e,t):r})(r,s),e;if(navigator.onLine)return t=e,a={requestStatus:1,requestTime:Date.now()},a=Object.assign(Object.assign({},t),{authToken:a}),i=(async(t,a)=>{try{var e=await be(t,a),r=Object.assign(Object.assign({},a),{authToken:e});return await I(t.appConfig,r),e}catch(e){var s;throw!re(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode?(s=Object.assign(Object.assign({},a),{authToken:{requestStatus:0}}),await I(t.appConfig,s)):await _e(t.appConfig),e}})(r,a),a;throw _.create("app-offline")}return e});return i?await i:e.authToken}function Ce(e){return T(e,e=>{var t,a;if(Ee(e))return t=e.authToken,1===(a=t).requestStatus&&a.requestTime+Q<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;throw _.create("not-registered")})}function Ee(e){return void 0!==e&&2===e.registrationStatus}async function Ie(e,t=!1){var a=e,r=(await(!(r=(await L(a)).registrationPromise)||!await r),await M(a,t));return r.token}function P(e){return _.create("missing-app-config-values",{valueName:e})}let Te="installations",Le=e=>{var t=e.getProvider("app").getImmediate();return{app:t,appConfig:(e=>{if(!e||!e.options)throw P("App Configuration");if(!e.name)throw P("App Name");var t;for(t of["projectId","apiKey","appId"])if(!e.options[t])throw P(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}})(t),heartbeatServiceProvider:Ge._getProvider(t,"heartbeat"),_delete:()=>Promise.resolve()}},Me=e=>{var t=e.getProvider("app").getImmediate();let a=Ge._getProvider(t,Te).getImmediate();return{getId:()=>(async e=>{var t=e,{installationEntry:a,registrationPromise:r}=await L(t);return(r||M(t)).catch(console.error),a.fid})(a),getToken:e=>Ie(a,e)}};Ge._registerComponent(new e(Te,Le,"PUBLIC")),Ge._registerComponent(new e("installations-internal",Me,"PRIVATE")),Ge.registerVersion(Z,v),Ge.registerVersion(Z,v,"esm2017");let D="@firebase/remote-config";class Pe{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}let F=new s("remoteconfig","Remote Config",{"already-initialized":"Remote Config already initialized","registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser","custom-signal-max-allowed-signals":"Setting more than {$maxSignals} custom signals is not supported."});let De=["1","true","t","yes","y","on"];class k{constructor(e,t=""){this._source=e,this._value=t}asString(){return this._value}asBoolean(){return"static"!==this._source&&0<=De.indexOf(this._value.toLowerCase())}asNumber(){if("static"===this._source)return 0;let e=Number(this._value);return e=isNaN(e)?0:e}getSource(){return this._source}}async function Fe(e){var t=i(e),[a,r]=await Promise.all([t._storage.getLastSuccessfulFetchResponse(),t._storage.getActiveConfigEtag()]);return!!(a&&a.config&&a.eTag&&a.eTag!==r)&&(await Promise.all([t._storageCache.setActiveConfig(a.config),t._storage.setActiveConfigEtag(a.eTag)]),!0)}function ke(e){let t=i(e);return t._initializePromise||(t._initializePromise=t._storageCache.loadFromStorage().then(()=>{t._isInitializationComplete=!0})),t._initializePromise}async function Oe(t){var a=i(t);let e=new Pe;setTimeout(async()=>{e.abort()},a.settings.fetchTimeoutMillis);var r,s=a._storageCache.getCustomSignals();s&&a._logger.debug("Fetching config with custom signals: "+JSON.stringify(s));try{await a._client.fetch({cacheMaxAgeMillis:a.settings.minimumFetchIntervalMillis,signal:e,customSignals:s}),await a._storageCache.setLastFetchStatus("success")}catch(e){t="fetch-throttle";s=(r=e)instanceof c&&-1!==r.code.indexOf(t)?"throttle":"failure";throw await a._storageCache.setLastFetchStatus(s),e}}function je(a){var e,t,r=i(a);return[e={},t={}]=[r._storageCache.getActiveConfig(),r.defaultConfig],Object.keys(Object.assign(Object.assign({},e),t)).reduce((e,t)=>(e[t]=O(a,t),e),{})}function O(e,t){var a=i(e),r=(a._isInitializationComplete||a._logger.debug(`A value was requested for key "${t}" before SDK initialization completed.`+" Await on ensureInitialized if the intent was to get a previously activated value."),a._storageCache.getActiveConfig());return r&&void 0!==r[t]?new k("remote",r[t]):a.defaultConfig&&void 0!==a.defaultConfig[t]?new k("default",String(a.defaultConfig[t])):(a._logger.debug(`Returning static value for key "${t}".`+" Define a default or remote value if this is unintentional."),new k("static"))}class Ne{constructor(e,t,a,r){this.client=e,this.storage=t,this.storageCache=a,this.logger=r}isCachedDataFresh(e,t){var a;return t?(a=Date.now()-t,this.logger.debug("Config fetch cache check."+` Cache age millis: ${a}.`+` Cache max age millis (minimumFetchIntervalMillis setting): ${e}.`+` Is cache hit: ${a=a<=e}.`),a):(this.logger.debug("Config fetch cache check. Cache unpopulated."),!1)}async fetch(e){var[t,a]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(a&&this.isCachedDataFresh(e.cacheMaxAgeMillis,t))return a;e.eTag=a&&a.eTag;t=await this.client.fetch(e),a=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===t.status&&a.push(this.storage.setLastSuccessfulFetchResponse(t)),await Promise.all(a),t}}class Ae{constructor(e,t,a,r,s,i){this.firebaseInstallations=e,this.sdkVersion=t,this.namespace=a,this.projectId=r,this.apiKey=s,this.appId=i}async fetch(a){var e,[t,r]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),s=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=`+this.apiKey,i={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":a.eTag||"*"},t={sdk_version:this.sdkVersion,app_instance_id:t,app_instance_id_token:r,app_id:this.appId,language_code:(e=navigator).languages&&e.languages[0]||e.language,custom_signals:a.customSignals},r={method:"POST",headers:i,body:JSON.stringify(t)},i=fetch(s,r),t=new Promise((e,t)=>{a.signal.addEventListener(()=>{var e=new Error("The operation was aborted.");e.name="AbortError",t(e)})});let n;try{await Promise.race([i,t]),n=await i}catch(e){let t="fetch-client-network";throw"AbortError"===(null==e?void 0:e.name)&&(t="fetch-timeout"),F.create(t,{originalErrorMessage:null==e?void 0:e.message})}let o=n.status;s=n.headers.get("ETag")||void 0;let c,l;if(200===n.status){let e;try{e=await n.json()}catch(e){throw F.create("fetch-client-parse",{originalErrorMessage:null==e?void 0:e.message})}c=e.entries,l=e.state}if("INSTANCE_STATE_UNSPECIFIED"===l?o=500:"NO_CHANGE"===l?o=304:"NO_TEMPLATE"!==l&&"EMPTY_CONFIG"!==l||(c={}),304!==o&&200!==o)throw F.create("fetch-status",{httpStatus:o});return{status:o,eTag:s,config:c}}}class Re{constructor(e,t){this.client=e,this.storage=t}async fetch(e){var t=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,t)}async attemptFetch(t,{throttleEndTimeMillis:a,backoffCount:r}){var s,i,n;s=t.signal,i=a,await new Promise((e,t)=>{var a=Math.max(i-Date.now(),0);let r=setTimeout(e,a);s.addEventListener(()=>{clearTimeout(r),t(F.create("fetch-throttle",{throttleEndTimeMillis:i}))})});try{var o=await this.client.fetch(t);return await this.storage.deleteThrottleMetadata(),o}catch(e){if((e=>{var t;return e instanceof c&&e.customData&&(429===(t=Number(e.customData.httpStatus))||500===t||503===t||504===t)})(e))return n={throttleEndTimeMillis:Date.now()+(a=2,o=1e3*Math.pow(a,r),n=Math.round(.5*o*(Math.random()-.5)*2),Math.min(144e5,o+n)),backoffCount:r+1},await this.storage.setThrottleMetadata(n),this.attemptFetch(t,n);throw e}}}class Be{get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}constructor(e,t,a,r,s){this.app=e,this._client=t,this._storageCache=a,this._storage=r,this._logger=s,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}}function j(e,t){var a=e.target.error||void 0;return F.create(t,{originalErrorMessage:a&&(null==a?void 0:a.message)})}let N="app_namespace_store";class xe{getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}getCustomSignals(){return this.get("custom_signals")}}class He extends xe{constructor(e,t,a,r=(()=>new Promise((t,a)=>{try{var e=indexedDB.open("firebase_remote_config",1);e.onerror=e=>{a(j(e,"storage-open"))},e.onsuccess=e=>{t(e.target.result)},e.onupgradeneeded=e=>{var t=e.target.result;0===e.oldVersion&&t.createObjectStore(N,{keyPath:"compositeKey"})}}catch(e){a(F.create("storage-open",{originalErrorMessage:null==e?void 0:e.message}))}}))()){super(),this.appId=e,this.appName=t,this.namespace=a,this.openDbPromise=r}async setCustomSignals(e){var t=(await this.openDbPromise).transaction([N],"readwrite"),a=Ve(e,await this.getWithTransaction("custom_signals",t)||{});return await this.setWithTransaction("custom_signals",a,t),a}async getWithTransaction(i,n){return new Promise((a,t)=>{var e=n.objectStore(N),r=this.createCompositeKey(i);try{var s=e.get(r);s.onerror=e=>{t(j(e,"storage-get"))},s.onsuccess=e=>{var t=e.target.result;a(t?t.value:void 0)}}catch(e){t(F.create("storage-get",{originalErrorMessage:null==e?void 0:e.message}))}})}async setWithTransaction(i,n,o){return new Promise((e,t)=>{var a=o.objectStore(N),r=this.createCompositeKey(i);try{var s=a.put({compositeKey:r,value:n});s.onerror=e=>{t(j(e,"storage-set"))},s.onsuccess=()=>{e()}}catch(e){t(F.create("storage-set",{originalErrorMessage:null==e?void 0:e.message}))}})}async get(e){var t=(await this.openDbPromise).transaction([N],"readonly");return this.getWithTransaction(e,t)}async set(e,t){var a=(await this.openDbPromise).transaction([N],"readwrite");return this.setWithTransaction(e,t,a)}async delete(i){let n=await this.openDbPromise;return new Promise((e,t)=>{var a=n.transaction([N],"readwrite").objectStore(N),r=this.createCompositeKey(i);try{var s=a.delete(r);s.onerror=e=>{t(j(e,"storage-delete"))},s.onsuccess=()=>{e()}}catch(e){t(F.create("storage-delete",{originalErrorMessage:null==e?void 0:e.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}class $e extends xe{constructor(){super(...arguments),this.storage={}}async get(e){return Promise.resolve(this.storage[e])}async set(e,t){return this.storage[e]=t,Promise.resolve(void 0)}async delete(e){return this.storage[e]=void 0,Promise.resolve()}async setCustomSignals(e){var t=this.storage.custom_signals||{};return this.storage.custom_signals=Ve(e,t),Promise.resolve(this.storage.custom_signals)}}function Ve(e,t){var a=Object.assign(Object.assign({},t),e),a=Object.fromEntries(Object.entries(a).filter(([,e])=>null!==e).map(([e,t])=>"number"==typeof t?[e,t.toString()]:[e,t]));if(100<Object.keys(a).length)throw F.create("custom-signal-max-allowed-signals",{maxSignals:100});return a}class qe{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}getCustomSignals(){return this.customSignals}async loadFromStorage(){var e=this.storage.getLastFetchStatus(),t=this.storage.getLastSuccessfulFetchTimestampMillis(),a=this.storage.getActiveConfig(),r=this.storage.getCustomSignals(),e=await e,e=(e&&(this.lastFetchStatus=e),await t),t=(e&&(this.lastSuccessfulFetchTimestampMillis=e),await a),e=(t&&(this.activeConfig=t),await r);e&&(this.customSignals=e)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}async setCustomSignals(e){this.customSignals=await this.storage.setCustomSignals(e)}}async function Ke(){if(!h())return!1;try{return await new Promise((r,s)=>{try{let e=!0,t="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(t);a.onsuccess=()=>{a.result.close(),e||self.indexedDB.deleteDatabase(t),r(!0)},a.onupgradeneeded=()=>{e=!1},a.onerror=()=>{var e;s((null==(e=a.error)?void 0:e.message)||"")}}catch(e){s(e)}})}catch(e){return!1}}Ge._registerComponent(new e("remote-config",function(e,{options:t}){var a=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate(),{projectId:s,apiKey:i,appId:n}=a.options;if(!s)throw F.create("registration-project-id");if(!i)throw F.create("registration-api-key");if(!n)throw F.create("registration-app-id");var o=(null==t?void 0:t.templateId)||"firebase",c=h()?new He(n,a.name,o):new $e,l=new qe(c),u=new q(D),r=(u.logLevel=g.ERROR,new Ae(r,Ge.SDK_VERSION,o,s,i,n)),o=new Re(r,c),s=new Ne(o,c,l,u),i=new Be(a,s,l,c,u);return ke(i),i},"PUBLIC").setMultipleInstances(!0)),Ge.registerVersion(D,"0.6.0"),Ge.registerVersion(D,"0.6.0","esm2017");class Ue{constructor(e,t){this.app=e,this._delegate=t}get defaultConfig(){return this._delegate.defaultConfig}set defaultConfig(e){this._delegate.defaultConfig=e}get fetchTimeMillis(){return this._delegate.fetchTimeMillis}get lastFetchStatus(){return this._delegate.lastFetchStatus}get settings(){return this._delegate.settings}set settings(e){this._delegate.settings=e}activate(){return Fe(this._delegate)}ensureInitialized(){return ke(this._delegate)}fetch(){return Oe(this._delegate)}fetchAndActivate(){return(async e=>(await Oe(e=i(e)),Fe(e)))(this._delegate)}getAll(){return je(this._delegate)}getBoolean(e){return O(i(this._delegate),e).asBoolean()}getNumber(e){return O(i(this._delegate),e).asNumber()}getString(e){return O(i(this._delegate),e).asString()}getValue(e){return O(this._delegate,e)}setLogLevel(e){var t=this._delegate,a=i(t);switch(e){case"debug":a._logger.logLevel=g.DEBUG;break;case"silent":a._logger.logLevel=g.SILENT;break;default:a._logger.logLevel=g.ERROR}}}function ze(e,{instanceIdentifier:t}){var a=e.getProvider("app-compat").getImmediate(),r=e.getProvider("remote-config").getImmediate({identifier:t});return new Ue(a,r)}(w=R.default).INTERNAL.registerComponent(new e("remoteConfig-compat",ze,"PUBLIC").setMultipleInstances(!0).setServiceProps({isSupported:Ke})),w.registerVersion("@firebase/remote-config-compat","0.2.13")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-remote-config-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-remote-config-compat.js.map
