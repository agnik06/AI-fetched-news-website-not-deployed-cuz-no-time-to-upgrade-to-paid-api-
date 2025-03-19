((e,t)=>{"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app-compat"),require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app-compat","@firebase/app"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).firebase,e.firebase.INTERNAL.modularAPIs)})(this,function(on,sn){try{!(function(){function x(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a,B=x(on);function L(){try{return"object"==typeof indexedDB}catch(e){return!1}}class o extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,i.prototype.create)}}class i{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){var a,n=t[0]||{},i=this.service+"/"+e,r=this.errors[e],r=r?(a=n,r.replace(F,(e,t)=>{var n=a[t];return null!=n?String(n):`<${t}?>`})):"Error",r=this.serviceName+`: ${r} (${i}).`;return new o(i,r,n)}}let F=/\{\$([^}]+)}/g;function r(e){return e&&e._delegate?e._delegate:e}class e{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}let R=(t,e)=>e.some(e=>t instanceof e),H,q;let V=new WeakMap,s=new WeakMap,W=new WeakMap,n=new WeakMap,c=new WeakMap;let d={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return s.get(e);if("objectStoreNames"===t)return e.objectStoreNames||W.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function $(a){return a!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(q=q||[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey]).includes(a)?function(...e){return a.apply(l(this),e),p(V.get(this))}:function(...e){return p(a.apply(l(this),e))}:function(e,...t){var n=a.call(l(this),e,...t);return W.set(n,e.sort?e.sort():[e]),p(n)}}function U(e){var r,t;return"function"==typeof e?$(e):(e instanceof IDBTransaction&&(r=e,s.has(r)||(t=new Promise((e,t)=>{let n=()=>{r.removeEventListener("complete",a),r.removeEventListener("error",i),r.removeEventListener("abort",i)},a=()=>{e(),n()},i=()=>{t(r.error||new DOMException("AbortError","AbortError")),n()};r.addEventListener("complete",a),r.addEventListener("error",i),r.addEventListener("abort",i)}),s.set(r,t))),R(e,H=H||[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])?new Proxy(e,d):e)}function p(e){var r,t;return e instanceof IDBRequest?(r=e,(t=new Promise((e,t)=>{let n=()=>{r.removeEventListener("success",a),r.removeEventListener("error",i)},a=()=>{e(p(r.result)),n()},i=()=>{t(r.error),n()};r.addEventListener("success",a),r.addEventListener("error",i)})).then(e=>{e instanceof IDBCursor&&V.set(e,r)}).catch(()=>{}),c.set(t,r),t):n.has(e)?n.get(e):((t=U(e))!==e&&(n.set(e,t),c.set(t,e)),t)}let l=e=>c.get(e);function t(e,t,{blocked:n,upgrade:a,blocking:i,terminated:r}={}){let o=indexedDB.open(e,t);var s=p(o);return a&&o.addEventListener("upgradeneeded",e=>{a(p(o.result),e.oldVersion,e.newVersion,p(o.transaction),e)}),n&&o.addEventListener("blocked",e=>n(e.oldVersion,e.newVersion,e)),s.then(e=>{r&&e.addEventListener("close",()=>r()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),s}function u(e,{blocked:t}={}){var n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",e=>t(e.oldVersion,e)),p(n).then(()=>{})}let G=["get","getKey","getAll","getAllKeys","count"],J=["put","add","delete","clear"],f=new Map;function z(e,t){if(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t){if(f.get(t))return f.get(t);let i=t.replace(/FromIndex$/,""),r=t!==i,o=J.includes(i);var n;return i in(r?IDBIndex:IDBObjectStore).prototype&&(o||G.includes(i))?(n=async function(e,...t){var n=this.transaction(e,o?"readwrite":"readonly");let a=n.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),o&&n.done]))[0]},f.set(t,n),n):void 0}}d={...a=d,get:(e,t,n)=>z(e,t)||a.get(e,t,n),has:(e,t)=>!!z(e,t)||a.has(e,t)};var Y="@firebase/installations",g="0.6.13";let Q=1e4,Z="w:"+g,X="FIS_v2",ee="https://firebaseinstallations.googleapis.com/v1",te=36e5;var w,h,v,m;let b=new i("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ne(e){return e instanceof o&&e.code.includes("request-failed")}function ae({projectId:e}){return ee+`/projects/${e}/installations`}function ie(e){return{token:e.token,requestStatus:2,expiresIn:Number(e.expiresIn.replace("s","000")),creationTime:Date.now()}}async function re(e,t){var n=(await t.json()).error;return b.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function oe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function se(e,{refreshToken:t}){var n=oe(e);return n.append("Authorization",(e=t,X+" "+e)),n}async function ce(e){var t=await e();return 500<=t.status&&t.status<600?e():t}function de(t){return new Promise(e=>{setTimeout(e,t)})}let pe=/^[cdef][\w-]{21}$/,y="";function le(){try{var e=new Uint8Array(17),t=((self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16,(e=>btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_"))(e).substr(0,22));return pe.test(t)?t:y}catch(e){return y}}function k(e){return e.appName+"!"+e.appId}let ue=new Map;function fe(e,t){var n=k(e),e=(ge(n,t),n),n=(()=>(!I&&"BroadcastChannel"in self&&((I=new BroadcastChannel("[Firebase] FID Change")).onmessage=e=>{ge(e.data.key,e.data.fid)}),I))();n&&n.postMessage({key:e,fid:t}),0===ue.size&&I&&(I.close(),I=null)}function ge(e,t){var n=ue.get(e);if(n)for(var a of n)a(t)}let I=null;let we="firebase-installations-database",he=1,S="firebase-installations-store",ve=null;function T(){return ve=ve||t(we,he,{upgrade:(e,t)=>{0===t&&e.createObjectStore(S)}})}async function C(e,t){var n=k(e),a=(await T()).transaction(S,"readwrite"),i=a.objectStore(S),r=await i.get(n);return await i.put(t,n),await a.done,r&&r.fid===t.fid||fe(e,t.fid),t}async function me(e){var t=k(e),n=(await T()).transaction(S,"readwrite");await n.objectStore(S).delete(t),await n.done}async function _(e,t){var n=k(e),a=(await T()).transaction(S,"readwrite"),i=a.objectStore(S),r=await i.get(n),o=t(r);return void 0===o?await i.delete(n):await i.put(o,n),await a.done,!o||r&&r.fid===o.fid||fe(e,o.fid),o}async function D(n){let a;var e=await _(n.appConfig,e=>{var t=ye(e||{fid:le(),registrationStatus:0}),t=((e,t)=>{var n,a;return 0===t.registrationStatus?navigator.onLine?(n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},a=(async(t,n)=>{try{var e=await(async({appConfig:e,heartbeatServiceProvider:t},{fid:n})=>{let a=ae(e);var i=oe(e),r=((r=t.getImmediate({optional:!0}))&&(r=await r.getHeartbeatsHeader())&&i.append("x-firebase-client",r),{fid:n,authVersion:X,appId:e.appId,sdkVersion:Z});let o={method:"POST",headers:i,body:JSON.stringify(r)};if((i=await ce(()=>fetch(a,o))).ok)return{fid:(r=await i.json()).fid||n,registrationStatus:2,refreshToken:r.refreshToken,authToken:ie(r.authToken)};throw await re("Create Installation",i)})(t,n);return C(t.appConfig,e)}catch(e){throw ne(e)&&409===e.customData.serverCode?await me(t.appConfig):await C(t.appConfig,{fid:n.fid,registrationStatus:0}),e}})(e,n),{installationEntry:n,registrationPromise:a}):(n=Promise.reject(b.create("app-offline")),{installationEntry:t,registrationPromise:n}):1===t.registrationStatus?{installationEntry:t,registrationPromise:(async e=>{let t=await be(e.appConfig);for(;1===t.registrationStatus;)await de(100),t=await be(e.appConfig);var n,a;return 0!==t.registrationStatus?t:({installationEntry:n,registrationPromise:a}=await D(e),a||n)})(e)}:{installationEntry:t}})(n,t);return a=t.registrationPromise,t.installationEntry});return e.fid===y?{installationEntry:await a}:{installationEntry:e,registrationPromise:a}}function be(e){return _(e,e=>{if(e)return ye(e);throw b.create("installation-not-found")})}function ye(e){var t;return 1===(t=e).registrationStatus&&t.registrationTime+Q<Date.now()?{fid:e.fid,registrationStatus:0}:e}async function ke({appConfig:e,heartbeatServiceProvider:t},n){[i,r]=[e,n.fid];let a=ae(i)+`/${r}/authTokens:generate`;var i,r,o=se(e,n),s=t.getImmediate({optional:!0}),s=(s&&(s=await s.getHeartbeatsHeader())&&o.append("x-firebase-client",s),{installation:{sdkVersion:Z,appId:e.appId}});let c={method:"POST",headers:o,body:JSON.stringify(s)};o=await ce(()=>fetch(a,c));if(o.ok)return ie(await o.json());throw await re("Generate Auth Token",o)}async function Ie(a,i=!1){let r;var e=await _(a.appConfig,e=>{if(!Te(e))throw b.create("not-registered");var t,n=e.authToken;if(i||2!==(t=n).requestStatus||(e=>{var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+te})(t)){if(1===n.requestStatus)return r=(async(e,t)=>{let n=await Se(e.appConfig);for(;1===n.authToken.requestStatus;)await de(100),n=await Se(e.appConfig);var a=n.authToken;return 0===a.requestStatus?Ie(e,t):a})(a,i),e;if(navigator.onLine)return t=e,n={requestStatus:1,requestTime:Date.now()},n=Object.assign(Object.assign({},t),{authToken:n}),r=(async(t,n)=>{try{var e=await ke(t,n),a=Object.assign(Object.assign({},n),{authToken:e});return await C(t.appConfig,a),e}catch(e){var i;throw!ne(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode?(i=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}),await C(t.appConfig,i)):await me(t.appConfig),e}})(a,n),n;throw b.create("app-offline")}return e});return r?await r:e.authToken}function Se(e){return _(e,e=>{var t,n;if(Te(e))return t=e.authToken,1===(n=t).requestStatus&&n.requestTime+Q<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;throw b.create("not-registered")})}function Te(e){return void 0!==e&&2===e.registrationStatus}async function Ce(e,t=!1){var n=e,a=(await(!(a=(await D(n)).registrationPromise)||!await a),await Ie(n,t));return a.token}function _e(e){return b.create("missing-app-config-values",{valueName:e})}let De="installations",je=e=>{var t=e.getProvider("app").getImmediate();return{app:t,appConfig:(e=>{if(!e||!e.options)throw _e("App Configuration");if(!e.name)throw _e("App Name");var t;for(t of["projectId","apiKey","appId"])if(!e.options[t])throw _e(t);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}})(t),heartbeatServiceProvider:sn._getProvider(t,"heartbeat"),_delete:()=>Promise.resolve()}},Pe=e=>{var t=e.getProvider("app").getImmediate();let n=sn._getProvider(t,De).getImmediate();return{getId:()=>(async e=>{var t=e,{installationEntry:n,registrationPromise:a}=await D(t);return(a||Ie(t)).catch(console.error),n.fid})(n),getToken:e=>Ce(n,e)}};sn._registerComponent(new e(De,je,"PUBLIC")),sn._registerComponent(new e("installations-internal",Pe,"PRIVATE")),sn.registerVersion(Y,g),sn.registerVersion(Y,g,"esm2017");let Oe="/firebase-messaging-sw.js",Ee="/firebase-cloud-messaging-push-scope",Me="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ae="https://fcmregistrations.googleapis.com/v1",Ke="google.c.a.c_id",Ne="google.c.a.c_l",xe="google.c.a.ts",Be="google.c.a.e",Le=1e4;function j(e){var t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(m=w=w||{}).PUSH_RECEIVED="push-received",m.NOTIFICATION_CLICKED="notification-clicked";let Fe="fcm_token_details_db",Re=5,He="fcm_token_object_Store";async function qe(s){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(Fe))return null;let c=null;return(await t(Fe,Re,{upgrade:async(e,t,n,a)=>{var i,r,o;t<2||e.objectStoreNames.contains(He)&&(i=await(o=a.objectStore(He)).index("fcmSenderId").get(s),await o.clear(),i)&&(2===t?(o=i).auth&&o.p256dh&&o.endpoint&&(c={token:o.fcmToken,createTime:null!=(r=o.createTime)?r:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:j(o.vapidKey)}}):3===t?(r=i,c={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:j(r.auth),p256dh:j(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:j(r.vapidKey)}}):4===t&&(o=i,c={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:j(o.auth),p256dh:j(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:j(o.vapidKey)}}))}})).close(),await u(Fe),await u("fcm_vapid_details_db"),await u("undefined"),(e=>{var t;if(e&&e.subscriptionOptions)return t=e.subscriptionOptions,"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length})(c)?c:null}let Ve="firebase-messaging-database",We=1,P="firebase-messaging-store",$e=null;function Ue(){return $e=$e||t(Ve,We,{upgrade:(e,t)=>{0===t&&e.createObjectStore(P)}})}async function Ge(e){var t=ze(e),t=await(await Ue()).transaction(P).objectStore(P).get(t);return t||((t=await qe(e.appConfig.senderId))?(await Je(e,t),t):void 0)}async function Je(e,t){var n=ze(e),a=(await Ue()).transaction(P,"readwrite");return await a.objectStore(P).put(t,n),await a.done,t}function ze({appConfig:e}){return e.appId}let O=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Ye(e,t){var n={method:"DELETE",headers:await Ze(e)};try{var a,i=await(await fetch(Qe(e.appConfig)+"/"+t,n)).json();if(i.error)throw a=i.error.message,O.create("token-unsubscribe-failed",{errorInfo:a})}catch(e){throw O.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function Qe({projectId:e}){return Ae+`/projects/${e}/registrations`}async function Ze({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function Xe({p256dh:e,auth:t,endpoint:n,vapidKey:a}){var i={web:{endpoint:n,auth:t,p256dh:e}};return a!==Me&&(i.web.applicationPubKey=a),i}let et=6048e5;async function tt(e){var t,n,a,i,r,o=await(async(e,t)=>{var n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:(e=>{var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let i=0;i<n.length;++i)a[i]=n.charCodeAt(i);return a})(t)})})(e.swRegistration,e.vapidKey),o={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:o.endpoint,auth:j(o.getKey("auth")),p256dh:j(o.getKey("p256dh"))},s=await Ge(e.firebaseDependencies);if(s){if(t=s.subscriptionOptions,n=o.vapidKey===t.vapidKey,a=o.endpoint===t.endpoint,i=o.auth===t.auth,r=o.p256dh===t.p256dh,n&&a&&i&&r)return Date.now()>=s.createTime+et?(async(e,t)=>{try{var n=await(async(e,t)=>{var n=await Ze(e),a=Xe(t.subscriptionOptions),n={method:"PATCH",headers:n,body:JSON.stringify(a)};let i;try{var r=await fetch(Qe(e.appConfig)+"/"+t.token,n);i=await r.json()}catch(e){throw O.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error)throw a=i.error.message,O.create("token-update-failed",{errorInfo:a});if(i.token)return i.token;throw O.create("token-update-no-token")})(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Je(e.firebaseDependencies,a),n}catch(e){throw e}})(e,{token:s.token,createTime:Date.now(),subscriptionOptions:o}):s.token;try{await Ye(e.firebaseDependencies,s.token)}catch(e){console.warn(e)}}return at(e.firebaseDependencies,o)}async function nt(e){var t,n=await Ge(e.firebaseDependencies),n=(n&&(await Ye(e.firebaseDependencies,n.token),n=ze(e.firebaseDependencies),await(t=(await Ue()).transaction(P,"readwrite")).objectStore(P).delete(n),await t.done),await e.swRegistration.pushManager.getSubscription());return!n||n.unsubscribe()}async function at(e,t){var n={token:await(async(e,t)=>{var n=await Ze(e),a=Xe(t),n={method:"POST",headers:n,body:JSON.stringify(a)};let i;try{var r=await fetch(Qe(e.appConfig),n);i=await r.json()}catch(e){throw O.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error)throw a=i.error.message,O.create("token-subscribe-failed",{errorInfo:a});if(i.token)return i.token;throw O.create("token-subscribe-no-token")})(e,t),createTime:Date.now(),subscriptionOptions:t};return await Je(e,n),n.token}function it(e){var t,n,a,i,r={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return a=r,(n=e).notification&&(a.notification={},(t=n.notification.title)&&(a.notification.title=t),(t=n.notification.body)&&(a.notification.body=t),(t=n.notification.image)&&(a.notification.image=t),t=n.notification.icon)&&(a.notification.icon=t),n=r,(a=e).data&&(n.data=a.data),n=r,((a=e).fcmOptions||null!=(i=a.notification)&&i.click_action)&&(n.fcmOptions={},(i=null!=(i=null==(i=a.fcmOptions)?void 0:i.link)?i:null==(i=a.notification)?void 0:i.click_action)&&(n.fcmOptions.link=i),i=null==(i=a.fcmOptions)?void 0:i.analytics_label)&&(n.fcmOptions.analyticsLabel=i),r}var rt="AzSCbw63g1R0nCw85jG8",ot="Iaya3yLKwmgvh7cF0q4",st=[];for(let K=0;K<rt.length;K++)st.push(rt.charAt(K)),K<ot.length&&st.push(ot.charAt(K));function ct(e){return O.create("missing-app-config-values",{valueName:e})}st.join("");class dt{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var a=(e=>{if(!e||!e.options)throw ct("App Configuration Object");if(!e.name)throw ct("App Name");var t,n=e.options;for(t of["projectId","apiKey","appId","messagingSenderId"])if(!n[t])throw ct(t);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}})(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}async function pt(e){try{e.swRegistration=await navigator.serviceWorker.register(Oe,{scope:Ee}),e.swRegistration.update().catch(()=>{}),t=e.swRegistration,await new Promise((n,e)=>{let a=setTimeout(()=>e(new Error(`Service worker not registered after ${Le} ms`)),Le),i=t.installing||t.waiting;t.active?(clearTimeout(a),n()):i?i.onstatechange=e=>{var t;"activated"===(null==(t=e.target)?void 0:t.state)&&(i.onstatechange=null,clearTimeout(a),n())}:(clearTimeout(a),e(new Error("No incoming service worker found.")))})}catch(e){throw O.create("failed-service-worker-registration",{browserErrorMessage:null==e?void 0:e.message})}var t}async function lt(e,t){if(!navigator)throw O.create("only-available-in-window");if("default"===Notification.permission&&await Notification.requestPermission(),"granted"!==Notification.permission)throw O.create("permission-blocked");a=e,await!((n=null==t?void 0:t.vapidKey)?a.vapidKey=n:a.vapidKey||(a.vapidKey=Me));var n=e,a=null==t?void 0:t.serviceWorkerRegistration;if(a||n.swRegistration||await pt(n),a||!n.swRegistration){if(!(a instanceof ServiceWorkerRegistration))throw O.create("invalid-sw-registration");n.swRegistration=a}return await 0,tt(e)}async function ut(e,t,n){var a=(e=>{switch(e){case w.NOTIFICATION_CLICKED:return"notification_open";case w.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}})(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(a,{message_id:n[Ke],message_name:n[Ne],message_time:n[xe],message_device_time:Math.floor(Date.now()/1e3)})}async function ft(e,t){var n,a=t.data;a.isFirebaseMessaging&&(e.onMessageHandler&&a.messageType===w.PUSH_RECEIVED&&("function"==typeof e.onMessageHandler?e.onMessageHandler(it(a)):e.onMessageHandler.next(it(a))),"object"==typeof(t=n=a.data))&&t&&Ke in t&&"1"===n[Be]&&await ut(e,a.messageType,n)}let gt="@firebase/messaging",wt="0.12.17",ht=e=>{let t=new dt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",e=>ft(t,e)),t},vt=e=>{let t=e.getProvider("messaging").getImmediate();return{getToken:e=>lt(t,e)}};function mt(e){return(async e=>{if(navigator)return e.swRegistration||await pt(e),nt(e);throw O.create("only-available-in-window")})(e=r(e))}function bt(e,t){var n=e=r(e),e=t;if(navigator)return n.onMessageHandler=e,()=>{n.onMessageHandler=null};throw O.create("only-available-in-window")}sn._registerComponent(new e("messaging",ht,"PUBLIC")),sn._registerComponent(new e("messaging-internal",vt,"PRIVATE")),sn.registerVersion(gt,wt),sn.registerVersion(gt,wt,"esm2017");let yt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",kt="https://fcmregistrations.googleapis.com/v1",It="FCM_MSG",St="google.c.a.c_id",Tt=3,Ct=1;function E(e){var t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}(m=h=h||{})[m.DATA_MESSAGE=1]="DATA_MESSAGE",m[m.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION",(m=v=v||{}).PUSH_RECEIVED="push-received",m.NOTIFICATION_CLICKED="notification-clicked";let _t="fcm_token_details_db",Dt=5,jt="fcm_token_object_Store";async function Pt(s){if("databases"in indexedDB&&!(await indexedDB.databases()).map(e=>e.name).includes(_t))return null;let c=null;return(await t(_t,Dt,{upgrade:async(e,t,n,a)=>{var i,r,o;t<2||e.objectStoreNames.contains(jt)&&(i=await(o=a.objectStore(jt)).index("fcmSenderId").get(s),await o.clear(),i)&&(2===t?(o=i).auth&&o.p256dh&&o.endpoint&&(c={token:o.fcmToken,createTime:null!=(r=o.createTime)?r:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:E(o.vapidKey)}}):3===t?(r=i,c={token:r.fcmToken,createTime:r.createTime,subscriptionOptions:{auth:E(r.auth),p256dh:E(r.p256dh),endpoint:r.endpoint,swScope:r.swScope,vapidKey:E(r.vapidKey)}}):4===t&&(o=i,c={token:o.fcmToken,createTime:o.createTime,subscriptionOptions:{auth:E(o.auth),p256dh:E(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:E(o.vapidKey)}}))}})).close(),await u(_t),await u("fcm_vapid_details_db"),await u("undefined"),(e=>{var t;if(e&&e.subscriptionOptions)return t=e.subscriptionOptions,"number"==typeof e.createTime&&0<e.createTime&&"string"==typeof e.token&&0<e.token.length&&"string"==typeof t.auth&&0<t.auth.length&&"string"==typeof t.p256dh&&0<t.p256dh.length&&"string"==typeof t.endpoint&&0<t.endpoint.length&&"string"==typeof t.swScope&&0<t.swScope.length&&"string"==typeof t.vapidKey&&0<t.vapidKey.length})(c)?c:null}let Ot="firebase-messaging-database",Et=1,M="firebase-messaging-store",Mt=null;function At(){return Mt=Mt||t(Ot,Et,{upgrade:(e,t)=>{0===t&&e.createObjectStore(M)}})}async function Kt(e){var t=xt(e),t=await(await At()).transaction(M).objectStore(M).get(t);return t||((t=await Pt(e.appConfig.senderId))?(await Nt(e,t),t):void 0)}async function Nt(e,t){var n=xt(e),a=(await At()).transaction(M,"readwrite");return await a.objectStore(M).put(t,n),await a.done,t}function xt({appConfig:e}){return e.appId}let A=new i("messaging","Messaging",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."});async function Bt(e,t){var n={method:"DELETE",headers:await Ft(e)};try{var a,i=await(await fetch(Lt(e.appConfig)+"/"+t,n)).json();if(i.error)throw a=i.error.message,A.create("token-unsubscribe-failed",{errorInfo:a})}catch(e){throw A.create("token-unsubscribe-failed",{errorInfo:null==e?void 0:e.toString()})}}function Lt({projectId:e}){return kt+`/projects/${e}/registrations`}async function Ft({appConfig:e,installations:t}){var n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":"FIS "+n})}function Rt({p256dh:e,auth:t,endpoint:n,vapidKey:a}){var i={web:{endpoint:n,auth:t,p256dh:e}};return a!==yt&&(i.web.applicationPubKey=a),i}let Ht=6048e5;async function qt(e){var t,n,a,i,r,o=await(async(e,t)=>{var n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:(e=>{var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),a=new Uint8Array(n.length);for(let i=0;i<n.length;++i)a[i]=n.charCodeAt(i);return a})(t)})})(e.swRegistration,e.vapidKey),o={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:o.endpoint,auth:E(o.getKey("auth")),p256dh:E(o.getKey("p256dh"))},s=await Kt(e.firebaseDependencies);if(s){if(t=s.subscriptionOptions,n=o.vapidKey===t.vapidKey,a=o.endpoint===t.endpoint,i=o.auth===t.auth,r=o.p256dh===t.p256dh,n&&a&&i&&r)return Date.now()>=s.createTime+Ht?(async(e,t)=>{try{var n=await(async(e,t)=>{var n=await Ft(e),a=Rt(t.subscriptionOptions),n={method:"PATCH",headers:n,body:JSON.stringify(a)};let i;try{var r=await fetch(Lt(e.appConfig)+"/"+t.token,n);i=await r.json()}catch(e){throw A.create("token-update-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error)throw a=i.error.message,A.create("token-update-failed",{errorInfo:a});if(i.token)return i.token;throw A.create("token-update-no-token")})(e.firebaseDependencies,t),a=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await Nt(e.firebaseDependencies,a),n}catch(e){throw e}})(e,{token:s.token,createTime:Date.now(),subscriptionOptions:o}):s.token;try{await Bt(e.firebaseDependencies,s.token)}catch(e){console.warn(e)}}return Wt(e.firebaseDependencies,o)}async function Vt(e){var t,n=await Kt(e.firebaseDependencies),n=(n&&(await Bt(e.firebaseDependencies,n.token),n=xt(e.firebaseDependencies),await(t=(await At()).transaction(M,"readwrite")).objectStore(M).delete(n),await t.done),await e.swRegistration.pushManager.getSubscription());return!n||n.unsubscribe()}async function Wt(e,t){var n={token:await(async(e,t)=>{var n=await Ft(e),a=Rt(t),n={method:"POST",headers:n,body:JSON.stringify(a)};let i;try{var r=await fetch(Lt(e.appConfig),n);i=await r.json()}catch(e){throw A.create("token-subscribe-failed",{errorInfo:null==e?void 0:e.toString()})}if(i.error)throw a=i.error.message,A.create("token-subscribe-failed",{errorInfo:a});if(i.token)return i.token;throw A.create("token-subscribe-no-token")})(e,t),createTime:Date.now(),subscriptionOptions:t};return await Nt(e,n),n.token}var $t="AzSCbw63g1R0nCw85jG8",Ut="Iaya3yLKwmgvh7cF0q4",Gt=[];for(let N=0;N<$t.length;N++)Gt.push($t.charAt(N)),N<Ut.length&&Gt.push(Ut.charAt(N));async function Jt(e,t){var n=((e,t)=>{var n,a={};return e.from&&(a.project_number=e.from),e.fcmMessageId&&(a.message_id=e.fcmMessageId),a.instance_id=t,a.message_type=(e.notification?h.DISPLAY_NOTIFICATION:h.DATA_MESSAGE).toString(),a.sdk_platform=Tt.toString(),a.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),e.collapse_key&&(a.collapse_key=e.collapse_key),a.event=Ct.toString(),null!=(n=e.fcmOptions)&&n.analytics_label&&(a.analytics_label=null==(n=e.fcmOptions)?void 0:n.analytics_label),a})(t,await e.firebaseDependencies.installations.getId()),a=n,t=t.productId,n={};n.event_time_ms=Math.floor(Date.now()).toString(),n.source_extension_json_proto3=JSON.stringify({messaging_client_event:a}),t&&(n.compliance_data=(e=>({privacy_context:{prequest:{origin_associated_product_id:e}}}))(t)),e.logEvents.push(n)}async function zt(e,t){var n=(({data:e})=>{if(!e)return null;try{return e.json()}catch(e){return null}})(e);if(n){t.deliveryMetricsExportedToBigQueryEnabled&&await Jt(t,n);var a,i,r,o=await Qt();if(o.some(e=>"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://"))){var s,e=o,c=n;c.isFirebaseMessaging=!0,c.messageType=v.PUSH_RECEIVED;for(s of e)s.postMessage(c)}else n.notification&&await(e=>{var t=e.actions,n=Notification.maxActions;return t&&n&&t.length>n&&console.warn(`This browser only supports ${n} actions. The remaining actions will not be displayed.`),self.registration.showNotification(null!=(t=e.title)?t:"",e)})((e=n,(o=Object.assign({},e.notification)).data={[It]:e},o)),t&&t.onBackgroundMessageHandler&&(o={from:(e=n).from,collapseKey:e.collapse_key,messageId:e.fcmMessageId},i=o,(a=e).notification&&(i.notification={},(n=a.notification.title)&&(i.notification.title=n),(n=a.notification.body)&&(i.notification.body=n),(n=a.notification.image)&&(i.notification.image=n),n=a.notification.icon)&&(i.notification.icon=n),a=o,(i=e).data&&(a.data=i.data),a=o,((i=e).fcmOptions||null!=(r=i.notification)&&r.click_action)&&(a.fcmOptions={},(r=null!=(r=null==(r=i.fcmOptions)?void 0:r.link)?r:null==(r=i.notification)?void 0:r.click_action)&&(a.fcmOptions.link=r),r=null==(r=i.fcmOptions)?void 0:r.analytics_label)&&(a.fcmOptions.analyticsLabel=r),n=o,"function"==typeof t.onBackgroundMessageHandler?await t.onBackgroundMessageHandler(n):t.onBackgroundMessageHandler.next(n))}}async function Yt(e){var t=null==(t=null==(t=e.notification)?void 0:t.data)?void 0:t[It];if(t&&!e.action){e.stopImmediatePropagation(),e.notification.close();var n=(e=>{var t=null!=(t=null==(t=e.fcmOptions)?void 0:t.link)?t:null==(t=e.notification)?void 0:t.click_action;return t||((e=>"object"==typeof e&&e&&St in e)(e.data)?self.location.origin:null)})(t);if(n){var a,i=new URL(n,self.location.href),r=new URL(self.location.origin);if(i.host===r.host){let e=await(async e=>{var t;for(t of await Qt()){var n=new URL(t.url,self.location.href);if(e.host===n.host)return t}return null})(i);if(e?e=await e.focus():(e=await self.clients.openWindow(n),a=3e3,await new Promise(e=>{setTimeout(e,a)})),e)return t.messageType=v.NOTIFICATION_CLICKED,t.isFirebaseMessaging=!0,e.postMessage(t)}}}}function Qt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Zt(e){return A.create("missing-app-config-values",{valueName:e})}Gt.join("");class Xt{constructor(e,t,n){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;var a=(e=>{if(!e||!e.options)throw Zt("App Configuration Object");if(!e.name)throw Zt("App Name");var t,n=e.options;for(t of["projectId","apiKey","appId","messagingSenderId"])if(!n[t])throw Zt(t);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}})(e);this.firebaseDependencies={app:e,appConfig:a,installations:t,analyticsProvider:n}}_delete(){return Promise.resolve()}}let en=e=>{let t=new Xt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return self.addEventListener("push",e=>{e.waitUntil(zt(e,t))}),self.addEventListener("pushsubscriptionchange",e=>{e.waitUntil((async(e,t)=>{var n;(n=e.newSubscription)?(n=await Kt(t.firebaseDependencies),await Vt(t),t.vapidKey=null!=(n=null==(n=null==n?void 0:n.subscriptionOptions)?void 0:n.vapidKey)?n:yt,await qt(t)):await Vt(t)})(e,t))}),self.addEventListener("notificationclick",e=>{e.waitUntil(Yt(e))}),t};function tn(e,t){var n=e=r(e),e=t;if(void 0!==self.document)throw A.create("only-available-in-sw");return n.onBackgroundMessageHandler=e,()=>{n.onBackgroundMessageHandler=null}}sn._registerComponent(new e("messaging-sw",en,"PUBLIC"));class nn{constructor(e,t){this.app=e,this._delegate=t,this.app=e,this._delegate=t}async getToken(e){return(async(e,t)=>lt(e=r(e),t))(this._delegate,e)}async deleteToken(){return mt(this._delegate)}onMessage(e){return bt(this._delegate,e)}onBackgroundMessage(e){return tn(this._delegate,e)}}let an=e=>self&&"ServiceWorkerGlobalScope"in self?new nn(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging-sw").getImmediate()):new nn(e.getProvider("app-compat").getImmediate(),e.getProvider("messaging").getImmediate()),rn={isSupported:function(){return self&&"ServiceWorkerGlobalScope"in self?L()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"undefined"!=typeof window&&L()&&!("undefined"==typeof navigator||!navigator.cookieEnabled)&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}};B.default.INTERNAL.registerComponent(new e("messaging-compat",an,"PUBLIC").setServiceProps(rn)),B.default.registerVersion("@firebase/messaging-compat","0.2.17")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-messaging-compat.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-messaging-compat.js.map
