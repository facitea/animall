function ap(e,r){for(var a=0;a<r.length;a++){const t=r[a];if(typeof t!="string"&&!Array.isArray(t)){for(const n in t)if(n!=="default"&&!(n in e)){const i=Object.getOwnPropertyDescriptor(t,n);i&&Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:()=>t[n]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const A of i.addedNodes)A.tagName==="LINK"&&A.rel==="modulepreload"&&t(A)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var tp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Zb(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rb={exports:{}},Af={},Tb={exports:{}},f0={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F2=Symbol.for("react.element"),np=Symbol.for("react.portal"),ip=Symbol.for("react.fragment"),Ap=Symbol.for("react.strict_mode"),op=Symbol.for("react.profiler"),fp=Symbol.for("react.provider"),sp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),lp=Symbol.for("react.suspense"),cp=Symbol.for("react.memo"),dp=Symbol.for("react.lazy"),w4=Symbol.iterator;function hp(e){return e===null||typeof e!="object"?null:(e=w4&&e[w4]||e["@@iterator"],typeof e=="function"?e:null)}var Wb={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Nb=Object.assign,Fb={};function Qn(e,r,a){this.props=e,this.context=r,this.refs=Fb,this.updater=a||Wb}Qn.prototype.isReactComponent={};Qn.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")};Qn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sb(){}Sb.prototype=Qn.prototype;function $1(e,r,a){this.props=e,this.context=r,this.refs=Fb,this.updater=a||Wb}var K1=$1.prototype=new Sb;K1.constructor=$1;Nb(K1,Qn.prototype);K1.isPureReactComponent=!0;var y4=Array.isArray,Vb=Object.prototype.hasOwnProperty,q1={current:null},Db={key:!0,ref:!0,__self:!0,__source:!0};function Gb(e,r,a){var t,n={},i=null,A=null;if(r!=null)for(t in r.ref!==void 0&&(A=r.ref),r.key!==void 0&&(i=""+r.key),r)Vb.call(r,t)&&!Db.hasOwnProperty(t)&&(n[t]=r[t]);var o=arguments.length-2;if(o===1)n.children=a;else if(1<o){for(var f=Array(o),s=0;s<o;s++)f[s]=arguments[s+2];n.children=f}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)n[t]===void 0&&(n[t]=o[t]);return{$$typeof:F2,type:e,key:i,ref:A,props:n,_owner:q1.current}}function bp(e,r){return{$$typeof:F2,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===F2}function gp(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(a){return r[a]})}var E4=/\/+/g;function cs(e,r){return typeof e=="object"&&e!==null&&e.key!=null?gp(""+e.key):r.toString(36)}function PA(e,r,a,t,n){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var A=!1;if(e===null)A=!0;else switch(i){case"string":case"number":A=!0;break;case"object":switch(e.$$typeof){case F2:case np:A=!0}}if(A)return A=e,n=n(A),e=t===""?"."+cs(A,0):t,y4(n)?(a="",e!=null&&(a=e.replace(E4,"$&/")+"/"),PA(n,r,a,"",function(s){return s})):n!=null&&(rl(n)&&(n=bp(n,a+(!n.key||A&&A.key===n.key?"":(""+n.key).replace(E4,"$&/")+"/")+e)),r.push(n)),1;if(A=0,t=t===""?".":t+":",y4(e))for(var o=0;o<e.length;o++){i=e[o];var f=t+cs(i,o);A+=PA(i,r,a,f,n)}else if(f=hp(e),typeof f=="function")for(e=f.call(e),o=0;!(i=e.next()).done;)i=i.value,f=t+cs(i,o++),A+=PA(i,r,a,f,n);else if(i==="object")throw r=String(e),Error("Objects are not valid as a React child (found: "+(r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return A}function lA(e,r,a){if(e==null)return e;var t=[],n=0;return PA(e,t,"","",function(i){return r.call(a,i,n++)}),t}function mp(e){if(e._status===-1){var r=e._result;r=r(),r.then(function(a){(e._status===0||e._status===-1)&&(e._status=1,e._result=a)},function(a){(e._status===0||e._status===-1)&&(e._status=2,e._result=a)}),e._status===-1&&(e._status=0,e._result=r)}if(e._status===1)return e._result.default;throw e._result}var Vr={current:null},OA={transition:null},pp={ReactCurrentDispatcher:Vr,ReactCurrentBatchConfig:OA,ReactCurrentOwner:q1};f0.Children={map:lA,forEach:function(e,r,a){lA(e,function(){r.apply(this,arguments)},a)},count:function(e){var r=0;return lA(e,function(){r++}),r},toArray:function(e){return lA(e,function(r){return r})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};f0.Component=Qn;f0.Fragment=ip;f0.Profiler=op;f0.PureComponent=$1;f0.StrictMode=Ap;f0.Suspense=lp;f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pp;f0.cloneElement=function(e,r,a){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Nb({},e.props),n=e.key,i=e.ref,A=e._owner;if(r!=null){if(r.ref!==void 0&&(i=r.ref,A=q1.current),r.key!==void 0&&(n=""+r.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(f in r)Vb.call(r,f)&&!Db.hasOwnProperty(f)&&(t[f]=r[f]===void 0&&o!==void 0?o[f]:r[f])}var f=arguments.length-2;if(f===1)t.children=a;else if(1<f){o=Array(f);for(var s=0;s<f;s++)o[s]=arguments[s+2];t.children=o}return{$$typeof:F2,type:e.type,key:n,ref:i,props:t,_owner:A}};f0.createContext=function(e){return e={$$typeof:sp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:fp,_context:e},e.Consumer=e};f0.createElement=Gb;f0.createFactory=function(e){var r=Gb.bind(null,e);return r.type=e,r};f0.createRef=function(){return{current:null}};f0.forwardRef=function(e){return{$$typeof:up,render:e}};f0.isValidElement=rl;f0.lazy=function(e){return{$$typeof:dp,_payload:{_status:-1,_result:e},_init:mp}};f0.memo=function(e,r){return{$$typeof:cp,type:e,compare:r===void 0?null:r}};f0.startTransition=function(e){var r=OA.transition;OA.transition={};try{e()}finally{OA.transition=r}};f0.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};f0.useCallback=function(e,r){return Vr.current.useCallback(e,r)};f0.useContext=function(e){return Vr.current.useContext(e)};f0.useDebugValue=function(){};f0.useDeferredValue=function(e){return Vr.current.useDeferredValue(e)};f0.useEffect=function(e,r){return Vr.current.useEffect(e,r)};f0.useId=function(){return Vr.current.useId()};f0.useImperativeHandle=function(e,r,a){return Vr.current.useImperativeHandle(e,r,a)};f0.useInsertionEffect=function(e,r){return Vr.current.useInsertionEffect(e,r)};f0.useLayoutEffect=function(e,r){return Vr.current.useLayoutEffect(e,r)};f0.useMemo=function(e,r){return Vr.current.useMemo(e,r)};f0.useReducer=function(e,r,a){return Vr.current.useReducer(e,r,a)};f0.useRef=function(e){return Vr.current.useRef(e)};f0.useState=function(e){return Vr.current.useState(e)};f0.useSyncExternalStore=function(e,r,a){return Vr.current.useSyncExternalStore(e,r,a)};f0.useTransition=function(){return Vr.current.useTransition()};f0.version="18.2.0";Tb.exports=f0;var V=Tb.exports;const Xb=Zb(V),vp=ap({__proto__:null,default:Xb},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kp=V,wp=Symbol.for("react.element"),yp=Symbol.for("react.fragment"),Ep=Object.prototype.hasOwnProperty,Ip=kp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function Mb(e,r,a){var t,n={},i=null,A=null;a!==void 0&&(i=""+a),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(A=r.ref);for(t in r)Ep.call(r,t)&&!_p.hasOwnProperty(t)&&(n[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)n[t]===void 0&&(n[t]=r[t]);return{$$typeof:wp,type:e,key:i,ref:A,props:n,_owner:Ip.current}}Af.Fragment=yp;Af.jsx=Mb;Af.jsxs=Mb;Rb.exports=Af;var _=Rb.exports,mu={},xb={exports:{}},ae={},Pb={exports:{}},Ob={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function r(l,p){var k=l.length;l.push(p);r:for(;0<k;){var E=k-1>>>1,Z=l[E];if(0<n(Z,p))l[E]=p,l[k]=Z,k=E;else break r}}function a(l){return l.length===0?null:l[0]}function t(l){if(l.length===0)return null;var p=l[0],k=l.pop();if(k!==p){l[0]=k;r:for(var E=0,Z=l.length,W=Z>>>1;E<W;){var I=2*(E+1)-1,X=l[I],L=I+1,O=l[L];if(0>n(X,k))L<Z&&0>n(O,X)?(l[E]=O,l[L]=k,E=L):(l[E]=X,l[I]=k,E=I);else if(L<Z&&0>n(O,k))l[E]=O,l[L]=k,E=L;else break r}}return p}function n(l,p){var k=l.sortIndex-p.sortIndex;return k!==0?k:l.id-p.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var A=Date,o=A.now();e.unstable_now=function(){return A.now()-o}}var f=[],s=[],u=1,c=null,d=3,b=!1,w=!1,y=!1,B=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(l){for(var p=a(s);p!==null;){if(p.callback===null)t(s);else if(p.startTime<=l)t(s),p.sortIndex=p.expirationTime,r(f,p);else break;p=a(s)}}function C(l){if(y=!1,m(l),!w)if(a(f)!==null)w=!0,O0(v);else{var p=a(s);p!==null&&oi(C,p.startTime-l)}}function v(l,p){w=!1,y&&(y=!1,g(P),P=-1),b=!0;var k=d;try{for(m(p),c=a(f);c!==null&&(!(c.expirationTime>p)||l&&!Yr());){var E=c.callback;if(typeof E=="function"){c.callback=null,d=c.priorityLevel;var Z=E(c.expirationTime<=p);p=e.unstable_now(),typeof Z=="function"?c.callback=Z:c===a(f)&&t(f),m(p)}else t(f);c=a(f)}if(c!==null)var W=!0;else{var I=a(s);I!==null&&oi(C,I.startTime-p),W=!1}return W}finally{c=null,d=k,b=!1}}var F=!1,S=null,P=-1,s0=5,A0=-1;function Yr(){return!(e.unstable_now()-A0<s0)}function ha(){if(S!==null){var l=e.unstable_now();A0=l;var p=!0;try{p=S(!0,l)}finally{p?je():(F=!1,S=null)}}else F=!1}var je;if(typeof h=="function")je=function(){h(ha)};else if(typeof MessageChannel<"u"){var oA=new MessageChannel,Ai=oA.port2;oA.port1.onmessage=ha,je=function(){Ai.postMessage(null)}}else je=function(){B(ha,0)};function O0(l){S=l,F||(F=!0,je())}function oi(l,p){P=B(function(){l(e.unstable_now())},p)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(l){l.callback=null},e.unstable_continueExecution=function(){w||b||(w=!0,O0(v))},e.unstable_forceFrameRate=function(l){0>l||125<l?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):s0=0<l?Math.floor(1e3/l):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return a(f)},e.unstable_next=function(l){switch(d){case 1:case 2:case 3:var p=3;break;default:p=d}var k=d;d=p;try{return l()}finally{d=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(l,p){switch(l){case 1:case 2:case 3:case 4:case 5:break;default:l=3}var k=d;d=l;try{return p()}finally{d=k}},e.unstable_scheduleCallback=function(l,p,k){var E=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?E+k:E):k=E,l){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=k+Z,l={id:u++,callback:p,priorityLevel:l,startTime:k,expirationTime:Z,sortIndex:-1},k>E?(l.sortIndex=k,r(s,l),a(f)===null&&l===a(s)&&(y?(g(P),P=-1):y=!0,oi(C,k-E))):(l.sortIndex=Z,r(f,l),w||b||(w=!0,O0(v))),l},e.unstable_shouldYield=Yr,e.unstable_wrapCallback=function(l){var p=d;return function(){var k=d;d=p;try{return l.apply(this,arguments)}finally{d=k}}}})(Ob);Pb.exports=Ob;var Cp=Pb.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub=V,re=Cp;function T(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)r+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jb=new Set,Qi={};function Mt(e,r){Tn(e,r),Tn(e+"Capture",r)}function Tn(e,r){for(Qi[e]=r,e=0;e<r.length;e++)jb.add(r[e])}var ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Bp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I4={},_4={};function Zp(e){return pu.call(_4,e)?!0:pu.call(I4,e)?!1:Bp.test(e)?_4[e]=!0:(I4[e]=!0,!1)}function Rp(e,r,a,t){if(a!==null&&a.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return t?!1:a!==null?!a.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Tp(e,r,a,t){if(r===null||typeof r>"u"||Rp(e,r,a,t))return!0;if(t)return!1;if(a!==null)switch(a.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function Dr(e,r,a,t,n,i,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=t,this.attributeNamespace=n,this.mustUseProperty=a,this.propertyName=e,this.type=r,this.sanitizeURL=i,this.removeEmptyString=A}var br={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){br[e]=new Dr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];br[r]=new Dr(r,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){br[e]=new Dr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){br[e]=new Dr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){br[e]=new Dr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){br[e]=new Dr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){br[e]=new Dr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){br[e]=new Dr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){br[e]=new Dr(e,5,!1,e.toLowerCase(),null,!1,!1)});var el=/[\-:]([a-z])/g;function al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(el,al);br[r]=new Dr(r,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(el,al);br[r]=new Dr(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(el,al);br[r]=new Dr(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){br[e]=new Dr(e,1,!1,e.toLowerCase(),null,!1,!1)});br.xlinkHref=new Dr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){br[e]=new Dr(e,1,!1,e.toLowerCase(),null,!0,!0)});function tl(e,r,a,t){var n=br.hasOwnProperty(r)?br[r]:null;(n!==null?n.type!==0:t||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(Tp(r,a,n,t)&&(a=null),t||n===null?Zp(r)&&(a===null?e.removeAttribute(r):e.setAttribute(r,""+a)):n.mustUseProperty?e[n.propertyName]=a===null?n.type===3?!1:"":a:(r=n.attributeName,t=n.attributeNamespace,a===null?e.removeAttribute(r):(n=n.type,a=n===3||n===4&&a===!0?"":""+a,t?e.setAttributeNS(t,r,a):e.setAttribute(r,a))))}var ca=Ub.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cA=Symbol.for("react.element"),tn=Symbol.for("react.portal"),nn=Symbol.for("react.fragment"),nl=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),Lb=Symbol.for("react.provider"),Yb=Symbol.for("react.context"),il=Symbol.for("react.forward_ref"),ku=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Al=Symbol.for("react.memo"),ka=Symbol.for("react.lazy"),Qb=Symbol.for("react.offscreen"),C4=Symbol.iterator;function ui(e){return e===null||typeof e!="object"?null:(e=C4&&e[C4]||e["@@iterator"],typeof e=="function"?e:null)}var V0=Object.assign,ds;function wi(e){if(ds===void 0)try{throw Error()}catch(a){var r=a.stack.trim().match(/\n( *(at )?)/);ds=r&&r[1]||""}return`
`+ds+e}var hs=!1;function bs(e,r){if(!e||hs)return"";hs=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(s){var t=s}Reflect.construct(e,[],r)}else{try{r.call()}catch(s){t=s}e.call(r.prototype)}else{try{throw Error()}catch(s){t=s}e()}}catch(s){if(s&&t&&typeof s.stack=="string"){for(var n=s.stack.split(`
`),i=t.stack.split(`
`),A=n.length-1,o=i.length-1;1<=A&&0<=o&&n[A]!==i[o];)o--;for(;1<=A&&0<=o;A--,o--)if(n[A]!==i[o]){if(A!==1||o!==1)do if(A--,o--,0>o||n[A]!==i[o]){var f=`
`+n[A].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=A&&0<=o);break}}}finally{hs=!1,Error.prepareStackTrace=a}return(e=e?e.displayName||e.name:"")?wi(e):""}function Wp(e){switch(e.tag){case 5:return wi(e.type);case 16:return wi("Lazy");case 13:return wi("Suspense");case 19:return wi("SuspenseList");case 0:case 2:case 15:return e=bs(e.type,!1),e;case 11:return e=bs(e.type.render,!1),e;case 1:return e=bs(e.type,!0),e;default:return""}}function yu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case nn:return"Fragment";case tn:return"Portal";case vu:return"Profiler";case nl:return"StrictMode";case ku:return"Suspense";case wu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yb:return(e.displayName||"Context")+".Consumer";case Lb:return(e._context.displayName||"Context")+".Provider";case il:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Al:return r=e.displayName||null,r!==null?r:yu(e.type)||"Memo";case ka:r=e._payload,e=e._init;try{return yu(e(r))}catch{}}return null}function Np(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(r);case 8:return r===nl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function Ha(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hb(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Fp(e){var r=Hb(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),t=""+e[r];if(!e.hasOwnProperty(r)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return n.call(this)},set:function(A){t=""+A,i.call(this,A)}}),Object.defineProperty(e,r,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(A){t=""+A},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function dA(e){e._valueTracker||(e._valueTracker=Fp(e))}function zb(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var a=r.getValue(),t="";return e&&(t=Hb(e)?e.checked?"true":"false":e.value),e=t,e!==a?(r.setValue(e),!0):!1}function oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eu(e,r){var a=r.checked;return V0({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??e._wrapperState.initialChecked})}function B4(e,r){var a=r.defaultValue==null?"":r.defaultValue,t=r.checked!=null?r.checked:r.defaultChecked;a=Ha(r.value!=null?r.value:a),e._wrapperState={initialChecked:t,initialValue:a,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Jb(e,r){r=r.checked,r!=null&&tl(e,"checked",r,!1)}function Iu(e,r){Jb(e,r);var a=Ha(r.value),t=r.type;if(a!=null)t==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+a):e.value!==""+a&&(e.value=""+a);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?_u(e,r.type,a):r.hasOwnProperty("defaultValue")&&_u(e,r.type,Ha(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Z4(e,r,a){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var t=r.type;if(!(t!=="submit"&&t!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,a||r===e.value||(e.value=r),e.defaultValue=r}a=e.name,a!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,a!==""&&(e.name=a)}function _u(e,r,a){(r!=="number"||oo(e.ownerDocument)!==e)&&(a==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+a&&(e.defaultValue=""+a))}var yi=Array.isArray;function pn(e,r,a,t){if(e=e.options,r){r={};for(var n=0;n<a.length;n++)r["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=r.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&t&&(e[a].defaultSelected=!0)}else{for(a=""+Ha(a),r=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,t&&(e[n].defaultSelected=!0);return}r!==null||e[n].disabled||(r=e[n])}r!==null&&(r.selected=!0)}}function Cu(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(T(91));return V0({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function R4(e,r){var a=r.value;if(a==null){if(a=r.children,r=r.defaultValue,a!=null){if(r!=null)throw Error(T(92));if(yi(a)){if(1<a.length)throw Error(T(93));a=a[0]}r=a}r==null&&(r=""),a=r}e._wrapperState={initialValue:Ha(a)}}function $b(e,r){var a=Ha(r.value),t=Ha(r.defaultValue);a!=null&&(a=""+a,a!==e.value&&(e.value=a),r.defaultValue==null&&e.defaultValue!==a&&(e.defaultValue=a)),t!=null&&(e.defaultValue=""+t)}function T4(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Kb(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bu(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Kb(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var hA,qb=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,a,t,n){MSApp.execUnsafeLocalFunction(function(){return e(r,a,t,n)})}:e}(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(hA=hA||document.createElement("div"),hA.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=hA.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Hi(e,r){if(r){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=r;return}}e.textContent=r}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sp=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(e){Sp.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),Wi[r]=Wi[e]})});function r6(e,r,a){return r==null||typeof r=="boolean"||r===""?"":a||typeof r!="number"||r===0||Wi.hasOwnProperty(e)&&Wi[e]?(""+r).trim():r+"px"}function e6(e,r){e=e.style;for(var a in r)if(r.hasOwnProperty(a)){var t=a.indexOf("--")===0,n=r6(a,r[a],t);a==="float"&&(a="cssFloat"),t?e.setProperty(a,n):e[a]=n}}var Vp=V0({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zu(e,r){if(r){if(Vp[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(T(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(T(61))}if(r.style!=null&&typeof r.style!="object")throw Error(T(62))}}function Ru(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wu=null,vn=null,kn=null;function W4(e){if(e=D2(e)){if(typeof Wu!="function")throw Error(T(280));var r=e.stateNode;r&&(r=lf(r),Wu(e.stateNode,e.type,r))}}function a6(e){vn?kn?kn.push(e):kn=[e]:vn=e}function t6(){if(vn){var e=vn,r=kn;if(kn=vn=null,W4(e),r)for(e=0;e<r.length;e++)W4(r[e])}}function n6(e,r){return e(r)}function i6(){}var gs=!1;function A6(e,r,a){if(gs)return e(r,a);gs=!0;try{return n6(e,r,a)}finally{gs=!1,(vn!==null||kn!==null)&&(i6(),t6())}}function zi(e,r){var a=e.stateNode;if(a===null)return null;var t=lf(a);if(t===null)return null;a=t[r];r:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break r;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(T(231,r,typeof a));return a}var Nu=!1;if(ta)try{var li={};Object.defineProperty(li,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Nu=!1}function Dp(e,r,a,t,n,i,A,o,f){var s=Array.prototype.slice.call(arguments,3);try{r.apply(a,s)}catch(u){this.onError(u)}}var Ni=!1,fo=null,so=!1,Fu=null,Gp={onError:function(e){Ni=!0,fo=e}};function Xp(e,r,a,t,n,i,A,o,f){Ni=!1,fo=null,Dp.apply(Gp,arguments)}function Mp(e,r,a,t,n,i,A,o,f){if(Xp.apply(this,arguments),Ni){if(Ni){var s=fo;Ni=!1,fo=null}else throw Error(T(198));so||(so=!0,Fu=s)}}function xt(e){var r=e,a=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,r.flags&4098&&(a=r.return),e=r.return;while(e)}return r.tag===3?a:null}function o6(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function N4(e){if(xt(e)!==e)throw Error(T(188))}function xp(e){var r=e.alternate;if(!r){if(r=xt(e),r===null)throw Error(T(188));return r!==e?null:e}for(var a=e,t=r;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(t=n.return,t!==null){a=t;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return N4(n),e;if(i===t)return N4(n),r;i=i.sibling}throw Error(T(188))}if(a.return!==t.return)a=n,t=i;else{for(var A=!1,o=n.child;o;){if(o===a){A=!0,a=n,t=i;break}if(o===t){A=!0,t=n,a=i;break}o=o.sibling}if(!A){for(o=i.child;o;){if(o===a){A=!0,a=i,t=n;break}if(o===t){A=!0,t=i,a=n;break}o=o.sibling}if(!A)throw Error(T(189))}}if(a.alternate!==t)throw Error(T(190))}if(a.tag!==3)throw Error(T(188));return a.stateNode.current===a?e:r}function f6(e){return e=xp(e),e!==null?s6(e):null}function s6(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=s6(e);if(r!==null)return r;e=e.sibling}return null}var u6=re.unstable_scheduleCallback,F4=re.unstable_cancelCallback,Pp=re.unstable_shouldYield,Op=re.unstable_requestPaint,L0=re.unstable_now,Up=re.unstable_getCurrentPriorityLevel,fl=re.unstable_ImmediatePriority,l6=re.unstable_UserBlockingPriority,uo=re.unstable_NormalPriority,jp=re.unstable_LowPriority,c6=re.unstable_IdlePriority,of=null,Ge=null;function Lp(e){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(of,e,void 0,(e.current.flags&128)===128)}catch{}}var we=Math.clz32?Math.clz32:Hp,Yp=Math.log,Qp=Math.LN2;function Hp(e){return e>>>=0,e===0?32:31-(Yp(e)/Qp|0)|0}var bA=64,gA=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function lo(e,r){var a=e.pendingLanes;if(a===0)return 0;var t=0,n=e.suspendedLanes,i=e.pingedLanes,A=a&268435455;if(A!==0){var o=A&~n;o!==0?t=Ei(o):(i&=A,i!==0&&(t=Ei(i)))}else A=a&~n,A!==0?t=Ei(A):i!==0&&(t=Ei(i));if(t===0)return 0;if(r!==0&&r!==t&&!(r&n)&&(n=t&-t,i=r&-r,n>=i||n===16&&(i&4194240)!==0))return r;if(t&4&&(t|=a&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=t;0<r;)a=31-we(r),n=1<<a,t|=e[a],r&=~n;return t}function zp(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jp(e,r){for(var a=e.suspendedLanes,t=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes;0<i;){var A=31-we(i),o=1<<A,f=n[A];f===-1?(!(o&a)||o&t)&&(n[A]=zp(o,r)):f<=r&&(e.expiredLanes|=o),i&=~o}}function Su(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function d6(){var e=bA;return bA<<=1,!(bA&4194240)&&(bA=64),e}function ms(e){for(var r=[],a=0;31>a;a++)r.push(e);return r}function S2(e,r,a){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-we(r),e[r]=a}function $p(e,r){var a=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<a;){var n=31-we(a),i=1<<n;r[n]=0,t[n]=-1,e[n]=-1,a&=~i}}function sl(e,r){var a=e.entangledLanes|=r;for(e=e.entanglements;a;){var t=31-we(a),n=1<<t;n&r|e[t]&r&&(e[t]|=r),a&=~n}}var v0=0;function h6(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var b6,ul,g6,m6,p6,Vu=!1,mA=[],Sa=null,Va=null,Da=null,Ji=new Map,$i=new Map,Ea=[],Kp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function S4(e,r){switch(e){case"focusin":case"focusout":Sa=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Ji.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(r.pointerId)}}function ci(e,r,a,t,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:r,domEventName:a,eventSystemFlags:t,nativeEvent:i,targetContainers:[n]},r!==null&&(r=D2(r),r!==null&&ul(r)),e):(e.eventSystemFlags|=t,r=e.targetContainers,n!==null&&r.indexOf(n)===-1&&r.push(n),e)}function qp(e,r,a,t,n){switch(r){case"focusin":return Sa=ci(Sa,e,r,a,t,n),!0;case"dragenter":return Va=ci(Va,e,r,a,t,n),!0;case"mouseover":return Da=ci(Da,e,r,a,t,n),!0;case"pointerover":var i=n.pointerId;return Ji.set(i,ci(Ji.get(i)||null,e,r,a,t,n)),!0;case"gotpointercapture":return i=n.pointerId,$i.set(i,ci($i.get(i)||null,e,r,a,t,n)),!0}return!1}function v6(e){var r=lt(e.target);if(r!==null){var a=xt(r);if(a!==null){if(r=a.tag,r===13){if(r=o6(a),r!==null){e.blockedOn=r,p6(e.priority,function(){g6(a)});return}}else if(r===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function UA(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var a=Du(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(a===null){a=e.nativeEvent;var t=new a.constructor(a.type,a);Tu=t,a.target.dispatchEvent(t),Tu=null}else return r=D2(a),r!==null&&ul(r),e.blockedOn=a,!1;r.shift()}return!0}function V4(e,r,a){UA(e)&&a.delete(r)}function rv(){Vu=!1,Sa!==null&&UA(Sa)&&(Sa=null),Va!==null&&UA(Va)&&(Va=null),Da!==null&&UA(Da)&&(Da=null),Ji.forEach(V4),$i.forEach(V4)}function di(e,r){e.blockedOn===r&&(e.blockedOn=null,Vu||(Vu=!0,re.unstable_scheduleCallback(re.unstable_NormalPriority,rv)))}function Ki(e){function r(n){return di(n,e)}if(0<mA.length){di(mA[0],e);for(var a=1;a<mA.length;a++){var t=mA[a];t.blockedOn===e&&(t.blockedOn=null)}}for(Sa!==null&&di(Sa,e),Va!==null&&di(Va,e),Da!==null&&di(Da,e),Ji.forEach(r),$i.forEach(r),a=0;a<Ea.length;a++)t=Ea[a],t.blockedOn===e&&(t.blockedOn=null);for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)v6(a),a.blockedOn===null&&Ea.shift()}var wn=ca.ReactCurrentBatchConfig,co=!0;function ev(e,r,a,t){var n=v0,i=wn.transition;wn.transition=null;try{v0=1,ll(e,r,a,t)}finally{v0=n,wn.transition=i}}function av(e,r,a,t){var n=v0,i=wn.transition;wn.transition=null;try{v0=4,ll(e,r,a,t)}finally{v0=n,wn.transition=i}}function ll(e,r,a,t){if(co){var n=Du(e,r,a,t);if(n===null)Bs(e,r,t,ho,a),S4(e,t);else if(qp(n,e,r,a,t))t.stopPropagation();else if(S4(e,t),r&4&&-1<Kp.indexOf(e)){for(;n!==null;){var i=D2(n);if(i!==null&&b6(i),i=Du(e,r,a,t),i===null&&Bs(e,r,t,ho,a),i===n)break;n=i}n!==null&&t.stopPropagation()}else Bs(e,r,t,null,a)}}var ho=null;function Du(e,r,a,t){if(ho=null,e=ol(t),e=lt(e),e!==null)if(r=xt(e),r===null)e=null;else if(a=r.tag,a===13){if(e=o6(r),e!==null)return e;e=null}else if(a===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return ho=e,null}function k6(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Up()){case fl:return 1;case l6:return 4;case uo:case jp:return 16;case c6:return 536870912;default:return 16}default:return 16}}var Ta=null,cl=null,jA=null;function w6(){if(jA)return jA;var e,r=cl,a=r.length,t,n="value"in Ta?Ta.value:Ta.textContent,i=n.length;for(e=0;e<a&&r[e]===n[e];e++);var A=a-e;for(t=1;t<=A&&r[a-t]===n[i-t];t++);return jA=n.slice(e,1<t?1-t:void 0)}function LA(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function pA(){return!0}function D4(){return!1}function te(e){function r(a,t,n,i,A){this._reactName=a,this._targetInst=n,this.type=t,this.nativeEvent=i,this.target=A,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?pA:D4,this.isPropagationStopped=D4,this}return V0(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pA)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pA)},persist:function(){},isPersistent:pA}),r}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=te(Hn),V2=V0({},Hn,{view:0,detail:0}),tv=te(V2),ps,vs,hi,ff=V0({},V2,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hi&&(hi&&e.type==="mousemove"?(ps=e.screenX-hi.screenX,vs=e.screenY-hi.screenY):vs=ps=0,hi=e),ps)},movementY:function(e){return"movementY"in e?e.movementY:vs}}),G4=te(ff),nv=V0({},ff,{dataTransfer:0}),iv=te(nv),Av=V0({},V2,{relatedTarget:0}),ks=te(Av),ov=V0({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=te(ov),sv=V0({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uv=te(sv),lv=V0({},Hn,{data:0}),X4=te(lv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=hv[e])?!!r[e]:!1}function hl(){return bv}var gv=V0({},V2,{key:function(e){if(e.key){var r=cv[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=LA(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?dv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hl,charCode:function(e){return e.type==="keypress"?LA(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?LA(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mv=te(gv),pv=V0({},ff,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M4=te(pv),vv=V0({},V2,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hl}),kv=te(vv),wv=V0({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),yv=te(wv),Ev=V0({},ff,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=te(Ev),_v=[9,13,27,32],bl=ta&&"CompositionEvent"in window,Fi=null;ta&&"documentMode"in document&&(Fi=document.documentMode);var Cv=ta&&"TextEvent"in window&&!Fi,y6=ta&&(!bl||Fi&&8<Fi&&11>=Fi),x4=String.fromCharCode(32),P4=!1;function E6(e,r){switch(e){case"keyup":return _v.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function I6(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var An=!1;function Bv(e,r){switch(e){case"compositionend":return I6(r);case"keypress":return r.which!==32?null:(P4=!0,x4);case"textInput":return e=r.data,e===x4&&P4?null:e;default:return null}}function Zv(e,r){if(An)return e==="compositionend"||!bl&&E6(e,r)?(e=w6(),jA=cl=Ta=null,An=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return y6&&r.locale!=="ko"?null:r.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function O4(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Rv[e.type]:r==="textarea"}function _6(e,r,a,t){a6(t),r=bo(r,"onChange"),0<r.length&&(a=new dl("onChange","change",null,a,t),e.push({event:a,listeners:r}))}var Si=null,qi=null;function Tv(e){D6(e,0)}function sf(e){var r=sn(e);if(zb(r))return e}function Wv(e,r){if(e==="change")return r}var C6=!1;if(ta){var ws;if(ta){var ys="oninput"in document;if(!ys){var U4=document.createElement("div");U4.setAttribute("oninput","return;"),ys=typeof U4.oninput=="function"}ws=ys}else ws=!1;C6=ws&&(!document.documentMode||9<document.documentMode)}function j4(){Si&&(Si.detachEvent("onpropertychange",B6),qi=Si=null)}function B6(e){if(e.propertyName==="value"&&sf(qi)){var r=[];_6(r,qi,e,ol(e)),A6(Tv,r)}}function Nv(e,r,a){e==="focusin"?(j4(),Si=r,qi=a,Si.attachEvent("onpropertychange",B6)):e==="focusout"&&j4()}function Fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return sf(qi)}function Sv(e,r){if(e==="click")return sf(r)}function Vv(e,r){if(e==="input"||e==="change")return sf(r)}function Dv(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Ee=typeof Object.is=="function"?Object.is:Dv;function r2(e,r){if(Ee(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var a=Object.keys(e),t=Object.keys(r);if(a.length!==t.length)return!1;for(t=0;t<a.length;t++){var n=a[t];if(!pu.call(r,n)||!Ee(e[n],r[n]))return!1}return!0}function L4(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Y4(e,r){var a=L4(e);e=0;for(var t;a;){if(a.nodeType===3){if(t=e+a.textContent.length,e<=r&&t>=r)return{node:a,offset:r-e};e=t}r:{for(;a;){if(a.nextSibling){a=a.nextSibling;break r}a=a.parentNode}a=void 0}a=L4(a)}}function Z6(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Z6(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function R6(){for(var e=window,r=oo();r instanceof e.HTMLIFrameElement;){try{var a=typeof r.contentWindow.location.href=="string"}catch{a=!1}if(a)e=r.contentWindow;else break;r=oo(e.document)}return r}function gl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Gv(e){var r=R6(),a=e.focusedElem,t=e.selectionRange;if(r!==a&&a&&a.ownerDocument&&Z6(a.ownerDocument.documentElement,a)){if(t!==null&&gl(a)){if(r=t.start,e=t.end,e===void 0&&(e=r),"selectionStart"in a)a.selectionStart=r,a.selectionEnd=Math.min(e,a.value.length);else if(e=(r=a.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var n=a.textContent.length,i=Math.min(t.start,n);t=t.end===void 0?i:Math.min(t.end,n),!e.extend&&i>t&&(n=t,t=i,i=n),n=Y4(a,i);var A=Y4(a,t);n&&A&&(e.rangeCount!==1||e.anchorNode!==n.node||e.anchorOffset!==n.offset||e.focusNode!==A.node||e.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(n.node,n.offset),e.removeAllRanges(),i>t?(e.addRange(r),e.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),e.addRange(r)))}}for(r=[],e=a;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<r.length;a++)e=r[a],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xv=ta&&"documentMode"in document&&11>=document.documentMode,on=null,Gu=null,Vi=null,Xu=!1;function Q4(e,r,a){var t=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||on==null||on!==oo(t)||(t=on,"selectionStart"in t&&gl(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Vi&&r2(Vi,t)||(Vi=t,t=bo(Gu,"onSelect"),0<t.length&&(r=new dl("onSelect","select",null,r,a),e.push({event:r,listeners:t}),r.target=on)))}function vA(e,r){var a={};return a[e.toLowerCase()]=r.toLowerCase(),a["Webkit"+e]="webkit"+r,a["Moz"+e]="moz"+r,a}var fn={animationend:vA("Animation","AnimationEnd"),animationiteration:vA("Animation","AnimationIteration"),animationstart:vA("Animation","AnimationStart"),transitionend:vA("Transition","TransitionEnd")},Es={},T6={};ta&&(T6=document.createElement("div").style,"AnimationEvent"in window||(delete fn.animationend.animation,delete fn.animationiteration.animation,delete fn.animationstart.animation),"TransitionEvent"in window||delete fn.transitionend.transition);function uf(e){if(Es[e])return Es[e];if(!fn[e])return e;var r=fn[e],a;for(a in r)if(r.hasOwnProperty(a)&&a in T6)return Es[e]=r[a];return e}var W6=uf("animationend"),N6=uf("animationiteration"),F6=uf("animationstart"),S6=uf("transitionend"),V6=new Map,H4="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qa(e,r){V6.set(e,r),Mt(r,[e])}for(var Is=0;Is<H4.length;Is++){var _s=H4[Is],Mv=_s.toLowerCase(),xv=_s[0].toUpperCase()+_s.slice(1);qa(Mv,"on"+xv)}qa(W6,"onAnimationEnd");qa(N6,"onAnimationIteration");qa(F6,"onAnimationStart");qa("dblclick","onDoubleClick");qa("focusin","onFocus");qa("focusout","onBlur");qa(S6,"onTransitionEnd");Tn("onMouseEnter",["mouseout","mouseover"]);Tn("onMouseLeave",["mouseout","mouseover"]);Tn("onPointerEnter",["pointerout","pointerover"]);Tn("onPointerLeave",["pointerout","pointerover"]);Mt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function z4(e,r,a){var t=e.type||"unknown-event";e.currentTarget=a,Mp(t,r,void 0,e),e.currentTarget=null}function D6(e,r){r=(r&4)!==0;for(var a=0;a<e.length;a++){var t=e[a],n=t.event;t=t.listeners;r:{var i=void 0;if(r)for(var A=t.length-1;0<=A;A--){var o=t[A],f=o.instance,s=o.currentTarget;if(o=o.listener,f!==i&&n.isPropagationStopped())break r;z4(n,o,s),i=f}else for(A=0;A<t.length;A++){if(o=t[A],f=o.instance,s=o.currentTarget,o=o.listener,f!==i&&n.isPropagationStopped())break r;z4(n,o,s),i=f}}}if(so)throw e=Fu,so=!1,Fu=null,e}function C0(e,r){var a=r[Uu];a===void 0&&(a=r[Uu]=new Set);var t=e+"__bubble";a.has(t)||(G6(r,e,2,!1),a.add(t))}function Cs(e,r,a){var t=0;r&&(t|=4),G6(a,e,t,r)}var kA="_reactListening"+Math.random().toString(36).slice(2);function e2(e){if(!e[kA]){e[kA]=!0,jb.forEach(function(a){a!=="selectionchange"&&(Pv.has(a)||Cs(a,!1,e),Cs(a,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[kA]||(r[kA]=!0,Cs("selectionchange",!1,r))}}function G6(e,r,a,t){switch(k6(r)){case 1:var n=ev;break;case 4:n=av;break;default:n=ll}a=n.bind(null,r,a,e),n=void 0,!Nu||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(n=!0),t?n!==void 0?e.addEventListener(r,a,{capture:!0,passive:n}):e.addEventListener(r,a,!0):n!==void 0?e.addEventListener(r,a,{passive:n}):e.addEventListener(r,a,!1)}function Bs(e,r,a,t,n){var i=t;if(!(r&1)&&!(r&2)&&t!==null)r:for(;;){if(t===null)return;var A=t.tag;if(A===3||A===4){var o=t.stateNode.containerInfo;if(o===n||o.nodeType===8&&o.parentNode===n)break;if(A===4)for(A=t.return;A!==null;){var f=A.tag;if((f===3||f===4)&&(f=A.stateNode.containerInfo,f===n||f.nodeType===8&&f.parentNode===n))return;A=A.return}for(;o!==null;){if(A=lt(o),A===null)return;if(f=A.tag,f===5||f===6){t=i=A;continue r}o=o.parentNode}}t=t.return}A6(function(){var s=i,u=ol(a),c=[];r:{var d=V6.get(e);if(d!==void 0){var b=dl,w=e;switch(e){case"keypress":if(LA(a)===0)break r;case"keydown":case"keyup":b=mv;break;case"focusin":w="focus",b=ks;break;case"focusout":w="blur",b=ks;break;case"beforeblur":case"afterblur":b=ks;break;case"click":if(a.button===2)break r;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=G4;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=iv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=kv;break;case W6:case N6:case F6:b=fv;break;case S6:b=yv;break;case"scroll":b=tv;break;case"wheel":b=Iv;break;case"copy":case"cut":case"paste":b=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=M4}var y=(r&4)!==0,B=!y&&e==="scroll",g=y?d!==null?d+"Capture":null:d;y=[];for(var h=s,m;h!==null;){m=h;var C=m.stateNode;if(m.tag===5&&C!==null&&(m=C,g!==null&&(C=zi(h,g),C!=null&&y.push(a2(h,C,m)))),B)break;h=h.return}0<y.length&&(d=new b(d,w,null,a,u),c.push({event:d,listeners:y}))}}if(!(r&7)){r:{if(d=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",d&&a!==Tu&&(w=a.relatedTarget||a.fromElement)&&(lt(w)||w[na]))break r;if((b||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,b?(w=a.relatedTarget||a.toElement,b=s,w=w?lt(w):null,w!==null&&(B=xt(w),w!==B||w.tag!==5&&w.tag!==6)&&(w=null)):(b=null,w=s),b!==w)){if(y=G4,C="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(y=M4,C="onPointerLeave",g="onPointerEnter",h="pointer"),B=b==null?d:sn(b),m=w==null?d:sn(w),d=new y(C,h+"leave",b,a,u),d.target=B,d.relatedTarget=m,C=null,lt(u)===s&&(y=new y(g,h+"enter",w,a,u),y.target=m,y.relatedTarget=B,C=y),B=C,b&&w)e:{for(y=b,g=w,h=0,m=y;m;m=$t(m))h++;for(m=0,C=g;C;C=$t(C))m++;for(;0<h-m;)y=$t(y),h--;for(;0<m-h;)g=$t(g),m--;for(;h--;){if(y===g||g!==null&&y===g.alternate)break e;y=$t(y),g=$t(g)}y=null}else y=null;b!==null&&J4(c,d,b,y,!1),w!==null&&B!==null&&J4(c,B,w,y,!0)}}r:{if(d=s?sn(s):window,b=d.nodeName&&d.nodeName.toLowerCase(),b==="select"||b==="input"&&d.type==="file")var v=Wv;else if(O4(d))if(C6)v=Vv;else{v=Fv;var F=Nv}else(b=d.nodeName)&&b.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(v=Sv);if(v&&(v=v(e,s))){_6(c,v,a,u);break r}F&&F(e,d,s),e==="focusout"&&(F=d._wrapperState)&&F.controlled&&d.type==="number"&&_u(d,"number",d.value)}switch(F=s?sn(s):window,e){case"focusin":(O4(F)||F.contentEditable==="true")&&(on=F,Gu=s,Vi=null);break;case"focusout":Vi=Gu=on=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Q4(c,a,u);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":Q4(c,a,u)}var S;if(bl)r:{switch(e){case"compositionstart":var P="onCompositionStart";break r;case"compositionend":P="onCompositionEnd";break r;case"compositionupdate":P="onCompositionUpdate";break r}P=void 0}else An?E6(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(y6&&a.locale!=="ko"&&(An||P!=="onCompositionStart"?P==="onCompositionEnd"&&An&&(S=w6()):(Ta=u,cl="value"in Ta?Ta.value:Ta.textContent,An=!0)),F=bo(s,P),0<F.length&&(P=new X4(P,e,null,a,u),c.push({event:P,listeners:F}),S?P.data=S:(S=I6(a),S!==null&&(P.data=S)))),(S=Cv?Bv(e,a):Zv(e,a))&&(s=bo(s,"onBeforeInput"),0<s.length&&(u=new X4("onBeforeInput","beforeinput",null,a,u),c.push({event:u,listeners:s}),u.data=S))}D6(c,r)})}function a2(e,r,a){return{instance:e,listener:r,currentTarget:a}}function bo(e,r){for(var a=r+"Capture",t=[];e!==null;){var n=e,i=n.stateNode;n.tag===5&&i!==null&&(n=i,i=zi(e,a),i!=null&&t.unshift(a2(e,i,n)),i=zi(e,r),i!=null&&t.push(a2(e,i,n))),e=e.return}return t}function $t(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function J4(e,r,a,t,n){for(var i=r._reactName,A=[];a!==null&&a!==t;){var o=a,f=o.alternate,s=o.stateNode;if(f!==null&&f===t)break;o.tag===5&&s!==null&&(o=s,n?(f=zi(a,i),f!=null&&A.unshift(a2(a,f,o))):n||(f=zi(a,i),f!=null&&A.push(a2(a,f,o)))),a=a.return}A.length!==0&&e.push({event:r,listeners:A})}var Ov=/\r\n?/g,Uv=/\u0000|\uFFFD/g;function $4(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(Uv,"")}function wA(e,r,a){if(r=$4(r),$4(e)!==r&&a)throw Error(T(425))}function go(){}var Mu=null,xu=null;function Pu(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,jv=typeof clearTimeout=="function"?clearTimeout:void 0,K4=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof K4<"u"?function(e){return K4.resolve(null).then(e).catch(Yv)}:Ou;function Yv(e){setTimeout(function(){throw e})}function Zs(e,r){var a=r,t=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(t===0){e.removeChild(n),Ki(r);return}t--}else a!=="$"&&a!=="$?"&&a!=="$!"||t++;a=n}while(a);Ki(r)}function Ga(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function q4(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(r===0)return e;r--}else a==="/$"&&r++}e=e.previousSibling}return null}var zn=Math.random().toString(36).slice(2),Ne="__reactFiber$"+zn,t2="__reactProps$"+zn,na="__reactContainer$"+zn,Uu="__reactEvents$"+zn,Qv="__reactListeners$"+zn,Hv="__reactHandles$"+zn;function lt(e){var r=e[Ne];if(r)return r;for(var a=e.parentNode;a;){if(r=a[na]||a[Ne]){if(a=r.alternate,r.child!==null||a!==null&&a.child!==null)for(e=q4(e);e!==null;){if(a=e[Ne])return a;e=q4(e)}return r}e=a,a=e.parentNode}return null}function D2(e){return e=e[Ne]||e[na],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function lf(e){return e[t2]||null}var ju=[],un=-1;function rt(e){return{current:e}}function Z0(e){0>un||(e.current=ju[un],ju[un]=null,un--)}function y0(e,r){un++,ju[un]=e.current,e.current=r}var za={},Br=rt(za),Pr=rt(!1),It=za;function Wn(e,r){var a=e.type.contextTypes;if(!a)return za;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===r)return t.__reactInternalMemoizedMaskedChildContext;var n={},i;for(i in a)n[i]=r[i];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=n),n}function Or(e){return e=e.childContextTypes,e!=null}function mo(){Z0(Pr),Z0(Br)}function rd(e,r,a){if(Br.current!==za)throw Error(T(168));y0(Br,r),y0(Pr,a)}function X6(e,r,a){var t=e.stateNode;if(r=r.childContextTypes,typeof t.getChildContext!="function")return a;t=t.getChildContext();for(var n in t)if(!(n in r))throw Error(T(108,Np(e)||"Unknown",n));return V0({},a,t)}function po(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||za,It=Br.current,y0(Br,e),y0(Pr,Pr.current),!0}function ed(e,r,a){var t=e.stateNode;if(!t)throw Error(T(169));a?(e=X6(e,r,It),t.__reactInternalMemoizedMergedChildContext=e,Z0(Pr),Z0(Br),y0(Br,e)):Z0(Pr),y0(Pr,a)}var ze=null,cf=!1,Rs=!1;function M6(e){ze===null?ze=[e]:ze.push(e)}function zv(e){cf=!0,M6(e)}function et(){if(!Rs&&ze!==null){Rs=!0;var e=0,r=v0;try{var a=ze;for(v0=1;e<a.length;e++){var t=a[e];do t=t(!0);while(t!==null)}ze=null,cf=!1}catch(n){throw ze!==null&&(ze=ze.slice(e+1)),u6(fl,et),n}finally{v0=r,Rs=!1}}return null}var ln=[],cn=0,vo=null,ko=0,ne=[],ie=0,_t=null,Je=1,$e="";function ft(e,r){ln[cn++]=ko,ln[cn++]=vo,vo=e,ko=r}function x6(e,r,a){ne[ie++]=Je,ne[ie++]=$e,ne[ie++]=_t,_t=e;var t=Je;e=$e;var n=32-we(t)-1;t&=~(1<<n),a+=1;var i=32-we(r)+n;if(30<i){var A=n-n%5;i=(t&(1<<A)-1).toString(32),t>>=A,n-=A,Je=1<<32-we(r)+n|a<<n|t,$e=i+e}else Je=1<<i|a<<n|t,$e=e}function ml(e){e.return!==null&&(ft(e,1),x6(e,1,0))}function pl(e){for(;e===vo;)vo=ln[--cn],ln[cn]=null,ko=ln[--cn],ln[cn]=null;for(;e===_t;)_t=ne[--ie],ne[ie]=null,$e=ne[--ie],ne[ie]=null,Je=ne[--ie],ne[ie]=null}var Kr=null,Jr=null,W0=!1,ve=null;function P6(e,r){var a=fe(5,null,null,0);a.elementType="DELETED",a.stateNode=r,a.return=e,r=e.deletions,r===null?(e.deletions=[a],e.flags|=16):r.push(a)}function ad(e,r){switch(e.tag){case 5:var a=e.type;return r=r.nodeType!==1||a.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,Kr=e,Jr=Ga(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,Kr=e,Jr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(a=_t!==null?{id:Je,overflow:$e}:null,e.memoizedState={dehydrated:r,treeContext:a,retryLane:1073741824},a=fe(18,null,null,0),a.stateNode=r,a.return=e,e.child=a,Kr=e,Jr=null,!0):!1;default:return!1}}function Lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yu(e){if(W0){var r=Jr;if(r){var a=r;if(!ad(e,r)){if(Lu(e))throw Error(T(418));r=Ga(a.nextSibling);var t=Kr;r&&ad(e,r)?P6(t,a):(e.flags=e.flags&-4097|2,W0=!1,Kr=e)}}else{if(Lu(e))throw Error(T(418));e.flags=e.flags&-4097|2,W0=!1,Kr=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Kr=e}function yA(e){if(e!==Kr)return!1;if(!W0)return td(e),W0=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!Pu(e.type,e.memoizedProps)),r&&(r=Jr)){if(Lu(e))throw O6(),Error(T(418));for(;r;)P6(e,r),r=Ga(r.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));r:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"){if(r===0){Jr=Ga(e.nextSibling);break r}r--}else a!=="$"&&a!=="$!"&&a!=="$?"||r++}e=e.nextSibling}Jr=null}}else Jr=Kr?Ga(e.stateNode.nextSibling):null;return!0}function O6(){for(var e=Jr;e;)e=Ga(e.nextSibling)}function Nn(){Jr=Kr=null,W0=!1}function vl(e){ve===null?ve=[e]:ve.push(e)}var Jv=ca.ReactCurrentBatchConfig;function me(e,r){if(e&&e.defaultProps){r=V0({},r),e=e.defaultProps;for(var a in e)r[a]===void 0&&(r[a]=e[a]);return r}return r}var wo=rt(null),yo=null,dn=null,kl=null;function wl(){kl=dn=yo=null}function yl(e){var r=wo.current;Z0(wo),e._currentValue=r}function Qu(e,r,a){for(;e!==null;){var t=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,t!==null&&(t.childLanes|=r)):t!==null&&(t.childLanes&r)!==r&&(t.childLanes|=r),e===a)break;e=e.return}}function yn(e,r){yo=e,kl=dn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&r&&(xr=!0),e.firstContext=null)}function le(e){var r=e._currentValue;if(kl!==e)if(e={context:e,memoizedValue:r,next:null},dn===null){if(yo===null)throw Error(T(308));dn=e,yo.dependencies={lanes:0,firstContext:e}}else dn=dn.next=e;return r}var ct=null;function El(e){ct===null?ct=[e]:ct.push(e)}function U6(e,r,a,t){var n=r.interleaved;return n===null?(a.next=a,El(r)):(a.next=n.next,n.next=a),r.interleaved=a,ia(e,t)}function ia(e,r){e.lanes|=r;var a=e.alternate;for(a!==null&&(a.lanes|=r),a=e,e=e.return;e!==null;)e.childLanes|=r,a=e.alternate,a!==null&&(a.childLanes|=r),a=e,e=e.return;return a.tag===3?a.stateNode:null}var wa=!1;function Il(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j6(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ea(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function Xa(e,r,a){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,c0&2){var n=t.pending;return n===null?r.next=r:(r.next=n.next,n.next=r),t.pending=r,ia(e,a)}return n=t.interleaved,n===null?(r.next=r,El(t)):(r.next=n.next,n.next=r),t.interleaved=r,ia(e,a)}function YA(e,r,a){if(r=r.updateQueue,r!==null&&(r=r.shared,(a&4194240)!==0)){var t=r.lanes;t&=e.pendingLanes,a|=t,r.lanes=a,sl(e,a)}}function nd(e,r){var a=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,a===t)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};i===null?n=i=A:i=i.next=A,a=a.next}while(a!==null);i===null?n=i=r:i=i.next=r}else n=i=r;a={baseState:t.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:t.shared,effects:t.effects},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=r:e.next=r,a.lastBaseUpdate=r}function Eo(e,r,a,t){var n=e.updateQueue;wa=!1;var i=n.firstBaseUpdate,A=n.lastBaseUpdate,o=n.shared.pending;if(o!==null){n.shared.pending=null;var f=o,s=f.next;f.next=null,A===null?i=s:A.next=s,A=f;var u=e.alternate;u!==null&&(u=u.updateQueue,o=u.lastBaseUpdate,o!==A&&(o===null?u.firstBaseUpdate=s:o.next=s,u.lastBaseUpdate=f))}if(i!==null){var c=n.baseState;A=0,u=s=f=null,o=i;do{var d=o.lane,b=o.eventTime;if((t&d)===d){u!==null&&(u=u.next={eventTime:b,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});r:{var w=e,y=o;switch(d=r,b=a,y.tag){case 1:if(w=y.payload,typeof w=="function"){c=w.call(b,c,d);break r}c=w;break r;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,d=typeof w=="function"?w.call(b,c,d):w,d==null)break r;c=V0({},c,d);break r;case 2:wa=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=n.effects,d===null?n.effects=[o]:d.push(o))}else b={eventTime:b,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},u===null?(s=u=b,f=c):u=u.next=b,A|=d;if(o=o.next,o===null){if(o=n.shared.pending,o===null)break;d=o,o=d.next,d.next=null,n.lastBaseUpdate=d,n.shared.pending=null}}while(1);if(u===null&&(f=c),n.baseState=f,n.firstBaseUpdate=s,n.lastBaseUpdate=u,r=n.shared.interleaved,r!==null){n=r;do A|=n.lane,n=n.next;while(n!==r)}else i===null&&(n.shared.lanes=0);Bt|=A,e.lanes=A,e.memoizedState=c}}function id(e,r,a){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var t=e[r],n=t.callback;if(n!==null){if(t.callback=null,t=a,typeof n!="function")throw Error(T(191,n));n.call(t)}}}var L6=new Ub.Component().refs;function Hu(e,r,a,t){r=e.memoizedState,a=a(t,r),a=a==null?r:V0({},r,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var df={isMounted:function(e){return(e=e._reactInternals)?xt(e)===e:!1},enqueueSetState:function(e,r,a){e=e._reactInternals;var t=Sr(),n=xa(e),i=ea(t,n);i.payload=r,a!=null&&(i.callback=a),r=Xa(e,i,n),r!==null&&(ye(r,e,n,t),YA(r,e,n))},enqueueReplaceState:function(e,r,a){e=e._reactInternals;var t=Sr(),n=xa(e),i=ea(t,n);i.tag=1,i.payload=r,a!=null&&(i.callback=a),r=Xa(e,i,n),r!==null&&(ye(r,e,n,t),YA(r,e,n))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var a=Sr(),t=xa(e),n=ea(a,t);n.tag=2,r!=null&&(n.callback=r),r=Xa(e,n,t),r!==null&&(ye(r,e,t,a),YA(r,e,t))}};function Ad(e,r,a,t,n,i,A){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,i,A):r.prototype&&r.prototype.isPureReactComponent?!r2(a,t)||!r2(n,i):!0}function Y6(e,r,a){var t=!1,n=za,i=r.contextType;return typeof i=="object"&&i!==null?i=le(i):(n=Or(r)?It:Br.current,t=r.contextTypes,i=(t=t!=null)?Wn(e,n):za),r=new r(a,i),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=df,e.stateNode=r,r._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=i),r}function od(e,r,a,t){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(a,t),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(a,t),r.state!==e&&df.enqueueReplaceState(r,r.state,null)}function zu(e,r,a,t){var n=e.stateNode;n.props=a,n.state=e.memoizedState,n.refs=L6,Il(e);var i=r.contextType;typeof i=="object"&&i!==null?n.context=le(i):(i=Or(r)?It:Br.current,n.context=Wn(e,i)),n.state=e.memoizedState,i=r.getDerivedStateFromProps,typeof i=="function"&&(Hu(e,r,i,a),n.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(r=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),r!==n.state&&df.enqueueReplaceState(n,n.state,null),Eo(e,a,n,t),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308)}function bi(e,r,a){if(e=a.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(T(309));var t=a.stateNode}if(!t)throw Error(T(147,e));var n=t,i=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===i?r.ref:(r=function(A){var o=n.refs;o===L6&&(o=n.refs={}),A===null?delete o[i]:o[i]=A},r._stringRef=i,r)}if(typeof e!="string")throw Error(T(284));if(!a._owner)throw Error(T(290,e))}return e}function EA(e,r){throw e=Object.prototype.toString.call(r),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function fd(e){var r=e._init;return r(e._payload)}function Q6(e){function r(g,h){if(e){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function a(g,h){if(!e)return null;for(;h!==null;)r(g,h),h=h.sibling;return null}function t(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function n(g,h){return g=Pa(g,h),g.index=0,g.sibling=null,g}function i(g,h,m){return g.index=m,e?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function A(g){return e&&g.alternate===null&&(g.flags|=2),g}function o(g,h,m,C){return h===null||h.tag!==6?(h=Ds(m,g.mode,C),h.return=g,h):(h=n(h,m),h.return=g,h)}function f(g,h,m,C){var v=m.type;return v===nn?u(g,h,m.props.children,C,m.key):h!==null&&(h.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===ka&&fd(v)===h.type)?(C=n(h,m.props),C.ref=bi(g,h,m),C.return=g,C):(C=KA(m.type,m.key,m.props,null,g.mode,C),C.ref=bi(g,h,m),C.return=g,C)}function s(g,h,m,C){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=Gs(m,g.mode,C),h.return=g,h):(h=n(h,m.children||[]),h.return=g,h)}function u(g,h,m,C,v){return h===null||h.tag!==7?(h=vt(m,g.mode,C,v),h.return=g,h):(h=n(h,m),h.return=g,h)}function c(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ds(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case cA:return m=KA(h.type,h.key,h.props,null,g.mode,m),m.ref=bi(g,null,h),m.return=g,m;case tn:return h=Gs(h,g.mode,m),h.return=g,h;case ka:var C=h._init;return c(g,C(h._payload),m)}if(yi(h)||ui(h))return h=vt(h,g.mode,m,null),h.return=g,h;EA(g,h)}return null}function d(g,h,m,C){var v=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return v!==null?null:o(g,h,""+m,C);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cA:return m.key===v?f(g,h,m,C):null;case tn:return m.key===v?s(g,h,m,C):null;case ka:return v=m._init,d(g,h,v(m._payload),C)}if(yi(m)||ui(m))return v!==null?null:u(g,h,m,C,null);EA(g,m)}return null}function b(g,h,m,C,v){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(m)||null,o(h,g,""+C,v);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case cA:return g=g.get(C.key===null?m:C.key)||null,f(h,g,C,v);case tn:return g=g.get(C.key===null?m:C.key)||null,s(h,g,C,v);case ka:var F=C._init;return b(g,h,m,F(C._payload),v)}if(yi(C)||ui(C))return g=g.get(m)||null,u(h,g,C,v,null);EA(h,C)}return null}function w(g,h,m,C){for(var v=null,F=null,S=h,P=h=0,s0=null;S!==null&&P<m.length;P++){S.index>P?(s0=S,S=null):s0=S.sibling;var A0=d(g,S,m[P],C);if(A0===null){S===null&&(S=s0);break}e&&S&&A0.alternate===null&&r(g,S),h=i(A0,h,P),F===null?v=A0:F.sibling=A0,F=A0,S=s0}if(P===m.length)return a(g,S),W0&&ft(g,P),v;if(S===null){for(;P<m.length;P++)S=c(g,m[P],C),S!==null&&(h=i(S,h,P),F===null?v=S:F.sibling=S,F=S);return W0&&ft(g,P),v}for(S=t(g,S);P<m.length;P++)s0=b(S,g,P,m[P],C),s0!==null&&(e&&s0.alternate!==null&&S.delete(s0.key===null?P:s0.key),h=i(s0,h,P),F===null?v=s0:F.sibling=s0,F=s0);return e&&S.forEach(function(Yr){return r(g,Yr)}),W0&&ft(g,P),v}function y(g,h,m,C){var v=ui(m);if(typeof v!="function")throw Error(T(150));if(m=v.call(m),m==null)throw Error(T(151));for(var F=v=null,S=h,P=h=0,s0=null,A0=m.next();S!==null&&!A0.done;P++,A0=m.next()){S.index>P?(s0=S,S=null):s0=S.sibling;var Yr=d(g,S,A0.value,C);if(Yr===null){S===null&&(S=s0);break}e&&S&&Yr.alternate===null&&r(g,S),h=i(Yr,h,P),F===null?v=Yr:F.sibling=Yr,F=Yr,S=s0}if(A0.done)return a(g,S),W0&&ft(g,P),v;if(S===null){for(;!A0.done;P++,A0=m.next())A0=c(g,A0.value,C),A0!==null&&(h=i(A0,h,P),F===null?v=A0:F.sibling=A0,F=A0);return W0&&ft(g,P),v}for(S=t(g,S);!A0.done;P++,A0=m.next())A0=b(S,g,P,A0.value,C),A0!==null&&(e&&A0.alternate!==null&&S.delete(A0.key===null?P:A0.key),h=i(A0,h,P),F===null?v=A0:F.sibling=A0,F=A0);return e&&S.forEach(function(ha){return r(g,ha)}),W0&&ft(g,P),v}function B(g,h,m,C){if(typeof m=="object"&&m!==null&&m.type===nn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cA:r:{for(var v=m.key,F=h;F!==null;){if(F.key===v){if(v=m.type,v===nn){if(F.tag===7){a(g,F.sibling),h=n(F,m.props.children),h.return=g,g=h;break r}}else if(F.elementType===v||typeof v=="object"&&v!==null&&v.$$typeof===ka&&fd(v)===F.type){a(g,F.sibling),h=n(F,m.props),h.ref=bi(g,F,m),h.return=g,g=h;break r}a(g,F);break}else r(g,F);F=F.sibling}m.type===nn?(h=vt(m.props.children,g.mode,C,m.key),h.return=g,g=h):(C=KA(m.type,m.key,m.props,null,g.mode,C),C.ref=bi(g,h,m),C.return=g,g=C)}return A(g);case tn:r:{for(F=m.key;h!==null;){if(h.key===F)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){a(g,h.sibling),h=n(h,m.children||[]),h.return=g,g=h;break r}else{a(g,h);break}else r(g,h);h=h.sibling}h=Gs(m,g.mode,C),h.return=g,g=h}return A(g);case ka:return F=m._init,B(g,h,F(m._payload),C)}if(yi(m))return w(g,h,m,C);if(ui(m))return y(g,h,m,C);EA(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(a(g,h.sibling),h=n(h,m),h.return=g,g=h):(a(g,h),h=Ds(m,g.mode,C),h.return=g,g=h),A(g)):a(g,h)}return B}var Fn=Q6(!0),H6=Q6(!1),G2={},Xe=rt(G2),n2=rt(G2),i2=rt(G2);function dt(e){if(e===G2)throw Error(T(174));return e}function _l(e,r){switch(y0(i2,r),y0(n2,e),y0(Xe,G2),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Bu(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Bu(r,e)}Z0(Xe),y0(Xe,r)}function Sn(){Z0(Xe),Z0(n2),Z0(i2)}function z6(e){dt(i2.current);var r=dt(Xe.current),a=Bu(r,e.type);r!==a&&(y0(n2,e),y0(Xe,a))}function Cl(e){n2.current===e&&(Z0(Xe),Z0(n2))}var F0=rt(0);function Io(e){for(var r=e;r!==null;){if(r.tag===13){var a=r.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ts=[];function Bl(){for(var e=0;e<Ts.length;e++)Ts[e]._workInProgressVersionPrimary=null;Ts.length=0}var QA=ca.ReactCurrentDispatcher,Ws=ca.ReactCurrentBatchConfig,Ct=0,S0=null,q0=null,nr=null,_o=!1,Di=!1,A2=0,$v=0;function mr(){throw Error(T(321))}function Zl(e,r){if(r===null)return!1;for(var a=0;a<r.length&&a<e.length;a++)if(!Ee(e[a],r[a]))return!1;return!0}function Rl(e,r,a,t,n,i){if(Ct=i,S0=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,QA.current=e===null||e.memoizedState===null?ek:ak,e=a(t,n),Di){i=0;do{if(Di=!1,A2=0,25<=i)throw Error(T(301));i+=1,nr=q0=null,r.updateQueue=null,QA.current=tk,e=a(t,n)}while(Di)}if(QA.current=Co,r=q0!==null&&q0.next!==null,Ct=0,nr=q0=S0=null,_o=!1,r)throw Error(T(300));return e}function Tl(){var e=A2!==0;return A2=0,e}function We(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nr===null?S0.memoizedState=nr=e:nr=nr.next=e,nr}function ce(){if(q0===null){var e=S0.alternate;e=e!==null?e.memoizedState:null}else e=q0.next;var r=nr===null?S0.memoizedState:nr.next;if(r!==null)nr=r,q0=e;else{if(e===null)throw Error(T(310));q0=e,e={memoizedState:q0.memoizedState,baseState:q0.baseState,baseQueue:q0.baseQueue,queue:q0.queue,next:null},nr===null?S0.memoizedState=nr=e:nr=nr.next=e}return nr}function o2(e,r){return typeof r=="function"?r(e):r}function Ns(e){var r=ce(),a=r.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=e;var t=q0,n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var A=n.next;n.next=i.next,i.next=A}t.baseQueue=n=i,a.pending=null}if(n!==null){i=n.next,t=t.baseState;var o=A=null,f=null,s=i;do{var u=s.lane;if((Ct&u)===u)f!==null&&(f=f.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),t=s.hasEagerState?s.eagerState:e(t,s.action);else{var c={lane:u,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};f===null?(o=f=c,A=t):f=f.next=c,S0.lanes|=u,Bt|=u}s=s.next}while(s!==null&&s!==i);f===null?A=t:f.next=o,Ee(t,r.memoizedState)||(xr=!0),r.memoizedState=t,r.baseState=A,r.baseQueue=f,a.lastRenderedState=t}if(e=a.interleaved,e!==null){n=e;do i=n.lane,S0.lanes|=i,Bt|=i,n=n.next;while(n!==e)}else n===null&&(a.lanes=0);return[r.memoizedState,a.dispatch]}function Fs(e){var r=ce(),a=r.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=e;var t=a.dispatch,n=a.pending,i=r.memoizedState;if(n!==null){a.pending=null;var A=n=n.next;do i=e(i,A.action),A=A.next;while(A!==n);Ee(i,r.memoizedState)||(xr=!0),r.memoizedState=i,r.baseQueue===null&&(r.baseState=i),a.lastRenderedState=i}return[i,t]}function J6(){}function $6(e,r){var a=S0,t=ce(),n=r(),i=!Ee(t.memoizedState,n);if(i&&(t.memoizedState=n,xr=!0),t=t.queue,Wl(r3.bind(null,a,t,e),[e]),t.getSnapshot!==r||i||nr!==null&&nr.memoizedState.tag&1){if(a.flags|=2048,f2(9,q6.bind(null,a,t,n,r),void 0,null),ir===null)throw Error(T(349));Ct&30||K6(a,r,n)}return n}function K6(e,r,a){e.flags|=16384,e={getSnapshot:r,value:a},r=S0.updateQueue,r===null?(r={lastEffect:null,stores:null},S0.updateQueue=r,r.stores=[e]):(a=r.stores,a===null?r.stores=[e]:a.push(e))}function q6(e,r,a,t){r.value=a,r.getSnapshot=t,e3(r)&&a3(e)}function r3(e,r,a){return a(function(){e3(r)&&a3(e)})}function e3(e){var r=e.getSnapshot;e=e.value;try{var a=r();return!Ee(e,a)}catch{return!0}}function a3(e){var r=ia(e,1);r!==null&&ye(r,e,1,-1)}function sd(e){var r=We();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o2,lastRenderedState:e},r.queue=e,e=e.dispatch=rk.bind(null,S0,e),[r.memoizedState,e]}function f2(e,r,a,t){return e={tag:e,create:r,destroy:a,deps:t,next:null},r=S0.updateQueue,r===null?(r={lastEffect:null,stores:null},S0.updateQueue=r,r.lastEffect=e.next=e):(a=r.lastEffect,a===null?r.lastEffect=e.next=e:(t=a.next,a.next=e,e.next=t,r.lastEffect=e)),e}function t3(){return ce().memoizedState}function HA(e,r,a,t){var n=We();S0.flags|=e,n.memoizedState=f2(1|r,a,void 0,t===void 0?null:t)}function hf(e,r,a,t){var n=ce();t=t===void 0?null:t;var i=void 0;if(q0!==null){var A=q0.memoizedState;if(i=A.destroy,t!==null&&Zl(t,A.deps)){n.memoizedState=f2(r,a,i,t);return}}S0.flags|=e,n.memoizedState=f2(1|r,a,i,t)}function ud(e,r){return HA(8390656,8,e,r)}function Wl(e,r){return hf(2048,8,e,r)}function n3(e,r){return hf(4,2,e,r)}function i3(e,r){return hf(4,4,e,r)}function A3(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function o3(e,r,a){return a=a!=null?a.concat([e]):null,hf(4,4,A3.bind(null,r,e),a)}function Nl(){}function f3(e,r){var a=ce();r=r===void 0?null:r;var t=a.memoizedState;return t!==null&&r!==null&&Zl(r,t[1])?t[0]:(a.memoizedState=[e,r],e)}function s3(e,r){var a=ce();r=r===void 0?null:r;var t=a.memoizedState;return t!==null&&r!==null&&Zl(r,t[1])?t[0]:(e=e(),a.memoizedState=[e,r],e)}function u3(e,r,a){return Ct&21?(Ee(a,r)||(a=d6(),S0.lanes|=a,Bt|=a,e.baseState=!0),r):(e.baseState&&(e.baseState=!1,xr=!0),e.memoizedState=a)}function Kv(e,r){var a=v0;v0=a!==0&&4>a?a:4,e(!0);var t=Ws.transition;Ws.transition={};try{e(!1),r()}finally{v0=a,Ws.transition=t}}function l3(){return ce().memoizedState}function qv(e,r,a){var t=xa(e);if(a={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null},c3(e))d3(r,a);else if(a=U6(e,r,a,t),a!==null){var n=Sr();ye(a,e,t,n),h3(a,r,t)}}function rk(e,r,a){var t=xa(e),n={lane:t,action:a,hasEagerState:!1,eagerState:null,next:null};if(c3(e))d3(r,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=r.lastRenderedReducer,i!==null))try{var A=r.lastRenderedState,o=i(A,a);if(n.hasEagerState=!0,n.eagerState=o,Ee(o,A)){var f=r.interleaved;f===null?(n.next=n,El(r)):(n.next=f.next,f.next=n),r.interleaved=n;return}}catch{}finally{}a=U6(e,r,n,t),a!==null&&(n=Sr(),ye(a,e,t,n),h3(a,r,t))}}function c3(e){var r=e.alternate;return e===S0||r!==null&&r===S0}function d3(e,r){Di=_o=!0;var a=e.pending;a===null?r.next=r:(r.next=a.next,a.next=r),e.pending=r}function h3(e,r,a){if(a&4194240){var t=r.lanes;t&=e.pendingLanes,a|=t,r.lanes=a,sl(e,a)}}var Co={readContext:le,useCallback:mr,useContext:mr,useEffect:mr,useImperativeHandle:mr,useInsertionEffect:mr,useLayoutEffect:mr,useMemo:mr,useReducer:mr,useRef:mr,useState:mr,useDebugValue:mr,useDeferredValue:mr,useTransition:mr,useMutableSource:mr,useSyncExternalStore:mr,useId:mr,unstable_isNewReconciler:!1},ek={readContext:le,useCallback:function(e,r){return We().memoizedState=[e,r===void 0?null:r],e},useContext:le,useEffect:ud,useImperativeHandle:function(e,r,a){return a=a!=null?a.concat([e]):null,HA(4194308,4,A3.bind(null,r,e),a)},useLayoutEffect:function(e,r){return HA(4194308,4,e,r)},useInsertionEffect:function(e,r){return HA(4,2,e,r)},useMemo:function(e,r){var a=We();return r=r===void 0?null:r,e=e(),a.memoizedState=[e,r],e},useReducer:function(e,r,a){var t=We();return r=a!==void 0?a(r):r,t.memoizedState=t.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},t.queue=e,e=e.dispatch=qv.bind(null,S0,e),[t.memoizedState,e]},useRef:function(e){var r=We();return e={current:e},r.memoizedState=e},useState:sd,useDebugValue:Nl,useDeferredValue:function(e){return We().memoizedState=e},useTransition:function(){var e=sd(!1),r=e[0];return e=Kv.bind(null,e[1]),We().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,a){var t=S0,n=We();if(W0){if(a===void 0)throw Error(T(407));a=a()}else{if(a=r(),ir===null)throw Error(T(349));Ct&30||K6(t,r,a)}n.memoizedState=a;var i={value:a,getSnapshot:r};return n.queue=i,ud(r3.bind(null,t,i,e),[e]),t.flags|=2048,f2(9,q6.bind(null,t,i,a,r),void 0,null),a},useId:function(){var e=We(),r=ir.identifierPrefix;if(W0){var a=$e,t=Je;a=(t&~(1<<32-we(t)-1)).toString(32)+a,r=":"+r+"R"+a,a=A2++,0<a&&(r+="H"+a.toString(32)),r+=":"}else a=$v++,r=":"+r+"r"+a.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},ak={readContext:le,useCallback:f3,useContext:le,useEffect:Wl,useImperativeHandle:o3,useInsertionEffect:n3,useLayoutEffect:i3,useMemo:s3,useReducer:Ns,useRef:t3,useState:function(){return Ns(o2)},useDebugValue:Nl,useDeferredValue:function(e){var r=ce();return u3(r,q0.memoizedState,e)},useTransition:function(){var e=Ns(o2)[0],r=ce().memoizedState;return[e,r]},useMutableSource:J6,useSyncExternalStore:$6,useId:l3,unstable_isNewReconciler:!1},tk={readContext:le,useCallback:f3,useContext:le,useEffect:Wl,useImperativeHandle:o3,useInsertionEffect:n3,useLayoutEffect:i3,useMemo:s3,useReducer:Fs,useRef:t3,useState:function(){return Fs(o2)},useDebugValue:Nl,useDeferredValue:function(e){var r=ce();return q0===null?r.memoizedState=e:u3(r,q0.memoizedState,e)},useTransition:function(){var e=Fs(o2)[0],r=ce().memoizedState;return[e,r]},useMutableSource:J6,useSyncExternalStore:$6,useId:l3,unstable_isNewReconciler:!1};function Vn(e,r){try{var a="",t=r;do a+=Wp(t),t=t.return;while(t);var n=a}catch(i){n=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:r,stack:n,digest:null}}function Ss(e,r,a){return{value:e,source:null,stack:a??null,digest:r??null}}function Ju(e,r){try{console.error(r.value)}catch(a){setTimeout(function(){throw a})}}var nk=typeof WeakMap=="function"?WeakMap:Map;function b3(e,r,a){a=ea(-1,a),a.tag=3,a.payload={element:null};var t=r.value;return a.callback=function(){Zo||(Zo=!0,A1=t),Ju(e,r)},a}function g3(e,r,a){a=ea(-1,a),a.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var n=r.value;a.payload=function(){return t(n)},a.callback=function(){Ju(e,r)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(a.callback=function(){Ju(e,r),typeof t!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),a}function ld(e,r,a){var t=e.pingCache;if(t===null){t=e.pingCache=new nk;var n=new Set;t.set(r,n)}else n=t.get(r),n===void 0&&(n=new Set,t.set(r,n));n.has(a)||(n.add(a),e=pk.bind(null,e,r,a),r.then(e,e))}function cd(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function dd(e,r,a,t,n){return e.mode&1?(e.flags|=65536,e.lanes=n,e):(e===r?e.flags|=65536:(e.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(r=ea(-1,1),r.tag=2,Xa(a,r,1))),a.lanes|=1),e)}var ik=ca.ReactCurrentOwner,xr=!1;function Nr(e,r,a,t){r.child=e===null?H6(r,null,a,t):Fn(r,e.child,a,t)}function hd(e,r,a,t,n){a=a.render;var i=r.ref;return yn(r,n),t=Rl(e,r,a,t,i,n),a=Tl(),e!==null&&!xr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~n,Aa(e,r,n)):(W0&&a&&ml(r),r.flags|=1,Nr(e,r,t,n),r.child)}function bd(e,r,a,t,n){if(e===null){var i=a.type;return typeof i=="function"&&!xl(i)&&i.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(r.tag=15,r.type=i,m3(e,r,i,t,n)):(e=KA(a.type,null,t,r,r.mode,n),e.ref=r.ref,e.return=r,r.child=e)}if(i=e.child,!(e.lanes&n)){var A=i.memoizedProps;if(a=a.compare,a=a!==null?a:r2,a(A,t)&&e.ref===r.ref)return Aa(e,r,n)}return r.flags|=1,e=Pa(i,t),e.ref=r.ref,e.return=r,r.child=e}function m3(e,r,a,t,n){if(e!==null){var i=e.memoizedProps;if(r2(i,t)&&e.ref===r.ref)if(xr=!1,r.pendingProps=t=i,(e.lanes&n)!==0)e.flags&131072&&(xr=!0);else return r.lanes=e.lanes,Aa(e,r,n)}return $u(e,r,a,t,n)}function p3(e,r,a){var t=r.pendingProps,n=t.children,i=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(r.mode&1))r.memoizedState={baseLanes:0,cachePool:null,transitions:null},y0(bn,zr),zr|=a;else{if(!(a&1073741824))return e=i!==null?i.baseLanes|a:a,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,y0(bn,zr),zr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=i!==null?i.baseLanes:a,y0(bn,zr),zr|=t}else i!==null?(t=i.baseLanes|a,r.memoizedState=null):t=a,y0(bn,zr),zr|=t;return Nr(e,r,n,a),r.child}function v3(e,r){var a=r.ref;(e===null&&a!==null||e!==null&&e.ref!==a)&&(r.flags|=512,r.flags|=2097152)}function $u(e,r,a,t,n){var i=Or(a)?It:Br.current;return i=Wn(r,i),yn(r,n),a=Rl(e,r,a,t,i,n),t=Tl(),e!==null&&!xr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~n,Aa(e,r,n)):(W0&&t&&ml(r),r.flags|=1,Nr(e,r,a,n),r.child)}function gd(e,r,a,t,n){if(Or(a)){var i=!0;po(r)}else i=!1;if(yn(r,n),r.stateNode===null)zA(e,r),Y6(r,a,t),zu(r,a,t,n),t=!0;else if(e===null){var A=r.stateNode,o=r.memoizedProps;A.props=o;var f=A.context,s=a.contextType;typeof s=="object"&&s!==null?s=le(s):(s=Or(a)?It:Br.current,s=Wn(r,s));var u=a.getDerivedStateFromProps,c=typeof u=="function"||typeof A.getSnapshotBeforeUpdate=="function";c||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(o!==t||f!==s)&&od(r,A,t,s),wa=!1;var d=r.memoizedState;A.state=d,Eo(r,t,A,n),f=r.memoizedState,o!==t||d!==f||Pr.current||wa?(typeof u=="function"&&(Hu(r,a,u,t),f=r.memoizedState),(o=wa||Ad(r,a,o,t,d,f,s))?(c||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=t,r.memoizedState=f),A.props=t,A.state=f,A.context=s,t=o):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),t=!1)}else{A=r.stateNode,j6(e,r),o=r.memoizedProps,s=r.type===r.elementType?o:me(r.type,o),A.props=s,c=r.pendingProps,d=A.context,f=a.contextType,typeof f=="object"&&f!==null?f=le(f):(f=Or(a)?It:Br.current,f=Wn(r,f));var b=a.getDerivedStateFromProps;(u=typeof b=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(o!==c||d!==f)&&od(r,A,t,f),wa=!1,d=r.memoizedState,A.state=d,Eo(r,t,A,n);var w=r.memoizedState;o!==c||d!==w||Pr.current||wa?(typeof b=="function"&&(Hu(r,a,b,t),w=r.memoizedState),(s=wa||Ad(r,a,s,t,d,w,f)||!1)?(u||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(t,w,f),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(t,w,f)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(r.flags|=1024),r.memoizedProps=t,r.memoizedState=w),A.props=t,A.state=w,A.context=f,t=s):(typeof A.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(r.flags|=1024),t=!1)}return Ku(e,r,a,t,i,n)}function Ku(e,r,a,t,n,i){v3(e,r);var A=(r.flags&128)!==0;if(!t&&!A)return n&&ed(r,a,!1),Aa(e,r,i);t=r.stateNode,ik.current=r;var o=A&&typeof a.getDerivedStateFromError!="function"?null:t.render();return r.flags|=1,e!==null&&A?(r.child=Fn(r,e.child,null,i),r.child=Fn(r,null,o,i)):Nr(e,r,o,i),r.memoizedState=t.state,n&&ed(r,a,!0),r.child}function k3(e){var r=e.stateNode;r.pendingContext?rd(e,r.pendingContext,r.pendingContext!==r.context):r.context&&rd(e,r.context,!1),_l(e,r.containerInfo)}function md(e,r,a,t,n){return Nn(),vl(n),r.flags|=256,Nr(e,r,a,t),r.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function r1(e){return{baseLanes:e,cachePool:null,transitions:null}}function w3(e,r,a){var t=r.pendingProps,n=F0.current,i=!1,A=(r.flags&128)!==0,o;if((o=A)||(o=e!==null&&e.memoizedState===null?!1:(n&2)!==0),o?(i=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(n|=1),y0(F0,n&1),e===null)return Yu(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(r.mode&1?e.data==="$!"?r.lanes=8:r.lanes=1073741824:r.lanes=1,null):(A=t.children,e=t.fallback,i?(t=r.mode,i=r.child,A={mode:"hidden",children:A},!(t&1)&&i!==null?(i.childLanes=0,i.pendingProps=A):i=mf(A,t,0,null),e=vt(e,t,a,null),i.return=r,e.return=r,i.sibling=e,r.child=i,r.child.memoizedState=r1(a),r.memoizedState=qu,e):Fl(r,A));if(n=e.memoizedState,n!==null&&(o=n.dehydrated,o!==null))return Ak(e,r,A,t,o,n,a);if(i){i=t.fallback,A=r.mode,n=e.child,o=n.sibling;var f={mode:"hidden",children:t.children};return!(A&1)&&r.child!==n?(t=r.child,t.childLanes=0,t.pendingProps=f,r.deletions=null):(t=Pa(n,f),t.subtreeFlags=n.subtreeFlags&14680064),o!==null?i=Pa(o,i):(i=vt(i,A,a,null),i.flags|=2),i.return=r,t.return=r,t.sibling=i,r.child=t,t=i,i=r.child,A=e.child.memoizedState,A=A===null?r1(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},i.memoizedState=A,i.childLanes=e.childLanes&~a,r.memoizedState=qu,t}return i=e.child,e=i.sibling,t=Pa(i,{mode:"visible",children:t.children}),!(r.mode&1)&&(t.lanes=a),t.return=r,t.sibling=null,e!==null&&(a=r.deletions,a===null?(r.deletions=[e],r.flags|=16):a.push(e)),r.child=t,r.memoizedState=null,t}function Fl(e,r){return r=mf({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function IA(e,r,a,t){return t!==null&&vl(t),Fn(r,e.child,null,a),e=Fl(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Ak(e,r,a,t,n,i,A){if(a)return r.flags&256?(r.flags&=-257,t=Ss(Error(T(422))),IA(e,r,A,t)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(i=t.fallback,n=r.mode,t=mf({mode:"visible",children:t.children},n,0,null),i=vt(i,n,A,null),i.flags|=2,t.return=r,i.return=r,t.sibling=i,r.child=t,r.mode&1&&Fn(r,e.child,null,A),r.child.memoizedState=r1(A),r.memoizedState=qu,i);if(!(r.mode&1))return IA(e,r,A,null);if(n.data==="$!"){if(t=n.nextSibling&&n.nextSibling.dataset,t)var o=t.dgst;return t=o,i=Error(T(419)),t=Ss(i,t,void 0),IA(e,r,A,t)}if(o=(A&e.childLanes)!==0,xr||o){if(t=ir,t!==null){switch(A&-A){case 4:n=2;break;case 16:n=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:n=32;break;case 536870912:n=268435456;break;default:n=0}n=n&(t.suspendedLanes|A)?0:n,n!==0&&n!==i.retryLane&&(i.retryLane=n,ia(e,n),ye(t,e,n,-1))}return Ml(),t=Ss(Error(T(421))),IA(e,r,A,t)}return n.data==="$?"?(r.flags|=128,r.child=e.child,r=vk.bind(null,e),n._reactRetry=r,null):(e=i.treeContext,Jr=Ga(n.nextSibling),Kr=r,W0=!0,ve=null,e!==null&&(ne[ie++]=Je,ne[ie++]=$e,ne[ie++]=_t,Je=e.id,$e=e.overflow,_t=r),r=Fl(r,t.children),r.flags|=4096,r)}function pd(e,r,a){e.lanes|=r;var t=e.alternate;t!==null&&(t.lanes|=r),Qu(e.return,r,a)}function Vs(e,r,a,t,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:t,tail:a,tailMode:n}:(i.isBackwards=r,i.rendering=null,i.renderingStartTime=0,i.last=t,i.tail=a,i.tailMode=n)}function y3(e,r,a){var t=r.pendingProps,n=t.revealOrder,i=t.tail;if(Nr(e,r,t.children,a),t=F0.current,t&2)t=t&1|2,r.flags|=128;else{if(e!==null&&e.flags&128)r:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pd(e,a,r);else if(e.tag===19)pd(e,a,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break r;for(;e.sibling===null;){if(e.return===null||e.return===r)break r;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(y0(F0,t),!(r.mode&1))r.memoizedState=null;else switch(n){case"forwards":for(a=r.child,n=null;a!==null;)e=a.alternate,e!==null&&Io(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=r.child,r.child=null):(n=a.sibling,a.sibling=null),Vs(r,!1,n,a,i);break;case"backwards":for(a=null,n=r.child,r.child=null;n!==null;){if(e=n.alternate,e!==null&&Io(e)===null){r.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Vs(r,!0,a,null,i);break;case"together":Vs(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function zA(e,r){!(r.mode&1)&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function Aa(e,r,a){if(e!==null&&(r.dependencies=e.dependencies),Bt|=r.lanes,!(a&r.childLanes))return null;if(e!==null&&r.child!==e.child)throw Error(T(153));if(r.child!==null){for(e=r.child,a=Pa(e,e.pendingProps),r.child=a,a.return=r;e.sibling!==null;)e=e.sibling,a=a.sibling=Pa(e,e.pendingProps),a.return=r;a.sibling=null}return r.child}function ok(e,r,a){switch(r.tag){case 3:k3(r),Nn();break;case 5:z6(r);break;case 1:Or(r.type)&&po(r);break;case 4:_l(r,r.stateNode.containerInfo);break;case 10:var t=r.type._context,n=r.memoizedProps.value;y0(wo,t._currentValue),t._currentValue=n;break;case 13:if(t=r.memoizedState,t!==null)return t.dehydrated!==null?(y0(F0,F0.current&1),r.flags|=128,null):a&r.child.childLanes?w3(e,r,a):(y0(F0,F0.current&1),e=Aa(e,r,a),e!==null?e.sibling:null);y0(F0,F0.current&1);break;case 19:if(t=(a&r.childLanes)!==0,e.flags&128){if(t)return y3(e,r,a);r.flags|=128}if(n=r.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),y0(F0,F0.current),t)break;return null;case 22:case 23:return r.lanes=0,p3(e,r,a)}return Aa(e,r,a)}var E3,e1,I3,_3;E3=function(e,r){for(var a=r.child;a!==null;){if(a.tag===5||a.tag===6)e.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return;a=a.return}a.sibling.return=a.return,a=a.sibling}};e1=function(){};I3=function(e,r,a,t){var n=e.memoizedProps;if(n!==t){e=r.stateNode,dt(Xe.current);var i=null;switch(a){case"input":n=Eu(e,n),t=Eu(e,t),i=[];break;case"select":n=V0({},n,{value:void 0}),t=V0({},t,{value:void 0}),i=[];break;case"textarea":n=Cu(e,n),t=Cu(e,t),i=[];break;default:typeof n.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=go)}Zu(a,t);var A;a=null;for(s in n)if(!t.hasOwnProperty(s)&&n.hasOwnProperty(s)&&n[s]!=null)if(s==="style"){var o=n[s];for(A in o)o.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Qi.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in t){var f=t[s];if(o=n!=null?n[s]:void 0,t.hasOwnProperty(s)&&f!==o&&(f!=null||o!=null))if(s==="style")if(o){for(A in o)!o.hasOwnProperty(A)||f&&f.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in f)f.hasOwnProperty(A)&&o[A]!==f[A]&&(a||(a={}),a[A]=f[A])}else a||(i||(i=[]),i.push(s,a)),a=f;else s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,o=o?o.__html:void 0,f!=null&&o!==f&&(i=i||[]).push(s,f)):s==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(s,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Qi.hasOwnProperty(s)?(f!=null&&s==="onScroll"&&C0("scroll",e),i||o===f||(i=[])):(i=i||[]).push(s,f))}a&&(i=i||[]).push("style",a);var s=i;(r.updateQueue=s)&&(r.flags|=4)}};_3=function(e,r,a,t){a!==t&&(r.flags|=4)};function gi(e,r){if(!W0)switch(e.tailMode){case"hidden":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function pr(e){var r=e.alternate!==null&&e.alternate.child===e.child,a=0,t=0;if(r)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,t|=n.subtreeFlags&14680064,t|=n.flags&14680064,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,t|=n.subtreeFlags,t|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=t,e.childLanes=a,r}function fk(e,r,a){var t=r.pendingProps;switch(pl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pr(r),null;case 1:return Or(r.type)&&mo(),pr(r),null;case 3:return t=r.stateNode,Sn(),Z0(Pr),Z0(Br),Bl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(yA(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,ve!==null&&(s1(ve),ve=null))),e1(e,r),pr(r),null;case 5:Cl(r);var n=dt(i2.current);if(a=r.type,e!==null&&r.stateNode!=null)I3(e,r,a,t,n),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!t){if(r.stateNode===null)throw Error(T(166));return pr(r),null}if(e=dt(Xe.current),yA(r)){t=r.stateNode,a=r.type;var i=r.memoizedProps;switch(t[Ne]=r,t[t2]=i,e=(r.mode&1)!==0,a){case"dialog":C0("cancel",t),C0("close",t);break;case"iframe":case"object":case"embed":C0("load",t);break;case"video":case"audio":for(n=0;n<Ii.length;n++)C0(Ii[n],t);break;case"source":C0("error",t);break;case"img":case"image":case"link":C0("error",t),C0("load",t);break;case"details":C0("toggle",t);break;case"input":B4(t,i),C0("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!i.multiple},C0("invalid",t);break;case"textarea":R4(t,i),C0("invalid",t)}Zu(a,i),n=null;for(var A in i)if(i.hasOwnProperty(A)){var o=i[A];A==="children"?typeof o=="string"?t.textContent!==o&&(i.suppressHydrationWarning!==!0&&wA(t.textContent,o,e),n=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(i.suppressHydrationWarning!==!0&&wA(t.textContent,o,e),n=["children",""+o]):Qi.hasOwnProperty(A)&&o!=null&&A==="onScroll"&&C0("scroll",t)}switch(a){case"input":dA(t),Z4(t,i,!0);break;case"textarea":dA(t),T4(t);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(t.onclick=go)}t=n,r.updateQueue=t,t!==null&&(r.flags|=4)}else{A=n.nodeType===9?n:n.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Kb(a)),e==="http://www.w3.org/1999/xhtml"?a==="script"?(e=A.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=A.createElement(a,{is:t.is}):(e=A.createElement(a),a==="select"&&(A=e,t.multiple?A.multiple=!0:t.size&&(A.size=t.size))):e=A.createElementNS(e,a),e[Ne]=r,e[t2]=t,E3(e,r,!1,!1),r.stateNode=e;r:{switch(A=Ru(a,t),a){case"dialog":C0("cancel",e),C0("close",e),n=t;break;case"iframe":case"object":case"embed":C0("load",e),n=t;break;case"video":case"audio":for(n=0;n<Ii.length;n++)C0(Ii[n],e);n=t;break;case"source":C0("error",e),n=t;break;case"img":case"image":case"link":C0("error",e),C0("load",e),n=t;break;case"details":C0("toggle",e),n=t;break;case"input":B4(e,t),n=Eu(e,t),C0("invalid",e);break;case"option":n=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},n=V0({},t,{value:void 0}),C0("invalid",e);break;case"textarea":R4(e,t),n=Cu(e,t),C0("invalid",e);break;default:n=t}Zu(a,n),o=n;for(i in o)if(o.hasOwnProperty(i)){var f=o[i];i==="style"?e6(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&qb(e,f)):i==="children"?typeof f=="string"?(a!=="textarea"||f!=="")&&Hi(e,f):typeof f=="number"&&Hi(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qi.hasOwnProperty(i)?f!=null&&i==="onScroll"&&C0("scroll",e):f!=null&&tl(e,i,f,A))}switch(a){case"input":dA(e),Z4(e,t,!1);break;case"textarea":dA(e),T4(e);break;case"option":t.value!=null&&e.setAttribute("value",""+Ha(t.value));break;case"select":e.multiple=!!t.multiple,i=t.value,i!=null?pn(e,!!t.multiple,i,!1):t.defaultValue!=null&&pn(e,!!t.multiple,t.defaultValue,!0);break;default:typeof n.onClick=="function"&&(e.onclick=go)}switch(a){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break r;case"img":t=!0;break r;default:t=!1}}t&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return pr(r),null;case 6:if(e&&r.stateNode!=null)_3(e,r,e.memoizedProps,t);else{if(typeof t!="string"&&r.stateNode===null)throw Error(T(166));if(a=dt(i2.current),dt(Xe.current),yA(r)){if(t=r.stateNode,a=r.memoizedProps,t[Ne]=r,(i=t.nodeValue!==a)&&(e=Kr,e!==null))switch(e.tag){case 3:wA(t.nodeValue,a,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&wA(t.nodeValue,a,(e.mode&1)!==0)}i&&(r.flags|=4)}else t=(a.nodeType===9?a:a.ownerDocument).createTextNode(t),t[Ne]=r,r.stateNode=t}return pr(r),null;case 13:if(Z0(F0),t=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W0&&Jr!==null&&r.mode&1&&!(r.flags&128))O6(),Nn(),r.flags|=98560,i=!1;else if(i=yA(r),t!==null&&t.dehydrated!==null){if(e===null){if(!i)throw Error(T(318));if(i=r.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(T(317));i[Ne]=r}else Nn(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;pr(r),i=!1}else ve!==null&&(s1(ve),ve=null),i=!0;if(!i)return r.flags&65536?r:null}return r.flags&128?(r.lanes=a,r):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(r.child.flags|=8192,r.mode&1&&(e===null||F0.current&1?rr===0&&(rr=3):Ml())),r.updateQueue!==null&&(r.flags|=4),pr(r),null);case 4:return Sn(),e1(e,r),e===null&&e2(r.stateNode.containerInfo),pr(r),null;case 10:return yl(r.type._context),pr(r),null;case 17:return Or(r.type)&&mo(),pr(r),null;case 19:if(Z0(F0),i=r.memoizedState,i===null)return pr(r),null;if(t=(r.flags&128)!==0,A=i.rendering,A===null)if(t)gi(i,!1);else{if(rr!==0||e!==null&&e.flags&128)for(e=r.child;e!==null;){if(A=Io(e),A!==null){for(r.flags|=128,gi(i,!1),t=A.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),r.subtreeFlags=0,t=a,a=r.child;a!==null;)i=a,e=t,i.flags&=14680066,A=i.alternate,A===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=A.childLanes,i.lanes=A.lanes,i.child=A.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=A.memoizedProps,i.memoizedState=A.memoizedState,i.updateQueue=A.updateQueue,i.type=A.type,e=A.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),a=a.sibling;return y0(F0,F0.current&1|2),r.child}e=e.sibling}i.tail!==null&&L0()>Dn&&(r.flags|=128,t=!0,gi(i,!1),r.lanes=4194304)}else{if(!t)if(e=Io(A),e!==null){if(r.flags|=128,t=!0,a=e.updateQueue,a!==null&&(r.updateQueue=a,r.flags|=4),gi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!A.alternate&&!W0)return pr(r),null}else 2*L0()-i.renderingStartTime>Dn&&a!==1073741824&&(r.flags|=128,t=!0,gi(i,!1),r.lanes=4194304);i.isBackwards?(A.sibling=r.child,r.child=A):(a=i.last,a!==null?a.sibling=A:r.child=A,i.last=A)}return i.tail!==null?(r=i.tail,i.rendering=r,i.tail=r.sibling,i.renderingStartTime=L0(),r.sibling=null,a=F0.current,y0(F0,t?a&1|2:a&1),r):(pr(r),null);case 22:case 23:return Xl(),t=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(r.flags|=8192),t&&r.mode&1?zr&1073741824&&(pr(r),r.subtreeFlags&6&&(r.flags|=8192)):pr(r),null;case 24:return null;case 25:return null}throw Error(T(156,r.tag))}function sk(e,r){switch(pl(r),r.tag){case 1:return Or(r.type)&&mo(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return Sn(),Z0(Pr),Z0(Br),Bl(),e=r.flags,e&65536&&!(e&128)?(r.flags=e&-65537|128,r):null;case 5:return Cl(r),null;case 13:if(Z0(F0),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(T(340));Nn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Z0(F0),null;case 4:return Sn(),null;case 10:return yl(r.type._context),null;case 22:case 23:return Xl(),null;case 24:return null;default:return null}}var _A=!1,wr=!1,uk=typeof WeakSet=="function"?WeakSet:Set,x=null;function hn(e,r){var a=e.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(t){M0(e,r,t)}else a.current=null}function a1(e,r,a){try{a()}catch(t){M0(e,r,t)}}var vd=!1;function lk(e,r){if(Mu=co,e=R6(),gl(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else r:{a=(a=e.ownerDocument)&&a.defaultView||window;var t=a.getSelection&&a.getSelection();if(t&&t.rangeCount!==0){a=t.anchorNode;var n=t.anchorOffset,i=t.focusNode;t=t.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break r}var A=0,o=-1,f=-1,s=0,u=0,c=e,d=null;e:for(;;){for(var b;c!==a||n!==0&&c.nodeType!==3||(o=A+n),c!==i||t!==0&&c.nodeType!==3||(f=A+t),c.nodeType===3&&(A+=c.nodeValue.length),(b=c.firstChild)!==null;)d=c,c=b;for(;;){if(c===e)break e;if(d===a&&++s===n&&(o=A),d===i&&++u===t&&(f=A),(b=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=b}a=o===-1||f===-1?null:{start:o,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(xu={focusedElem:e,selectionRange:a},co=!1,x=r;x!==null;)if(r=x,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,x=e;else for(;x!==null;){r=x;try{var w=r.alternate;if(r.flags&1024)switch(r.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,B=w.memoizedState,g=r.stateNode,h=g.getSnapshotBeforeUpdate(r.elementType===r.type?y:me(r.type,y),B);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=r.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(C){M0(r,r.return,C)}if(e=r.sibling,e!==null){e.return=r.return,x=e;break}x=r.return}return w=vd,vd=!1,w}function Gi(e,r,a){var t=r.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var i=n.destroy;n.destroy=void 0,i!==void 0&&a1(r,a,i)}n=n.next}while(n!==t)}}function bf(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var t=a.create;a.destroy=t()}a=a.next}while(a!==r)}}function t1(e){var r=e.ref;if(r!==null){var a=e.stateNode;switch(e.tag){case 5:e=a;break;default:e=a}typeof r=="function"?r(e):r.current=e}}function C3(e){var r=e.alternate;r!==null&&(e.alternate=null,C3(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ne],delete r[t2],delete r[Uu],delete r[Qv],delete r[Hv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function B3(e){return e.tag===5||e.tag===3||e.tag===4}function kd(e){r:for(;;){for(;e.sibling===null;){if(e.return===null||B3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue r;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function n1(e,r,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?a.nodeType===8?a.parentNode.insertBefore(e,r):a.insertBefore(e,r):(a.nodeType===8?(r=a.parentNode,r.insertBefore(e,a)):(r=a,r.appendChild(e)),a=a._reactRootContainer,a!=null||r.onclick!==null||(r.onclick=go));else if(t!==4&&(e=e.child,e!==null))for(n1(e,r,a),e=e.sibling;e!==null;)n1(e,r,a),e=e.sibling}function i1(e,r,a){var t=e.tag;if(t===5||t===6)e=e.stateNode,r?a.insertBefore(e,r):a.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(i1(e,r,a),e=e.sibling;e!==null;)i1(e,r,a),e=e.sibling}var ur=null,pe=!1;function pa(e,r,a){for(a=a.child;a!==null;)Z3(e,r,a),a=a.sibling}function Z3(e,r,a){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(of,a)}catch{}switch(a.tag){case 5:wr||hn(a,r);case 6:var t=ur,n=pe;ur=null,pa(e,r,a),ur=t,pe=n,ur!==null&&(pe?(e=ur,a=a.stateNode,e.nodeType===8?e.parentNode.removeChild(a):e.removeChild(a)):ur.removeChild(a.stateNode));break;case 18:ur!==null&&(pe?(e=ur,a=a.stateNode,e.nodeType===8?Zs(e.parentNode,a):e.nodeType===1&&Zs(e,a),Ki(e)):Zs(ur,a.stateNode));break;case 4:t=ur,n=pe,ur=a.stateNode.containerInfo,pe=!0,pa(e,r,a),ur=t,pe=n;break;case 0:case 11:case 14:case 15:if(!wr&&(t=a.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){n=t=t.next;do{var i=n,A=i.destroy;i=i.tag,A!==void 0&&(i&2||i&4)&&a1(a,r,A),n=n.next}while(n!==t)}pa(e,r,a);break;case 1:if(!wr&&(hn(a,r),t=a.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=a.memoizedProps,t.state=a.memoizedState,t.componentWillUnmount()}catch(o){M0(a,r,o)}pa(e,r,a);break;case 21:pa(e,r,a);break;case 22:a.mode&1?(wr=(t=wr)||a.memoizedState!==null,pa(e,r,a),wr=t):pa(e,r,a);break;default:pa(e,r,a)}}function wd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var a=e.stateNode;a===null&&(a=e.stateNode=new uk),r.forEach(function(t){var n=kk.bind(null,e,t);a.has(t)||(a.add(t),t.then(n,n))})}}function ge(e,r){var a=r.deletions;if(a!==null)for(var t=0;t<a.length;t++){var n=a[t];try{var i=e,A=r,o=A;r:for(;o!==null;){switch(o.tag){case 5:ur=o.stateNode,pe=!1;break r;case 3:ur=o.stateNode.containerInfo,pe=!0;break r;case 4:ur=o.stateNode.containerInfo,pe=!0;break r}o=o.return}if(ur===null)throw Error(T(160));Z3(i,A,n),ur=null,pe=!1;var f=n.alternate;f!==null&&(f.return=null),n.return=null}catch(s){M0(n,r,s)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)R3(r,e),r=r.sibling}function R3(e,r){var a=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ge(r,e),Te(e),t&4){try{Gi(3,e,e.return),bf(3,e)}catch(y){M0(e,e.return,y)}try{Gi(5,e,e.return)}catch(y){M0(e,e.return,y)}}break;case 1:ge(r,e),Te(e),t&512&&a!==null&&hn(a,a.return);break;case 5:if(ge(r,e),Te(e),t&512&&a!==null&&hn(a,a.return),e.flags&32){var n=e.stateNode;try{Hi(n,"")}catch(y){M0(e,e.return,y)}}if(t&4&&(n=e.stateNode,n!=null)){var i=e.memoizedProps,A=a!==null?a.memoizedProps:i,o=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{o==="input"&&i.type==="radio"&&i.name!=null&&Jb(n,i),Ru(o,A);var s=Ru(o,i);for(A=0;A<f.length;A+=2){var u=f[A],c=f[A+1];u==="style"?e6(n,c):u==="dangerouslySetInnerHTML"?qb(n,c):u==="children"?Hi(n,c):tl(n,u,c,s)}switch(o){case"input":Iu(n,i);break;case"textarea":$b(n,i);break;case"select":var d=n._wrapperState.wasMultiple;n._wrapperState.wasMultiple=!!i.multiple;var b=i.value;b!=null?pn(n,!!i.multiple,b,!1):d!==!!i.multiple&&(i.defaultValue!=null?pn(n,!!i.multiple,i.defaultValue,!0):pn(n,!!i.multiple,i.multiple?[]:"",!1))}n[t2]=i}catch(y){M0(e,e.return,y)}}break;case 6:if(ge(r,e),Te(e),t&4){if(e.stateNode===null)throw Error(T(162));n=e.stateNode,i=e.memoizedProps;try{n.nodeValue=i}catch(y){M0(e,e.return,y)}}break;case 3:if(ge(r,e),Te(e),t&4&&a!==null&&a.memoizedState.isDehydrated)try{Ki(r.containerInfo)}catch(y){M0(e,e.return,y)}break;case 4:ge(r,e),Te(e);break;case 13:ge(r,e),Te(e),n=e.child,n.flags&8192&&(i=n.memoizedState!==null,n.stateNode.isHidden=i,!i||n.alternate!==null&&n.alternate.memoizedState!==null||(Dl=L0())),t&4&&wd(e);break;case 22:if(u=a!==null&&a.memoizedState!==null,e.mode&1?(wr=(s=wr)||u,ge(r,e),wr=s):ge(r,e),Te(e),t&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!u&&e.mode&1)for(x=e,u=e.child;u!==null;){for(c=x=u;x!==null;){switch(d=x,b=d.child,d.tag){case 0:case 11:case 14:case 15:Gi(4,d,d.return);break;case 1:hn(d,d.return);var w=d.stateNode;if(typeof w.componentWillUnmount=="function"){t=d,a=d.return;try{r=t,w.props=r.memoizedProps,w.state=r.memoizedState,w.componentWillUnmount()}catch(y){M0(t,a,y)}}break;case 5:hn(d,d.return);break;case 22:if(d.memoizedState!==null){Ed(c);continue}}b!==null?(b.return=d,x=b):Ed(c)}u=u.sibling}r:for(u=null,c=e;;){if(c.tag===5){if(u===null){u=c;try{n=c.stateNode,s?(i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(o=c.stateNode,f=c.memoizedProps.style,A=f!=null&&f.hasOwnProperty("display")?f.display:null,o.style.display=r6("display",A))}catch(y){M0(e,e.return,y)}}}else if(c.tag===6){if(u===null)try{c.stateNode.nodeValue=s?"":c.memoizedProps}catch(y){M0(e,e.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break r;for(;c.sibling===null;){if(c.return===null||c.return===e)break r;u===c&&(u=null),c=c.return}u===c&&(u=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:ge(r,e),Te(e),t&4&&wd(e);break;case 21:break;default:ge(r,e),Te(e)}}function Te(e){var r=e.flags;if(r&2){try{r:{for(var a=e.return;a!==null;){if(B3(a)){var t=a;break r}a=a.return}throw Error(T(160))}switch(t.tag){case 5:var n=t.stateNode;t.flags&32&&(Hi(n,""),t.flags&=-33);var i=kd(e);i1(e,i,n);break;case 3:case 4:var A=t.stateNode.containerInfo,o=kd(e);n1(e,o,A);break;default:throw Error(T(161))}}catch(f){M0(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function ck(e,r,a){x=e,T3(e)}function T3(e,r,a){for(var t=(e.mode&1)!==0;x!==null;){var n=x,i=n.child;if(n.tag===22&&t){var A=n.memoizedState!==null||_A;if(!A){var o=n.alternate,f=o!==null&&o.memoizedState!==null||wr;o=_A;var s=wr;if(_A=A,(wr=f)&&!s)for(x=n;x!==null;)A=x,f=A.child,A.tag===22&&A.memoizedState!==null?Id(n):f!==null?(f.return=A,x=f):Id(n);for(;i!==null;)x=i,T3(i),i=i.sibling;x=n,_A=o,wr=s}yd(e)}else n.subtreeFlags&8772&&i!==null?(i.return=n,x=i):yd(e)}}function yd(e){for(;x!==null;){var r=x;if(r.flags&8772){var a=r.alternate;try{if(r.flags&8772)switch(r.tag){case 0:case 11:case 15:wr||bf(5,r);break;case 1:var t=r.stateNode;if(r.flags&4&&!wr)if(a===null)t.componentDidMount();else{var n=r.elementType===r.type?a.memoizedProps:me(r.type,a.memoizedProps);t.componentDidUpdate(n,a.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var i=r.updateQueue;i!==null&&id(r,i,t);break;case 3:var A=r.updateQueue;if(A!==null){if(a=null,r.child!==null)switch(r.child.tag){case 5:a=r.child.stateNode;break;case 1:a=r.child.stateNode}id(r,A,a)}break;case 5:var o=r.stateNode;if(a===null&&r.flags&4){a=o;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&a.focus();break;case"img":f.src&&(a.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var s=r.alternate;if(s!==null){var u=s.memoizedState;if(u!==null){var c=u.dehydrated;c!==null&&Ki(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}wr||r.flags&512&&t1(r)}catch(d){M0(r,r.return,d)}}if(r===e){x=null;break}if(a=r.sibling,a!==null){a.return=r.return,x=a;break}x=r.return}}function Ed(e){for(;x!==null;){var r=x;if(r===e){x=null;break}var a=r.sibling;if(a!==null){a.return=r.return,x=a;break}x=r.return}}function Id(e){for(;x!==null;){var r=x;try{switch(r.tag){case 0:case 11:case 15:var a=r.return;try{bf(4,r)}catch(f){M0(r,a,f)}break;case 1:var t=r.stateNode;if(typeof t.componentDidMount=="function"){var n=r.return;try{t.componentDidMount()}catch(f){M0(r,n,f)}}var i=r.return;try{t1(r)}catch(f){M0(r,i,f)}break;case 5:var A=r.return;try{t1(r)}catch(f){M0(r,A,f)}}}catch(f){M0(r,r.return,f)}if(r===e){x=null;break}var o=r.sibling;if(o!==null){o.return=r.return,x=o;break}x=r.return}}var dk=Math.ceil,Bo=ca.ReactCurrentDispatcher,Sl=ca.ReactCurrentOwner,se=ca.ReactCurrentBatchConfig,c0=0,ir=null,z0=null,dr=0,zr=0,bn=rt(0),rr=0,s2=null,Bt=0,gf=0,Vl=0,Xi=null,Mr=null,Dl=0,Dn=1/0,He=null,Zo=!1,A1=null,Ma=null,CA=!1,Wa=null,Ro=0,Mi=0,o1=null,JA=-1,$A=0;function Sr(){return c0&6?L0():JA!==-1?JA:JA=L0()}function xa(e){return e.mode&1?c0&2&&dr!==0?dr&-dr:Jv.transition!==null?($A===0&&($A=d6()),$A):(e=v0,e!==0||(e=window.event,e=e===void 0?16:k6(e.type)),e):1}function ye(e,r,a,t){if(50<Mi)throw Mi=0,o1=null,Error(T(185));S2(e,a,t),(!(c0&2)||e!==ir)&&(e===ir&&(!(c0&2)&&(gf|=a),rr===4&&Ia(e,dr)),Ur(e,t),a===1&&c0===0&&!(r.mode&1)&&(Dn=L0()+500,cf&&et()))}function Ur(e,r){var a=e.callbackNode;Jp(e,r);var t=lo(e,e===ir?dr:0);if(t===0)a!==null&&F4(a),e.callbackNode=null,e.callbackPriority=0;else if(r=t&-t,e.callbackPriority!==r){if(a!=null&&F4(a),r===1)e.tag===0?zv(_d.bind(null,e)):M6(_d.bind(null,e)),Lv(function(){!(c0&6)&&et()}),a=null;else{switch(h6(t)){case 1:a=fl;break;case 4:a=l6;break;case 16:a=uo;break;case 536870912:a=c6;break;default:a=uo}a=X3(a,W3.bind(null,e))}e.callbackPriority=r,e.callbackNode=a}}function W3(e,r){if(JA=-1,$A=0,c0&6)throw Error(T(327));var a=e.callbackNode;if(En()&&e.callbackNode!==a)return null;var t=lo(e,e===ir?dr:0);if(t===0)return null;if(t&30||t&e.expiredLanes||r)r=To(e,t);else{r=t;var n=c0;c0|=2;var i=F3();(ir!==e||dr!==r)&&(He=null,Dn=L0()+500,pt(e,r));do try{gk();break}catch(o){N3(e,o)}while(1);wl(),Bo.current=i,c0=n,z0!==null?r=0:(ir=null,dr=0,r=rr)}if(r!==0){if(r===2&&(n=Su(e),n!==0&&(t=n,r=f1(e,n))),r===1)throw a=s2,pt(e,0),Ia(e,t),Ur(e,L0()),a;if(r===6)Ia(e,t);else{if(n=e.current.alternate,!(t&30)&&!hk(n)&&(r=To(e,t),r===2&&(i=Su(e),i!==0&&(t=i,r=f1(e,i))),r===1))throw a=s2,pt(e,0),Ia(e,t),Ur(e,L0()),a;switch(e.finishedWork=n,e.finishedLanes=t,r){case 0:case 1:throw Error(T(345));case 2:st(e,Mr,He);break;case 3:if(Ia(e,t),(t&130023424)===t&&(r=Dl+500-L0(),10<r)){if(lo(e,0)!==0)break;if(n=e.suspendedLanes,(n&t)!==t){Sr(),e.pingedLanes|=e.suspendedLanes&n;break}e.timeoutHandle=Ou(st.bind(null,e,Mr,He),r);break}st(e,Mr,He);break;case 4:if(Ia(e,t),(t&4194240)===t)break;for(r=e.eventTimes,n=-1;0<t;){var A=31-we(t);i=1<<A,A=r[A],A>n&&(n=A),t&=~i}if(t=n,t=L0()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*dk(t/1960))-t,10<t){e.timeoutHandle=Ou(st.bind(null,e,Mr,He),t);break}st(e,Mr,He);break;case 5:st(e,Mr,He);break;default:throw Error(T(329))}}}return Ur(e,L0()),e.callbackNode===a?W3.bind(null,e):null}function f1(e,r){var a=Xi;return e.current.memoizedState.isDehydrated&&(pt(e,r).flags|=256),e=To(e,r),e!==2&&(r=Mr,Mr=a,r!==null&&s1(r)),e}function s1(e){Mr===null?Mr=e:Mr.push.apply(Mr,e)}function hk(e){for(var r=e;;){if(r.flags&16384){var a=r.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var t=0;t<a.length;t++){var n=a[t],i=n.getSnapshot;n=n.value;try{if(!Ee(i(),n))return!1}catch{return!1}}}if(a=r.child,r.subtreeFlags&16384&&a!==null)a.return=r,r=a;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ia(e,r){for(r&=~Vl,r&=~gf,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var a=31-we(r),t=1<<a;e[a]=-1,r&=~t}}function _d(e){if(c0&6)throw Error(T(327));En();var r=lo(e,0);if(!(r&1))return Ur(e,L0()),null;var a=To(e,r);if(e.tag!==0&&a===2){var t=Su(e);t!==0&&(r=t,a=f1(e,t))}if(a===1)throw a=s2,pt(e,0),Ia(e,r),Ur(e,L0()),a;if(a===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,st(e,Mr,He),Ur(e,L0()),null}function Gl(e,r){var a=c0;c0|=1;try{return e(r)}finally{c0=a,c0===0&&(Dn=L0()+500,cf&&et())}}function Zt(e){Wa!==null&&Wa.tag===0&&!(c0&6)&&En();var r=c0;c0|=1;var a=se.transition,t=v0;try{if(se.transition=null,v0=1,e)return e()}finally{v0=t,se.transition=a,c0=r,!(c0&6)&&et()}}function Xl(){zr=bn.current,Z0(bn)}function pt(e,r){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;if(a!==-1&&(e.timeoutHandle=-1,jv(a)),z0!==null)for(a=z0.return;a!==null;){var t=a;switch(pl(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&mo();break;case 3:Sn(),Z0(Pr),Z0(Br),Bl();break;case 5:Cl(t);break;case 4:Sn();break;case 13:Z0(F0);break;case 19:Z0(F0);break;case 10:yl(t.type._context);break;case 22:case 23:Xl()}a=a.return}if(ir=e,z0=e=Pa(e.current,null),dr=zr=r,rr=0,s2=null,Vl=gf=Bt=0,Mr=Xi=null,ct!==null){for(r=0;r<ct.length;r++)if(a=ct[r],t=a.interleaved,t!==null){a.interleaved=null;var n=t.next,i=a.pending;if(i!==null){var A=i.next;i.next=n,t.next=A}a.pending=t}ct=null}return e}function N3(e,r){do{var a=z0;try{if(wl(),QA.current=Co,_o){for(var t=S0.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}_o=!1}if(Ct=0,nr=q0=S0=null,Di=!1,A2=0,Sl.current=null,a===null||a.return===null){rr=1,s2=r,z0=null;break}r:{var i=e,A=a.return,o=a,f=r;if(r=dr,o.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var s=f,u=o,c=u.tag;if(!(u.mode&1)&&(c===0||c===11||c===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var b=cd(A);if(b!==null){b.flags&=-257,dd(b,A,o,i,r),b.mode&1&&ld(i,s,r),r=b,f=s;var w=r.updateQueue;if(w===null){var y=new Set;y.add(f),r.updateQueue=y}else w.add(f);break r}else{if(!(r&1)){ld(i,s,r),Ml();break r}f=Error(T(426))}}else if(W0&&o.mode&1){var B=cd(A);if(B!==null){!(B.flags&65536)&&(B.flags|=256),dd(B,A,o,i,r),vl(Vn(f,o));break r}}i=f=Vn(f,o),rr!==4&&(rr=2),Xi===null?Xi=[i]:Xi.push(i),i=A;do{switch(i.tag){case 3:i.flags|=65536,r&=-r,i.lanes|=r;var g=b3(i,f,r);nd(i,g);break r;case 1:o=f;var h=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ma===null||!Ma.has(m)))){i.flags|=65536,r&=-r,i.lanes|=r;var C=g3(i,o,r);nd(i,C);break r}}i=i.return}while(i!==null)}V3(a)}catch(v){r=v,z0===a&&a!==null&&(z0=a=a.return);continue}break}while(1)}function F3(){var e=Bo.current;return Bo.current=Co,e===null?Co:e}function Ml(){(rr===0||rr===3||rr===2)&&(rr=4),ir===null||!(Bt&268435455)&&!(gf&268435455)||Ia(ir,dr)}function To(e,r){var a=c0;c0|=2;var t=F3();(ir!==e||dr!==r)&&(He=null,pt(e,r));do try{bk();break}catch(n){N3(e,n)}while(1);if(wl(),c0=a,Bo.current=t,z0!==null)throw Error(T(261));return ir=null,dr=0,rr}function bk(){for(;z0!==null;)S3(z0)}function gk(){for(;z0!==null&&!Pp();)S3(z0)}function S3(e){var r=G3(e.alternate,e,zr);e.memoizedProps=e.pendingProps,r===null?V3(e):z0=r,Sl.current=null}function V3(e){var r=e;do{var a=r.alternate;if(e=r.return,r.flags&32768){if(a=sk(a,r),a!==null){a.flags&=32767,z0=a;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{rr=6,z0=null;return}}else if(a=fk(a,r,zr),a!==null){z0=a;return}if(r=r.sibling,r!==null){z0=r;return}z0=r=e}while(r!==null);rr===0&&(rr=5)}function st(e,r,a){var t=v0,n=se.transition;try{se.transition=null,v0=1,mk(e,r,a,t)}finally{se.transition=n,v0=t}return null}function mk(e,r,a,t){do En();while(Wa!==null);if(c0&6)throw Error(T(327));a=e.finishedWork;var n=e.finishedLanes;if(a===null)return null;if(e.finishedWork=null,e.finishedLanes=0,a===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var i=a.lanes|a.childLanes;if($p(e,i),e===ir&&(z0=ir=null,dr=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||CA||(CA=!0,X3(uo,function(){return En(),null})),i=(a.flags&15990)!==0,a.subtreeFlags&15990||i){i=se.transition,se.transition=null;var A=v0;v0=1;var o=c0;c0|=4,Sl.current=null,lk(e,a),R3(a,e),Gv(xu),co=!!Mu,xu=Mu=null,e.current=a,ck(a),Op(),c0=o,v0=A,se.transition=i}else e.current=a;if(CA&&(CA=!1,Wa=e,Ro=n),i=e.pendingLanes,i===0&&(Ma=null),Lp(a.stateNode),Ur(e,L0()),r!==null)for(t=e.onRecoverableError,a=0;a<r.length;a++)n=r[a],t(n.value,{componentStack:n.stack,digest:n.digest});if(Zo)throw Zo=!1,e=A1,A1=null,e;return Ro&1&&e.tag!==0&&En(),i=e.pendingLanes,i&1?e===o1?Mi++:(Mi=0,o1=e):Mi=0,et(),null}function En(){if(Wa!==null){var e=h6(Ro),r=se.transition,a=v0;try{if(se.transition=null,v0=16>e?16:e,Wa===null)var t=!1;else{if(e=Wa,Wa=null,Ro=0,c0&6)throw Error(T(331));var n=c0;for(c0|=4,x=e.current;x!==null;){var i=x,A=i.child;if(x.flags&16){var o=i.deletions;if(o!==null){for(var f=0;f<o.length;f++){var s=o[f];for(x=s;x!==null;){var u=x;switch(u.tag){case 0:case 11:case 15:Gi(8,u,i)}var c=u.child;if(c!==null)c.return=u,x=c;else for(;x!==null;){u=x;var d=u.sibling,b=u.return;if(C3(u),u===s){x=null;break}if(d!==null){d.return=b,x=d;break}x=b}}}var w=i.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var B=y.sibling;y.sibling=null,y=B}while(y!==null)}}x=i}}if(i.subtreeFlags&2064&&A!==null)A.return=i,x=A;else r:for(;x!==null;){if(i=x,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Gi(9,i,i.return)}var g=i.sibling;if(g!==null){g.return=i.return,x=g;break r}x=i.return}}var h=e.current;for(x=h;x!==null;){A=x;var m=A.child;if(A.subtreeFlags&2064&&m!==null)m.return=A,x=m;else r:for(A=h;x!==null;){if(o=x,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:bf(9,o)}}catch(v){M0(o,o.return,v)}if(o===A){x=null;break r}var C=o.sibling;if(C!==null){C.return=o.return,x=C;break r}x=o.return}}if(c0=n,et(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(of,e)}catch{}t=!0}return t}finally{v0=a,se.transition=r}}return!1}function Cd(e,r,a){r=Vn(a,r),r=b3(e,r,1),e=Xa(e,r,1),r=Sr(),e!==null&&(S2(e,1,r),Ur(e,r))}function M0(e,r,a){if(e.tag===3)Cd(e,e,a);else for(;r!==null;){if(r.tag===3){Cd(r,e,a);break}else if(r.tag===1){var t=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(Ma===null||!Ma.has(t))){e=Vn(a,e),e=g3(r,e,1),r=Xa(r,e,1),e=Sr(),r!==null&&(S2(r,1,e),Ur(r,e));break}}r=r.return}}function pk(e,r,a){var t=e.pingCache;t!==null&&t.delete(r),r=Sr(),e.pingedLanes|=e.suspendedLanes&a,ir===e&&(dr&a)===a&&(rr===4||rr===3&&(dr&130023424)===dr&&500>L0()-Dl?pt(e,0):Vl|=a),Ur(e,r)}function D3(e,r){r===0&&(e.mode&1?(r=gA,gA<<=1,!(gA&130023424)&&(gA=4194304)):r=1);var a=Sr();e=ia(e,r),e!==null&&(S2(e,r,a),Ur(e,a))}function vk(e){var r=e.memoizedState,a=0;r!==null&&(a=r.retryLane),D3(e,a)}function kk(e,r){var a=0;switch(e.tag){case 13:var t=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(T(314))}t!==null&&t.delete(r),D3(e,a)}var G3;G3=function(e,r,a){if(e!==null)if(e.memoizedProps!==r.pendingProps||Pr.current)xr=!0;else{if(!(e.lanes&a)&&!(r.flags&128))return xr=!1,ok(e,r,a);xr=!!(e.flags&131072)}else xr=!1,W0&&r.flags&1048576&&x6(r,ko,r.index);switch(r.lanes=0,r.tag){case 2:var t=r.type;zA(e,r),e=r.pendingProps;var n=Wn(r,Br.current);yn(r,a),n=Rl(null,r,t,e,n,a);var i=Tl();return r.flags|=1,typeof n=="object"&&n!==null&&typeof n.render=="function"&&n.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Or(t)?(i=!0,po(r)):i=!1,r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,Il(r),n.updater=df,r.stateNode=n,n._reactInternals=r,zu(r,t,e,a),r=Ku(null,r,t,!0,i,a)):(r.tag=0,W0&&i&&ml(r),Nr(null,r,n,a),r=r.child),r;case 16:t=r.elementType;r:{switch(zA(e,r),e=r.pendingProps,n=t._init,t=n(t._payload),r.type=t,n=r.tag=yk(t),e=me(t,e),n){case 0:r=$u(null,r,t,e,a);break r;case 1:r=gd(null,r,t,e,a);break r;case 11:r=hd(null,r,t,e,a);break r;case 14:r=bd(null,r,t,me(t.type,e),a);break r}throw Error(T(306,t,""))}return r;case 0:return t=r.type,n=r.pendingProps,n=r.elementType===t?n:me(t,n),$u(e,r,t,n,a);case 1:return t=r.type,n=r.pendingProps,n=r.elementType===t?n:me(t,n),gd(e,r,t,n,a);case 3:r:{if(k3(r),e===null)throw Error(T(387));t=r.pendingProps,i=r.memoizedState,n=i.element,j6(e,r),Eo(r,t,null,a);var A=r.memoizedState;if(t=A.element,i.isDehydrated)if(i={element:t,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=i,r.memoizedState=i,r.flags&256){n=Vn(Error(T(423)),r),r=md(e,r,t,a,n);break r}else if(t!==n){n=Vn(Error(T(424)),r),r=md(e,r,t,a,n);break r}else for(Jr=Ga(r.stateNode.containerInfo.firstChild),Kr=r,W0=!0,ve=null,a=H6(r,null,t,a),r.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Nn(),t===n){r=Aa(e,r,a);break r}Nr(e,r,t,a)}r=r.child}return r;case 5:return z6(r),e===null&&Yu(r),t=r.type,n=r.pendingProps,i=e!==null?e.memoizedProps:null,A=n.children,Pu(t,n)?A=null:i!==null&&Pu(t,i)&&(r.flags|=32),v3(e,r),Nr(e,r,A,a),r.child;case 6:return e===null&&Yu(r),null;case 13:return w3(e,r,a);case 4:return _l(r,r.stateNode.containerInfo),t=r.pendingProps,e===null?r.child=Fn(r,null,t,a):Nr(e,r,t,a),r.child;case 11:return t=r.type,n=r.pendingProps,n=r.elementType===t?n:me(t,n),hd(e,r,t,n,a);case 7:return Nr(e,r,r.pendingProps,a),r.child;case 8:return Nr(e,r,r.pendingProps.children,a),r.child;case 12:return Nr(e,r,r.pendingProps.children,a),r.child;case 10:r:{if(t=r.type._context,n=r.pendingProps,i=r.memoizedProps,A=n.value,y0(wo,t._currentValue),t._currentValue=A,i!==null)if(Ee(i.value,A)){if(i.children===n.children&&!Pr.current){r=Aa(e,r,a);break r}}else for(i=r.child,i!==null&&(i.return=r);i!==null;){var o=i.dependencies;if(o!==null){A=i.child;for(var f=o.firstContext;f!==null;){if(f.context===t){if(i.tag===1){f=ea(-1,a&-a),f.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var u=s.pending;u===null?f.next=f:(f.next=u.next,u.next=f),s.pending=f}}i.lanes|=a,f=i.alternate,f!==null&&(f.lanes|=a),Qu(i.return,a,r),o.lanes|=a;break}f=f.next}}else if(i.tag===10)A=i.type===r.type?null:i.child;else if(i.tag===18){if(A=i.return,A===null)throw Error(T(341));A.lanes|=a,o=A.alternate,o!==null&&(o.lanes|=a),Qu(A,a,r),A=i.sibling}else A=i.child;if(A!==null)A.return=i;else for(A=i;A!==null;){if(A===r){A=null;break}if(i=A.sibling,i!==null){i.return=A.return,A=i;break}A=A.return}i=A}Nr(e,r,n.children,a),r=r.child}return r;case 9:return n=r.type,t=r.pendingProps.children,yn(r,a),n=le(n),t=t(n),r.flags|=1,Nr(e,r,t,a),r.child;case 14:return t=r.type,n=me(t,r.pendingProps),n=me(t.type,n),bd(e,r,t,n,a);case 15:return m3(e,r,r.type,r.pendingProps,a);case 17:return t=r.type,n=r.pendingProps,n=r.elementType===t?n:me(t,n),zA(e,r),r.tag=1,Or(t)?(e=!0,po(r)):e=!1,yn(r,a),Y6(r,t,n),zu(r,t,n,a),Ku(null,r,t,!0,e,a);case 19:return y3(e,r,a);case 22:return p3(e,r,a)}throw Error(T(156,r.tag))};function X3(e,r){return u6(e,r)}function wk(e,r,a,t){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(e,r,a,t){return new wk(e,r,a,t)}function xl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function yk(e){if(typeof e=="function")return xl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===il)return 11;if(e===Al)return 14}return 2}function Pa(e,r){var a=e.alternate;return a===null?(a=fe(e.tag,r,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=r,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&14680064,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,r=e.dependencies,a.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a}function KA(e,r,a,t,n,i){var A=2;if(t=e,typeof e=="function")xl(e)&&(A=1);else if(typeof e=="string")A=5;else r:switch(e){case nn:return vt(a.children,n,i,r);case nl:A=8,n|=8;break;case vu:return e=fe(12,a,r,n|2),e.elementType=vu,e.lanes=i,e;case ku:return e=fe(13,a,r,n),e.elementType=ku,e.lanes=i,e;case wu:return e=fe(19,a,r,n),e.elementType=wu,e.lanes=i,e;case Qb:return mf(a,n,i,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Lb:A=10;break r;case Yb:A=9;break r;case il:A=11;break r;case Al:A=14;break r;case ka:A=16,t=null;break r}throw Error(T(130,e==null?e:typeof e,""))}return r=fe(A,a,r,n),r.elementType=e,r.type=t,r.lanes=i,r}function vt(e,r,a,t){return e=fe(7,e,t,r),e.lanes=a,e}function mf(e,r,a,t){return e=fe(22,e,t,r),e.elementType=Qb,e.lanes=a,e.stateNode={isHidden:!1},e}function Ds(e,r,a){return e=fe(6,e,null,r),e.lanes=a,e}function Gs(e,r,a){return r=fe(4,e.children!==null?e.children:[],e.key,r),r.lanes=a,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Ek(e,r,a,t,n){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ms(0),this.expirationTimes=ms(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ms(0),this.identifierPrefix=t,this.onRecoverableError=n,this.mutableSourceEagerHydrationData=null}function Pl(e,r,a,t,n,i,A,o,f){return e=new Ek(e,r,a,o,f),r===1?(r=1,i===!0&&(r|=8)):r=0,i=fe(3,null,null,r),e.current=i,i.stateNode=e,i.memoizedState={element:t,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Il(i),e}function Ik(e,r,a){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:tn,key:t==null?null:""+t,children:e,containerInfo:r,implementation:a}}function M3(e){if(!e)return za;e=e._reactInternals;r:{if(xt(e)!==e||e.tag!==1)throw Error(T(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break r;case 1:if(Or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break r}}r=r.return}while(r!==null);throw Error(T(171))}if(e.tag===1){var a=e.type;if(Or(a))return X6(e,a,r)}return r}function x3(e,r,a,t,n,i,A,o,f){return e=Pl(a,t,!0,e,n,i,A,o,f),e.context=M3(null),a=e.current,t=Sr(),n=xa(a),i=ea(t,n),i.callback=r??null,Xa(a,i,n),e.current.lanes=n,S2(e,n,t),Ur(e,t),e}function pf(e,r,a,t){var n=r.current,i=Sr(),A=xa(n);return a=M3(a),r.context===null?r.context=a:r.pendingContext=a,r=ea(i,A),r.payload={element:e},t=t===void 0?null:t,t!==null&&(r.callback=t),e=Xa(n,r,A),e!==null&&(ye(e,n,A,i),YA(e,n,A)),A}function Wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Bd(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<r?a:r}}function Ol(e,r){Bd(e,r),(e=e.alternate)&&Bd(e,r)}function _k(){return null}var P3=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ul(e){this._internalRoot=e}vf.prototype.render=Ul.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(T(409));pf(e,r,null,null)};vf.prototype.unmount=Ul.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Zt(function(){pf(null,e,null,null)}),r[na]=null}};function vf(e){this._internalRoot=e}vf.prototype.unstable_scheduleHydration=function(e){if(e){var r=m6();e={blockedOn:null,target:e,priority:r};for(var a=0;a<Ea.length&&r!==0&&r<Ea[a].priority;a++);Ea.splice(a,0,e),a===0&&v6(e)}};function jl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function kf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zd(){}function Ck(e,r,a,t,n){if(n){if(typeof t=="function"){var i=t;t=function(){var s=Wo(A);i.call(s)}}var A=x3(r,t,e,0,null,!1,!1,"",Zd);return e._reactRootContainer=A,e[na]=A.current,e2(e.nodeType===8?e.parentNode:e),Zt(),A}for(;n=e.lastChild;)e.removeChild(n);if(typeof t=="function"){var o=t;t=function(){var s=Wo(f);o.call(s)}}var f=Pl(e,0,!1,null,null,!1,!1,"",Zd);return e._reactRootContainer=f,e[na]=f.current,e2(e.nodeType===8?e.parentNode:e),Zt(function(){pf(r,f,a,t)}),f}function wf(e,r,a,t,n){var i=a._reactRootContainer;if(i){var A=i;if(typeof n=="function"){var o=n;n=function(){var f=Wo(A);o.call(f)}}pf(r,A,e,n)}else A=Ck(a,r,e,n,t);return Wo(A)}b6=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var a=Ei(r.pendingLanes);a!==0&&(sl(r,a|1),Ur(r,L0()),!(c0&6)&&(Dn=L0()+500,et()))}break;case 13:Zt(function(){var t=ia(e,1);if(t!==null){var n=Sr();ye(t,e,1,n)}}),Ol(e,1)}};ul=function(e){if(e.tag===13){var r=ia(e,134217728);if(r!==null){var a=Sr();ye(r,e,134217728,a)}Ol(e,134217728)}};g6=function(e){if(e.tag===13){var r=xa(e),a=ia(e,r);if(a!==null){var t=Sr();ye(a,e,r,t)}Ol(e,r)}};m6=function(){return v0};p6=function(e,r){var a=v0;try{return v0=e,r()}finally{v0=a}};Wu=function(e,r,a){switch(r){case"input":if(Iu(e,a),r=a.name,a.type==="radio"&&r!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<a.length;r++){var t=a[r];if(t!==e&&t.form===e.form){var n=lf(t);if(!n)throw Error(T(90));zb(t),Iu(t,n)}}}break;case"textarea":$b(e,a);break;case"select":r=a.value,r!=null&&pn(e,!!a.multiple,r,!1)}};n6=Gl;i6=Zt;var Bk={usingClientEntryPoint:!1,Events:[D2,sn,lf,a6,t6,Gl]},mi={findFiberByHostInstance:lt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Zk={bundleType:mi.bundleType,version:mi.version,rendererPackageName:mi.rendererPackageName,rendererConfig:mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ca.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=f6(e),e===null?null:e.stateNode},findFiberByHostInstance:mi.findFiberByHostInstance||_k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var BA=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!BA.isDisabled&&BA.supportsFiber)try{of=BA.inject(Zk),Ge=BA}catch{}}ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bk;ae.createPortal=function(e,r){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jl(r))throw Error(T(200));return Ik(e,r,null,a)};ae.createRoot=function(e,r){if(!jl(e))throw Error(T(299));var a=!1,t="",n=P3;return r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(t=r.identifierPrefix),r.onRecoverableError!==void 0&&(n=r.onRecoverableError)),r=Pl(e,1,!1,null,null,a,!1,t,n),e[na]=r.current,e2(e.nodeType===8?e.parentNode:e),new Ul(r)};ae.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=f6(r),e=e===null?null:e.stateNode,e};ae.flushSync=function(e){return Zt(e)};ae.hydrate=function(e,r,a){if(!kf(r))throw Error(T(200));return wf(null,e,r,!0,a)};ae.hydrateRoot=function(e,r,a){if(!jl(e))throw Error(T(405));var t=a!=null&&a.hydratedSources||null,n=!1,i="",A=P3;if(a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),r=x3(r,null,e,1,a??null,n,!1,i,A),e[na]=r.current,e2(e),t)for(e=0;e<t.length;e++)a=t[e],n=a._getVersion,n=n(a._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[a,n]:r.mutableSourceEagerHydrationData.push(a,n);return new vf(r)};ae.render=function(e,r,a){if(!kf(r))throw Error(T(200));return wf(null,e,r,!1,a)};ae.unmountComponentAtNode=function(e){if(!kf(e))throw Error(T(40));return e._reactRootContainer?(Zt(function(){wf(null,null,e,!1,function(){e._reactRootContainer=null,e[na]=null})}),!0):!1};ae.unstable_batchedUpdates=Gl;ae.unstable_renderSubtreeIntoContainer=function(e,r,a,t){if(!kf(a))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return wf(e,r,a,!1,t)};ae.version="18.2.0-next-9e3b772b8-20220608";function O3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(O3)}catch(e){console.error(e)}}O3(),xb.exports=ae;var Rk=xb.exports,Rd=Rk;mu.createRoot=Rd.createRoot,mu.hydrateRoot=Rd.hydrateRoot;/**
 * @remix-run/router v1.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function u2(){return u2=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u2.apply(this,arguments)}var Na;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Na||(Na={}));const Td="popstate";function Tk(e){e===void 0&&(e={});function r(t,n){let{pathname:i,search:A,hash:o}=t.location;return u1("",{pathname:i,search:A,hash:o},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function a(t,n){return typeof n=="string"?n:No(n)}return Nk(r,a,null,e)}function $0(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function Ll(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function Wk(){return Math.random().toString(36).substr(2,8)}function Wd(e,r){return{usr:e.state,key:e.key,idx:r}}function u1(e,r,a,t){return a===void 0&&(a=null),u2({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof r=="string"?Jn(r):r,{state:a,key:r&&r.key||t||Wk()})}function No(e){let{pathname:r="/",search:a="",hash:t=""}=e;return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Jn(e){let r={};if(e){let a=e.indexOf("#");a>=0&&(r.hash=e.substr(a),e=e.substr(0,a));let t=e.indexOf("?");t>=0&&(r.search=e.substr(t),e=e.substr(0,t)),e&&(r.pathname=e)}return r}function Nk(e,r,a,t){t===void 0&&(t={});let{window:n=document.defaultView,v5Compat:i=!1}=t,A=n.history,o=Na.Pop,f=null,s=u();s==null&&(s=0,A.replaceState(u2({},A.state,{idx:s}),""));function u(){return(A.state||{idx:null}).idx}function c(){o=Na.Pop;let B=u(),g=B==null?null:B-s;s=B,f&&f({action:o,location:y.location,delta:g})}function d(B,g){o=Na.Push;let h=u1(y.location,B,g);a&&a(h,B),s=u()+1;let m=Wd(h,s),C=y.createHref(h);try{A.pushState(m,"",C)}catch(v){if(v instanceof DOMException&&v.name==="DataCloneError")throw v;n.location.assign(C)}i&&f&&f({action:o,location:y.location,delta:1})}function b(B,g){o=Na.Replace;let h=u1(y.location,B,g);a&&a(h,B),s=u();let m=Wd(h,s),C=y.createHref(h);A.replaceState(m,"",C),i&&f&&f({action:o,location:y.location,delta:0})}function w(B){let g=n.location.origin!=="null"?n.location.origin:n.location.href,h=typeof B=="string"?B:No(B);return $0(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let y={get action(){return o},get location(){return e(n,A)},listen(B){if(f)throw new Error("A history only accepts one active listener");return n.addEventListener(Td,c),f=B,()=>{n.removeEventListener(Td,c),f=null}},createHref(B){return r(n,B)},createURL:w,encodeLocation(B){let g=w(B);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:b,go(B){return A.go(B)}};return y}var Nd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nd||(Nd={}));function Fk(e,r,a){a===void 0&&(a="/");let t=typeof r=="string"?Jn(r):r,n=Yl(t.pathname||"/",a);if(n==null)return null;let i=U3(e);Sk(i);let A=null;for(let o=0;A==null&&o<i.length;++o)A=Uk(i[o],Yk(n));return A}function U3(e,r,a,t){r===void 0&&(r=[]),a===void 0&&(a=[]),t===void 0&&(t="");let n=(i,A,o)=>{let f={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:A,route:i};f.relativePath.startsWith("/")&&($0(f.relativePath.startsWith(t),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(t.length));let s=Oa([t,f.relativePath]),u=a.concat(f);i.children&&i.children.length>0&&($0(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),U3(i.children,r,u,s)),!(i.path==null&&!i.index)&&r.push({path:s,score:Pk(s,i.index),routesMeta:u})};return e.forEach((i,A)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))n(i,A);else for(let f of j3(i.path))n(i,A,f)}),r}function j3(e){let r=e.split("/");if(r.length===0)return[];let[a,...t]=r,n=a.endsWith("?"),i=a.replace(/\?$/,"");if(t.length===0)return n?[i,""]:[i];let A=j3(t.join("/")),o=[];return o.push(...A.map(f=>f===""?i:[i,f].join("/"))),n&&o.push(...A),o.map(f=>e.startsWith("/")&&f===""?"/":f)}function Sk(e){e.sort((r,a)=>r.score!==a.score?a.score-r.score:Ok(r.routesMeta.map(t=>t.childrenIndex),a.routesMeta.map(t=>t.childrenIndex)))}const Vk=/^:\w+$/,Dk=3,Gk=2,Xk=1,Mk=10,xk=-2,Fd=e=>e==="*";function Pk(e,r){let a=e.split("/"),t=a.length;return a.some(Fd)&&(t+=xk),r&&(t+=Gk),a.filter(n=>!Fd(n)).reduce((n,i)=>n+(Vk.test(i)?Dk:i===""?Xk:Mk),t)}function Ok(e,r){return e.length===r.length&&e.slice(0,-1).every((t,n)=>t===r[n])?e[e.length-1]-r[r.length-1]:0}function Uk(e,r){let{routesMeta:a}=e,t={},n="/",i=[];for(let A=0;A<a.length;++A){let o=a[A],f=A===a.length-1,s=n==="/"?r:r.slice(n.length)||"/",u=jk({path:o.relativePath,caseSensitive:o.caseSensitive,end:f},s);if(!u)return null;Object.assign(t,u.params);let c=o.route;i.push({params:t,pathname:Oa([n,u.pathname]),pathnameBase:Jk(Oa([n,u.pathnameBase])),route:c}),u.pathnameBase!=="/"&&(n=Oa([n,u.pathnameBase]))}return i}function jk(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[a,t]=Lk(e.path,e.caseSensitive,e.end),n=r.match(a);if(!n)return null;let i=n[0],A=i.replace(/(.)\/+$/,"$1"),o=n.slice(1);return{params:t.reduce((s,u,c)=>{if(u==="*"){let d=o[c]||"";A=i.slice(0,i.length-d.length).replace(/(.)\/+$/,"$1")}return s[u]=Qk(o[c]||"",u),s},{}),pathname:i,pathnameBase:A,pattern:e}}function Lk(e,r,a){r===void 0&&(r=!1),a===void 0&&(a=!0),Ll(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],n="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(A,o)=>(t.push(o),"/([^\\/]+)"));return e.endsWith("*")?(t.push("*"),n+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?n+="\\/*$":e!==""&&e!=="/"&&(n+="(?:(?=\\/|$))"),[new RegExp(n,r?void 0:"i"),t]}function Yk(e){try{return decodeURI(e)}catch(r){return Ll(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+r+").")),e}}function Qk(e,r){try{return decodeURIComponent(e)}catch(a){return Ll(!1,'The value for the URL param "'+r+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+a+").")),e}}function Yl(e,r){if(r==="/")return e;if(!e.toLowerCase().startsWith(r.toLowerCase()))return null;let a=r.endsWith("/")?r.length-1:r.length,t=e.charAt(a);return t&&t!=="/"?null:e.slice(a)||"/"}function Hk(e,r){r===void 0&&(r="/");let{pathname:a,search:t="",hash:n=""}=typeof e=="string"?Jn(e):e;return{pathname:a?a.startsWith("/")?a:zk(a,r):r,search:$k(t),hash:Kk(n)}}function zk(e,r){let a=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(n=>{n===".."?a.length>1&&a.pop():n!=="."&&a.push(n)}),a.length>1?a.join("/"):"/"}function Xs(e,r,a,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function L3(e){return e.filter((r,a)=>a===0||r.route.path&&r.route.path.length>0)}function Y3(e,r,a,t){t===void 0&&(t=!1);let n;typeof e=="string"?n=Jn(e):(n=u2({},e),$0(!n.pathname||!n.pathname.includes("?"),Xs("?","pathname","search",n)),$0(!n.pathname||!n.pathname.includes("#"),Xs("#","pathname","hash",n)),$0(!n.search||!n.search.includes("#"),Xs("#","search","hash",n)));let i=e===""||n.pathname==="",A=i?"/":n.pathname,o;if(t||A==null)o=a;else{let c=r.length-1;if(A.startsWith("..")){let d=A.split("/");for(;d[0]==="..";)d.shift(),c-=1;n.pathname=d.join("/")}o=c>=0?r[c]:"/"}let f=Hk(n,o),s=A&&A!=="/"&&A.endsWith("/"),u=(i||A===".")&&a.endsWith("/");return!f.pathname.endsWith("/")&&(s||u)&&(f.pathname+="/"),f}const Oa=e=>e.join("/").replace(/\/\/+/g,"/"),Jk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$k=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Kk=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function qk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Q3=["post","put","patch","delete"];new Set(Q3);const rw=["get",...Q3];new Set(rw);/**
 * React Router v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},Fo.apply(this,arguments)}const Ql=V.createContext(null),ew=V.createContext(null),$n=V.createContext(null),yf=V.createContext(null),Pt=V.createContext({outlet:null,matches:[],isDataRoute:!1}),H3=V.createContext(null);function aw(e,r){let{relative:a}=r===void 0?{}:r;X2()||$0(!1);let{basename:t,navigator:n}=V.useContext($n),{hash:i,pathname:A,search:o}=$3(e,{relative:a}),f=A;return t!=="/"&&(f=A==="/"?t:Oa([t,A])),n.createHref({pathname:f,search:o,hash:i})}function X2(){return V.useContext(yf)!=null}function Ef(){return X2()||$0(!1),V.useContext(yf).location}function z3(e){V.useContext($n).static||V.useLayoutEffect(e)}function J3(){let{isDataRoute:e}=V.useContext(Pt);return e?bw():tw()}function tw(){X2()||$0(!1);let e=V.useContext(Ql),{basename:r,navigator:a}=V.useContext($n),{matches:t}=V.useContext(Pt),{pathname:n}=Ef(),i=JSON.stringify(L3(t).map(f=>f.pathnameBase)),A=V.useRef(!1);return z3(()=>{A.current=!0}),V.useCallback(function(f,s){if(s===void 0&&(s={}),!A.current)return;if(typeof f=="number"){a.go(f);return}let u=Y3(f,JSON.parse(i),n,s.relative==="path");e==null&&r!=="/"&&(u.pathname=u.pathname==="/"?r:Oa([r,u.pathname])),(s.replace?a.replace:a.push)(u,s.state,s)},[r,a,i,n,e])}function $3(e,r){let{relative:a}=r===void 0?{}:r,{matches:t}=V.useContext(Pt),{pathname:n}=Ef(),i=JSON.stringify(L3(t).map(A=>A.pathnameBase));return V.useMemo(()=>Y3(e,JSON.parse(i),n,a==="path"),[e,i,n,a])}function nw(e,r){return iw(e,r)}function iw(e,r,a){X2()||$0(!1);let{navigator:t}=V.useContext($n),{matches:n}=V.useContext(Pt),i=n[n.length-1],A=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let f=Ef(),s;if(r){var u;let y=typeof r=="string"?Jn(r):r;o==="/"||(u=y.pathname)!=null&&u.startsWith(o)||$0(!1),s=y}else s=f;let c=s.pathname||"/",d=o==="/"?c:c.slice(o.length)||"/",b=Fk(e,{pathname:d}),w=uw(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},A,y.params),pathname:Oa([o,t.encodeLocation?t.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?o:Oa([o,t.encodeLocation?t.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),n,a);return r&&w?V.createElement(yf.Provider,{value:{location:Fo({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:Na.Pop}},w):w}function Aw(){let e=hw(),r=qk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),a=e instanceof Error?e.stack:null,n={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return V.createElement(V.Fragment,null,V.createElement("h2",null,"Unexpected Application Error!"),V.createElement("h3",{style:{fontStyle:"italic"}},r),a?V.createElement("pre",{style:n},a):null,i)}const ow=V.createElement(Aw,null);class fw extends V.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error||a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){console.error("React Router caught the following error during render",r,a)}render(){return this.state.error?V.createElement(Pt.Provider,{value:this.props.routeContext},V.createElement(H3.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sw(e){let{routeContext:r,match:a,children:t}=e,n=V.useContext(Ql);return n&&n.static&&n.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=a.route.id),V.createElement(Pt.Provider,{value:r},t)}function uw(e,r,a){var t;if(r===void 0&&(r=[]),a===void 0&&(a=null),e==null){var n;if((n=a)!=null&&n.errors)e=a.matches;else return null}let i=e,A=(t=a)==null?void 0:t.errors;if(A!=null){let o=i.findIndex(f=>f.route.id&&(A==null?void 0:A[f.route.id]));o>=0||$0(!1),i=i.slice(0,Math.min(i.length,o+1))}return i.reduceRight((o,f,s)=>{let u=f.route.id?A==null?void 0:A[f.route.id]:null,c=null;a&&(c=f.route.errorElement||ow);let d=r.concat(i.slice(0,s+1)),b=()=>{let w;return u?w=c:f.route.Component?w=V.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=o,V.createElement(sw,{match:f,routeContext:{outlet:o,matches:d,isDataRoute:a!=null},children:w})};return a&&(f.route.ErrorBoundary||f.route.errorElement||s===0)?V.createElement(fw,{location:a.location,revalidation:a.revalidation,component:c,error:u,children:b(),routeContext:{outlet:null,matches:d,isDataRoute:!0}}):b()},null)}var l1;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"})(l1||(l1={}));var l2;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"})(l2||(l2={}));function lw(e){let r=V.useContext(Ql);return r||$0(!1),r}function cw(e){let r=V.useContext(ew);return r||$0(!1),r}function dw(e){let r=V.useContext(Pt);return r||$0(!1),r}function K3(e){let r=dw(),a=r.matches[r.matches.length-1];return a.route.id||$0(!1),a.route.id}function hw(){var e;let r=V.useContext(H3),a=cw(l2.UseRouteError),t=K3(l2.UseRouteError);return r||((e=a.errors)==null?void 0:e[t])}function bw(){let{router:e}=lw(l1.UseNavigateStable),r=K3(l2.UseNavigateStable),a=V.useRef(!1);return z3(()=>{a.current=!0}),V.useCallback(function(n,i){i===void 0&&(i={}),a.current&&(typeof n=="number"?e.navigate(n):e.navigate(n,Fo({fromRouteId:r},i)))},[e,r])}function Qe(e){$0(!1)}function gw(e){let{basename:r="/",children:a=null,location:t,navigationType:n=Na.Pop,navigator:i,static:A=!1}=e;X2()&&$0(!1);let o=r.replace(/^\/*/,"/"),f=V.useMemo(()=>({basename:o,navigator:i,static:A}),[o,i,A]);typeof t=="string"&&(t=Jn(t));let{pathname:s="/",search:u="",hash:c="",state:d=null,key:b="default"}=t,w=V.useMemo(()=>{let y=Yl(s,o);return y==null?null:{location:{pathname:y,search:u,hash:c,state:d,key:b},navigationType:n}},[o,s,u,c,d,b,n]);return w==null?null:V.createElement($n.Provider,{value:f},V.createElement(yf.Provider,{children:a,value:w}))}function mw(e){let{children:r,location:a}=e;return nw(c1(r),a)}var Sd;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(Sd||(Sd={}));new Promise(()=>{});function c1(e,r){r===void 0&&(r=[]);let a=[];return V.Children.forEach(e,(t,n)=>{if(!V.isValidElement(t))return;let i=[...r,n];if(t.type===V.Fragment){a.push.apply(a,c1(t.props.children,i));return}t.type!==Qe&&$0(!1),!t.props.index||!t.props.children||$0(!1);let A={id:t.props.id||i.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(A.children=c1(t.props.children,i)),a.push(A)}),a}/**
 * React Router DOM v6.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function d1(){return d1=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d1.apply(this,arguments)}function pw(e,r){if(e==null)return{};var a={},t=Object.keys(e),n,i;for(i=0;i<t.length;i++)n=t[i],!(r.indexOf(n)>=0)&&(a[n]=e[n]);return a}function vw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function kw(e,r){return e.button===0&&(!r||r==="_self")&&!vw(e)}const ww=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],yw="startTransition",Vd=vp[yw];function Ew(e){let{basename:r,children:a,future:t,window:n}=e,i=V.useRef();i.current==null&&(i.current=Tk({window:n,v5Compat:!0}));let A=i.current,[o,f]=V.useState({action:A.action,location:A.location}),{v7_startTransition:s}=t||{},u=V.useCallback(c=>{s&&Vd?Vd(()=>f(c)):f(c)},[f,s]);return V.useLayoutEffect(()=>A.listen(u),[A,u]),V.createElement(gw,{basename:r,children:a,location:o.location,navigationType:o.action,navigator:A})}const Iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ya=V.forwardRef(function(r,a){let{onClick:t,relative:n,reloadDocument:i,replace:A,state:o,target:f,to:s,preventScrollReset:u}=r,c=pw(r,ww),{basename:d}=V.useContext($n),b,w=!1;if(typeof s=="string"&&_w.test(s)&&(b=s,Iw))try{let h=new URL(window.location.href),m=s.startsWith("//")?new URL(h.protocol+s):new URL(s),C=Yl(m.pathname,d);m.origin===h.origin&&C!=null?s=C+m.search+m.hash:w=!0}catch{}let y=aw(s,{relative:n}),B=Cw(s,{replace:A,state:o,target:f,preventScrollReset:u,relative:n});function g(h){t&&t(h),h.defaultPrevented||B(h)}return V.createElement("a",d1({},c,{href:b||y,onClick:w||i?t:g,ref:a,target:f}))});var Dd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher"})(Dd||(Dd={}));var Gd;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function Cw(e,r){let{target:a,replace:t,state:n,preventScrollReset:i,relative:A}=r===void 0?{}:r,o=J3(),f=Ef(),s=$3(e,{relative:A});return V.useCallback(u=>{if(kw(u,a)){u.preventDefault();let c=t!==void 0?t:No(f)===No(s);o(e,{replace:c,state:n,preventScrollReset:i,relative:A})}},[f,o,s,t,n,a,e,i,A])}const Bw=()=>_.jsxs("nav",{children:[_.jsx("div",{className:"navLeftSide",children:_.jsx("h1",{children:_.jsx(ya,{to:"/",children:"Animall"})})}),_.jsx("div",{className:"navRightSide",children:_.jsxs("ul",{children:[_.jsx("li",{className:"navFlexItem",children:_.jsx(ya,{to:"/boardList",children:"Board"})}),_.jsx("li",{className:"navFlexItem",children:_.jsx(ya,{to:"/training",children:"Training"})}),_.jsx("li",{className:"navFlexItem",children:_.jsx(ya,{to:"/shop",children:"Shop"})}),_.jsx("li",{className:"navFlexItem",children:_.jsx(ya,{to:"/trip",children:"Trip"})}),_.jsx("li",{className:"navFlexItem",children:_.jsx(ya,{to:"/myPage",children:"Me"})})]})})]}),Zw=()=>_.jsx(_.Fragment,{children:"Training 서비스 준비중입니다"}),Rw=()=>_.jsx(_.Fragment,{children:"Shop 서비스 준비중입니다"});const Tw="/assets/msk-e1b576a2.png";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q3=function(e){const r=[];let a=0;for(let t=0;t<e.length;t++){let n=e.charCodeAt(t);n<128?r[a++]=n:n<2048?(r[a++]=n>>6|192,r[a++]=n&63|128):(n&64512)===55296&&t+1<e.length&&(e.charCodeAt(t+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++t)&1023),r[a++]=n>>18|240,r[a++]=n>>12&63|128,r[a++]=n>>6&63|128,r[a++]=n&63|128):(r[a++]=n>>12|224,r[a++]=n>>6&63|128,r[a++]=n&63|128)}return r},Ww=function(e){const r=[];let a=0,t=0;for(;a<e.length;){const n=e[a++];if(n<128)r[t++]=String.fromCharCode(n);else if(n>191&&n<224){const i=e[a++];r[t++]=String.fromCharCode((n&31)<<6|i&63)}else if(n>239&&n<365){const i=e[a++],A=e[a++],o=e[a++],f=((n&7)<<18|(i&63)<<12|(A&63)<<6|o&63)-65536;r[t++]=String.fromCharCode(55296+(f>>10)),r[t++]=String.fromCharCode(56320+(f&1023))}else{const i=e[a++],A=e[a++];r[t++]=String.fromCharCode((n&15)<<12|(i&63)<<6|A&63)}}return r.join("")},r8={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,r){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const a=r?this.byteToCharMapWebSafe_:this.byteToCharMap_,t=[];for(let n=0;n<e.length;n+=3){const i=e[n],A=n+1<e.length,o=A?e[n+1]:0,f=n+2<e.length,s=f?e[n+2]:0,u=i>>2,c=(i&3)<<4|o>>4;let d=(o&15)<<2|s>>6,b=s&63;f||(b=64,A||(d=64)),t.push(a[u],a[c],a[d],a[b])}return t.join("")},encodeString(e,r){return this.HAS_NATIVE_SUPPORT&&!r?btoa(e):this.encodeByteArray(q3(e),r)},decodeString(e,r){return this.HAS_NATIVE_SUPPORT&&!r?atob(e):Ww(this.decodeStringToByteArray(e,r))},decodeStringToByteArray(e,r){this.init_();const a=r?this.charToByteMapWebSafe_:this.charToByteMap_,t=[];for(let n=0;n<e.length;){const i=a[e.charAt(n++)],o=n<e.length?a[e.charAt(n)]:0;++n;const s=n<e.length?a[e.charAt(n)]:64;++n;const c=n<e.length?a[e.charAt(n)]:64;if(++n,i==null||o==null||s==null||c==null)throw new Nw;const d=i<<2|o>>4;if(t.push(d),s!==64){const b=o<<4&240|s>>2;if(t.push(b),c!==64){const w=s<<6&192|c;t.push(w)}}}return t},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fw=function(e){const r=q3(e);return r8.encodeByteArray(r,!0)},So=function(e){return Fw(e).replace(/\./g,"")},e8=function(e){try{return r8.decodeString(e,!0)}catch(r){console.error("base64Decode failed: ",r)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=()=>Sw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Gw=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const r=e&&e8(e[1]);return r&&JSON.parse(r)},If=()=>{try{return Vw()||Dw()||Gw()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},a8=e=>{var r,a;return(a=(r=If())===null||r===void 0?void 0:r.emulatorHosts)===null||a===void 0?void 0:a[e]},t8=e=>{const r=a8(e);if(!r)return;const a=r.lastIndexOf(":");if(a<=0||a+1===r.length)throw new Error(`Invalid host ${r} with no separate hostname and port!`);const t=parseInt(r.substring(a+1),10);return r[0]==="["?[r.substring(1,a-1),t]:[r.substring(0,a),t]},n8=()=>{var e;return(e=If())===null||e===void 0?void 0:e.config},i8=e=>{var r;return(r=If())===null||r===void 0?void 0:r[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((r,a)=>{this.resolve=r,this.reject=a})}wrapCallback(r){return(a,t)=>{a?this.reject(a):this.resolve(t),typeof r=="function"&&(this.promise.catch(()=>{}),r.length===1?r(a):r(a,t))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A8(e,r){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const a={alg:"none",type:"JWT"},t=r||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const A=Object.assign({iss:`https://securetoken.google.com/${t}`,aud:t,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e),o="";return[So(JSON.stringify(a)),So(JSON.stringify(A)),o].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zr())}function xw(){var e;const r=(e=If())===null||e===void 0?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function o8(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Pw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ow(){const e=Zr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function f8(){try{return typeof indexedDB=="object"}catch{return!1}}function s8(){return new Promise((e,r)=>{try{let a=!0;const t="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(t);n.onsuccess=()=>{n.result.close(),a||self.indexedDB.deleteDatabase(t),e(!0)},n.onupgradeneeded=()=>{a=!1},n.onerror=()=>{var i;r(((i=n.error)===null||i===void 0?void 0:i.message)||"")}}catch(a){r(a)}})}function Uw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="FirebaseError";class he extends Error{constructor(r,a,t){super(a),this.code=r,this.customData=t,this.name=jw,Object.setPrototypeOf(this,he.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ot.prototype.create)}}class Ot{constructor(r,a,t){this.service=r,this.serviceName=a,this.errors=t}create(r,...a){const t=a[0]||{},n=`${this.service}/${r}`,i=this.errors[r],A=i?Lw(i,t):"Error",o=`${this.serviceName}: ${A} (${n}).`;return new he(n,o,t)}}function Lw(e,r){return e.replace(Yw,(a,t)=>{const n=r[t];return n!=null?String(n):`<${t}?>`})}const Yw=/\{\$([^}]+)}/g;function Qw(e){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}function c2(e,r){if(e===r)return!0;const a=Object.keys(e),t=Object.keys(r);for(const n of a){if(!t.includes(n))return!1;const i=e[n],A=r[n];if(Xd(i)&&Xd(A)){if(!c2(i,A))return!1}else if(i!==A)return!1}for(const n of t)if(!a.includes(n))return!1;return!0}function Xd(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(e){const r=[];for(const[a,t]of Object.entries(e))Array.isArray(t)?t.forEach(n=>{r.push(encodeURIComponent(a)+"="+encodeURIComponent(n))}):r.push(encodeURIComponent(a)+"="+encodeURIComponent(t));return r.length?"&"+r.join("&"):""}function _i(e){const r={};return e.replace(/^\?/,"").split("&").forEach(t=>{if(t){const[n,i]=t.split("=");r[decodeURIComponent(n)]=decodeURIComponent(i)}}),r}function Ci(e){const r=e.indexOf("?");if(!r)return"";const a=e.indexOf("#",r);return e.substring(r,a>0?a:void 0)}function Hw(e,r){const a=new zw(e,r);return a.subscribe.bind(a)}class zw{constructor(r,a){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=a,this.task.then(()=>{r(this)}).catch(t=>{this.error(t)})}next(r){this.forEachObserver(a=>{a.next(r)})}error(r){this.forEachObserver(a=>{a.error(r)}),this.close(r)}complete(){this.forEachObserver(r=>{r.complete()}),this.close()}subscribe(r,a,t){let n;if(r===void 0&&a===void 0&&t===void 0)throw new Error("Missing Observer.");Jw(r,["next","error","complete"])?n=r:n={next:r,error:a,complete:t},n.next===void 0&&(n.next=Ms),n.error===void 0&&(n.error=Ms),n.complete===void 0&&(n.complete=Ms);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),i}unsubscribeOne(r){this.observers===void 0||this.observers[r]===void 0||(delete this.observers[r],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(r){if(!this.finalized)for(let a=0;a<this.observers.length;a++)this.sendOne(a,r)}sendOne(r,a){this.task.then(()=>{if(this.observers!==void 0&&this.observers[r]!==void 0)try{a(this.observers[r])}catch(t){typeof console<"u"&&console.error&&console.error(t)}})}close(r){this.finalized||(this.finalized=!0,r!==void 0&&(this.finalError=r),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jw(e,r){if(typeof e!="object"||e===null)return!1;for(const a of r)if(a in e&&typeof e[a]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=1e3,Kw=2,qw=4*60*60*1e3,ry=.5;function Md(e,r=$w,a=Kw){const t=r*Math.pow(a,e),n=Math.round(ry*t*(Math.random()-.5)*2);return Math.min(qw,t+n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(e){return e&&e._delegate?e._delegate:e}class de{constructor(r,a,t){this.name=r,this.instanceFactory=a,this.type=t,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(r){return this.instantiationMode=r,this}setMultipleInstances(r){return this.multipleInstances=r,this}setServiceProps(r){return this.serviceProps=r,this}setInstanceCreatedCallback(r){return this.onInstanceCreated=r,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(r,a){this.name=r,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(r){const a=this.normalizeInstanceIdentifier(r);if(!this.instancesDeferred.has(a)){const t=new Xw;if(this.instancesDeferred.set(a,t),this.isInitialized(a)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:a});n&&t.resolve(n)}catch{}}return this.instancesDeferred.get(a).promise}getImmediate(r){var a;const t=this.normalizeInstanceIdentifier(r==null?void 0:r.identifier),n=(a=r==null?void 0:r.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(r){if(r.name!==this.name)throw Error(`Mismatching Component ${r.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=r,!!this.shouldAutoInitialize()){if(ty(r))try{this.getOrInitializeService({instanceIdentifier:ut})}catch{}for(const[a,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(a);try{const i=this.getOrInitializeService({instanceIdentifier:n});t.resolve(i)}catch{}}}}clearInstance(r=ut){this.instancesDeferred.delete(r),this.instancesOptions.delete(r),this.instances.delete(r)}async delete(){const r=Array.from(this.instances.values());await Promise.all([...r.filter(a=>"INTERNAL"in a).map(a=>a.INTERNAL.delete()),...r.filter(a=>"_delete"in a).map(a=>a._delete())])}isComponentSet(){return this.component!=null}isInitialized(r=ut){return this.instances.has(r)}getOptions(r=ut){return this.instancesOptions.get(r)||{}}initialize(r={}){const{options:a={}}=r,t=this.normalizeInstanceIdentifier(r.instanceIdentifier);if(this.isInitialized(t))throw Error(`${this.name}(${t}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:t,options:a});for(const[i,A]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);t===o&&A.resolve(n)}return n}onInit(r,a){var t;const n=this.normalizeInstanceIdentifier(a),i=(t=this.onInitCallbacks.get(n))!==null&&t!==void 0?t:new Set;i.add(r),this.onInitCallbacks.set(n,i);const A=this.instances.get(n);return A&&r(A,n),()=>{i.delete(r)}}invokeOnInitCallbacks(r,a){const t=this.onInitCallbacks.get(a);if(t)for(const n of t)try{n(r,a)}catch{}}getOrInitializeService({instanceIdentifier:r,options:a={}}){let t=this.instances.get(r);if(!t&&this.component&&(t=this.component.instanceFactory(this.container,{instanceIdentifier:ay(r),options:a}),this.instances.set(r,t),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(t,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,t)}catch{}return t||null}normalizeInstanceIdentifier(r=ut){return this.component?this.component.multipleInstances?r:ut:r}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ay(e){return e===ut?void 0:e}function ty(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(r){this.name=r,this.providers=new Map}addComponent(r){const a=this.getProvider(r.name);if(a.isComponentSet())throw new Error(`Component ${r.name} has already been registered with ${this.name}`);a.setComponent(r)}addOrOverwriteComponent(r){this.getProvider(r.name).isComponentSet()&&this.providers.delete(r.name),this.addComponent(r)}getProvider(r){if(this.providers.has(r))return this.providers.get(r);const a=new ey(r,this);return this.providers.set(r,a),a}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var d0;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(d0||(d0={}));const iy={debug:d0.DEBUG,verbose:d0.VERBOSE,info:d0.INFO,warn:d0.WARN,error:d0.ERROR,silent:d0.SILENT},Ay=d0.INFO,oy={[d0.DEBUG]:"log",[d0.VERBOSE]:"log",[d0.INFO]:"info",[d0.WARN]:"warn",[d0.ERROR]:"error"},fy=(e,r,...a)=>{if(r<e.logLevel)return;const t=new Date().toISOString(),n=oy[r];if(n)console[n](`[${t}]  ${e.name}:`,...a);else throw new Error(`Attempted to log a message with an invalid logType (value: ${r})`)};class _f{constructor(r){this.name=r,this._logLevel=Ay,this._logHandler=fy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(r){if(!(r in d0))throw new TypeError(`Invalid value "${r}" assigned to \`logLevel\``);this._logLevel=r}setLogLevel(r){this._logLevel=typeof r=="string"?iy[r]:r}get logHandler(){return this._logHandler}set logHandler(r){if(typeof r!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=r}get userLogHandler(){return this._userLogHandler}set userLogHandler(r){this._userLogHandler=r}debug(...r){this._userLogHandler&&this._userLogHandler(this,d0.DEBUG,...r),this._logHandler(this,d0.DEBUG,...r)}log(...r){this._userLogHandler&&this._userLogHandler(this,d0.VERBOSE,...r),this._logHandler(this,d0.VERBOSE,...r)}info(...r){this._userLogHandler&&this._userLogHandler(this,d0.INFO,...r),this._logHandler(this,d0.INFO,...r)}warn(...r){this._userLogHandler&&this._userLogHandler(this,d0.WARN,...r),this._logHandler(this,d0.WARN,...r)}error(...r){this._userLogHandler&&this._userLogHandler(this,d0.ERROR,...r),this._logHandler(this,d0.ERROR,...r)}}const sy=(e,r)=>r.some(a=>e instanceof a);let xd,Pd;function uy(){return xd||(xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ly(){return Pd||(Pd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const u8=new WeakMap,h1=new WeakMap,l8=new WeakMap,xs=new WeakMap,Hl=new WeakMap;function cy(e){const r=new Promise((a,t)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",A)},i=()=>{a(Ua(e.result)),n()},A=()=>{t(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",A)});return r.then(a=>{a instanceof IDBCursor&&u8.set(a,e)}).catch(()=>{}),Hl.set(r,e),r}function dy(e){if(h1.has(e))return;const r=new Promise((a,t)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",A),e.removeEventListener("abort",A)},i=()=>{a(),n()},A=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",A),e.addEventListener("abort",A)});h1.set(e,r)}let b1={get(e,r,a){if(e instanceof IDBTransaction){if(r==="done")return h1.get(e);if(r==="objectStoreNames")return e.objectStoreNames||l8.get(e);if(r==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Ua(e[r])},set(e,r,a){return e[r]=a,!0},has(e,r){return e instanceof IDBTransaction&&(r==="done"||r==="store")?!0:r in e}};function hy(e){b1=e(b1)}function by(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(r,...a){const t=e.call(Ps(this),r,...a);return l8.set(t,r.sort?r.sort():[r]),Ua(t)}:ly().includes(e)?function(...r){return e.apply(Ps(this),r),Ua(u8.get(this))}:function(...r){return Ua(e.apply(Ps(this),r))}}function gy(e){return typeof e=="function"?by(e):(e instanceof IDBTransaction&&dy(e),sy(e,uy())?new Proxy(e,b1):e)}function Ua(e){if(e instanceof IDBRequest)return cy(e);if(xs.has(e))return xs.get(e);const r=gy(e);return r!==e&&(xs.set(e,r),Hl.set(r,e)),r}const Ps=e=>Hl.get(e);function my(e,r,{blocked:a,upgrade:t,blocking:n,terminated:i}={}){const A=indexedDB.open(e,r),o=Ua(A);return t&&A.addEventListener("upgradeneeded",f=>{t(Ua(A.result),f.oldVersion,f.newVersion,Ua(A.transaction),f)}),a&&A.addEventListener("blocked",f=>a(f.oldVersion,f.newVersion,f)),o.then(f=>{i&&f.addEventListener("close",()=>i()),n&&f.addEventListener("versionchange",s=>n(s.oldVersion,s.newVersion,s))}).catch(()=>{}),o}const py=["get","getKey","getAll","getAllKeys","count"],vy=["put","add","delete","clear"],Os=new Map;function Od(e,r){if(!(e instanceof IDBDatabase&&!(r in e)&&typeof r=="string"))return;if(Os.get(r))return Os.get(r);const a=r.replace(/FromIndex$/,""),t=r!==a,n=vy.includes(a);if(!(a in(t?IDBIndex:IDBObjectStore).prototype)||!(n||py.includes(a)))return;const i=async function(A,...o){const f=this.transaction(A,n?"readwrite":"readonly");let s=f.store;return t&&(s=s.index(o.shift())),(await Promise.all([s[a](...o),n&&f.done]))[0]};return Os.set(r,i),i}hy(e=>({...e,get:(r,a,t)=>Od(r,a)||e.get(r,a,t),has:(r,a)=>!!Od(r,a)||e.has(r,a)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(r){this.container=r}getPlatformInfoString(){return this.container.getProviders().map(a=>{if(wy(a)){const t=a.getImmediate();return`${t.library}/${t.version}`}else return null}).filter(a=>a).join(" ")}}function wy(e){const r=e.getComponent();return(r==null?void 0:r.type)==="VERSION"}const g1="@firebase/app",Ud="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new _f("@firebase/app"),yy="@firebase/app-compat",Ey="@firebase/analytics-compat",Iy="@firebase/analytics",_y="@firebase/app-check-compat",Cy="@firebase/app-check",By="@firebase/auth",Zy="@firebase/auth-compat",Ry="@firebase/database",Ty="@firebase/database-compat",Wy="@firebase/functions",Ny="@firebase/functions-compat",Fy="@firebase/installations",Sy="@firebase/installations-compat",Vy="@firebase/messaging",Dy="@firebase/messaging-compat",Gy="@firebase/performance",Xy="@firebase/performance-compat",My="@firebase/remote-config",xy="@firebase/remote-config-compat",Py="@firebase/storage",Oy="@firebase/storage-compat",Uy="@firebase/firestore",jy="@firebase/firestore-compat",Ly="firebase",Yy="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m1="[DEFAULT]",Qy={[g1]:"fire-core",[yy]:"fire-core-compat",[Iy]:"fire-analytics",[Ey]:"fire-analytics-compat",[Cy]:"fire-app-check",[_y]:"fire-app-check-compat",[By]:"fire-auth",[Zy]:"fire-auth-compat",[Ry]:"fire-rtdb",[Ty]:"fire-rtdb-compat",[Wy]:"fire-fn",[Ny]:"fire-fn-compat",[Fy]:"fire-iid",[Sy]:"fire-iid-compat",[Vy]:"fire-fcm",[Dy]:"fire-fcm-compat",[Gy]:"fire-perf",[Xy]:"fire-perf-compat",[My]:"fire-rc",[xy]:"fire-rc-compat",[Py]:"fire-gcs",[Oy]:"fire-gcs-compat",[Uy]:"fire-fst",[jy]:"fire-fst-compat","fire-js":"fire-js",[Ly]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new Map,p1=new Map;function Hy(e,r){try{e.container.addComponent(r)}catch(a){Rt.debug(`Component ${r.name} failed to register with FirebaseApp ${e.name}`,a)}}function Ie(e){const r=e.name;if(p1.has(r))return Rt.debug(`There were multiple attempts to register component ${r}.`),!1;p1.set(r,e);for(const a of Vo.values())Hy(a,e);return!0}function at(e,r){const a=e.container.getProvider("heartbeat").getImmediate({optional:!0});return a&&a.triggerHeartbeat(),e.container.getProvider(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ja=new Ot("app","Firebase",zy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jy{constructor(r,a,t){this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},a),this._name=a.name,this._automaticDataCollectionEnabled=a.automaticDataCollectionEnabled,this._container=t,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(r){this.checkDestroyed(),this._automaticDataCollectionEnabled=r}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(r){this._isDeleted=r}checkDestroyed(){if(this.isDeleted)throw ja.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=Yy;function c8(e,r={}){let a=e;typeof r!="object"&&(r={name:r});const t=Object.assign({name:m1,automaticDataCollectionEnabled:!1},r),n=t.name;if(typeof n!="string"||!n)throw ja.create("bad-app-name",{appName:String(n)});if(a||(a=n8()),!a)throw ja.create("no-options");const i=Vo.get(n);if(i){if(c2(a,i.options)&&c2(t,i.config))return i;throw ja.create("duplicate-app",{appName:n})}const A=new ny(n);for(const f of p1.values())A.addComponent(f);const o=new Jy(a,t,A);return Vo.set(n,o),o}function Cf(e=m1){const r=Vo.get(e);if(!r&&e===m1&&n8())return c8();if(!r)throw ja.create("no-app",{appName:e});return r}function jr(e,r,a){var t;let n=(t=Qy[e])!==null&&t!==void 0?t:e;a&&(n+=`-${a}`);const i=n.match(/\s|\//),A=r.match(/\s|\//);if(i||A){const o=[`Unable to register library "${n}" with version "${r}":`];i&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&A&&o.push("and"),A&&o.push(`version name "${r}" contains illegal characters (whitespace or "/")`),Rt.warn(o.join(" "));return}Ie(new de(`${n}-version`,()=>({library:n,version:r}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y="firebase-heartbeat-database",Ky=1,d2="firebase-heartbeat-store";let Us=null;function d8(){return Us||(Us=my($y,Ky,{upgrade:(e,r)=>{switch(r){case 0:e.createObjectStore(d2)}}}).catch(e=>{throw ja.create("idb-open",{originalErrorMessage:e.message})})),Us}async function qy(e){try{return await(await d8()).transaction(d2).objectStore(d2).get(h8(e))}catch(r){if(r instanceof he)Rt.warn(r.message);else{const a=ja.create("idb-get",{originalErrorMessage:r==null?void 0:r.message});Rt.warn(a.message)}}}async function jd(e,r){try{const t=(await d8()).transaction(d2,"readwrite");await t.objectStore(d2).put(r,h8(e)),await t.done}catch(a){if(a instanceof he)Rt.warn(a.message);else{const t=ja.create("idb-set",{originalErrorMessage:a==null?void 0:a.message});Rt.warn(t.message)}}}function h8(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r9=1024,e9=30*24*60*60*1e3;class a9{constructor(r){this.container=r,this._heartbeatsCache=null;const a=this.container.getProvider("app").getImmediate();this._storage=new n9(a),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ld();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(n=>n.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(n=>{const i=new Date(n.date).valueOf();return Date.now()-i<=e9}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Ld(),{heartbeatsToSend:a,unsentEntries:t}=t9(this._heartbeatsCache.heartbeats),n=So(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=r,t.length>0?(this._heartbeatsCache.heartbeats=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}}function Ld(){return new Date().toISOString().substring(0,10)}function t9(e,r=r9){const a=[];let t=e.slice();for(const n of e){const i=a.find(A=>A.agent===n.agent);if(i){if(i.dates.push(n.date),Yd(a)>r){i.dates.pop();break}}else if(a.push({agent:n.agent,dates:[n.date]}),Yd(a)>r){a.pop();break}t=t.slice(1)}return{heartbeatsToSend:a,unsentEntries:t}}class n9{constructor(r){this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return f8()?s8().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await qy(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(r){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return jd(this.app,{lastSentHeartbeatDate:(a=r.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:r.heartbeats})}else return}async add(r){var a;if(await this._canUseIndexedDBPromise){const n=await this.read();return jd(this.app,{lastSentHeartbeatDate:(a=r.lastSentHeartbeatDate)!==null&&a!==void 0?a:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...r.heartbeats]})}else return}}function Yd(e){return So(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i9(e){Ie(new de("platform-logger",r=>new ky(r),"PRIVATE")),Ie(new de("heartbeat",r=>new a9(r),"PRIVATE")),jr(g1,Ud,e),jr(g1,Ud,"esm2017"),jr("fire-js","")}i9("");var A9=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,zl=zl||{},t0=A9||self;function Bf(e){var r=typeof e;return r=r!="object"?r:e?Array.isArray(e)?"array":r:"null",r=="array"||r=="object"&&typeof e.length=="number"}function x2(e){var r=typeof e;return r=="object"&&e!=null||r=="function"}function o9(e){return Object.prototype.hasOwnProperty.call(e,js)&&e[js]||(e[js]=++f9)}var js="closure_uid_"+(1e9*Math.random()>>>0),f9=0;function s9(e,r,a){return e.call.apply(e.bind,arguments)}function u9(e,r,a){if(!e)throw Error();if(2<arguments.length){var t=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,t),e.apply(r,n)}}return function(){return e.apply(r,arguments)}}function Ir(e,r,a){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ir=s9:Ir=u9,Ir.apply(null,arguments)}function ZA(e,r){var a=Array.prototype.slice.call(arguments,1);return function(){var t=a.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function or(e,r){function a(){}a.prototype=r.prototype,e.$=r.prototype,e.prototype=new a,e.prototype.constructor=e,e.ac=function(t,n,i){for(var A=Array(arguments.length-2),o=2;o<arguments.length;o++)A[o-2]=arguments[o];return r.prototype[n].apply(t,A)}}function tt(){this.s=this.s,this.o=this.o}var l9=0;tt.prototype.s=!1;tt.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),l9!=0)&&o9(this)};tt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const b8=Array.prototype.indexOf?function(e,r){return Array.prototype.indexOf.call(e,r,void 0)}:function(e,r){if(typeof e=="string")return typeof r!="string"||r.length!=1?-1:e.indexOf(r,0);for(let a=0;a<e.length;a++)if(a in e&&e[a]===r)return a;return-1};function Jl(e){const r=e.length;if(0<r){const a=Array(r);for(let t=0;t<r;t++)a[t]=e[t];return a}return[]}function Qd(e,r){for(let a=1;a<arguments.length;a++){const t=arguments[a];if(Bf(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let A=0;A<i;A++)e[n+A]=t[A]}else e.push(t)}}function _r(e,r){this.type=e,this.g=this.target=r,this.defaultPrevented=!1}_r.prototype.h=function(){this.defaultPrevented=!0};var c9=function(){if(!t0.addEventListener||!Object.defineProperty)return!1;var e=!1,r=Object.defineProperty({},"passive",{get:function(){e=!0}});try{t0.addEventListener("test",()=>{},r),t0.removeEventListener("test",()=>{},r)}catch{}return e}();function h2(e){return/^[\s\xa0]*$/.test(e)}function Zf(){var e=t0.navigator;return e&&(e=e.userAgent)?e:""}function Fe(e){return Zf().indexOf(e)!=-1}function $l(e){return $l[" "](e),e}$l[" "]=function(){};function d9(e,r){var a=i7;return Object.prototype.hasOwnProperty.call(a,e)?a[e]:a[e]=r(e)}var h9=Fe("Opera"),Gn=Fe("Trident")||Fe("MSIE"),g8=Fe("Edge"),v1=g8||Gn,m8=Fe("Gecko")&&!(Zf().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge"))&&!(Fe("Trident")||Fe("MSIE"))&&!Fe("Edge"),b9=Zf().toLowerCase().indexOf("webkit")!=-1&&!Fe("Edge");function p8(){var e=t0.document;return e?e.documentMode:void 0}var k1;r:{var Ls="",Ys=function(){var e=Zf();if(m8)return/rv:([^\);]+)(\)|;)/.exec(e);if(g8)return/Edge\/([\d\.]+)/.exec(e);if(Gn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(b9)return/WebKit\/(\S+)/.exec(e);if(h9)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Ys&&(Ls=Ys?Ys[1]:""),Gn){var Qs=p8();if(Qs!=null&&Qs>parseFloat(Ls)){k1=String(Qs);break r}}k1=Ls}var w1;if(t0.document&&Gn){var Hd=p8();w1=Hd||parseInt(k1,10)||void 0}else w1=void 0;var g9=w1;function b2(e,r){if(_r.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var a=this.type=e.type,t=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=r,r=e.relatedTarget){if(m8){r:{try{$l(r.nodeName);var n=!0;break r}catch{}n=!1}n||(r=null)}}else a=="mouseover"?r=e.fromElement:a=="mouseout"&&(r=e.toElement);this.relatedTarget=r,t?(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:m9[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&b2.$.h.call(this)}}or(b2,_r);var m9={2:"touch",3:"pen",4:"mouse"};b2.prototype.h=function(){b2.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var P2="closure_listenable_"+(1e6*Math.random()|0),p9=0;function v9(e,r,a,t,n){this.listener=e,this.proxy=null,this.src=r,this.type=a,this.capture=!!t,this.la=n,this.key=++p9,this.fa=this.ia=!1}function Rf(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Kl(e,r,a){for(const t in e)r.call(a,e[t],t,e)}function k9(e,r){for(const a in e)r.call(void 0,e[a],a,e)}function v8(e){const r={};for(const a in e)r[a]=e[a];return r}const zd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k8(e,r){let a,t;for(let n=1;n<arguments.length;n++){t=arguments[n];for(a in t)e[a]=t[a];for(let i=0;i<zd.length;i++)a=zd[i],Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}}function Tf(e){this.src=e,this.g={},this.h=0}Tf.prototype.add=function(e,r,a,t,n){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var A=E1(e,r,t,n);return-1<A?(r=e[A],a||(r.ia=!1)):(r=new v9(r,this.src,i,!!t,n),r.ia=a,e.push(r)),r};function y1(e,r){var a=r.type;if(a in e.g){var t=e.g[a],n=b8(t,r),i;(i=0<=n)&&Array.prototype.splice.call(t,n,1),i&&(Rf(r),e.g[a].length==0&&(delete e.g[a],e.h--))}}function E1(e,r,a,t){for(var n=0;n<e.length;++n){var i=e[n];if(!i.fa&&i.listener==r&&i.capture==!!a&&i.la==t)return n}return-1}var ql="closure_lm_"+(1e6*Math.random()|0),Hs={};function w8(e,r,a,t,n){if(t&&t.once)return E8(e,r,a,t,n);if(Array.isArray(r)){for(var i=0;i<r.length;i++)w8(e,r[i],a,t,n);return null}return a=ac(a),e&&e[P2]?e.O(r,a,x2(t)?!!t.capture:!!t,n):y8(e,r,a,!1,t,n)}function y8(e,r,a,t,n,i){if(!r)throw Error("Invalid event type");var A=x2(n)?!!n.capture:!!n,o=ec(e);if(o||(e[ql]=o=new Tf(e)),a=o.add(r,a,t,A,i),a.proxy)return a;if(t=w9(),a.proxy=t,t.src=e,t.listener=a,e.addEventListener)c9||(n=A),n===void 0&&(n=!1),e.addEventListener(r.toString(),t,n);else if(e.attachEvent)e.attachEvent(_8(r.toString()),t);else if(e.addListener&&e.removeListener)e.addListener(t);else throw Error("addEventListener and attachEvent are unavailable.");return a}function w9(){function e(a){return r.call(e.src,e.listener,a)}const r=y9;return e}function E8(e,r,a,t,n){if(Array.isArray(r)){for(var i=0;i<r.length;i++)E8(e,r[i],a,t,n);return null}return a=ac(a),e&&e[P2]?e.P(r,a,x2(t)?!!t.capture:!!t,n):y8(e,r,a,!0,t,n)}function I8(e,r,a,t,n){if(Array.isArray(r))for(var i=0;i<r.length;i++)I8(e,r[i],a,t,n);else t=x2(t)?!!t.capture:!!t,a=ac(a),e&&e[P2]?(e=e.i,r=String(r).toString(),r in e.g&&(i=e.g[r],a=E1(i,a,t,n),-1<a&&(Rf(i[a]),Array.prototype.splice.call(i,a,1),i.length==0&&(delete e.g[r],e.h--)))):e&&(e=ec(e))&&(r=e.g[r.toString()],e=-1,r&&(e=E1(r,a,t,n)),(a=-1<e?r[e]:null)&&rc(a))}function rc(e){if(typeof e!="number"&&e&&!e.fa){var r=e.src;if(r&&r[P2])y1(r.i,e);else{var a=e.type,t=e.proxy;r.removeEventListener?r.removeEventListener(a,t,e.capture):r.detachEvent?r.detachEvent(_8(a),t):r.addListener&&r.removeListener&&r.removeListener(t),(a=ec(r))?(y1(a,e),a.h==0&&(a.src=null,r[ql]=null)):Rf(e)}}}function _8(e){return e in Hs?Hs[e]:Hs[e]="on"+e}function y9(e,r){if(e.fa)e=!0;else{r=new b2(r,this);var a=e.listener,t=e.la||e.src;e.ia&&rc(e),e=a.call(t,r)}return e}function ec(e){return e=e[ql],e instanceof Tf?e:null}var zs="__closure_events_fn_"+(1e9*Math.random()>>>0);function ac(e){return typeof e=="function"?e:(e[zs]||(e[zs]=function(r){return e.handleEvent(r)}),e[zs])}function Ar(){tt.call(this),this.i=new Tf(this),this.S=this,this.J=null}or(Ar,tt);Ar.prototype[P2]=!0;Ar.prototype.removeEventListener=function(e,r,a,t){I8(this,e,r,a,t)};function hr(e,r){var a,t=e.J;if(t)for(a=[];t;t=t.J)a.push(t);if(e=e.S,t=r.type||r,typeof r=="string")r=new _r(r,e);else if(r instanceof _r)r.target=r.target||e;else{var n=r;r=new _r(t,e),k8(r,n)}if(n=!0,a)for(var i=a.length-1;0<=i;i--){var A=r.g=a[i];n=RA(A,t,!0,r)&&n}if(A=r.g=e,n=RA(A,t,!0,r)&&n,n=RA(A,t,!1,r)&&n,a)for(i=0;i<a.length;i++)A=r.g=a[i],n=RA(A,t,!1,r)&&n}Ar.prototype.N=function(){if(Ar.$.N.call(this),this.i){var e=this.i,r;for(r in e.g){for(var a=e.g[r],t=0;t<a.length;t++)Rf(a[t]);delete e.g[r],e.h--}}this.J=null};Ar.prototype.O=function(e,r,a,t){return this.i.add(String(e),r,!1,a,t)};Ar.prototype.P=function(e,r,a,t){return this.i.add(String(e),r,!0,a,t)};function RA(e,r,a,t){if(r=e.i.g[String(r)],!r)return!0;r=r.concat();for(var n=!0,i=0;i<r.length;++i){var A=r[i];if(A&&!A.fa&&A.capture==a){var o=A.listener,f=A.la||A.src;A.ia&&y1(e.i,A),n=o.call(f,t)!==!1&&n}}return n&&!t.defaultPrevented}var tc=t0.JSON.stringify;class E9{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return 0<this.h?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function I9(){var e=nc;let r=null;return e.g&&(r=e.g,e.g=e.g.next,e.g||(e.h=null),r.next=null),r}class _9{constructor(){this.h=this.g=null}add(r,a){const t=C8.get();t.set(r,a),this.h?this.h.next=t:this.g=t,this.h=t}}var C8=new E9(()=>new C9,e=>e.reset());class C9{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}function B9(e){var r=1;e=e.split(":");const a=[];for(;0<r&&e.length;)a.push(e.shift()),r--;return e.length&&a.push(e.join(":")),a}function Z9(e){t0.setTimeout(()=>{throw e},0)}let g2,m2=!1,nc=new _9,B8=()=>{const e=t0.Promise.resolve(void 0);g2=()=>{e.then(R9)}};var R9=()=>{for(var e;e=I9();){try{e.h.call(e.g)}catch(a){Z9(a)}var r=C8;r.j(e),100>r.h&&(r.h++,e.next=r.g,r.g=e)}m2=!1};function Wf(e,r){Ar.call(this),this.h=e||1,this.g=r||t0,this.j=Ir(this.qb,this),this.l=Date.now()}or(Wf,Ar);D=Wf.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),hr(this,"tick"),this.ga&&(ic(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ic(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}D.N=function(){Wf.$.N.call(this),ic(this),delete this.g};function Ac(e,r,a){if(typeof e=="function")a&&(e=Ir(e,a));else if(e&&typeof e.handleEvent=="function")e=Ir(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(r)?-1:t0.setTimeout(e,r||0)}function Z8(e){e.g=Ac(()=>{e.g=null,e.i&&(e.i=!1,Z8(e))},e.j);const r=e.h;e.h=null,e.m.apply(null,r)}class T9 extends tt{constructor(r,a){super(),this.m=r,this.j=a,this.h=null,this.i=!1,this.g=null}l(r){this.h=arguments,this.g?this.i=!0:Z8(this)}N(){super.N(),this.g&&(t0.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function p2(e){tt.call(this),this.h=e,this.g={}}or(p2,tt);var Jd=[];function R8(e,r,a,t){Array.isArray(a)||(a&&(Jd[0]=a.toString()),a=Jd);for(var n=0;n<a.length;n++){var i=w8(r,a[n],t||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function T8(e){Kl(e.g,function(r,a){this.g.hasOwnProperty(a)&&rc(r)},e),e.g={}}p2.prototype.N=function(){p2.$.N.call(this),T8(this)};p2.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Nf(){this.g=!0}Nf.prototype.Ea=function(){this.g=!1};function W9(e,r,a,t,n,i){e.info(function(){if(e.g)if(i)for(var A="",o=i.split("&"),f=0;f<o.length;f++){var s=o[f].split("=");if(1<s.length){var u=s[0];s=s[1];var c=u.split("_");A=2<=c.length&&c[1]=="type"?A+(u+"="+s+"&"):A+(u+"=redacted&")}}else A=null;else A=i;return"XMLHTTP REQ ("+t+") [attempt "+n+"]: "+r+`
`+a+`
`+A})}function N9(e,r,a,t,n,i,A){e.info(function(){return"XMLHTTP RESP ("+t+") [ attempt "+n+"]: "+r+`
`+a+`
`+i+" "+A})}function gn(e,r,a,t){e.info(function(){return"XMLHTTP TEXT ("+r+"): "+S9(e,a)+(t?" "+t:"")})}function F9(e,r){e.info(function(){return"TIMEOUT: "+r})}Nf.prototype.info=function(){};function S9(e,r){if(!e.g)return r;if(!r)return null;try{var a=JSON.parse(r);if(a){for(e=0;e<a.length;e++)if(Array.isArray(a[e])){var t=a[e];if(!(2>t.length)){var n=t[1];if(Array.isArray(n)&&!(1>n.length)){var i=n[0];if(i!="noop"&&i!="stop"&&i!="close")for(var A=1;A<n.length;A++)n[A]=""}}}}return tc(a)}catch{return r}}var jt={},$d=null;function Ff(){return $d=$d||new Ar}jt.Ta="serverreachability";function W8(e){_r.call(this,jt.Ta,e)}or(W8,_r);function v2(e){const r=Ff();hr(r,new W8(r))}jt.STAT_EVENT="statevent";function N8(e,r){_r.call(this,jt.STAT_EVENT,e),this.stat=r}or(N8,_r);function Fr(e){const r=Ff();hr(r,new N8(r,e))}jt.Ua="timingevent";function F8(e,r){_r.call(this,jt.Ua,e),this.size=r}or(F8,_r);function O2(e,r){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return t0.setTimeout(function(){e()},r)}var Sf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},S8={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function oc(){}oc.prototype.h=null;function Kd(e){return e.h||(e.h=e.i())}function V8(){}var U2={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fc(){_r.call(this,"d")}or(fc,_r);function sc(){_r.call(this,"c")}or(sc,_r);var I1;function Vf(){}or(Vf,oc);Vf.prototype.g=function(){return new XMLHttpRequest};Vf.prototype.i=function(){return{}};I1=new Vf;function j2(e,r,a,t){this.l=e,this.j=r,this.m=a,this.W=t||1,this.U=new p2(this),this.P=V9,e=v1?125:void 0,this.V=new Wf(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new D8}function D8(){this.i=null,this.g="",this.h=!1}var V9=45e3,_1={},Do={};D=j2.prototype;D.setTimeout=function(e){this.P=e};function C1(e,r,a){e.L=1,e.v=Gf(oa(r)),e.s=a,e.S=!0,G8(e,null)}function G8(e,r){e.G=Date.now(),L2(e),e.A=oa(e.v);var a=e.A,t=e.W;Array.isArray(t)||(t=[String(t)]),L8(a.i,"t",t),e.C=0,a=e.l.J,e.h=new D8,e.g=c5(e.l,a?r:null,!e.s),0<e.O&&(e.M=new T9(Ir(e.Pa,e,e.g),e.O)),R8(e.U,e.g,"readystatechange",e.nb),r=e.I?v8(e.I):{},e.s?(e.u||(e.u="POST"),r["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,r)):(e.u="GET",e.g.ha(e.A,e.u,null,r)),v2(),W9(e.j,e.u,e.A,e.m,e.W,e.s)}D.nb=function(e){e=e.target;const r=this.M;r&&Se(e)==3?r.l():this.Pa(e)};D.Pa=function(e){try{if(e==this.g)r:{const u=Se(this.g);var r=this.g.Ia();const c=this.g.da();if(!(3>u)&&(u!=3||v1||this.g&&(this.h.h||this.g.ja()||ah(this.g)))){this.J||u!=4||r==7||(r==8||0>=c?v2(3):v2(2)),Df(this);var a=this.g.da();this.ca=a;e:if(X8(this)){var t=ah(this.g);e="";var n=t.length,i=Se(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ht(this),xi(this);var A="";break e}this.h.i=new t0.TextDecoder}for(r=0;r<n;r++)this.h.h=!0,e+=this.h.i.decode(t[r],{stream:i&&r==n-1});t.splice(0,n),this.h.g+=e,this.C=0,A=this.h.g}else A=this.g.ja();if(this.i=a==200,N9(this.j,this.u,this.A,this.m,this.W,u,a),this.i){if(this.aa&&!this.K){e:{if(this.g){var o,f=this.g;if((o=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!h2(o)){var s=o;break e}}s=null}if(a=s)gn(this.j,this.m,a,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,B1(this,a);else{this.i=!1,this.o=3,Fr(12),ht(this),xi(this);break r}}this.S?(M8(this,u,A),v1&&this.i&&u==3&&(R8(this.U,this.V,"tick",this.mb),this.V.start())):(gn(this.j,this.m,A,null),B1(this,A)),u==4&&ht(this),this.i&&!this.J&&(u==4?f5(this.l,this):(this.i=!1,L2(this)))}else a7(this.g),a==400&&0<A.indexOf("Unknown SID")?(this.o=3,Fr(12)):(this.o=0,Fr(13)),ht(this),xi(this)}}}catch{}finally{}};function X8(e){return e.g?e.u=="GET"&&e.L!=2&&e.l.Ha:!1}function M8(e,r,a){let t=!0,n;for(;!e.J&&e.C<a.length;)if(n=D9(e,a),n==Do){r==4&&(e.o=4,Fr(14),t=!1),gn(e.j,e.m,null,"[Incomplete Response]");break}else if(n==_1){e.o=4,Fr(15),gn(e.j,e.m,a,"[Invalid Chunk]"),t=!1;break}else gn(e.j,e.m,n,null),B1(e,n);X8(e)&&n!=Do&&n!=_1&&(e.h.g="",e.C=0),r!=4||a.length!=0||e.h.h||(e.o=1,Fr(16),t=!1),e.i=e.i&&t,t?0<a.length&&!e.ba&&(e.ba=!0,r=e.l,r.g==e&&r.ca&&!r.M&&(r.l.info("Great, no buffering proxy detected. Bytes received: "+a.length),bc(r),r.M=!0,Fr(11))):(gn(e.j,e.m,a,"[Invalid Chunked Response]"),ht(e),xi(e))}D.mb=function(){if(this.g){var e=Se(this.g),r=this.g.ja();this.C<r.length&&(Df(this),M8(this,e,r),this.i&&e!=4&&L2(this))}};function D9(e,r){var a=e.C,t=r.indexOf(`
`,a);return t==-1?Do:(a=Number(r.substring(a,t)),isNaN(a)?_1:(t+=1,t+a>r.length?Do:(r=r.slice(t,t+a),e.C=t+a,r)))}D.cancel=function(){this.J=!0,ht(this)};function L2(e){e.Y=Date.now()+e.P,x8(e,e.P)}function x8(e,r){if(e.B!=null)throw Error("WatchDog timer not null");e.B=O2(Ir(e.lb,e),r)}function Df(e){e.B&&(t0.clearTimeout(e.B),e.B=null)}D.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(F9(this.j,this.A),this.L!=2&&(v2(),Fr(17)),ht(this),this.o=2,xi(this)):x8(this,this.Y-e)};function xi(e){e.l.H==0||e.J||f5(e.l,e)}function ht(e){Df(e);var r=e.M;r&&typeof r.sa=="function"&&r.sa(),e.M=null,ic(e.V),T8(e.U),e.g&&(r=e.g,e.g=null,r.abort(),r.sa())}function B1(e,r){try{var a=e.l;if(a.H!=0&&(a.g==e||Z1(a.i,e))){if(!e.K&&Z1(a.i,e)&&a.H==3){try{var t=a.Ja.g.parse(r)}catch{t=null}if(Array.isArray(t)&&t.length==3){var n=t;if(n[0]==0){r:if(!a.u){if(a.g)if(a.g.G+3e3<e.G)Mo(a),xf(a);else break r;hc(a),Fr(18)}}else a.Fa=n[1],0<a.Fa-a.V&&37500>n[2]&&a.G&&a.A==0&&!a.v&&(a.v=O2(Ir(a.ib,a),6e3));if(1>=H8(a.i)&&a.oa){try{a.oa()}catch{}a.oa=void 0}}else bt(a,11)}else if((e.K||a.g==e)&&Mo(a),!h2(r))for(n=a.Ja.g.parse(r),r=0;r<n.length;r++){let s=n[r];if(a.V=s[0],s=s[1],a.H==2)if(s[0]=="c"){a.K=s[1],a.pa=s[2];const u=s[3];u!=null&&(a.ra=u,a.l.info("VER="+a.ra));const c=s[4];c!=null&&(a.Ga=c,a.l.info("SVER="+a.Ga));const d=s[5];d!=null&&typeof d=="number"&&0<d&&(t=1.5*d,a.L=t,a.l.info("backChannelRequestTimeoutMs_="+t)),t=a;const b=e.g;if(b){const w=b.g?b.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=t.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(uc(i,i.h),i.h=null))}if(t.F){const y=b.g?b.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(t.Da=y,B0(t.I,t.F,y))}}a.H=3,a.h&&a.h.Ba(),a.ca&&(a.S=Date.now()-e.G,a.l.info("Handshake RTT: "+a.S+"ms")),t=a;var A=e;if(t.wa=l5(t,t.J?t.pa:null,t.Y),A.K){z8(t.i,A);var o=A,f=t.L;f&&o.setTimeout(f),o.B&&(Df(o),L2(o)),t.g=A}else A5(t);0<a.j.length&&Pf(a)}else s[0]!="stop"&&s[0]!="close"||bt(a,7);else a.H==3&&(s[0]=="stop"||s[0]=="close"?s[0]=="stop"?bt(a,7):dc(a):s[0]!="noop"&&a.h&&a.h.Aa(s),a.A=0)}}v2(4)}catch{}}function G9(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(Bf(e)){for(var r=[],a=e.length,t=0;t<a;t++)r.push(e[t]);return r}r=[],a=0;for(t in e)r[a++]=e[t];return r}function X9(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(Bf(e)||typeof e=="string"){var r=[];e=e.length;for(var a=0;a<e;a++)r.push(a);return r}r=[],a=0;for(const t in e)r[a++]=t;return r}}}function P8(e,r){if(e.forEach&&typeof e.forEach=="function")e.forEach(r,void 0);else if(Bf(e)||typeof e=="string")Array.prototype.forEach.call(e,r,void 0);else for(var a=X9(e),t=G9(e),n=t.length,i=0;i<n;i++)r.call(void 0,t[i],a&&a[i],e)}var O8=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function M9(e,r){if(e){e=e.split("&");for(var a=0;a<e.length;a++){var t=e[a].indexOf("="),n=null;if(0<=t){var i=e[a].substring(0,t);n=e[a].substring(t+1)}else i=e[a];r(i,n?decodeURIComponent(n.replace(/\+/g," ")):"")}}}function kt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof kt){this.h=e.h,Go(this,e.j),this.s=e.s,this.g=e.g,Xo(this,e.m),this.l=e.l;var r=e.i,a=new k2;a.i=r.i,r.g&&(a.g=new Map(r.g),a.h=r.h),qd(this,a),this.o=e.o}else e&&(r=String(e).match(O8))?(this.h=!1,Go(this,r[1]||"",!0),this.s=Bi(r[2]||""),this.g=Bi(r[3]||"",!0),Xo(this,r[4]),this.l=Bi(r[5]||"",!0),qd(this,r[6]||"",!0),this.o=Bi(r[7]||"")):(this.h=!1,this.i=new k2(null,this.h))}kt.prototype.toString=function(){var e=[],r=this.j;r&&e.push(Zi(r,rh,!0),":");var a=this.g;return(a||r=="file")&&(e.push("//"),(r=this.s)&&e.push(Zi(r,rh,!0),"@"),e.push(encodeURIComponent(String(a)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.m,a!=null&&e.push(":",String(a))),(a=this.l)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(Zi(a,a.charAt(0)=="/"?O9:P9,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.o)&&e.push("#",Zi(a,j9)),e.join("")};function oa(e){return new kt(e)}function Go(e,r,a){e.j=a?Bi(r,!0):r,e.j&&(e.j=e.j.replace(/:$/,""))}function Xo(e,r){if(r){if(r=Number(r),isNaN(r)||0>r)throw Error("Bad port number "+r);e.m=r}else e.m=null}function qd(e,r,a){r instanceof k2?(e.i=r,L9(e.i,e.h)):(a||(r=Zi(r,U9)),e.i=new k2(r,e.h))}function B0(e,r,a){e.i.set(r,a)}function Gf(e){return B0(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Bi(e,r){return e?r?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Zi(e,r,a){return typeof e=="string"?(e=encodeURI(e).replace(r,x9),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function x9(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var rh=/[#\/\?@]/g,P9=/[#\?:]/g,O9=/[#\?]/g,U9=/[#\?@]/g,j9=/#/g;function k2(e,r){this.h=this.g=null,this.i=e||null,this.j=!!r}function nt(e){e.g||(e.g=new Map,e.h=0,e.i&&M9(e.i,function(r,a){e.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}D=k2.prototype;D.add=function(e,r){nt(this),this.i=null,e=Kn(this,e);var a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(r),this.h+=1,this};function U8(e,r){nt(e),r=Kn(e,r),e.g.has(r)&&(e.i=null,e.h-=e.g.get(r).length,e.g.delete(r))}function j8(e,r){return nt(e),r=Kn(e,r),e.g.has(r)}D.forEach=function(e,r){nt(this),this.g.forEach(function(a,t){a.forEach(function(n){e.call(r,n,t,this)},this)},this)};D.ta=function(){nt(this);const e=Array.from(this.g.values()),r=Array.from(this.g.keys()),a=[];for(let t=0;t<r.length;t++){const n=e[t];for(let i=0;i<n.length;i++)a.push(r[t])}return a};D.Z=function(e){nt(this);let r=[];if(typeof e=="string")j8(this,e)&&(r=r.concat(this.g.get(Kn(this,e))));else{e=Array.from(this.g.values());for(let a=0;a<e.length;a++)r=r.concat(e[a])}return r};D.set=function(e,r){return nt(this),this.i=null,e=Kn(this,e),j8(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[r]),this.h+=1,this};D.get=function(e,r){return e?(e=this.Z(e),0<e.length?String(e[0]):r):r};function L8(e,r,a){U8(e,r),0<a.length&&(e.i=null,e.g.set(Kn(e,r),Jl(a)),e.h+=a.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],r=Array.from(this.g.keys());for(var a=0;a<r.length;a++){var t=r[a];const i=encodeURIComponent(String(t)),A=this.Z(t);for(t=0;t<A.length;t++){var n=i;A[t]!==""&&(n+="="+encodeURIComponent(String(A[t]))),e.push(n)}}return this.i=e.join("&")};function Kn(e,r){return r=String(r),e.j&&(r=r.toLowerCase()),r}function L9(e,r){r&&!e.j&&(nt(e),e.i=null,e.g.forEach(function(a,t){var n=t.toLowerCase();t!=n&&(U8(this,t),L8(this,n,a))},e)),e.j=r}var Y9=class{constructor(e,r){this.g=e,this.map=r}};function Y8(e){this.l=e||Q9,t0.PerformanceNavigationTiming?(e=t0.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(t0.g&&t0.g.Ka&&t0.g.Ka()&&t0.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Q9=10;function Q8(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function H8(e){return e.h?1:e.g?e.g.size:0}function Z1(e,r){return e.h?e.h==r:e.g?e.g.has(r):!1}function uc(e,r){e.g?e.g.add(r):e.h=r}function z8(e,r){e.h&&e.h==r?e.h=null:e.g&&e.g.has(r)&&e.g.delete(r)}Y8.prototype.cancel=function(){if(this.i=J8(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function J8(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let r=e.i;for(const a of e.g.values())r=r.concat(a.F);return r}return Jl(e.i)}var H9=class{stringify(e){return t0.JSON.stringify(e,void 0)}parse(e){return t0.JSON.parse(e,void 0)}};function z9(){this.g=new H9}function J9(e,r,a){const t=a||"";try{P8(e,function(n,i){let A=n;x2(n)&&(A=tc(n)),r.push(t+i+"="+encodeURIComponent(A))})}catch(n){throw r.push(t+"type="+encodeURIComponent("_badmap")),n}}function $9(e,r){const a=new Nf;if(t0.Image){const t=new Image;t.onload=ZA(TA,a,t,"TestLoadImage: loaded",!0,r),t.onerror=ZA(TA,a,t,"TestLoadImage: error",!1,r),t.onabort=ZA(TA,a,t,"TestLoadImage: abort",!1,r),t.ontimeout=ZA(TA,a,t,"TestLoadImage: timeout",!1,r),t0.setTimeout(function(){t.ontimeout&&t.ontimeout()},1e4),t.src=e}else r(!1)}function TA(e,r,a,t,n){try{r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null,n(t)}catch{}}function Y2(e){this.l=e.fc||null,this.j=e.ob||!1}or(Y2,oc);Y2.prototype.g=function(){return new Xf(this.l,this.j)};Y2.prototype.i=function(e){return function(){return e}}({});function Xf(e,r){Ar.call(this),this.F=e,this.u=r,this.m=void 0,this.readyState=lc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}or(Xf,Ar);var lc=0;D=Xf.prototype;D.open=function(e,r){if(this.readyState!=lc)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=r,this.readyState=1,w2(this)};D.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const r={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(r.body=e),(this.F||t0).fetch(new Request(this.B,r)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Q2(this)),this.readyState=lc};D.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,w2(this)),this.g&&(this.readyState=3,w2(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof t0.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$8(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function $8(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}D.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var r=e.value?e.value:new Uint8Array(0);(r=this.A.decode(r,{stream:!e.done}))&&(this.response=this.responseText+=r)}e.done?Q2(this):w2(this),this.readyState==3&&$8(this)}};D.Za=function(e){this.g&&(this.response=this.responseText=e,Q2(this))};D.Ya=function(e){this.g&&(this.response=e,Q2(this))};D.ka=function(){this.g&&Q2(this)};function Q2(e){e.readyState=4,e.l=null,e.j=null,e.A=null,w2(e)}D.setRequestHeader=function(e,r){this.v.append(e,r)};D.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=r.next();return e.join(`\r
`)};function w2(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Xf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var K9=t0.JSON.parse;function P0(e){Ar.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=K8,this.L=this.M=!1}or(P0,Ar);var K8="",q9=/^https?$/i,r7=["POST","PUT"];D=P0.prototype;D.Oa=function(e){this.M=e};D.ha=function(e,r,a,t){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);r=r?r.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():I1.g(),this.C=this.u?Kd(this.u):Kd(I1),this.g.onreadystatechange=Ir(this.La,this);try{this.G=!0,this.g.open(r,String(e),!0),this.G=!1}catch(i){eh(this,i);return}if(e=a||"",a=new Map(this.headers),t)if(Object.getPrototypeOf(t)===Object.prototype)for(var n in t)a.set(n,t[n]);else if(typeof t.keys=="function"&&typeof t.get=="function")for(const i of t.keys())a.set(i,t.get(i));else throw Error("Unknown input type for opt_headers: "+String(t));t=Array.from(a.keys()).find(i=>i.toLowerCase()=="content-type"),n=t0.FormData&&e instanceof t0.FormData,!(0<=b8(r7,r))||t||n||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,A]of a)this.g.setRequestHeader(i,A);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{e5(this),0<this.B&&((this.L=e7(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ir(this.ua,this)):this.A=Ac(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){eh(this,i)}};function e7(e){return Gn&&typeof e.timeout=="number"&&e.ontimeout!==void 0}D.ua=function(){typeof zl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,hr(this,"timeout"),this.abort(8))};function eh(e,r){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=r,e.m=5,q8(e),Mf(e)}function q8(e){e.F||(e.F=!0,hr(e,"complete"),hr(e,"error"))}D.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,hr(this,"complete"),hr(this,"abort"),Mf(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Mf(this,!0)),P0.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?r5(this):this.kb())};D.kb=function(){r5(this)};function r5(e){if(e.h&&typeof zl<"u"&&(!e.C[1]||Se(e)!=4||e.da()!=2)){if(e.v&&Se(e)==4)Ac(e.La,0,e);else if(hr(e,"readystatechange"),Se(e)==4){e.h=!1;try{const A=e.da();r:switch(A){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break r;default:r=!1}var a;if(!(a=r)){var t;if(t=A===0){var n=String(e.I).match(O8)[1]||null;!n&&t0.self&&t0.self.location&&(n=t0.self.location.protocol.slice(0,-1)),t=!q9.test(n?n.toLowerCase():"")}a=t}if(a)hr(e,"complete"),hr(e,"success");else{e.m=6;try{var i=2<Se(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",q8(e)}}finally{Mf(e)}}}}function Mf(e,r){if(e.g){e5(e);const a=e.g,t=e.C[0]?()=>{}:null;e.g=null,e.C=null,r||hr(e,"ready");try{a.onreadystatechange=t}catch{}}}function e5(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(t0.clearTimeout(e.A),e.A=null)}D.isActive=function(){return!!this.g};function Se(e){return e.g?e.g.readyState:0}D.da=function(){try{return 2<Se(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(e){if(this.g){var r=this.g.responseText;return e&&r.indexOf(e)==0&&(r=r.substring(e.length)),K9(r)}};function ah(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case K8:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function a7(e){const r={};e=(e.g&&2<=Se(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let t=0;t<e.length;t++){if(h2(e[t]))continue;var a=B9(e[t]);const n=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const i=r[n]||[];r[n]=i,i.push(a)}k9(r,function(t){return t.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function a5(e){let r="";return Kl(e,function(a,t){r+=t,r+=":",r+=a,r+=`\r
`}),r}function cc(e,r,a){r:{for(t in a){var t=!1;break r}t=!0}t||(a=a5(a),typeof e=="string"?a!=null&&encodeURIComponent(String(a)):B0(e,r,a))}function pi(e,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||r}function t5(e){this.Ga=0,this.j=[],this.l=new Nf,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=pi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=pi("baseRetryDelayMs",5e3,e),this.hb=pi("retryDelaySeedMs",1e4,e),this.eb=pi("forwardChannelMaxRetries",2,e),this.xa=pi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new Y8(e&&e.concurrentRequestLimit),this.Ja=new z9,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=t5.prototype;D.ra=8;D.H=1;function dc(e){if(n5(e),e.H==3){var r=e.W++,a=oa(e.I);if(B0(a,"SID",e.K),B0(a,"RID",r),B0(a,"TYPE","terminate"),H2(e,a),r=new j2(e,e.l,r),r.L=2,r.v=Gf(oa(a)),a=!1,t0.navigator&&t0.navigator.sendBeacon)try{a=t0.navigator.sendBeacon(r.v.toString(),"")}catch{}!a&&t0.Image&&(new Image().src=r.v,a=!0),a||(r.g=c5(r.l,null),r.g.ha(r.v)),r.G=Date.now(),L2(r)}u5(e)}function xf(e){e.g&&(bc(e),e.g.cancel(),e.g=null)}function n5(e){xf(e),e.u&&(t0.clearTimeout(e.u),e.u=null),Mo(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&t0.clearTimeout(e.m),e.m=null)}function Pf(e){if(!Q8(e.i)&&!e.m){e.m=!0;var r=e.Na;g2||B8(),m2||(g2(),m2=!0),nc.add(r,e),e.C=0}}function t7(e,r){return H8(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=r.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=O2(Ir(e.Na,e,r),s5(e,e.C)),e.C++,!0)}D.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const n=new j2(this,this.l,e);let i=this.s;if(this.U&&(i?(i=v8(i),k8(i,this.U)):i=this.U),this.o!==null||this.O||(n.I=i,i=null),this.P)r:{for(var r=0,a=0;a<this.j.length;a++){e:{var t=this.j[a];if("__data__"in t.map&&(t=t.map.__data__,typeof t=="string")){t=t.length;break e}t=void 0}if(t===void 0)break;if(r+=t,4096<r){r=a;break r}if(r===4096||a===this.j.length-1){r=a+1;break r}}r=1e3}else r=1e3;r=i5(this,n,r),a=oa(this.I),B0(a,"RID",e),B0(a,"CVER",22),this.F&&B0(a,"X-HTTP-Session-Id",this.F),H2(this,a),i&&(this.O?r="headers="+encodeURIComponent(String(a5(i)))+"&"+r:this.o&&cc(a,this.o,i)),uc(this.i,n),this.bb&&B0(a,"TYPE","init"),this.P?(B0(a,"$req",r),B0(a,"SID","null"),n.aa=!0,C1(n,a,null)):C1(n,a,r),this.H=2}}else this.H==3&&(e?th(this,e):this.j.length==0||Q8(this.i)||th(this))};function th(e,r){var a;r?a=r.m:a=e.W++;const t=oa(e.I);B0(t,"SID",e.K),B0(t,"RID",a),B0(t,"AID",e.V),H2(e,t),e.o&&e.s&&cc(t,e.o,e.s),a=new j2(e,e.l,a,e.C+1),e.o===null&&(a.I=e.s),r&&(e.j=r.F.concat(e.j)),r=i5(e,a,1e3),a.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),uc(e.i,a),C1(a,t,r)}function H2(e,r){e.na&&Kl(e.na,function(a,t){B0(r,t,a)}),e.h&&P8({},function(a,t){B0(r,t,a)})}function i5(e,r,a){a=Math.min(e.j.length,a);var t=e.h?Ir(e.h.Va,e.h,e):null;r:{var n=e.j;let i=-1;for(;;){const A=["count="+a];i==-1?0<a?(i=n[0].g,A.push("ofs="+i)):i=0:A.push("ofs="+i);let o=!0;for(let f=0;f<a;f++){let s=n[f].g;const u=n[f].map;if(s-=i,0>s)i=Math.max(0,n[f].g-100),o=!1;else try{J9(u,A,"req"+s+"_")}catch{t&&t(u)}}if(o){t=A.join("&");break r}}}return e=e.j.splice(0,a),r.F=e,t}function A5(e){if(!e.g&&!e.u){e.ba=1;var r=e.Ma;g2||B8(),m2||(g2(),m2=!0),nc.add(r,e),e.A=0}}function hc(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=O2(Ir(e.Ma,e),s5(e,e.A)),e.A++,!0)}D.Ma=function(){if(this.u=null,o5(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=O2(Ir(this.jb,this),e)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Fr(10),xf(this),o5(this))};function bc(e){e.B!=null&&(t0.clearTimeout(e.B),e.B=null)}function o5(e){e.g=new j2(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var r=oa(e.wa);B0(r,"RID","rpc"),B0(r,"SID",e.K),B0(r,"AID",e.V),B0(r,"CI",e.G?"0":"1"),!e.G&&e.qa&&B0(r,"TO",e.qa),B0(r,"TYPE","xmlhttp"),H2(e,r),e.o&&e.s&&cc(r,e.o,e.s),e.L&&e.g.setTimeout(e.L);var a=e.g;e=e.pa,a.L=1,a.v=Gf(oa(r)),a.s=null,a.S=!0,G8(a,e)}D.ib=function(){this.v!=null&&(this.v=null,xf(this),hc(this),Fr(19))};function Mo(e){e.v!=null&&(t0.clearTimeout(e.v),e.v=null)}function f5(e,r){var a=null;if(e.g==r){Mo(e),bc(e),e.g=null;var t=2}else if(Z1(e.i,r))a=r.F,z8(e.i,r),t=1;else return;if(e.H!=0){if(r.i)if(t==1){a=r.s?r.s.length:0,r=Date.now()-r.G;var n=e.C;t=Ff(),hr(t,new F8(t,a)),Pf(e)}else A5(e);else if(n=r.o,n==3||n==0&&0<r.ca||!(t==1&&t7(e,r)||t==2&&hc(e)))switch(a&&0<a.length&&(r=e.i,r.i=r.i.concat(a)),n){case 1:bt(e,5);break;case 4:bt(e,10);break;case 3:bt(e,6);break;default:bt(e,2)}}}function s5(e,r){let a=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(a*=2),a*r}function bt(e,r){if(e.l.info("Error code "+r),r==2){var a=null;e.h&&(a=null);var t=Ir(e.pb,e);a||(a=new kt("//www.google.com/images/cleardot.gif"),t0.location&&t0.location.protocol=="http"||Go(a,"https"),Gf(a)),$9(a.toString(),t)}else Fr(2);e.H=0,e.h&&e.h.za(r),u5(e),n5(e)}D.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Fr(2)):(this.l.info("Failed to ping google.com"),Fr(1))};function u5(e){if(e.H=0,e.ma=[],e.h){const r=J8(e.i);(r.length!=0||e.j.length!=0)&&(Qd(e.ma,r),Qd(e.ma,e.j),e.i.i.length=0,Jl(e.j),e.j.length=0),e.h.ya()}}function l5(e,r,a){var t=a instanceof kt?oa(a):new kt(a);if(t.g!="")r&&(t.g=r+"."+t.g),Xo(t,t.m);else{var n=t0.location;t=n.protocol,r=r?r+"."+n.hostname:n.hostname,n=+n.port;var i=new kt(null);t&&Go(i,t),r&&(i.g=r),n&&Xo(i,n),a&&(i.l=a),t=i}return a=e.F,r=e.Da,a&&r&&B0(t,a,r),B0(t,"VER",e.ra),H2(e,t),t}function c5(e,r,a){if(r&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return r=a&&e.Ha&&!e.va?new P0(new Y2({ob:!0})):new P0(e.va),r.Oa(e.J),r}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function d5(){}D=d5.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function xo(){if(Gn&&!(10<=Number(g9)))throw Error("Environmental error: no available transport.")}xo.prototype.g=function(e,r){return new ee(e,r)};function ee(e,r){Ar.call(this),this.g=new t5(r),this.l=e,this.h=r&&r.messageUrlParams||null,e=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(e?e["X-WebChannel-Content-Type"]=r.messageContentType:e={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.Ca&&(e?e["X-WebChannel-Client-Profile"]=r.Ca:e={"X-WebChannel-Client-Profile":r.Ca}),this.g.U=e,(e=r&&r.cc)&&!h2(e)&&(this.g.o=e),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!h2(r)&&(this.g.F=r,e=this.h,e!==null&&r in e&&(e=this.h,r in e&&delete e[r])),this.j=new qn(this)}or(ee,Ar);ee.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,r=this.l,a=this.h||void 0;Fr(0),e.Y=r,e.na=a||{},e.G=e.aa,e.I=l5(e,null,e.Y),Pf(e)};ee.prototype.close=function(){dc(this.g)};ee.prototype.u=function(e){var r=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=tc(e),e=a);r.j.push(new Y9(r.fb++,e)),r.H==3&&Pf(r)};ee.prototype.N=function(){this.g.h=null,delete this.j,dc(this.g),delete this.g,ee.$.N.call(this)};function h5(e){fc.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var r=e.__sm__;if(r){r:{for(const a in r){e=a;break r}e=void 0}(this.i=e)&&(e=this.i,r=r!==null&&e in r?r[e]:void 0),this.data=r}else this.data=e}or(h5,fc);function b5(){sc.call(this),this.status=1}or(b5,sc);function qn(e){this.g=e}or(qn,d5);qn.prototype.Ba=function(){hr(this.g,"a")};qn.prototype.Aa=function(e){hr(this.g,new h5(e))};qn.prototype.za=function(e){hr(this.g,new b5)};qn.prototype.ya=function(){hr(this.g,"b")};function n7(){this.blockSize=-1}function _e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}or(_e,n7);_e.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Js(e,r,a){a||(a=0);var t=Array(16);if(typeof r=="string")for(var n=0;16>n;++n)t[n]=r.charCodeAt(a++)|r.charCodeAt(a++)<<8|r.charCodeAt(a++)<<16|r.charCodeAt(a++)<<24;else for(n=0;16>n;++n)t[n]=r[a++]|r[a++]<<8|r[a++]<<16|r[a++]<<24;r=e.g[0],a=e.g[1],n=e.g[2];var i=e.g[3],A=r+(i^a&(n^i))+t[0]+3614090360&4294967295;r=a+(A<<7&4294967295|A>>>25),A=i+(n^r&(a^n))+t[1]+3905402710&4294967295,i=r+(A<<12&4294967295|A>>>20),A=n+(a^i&(r^a))+t[2]+606105819&4294967295,n=i+(A<<17&4294967295|A>>>15),A=a+(r^n&(i^r))+t[3]+3250441966&4294967295,a=n+(A<<22&4294967295|A>>>10),A=r+(i^a&(n^i))+t[4]+4118548399&4294967295,r=a+(A<<7&4294967295|A>>>25),A=i+(n^r&(a^n))+t[5]+1200080426&4294967295,i=r+(A<<12&4294967295|A>>>20),A=n+(a^i&(r^a))+t[6]+2821735955&4294967295,n=i+(A<<17&4294967295|A>>>15),A=a+(r^n&(i^r))+t[7]+4249261313&4294967295,a=n+(A<<22&4294967295|A>>>10),A=r+(i^a&(n^i))+t[8]+1770035416&4294967295,r=a+(A<<7&4294967295|A>>>25),A=i+(n^r&(a^n))+t[9]+2336552879&4294967295,i=r+(A<<12&4294967295|A>>>20),A=n+(a^i&(r^a))+t[10]+4294925233&4294967295,n=i+(A<<17&4294967295|A>>>15),A=a+(r^n&(i^r))+t[11]+2304563134&4294967295,a=n+(A<<22&4294967295|A>>>10),A=r+(i^a&(n^i))+t[12]+1804603682&4294967295,r=a+(A<<7&4294967295|A>>>25),A=i+(n^r&(a^n))+t[13]+4254626195&4294967295,i=r+(A<<12&4294967295|A>>>20),A=n+(a^i&(r^a))+t[14]+2792965006&4294967295,n=i+(A<<17&4294967295|A>>>15),A=a+(r^n&(i^r))+t[15]+1236535329&4294967295,a=n+(A<<22&4294967295|A>>>10),A=r+(n^i&(a^n))+t[1]+4129170786&4294967295,r=a+(A<<5&4294967295|A>>>27),A=i+(a^n&(r^a))+t[6]+3225465664&4294967295,i=r+(A<<9&4294967295|A>>>23),A=n+(r^a&(i^r))+t[11]+643717713&4294967295,n=i+(A<<14&4294967295|A>>>18),A=a+(i^r&(n^i))+t[0]+3921069994&4294967295,a=n+(A<<20&4294967295|A>>>12),A=r+(n^i&(a^n))+t[5]+3593408605&4294967295,r=a+(A<<5&4294967295|A>>>27),A=i+(a^n&(r^a))+t[10]+38016083&4294967295,i=r+(A<<9&4294967295|A>>>23),A=n+(r^a&(i^r))+t[15]+3634488961&4294967295,n=i+(A<<14&4294967295|A>>>18),A=a+(i^r&(n^i))+t[4]+3889429448&4294967295,a=n+(A<<20&4294967295|A>>>12),A=r+(n^i&(a^n))+t[9]+568446438&4294967295,r=a+(A<<5&4294967295|A>>>27),A=i+(a^n&(r^a))+t[14]+3275163606&4294967295,i=r+(A<<9&4294967295|A>>>23),A=n+(r^a&(i^r))+t[3]+4107603335&4294967295,n=i+(A<<14&4294967295|A>>>18),A=a+(i^r&(n^i))+t[8]+1163531501&4294967295,a=n+(A<<20&4294967295|A>>>12),A=r+(n^i&(a^n))+t[13]+2850285829&4294967295,r=a+(A<<5&4294967295|A>>>27),A=i+(a^n&(r^a))+t[2]+4243563512&4294967295,i=r+(A<<9&4294967295|A>>>23),A=n+(r^a&(i^r))+t[7]+1735328473&4294967295,n=i+(A<<14&4294967295|A>>>18),A=a+(i^r&(n^i))+t[12]+2368359562&4294967295,a=n+(A<<20&4294967295|A>>>12),A=r+(a^n^i)+t[5]+4294588738&4294967295,r=a+(A<<4&4294967295|A>>>28),A=i+(r^a^n)+t[8]+2272392833&4294967295,i=r+(A<<11&4294967295|A>>>21),A=n+(i^r^a)+t[11]+1839030562&4294967295,n=i+(A<<16&4294967295|A>>>16),A=a+(n^i^r)+t[14]+4259657740&4294967295,a=n+(A<<23&4294967295|A>>>9),A=r+(a^n^i)+t[1]+2763975236&4294967295,r=a+(A<<4&4294967295|A>>>28),A=i+(r^a^n)+t[4]+1272893353&4294967295,i=r+(A<<11&4294967295|A>>>21),A=n+(i^r^a)+t[7]+4139469664&4294967295,n=i+(A<<16&4294967295|A>>>16),A=a+(n^i^r)+t[10]+3200236656&4294967295,a=n+(A<<23&4294967295|A>>>9),A=r+(a^n^i)+t[13]+681279174&4294967295,r=a+(A<<4&4294967295|A>>>28),A=i+(r^a^n)+t[0]+3936430074&4294967295,i=r+(A<<11&4294967295|A>>>21),A=n+(i^r^a)+t[3]+3572445317&4294967295,n=i+(A<<16&4294967295|A>>>16),A=a+(n^i^r)+t[6]+76029189&4294967295,a=n+(A<<23&4294967295|A>>>9),A=r+(a^n^i)+t[9]+3654602809&4294967295,r=a+(A<<4&4294967295|A>>>28),A=i+(r^a^n)+t[12]+3873151461&4294967295,i=r+(A<<11&4294967295|A>>>21),A=n+(i^r^a)+t[15]+530742520&4294967295,n=i+(A<<16&4294967295|A>>>16),A=a+(n^i^r)+t[2]+3299628645&4294967295,a=n+(A<<23&4294967295|A>>>9),A=r+(n^(a|~i))+t[0]+4096336452&4294967295,r=a+(A<<6&4294967295|A>>>26),A=i+(a^(r|~n))+t[7]+1126891415&4294967295,i=r+(A<<10&4294967295|A>>>22),A=n+(r^(i|~a))+t[14]+2878612391&4294967295,n=i+(A<<15&4294967295|A>>>17),A=a+(i^(n|~r))+t[5]+4237533241&4294967295,a=n+(A<<21&4294967295|A>>>11),A=r+(n^(a|~i))+t[12]+1700485571&4294967295,r=a+(A<<6&4294967295|A>>>26),A=i+(a^(r|~n))+t[3]+2399980690&4294967295,i=r+(A<<10&4294967295|A>>>22),A=n+(r^(i|~a))+t[10]+4293915773&4294967295,n=i+(A<<15&4294967295|A>>>17),A=a+(i^(n|~r))+t[1]+2240044497&4294967295,a=n+(A<<21&4294967295|A>>>11),A=r+(n^(a|~i))+t[8]+1873313359&4294967295,r=a+(A<<6&4294967295|A>>>26),A=i+(a^(r|~n))+t[15]+4264355552&4294967295,i=r+(A<<10&4294967295|A>>>22),A=n+(r^(i|~a))+t[6]+2734768916&4294967295,n=i+(A<<15&4294967295|A>>>17),A=a+(i^(n|~r))+t[13]+1309151649&4294967295,a=n+(A<<21&4294967295|A>>>11),A=r+(n^(a|~i))+t[4]+4149444226&4294967295,r=a+(A<<6&4294967295|A>>>26),A=i+(a^(r|~n))+t[11]+3174756917&4294967295,i=r+(A<<10&4294967295|A>>>22),A=n+(r^(i|~a))+t[2]+718787259&4294967295,n=i+(A<<15&4294967295|A>>>17),A=a+(i^(n|~r))+t[9]+3951481745&4294967295,e.g[0]=e.g[0]+r&4294967295,e.g[1]=e.g[1]+(n+(A<<21&4294967295|A>>>11))&4294967295,e.g[2]=e.g[2]+n&4294967295,e.g[3]=e.g[3]+i&4294967295}_e.prototype.j=function(e,r){r===void 0&&(r=e.length);for(var a=r-this.blockSize,t=this.m,n=this.h,i=0;i<r;){if(n==0)for(;i<=a;)Js(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<r;)if(t[n++]=e.charCodeAt(i++),n==this.blockSize){Js(this,t),n=0;break}}else for(;i<r;)if(t[n++]=e[i++],n==this.blockSize){Js(this,t),n=0;break}}this.h=n,this.i+=r};_e.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var r=1;r<e.length-8;++r)e[r]=0;var a=8*this.i;for(r=e.length-8;r<e.length;++r)e[r]=a&255,a/=256;for(this.j(e),e=Array(16),r=a=0;4>r;++r)for(var t=0;32>t;t+=8)e[a++]=this.g[r]>>>t&255;return e};function k0(e,r){this.h=r;for(var a=[],t=!0,n=e.length-1;0<=n;n--){var i=e[n]|0;t&&i==r||(a[n]=i,t=!1)}this.g=a}var i7={};function gc(e){return-128<=e&&128>e?d9(e,function(r){return new k0([r|0],0>r?-1:0)}):new k0([e|0],0>e?-1:0)}function Ve(e){if(isNaN(e)||!isFinite(e))return In;if(0>e)return cr(Ve(-e));for(var r=[],a=1,t=0;e>=a;t++)r[t]=e/a|0,a*=R1;return new k0(r,0)}function g5(e,r){if(e.length==0)throw Error("number format error: empty string");if(r=r||10,2>r||36<r)throw Error("radix out of range: "+r);if(e.charAt(0)=="-")return cr(g5(e.substring(1),r));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var a=Ve(Math.pow(r,8)),t=In,n=0;n<e.length;n+=8){var i=Math.min(8,e.length-n),A=parseInt(e.substring(n,n+i),r);8>i?(i=Ve(Math.pow(r,i)),t=t.R(i).add(Ve(A))):(t=t.R(a),t=t.add(Ve(A)))}return t}var R1=4294967296,In=gc(0),T1=gc(1),nh=gc(16777216);D=k0.prototype;D.ea=function(){if(Ae(this))return-cr(this).ea();for(var e=0,r=1,a=0;a<this.g.length;a++){var t=this.D(a);e+=(0<=t?t:R1+t)*r,r*=R1}return e};D.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Ke(this))return"0";if(Ae(this))return"-"+cr(this).toString(e);for(var r=Ve(Math.pow(e,6)),a=this,t="";;){var n=Oo(a,r).g;a=Po(a,n.R(r));var i=((0<a.g.length?a.g[0]:a.h)>>>0).toString(e);if(a=n,Ke(a))return i+t;for(;6>i.length;)i="0"+i;t=i+t}};D.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Ke(e){if(e.h!=0)return!1;for(var r=0;r<e.g.length;r++)if(e.g[r]!=0)return!1;return!0}function Ae(e){return e.h==-1}D.X=function(e){return e=Po(this,e),Ae(e)?-1:Ke(e)?0:1};function cr(e){for(var r=e.g.length,a=[],t=0;t<r;t++)a[t]=~e.g[t];return new k0(a,~e.h).add(T1)}D.abs=function(){return Ae(this)?cr(this):this};D.add=function(e){for(var r=Math.max(this.g.length,e.g.length),a=[],t=0,n=0;n<=r;n++){var i=t+(this.D(n)&65535)+(e.D(n)&65535),A=(i>>>16)+(this.D(n)>>>16)+(e.D(n)>>>16);t=A>>>16,i&=65535,A&=65535,a[n]=A<<16|i}return new k0(a,a[a.length-1]&-2147483648?-1:0)};function Po(e,r){return e.add(cr(r))}D.R=function(e){if(Ke(this)||Ke(e))return In;if(Ae(this))return Ae(e)?cr(this).R(cr(e)):cr(cr(this).R(e));if(Ae(e))return cr(this.R(cr(e)));if(0>this.X(nh)&&0>e.X(nh))return Ve(this.ea()*e.ea());for(var r=this.g.length+e.g.length,a=[],t=0;t<2*r;t++)a[t]=0;for(t=0;t<this.g.length;t++)for(var n=0;n<e.g.length;n++){var i=this.D(t)>>>16,A=this.D(t)&65535,o=e.D(n)>>>16,f=e.D(n)&65535;a[2*t+2*n]+=A*f,WA(a,2*t+2*n),a[2*t+2*n+1]+=i*f,WA(a,2*t+2*n+1),a[2*t+2*n+1]+=A*o,WA(a,2*t+2*n+1),a[2*t+2*n+2]+=i*o,WA(a,2*t+2*n+2)}for(t=0;t<r;t++)a[t]=a[2*t+1]<<16|a[2*t];for(t=r;t<2*r;t++)a[t]=0;return new k0(a,0)};function WA(e,r){for(;(e[r]&65535)!=e[r];)e[r+1]+=e[r]>>>16,e[r]&=65535,r++}function vi(e,r){this.g=e,this.h=r}function Oo(e,r){if(Ke(r))throw Error("division by zero");if(Ke(e))return new vi(In,In);if(Ae(e))return r=Oo(cr(e),r),new vi(cr(r.g),cr(r.h));if(Ae(r))return r=Oo(e,cr(r)),new vi(cr(r.g),r.h);if(30<e.g.length){if(Ae(e)||Ae(r))throw Error("slowDivide_ only works with positive integers.");for(var a=T1,t=r;0>=t.X(e);)a=ih(a),t=ih(t);var n=Kt(a,1),i=Kt(t,1);for(t=Kt(t,2),a=Kt(a,2);!Ke(t);){var A=i.add(t);0>=A.X(e)&&(n=n.add(a),i=A),t=Kt(t,1),a=Kt(a,1)}return r=Po(e,n.R(r)),new vi(n,r)}for(n=In;0<=e.X(r);){for(a=Math.max(1,Math.floor(e.ea()/r.ea())),t=Math.ceil(Math.log(a)/Math.LN2),t=48>=t?1:Math.pow(2,t-48),i=Ve(a),A=i.R(r);Ae(A)||0<A.X(e);)a-=t,i=Ve(a),A=i.R(r);Ke(i)&&(i=T1),n=n.add(i),e=Po(e,A)}return new vi(n,e)}D.gb=function(e){return Oo(this,e).h};D.and=function(e){for(var r=Math.max(this.g.length,e.g.length),a=[],t=0;t<r;t++)a[t]=this.D(t)&e.D(t);return new k0(a,this.h&e.h)};D.or=function(e){for(var r=Math.max(this.g.length,e.g.length),a=[],t=0;t<r;t++)a[t]=this.D(t)|e.D(t);return new k0(a,this.h|e.h)};D.xor=function(e){for(var r=Math.max(this.g.length,e.g.length),a=[],t=0;t<r;t++)a[t]=this.D(t)^e.D(t);return new k0(a,this.h^e.h)};function ih(e){for(var r=e.g.length+1,a=[],t=0;t<r;t++)a[t]=e.D(t)<<1|e.D(t-1)>>>31;return new k0(a,e.h)}function Kt(e,r){var a=r>>5;r%=32;for(var t=e.g.length-a,n=[],i=0;i<t;i++)n[i]=0<r?e.D(i+a)>>>r|e.D(i+a+1)<<32-r:e.D(i+a);return new k0(n,e.h)}xo.prototype.createWebChannel=xo.prototype.g;ee.prototype.send=ee.prototype.u;ee.prototype.open=ee.prototype.m;ee.prototype.close=ee.prototype.close;Sf.NO_ERROR=0;Sf.TIMEOUT=8;Sf.HTTP_ERROR=6;S8.COMPLETE="complete";V8.EventType=U2;U2.OPEN="a";U2.CLOSE="b";U2.ERROR="c";U2.MESSAGE="d";Ar.prototype.listen=Ar.prototype.O;P0.prototype.listenOnce=P0.prototype.P;P0.prototype.getLastError=P0.prototype.Sa;P0.prototype.getLastErrorCode=P0.prototype.Ia;P0.prototype.getStatus=P0.prototype.da;P0.prototype.getResponseJson=P0.prototype.Wa;P0.prototype.getResponseText=P0.prototype.ja;P0.prototype.send=P0.prototype.ha;P0.prototype.setWithCredentials=P0.prototype.Oa;_e.prototype.digest=_e.prototype.l;_e.prototype.reset=_e.prototype.reset;_e.prototype.update=_e.prototype.j;k0.prototype.add=k0.prototype.add;k0.prototype.multiply=k0.prototype.R;k0.prototype.modulo=k0.prototype.gb;k0.prototype.compare=k0.prototype.X;k0.prototype.toNumber=k0.prototype.ea;k0.prototype.toString=k0.prototype.toString;k0.prototype.getBits=k0.prototype.D;k0.fromNumber=Ve;k0.fromString=g5;var A7=function(){return new xo},o7=function(){return Ff()},$s=Sf,f7=S8,s7=jt,Ah={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},u7=Y2,NA=V8,l7=P0,c7=_e,_n=k0;const oh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(r){this.uid=r}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(r){return r.uid===this.uid}}kr.UNAUTHENTICATED=new kr(null),kr.GOOGLE_CREDENTIALS=new kr("google-credentials-uid"),kr.FIRST_PARTY=new kr("first-party-uid"),kr.MOCK_USER=new kr("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ri="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new _f("@firebase/firestore");function fh(){return Tt.logLevel}function j(e,...r){if(Tt.logLevel<=d0.DEBUG){const a=r.map(mc);Tt.debug(`Firestore (${ri}): ${e}`,...a)}}function fa(e,...r){if(Tt.logLevel<=d0.ERROR){const a=r.map(mc);Tt.error(`Firestore (${ri}): ${e}`,...a)}}function Xn(e,...r){if(Tt.logLevel<=d0.WARN){const a=r.map(mc);Tt.warn(`Firestore (${ri}): ${e}`,...a)}}function mc(e){if(typeof e=="string")return e;try{return r=e,JSON.stringify(r)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(e="Unexpected state"){const r=`FIRESTORE (${ri}) INTERNAL ASSERTION FAILED: `+e;throw fa(r),new Error(r)}function R0(e,r){e||a0()}function i0(e,r){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends he{constructor(r,a){super(r,a),this.code=r,this.message=a,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(){this.promise=new Promise((r,a)=>{this.resolve=r,this.reject=a})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m5{constructor(r,a){this.user=a,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${r}`)}}class d7{getToken(){return Promise.resolve(null)}invalidateToken(){}start(r,a){r.enqueueRetryable(()=>a(kr.UNAUTHENTICATED))}shutdown(){}}class h7{constructor(r){this.token=r,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(r,a){this.changeListener=a,r.enqueueRetryable(()=>a(this.token.user))}shutdown(){this.changeListener=null}}class b7{constructor(r){this.t=r,this.currentUser=kr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(r,a){let t=this.i;const n=f=>this.i!==t?(t=this.i,a(f)):Promise.resolve();let i=new La;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new La,r.enqueueRetryable(()=>n(this.currentUser))};const A=()=>{const f=i;r.enqueueRetryable(async()=>{await f.promise,await n(this.currentUser)})},o=f=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),A()};this.t.onInit(f=>o(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?o(f):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new La)}},0),A()}getToken(){const r=this.i,a=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(a).then(t=>this.i!==r?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(R0(typeof t.accessToken=="string"),new m5(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const r=this.auth&&this.auth.getUid();return R0(r===null||typeof r=="string"),new kr(r)}}class g7{constructor(r,a,t){this.h=r,this.l=a,this.m=t,this.type="FirstParty",this.user=kr.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const r=this.p();return r&&this.g.set("Authorization",r),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class m7{constructor(r,a,t){this.h=r,this.l=a,this.m=t}getToken(){return Promise.resolve(new g7(this.h,this.l,this.m))}start(r,a){r.enqueueRetryable(()=>a(kr.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class p7{constructor(r){this.value=r,this.type="AppCheck",this.headers=new Map,r&&r.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v7{constructor(r){this.I=r,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(r,a){const t=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const A=i.token!==this.T;return this.T=i.token,j("FirebaseAppCheckTokenProvider",`Received ${A?"new":"existing"} token.`),A?a(i.token):Promise.resolve()};this.o=i=>{r.enqueueRetryable(()=>t(i))};const n=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>n(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?n(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const r=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(r).then(a=>a?(R0(typeof a.token=="string"),this.T=a.token,new p7(a.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k7(e){const r=typeof self<"u"&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(r&&typeof r.getRandomValues=="function")r.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p5{static A(){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=Math.floor(256/r.length)*r.length;let t="";for(;t.length<20;){const n=k7(40);for(let i=0;i<n.length;++i)t.length<20&&n[i]<a&&(t+=r.charAt(n[i]%r.length))}return t}}function b0(e,r){return e<r?-1:e>r?1:0}function Mn(e,r,a){return e.length===r.length&&e.every((t,n)=>a(t,r[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(r,a){if(this.seconds=r,this.nanoseconds=a,a<0)throw new G(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(a>=1e9)throw new G(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+a);if(r<-62135596800)throw new G(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+r);if(r>=253402300800)throw new G(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+r)}static now(){return er.fromMillis(Date.now())}static fromDate(r){return er.fromMillis(r.getTime())}static fromMillis(r){const a=Math.floor(r/1e3),t=Math.floor(1e6*(r-1e3*a));return new er(a,t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(r){return this.seconds===r.seconds?b0(this.nanoseconds,r.nanoseconds):b0(this.seconds,r.seconds)}isEqual(r){return r.seconds===this.seconds&&r.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const r=this.seconds- -62135596800;return String(r).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(r){this.timestamp=r}static fromTimestamp(r){return new n0(r)}static min(){return new n0(new er(0,0))}static max(){return new n0(new er(253402300799,999999999))}compareTo(r){return this.timestamp._compareTo(r.timestamp)}isEqual(r){return this.timestamp.isEqual(r.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(r,a,t){a===void 0?a=0:a>r.length&&a0(),t===void 0?t=r.length-a:t>r.length-a&&a0(),this.segments=r,this.offset=a,this.len=t}get length(){return this.len}isEqual(r){return y2.comparator(this,r)===0}child(r){const a=this.segments.slice(this.offset,this.limit());return r instanceof y2?r.forEach(t=>{a.push(t)}):a.push(r),this.construct(a)}limit(){return this.offset+this.length}popFirst(r){return r=r===void 0?1:r,this.construct(this.segments,this.offset+r,this.length-r)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(r){return this.segments[this.offset+r]}isEmpty(){return this.length===0}isPrefixOf(r){if(r.length<this.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==r.get(a))return!1;return!0}isImmediateParentOf(r){if(this.length+1!==r.length)return!1;for(let a=0;a<this.length;a++)if(this.get(a)!==r.get(a))return!1;return!0}forEach(r){for(let a=this.offset,t=this.limit();a<t;a++)r(this.segments[a])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(r,a){const t=Math.min(r.length,a.length);for(let n=0;n<t;n++){const i=r.get(n),A=a.get(n);if(i<A)return-1;if(i>A)return 1}return r.length<a.length?-1:r.length>a.length?1:0}}class w0 extends y2{construct(r,a,t){return new w0(r,a,t)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...r){const a=[];for(const t of r){if(t.indexOf("//")>=0)throw new G(R.INVALID_ARGUMENT,`Invalid segment (${t}). Paths must not contain // in them.`);a.push(...t.split("/").filter(n=>n.length>0))}return new w0(a)}static emptyPath(){return new w0([])}}const w7=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Er extends y2{construct(r,a,t){return new Er(r,a,t)}static isValidIdentifier(r){return w7.test(r)}canonicalString(){return this.toArray().map(r=>(r=r.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Er.isValidIdentifier(r)||(r="`"+r+"`"),r)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Er(["__name__"])}static fromServerFormat(r){const a=[];let t="",n=0;const i=()=>{if(t.length===0)throw new G(R.INVALID_ARGUMENT,`Invalid field path (${r}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);a.push(t),t=""};let A=!1;for(;n<r.length;){const o=r[n];if(o==="\\"){if(n+1===r.length)throw new G(R.INVALID_ARGUMENT,"Path has trailing escape character: "+r);const f=r[n+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new G(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+r);t+=f,n+=2}else o==="`"?(A=!A,n++):o!=="."||A?(t+=o,n++):(i(),n++)}if(i(),A)throw new G(R.INVALID_ARGUMENT,"Unterminated ` in path: "+r);return new Er(a)}static emptyPath(){return new Er([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(r){this.path=r}static fromPath(r){return new Y(w0.fromString(r))}static fromName(r){return new Y(w0.fromString(r).popFirst(5))}static empty(){return new Y(w0.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(r){return this.path.length>=2&&this.path.get(this.path.length-2)===r}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(r){return r!==null&&w0.comparator(this.path,r.path)===0}toString(){return this.path.toString()}static comparator(r,a){return w0.comparator(r.path,a.path)}static isDocumentKey(r){return r.length%2==0}static fromSegments(r){return new Y(new w0(r.slice()))}}function y7(e,r){const a=e.toTimestamp().seconds,t=e.toTimestamp().nanoseconds+1,n=n0.fromTimestamp(t===1e9?new er(a+1,0):new er(a,t));return new Ja(n,Y.empty(),r)}function E7(e){return new Ja(e.readTime,e.key,-1)}class Ja{constructor(r,a,t){this.readTime=r,this.documentKey=a,this.largestBatchId=t}static min(){return new Ja(n0.min(),Y.empty(),-1)}static max(){return new Ja(n0.max(),Y.empty(),-1)}}function I7(e,r){let a=e.readTime.compareTo(r.readTime);return a!==0?a:(a=Y.comparator(e.documentKey,r.documentKey),a!==0?a:b0(e.largestBatchId,r.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _7="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class C7{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(r){this.onCommittedListeners.push(r)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(r=>r())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(e){if(e.code!==R.FAILED_PRECONDITION||e.message!==_7)throw e;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(r){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,r(a=>{this.isDone=!0,this.result=a,this.nextCallback&&this.nextCallback(a)},a=>{this.isDone=!0,this.error=a,this.catchCallback&&this.catchCallback(a)})}catch(r){return this.next(void 0,r)}next(r,a){return this.callbackAttached&&a0(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(a,this.error):this.wrapSuccess(r,this.result):new N((t,n)=>{this.nextCallback=i=>{this.wrapSuccess(r,i).next(t,n)},this.catchCallback=i=>{this.wrapFailure(a,i).next(t,n)}})}toPromise(){return new Promise((r,a)=>{this.next(r,a)})}wrapUserFunction(r){try{const a=r();return a instanceof N?a:N.resolve(a)}catch(a){return N.reject(a)}}wrapSuccess(r,a){return r?this.wrapUserFunction(()=>r(a)):N.resolve(a)}wrapFailure(r,a){return r?this.wrapUserFunction(()=>r(a)):N.reject(a)}static resolve(r){return new N((a,t)=>{a(r)})}static reject(r){return new N((a,t)=>{t(r)})}static waitFor(r){return new N((a,t)=>{let n=0,i=0,A=!1;r.forEach(o=>{++n,o.next(()=>{++i,A&&i===n&&a()},f=>t(f))}),A=!0,i===n&&a()})}static or(r){let a=N.resolve(!1);for(const t of r)a=a.next(n=>n?N.resolve(n):t());return a}static forEach(r,a){const t=[];return r.forEach((n,i)=>{t.push(a.call(this,n,i))}),this.waitFor(t)}static mapArray(r,a){return new N((t,n)=>{const i=r.length,A=new Array(i);let o=0;for(let f=0;f<i;f++){const s=f;a(r[s]).next(u=>{A[s]=u,++o,o===i&&t(A)},u=>n(u))}})}static doWhile(r,a){return new N((t,n)=>{const i=()=>{r()===!0?a().next(()=>{i()},n):t()};i()})}}function J2(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(r,a){this.previousValue=r,a&&(a.sequenceNumberHandler=t=>this.ot(t),this.ut=t=>a.writeSequenceNumber(t))}ot(r){return this.previousValue=Math.max(r,this.previousValue),this.previousValue}next(){const r=++this.previousValue;return this.ut&&this.ut(r),r}}pc.ct=-1;function Of(e){return e==null}function Uo(e){return e===0&&1/e==-1/0}function B7(e){return typeof e=="number"&&Number.isInteger(e)&&!Uo(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(e){let r=0;for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&r++;return r}function ei(e,r){for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&r(a,e[a])}function v5(e){for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(r,a){this.comparator=r,this.root=a||lr.EMPTY}insert(r,a){return new D0(this.comparator,this.root.insert(r,a,this.comparator).copy(null,null,lr.BLACK,null,null))}remove(r){return new D0(this.comparator,this.root.remove(r,this.comparator).copy(null,null,lr.BLACK,null,null))}get(r){let a=this.root;for(;!a.isEmpty();){const t=this.comparator(r,a.key);if(t===0)return a.value;t<0?a=a.left:t>0&&(a=a.right)}return null}indexOf(r){let a=0,t=this.root;for(;!t.isEmpty();){const n=this.comparator(r,t.key);if(n===0)return a+t.left.size;n<0?t=t.left:(a+=t.left.size+1,t=t.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(r){return this.root.inorderTraversal(r)}forEach(r){this.inorderTraversal((a,t)=>(r(a,t),!1))}toString(){const r=[];return this.inorderTraversal((a,t)=>(r.push(`${a}:${t}`),!1)),`{${r.join(", ")}}`}reverseTraversal(r){return this.root.reverseTraversal(r)}getIterator(){return new FA(this.root,null,this.comparator,!1)}getIteratorFrom(r){return new FA(this.root,r,this.comparator,!1)}getReverseIterator(){return new FA(this.root,null,this.comparator,!0)}getReverseIteratorFrom(r){return new FA(this.root,r,this.comparator,!0)}}class FA{constructor(r,a,t,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!r.isEmpty();)if(i=a?t(r.key,a):1,a&&n&&(i*=-1),i<0)r=this.isReverse?r.left:r.right;else{if(i===0){this.nodeStack.push(r);break}this.nodeStack.push(r),r=this.isReverse?r.right:r.left}}getNext(){let r=this.nodeStack.pop();const a={key:r.key,value:r.value};if(this.isReverse)for(r=r.left;!r.isEmpty();)this.nodeStack.push(r),r=r.right;else for(r=r.right;!r.isEmpty();)this.nodeStack.push(r),r=r.left;return a}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const r=this.nodeStack[this.nodeStack.length-1];return{key:r.key,value:r.value}}}class lr{constructor(r,a,t,n,i){this.key=r,this.value=a,this.color=t??lr.RED,this.left=n??lr.EMPTY,this.right=i??lr.EMPTY,this.size=this.left.size+1+this.right.size}copy(r,a,t,n,i){return new lr(r??this.key,a??this.value,t??this.color,n??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(r){return this.left.inorderTraversal(r)||r(this.key,this.value)||this.right.inorderTraversal(r)}reverseTraversal(r){return this.right.reverseTraversal(r)||r(this.key,this.value)||this.left.reverseTraversal(r)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(r,a,t){let n=this;const i=t(r,n.key);return n=i<0?n.copy(null,null,null,n.left.insert(r,a,t),null):i===0?n.copy(null,a,null,null,null):n.copy(null,null,null,null,n.right.insert(r,a,t)),n.fixUp()}removeMin(){if(this.left.isEmpty())return lr.EMPTY;let r=this;return r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.removeMin(),null),r.fixUp()}remove(r,a){let t,n=this;if(a(r,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(r,a),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),a(r,n.key)===0){if(n.right.isEmpty())return lr.EMPTY;t=n.right.min(),n=n.copy(t.key,t.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(r,a))}return n.fixUp()}isRed(){return this.color}fixUp(){let r=this;return r.right.isRed()&&!r.left.isRed()&&(r=r.rotateLeft()),r.left.isRed()&&r.left.left.isRed()&&(r=r.rotateRight()),r.left.isRed()&&r.right.isRed()&&(r=r.colorFlip()),r}moveRedLeft(){let r=this.colorFlip();return r.right.left.isRed()&&(r=r.copy(null,null,null,null,r.right.rotateRight()),r=r.rotateLeft(),r=r.colorFlip()),r}moveRedRight(){let r=this.colorFlip();return r.left.left.isRed()&&(r=r.rotateRight(),r=r.colorFlip()),r}rotateLeft(){const r=this.copy(null,null,lr.RED,null,this.right.left);return this.right.copy(null,null,this.color,r,null)}rotateRight(){const r=this.copy(null,null,lr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,r)}colorFlip(){const r=this.left.copy(null,null,!this.left.color,null,null),a=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,r,a)}checkMaxDepth(){const r=this.check();return Math.pow(2,r)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw a0();const r=this.left.check();if(r!==this.right.check())throw a0();return r+(this.isRed()?0:1)}}lr.EMPTY=null,lr.RED=!0,lr.BLACK=!1;lr.EMPTY=new class{constructor(){this.size=0}get key(){throw a0()}get value(){throw a0()}get color(){throw a0()}get left(){throw a0()}get right(){throw a0()}copy(e,r,a,t,n){return this}insert(e,r,a){return new lr(e,r)}remove(e,r){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(r){this.comparator=r,this.data=new D0(this.comparator)}has(r){return this.data.get(r)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(r){return this.data.indexOf(r)}forEach(r){this.data.inorderTraversal((a,t)=>(r(a),!1))}forEachInRange(r,a){const t=this.data.getIteratorFrom(r[0]);for(;t.hasNext();){const n=t.getNext();if(this.comparator(n.key,r[1])>=0)return;a(n.key)}}forEachWhile(r,a){let t;for(t=a!==void 0?this.data.getIteratorFrom(a):this.data.getIterator();t.hasNext();)if(!r(t.getNext().key))return}firstAfterOrEqual(r){const a=this.data.getIteratorFrom(r);return a.hasNext()?a.getNext().key:null}getIterator(){return new uh(this.data.getIterator())}getIteratorFrom(r){return new uh(this.data.getIteratorFrom(r))}add(r){return this.copy(this.data.remove(r).insert(r,!0))}delete(r){return this.has(r)?this.copy(this.data.remove(r)):this}isEmpty(){return this.data.isEmpty()}unionWith(r){let a=this;return a.size<r.size&&(a=r,r=this),r.forEach(t=>{a=a.add(t)}),a}isEqual(r){if(!(r instanceof Cr)||this.size!==r.size)return!1;const a=this.data.getIterator(),t=r.data.getIterator();for(;a.hasNext();){const n=a.getNext().key,i=t.getNext().key;if(this.comparator(n,i)!==0)return!1}return!0}toArray(){const r=[];return this.forEach(a=>{r.push(a)}),r}toString(){const r=[];return this.forEach(a=>r.push(a)),"SortedSet("+r.toString()+")"}copy(r){const a=new Cr(this.comparator);return a.data=r,a}}class uh{constructor(r){this.iter=r}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(r){this.fields=r,r.sort(Er.comparator)}static empty(){return new ke([])}unionWith(r){let a=new Cr(Er.comparator);for(const t of this.fields)a=a.add(t);for(const t of r)a=a.add(t);return new ke(a.toArray())}covers(r){for(const a of this.fields)if(a.isPrefixOf(r))return!0;return!1}isEqual(r){return Mn(this.fields,r.fields,(a,t)=>a.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(r){this.binaryString=r}static fromBase64String(r){const a=function(t){try{return atob(t)}catch(n){throw typeof DOMException<"u"&&n instanceof DOMException?new k5("Invalid base64 string: "+n):n}}(r);return new Rr(a)}static fromUint8Array(r){const a=function(t){let n="";for(let i=0;i<t.length;++i)n+=String.fromCharCode(t[i]);return n}(r);return new Rr(a)}[Symbol.iterator](){let r=0;return{next:()=>r<this.binaryString.length?{value:this.binaryString.charCodeAt(r++),done:!1}:{value:void 0,done:!0}}}toBase64(){return r=this.binaryString,btoa(r);var r}toUint8Array(){return function(r){const a=new Uint8Array(r.length);for(let t=0;t<r.length;t++)a[t]=r.charCodeAt(t);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(r){return b0(this.binaryString,r.binaryString)}isEqual(r){return this.binaryString===r.binaryString}}Rr.EMPTY_BYTE_STRING=new Rr("");const Z7=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $a(e){if(R0(!!e),typeof e=="string"){let r=0;const a=Z7.exec(e);if(R0(!!a),a[1]){let n=a[1];n=(n+"000000000").substr(0,9),r=Number(n)}const t=new Date(e);return{seconds:Math.floor(t.getTime()/1e3),nanos:r}}return{seconds:H0(e.seconds),nanos:H0(e.nanos)}}function H0(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Wt(e){return typeof e=="string"?Rr.fromBase64String(e):Rr.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e){var r,a;return((a=(((r=e==null?void 0:e.mapValue)===null||r===void 0?void 0:r.fields)||{}).__type__)===null||a===void 0?void 0:a.stringValue)==="server_timestamp"}function vc(e){const r=e.mapValue.fields.__previous_value__;return Uf(r)?vc(r):r}function E2(e){const r=$a(e.mapValue.fields.__local_write_time__.timestampValue);return new er(r.seconds,r.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R7{constructor(r,a,t,n,i,A,o,f,s){this.databaseId=r,this.appId=a,this.persistenceKey=t,this.host=n,this.ssl=i,this.forceLongPolling=A,this.autoDetectLongPolling=o,this.longPollingOptions=f,this.useFetchStreams=s}}class I2{constructor(r,a){this.projectId=r,this.database=a||"(default)"}static empty(){return new I2("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(r){return r instanceof I2&&r.projectId===this.projectId&&r.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Uf(e)?4:T7(e)?9007199254740991:10:a0()}function Ue(e,r){if(e===r)return!0;const a=Nt(e);if(a!==Nt(r))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===r.booleanValue;case 4:return E2(e).isEqual(E2(r));case 3:return function(t,n){if(typeof t.timestampValue=="string"&&typeof n.timestampValue=="string"&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const i=$a(t.timestampValue),A=$a(n.timestampValue);return i.seconds===A.seconds&&i.nanos===A.nanos}(e,r);case 5:return e.stringValue===r.stringValue;case 6:return function(t,n){return Wt(t.bytesValue).isEqual(Wt(n.bytesValue))}(e,r);case 7:return e.referenceValue===r.referenceValue;case 8:return function(t,n){return H0(t.geoPointValue.latitude)===H0(n.geoPointValue.latitude)&&H0(t.geoPointValue.longitude)===H0(n.geoPointValue.longitude)}(e,r);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return H0(t.integerValue)===H0(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const i=H0(t.doubleValue),A=H0(n.doubleValue);return i===A?Uo(i)===Uo(A):isNaN(i)&&isNaN(A)}return!1}(e,r);case 9:return Mn(e.arrayValue.values||[],r.arrayValue.values||[],Ue);case 10:return function(t,n){const i=t.mapValue.fields||{},A=n.mapValue.fields||{};if(sh(i)!==sh(A))return!1;for(const o in i)if(i.hasOwnProperty(o)&&(A[o]===void 0||!Ue(i[o],A[o])))return!1;return!0}(e,r);default:return a0()}}function _2(e,r){return(e.values||[]).find(a=>Ue(a,r))!==void 0}function xn(e,r){if(e===r)return 0;const a=Nt(e),t=Nt(r);if(a!==t)return b0(a,t);switch(a){case 0:case 9007199254740991:return 0;case 1:return b0(e.booleanValue,r.booleanValue);case 2:return function(n,i){const A=H0(n.integerValue||n.doubleValue),o=H0(i.integerValue||i.doubleValue);return A<o?-1:A>o?1:A===o?0:isNaN(A)?isNaN(o)?0:-1:1}(e,r);case 3:return lh(e.timestampValue,r.timestampValue);case 4:return lh(E2(e),E2(r));case 5:return b0(e.stringValue,r.stringValue);case 6:return function(n,i){const A=Wt(n),o=Wt(i);return A.compareTo(o)}(e.bytesValue,r.bytesValue);case 7:return function(n,i){const A=n.split("/"),o=i.split("/");for(let f=0;f<A.length&&f<o.length;f++){const s=b0(A[f],o[f]);if(s!==0)return s}return b0(A.length,o.length)}(e.referenceValue,r.referenceValue);case 8:return function(n,i){const A=b0(H0(n.latitude),H0(i.latitude));return A!==0?A:b0(H0(n.longitude),H0(i.longitude))}(e.geoPointValue,r.geoPointValue);case 9:return function(n,i){const A=n.values||[],o=i.values||[];for(let f=0;f<A.length&&f<o.length;++f){const s=xn(A[f],o[f]);if(s)return s}return b0(A.length,o.length)}(e.arrayValue,r.arrayValue);case 10:return function(n,i){if(n===SA.mapValue&&i===SA.mapValue)return 0;if(n===SA.mapValue)return 1;if(i===SA.mapValue)return-1;const A=n.fields||{},o=Object.keys(A),f=i.fields||{},s=Object.keys(f);o.sort(),s.sort();for(let u=0;u<o.length&&u<s.length;++u){const c=b0(o[u],s[u]);if(c!==0)return c;const d=xn(A[o[u]],f[s[u]]);if(d!==0)return d}return b0(o.length,s.length)}(e.mapValue,r.mapValue);default:throw a0()}}function lh(e,r){if(typeof e=="string"&&typeof r=="string"&&e.length===r.length)return b0(e,r);const a=$a(e),t=$a(r),n=b0(a.seconds,t.seconds);return n!==0?n:b0(a.nanos,t.nanos)}function Pn(e){return W1(e)}function W1(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const n=$a(t);return`time(${n.seconds},${n.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wt(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,Y.fromName(a).toString()):"geoPointValue"in e?`geo(${(r=e.geoPointValue).latitude},${r.longitude})`:"arrayValue"in e?function(t){let n="[",i=!0;for(const A of t.values||[])i?i=!1:n+=",",n+=W1(A);return n+"]"}(e.arrayValue):"mapValue"in e?function(t){const n=Object.keys(t.fields||{}).sort();let i="{",A=!0;for(const o of n)A?A=!1:i+=",",i+=`${o}:${W1(t.fields[o])}`;return i+"}"}(e.mapValue):a0();var r,a}function jo(e,r){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${r.path.canonicalString()}`}}function N1(e){return!!e&&"integerValue"in e}function kc(e){return!!e&&"arrayValue"in e}function ch(e){return!!e&&"nullValue"in e}function dh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qA(e){return!!e&&"mapValue"in e}function Pi(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const r={mapValue:{fields:{}}};return ei(e.mapValue.fields,(a,t)=>r.mapValue.fields[a]=Pi(t)),r}if(e.arrayValue){const r={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)r.arrayValue.values[a]=Pi(e.arrayValue.values[a]);return r}return Object.assign({},e)}function T7(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(r){this.value=r}static empty(){return new oe({mapValue:{}})}field(r){if(r.isEmpty())return this.value;{let a=this.value;for(let t=0;t<r.length-1;++t)if(a=(a.mapValue.fields||{})[r.get(t)],!qA(a))return null;return a=(a.mapValue.fields||{})[r.lastSegment()],a||null}}set(r,a){this.getFieldsMap(r.popLast())[r.lastSegment()]=Pi(a)}setAll(r){let a=Er.emptyPath(),t={},n=[];r.forEach((A,o)=>{if(!a.isImmediateParentOf(o)){const f=this.getFieldsMap(a);this.applyChanges(f,t,n),t={},n=[],a=o.popLast()}A?t[o.lastSegment()]=Pi(A):n.push(o.lastSegment())});const i=this.getFieldsMap(a);this.applyChanges(i,t,n)}delete(r){const a=this.field(r.popLast());qA(a)&&a.mapValue.fields&&delete a.mapValue.fields[r.lastSegment()]}isEqual(r){return Ue(this.value,r.value)}getFieldsMap(r){let a=this.value;a.mapValue.fields||(a.mapValue={fields:{}});for(let t=0;t<r.length;++t){let n=a.mapValue.fields[r.get(t)];qA(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},a.mapValue.fields[r.get(t)]=n),a=n}return a.mapValue.fields}applyChanges(r,a,t){ei(a,(n,i)=>r[n]=i);for(const n of t)delete r[n]}clone(){return new oe(Pi(this.value))}}function w5(e){const r=[];return ei(e.fields,(a,t)=>{const n=new Er([a]);if(qA(t)){const i=w5(t.mapValue).fields;if(i.length===0)r.push(n);else for(const A of i)r.push(n.child(A))}else r.push(n)}),new ke(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(r,a,t,n,i,A,o){this.key=r,this.documentType=a,this.version=t,this.readTime=n,this.createTime=i,this.data=A,this.documentState=o}static newInvalidDocument(r){return new yr(r,0,n0.min(),n0.min(),n0.min(),oe.empty(),0)}static newFoundDocument(r,a,t,n){return new yr(r,1,a,n0.min(),t,n,0)}static newNoDocument(r,a){return new yr(r,2,a,n0.min(),n0.min(),oe.empty(),0)}static newUnknownDocument(r,a){return new yr(r,3,a,n0.min(),n0.min(),oe.empty(),2)}convertToFoundDocument(r,a){return!this.createTime.isEqual(n0.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=r),this.version=r,this.documentType=1,this.data=a,this.documentState=0,this}convertToNoDocument(r){return this.version=r,this.documentType=2,this.data=oe.empty(),this.documentState=0,this}convertToUnknownDocument(r){return this.version=r,this.documentType=3,this.data=oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=n0.min(),this}setReadTime(r){return this.readTime=r,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(r){return r instanceof yr&&this.key.isEqual(r.key)&&this.version.isEqual(r.version)&&this.documentType===r.documentType&&this.documentState===r.documentState&&this.data.isEqual(r.data)}mutableCopy(){return new yr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(r,a){this.position=r,this.inclusive=a}}function hh(e,r,a){let t=0;for(let n=0;n<e.position.length;n++){const i=r[n],A=e.position[n];if(i.field.isKeyField()?t=Y.comparator(Y.fromName(A.referenceValue),a.key):t=xn(A,a.data.field(i.field)),i.dir==="desc"&&(t*=-1),t!==0)break}return t}function bh(e,r){if(e===null)return r===null;if(r===null||e.inclusive!==r.inclusive||e.position.length!==r.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!Ue(e.position[a],r.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(r,a="asc"){this.field=r,this.dir=a}}function W7(e,r){return e.dir===r.dir&&e.field.isEqual(r.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y5{}class J0 extends y5{constructor(r,a,t){super(),this.field=r,this.op=a,this.value=t}static create(r,a,t){return r.isKeyField()?a==="in"||a==="not-in"?this.createKeyFieldInFilter(r,a,t):new F7(r,a,t):a==="array-contains"?new D7(r,t):a==="in"?new G7(r,t):a==="not-in"?new X7(r,t):a==="array-contains-any"?new M7(r,t):new J0(r,a,t)}static createKeyFieldInFilter(r,a,t){return a==="in"?new S7(r,t):new V7(r,t)}matches(r){const a=r.data.field(this.field);return this.op==="!="?a!==null&&this.matchesComparison(xn(a,this.value)):a!==null&&Nt(this.value)===Nt(a)&&this.matchesComparison(xn(a,this.value))}matchesComparison(r){switch(this.op){case"<":return r<0;case"<=":return r<=0;case"==":return r===0;case"!=":return r!==0;case">":return r>0;case">=":return r>=0;default:return a0()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ce extends y5{constructor(r,a){super(),this.filters=r,this.op=a,this.lt=null}static create(r,a){return new Ce(r,a)}matches(r){return E5(this)?this.filters.find(a=>!a.matches(r))===void 0:this.filters.find(a=>a.matches(r))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((r,a)=>r.concat(a.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const r=this.ft(a=>a.isInequality());return r!==null?r.field:null}ft(r){for(const a of this.getFlattenedFilters())if(r(a))return a;return null}}function E5(e){return e.op==="and"}function I5(e){return N7(e)&&E5(e)}function N7(e){for(const r of e.filters)if(r instanceof Ce)return!1;return!0}function F1(e){if(e instanceof J0)return e.field.canonicalString()+e.op.toString()+Pn(e.value);if(I5(e))return e.filters.map(r=>F1(r)).join(",");{const r=e.filters.map(a=>F1(a)).join(",");return`${e.op}(${r})`}}function _5(e,r){return e instanceof J0?function(a,t){return t instanceof J0&&a.op===t.op&&a.field.isEqual(t.field)&&Ue(a.value,t.value)}(e,r):e instanceof Ce?function(a,t){return t instanceof Ce&&a.op===t.op&&a.filters.length===t.filters.length?a.filters.reduce((n,i,A)=>n&&_5(i,t.filters[A]),!0):!1}(e,r):void a0()}function C5(e){return e instanceof J0?function(r){return`${r.field.canonicalString()} ${r.op} ${Pn(r.value)}`}(e):e instanceof Ce?function(r){return r.op.toString()+" {"+r.getFilters().map(C5).join(" ,")+"}"}(e):"Filter"}class F7 extends J0{constructor(r,a,t){super(r,a,t),this.key=Y.fromName(t.referenceValue)}matches(r){const a=Y.comparator(r.key,this.key);return this.matchesComparison(a)}}class S7 extends J0{constructor(r,a){super(r,"in",a),this.keys=B5("in",a)}matches(r){return this.keys.some(a=>a.isEqual(r.key))}}class V7 extends J0{constructor(r,a){super(r,"not-in",a),this.keys=B5("not-in",a)}matches(r){return!this.keys.some(a=>a.isEqual(r.key))}}function B5(e,r){var a;return(((a=r.arrayValue)===null||a===void 0?void 0:a.values)||[]).map(t=>Y.fromName(t.referenceValue))}class D7 extends J0{constructor(r,a){super(r,"array-contains",a)}matches(r){const a=r.data.field(this.field);return kc(a)&&_2(a.arrayValue,this.value)}}class G7 extends J0{constructor(r,a){super(r,"in",a)}matches(r){const a=r.data.field(this.field);return a!==null&&_2(this.value.arrayValue,a)}}class X7 extends J0{constructor(r,a){super(r,"not-in",a)}matches(r){if(_2(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const a=r.data.field(this.field);return a!==null&&!_2(this.value.arrayValue,a)}}class M7 extends J0{constructor(r,a){super(r,"array-contains-any",a)}matches(r){const a=r.data.field(this.field);return!(!kc(a)||!a.arrayValue.values)&&a.arrayValue.values.some(t=>_2(this.value.arrayValue,t))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x7{constructor(r,a=null,t=[],n=[],i=null,A=null,o=null){this.path=r,this.collectionGroup=a,this.orderBy=t,this.filters=n,this.limit=i,this.startAt=A,this.endAt=o,this.dt=null}}function gh(e,r=null,a=[],t=[],n=null,i=null,A=null){return new x7(e,r,a,t,n,i,A)}function wc(e){const r=i0(e);if(r.dt===null){let a=r.path.canonicalString();r.collectionGroup!==null&&(a+="|cg:"+r.collectionGroup),a+="|f:",a+=r.filters.map(t=>F1(t)).join(","),a+="|ob:",a+=r.orderBy.map(t=>function(n){return n.field.canonicalString()+n.dir}(t)).join(","),Of(r.limit)||(a+="|l:",a+=r.limit),r.startAt&&(a+="|lb:",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map(t=>Pn(t)).join(",")),r.endAt&&(a+="|ub:",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map(t=>Pn(t)).join(",")),r.dt=a}return r.dt}function yc(e,r){if(e.limit!==r.limit||e.orderBy.length!==r.orderBy.length)return!1;for(let a=0;a<e.orderBy.length;a++)if(!W7(e.orderBy[a],r.orderBy[a]))return!1;if(e.filters.length!==r.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!_5(e.filters[a],r.filters[a]))return!1;return e.collectionGroup===r.collectionGroup&&!!e.path.isEqual(r.path)&&!!bh(e.startAt,r.startAt)&&bh(e.endAt,r.endAt)}function S1(e){return Y.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(r,a=null,t=[],n=[],i=null,A="F",o=null,f=null){this.path=r,this.collectionGroup=a,this.explicitOrderBy=t,this.filters=n,this.limit=i,this.limitType=A,this.startAt=o,this.endAt=f,this.wt=null,this._t=null,this.startAt,this.endAt}}function P7(e,r,a,t,n,i,A,o){return new Lt(e,r,a,t,n,i,A,o)}function Z5(e){return new Lt(e)}function mh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Ec(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function jf(e){for(const r of e.filters){const a=r.getFirstInequalityField();if(a!==null)return a}return null}function Ic(e){return e.collectionGroup!==null}function wt(e){const r=i0(e);if(r.wt===null){r.wt=[];const a=jf(r),t=Ec(r);if(a!==null&&t===null)a.isKeyField()||r.wt.push(new Cn(a)),r.wt.push(new Cn(Er.keyField(),"asc"));else{let n=!1;for(const i of r.explicitOrderBy)r.wt.push(i),i.field.isKeyField()&&(n=!0);if(!n){const i=r.explicitOrderBy.length>0?r.explicitOrderBy[r.explicitOrderBy.length-1].dir:"asc";r.wt.push(new Cn(Er.keyField(),i))}}}return r.wt}function sa(e){const r=i0(e);if(!r._t)if(r.limitType==="F")r._t=gh(r.path,r.collectionGroup,wt(r),r.filters,r.limit,r.startAt,r.endAt);else{const a=[];for(const i of wt(r)){const A=i.dir==="desc"?"asc":"desc";a.push(new Cn(i.field,A))}const t=r.endAt?new On(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new On(r.startAt.position,r.startAt.inclusive):null;r._t=gh(r.path,r.collectionGroup,a,r.filters,r.limit,t,n)}return r._t}function V1(e,r){r.getFirstInequalityField(),jf(e);const a=e.filters.concat([r]);return new Lt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),a,e.limit,e.limitType,e.startAt,e.endAt)}function Lo(e,r,a){return new Lt(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),r,a,e.startAt,e.endAt)}function Lf(e,r){return yc(sa(e),sa(r))&&e.limitType===r.limitType}function R5(e){return`${wc(sa(e))}|lt:${e.limitType}`}function D1(e){return`Query(target=${function(r){let a=r.path.canonicalString();return r.collectionGroup!==null&&(a+=" collectionGroup="+r.collectionGroup),r.filters.length>0&&(a+=`, filters: [${r.filters.map(t=>C5(t)).join(", ")}]`),Of(r.limit)||(a+=", limit: "+r.limit),r.orderBy.length>0&&(a+=`, orderBy: [${r.orderBy.map(t=>function(n){return`${n.field.canonicalString()} (${n.dir})`}(t)).join(", ")}]`),r.startAt&&(a+=", startAt: ",a+=r.startAt.inclusive?"b:":"a:",a+=r.startAt.position.map(t=>Pn(t)).join(",")),r.endAt&&(a+=", endAt: ",a+=r.endAt.inclusive?"a:":"b:",a+=r.endAt.position.map(t=>Pn(t)).join(",")),`Target(${a})`}(sa(e))}; limitType=${e.limitType})`}function Yf(e,r){return r.isFoundDocument()&&function(a,t){const n=t.key.path;return a.collectionGroup!==null?t.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(n):Y.isDocumentKey(a.path)?a.path.isEqual(n):a.path.isImmediateParentOf(n)}(e,r)&&function(a,t){for(const n of wt(a))if(!n.field.isKeyField()&&t.data.field(n.field)===null)return!1;return!0}(e,r)&&function(a,t){for(const n of a.filters)if(!n.matches(t))return!1;return!0}(e,r)&&function(a,t){return!(a.startAt&&!function(n,i,A){const o=hh(n,i,A);return n.inclusive?o<=0:o<0}(a.startAt,wt(a),t)||a.endAt&&!function(n,i,A){const o=hh(n,i,A);return n.inclusive?o>=0:o>0}(a.endAt,wt(a),t))}(e,r)}function O7(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function T5(e){return(r,a)=>{let t=!1;for(const n of wt(e)){const i=U7(n,r,a);if(i!==0)return i;t=t||n.field.isKeyField()}return 0}}function U7(e,r,a){const t=e.field.isKeyField()?Y.comparator(r.key,a.key):function(n,i,A){const o=i.data.field(n),f=A.data.field(n);return o!==null&&f!==null?xn(o,f):a0()}(e.field,r,a);switch(e.dir){case"asc":return t;case"desc":return-1*t;default:return a0()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(r,a){this.mapKeyFn=r,this.equalsFn=a,this.inner={},this.innerSize=0}get(r){const a=this.mapKeyFn(r),t=this.inner[a];if(t!==void 0){for(const[n,i]of t)if(this.equalsFn(n,r))return i}}has(r){return this.get(r)!==void 0}set(r,a){const t=this.mapKeyFn(r),n=this.inner[t];if(n===void 0)return this.inner[t]=[[r,a]],void this.innerSize++;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],r))return void(n[i]=[r,a]);n.push([r,a]),this.innerSize++}delete(r){const a=this.mapKeyFn(r),t=this.inner[a];if(t===void 0)return!1;for(let n=0;n<t.length;n++)if(this.equalsFn(t[n][0],r))return t.length===1?delete this.inner[a]:t.splice(n,1),this.innerSize--,!0;return!1}forEach(r){ei(this.inner,(a,t)=>{for(const[n,i]of t)r(n,i)})}isEmpty(){return v5(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j7=new D0(Y.comparator);function ua(){return j7}const W5=new D0(Y.comparator);function Ri(...e){let r=W5;for(const a of e)r=r.insert(a.key,a);return r}function N5(e){let r=W5;return e.forEach((a,t)=>r=r.insert(a,t.overlayedDocument)),r}function gt(){return Oi()}function F5(){return Oi()}function Oi(){return new ai(e=>e.toString(),(e,r)=>e.isEqual(r))}const L7=new D0(Y.comparator),Y7=new Cr(Y.comparator);function o0(...e){let r=Y7;for(const a of e)r=r.add(a);return r}const Q7=new Cr(b0);function H7(){return Q7}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S5(e,r){if(e.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uo(r)?"-0":r}}function V5(e){return{integerValue:""+e}}function z7(e,r){return B7(r)?V5(r):S5(e,r)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(){this._=void 0}}function J7(e,r,a){return e instanceof C2?function(t,n){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&Uf(n)&&(n=vc(n)),n&&(i.fields.__previous_value__=n),{mapValue:i}}(a,r):e instanceof B2?G5(e,r):e instanceof Z2?X5(e,r):function(t,n){const i=D5(t,n),A=ph(i)+ph(t.gt);return N1(i)&&N1(t.gt)?V5(A):S5(t.serializer,A)}(e,r)}function $7(e,r,a){return e instanceof B2?G5(e,r):e instanceof Z2?X5(e,r):a}function D5(e,r){return e instanceof Yo?N1(a=r)||function(t){return!!t&&"doubleValue"in t}(a)?r:{integerValue:0}:null;var a}class C2 extends Qf{}class B2 extends Qf{constructor(r){super(),this.elements=r}}function G5(e,r){const a=M5(r);for(const t of e.elements)a.some(n=>Ue(n,t))||a.push(t);return{arrayValue:{values:a}}}class Z2 extends Qf{constructor(r){super(),this.elements=r}}function X5(e,r){let a=M5(r);for(const t of e.elements)a=a.filter(n=>!Ue(n,t));return{arrayValue:{values:a}}}class Yo extends Qf{constructor(r,a){super(),this.serializer=r,this.gt=a}}function ph(e){return H0(e.integerValue||e.doubleValue)}function M5(e){return kc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K7{constructor(r,a){this.field=r,this.transform=a}}function q7(e,r){return e.field.isEqual(r.field)&&function(a,t){return a instanceof B2&&t instanceof B2||a instanceof Z2&&t instanceof Z2?Mn(a.elements,t.elements,Ue):a instanceof Yo&&t instanceof Yo?Ue(a.gt,t.gt):a instanceof C2&&t instanceof C2}(e.transform,r.transform)}class rE{constructor(r,a){this.version=r,this.transformResults=a}}class Me{constructor(r,a){this.updateTime=r,this.exists=a}static none(){return new Me}static exists(r){return new Me(void 0,r)}static updateTime(r){return new Me(r)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(r){return this.exists===r.exists&&(this.updateTime?!!r.updateTime&&this.updateTime.isEqual(r.updateTime):!r.updateTime)}}function ro(e,r){return e.updateTime!==void 0?r.isFoundDocument()&&r.version.isEqual(e.updateTime):e.exists===void 0||e.exists===r.isFoundDocument()}class Hf{}function x5(e,r){if(!e.hasLocalMutations||r&&r.fields.length===0)return null;if(r===null)return e.isNoDocument()?new _c(e.key,Me.none()):new $2(e.key,e.data,Me.none());{const a=e.data,t=oe.empty();let n=new Cr(Er.comparator);for(let i of r.fields)if(!n.has(i)){let A=a.field(i);A===null&&i.length>1&&(i=i.popLast(),A=a.field(i)),A===null?t.delete(i):t.set(i,A),n=n.add(i)}return new Yt(e.key,t,new ke(n.toArray()),Me.none())}}function eE(e,r,a){e instanceof $2?function(t,n,i){const A=t.value.clone(),o=kh(t.fieldTransforms,n,i.transformResults);A.setAll(o),n.convertToFoundDocument(i.version,A).setHasCommittedMutations()}(e,r,a):e instanceof Yt?function(t,n,i){if(!ro(t.precondition,n))return void n.convertToUnknownDocument(i.version);const A=kh(t.fieldTransforms,n,i.transformResults),o=n.data;o.setAll(P5(t)),o.setAll(A),n.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,r,a):function(t,n,i){n.convertToNoDocument(i.version).setHasCommittedMutations()}(0,r,a)}function Ui(e,r,a,t){return e instanceof $2?function(n,i,A,o){if(!ro(n.precondition,i))return A;const f=n.value.clone(),s=wh(n.fieldTransforms,o,i);return f.setAll(s),i.convertToFoundDocument(i.version,f).setHasLocalMutations(),null}(e,r,a,t):e instanceof Yt?function(n,i,A,o){if(!ro(n.precondition,i))return A;const f=wh(n.fieldTransforms,o,i),s=i.data;return s.setAll(P5(n)),s.setAll(f),i.convertToFoundDocument(i.version,s).setHasLocalMutations(),A===null?null:A.unionWith(n.fieldMask.fields).unionWith(n.fieldTransforms.map(u=>u.field))}(e,r,a,t):function(n,i,A){return ro(n.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):A}(e,r,a)}function aE(e,r){let a=null;for(const t of e.fieldTransforms){const n=r.data.field(t.field),i=D5(t.transform,n||null);i!=null&&(a===null&&(a=oe.empty()),a.set(t.field,i))}return a||null}function vh(e,r){return e.type===r.type&&!!e.key.isEqual(r.key)&&!!e.precondition.isEqual(r.precondition)&&!!function(a,t){return a===void 0&&t===void 0||!(!a||!t)&&Mn(a,t,(n,i)=>q7(n,i))}(e.fieldTransforms,r.fieldTransforms)&&(e.type===0?e.value.isEqual(r.value):e.type!==1||e.data.isEqual(r.data)&&e.fieldMask.isEqual(r.fieldMask))}class $2 extends Hf{constructor(r,a,t,n=[]){super(),this.key=r,this.value=a,this.precondition=t,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Yt extends Hf{constructor(r,a,t,n,i=[]){super(),this.key=r,this.data=a,this.fieldMask=t,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function P5(e){const r=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){const t=e.data.field(a);r.set(a,t)}}),r}function kh(e,r,a){const t=new Map;R0(e.length===a.length);for(let n=0;n<a.length;n++){const i=e[n],A=i.transform,o=r.data.field(i.field);t.set(i.field,$7(A,o,a[n]))}return t}function wh(e,r,a){const t=new Map;for(const n of e){const i=n.transform,A=a.data.field(n.field);t.set(n.field,J7(i,A,r))}return t}class _c extends Hf{constructor(r,a){super(),this.key=r,this.precondition=a,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class tE extends Hf{constructor(r,a){super(),this.key=r,this.precondition=a,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(r,a,t,n){this.batchId=r,this.localWriteTime=a,this.baseMutations=t,this.mutations=n}applyToRemoteDocument(r,a){const t=a.mutationResults;for(let n=0;n<this.mutations.length;n++){const i=this.mutations[n];i.key.isEqual(r.key)&&eE(i,r,t[n])}}applyToLocalView(r,a){for(const t of this.baseMutations)t.key.isEqual(r.key)&&(a=Ui(t,r,a,this.localWriteTime));for(const t of this.mutations)t.key.isEqual(r.key)&&(a=Ui(t,r,a,this.localWriteTime));return a}applyToLocalDocumentSet(r,a){const t=F5();return this.mutations.forEach(n=>{const i=r.get(n.key),A=i.overlayedDocument;let o=this.applyToLocalView(A,i.mutatedFields);o=a.has(n.key)?null:o;const f=x5(A,o);f!==null&&t.set(n.key,f),A.isValidDocument()||A.convertToNoDocument(n0.min())}),t}keys(){return this.mutations.reduce((r,a)=>r.add(a.key),o0())}isEqual(r){return this.batchId===r.batchId&&Mn(this.mutations,r.mutations,(a,t)=>vh(a,t))&&Mn(this.baseMutations,r.baseMutations,(a,t)=>vh(a,t))}}class Cc{constructor(r,a,t,n){this.batch=r,this.commitVersion=a,this.mutationResults=t,this.docVersions=n}static from(r,a,t){R0(r.mutations.length===t.length);let n=L7;const i=r.mutations;for(let A=0;A<i.length;A++)n=n.insert(i[A].key,t[A].version);return new Cc(r,a,t,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(r,a){this.largestBatchId=r,this.mutation=a}getKey(){return this.mutation.key}isEqual(r){return r!==null&&this.mutation===r.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(r,a){this.count=r,this.unchangedNames=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q0,u0;function oE(e){switch(e){default:return a0();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function O5(e){if(e===void 0)return fa("GRPC error has no .code"),R.UNKNOWN;switch(e){case Q0.OK:return R.OK;case Q0.CANCELLED:return R.CANCELLED;case Q0.UNKNOWN:return R.UNKNOWN;case Q0.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Q0.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Q0.INTERNAL:return R.INTERNAL;case Q0.UNAVAILABLE:return R.UNAVAILABLE;case Q0.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Q0.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Q0.NOT_FOUND:return R.NOT_FOUND;case Q0.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Q0.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Q0.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Q0.ABORTED:return R.ABORTED;case Q0.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Q0.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Q0.DATA_LOSS:return R.DATA_LOSS;default:return a0()}}(u0=Q0||(Q0={}))[u0.OK=0]="OK",u0[u0.CANCELLED=1]="CANCELLED",u0[u0.UNKNOWN=2]="UNKNOWN",u0[u0.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u0[u0.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u0[u0.NOT_FOUND=5]="NOT_FOUND",u0[u0.ALREADY_EXISTS=6]="ALREADY_EXISTS",u0[u0.PERMISSION_DENIED=7]="PERMISSION_DENIED",u0[u0.UNAUTHENTICATED=16]="UNAUTHENTICATED",u0[u0.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u0[u0.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u0[u0.ABORTED=10]="ABORTED",u0[u0.OUT_OF_RANGE=11]="OUT_OF_RANGE",u0[u0.UNIMPLEMENTED=12]="UNIMPLEMENTED",u0[u0.INTERNAL=13]="INTERNAL",u0[u0.UNAVAILABLE=14]="UNAVAILABLE",u0[u0.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return VA}static getOrCreateInstance(){return VA===null&&(VA=new Bc),VA}onExistenceFilterMismatch(r){const a=Symbol();return this.onExistenceFilterMismatchCallbacks.set(a,r),()=>this.onExistenceFilterMismatchCallbacks.delete(a)}notifyOnExistenceFilterMismatch(r){this.onExistenceFilterMismatchCallbacks.forEach(a=>a(r))}}let VA=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sE=new _n([4294967295,4294967295],0);function yh(e){const r=fE().encode(e),a=new c7;return a.update(r),new Uint8Array(a.digest())}function Eh(e){const r=new DataView(e.buffer),a=r.getUint32(0,!0),t=r.getUint32(4,!0),n=r.getUint32(8,!0),i=r.getUint32(12,!0);return[new _n([a,t],0),new _n([n,i],0)]}class Zc{constructor(r,a,t){if(this.bitmap=r,this.padding=a,this.hashCount=t,a<0||a>=8)throw new Ti(`Invalid padding: ${a}`);if(t<0)throw new Ti(`Invalid hash count: ${t}`);if(r.length>0&&this.hashCount===0)throw new Ti(`Invalid hash count: ${t}`);if(r.length===0&&a!==0)throw new Ti(`Invalid padding when bitmap length is 0: ${a}`);this.It=8*r.length-a,this.Tt=_n.fromNumber(this.It)}Et(r,a,t){let n=r.add(a.multiply(_n.fromNumber(t)));return n.compare(sE)===1&&(n=new _n([n.getBits(0),n.getBits(1)],0)),n.modulo(this.Tt).toNumber()}At(r){return(this.bitmap[Math.floor(r/8)]&1<<r%8)!=0}vt(r){if(this.It===0)return!1;const a=yh(r),[t,n]=Eh(a);for(let i=0;i<this.hashCount;i++){const A=this.Et(t,n,i);if(!this.At(A))return!1}return!0}static create(r,a,t){const n=r%8==0?0:8-r%8,i=new Uint8Array(Math.ceil(r/8)),A=new Zc(i,n,a);return t.forEach(o=>A.insert(o)),A}insert(r){if(this.It===0)return;const a=yh(r),[t,n]=Eh(a);for(let i=0;i<this.hashCount;i++){const A=this.Et(t,n,i);this.Rt(A)}}Rt(r){const a=Math.floor(r/8),t=r%8;this.bitmap[a]|=1<<t}}class Ti extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(r,a,t,n,i){this.snapshotVersion=r,this.targetChanges=a,this.targetMismatches=t,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(r,a,t){const n=new Map;return n.set(r,K2.createSynthesizedTargetChangeForCurrentChange(r,a,t)),new zf(n0.min(),n,new D0(b0),ua(),o0())}}class K2{constructor(r,a,t,n,i){this.resumeToken=r,this.current=a,this.addedDocuments=t,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(r,a,t){return new K2(t,a,o0(),o0(),o0())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(r,a,t,n){this.Pt=r,this.removedTargetIds=a,this.key=t,this.bt=n}}class U5{constructor(r,a){this.targetId=r,this.Vt=a}}class j5{constructor(r,a,t=Rr.EMPTY_BYTE_STRING,n=null){this.state=r,this.targetIds=a,this.resumeToken=t,this.cause=n}}class Ih{constructor(){this.St=0,this.Dt=Ch(),this.Ct=Rr.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(r){r.approximateByteSize()>0&&(this.Nt=!0,this.Ct=r)}Ot(){let r=o0(),a=o0(),t=o0();return this.Dt.forEach((n,i)=>{switch(i){case 0:r=r.add(n);break;case 2:a=a.add(n);break;case 1:t=t.add(n);break;default:a0()}}),new K2(this.Ct,this.xt,r,a,t)}Ft(){this.Nt=!1,this.Dt=Ch()}Bt(r,a){this.Nt=!0,this.Dt=this.Dt.insert(r,a)}Lt(r){this.Nt=!0,this.Dt=this.Dt.remove(r)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class uE{constructor(r){this.Gt=r,this.Qt=new Map,this.jt=ua(),this.zt=_h(),this.Wt=new D0(b0)}Ht(r){for(const a of r.Pt)r.bt&&r.bt.isFoundDocument()?this.Jt(a,r.bt):this.Yt(a,r.key,r.bt);for(const a of r.removedTargetIds)this.Yt(a,r.key,r.bt)}Xt(r){this.forEachTarget(r,a=>{const t=this.Zt(a);switch(r.state){case 0:this.te(a)&&t.$t(r.resumeToken);break;case 1:t.Ut(),t.kt||t.Ft(),t.$t(r.resumeToken);break;case 2:t.Ut(),t.kt||this.removeTarget(a);break;case 3:this.te(a)&&(t.Kt(),t.$t(r.resumeToken));break;case 4:this.te(a)&&(this.ee(a),t.$t(r.resumeToken));break;default:a0()}})}forEachTarget(r,a){r.targetIds.length>0?r.targetIds.forEach(a):this.Qt.forEach((t,n)=>{this.te(n)&&a(n)})}ne(r){var a;const t=r.targetId,n=r.Vt.count,i=this.se(t);if(i){const A=i.target;if(S1(A))if(n===0){const o=new Y(A.path);this.Yt(t,o,yr.newNoDocument(o,n0.min()))}else R0(n===1);else{const o=this.ie(t);if(o!==n){const f=this.re(r,o);if(f!==0){this.ee(t);const s=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(t,s)}(a=Bc.instance)===null||a===void 0||a.notifyOnExistenceFilterMismatch(function(s,u,c){var d,b,w,y,B,g;const h={localCacheCount:u,existenceFilterCount:c.count},m=c.unchangedNames;return m&&(h.bloomFilter={applied:s===0,hashCount:(d=m==null?void 0:m.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(y=(w=(b=m==null?void 0:m.bits)===null||b===void 0?void 0:b.bitmap)===null||w===void 0?void 0:w.length)!==null&&y!==void 0?y:0,padding:(g=(B=m==null?void 0:m.bits)===null||B===void 0?void 0:B.padding)!==null&&g!==void 0?g:0}),h}(f,o,r.Vt))}}}}re(r,a){const{unchangedNames:t,count:n}=r.Vt;if(!t||!t.bits)return 1;const{bits:{bitmap:i="",padding:A=0},hashCount:o=0}=t;let f,s;try{f=Wt(i).toUint8Array()}catch(u){if(u instanceof k5)return Xn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw u}try{s=new Zc(f,A,o)}catch(u){return Xn(u instanceof Ti?"BloomFilter error: ":"Applying bloom filter failed: ",u),1}return s.It===0?1:n!==a-this.oe(r.targetId,s)?2:0}oe(r,a){const t=this.Gt.getRemoteKeysForTarget(r);let n=0;return t.forEach(i=>{const A=this.Gt.ue(),o=`projects/${A.projectId}/databases/${A.database}/documents/${i.path.canonicalString()}`;a.vt(o)||(this.Yt(r,i,null),n++)}),n}ce(r){const a=new Map;this.Qt.forEach((i,A)=>{const o=this.se(A);if(o){if(i.current&&S1(o.target)){const f=new Y(o.target.path);this.jt.get(f)!==null||this.ae(A,f)||this.Yt(A,f,yr.newNoDocument(f,r))}i.Mt&&(a.set(A,i.Ot()),i.Ft())}});let t=o0();this.zt.forEach((i,A)=>{let o=!0;A.forEachWhile(f=>{const s=this.se(f);return!s||s.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(t=t.add(i))}),this.jt.forEach((i,A)=>A.setReadTime(r));const n=new zf(r,a,this.Wt,this.jt,t);return this.jt=ua(),this.zt=_h(),this.Wt=new D0(b0),n}Jt(r,a){if(!this.te(r))return;const t=this.ae(r,a.key)?2:0;this.Zt(r).Bt(a.key,t),this.jt=this.jt.insert(a.key,a),this.zt=this.zt.insert(a.key,this.he(a.key).add(r))}Yt(r,a,t){if(!this.te(r))return;const n=this.Zt(r);this.ae(r,a)?n.Bt(a,1):n.Lt(a),this.zt=this.zt.insert(a,this.he(a).delete(r)),t&&(this.jt=this.jt.insert(a,t))}removeTarget(r){this.Qt.delete(r)}ie(r){const a=this.Zt(r).Ot();return this.Gt.getRemoteKeysForTarget(r).size+a.addedDocuments.size-a.removedDocuments.size}qt(r){this.Zt(r).qt()}Zt(r){let a=this.Qt.get(r);return a||(a=new Ih,this.Qt.set(r,a)),a}he(r){let a=this.zt.get(r);return a||(a=new Cr(b0),this.zt=this.zt.insert(r,a)),a}te(r){const a=this.se(r)!==null;return a||j("WatchChangeAggregator","Detected inactive target",r),a}se(r){const a=this.Qt.get(r);return a&&a.kt?null:this.Gt.le(r)}ee(r){this.Qt.set(r,new Ih),this.Gt.getRemoteKeysForTarget(r).forEach(a=>{this.Yt(r,a,null)})}ae(r,a){return this.Gt.getRemoteKeysForTarget(r).has(a)}}function _h(){return new D0(Y.comparator)}function Ch(){return new D0(Y.comparator)}const lE=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cE=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),dE=(()=>({and:"AND",or:"OR"}))();class hE{constructor(r,a){this.databaseId=r,this.useProto3Json=a}}function G1(e,r){return e.useProto3Json||Of(r)?r:{value:r}}function Qo(e,r){return e.useProto3Json?`${new Date(1e3*r.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+r.nanoseconds).slice(-9)}Z`:{seconds:""+r.seconds,nanos:r.nanoseconds}}function L5(e,r){return e.useProto3Json?r.toBase64():r.toUint8Array()}function bE(e,r){return Qo(e,r.toTimestamp())}function xe(e){return R0(!!e),n0.fromTimestamp(function(r){const a=$a(r);return new er(a.seconds,a.nanos)}(e))}function Rc(e,r){return function(a){return new w0(["projects",a.projectId,"databases",a.database])}(e).child("documents").child(r).canonicalString()}function Y5(e){const r=w0.fromString(e);return R0(J5(r)),r}function X1(e,r){return Rc(e.databaseId,r.path)}function Ks(e,r){const a=Y5(r);if(a.get(1)!==e.databaseId.projectId)throw new G(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+a.get(1)+" vs "+e.databaseId.projectId);if(a.get(3)!==e.databaseId.database)throw new G(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+a.get(3)+" vs "+e.databaseId.database);return new Y(Q5(a))}function M1(e,r){return Rc(e.databaseId,r)}function gE(e){const r=Y5(e);return r.length===4?w0.emptyPath():Q5(r)}function x1(e){return new w0(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Q5(e){return R0(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Bh(e,r,a){return{name:X1(e,r),fields:a.value.mapValue.fields}}function mE(e,r){let a;if("targetChange"in r){r.targetChange;const t=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:a0()}(r.targetChange.targetChangeType||"NO_CHANGE"),n=r.targetChange.targetIds||[],i=function(f,s){return f.useProto3Json?(R0(s===void 0||typeof s=="string"),Rr.fromBase64String(s||"")):(R0(s===void 0||s instanceof Uint8Array),Rr.fromUint8Array(s||new Uint8Array))}(e,r.targetChange.resumeToken),A=r.targetChange.cause,o=A&&function(f){const s=f.code===void 0?R.UNKNOWN:O5(f.code);return new G(s,f.message||"")}(A);a=new j5(t,n,i,o||null)}else if("documentChange"in r){r.documentChange;const t=r.documentChange;t.document,t.document.name,t.document.updateTime;const n=Ks(e,t.document.name),i=xe(t.document.updateTime),A=t.document.createTime?xe(t.document.createTime):n0.min(),o=new oe({mapValue:{fields:t.document.fields}}),f=yr.newFoundDocument(n,i,A,o),s=t.targetIds||[],u=t.removedTargetIds||[];a=new eo(s,u,f.key,f)}else if("documentDelete"in r){r.documentDelete;const t=r.documentDelete;t.document;const n=Ks(e,t.document),i=t.readTime?xe(t.readTime):n0.min(),A=yr.newNoDocument(n,i),o=t.removedTargetIds||[];a=new eo([],o,A.key,A)}else if("documentRemove"in r){r.documentRemove;const t=r.documentRemove;t.document;const n=Ks(e,t.document),i=t.removedTargetIds||[];a=new eo([],i,n,null)}else{if(!("filter"in r))return a0();{r.filter;const t=r.filter;t.targetId;const{count:n=0,unchangedNames:i}=t,A=new AE(n,i),o=t.targetId;a=new U5(o,A)}}return a}function pE(e,r){let a;if(r instanceof $2)a={update:Bh(e,r.key,r.value)};else if(r instanceof _c)a={delete:X1(e,r.key)};else if(r instanceof Yt)a={update:Bh(e,r.key,r.data),updateMask:BE(r.fieldMask)};else{if(!(r instanceof tE))return a0();a={verify:X1(e,r.key)}}return r.fieldTransforms.length>0&&(a.updateTransforms=r.fieldTransforms.map(t=>function(n,i){const A=i.transform;if(A instanceof C2)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(A instanceof B2)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:A.elements}};if(A instanceof Z2)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:A.elements}};if(A instanceof Yo)return{fieldPath:i.field.canonicalString(),increment:A.gt};throw a0()}(0,t))),r.precondition.isNone||(a.currentDocument=function(t,n){return n.updateTime!==void 0?{updateTime:bE(t,n.updateTime)}:n.exists!==void 0?{exists:n.exists}:a0()}(e,r.precondition)),a}function vE(e,r){return e&&e.length>0?(R0(r!==void 0),e.map(a=>function(t,n){let i=t.updateTime?xe(t.updateTime):xe(n);return i.isEqual(n0.min())&&(i=xe(n)),new rE(i,t.transformResults||[])}(a,r))):[]}function kE(e,r){return{documents:[M1(e,r.path)]}}function wE(e,r){const a={structuredQuery:{}},t=r.path;r.collectionGroup!==null?(a.parent=M1(e,t),a.structuredQuery.from=[{collectionId:r.collectionGroup,allDescendants:!0}]):(a.parent=M1(e,t.popLast()),a.structuredQuery.from=[{collectionId:t.lastSegment()}]);const n=function(f){if(f.length!==0)return z5(Ce.create(f,"and"))}(r.filters);n&&(a.structuredQuery.where=n);const i=function(f){if(f.length!==0)return f.map(s=>function(u){return{field:rn(u.field),direction:IE(u.dir)}}(s))}(r.orderBy);i&&(a.structuredQuery.orderBy=i);const A=G1(e,r.limit);var o;return A!==null&&(a.structuredQuery.limit=A),r.startAt&&(a.structuredQuery.startAt={before:(o=r.startAt).inclusive,values:o.position}),r.endAt&&(a.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(r.endAt)),a}function yE(e){let r=gE(e.parent);const a=e.structuredQuery,t=a.from?a.from.length:0;let n=null;if(t>0){R0(t===1);const u=a.from[0];u.allDescendants?n=u.collectionId:r=r.child(u.collectionId)}let i=[];a.where&&(i=function(u){const c=H5(u);return c instanceof Ce&&I5(c)?c.getFilters():[c]}(a.where));let A=[];a.orderBy&&(A=a.orderBy.map(u=>function(c){return new Cn(en(c.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(c.direction))}(u)));let o=null;a.limit&&(o=function(u){let c;return c=typeof u=="object"?u.value:u,Of(c)?null:c}(a.limit));let f=null;a.startAt&&(f=function(u){const c=!!u.before,d=u.values||[];return new On(d,c)}(a.startAt));let s=null;return a.endAt&&(s=function(u){const c=!u.before,d=u.values||[];return new On(d,c)}(a.endAt)),P7(r,n,A,i,o,"F",f,s)}function EE(e,r){const a=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return a0()}}(r.purpose);return a==null?null:{"goog-listen-tags":a}}function H5(e){return e.unaryFilter!==void 0?function(r){switch(r.unaryFilter.op){case"IS_NAN":const a=en(r.unaryFilter.field);return J0.create(a,"==",{doubleValue:NaN});case"IS_NULL":const t=en(r.unaryFilter.field);return J0.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const n=en(r.unaryFilter.field);return J0.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=en(r.unaryFilter.field);return J0.create(i,"!=",{nullValue:"NULL_VALUE"});default:return a0()}}(e):e.fieldFilter!==void 0?function(r){return J0.create(en(r.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return a0()}}(r.fieldFilter.op),r.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(r){return Ce.create(r.compositeFilter.filters.map(a=>H5(a)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return a0()}}(r.compositeFilter.op))}(e):a0()}function IE(e){return lE[e]}function _E(e){return cE[e]}function CE(e){return dE[e]}function rn(e){return{fieldPath:e.canonicalString()}}function en(e){return Er.fromServerFormat(e.fieldPath)}function z5(e){return e instanceof J0?function(r){if(r.op==="=="){if(dh(r.value))return{unaryFilter:{field:rn(r.field),op:"IS_NAN"}};if(ch(r.value))return{unaryFilter:{field:rn(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(dh(r.value))return{unaryFilter:{field:rn(r.field),op:"IS_NOT_NAN"}};if(ch(r.value))return{unaryFilter:{field:rn(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:rn(r.field),op:_E(r.op),value:r.value}}}(e):e instanceof Ce?function(r){const a=r.getFilters().map(t=>z5(t));return a.length===1?a[0]:{compositeFilter:{op:CE(r.op),filters:a}}}(e):a0()}function BE(e){const r=[];return e.fields.forEach(a=>r.push(a.canonicalString())),{fieldPaths:r}}function J5(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(r,a,t,n,i=n0.min(),A=n0.min(),o=Rr.EMPTY_BYTE_STRING,f=null){this.target=r,this.targetId=a,this.purpose=t,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=A,this.resumeToken=o,this.expectedCount=f}withSequenceNumber(r){return new Fa(this.target,this.targetId,this.purpose,r,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(r,a){return new Fa(this.target,this.targetId,this.purpose,this.sequenceNumber,a,this.lastLimboFreeSnapshotVersion,r,null)}withExpectedCount(r){return new Fa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,r)}withLastLimboFreeSnapshotVersion(r){return new Fa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,r,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(r){this.fe=r}}function RE(e){const r=yE({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Lo(r,r.limit,"L"):r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.rn=new WE}addToCollectionParentIndex(r,a){return this.rn.add(a),N.resolve()}getCollectionParents(r,a){return N.resolve(this.rn.getEntries(a))}addFieldIndex(r,a){return N.resolve()}deleteFieldIndex(r,a){return N.resolve()}getDocumentsMatchingTarget(r,a){return N.resolve(null)}getIndexType(r,a){return N.resolve(0)}getFieldIndexes(r,a){return N.resolve([])}getNextCollectionGroupToUpdate(r){return N.resolve(null)}getMinOffset(r,a){return N.resolve(Ja.min())}getMinOffsetFromCollectionGroup(r,a){return N.resolve(Ja.min())}updateCollectionGroup(r,a,t){return N.resolve()}updateIndexEntries(r,a){return N.resolve()}}class WE{constructor(){this.index={}}add(r){const a=r.lastSegment(),t=r.popLast(),n=this.index[a]||new Cr(w0.comparator),i=!n.has(t);return this.index[a]=n.add(t),i}has(r){const a=r.lastSegment(),t=r.popLast(),n=this.index[a];return n&&n.has(t)}getEntries(r){return(this.index[r]||new Cr(w0.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(r){this.Nn=r}next(){return this.Nn+=2,this.Nn}static kn(){return new Un(0)}static Mn(){return new Un(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(){this.changes=new ai(r=>r.toString(),(r,a)=>r.isEqual(a)),this.changesApplied=!1}addEntry(r){this.assertNotApplied(),this.changes.set(r.key,r)}removeEntry(r,a){this.assertNotApplied(),this.changes.set(r,yr.newInvalidDocument(r).setReadTime(a))}getEntry(r,a){this.assertNotApplied();const t=this.changes.get(a);return t!==void 0?N.resolve(t):this.getFromCache(r,a)}getEntries(r,a){return this.getAllFromCache(r,a)}apply(r){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(r)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(r,a){this.overlayedDocument=r,this.mutatedFields=a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(r,a,t,n){this.remoteDocumentCache=r,this.mutationQueue=a,this.documentOverlayCache=t,this.indexManager=n}getDocument(r,a){let t=null;return this.documentOverlayCache.getOverlay(r,a).next(n=>(t=n,this.remoteDocumentCache.getEntry(r,a))).next(n=>(t!==null&&Ui(t.mutation,n,ke.empty(),er.now()),n))}getDocuments(r,a){return this.remoteDocumentCache.getEntries(r,a).next(t=>this.getLocalViewOfDocuments(r,t,o0()).next(()=>t))}getLocalViewOfDocuments(r,a,t=o0()){const n=gt();return this.populateOverlays(r,n,a).next(()=>this.computeViews(r,a,n,t).next(i=>{let A=Ri();return i.forEach((o,f)=>{A=A.insert(o,f.overlayedDocument)}),A}))}getOverlayedDocuments(r,a){const t=gt();return this.populateOverlays(r,t,a).next(()=>this.computeViews(r,a,t,o0()))}populateOverlays(r,a,t){const n=[];return t.forEach(i=>{a.has(i)||n.push(i)}),this.documentOverlayCache.getOverlays(r,n).next(i=>{i.forEach((A,o)=>{a.set(A,o)})})}computeViews(r,a,t,n){let i=ua();const A=Oi(),o=Oi();return a.forEach((f,s)=>{const u=t.get(s.key);n.has(s.key)&&(u===void 0||u.mutation instanceof Yt)?i=i.insert(s.key,s):u!==void 0?(A.set(s.key,u.mutation.getFieldMask()),Ui(u.mutation,s,u.mutation.getFieldMask(),er.now())):A.set(s.key,ke.empty())}),this.recalculateAndSaveOverlays(r,i).next(f=>(f.forEach((s,u)=>A.set(s,u)),a.forEach((s,u)=>{var c;return o.set(s,new FE(u,(c=A.get(s))!==null&&c!==void 0?c:null))}),o))}recalculateAndSaveOverlays(r,a){const t=Oi();let n=new D0((A,o)=>A-o),i=o0();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(r,a).next(A=>{for(const o of A)o.keys().forEach(f=>{const s=a.get(f);if(s===null)return;let u=t.get(f)||ke.empty();u=o.applyToLocalView(s,u),t.set(f,u);const c=(n.get(o.batchId)||o0()).add(f);n=n.insert(o.batchId,c)})}).next(()=>{const A=[],o=n.getReverseIterator();for(;o.hasNext();){const f=o.getNext(),s=f.key,u=f.value,c=F5();u.forEach(d=>{if(!i.has(d)){const b=x5(a.get(d),t.get(d));b!==null&&c.set(d,b),i=i.add(d)}}),A.push(this.documentOverlayCache.saveOverlays(r,s,c))}return N.waitFor(A)}).next(()=>t)}recalculateAndSaveOverlaysForDocumentKeys(r,a){return this.remoteDocumentCache.getEntries(r,a).next(t=>this.recalculateAndSaveOverlays(r,t))}getDocumentsMatchingQuery(r,a,t){return function(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}(a)?this.getDocumentsMatchingDocumentQuery(r,a.path):Ic(a)?this.getDocumentsMatchingCollectionGroupQuery(r,a,t):this.getDocumentsMatchingCollectionQuery(r,a,t)}getNextDocuments(r,a,t,n){return this.remoteDocumentCache.getAllFromCollectionGroup(r,a,t,n).next(i=>{const A=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(r,a,t.largestBatchId,n-i.size):N.resolve(gt());let o=-1,f=i;return A.next(s=>N.forEach(s,(u,c)=>(o<c.largestBatchId&&(o=c.largestBatchId),i.get(u)?N.resolve():this.remoteDocumentCache.getEntry(r,u).next(d=>{f=f.insert(u,d)}))).next(()=>this.populateOverlays(r,s,i)).next(()=>this.computeViews(r,f,s,o0())).next(u=>({batchId:o,changes:N5(u)})))})}getDocumentsMatchingDocumentQuery(r,a){return this.getDocument(r,new Y(a)).next(t=>{let n=Ri();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n})}getDocumentsMatchingCollectionGroupQuery(r,a,t){const n=a.collectionGroup;let i=Ri();return this.indexManager.getCollectionParents(r,n).next(A=>N.forEach(A,o=>{const f=function(s,u){return new Lt(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(a,o.child(n));return this.getDocumentsMatchingCollectionQuery(r,f,t).next(s=>{s.forEach((u,c)=>{i=i.insert(u,c)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(r,a,t){let n;return this.documentOverlayCache.getOverlaysForCollection(r,a.path,t.largestBatchId).next(i=>(n=i,this.remoteDocumentCache.getDocumentsMatchingQuery(r,a,t,n))).next(i=>{n.forEach((o,f)=>{const s=f.getKey();i.get(s)===null&&(i=i.insert(s,yr.newInvalidDocument(s)))});let A=Ri();return i.forEach((o,f)=>{const s=n.get(o);s!==void 0&&Ui(s.mutation,f,ke.empty(),er.now()),Yf(a,f)&&(A=A.insert(o,f))}),A})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VE{constructor(r){this.serializer=r,this.cs=new Map,this.hs=new Map}getBundleMetadata(r,a){return N.resolve(this.cs.get(a))}saveBundleMetadata(r,a){var t;return this.cs.set(a.id,{id:(t=a).id,version:t.version,createTime:xe(t.createTime)}),N.resolve()}getNamedQuery(r,a){return N.resolve(this.hs.get(a))}saveNamedQuery(r,a){return this.hs.set(a.name,function(t){return{name:t.name,query:RE(t.bundledQuery),readTime:xe(t.readTime)}}(a)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(){this.overlays=new D0(Y.comparator),this.ls=new Map}getOverlay(r,a){return N.resolve(this.overlays.get(a))}getOverlays(r,a){const t=gt();return N.forEach(a,n=>this.getOverlay(r,n).next(i=>{i!==null&&t.set(n,i)})).next(()=>t)}saveOverlays(r,a,t){return t.forEach((n,i)=>{this.we(r,a,i)}),N.resolve()}removeOverlaysForBatchId(r,a,t){const n=this.ls.get(t);return n!==void 0&&(n.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(t)),N.resolve()}getOverlaysForCollection(r,a,t){const n=gt(),i=a.length+1,A=new Y(a.child("")),o=this.overlays.getIteratorFrom(A);for(;o.hasNext();){const f=o.getNext().value,s=f.getKey();if(!a.isPrefixOf(s.path))break;s.path.length===i&&f.largestBatchId>t&&n.set(f.getKey(),f)}return N.resolve(n)}getOverlaysForCollectionGroup(r,a,t,n){let i=new D0((s,u)=>s-u);const A=this.overlays.getIterator();for(;A.hasNext();){const s=A.getNext().value;if(s.getKey().getCollectionGroup()===a&&s.largestBatchId>t){let u=i.get(s.largestBatchId);u===null&&(u=gt(),i=i.insert(s.largestBatchId,u)),u.set(s.getKey(),s)}}const o=gt(),f=i.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((s,u)=>o.set(s,u)),!(o.size()>=n)););return N.resolve(o)}we(r,a,t){const n=this.overlays.get(t.key);if(n!==null){const A=this.ls.get(n.largestBatchId).delete(t.key);this.ls.set(n.largestBatchId,A)}this.overlays=this.overlays.insert(t.key,new iE(a,t));let i=this.ls.get(a);i===void 0&&(i=o0(),this.ls.set(a,i)),this.ls.set(a,i.add(t.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(){this.fs=new Cr(tr.ds),this.ws=new Cr(tr._s)}isEmpty(){return this.fs.isEmpty()}addReference(r,a){const t=new tr(r,a);this.fs=this.fs.add(t),this.ws=this.ws.add(t)}gs(r,a){r.forEach(t=>this.addReference(t,a))}removeReference(r,a){this.ys(new tr(r,a))}ps(r,a){r.forEach(t=>this.removeReference(t,a))}Is(r){const a=new Y(new w0([])),t=new tr(a,r),n=new tr(a,r+1),i=[];return this.ws.forEachInRange([t,n],A=>{this.ys(A),i.push(A.key)}),i}Ts(){this.fs.forEach(r=>this.ys(r))}ys(r){this.fs=this.fs.delete(r),this.ws=this.ws.delete(r)}Es(r){const a=new Y(new w0([])),t=new tr(a,r),n=new tr(a,r+1);let i=o0();return this.ws.forEachInRange([t,n],A=>{i=i.add(A.key)}),i}containsKey(r){const a=new tr(r,0),t=this.fs.firstAfterOrEqual(a);return t!==null&&r.isEqual(t.key)}}class tr{constructor(r,a){this.key=r,this.As=a}static ds(r,a){return Y.comparator(r.key,a.key)||b0(r.As,a.As)}static _s(r,a){return b0(r.As,a.As)||Y.comparator(r.key,a.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(r,a){this.indexManager=r,this.referenceDelegate=a,this.mutationQueue=[],this.vs=1,this.Rs=new Cr(tr.ds)}checkEmpty(r){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(r,a,t,n){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const A=new nE(i,a,t,n);this.mutationQueue.push(A);for(const o of n)this.Rs=this.Rs.add(new tr(o.key,i)),this.indexManager.addToCollectionParentIndex(r,o.key.path.popLast());return N.resolve(A)}lookupMutationBatch(r,a){return N.resolve(this.Ps(a))}getNextMutationBatchAfterBatchId(r,a){const t=a+1,n=this.bs(t),i=n<0?0:n;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(r){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(r,a){const t=new tr(a,0),n=new tr(a,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([t,n],A=>{const o=this.Ps(A.As);i.push(o)}),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(r,a){let t=new Cr(b0);return a.forEach(n=>{const i=new tr(n,0),A=new tr(n,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,A],o=>{t=t.add(o.As)})}),N.resolve(this.Vs(t))}getAllMutationBatchesAffectingQuery(r,a){const t=a.path,n=t.length+1;let i=t;Y.isDocumentKey(i)||(i=i.child(""));const A=new tr(new Y(i),0);let o=new Cr(b0);return this.Rs.forEachWhile(f=>{const s=f.key.path;return!!t.isPrefixOf(s)&&(s.length===n&&(o=o.add(f.As)),!0)},A),N.resolve(this.Vs(o))}Vs(r){const a=[];return r.forEach(t=>{const n=this.Ps(t);n!==null&&a.push(n)}),a}removeMutationBatch(r,a){R0(this.Ss(a.batchId,"removed")===0),this.mutationQueue.shift();let t=this.Rs;return N.forEach(a.mutations,n=>{const i=new tr(n.key,a.batchId);return t=t.delete(i),this.referenceDelegate.markPotentiallyOrphaned(r,n.key)}).next(()=>{this.Rs=t})}Cn(r){}containsKey(r,a){const t=new tr(a,0),n=this.Rs.firstAfterOrEqual(t);return N.resolve(a.isEqual(n&&n.key))}performConsistencyCheck(r){return this.mutationQueue.length,N.resolve()}Ss(r,a){return this.bs(r)}bs(r){return this.mutationQueue.length===0?0:r-this.mutationQueue[0].batchId}Ps(r){const a=this.bs(r);return a<0||a>=this.mutationQueue.length?null:this.mutationQueue[a]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{constructor(r){this.Ds=r,this.docs=new D0(Y.comparator),this.size=0}setIndexManager(r){this.indexManager=r}addEntry(r,a){const t=a.key,n=this.docs.get(t),i=n?n.size:0,A=this.Ds(a);return this.docs=this.docs.insert(t,{document:a.mutableCopy(),size:A}),this.size+=A-i,this.indexManager.addToCollectionParentIndex(r,t.path.popLast())}removeEntry(r){const a=this.docs.get(r);a&&(this.docs=this.docs.remove(r),this.size-=a.size)}getEntry(r,a){const t=this.docs.get(a);return N.resolve(t?t.document.mutableCopy():yr.newInvalidDocument(a))}getEntries(r,a){let t=ua();return a.forEach(n=>{const i=this.docs.get(n);t=t.insert(n,i?i.document.mutableCopy():yr.newInvalidDocument(n))}),N.resolve(t)}getDocumentsMatchingQuery(r,a,t,n){let i=ua();const A=a.path,o=new Y(A.child("")),f=this.docs.getIteratorFrom(o);for(;f.hasNext();){const{key:s,value:{document:u}}=f.getNext();if(!A.isPrefixOf(s.path))break;s.path.length>A.length+1||I7(E7(u),t)<=0||(n.has(u.key)||Yf(a,u))&&(i=i.insert(u.key,u.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(r,a,t,n){a0()}Cs(r,a){return N.forEach(this.docs,t=>a(t))}newChangeBuffer(r){return new ME(this)}getSize(r){return N.resolve(this.size)}}class ME extends NE{constructor(r){super(),this.os=r}applyChanges(r){const a=[];return this.changes.forEach((t,n)=>{n.isValidDocument()?a.push(this.os.addEntry(r,n)):this.os.removeEntry(t)}),N.waitFor(a)}getFromCache(r,a){return this.os.getEntry(r,a)}getAllFromCache(r,a){return this.os.getEntries(r,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(r){this.persistence=r,this.xs=new ai(a=>wc(a),yc),this.lastRemoteSnapshotVersion=n0.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Tc,this.targetCount=0,this.Ms=Un.kn()}forEachTarget(r,a){return this.xs.forEach((t,n)=>a(n)),N.resolve()}getLastRemoteSnapshotVersion(r){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(r){return N.resolve(this.Ns)}allocateTargetId(r){return this.highestTargetId=this.Ms.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(r,a,t){return t&&(this.lastRemoteSnapshotVersion=t),a>this.Ns&&(this.Ns=a),N.resolve()}Fn(r){this.xs.set(r.target,r);const a=r.targetId;a>this.highestTargetId&&(this.Ms=new Un(a),this.highestTargetId=a),r.sequenceNumber>this.Ns&&(this.Ns=r.sequenceNumber)}addTargetData(r,a){return this.Fn(a),this.targetCount+=1,N.resolve()}updateTargetData(r,a){return this.Fn(a),N.resolve()}removeTargetData(r,a){return this.xs.delete(a.target),this.ks.Is(a.targetId),this.targetCount-=1,N.resolve()}removeTargets(r,a,t){let n=0;const i=[];return this.xs.forEach((A,o)=>{o.sequenceNumber<=a&&t.get(o.targetId)===null&&(this.xs.delete(A),i.push(this.removeMatchingKeysForTargetId(r,o.targetId)),n++)}),N.waitFor(i).next(()=>n)}getTargetCount(r){return N.resolve(this.targetCount)}getTargetData(r,a){const t=this.xs.get(a)||null;return N.resolve(t)}addMatchingKeys(r,a,t){return this.ks.gs(a,t),N.resolve()}removeMatchingKeys(r,a,t){this.ks.ps(a,t);const n=this.persistence.referenceDelegate,i=[];return n&&a.forEach(A=>{i.push(n.markPotentiallyOrphaned(r,A))}),N.waitFor(i)}removeMatchingKeysForTargetId(r,a){return this.ks.Is(a),N.resolve()}getMatchingKeysForTargetId(r,a){const t=this.ks.Es(a);return N.resolve(t)}containsKey(r,a){return N.resolve(this.ks.containsKey(a))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(r,a){this.$s={},this.overlays={},this.Os=new pc(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=r(this),this.Bs=new xE(this),this.indexManager=new TE,this.remoteDocumentCache=function(t){return new XE(t)}(t=>this.referenceDelegate.Ls(t)),this.serializer=new ZE(a),this.qs=new VE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(r){return this.indexManager}getDocumentOverlayCache(r){let a=this.overlays[r.toKey()];return a||(a=new DE,this.overlays[r.toKey()]=a),a}getMutationQueue(r,a){let t=this.$s[r.toKey()];return t||(t=new GE(a,this.referenceDelegate),this.$s[r.toKey()]=t),t}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(r,a,t){j("MemoryPersistence","Starting transaction:",r);const n=new OE(this.Os.next());return this.referenceDelegate.Us(),t(n).next(i=>this.referenceDelegate.Ks(n).next(()=>i)).toPromise().then(i=>(n.raiseOnCommittedEvent(),i))}Gs(r,a){return N.or(Object.values(this.$s).map(t=>()=>t.containsKey(r,a)))}}class OE extends C7{constructor(r){super(),this.currentSequenceNumber=r}}class Wc{constructor(r){this.persistence=r,this.Qs=new Tc,this.js=null}static zs(r){return new Wc(r)}get Ws(){if(this.js)return this.js;throw a0()}addReference(r,a,t){return this.Qs.addReference(t,a),this.Ws.delete(t.toString()),N.resolve()}removeReference(r,a,t){return this.Qs.removeReference(t,a),this.Ws.add(t.toString()),N.resolve()}markPotentiallyOrphaned(r,a){return this.Ws.add(a.toString()),N.resolve()}removeTarget(r,a){this.Qs.Is(a.targetId).forEach(n=>this.Ws.add(n.toString()));const t=this.persistence.getTargetCache();return t.getMatchingKeysForTargetId(r,a.targetId).next(n=>{n.forEach(i=>this.Ws.add(i.toString()))}).next(()=>t.removeTargetData(r,a))}Us(){this.js=new Set}Ks(r){const a=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Ws,t=>{const n=Y.fromPath(t);return this.Hs(r,n).next(i=>{i||a.removeEntry(n,n0.min())})}).next(()=>(this.js=null,a.apply(r)))}updateLimboDocument(r,a){return this.Hs(r,a).next(t=>{t?this.Ws.delete(a.toString()):this.Ws.add(a.toString())})}Ls(r){return 0}Hs(r,a){return N.or([()=>N.resolve(this.Qs.containsKey(a)),()=>this.persistence.getTargetCache().containsKey(r,a),()=>this.persistence.Gs(r,a)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(r,a,t,n){this.targetId=r,this.fromCache=a,this.Fi=t,this.Bi=n}static Li(r,a){let t=o0(),n=o0();for(const i of a.docChanges)switch(i.type){case 0:t=t.add(i.doc.key);break;case 1:n=n.add(i.doc.key)}return new Nc(r,a.fromCache,t,n)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.qi=!1}initialize(r,a){this.Ui=r,this.indexManager=a,this.qi=!0}getDocumentsMatchingQuery(r,a,t,n){return this.Ki(r,a).next(i=>i||this.Gi(r,a,n,t)).next(i=>i||this.Qi(r,a))}Ki(r,a){if(mh(a))return N.resolve(null);let t=sa(a);return this.indexManager.getIndexType(r,t).next(n=>n===0?null:(a.limit!==null&&n===1&&(a=Lo(a,null,"F"),t=sa(a)),this.indexManager.getDocumentsMatchingTarget(r,t).next(i=>{const A=o0(...i);return this.Ui.getDocuments(r,A).next(o=>this.indexManager.getMinOffset(r,t).next(f=>{const s=this.ji(a,o);return this.zi(a,s,A,f.readTime)?this.Ki(r,Lo(a,null,"F")):this.Wi(r,s,a,f)}))})))}Gi(r,a,t,n){return mh(a)||n.isEqual(n0.min())?this.Qi(r,a):this.Ui.getDocuments(r,t).next(i=>{const A=this.ji(a,i);return this.zi(a,A,t,n)?this.Qi(r,a):(fh()<=d0.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),D1(a)),this.Wi(r,A,a,y7(n,-1)))})}ji(r,a){let t=new Cr(T5(r));return a.forEach((n,i)=>{Yf(r,i)&&(t=t.add(i))}),t}zi(r,a,t,n){if(r.limit===null)return!1;if(t.size!==a.size)return!0;const i=r.limitType==="F"?a.last():a.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Qi(r,a){return fh()<=d0.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",D1(a)),this.Ui.getDocumentsMatchingQuery(r,a,Ja.min())}Wi(r,a,t,n){return this.Ui.getDocumentsMatchingQuery(r,t,n).next(i=>(a.forEach(A=>{i=i.insert(A.key,A)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(r,a,t,n){this.persistence=r,this.Hi=a,this.serializer=n,this.Ji=new D0(b0),this.Yi=new ai(i=>wc(i),yc),this.Xi=new Map,this.Zi=r.getRemoteDocumentCache(),this.Bs=r.getTargetCache(),this.qs=r.getBundleCache(),this.tr(t)}tr(r){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(r),this.indexManager=this.persistence.getIndexManager(r),this.mutationQueue=this.persistence.getMutationQueue(r,this.indexManager),this.localDocuments=new SE(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(r){return this.persistence.runTransaction("Collect garbage","readwrite-primary",a=>r.collect(a,this.Ji))}}function LE(e,r,a,t){return new jE(e,r,a,t)}async function $5(e,r){const a=i0(e);return await a.persistence.runTransaction("Handle user change","readonly",t=>{let n;return a.mutationQueue.getAllMutationBatches(t).next(i=>(n=i,a.tr(r),a.mutationQueue.getAllMutationBatches(t))).next(i=>{const A=[],o=[];let f=o0();for(const s of n){A.push(s.batchId);for(const u of s.mutations)f=f.add(u.key)}for(const s of i){o.push(s.batchId);for(const u of s.mutations)f=f.add(u.key)}return a.localDocuments.getDocuments(t,f).next(s=>({er:s,removedBatchIds:A,addedBatchIds:o}))})})}function YE(e,r){const a=i0(e);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const n=r.batch.keys(),i=a.Zi.newChangeBuffer({trackRemovals:!0});return function(A,o,f,s){const u=f.batch,c=u.keys();let d=N.resolve();return c.forEach(b=>{d=d.next(()=>s.getEntry(o,b)).next(w=>{const y=f.docVersions.get(b);R0(y!==null),w.version.compareTo(y)<0&&(u.applyToRemoteDocument(w,f),w.isValidDocument()&&(w.setReadTime(f.commitVersion),s.addEntry(w)))})}),d.next(()=>A.mutationQueue.removeMutationBatch(o,u))}(a,t,r,i).next(()=>i.apply(t)).next(()=>a.mutationQueue.performConsistencyCheck(t)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(t,n,r.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(A){let o=o0();for(let f=0;f<A.mutationResults.length;++f)A.mutationResults[f].transformResults.length>0&&(o=o.add(A.batch.mutations[f].key));return o}(r))).next(()=>a.localDocuments.getDocuments(t,n))})}function K5(e){const r=i0(e);return r.persistence.runTransaction("Get last remote snapshot version","readonly",a=>r.Bs.getLastRemoteSnapshotVersion(a))}function QE(e,r){const a=i0(e),t=r.snapshotVersion;let n=a.Ji;return a.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const A=a.Zi.newChangeBuffer({trackRemovals:!0});n=a.Ji;const o=[];r.targetChanges.forEach((u,c)=>{const d=n.get(c);if(!d)return;o.push(a.Bs.removeMatchingKeys(i,u.removedDocuments,c).next(()=>a.Bs.addMatchingKeys(i,u.addedDocuments,c)));let b=d.withSequenceNumber(i.currentSequenceNumber);r.targetMismatches.get(c)!==null?b=b.withResumeToken(Rr.EMPTY_BYTE_STRING,n0.min()).withLastLimboFreeSnapshotVersion(n0.min()):u.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(u.resumeToken,t)),n=n.insert(c,b),function(w,y,B){return w.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(d,b,u)&&o.push(a.Bs.updateTargetData(i,b))});let f=ua(),s=o0();if(r.documentUpdates.forEach(u=>{r.resolvedLimboDocuments.has(u)&&o.push(a.persistence.referenceDelegate.updateLimboDocument(i,u))}),o.push(HE(i,A,r.documentUpdates).next(u=>{f=u.nr,s=u.sr})),!t.isEqual(n0.min())){const u=a.Bs.getLastRemoteSnapshotVersion(i).next(c=>a.Bs.setTargetsMetadata(i,i.currentSequenceNumber,t));o.push(u)}return N.waitFor(o).next(()=>A.apply(i)).next(()=>a.localDocuments.getLocalViewOfDocuments(i,f,s)).next(()=>f)}).then(i=>(a.Ji=n,i))}function HE(e,r,a){let t=o0(),n=o0();return a.forEach(i=>t=t.add(i)),r.getEntries(e,t).next(i=>{let A=ua();return a.forEach((o,f)=>{const s=i.get(o);f.isFoundDocument()!==s.isFoundDocument()&&(n=n.add(o)),f.isNoDocument()&&f.version.isEqual(n0.min())?(r.removeEntry(o,f.readTime),A=A.insert(o,f)):!s.isValidDocument()||f.version.compareTo(s.version)>0||f.version.compareTo(s.version)===0&&s.hasPendingWrites?(r.addEntry(f),A=A.insert(o,f)):j("LocalStore","Ignoring outdated watch update for ",o,". Current version:",s.version," Watch version:",f.version)}),{nr:A,sr:n}})}function zE(e,r){const a=i0(e);return a.persistence.runTransaction("Get next mutation batch","readonly",t=>(r===void 0&&(r=-1),a.mutationQueue.getNextMutationBatchAfterBatchId(t,r)))}function JE(e,r){const a=i0(e);return a.persistence.runTransaction("Allocate target","readwrite",t=>{let n;return a.Bs.getTargetData(t,r).next(i=>i?(n=i,N.resolve(n)):a.Bs.allocateTargetId(t).next(A=>(n=new Fa(r,A,"TargetPurposeListen",t.currentSequenceNumber),a.Bs.addTargetData(t,n).next(()=>n))))}).then(t=>{const n=a.Ji.get(t.targetId);return(n===null||t.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(a.Ji=a.Ji.insert(t.targetId,t),a.Yi.set(r,t.targetId)),t})}async function P1(e,r,a){const t=i0(e),n=t.Ji.get(r),i=a?"readwrite":"readwrite-primary";try{a||await t.persistence.runTransaction("Release target",i,A=>t.persistence.referenceDelegate.removeTarget(A,n))}catch(A){if(!J2(A))throw A;j("LocalStore",`Failed to update sequence numbers for target ${r}: ${A}`)}t.Ji=t.Ji.remove(r),t.Yi.delete(n.target)}function Zh(e,r,a){const t=i0(e);let n=n0.min(),i=o0();return t.persistence.runTransaction("Execute query","readonly",A=>function(o,f,s){const u=i0(o),c=u.Yi.get(s);return c!==void 0?N.resolve(u.Ji.get(c)):u.Bs.getTargetData(f,s)}(t,A,sa(r)).next(o=>{if(o)return n=o.lastLimboFreeSnapshotVersion,t.Bs.getMatchingKeysForTargetId(A,o.targetId).next(f=>{i=f})}).next(()=>t.Hi.getDocumentsMatchingQuery(A,r,a?n:n0.min(),a?i:o0())).next(o=>($E(t,O7(r),o),{documents:o,ir:i})))}function $E(e,r,a){let t=e.Xi.get(r)||n0.min();a.forEach((n,i)=>{i.readTime.compareTo(t)>0&&(t=i.readTime)}),e.Xi.set(r,t)}class Rh{constructor(){this.activeTargetIds=H7()}lr(r){this.activeTargetIds=this.activeTargetIds.add(r)}dr(r){this.activeTargetIds=this.activeTargetIds.delete(r)}hr(){const r={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(r)}}class KE{constructor(){this.Hr=new Rh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(r){}updateMutationState(r,a,t){}addLocalQueryTarget(r){return this.Hr.lr(r),this.Jr[r]||"not-current"}updateQueryState(r,a,t){this.Jr[r]=a}removeLocalQueryTarget(r){this.Hr.dr(r)}isLocalQueryTarget(r){return this.Hr.activeTargetIds.has(r)}clearQueryState(r){delete this.Jr[r]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(r){return this.Hr.activeTargetIds.has(r)}start(){return this.Hr=new Rh,Promise.resolve()}handleUserChange(r,a,t){}setOnlineState(r){}shutdown(){}writeSequenceNumber(r){}notifyBundleLoaded(r){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{Yr(r){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(r){this.so.push(r)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const r of this.so)r(0)}no(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const r of this.so)r(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DA=null;function qs(){return DA===null?DA=268435456+Math.round(2147483648*Math.random()):DA++,"0x"+DA.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(r){this.ro=r.ro,this.oo=r.oo}uo(r){this.co=r}ao(r){this.ho=r}onMessage(r){this.lo=r}close(){this.oo()}send(r){this.ro(r)}fo(){this.co()}wo(r){this.ho(r)}_o(r){this.lo(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="WebChannelConnection";class aI extends class{constructor(r){this.databaseInfo=r,this.databaseId=r.databaseId;const a=r.ssl?"https":"http";this.mo=a+"://"+r.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(r,a,t,n,i){const A=qs(),o=this.To(r,a);j("RestConnection",`Sending RPC '${r}' ${A}:`,o,t);const f={};return this.Eo(f,n,i),this.Ao(r,o,f,t).then(s=>(j("RestConnection",`Received RPC '${r}' ${A}: `,s),s),s=>{throw Xn("RestConnection",`RPC '${r}' ${A} failed with error: `,s,"url: ",o,"request:",t),s})}vo(r,a,t,n,i,A){return this.Io(r,a,t,n,i)}Eo(r,a,t){r["X-Goog-Api-Client"]="gl-js/ fire/"+ri,r["Content-Type"]="text/plain",this.databaseInfo.appId&&(r["X-Firebase-GMPID"]=this.databaseInfo.appId),a&&a.headers.forEach((n,i)=>r[i]=n),t&&t.headers.forEach((n,i)=>r[i]=n)}To(r,a){const t=rI[r];return`${this.mo}/v1/${a}:${t}`}}{constructor(r){super(r),this.forceLongPolling=r.forceLongPolling,this.autoDetectLongPolling=r.autoDetectLongPolling,this.useFetchStreams=r.useFetchStreams,this.longPollingOptions=r.longPollingOptions}Ao(r,a,t,n){const i=qs();return new Promise((A,o)=>{const f=new l7;f.setWithCredentials(!0),f.listenOnce(f7.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case $s.NO_ERROR:const u=f.getResponseJson();j(vr,`XHR for RPC '${r}' ${i} received:`,JSON.stringify(u)),A(u);break;case $s.TIMEOUT:j(vr,`RPC '${r}' ${i} timed out`),o(new G(R.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const c=f.getStatus();if(j(vr,`RPC '${r}' ${i} failed with status:`,c,"response text:",f.getResponseText()),c>0){let d=f.getResponseJson();Array.isArray(d)&&(d=d[0]);const b=d==null?void 0:d.error;if(b&&b.status&&b.message){const w=function(y){const B=y.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(B)>=0?B:R.UNKNOWN}(b.status);o(new G(w,b.message))}else o(new G(R.UNKNOWN,"Server responded with status "+f.getStatus()))}else o(new G(R.UNAVAILABLE,"Connection failed."));break;default:a0()}}finally{j(vr,`RPC '${r}' ${i} completed.`)}});const s=JSON.stringify(n);j(vr,`RPC '${r}' ${i} sending request:`,n),f.send(a,"POST",s,t,15)})}Ro(r,a,t){const n=qs(),i=[this.mo,"/","google.firestore.v1.Firestore","/",r,"/channel"],A=A7(),o=o7(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},s=this.longPollingOptions.timeoutSeconds;s!==void 0&&(f.longPollingTimeout=Math.round(1e3*s)),this.useFetchStreams&&(f.xmlHttpFactory=new u7({})),this.Eo(f.initMessageHeaders,a,t),f.encodeInitMessageHeaders=!0;const u=i.join("");j(vr,`Creating RPC '${r}' stream ${n}: ${u}`,f);const c=A.createWebChannel(u,f);let d=!1,b=!1;const w=new eI({ro:B=>{b?j(vr,`Not sending because RPC '${r}' stream ${n} is closed:`,B):(d||(j(vr,`Opening RPC '${r}' stream ${n} transport.`),c.open(),d=!0),j(vr,`RPC '${r}' stream ${n} sending:`,B),c.send(B))},oo:()=>c.close()}),y=(B,g,h)=>{B.listen(g,m=>{try{h(m)}catch(C){setTimeout(()=>{throw C},0)}})};return y(c,NA.EventType.OPEN,()=>{b||j(vr,`RPC '${r}' stream ${n} transport opened.`)}),y(c,NA.EventType.CLOSE,()=>{b||(b=!0,j(vr,`RPC '${r}' stream ${n} transport closed`),w.wo())}),y(c,NA.EventType.ERROR,B=>{b||(b=!0,Xn(vr,`RPC '${r}' stream ${n} transport errored:`,B),w.wo(new G(R.UNAVAILABLE,"The operation could not be completed")))}),y(c,NA.EventType.MESSAGE,B=>{var g;if(!b){const h=B.data[0];R0(!!h);const m=h,C=m.error||((g=m[0])===null||g===void 0?void 0:g.error);if(C){j(vr,`RPC '${r}' stream ${n} received error:`,C);const v=C.status;let F=function(P){const s0=Q0[P];if(s0!==void 0)return O5(s0)}(v),S=C.message;F===void 0&&(F=R.INTERNAL,S="Unknown error status: "+v+" with message "+C.message),b=!0,w.wo(new G(F,S)),c.close()}else j(vr,`RPC '${r}' stream ${n} received:`,h),w._o(h)}}),y(o,s7.STAT_EVENT,B=>{B.stat===Ah.PROXY?j(vr,`RPC '${r}' stream ${n} detected buffering proxy`):B.stat===Ah.NOPROXY&&j(vr,`RPC '${r}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}function ru(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(e){return new hE(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(r,a,t=1e3,n=1.5,i=6e4){this.ii=r,this.timerId=a,this.Po=t,this.bo=n,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(r){this.cancel();const a=Math.floor(this.So+this.ko()),t=Math.max(0,Date.now()-this.Co),n=Math.max(0,a-t);n>0&&j("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.So} ms, delay with jitter: ${a} ms, last attempt: ${t} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,n,()=>(this.Co=Date.now(),r())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(r,a,t,n,i,A,o,f){this.ii=r,this.$o=t,this.Oo=n,this.connection=i,this.authCredentialsProvider=A,this.appCheckCredentialsProvider=o,this.listener=f,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new q5(r,a)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(r){this.Ho(),this.stream.send(r)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(r,a){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,r!==4?this.qo.reset():a&&a.code===R.RESOURCE_EXHAUSTED?(fa(a.toString()),fa("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):a&&a.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=r,await this.listener.ao(a)}Yo(){}auth(){this.state=1;const r=this.Xo(this.Fo),a=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.Fo===a&&this.Zo(t,n)},t=>{r(()=>{const n=new G(R.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(n)})})}Zo(r,a){const t=this.Xo(this.Fo);this.stream=this.eu(r,a),this.stream.uo(()=>{t(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(n=>{t(()=>this.tu(n))}),this.stream.onMessage(n=>{t(()=>this.onMessage(n))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(r){return j("PersistentStream",`close with error: ${r}`),this.stream=null,this.close(4,r)}Xo(r){return a=>{this.ii.enqueueAndForget(()=>this.Fo===r?a():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tI extends rg{constructor(r,a,t,n,i,A){super(r,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",a,t,n,A),this.serializer=i}eu(r,a){return this.connection.Ro("Listen",r,a)}onMessage(r){this.qo.reset();const a=mE(this.serializer,r),t=function(n){if(!("targetChange"in n))return n0.min();const i=n.targetChange;return i.targetIds&&i.targetIds.length?n0.min():i.readTime?xe(i.readTime):n0.min()}(r);return this.listener.nu(a,t)}su(r){const a={};a.database=x1(this.serializer),a.addTarget=function(n,i){let A;const o=i.target;if(A=S1(o)?{documents:kE(n,o)}:{query:wE(n,o)},A.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){A.resumeToken=L5(n,i.resumeToken);const f=G1(n,i.expectedCount);f!==null&&(A.expectedCount=f)}else if(i.snapshotVersion.compareTo(n0.min())>0){A.readTime=Qo(n,i.snapshotVersion.toTimestamp());const f=G1(n,i.expectedCount);f!==null&&(A.expectedCount=f)}return A}(this.serializer,r);const t=EE(this.serializer,r);t&&(a.labels=t),this.Wo(a)}iu(r){const a={};a.database=x1(this.serializer),a.removeTarget=r,this.Wo(a)}}class nI extends rg{constructor(r,a,t,n,i,A){super(r,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",a,t,n,A),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(r,a){return this.connection.Ro("Write",r,a)}onMessage(r){if(R0(!!r.streamToken),this.lastStreamToken=r.streamToken,this.ru){this.qo.reset();const a=vE(r.writeResults,r.commitTime),t=xe(r.commitTime);return this.listener.cu(t,a)}return R0(!r.writeResults||r.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const r={};r.database=x1(this.serializer),this.Wo(r)}uu(r){const a={streamToken:this.lastStreamToken,writes:r.map(t=>pE(this.serializer,t))};this.Wo(a)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI extends class{}{constructor(r,a,t,n){super(),this.authCredentials=r,this.appCheckCredentials=a,this.connection=t,this.serializer=n,this.lu=!1}fu(){if(this.lu)throw new G(R.FAILED_PRECONDITION,"The client has already been terminated.")}Io(r,a,t){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([n,i])=>this.connection.Io(r,a,t,n,i)).catch(n=>{throw n.name==="FirebaseError"?(n.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),n):new G(R.UNKNOWN,n.toString())})}vo(r,a,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,A])=>this.connection.vo(r,a,t,i,A,n)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(R.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}class AI{constructor(r,a){this.asyncQueue=r,this.onlineStateHandler=a,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(r){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${r.toString()}`),this.yu("Offline")))}set(r){this.Tu(),this.wu=0,r==="Online"&&(this.mu=!1),this.yu(r)}yu(r){r!==this.state&&(this.state=r,this.onlineStateHandler(r))}pu(r){const a=`Could not reach Cloud Firestore backend. ${r}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(fa(a),this.mu=!1):j("OnlineStateTracker",a)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(r,a,t,n,i){this.localStore=r,this.datastore=a,this.asyncQueue=t,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(A=>{t.enqueueAndForget(async()=>{Qt(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(o){const f=i0(o);f.vu.add(4),await q2(f),f.bu.set("Unknown"),f.vu.delete(4),await $f(f)}(this))})}),this.bu=new AI(t,n)}}async function $f(e){if(Qt(e))for(const r of e.Ru)await r(!0)}async function q2(e){for(const r of e.Ru)await r(!1)}function eg(e,r){const a=i0(e);a.Au.has(r.targetId)||(a.Au.set(r.targetId,r),Vc(a)?Sc(a):ti(a).Ko()&&Fc(a,r))}function ag(e,r){const a=i0(e),t=ti(a);a.Au.delete(r),t.Ko()&&tg(a,r),a.Au.size===0&&(t.Ko()?t.jo():Qt(a)&&a.bu.set("Unknown"))}function Fc(e,r){if(e.Vu.qt(r.targetId),r.resumeToken.approximateByteSize()>0||r.snapshotVersion.compareTo(n0.min())>0){const a=e.remoteSyncer.getRemoteKeysForTarget(r.targetId).size;r=r.withExpectedCount(a)}ti(e).su(r)}function tg(e,r){e.Vu.qt(r),ti(e).iu(r)}function Sc(e){e.Vu=new uE({getRemoteKeysForTarget:r=>e.remoteSyncer.getRemoteKeysForTarget(r),le:r=>e.Au.get(r)||null,ue:()=>e.datastore.serializer.databaseId}),ti(e).start(),e.bu.gu()}function Vc(e){return Qt(e)&&!ti(e).Uo()&&e.Au.size>0}function Qt(e){return i0(e).vu.size===0}function ng(e){e.Vu=void 0}async function fI(e){e.Au.forEach((r,a)=>{Fc(e,r)})}async function sI(e,r){ng(e),Vc(e)?(e.bu.Iu(r),Sc(e)):e.bu.set("Unknown")}async function uI(e,r,a){if(e.bu.set("Online"),r instanceof j5&&r.state===2&&r.cause)try{await async function(t,n){const i=n.cause;for(const A of n.targetIds)t.Au.has(A)&&(await t.remoteSyncer.rejectListen(A,i),t.Au.delete(A),t.Vu.removeTarget(A))}(e,r)}catch(t){j("RemoteStore","Failed to remove targets %s: %s ",r.targetIds.join(","),t),await Ho(e,t)}else if(r instanceof eo?e.Vu.Ht(r):r instanceof U5?e.Vu.ne(r):e.Vu.Xt(r),!a.isEqual(n0.min()))try{const t=await K5(e.localStore);a.compareTo(t)>=0&&await function(n,i){const A=n.Vu.ce(i);return A.targetChanges.forEach((o,f)=>{if(o.resumeToken.approximateByteSize()>0){const s=n.Au.get(f);s&&n.Au.set(f,s.withResumeToken(o.resumeToken,i))}}),A.targetMismatches.forEach((o,f)=>{const s=n.Au.get(o);if(!s)return;n.Au.set(o,s.withResumeToken(Rr.EMPTY_BYTE_STRING,s.snapshotVersion)),tg(n,o);const u=new Fa(s.target,o,f,s.sequenceNumber);Fc(n,u)}),n.remoteSyncer.applyRemoteEvent(A)}(e,a)}catch(t){j("RemoteStore","Failed to raise snapshot:",t),await Ho(e,t)}}async function Ho(e,r,a){if(!J2(r))throw r;e.vu.add(1),await q2(e),e.bu.set("Offline"),a||(a=()=>K5(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await a(),e.vu.delete(1),await $f(e)})}function ig(e,r){return r().catch(a=>Ho(e,a,r))}async function Kf(e){const r=i0(e),a=Ka(r);let t=r.Eu.length>0?r.Eu[r.Eu.length-1].batchId:-1;for(;lI(r);)try{const n=await zE(r.localStore,t);if(n===null){r.Eu.length===0&&a.jo();break}t=n.batchId,cI(r,n)}catch(n){await Ho(r,n)}Ag(r)&&og(r)}function lI(e){return Qt(e)&&e.Eu.length<10}function cI(e,r){e.Eu.push(r);const a=Ka(e);a.Ko()&&a.ou&&a.uu(r.mutations)}function Ag(e){return Qt(e)&&!Ka(e).Uo()&&e.Eu.length>0}function og(e){Ka(e).start()}async function dI(e){Ka(e).hu()}async function hI(e){const r=Ka(e);for(const a of e.Eu)r.uu(a.mutations)}async function bI(e,r,a){const t=e.Eu.shift(),n=Cc.from(t,r,a);await ig(e,()=>e.remoteSyncer.applySuccessfulWrite(n)),await Kf(e)}async function gI(e,r){r&&Ka(e).ou&&await async function(a,t){if(n=t.code,oE(n)&&n!==R.ABORTED){const i=a.Eu.shift();Ka(a).Qo(),await ig(a,()=>a.remoteSyncer.rejectFailedWrite(i.batchId,t)),await Kf(a)}var n}(e,r),Ag(e)&&og(e)}async function Wh(e,r){const a=i0(e);a.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const t=Qt(a);a.vu.add(3),await q2(a),t&&a.bu.set("Unknown"),await a.remoteSyncer.handleCredentialChange(r),a.vu.delete(3),await $f(a)}async function mI(e,r){const a=i0(e);r?(a.vu.delete(2),await $f(a)):r||(a.vu.add(2),await q2(a),a.bu.set("Unknown"))}function ti(e){return e.Su||(e.Su=function(r,a,t){const n=i0(r);return n.fu(),new tI(a,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,t)}(e.datastore,e.asyncQueue,{uo:fI.bind(null,e),ao:sI.bind(null,e),nu:uI.bind(null,e)}),e.Ru.push(async r=>{r?(e.Su.Qo(),Vc(e)?Sc(e):e.bu.set("Unknown")):(await e.Su.stop(),ng(e))})),e.Su}function Ka(e){return e.Du||(e.Du=function(r,a,t){const n=i0(r);return n.fu(),new nI(a,n.connection,n.authCredentials,n.appCheckCredentials,n.serializer,t)}(e.datastore,e.asyncQueue,{uo:dI.bind(null,e),ao:gI.bind(null,e),au:hI.bind(null,e),cu:bI.bind(null,e)}),e.Ru.push(async r=>{r?(e.Du.Qo(),await Kf(e)):(await e.Du.stop(),e.Eu.length>0&&(j("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(r,a,t,n,i){this.asyncQueue=r,this.timerId=a,this.targetTimeMs=t,this.op=n,this.removalCallback=i,this.deferred=new La,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(A=>{})}static createAndSchedule(r,a,t,n,i){const A=Date.now()+t,o=new Dc(r,a,A,n,i);return o.start(t),o}start(r){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),r)}skipDelay(){return this.handleDelayElapsed()}cancel(r){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(R.CANCELLED,"Operation cancelled"+(r?": "+r:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(r=>this.deferred.resolve(r))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(e,r){if(fa("AsyncQueue",`${r}: ${e}`),J2(e))return new G(R.UNAVAILABLE,`${r}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(r){this.comparator=r?(a,t)=>r(a,t)||Y.comparator(a.key,t.key):(a,t)=>Y.comparator(a.key,t.key),this.keyedMap=Ri(),this.sortedSet=new D0(this.comparator)}static emptySet(r){return new Bn(r.comparator)}has(r){return this.keyedMap.get(r)!=null}get(r){return this.keyedMap.get(r)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(r){const a=this.keyedMap.get(r);return a?this.sortedSet.indexOf(a):-1}get size(){return this.sortedSet.size}forEach(r){this.sortedSet.inorderTraversal((a,t)=>(r(a),!1))}add(r){const a=this.delete(r.key);return a.copy(a.keyedMap.insert(r.key,r),a.sortedSet.insert(r,null))}delete(r){const a=this.get(r);return a?this.copy(this.keyedMap.remove(r),this.sortedSet.remove(a)):this}isEqual(r){if(!(r instanceof Bn)||this.size!==r.size)return!1;const a=this.sortedSet.getIterator(),t=r.sortedSet.getIterator();for(;a.hasNext();){const n=a.getNext().key,i=t.getNext().key;if(!n.isEqual(i))return!1}return!0}toString(){const r=[];return this.forEach(a=>{r.push(a.toString())}),r.length===0?"DocumentSet ()":`DocumentSet (
  `+r.join(`  
`)+`
)`}copy(r,a){const t=new Bn;return t.comparator=this.comparator,t.keyedMap=r,t.sortedSet=a,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.Cu=new D0(Y.comparator)}track(r){const a=r.doc.key,t=this.Cu.get(a);t?r.type!==0&&t.type===3?this.Cu=this.Cu.insert(a,r):r.type===3&&t.type!==1?this.Cu=this.Cu.insert(a,{type:t.type,doc:r.doc}):r.type===2&&t.type===2?this.Cu=this.Cu.insert(a,{type:2,doc:r.doc}):r.type===2&&t.type===0?this.Cu=this.Cu.insert(a,{type:0,doc:r.doc}):r.type===1&&t.type===0?this.Cu=this.Cu.remove(a):r.type===1&&t.type===2?this.Cu=this.Cu.insert(a,{type:1,doc:t.doc}):r.type===0&&t.type===1?this.Cu=this.Cu.insert(a,{type:2,doc:r.doc}):a0():this.Cu=this.Cu.insert(a,r)}xu(){const r=[];return this.Cu.inorderTraversal((a,t)=>{r.push(t)}),r}}class jn{constructor(r,a,t,n,i,A,o,f,s){this.query=r,this.docs=a,this.oldDocs=t,this.docChanges=n,this.mutatedKeys=i,this.fromCache=A,this.syncStateChanged=o,this.excludesMetadataChanges=f,this.hasCachedResults=s}static fromInitialDocuments(r,a,t,n,i){const A=[];return a.forEach(o=>{A.push({type:0,doc:o})}),new jn(r,a,Bn.emptySet(a),A,t,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(r){if(!(this.fromCache===r.fromCache&&this.hasCachedResults===r.hasCachedResults&&this.syncStateChanged===r.syncStateChanged&&this.mutatedKeys.isEqual(r.mutatedKeys)&&Lf(this.query,r.query)&&this.docs.isEqual(r.docs)&&this.oldDocs.isEqual(r.oldDocs)))return!1;const a=this.docChanges,t=r.docChanges;if(a.length!==t.length)return!1;for(let n=0;n<a.length;n++)if(a[n].type!==t[n].type||!a[n].doc.isEqual(t[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.Nu=void 0,this.listeners=[]}}class vI{constructor(){this.queries=new ai(r=>R5(r),Lf),this.onlineState="Unknown",this.ku=new Set}}async function kI(e,r){const a=i0(e),t=r.query;let n=!1,i=a.queries.get(t);if(i||(n=!0,i=new pI),n)try{i.Nu=await a.onListen(t)}catch(A){const o=Gc(A,`Initialization of query '${D1(r.query)}' failed`);return void r.onError(o)}a.queries.set(t,i),i.listeners.push(r),r.Mu(a.onlineState),i.Nu&&r.$u(i.Nu)&&Xc(a)}async function wI(e,r){const a=i0(e),t=r.query;let n=!1;const i=a.queries.get(t);if(i){const A=i.listeners.indexOf(r);A>=0&&(i.listeners.splice(A,1),n=i.listeners.length===0)}if(n)return a.queries.delete(t),a.onUnlisten(t)}function yI(e,r){const a=i0(e);let t=!1;for(const n of r){const i=n.query,A=a.queries.get(i);if(A){for(const o of A.listeners)o.$u(n)&&(t=!0);A.Nu=n}}t&&Xc(a)}function EI(e,r,a){const t=i0(e),n=t.queries.get(r);if(n)for(const i of n.listeners)i.onError(a);t.queries.delete(r)}function Xc(e){e.ku.forEach(r=>{r.next()})}class II{constructor(r,a,t){this.query=r,this.Ou=a,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=t||{}}$u(r){if(!this.options.includeMetadataChanges){const t=[];for(const n of r.docChanges)n.type!==3&&t.push(n);r=new jn(r.query,r.docs,r.oldDocs,t,r.mutatedKeys,r.fromCache,r.syncStateChanged,!0,r.hasCachedResults)}let a=!1;return this.Fu?this.Lu(r)&&(this.Ou.next(r),a=!0):this.qu(r,this.onlineState)&&(this.Uu(r),a=!0),this.Bu=r,a}onError(r){this.Ou.error(r)}Mu(r){this.onlineState=r;let a=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,r)&&(this.Uu(this.Bu),a=!0),a}qu(r,a){if(!r.fromCache)return!0;const t=a!=="Offline";return(!this.options.Ku||!t)&&(!r.docs.isEmpty()||r.hasCachedResults||a==="Offline")}Lu(r){if(r.docChanges.length>0)return!0;const a=this.Bu&&this.Bu.hasPendingWrites!==r.hasPendingWrites;return!(!r.syncStateChanged&&!a)&&this.options.includeMetadataChanges===!0}Uu(r){r=jn.fromInitialDocuments(r.query,r.docs,r.mutatedKeys,r.fromCache,r.hasCachedResults),this.Fu=!0,this.Ou.next(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(r){this.key=r}}class sg{constructor(r){this.key=r}}class _I{constructor(r,a){this.query=r,this.Yu=a,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=o0(),this.mutatedKeys=o0(),this.tc=T5(r),this.ec=new Bn(this.tc)}get nc(){return this.Yu}sc(r,a){const t=a?a.ic:new Nh,n=a?a.ec:this.ec;let i=a?a.mutatedKeys:this.mutatedKeys,A=n,o=!1;const f=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,s=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(r.inorderTraversal((u,c)=>{const d=n.get(u),b=Yf(this.query,c)?c:null,w=!!d&&this.mutatedKeys.has(d.key),y=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let B=!1;d&&b?d.data.isEqual(b.data)?w!==y&&(t.track({type:3,doc:b}),B=!0):this.rc(d,b)||(t.track({type:2,doc:b}),B=!0,(f&&this.tc(b,f)>0||s&&this.tc(b,s)<0)&&(o=!0)):!d&&b?(t.track({type:0,doc:b}),B=!0):d&&!b&&(t.track({type:1,doc:d}),B=!0,(f||s)&&(o=!0)),B&&(b?(A=A.add(b),i=y?i.add(u):i.delete(u)):(A=A.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;A.size>this.query.limit;){const u=this.query.limitType==="F"?A.last():A.first();A=A.delete(u.key),i=i.delete(u.key),t.track({type:1,doc:u})}return{ec:A,ic:t,zi:o,mutatedKeys:i}}rc(r,a){return r.hasLocalMutations&&a.hasCommittedMutations&&!a.hasLocalMutations}applyChanges(r,a,t){const n=this.ec;this.ec=r.ec,this.mutatedKeys=r.mutatedKeys;const i=r.ic.xu();i.sort((s,u)=>function(c,d){const b=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return a0()}};return b(c)-b(d)}(s.type,u.type)||this.tc(s.doc,u.doc)),this.oc(t);const A=a?this.uc():[],o=this.Zu.size===0&&this.current?1:0,f=o!==this.Xu;return this.Xu=o,i.length!==0||f?{snapshot:new jn(this.query,r.ec,n,i,r.mutatedKeys,o===0,f,!1,!!t&&t.resumeToken.approximateByteSize()>0),cc:A}:{cc:A}}Mu(r){return this.current&&r==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Nh,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(r){return!this.Yu.has(r)&&!!this.ec.has(r)&&!this.ec.get(r).hasLocalMutations}oc(r){r&&(r.addedDocuments.forEach(a=>this.Yu=this.Yu.add(a)),r.modifiedDocuments.forEach(a=>{}),r.removedDocuments.forEach(a=>this.Yu=this.Yu.delete(a)),this.current=r.current)}uc(){if(!this.current)return[];const r=this.Zu;this.Zu=o0(),this.ec.forEach(t=>{this.ac(t.key)&&(this.Zu=this.Zu.add(t.key))});const a=[];return r.forEach(t=>{this.Zu.has(t)||a.push(new sg(t))}),this.Zu.forEach(t=>{r.has(t)||a.push(new fg(t))}),a}hc(r){this.Yu=r.ir,this.Zu=o0();const a=this.sc(r.documents);return this.applyChanges(a,!0)}lc(){return jn.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class CI{constructor(r,a,t){this.query=r,this.targetId=a,this.view=t}}class BI{constructor(r){this.key=r,this.fc=!1}}class ZI{constructor(r,a,t,n,i,A){this.localStore=r,this.remoteStore=a,this.eventManager=t,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=A,this.dc={},this.wc=new ai(o=>R5(o),Lf),this._c=new Map,this.mc=new Set,this.gc=new D0(Y.comparator),this.yc=new Map,this.Ic=new Tc,this.Tc={},this.Ec=new Map,this.Ac=Un.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function RI(e,r){const a=MI(e);let t,n;const i=a.wc.get(r);if(i)t=i.targetId,a.sharedClientState.addLocalQueryTarget(t),n=i.view.lc();else{const A=await JE(a.localStore,sa(r)),o=a.sharedClientState.addLocalQueryTarget(A.targetId);t=A.targetId,n=await TI(a,r,t,o==="current",A.resumeToken),a.isPrimaryClient&&eg(a.remoteStore,A)}return n}async function TI(e,r,a,t,n){e.Rc=(c,d,b)=>async function(w,y,B,g){let h=y.view.sc(B);h.zi&&(h=await Zh(w.localStore,y.query,!1).then(({documents:v})=>y.view.sc(v,h)));const m=g&&g.targetChanges.get(y.targetId),C=y.view.applyChanges(h,w.isPrimaryClient,m);return Sh(w,y.targetId,C.cc),C.snapshot}(e,c,d,b);const i=await Zh(e.localStore,r,!0),A=new _I(r,i.ir),o=A.sc(i.documents),f=K2.createSynthesizedTargetChangeForCurrentChange(a,t&&e.onlineState!=="Offline",n),s=A.applyChanges(o,e.isPrimaryClient,f);Sh(e,a,s.cc);const u=new CI(r,a,A);return e.wc.set(r,u),e._c.has(a)?e._c.get(a).push(r):e._c.set(a,[r]),s.snapshot}async function WI(e,r){const a=i0(e),t=a.wc.get(r),n=a._c.get(t.targetId);if(n.length>1)return a._c.set(t.targetId,n.filter(i=>!Lf(i,r))),void a.wc.delete(r);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(t.targetId),a.sharedClientState.isActiveQueryTarget(t.targetId)||await P1(a.localStore,t.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(t.targetId),ag(a.remoteStore,t.targetId),O1(a,t.targetId)}).catch(z2)):(O1(a,t.targetId),await P1(a.localStore,t.targetId,!0))}async function NI(e,r,a){const t=xI(e);try{const n=await function(i,A){const o=i0(i),f=er.now(),s=A.reduce((d,b)=>d.add(b.key),o0());let u,c;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let b=ua(),w=o0();return o.Zi.getEntries(d,s).next(y=>{b=y,b.forEach((B,g)=>{g.isValidDocument()||(w=w.add(B))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,b)).next(y=>{u=y;const B=[];for(const g of A){const h=aE(g,u.get(g.key).overlayedDocument);h!=null&&B.push(new Yt(g.key,h,w5(h.value.mapValue),Me.exists(!0)))}return o.mutationQueue.addMutationBatch(d,f,B,A)}).next(y=>{c=y;const B=y.applyToLocalDocumentSet(u,w);return o.documentOverlayCache.saveOverlays(d,y.batchId,B)})}).then(()=>({batchId:c.batchId,changes:N5(u)}))}(t.localStore,r);t.sharedClientState.addPendingMutation(n.batchId),function(i,A,o){let f=i.Tc[i.currentUser.toKey()];f||(f=new D0(b0)),f=f.insert(A,o),i.Tc[i.currentUser.toKey()]=f}(t,n.batchId,a),await rA(t,n.changes),await Kf(t.remoteStore)}catch(n){const i=Gc(n,"Failed to persist write");a.reject(i)}}async function ug(e,r){const a=i0(e);try{const t=await QE(a.localStore,r);r.targetChanges.forEach((n,i)=>{const A=a.yc.get(i);A&&(R0(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1),n.addedDocuments.size>0?A.fc=!0:n.modifiedDocuments.size>0?R0(A.fc):n.removedDocuments.size>0&&(R0(A.fc),A.fc=!1))}),await rA(a,t,r)}catch(t){await z2(t)}}function Fh(e,r,a){const t=i0(e);if(t.isPrimaryClient&&a===0||!t.isPrimaryClient&&a===1){const n=[];t.wc.forEach((i,A)=>{const o=A.view.Mu(r);o.snapshot&&n.push(o.snapshot)}),function(i,A){const o=i0(i);o.onlineState=A;let f=!1;o.queries.forEach((s,u)=>{for(const c of u.listeners)c.Mu(A)&&(f=!0)}),f&&Xc(o)}(t.eventManager,r),n.length&&t.dc.nu(n),t.onlineState=r,t.isPrimaryClient&&t.sharedClientState.setOnlineState(r)}}async function FI(e,r,a){const t=i0(e);t.sharedClientState.updateQueryState(r,"rejected",a);const n=t.yc.get(r),i=n&&n.key;if(i){let A=new D0(Y.comparator);A=A.insert(i,yr.newNoDocument(i,n0.min()));const o=o0().add(i),f=new zf(n0.min(),new Map,new D0(b0),A,o);await ug(t,f),t.gc=t.gc.remove(i),t.yc.delete(r),Mc(t)}else await P1(t.localStore,r,!1).then(()=>O1(t,r,a)).catch(z2)}async function SI(e,r){const a=i0(e),t=r.batch.batchId;try{const n=await YE(a.localStore,r);cg(a,t,null),lg(a,t),a.sharedClientState.updateMutationState(t,"acknowledged"),await rA(a,n)}catch(n){await z2(n)}}async function VI(e,r,a){const t=i0(e);try{const n=await function(i,A){const o=i0(i);return o.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let s;return o.mutationQueue.lookupMutationBatch(f,A).next(u=>(R0(u!==null),s=u.keys(),o.mutationQueue.removeMutationBatch(f,u))).next(()=>o.mutationQueue.performConsistencyCheck(f)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(f,s,A)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,s)).next(()=>o.localDocuments.getDocuments(f,s))})}(t.localStore,r);cg(t,r,a),lg(t,r),t.sharedClientState.updateMutationState(r,"rejected",a),await rA(t,n)}catch(n){await z2(n)}}function lg(e,r){(e.Ec.get(r)||[]).forEach(a=>{a.resolve()}),e.Ec.delete(r)}function cg(e,r,a){const t=i0(e);let n=t.Tc[t.currentUser.toKey()];if(n){const i=n.get(r);i&&(a?i.reject(a):i.resolve(),n=n.remove(r)),t.Tc[t.currentUser.toKey()]=n}}function O1(e,r,a=null){e.sharedClientState.removeLocalQueryTarget(r);for(const t of e._c.get(r))e.wc.delete(t),a&&e.dc.Pc(t,a);e._c.delete(r),e.isPrimaryClient&&e.Ic.Is(r).forEach(t=>{e.Ic.containsKey(t)||dg(e,t)})}function dg(e,r){e.mc.delete(r.path.canonicalString());const a=e.gc.get(r);a!==null&&(ag(e.remoteStore,a),e.gc=e.gc.remove(r),e.yc.delete(a),Mc(e))}function Sh(e,r,a){for(const t of a)t instanceof fg?(e.Ic.addReference(t.key,r),DI(e,t)):t instanceof sg?(j("SyncEngine","Document no longer in limbo: "+t.key),e.Ic.removeReference(t.key,r),e.Ic.containsKey(t.key)||dg(e,t.key)):a0()}function DI(e,r){const a=r.key,t=a.path.canonicalString();e.gc.get(a)||e.mc.has(t)||(j("SyncEngine","New document in limbo: "+a),e.mc.add(t),Mc(e))}function Mc(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const r=e.mc.values().next().value;e.mc.delete(r);const a=new Y(w0.fromString(r)),t=e.Ac.next();e.yc.set(t,new BI(a)),e.gc=e.gc.insert(a,t),eg(e.remoteStore,new Fa(sa(Z5(a.path)),t,"TargetPurposeLimboResolution",pc.ct))}}async function rA(e,r,a){const t=i0(e),n=[],i=[],A=[];t.wc.isEmpty()||(t.wc.forEach((o,f)=>{A.push(t.Rc(f,r,a).then(s=>{if((s||a)&&t.isPrimaryClient&&t.sharedClientState.updateQueryState(f.targetId,s!=null&&s.fromCache?"not-current":"current"),s){n.push(s);const u=Nc.Li(f.targetId,s);i.push(u)}}))}),await Promise.all(A),t.dc.nu(n),await async function(o,f){const s=i0(o);try{await s.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>N.forEach(f,c=>N.forEach(c.Fi,d=>s.persistence.referenceDelegate.addReference(u,c.targetId,d)).next(()=>N.forEach(c.Bi,d=>s.persistence.referenceDelegate.removeReference(u,c.targetId,d)))))}catch(u){if(!J2(u))throw u;j("LocalStore","Failed to update sequence numbers: "+u)}for(const u of f){const c=u.targetId;if(!u.fromCache){const d=s.Ji.get(c),b=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(b);s.Ji=s.Ji.insert(c,w)}}}(t.localStore,i))}async function GI(e,r){const a=i0(e);if(!a.currentUser.isEqual(r)){j("SyncEngine","User change. New user:",r.toKey());const t=await $5(a.localStore,r);a.currentUser=r,function(n,i){n.Ec.forEach(A=>{A.forEach(o=>{o.reject(new G(R.CANCELLED,i))})}),n.Ec.clear()}(a,"'waitForPendingWrites' promise is rejected due to a user change."),a.sharedClientState.handleUserChange(r,t.removedBatchIds,t.addedBatchIds),await rA(a,t.er)}}function XI(e,r){const a=i0(e),t=a.yc.get(r);if(t&&t.fc)return o0().add(t.key);{let n=o0();const i=a._c.get(r);if(!i)return n;for(const A of i){const o=a.wc.get(A);n=n.unionWith(o.view.nc)}return n}}function MI(e){const r=i0(e);return r.remoteStore.remoteSyncer.applyRemoteEvent=ug.bind(null,r),r.remoteStore.remoteSyncer.getRemoteKeysForTarget=XI.bind(null,r),r.remoteStore.remoteSyncer.rejectListen=FI.bind(null,r),r.dc.nu=yI.bind(null,r.eventManager),r.dc.Pc=EI.bind(null,r.eventManager),r}function xI(e){const r=i0(e);return r.remoteStore.remoteSyncer.applySuccessfulWrite=SI.bind(null,r),r.remoteStore.remoteSyncer.rejectFailedWrite=VI.bind(null,r),r}class Vh{constructor(){this.synchronizeTabs=!1}async initialize(r){this.serializer=Jf(r.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(r),this.persistence=this.createPersistence(r),await this.persistence.start(),this.localStore=this.createLocalStore(r),this.gcScheduler=this.createGarbageCollectionScheduler(r,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(r,this.localStore)}createGarbageCollectionScheduler(r,a){return null}createIndexBackfillerScheduler(r,a){return null}createLocalStore(r){return LE(this.persistence,new UE,r.initialUser,this.serializer)}createPersistence(r){return new PE(Wc.zs,this.serializer)}createSharedClientState(r){return new KE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class PI{async initialize(r,a){this.localStore||(this.localStore=r.localStore,this.sharedClientState=r.sharedClientState,this.datastore=this.createDatastore(a),this.remoteStore=this.createRemoteStore(a),this.eventManager=this.createEventManager(a),this.syncEngine=this.createSyncEngine(a,!r.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Fh(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=GI.bind(null,this.syncEngine),await mI(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(r){return new vI}createDatastore(r){const a=Jf(r.databaseInfo.databaseId),t=(n=r.databaseInfo,new aI(n));var n;return function(i,A,o,f){return new iI(i,A,o,f)}(r.authCredentials,r.appCheckCredentials,t,a)}createRemoteStore(r){return a=this.localStore,t=this.datastore,n=r.asyncQueue,i=o=>Fh(this.syncEngine,o,0),A=Th.D()?new Th:new qE,new oI(a,t,n,i,A);var a,t,n,i,A}createSyncEngine(r,a){return function(t,n,i,A,o,f,s){const u=new ZI(t,n,i,A,o,f);return s&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,r.initialUser,r.maxConcurrentLimboResolutions,a)}terminate(){return async function(r){const a=i0(r);j("RemoteStore","RemoteStore shutting down."),a.vu.add(5),await q2(a),a.Pu.shutdown(),a.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(r){this.observer=r,this.muted=!1}next(r){this.observer.next&&this.Sc(this.observer.next,r)}error(r){this.observer.error?this.Sc(this.observer.error,r):fa("Uncaught Error in snapshot listener:",r.toString())}Dc(){this.muted=!0}Sc(r,a){this.muted||setTimeout(()=>{this.muted||r(a)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(r,a,t,n){this.authCredentials=r,this.appCheckCredentials=a,this.asyncQueue=t,this.databaseInfo=n,this.user=kr.UNAUTHENTICATED,this.clientId=p5.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(t,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(t,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(r){this.authCredentialListener=r}setAppCheckTokenChangeListener(r){this.appCheckCredentialListener=r}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const r=new La;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),r.resolve()}catch(a){const t=Gc(a,"Failed to shutdown persistence");r.reject(t)}}),r.promise}}async function eu(e,r){e.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const a=await e.getConfiguration();await r.initialize(a);let t=a.initialUser;e.setCredentialChangeListener(async n=>{t.isEqual(n)||(await $5(r.localStore,n),t=n)}),r.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=r}async function Dh(e,r){e.asyncQueue.verifyOperationInProgress();const a=await LI(e);j("FirestoreClient","Initializing OnlineComponentProvider");const t=await e.getConfiguration();await r.initialize(a,t),e.setCredentialChangeListener(n=>Wh(r.remoteStore,n)),e.setAppCheckTokenChangeListener((n,i)=>Wh(r.remoteStore,i)),e._onlineComponents=r}function jI(e){return e.name==="FirebaseError"?e.code===R.FAILED_PRECONDITION||e.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function LI(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await eu(e,e._uninitializedComponentsProvider._offline)}catch(r){const a=r;if(!jI(a))throw a;Xn("Error using user provided cache. Falling back to memory cache: "+a),await eu(e,new Vh)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await eu(e,new Vh);return e._offlineComponents}async function hg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Dh(e,e._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Dh(e,new PI))),e._onlineComponents}function YI(e){return hg(e).then(r=>r.syncEngine)}async function QI(e){const r=await hg(e),a=r.eventManager;return a.onListen=RI.bind(null,r.syncEngine),a.onUnlisten=WI.bind(null,r.syncEngine),a}function HI(e,r,a={}){const t=new La;return e.asyncQueue.enqueueAndForget(async()=>function(n,i,A,o,f){const s=new OI({next:c=>{i.enqueueAndForget(()=>wI(n,u)),c.fromCache&&o.source==="server"?f.reject(new G(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(c)},error:c=>f.reject(c)}),u=new II(A,s,{includeMetadataChanges:!0,Ku:!0});return kI(n,u)}(await QI(e),e.asyncQueue,r,a,t)),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(e){const r={};return e.timeoutSeconds!==void 0&&(r.timeoutSeconds=e.timeoutSeconds),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(e,r,a){if(!a)throw new G(R.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${r}.`)}function zI(e,r,a,t){if(r===!0&&t===!0)throw new G(R.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)}function Xh(e){if(!Y.isDocumentKey(e))throw new G(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Mh(e){if(Y.isDocumentKey(e))throw new G(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function qf(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const r=function(a){return a.constructor?a.constructor.name:null}(e);return r?`a custom ${r} object`:"an object"}}return typeof e=="function"?"a function":a0()}function R2(e,r){if("_delegate"in e&&(e=e._delegate),!(e instanceof r)){if(r.name===e.constructor.name)throw new G(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const a=qf(e);throw new G(R.INVALID_ARGUMENT,`Expected type '${r.name}', but it was: ${a}`)}}return e}function JI(e,r){if(r<=0)throw new G(R.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${r}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(r){var a,t;if(r.host===void 0){if(r.ssl!==void 0)throw new G(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=r.host,this.ssl=(a=r.ssl)===null||a===void 0||a;if(this.credentials=r.credentials,this.ignoreUndefinedProperties=!!r.ignoreUndefinedProperties,this.cache=r.localCache,r.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(r.cacheSizeBytes!==-1&&r.cacheSizeBytes<1048576)throw new G(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=r.cacheSizeBytes}zI("experimentalForceLongPolling",r.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",r.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!r.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:r.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!r.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bg((t=r.experimentalLongPollingOptions)!==null&&t!==void 0?t:{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new G(R.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!r.useFetchStreams}isEqual(r){return this.host===r.host&&this.ssl===r.ssl&&this.credentials===r.credentials&&this.cacheSizeBytes===r.cacheSizeBytes&&this.experimentalForceLongPolling===r.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===r.experimentalAutoDetectLongPolling&&(a=this.experimentalLongPollingOptions,t=r.experimentalLongPollingOptions,a.timeoutSeconds===t.timeoutSeconds)&&this.ignoreUndefinedProperties===r.ignoreUndefinedProperties&&this.useFetchStreams===r.useFetchStreams;var a,t}}class rs{constructor(r,a,t,n){this._authCredentials=r,this._appCheckCredentials=a,this._databaseId=t,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(r){if(this._settingsFrozen)throw new G(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xh(r),r.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new d7;switch(a.type){case"firstParty":return new m7(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new G(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(r.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){const a=Gh.get(r);a&&(j("ComponentProvider","Removing Datastore"),Gh.delete(r),a.terminate())}(this),Promise.resolve()}}function $I(e,r,a,t={}){var n;const i=(e=R2(e,rs))._getSettings(),A=`${r}:${a}`;if(i.host!=="firestore.googleapis.com"&&i.host!==A&&Xn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:A,ssl:!1})),t.mockUserToken){let o,f;if(typeof t.mockUserToken=="string")o=t.mockUserToken,f=kr.MOCK_USER;else{o=A8(t.mockUserToken,(n=e._app)===null||n===void 0?void 0:n.options.projectId);const s=t.mockUserToken.sub||t.mockUserToken.user_id;if(!s)throw new G(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new kr(s)}e._authCredentials=new h7(new m5(o,f))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(r,a,t){this.converter=a,this._key=t,this.type="document",this.firestore=r}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ya(this.firestore,this.converter,this._key.path.popLast())}withConverter(r){return new ue(this.firestore,r,this._key)}}class da{constructor(r,a,t){this.converter=a,this._query=t,this.type="query",this.firestore=r}withConverter(r){return new da(this.firestore,r,this._query)}}class Ya extends da{constructor(r,a,t){super(r,a,Z5(t)),this._path=t,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const r=this._path.popLast();return r.isEmpty()?null:new ue(this.firestore,null,new Y(r))}withConverter(r){return new Ya(this.firestore,r,this._path)}}function zo(e,r,...a){if(e=x0(e),gg("collection","path",r),e instanceof rs){const t=w0.fromString(r,...a);return Mh(t),new Ya(e,null,t)}{if(!(e instanceof ue||e instanceof Ya))throw new G(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(w0.fromString(r,...a));return Mh(t),new Ya(e.firestore,null,t)}}function mg(e,r,...a){if(e=x0(e),arguments.length===1&&(r=p5.A()),gg("doc","path",r),e instanceof rs){const t=w0.fromString(r,...a);return Xh(t),new ue(e,null,new Y(t))}{if(!(e instanceof ue||e instanceof Ya))throw new G(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(w0.fromString(r,...a));return Xh(t),new ue(e.firestore,e instanceof Ya?e.converter:null,new Y(t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new q5(this,"async_queue_retry"),this.Xc=()=>{const a=ru();a&&j("AsyncQueue","Visibility state changed to "+a.visibilityState),this.qo.Mo()};const r=ru();r&&typeof r.addEventListener=="function"&&r.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(r){this.enqueue(r)}enqueueAndForgetEvenWhileRestricted(r){this.Zc(),this.ta(r)}enterRestrictedMode(r){if(!this.jc){this.jc=!0,this.Jc=r||!1;const a=ru();a&&typeof a.removeEventListener=="function"&&a.removeEventListener("visibilitychange",this.Xc)}}enqueue(r){if(this.Zc(),this.jc)return new Promise(()=>{});const a=new La;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(r().then(a.resolve,a.reject),a.promise)).then(()=>a.promise)}enqueueRetryable(r){this.enqueueAndForget(()=>(this.Qc.push(r),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(r){if(!J2(r))throw r;j("AsyncQueue","Operation failed with retryable error: "+r)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(r){const a=this.Gc.then(()=>(this.Hc=!0,r().catch(t=>{this.Wc=t,this.Hc=!1;const n=function(i){let A=i.message||"";return i.stack&&(A=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),A}(t);throw fa("INTERNAL UNHANDLED ERROR: ",n),t}).then(t=>(this.Hc=!1,t))));return this.Gc=a,a}enqueueAfterDelay(r,a,t){this.Zc(),this.Yc.indexOf(r)>-1&&(a=0);const n=Dc.createAndSchedule(this,r,a,t,i=>this.na(i));return this.zc.push(n),n}Zc(){this.Wc&&a0()}verifyOperationInProgress(){}async sa(){let r;do r=this.Gc,await r;while(r!==this.Gc)}ia(r){for(const a of this.zc)if(a.timerId===r)return!0;return!1}ra(r){return this.sa().then(()=>{this.zc.sort((a,t)=>a.targetTimeMs-t.targetTimeMs);for(const a of this.zc)if(a.skipDelay(),r!=="all"&&a.timerId===r)break;return this.sa()})}oa(r){this.Yc.push(r)}na(r){const a=this.zc.indexOf(r);this.zc.splice(a,1)}}class es extends rs{constructor(r,a,t,n){super(r,a,t,n),this.type="firestore",this._queue=new KI,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vg(this),this._firestoreClient.terminate()}}function xc(e,r){const a=typeof e=="object"?e:Cf(),t=typeof e=="string"?e:r||"(default)",n=at(a,"firestore").getImmediate({identifier:t});if(!n._initialized){const i=t8("firestore");i&&$I(n,...i)}return n}function pg(e){return e._firestoreClient||vg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function vg(e){var r,a,t;const n=e._freezeSettings(),i=function(A,o,f,s){return new R7(A,o,f,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,bg(s.experimentalLongPollingOptions),s.useFetchStreams)}(e._databaseId,((r=e._app)===null||r===void 0?void 0:r.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new UI(e._authCredentials,e._appCheckCredentials,e._queue,i),!((a=n.cache)===null||a===void 0)&&a._offlineComponentProvider&&(!((t=n.cache)===null||t===void 0)&&t._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:n.cache.kind,_offline:n.cache._offlineComponentProvider,_online:n.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(r){this._byteString=r}static fromBase64String(r){try{return new Ln(Rr.fromBase64String(r))}catch(a){throw new G(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+a)}}static fromUint8Array(r){return new Ln(Rr.fromUint8Array(r))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(r){return this._byteString.isEqual(r._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(...r){for(let a=0;a<r.length;++a)if(r[a].length===0)throw new G(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Er(r)}isEqual(r){return this._internalPath.isEqual(r._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(r){this._methodName=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(r,a){if(!isFinite(r)||r<-90||r>90)throw new G(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+r);if(!isFinite(a)||a<-180||a>180)throw new G(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+a);this._lat=r,this._long=a}get latitude(){return this._lat}get longitude(){return this._long}isEqual(r){return this._lat===r._lat&&this._long===r._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(r){return b0(this._lat,r._lat)||b0(this._long,r._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=/^__.*__$/;class r_{constructor(r,a,t){this.data=r,this.fieldMask=a,this.fieldTransforms=t}toMutation(r,a){return this.fieldMask!==null?new Yt(r,this.data,this.fieldMask,a,this.fieldTransforms):new $2(r,this.data,a,this.fieldTransforms)}}function kg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw a0()}}class jc{constructor(r,a,t,n,i,A){this.settings=r,this.databaseId=a,this.serializer=t,this.ignoreUndefinedProperties=n,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=A||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(r){return new jc(Object.assign(Object.assign({},this.settings),r),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(r){var a;const t=(a=this.path)===null||a===void 0?void 0:a.child(r),n=this.aa({path:t,la:!1});return n.fa(r),n}da(r){var a;const t=(a=this.path)===null||a===void 0?void 0:a.child(r),n=this.aa({path:t,la:!1});return n.ua(),n}wa(r){return this.aa({path:void 0,la:!0})}_a(r){return Jo(r,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(r){return this.fieldMask.find(a=>r.isPrefixOf(a))!==void 0||this.fieldTransforms.find(a=>r.isPrefixOf(a.field))!==void 0}ua(){if(this.path)for(let r=0;r<this.path.length;r++)this.fa(this.path.get(r))}fa(r){if(r.length===0)throw this._a("Document fields must not be empty");if(kg(this.ca)&&qI.test(r))throw this._a('Document fields cannot begin and end with "__"')}}class e_{constructor(r,a,t){this.databaseId=r,this.ignoreUndefinedProperties=a,this.serializer=t||Jf(r)}ya(r,a,t,n=!1){return new jc({ca:r,methodName:a,ga:t,path:Er.emptyPath(),la:!1,ma:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Lc(e){const r=e._freezeSettings(),a=Jf(e._databaseId);return new e_(e._databaseId,!!r.ignoreUndefinedProperties,a)}function a_(e,r,a,t,n,i={}){const A=e.ya(i.merge||i.mergeFields?2:0,r,a,n);Ig("Data must be an object, but it was:",A,t);const o=yg(t,A);let f,s;if(i.merge)f=new ke(A.fieldMask),s=A.fieldTransforms;else if(i.mergeFields){const u=[];for(const c of i.mergeFields){const d=t_(r,c,a);if(!A.contains(d))throw new G(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);i_(u,d)||u.push(d)}f=new ke(u),s=A.fieldTransforms.filter(c=>f.covers(c.field))}else f=null,s=A.fieldTransforms;return new r_(new oe(o),f,s)}class Yc extends Oc{_toFieldTransform(r){return new K7(r.path,new C2)}isEqual(r){return r instanceof Yc}}function wg(e,r,a,t=!1){return Qc(a,e.ya(t?4:3,r))}function Qc(e,r){if(Eg(e=x0(e)))return Ig("Unsupported field value:",r,e),yg(e,r);if(e instanceof Oc)return function(a,t){if(!kg(t.ca))throw t._a(`${a._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${a._methodName}() is not currently supported inside arrays`);const n=a._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,r),null;if(e===void 0&&r.ignoreUndefinedProperties)return null;if(r.path&&r.fieldMask.push(r.path),e instanceof Array){if(r.settings.la&&r.ca!==4)throw r._a("Nested arrays are not supported");return function(a,t){const n=[];let i=0;for(const A of a){let o=Qc(A,t.wa(i));o==null&&(o={nullValue:"NULL_VALUE"}),n.push(o),i++}return{arrayValue:{values:n}}}(e,r)}return function(a,t){if((a=x0(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return z7(t.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const n=er.fromDate(a);return{timestampValue:Qo(t.serializer,n)}}if(a instanceof er){const n=new er(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Qo(t.serializer,n)}}if(a instanceof Uc)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Ln)return{bytesValue:L5(t.serializer,a._byteString)};if(a instanceof ue){const n=t.databaseId,i=a.firestore._databaseId;if(!i.isEqual(n))throw t._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Rc(a.firestore._databaseId||t.databaseId,a._key.path)}}throw t._a(`Unsupported field value: ${qf(a)}`)}(e,r)}function yg(e,r){const a={};return v5(e)?r.path&&r.path.length>0&&r.fieldMask.push(r.path):ei(e,(t,n)=>{const i=Qc(n,r.ha(t));i!=null&&(a[t]=i)}),{mapValue:{fields:a}}}function Eg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof er||e instanceof Uc||e instanceof Ln||e instanceof ue||e instanceof Oc)}function Ig(e,r,a){if(!Eg(a)||!function(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}(a)){const t=qf(a);throw t==="an object"?r._a(e+" a custom object"):r._a(e+" "+t)}}function t_(e,r,a){if((r=x0(r))instanceof Pc)return r._internalPath;if(typeof r=="string")return _g(e,r);throw Jo("Field path arguments must be of type string or ",e,!1,void 0,a)}const n_=new RegExp("[~\\*/\\[\\]]");function _g(e,r,a){if(r.search(n_)>=0)throw Jo(`Invalid field path (${r}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Pc(...r.split("."))._internalPath}catch{throw Jo(`Invalid field path (${r}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}function Jo(e,r,a,t,n){const i=t&&!t.isEmpty(),A=n!==void 0;let o=`Function ${r}() called with invalid data`;a&&(o+=" (via `toFirestore()`)"),o+=". ";let f="";return(i||A)&&(f+=" (found",i&&(f+=` in field ${t}`),A&&(f+=` in document ${n}`),f+=")"),new G(R.INVALID_ARGUMENT,o+e+f)}function i_(e,r){return e.some(a=>a.isEqual(r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(r,a,t,n,i){this._firestore=r,this._userDataWriter=a,this._key=t,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const r=new A_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(r)}return this._userDataWriter.convertValue(this._document.data.value)}}get(r){if(this._document){const a=this._document.data.field(as("DocumentSnapshot.get",r));if(a!==null)return this._userDataWriter.convertValue(a)}}}class A_ extends Hc{data(){return super.data()}}function as(e,r){return typeof r=="string"?_g(e,r):r instanceof Pc?r._internalPath:r._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new G(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zc{}class ts extends zc{}function U1(e,r,...a){let t=[];r instanceof zc&&t.push(r),t=t.concat(a),function(n){const i=n.filter(o=>o instanceof Jc).length,A=n.filter(o=>o instanceof ns).length;if(i>1||i>0&&A>0)throw new G(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(t);for(const n of t)e=n._apply(e);return e}class ns extends ts{constructor(r,a,t){super(),this._field=r,this._op=a,this._value=t,this.type="where"}static _create(r,a,t){return new ns(r,a,t)}_apply(r){const a=this._parse(r);return Cg(r._query,a),new da(r.firestore,r.converter,V1(r._query,a))}_parse(r){const a=Lc(r.firestore);return function(n,i,A,o,f,s,u){let c;if(f.isKeyField()){if(s==="array-contains"||s==="array-contains-any")throw new G(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if(s==="in"||s==="not-in"){jh(u,s);const d=[];for(const b of u)d.push(Uh(o,n,b));c={arrayValue:{values:d}}}else c=Uh(o,n,u)}else s!=="in"&&s!=="not-in"&&s!=="array-contains-any"||jh(u,s),c=wg(A,i,u,s==="in"||s==="not-in");return J0.create(f,s,c)}(r._query,"where",a,r.firestore._databaseId,this._field,this._op,this._value)}}function f_(e,r,a){const t=r,n=as("where",e);return ns._create(n,t,a)}class Jc extends zc{constructor(r,a){super(),this.type=r,this._queryConstraints=a}static _create(r,a){return new Jc(r,a)}_parse(r){const a=this._queryConstraints.map(t=>t._parse(r)).filter(t=>t.getFilters().length>0);return a.length===1?a[0]:Ce.create(a,this._getOperator())}_apply(r){const a=this._parse(r);return a.getFilters().length===0?r:(function(t,n){let i=t;const A=n.getFlattenedFilters();for(const o of A)Cg(i,o),i=V1(i,o)}(r._query,a),new da(r.firestore,r.converter,V1(r._query,a)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $c extends ts{constructor(r,a){super(),this._field=r,this._direction=a,this.type="orderBy"}static _create(r,a){return new $c(r,a)}_apply(r){const a=function(t,n,i){if(t.startAt!==null)throw new G(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(t.endAt!==null)throw new G(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const A=new Cn(n,i);return function(o,f){if(Ec(o)===null){const s=jf(o);s!==null&&Bg(o,s,f.field)}}(t,A),A}(r._query,this._field,this._direction);return new da(r.firestore,r.converter,function(t,n){const i=t.explicitOrderBy.concat([n]);return new Lt(t.path,t.collectionGroup,i,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(r._query,a))}}function Ph(e,r="asc"){const a=r,t=as("orderBy",e);return $c._create(t,a)}class Kc extends ts{constructor(r,a,t){super(),this.type=r,this._limit=a,this._limitType=t}static _create(r,a,t){return new Kc(r,a,t)}_apply(r){return new da(r.firestore,r.converter,Lo(r._query,this._limit,this._limitType))}}function Oh(e){return JI("limit",e),Kc._create("limit",e,"F")}class qc extends ts{constructor(r,a,t){super(),this.type=r,this._docOrFields=a,this._inclusive=t}static _create(r,a,t){return new qc(r,a,t)}_apply(r){const a=u_(r,this.type,this._docOrFields,this._inclusive);return new da(r.firestore,r.converter,function(t,n){return new Lt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,n,t.endAt)}(r._query,a))}}function s_(...e){return qc._create("startAfter",e,!1)}function u_(e,r,a,t){if(a[0]=x0(a[0]),a[0]instanceof Hc)return function(n,i,A,o,f){if(!o)throw new G(R.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${A}().`);const s=[];for(const u of wt(n))if(u.field.isKeyField())s.push(jo(i,o.key));else{const c=o.data.field(u.field);if(Uf(c))throw new G(R.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+u.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(c===null){const d=u.field.canonicalString();throw new G(R.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}s.push(c)}return new On(s,f)}(e._query,e.firestore._databaseId,r,a[0]._document,t);{const n=Lc(e.firestore);return function(i,A,o,f,s,u){const c=i.explicitOrderBy;if(s.length>c.length)throw new G(R.INVALID_ARGUMENT,`Too many arguments provided to ${f}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let b=0;b<s.length;b++){const w=s[b];if(c[b].field.isKeyField()){if(typeof w!="string")throw new G(R.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${f}(), but got a ${typeof w}`);if(!Ic(i)&&w.indexOf("/")!==-1)throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${f}() must be a plain document ID, but '${w}' contains a slash.`);const y=i.path.child(w0.fromString(w));if(!Y.isDocumentKey(y))throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${f}() must result in a valid document path, but '${y}' is not because it contains an odd number of segments.`);const B=new Y(y);d.push(jo(A,B))}else{const y=wg(o,f,w);d.push(y)}}return new On(d,u)}(e._query,e.firestore._databaseId,n,r,a,t)}}function Uh(e,r,a){if(typeof(a=x0(a))=="string"){if(a==="")throw new G(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ic(r)&&a.indexOf("/")!==-1)throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${a}' contains a '/' character.`);const t=r.path.child(w0.fromString(a));if(!Y.isDocumentKey(t))throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${t}' is not because it has an odd number of segments (${t.length}).`);return jo(e,new Y(t))}if(a instanceof ue)return jo(e,a._key);throw new G(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qf(a)}.`)}function jh(e,r){if(!Array.isArray(e)||e.length===0)throw new G(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${r.toString()}' filters.`)}function Cg(e,r){if(r.isInequality()){const t=jf(e),n=r.field;if(t!==null&&!t.isEqual(n))throw new G(R.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${t.toString()}' and '${n.toString()}'`);const i=Ec(e);i!==null&&Bg(e,n,i)}const a=function(t,n){for(const i of t)for(const A of i.getFlattenedFilters())if(n.indexOf(A.op)>=0)return A.op;return null}(e.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(r.op));if(a!==null)throw a===r.op?new G(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${r.op.toString()}' filter.`):new G(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${r.op.toString()}' filters with '${a.toString()}' filters.`)}function Bg(e,r,a){if(!a.isEqual(r))throw new G(R.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${r.toString()}' and so you must also use '${r.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${a.toString()}' instead.`)}class l_{convertValue(r,a="none"){switch(Nt(r)){case 0:return null;case 1:return r.booleanValue;case 2:return H0(r.integerValue||r.doubleValue);case 3:return this.convertTimestamp(r.timestampValue);case 4:return this.convertServerTimestamp(r,a);case 5:return r.stringValue;case 6:return this.convertBytes(Wt(r.bytesValue));case 7:return this.convertReference(r.referenceValue);case 8:return this.convertGeoPoint(r.geoPointValue);case 9:return this.convertArray(r.arrayValue,a);case 10:return this.convertObject(r.mapValue,a);default:throw a0()}}convertObject(r,a){return this.convertObjectMap(r.fields,a)}convertObjectMap(r,a="none"){const t={};return ei(r,(n,i)=>{t[n]=this.convertValue(i,a)}),t}convertGeoPoint(r){return new Uc(H0(r.latitude),H0(r.longitude))}convertArray(r,a){return(r.values||[]).map(t=>this.convertValue(t,a))}convertServerTimestamp(r,a){switch(a){case"previous":const t=vc(r);return t==null?null:this.convertValue(t,a);case"estimate":return this.convertTimestamp(E2(r));default:return null}}convertTimestamp(r){const a=$a(r);return new er(a.seconds,a.nanos)}convertDocumentKey(r,a){const t=w0.fromString(r);R0(J5(t));const n=new I2(t.get(1),t.get(3)),i=new Y(t.popFirst(5));return n.isEqual(a)||fa(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${a.projectId}/${a.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c_(e,r,a){let t;return t=e?a&&(a.merge||a.mergeFields)?e.toFirestore(r,a):e.toFirestore(r):r,t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(r,a){this.hasPendingWrites=r,this.fromCache=a}isEqual(r){return this.hasPendingWrites===r.hasPendingWrites&&this.fromCache===r.fromCache}}class d_ extends Hc{constructor(r,a,t,n,i,A){super(r,a,t,n,A),this._firestore=r,this._firestoreImpl=r,this.metadata=i}exists(){return super.exists()}data(r={}){if(this._document){if(this._converter){const a=new ao(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(a,r)}return this._userDataWriter.convertValue(this._document.data.value,r.serverTimestamps)}}get(r,a={}){if(this._document){const t=this._document.data.field(as("DocumentSnapshot.get",r));if(t!==null)return this._userDataWriter.convertValue(t,a.serverTimestamps)}}}class ao extends d_{data(r={}){return super.data(r)}}class h_{constructor(r,a,t,n){this._firestore=r,this._userDataWriter=a,this._snapshot=n,this.metadata=new GA(n.hasPendingWrites,n.fromCache),this.query=t}get docs(){const r=[];return this.forEach(a=>r.push(a)),r}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(r,a){this._snapshot.docs.forEach(t=>{r.call(a,new ao(this._firestore,this._userDataWriter,t.key,t,new GA(this._snapshot.mutatedKeys.has(t.key),this._snapshot.fromCache),this.query.converter))})}docChanges(r={}){const a=!!r.includeMetadataChanges;if(a&&this._snapshot.excludesMetadataChanges)throw new G(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===a||(this._cachedChanges=function(t,n){if(t._snapshot.oldDocs.isEmpty()){let i=0;return t._snapshot.docChanges.map(A=>{const o=new ao(t._firestore,t._userDataWriter,A.doc.key,A.doc,new GA(t._snapshot.mutatedKeys.has(A.doc.key),t._snapshot.fromCache),t.query.converter);return A.doc,{type:"added",doc:o,oldIndex:-1,newIndex:i++}})}{let i=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(A=>n||A.type!==3).map(A=>{const o=new ao(t._firestore,t._userDataWriter,A.doc.key,A.doc,new GA(t._snapshot.mutatedKeys.has(A.doc.key),t._snapshot.fromCache),t.query.converter);let f=-1,s=-1;return A.type!==0&&(f=i.indexOf(A.doc.key),i=i.delete(A.doc.key)),A.type!==1&&(i=i.add(A.doc),s=i.indexOf(A.doc.key)),{type:b_(A.type),doc:o,oldIndex:f,newIndex:s}})}}(this,a),this._cachedChangesIncludeMetadataChanges=a),this._cachedChanges}}function b_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return a0()}}class g_ extends l_{constructor(r){super(),this.firestore=r}convertBytes(r){return new Ln(r)}convertReference(r){const a=this.convertDocumentKey(r,this.firestore._databaseId);return new ue(this.firestore,null,a)}}function Zg(e){e=R2(e,da);const r=R2(e.firestore,es),a=pg(r),t=new g_(r);return o_(e._query),HI(a,e._query).then(n=>new h_(r,t,e,n))}function m_(e){return Rg(R2(e.firestore,es),[new _c(e._key,Me.none())])}function p_(e,r){const a=R2(e.firestore,es),t=mg(e),n=c_(e.converter,r);return Rg(a,[a_(Lc(e.firestore),"addDoc",t._key,n,e.converter!==null,{}).toMutation(t._key,Me.exists(!1))]).then(()=>t)}function Rg(e,r){return function(a,t){const n=new La;return a.asyncQueue.enqueueAndForget(async()=>NI(await YI(a),t,n)),n.promise}(pg(e),r)}function v_(){return new Yc("serverTimestamp")}(function(e,r=!0){(function(a){ri=a})(Ut),Ie(new de("firestore",(a,{instanceIdentifier:t,options:n})=>{const i=a.getProvider("app").getImmediate(),A=new es(new b7(a.getProvider("auth-internal")),new v7(a.getProvider("app-check-internal")),function(o,f){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new G(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new I2(o.options.projectId,f)}(i,t),i);return n=Object.assign({useFetchStreams:r},n),A._setSettings(n),A},"PUBLIC").setMultipleInstances(!0)),jr(oh,"3.13.0",e),jr(oh,"3.13.0","esm2017")})();function r4(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a}function Tg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const k_=Tg,Wg=new Ot("auth","Firebase",Tg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new _f("@firebase/auth");function w_(e,...r){$o.logLevel<=d0.WARN&&$o.warn(`Auth (${Ut}): ${e}`,...r)}function to(e,...r){$o.logLevel<=d0.ERROR&&$o.error(`Auth (${Ut}): ${e}`,...r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e,...r){throw e4(e,...r)}function Pe(e,...r){return e4(e,...r)}function y_(e,r,a){const t=Object.assign(Object.assign({},k_()),{[r]:a});return new Ot("auth","Firebase",t).create(r,{appName:e.name})}function e4(e,...r){if(typeof e!="string"){const a=r[0],t=[...r.slice(1)];return t[0]&&(t[0].appName=e.name),e._errorFactory.create(a,...t)}return Wg.create(e,...r)}function K(e,r,...a){if(!e)throw e4(r,...a)}function qe(e){const r="INTERNAL ASSERTION FAILED: "+e;throw to(r),new Error(r)}function la(e,r){e||qe(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function E_(){return Lh()==="http:"||Lh()==="https:"}function Lh(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(E_()||o8()||"connection"in navigator)?navigator.onLine:!0}function __(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(r,a){this.shortDelay=r,this.longDelay=a,la(a>r,"Short delay should be less than long delay!"),this.isMobile=Mw()||Pw()}get(){return I_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a4(e,r){la(e.emulator,"Emulator should always be set here");const{url:a}=e.emulator;return r?`${a}${r.startsWith("/")?r.slice(1):r}`:a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{static initialize(r,a,t){this.fetchImpl=r,a&&(this.headersImpl=a),t&&(this.responseImpl=t)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=new eA(3e4,6e4);function Ht(e,r){return e.tenantId&&!r.tenantId?Object.assign(Object.assign({},r),{tenantId:e.tenantId}):r}async function zt(e,r,a,t,n={}){return Fg(e,n,async()=>{let i={},A={};t&&(r==="GET"?A=t:i={body:JSON.stringify(t)});const o=M2(Object.assign({key:e.config.apiKey},A)).slice(1),f=await e._getAdditionalHeaders();return f["Content-Type"]="application/json",e.languageCode&&(f["X-Firebase-Locale"]=e.languageCode),Ng.fetch()(Sg(e,e.config.apiHost,a,o),Object.assign({method:r,headers:f,referrerPolicy:"no-referrer"},i))})}async function Fg(e,r,a){e._canInitEmulator=!1;const t=Object.assign(Object.assign({},C_),r);try{const n=new Z_(e),i=await Promise.race([a(),n.promise]);n.clearNetworkTimeout();const A=await i.json();if("needConfirmation"in A)throw XA(e,"account-exists-with-different-credential",A);if(i.ok&&!("errorMessage"in A))return A;{const o=i.ok?A.errorMessage:A.error.message,[f,s]=o.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw XA(e,"credential-already-in-use",A);if(f==="EMAIL_EXISTS")throw XA(e,"email-already-in-use",A);if(f==="USER_DISABLED")throw XA(e,"user-disabled",A);const u=t[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw y_(e,u,s);Be(e,u)}}catch(n){if(n instanceof he)throw n;Be(e,"network-request-failed",{message:String(n)})}}async function aA(e,r,a,t,n={}){const i=await zt(e,r,a,t,n);return"mfaPendingCredential"in i&&Be(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Sg(e,r,a,t){const n=`${r}${a}?${t}`;return e.config.emulator?a4(e.config,n):`${e.config.apiScheme}://${n}`}class Z_{constructor(r){this.auth=r,this.timer=null,this.promise=new Promise((a,t)=>{this.timer=setTimeout(()=>t(Pe(this.auth,"network-request-failed")),B_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function XA(e,r,a){const t={appName:e.name};a.email&&(t.email=a.email),a.phoneNumber&&(t.phoneNumber=a.phoneNumber);const n=Pe(e,r,t);return n.customData._tokenResponse=a,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R_(e,r){return zt(e,"POST","/v1/accounts:delete",r)}async function T_(e,r){return zt(e,"POST","/v1/accounts:lookup",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){if(e)try{const r=new Date(Number(e));if(!isNaN(r.getTime()))return r.toUTCString()}catch{}}async function W_(e,r=!1){const a=x0(e),t=await a.getIdToken(r),n=t4(t);K(n&&n.exp&&n.auth_time&&n.iat,a.auth,"internal-error");const i=typeof n.firebase=="object"?n.firebase:void 0,A=i==null?void 0:i.sign_in_provider;return{claims:n,token:t,authTime:ji(au(n.auth_time)),issuedAtTime:ji(au(n.iat)),expirationTime:ji(au(n.exp)),signInProvider:A||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function au(e){return Number(e)*1e3}function t4(e){const[r,a,t]=e.split(".");if(r===void 0||a===void 0||t===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const n=e8(a);return n?JSON.parse(n):(to("Failed to decode base64 JWT payload"),null)}catch(n){return to("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function N_(e){const r=t4(e);return K(r,"internal-error"),K(typeof r.exp<"u","internal-error"),K(typeof r.iat<"u","internal-error"),Number(r.exp)-Number(r.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(e,r,a=!1){if(a)return r;try{return await r}catch(t){throw t instanceof he&&F_(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}function F_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(r){this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(r){var a;if(r){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=((a=this.user.stsTokenManager.expirationTime)!==null&&a!==void 0?a:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(r=!1){if(!this.isRunning)return;const a=this.getInterval(r);this.timerId=setTimeout(async()=>{await this.iteration()},a)}async iteration(){try{await this.user.getIdToken(!0)}catch(r){(r==null?void 0:r.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(r,a){this.createdAt=r,this.lastLoginAt=a,this._initializeTime()}_initializeTime(){this.lastSignInTime=ji(this.lastLoginAt),this.creationTime=ji(this.createdAt)}_copy(r){this.createdAt=r.createdAt,this.lastLoginAt=r.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e){var r;const a=e.auth,t=await e.getIdToken(),n=await T2(e,T_(a,{idToken:t}));K(n==null?void 0:n.users.length,a,"internal-error");const i=n.users[0];e._notifyReloadListener(i);const A=!((r=i.providerUserInfo)===null||r===void 0)&&r.length?G_(i.providerUserInfo):[],o=D_(e.providerData,A),f=e.isAnonymous,s=!(e.email&&i.passwordHash)&&!(o!=null&&o.length),u=f?s:!1,c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Vg(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,c)}async function V_(e){const r=x0(e);await Ko(r),await r.auth._persistUserIfCurrent(r),r.auth._notifyListenersIfCurrent(r)}function D_(e,r){return[...e.filter(t=>!r.some(n=>n.providerId===t.providerId)),...r]}function G_(e){return e.map(r=>{var{providerId:a}=r,t=r4(r,["providerId"]);return{providerId:a,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_(e,r){const a=await Fg(e,{},async()=>{const t=M2({grant_type:"refresh_token",refresh_token:r}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,A=Sg(e,n,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Ng.fetch()(A,{method:"POST",headers:o,body:t})});return{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(r){K(r.idToken,"internal-error"),K(typeof r.idToken<"u","internal-error"),K(typeof r.refreshToken<"u","internal-error");const a="expiresIn"in r&&typeof r.expiresIn<"u"?Number(r.expiresIn):N_(r.idToken);this.updateTokensAndExpiration(r.idToken,r.refreshToken,a)}async getToken(r,a=!1){return K(!this.accessToken||this.refreshToken,r,"user-token-expired"),!a&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(r,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(r,a){const{accessToken:t,refreshToken:n,expiresIn:i}=await X_(r,a);this.updateTokensAndExpiration(t,n,Number(i))}updateTokensAndExpiration(r,a,t){this.refreshToken=a||null,this.accessToken=r||null,this.expirationTime=Date.now()+t*1e3}static fromJSON(r,a){const{refreshToken:t,accessToken:n,expirationTime:i}=a,A=new W2;return t&&(K(typeof t=="string","internal-error",{appName:r}),A.refreshToken=t),n&&(K(typeof n=="string","internal-error",{appName:r}),A.accessToken=n),i&&(K(typeof i=="number","internal-error",{appName:r}),A.expirationTime=i),A}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(r){this.accessToken=r.accessToken,this.refreshToken=r.refreshToken,this.expirationTime=r.expirationTime}_clone(){return Object.assign(new W2,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,r){K(typeof e=="string"||typeof e>"u","internal-error",{appName:r})}class yt{constructor(r){var{uid:a,auth:t,stsTokenManager:n}=r,i=r4(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new S_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=a,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vg(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(r){const a=await T2(this,this.stsTokenManager.getToken(this.auth,r));return K(a,this.auth,"internal-error"),this.accessToken!==a&&(this.accessToken=a,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),a}getIdTokenResult(r){return W_(this,r)}reload(){return V_(this)}_assign(r){this!==r&&(K(this.uid===r.uid,this.auth,"internal-error"),this.displayName=r.displayName,this.photoURL=r.photoURL,this.email=r.email,this.emailVerified=r.emailVerified,this.phoneNumber=r.phoneNumber,this.isAnonymous=r.isAnonymous,this.tenantId=r.tenantId,this.providerData=r.providerData.map(a=>Object.assign({},a)),this.metadata._copy(r.metadata),this.stsTokenManager._assign(r.stsTokenManager))}_clone(r){const a=new yt(Object.assign(Object.assign({},this),{auth:r,stsTokenManager:this.stsTokenManager._clone()}));return a.metadata._copy(this.metadata),a}_onReload(r){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=r,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(r){this.reloadListener?this.reloadListener(r):this.reloadUserInfo=r}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(r,a=!1){let t=!1;r.idToken&&r.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(r),t=!0),a&&await Ko(this),await this.auth._persistUserIfCurrent(this),t&&this.auth._notifyListenersIfCurrent(this)}async delete(){const r=await this.getIdToken();return await T2(this,R_(this.auth,{idToken:r})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(r=>Object.assign({},r)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(r,a){var t,n,i,A,o,f,s,u;const c=(t=a.displayName)!==null&&t!==void 0?t:void 0,d=(n=a.email)!==null&&n!==void 0?n:void 0,b=(i=a.phoneNumber)!==null&&i!==void 0?i:void 0,w=(A=a.photoURL)!==null&&A!==void 0?A:void 0,y=(o=a.tenantId)!==null&&o!==void 0?o:void 0,B=(f=a._redirectEventId)!==null&&f!==void 0?f:void 0,g=(s=a.createdAt)!==null&&s!==void 0?s:void 0,h=(u=a.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:m,emailVerified:C,isAnonymous:v,providerData:F,stsTokenManager:S}=a;K(m&&S,r,"internal-error");const P=W2.fromJSON(this.name,S);K(typeof m=="string",r,"internal-error"),va(c,r.name),va(d,r.name),K(typeof C=="boolean",r,"internal-error"),K(typeof v=="boolean",r,"internal-error"),va(b,r.name),va(w,r.name),va(y,r.name),va(B,r.name),va(g,r.name),va(h,r.name);const s0=new yt({uid:m,auth:r,email:d,emailVerified:C,displayName:c,isAnonymous:v,photoURL:w,phoneNumber:b,tenantId:y,stsTokenManager:P,createdAt:g,lastLoginAt:h});return F&&Array.isArray(F)&&(s0.providerData=F.map(A0=>Object.assign({},A0))),B&&(s0._redirectEventId=B),s0}static async _fromIdTokenResponse(r,a,t=!1){const n=new W2;n.updateFromServerResponse(a);const i=new yt({uid:a.localId,auth:r,stsTokenManager:n,isAnonymous:t});return await Ko(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh=new Map;function ra(e){la(e instanceof Function,"Expected a class definition");let r=Yh.get(e);return r?(la(r instanceof e,"Instance stored in cache mismatched with class"),r):(r=new e,Yh.set(e,r),r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(r,a){this.storage[r]=a}async _get(r){const a=this.storage[r];return a===void 0?null:a}async _remove(r){delete this.storage[r]}_addListener(r,a){}_removeListener(r,a){}}Dg.type="NONE";const Qh=Dg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e,r,a){return`firebase:${e}:${r}:${a}`}class Zn{constructor(r,a,t){this.persistence=r,this.auth=a,this.userKey=t;const{config:n,name:i}=this.auth;this.fullUserKey=no(this.userKey,n.apiKey,i),this.fullPersistenceKey=no("persistence",n.apiKey,i),this.boundEventHandler=a._onStorageEvent.bind(a),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(r){return this.persistence._set(this.fullUserKey,r.toJSON())}async getCurrentUser(){const r=await this.persistence._get(this.fullUserKey);return r?yt._fromJSON(this.auth,r):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(r){if(this.persistence===r)return;const a=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=r,a)return this.setCurrentUser(a)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(r,a,t="authUser"){if(!a.length)return new Zn(ra(Qh),r,t);const n=(await Promise.all(a.map(async s=>{if(await s._isAvailable())return s}))).filter(s=>s);let i=n[0]||ra(Qh);const A=no(t,r.config.apiKey,r.name);let o=null;for(const s of a)try{const u=await s._get(A);if(u){const c=yt._fromJSON(r,u);s!==i&&(o=c),i=s;break}}catch{}const f=n.filter(s=>s._shouldAllowMigration);return!i._shouldAllowMigration||!f.length?new Zn(i,r,t):(i=f[0],o&&await i._set(A,o.toJSON()),await Promise.all(a.map(async s=>{if(s!==i)try{await s._remove(A)}catch{}})),new Zn(i,r,t))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e){const r=e.toLowerCase();if(r.includes("opera/")||r.includes("opr/")||r.includes("opios/"))return"Opera";if(Mg(r))return"IEMobile";if(r.includes("msie")||r.includes("trident/"))return"IE";if(r.includes("edge/"))return"Edge";if(Gg(r))return"Firefox";if(r.includes("silk/"))return"Silk";if(Pg(r))return"Blackberry";if(Og(r))return"Webos";if(n4(r))return"Safari";if((r.includes("chrome/")||Xg(r))&&!r.includes("edge/"))return"Chrome";if(xg(r))return"Android";{const a=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,t=e.match(a);if((t==null?void 0:t.length)===2)return t[1]}return"Other"}function Gg(e=Zr()){return/firefox\//i.test(e)}function n4(e=Zr()){const r=e.toLowerCase();return r.includes("safari/")&&!r.includes("chrome/")&&!r.includes("crios/")&&!r.includes("android")}function Xg(e=Zr()){return/crios\//i.test(e)}function Mg(e=Zr()){return/iemobile/i.test(e)}function xg(e=Zr()){return/android/i.test(e)}function Pg(e=Zr()){return/blackberry/i.test(e)}function Og(e=Zr()){return/webos/i.test(e)}function is(e=Zr()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function M_(e=Zr()){var r;return is(e)&&!!(!((r=window.navigator)===null||r===void 0)&&r.standalone)}function x_(){return Ow()&&document.documentMode===10}function Ug(e=Zr()){return is(e)||xg(e)||Og(e)||Pg(e)||/windows phone/i.test(e)||Mg(e)}function P_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(e,r=[]){let a;switch(e){case"Browser":a=Hh(Zr());break;case"Worker":a=`${Hh(Zr())}-${e}`;break;default:a=e}const t=r.length?r.join(","):"FirebaseCore-web";return`${a}/JsCore/${Ut}/${t}`}async function Lg(e,r){return zt(e,"GET","/v2/recaptchaConfig",Ht(e,r))}function zh(e){return e!==void 0&&e.enterprise!==void 0}class Yg{constructor(r){if(this.siteKey="",this.emailPasswordEnabled=!1,r.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=r.recaptchaKey.split("/")[3],this.emailPasswordEnabled=r.recaptchaEnforcementState.some(a=>a.provider==="EMAIL_PASSWORD_PROVIDER"&&a.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){var e,r;return(r=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&r!==void 0?r:document}function Qg(e){return new Promise((r,a)=>{const t=document.createElement("script");t.setAttribute("src",e),t.onload=r,t.onerror=n=>{const i=Pe("internal-error");i.customData=n,a(i)},t.type="text/javascript",t.charset="UTF-8",O_().appendChild(t)})}function U_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const j_="https://www.google.com/recaptcha/enterprise.js?render=",L_="recaptcha-enterprise",Y_="NO_RECAPTCHA";class Hg{constructor(r){this.type=L_,this.auth=Jt(r)}async verify(r="verify",a=!1){async function t(i){if(!a){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(A,o)=>{Lg(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const s=new Yg(f);return i.tenantId==null?i._agentRecaptchaConfig=s:i._tenantRecaptchaConfigs[i.tenantId]=s,A(s.siteKey)}}).catch(f=>{o(f)})})}function n(i,A,o){const f=window.grecaptcha;zh(f)?f.enterprise.ready(()=>{f.enterprise.execute(i,{action:r}).then(s=>{A(s)}).catch(()=>{A(Y_)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,A)=>{t(this.auth).then(o=>{if(!a&&zh(window.grecaptcha))n(o,i,A);else{if(typeof window>"u"){A(new Error("RecaptchaVerifier is only supported in browser"));return}Qg(j_+o).then(()=>{n(o,i,A)}).catch(f=>{A(f)})}}).catch(o=>{A(o)})})}}async function Yn(e,r,a,t=!1){const n=new Hg(e);let i;try{i=await n.verify(a)}catch{i=await n.verify(a,!0)}const A=Object.assign({},r);return t?Object.assign(A,{captchaResp:i}):Object.assign(A,{captchaResponse:i}),Object.assign(A,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(A,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),A}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(r){this.auth=r,this.queue=[]}pushCallback(r,a){const t=i=>new Promise((A,o)=>{try{const f=r(i);A(f)}catch(f){o(f)}});t.onAbort=a,this.queue.push(t);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(r){if(this.auth.currentUser===r)return;const a=[];try{for(const t of this.queue)await t(r),t.onAbort&&a.push(t.onAbort)}catch(t){a.reverse();for(const n of a)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:t==null?void 0:t.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(r,a,t,n){this.app=r,this.heartbeatServiceProvider=a,this.appCheckServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jh(this),this.idTokenSubscription=new Jh(this),this.beforeStateQueue=new Q_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Wg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(r,a){return a&&(this._popupRedirectResolver=ra(a)),this._initializationPromise=this.queue(async()=>{var t,n;if(!this._deleted&&(this.persistenceManager=await Zn.create(this,r),!this._deleted)){if(!((t=this._popupRedirectResolver)===null||t===void 0)&&t._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(a),this.lastNotifiedUid=((n=this.currentUser)===null||n===void 0?void 0:n.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const r=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!r)){if(this.currentUser&&r&&this.currentUser.uid===r.uid){this._currentUser._assign(r),await this.currentUser.getIdToken();return}await this._updateCurrentUser(r,!0)}}async initializeCurrentUser(r){var a;const t=await this.assertedPersistence.getCurrentUser();let n=t,i=!1;if(r&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const A=(a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId,o=n==null?void 0:n._redirectEventId,f=await this.tryRedirectSignIn(r);(!A||A===o)&&(f!=null&&f.user)&&(n=f.user,i=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(n)}catch(A){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(A))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(r){let a=null;try{a=await this._popupRedirectResolver._completeRedirectFn(this,r,!0)}catch{await this._setRedirectUser(null)}return a}async reloadAndSetCurrentUserOrClear(r){try{await Ko(r)}catch(a){if((a==null?void 0:a.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(r)}useDeviceLanguage(){this.languageCode=__()}async _delete(){this._deleted=!0}async updateCurrentUser(r){const a=r?x0(r):null;return a&&K(a.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(a&&a._clone(this))}async _updateCurrentUser(r,a=!1){if(!this._deleted)return r&&K(this.tenantId===r.tenantId,this,"tenant-id-mismatch"),a||await this.beforeStateQueue.runMiddleware(r),this.queue(async()=>{await this.directlySetCurrentUser(r),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(r){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ra(r))})}async initializeRecaptchaConfig(){const r=await Lg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),a=new Yg(r);this.tenantId==null?this._agentRecaptchaConfig=a:this._tenantRecaptchaConfigs[this.tenantId]=a,a.emailPasswordEnabled&&new Hg(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(r){this._errorFactory=new Ot("auth","Firebase",r())}onAuthStateChanged(r,a,t){return this.registerStateListener(this.authStateSubscription,r,a,t)}beforeAuthStateChanged(r,a){return this.beforeStateQueue.pushCallback(r,a)}onIdTokenChanged(r,a,t){return this.registerStateListener(this.idTokenSubscription,r,a,t)}toJSON(){var r;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(r=this._currentUser)===null||r===void 0?void 0:r.toJSON()}}async _setRedirectUser(r,a){const t=await this.getOrInitRedirectPersistenceManager(a);return r===null?t.removeCurrentUser():t.setCurrentUser(r)}async getOrInitRedirectPersistenceManager(r){if(!this.redirectPersistenceManager){const a=r&&ra(r)||this._popupRedirectResolver;K(a,this,"argument-error"),this.redirectPersistenceManager=await Zn.create(this,[ra(a._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(r){var a,t;return this._isInitialized&&await this.queue(async()=>{}),((a=this._currentUser)===null||a===void 0?void 0:a._redirectEventId)===r?this._currentUser:((t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId)===r?this.redirectUser:null}async _persistUserIfCurrent(r){if(r===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(r))}_notifyListenersIfCurrent(r){r===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var r,a;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=(a=(r=this.currentUser)===null||r===void 0?void 0:r.uid)!==null&&a!==void 0?a:null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(r,a,t,n){if(this._deleted)return()=>{};const i=typeof a=="function"?a:a.next.bind(a),A=this._isInitialized?Promise.resolve():this._initializationPromise;return K(A,this,"internal-error"),A.then(()=>i(this.currentUser)),typeof a=="function"?r.addObserver(a,t,n):r.addObserver(a)}async directlySetCurrentUser(r){this.currentUser&&this.currentUser!==r&&this._currentUser._stopProactiveRefresh(),r&&this.isProactiveRefreshEnabled&&r._startProactiveRefresh(),this.currentUser=r,r?await this.assertedPersistence.setCurrentUser(r):await this.assertedPersistence.removeCurrentUser()}queue(r){return this.operations=this.operations.then(r,r),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(r){!r||this.frameworks.includes(r)||(this.frameworks.push(r),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const a={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(a["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||r===void 0?void 0:r.getHeartbeatsHeader());t&&(a["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(a["X-Firebase-AppCheck"]=n),a}async _getAppCheckToken(){var r;const a=await((r=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||r===void 0?void 0:r.getToken());return a!=null&&a.error&&w_(`Error while retrieving App Check token: ${a.error}`),a==null?void 0:a.token}}function Jt(e){return x0(e)}class Jh{constructor(r){this.auth=r,this.observer=null,this.addObserver=Hw(a=>this.observer=a)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(e,r){const a=at(e,"auth");if(a.isInitialized()){const n=a.getImmediate(),i=a.getOptions();if(c2(i,r??{}))return n;Be(n,"already-initialized")}return a.initialize({options:r})}function J_(e,r){const a=(r==null?void 0:r.persistence)||[],t=(Array.isArray(a)?a:[a]).map(ra);r!=null&&r.errorMap&&e._updateErrorMap(r.errorMap),e._initializeWithPersistence(t,r==null?void 0:r.popupRedirectResolver)}function $_(e,r,a){const t=Jt(e);K(t._canInitEmulator,t,"emulator-config-failed"),K(/^https?:\/\//.test(r),t,"invalid-emulator-scheme");const n=!!(a!=null&&a.disableWarnings),i=zg(r),{host:A,port:o}=K_(r),f=o===null?"":`:${o}`;t.config.emulator={url:`${i}//${A}${f}/`},t.settings.appVerificationDisabledForTesting=!0,t.emulatorConfig=Object.freeze({host:A,port:o,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:n})}),n||q_()}function zg(e){const r=e.indexOf(":");return r<0?"":e.substr(0,r+1)}function K_(e){const r=zg(e),a=/(\/\/)?([^?#/]+)/.exec(e.substr(r.length));if(!a)return{host:"",port:null};const t=a[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(t);if(n){const i=n[1];return{host:i,port:$h(t.substr(i.length+1))}}else{const[i,A]=t.split(":");return{host:i,port:$h(A)}}}function $h(e){if(!e)return null;const r=Number(e);return isNaN(r)?null:r}function q_(){function e(){const r=document.createElement("p"),a=r.style;r.innerText="Running in emulator mode. Do not use with production credentials.",a.position="fixed",a.width="100%",a.backgroundColor="#ffffff",a.border=".1em solid #000000",a.color="#b50000",a.bottom="0px",a.left="0px",a.margin="0px",a.zIndex="10000",a.textAlign="center",r.classList.add("firebase-emulator-warning"),document.body.appendChild(r)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(r,a){this.providerId=r,this.signInMethod=a}toJSON(){return qe("not implemented")}_getIdTokenResponse(r){return qe("not implemented")}_linkToIdToken(r,a){return qe("not implemented")}_getReauthenticationResolver(r){return qe("not implemented")}}async function rC(e,r){return zt(e,"POST","/v1/accounts:update",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(e,r){return aA(e,"POST","/v1/accounts:signInWithPassword",Ht(e,r))}async function eC(e,r){return zt(e,"POST","/v1/accounts:sendOobCode",Ht(e,r))}async function nu(e,r){return eC(e,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC(e,r){return aA(e,"POST","/v1/accounts:signInWithEmailLink",Ht(e,r))}async function tC(e,r){return aA(e,"POST","/v1/accounts:signInWithEmailLink",Ht(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends i4{constructor(r,a,t,n=null){super("password",t),this._email=r,this._password=a,this._tenantId=n}static _fromEmailAndPassword(r,a){return new N2(r,a,"password")}static _fromEmailAndCode(r,a,t=null){return new N2(r,a,"emailLink",t)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(r){const a=typeof r=="string"?JSON.parse(r):r;if(a!=null&&a.email&&(a!=null&&a.password)){if(a.signInMethod==="password")return this._fromEmailAndPassword(a.email,a.password);if(a.signInMethod==="emailLink")return this._fromEmailAndCode(a.email,a.password,a.tenantId)}return null}async _getIdTokenResponse(r){var a;switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.emailPasswordEnabled){const n=await Yn(r,t,"signInWithPassword");return tu(r,n)}else return tu(r,t).catch(async n=>{if(n.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const i=await Yn(r,t,"signInWithPassword");return tu(r,i)}else return Promise.reject(n)});case"emailLink":return aC(r,{email:this._email,oobCode:this._password});default:Be(r,"internal-error")}}async _linkToIdToken(r,a){switch(this.signInMethod){case"password":return rC(r,{idToken:a,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return tC(r,{idToken:a,email:this._email,oobCode:this._password});default:Be(r,"internal-error")}}_getReauthenticationResolver(r){return this._getIdTokenResponse(r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rn(e,r){return aA(e,"POST","/v1/accounts:signInWithIdp",Ht(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nC="http://localhost";class Ft extends i4{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(r){const a=new Ft(r.providerId,r.signInMethod);return r.idToken||r.accessToken?(r.idToken&&(a.idToken=r.idToken),r.accessToken&&(a.accessToken=r.accessToken),r.nonce&&!r.pendingToken&&(a.nonce=r.nonce),r.pendingToken&&(a.pendingToken=r.pendingToken)):r.oauthToken&&r.oauthTokenSecret?(a.accessToken=r.oauthToken,a.secret=r.oauthTokenSecret):Be("argument-error"),a}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(r){const a=typeof r=="string"?JSON.parse(r):r,{providerId:t,signInMethod:n}=a,i=r4(a,["providerId","signInMethod"]);if(!t||!n)return null;const A=new Ft(t,n);return A.idToken=i.idToken||void 0,A.accessToken=i.accessToken||void 0,A.secret=i.secret,A.nonce=i.nonce,A.pendingToken=i.pendingToken||null,A}_getIdTokenResponse(r){const a=this.buildRequest();return Rn(r,a)}_linkToIdToken(r,a){const t=this.buildRequest();return t.idToken=a,Rn(r,t)}_getReauthenticationResolver(r){const a=this.buildRequest();return a.autoCreate=!1,Rn(r,a)}buildRequest(){const r={requestUri:nC,returnSecureToken:!0};if(this.pendingToken)r.pendingToken=this.pendingToken;else{const a={};this.idToken&&(a.id_token=this.idToken),this.accessToken&&(a.access_token=this.accessToken),this.secret&&(a.oauth_token_secret=this.secret),a.providerId=this.providerId,this.nonce&&!this.pendingToken&&(a.nonce=this.nonce),r.postBody=M2(a)}return r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AC(e){const r=_i(Ci(e)).link,a=r?_i(Ci(r)).deep_link_id:null,t=_i(Ci(e)).deep_link_id;return(t?_i(Ci(t)).link:null)||t||a||r||e}class A4{constructor(r){var a,t,n,i,A,o;const f=_i(Ci(r)),s=(a=f.apiKey)!==null&&a!==void 0?a:null,u=(t=f.oobCode)!==null&&t!==void 0?t:null,c=iC((n=f.mode)!==null&&n!==void 0?n:null);K(s&&u&&c,"argument-error"),this.apiKey=s,this.operation=c,this.code=u,this.continueUrl=(i=f.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(A=f.languageCode)!==null&&A!==void 0?A:null,this.tenantId=(o=f.tenantId)!==null&&o!==void 0?o:null}static parseLink(r){const a=AC(r);try{return new A4(a)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.providerId=ni.PROVIDER_ID}static credential(r,a){return N2._fromEmailAndPassword(r,a)}static credentialWithLink(r,a){const t=A4.parseLink(a);return K(t,"argument-error"),N2._fromEmailAndCode(r,t.code,t.tenantId)}}ni.PROVIDER_ID="password";ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(r){this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(r){this.defaultLanguageCode=r}setCustomParameters(r){return this.customParameters=r,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA extends Jg{constructor(){super(...arguments),this.scopes=[]}addScope(r){return this.scopes.includes(r)||this.scopes.push(r),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends tA{constructor(){super("facebook.com")}static credential(r){return Ft._fromParams({providerId:_a.PROVIDER_ID,signInMethod:_a.FACEBOOK_SIGN_IN_METHOD,accessToken:r})}static credentialFromResult(r){return _a.credentialFromTaggedObject(r)}static credentialFromError(r){return _a.credentialFromTaggedObject(r.customData||{})}static credentialFromTaggedObject({_tokenResponse:r}){if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return _a.credential(r.oauthAccessToken)}catch{return null}}}_a.FACEBOOK_SIGN_IN_METHOD="facebook.com";_a.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends tA{constructor(){super("google.com"),this.addScope("profile")}static credential(r,a){return Ft._fromParams({providerId:Ca.PROVIDER_ID,signInMethod:Ca.GOOGLE_SIGN_IN_METHOD,idToken:r,accessToken:a})}static credentialFromResult(r){return Ca.credentialFromTaggedObject(r)}static credentialFromError(r){return Ca.credentialFromTaggedObject(r.customData||{})}static credentialFromTaggedObject({_tokenResponse:r}){if(!r)return null;const{oauthIdToken:a,oauthAccessToken:t}=r;if(!a&&!t)return null;try{return Ca.credential(a,t)}catch{return null}}}Ca.GOOGLE_SIGN_IN_METHOD="google.com";Ca.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba extends tA{constructor(){super("github.com")}static credential(r){return Ft._fromParams({providerId:Ba.PROVIDER_ID,signInMethod:Ba.GITHUB_SIGN_IN_METHOD,accessToken:r})}static credentialFromResult(r){return Ba.credentialFromTaggedObject(r)}static credentialFromError(r){return Ba.credentialFromTaggedObject(r.customData||{})}static credentialFromTaggedObject({_tokenResponse:r}){if(!r||!("oauthAccessToken"in r)||!r.oauthAccessToken)return null;try{return Ba.credential(r.oauthAccessToken)}catch{return null}}}Ba.GITHUB_SIGN_IN_METHOD="github.com";Ba.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends tA{constructor(){super("twitter.com")}static credential(r,a){return Ft._fromParams({providerId:Za.PROVIDER_ID,signInMethod:Za.TWITTER_SIGN_IN_METHOD,oauthToken:r,oauthTokenSecret:a})}static credentialFromResult(r){return Za.credentialFromTaggedObject(r)}static credentialFromError(r){return Za.credentialFromTaggedObject(r.customData||{})}static credentialFromTaggedObject({_tokenResponse:r}){if(!r)return null;const{oauthAccessToken:a,oauthTokenSecret:t}=r;if(!a||!t)return null;try{return Za.credential(a,t)}catch{return null}}}Za.TWITTER_SIGN_IN_METHOD="twitter.com";Za.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iu(e,r){return aA(e,"POST","/v1/accounts:signUp",Ht(e,r))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(r){this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}static async _fromIdTokenResponse(r,a,t,n=!1){const i=await yt._fromIdTokenResponse(r,t,n),A=Kh(t);return new St({user:i,providerId:A,_tokenResponse:t,operationType:a})}static async _forOperation(r,a,t){await r._updateTokensIfNecessary(t,!0);const n=Kh(t);return new St({user:r,providerId:n,_tokenResponse:t,operationType:a})}}function Kh(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo extends he{constructor(r,a,t,n){var i;super(a.code,a.message),this.operationType=t,this.user=n,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:r.name,tenantId:(i=r.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:a.customData._serverResponse,operationType:t}}static _fromErrorAndOperation(r,a,t,n){return new qo(r,a,t,n)}}function $g(e,r,a,t){return(r==="reauthenticate"?a._getReauthenticationResolver(e):a._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(e,i,r,t):i})}async function oC(e,r,a=!1){const t=await T2(e,r._linkToIdToken(e.auth,await e.getIdToken()),a);return St._forOperation(e,"link",t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fC(e,r,a=!1){const{auth:t}=e,n="reauthenticate";try{const i=await T2(e,$g(t,n,r,e),a);K(i.idToken,t,"internal-error");const A=t4(i.idToken);K(A,t,"internal-error");const{sub:o}=A;return K(e.uid===o,t,"user-mismatch"),St._forOperation(e,n,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(t,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(e,r,a=!1){const t="signIn",n=await $g(e,t,r),i=await St._fromIdTokenResponse(e,t,n);return a||await e._updateCurrentUser(i.user),i}async function sC(e,r){return Kg(Jt(e),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(e,r,a){var t;K(((t=a.url)===null||t===void 0?void 0:t.length)>0,e,"invalid-continue-uri"),K(typeof a.dynamicLinkDomain>"u"||a.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),r.continueUrl=a.url,r.dynamicLinkDomain=a.dynamicLinkDomain,r.canHandleCodeInApp=a.handleCodeInApp,a.iOS&&(K(a.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),r.iOSBundleId=a.iOS.bundleId),a.android&&(K(a.android.packageName.length>0,e,"missing-android-pkg-name"),r.androidInstallApp=a.android.installApp,r.androidMinimumVersionCode=a.android.minimumVersion,r.androidPackageName=a.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uC(e,r,a){var t;const n=Jt(e),i={requestType:"PASSWORD_RESET",email:r,clientType:"CLIENT_TYPE_WEB"};if(!((t=n._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const A=await Yn(n,i,"getOobCode",!0);a&&Au(n,A,a),await nu(n,A)}else a&&Au(n,i,a),await nu(n,i).catch(async A=>{if(A.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const o=await Yn(n,i,"getOobCode",!0);a&&Au(n,o,a),await nu(n,o)}else return Promise.reject(A)})}async function lC(e,r,a){var t;const n=Jt(e),i={returnSecureToken:!0,email:r,password:a,clientType:"CLIENT_TYPE_WEB"};let A;if(!((t=n._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await Yn(n,i,"signUpPassword");A=iu(n,s)}else A=iu(n,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Yn(n,i,"signUpPassword");return iu(n,u)}else return Promise.reject(s)});const o=await A.catch(s=>Promise.reject(s)),f=await St._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(f.user),f}function cC(e,r,a){return sC(x0(e),ni.credential(r,a))}function dC(e,r,a,t){return x0(e).onIdTokenChanged(r,a,t)}function hC(e,r,a){return x0(e).beforeAuthStateChanged(r,a)}function qg(e,r,a,t){return x0(e).onAuthStateChanged(r,a,t)}function bC(e){return x0(e).signOut()}const rf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(r,a){this.storageRetriever=r,this.type=a}_isAvailable(){try{return this.storage?(this.storage.setItem(rf,"1"),this.storage.removeItem(rf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(r,a){return this.storage.setItem(r,JSON.stringify(a)),Promise.resolve()}_get(r){const a=this.storage.getItem(r);return Promise.resolve(a?JSON.parse(a):null)}_remove(r){return this.storage.removeItem(r),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(){const e=Zr();return n4(e)||is(e)}const mC=1e3,pC=10;class em extends rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(r,a)=>this.onStorageEvent(r,a),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gC()&&P_(),this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(r){for(const a of Object.keys(this.listeners)){const t=this.storage.getItem(a),n=this.localCache[a];t!==n&&r(a,n,t)}}onStorageEvent(r,a=!1){if(!r.key){this.forAllChangedKeys((A,o,f)=>{this.notifyListeners(A,f)});return}const t=r.key;if(a?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const A=this.storage.getItem(t);if(r.newValue!==A)r.newValue!==null?this.storage.setItem(t,r.newValue):this.storage.removeItem(t);else if(this.localCache[t]===r.newValue&&!a)return}const n=()=>{const A=this.storage.getItem(t);!a&&this.localCache[t]===A||this.notifyListeners(t,A)},i=this.storage.getItem(t);x_()&&i!==r.newValue&&r.newValue!==r.oldValue?setTimeout(n,pC):n()}notifyListeners(r,a){this.localCache[r]=a;const t=this.listeners[r];if(t)for(const n of Array.from(t))n(a&&JSON.parse(a))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((r,a,t)=>{this.onStorageEvent(new StorageEvent("storage",{key:r,oldValue:a,newValue:t}),!0)})},mC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(r,a){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[r]||(this.listeners[r]=new Set,this.localCache[r]=this.storage.getItem(r)),this.listeners[r].add(a)}_removeListener(r,a){this.listeners[r]&&(this.listeners[r].delete(a),this.listeners[r].size===0&&delete this.listeners[r]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(r,a){await super._set(r,a),this.localCache[r]=JSON.stringify(a)}async _get(r){const a=await super._get(r);return this.localCache[r]=JSON.stringify(a),a}async _remove(r){await super._remove(r),delete this.localCache[r]}}em.type="LOCAL";const vC=em;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(r,a){}_removeListener(r,a){}}am.type="SESSION";const tm=am;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kC(e){return Promise.all(e.map(async r=>{try{return{fulfilled:!0,value:await r}}catch(a){return{fulfilled:!1,reason:a}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(r){this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(r){const a=this.receivers.find(n=>n.isListeningto(r));if(a)return a;const t=new As(r);return this.receivers.push(t),t}isListeningto(r){return this.eventTarget===r}async handleEvent(r){const a=r,{eventId:t,eventType:n,data:i}=a.data,A=this.handlersMap[n];if(!(A!=null&&A.size))return;a.ports[0].postMessage({status:"ack",eventId:t,eventType:n});const o=Array.from(A).map(async s=>s(a.origin,i)),f=await kC(o);a.ports[0].postMessage({status:"done",eventId:t,eventType:n,response:f})}_subscribe(r,a){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[r]||(this.handlersMap[r]=new Set),this.handlersMap[r].add(a)}_unsubscribe(r,a){this.handlersMap[r]&&a&&this.handlersMap[r].delete(a),(!a||this.handlersMap[r].size===0)&&delete this.handlersMap[r],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}As.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o4(e="",r=10){let a="";for(let t=0;t<r;t++)a+=Math.floor(Math.random()*10);return e+a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(r){this.target=r,this.handlers=new Set}removeMessageHandler(r){r.messageChannel&&(r.messageChannel.port1.removeEventListener("message",r.onMessage),r.messageChannel.port1.close()),this.handlers.delete(r)}async _send(r,a,t=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let i,A;return new Promise((o,f)=>{const s=o4("",20);n.port1.start();const u=setTimeout(()=>{f(new Error("unsupported_event"))},t);A={messageChannel:n,onMessage(c){const d=c;if(d.data.eventId===s)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),o(d.data.response);break;default:clearTimeout(u),clearTimeout(i),f(new Error("invalid_response"));break}}},this.handlers.add(A),n.port1.addEventListener("message",A.onMessage),this.target.postMessage({eventType:r,eventId:s,data:a},[n.port2])}).finally(()=>{A&&this.removeMessageHandler(A)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return window}function yC(e){Oe().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){return typeof Oe().WorkerGlobalScope<"u"&&typeof Oe().importScripts=="function"}async function EC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IC(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function _C(){return nm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="firebaseLocalStorageDb",CC=1,ef="firebaseLocalStorage",Am="fbase_key";class nA{constructor(r){this.request=r}toPromise(){return new Promise((r,a)=>{this.request.addEventListener("success",()=>{r(this.request.result)}),this.request.addEventListener("error",()=>{a(this.request.error)})})}}function os(e,r){return e.transaction([ef],r?"readwrite":"readonly").objectStore(ef)}function BC(){const e=indexedDB.deleteDatabase(im);return new nA(e).toPromise()}function L1(){const e=indexedDB.open(im,CC);return new Promise((r,a)=>{e.addEventListener("error",()=>{a(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(ef,{keyPath:Am})}catch(n){a(n)}}),e.addEventListener("success",async()=>{const t=e.result;t.objectStoreNames.contains(ef)?r(t):(t.close(),await BC(),r(await L1()))})})}async function qh(e,r,a){const t=os(e,!0).put({[Am]:r,value:a});return new nA(t).toPromise()}async function ZC(e,r){const a=os(e,!1).get(r),t=await new nA(a).toPromise();return t===void 0?null:t.value}function rb(e,r){const a=os(e,!0).delete(r);return new nA(a).toPromise()}const RC=800,TC=3;class om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await L1(),this.db)}async _withRetries(r){let a=0;for(;;)try{const t=await this._openDb();return await r(t)}catch(t){if(a++>TC)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=As._getInstance(_C()),this.receiver._subscribe("keyChanged",async(r,a)=>({keyProcessed:(await this._poll()).includes(a.key)})),this.receiver._subscribe("ping",async(r,a)=>["keyChanged"])}async initializeSender(){var r,a;if(this.activeServiceWorker=await EC(),!this.activeServiceWorker)return;this.sender=new wC(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&!((r=t[0])===null||r===void 0)&&r.fulfilled&&!((a=t[0])===null||a===void 0)&&a.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(r){if(!(!this.sender||!this.activeServiceWorker||IC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:r},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const r=await L1();return await qh(r,rf,"1"),await rb(r,rf),!0}catch{}return!1}async _withPendingWrite(r){this.pendingWrites++;try{await r()}finally{this.pendingWrites--}}async _set(r,a){return this._withPendingWrite(async()=>(await this._withRetries(t=>qh(t,r,a)),this.localCache[r]=a,this.notifyServiceWorker(r)))}async _get(r){const a=await this._withRetries(t=>ZC(t,r));return this.localCache[r]=a,a}async _remove(r){return this._withPendingWrite(async()=>(await this._withRetries(a=>rb(a,r)),delete this.localCache[r],this.notifyServiceWorker(r)))}async _poll(){const r=await this._withRetries(n=>{const i=os(n,!1).getAll();return new nA(i).toPromise()});if(!r)return[];if(this.pendingWrites!==0)return[];const a=[],t=new Set;for(const{fbase_key:n,value:i}of r)t.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),a.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!t.has(n)&&(this.notifyListeners(n,null),a.push(n));return a}notifyListeners(r,a){this.localCache[r]=a;const t=this.listeners[r];if(t)for(const n of Array.from(t))n(a)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(r,a){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[r]||(this.listeners[r]=new Set,this._get(r)),this.listeners[r].add(a)}_removeListener(r,a){this.listeners[r]&&(this.listeners[r].delete(a),this.listeners[r].size===0&&delete this.listeners[r]),Object.keys(this.listeners).length===0&&this.stopPolling()}}om.type="LOCAL";const WC=om;new eA(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(e,r){return r?ra(r):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f4 extends i4{constructor(r){super("custom","custom"),this.params=r}_getIdTokenResponse(r){return Rn(r,this._buildIdpRequest())}_linkToIdToken(r,a){return Rn(r,this._buildIdpRequest(a))}_getReauthenticationResolver(r){return Rn(r,this._buildIdpRequest())}_buildIdpRequest(r){const a={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return r&&(a.idToken=r),a}}function FC(e){return Kg(e.auth,new f4(e),e.bypassAuthState)}function SC(e){const{auth:r,user:a}=e;return K(a,r,"internal-error"),fC(a,new f4(e),e.bypassAuthState)}async function VC(e){const{auth:r,user:a}=e;return K(a,r,"internal-error"),oC(a,new f4(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(r,a,t,n,i=!1){this.auth=r,this.resolver=t,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(a)?a:[a]}execute(){return new Promise(async(r,a)=>{this.pendingPromise={resolve:r,reject:a};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}})}async onAuthEvent(r){const{urlResponse:a,sessionId:t,postBody:n,tenantId:i,error:A,type:o}=r;if(A){this.reject(A);return}const f={auth:this.auth,requestUri:a,sessionId:t,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(f))}catch(s){this.reject(s)}}onError(r){this.reject(r)}getIdpTask(r){switch(r){case"signInViaPopup":case"signInViaRedirect":return FC;case"linkViaPopup":case"linkViaRedirect":return VC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:Be(this.auth,"internal-error")}}resolve(r){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(r),this.unregisterAndCleanUp()}reject(r){la(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(r),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=new eA(2e3,1e4);class mn extends fm{constructor(r,a,t,n,i){super(r,a,n,i),this.provider=t,this.authWindow=null,this.pollId=null,mn.currentPopupAction&&mn.currentPopupAction.cancel(),mn.currentPopupAction=this}async executeNotNull(){const r=await this.execute();return K(r,this.auth,"internal-error"),r}async onExecution(){la(this.filter.length===1,"Popup operations only handle one event");const r=o4();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],r),this.authWindow.associatedEvent=r,this.resolver._originValidation(this.auth).catch(a=>{this.reject(a)}),this.resolver._isIframeWebStorageSupported(this.auth,a=>{a||this.reject(Pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var r;return((r=this.authWindow)===null||r===void 0?void 0:r.associatedEvent)||null}cancel(){this.reject(Pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mn.currentPopupAction=null}pollUserCancellation(){const r=()=>{var a,t;if(!((t=(a=this.authWindow)===null||a===void 0?void 0:a.window)===null||t===void 0)&&t.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(r,DC.get())};r()}}mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC="pendingRedirect",io=new Map;class XC extends fm{constructor(r,a,t=!1){super(r,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,t),this.eventId=null}async execute(){let r=io.get(this.auth._key());if(!r){try{const t=await MC(this.resolver,this.auth)?await super.execute():null;r=()=>Promise.resolve(t)}catch(a){r=()=>Promise.reject(a)}io.set(this.auth._key(),r)}return this.bypassAuthState||io.set(this.auth._key(),()=>Promise.resolve(null)),r()}async onAuthEvent(r){if(r.type==="signInViaRedirect")return super.onAuthEvent(r);if(r.type==="unknown"){this.resolve(null);return}if(r.eventId){const a=await this.auth._redirectUserForId(r.eventId);if(a)return this.user=a,super.onAuthEvent(r);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MC(e,r){const a=OC(r),t=PC(e);if(!await t._isAvailable())return!1;const n=await t._get(a)==="true";return await t._remove(a),n}function xC(e,r){io.set(e._key(),r)}function PC(e){return ra(e._redirectPersistence)}function OC(e){return no(GC,e.config.apiKey,e.name)}async function UC(e,r,a=!1){const t=Jt(e),n=NC(t,r),A=await new XC(t,n,a).execute();return A&&!a&&(delete A.user._redirectEventId,await t._persistUserIfCurrent(A.user),await t._setRedirectUser(null,r)),A}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=10*60*1e3;class LC{constructor(r){this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(r){this.consumers.add(r),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,r)&&(this.sendToConsumer(this.queuedRedirectEvent,r),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(r){this.consumers.delete(r)}onEvent(r){if(this.hasEventBeenHandled(r))return!1;let a=!1;return this.consumers.forEach(t=>{this.isEventForConsumer(r,t)&&(a=!0,this.sendToConsumer(r,t),this.saveEventToCache(r))}),this.hasHandledPotentialRedirect||!YC(r)||(this.hasHandledPotentialRedirect=!0,a||(this.queuedRedirectEvent=r,a=!0)),a}sendToConsumer(r,a){var t;if(r.error&&!sm(r)){const n=((t=r.error.code)===null||t===void 0?void 0:t.split("auth/")[1])||"internal-error";a.onError(Pe(this.auth,n))}else a.onAuthEvent(r)}isEventForConsumer(r,a){const t=a.eventId===null||!!r.eventId&&r.eventId===a.eventId;return a.filter.includes(r.type)&&t}hasEventBeenHandled(r){return Date.now()-this.lastProcessedEventTime>=jC&&this.cachedEventUids.clear(),this.cachedEventUids.has(eb(r))}saveEventToCache(r){this.cachedEventUids.add(eb(r)),this.lastProcessedEventTime=Date.now()}}function eb(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(r=>r).join("-")}function sm({type:e,error:r}){return e==="unknown"&&(r==null?void 0:r.code)==="auth/no-auth-event"}function YC(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sm(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC(e,r={}){return zt(e,"GET","/v1/projects",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zC=/^https?/;async function JC(e){if(e.config.emulator)return;const{authorizedDomains:r}=await QC(e);for(const a of r)try{if($C(a))return}catch{}Be(e,"unauthorized-domain")}function $C(e){const r=j1(),{protocol:a,hostname:t}=new URL(r);if(e.startsWith("chrome-extension://")){const A=new URL(e);return A.hostname===""&&t===""?a==="chrome-extension:"&&e.replace("chrome-extension://","")===r.replace("chrome-extension://",""):a==="chrome-extension:"&&A.hostname===t}if(!zC.test(a))return!1;if(HC.test(e))return t===e;const n=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(t)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC=new eA(3e4,6e4);function ab(){const e=Oe().___jsl;if(e!=null&&e.H){for(const r of Object.keys(e.H))if(e.H[r].r=e.H[r].r||[],e.H[r].L=e.H[r].L||[],e.H[r].r=[...e.H[r].L],e.CP)for(let a=0;a<e.CP.length;a++)e.CP[a]=null}}function qC(e){return new Promise((r,a)=>{var t,n,i;function A(){ab(),gapi.load("gapi.iframes",{callback:()=>{r(gapi.iframes.getContext())},ontimeout:()=>{ab(),a(Pe(e,"network-request-failed"))},timeout:KC.get()})}if(!((n=(t=Oe().gapi)===null||t===void 0?void 0:t.iframes)===null||n===void 0)&&n.Iframe)r(gapi.iframes.getContext());else if(!((i=Oe().gapi)===null||i===void 0)&&i.load)A();else{const o=U_("iframefcb");return Oe()[o]=()=>{gapi.load?A():a(Pe(e,"network-request-failed"))},Qg(`https://apis.google.com/js/api.js?onload=${o}`).catch(f=>a(f))}}).catch(r=>{throw Ao=null,r})}let Ao=null;function rB(e){return Ao=Ao||qC(e),Ao}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eB=new eA(5e3,15e3),aB="__/auth/iframe",tB="emulator/auth/iframe",nB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AB(e){const r=e.config;K(r.authDomain,e,"auth-domain-config-required");const a=r.emulator?a4(r,tB):`https://${e.config.authDomain}/${aB}`,t={apiKey:r.apiKey,appName:e.name,v:Ut},n=iB.get(e.config.apiHost);n&&(t.eid=n);const i=e._getFrameworks();return i.length&&(t.fw=i.join(",")),`${a}?${M2(t).slice(1)}`}async function oB(e){const r=await rB(e),a=Oe().gapi;return K(a,e,"internal-error"),r.open({where:document.body,url:AB(e),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nB,dontclear:!0},t=>new Promise(async(n,i)=>{await t.restyle({setHideOnLeave:!1});const A=Pe(e,"network-request-failed"),o=Oe().setTimeout(()=>{i(A)},eB.get());function f(){Oe().clearTimeout(o),n(t)}t.ping(f).then(f,()=>{i(A)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sB=500,uB=600,lB="_blank",cB="http://localhost";class tb{constructor(r){this.window=r,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dB(e,r,a,t=sB,n=uB){const i=Math.max((window.screen.availHeight-n)/2,0).toString(),A=Math.max((window.screen.availWidth-t)/2,0).toString();let o="";const f=Object.assign(Object.assign({},fB),{width:t.toString(),height:n.toString(),top:i,left:A}),s=Zr().toLowerCase();a&&(o=Xg(s)?lB:a),Gg(s)&&(r=r||cB,f.scrollbars="yes");const u=Object.entries(f).reduce((d,[b,w])=>`${d}${b}=${w},`,"");if(M_(s)&&o!=="_self")return hB(r||"",o),new tb(null);const c=window.open(r||"",o,u);K(c,e,"popup-blocked");try{c.focus()}catch{}return new tb(c)}function hB(e,r){const a=document.createElement("a");a.href=e,a.target=r;const t=document.createEvent("MouseEvent");t.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),a.dispatchEvent(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bB="__/auth/handler",gB="emulator/auth/handler",mB=encodeURIComponent("fac");async function nb(e,r,a,t,n,i){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const A={apiKey:e.config.apiKey,appName:e.name,authType:a,redirectUrl:t,v:Ut,eventId:n};if(r instanceof Jg){r.setDefaultLanguage(e.languageCode),A.providerId=r.providerId||"",Qw(r.getCustomParameters())||(A.customParameters=JSON.stringify(r.getCustomParameters()));for(const[u,c]of Object.entries(i||{}))A[u]=c}if(r instanceof tA){const u=r.getScopes().filter(c=>c!=="");u.length>0&&(A.scopes=u.join(","))}e.tenantId&&(A.tid=e.tenantId);const o=A;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const f=await e._getAppCheckToken(),s=f?`#${mB}=${encodeURIComponent(f)}`:"";return`${pB(e)}?${M2(o).slice(1)}${s}`}function pB({config:e}){return e.emulator?a4(e,gB):`https://${e.authDomain}/${bB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="webStorageSupport";class vB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tm,this._completeRedirectFn=UC,this._overrideRedirectResult=xC}async _openPopup(r,a,t,n){var i;la((i=this.eventManagers[r._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const A=await nb(r,a,t,j1(),n);return dB(r,A,o4())}async _openRedirect(r,a,t,n){await this._originValidation(r);const i=await nb(r,a,t,j1(),n);return yC(i),new Promise(()=>{})}_initialize(r){const a=r._key();if(this.eventManagers[a]){const{manager:n,promise:i}=this.eventManagers[a];return n?Promise.resolve(n):(la(i,"If manager is not set, promise should be"),i)}const t=this.initAndGetManager(r);return this.eventManagers[a]={promise:t},t.catch(()=>{delete this.eventManagers[a]}),t}async initAndGetManager(r){const a=await oB(r),t=new LC(r);return a.register("authEvent",n=>(K(n==null?void 0:n.authEvent,r,"invalid-auth-event"),{status:t.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[r._key()]={manager:t},this.iframes[r._key()]=a,t}_isIframeWebStorageSupported(r,a){this.iframes[r._key()].send(ou,{type:ou},n=>{var i;const A=(i=n==null?void 0:n[0])===null||i===void 0?void 0:i[ou];A!==void 0&&a(!!A),Be(r,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(r){const a=r._key();return this.originValidationPromises[a]||(this.originValidationPromises[a]=JC(r)),this.originValidationPromises[a]}get _shouldInitProactively(){return Ug()||n4()||is()}}const kB=vB;var ib="@firebase/auth",Ab="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wB{constructor(r){this.auth=r,this.internalListeners=new Map}getUid(){var r;return this.assertAuthConfigured(),((r=this.auth.currentUser)===null||r===void 0?void 0:r.uid)||null}async getToken(r){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(r)}:null}addAuthTokenListener(r){if(this.assertAuthConfigured(),this.internalListeners.has(r))return;const a=this.auth.onIdTokenChanged(t=>{r((t==null?void 0:t.stsTokenManager.accessToken)||null)});this.internalListeners.set(r,a),this.updateProactiveRefresh()}removeAuthTokenListener(r){this.assertAuthConfigured();const a=this.internalListeners.get(r);a&&(this.internalListeners.delete(r),a(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yB(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function EB(e){Ie(new de("auth",(r,{options:a})=>{const t=r.getProvider("app").getImmediate(),n=r.getProvider("heartbeat"),i=r.getProvider("app-check-internal"),{apiKey:A,authDomain:o}=t.options;K(A&&!A.includes(":"),"invalid-api-key",{appName:t.name});const f={apiKey:A,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(e)},s=new H_(t,n,i,f);return J_(s,a),s},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((r,a,t)=>{r.getProvider("auth-internal").initialize()})),Ie(new de("auth-internal",r=>{const a=Jt(r.getProvider("auth").getImmediate());return(t=>new wB(t))(a)},"PRIVATE").setInstantiationMode("EXPLICIT")),jr(ib,Ab,yB(e)),jr(ib,Ab,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=5*60,_B=i8("authIdTokenMaxAge")||IB;let ob=null;const CB=e=>async r=>{const a=r&&await r.getIdTokenResult(),t=a&&(new Date().getTime()-Date.parse(a.issuedAtTime))/1e3;if(t&&t>_B)return;const n=a==null?void 0:a.token;ob!==n&&(ob=n,await fetch(e,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Vt(e=Cf()){const r=at(e,"auth");if(r.isInitialized())return r.getImmediate();const a=z_(e,{popupRedirectResolver:kB,persistence:[WC,vC,tm]}),t=i8("authTokenSyncURL");if(t){const i=CB(t);hC(a,i,()=>i(a.currentUser)),dC(a,A=>i(A))}const n=a8("auth");return n&&$_(a,`http://${n}`),a}EB("Browser");const BB=()=>{var A;const[e,r]=V.useState([]),a=xc(),t=Vt(),n=(A=t.currentUser)==null?void 0:A.uid,i=async()=>{try{await bC(t),alert("로그아웃 되었습니다.")}catch(o){console.log(o)}};return V.useEffect(()=>{(async()=>{const f=zo(a,"posts"),s=U1(f,f_("id","==",n)),c=(await Zg(s)).docs.map(d=>d.data());r(c)})()},[]),_.jsxs(_.Fragment,{children:[_.jsx("div",{className:"profileTap",children:_.jsxs("div",{className:"profileTable",children:[_.jsx("div",{className:"profileFirstStair",children:_.jsx("div",{className:"profileImageCircle",children:_.jsx("img",{className:"profileImage",src:Tw,alt:"일론머스크"})})}),_.jsx("div",{className:"profileSecondStair",children:_.jsxs("div",{className:"relationshipTable",children:[_.jsxs("table",{children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"게시물"}),_.jsx("th",{children:"팔로워"}),_.jsx("th",{children:"팔로잉"})]})}),_.jsx("tbody",{children:_.jsxs("tr",{children:[_.jsx("td",{children:"1"}),_.jsx("td",{children:"1"}),_.jsx("td",{children:"1"})]})})]}),_.jsxs("div",{className:"personalToSetting",children:[_.jsxs("div",{className:"personalTable",children:[_.jsx("div",{children:"일론머스크"}),_.jsx("div",{children:"자기소개안해"})]}),_.jsx("div",{className:"settingTable",children:_.jsx("span",{className:"material-symbols-outlined",children:"settings"})}),_.jsx("div",{className:"logoutTable",children:_.jsx("button",{className:"logoutBtn",onClick:i,children:"logout"})})]})]})})]})}),_.jsx("div",{className:"imageTap",children:e.map(o=>_.jsx("div",{children:_.jsx("img",{src:o.imageUrl,alt:o.nickname})},o.imageUrl))}),_.jsxs("div",{className:"modalLogIn hidden",children:[_.jsx("div",{className:"modal_overlay"}),_.jsxs("div",{className:"modal_content",children:[_.jsx("div",{children:_.jsx("input",{type:"email",id:"loginEmail",className:"loginEmail"})}),_.jsx("div",{children:_.jsx("input",{type:"password",id:"loginPwd",className:"loginPwd"})}),_.jsxs("div",{children:[_.jsx("input",{type:"submit",value:"로그인"}),_.jsx("input",{type:"button",value:"회원가입"})]}),_.jsxs("div",{children:[_.jsx("a",{href:"#",children:"비밀번호를 잊어버리셨나요?"}),_.jsx("input",{type:"button",id:"closeBtn",value:"X"})]})]})]}),_.jsx("input",{type:"button",id:"notYetLogin",value:"임시버튼.인증=버튼클릭"}),_.jsxs("div",{children:[_.jsx(ya,{to:"/UploadPost"}),"글쓰기"]})]})};var ZB="firebase",RB="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jr(ZB,RB,"app");const TB=(e,r)=>r.some(a=>e instanceof a);let fb,sb;function WB(){return fb||(fb=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function NB(){return sb||(sb=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const um=new WeakMap,Y1=new WeakMap,lm=new WeakMap,fu=new WeakMap,s4=new WeakMap;function FB(e){const r=new Promise((a,t)=>{const n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",A)},i=()=>{a(Qa(e.result)),n()},A=()=>{t(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",A)});return r.then(a=>{a instanceof IDBCursor&&um.set(a,e)}).catch(()=>{}),s4.set(r,e),r}function SB(e){if(Y1.has(e))return;const r=new Promise((a,t)=>{const n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",A),e.removeEventListener("abort",A)},i=()=>{a(),n()},A=()=>{t(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",A),e.addEventListener("abort",A)});Y1.set(e,r)}let Q1={get(e,r,a){if(e instanceof IDBTransaction){if(r==="done")return Y1.get(e);if(r==="objectStoreNames")return e.objectStoreNames||lm.get(e);if(r==="store")return a.objectStoreNames[1]?void 0:a.objectStore(a.objectStoreNames[0])}return Qa(e[r])},set(e,r,a){return e[r]=a,!0},has(e,r){return e instanceof IDBTransaction&&(r==="done"||r==="store")?!0:r in e}};function VB(e){Q1=e(Q1)}function DB(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(r,...a){const t=e.call(su(this),r,...a);return lm.set(t,r.sort?r.sort():[r]),Qa(t)}:NB().includes(e)?function(...r){return e.apply(su(this),r),Qa(um.get(this))}:function(...r){return Qa(e.apply(su(this),r))}}function GB(e){return typeof e=="function"?DB(e):(e instanceof IDBTransaction&&SB(e),TB(e,WB())?new Proxy(e,Q1):e)}function Qa(e){if(e instanceof IDBRequest)return FB(e);if(fu.has(e))return fu.get(e);const r=GB(e);return r!==e&&(fu.set(e,r),s4.set(r,e)),r}const su=e=>s4.get(e);function XB(e,r,{blocked:a,upgrade:t,blocking:n,terminated:i}={}){const A=indexedDB.open(e,r),o=Qa(A);return t&&A.addEventListener("upgradeneeded",f=>{t(Qa(A.result),f.oldVersion,f.newVersion,Qa(A.transaction))}),a&&A.addEventListener("blocked",()=>a()),o.then(f=>{i&&f.addEventListener("close",()=>i()),n&&f.addEventListener("versionchange",()=>n())}).catch(()=>{}),o}const MB=["get","getKey","getAll","getAllKeys","count"],xB=["put","add","delete","clear"],uu=new Map;function ub(e,r){if(!(e instanceof IDBDatabase&&!(r in e)&&typeof r=="string"))return;if(uu.get(r))return uu.get(r);const a=r.replace(/FromIndex$/,""),t=r!==a,n=xB.includes(a);if(!(a in(t?IDBIndex:IDBObjectStore).prototype)||!(n||MB.includes(a)))return;const i=async function(A,...o){const f=this.transaction(A,n?"readwrite":"readonly");let s=f.store;return t&&(s=s.index(o.shift())),(await Promise.all([s[a](...o),n&&f.done]))[0]};return uu.set(r,i),i}VB(e=>({...e,get:(r,a,t)=>ub(r,a)||e.get(r,a,t),has:(r,a)=>!!ub(r,a)||e.has(r,a)}));const cm="@firebase/installations",u4="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=1e4,hm=`w:${u4}`,bm="FIS_v2",PB="https://firebaseinstallations.googleapis.com/v1",OB=60*60*1e3,UB="installations",jB="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LB={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Dt=new Ot(UB,jB,LB);function gm(e){return e instanceof he&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm({projectId:e}){return`${PB}/projects/${e}/installations`}function pm(e){return{token:e.token,requestStatus:2,expiresIn:QB(e.expiresIn),creationTime:Date.now()}}async function vm(e,r){const t=(await r.json()).error;return Dt.create("request-failed",{requestName:e,serverCode:t.code,serverMessage:t.message,serverStatus:t.status})}function km({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function YB(e,{refreshToken:r}){const a=km(e);return a.append("Authorization",HB(r)),a}async function wm(e){const r=await e();return r.status>=500&&r.status<600?e():r}function QB(e){return Number(e.replace("s","000"))}function HB(e){return`${bm} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zB({appConfig:e,heartbeatServiceProvider:r},{fid:a}){const t=mm(e),n=km(e),i=r.getImmediate({optional:!0});if(i){const s=await i.getHeartbeatsHeader();s&&n.append("x-firebase-client",s)}const A={fid:a,authVersion:bm,appId:e.appId,sdkVersion:hm},o={method:"POST",headers:n,body:JSON.stringify(A)},f=await wm(()=>fetch(t,o));if(f.ok){const s=await f.json();return{fid:s.fid||a,registrationStatus:2,refreshToken:s.refreshToken,authToken:pm(s.authToken)}}else throw await vm("Create Installation",f)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(e){return new Promise(r=>{setTimeout(r,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JB(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $B=/^[cdef][\w-]{21}$/,H1="";function KB(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const a=qB(e);return $B.test(a)?a:H1}catch{return H1}}function qB(e){return JB(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Map;function Im(e,r){const a=fs(e);_m(a,r),rZ(a,r)}function _m(e,r){const a=Em.get(e);if(a)for(const t of a)t(r)}function rZ(e,r){const a=eZ();a&&a.postMessage({key:e,fid:r}),aZ()}let mt=null;function eZ(){return!mt&&"BroadcastChannel"in self&&(mt=new BroadcastChannel("[Firebase] FID Change"),mt.onmessage=e=>{_m(e.data.key,e.data.fid)}),mt}function aZ(){Em.size===0&&mt&&(mt.close(),mt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tZ="firebase-installations-database",nZ=1,Gt="firebase-installations-store";let lu=null;function l4(){return lu||(lu=XB(tZ,nZ,{upgrade:(e,r)=>{switch(r){case 0:e.createObjectStore(Gt)}}})),lu}async function af(e,r){const a=fs(e),n=(await l4()).transaction(Gt,"readwrite"),i=n.objectStore(Gt),A=await i.get(a);return await i.put(r,a),await n.done,(!A||A.fid!==r.fid)&&Im(e,r.fid),r}async function Cm(e){const r=fs(e),t=(await l4()).transaction(Gt,"readwrite");await t.objectStore(Gt).delete(r),await t.done}async function ss(e,r){const a=fs(e),n=(await l4()).transaction(Gt,"readwrite"),i=n.objectStore(Gt),A=await i.get(a),o=r(A);return o===void 0?await i.delete(a):await i.put(o,a),await n.done,o&&(!A||A.fid!==o.fid)&&Im(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c4(e){let r;const a=await ss(e.appConfig,t=>{const n=iZ(t),i=AZ(e,n);return r=i.registrationPromise,i.installationEntry});return a.fid===H1?{installationEntry:await r}:{installationEntry:a,registrationPromise:r}}function iZ(e){const r=e||{fid:KB(),registrationStatus:0};return Bm(r)}function AZ(e,r){if(r.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(Dt.create("app-offline"));return{installationEntry:r,registrationPromise:n}}const a={fid:r.fid,registrationStatus:1,registrationTime:Date.now()},t=oZ(e,a);return{installationEntry:a,registrationPromise:t}}else return r.registrationStatus===1?{installationEntry:r,registrationPromise:fZ(e)}:{installationEntry:r}}async function oZ(e,r){try{const a=await zB(e,r);return af(e.appConfig,a)}catch(a){throw gm(a)&&a.customData.serverCode===409?await Cm(e.appConfig):await af(e.appConfig,{fid:r.fid,registrationStatus:0}),a}}async function fZ(e){let r=await lb(e.appConfig);for(;r.registrationStatus===1;)await ym(100),r=await lb(e.appConfig);if(r.registrationStatus===0){const{installationEntry:a,registrationPromise:t}=await c4(e);return t||a}return r}function lb(e){return ss(e,r=>{if(!r)throw Dt.create("installation-not-found");return Bm(r)})}function Bm(e){return sZ(e)?{fid:e.fid,registrationStatus:0}:e}function sZ(e){return e.registrationStatus===1&&e.registrationTime+dm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uZ({appConfig:e,heartbeatServiceProvider:r},a){const t=lZ(e,a),n=YB(e,a),i=r.getImmediate({optional:!0});if(i){const s=await i.getHeartbeatsHeader();s&&n.append("x-firebase-client",s)}const A={installation:{sdkVersion:hm,appId:e.appId}},o={method:"POST",headers:n,body:JSON.stringify(A)},f=await wm(()=>fetch(t,o));if(f.ok){const s=await f.json();return pm(s)}else throw await vm("Generate Auth Token",f)}function lZ(e,{fid:r}){return`${mm(e)}/${r}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d4(e,r=!1){let a;const t=await ss(e.appConfig,i=>{if(!Zm(i))throw Dt.create("not-registered");const A=i.authToken;if(!r&&hZ(A))return i;if(A.requestStatus===1)return a=cZ(e,r),i;{if(!navigator.onLine)throw Dt.create("app-offline");const o=gZ(i);return a=dZ(e,o),o}});return a?await a:t.authToken}async function cZ(e,r){let a=await cb(e.appConfig);for(;a.authToken.requestStatus===1;)await ym(100),a=await cb(e.appConfig);const t=a.authToken;return t.requestStatus===0?d4(e,r):t}function cb(e){return ss(e,r=>{if(!Zm(r))throw Dt.create("not-registered");const a=r.authToken;return mZ(a)?Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}):r})}async function dZ(e,r){try{const a=await uZ(e,r),t=Object.assign(Object.assign({},r),{authToken:a});return await af(e.appConfig,t),a}catch(a){if(gm(a)&&(a.customData.serverCode===401||a.customData.serverCode===404))await Cm(e.appConfig);else{const t=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}});await af(e.appConfig,t)}throw a}}function Zm(e){return e!==void 0&&e.registrationStatus===2}function hZ(e){return e.requestStatus===2&&!bZ(e)}function bZ(e){const r=Date.now();return r<e.creationTime||e.creationTime+e.expiresIn<r+OB}function gZ(e){const r={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:r})}function mZ(e){return e.requestStatus===1&&e.requestTime+dm<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pZ(e){const r=e,{installationEntry:a,registrationPromise:t}=await c4(r);return t?t.catch(console.error):d4(r).catch(console.error),a.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vZ(e,r=!1){const a=e;return await kZ(a),(await d4(a,r)).token}async function kZ(e){const{registrationPromise:r}=await c4(e);r&&await r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wZ(e){if(!e||!e.options)throw cu("App Configuration");if(!e.name)throw cu("App Name");const r=["projectId","apiKey","appId"];for(const a of r)if(!e.options[a])throw cu(a);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function cu(e){return Dt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm="installations",yZ="installations-internal",EZ=e=>{const r=e.getProvider("app").getImmediate(),a=wZ(r),t=at(r,"heartbeat");return{app:r,appConfig:a,heartbeatServiceProvider:t,_delete:()=>Promise.resolve()}},IZ=e=>{const r=e.getProvider("app").getImmediate(),a=at(r,Rm).getImmediate();return{getId:()=>pZ(a),getToken:n=>vZ(a,n)}};function _Z(){Ie(new de(Rm,EZ,"PUBLIC")),Ie(new de(yZ,IZ,"PRIVATE"))}_Z();jr(cm,u4);jr(cm,u4,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="analytics",CZ="firebase_id",BZ="origin",ZZ=60*1e3,RZ="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",h4="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new _f("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TZ={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},qr=new Ot("analytics","Analytics",TZ);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WZ(e){if(!e.startsWith(h4)){const r=qr.create("invalid-gtag-resource",{gtagURL:e});return Lr.warn(r.message),""}return e}function Tm(e){return Promise.all(e.map(r=>r.catch(a=>a)))}function NZ(e,r){let a;return window.trustedTypes&&(a=window.trustedTypes.createPolicy(e,r)),a}function FZ(e,r){const a=NZ("firebase-js-sdk-policy",{createScriptURL:WZ}),t=document.createElement("script"),n=`${h4}?l=${e}&id=${r}`;t.src=a?a==null?void 0:a.createScriptURL(n):n,t.async=!0,document.head.appendChild(t)}function SZ(e){let r=[];return Array.isArray(window[e])?r=window[e]:window[e]=r,r}async function VZ(e,r,a,t,n,i){const A=t[n];try{if(A)await r[A];else{const f=(await Tm(a)).find(s=>s.measurementId===n);f&&await r[f.appId]}}catch(o){Lr.error(o)}e("config",n,i)}async function DZ(e,r,a,t,n){try{let i=[];if(n&&n.send_to){let A=n.send_to;Array.isArray(A)||(A=[A]);const o=await Tm(a);for(const f of A){const s=o.find(c=>c.measurementId===f),u=s&&r[s.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(r)),await Promise.all(i),e("event",t,n||{})}catch(i){Lr.error(i)}}function GZ(e,r,a,t){async function n(i,...A){try{if(i==="event"){const[o,f]=A;await DZ(e,r,a,o,f)}else if(i==="config"){const[o,f]=A;await VZ(e,r,a,t,o,f)}else if(i==="consent"){const[o]=A;e("consent","update",o)}else if(i==="get"){const[o,f,s]=A;e("get",o,f,s)}else if(i==="set"){const[o]=A;e("set",o)}else e(i,...A)}catch(o){Lr.error(o)}}return n}function XZ(e,r,a,t,n){let i=function(...A){window[t].push(arguments)};return window[n]&&typeof window[n]=="function"&&(i=window[n]),window[n]=GZ(i,e,r,a),{gtagCore:i,wrappedGtag:window[n]}}function MZ(e){const r=window.document.getElementsByTagName("script");for(const a of Object.values(r))if(a.src&&a.src.includes(h4)&&a.src.includes(e))return a;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xZ=30,PZ=1e3;class OZ{constructor(r={},a=PZ){this.throttleMetadata=r,this.intervalMillis=a}getThrottleMetadata(r){return this.throttleMetadata[r]}setThrottleMetadata(r,a){this.throttleMetadata[r]=a}deleteThrottleMetadata(r){delete this.throttleMetadata[r]}}const Wm=new OZ;function UZ(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function jZ(e){var r;const{appId:a,apiKey:t}=e,n={method:"GET",headers:UZ(t)},i=RZ.replace("{app-id}",a),A=await fetch(i,n);if(A.status!==200&&A.status!==304){let o="";try{const f=await A.json();!((r=f.error)===null||r===void 0)&&r.message&&(o=f.error.message)}catch{}throw qr.create("config-fetch-failed",{httpStatus:A.status,responseMessage:o})}return A.json()}async function LZ(e,r=Wm,a){const{appId:t,apiKey:n,measurementId:i}=e.options;if(!t)throw qr.create("no-app-id");if(!n){if(i)return{measurementId:i,appId:t};throw qr.create("no-api-key")}const A=r.getThrottleMetadata(t)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new HZ;return setTimeout(async()=>{o.abort()},a!==void 0?a:ZZ),Nm({appId:t,apiKey:n,measurementId:i},A,o,r)}async function Nm(e,{throttleEndTimeMillis:r,backoffCount:a},t,n=Wm){var i;const{appId:A,measurementId:o}=e;try{await YZ(t,r)}catch(f){if(o)return Lr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:A,measurementId:o};throw f}try{const f=await jZ(e);return n.deleteThrottleMetadata(A),f}catch(f){const s=f;if(!QZ(s)){if(n.deleteThrottleMetadata(A),o)return Lr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${s==null?void 0:s.message}]`),{appId:A,measurementId:o};throw f}const u=Number((i=s==null?void 0:s.customData)===null||i===void 0?void 0:i.httpStatus)===503?Md(a,n.intervalMillis,xZ):Md(a,n.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:a+1};return n.setThrottleMetadata(A,c),Lr.debug(`Calling attemptFetch again in ${u} millis`),Nm(e,c,t,n)}}function YZ(e,r){return new Promise((a,t)=>{const n=Math.max(r-Date.now(),0),i=setTimeout(a,n);e.addEventListener(()=>{clearTimeout(i),t(qr.create("fetch-throttle",{throttleEndTimeMillis:r}))})})}function QZ(e){if(!(e instanceof he)||!e.customData)return!1;const r=Number(e.customData.httpStatus);return r===429||r===500||r===503||r===504}class HZ{constructor(){this.listeners=[]}addEventListener(r){this.listeners.push(r)}abort(){this.listeners.forEach(r=>r())}}async function zZ(e,r,a,t,n){if(n&&n.global){e("event",a,t);return}else{const i=await r,A=Object.assign(Object.assign({},t),{send_to:i});e("event",a,A)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JZ(){if(f8())try{await s8()}catch(e){return Lr.warn(qr.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Lr.warn(qr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function $Z(e,r,a,t,n,i,A){var o;const f=LZ(e);f.then(b=>{a[b.measurementId]=b.appId,e.options.measurementId&&b.measurementId!==e.options.measurementId&&Lr.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Lr.error(b)),r.push(f);const s=JZ().then(b=>{if(b)return t.getId()}),[u,c]=await Promise.all([f,s]);MZ(i)||FZ(i,u.measurementId),n("js",new Date);const d=(o=A==null?void 0:A.config)!==null&&o!==void 0?o:{};return d[BZ]="firebase",d.update=!0,c!=null&&(d[CZ]=c),n("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KZ{constructor(r){this.app=r}_delete(){return delete Li[this.app.options.appId],Promise.resolve()}}let Li={},db=[];const hb={};let du="dataLayer",qZ="gtag",bb,Fm,gb=!1;function rR(){const e=[];if(o8()&&e.push("This is a browser extension environment."),Uw()||e.push("Cookies are not available."),e.length>0){const r=e.map((t,n)=>`(${n+1}) ${t}`).join(" "),a=qr.create("invalid-analytics-context",{errorInfo:r});Lr.warn(a.message)}}function eR(e,r,a){rR();const t=e.options.appId;if(!t)throw qr.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Lr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw qr.create("no-api-key");if(Li[t]!=null)throw qr.create("already-exists",{id:t});if(!gb){SZ(du);const{wrappedGtag:i,gtagCore:A}=XZ(Li,db,hb,du,qZ);Fm=i,bb=A,gb=!0}return Li[t]=$Z(e,db,hb,r,bb,du,a),new KZ(e)}function aR(e=Cf()){e=x0(e);const r=at(e,tf);return r.isInitialized()?r.getImmediate():tR(e)}function tR(e,r={}){const a=at(e,tf);if(a.isInitialized()){const n=a.getImmediate();if(c2(r,a.getOptions()))return n;throw qr.create("already-initialized")}return a.initialize({options:r})}function nR(e,r,a,t){e=x0(e),zZ(Fm,Li[e.app.options.appId],r,a,t).catch(n=>Lr.error(n))}const mb="@firebase/analytics",pb="0.10.0";function iR(){Ie(new de(tf,(r,{options:a})=>{const t=r.getProvider("app").getImmediate(),n=r.getProvider("installations-internal").getImmediate();return eR(t,n,a)},"PUBLIC")),Ie(new de("analytics-internal",e,"PRIVATE")),jr(mb,pb),jr(mb,pb,"esm2017");function e(r){try{const a=r.getProvider(tf).getImmediate();return{logEvent:(t,n,i)=>nR(a,t,n,i)}}catch(a){throw qr.create("interop-component-reg-failed",{reason:a})}}}iR();const AR={apiKey:"AIzaSyCSTcr2t_QIa9f8Bew2ALMiIPw3NBbZNjU",authDomain:"animall-cf759.firebaseapp.com",projectId:"animall-cf759",storageBucket:"animall-cf759.appspot.com",messagingSenderId:"1049728431328",appId:"1:1049728431328:web:46daa36091a6c635448c85",measurementId:"G-PCJHQEZSC7"},Sm=c8(AR);aR(Sm);const z1=xc(Sm);const vb=V.forwardRef(({id:e,nickname:r,profileImageUrl:a,imageUrl:t,likes:n,content:i,date:A},o)=>{const f=new Date(A.seconds*1e3).toLocaleString("ko-KR"),[s,u]=V.useState(null);V.useEffect(()=>{const b=Vt(),w=qg(b,y=>{u(y?y.uid:null)});return()=>w()},[]);const c=s===e;console.log(e,"id"),console.log(s,"currentUserId");const d=async()=>{if(window.confirm("Are you sure you want to delete this post?"))try{await m_(mg(z1,"posts",e))}catch(b){console.error("Error deleting post:",b)}};return _.jsxs("div",{className:"feedContentBox",ref:o,children:[_.jsxs("div",{className:"feedHeader",children:[_.jsxs("div",{className:"headerLeft",children:[_.jsx("div",{className:"feedProfileImageCircle",children:_.jsx("img",{className:"profileImage",src:a,alt:"Profile"})}),_.jsx("div",{className:"userNickname",children:r})]}),_.jsx("div",{children:_.jsx("div",{className:"feedSetting",children:"설정"})})]}),_.jsx("div",{className:"feedImage",children:_.jsx("img",{src:t,alt:"게시물"})}),_.jsxs("div",{className:"feedInteraction",children:[_.jsxs("div",{className:"feedInteractionDetail",children:[_.jsx("div",{className:"iLikeIt",children:"좋아요"}),_.jsx("div",{className:"wrtComment",children:"댓글"}),_.jsx("div",{className:"sendToMsg",children:"메시지"})]}),_.jsx("div",{children:_.jsx("div",{className:"bookmark",children:"저장"})})]}),_.jsx("div",{className:"interactionStatus",children:_.jsxs("div",{className:"howManyLikey",children:["좋아요 ",n,"개"]})}),_.jsx("div",{children:_.jsx("div",{className:"feedText",children:i})}),_.jsxs("div",{children:[_.jsx("div",{className:"createdDate",children:f}),c&&_.jsx("button",{onClick:d,children:"삭제"})]})]})}),kb=()=>{const[e,r]=V.useState([]),[a,t]=V.useState(null),n=V.useRef(null),i=async(o=null,f)=>{let s=U1(zo(z1,"posts"),Ph("date","desc"),Oh(f));o&&(s=U1(zo(z1,"posts"),Ph("date","desc"),s_(o),Oh(f)));const u=await Zg(s),c=u.docs[u.docs.length-1],d=u.docs.map(b=>({id:b.id,...b.data()}));r(o?b=>[...b,...d]:d),t(c)};V.useEffect(()=>{i(null,5)},[]);const A=V.useCallback(o=>{n.current&&n.current.disconnect(),n.current=new IntersectionObserver(f=>{f[0].isIntersecting&&a&&i(a,5)}),o&&n.current.observe(o)},[a]);return _.jsx("div",{children:e.map((o,f)=>{const s=`${o.id}_${f}`;return e.length===f+1?_.jsx(vb,{ref:A,...o},s):_.jsx(vb,{...o},s)})})},oR=()=>{const[e,r]=V.useState(""),[a,t]=V.useState(""),[n,i]=V.useState(""),[A,o]=V.useState(""),f=s=>{if(s.preventDefault(),!e||!a){alert("모든 항목 기재해야합니다");return}const u=Vt();lC(u,e,a).then(c=>{const d=c.user;alert("가입 성공"),console.log(d)}).catch(c=>{const d=c.code,b=c.message;console.log(d,b),console.log("가입 실패")})};return _.jsxs("form",{onSubmit:f,children:[_.jsxs("label",{children:["아이디:",_.jsx("input",{type:"text",value:e,onChange:s=>r(s.target.value)})]}),_.jsx("br",{}),_.jsxs("label",{children:["비밀번호:",_.jsx("input",{type:"password",value:a,onChange:s=>t(s.target.value)})]}),_.jsx("br",{}),_.jsxs("label",{children:["닉네임:",_.jsx("input",{type:"text",value:n,onChange:s=>i(s.target.value)})]}),_.jsx("br",{}),_.jsxs("label",{children:["전화번호:",_.jsx("input",{type:"text",value:A,onChange:s=>o(s.target.value)})]}),_.jsx("br",{}),_.jsx("input",{type:"submit",value:"회원가입"})]})},fR=()=>{const[e,r]=V.useState(""),[a,t]=V.useState(""),n=A=>{if(A.preventDefault(),!e||!a){alert("아이디와 비밀번호를 입력해주세요.");return}const o=Vt();cC(o,e,a).then(f=>{const s=f.user;alert("로그인 성공"),console.log("로그인 성공"),console.log(s)}).catch(f=>{const s=f.code,u=f.message;console.log("로그인 실패"),alert("로그인 실패"),console.log(s,u)})},i=()=>{if(!e){alert("이메일을 입력해주세요.");return}const A=Vt();uC(A,e).then(()=>{alert("비밀번호 재설정 이메일이 전송되었습니다.")}).catch(o=>{const f=o.code,s=o.message;console.log("비밀번호 재설정 이메일 전송 실패"),console.log(f,s)})};return _.jsxs(_.Fragment,{children:[_.jsx("h2",{children:"Login"}),_.jsxs("form",{onSubmit:n,children:[_.jsxs("label",{children:["이메일:",_.jsx("input",{type:"email",value:e,onChange:A=>r(A.target.value)})]}),_.jsx("br",{}),_.jsxs("label",{children:["비밀번호:",_.jsx("input",{type:"password",value:a,onChange:A=>t(A.target.value)})]}),_.jsx("br",{}),_.jsx("button",{type:"submit",children:"로그인"})]}),_.jsx("p",{children:_.jsx("button",{onClick:i,children:"비밀번호 찾기"})}),_.jsxs("p",{children:["회원이 아니신가요? ",_.jsx(ya,{to:"/SignUp",children:"회원가입"})]})]})},sR=()=>{const[e,r]=V.useState(null),a=Vt();return V.useEffect(()=>{const t=qg(a,n=>{r(n||null)});return()=>t()},[a]),e};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm="firebasestorage.googleapis.com",Dm="storageBucket",uR=2*60*1e3,lR=10*60*1e3,cR=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0 extends he{constructor(r,a,t=0){super(hu(r),`Firebase Storage: ${a} (${hu(r)})`),this.status_=t,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G0.prototype)}get status(){return this.status_}set status(r){this.status_=r}_codeEquals(r){return hu(r)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(r){this.customData.serverResponse=r,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var T0;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(T0||(T0={}));function hu(e){return"storage/"+e}function b4(){const e="An unknown error occurred, please check the error payload for server response.";return new G0(T0.UNKNOWN,e)}function dR(e){return new G0(T0.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function hR(e){return new G0(T0.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function bR(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G0(T0.UNAUTHENTICATED,e)}function gR(){return new G0(T0.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mR(e){return new G0(T0.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Gm(){return new G0(T0.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Xm(){return new G0(T0.CANCELED,"User canceled the upload/download.")}function pR(e){return new G0(T0.INVALID_URL,"Invalid URL '"+e+"'.")}function vR(e){return new G0(T0.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function kR(){return new G0(T0.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Dm+"' property when initializing the app?")}function Mm(){return new G0(T0.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wR(){return new G0(T0.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function yR(){return new G0(T0.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ER(e){return new G0(T0.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function J1(e){return new G0(T0.INVALID_ARGUMENT,e)}function xm(){return new G0(T0.APP_DELETED,"The Firebase app was deleted.")}function IR(e){return new G0(T0.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yi(e,r){return new G0(T0.INVALID_FORMAT,"String does not match format '"+e+"': "+r)}function ki(e){throw new G0(T0.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(r,a){this.bucket=r,this.path_=a}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const r=encodeURIComponent;return"/b/"+r(this.bucket)+"/o/"+r(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(r,a){let t;try{t=$r.makeFromUrl(r,a)}catch{return new $r(r,"")}if(t.path==="")return t;throw vR(r)}static makeFromUrl(r,a){let t=null;const n="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const A="(/(.*))?$",o=new RegExp("^gs://"+n+A,"i"),f={bucket:1,path:3};function s(C){C.path_=decodeURIComponent(C.path)}const u="v[A-Za-z0-9_]+",c=a.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",b=new RegExp(`^https?://${c}/${u}/b/${n}/o${d}`,"i"),w={bucket:1,path:3},y=a===Vm?"(?:storage.googleapis.com|storage.cloud.google.com)":a,B="([^?#]*)",g=new RegExp(`^https?://${y}/${n}/${B}`,"i"),m=[{regex:o,indices:f,postModify:i},{regex:b,indices:w,postModify:s},{regex:g,indices:{bucket:1,path:2},postModify:s}];for(let C=0;C<m.length;C++){const v=m[C],F=v.regex.exec(r);if(F){const S=F[v.indices.bucket];let P=F[v.indices.path];P||(P=""),t=new $r(S,P),v.postModify(t);break}}if(t==null)throw pR(r);return t}}class _R{constructor(r){this.promise_=Promise.reject(r)}getPromise(){return this.promise_}cancel(r=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CR(e,r,a){let t=1,n=null,i=null,A=!1,o=0;function f(){return o===2}let s=!1;function u(...B){s||(s=!0,r.apply(null,B))}function c(B){n=setTimeout(()=>{n=null,e(b,f())},B)}function d(){i&&clearTimeout(i)}function b(B,...g){if(s){d();return}if(B){d(),u.call(null,B,...g);return}if(f()||A){d(),u.call(null,B,...g);return}t<64&&(t*=2);let m;o===1?(o=2,m=0):m=(t+Math.random())*1e3,c(m)}let w=!1;function y(B){w||(w=!0,d(),!s&&(n!==null?(B||(o=2),clearTimeout(n),c(0)):B||(o=1)))}return c(0),i=setTimeout(()=>{A=!0,y(!0)},a),y}function BR(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZR(e){return e!==void 0}function RR(e){return typeof e=="function"}function TR(e){return typeof e=="object"&&!Array.isArray(e)}function us(e){return typeof e=="string"||e instanceof String}function wb(e){return g4()&&e instanceof Blob}function g4(){return typeof Blob<"u"&&!xw()}function yb(e,r,a,t){if(t<r)throw J1(`Invalid value for '${e}'. Expected ${r} or greater.`);if(t>a)throw J1(`Invalid value for '${e}'. Expected ${a} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(e,r,a){let t=r;return a==null&&(t=`https://${r}`),`${a}://${t}/v0${e}`}function Pm(e){const r=encodeURIComponent;let a="?";for(const t in e)if(e.hasOwnProperty(t)){const n=r(t)+"="+r(e[t]);a=a+n+"&"}return a=a.slice(0,-1),a}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Et||(Et={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(e,r){const a=e>=500&&e<600,n=[408,429].indexOf(e)!==-1,i=r.indexOf(e)!==-1;return a||n||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(r,a,t,n,i,A,o,f,s,u,c,d=!0){this.url_=r,this.method_=a,this.headers_=t,this.body_=n,this.successCodes_=i,this.additionalRetryCodes_=A,this.callback_=o,this.errorCallback_=f,this.timeout_=s,this.progressCallback_=u,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,w)=>{this.resolve_=b,this.reject_=w,this.start_()})}start_(){const r=(t,n)=>{if(n){t(!1,new MA(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const A=o=>{const f=o.loaded,s=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,s)};this.progressCallback_!==null&&i.addUploadProgressListener(A),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(A),this.pendingConnection_=null;const o=i.getErrorCode()===Et.NO_ERROR,f=i.getStatus();if(!o||Om(f,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Et.ABORT;t(!1,new MA(!1,null,u));return}const s=this.successCodes_.indexOf(f)!==-1;t(!0,new MA(s,i))})},a=(t,n)=>{const i=this.resolve_,A=this.reject_,o=n.connection;if(n.wasSuccessCode)try{const f=this.callback_(o,o.getResponse());ZR(f)?i(f):i()}catch(f){A(f)}else if(o!==null){const f=b4();f.serverResponse=o.getErrorText(),this.errorCallback_?A(this.errorCallback_(o,f)):A(f)}else if(n.canceled){const f=this.appDelete_?xm():Xm();A(f)}else{const f=Gm();A(f)}};this.canceled_?a(!1,new MA(!1,null,!0)):this.backoffId_=CR(r,a,this.timeout_)}getPromise(){return this.promise_}cancel(r){this.canceled_=!0,this.appDelete_=r||!1,this.backoffId_!==null&&BR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class MA{constructor(r,a,t){this.wasSuccessCode=r,this.connection=a,this.canceled=!!t}}function NR(e,r){r!==null&&r.length>0&&(e.Authorization="Firebase "+r)}function FR(e,r){e["X-Firebase-Storage-Version"]="webjs/"+(r??"AppManager")}function SR(e,r){r&&(e["X-Firebase-GMPID"]=r)}function VR(e,r){r!==null&&(e["X-Firebase-AppCheck"]=r)}function DR(e,r,a,t,n,i,A=!0){const o=Pm(e.urlParams),f=e.url+o,s=Object.assign({},e.headers);return SR(s,r),NR(s,a),FR(s,i),VR(s,t),new WR(f,e.method,s,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n,A)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GR(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XR(...e){const r=GR();if(r!==void 0){const a=new r;for(let t=0;t<e.length;t++)a.append(e[t]);return a.getBlob()}else{if(g4())return new Blob(e);throw new G0(T0.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function MR(e,r,a){return e.webkitSlice?e.webkitSlice(r,a):e.mozSlice?e.mozSlice(r,a):e.slice?e.slice(r,a):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xR(e){if(typeof atob>"u")throw ER("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bu{constructor(r,a){this.data=r,this.contentType=a||null}}function PR(e,r){switch(e){case De.RAW:return new bu(Um(r));case De.BASE64:case De.BASE64URL:return new bu(jm(e,r));case De.DATA_URL:return new bu(UR(r),jR(r))}throw b4()}function Um(e){const r=[];for(let a=0;a<e.length;a++){let t=e.charCodeAt(a);if(t<=127)r.push(t);else if(t<=2047)r.push(192|t>>6,128|t&63);else if((t&64512)===55296)if(!(a<e.length-1&&(e.charCodeAt(a+1)&64512)===56320))r.push(239,191,189);else{const i=t,A=e.charCodeAt(++a);t=65536|(i&1023)<<10|A&1023,r.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|t&63)}else(t&64512)===56320?r.push(239,191,189):r.push(224|t>>12,128|t>>6&63,128|t&63)}return new Uint8Array(r)}function OR(e){let r;try{r=decodeURIComponent(e)}catch{throw Yi(De.DATA_URL,"Malformed data URL.")}return Um(r)}function jm(e,r){switch(e){case De.BASE64:{const n=r.indexOf("-")!==-1,i=r.indexOf("_")!==-1;if(n||i)throw Yi(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case De.BASE64URL:{const n=r.indexOf("+")!==-1,i=r.indexOf("/")!==-1;if(n||i)throw Yi(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");r=r.replace(/-/g,"+").replace(/_/g,"/");break}}let a;try{a=xR(r)}catch(n){throw n.message.includes("polyfill")?n:Yi(e,"Invalid character found")}const t=new Uint8Array(a.length);for(let n=0;n<a.length;n++)t[n]=a.charCodeAt(n);return t}class Lm{constructor(r){this.base64=!1,this.contentType=null;const a=r.match(/^data:([^,]+)?,/);if(a===null)throw Yi(De.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const t=a[1]||null;t!=null&&(this.base64=LR(t,";base64"),this.contentType=this.base64?t.substring(0,t.length-7):t),this.rest=r.substring(r.indexOf(",")+1)}}function UR(e){const r=new Lm(e);return r.base64?jm(De.BASE64,r.rest):OR(r.rest)}function jR(e){return new Lm(e).contentType}function LR(e,r){return e.length>=r.length?e.substring(e.length-r.length)===r:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(r,a){let t=0,n="";wb(r)?(this.data_=r,t=r.size,n=r.type):r instanceof ArrayBuffer?(a?this.data_=new Uint8Array(r):(this.data_=new Uint8Array(r.byteLength),this.data_.set(new Uint8Array(r))),t=this.data_.length):r instanceof Uint8Array&&(a?this.data_=r:(this.data_=new Uint8Array(r.length),this.data_.set(r)),t=r.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(r,a){if(wb(this.data_)){const t=this.data_,n=MR(t,r,a);return n===null?null:new Ra(n)}else{const t=new Uint8Array(this.data_.buffer,r,a-r);return new Ra(t,!0)}}static getBlob(...r){if(g4()){const a=r.map(t=>t instanceof Ra?t.data_:t);return new Ra(XR.apply(null,a))}else{const a=r.map(A=>us(A)?PR(De.RAW,A).data:A.data_);let t=0;a.forEach(A=>{t+=A.byteLength});const n=new Uint8Array(t);let i=0;return a.forEach(A=>{for(let o=0;o<A.length;o++)n[i++]=A[o]}),new Ra(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(e){let r;try{r=JSON.parse(e)}catch{return null}return TR(r)?r:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(e){if(e.length===0)return null;const r=e.lastIndexOf("/");return r===-1?"":e.slice(0,r)}function QR(e,r){const a=r.split("/").filter(t=>t.length>0).join("/");return e.length===0?a:e+"/"+a}function Qm(e){const r=e.lastIndexOf("/",e.length-2);return r===-1?e:e.slice(r+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(e,r){return r}class Wr{constructor(r,a,t,n){this.server=r,this.local=a||r,this.writable=!!t,this.xform=n||HR}}let xA=null;function zR(e){return!us(e)||e.length<2?e:Qm(e)}function Hm(){if(xA)return xA;const e=[];e.push(new Wr("bucket")),e.push(new Wr("generation")),e.push(new Wr("metageneration")),e.push(new Wr("name","fullPath",!0));function r(i,A){return zR(A)}const a=new Wr("name");a.xform=r,e.push(a);function t(i,A){return A!==void 0?Number(A):A}const n=new Wr("size");return n.xform=t,e.push(n),e.push(new Wr("timeCreated")),e.push(new Wr("updated")),e.push(new Wr("md5Hash",null,!0)),e.push(new Wr("cacheControl",null,!0)),e.push(new Wr("contentDisposition",null,!0)),e.push(new Wr("contentEncoding",null,!0)),e.push(new Wr("contentLanguage",null,!0)),e.push(new Wr("contentType",null,!0)),e.push(new Wr("metadata","customMetadata",!0)),xA=e,xA}function JR(e,r){function a(){const t=e.bucket,n=e.fullPath,i=new $r(t,n);return r._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:a})}function $R(e,r,a){const t={};t.type="file";const n=a.length;for(let i=0;i<n;i++){const A=a[i];t[A.local]=A.xform(t,r[A.server])}return JR(t,e),t}function zm(e,r,a){const t=Ym(r);return t===null?null:$R(e,t,a)}function KR(e,r,a,t){const n=Ym(r);if(n===null||!us(n.downloadTokens))return null;const i=n.downloadTokens;if(i.length===0)return null;const A=encodeURIComponent;return i.split(",").map(s=>{const u=e.bucket,c=e.fullPath,d="/b/"+A(u)+"/o/"+A(c),b=iA(d,a,t),w=Pm({alt:"media",token:s});return b+w})[0]}function Jm(e,r){const a={},t=r.length;for(let n=0;n<t;n++){const i=r[n];i.writable&&(a[i.server]=e[i.local])}return JSON.stringify(a)}class ii{constructor(r,a,t,n){this.url=r,this.method=a,this.handler=t,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){if(!e)throw b4()}function m4(e,r){function a(t,n){const i=zm(e,n,r);return aa(i!==null),i}return a}function qR(e,r){function a(t,n){const i=zm(e,n,r);return aa(i!==null),KR(i,n,e.host,e._protocol)}return a}function AA(e){function r(a,t){let n;return a.getStatus()===401?a.getErrorText().includes("Firebase App Check token is invalid")?n=gR():n=bR():a.getStatus()===402?n=hR(e.bucket):a.getStatus()===403?n=mR(e.path):n=t,n.status=a.getStatus(),n.serverResponse=t.serverResponse,n}return r}function $m(e){const r=AA(e);function a(t,n){let i=r(t,n);return t.getStatus()===404&&(i=dR(e.path)),i.serverResponse=n.serverResponse,i}return a}function rT(e,r,a){const t=r.fullServerUrl(),n=iA(t,e.host,e._protocol),i="GET",A=e.maxOperationRetryTime,o=new ii(n,i,m4(e,a),A);return o.errorHandler=$m(r),o}function eT(e,r,a){const t=r.fullServerUrl(),n=iA(t,e.host,e._protocol),i="GET",A=e.maxOperationRetryTime,o=new ii(n,i,qR(e,a),A);return o.errorHandler=$m(r),o}function aT(e,r){return e&&e.contentType||r&&r.type()||"application/octet-stream"}function Km(e,r,a){const t=Object.assign({},a);return t.fullPath=e.path,t.size=r.size(),t.contentType||(t.contentType=aT(null,r)),t}function tT(e,r,a,t,n){const i=r.bucketOnlyServerUrl(),A={"X-Goog-Upload-Protocol":"multipart"};function o(){let m="";for(let C=0;C<2;C++)m=m+Math.random().toString().slice(2);return m}const f=o();A["Content-Type"]="multipart/related; boundary="+f;const s=Km(r,t,n),u=Jm(s,a),c="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+f+`\r
Content-Type: `+s.contentType+`\r
\r
`,d=`\r
--`+f+"--",b=Ra.getBlob(c,t,d);if(b===null)throw Mm();const w={name:s.fullPath},y=iA(i,e.host,e._protocol),B="POST",g=e.maxUploadRetryTime,h=new ii(y,B,m4(e,a),g);return h.urlParams=w,h.headers=A,h.body=b.uploadData(),h.errorHandler=AA(r),h}class nf{constructor(r,a,t,n){this.current=r,this.total=a,this.finalized=!!t,this.metadata=n||null}}function p4(e,r){let a=null;try{a=e.getResponseHeader("X-Goog-Upload-Status")}catch{aa(!1)}return aa(!!a&&(r||["active"]).indexOf(a)!==-1),a}function nT(e,r,a,t,n){const i=r.bucketOnlyServerUrl(),A=Km(r,t,n),o={name:A.fullPath},f=iA(i,e.host,e._protocol),s="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${t.size()}`,"X-Goog-Upload-Header-Content-Type":A.contentType,"Content-Type":"application/json; charset=utf-8"},c=Jm(A,a),d=e.maxUploadRetryTime;function b(y){p4(y);let B;try{B=y.getResponseHeader("X-Goog-Upload-URL")}catch{aa(!1)}return aa(us(B)),B}const w=new ii(f,s,b,d);return w.urlParams=o,w.headers=u,w.body=c,w.errorHandler=AA(r),w}function iT(e,r,a,t){const n={"X-Goog-Upload-Command":"query"};function i(s){const u=p4(s,["active","final"]);let c=null;try{c=s.getResponseHeader("X-Goog-Upload-Size-Received")}catch{aa(!1)}c||aa(!1);const d=Number(c);return aa(!isNaN(d)),new nf(d,t.size(),u==="final")}const A="POST",o=e.maxUploadRetryTime,f=new ii(a,A,i,o);return f.headers=n,f.errorHandler=AA(r),f}const Eb=256*1024;function AT(e,r,a,t,n,i,A,o){const f=new nf(0,0);if(A?(f.current=A.current,f.total=A.total):(f.current=0,f.total=t.size()),t.size()!==f.total)throw wR();const s=f.total-f.current;let u=s;n>0&&(u=Math.min(u,n));const c=f.current,d=c+u;let b="";u===0?b="finalize":s===u?b="upload, finalize":b="upload";const w={"X-Goog-Upload-Command":b,"X-Goog-Upload-Offset":`${f.current}`},y=t.slice(c,d);if(y===null)throw Mm();function B(C,v){const F=p4(C,["active","final"]),S=f.current+u,P=t.size();let s0;return F==="final"?s0=m4(r,i)(C,v):s0=null,new nf(S,P,F==="final",s0)}const g="POST",h=r.maxUploadRetryTime,m=new ii(a,g,B,h);return m.headers=w,m.body=y.uploadData(),m.progressCallback=o||null,m.errorHandler=AA(e),m}const Xr={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function gu(e){switch(e){case"running":case"pausing":case"canceling":return Xr.RUNNING;case"paused":return Xr.PAUSED;case"success":return Xr.SUCCESS;case"canceled":return Xr.CANCELED;case"error":return Xr.ERROR;default:return Xr.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(r,a,t){if(RR(r)||a!=null||t!=null)this.next=r,this.error=a??void 0,this.complete=t??void 0;else{const i=r;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(e){return(...r)=>{Promise.resolve().then(()=>e(...r))}}class fT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Et.NO_ERROR,this.sendPromise_=new Promise(r=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Et.ABORT,r()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Et.NETWORK_ERROR,r()}),this.xhr_.addEventListener("load",()=>{r()})})}send(r,a,t,n){if(this.sent_)throw ki("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(a,r,!0),n!==void 0)for(const i in n)n.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,n[i].toString());return t!==void 0?this.xhr_.send(t):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ki("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ki("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ki("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ki("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(r){return this.xhr_.getResponseHeader(r)}addUploadProgressListener(r){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",r)}removeUploadProgressListener(r){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",r)}}class sT extends fT{initXhr(){this.xhr_.responseType="text"}}function an(){return new sT}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(r,a,t=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=r,this._blob=a,this._metadata=t,this._mappings=Hm(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=n=>{if(this._request=void 0,this._chunkMultiplier=1,n._codeEquals(T0.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Om(n.status,[]))if(i)n=Gm();else{this.sleepTime=Math.max(this.sleepTime*2,cR),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=n,this._transition("error")}},this._metadataErrorHandler=n=>{this._request=void 0,n._codeEquals(T0.CANCELED)?this.completeTransitions_():(this._error=n,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((n,i)=>{this._resolve=n,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const r=this._transferred;return a=>this._updateProgress(r+a)}_shouldDoResumable(r){return r.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(r){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([a,t])=>{switch(this._state){case"running":r(a,t);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((r,a)=>{const t=nT(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(t,an,r,a);this._request=n,n.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const r=this._uploadUrl;this._resolveToken((a,t)=>{const n=iT(this._ref.storage,this._ref._location,r,this._blob),i=this._ref.storage._makeRequest(n,an,a,t);this._request=i,i.getPromise().then(A=>{A=A,this._request=void 0,this._updateProgress(A.current),this._needToFetchStatus=!1,A.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const r=Eb*this._chunkMultiplier,a=new nf(this._transferred,this._blob.size()),t=this._uploadUrl;this._resolveToken((n,i)=>{let A;try{A=AT(this._ref._location,this._ref.storage,t,this._blob,r,this._mappings,a,this._makeProgressCallback())}catch(f){this._error=f,this._transition("error");return}const o=this._ref.storage._makeRequest(A,an,n,i,!1);this._request=o,o.getPromise().then(f=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(f.current),f.finalized?(this._metadata=f.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Eb*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((r,a)=>{const t=rT(this._ref.storage,this._ref._location,this._mappings),n=this._ref.storage._makeRequest(t,an,r,a);this._request=n,n.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((r,a)=>{const t=tT(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),n=this._ref.storage._makeRequest(t,an,r,a);this._request=n,n.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(r){const a=this._transferred;this._transferred=r,this._transferred!==a&&this._notifyObservers()}_transition(r){if(this._state!==r)switch(r){case"canceling":case"pausing":this._state=r,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const a=this._state==="paused";this._state=r,a&&(this._notifyObservers(),this._start());break;case"paused":this._state=r,this._notifyObservers();break;case"canceled":this._error=Xm(),this._state=r,this._notifyObservers();break;case"error":this._state=r,this._notifyObservers();break;case"success":this._state=r,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const r=gu(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:r,metadata:this._metadata,task:this,ref:this._ref}}on(r,a,t,n){const i=new oT(a||void 0,t||void 0,n||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(r,a){return this._promise.then(r,a)}catch(r){return this.then(null,r)}_addObserver(r){this._observers.push(r),this._notifyObserver(r)}_removeObserver(r){const a=this._observers.indexOf(r);a!==-1&&this._observers.splice(a,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(a=>{this._notifyObserver(a)})}_finishPromise(){if(this._resolve!==void 0){let r=!0;switch(gu(this._state)){case Xr.SUCCESS:qt(this._resolve.bind(null,this.snapshot))();break;case Xr.CANCELED:case Xr.ERROR:const a=this._reject;qt(a.bind(null,this._error))();break;default:r=!1;break}r&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(r){switch(gu(this._state)){case Xr.RUNNING:case Xr.PAUSED:r.next&&qt(r.next.bind(r,this.snapshot))();break;case Xr.SUCCESS:r.complete&&qt(r.complete.bind(r))();break;case Xr.CANCELED:case Xr.ERROR:r.error&&qt(r.error.bind(r,this._error))();break;default:r.error&&qt(r.error.bind(r,this._error))()}}resume(){const r=this._state==="paused"||this._state==="pausing";return r&&this._transition("running"),r}pause(){const r=this._state==="running";return r&&this._transition("pausing"),r}cancel(){const r=this._state==="running"||this._state==="pausing";return r&&this._transition("canceling"),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(r,a){this._service=r,a instanceof $r?this._location=a:this._location=$r.makeFromUrl(a,r.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(r,a){return new Xt(r,a)}get root(){const r=new $r(this._location.bucket,"");return this._newRef(this._service,r)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qm(this._location.path)}get storage(){return this._service}get parent(){const r=YR(this._location.path);if(r===null)return null;const a=new $r(this._location.bucket,r);return new Xt(this._service,a)}_throwIfRoot(r){if(this._location.path==="")throw IR(r)}}function lT(e,r,a){return e._throwIfRoot("uploadBytesResumable"),new uT(e,new Ra(r),a)}function cT(e){e._throwIfRoot("getDownloadURL");const r=eT(e.storage,e._location,Hm());return e.storage.makeRequestWithTokens(r,an).then(a=>{if(a===null)throw yR();return a})}function dT(e,r){const a=QR(e._location.path,r),t=new $r(e._location.bucket,a);return new Xt(e.storage,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(e){return/^[A-Za-z]+:\/\//.test(e)}function bT(e,r){return new Xt(e,r)}function qm(e,r){if(e instanceof v4){const a=e;if(a._bucket==null)throw kR();const t=new Xt(a,a._bucket);return r!=null?qm(t,r):t}else return r!==void 0?dT(e,r):e}function gT(e,r){if(r&&hT(r)){if(e instanceof v4)return bT(e,r);throw J1("To use ref(service, url), the first argument must be a Storage instance.")}else return qm(e,r)}function Ib(e,r){const a=r==null?void 0:r[Dm];return a==null?null:$r.makeFromBucketSpec(a,e)}function mT(e,r,a,t={}){e.host=`${r}:${a}`,e._protocol="http";const{mockUserToken:n}=t;n&&(e._overrideAuthToken=typeof n=="string"?n:A8(n,e.app.options.projectId))}class v4{constructor(r,a,t,n,i){this.app=r,this._authProvider=a,this._appCheckProvider=t,this._url=n,this._firebaseVersion=i,this._bucket=null,this._host=Vm,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uR,this._maxUploadRetryTime=lR,this._requests=new Set,n!=null?this._bucket=$r.makeFromBucketSpec(n,this._host):this._bucket=Ib(this._host,this.app.options)}get host(){return this._host}set host(r){this._host=r,this._url!=null?this._bucket=$r.makeFromBucketSpec(this._url,r):this._bucket=Ib(r,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(r){yb("time",0,Number.POSITIVE_INFINITY,r),this._maxUploadRetryTime=r}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(r){yb("time",0,Number.POSITIVE_INFINITY,r),this._maxOperationRetryTime=r}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const r=this._authProvider.getImmediate({optional:!0});if(r){const a=await r.getToken();if(a!==null)return a.accessToken}return null}async _getAppCheckToken(){const r=this._appCheckProvider.getImmediate({optional:!0});return r?(await r.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(r=>r.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(r){return new Xt(this,r)}_makeRequest(r,a,t,n,i=!0){if(this._deleted)return new _R(xm());{const A=DR(r,this._appId,t,n,a,this._firebaseVersion,i);return this._requests.add(A),A.getPromise().then(()=>this._requests.delete(A),()=>this._requests.delete(A)),A}}async makeRequestWithTokens(r,a){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(r,a,t,n).getPromise()}}const _b="@firebase/storage",Cb="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="storage";function pT(e,r,a){return e=x0(e),lT(e,r,a)}function vT(e){return e=x0(e),cT(e)}function kT(e,r){return e=x0(e),gT(e,r)}function wT(e=Cf(),r){e=x0(e);const t=at(e,rp).getImmediate({identifier:r}),n=t8("storage");return n&&yT(t,...n),t}function yT(e,r,a,t={}){mT(e,r,a,t)}function ET(e,{instanceIdentifier:r}){const a=e.getProvider("app").getImmediate(),t=e.getProvider("auth-internal"),n=e.getProvider("app-check-internal");return new v4(a,t,n,r,Ut)}function IT(){Ie(new de(rp,ET,"PUBLIC").setMultipleInstances(!0)),jr(_b,Cb,""),jr(_b,Cb,"esm2017")}IT();var ep={exports:{}};(function(e,r){(function(a,t,n,i){function A(){return S.isValid()}function o(){return S.isValid()}function f(){var l={getUserMedia:!0};return S.isValid(l)}function s(l){var p=!1;if(v.isArray(l)&&l.length){if(v.each(l,function(k,E){v.isSupported.videoCodecs[E]&&(p=!0)}),!p)return!1}else if(v.isString(l)&&l.length&&!v.isSupported.videoCodecs[l])return!1;return S.isValid({getUserMedia:!0})}function u(){function l($,J,p0){var Q,r0;for(g0=$,e0=J,H=p0,q=new Array(z),Q=0;z>Q;Q++)q[Q]=new Array(4),r0=q[Q],r0[0]=r0[1]=r0[2]=(Q<<U0+8)/z|0,ma[Q]=Y0/z|0,ga[Q]=0}function p(){for(var $=[],J=new Array(z),p0=0;z>p0;p0++)J[q[p0][3]]=p0;for(var Q=0,r0=0;z>r0;r0++){var M=J[r0];$[Q++]=q[M][0],$[Q++]=q[M][1],$[Q++]=q[M][2]}return $}function k(){var $,J,p0,Q,r0,M,U,h0;for(U=0,h0=0,$=0;z>$;$++){for(r0=q[$],p0=$,Q=r0[1],J=$+1;z>J;J++)M=q[J],M[1]<Q&&(p0=J,Q=M[1]);if(M=q[p0],$!=p0&&(J=M[0],M[0]=r0[0],r0[0]=J,J=M[1],M[1]=r0[1],r0[1]=J,J=M[2],M[2]=r0[2],r0[2]=J,J=M[3],M[3]=r0[3],r0[3]=J),Q!=U){for(Ye[U]=h0+$>>1,J=U+1;Q>J;J++)Ye[J]=$;U=Q,h0=$}}for(Ye[U]=h0+ar>>1,J=U+1;256>J;J++)Ye[J]=ar}function E(){var $,J,p0,Q,r0,M,U,h0,_0,j0,be,N0,Gr,k4;for(Tr>e0&&(H=1),l0=30+(H-1)/3,N0=g0,Gr=0,k4=e0,be=e0/(3*H),j0=be/fr|0,h0=fA,M=Hr,U=M>>ba,1>=U&&(U=0),$=0;U>$;$++)si[$]=h0*((U*U-$*$)*uA/(U*U));for(_0=Tr>e0?3:e0%X0!==0?3*X0:e0%m0!==0?3*m0:e0%E0!==0?3*E0:3*I0,$=0;be>$;)if(p0=(255&N0[Gr+0])<<U0,Q=(255&N0[Gr+1])<<U0,r0=(255&N0[Gr+2])<<U0,J=O(p0,Q,r0),L(h0,J,p0,Q,r0),U!==0&&X(U,J,p0,Q,r0),Gr+=_0,Gr>=k4&&(Gr-=e0),$++,j0===0&&(j0=1),$%j0===0)for(h0-=h0/l0,M-=M/At,U=M>>ba,1>=U&&(U=0),J=0;U>J;J++)si[J]=h0*((U*U-J*J)*uA/(U*U))}function Z($,J,p0){var Q,r0,M,U,h0,_0,j0;for(h0=1e3,j0=-1,Q=Ye[J],r0=Q-1;z>Q||r0>=0;)z>Q&&(_0=q[Q],M=_0[1]-J,M>=h0?Q=z:(Q++,0>M&&(M=-M),U=_0[0]-$,0>U&&(U=-U),M+=U,h0>M&&(U=_0[2]-p0,0>U&&(U=-U),M+=U,h0>M&&(h0=M,j0=_0[3])))),r0>=0&&(_0=q[r0],M=J-_0[1],M>=h0?r0=-1:(r0--,0>M&&(M=-M),U=_0[0]-$,0>U&&(U=-U),M+=U,h0>M&&(U=_0[2]-p0,0>U&&(U=-U),M+=U,h0>M&&(h0=M,j0=_0[3]))));return j0}function W(){return E(),I(),k(),p()}function I(){var $;for($=0;z>$;$++)q[$][0]>>=U0,q[$][1]>>=U0,q[$][2]>>=U0,q[$][3]=$}function X($,J,p0,Q,r0){var M,U,h0,_0,j0,be,N0;for(h0=J-$,-1>h0&&(h0=-1),_0=J+$,_0>z&&(_0=z),M=J+1,U=J-1,be=1;_0>M||U>h0;){if(j0=si[be++],_0>M){N0=q[M++];try{N0[0]-=j0*(N0[0]-p0)/Re|0,N0[1]-=j0*(N0[1]-Q)/Re|0,N0[2]-=j0*(N0[2]-r0)/Re|0}catch{}}if(U>h0){N0=q[U--];try{N0[0]-=j0*(N0[0]-p0)/Re|0,N0[1]-=j0*(N0[1]-Q)/Re|0,N0[2]-=j0*(N0[2]-r0)/Re|0}catch{}}}}function L($,J,p0,Q,r0){var M=q[J],U=$/fA;M[0]-=U*(M[0]-p0)|0,M[1]-=U*(M[1]-Q)|0,M[2]-=U*(M[2]-r0)|0}function O($,J,p0){var Q,r0,M,U,h0,_0,j0,be,N0,Gr;for(be=~(1<<31),N0=be,_0=-1,j0=_0,Q=0;z>Q;Q++)Gr=q[Q],r0=Gr[0]-$,0>r0&&(r0=-r0),M=Gr[1]-J,0>M&&(M=-M),r0+=M,M=Gr[2]-p0,0>M&&(M=-M),r0+=M,be>r0&&(be=r0,_0=Q),U=r0-(ga[Q]>>K0-U0),N0>U&&(N0=U,j0=Q),h0=ma[Q]>>Qr,ma[Q]-=h0,ga[Q]+=h0<<sr;return ma[_0]+=gr,ga[_0]-=Ze,j0}var l0,g0,e0,H,q,z=256,X0=499,m0=491,E0=487,I0=503,Tr=3*I0,ar=z-1,U0=4,fr=100,K0=16,Y0=1<<K0,sr=10,Qr=10,gr=Y0>>Qr,Ze=Y0<<sr-Qr,Le=z>>3,ba=6,it=1<<ba,Hr=Le*it,At=30,fi=10,fA=1<<fi,sA=8,uA=1<<sA,ls=fi+sA,Re=1<<ls,Ye=[],ga=[],ma=[],si=[];l.apply(this,arguments);var ot={};return ot.map=Z,ot.process=W,ot}function c(){var l=this;try{l.onmessage=function(k){var E,Z=k.data||{};Z.gifshot&&(E=p.run(Z),postMessage(E))}}catch{}var p={dataToRGB:function(k,E,Z){for(var W=E*Z*4,I=0,X=[];W>I;)X.push(k[I++]),X.push(k[I++]),X.push(k[I++]),I++;return X},componentizedPaletteToArray:function(k){k=k||[];for(var E=[],Z=0;Z<k.length;Z+=3){var W=k[Z],I=k[Z+1],X=k[Z+2];E.push(W<<16|I<<8|X)}return E},processFrameWithQuantizer:function(k,E,Z,W){for(var I=this.dataToRGB(k,E,Z),X=new u(I,I.length,W),L=X.process(),O=new Uint32Array(this.componentizedPaletteToArray(L)),l0=E*Z,g0=new Uint8Array(l0),e0=0,H=0;l0>H;H++){var q=I[e0++],z=I[e0++],X0=I[e0++];g0[H]=X.map(q,z,X0)}return{pixels:g0,palette:O}},run:function(k){k=k||{};var E=k,Z=E.height,W=(E.palette,E.sampleInterval),I=E.width,X=k.data;return this.processFrameWithQuantizer(X,I,Z,W)}};return p}function d(l,p,k,E){function Z(e0){var H=e0.length;if(2>H||H>256||H&H-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return H}function W(e0,H,q,z){function X0(Hr){for(;K0>=Hr;)e0[H++]=255&Y0,Y0>>=8,K0-=8,H===E0+256&&(e0[E0]=255,E0=H++)}function m0(Hr){Y0|=Hr<<K0,K0+=fr,X0(8)}e0[H++]=q;var E0=H++,I0=1<<q,Tr=I0-1,ar=I0+1,U0=ar+1,fr=q+1,K0=0,Y0=0,sr=z[0]&Tr,Qr={};m0(I0);for(var gr=1,Ze=z.length;Ze>gr;++gr){var Le=z[gr]&Tr,ba=sr<<8|Le,it=Qr[ba];if(it===i){for(Y0|=sr<<K0,K0+=fr;K0>=8;)e0[H++]=255&Y0,Y0>>=8,K0-=8,H===E0+256&&(e0[E0]=255,E0=H++);U0===4096?(m0(I0),U0=ar+1,fr=q+1,Qr={}):(U0>=1<<fr&&++fr,Qr[ba]=U0++),sr=Le}else sr=it}return m0(sr),m0(ar),X0(1),E0+1===H?e0[E0]=0:(e0[E0]=H-E0-1,e0[H++]=0),H}var I=0;E=E===i?{}:E;var X=E.loop===i?null:E.loop,L=E.palette===i?null:E.palette;if(0>=p||0>=k||p>65535||k>65535)throw"Width/Height invalid.";l[I++]=71,l[I++]=73,l[I++]=70,l[I++]=56,l[I++]=57,l[I++]=97;var O=0,l0=0;if(l[I++]=255&p,l[I++]=p>>8&255,l[I++]=255&k,l[I++]=k>>8&255,l[I++]=(L!==null?128:0)|O,l[I++]=l0,l[I++]=0,X!==null){if(0>X||X>65535)throw"Loop count invalid.";l[I++]=33,l[I++]=255,l[I++]=11,l[I++]=78,l[I++]=69,l[I++]=84,l[I++]=83,l[I++]=67,l[I++]=65,l[I++]=80,l[I++]=69,l[I++]=50,l[I++]=46,l[I++]=48,l[I++]=3,l[I++]=1,l[I++]=255&X,l[I++]=X>>8&255,l[I++]=0}var g0=!1;this.addFrame=function(e0,H,q,z,X0,m0){if(g0===!0&&(--I,g0=!1),m0=m0===i?{}:m0,0>e0||0>H||e0>65535||H>65535)throw"x/y invalid.";if(0>=q||0>=z||q>65535||z>65535)throw"Width/Height invalid.";if(X0.length<q*z)throw"Not enough pixels for the frame size.";var E0=!0,I0=m0.palette;if((I0===i||I0===null)&&(E0=!1,I0=L),I0===i||I0===null)throw"Must supply either a local or global palette.";for(var Tr=Z(I0),ar=0;Tr>>=1;)++ar;Tr=1<<ar;var U0=m0.delay===i?0:m0.delay,fr=m0.disposal===i?0:m0.disposal;if(0>fr||fr>3)throw"Disposal out of range.";var K0=!1,Y0=0;if(m0.transparent!==i&&m0.transparent!==null&&(K0=!0,Y0=m0.transparent,0>Y0||Y0>=Tr))throw"Transparent color index.";if((fr!==0||K0||U0!==0)&&(l[I++]=33,l[I++]=249,l[I++]=4,l[I++]=fr<<2|(K0===!0?1:0),l[I++]=255&U0,l[I++]=U0>>8&255,l[I++]=Y0,l[I++]=0),l[I++]=44,l[I++]=255&e0,l[I++]=e0>>8&255,l[I++]=255&H,l[I++]=H>>8&255,l[I++]=255&q,l[I++]=q>>8&255,l[I++]=255&z,l[I++]=z>>8&255,l[I++]=E0===!0?128|ar-1:0,E0===!0)for(var sr=0,Qr=I0.length;Qr>sr;++sr){var gr=I0[sr];l[I++]=gr>>16&255,l[I++]=gr>>8&255,l[I++]=255&gr}I=W(l,I,2>ar?2:ar,X0)},this.end=function(){return g0===!1&&(l[I++]=59,g0=!0),I}}function b(l,p){l.getBase64GIF(function(k){p({error:!1,errorCode:"",errorMsg:"",image:k})})}function w(){function l(){v.each(L,function(e0,H){H&&(H.text?g0.addFrame(H.img,Z,H.text):g0.addFrame(H,Z))}),b(g0,k)}var p=arguments.length>0&&arguments[0]!==i?arguments[0]:{},k=p.callback,E=p.images,Z=p.options,W=p.imagesLength,I={getUserMedia:!0,"window.URL":!0},X=S.validate(I),L=[],O=0,l0=void 0,g0=void 0;return X.error?k(X):(g0=new je(Z),v.each(E,function(e0,H){var q=H;H.src&&(q=q.src),v.isElement(q)?(Z.crossOrigin&&(q.crossOrigin=Z.crossOrigin),L[e0]=q,O+=1,O===W&&l()):v.isString(q)&&(l0=new Image,Z.crossOrigin&&(l0.crossOrigin=Z.crossOrigin),function(z){H.text&&(z.text=H.text),z.onerror=function(){var X0=void 0;return--W,W===0?(X0={},X0.error="None of the requested images was capable of being retrieved",k(X0)):void 0},z.onload=function(){L[e0]=H.text?{img:z,text:z.text}:z,O+=1,O===W&&l(),v.removeElement(z)},z.src=q}(l0),v.setCSSAttr(l0,{position:"fixed",opacity:"0"}),t.body.appendChild(l0))}),void 0)}function y(l){l=v.isObject(l)?l:{},O0.stopVideoStreaming(l)}function B(l,p){var k=l.options||{},E=k.images,Z=k.video,W=Number(k.gifWidth),I=Number(k.gifHeight),X=(Number(k.numFrames),l.cameraStream),L=l.videoElement,O=l.videoWidth,l0=l.videoHeight,g0=Ai.getCropDimensions({videoWidth:O,videoHeight:l0,gifHeight:I,gifWidth:W}),e0=p;k.crop=g0,k.videoElement=L,k.videoWidth=O,k.videoHeight=l0,k.cameraStream=X,v.isElement(L)&&(L.width=W+g0.width,L.height=I+g0.height,k.webcamVideoElement||(v.setCSSAttr(L,{position:"fixed",opacity:"0"}),t.body.appendChild(L)),L.play(),Ai.getGIF(k,function(H){E&&E.length||Z&&Z.length||y(H),e0(H)}))}function g(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{},p=l.callback,k=l.existingVideo,E=l.options,Z={getUserMedia:!0,"window.URL":!0},W=S.validate(Z),I=void 0,X=void 0;if(W.error)return p(W);if(v.isElement(k)&&k.src){if(X=k.src,I=v.getExtension(X),!v.isSupported.videoCodecs[I])return p(S.messages.videoCodecs)}else v.isArray(k)&&v.each(k,function(L,O){return I=O instanceof Blob?O.type.substr(O.type.lastIndexOf("/")+1,O.length):O.substr(O.lastIndexOf(".")+1,O.length),v.isSupported.videoCodecs[I]?(k=O,!1):void 0});O0.startStreaming({completed:function(L){L.options=E||{},B(L,p)},existingVideo:k,crossOrigin:E.crossOrigin,options:E})}function h(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{},p=l.callback,k=l.lastCameraStream,E=l.options,Z=l.webcamVideoElement;return o()?E.savedRenderingContexts.length?(Ai.getGIF(E,function(W){p(W)}),void 0):(O0.startVideoStreaming(function(){var W=arguments.length>0&&arguments[0]!==i?arguments[0]:{};W.options=E||{},B(W,p)},{lastCameraStream:k,callback:p,webcamVideoElement:Z,crossOrigin:E.crossOrigin}),void 0):p(S.validate())}function m(l,p){if(p=v.isFunction(l)?l:p,l=v.isObject(l)?l:{},v.isFunction(p)){var k=v.mergeOptions(A0,l)||{},E=l.cameraStream,Z=k.images,W=Z?Z.length:0,I=k.video,X=k.webcamVideoElement;k=v.mergeOptions(k,{gifWidth:Math.floor(k.gifWidth),gifHeight:Math.floor(k.gifHeight)}),W?w({images:Z,imagesLength:W,callback:p,options:k}):I?g({existingVideo:I,callback:p,options:k}):h({lastCameraStream:E,callback:p,webcamVideoElement:X,options:k})}}function C(l,p){if(p=v.isFunction(l)?l:p,l=v.isObject(l)?l:{},v.isFunction(p)){var k=v.mergeOptions(A0,l),E=v.mergeOptions(k,{interval:.1,numFrames:1,gifWidth:Math.floor(k.gifWidth),gifHeight:Math.floor(k.gifHeight)});m(E,p)}}var v={URL:a.URL||a.webkitURL||a.mozURL||a.msURL,getUserMedia:function(){var l=n.getUserMedia||n.webkitGetUserMedia||n.mozGetUserMedia||n.msGetUserMedia;return l&&l.bind(n)}(),requestAnimFrame:a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame,requestTimeout:function(l,p){if(l=l||v.noop,p=p||0,!v.requestAnimFrame)return setTimeout(l,p);var k=new Date().getTime(),E=new Object,Z=v.requestAnimFrame,W=function I(){var X=new Date().getTime(),L=X-k;L>=p?l.call():E.value=Z(I)};return E.value=Z(W),E},Blob:a.Blob||a.BlobBuilder||a.WebKitBlobBuilder||a.MozBlobBuilder||a.MSBlobBuilder,btoa:function(){var l=a.btoa||function(p){for(var k="",E=0,Z=p.length,W="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",I=void 0,X=void 0,L=void 0,O=void 0,l0=void 0,g0=void 0,e0=void 0;Z>E;)I=p.charCodeAt(E++),X=p.charCodeAt(E++),L=p.charCodeAt(E++),O=I>>2,l0=(3&I)<<4|X>>4,g0=(15&X)<<2|L>>6,e0=63&L,isNaN(X)?g0=e0=64:isNaN(L)&&(e0=64),k=k+W.charAt(O)+W.charAt(l0)+W.charAt(g0)+W.charAt(e0);return k};return l?l.bind(a):v.noop}(),isObject:function(l){return l&&Object.prototype.toString.call(l)==="[object Object]"},isEmptyObject:function(l){return v.isObject(l)&&!Object.keys(l).length},isArray:function(l){return l&&Array.isArray(l)},isFunction:function(l){return l&&typeof l=="function"},isElement:function(l){return l&&l.nodeType===1},isString:function(l){return typeof l=="string"||Object.prototype.toString.call(l)==="[object String]"},isSupported:{canvas:function(){var l=t.createElement("canvas");return l&&l.getContext&&l.getContext("2d")},webworkers:function(){return a.Worker},blob:function(){return v.Blob},Uint8Array:function(){return a.Uint8Array},Uint32Array:function(){return a.Uint32Array},videoCodecs:function(){var l=t.createElement("video"),p={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{l&&l.canPlayType&&(p.mp4=l.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",p.h264=(l.canPlayType('video/mp4; codecs="avc1.42E01E"')||l.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",p.ogv=l.canPlayType('video/ogg; codecs="theora"')!=="",p.ogg=l.canPlayType('video/ogg; codecs="theora"')!=="",p.webm=l.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return p}()},noop:function(){},each:function(l,p){var k=void 0,E=void 0;if(v.isArray(l))for(k=-1,E=l.length;++k<E&&p(k,l[k])!==!1;);else if(v.isObject(l)){for(k in l)if(l.hasOwnProperty(k)&&p(k,l[k])===!1)break}},mergeOptions:function(l,p){if(v.isObject(l)&&v.isObject(p)&&Object.keys){var k={};return v.each(l,function(E){k[E]=l[E]}),v.each(p,function(E){var Z=p[E];k[E]=v.isObject(Z)&&l[E]?v.mergeOptions(l[E],Z):Z}),k}},setCSSAttr:function(l,p,k){v.isElement(l)&&(v.isString(p)&&v.isString(k)?l.style[p]=k:v.isObject(p)&&v.each(p,function(E,Z){l.style[E]=Z}))},removeElement:function(l){v.isElement(l)&&l.parentNode&&l.parentNode.removeChild(l)},createWebWorker:function(l){if(!v.isString(l))return{};try{var p=new v.Blob([l],{type:"text/javascript"}),k=v.URL.createObjectURL(p),E=new Worker(k);return{objectUrl:k,worker:E}}catch(Z){return""+Z}},getExtension:function(l){return l.substr(l.lastIndexOf(".")+1,l.length)},getFontSize:function(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{};if(!t.body||l.resizeFont===!1)return l.fontSize;var p=l.text,k=l.gifWidth,E=parseInt(l.fontSize,10),Z=parseInt(l.minFontSize,10),W=t.createElement("div"),I=t.createElement("span");for(W.setAttribute("width",k),W.appendChild(I),I.innerHTML=p,I.style.fontSize=E+"px",I.style.textIndent="-9999px",I.style.visibility="hidden",t.body.appendChild(I);I.offsetWidth>k&&E>=Z;)I.style.fontSize=--E+"px";return t.body.removeChild(I),E+"px"},webWorkerError:!1},F=Object.freeze({default:v}),S={validate:function(l){l=v.isObject(l)?l:{};var p={};return v.each(S.validators,function(k,E){var Z=E.errorCode;return l[Z]||E.condition?void 0:(p=E,p.error=!0,!1)}),delete p.condition,p},isValid:function(p){var k=S.validate(p),E=k.error!==!0;return E},validators:[{condition:v.isFunction(v.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:v.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:v.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:v.isFunction(v.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:v.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:v.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:v.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},P=Object.freeze({default:S}),s0=function(){},A0={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:s0,completeCallback:s0,saveRenderingContexts:!1,savedRenderingContexts:[],showFrameText:!0,crossOrigin:"Anonymous",waterMark:null,waterMarkHeight:null,waterMarkWidth:null,waterMarkXCoordinate:1,waterMarkYCoordinate:1},Yr=Object.freeze({default:A0}),ha=function(){},je=function(l){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=ha,this.onRenderProgressCallback=ha,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=l,this.initializeWebWorkers(l)};je.prototype={workerMethods:c(),initializeWebWorkers:function(l){var p=this,k=u.toString()+"("+c.toString()+"());",E=void 0,Z=void 0,W=void 0,I=void 0,X=-1,L="";for(I=l.numWorkers;++X<I;)E=v.createWebWorker(k),v.isObject(E)?(Z=E.objectUrl,W=E.worker,p.workers.push({worker:W,objectUrl:Z}),p.availableWorkers.push(W)):(L=E,v.webWorkerError=!!E);this.workerError=L,this.canvas=t.createElement("canvas"),this.canvas.width=l.gifWidth,this.canvas.height=l.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(l){this.availableWorkers.push(l)},byteMap:function(){for(var l=[],p=0;256>p;p++)l[p]=String.fromCharCode(p);return l}(),bufferToString:function(l){for(var p=l.length,k="",E=-1;++E<p;)k+=this.byteMap[l[E]];return k},onFrameFinished:function(l){var p=this,k=p.frames,E=p.options,Z=!!(E.images||[]).length,W=k.every(function(I){return!I.beingProcessed&&I.done});p.numRenderedFrames++,Z&&l(p.numRenderedFrames/k.length),p.onRenderProgressCallback(.75*p.numRenderedFrames/k.length),W?p.generatingGIF||p.generateGIF(k,p.onRenderCompleteCallback):v.requestTimeout(function(){p.processNextFrame()},1)},processFrame:function(l){var p=this,k=(this.options,this.options),E=k.progressCallback,Z=k.sampleInterval,W=this.frames,I=void 0,X=void 0,L=function(){var O=arguments.length>0&&arguments[0]!==i?arguments[0]:{},l0=O.data;delete I.data,I.pixels=Array.prototype.slice.call(l0.pixels),I.palette=Array.prototype.slice.call(l0.palette),I.done=!0,I.beingProcessed=!1,p.freeWorker(X),p.onFrameFinished(E)};return I=W[l],I.beingProcessed||I.done?(this.onFrameFinished(),void 0):(I.sampleInterval=Z,I.beingProcessed=!0,I.gifshot=!0,X=this.getWorker(),X?(X.onmessage=L,X.postMessage(I)):L({data:p.workerMethods.run(I)}),void 0)},startRendering:function(l){this.onRenderCompleteCallback=l;for(var p=0;p<this.options.numWorkers&&p<this.frames.length;p++)this.processFrame(p)},processNextFrame:function(){for(var l=-1,p=0;p<this.frames.length;p++){var k=this.frames[p];if(!k.done&&!k.beingProcessed){l=p;break}}l>=0&&this.processFrame(l)},generateGIF:function(l,p){var k=[],E={loop:this.repeat},Z=this.options,W=Z.interval,I=Z.frameDuration,X=Z.images,L=!!X.length,O=Z.gifHeight,l0=Z.gifWidth,g0=new d(k,l0,O,E),e0=this.onRenderProgressCallback,H=L?100*W:0,q=void 0,z=void 0;this.generatingGIF=!0,v.each(l,function(X0,m0){var E0=m0.palette;e0(.75+.25*m0.position*1/l.length);for(var I0=0;I>I0;I0++)g0.addFrame(0,0,l0,O,m0.pixels,{palette:E0,delay:H})}),g0.end(),e0(1),this.frames=[],this.generatingGIF=!1,v.isFunction(p)&&(q=this.bufferToString(k),z="data:image/gif;base64,"+v.btoa(q),p(z))},setRepeat:function(l){this.repeat=l},addFrame:function(l,p,k){p=v.isObject(p)?p:{};var E=this,Z=E.ctx,W=E.options,I=W.gifWidth,X=W.gifHeight,L=v.getFontSize(p),O=p,l0=O.filter,g0=O.fontColor,e0=O.fontFamily,H=O.fontWeight,q=(O.gifHeight,O.gifWidth,O.text),z=O.textAlign,X0=O.textBaseline,m0=O.waterMark,E0=O.waterMarkHeight,I0=O.waterMarkWidth,Tr=O.waterMarkXCoordinate,ar=O.waterMarkYCoordinate,U0=p.textXCoordinate?p.textXCoordinate:z==="left"?1:z==="right"?I:I/2,fr=p.textYCoordinate?p.textYCoordinate:X0==="top"?1:X0==="center"?X/2:X,K0=H+" "+L+" "+e0,Y0=k&&p.showFrameText?k:q,sr=void 0;try{Z.filter=l0,Z.drawImage(l,0,0,I,X),Y0&&(Z.font=K0,Z.fillStyle=g0,Z.textAlign=z,Z.textBaseline=X0,Z.fillText(Y0,U0,fr)),m0&&Z.drawImage(m0,Tr,ar,I0,E0),sr=Z.getImageData(0,0,I,X),E.addFrameImageData(sr)}catch(Qr){return""+Qr}},addFrameImageData:function(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{},p=this.frames,k=l.data;this.frames.push({data:k,width:l.width,height:l.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:p.length})},onRenderProgress:function(l){this.onRenderProgressCallback=l},isRendering:function(){return this.generatingGIF},getBase64GIF:function(l){var p=this,k=function(E){p.destroyWorkers(),v.requestTimeout(function(){l(E)},0)};p.startRendering(k)},destroyWorkers:function(){if(!this.workerError){var l=this.workers;v.each(l,function(p,k){var E=k.worker,Z=k.objectUrl;E.terminate(),v.URL.revokeObjectURL(Z)})}}};var oA=function(){},Ai={getGIF:function(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{},p=arguments[1];p=v.isFunction(p)?p:oA;var k=t.createElement("canvas"),E=void 0,Z=l.images,W=!!Z.length,I=l.cameraStream,X=l.crop,L=l.filter,O=l.fontColor,l0=l.fontFamily,g0=l.fontWeight,e0=l.keepCameraOn,H=(l.numWorkers,l.progressCallback),q=l.saveRenderingContexts,z=l.savedRenderingContexts,X0=l.text,m0=l.textAlign,E0=l.textBaseline,I0=l.videoElement,Tr=l.videoHeight,ar=l.videoWidth,U0=l.webcamVideoElement,fr=l.waterMark,K0=l.waterMarkHeight,Y0=l.waterMarkWidth,sr=l.waterMarkXCoordinate,Qr=l.waterMarkYCoordinate,gr=Number(l.gifWidth),Ze=Number(l.gifHeight),Le=Number(l.interval),ba=(Number(l.sampleInterval),W?0:1e3*Le),it=[],Hr=z.length?z.length:l.numFrames,At=Hr,fi=new je(l),fA=v.getFontSize(l),sA=l.textXCoordinate?l.textXCoordinate:m0==="left"?1:m0==="right"?gr:gr/2,uA=l.textYCoordinate?l.textYCoordinate:E0==="top"?1:E0==="center"?Ze/2:Ze,ls=g0+" "+fA+" "+l0,Re=X?Math.floor(X.scaledWidth/2):0,Ye=X?ar-X.scaledWidth:0,ga=X?Math.floor(X.scaledHeight/2):0,ma=X?Tr-X.scaledHeight:0,si=function ot(){function $(){try{Ye>ar&&(Ye=ar),ma>Tr&&(ma=Tr),0>Re&&(Re=0),0>ga&&(ga=0),E.filter=L,E.drawImage(I0,Re,ga,Ye,ma,0,0,gr,Ze),J()}catch(Q){if(Q.name!=="NS_ERROR_NOT_AVAILABLE")throw Q;v.requestTimeout($,100)}}function J(){var Q=void 0;q&&it.push(E.getImageData(0,0,gr,Ze)),fr&&E.drawImage(fr,sr,Qr,Y0,K0),X0&&(E.font=ls,E.fillStyle=O,E.textAlign=m0,E.textBaseline=E0,E.fillText(X0,sA,uA)),Q=E.getImageData(0,0,gr,Ze),fi.addFrameImageData(Q),At=p0,H((Hr-At)/Hr),p0>0&&v.requestTimeout(ot,ba),At||fi.getBase64GIF(function(r0){p({error:!1,errorCode:"",errorMsg:"",image:r0,cameraStream:I,videoElement:I0,webcamVideoElement:U0,savedRenderingContexts:it,keepCameraOn:e0})})}var p0=At-1;z.length?(E.putImageData(z[Hr-At],0,0),J()):$()};Hr=Hr!==i?Hr:10,Le=Le!==i?Le:.1,k.width=gr,k.height=Ze,E=k.getContext("2d"),function ot(){return z.length||I0.currentTime!==0?(si(),void 0):(v.requestTimeout(ot,100),void 0)}()},getCropDimensions:function(){var l=arguments.length>0&&arguments[0]!==i?arguments[0]:{},p=l.videoWidth,k=l.videoHeight,E=l.gifWidth,Z=l.gifHeight,W={width:0,height:0,scaledWidth:0,scaledHeight:0};return p>k?(W.width=Math.round(p*(Z/k))-E,W.scaledWidth=Math.round(W.width*(k/Z))):(W.height=Math.round(k*(E/p))-Z,W.scaledHeight=Math.round(W.height*(p/E))),W}},O0={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function l(p){l.attempts=l.attempts||0;var k=p.cameraStream,E=p.completedCallback,Z=p.videoElement;Z&&(Z.videoWidth>0&&Z.videoHeight>0?(Z.removeEventListener("loadeddata",O0.findVideoSize),E({videoElement:Z,cameraStream:k,videoWidth:Z.videoWidth,videoHeight:Z.videoHeight})):l.attempts<10?(l.attempts+=1,v.requestTimeout(function(){O0.findVideoSize(p)},400)):E({videoElement:Z,cameraStream:k,videoWidth:O0.defaultVideoDimensions.width,videoHeight:O0.defaultVideoDimensions.height}))},onStreamingTimeout:function(l){v.isFunction(l)&&l({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(l){var p=v.isArray(l.existingVideo)?l.existingVideo[0]:l.existingVideo,k=l.cameraStream,E=l.completedCallback,Z=l.streamedCallback,W=l.videoElement;if(v.isFunction(Z)&&Z(),p){if(v.isString(p))W.src=p,W.innerHTML='<source src="'+p+'" type="video/'+v.getExtension(p)+'" />';else if(p instanceof Blob){try{W.src=v.URL.createObjectURL(p)}catch{}W.innerHTML='<source src="'+p+'" type="'+p.type+'" />'}}else if(W.mozSrcObject)W.mozSrcObject=k;else if(v.URL)try{W.srcObject=k,W.src=v.URL.createObjectURL(k)}catch{W.srcObject=k}W.play(),v.requestTimeout(function I(){I.count=I.count||0,O0.loadedData===!0?(O0.findVideoSize({videoElement:W,cameraStream:k,completedCallback:E}),O0.loadedData=!1):(I.count+=1,I.count>10?O0.findVideoSize({videoElement:W,cameraStream:k,completedCallback:E}):I())},0)},startStreaming:function(l){var p=v.isFunction(l.error)?l.error:v.noop,k=v.isFunction(l.streamed)?l.streamed:v.noop,E=v.isFunction(l.completed)?l.completed:v.noop,Z=l.crossOrigin,W=l.existingVideo,I=l.lastCameraStream,X=l.options,L=l.webcamVideoElement,O=v.isElement(W)?W:L||t.createElement("video");Z&&(O.crossOrigin=X.crossOrigin),O.autoplay=!0,O.loop=!0,O.muted=!0,O.addEventListener("loadeddata",function(){O0.loadedData=!0,X.offset&&(O.currentTime=X.offset)}),W?O0.stream({videoElement:O,existingVideo:W,completedCallback:E}):I?O0.stream({videoElement:O,cameraStream:I,streamedCallback:k,completedCallback:E}):v.getUserMedia({video:!0},function(l0){O0.stream({videoElement:O,cameraStream:l0,streamedCallback:k,completedCallback:E})},p)},startVideoStreaming:function(l){var p=arguments.length>1&&arguments[1]!==i?arguments[1]:{},k=p.timeout!==i?p.timeout:0,E=p.callback,Z=p.webcamVideoElement,W=void 0;k>0&&(W=v.requestTimeout(function(){O0.onStreamingTimeout(E)},1e4)),O0.startStreaming({error:function(){E({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(W)},completed:function(){var I=arguments.length>0&&arguments[0]!==i?arguments[0]:{},X=I.cameraStream,L=I.videoElement,O=I.videoHeight,l0=I.videoWidth;l({cameraStream:X,videoElement:L,videoHeight:O,videoWidth:l0})},lastCameraStream:p.lastCameraStream,webcamVideoElement:Z,crossOrigin:p.crossOrigin,options:p})},stopVideoStreaming:function(l){l=v.isObject(l)?l:{};var p=l,k=p.keepCameraOn,E=p.videoElement,Z=p.webcamVideoElement,W=l.cameraStream||{},I=W.getTracks?W.getTracks()||[]:[],X=!!I.length,L=I[0];!k&&X&&v.isFunction(L.stop)&&L.stop(),v.isElement(E)&&!Z&&(E.pause(),v.isFunction(v.URL.revokeObjectURL)&&!v.webWorkerError&&E.src&&v.URL.revokeObjectURL(E.src),v.removeElement(E))}},oi={utils:F,error:P,defaultOptions:Yr,createGIF:m,takeSnapShot:C,stopVideoStreaming:y,isSupported:A,isWebCamGIFSupported:o,isExistingVideoGIFSupported:s,isExistingImagesGIFSupported:f,VERSION:"0.4.5"};e.exports=oi})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{}),function(a,t){e.exports=t(),e.exports.default=t()}(tp,function(){var a=`
;
function processSingleImage(image) {
    return new Promise((resolve, reject) => {
        const w = image.get_width();
        const h = image.get_height();
        const whiteImage = new ImageData(w, h);
        for (let i = 0; i < w * h; i++) {
            whiteImage.data[i * 4 + 3] = 255;
        }
        image.display(whiteImage, (imageData) => {
            if (!imageData) {
                return reject("ERR_LIBHEIF Error while processing single image and generating image data, could not ensure image");
            }
            resolve(imageData);
        });
    });
}
onmessage = (message) => {
    const id = message.data.id;
    try {
        const decoder = new libheif.HeifDecoder();
        let imagesArr = decoder.decode(message.data.buffer);
        if (!imagesArr || !imagesArr.length) {
            throw "ERR_LIBHEIF format not supported";
        }
        imagesArr = imagesArr.filter((x) => {
            let valid = true;
            try {
                /*
                sometimes the heic container is valid
                yet the images themselves are corrupt
                */
                x.get_height();
            }
            catch (e) {
                valid = false;
            }
            return valid;
        });
        if (!imagesArr.length) {
            throw "ERR_LIBHEIF Heic doesn't contain valid images";
        }
        Promise.all(imagesArr.map((image) => processSingleImage(image)))
            .then((imageDataArr) => {
            postMessage({ id, imageDataArr, error: "" });
        })
            .catch((e) => {
            postMessage({
                id,
                imageDataArr: [],
                error: e && e.toString ? e.toString() : e,
            });
        });
    }
    catch (e) {
        postMessage({
            id,
            imageDataArr: [],
            error: e && e.toString ? e.toString() : e,
        });
    }
};

`,t=new Blob([a],{type:"application/javascript"});window.__heic2any__worker=new Worker(URL.createObjectURL(t));var n=["image/png","image/jpeg","image/gif"],i={blobToDataURL:function(f){return new Promise(function(s,u){var c=new FileReader;c.onerror=function(){u("ERR_DOM Error on converting blob to data URL")},c.onload=function(d){s(c.result)},c.readAsDataURL(f)})},dataURItoBlob:function(f){try{for(var s=atob(f.split(",")[1]),u=f.split(",")[0].split(":")[1].split(";")[0],c=new ArrayBuffer(s.length),d=new Uint8Array(c),b=0;b<s.length;b++)d[b]=s.charCodeAt(b);var w=new Blob([c],{type:u});return w}catch(y){return"ERR_DOM Error on converting data URI to blob "+y&&y.toString?y.toString():y}},imageDataToBlob:function(f){var s=f.imageData,u=f.toType;u===void 0&&(u="image/png");var c=f.quality;return c===void 0&&(c=.92),(c>1||c<0)&&(c=.92),n.indexOf(u)===-1&&(u="image/png"),new Promise(function(d,b){var w=null;try{w=document.createElement("canvas")}catch{}if(!w)return b("ERR_CANVAS Error on converting imagedata to blob: Could not create canvas element");w.width=s.width,w.height=s.height;var y=w.getContext("2d");if(!y)return b("ERR_CANVAS Error on converting imagedata to blob: Could not get canvas context");y.putImageData(s,0,0),w.toBlob(function(B){return B?d(B):b("ERR_CANVAS Error on converting imagedata to blob: Could not get blob from canvas")},u,c)})},imagesToGif:function(f){var s=f.images,u=f.interval,c=f.gifHeight,d=f.gifWidth;return new Promise(function(b,w){gifshot.createGIF({images:s,interval:u,gifHeight:c,gifWidth:d},function(y){return y.error&&w("ERR_GIF "+y.errorCode+" "+y.errorMessage),b(y.image)})})},otherImageType:function(f){for(var s=new Uint8Array(f).subarray(0,4),u="",c=0;c<s.length;c++)u=u+s[c].toString(16);switch(u){case"89504e47":return"image/png";case"47494638":return"image/gif";case"ffd8ffe0":case"ffd8ffe1":case"ffd8ffe2":case"ffd8ffe3":case"ffd8ffe8":return"image/jpeg";default:return!1}},error:function(f){var s=0;f?typeof f!="string"&&(f.toString?f=f.toString():f=JSON.stringify(f)):f="ERR_UNKNOWN";for(var u=["ERR_USER","ERR_LIBHEIF","ERR_GIF","ERR_DOM","ERR_CANVAS"],c=0;c<u.length;c++){var d=u[c];f.indexOf(d)===0&&(s=c+1)}return{code:s,message:f}}};function A(f){return new Promise(function(s,u){var c=(Math.random()*new Date().getTime()).toString(),d={id:c,buffer:f};window.__heic2any__worker.postMessage(d),window.__heic2any__worker.addEventListener("message",function(b){if(b.data.id===c)return b.data.error?u(b.data.error):s(b.data.imageDataArr)})})}function o(f){var s=f.blob,u=f.toType;u===void 0&&(u="image/png");var c=f.quality;c===void 0&&(c=.92);var d=f.gifInterval;d===void 0&&(d=.4);var b=f.multiple;return b===void 0&&(b=void 0),new Promise(function(w,y){s instanceof Blob||i.error("ERR_USER library only accepts BLOBs as input"),typeof b!="boolean"&&i.error('ERR_USER "multiple" parameter should be of type "boolean"'),typeof c!="number"&&i.error('ERR_USER "quality" parameter should be of type "number"'),typeof d!="number"&&i.error('ERR_USER "gifInterval" parameter should be of type "number"');var B=new FileReader;B.onload=function(g){var h=0,m=0,C=g.target.result,v=i.otherImageType(C);if(v)return y(i.error("ERR_USER Image is already browser readable: "+v));A(C).then(function(F){return h=F[0].width,m=F[0].height,Promise.all(F.map(function(S){return i.imageDataToBlob({imageData:S,toType:u,quality:c})}))}).then(function(F){return u==="image/gif"?Promise.all(F.map(function(S){return i.blobToDataURL(S)})):b?(w(F),[""]):(w(F[0]),[""])}).then(function(F){return u==="image/gif"&&F?i.imagesToGif({images:F,interval:d,gifWidth:h,gifHeight:m}):""}).then(function(F){if(u==="image/gif"&&F){var S=i.dataURItoBlob(F);typeof S=="string"?y(i.error(S)):w(S)}}).catch(function(F){y(i.error(F))})},B.readAsArrayBuffer(s)})}return o})})(ep);var _T=ep.exports;const CT=Zb(_T),Bb=()=>{var c,d,b;const[e,r]=V.useState(null),[a,t]=V.useState(""),n=Vt(),i=(c=n.currentUser)==null?void 0:c.uid,A=((d=n.currentUser)==null?void 0:d.displayName)||"무명",o=((b=n.currentUser)==null?void 0:b.photoURL)||"",f=J3(),s=async w=>{var g;const y=w.target.files[0],B=["heic","heif","jpeg","jpg","png","gif"];if(y){const h=(g=y.name.split(".").pop())==null?void 0:g.toLowerCase();if(h&&B.includes(h))if(h==="heic"||h==="heif")try{const C=await CT({blob:y,toType:"image/jpeg"});r(C)}catch(m){console.log(m),alert("이미지 변환 중 오류가 발생했습니다.")}else r(y);else{alert("허용되는 이미지 확장자가 아닙니다.");return}}},u=async w=>{w.preventDefault();const y=wT();let B,g;const h=e==null?void 0:e.name;h&&(B=kT(y,`posts/${h}`),g=pT(B,e),g.on("state_changed",m=>{console.log(m)},m=>{console.log(m)},()=>{vT(g.snapshot.ref).then(async m=>{const C=xc(),v=zo(C,"posts");await p_(v,{id:i,nickname:A,profileImageUrl:o,imageUrl:m,likes:"n",content:a,date:v_()}),alert("작성 완료"),f("/BoardList")})}))};return _.jsxs("form",{onSubmit:u,children:[_.jsx("input",{type:"file",onChange:s}),_.jsx("textarea",{value:a,onChange:w=>t(w.target.value)}),_.jsx("button",{type:"submit",children:"Upload"})]})};function BT(){const e=sR();return _.jsx(Ew,{children:_.jsxs("div",{className:"wrapper",children:[_.jsx("header",{children:_.jsx(Bw,{})}),_.jsx("main",{children:_.jsxs(mw,{children:[_.jsx(Qe,{path:"/",element:_.jsx(kb,{})}),_.jsx(Qe,{path:"/boardList",element:_.jsx(kb,{})}),_.jsx(Qe,{path:"/training",element:_.jsx(Zw,{})}),_.jsx(Qe,{path:"/shop",element:_.jsx(Rw,{})}),_.jsx(Qe,{path:"/trip",element:_.jsx(Bb,{})}),_.jsx(Qe,{path:"/myPage",element:e?_.jsx(BB,{}):_.jsx(fR,{})}),_.jsx(Qe,{path:"/signup",element:_.jsx(oR,{})}),_.jsx(Qe,{path:"/uploadPost",element:_.jsx(Bb,{})})]})}),_.jsx("footer",{})]})})}mu.createRoot(document.getElementById("root")).render(_.jsx(Xb.StrictMode,{children:_.jsx(BT,{})}));