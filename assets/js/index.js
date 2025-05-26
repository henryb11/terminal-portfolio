(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var e_={exports:{}},tu={},t_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),Ix=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Nx=Symbol.for("react.strict_mode"),Ux=Symbol.for("react.profiler"),kx=Symbol.for("react.provider"),Fx=Symbol.for("react.context"),Ox=Symbol.for("react.forward_ref"),zx=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),Hx=Symbol.for("react.lazy"),ep=Symbol.iterator;function Vx(t){return t===null||typeof t!="object"?null:(t=ep&&t[ep]||t["@@iterator"],typeof t=="function"?t:null)}var n_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,r_={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function o_(){}o_.prototype=Ko.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=r_,this.updater=n||n_}var bd=Rd.prototype=new o_;bd.constructor=Rd;i_(bd,Ko.prototype);bd.isPureReactComponent=!0;var tp=Array.isArray,s_=Object.prototype.hasOwnProperty,Pd={current:null},a_={key:!0,ref:!0,__self:!0,__source:!0};function l_(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)s_.call(e,i)&&!a_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ia,type:t,key:o,ref:s,props:r,_owner:Pd.current}}function Gx(t,e){return{$$typeof:ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===ia}function Wx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var np=/\/+/g;function Tu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wx(""+t.key):e.toString(36)}function sl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ia:case Ix:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Tu(s,0):i,tp(r)?(n="",t!=null&&(n=t.replace(np,"$&/")+"/"),sl(r,e,n,"",function(u){return u})):r!=null&&(Ld(r)&&(r=Gx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(np,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",tp(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Tu(o,a);s+=sl(o,e,n,l,r)}else if(l=Vx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Tu(o,a++),s+=sl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function va(t,e,n){if(t==null)return t;var i=[],r=0;return sl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function Xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},al={transition:null},jx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:al,ReactCurrentOwner:Pd};function u_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:va,forEach:function(t,e,n){va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return va(t,function(){e++}),e},toArray:function(t){return va(t,function(e){return e})||[]},only:function(t){if(!Ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ko;We.Fragment=Dx;We.Profiler=Ux;We.PureComponent=Rd;We.StrictMode=Nx;We.Suspense=zx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;We.act=u_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=i_({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Pd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s_.call(e,l)&&!a_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ia,type:t.type,key:r,ref:o,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:Fx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:kx,_context:t},t.Consumer=t};We.createElement=l_;We.createFactory=function(t){var e=l_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:Ox,render:t}};We.isValidElement=Ld;We.lazy=function(t){return{$$typeof:Hx,_payload:{_status:-1,_result:t},_init:Xx}};We.memo=function(t,e){return{$$typeof:Bx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=al.transition;al.transition={};try{t()}finally{al.transition=e}};We.unstable_act=u_;We.useCallback=function(t,e){return Zt.current.useCallback(t,e)};We.useContext=function(t){return Zt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Zt.current.useEffect(t,e)};We.useId=function(){return Zt.current.useId()};We.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Zt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};We.useRef=function(t){return Zt.current.useRef(t)};We.useState=function(t){return Zt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Zt.current.useTransition()};We.version="18.3.1";t_.exports=We;var Dt=t_.exports;const qx=Jg(Dt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=Dt,$x=Symbol.for("react.element"),Kx=Symbol.for("react.fragment"),Zx=Object.prototype.hasOwnProperty,Qx=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Jx={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Zx.call(e,i)&&!Jx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:$x,type:t,key:o,ref:s,props:r,_owner:Qx.current}}tu.Fragment=Kx;tu.jsx=c_;tu.jsxs=c_;e_.exports=tu;var Ke=e_.exports,Oc={},f_={exports:{}},En={},d_={exports:{}},h_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Z){var A=N.length;N.push(Z);e:for(;0<A;){var le=A-1>>>1,xe=N[le];if(0<r(xe,Z))N[le]=Z,N[A]=xe,A=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Z=N[0],A=N.pop();if(A!==Z){N[0]=A;e:for(var le=0,xe=N.length,I=xe>>>1;le<I;){var $=2*(le+1)-1,oe=N[$],ce=$+1,fe=N[ce];if(0>r(oe,A))ce<xe&&0>r(fe,oe)?(N[le]=fe,N[ce]=A,le=ce):(N[le]=oe,N[$]=A,le=$);else if(ce<xe&&0>r(fe,A))N[le]=fe,N[ce]=A,le=ce;else break e}}return Z}function r(N,Z){var A=N.sortIndex-Z.sortIndex;return A!==0?A:N.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var Z=n(u);Z!==null;){if(Z.callback===null)i(u);else if(Z.startTime<=N)i(u),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(u)}}function y(N){if(x=!1,v(N),!g)if(n(l)!==null)g=!0,q(L);else{var Z=n(u);Z!==null&&Q(y,Z.startTime-N)}}function L(N,Z){g=!1,x&&(x=!1,d(b),b=-1),p=!0;var A=h;try{for(v(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||N&&!R());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var xe=le(f.expirationTime<=Z);Z=t.unstable_now(),typeof xe=="function"?f.callback=xe:f===n(l)&&i(l),v(Z)}else i(l);f=n(l)}if(f!==null)var I=!0;else{var $=n(u);$!==null&&Q(y,$.startTime-Z),I=!1}return I}finally{f=null,h=A,p=!1}}var E=!1,C=null,b=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function U(){if(C!==null){var N=t.unstable_now();S=N;var Z=!0;try{Z=C(!0,N)}finally{Z?B():(E=!1,C=null)}}else E=!1}var B;if(typeof _=="function")B=function(){_(U)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,W=Y.port2;Y.port1.onmessage=U,B=function(){W.postMessage(null)}}else B=function(){m(U,0)};function q(N){C=N,E||(E=!0,B())}function Q(N,Z){b=m(function(){N(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,q(L))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var Z=3;break;default:Z=h}var A=h;h=Z;try{return N()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Z){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=h;h=N;try{return Z()}finally{h=A}},t.unstable_scheduleCallback=function(N,Z,A){var le=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?le+A:le):A=le,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=A+xe,N={id:c++,callback:Z,priorityLevel:N,startTime:A,expirationTime:xe,sortIndex:-1},A>le?(N.sortIndex=A,e(u,N),n(l)===null&&N===n(u)&&(x?(d(b),b=-1):x=!0,Q(y,A-le))):(N.sortIndex=xe,e(l,N),g||p||(g=!0,q(L))),N},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(N){var Z=h;return function(){var A=h;h=Z;try{return N.apply(this,arguments)}finally{h=A}}}})(h_);d_.exports=h_;var ey=d_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty=Dt,Sn=ey;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p_=new Set,Os={};function Xr(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(Os[t]=e,t=0;t<e.length;t++)p_.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=Object.prototype.hasOwnProperty,ny=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ip={},rp={};function iy(t){return zc.call(rp,t)?!0:zc.call(ip,t)?!1:ny.test(t)?rp[t]=!0:(ip[t]=!0,!1)}function ry(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oy(t,e,n,i){if(e===null||typeof e>"u"||ry(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Dd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Dd);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Dd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Dd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oy(e,n,r,i)&&(n=null),i||r===null?iy(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=ty.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),ho=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),m_=Symbol.for("react.provider"),g_=Symbol.for("react.context"),kd=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Vc=Symbol.for("react.suspense_list"),Fd=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),__=Symbol.for("react.offscreen"),op=Symbol.iterator;function ss(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Au;function Ss(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ss(t):""}function sy(t){switch(t.tag){case 5:return Ss(t.type);case 16:return Ss("Lazy");case 13:return Ss("Suspense");case 19:return Ss("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function Gc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case po:return"Fragment";case ho:return"Portal";case Bc:return"Profiler";case Ud:return"StrictMode";case Hc:return"Suspense";case Vc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case g_:return(t.displayName||"Context")+".Consumer";case m_:return(t._context.displayName||"Context")+".Provider";case kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Fd:return e=t.displayName||null,e!==null?e:Gc(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Gc(t(e))}catch{}}return null}function ay(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gc(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ly(t){var e=v_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ya(t){t._valueTracker||(t._valueTracker=ly(t))}function x_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=v_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Al(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Wc(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function sp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function y_(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function Xc(t,e){y_(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&jc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ap(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function jc(t,e,n){(e!=="number"||Al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Es=Array.isArray;function Ao(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function qc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Es(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function S_(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function E_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?E_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,M_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uy=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){uy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function w_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function T_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=w_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var cy=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $c(t,e){if(e){if(cy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Kc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zc=null;function Od(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qc=null,Co=null,Ro=null;function cp(t){if(t=sa(t)){if(typeof Qc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=su(e),Qc(t.stateNode,t.type,e))}}function A_(t){Co?Ro?Ro.push(t):Ro=[t]:Co=t}function C_(){if(Co){var t=Co,e=Ro;if(Ro=Co=null,cp(t),e)for(t=0;t<e.length;t++)cp(e[t])}}function R_(t,e){return t(e)}function b_(){}var bu=!1;function P_(t,e,n){if(bu)return t(e,n);bu=!0;try{return R_(t,e,n)}finally{bu=!1,(Co!==null||Ro!==null)&&(b_(),C_())}}function Bs(t,e){var n=t.stateNode;if(n===null)return null;var i=su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Jc=!1;if(Ci)try{var as={};Object.defineProperty(as,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{Jc=!1}function fy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Rs=!1,Cl=null,Rl=!1,ef=null,dy={onError:function(t){Rs=!0,Cl=t}};function hy(t,e,n,i,r,o,s,a,l){Rs=!1,Cl=null,fy.apply(dy,arguments)}function py(t,e,n,i,r,o,s,a,l){if(hy.apply(this,arguments),Rs){if(Rs){var u=Cl;Rs=!1,Cl=null}else throw Error(se(198));Rl||(Rl=!0,ef=u)}}function jr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function L_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function fp(t){if(jr(t)!==t)throw Error(se(188))}function my(t){var e=t.alternate;if(!e){if(e=jr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return fp(r),t;if(o===i)return fp(r),e;o=o.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function I_(t){return t=my(t),t!==null?D_(t):null}function D_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D_(t);if(e!==null)return e;t=t.sibling}return null}var N_=Sn.unstable_scheduleCallback,dp=Sn.unstable_cancelCallback,gy=Sn.unstable_shouldYield,_y=Sn.unstable_requestPaint,Et=Sn.unstable_now,vy=Sn.unstable_getCurrentPriorityLevel,zd=Sn.unstable_ImmediatePriority,U_=Sn.unstable_UserBlockingPriority,bl=Sn.unstable_NormalPriority,xy=Sn.unstable_LowPriority,k_=Sn.unstable_IdlePriority,nu=null,si=null;function yy(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(nu,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:My,Sy=Math.log,Ey=Math.LN2;function My(t){return t>>>=0,t===0?32:31-(Sy(t)/Ey|0)|0}var Ea=64,Ma=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=Ms(a):(o&=s,o!==0&&(i=Ms(o)))}else s=n&~r,s!==0?i=Ms(s):o!==0&&(i=Ms(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function wy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ty(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=wy(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function tf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function F_(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function Pu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function Ay(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Bd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function O_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var z_,Hd,B_,H_,V_,nf=!1,wa=[],Qi=null,Ji=null,er=null,Hs=new Map,Vs=new Map,qi=[],Cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hp(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vs.delete(e.pointerId)}}function ls(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=sa(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ry(t,e,n,i,r){switch(e){case"focusin":return Qi=ls(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=ls(Ji,t,e,n,i,r),!0;case"mouseover":return er=ls(er,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Hs.set(o,ls(Hs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Vs.set(o,ls(Vs.get(o)||null,t,e,n,i,r)),!0}return!1}function G_(t){var e=Pr(t.target);if(e!==null){var n=jr(e);if(n!==null){if(e=n.tag,e===13){if(e=L_(n),e!==null){t.blockedOn=e,V_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zc=i,n.target.dispatchEvent(i),Zc=null}else return e=sa(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function pp(t,e,n){ll(t)&&n.delete(e)}function by(){nf=!1,Qi!==null&&ll(Qi)&&(Qi=null),Ji!==null&&ll(Ji)&&(Ji=null),er!==null&&ll(er)&&(er=null),Hs.forEach(pp),Vs.forEach(pp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,nf||(nf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,by)))}function Gs(t){function e(r){return us(r,t)}if(0<wa.length){us(wa[0],t);for(var n=1;n<wa.length;n++){var i=wa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&us(Qi,t),Ji!==null&&us(Ji,t),er!==null&&us(er,t),Hs.forEach(e),Vs.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)G_(n),n.blockedOn===null&&qi.shift()}var bo=Ni.ReactCurrentBatchConfig,Ll=!0;function Py(t,e,n,i){var r=tt,o=bo.transition;bo.transition=null;try{tt=1,Vd(t,e,n,i)}finally{tt=r,bo.transition=o}}function Ly(t,e,n,i){var r=tt,o=bo.transition;bo.transition=null;try{tt=4,Vd(t,e,n,i)}finally{tt=r,bo.transition=o}}function Vd(t,e,n,i){if(Ll){var r=rf(t,e,n,i);if(r===null)Bu(t,e,i,Il,n),hp(t,i);else if(Ry(r,t,e,n,i))i.stopPropagation();else if(hp(t,i),e&4&&-1<Cy.indexOf(t)){for(;r!==null;){var o=sa(r);if(o!==null&&z_(o),o=rf(t,e,n,i),o===null&&Bu(t,e,i,Il,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Bu(t,e,i,null,n)}}var Il=null;function rf(t,e,n,i){if(Il=null,t=Od(i),t=Pr(t),t!==null)if(e=jr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=L_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Il=t,null}function W_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vy()){case zd:return 1;case U_:return 4;case bl:case xy:return 16;case k_:return 536870912;default:return 16}default:return 16}}var Ki=null,Gd=null,ul=null;function X_(){if(ul)return ul;var t,e=Gd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return ul=r.slice(t,1<i?1-i:void 0)}function cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ta(){return!0}function mp(){return!1}function Mn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ta:mp,this.isPropagationStopped=mp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wd=Mn(Zo),oa=xt({},Zo,{view:0,detail:0}),Iy=Mn(oa),Lu,Iu,cs,iu=xt({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(Lu=t.screenX-cs.screenX,Iu=t.screenY-cs.screenY):Iu=Lu=0,cs=t),Lu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),gp=Mn(iu),Dy=xt({},iu,{dataTransfer:0}),Ny=Mn(Dy),Uy=xt({},oa,{relatedTarget:0}),Du=Mn(Uy),ky=xt({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),Fy=Mn(ky),Oy=xt({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zy=Mn(Oy),By=xt({},Zo,{data:0}),_p=Mn(By),Hy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Wy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Gy[t])?!!e[t]:!1}function Xd(){return Wy}var Xy=xt({},oa,{key:function(t){if(t.key){var e=Hy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xd,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jy=Mn(Xy),qy=xt({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vp=Mn(qy),Yy=xt({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xd}),$y=Mn(Yy),Ky=xt({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zy=Mn(Ky),Qy=xt({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Jy=Mn(Qy),eS=[9,13,27,32],jd=Ci&&"CompositionEvent"in window,bs=null;Ci&&"documentMode"in document&&(bs=document.documentMode);var tS=Ci&&"TextEvent"in window&&!bs,j_=Ci&&(!jd||bs&&8<bs&&11>=bs),xp=" ",yp=!1;function q_(t,e){switch(t){case"keyup":return eS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mo=!1;function nS(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(yp=!0,xp);case"textInput":return t=e.data,t===xp&&yp?null:t;default:return null}}function iS(t,e){if(mo)return t==="compositionend"||!jd&&q_(t,e)?(t=X_(),ul=Gd=Ki=null,mo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j_&&e.locale!=="ko"?null:e.data;default:return null}}var rS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rS[t.type]:e==="textarea"}function $_(t,e,n,i){A_(i),e=Dl(e,"onChange"),0<e.length&&(n=new Wd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ps=null,Ws=null;function oS(t){sv(t,0)}function ru(t){var e=vo(t);if(x_(e))return t}function sS(t,e){if(t==="change")return e}var K_=!1;if(Ci){var Nu;if(Ci){var Uu="oninput"in document;if(!Uu){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),Uu=typeof Ep.oninput=="function"}Nu=Uu}else Nu=!1;K_=Nu&&(!document.documentMode||9<document.documentMode)}function Mp(){Ps&&(Ps.detachEvent("onpropertychange",Z_),Ws=Ps=null)}function Z_(t){if(t.propertyName==="value"&&ru(Ws)){var e=[];$_(e,Ws,t,Od(t)),P_(oS,e)}}function aS(t,e,n){t==="focusin"?(Mp(),Ps=e,Ws=n,Ps.attachEvent("onpropertychange",Z_)):t==="focusout"&&Mp()}function lS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ru(Ws)}function uS(t,e){if(t==="click")return ru(e)}function cS(t,e){if(t==="input"||t==="change")return ru(e)}function fS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:fS;function Xs(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!zc.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function wp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tp(t,e){var n=wp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wp(n)}}function Q_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Q_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J_(){for(var t=window,e=Al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Al(t.document)}return e}function qd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dS(t){var e=J_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Q_(n.ownerDocument.documentElement,n)){if(i!==null&&qd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Tp(n,o);var s=Tp(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Ci&&"documentMode"in document&&11>=document.documentMode,go=null,of=null,Ls=null,sf=!1;function Ap(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;sf||go==null||go!==Al(i)||(i=go,"selectionStart"in i&&qd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ls&&Xs(Ls,i)||(Ls=i,i=Dl(of,"onSelect"),0<i.length&&(e=new Wd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=go)))}function Aa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _o={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},ku={},ev={};Ci&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function ou(t){if(ku[t])return ku[t];if(!_o[t])return t;var e=_o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return ku[t]=e[n];return t}var tv=ou("animationend"),nv=ou("animationiteration"),iv=ou("animationstart"),rv=ou("transitionend"),ov=new Map,Cp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){ov.set(t,e),Xr(e,[t])}for(var Fu=0;Fu<Cp.length;Fu++){var Ou=Cp[Fu],pS=Ou.toLowerCase(),mS=Ou[0].toUpperCase()+Ou.slice(1);fr(pS,"on"+mS)}fr(tv,"onAnimationEnd");fr(nv,"onAnimationIteration");fr(iv,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(rv,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ws="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ws));function Rp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,py(i,e,void 0,t),t.currentTarget=null}function sv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Rp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Rp(r,a,u),o=l}}}if(Rl)throw t=ef,Rl=!1,ef=null,t}function ht(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var i=t+"__bubble";n.has(i)||(av(e,t,2,!1),n.add(i))}function zu(t,e,n){var i=0;e&&(i|=4),av(n,t,i,e)}var Ca="_reactListening"+Math.random().toString(36).slice(2);function js(t){if(!t[Ca]){t[Ca]=!0,p_.forEach(function(n){n!=="selectionchange"&&(gS.has(n)||zu(n,!1,t),zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ca]||(e[Ca]=!0,zu("selectionchange",!1,e))}}function av(t,e,n,i){switch(W_(e)){case 1:var r=Py;break;case 4:r=Ly;break;default:r=Vd}n=r.bind(null,e,n,t),r=void 0,!Jc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Bu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Pr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}P_(function(){var u=o,c=Od(n),f=[];e:{var h=ov.get(t);if(h!==void 0){var p=Wd,g=t;switch(t){case"keypress":if(cl(n)===0)break e;case"keydown":case"keyup":p=jy;break;case"focusin":g="focus",p=Du;break;case"focusout":g="blur",p=Du;break;case"beforeblur":case"afterblur":p=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Ny;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=$y;break;case tv:case nv:case iv:p=Fy;break;case rv:p=Zy;break;case"scroll":p=Iy;break;case"wheel":p=Jy;break;case"copy":case"cut":case"paste":p=zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=vp}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Bs(_,d),y!=null&&x.push(qs(_,y,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Zc&&(g=n.relatedTarget||n.fromElement)&&(Pr(g)||g[Ri]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Pr(g):null,g!==null&&(m=jr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=gp,y="onMouseLeave",d="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=vp,y="onPointerLeave",d="onPointerEnter",_="pointer"),m=p==null?h:vo(p),v=g==null?h:vo(g),h=new x(y,_+"leave",p,n,c),h.target=m,h.relatedTarget=v,y=null,Pr(c)===u&&(x=new x(d,_+"enter",g,n,c),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,d=g,_=0,v=x;v;v=Kr(v))_++;for(v=0,y=d;y;y=Kr(y))v++;for(;0<_-v;)x=Kr(x),_--;for(;0<v-_;)d=Kr(d),v--;for(;_--;){if(x===d||d!==null&&x===d.alternate)break t;x=Kr(x),d=Kr(d)}x=null}else x=null;p!==null&&bp(f,h,p,x,!1),g!==null&&m!==null&&bp(f,m,g,x,!0)}}e:{if(h=u?vo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var L=sS;else if(Sp(h))if(K_)L=cS;else{L=lS;var E=aS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=uS);if(L&&(L=L(t,u))){$_(f,L,n,c);break e}E&&E(t,h,u),t==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&jc(h,"number",h.value)}switch(E=u?vo(u):window,t){case"focusin":(Sp(E)||E.contentEditable==="true")&&(go=E,of=u,Ls=null);break;case"focusout":Ls=of=go=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,Ap(f,n,c);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":Ap(f,n,c)}var C;if(jd)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else mo?q_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(j_&&n.locale!=="ko"&&(mo||b!=="onCompositionStart"?b==="onCompositionEnd"&&mo&&(C=X_()):(Ki=c,Gd="value"in Ki?Ki.value:Ki.textContent,mo=!0)),E=Dl(u,b),0<E.length&&(b=new _p(b,t,null,n,c),f.push({event:b,listeners:E}),C?b.data=C:(C=Y_(n),C!==null&&(b.data=C)))),(C=tS?nS(t,n):iS(t,n))&&(u=Dl(u,"onBeforeInput"),0<u.length&&(c=new _p("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=C))}sv(f,e)})}function qs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Dl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Bs(t,n),o!=null&&i.unshift(qs(t,o,r)),o=Bs(t,e),o!=null&&i.push(qs(t,o,r))),t=t.return}return i}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Bs(n,o),l!=null&&s.unshift(qs(n,l,a))):r||(l=Bs(n,o),l!=null&&s.push(qs(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var _S=/\r\n?/g,vS=/\u0000|\uFFFD/g;function Pp(t){return(typeof t=="string"?t:""+t).replace(_S,`
`).replace(vS,"")}function Ra(t,e,n){if(e=Pp(e),Pp(t)!==e&&n)throw Error(se(425))}function Nl(){}var af=null,lf=null;function uf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var cf=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Lp=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Lp<"u"?function(t){return Lp.resolve(null).then(t).catch(SS)}:cf;function SS(t){setTimeout(function(){throw t})}function Hu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Gs(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Gs(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Qo,Ys="__reactProps$"+Qo,Ri="__reactContainer$"+Qo,ff="__reactEvents$"+Qo,ES="__reactListeners$"+Qo,MS="__reactHandles$"+Qo;function Pr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ip(t);t!==null;){if(n=t[ni])return n;t=Ip(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function su(t){return t[Ys]||null}var df=[],xo=-1;function dr(t){return{current:t}}function pt(t){0>xo||(t.current=df[xo],df[xo]=null,xo--)}function ut(t,e){xo++,df[xo]=t.current,t.current=e}var ur={},Xt=dr(ur),sn=dr(!1),Or=ur;function Oo(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Ul(){pt(sn),pt(Xt)}function Dp(t,e,n){if(Xt.current!==ur)throw Error(se(168));ut(Xt,e),ut(sn,n)}function lv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,ay(t)||"Unknown",r));return xt({},n,i)}function kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Or=Xt.current,ut(Xt,t),ut(sn,sn.current),!0}function Np(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=lv(t,e,Or),i.__reactInternalMemoizedMergedChildContext=t,pt(sn),pt(Xt),ut(Xt,t)):pt(sn),ut(sn,n)}var xi=null,au=!1,Vu=!1;function uv(t){xi===null?xi=[t]:xi.push(t)}function wS(t){au=!0,uv(t)}function hr(){if(!Vu&&xi!==null){Vu=!0;var t=0,e=tt;try{var n=xi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,au=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),N_(zd,hr),r}finally{tt=e,Vu=!1}}return null}var yo=[],So=0,Fl=null,Ol=0,Cn=[],Rn=0,zr=null,Si=1,Ei="";function Mr(t,e){yo[So++]=Ol,yo[So++]=Fl,Fl=t,Ol=e}function cv(t,e,n){Cn[Rn++]=Si,Cn[Rn++]=Ei,Cn[Rn++]=zr,zr=t;var i=Si;t=Ei;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var o=32-qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-qn(e)+r|n<<r|i,Ei=o+t}else Si=1<<o|n<<r|i,Ei=t}function Yd(t){t.return!==null&&(Mr(t,1),cv(t,1,0))}function $d(t){for(;t===Fl;)Fl=yo[--So],yo[So]=null,Ol=yo[--So],yo[So]=null;for(;t===zr;)zr=Cn[--Rn],Cn[Rn]=null,Ei=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null}var xn=null,_n=null,mt=!1,Gn=null;function fv(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,_n=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=zr!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,_n=null,!0):!1;default:return!1}}function hf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pf(t){if(mt){var e=_n;if(e){var n=e;if(!Up(t,e)){if(hf(t))throw Error(se(418));e=tr(n.nextSibling);var i=xn;e&&Up(t,e)?fv(i,n):(t.flags=t.flags&-4097|2,mt=!1,xn=t)}}else{if(hf(t))throw Error(se(418));t.flags=t.flags&-4097|2,mt=!1,xn=t}}}function kp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function ba(t){if(t!==xn)return!1;if(!mt)return kp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uf(t.type,t.memoizedProps)),e&&(e=_n)){if(hf(t))throw dv(),Error(se(418));for(;e;)fv(t,e),e=tr(e.nextSibling)}if(kp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=xn?tr(t.stateNode.nextSibling):null;return!0}function dv(){for(var t=_n;t;)t=tr(t.nextSibling)}function zo(){_n=xn=null,mt=!1}function Kd(t){Gn===null?Gn=[t]:Gn.push(t)}var TS=Ni.ReactCurrentBatchConfig;function fs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Pa(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fp(t){var e=t._init;return e(t._payload)}function hv(t){function e(d,_){if(t){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function n(d,_){if(!t)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=or(d,_),d.index=0,d.sibling=null,d}function o(d,_,v){return d.index=v,t?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function s(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,y){return _===null||_.tag!==6?(_=$u(v,d.mode,y),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,y){var L=v.type;return L===po?c(d,_,v.props.children,y,v.key):_!==null&&(_.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Xi&&Fp(L)===_.type)?(y=r(_,v.props),y.ref=fs(d,_,v),y.return=d,y):(y=_l(v.type,v.key,v.props,null,d.mode,y),y.ref=fs(d,_,v),y.return=d,y)}function u(d,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Ku(v,d.mode,y),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,y,L){return _===null||_.tag!==7?(_=kr(v,d.mode,y,L),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=$u(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case xa:return v=_l(_.type,_.key,_.props,null,d.mode,v),v.ref=fs(d,null,_),v.return=d,v;case ho:return _=Ku(_,d.mode,v),_.return=d,_;case Xi:var y=_._init;return f(d,y(_._payload),v)}if(Es(_)||ss(_))return _=kr(_,d.mode,v,null),_.return=d,_;Pa(d,_)}return null}function h(d,_,v,y){var L=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:a(d,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:return v.key===L?l(d,_,v,y):null;case ho:return v.key===L?u(d,_,v,y):null;case Xi:return L=v._init,h(d,_,L(v._payload),y)}if(Es(v)||ss(v))return L!==null?null:c(d,_,v,y,null);Pa(d,v)}return null}function p(d,_,v,y,L){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(_,d,""+y,L);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xa:return d=d.get(y.key===null?v:y.key)||null,l(_,d,y,L);case ho:return d=d.get(y.key===null?v:y.key)||null,u(_,d,y,L);case Xi:var E=y._init;return p(d,_,v,E(y._payload),L)}if(Es(y)||ss(y))return d=d.get(v)||null,c(_,d,y,L,null);Pa(_,y)}return null}function g(d,_,v,y){for(var L=null,E=null,C=_,b=_=0,w=null;C!==null&&b<v.length;b++){C.index>b?(w=C,C=null):w=C.sibling;var S=h(d,C,v[b],y);if(S===null){C===null&&(C=w);break}t&&C&&S.alternate===null&&e(d,C),_=o(S,_,b),E===null?L=S:E.sibling=S,E=S,C=w}if(b===v.length)return n(d,C),mt&&Mr(d,b),L;if(C===null){for(;b<v.length;b++)C=f(d,v[b],y),C!==null&&(_=o(C,_,b),E===null?L=C:E.sibling=C,E=C);return mt&&Mr(d,b),L}for(C=i(d,C);b<v.length;b++)w=p(C,d,b,v[b],y),w!==null&&(t&&w.alternate!==null&&C.delete(w.key===null?b:w.key),_=o(w,_,b),E===null?L=w:E.sibling=w,E=w);return t&&C.forEach(function(R){return e(d,R)}),mt&&Mr(d,b),L}function x(d,_,v,y){var L=ss(v);if(typeof L!="function")throw Error(se(150));if(v=L.call(v),v==null)throw Error(se(151));for(var E=L=null,C=_,b=_=0,w=null,S=v.next();C!==null&&!S.done;b++,S=v.next()){C.index>b?(w=C,C=null):w=C.sibling;var R=h(d,C,S.value,y);if(R===null){C===null&&(C=w);break}t&&C&&R.alternate===null&&e(d,C),_=o(R,_,b),E===null?L=R:E.sibling=R,E=R,C=w}if(S.done)return n(d,C),mt&&Mr(d,b),L;if(C===null){for(;!S.done;b++,S=v.next())S=f(d,S.value,y),S!==null&&(_=o(S,_,b),E===null?L=S:E.sibling=S,E=S);return mt&&Mr(d,b),L}for(C=i(d,C);!S.done;b++,S=v.next())S=p(C,d,b,S.value,y),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?b:S.key),_=o(S,_,b),E===null?L=S:E.sibling=S,E=S);return t&&C.forEach(function(U){return e(d,U)}),mt&&Mr(d,b),L}function m(d,_,v,y){if(typeof v=="object"&&v!==null&&v.type===po&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xa:e:{for(var L=v.key,E=_;E!==null;){if(E.key===L){if(L=v.type,L===po){if(E.tag===7){n(d,E.sibling),_=r(E,v.props.children),_.return=d,d=_;break e}}else if(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Xi&&Fp(L)===E.type){n(d,E.sibling),_=r(E,v.props),_.ref=fs(d,E,v),_.return=d,d=_;break e}n(d,E);break}else e(d,E);E=E.sibling}v.type===po?(_=kr(v.props.children,d.mode,y,v.key),_.return=d,d=_):(y=_l(v.type,v.key,v.props,null,d.mode,y),y.ref=fs(d,_,v),y.return=d,d=y)}return s(d);case ho:e:{for(E=v.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{n(d,_);break}else e(d,_);_=_.sibling}_=Ku(v,d.mode,y),_.return=d,d=_}return s(d);case Xi:return E=v._init,m(d,_,E(v._payload),y)}if(Es(v))return g(d,_,v,y);if(ss(v))return x(d,_,v,y);Pa(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(d,_.sibling),_=r(_,v),_.return=d,d=_):(n(d,_),_=$u(v,d.mode,y),_.return=d,d=_),s(d)):n(d,_)}return m}var Bo=hv(!0),pv=hv(!1),zl=dr(null),Bl=null,Eo=null,Zd=null;function Qd(){Zd=Eo=Bl=null}function Jd(t){var e=zl.current;pt(zl),t._currentValue=e}function mf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Po(t,e){Bl=t,Zd=Eo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Zd!==t)if(t={context:t,memoizedValue:e,next:null},Eo===null){if(Bl===null)throw Error(se(308));Eo=t,Bl.dependencies={lanes:0,firstContext:t}}else Eo=Eo.next=t;return e}var Lr=null;function eh(t){Lr===null?Lr=[t]:Lr.push(t)}function mv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function th(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}function Op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,i){var r=t.updateQueue;ji=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=xt({},f,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Hr|=s,t.lanes=s,t.memoizedState=f}}function zp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var aa={},ai=dr(aa),$s=dr(aa),Ks=dr(aa);function Ir(t){if(t===aa)throw Error(se(174));return t}function nh(t,e){switch(ut(Ks,e),ut($s,t),ut(ai,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}pt(ai),ut(ai,e)}function Ho(){pt(ai),pt($s),pt(Ks)}function _v(t){Ir(Ks.current);var e=Ir(ai.current),n=Yc(e,t.type);e!==n&&(ut($s,t),ut(ai,n))}function ih(t){$s.current===t&&(pt(ai),pt($s))}var _t=dr(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function rh(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var dl=Ni.ReactCurrentDispatcher,Wu=Ni.ReactCurrentBatchConfig,Br=0,vt=null,Rt=null,Nt=null,Gl=!1,Is=!1,Zs=0,AS=0;function Bt(){throw Error(se(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function sh(t,e,n,i,r,o){if(Br=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,dl.current=t===null||t.memoizedState===null?PS:LS,t=n(i,r),Is){o=0;do{if(Is=!1,Zs=0,25<=o)throw Error(se(301));o+=1,Nt=Rt=null,e.updateQueue=null,dl.current=IS,t=n(i,r)}while(Is)}if(dl.current=Wl,e=Rt!==null&&Rt.next!==null,Br=0,Nt=Rt=vt=null,Gl=!1,e)throw Error(se(300));return t}function ah(){var t=Zs!==0;return Zs=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Dn(){if(Rt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Rt.next;var e=Nt===null?vt.memoizedState:Nt.next;if(e!==null)Nt=e,Rt=t;else{if(t===null)throw Error(se(310));Rt=t,t={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Qs(t,e){return typeof e=="function"?e(t):e}function Xu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Rt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=i):l=l.next=f,vt.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Kn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Hr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ju(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Kn(o,e.memoizedState)||(on=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function vv(){}function xv(t,e){var n=vt,i=Dn(),r=e(),o=!Kn(i.memoizedState,r);if(o&&(i.memoizedState=r,on=!0),i=i.queue,lh(Ev.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Js(9,Sv.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(se(349));Br&30||yv(n,e,r)}return r}function yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Sv(t,e,n,i){e.value=n,e.getSnapshot=i,Mv(e)&&wv(t)}function Ev(t,e,n){return n(function(){Mv(e)&&wv(t)})}function Mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function wv(t){var e=bi(t,1);e!==null&&Yn(e,t,1,-1)}function Bp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qs,lastRenderedState:t},e.queue=t,t=t.dispatch=bS.bind(null,vt,t),[e.memoizedState,t]}function Js(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Tv(){return Dn().memoizedState}function hl(t,e,n,i){var r=Jn();vt.flags|=t,r.memoizedState=Js(1|e,n,void 0,i===void 0?null:i)}function lu(t,e,n,i){var r=Dn();i=i===void 0?null:i;var o=void 0;if(Rt!==null){var s=Rt.memoizedState;if(o=s.destroy,i!==null&&oh(i,s.deps)){r.memoizedState=Js(e,n,o,i);return}}vt.flags|=t,r.memoizedState=Js(1|e,n,o,i)}function Hp(t,e){return hl(8390656,8,t,e)}function lh(t,e){return lu(2048,8,t,e)}function Av(t,e){return lu(4,2,t,e)}function Cv(t,e){return lu(4,4,t,e)}function Rv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,lu(4,4,Rv.bind(null,e,t),n)}function uh(){}function Pv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Lv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Iv(t,e,n){return Br&21?(Kn(n,e)||(n=F_(),vt.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function CS(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Wu.transition;Wu.transition={};try{t(!1),e()}finally{tt=n,Wu.transition=i}}function Dv(){return Dn().memoizedState}function RS(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Uv(e,n);else if(n=mv(t,e,n,i),n!==null){var r=Kt();Yn(n,t,i,r),kv(n,e,i)}}function bS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Uv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,s)){var l=e.interleaved;l===null?(r.next=r,eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=mv(t,e,r,i),n!==null&&(r=Kt(),Yn(n,t,i,r),kv(n,e,i))}}function Nv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Uv(t,e){Is=Gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Bd(t,n)}}var Wl={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},PS={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,Rv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=RS.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Bp,useDebugValue:uh,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Bp(!1),e=t[0];return t=CS.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Jn();if(mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ut===null)throw Error(se(349));Br&30||yv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Hp(Ev.bind(null,i,o,t),[t]),i.flags|=2048,Js(9,Sv.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ut.identifierPrefix;if(mt){var n=Ei,i=Si;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Zs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},LS={readContext:In,useCallback:Pv,useContext:In,useEffect:lh,useImperativeHandle:bv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Lv,useReducer:Xu,useRef:Tv,useState:function(){return Xu(Qs)},useDebugValue:uh,useDeferredValue:function(t){var e=Dn();return Iv(e,Rt.memoizedState,t)},useTransition:function(){var t=Xu(Qs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:xv,useId:Dv,unstable_isNewReconciler:!1},IS={readContext:In,useCallback:Pv,useContext:In,useEffect:lh,useImperativeHandle:bv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Lv,useReducer:ju,useRef:Tv,useState:function(){return ju(Qs)},useDebugValue:uh,useDeferredValue:function(t){var e=Dn();return Rt===null?e.memoizedState=t:Iv(e,Rt.memoizedState,t)},useTransition:function(){var t=ju(Qs)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:xv,useId:Dv,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={isMounted:function(t){return(t=t._reactInternals)?jr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=rr(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Yn(e,t,r,i),fl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=rr(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&(Yn(e,t,r,i),fl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&(Yn(e,t,i,n),fl(e,t,i))}};function Vp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Xs(n,i)||!Xs(r,o):!0}function Fv(t,e,n){var i=!1,r=ur,o=e.contextType;return typeof o=="object"&&o!==null?o=In(o):(r=an(e)?Or:Xt.current,i=e.contextTypes,o=(i=i!=null)?Oo(t,r):ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=uu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Gp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function _f(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},th(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=In(o):(o=an(e)?Or:Xt.current,r.context=Oo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(gf(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&uu.enqueueReplaceState(r,r.state,null),Hl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=sy(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function Ov(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){jl||(jl=!0,Rf=i),vf(t,e)},n}function zv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){vf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Wp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new DS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=qS.bind(null,t,e,n),e.then(t,t))}function Xp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var NS=Ni.ReactCurrentOwner,on=!1;function $t(t,e,n,i){e.child=t===null?pv(e,null,n,i):Bo(e,t.child,n,i)}function qp(t,e,n,i,r){n=n.render;var o=e.ref;return Po(e,r),i=sh(t,e,n,i,o,r),n=ah(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&n&&Yd(e),e.flags|=1,$t(t,e,i,r),e.child)}function Yp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!_h(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Bv(t,e,o,i,r)):(t=_l(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(s,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=or(o,i),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Xs(o,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return xf(t,e,n,i,r)}function Hv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(wo,gn),gn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(wo,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ut(wo,gn),gn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ut(wo,gn),gn|=i;return $t(t,e,r,n),e.child}function Vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xf(t,e,n,i,r){var o=an(n)?Or:Xt.current;return o=Oo(e,o),Po(e,r),n=sh(t,e,n,i,o,r),i=ah(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&i&&Yd(e),e.flags|=1,$t(t,e,n,r),e.child)}function $p(t,e,n,i,r){if(an(n)){var o=!0;kl(e)}else o=!1;if(Po(e,r),e.stateNode===null)pl(t,e),Fv(e,n,i),_f(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=an(n)?Or:Xt.current,u=Oo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Gp(e,s,i,u),ji=!1;var h=e.memoizedState;s.state=h,Hl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||sn.current||ji?(typeof c=="function"&&(gf(e,n,c,i),l=e.memoizedState),(a=ji||Vp(e,n,a,i,h,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,gv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,f=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=an(n)?Or:Xt.current,l=Oo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Gp(e,s,i,l),ji=!1,h=e.memoizedState,s.state=h,Hl(e,i,s,r);var g=e.memoizedState;a!==f||h!==g||sn.current||ji?(typeof p=="function"&&(gf(e,n,p,i),g=e.memoizedState),(u=ji||Vp(e,n,u,i,h,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return yf(t,e,n,i,o,r)}function yf(t,e,n,i,r,o){Vv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Np(e,n,!1),Pi(t,e,o);i=e.stateNode,NS.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Bo(e,t.child,null,o),e.child=Bo(e,null,a,o)):$t(t,e,a,o),e.memoizedState=i.state,r&&Np(e,n,!0),e.child}function Gv(t){var e=t.stateNode;e.pendingContext?Dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Dp(t,e.context,!1),nh(t,e.containerInfo)}function Kp(t,e,n,i,r){return zo(),Kd(r),e.flags|=256,$t(t,e,n,i),e.child}var Sf={dehydrated:null,treeContext:null,retryLane:0};function Ef(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return pf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=du(s,i,0,null),t=kr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Ef(n),e.memoizedState=Sf,t):ch(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return US(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=or(a,o):(o=kr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Ef(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Sf,i}return o=t.child,t=o.sibling,i=or(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function ch(t,e){return e=du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function La(t,e,n,i){return i!==null&&Kd(i),Bo(e,t.child,null,n),t=ch(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function US(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=qu(Error(se(422))),La(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=du({mode:"visible",children:i.children},r,0,null),o=kr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Bo(e,t.child,null,s),e.child.memoizedState=Ef(s),e.memoizedState=Sf,o);if(!(e.mode&1))return La(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(se(419)),i=qu(o,i,void 0),La(t,e,s,i)}if(a=(s&t.childLanes)!==0,on||a){if(i=Ut,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,bi(t,r),Yn(i,t,r,-1))}return gh(),i=qu(Error(se(421))),La(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,_n=tr(r.nextSibling),xn=e,mt=!0,Gn=null,t!==null&&(Cn[Rn++]=Si,Cn[Rn++]=Ei,Cn[Rn++]=zr,Si=t.id,Ei=t.overflow,zr=e),e=ch(e,i.children),e.flags|=4096,e)}function Zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),mf(t.return,e,n)}function Yu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Xv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if($t(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zp(t,n,e);else if(t.tag===19)Zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Vl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yu(e,!0,n,null,o);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kS(t,e,n){switch(e.tag){case 3:Gv(e),zo();break;case 5:_v(e);break;case 1:an(e.type)&&kl(e);break;case 4:nh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(zl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(ut(_t,_t.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Xv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Hv(t,e,n)}return Pi(t,e,n)}var jv,Mf,qv,Yv;jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Mf=function(){};qv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(ai.current);var o=null;switch(n){case"input":r=Wc(t,r),i=Wc(t,i),o=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),o=[];break;case"textarea":r=qc(t,r),i=qc(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nl)}$c(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Os.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Os.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function ds(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function FS(t,e,n){var i=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return an(e.type)&&Ul(),Ht(e),null;case 3:return i=e.stateNode,Ho(),pt(sn),pt(Xt),rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(Lf(Gn),Gn=null))),Mf(t,e),Ht(e),null;case 5:ih(e);var r=Ir(Ks.current);if(n=e.type,t!==null&&e.stateNode!=null)qv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ht(e),null}if(t=Ir(ai.current),ba(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[Ys]=o,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<ws.length;r++)ht(ws[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":sp(i,o),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ht("invalid",i);break;case"textarea":lp(i,o),ht("invalid",i)}$c(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Ra(i.textContent,a,t),r=["children",""+a]):Os.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ht("scroll",i)}switch(n){case"input":ya(i),ap(i,o,!0);break;case"textarea":ya(i),up(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Nl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=E_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[Ys]=i,jv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Kc(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<ws.length;r++)ht(ws[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":sp(t,i),r=Wc(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":lp(t,i),r=qc(t,i),ht("invalid",t);break;default:r=i}$c(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?T_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zs(t,l):typeof l=="number"&&zs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Os.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ht("scroll",t):l!=null&&Nd(t,o,l,s))}switch(n){case"input":ya(t),ap(t,i,!1);break;case"textarea":ya(t),up(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Ao(t,!!i.multiple,o,!1):i.defaultValue!=null&&Ao(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Ir(Ks.current),Ir(ai.current),ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Ra(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ra(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Ht(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&_n!==null&&e.mode&1&&!(e.flags&128))dv(),zo(),e.flags|=98560,o=!1;else if(o=ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[ni]=e}else zo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),o=!1}else Gn!==null&&(Lf(Gn),Gn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?bt===0&&(bt=3):gh())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Ho(),Mf(t,e),t===null&&js(e.stateNode.containerInfo),Ht(e),null;case 10:return Jd(e.type._context),Ht(e),null;case 17:return an(e.type)&&Ul(),Ht(e),null;case 19:if(pt(_t),o=e.memoizedState,o===null)return Ht(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)ds(o,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Vl(t),s!==null){for(e.flags|=128,ds(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>Go&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304)}else{if(!i)if(t=Vl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!mt)return Ht(e),null}else 2*Et()-o.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,ds(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return mh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function OS(t,e){switch($d(e),e.tag){case 1:return an(e.type)&&Ul(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),pt(sn),pt(Xt),rh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ih(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));zo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return Ho(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return mh(),null;case 24:return null;default:return null}}var Ia=!1,Wt=!1,zS=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Mo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function wf(t,e,n){try{n()}catch(i){St(t,e,i)}}var Qp=!1;function BS(t,e){if(af=Ll,t=J_(),qd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=s+r),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lf={focusedElem:t,selectionRange:n},Ll=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=Qp,Qp=!1,g}function Ds(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&wf(e,n,o)}r=r.next}while(r!==i)}}function cu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $v(t){var e=t.alternate;e!==null&&(t.alternate=null,$v(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ys],delete e[ff],delete e[ES],delete e[MS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kv(t){return t.tag===5||t.tag===3||t.tag===4}function Jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nl));else if(i!==4&&(t=t.child,t!==null))for(Af(t,e,n),t=t.sibling;t!==null;)Af(t,e,n),t=t.sibling}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(nu,n)}catch{}switch(n.tag){case 5:Wt||Mo(n,e);case 6:var i=kt,r=Vn;kt=null,Fi(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Hu(t.parentNode,n):t.nodeType===1&&Hu(t,n),Gs(t)):Hu(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Fi(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&wf(n,e,s),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Wt&&(Mo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Fi(t,e,n),Wt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function em(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zS),e.forEach(function(i){var r=$S.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(se(160));Zv(o,s,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Qv(e,t),e=e.sibling}function Qv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Qn(t),i&4){try{Ds(3,t,t.return),cu(3,t)}catch(x){St(t,t.return,x)}try{Ds(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Fn(e,t),Qn(t),i&512&&n!==null&&Mo(n,n.return);break;case 5:if(Fn(e,t),Qn(t),i&512&&n!==null&&Mo(n,n.return),t.flags&32){var r=t.stateNode;try{zs(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&y_(r,o),Kc(a,s);var u=Kc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?T_(r,f):c==="dangerouslySetInnerHTML"?M_(r,f):c==="children"?zs(r,f):Nd(r,c,f,u)}switch(a){case"input":Xc(r,o);break;case"textarea":S_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Ao(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Ao(r,!!o.multiple,o.defaultValue,!0):Ao(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ys]=o}catch(x){St(t,t.return,x)}}break;case 6:if(Fn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){St(t,t.return,x)}}break;case 3:if(Fn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Gs(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Fn(e,t),Qn(t);break;case 13:Fn(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(hh=Et())),i&4&&em(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,Fn(e,t),Wt=u):Fn(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ye=t,c=t.child;c!==null;){for(f=ye=c;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ds(4,h,h.return);break;case 1:Mo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Mo(h,h.return);break;case 22:if(h.memoizedState!==null){nm(f);continue}}p!==null?(p.return=h,ye=p):nm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=w_("display",s))}catch(x){St(t,t.return,x)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(x){St(t,t.return,x)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fn(e,t),Qn(t),i&4&&em(t);break;case 21:break;default:Fn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(zs(r,""),i.flags&=-33);var o=Jp(t);Cf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Jp(t);Af(t,a,s);break;default:throw Error(se(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function HS(t,e,n){ye=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Ia;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Ia;var u=Wt;if(Ia=s,(Wt=l)&&!u)for(ye=r;ye!==null;)s=ye,l=s.child,s.tag===22&&s.memoizedState!==null?im(r):l!==null?(l.return=s,ye=l):im(r);for(;o!==null;)ye=o,Jv(o),o=o.sibling;ye=r,Ia=a,Wt=u}tm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ye=o):tm(t)}}function tm(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||cu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Gs(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Wt||e.flags&512&&Tf(e)}catch(h){St(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function nm(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function im(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{Tf(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{Tf(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var VS=Math.ceil,Xl=Ni.ReactCurrentDispatcher,fh=Ni.ReactCurrentOwner,Ln=Ni.ReactCurrentBatchConfig,Ye=0,Ut=null,At=null,Ft=0,gn=0,wo=dr(0),bt=0,ea=null,Hr=0,fu=0,dh=0,Ns=null,nn=null,hh=0,Go=1/0,vi=null,jl=!1,Rf=null,ir=null,Da=!1,Zi=null,ql=0,Us=0,bf=null,ml=-1,gl=0;function Kt(){return Ye&6?Et():ml!==-1?ml:ml=Et()}function rr(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:TS.transition!==null?(gl===0&&(gl=F_()),gl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:W_(t.type)),t):1}function Yn(t,e,n,i){if(50<Us)throw Us=0,bf=null,Error(se(185));ra(t,n,i),(!(Ye&2)||t!==Ut)&&(t===Ut&&(!(Ye&2)&&(fu|=n),bt===4&&Yi(t,Ft)),ln(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Go=Et()+500,au&&hr()))}function ln(t,e){var n=t.callbackNode;Ty(t,e);var i=Pl(t,t===Ut?Ft:0);if(i===0)n!==null&&dp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&dp(n),e===1)t.tag===0?wS(rm.bind(null,t)):uv(rm.bind(null,t)),yS(function(){!(Ye&6)&&hr()}),n=null;else{switch(O_(i)){case 1:n=zd;break;case 4:n=U_;break;case 16:n=bl;break;case 536870912:n=k_;break;default:n=bl}n=a0(n,e0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function e0(t,e){if(ml=-1,gl=0,Ye&6)throw Error(se(327));var n=t.callbackNode;if(Lo()&&t.callbackNode!==n)return null;var i=Pl(t,t===Ut?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=Ye;Ye|=2;var o=n0();(Ut!==t||Ft!==e)&&(vi=null,Go=Et()+500,Ur(t,e));do try{XS();break}catch(a){t0(t,a)}while(!0);Qd(),Xl.current=o,Ye=r,At!==null?e=0:(Ut=null,Ft=0,e=bt)}if(e!==0){if(e===2&&(r=tf(t),r!==0&&(i=r,e=Pf(t,r))),e===1)throw n=ea,Ur(t,0),Yi(t,i),ln(t,Et()),n;if(e===6)Yi(t,i);else{if(r=t.current.alternate,!(i&30)&&!GS(r)&&(e=Yl(t,i),e===2&&(o=tf(t),o!==0&&(i=o,e=Pf(t,o))),e===1))throw n=ea,Ur(t,0),Yi(t,i),ln(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:wr(t,nn,vi);break;case 3:if(Yi(t,i),(i&130023424)===i&&(e=hh+500-Et(),10<e)){if(Pl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=cf(wr.bind(null,t,nn,vi),e);break}wr(t,nn,vi);break;case 4:if(Yi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*VS(i/1960))-i,10<i){t.timeoutHandle=cf(wr.bind(null,t,nn,vi),i);break}wr(t,nn,vi);break;case 5:wr(t,nn,vi);break;default:throw Error(se(329))}}}return ln(t,Et()),t.callbackNode===n?e0.bind(null,t):null}function Pf(t,e){var n=Ns;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Lf(e)),t}function Lf(t){nn===null?nn=t:nn.push.apply(nn,t)}function GS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Kn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Yi(t,e){for(e&=~dh,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function rm(t){if(Ye&6)throw Error(se(327));Lo();var e=Pl(t,0);if(!(e&1))return ln(t,Et()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=tf(t);i!==0&&(e=i,n=Pf(t,i))}if(n===1)throw n=ea,Ur(t,0),Yi(t,e),ln(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,nn,vi),ln(t,Et()),null}function ph(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Go=Et()+500,au&&hr())}}function Vr(t){Zi!==null&&Zi.tag===0&&!(Ye&6)&&Lo();var e=Ye;Ye|=1;var n=Ln.transition,i=tt;try{if(Ln.transition=null,tt=1,t)return t()}finally{tt=i,Ln.transition=n,Ye=e,!(Ye&6)&&hr()}}function mh(){gn=wo.current,pt(wo)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,xS(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch($d(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ul();break;case 3:Ho(),pt(sn),pt(Xt),rh();break;case 5:ih(i);break;case 4:Ho();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:Jd(i.type._context);break;case 22:case 23:mh()}n=n.return}if(Ut=t,At=t=or(t.current,null),Ft=gn=e,bt=0,ea=null,dh=fu=Hr=0,nn=Ns=null,Lr!==null){for(e=0;e<Lr.length;e++)if(n=Lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Lr=null}return t}function t0(t,e){do{var n=At;try{if(Qd(),dl.current=Wl,Gl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gl=!1}if(Br=0,Nt=Rt=vt=null,Is=!1,Zs=0,fh.current=null,n===null||n.return===null){bt=1,ea=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Xp(s);if(p!==null){p.flags&=-257,jp(p,s,a,o,e),p.mode&1&&Wp(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Wp(o,u,e),gh();break e}l=Error(se(426))}}else if(mt&&a.mode&1){var m=Xp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),jp(m,s,a,o,e),Kd(Vo(l,a));break e}}o=l=Vo(l,a),bt!==4&&(bt=2),Ns===null?Ns=[o]:Ns.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var d=Ov(o,l,e);Op(o,d);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=zv(o,a,e);Op(o,y);break e}}o=o.return}while(o!==null)}r0(n)}catch(L){e=L,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function n0(){var t=Xl.current;return Xl.current=Wl,t===null?Wl:t}function gh(){(bt===0||bt===3||bt===2)&&(bt=4),Ut===null||!(Hr&268435455)&&!(fu&268435455)||Yi(Ut,Ft)}function Yl(t,e){var n=Ye;Ye|=2;var i=n0();(Ut!==t||Ft!==e)&&(vi=null,Ur(t,e));do try{WS();break}catch(r){t0(t,r)}while(!0);if(Qd(),Ye=n,Xl.current=i,At!==null)throw Error(se(261));return Ut=null,Ft=0,bt}function WS(){for(;At!==null;)i0(At)}function XS(){for(;At!==null&&!gy();)i0(At)}function i0(t){var e=s0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?r0(t):At=e,fh.current=null}function r0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=OS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,At=null;return}}else if(n=FS(n,e,gn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);bt===0&&(bt=5)}function wr(t,e,n){var i=tt,r=Ln.transition;try{Ln.transition=null,tt=1,jS(t,e,n,i)}finally{Ln.transition=r,tt=i}return null}function jS(t,e,n,i){do Lo();while(Zi!==null);if(Ye&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ay(t,o),t===Ut&&(At=Ut=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Da||(Da=!0,a0(bl,function(){return Lo(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ln.transition,Ln.transition=null;var s=tt;tt=1;var a=Ye;Ye|=4,fh.current=null,BS(t,n),Qv(n,t),dS(lf),Ll=!!af,lf=af=null,t.current=n,HS(n),_y(),Ye=a,tt=s,Ln.transition=o}else t.current=n;if(Da&&(Da=!1,Zi=t,ql=r),o=t.pendingLanes,o===0&&(ir=null),yy(n.stateNode),ln(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(jl)throw jl=!1,t=Rf,Rf=null,t;return ql&1&&t.tag!==0&&Lo(),o=t.pendingLanes,o&1?t===bf?Us++:(Us=0,bf=t):Us=0,hr(),null}function Lo(){if(Zi!==null){var t=O_(ql),e=Ln.transition,n=tt;try{if(Ln.transition=null,tt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,ql=0,Ye&6)throw Error(se(331));var r=Ye;for(Ye|=4,ye=t.current;ye!==null;){var o=ye,s=o.child;if(ye.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ye=u;ye!==null;){var c=ye;switch(c.tag){case 0:case 11:case 15:Ds(8,c,o)}var f=c.child;if(f!==null)f.return=c,ye=f;else for(;ye!==null;){c=ye;var h=c.sibling,p=c.return;if($v(c),c===u){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ye=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ye=s;else e:for(;ye!==null;){if(o=ye,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ds(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,ye=d;break e}ye=o.return}}var _=t.current;for(ye=_;ye!==null;){s=ye;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ye=v;else e:for(s=_;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cu(9,a)}}catch(L){St(a,a.return,L)}if(a===s){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Ye=r,hr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(nu,t)}catch{}i=!0}return i}finally{tt=n,Ln.transition=e}}return!1}function om(t,e,n){e=Vo(n,e),e=Ov(t,e,1),t=nr(t,e,1),e=Kt(),t!==null&&(ra(t,1,e),ln(t,e))}function St(t,e,n){if(t.tag===3)om(t,t,n);else for(;e!==null;){if(e.tag===3){om(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Vo(n,t),t=zv(e,t,1),e=nr(e,t,1),t=Kt(),e!==null&&(ra(e,1,t),ln(e,t));break}}e=e.return}}function qS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ft&n)===n&&(bt===4||bt===3&&(Ft&130023424)===Ft&&500>Et()-hh?Ur(t,0):dh|=n),ln(t,e)}function o0(t,e){e===0&&(t.mode&1?(e=Ma,Ma<<=1,!(Ma&130023424)&&(Ma=4194304)):e=1);var n=Kt();t=bi(t,e),t!==null&&(ra(t,e,n),ln(t,n))}function YS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o0(t,n)}function $S(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),o0(t,n)}var s0;s0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,kS(t,e,n);on=!!(t.flags&131072)}else on=!1,mt&&e.flags&1048576&&cv(e,Ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pl(t,e),t=e.pendingProps;var r=Oo(e,Xt.current);Po(e,n),r=sh(null,e,i,t,r,n);var o=ah();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(o=!0,kl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,th(e),r.updater=uu,e.stateNode=r,r._reactInternals=e,_f(e,i,t,n),e=yf(null,e,i,!0,o,n)):(e.tag=0,mt&&o&&Yd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ZS(i),t=Hn(i,t),r){case 0:e=xf(null,e,i,t,n);break e;case 1:e=$p(null,e,i,t,n);break e;case 11:e=qp(null,e,i,t,n);break e;case 14:e=Yp(null,e,i,Hn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),xf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$p(t,e,i,r,n);case 3:e:{if(Gv(e),t===null)throw Error(se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,gv(t,e),Hl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Vo(Error(se(423)),e),e=Kp(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(se(424)),e),e=Kp(t,e,i,n,r);break e}else for(_n=tr(e.stateNode.containerInfo.firstChild),xn=e,mt=!0,Gn=null,n=pv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zo(),i===r){e=Pi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return _v(e),t===null&&pf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,uf(i,r)?s=null:o!==null&&uf(i,o)&&(e.flags|=32),Vv(t,e),$t(t,e,s,n),e.child;case 6:return t===null&&pf(e),null;case 13:return Wv(t,e,n);case 4:return nh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Bo(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),qp(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ut(zl,i._currentValue),i._currentValue=s,o!==null)if(Kn(o.value,s)){if(o.children===r.children&&!sn.current){e=Pi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),mf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(se(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),mf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Po(e,n),r=In(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Yp(t,e,i,r,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),pl(t,e),e.tag=1,an(i)?(t=!0,kl(e)):t=!1,Po(e,n),Fv(e,i,r),_f(e,i,r,n),yf(null,e,i,!0,t,n);case 19:return Xv(t,e,n);case 22:return Hv(t,e,n)}throw Error(se(156,e.tag))};function a0(t,e){return N_(t,e)}function KS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new KS(t,e,n,i)}function _h(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZS(t){if(typeof t=="function")return _h(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kd)return 11;if(t===Fd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _l(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")_h(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case po:return kr(n.children,r,o,e);case Ud:s=8,r|=8;break;case Bc:return t=Pn(12,n,e,r|2),t.elementType=Bc,t.lanes=o,t;case Hc:return t=Pn(13,n,e,r),t.elementType=Hc,t.lanes=o,t;case Vc:return t=Pn(19,n,e,r),t.elementType=Vc,t.lanes=o,t;case __:return du(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case m_:s=10;break e;case g_:s=9;break e;case kd:s=11;break e;case Fd:s=14;break e;case Xi:s=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function kr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function du(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=__,t.lanes=n,t.stateNode={isHidden:!1},t}function $u(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Ku(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function QS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function vh(t,e,n,i,r,o,s,a,l){return t=new QS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},th(o),t}function JS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ho,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function l0(t){if(!t)return ur;t=t._reactInternals;e:{if(jr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return lv(t,n,e)}return e}function u0(t,e,n,i,r,o,s,a,l){return t=vh(n,i,!0,t,r,o,s,a,l),t.context=l0(null),n=t.current,i=Kt(),r=rr(n),o=Ti(i,r),o.callback=e??null,nr(n,o,r),t.current.lanes=r,ra(t,r,i),ln(t,i),t}function hu(t,e,n,i){var r=e.current,o=Kt(),s=rr(r);return n=l0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,s),t!==null&&(Yn(t,r,s,o),fl(t,r,s)),s}function $l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function sm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function xh(t,e){sm(t,e),(t=t.alternate)&&sm(t,e)}function eE(){return null}var c0=typeof reportError=="function"?reportError:function(t){console.error(t)};function yh(t){this._internalRoot=t}pu.prototype.render=yh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));hu(t,e,null,null)};pu.prototype.unmount=yh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){hu(null,t,null,null)}),e[Ri]=null}};function pu(t){this._internalRoot=t}pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=H_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&G_(t)}};function Sh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function am(){}function tE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=$l(s);o.call(u)}}var s=u0(e,i,t,0,null,!1,!1,"",am);return t._reactRootContainer=s,t[Ri]=s.current,js(t.nodeType===8?t.parentNode:t),Vr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=$l(l);a.call(u)}}var l=vh(t,0,!1,null,null,!1,!1,"",am);return t._reactRootContainer=l,t[Ri]=l.current,js(t.nodeType===8?t.parentNode:t),Vr(function(){hu(e,l,n,i)}),l}function gu(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=$l(s);a.call(l)}}hu(e,s,t,r)}else s=tE(n,e,t,r,i);return $l(s)}z_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Bd(e,n|1),ln(e,Et()),!(Ye&6)&&(Go=Et()+500,hr()))}break;case 13:Vr(function(){var i=bi(t,1);if(i!==null){var r=Kt();Yn(i,t,1,r)}}),xh(t,1)}};Hd=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Kt();Yn(e,t,134217728,n)}xh(t,134217728)}};B_=function(t){if(t.tag===13){var e=rr(t),n=bi(t,e);if(n!==null){var i=Kt();Yn(n,t,e,i)}xh(t,e)}};H_=function(){return tt};V_=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Qc=function(t,e,n){switch(e){case"input":if(Xc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=su(i);if(!r)throw Error(se(90));x_(i),Xc(i,r)}}}break;case"textarea":S_(t,n);break;case"select":e=n.value,e!=null&&Ao(t,!!n.multiple,e,!1)}};R_=ph;b_=Vr;var nE={usingClientEntryPoint:!1,Events:[sa,vo,su,A_,C_,ph]},hs={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iE={bundleType:hs.bundleType,version:hs.version,rendererPackageName:hs.rendererPackageName,rendererConfig:hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=I_(t),t===null?null:t.stateNode},findFiberByHostInstance:hs.findFiberByHostInstance||eE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{nu=Na.inject(iE),si=Na}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nE;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sh(e))throw Error(se(200));return JS(t,e,null,n)};En.createRoot=function(t,e){if(!Sh(t))throw Error(se(299));var n=!1,i="",r=c0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=vh(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,js(t.nodeType===8?t.parentNode:t),new yh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=I_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Vr(t)};En.hydrate=function(t,e,n){if(!mu(e))throw Error(se(200));return gu(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Sh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=c0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=u0(e,null,t,1,n??null,r,!1,o,s),t[Ri]=e.current,js(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new pu(e)};En.render=function(t,e,n){if(!mu(e))throw Error(se(200));return gu(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!mu(t))throw Error(se(40));return t._reactRootContainer?(Vr(function(){gu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=ph;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!mu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return gu(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),f_.exports=En;var rE=f_.exports,lm=rE;Oc.createRoot=lm.createRoot,Oc.hydrateRoot=lm.hydrateRoot;const oE="/terminal-portfolio/assets/img/plastic2.jpg",sE="/terminal-portfolio/assets/img/hbm.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="170",aE=0,um=1,lE=2,d0=1,uE=2,_i=3,cr=0,un=1,yi=2,sr=0,Io=1,cm=2,fm=3,dm=4,cE=5,Cr=100,fE=101,dE=102,hE=103,pE=104,mE=200,gE=201,_E=202,vE=203,If=204,Df=205,xE=206,yE=207,SE=208,EE=209,ME=210,wE=211,TE=212,AE=213,CE=214,Nf=0,Uf=1,kf=2,Wo=3,Ff=4,Of=5,zf=6,Bf=7,h0=0,RE=1,bE=2,ar=0,PE=1,LE=2,IE=3,DE=4,NE=5,UE=6,kE=7,p0=300,Xo=301,jo=302,Hf=303,Vf=304,_u=306,Gf=1e3,Dr=1001,Wf=1002,$n=1003,FE=1004,Ua=1005,ri=1006,Zu=1007,Nr=1008,Li=1009,m0=1010,g0=1011,ta=1012,Mh=1013,Gr=1014,Mi=1015,la=1016,wh=1017,Th=1018,qo=1020,_0=35902,v0=1021,x0=1022,jn=1023,y0=1024,S0=1025,Do=1026,Yo=1027,E0=1028,Ah=1029,M0=1030,Ch=1031,Rh=1033,vl=33776,xl=33777,yl=33778,Sl=33779,Xf=35840,jf=35841,qf=35842,Yf=35843,$f=36196,Kf=37492,Zf=37496,Qf=37808,Jf=37809,ed=37810,td=37811,nd=37812,id=37813,rd=37814,od=37815,sd=37816,ad=37817,ld=37818,ud=37819,cd=37820,fd=37821,El=36492,dd=36494,hd=36495,w0=36283,pd=36284,md=36285,gd=36286,OE=3200,zE=3201,BE=0,HE=1,$i="",An="srgb",Jo="srgb-linear",vu="linear",rt="srgb",Zr=7680,hm=519,VE=512,GE=513,WE=514,T0=515,XE=516,jE=517,qE=518,YE=519,pm=35044,mm="300 es",wi=2e3,Kl=2001;class es{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qu=Math.PI/180,_d=180/Math.PI;function ua(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function $E(t,e){return(t%e+e)%e}function Ju(t,e,n){return(1-n)*t+n*e}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],_=r[1],v=r[4],y=r[7],L=r[2],E=r[5],C=r[8];return o[0]=s*x+a*_+l*L,o[3]=s*m+a*v+l*E,o[6]=s*d+a*y+l*C,o[1]=u*x+c*_+f*L,o[4]=u*m+c*v+f*E,o[7]=u*d+c*y+f*C,o[2]=h*x+p*_+g*L,o[5]=h*m+p*v+g*E,o[8]=h*d+p*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*s-a*u,h=a*l-c*o,p=u*o-s*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ec.makeScale(e,n)),this}rotate(e){return this.premultiply(ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ec=new Be;function A0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KE(){const t=Zl("canvas");return t.style.display="block",t}const gm={};function Ts(t){t in gm||(gm[t]=!0,console.warn(t))}function ZE(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function QE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===rt&&(t.r=Ai(t.r),t.g=Ai(t.g),t.b=Ai(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===rt&&(t.r=No(t.r),t.g=No(t.g),t.b=No(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===$i?vu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function No(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const _m=[.64,.33,.3,.6,.15,.06],vm=[.2126,.7152,.0722],xm=[.3127,.329],ym=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Jo]:{primaries:_m,whitePoint:xm,transfer:vu,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:_m,whitePoint:xm,transfer:rt,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:vm,outputColorSpaceConfig:{drawingBufferColorSpace:An}}});let Qr;class eM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qr===void 0&&(Qr=Zl("canvas")),Qr.width=e.width,Qr.height=e.height;const i=Qr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Qr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ai(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class C0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(tc(r[s].image)):o.push(tc(r[s]))}else o=tc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function tc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?eM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0;class cn extends es{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Dr,r=Dr,o=ri,s=Nr,a=jn,l=Li,u=cn.DEFAULT_ANISOTROPY,c=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ua(),this.name="",this.source=new C0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gf:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case Wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gf:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case Wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=p0;cn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(p+1)/2,L=(d+1)/2,E=(c+h)/4,C=(f+x)/4,b=(g+m)/4;return v>y&&v>L?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=E/i,o=C/i):y>L?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=E/r,o=b/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=C/o,r=b/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends es{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new C0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends iM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class R0 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class rM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=$n,this.minFilter=$n,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=o[s+0],p=o[s+1],g=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*x,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const L=Math.sqrt(v),E=Math.atan2(L,d*_);m=Math.sin(m*E)/L,a=Math.sin(a*E)/L}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+g*y,f=f*m+x*y,m===1-a){const L=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=L,u*=L,c*=L,f*=L}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=o[s],h=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-a*p,e[n+2]=u*g+c*p+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,n=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Em.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Em.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*u+s*f-a*c,this.y=i+l*c+a*u-o*f,this.z=r+l*f+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return nc.copy(this).projectOnVector(e),this.sub(nc)}reflect(e){return this.sub(nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nc=new X,Em=new ca;class fa{constructor(e=new X(1/0,1/0,1/0),n=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(o,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ka.copy(i.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),Fa.subVectors(this.max,ms),Jr.subVectors(e.a,ms),eo.subVectors(e.b,ms),to.subVectors(e.c,ms),Oi.subVectors(eo,Jr),zi.subVectors(to,eo),gr.subVectors(Jr,to);let n=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-gr.z,gr.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,gr.z,0,-gr.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-gr.y,gr.x,0];return!ic(n,Jr,eo,to,Fa)||(n=[1,0,0,0,1,0,0,0,1],!ic(n,Jr,eo,to,Fa))?!1:(Oa.crossVectors(Oi,zi),n=[Oa.x,Oa.y,Oa.z],ic(n,Jr,eo,to,Fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new X,new X,new X,new X,new X,new X,new X,new X],On=new X,ka=new fa,Jr=new X,eo=new X,to=new X,Oi=new X,zi=new X,gr=new X,ms=new X,Fa=new X,Oa=new X,_r=new X;function ic(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){_r.fromArray(t,o);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=n.dot(_r),c=i.dot(_r);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const oM=new fa,gs=new X,rc=new X;class bh{constructor(e=new X,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const n=gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(rc)),this.expandByPoint(gs.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new X,oc=new X,za=new X,Bi=new X,sc=new X,Ba=new X,ac=new X;class sM{constructor(e=new X,n=new X(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oc.copy(e).add(n).multiplyScalar(.5),za.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(za),a=Bi.dot(this.direction),l=-Bi.dot(za),u=Bi.lengthSq(),c=Math.abs(1-s*s);let f,h,p,g;if(c>0)if(f=s*l-a,h=s*a-l,g=o*c,f>=0)if(h>=-g)if(h<=g){const x=1/c;f*=x,h*=x,p=f*(f+s*h+2*a)+h*(s*f+h+2*l)+u}else h=o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h=-o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-s*o+a)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(f=Math.max(0,-(s*o+a)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+u);else h=s>0?-o:o,f=Math.max(0,-(s*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(oc).addScaledVector(za,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){sc.subVectors(n,e),Ba.subVectors(i,e),ac.crossVectors(sc,Ba);let s=this.direction.dot(ac),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ba.crossVectors(Bi,Ba));if(l<0)return null;const u=a*this.direction.dot(sc.cross(Bi));if(u<0||l+u>s)return null;const c=-a*Bi.dot(ac);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,s,a,l,u,c,f,h,p,g,x,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,f,h,p,g,x,m)}set(e,n,i,r,o,s,a,l,u,c,f,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=o,d[5]=s,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/no.setFromMatrixColumn(e,0).length(),o=1/no.setFromMatrixColumn(e,1).length(),s=1/no.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=s*c,p=s*f,g=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,x=u*f;n[0]=h+x*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*f,n[5]=s*c,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,x=u*f;n[0]=h-x*a,n[4]=-s*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,p=s*f,g=a*c,x=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+x,n[1]=l*f,n[5]=x*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-h*f,n[8]=g*f+p,n[1]=f,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-x*f}else if(e.order==="XZY"){const h=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+x,n[5]=s*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,lM)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Hi.crossVectors(i,hn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Hi.crossVectors(i,hn)),Hi.normalize(),Ha.crossVectors(hn,Hi),r[0]=Hi.x,r[4]=Ha.x,r[8]=hn.x,r[1]=Hi.y,r[5]=Ha.y,r[9]=hn.y,r[2]=Hi.z,r[6]=Ha.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],_=i[3],v=i[7],y=i[11],L=i[15],E=r[0],C=r[4],b=r[8],w=r[12],S=r[1],R=r[5],U=r[9],B=r[13],Y=r[2],W=r[6],q=r[10],Q=r[14],N=r[3],Z=r[7],A=r[11],le=r[15];return o[0]=s*E+a*S+l*Y+u*N,o[4]=s*C+a*R+l*W+u*Z,o[8]=s*b+a*U+l*q+u*A,o[12]=s*w+a*B+l*Q+u*le,o[1]=c*E+f*S+h*Y+p*N,o[5]=c*C+f*R+h*W+p*Z,o[9]=c*b+f*U+h*q+p*A,o[13]=c*w+f*B+h*Q+p*le,o[2]=g*E+x*S+m*Y+d*N,o[6]=g*C+x*R+m*W+d*Z,o[10]=g*b+x*U+m*q+d*A,o[14]=g*w+x*B+m*Q+d*le,o[3]=_*E+v*S+y*Y+L*N,o[7]=_*C+v*R+y*W+L*Z,o[11]=_*b+v*U+y*q+L*A,o[15]=_*w+v*B+y*Q+L*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15];return g*(+o*l*f-r*u*f-o*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*c-o*l*c)+m*(+n*u*f-n*a*p-o*s*f+i*s*p+o*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*s*f-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],_=f*m*u-x*h*u+x*l*p-a*m*p-f*l*d+a*h*d,v=g*h*u-c*m*u-g*l*p+s*m*p+c*l*d-s*h*d,y=c*x*u-g*f*u+g*a*p-s*x*p-c*a*d+s*f*d,L=g*f*l-c*x*l-g*a*h+s*x*h+c*a*m-s*f*m,E=n*_+i*v+r*y+o*L;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(x*h*o-f*m*o-x*r*p+i*m*p+f*r*d-i*h*d)*C,e[2]=(a*m*o-x*l*o+x*r*u-i*m*u-a*r*d+i*l*d)*C,e[3]=(f*l*o-a*h*o-f*r*u+i*h*u+a*r*p-i*l*p)*C,e[4]=v*C,e[5]=(c*m*o-g*h*o+g*r*p-n*m*p-c*r*d+n*h*d)*C,e[6]=(g*l*o-s*m*o-g*r*u+n*m*u+s*r*d-n*l*d)*C,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*p+n*l*p)*C,e[8]=y*C,e[9]=(g*f*o-c*x*o-g*i*p+n*x*p+c*i*d-n*f*d)*C,e[10]=(s*x*o-g*a*o+g*i*u-n*x*u-s*i*d+n*a*d)*C,e[11]=(c*a*o-s*f*o-c*i*u+n*f*u+s*i*p-n*a*p)*C,e[12]=L*C,e[13]=(c*x*r-g*f*r+g*i*h-n*x*h-c*i*m+n*f*m)*C,e[14]=(g*a*r-s*x*r-g*i*l+n*x*l+s*i*m-n*a*m)*C,e[15]=(s*f*r-c*a*r+c*i*l-n*f*l-s*i*h+n*a*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,f=a+a,h=o*u,p=o*c,g=o*f,x=s*c,m=s*f,d=a*f,_=l*u,v=l*c,y=l*f,L=i.x,E=i.y,C=i.z;return r[0]=(1-(x+d))*L,r[1]=(p+y)*L,r[2]=(g-v)*L,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+d))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(g+v)*C,r[9]=(m-_)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=no.set(r[0],r[1],r[2]).length();const s=no.set(r[4],r[5],r[6]).length(),a=no.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/o,c=1/s,f=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=f,zn.elements[9]*=f,zn.elements[10]*=f,n.setFromRotationMatrix(zn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=wi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===wi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Kl)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(s-o),h=(n+e)*u,p=(i+r)*c;let g,x;if(a===wi)g=(s+o)*f,x=-2*f;else if(a===Kl)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const no=new X,zn=new Ct,aM=new X(0,0,0),lM=new X(1,1,1),Hi=new X,Ha=new X,hn=new X,Mm=new Ct,wm=new ca;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class b0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uM=0;const Tm=new X,io=new ca,pi=new Ct,Va=new X,_s=new X,cM=new X,fM=new ca,Am=new X(1,0,0),Cm=new X(0,1,0),Rm=new X(0,0,1),bm={type:"added"},dM={type:"removed"},ro={type:"childadded",child:null},lc={type:"childremoved",child:null};class yn extends es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new X,n=new Ii,i=new ca,r=new X(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Be}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new b0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.multiply(io),this}rotateOnWorldAxis(e,n){return io.setFromAxisAngle(e,n),this.quaternion.premultiply(io),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Va.copy(e):Va.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(_s,Va,this.up):pi.lookAt(Va,_s,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),io.setFromRotationMatrix(pi),this.quaternion.premultiply(io.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bm),ro.child=e,this.dispatchEvent(ro),ro.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM),lc.child=e,this.dispatchEvent(lc),lc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bm),ro.child=e,this.dispatchEvent(ro),ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,fM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new X(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new X,mi=new X,uc=new X,gi=new X,oo=new X,so=new X,Pm=new X,cc=new X,fc=new X,dc=new X,hc=new Mt,pc=new Mt,mc=new Mt;class Xn{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Bn.subVectors(r,n),mi.subVectors(i,n),uc.subVectors(e,n);const s=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(uc),u=mi.dot(mi),c=mi.dot(uc),f=s*u-a*a;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(s*c-a*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return hc.setScalar(0),pc.setScalar(0),mc.setScalar(0),hc.fromBufferAttribute(e,n),pc.fromBufferAttribute(e,i),mc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(hc,o.x),s.addScaledVector(pc,o.y),s.addScaledVector(mc,o.z),s}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),mi.subVectors(e,n),Bn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;oo.subVectors(r,i),so.subVectors(o,i),cc.subVectors(e,i);const l=oo.dot(cc),u=so.dot(cc);if(l<=0&&u<=0)return n.copy(i);fc.subVectors(e,r);const c=oo.dot(fc),f=so.dot(fc);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(oo,s);dc.subVectors(e,o);const p=oo.dot(dc),g=so.dot(dc);if(g>=0&&p<=g)return n.copy(o);const x=p*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(so,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return Pm.subVectors(o,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(Pm,a);const d=1/(m+x+h);return s=x*d,a=h*d,n.copy(i).addScaledVector(oo,s).addScaledVector(so,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Ga={h:0,s:0,l:0};function gc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=$E(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=gc(s,o,e+1/3),this.g=gc(s,o,e),this.b=gc(s,o,e-1/3)}return qe.toWorkingColorSpace(this,r),this}setStyle(e,n=An){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=P0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=No(e.r),this.g=No(e.g),this.b=No(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(rn(Gt.r*255,0,255))*65536+Math.round(rn(Gt.g*255,0,255))*256+Math.round(rn(Gt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const f=s-a;switch(u=c<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=An){qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Ga);const i=Ju(Vi.h,Ga.h,n),r=Ju(Vi.s,Ga.s,n),o=Ju(Vi.l,Ga.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ot;ot.NAMES=P0;let hM=0;class xu extends es{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ua(),this.name="",this.blending=Io,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Df,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Io&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==If&&(i.blendSrc=this.blendSrc),this.blendDst!==Df&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class L0 extends xu{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=h0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new X,Wa=new st;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Wa.fromBufferAttribute(this,n),Wa.applyMatrix3(e),this.setXY(n,Wa.x,Wa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class I0 extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class D0 extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Fr extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pM=0;const Tn=new Ct,_c=new yn,ao=new X,pn=new fa,vs=new fa,It=new X;class qr extends es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?D0:I0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return _c.lookAt(e),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Fr(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(pn.min,vs.min),pn.expandByPoint(It),It.addVectors(pn.max,vs.max),pn.expandByPoint(It)):(pn.expandByPoint(vs.min),pn.expandByPoint(vs.max))}pn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)It.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(It));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(ao.fromBufferAttribute(e,u),It.add(ao)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new X,l[b]=new X;const u=new X,c=new X,f=new X,h=new st,p=new st,g=new st,x=new X,m=new X;function d(b,w,S){u.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(o,b),p.fromBufferAttribute(o,w),g.fromBufferAttribute(o,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(R),a[b].add(x),a[w].add(x),a[S].add(x),l[b].add(m),l[w].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,w=_.length;b<w;++b){const S=_[b],R=S.start,U=S.count;for(let B=R,Y=R+U;B<Y;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new X,y=new X,L=new X,E=new X;function C(b){L.fromBufferAttribute(r,b),E.copy(L);const w=a[b];v.copy(w),v.sub(L.multiplyScalar(L.dot(w))).normalize(),y.crossVectors(E,w);const R=y.dot(l[b])<0?-1:1;s.setXYZW(b,v.x,v.y,v.z,R)}for(let b=0,w=_.length;b<w;++b){const S=_[b],R=S.start,U=S.count;for(let B=R,Y=R+U;B<Y;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new X,o=new X,s=new X,a=new X,l=new X,u=new X,c=new X,f=new X;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),f.subVectors(r,o),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new li(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],f=o[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const f=s[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lm=new Ct,vr=new sM,Xa=new bh,Im=new X,ja=new X,qa=new X,Ya=new X,vc=new X,$a=new X,Dm=new X,Ka=new X;class oi extends yn{constructor(e=new qr,n=new L0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){$a.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],f=o[l];c!==0&&(vc.fromBufferAttribute(f,e),s?$a.addScaledVector(vc,c):$a.addScaledVector(vc.sub(n),c))}n.add($a)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(Xa.containsPoint(vr.origin)===!1&&(vr.intersectSphere(Xa,Im)===null||vr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Lm.copy(o).invert(),vr.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,L=v;y<L;y+=3){const E=a.getX(y),C=a.getX(y+1),b=a.getX(y+2);r=Za(this,d,e,i,u,c,f,E,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Za(this,s,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,L=v;y<L;y+=3){const E=y,C=y+1,b=y+2;r=Za(this,d,e,i,u,c,f,E,C,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const _=m,v=m+1,y=m+2;r=Za(this,s,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function mM(t,e,n,i,r,o,s,a){let l;if(e.side===un?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===cr,a),l===null)return null;Ka.copy(a),Ka.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ka);return u<n.near||u>n.far?null:{distance:u,point:Ka.clone(),object:t}}function Za(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,ja),t.getVertexPosition(l,qa),t.getVertexPosition(u,Ya);const c=mM(t,e,n,i,ja,qa,Ya,Dm);if(c){const f=new X;Xn.getBarycoord(Dm,ja,qa,Ya,f),r&&(c.uv=Xn.getInterpolatedAttribute(r,a,l,u,f,new st)),o&&(c.uv1=Xn.getInterpolatedAttribute(o,a,l,u,f,new st)),s&&(c.normal=Xn.getInterpolatedAttribute(s,a,l,u,f,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new X,materialIndex:0};Xn.getNormal(ja,qa,Ya,h.normal),c.face=h,c.barycoord=f}return c}class da extends qr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Fr(u,3)),this.setAttribute("normal",new Fr(c,3)),this.setAttribute("uv",new Fr(f,2));function g(x,m,d,_,v,y,L,E,C,b,w){const S=y/C,R=L/b,U=y/2,B=L/2,Y=E/2,W=C+1,q=b+1;let Q=0,N=0;const Z=new X;for(let A=0;A<q;A++){const le=A*R-B;for(let xe=0;xe<W;xe++){const I=xe*S-U;Z[x]=I*_,Z[m]=le*v,Z[d]=Y,u.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[d]=E>0?1:-1,c.push(Z.x,Z.y,Z.z),f.push(xe/C),f.push(1-A/b),Q+=1}}for(let A=0;A<b;A++)for(let le=0;le<C;le++){const xe=h+le+W*A,I=h+le+W*(A+1),$=h+(le+1)+W*(A+1),oe=h+(le+1)+W*A;l.push(xe,I,oe),l.push(I,$,oe),N+=6}a.addGroup(p,N,w),p+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $o(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=$o(t[n]);for(const r in i)e[r]=i[r]}return e}function gM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function N0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const _M={clone:$o,merge:Yt};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends xu{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=xM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$o(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class U0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new X,Nm=new st,Um=new st;class Wn extends U0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Qu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Nm,Um),n.subVectors(Um,Nm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Qu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const lo=-90,uo=1;class yM extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(lo,uo,e,n);r.layers=this.layers,this.add(r);const o=new Wn(lo,uo,e,n);o.layers=this.layers,this.add(o);const s=new Wn(lo,uo,e,n);s.layers=this.layers,this.add(s);const a=new Wn(lo,uo,e,n);a.layers=this.layers,this.add(a);const l=new Wn(lo,uo,e,n);l.layers=this.layers,this.add(l);const u=new Wn(lo,uo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k0 extends cn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Xo,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SM extends Wr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new da(5,5,5),o=new Di({name:"CubemapFromEquirect",uniforms:$o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:sr});o.uniforms.tEquirect.value=n;const s=new oi(r,o),a=n.minFilter;return n.minFilter===Nr&&(n.minFilter=ri),new yM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const xc=new X,EM=new X,MM=new Be;class Tr{constructor(e=new X(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xc.subVectors(i,n).cross(EM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MM.getNormalMatrix(e),r=this.coplanarPoint(xc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new bh,Qa=new X;class F0{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,o=new Tr,s=new Tr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],d=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,m-p,y-d).normalize(),i[1].setComponents(l+o,h+u,m+p,y+d).normalize(),i[2].setComponents(l+s,h+c,m+g,y+_).normalize(),i[3].setComponents(l-s,h-c,m-g,y-_).normalize(),i[4].setComponents(l-a,h-f,m-x,y-v).normalize(),n===wi)i[5].setComponents(l+a,h+f,m+x,y+v).normalize();else if(n===Kl)i[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Qa.x=r.normal.x>0?e.max.x:e.min.x,Qa.y=r.normal.y>0?e.max.y:e.min.y,Qa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function wM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],x=f[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const x=f[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class ha extends qr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let d=0;d<c;d++){const _=d*h-s;for(let v=0;v<u;v++){const y=v*f-o;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+u*d,y=_+u*(d+1),L=_+1+u*(d+1),E=_+1+u*d;p.push(v,y,E),p.push(y,L,E)}this.setIndex(p),this.setAttribute("position",new Fr(g,3)),this.setAttribute("normal",new Fr(x,3)),this.setAttribute("uv",new Fr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.widthSegments,e.heightSegments)}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,zM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,A1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,R1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,N1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,k1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Q1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ow=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ww=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ow=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:TM,alphahash_pars_fragment:AM,alphamap_fragment:CM,alphamap_pars_fragment:RM,alphatest_fragment:bM,alphatest_pars_fragment:PM,aomap_fragment:LM,aomap_pars_fragment:IM,batching_pars_vertex:DM,batching_vertex:NM,begin_vertex:UM,beginnormal_vertex:kM,bsdfs:FM,iridescence_fragment:OM,bumpmap_pars_fragment:zM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:jM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:KM,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:o1,envmap_pars_vertex:s1,envmap_physical_pars_fragment:_1,envmap_vertex:a1,fog_vertex:l1,fog_pars_vertex:u1,fog_fragment:c1,fog_pars_fragment:f1,gradientmap_pars_fragment:d1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:x1,lights_phong_fragment:y1,lights_phong_pars_fragment:S1,lights_physical_fragment:E1,lights_physical_pars_fragment:M1,lights_fragment_begin:w1,lights_fragment_maps:T1,lights_fragment_end:A1,logdepthbuf_fragment:C1,logdepthbuf_pars_fragment:R1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:P1,map_fragment:L1,map_pars_fragment:I1,map_particle_fragment:D1,map_particle_pars_fragment:N1,metalnessmap_fragment:U1,metalnessmap_pars_fragment:k1,morphinstance_vertex:F1,morphcolor_vertex:O1,morphnormal_vertex:z1,morphtarget_pars_vertex:B1,morphtarget_vertex:H1,normal_fragment_begin:V1,normal_fragment_maps:G1,normal_pars_fragment:W1,normal_pars_vertex:X1,normal_vertex:j1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:$1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,opaque_fragment:Q1,packing:J1,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:ow,shadowmap_pars_fragment:sw,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:uw,skinbase_vertex:cw,skinning_pars_vertex:fw,skinning_vertex:dw,skinnormal_vertex:hw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:_w,transmission_fragment:vw,transmission_pars_fragment:xw,uv_pars_fragment:yw,uv_pars_vertex:Sw,uv_vertex:Ew,worldpos_vertex:Mw,background_vert:ww,background_frag:Tw,backgroundCube_vert:Aw,backgroundCube_frag:Cw,cube_vert:Rw,cube_frag:bw,depth_vert:Pw,depth_frag:Lw,distanceRGBA_vert:Iw,distanceRGBA_frag:Dw,equirect_vert:Nw,equirect_frag:Uw,linedashed_vert:kw,linedashed_frag:Fw,meshbasic_vert:Ow,meshbasic_frag:zw,meshlambert_vert:Bw,meshlambert_frag:Hw,meshmatcap_vert:Vw,meshmatcap_frag:Gw,meshnormal_vert:Ww,meshnormal_frag:Xw,meshphong_vert:jw,meshphong_frag:qw,meshphysical_vert:Yw,meshphysical_frag:$w,meshtoon_vert:Kw,meshtoon_frag:Zw,points_vert:Qw,points_frag:Jw,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},de={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ti={basic:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Yt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Yt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Yt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Yt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Yt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Yt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Yt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Yt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Yt([de.common,de.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Yt([de.lights,de.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ti.physical={uniforms:Yt([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ja={r:0,b:0,g:0},yr=new Ii,rT=new Ct;function oT(t,e,n,i,r,o,s){const a=new ot(0);let l=o===!0?0:1,u,c,f=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===_u)?(c===void 0&&(c=new oi(new da(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:$o(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),yr.copy(v.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rT.makeRotationFromEuler(yr)),c.material.toneMapped=qe.getTransfer(y.colorSpace)!==rt,(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new oi(new ha(2,2),new Di({name:"BackgroundMaterial",uniforms:$o(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=qe.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function d(_,v){_.getRGB(Ja,N0(t)),i.buffers.color.setClear(Ja.r,Ja.g,Ja.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m}}function sT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,R,U,B,Y){let W=!1;const q=f(B,U,R);o!==q&&(o=q,u(o.object)),W=p(S,B,U,Y),W&&g(S,B,U,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),(W||s)&&(s=!1,y(S,R,U,B),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,R,U){const B=U.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let W=Y[R.id];W===void 0&&(W={},Y[R.id]=W);let q=W[B];return q===void 0&&(q=h(l()),W[B]=q),q}function h(S){const R=[],U=[],B=[];for(let Y=0;Y<n;Y++)R[Y]=0,U[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,R,U,B){const Y=o.attributes,W=R.attributes;let q=0;const Q=U.getAttributes();for(const N in Q)if(Q[N].location>=0){const A=Y[N];let le=W[N];if(le===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),A===void 0||A.attribute!==le||le&&A.data!==le.data)return!0;q++}return o.attributesNum!==q||o.index!==B}function g(S,R,U,B){const Y={},W=R.attributes;let q=0;const Q=U.getAttributes();for(const N in Q)if(Q[N].location>=0){let A=W[N];A===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(A=S.instanceColor));const le={};le.attribute=A,A&&A.data&&(le.data=A.data),Y[N]=le,q++}o.attributes=Y,o.attributesNum=q,o.index=B}function x(){const S=o.newAttributes;for(let R=0,U=S.length;R<U;R++)S[R]=0}function m(S){d(S,0)}function d(S,R){const U=o.newAttributes,B=o.enabledAttributes,Y=o.attributeDivisors;U[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),Y[S]!==R&&(t.vertexAttribDivisor(S,R),Y[S]=R)}function _(){const S=o.newAttributes,R=o.enabledAttributes;for(let U=0,B=R.length;U<B;U++)R[U]!==S[U]&&(t.disableVertexAttribArray(U),R[U]=0)}function v(S,R,U,B,Y,W,q){q===!0?t.vertexAttribIPointer(S,R,U,Y,W):t.vertexAttribPointer(S,R,U,B,Y,W)}function y(S,R,U,B){x();const Y=B.attributes,W=U.getAttributes(),q=R.defaultAttributeValues;for(const Q in W){const N=W[Q];if(N.location>=0){let Z=Y[Q];if(Z===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const A=Z.normalized,le=Z.itemSize,xe=e.get(Z);if(xe===void 0)continue;const I=xe.buffer,$=xe.type,oe=xe.bytesPerElement,ce=$===t.INT||$===t.UNSIGNED_INT||Z.gpuType===Mh;if(Z.isInterleavedBufferAttribute){const fe=Z.data,Ae=fe.stride,Le=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<N.locationSize;Ue++)d(N.location+Ue,fe.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<N.locationSize;Ue++)m(N.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,I);for(let Ue=0;Ue<N.locationSize;Ue++)v(N.location+Ue,le/N.locationSize,$,A,Ae*oe,(Le+le/N.locationSize*Ue)*oe,ce)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)d(N.location+fe,Z.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);t.bindBuffer(t.ARRAY_BUFFER,I);for(let fe=0;fe<N.locationSize;fe++)v(N.location+fe,le/N.locationSize,$,A,le*oe,le/N.locationSize*fe*oe,ce)}}else if(q!==void 0){const A=q[Q];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(N.location,A);break;case 3:t.vertexAttrib3fv(N.location,A);break;case 4:t.vertexAttrib4fv(N.location,A);break;default:t.vertexAttrib1fv(N.location,A)}}}}_()}function L(){b();for(const S in i){const R=i[S];for(const U in R){const B=R[U];for(const Y in B)c(B[Y].object),delete B[Y];delete R[U]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const U in R){const B=R[U];for(const Y in B)c(B[Y].object),delete B[Y];delete R[U]}delete i[S.id]}function C(S){for(const R in i){const U=i[R];if(U[S.id]===void 0)continue;const B=U[S.id];for(const Y in B)c(B[Y].object),delete B[Y];delete U[S.id]}}function b(){w(),s=!0,o!==r&&(o=r,u(o.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:w,dispose:L,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function aT(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)s(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=c[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function lT(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==jn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const b=C===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mi&&!b)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,E=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:L,maxSamples:E}}function uT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Tr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const _=o?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=c(g,h,v,p);for(let L=0;L!==v;++L)y[L]=n[L];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==x;++v,y+=4)s.copy(f[v]).applyMatrix4(_,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function cT(t){let e=new WeakMap;function n(s,a){return a===Hf?s.mapping=Xo:a===Vf&&(s.mapping=jo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Hf||a===Vf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new SM(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class z0 extends U0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const To=4,km=[.125,.215,.35,.446,.526,.582],Rr=20,yc=new z0,Fm=new ot;let Sc=null,Ec=0,Mc=0,wc=!1;const Ar=(1+Math.sqrt(5))/2,co=1/Ar,Om=[new X(-Ar,co,0),new X(Ar,co,0),new X(-co,0,Ar),new X(co,0,Ar),new X(0,Ar,-co),new X(0,Ar,co),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Ec,Mc),this._renderer.xr.enabled=wc,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Mc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:la,format:jn,colorSpace:Jo,depthBuffer:!1},r=Bm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(o)),this._blurMaterial=dT(o,e,n)}return r}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,yc)}_sceneToCubeUV(e,n,i,r){const a=new Wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Fm),c.toneMapping=ar,c.autoClear=!1;const p=new L0({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new oi(new da,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Fm),x=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;el(r,_*v,d>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;el(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Om[(r-o-1)%Om.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new oi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Rr-1),x=o/g,m=isFinite(o)?1+Math.floor(c*x):Rr;m>Rr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Rr}`);const d=[];let _=0;for(let C=0;C<Rr;++C){const b=C/x,w=Math.exp(-b*b/2);d.push(w),C===0?_+=w:C<m&&(_+=2*w)}for(let C=0;C<d.length;C++)d[C]=d[C]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],L=3*y*(r>v-To?r-v+To:0),E=4*(this._cubeSize-y);el(n,L,E,3*y,2*y),l.setRenderTarget(n),l.render(f,yc)}}function fT(t){const e=[],n=[],i=[];let r=t;const o=t-To+1+km.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-To?l=km[s-t+To-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,x=3,m=2,d=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,b=E>2?0:-1,w=[C,b,0,C+2/3,b,0,C+2/3,b+1,0,C,b,0,C+2/3,b+1,0,C,b+1,0];_.set(w,x*g*E),v.set(h,m*g*E);const S=[E,E,E,E,E,E];y.set(S,d*g*E)}const L=new qr;L.setAttribute("position",new li(_,x)),L.setAttribute("uv",new li(v,m)),L.setAttribute("faceIndex",new li(y,d)),e.push(L),r>To&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Bm(t,e,n){const i=new Wr(t,e,n);return i.texture.mapping=_u,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function el(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dT(t,e,n){const i=new Float32Array(Rr),r=new X(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Hm(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Vm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Hf||l===Vf,c=l===Xo||l===jo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new zm(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new zm(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",o),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function pT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mT(t,e,n,i){const r={},o=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const x=p[g];for(let m=0,d=x.length;m<d;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const L=_[v+0],E=_[v+1],C=_[v+2];h.push(L,E,E,C,C,L)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const L=v+0,E=v+1,C=v+2;h.push(L,E,E,C,C,L)}}else return;const m=new(A0(h)?D0:I0)(h,1);m.version=x;const d=o.get(f);d&&e.remove(d),o.set(f,m)}function c(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function gT(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,h*s,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/s,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,x,0,g);let d=0;for(let _=0;_<g;_++)d+=p[_]*x[_];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function _T(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function vT(t,e,n){const i=new WeakMap,r=new Mt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let L=a.attributes.position.count*y,E=1;L>e.maxTextureSize&&(E=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const C=new Float32Array(L*E*4*f),b=new R0(C,L,E,f);b.type=Mi,b.needsUpdate=!0;const w=y*4;for(let R=0;R<f;R++){const U=d[R],B=_[R],Y=v[R],W=L*E*4*R;for(let q=0;q<U.count;q++){const Q=q*w;g===!0&&(r.fromBufferAttribute(U,q),C[W+Q+0]=r.x,C[W+Q+1]=r.y,C[W+Q+2]=r.z,C[W+Q+3]=0),x===!0&&(r.fromBufferAttribute(B,q),C[W+Q+4]=r.x,C[W+Q+5]=r.y,C[W+Q+6]=r.z,C[W+Q+7]=0),m===!0&&(r.fromBufferAttribute(Y,q),C[W+Q+8]=r.x,C[W+Q+9]=r.y,C[W+Q+10]=r.z,C[W+Q+11]=Y.itemSize===4?r.w:1)}}h={count:f,texture:b,size:new st(L,E)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function xT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class B0 extends cn{constructor(e,n,i,r,o,s,a,l,u,c=Do){if(c!==Do&&c!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Do&&(i=Gr),i===void 0&&c===Yo&&(i=qo),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:$n,this.minFilter=l!==void 0?l:$n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const H0=new cn,Gm=new B0(1,1),V0=new R0,G0=new rM,W0=new k0,Wm=[],Xm=[],jm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Wm[r];if(o===void 0&&(o=new Float32Array(r),Wm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yu(t,e){let n=Xm[e];n===void 0&&(n=new Int32Array(e),Xm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function yT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ST(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function wT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Ym.set(i),t.uniformMatrix2fv(this.addr,!1,Ym),Lt(n,i)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;qm.set(i),t.uniformMatrix3fv(this.addr,!1,qm),Lt(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;jm.set(i),t.uniformMatrix4fv(this.addr,!1,jm),Lt(n,i)}}function CT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function LT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function UT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Gm.compareFunction=T0,o=Gm):o=H0,n.setTexture2D(e||o,r)}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G0,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W0,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||V0,r)}function zT(t){switch(t){case 5126:return yT;case 35664:return ST;case 35665:return ET;case 35666:return MT;case 35674:return wT;case 35675:return TT;case 35676:return AT;case 5124:case 35670:return CT;case 35667:case 35671:return RT;case 35668:case 35672:return bT;case 35669:case 35673:return PT;case 5125:return LT;case 36294:return IT;case 36295:return DT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return UT;case 35679:case 36299:case 36307:return kT;case 35680:case 36300:case 36308:case 36293:return FT;case 36289:case 36303:case 36311:case 36292:return OT}}function BT(t,e){t.uniform1fv(this.addr,e)}function HT(t,e){const n=ts(e,this.size,2);t.uniform2fv(this.addr,n)}function VT(t,e){const n=ts(e,this.size,3);t.uniform3fv(this.addr,n)}function GT(t,e){const n=ts(e,this.size,4);t.uniform4fv(this.addr,n)}function WT(t,e){const n=ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function XT(t,e){const n=ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jT(t,e){const n=ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qT(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function $T(t,e){t.uniform3iv(this.addr,e)}function KT(t,e){t.uniform4iv(this.addr,e)}function ZT(t,e){t.uniform1uiv(this.addr,e)}function QT(t,e){t.uniform2uiv(this.addr,e)}function JT(t,e){t.uniform3uiv(this.addr,e)}function eA(t,e){t.uniform4uiv(this.addr,e)}function tA(t,e,n){const i=this.cache,r=e.length,o=yu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||H0,o[s])}function nA(t,e,n){const i=this.cache,r=e.length,o=yu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||G0,o[s])}function iA(t,e,n){const i=this.cache,r=e.length,o=yu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||W0,o[s])}function rA(t,e,n){const i=this.cache,r=e.length,o=yu(n,r);Pt(i,o)||(t.uniform1iv(this.addr,o),Lt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||V0,o[s])}function oA(t){switch(t){case 5126:return BT;case 35664:return HT;case 35665:return VT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return $T;case 35669:case 35673:return KT;case 5125:return ZT;case 36294:return QT;case 36295:return JT;case 36296:return eA;case 35678:case 36198:case 36298:case 36306:case 35682:return tA;case 35679:case 36299:case 36307:return nA;case 35680:case 36300:case 36308:case 36293:return iA;case 36289:case 36303:case 36311:case 36292:return rA}}class sA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zT(n.type)}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oA(n.type)}}class lA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function $m(t,e){t.seq.push(e),t.map[e.id]=e}function uA(t,e,n){const i=t.name,r=i.length;for(Tc.lastIndex=0;;){const o=Tc.exec(i),s=Tc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){$m(n,u===void 0?new sA(a,t,e):new aA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new lA(a),$m(n,f)),n=f}}}class Ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);uA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Km(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cA=37297;let fA=0;function dA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Zm=new Be;function hA(t){qe._getMatrix(Zm,qe.workingColorSpace,t);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case vu:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Qm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+dA(t.getShaderSource(e),s)}else return r}function pA(t,e){const n=hA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function mA(t,e){let n;switch(e){case PE:n="Linear";break;case LE:n="Reinhard";break;case IE:n="Cineon";break;case DE:n="ACESFilmic";break;case UE:n="AgX";break;case kE:n="Neutral";break;case NE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tl=new X;function gA(){qe.getLuminanceCoefficients(tl);const t=tl.x.toFixed(4),e=tl.y.toFixed(4),n=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _A(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function vA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function As(t){return t!==""}function Jm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function eg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yA=/^[ \t]*#include +<([\w\d./]+)>/gm;function vd(t){return t.replace(yA,EA)}const SA=new Map;function EA(t,e){let n=He[e];if(n===void 0){const i=SA.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vd(n)}const MA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(t){return t.replace(MA,wA)}function wA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ng(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===d0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function AA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case jo:e="ENVMAP_TYPE_CUBE";break;case _u:e="ENVMAP_TYPE_CUBE_UV";break}return e}function CA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function RA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case h0:e="ENVMAP_BLENDING_MULTIPLY";break;case RE:e="ENVMAP_BLENDING_MIX";break;case bE:e="ENVMAP_BLENDING_ADD";break}return e}function bA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function PA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=TA(n),u=AA(n),c=CA(n),f=RA(n),h=bA(n),p=_A(n),g=vA(o),x=r.createProgram();let m,d,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(As).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(As).join(`
`),d.length>0&&(d+=`
`)):(m=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),d=[ng(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?He.tonemapping_pars_fragment:"",n.toneMapping!==ar?mA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,pA("linearToOutputTexel",n.outputColorSpace),gA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),s=vd(s),s=Jm(s,n),s=eg(s,n),a=vd(a),a=Jm(a,n),a=eg(a,n),s=tg(s),a=tg(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=_+m+s,y=_+d+a,L=Km(r,r.VERTEX_SHADER,v),E=Km(r,r.FRAGMENT_SHADER,y);r.attachShader(x,L),r.attachShader(x,E),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),B=r.getShaderInfoLog(L).trim(),Y=r.getShaderInfoLog(E).trim();let W=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,E);else{const Q=Qm(r,L,"vertex"),N=Qm(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Q+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(B===""||Y==="")&&(q=!1);q&&(R.diagnostics={runnable:W,programLog:U,vertexShader:{log:B,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(L),r.deleteShader(E),b=new Ml(r,x),w=xA(r,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,cA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=E,this}let LA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DA(e),n.set(e,i)),i}}class DA{constructor(e){this.id=LA++,this.code=e,this.usedTimes=0}}function NA(t,e,n,i,r,o,s){const a=new b0,l=new IA,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,R,U,B){const Y=U.fog,W=B.geometry,q=w.isMeshStandardMaterial?U.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||q),N=Q&&Q.mapping===_u?Q.image.height:null,Z=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const A=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,le=A!==void 0?A.length:0;let xe=0;W.morphAttributes.position!==void 0&&(xe=1),W.morphAttributes.normal!==void 0&&(xe=2),W.morphAttributes.color!==void 0&&(xe=3);let I,$,oe,ce;if(Z){const et=ti[Z];I=et.vertexShader,$=et.fragmentShader}else I=w.vertexShader,$=w.fragmentShader,l.update(w),oe=l.getVertexShaderID(w),ce=l.getFragmentShaderID(w);const fe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Le=B.isInstancedMesh===!0,Ue=B.isBatchedMesh===!0,nt=!!w.map,je=!!w.matcap,gt=!!Q,z=!!w.aoMap,qt=!!w.lightMap,Ve=!!w.bumpMap,Ge=!!w.normalMap,be=!!w.displacementMap,it=!!w.emissiveMap,Re=!!w.metalnessMap,P=!!w.roughnessMap,M=w.anisotropy>0,H=w.clearcoat>0,ee=w.dispersion>0,ne=w.iridescence>0,D=w.sheen>0,j=w.transmission>0,J=M&&!!w.anisotropyMap,ie=H&&!!w.clearcoatMap,Se=H&&!!w.clearcoatNormalMap,re=H&&!!w.clearcoatRoughnessMap,pe=ne&&!!w.iridescenceMap,Ee=ne&&!!w.iridescenceThicknessMap,Pe=D&&!!w.sheenColorMap,_e=D&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,De=!!w.specularColorMap,Xe=!!w.specularIntensityMap,k=j&&!!w.transmissionMap,he=j&&!!w.thicknessMap,K=!!w.gradientMap,te=!!w.alphaMap,ve=w.alphaTest>0,me=!!w.alphaHash,Oe=!!w.extensions;let yt=ar;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yt=t.toneMapping);const zt={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:I,fragmentShader:$,defines:w.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&B._colorsTexture!==null,instancing:Le,instancingColor:Le&&B.instanceColor!==null,instancingMorph:Le&&B.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Jo,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:je,envMap:gt,envMapMode:gt&&Q.mapping,envMapCubeUVHeight:N,aoMap:z,lightMap:qt,bumpMap:Ve,normalMap:Ge,displacementMap:h&&be,emissiveMap:it,normalMapObjectSpace:Ge&&w.normalMapType===HE,normalMapTangentSpace:Ge&&w.normalMapType===BE,metalnessMap:Re,roughnessMap:P,anisotropy:M,anisotropyMap:J,clearcoat:H,clearcoatMap:ie,clearcoatNormalMap:Se,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ne,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:D,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:Ie,specularColorMap:De,specularIntensityMap:Xe,transmission:j,transmissionMap:k,thicknessMap:he,gradientMap:K,opaque:w.transparent===!1&&w.blending===Io&&w.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:me,combine:w.combine,mapUv:nt&&x(w.map.channel),aoMapUv:z&&x(w.aoMap.channel),lightMapUv:qt&&x(w.lightMap.channel),bumpMapUv:Ve&&x(w.bumpMap.channel),normalMapUv:Ge&&x(w.normalMap.channel),displacementMapUv:be&&x(w.displacementMap.channel),emissiveMapUv:it&&x(w.emissiveMap.channel),metalnessMapUv:Re&&x(w.metalnessMap.channel),roughnessMapUv:P&&x(w.roughnessMap.channel),anisotropyMapUv:J&&x(w.anisotropyMap.channel),clearcoatMapUv:ie&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(w.sheenRoughnessMap.channel),specularMapUv:Ie&&x(w.specularMap.channel),specularColorMapUv:De&&x(w.specularColorMap.channel),specularIntensityMapUv:Xe&&x(w.specularIntensityMap.channel),transmissionMapUv:k&&x(w.transmissionMap.channel),thicknessMapUv:he&&x(w.thicknessMap.channel),alphaMapUv:te&&x(w.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ge||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(nt||te),fog:!!Y,useFog:w.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&qe.getTransfer(w.map.colorSpace)===rt,decodeVideoTextureEmissive:it&&w.emissiveMap.isVideoTexture===!0&&qe.getTransfer(w.emissiveMap.colorSpace)===rt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===yi,flipSided:w.side===un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=u.has(1),zt.vertexUv2s=u.has(2),zt.vertexUv3s=u.has(3),u.clear(),zt}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)S.push(R),S.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(_(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function y(w){const S=g[w.type];let R;if(S){const U=ti[S];R=_M.clone(U.uniforms)}else R=w.uniforms;return R}function L(w,S){let R;for(let U=0,B=c.length;U<B;U++){const Y=c[U];if(Y.cacheKey===S){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new PA(t,S,w,o),c.push(R)),R}function E(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function C(w){l.remove(w)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:L,releaseProgram:E,releaseShaderCache:C,programs:c,dispose:b}}function UA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function kA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function ig(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rg(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f,h,p,g,x,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=m),e++,d}function a(f,h,p,g,x,m){const d=s(f,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,x,m){const d=s(f,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||kA),i.length>1&&i.sort(h||ig),r.length>1&&r.sort(h||ig)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function FA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new rg,t.set(i,[s])):r>=o.length?(s=new rg,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function OA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new ot};break;case"SpotLight":n={position:new X,direction:new X,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BA=0;function HA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function VA(t){const e=new OA,n=zA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,o=new Ct,s=new Ct;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,_=0,v=0,y=0,L=0,E=0,C=0;u.sort(HA);for(let w=0,S=u.length;w<S;w++){const R=u[w],U=R.color,B=R.intensity,Y=R.distance,W=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=U.r*B,f+=U.g*B,h+=U.b*B;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],B);C++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,N=n.get(R);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=W,i.directionalShadowMatrix[p]=R.shadow.matrix,_++}i.directional[p]=q,p++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(U).multiplyScalar(B),q.distance=Y,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[x]=q;const Q=R.shadow;if(R.map&&(i.spotLightMap[L]=R.map,L++,Q.updateMatrices(R),R.castShadow&&E++),i.spotLightMatrix[x]=Q.matrix,R.castShadow){const N=n.get(R);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=W,y++}x++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(U).multiplyScalar(B),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Q=R.shadow,N=n.get(R);N.shadowIntensity=Q.intensity,N.shadowBias=Q.bias,N.shadowNormalBias=Q.normalBias,N.shadowRadius=Q.radius,N.shadowMapSize=Q.mapSize,N.shadowCameraNear=Q.camera.near,N.shadowCameraFar=Q.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=R.shadow.matrix,v++}i.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(B),q.groundColor.copy(R.groundColor).multiplyScalar(B),i.hemi[d]=q,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==g||b.spotLength!==x||b.rectAreaLength!==m||b.hemiLength!==d||b.numDirectionalShadows!==_||b.numPointShadows!==v||b.numSpotShadows!==y||b.numSpotMaps!==L||b.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+L-E,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,b.directionalLength=p,b.pointLength=g,b.spotLength=x,b.rectAreaLength=m,b.hemiLength=d,b.numDirectionalShadows=_,b.numPointShadows=v,b.numSpotShadows=y,b.numSpotMaps=L,b.numLightProbes=C,i.version=BA++)}function l(u,c){let f=0,h=0,p=0,g=0,x=0;const m=c.matrixWorldInverse;for(let d=0,_=u.length;d<_;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function og(t){const e=new VA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function GA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new og(t),e.set(r,[a])):o>=s.length?(a=new og(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class WA extends xu{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=OE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class XA extends xu{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YA(t,e,n){let i=new F0;const r=new st,o=new st,s=new Mt,a=new WA({depthPacking:zE}),l=new XA,u={},c=n.maxTextureSize,f={[cr]:un,[un]:cr,[yi]:yi},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:jA,fragmentShader:qA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new qr;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d0;let d=this.type;this.render=function(E,C,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),U=t.state;U.setBlending(sr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const B=d!==_i&&this.type===_i,Y=d===_i&&this.type!==_i;for(let W=0,q=E.length;W<q;W++){const Q=E[W],N=Q.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Z=N.getFrameExtents();if(r.multiply(Z),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/Z.x),r.x=o.x*Z.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/Z.y),r.y=o.y*Z.y,N.mapSize.y=o.y)),N.map===null||B===!0||Y===!0){const le=this.type!==_i?{minFilter:$n,magFilter:$n}:{};N.map!==null&&N.map.dispose(),N.map=new Wr(r.x,r.y,le),N.map.texture.name=Q.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const A=N.getViewportCount();for(let le=0;le<A;le++){const xe=N.getViewport(le);s.set(o.x*xe.x,o.y*xe.y,o.x*xe.z,o.y*xe.w),U.viewport(s),N.updateMatrices(Q,le),i=N.getFrustum(),y(C,b,N.camera,Q,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&_(N,b),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,R)};function _(E,C){const b=e.update(x);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wr(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,b,h,x,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,b,p,x,null)}function v(E,C,b,w){let S=null;const R=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const U=S.uuid,B=C.uuid;let Y=u[U];Y===void 0&&(Y={},u[U]=Y);let W=Y[B];W===void 0&&(W=S.clone(),Y[B]=W,C.addEventListener("dispose",L)),S=W}if(S.visible=C.visible,S.wireframe=C.wireframe,w===_i?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=b}return S}function y(E,C,b,w,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===_i)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const B=e.update(E),Y=E.material;if(Array.isArray(Y)){const W=B.groups;for(let q=0,Q=W.length;q<Q;q++){const N=W[q],Z=Y[N.materialIndex];if(Z&&Z.visible){const A=v(E,Z,w,S);E.onBeforeShadow(t,E,C,b,B,A,N),t.renderBufferDirect(b,null,B,A,E,N),E.onAfterShadow(t,E,C,b,B,A,N)}}}else if(Y.visible){const W=v(E,Y,w,S);E.onBeforeShadow(t,E,C,b,B,W,null),t.renderBufferDirect(b,null,B,W,E,null),E.onAfterShadow(t,E,C,b,B,W,null)}}const U=E.children;for(let B=0,Y=U.length;B<Y;B++)y(U[B],C,b,w,S)}function L(E){E.target.removeEventListener("dispose",L);for(const b in u){const w=u[b],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const $A={[Nf]:Uf,[kf]:zf,[Ff]:Bf,[Wo]:Of,[Uf]:Nf,[zf]:kf,[Bf]:Ff,[Of]:Wo};function KA(t,e){function n(){let k=!1;const he=new Mt;let K=null;const te=new Mt(0,0,0,0);return{setMask:function(ve){K!==ve&&!k&&(t.colorMask(ve,ve,ve,ve),K=ve)},setLocked:function(ve){k=ve},setClear:function(ve,me,Oe,yt,zt){zt===!0&&(ve*=yt,me*=yt,Oe*=yt),he.set(ve,me,Oe,yt),te.equals(he)===!1&&(t.clearColor(ve,me,Oe,yt),te.copy(he))},reset:function(){k=!1,K=null,te.set(-1,0,0,0)}}}function i(){let k=!1,he=!1,K=null,te=null,ve=null;return{setReversed:function(me){if(he!==me){const Oe=e.get("EXT_clip_control");he?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const yt=ve;ve=null,this.setClear(yt)}he=me},getReversed:function(){return he},setTest:function(me){me?fe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(me){K!==me&&!k&&(t.depthMask(me),K=me)},setFunc:function(me){if(he&&(me=$A[me]),te!==me){switch(me){case Nf:t.depthFunc(t.NEVER);break;case Uf:t.depthFunc(t.ALWAYS);break;case kf:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case Ff:t.depthFunc(t.EQUAL);break;case Of:t.depthFunc(t.GEQUAL);break;case zf:t.depthFunc(t.GREATER);break;case Bf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=me}},setLocked:function(me){k=me},setClear:function(me){ve!==me&&(he&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){k=!1,K=null,te=null,ve=null,he=!1}}}function r(){let k=!1,he=null,K=null,te=null,ve=null,me=null,Oe=null,yt=null,zt=null;return{setTest:function(et){k||(et?fe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(et){he!==et&&!k&&(t.stencilMask(et),he=et)},setFunc:function(et,Un,ci){(K!==et||te!==Un||ve!==ci)&&(t.stencilFunc(et,Un,ci),K=et,te=Un,ve=ci)},setOp:function(et,Un,ci){(me!==et||Oe!==Un||yt!==ci)&&(t.stencilOp(et,Un,ci),me=et,Oe=Un,yt=ci)},setLocked:function(et){k=et},setClear:function(et){zt!==et&&(t.clearStencil(et),zt=et)},reset:function(){k=!1,he=null,K=null,te=null,ve=null,me=null,Oe=null,yt=null,zt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,v=null,y=null,L=null,E=null,C=new ot(0,0,0),b=0,w=!1,S=null,R=null,U=null,B=null,Y=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Q=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=Q>=2);let Z=null,A={};const le=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),I=new Mt().fromArray(le),$=new Mt().fromArray(xe);function oe(k,he,K,te){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(k,me),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<K;Oe++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(he+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const ce={};ce[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Wo),Ve(!1),Ge(um),fe(t.CULL_FACE),z(sr);function fe(k){c[k]!==!0&&(t.enable(k),c[k]=!0)}function Ae(k){c[k]!==!1&&(t.disable(k),c[k]=!1)}function Le(k,he){return f[k]!==he?(t.bindFramebuffer(k,he),f[k]=he,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=he),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ue(k,he){let K=p,te=!1;if(k){K=h.get(he),K===void 0&&(K=[],h.set(he,K));const ve=k.textures;if(K.length!==ve.length||K[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Oe=ve.length;me<Oe;me++)K[me]=t.COLOR_ATTACHMENT0+me;K.length=ve.length,te=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,te=!0);te&&t.drawBuffers(K)}function nt(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const je={[Cr]:t.FUNC_ADD,[fE]:t.FUNC_SUBTRACT,[dE]:t.FUNC_REVERSE_SUBTRACT};je[hE]=t.MIN,je[pE]=t.MAX;const gt={[mE]:t.ZERO,[gE]:t.ONE,[_E]:t.SRC_COLOR,[If]:t.SRC_ALPHA,[ME]:t.SRC_ALPHA_SATURATE,[SE]:t.DST_COLOR,[xE]:t.DST_ALPHA,[vE]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[EE]:t.ONE_MINUS_DST_COLOR,[yE]:t.ONE_MINUS_DST_ALPHA,[wE]:t.CONSTANT_COLOR,[TE]:t.ONE_MINUS_CONSTANT_COLOR,[AE]:t.CONSTANT_ALPHA,[CE]:t.ONE_MINUS_CONSTANT_ALPHA};function z(k,he,K,te,ve,me,Oe,yt,zt,et){if(k===sr){x===!0&&(Ae(t.BLEND),x=!1);return}if(x===!1&&(fe(t.BLEND),x=!0),k!==cE){if(k!==m||et!==w){if((d!==Cr||y!==Cr)&&(t.blendEquation(t.FUNC_ADD),d=Cr,y=Cr),et)switch(k){case Io:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cm:t.blendFunc(t.ONE,t.ONE);break;case fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Io:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}_=null,v=null,L=null,E=null,C.set(0,0,0),b=0,m=k,w=et}return}ve=ve||he,me=me||K,Oe=Oe||te,(he!==d||ve!==y)&&(t.blendEquationSeparate(je[he],je[ve]),d=he,y=ve),(K!==_||te!==v||me!==L||Oe!==E)&&(t.blendFuncSeparate(gt[K],gt[te],gt[me],gt[Oe]),_=K,v=te,L=me,E=Oe),(yt.equals(C)===!1||zt!==b)&&(t.blendColor(yt.r,yt.g,yt.b,zt),C.copy(yt),b=zt),m=k,w=!1}function qt(k,he){k.side===yi?Ae(t.CULL_FACE):fe(t.CULL_FACE);let K=k.side===un;he&&(K=!K),Ve(K),k.blending===Io&&k.transparent===!1?z(sr):z(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),s.setFunc(k.depthFunc),s.setTest(k.depthTest),s.setMask(k.depthWrite),o.setMask(k.colorWrite);const te=k.stencilWrite;a.setTest(te),te&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),it(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(k){S!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),S=k)}function Ge(k){k!==aE?(fe(t.CULL_FACE),k!==R&&(k===um?t.cullFace(t.BACK):k===lE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),R=k}function be(k){k!==U&&(q&&t.lineWidth(k),U=k)}function it(k,he,K){k?(fe(t.POLYGON_OFFSET_FILL),(B!==he||Y!==K)&&(t.polygonOffset(he,K),B=he,Y=K)):Ae(t.POLYGON_OFFSET_FILL)}function Re(k){k?fe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function P(k){k===void 0&&(k=t.TEXTURE0+W-1),Z!==k&&(t.activeTexture(k),Z=k)}function M(k,he,K){K===void 0&&(Z===null?K=t.TEXTURE0+W-1:K=Z);let te=A[K];te===void 0&&(te={type:void 0,texture:void 0},A[K]=te),(te.type!==k||te.texture!==he)&&(Z!==K&&(t.activeTexture(K),Z=K),t.bindTexture(k,he||ce[k]),te.type=k,te.texture=he)}function H(){const k=A[Z];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function D(){try{t.texSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function j(){try{t.texSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Pe(k){I.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),I.copy(k))}function _e(k){$.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),$.copy(k))}function Ie(k,he){let K=u.get(he);K===void 0&&(K=new WeakMap,u.set(he,K));let te=K.get(k);te===void 0&&(te=t.getUniformBlockIndex(he,k.name),K.set(k,te))}function De(k,he){const te=u.get(he).get(k);l.get(he)!==te&&(t.uniformBlockBinding(he,te,k.__bindingPointIndex),l.set(he,te))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},Z=null,A={},f={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,_=null,v=null,y=null,L=null,E=null,C=new ot(0,0,0),b=0,w=!1,S=null,R=null,U=null,B=null,Y=null,I.set(0,0,t.canvas.width,t.canvas.height),$.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:fe,disable:Ae,bindFramebuffer:Le,drawBuffers:Ue,useProgram:nt,setBlending:z,setMaterial:qt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:be,setPolygonOffset:it,setScissorTest:Re,activeTexture:P,bindTexture:M,unbindTexture:H,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:pe,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:Se,texStorage3D:re,texSubImage2D:D,texSubImage3D:j,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Pe,viewport:_e,reset:Xe}}function sg(t,e,n,i){const r=ZA(i);switch(n){case v0:return t*e;case y0:return t*e;case S0:return t*e*2;case E0:return t*e/r.components*r.byteLength;case Ah:return t*e/r.components*r.byteLength;case M0:return t*e*2/r.components*r.byteLength;case Ch:return t*e*2/r.components*r.byteLength;case x0:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Rh:return t*e*4/r.components*r.byteLength;case vl:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yl:case Sl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:case Yf:return Math.max(t,16)*Math.max(e,8)/4;case Xf:case qf:return Math.max(t,8)*Math.max(e,8)/2;case $f:case Kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case td:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case id:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case El:case dd:case hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case w0:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case md:case gd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ZA(t){switch(t){case Li:case m0:return{byteLength:1,components:1};case ta:case g0:case la:return{byteLength:2,components:1};case wh:case Th:return{byteLength:2,components:4};case Gr:case Mh:case Mi:return{byteLength:4,components:1};case _0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function QA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return p?new OffscreenCanvas(P,M):Zl("canvas")}function x(P,M,H){let ee=1;const ne=Re(P);if((ne.width>H||ne.height>H)&&(ee=H/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const D=Math.floor(ee*ne.width),j=Math.floor(ee*ne.height);f===void 0&&(f=g(D,j));const J=M?g(D,j):f;return J.width=D,J.height=j,J.getContext("2d").drawImage(P,0,0,D,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+D+"x"+j+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function m(P){return P.generateMipmaps}function d(P){t.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,M,H,ee,ne=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let D=M;if(M===t.RED&&(H===t.FLOAT&&(D=t.R32F),H===t.HALF_FLOAT&&(D=t.R16F),H===t.UNSIGNED_BYTE&&(D=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(D=t.R8UI),H===t.UNSIGNED_SHORT&&(D=t.R16UI),H===t.UNSIGNED_INT&&(D=t.R32UI),H===t.BYTE&&(D=t.R8I),H===t.SHORT&&(D=t.R16I),H===t.INT&&(D=t.R32I)),M===t.RG&&(H===t.FLOAT&&(D=t.RG32F),H===t.HALF_FLOAT&&(D=t.RG16F),H===t.UNSIGNED_BYTE&&(D=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(D=t.RG8UI),H===t.UNSIGNED_SHORT&&(D=t.RG16UI),H===t.UNSIGNED_INT&&(D=t.RG32UI),H===t.BYTE&&(D=t.RG8I),H===t.SHORT&&(D=t.RG16I),H===t.INT&&(D=t.RG32I)),M===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(D=t.RGB8UI),H===t.UNSIGNED_SHORT&&(D=t.RGB16UI),H===t.UNSIGNED_INT&&(D=t.RGB32UI),H===t.BYTE&&(D=t.RGB8I),H===t.SHORT&&(D=t.RGB16I),H===t.INT&&(D=t.RGB32I)),M===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(D=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(D=t.RGBA16UI),H===t.UNSIGNED_INT&&(D=t.RGBA32UI),H===t.BYTE&&(D=t.RGBA8I),H===t.SHORT&&(D=t.RGBA16I),H===t.INT&&(D=t.RGBA32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(D=t.RGB9_E5),M===t.RGBA){const j=ne?vu:qe.getTransfer(ee);H===t.FLOAT&&(D=t.RGBA32F),H===t.HALF_FLOAT&&(D=t.RGBA16F),H===t.UNSIGNED_BYTE&&(D=j===rt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(D=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(D=t.RGB5_A1)}return(D===t.R16F||D===t.R32F||D===t.RG16F||D===t.RG32F||D===t.RGBA16F||D===t.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function y(P,M){let H;return P?M===null||M===Gr||M===qo?H=t.DEPTH24_STENCIL8:M===Mi?H=t.DEPTH32F_STENCIL8:M===ta&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Gr||M===qo?H=t.DEPTH_COMPONENT24:M===Mi?H=t.DEPTH_COMPONENT32F:M===ta&&(H=t.DEPTH_COMPONENT16),H}function L(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==$n&&P.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function E(P){const M=P.target;M.removeEventListener("dispose",E),b(M),M.isVideoTexture&&c.delete(M)}function C(P){const M=P.target;M.removeEventListener("dispose",C),S(M)}function b(P){const M=i.get(P);if(M.__webglInit===void 0)return;const H=P.source,ee=h.get(H);if(ee){const ne=ee[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(P),Object.keys(ee).length===0&&h.delete(H)}i.remove(P)}function w(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const H=P.source,ee=h.get(H);delete ee[M.__cacheKey],s.memory.textures--}function S(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ne=0;ne<M.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(M.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[ee]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=P.textures;for(let ee=0,ne=H.length;ee<ne;ee++){const D=i.get(H[ee]);D.__webglTexture&&(t.deleteTexture(D.__webglTexture),s.memory.textures--),i.remove(H[ee])}i.remove(P)}let R=0;function U(){R=0}function B(){const P=R;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),R+=1,P}function Y(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function W(P,M){const H=i.get(P);if(P.isVideoTexture&&be(P),P.isRenderTargetTexture===!1&&P.version>0&&H.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(H,P,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function q(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){$(H,P,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function Q(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){$(H,P,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function N(P,M){const H=i.get(P);if(P.version>0&&H.__version!==P.version){oe(H,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const Z={[Gf]:t.REPEAT,[Dr]:t.CLAMP_TO_EDGE,[Wf]:t.MIRRORED_REPEAT},A={[$n]:t.NEAREST,[FE]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Zu]:t.LINEAR_MIPMAP_NEAREST,[Nr]:t.LINEAR_MIPMAP_LINEAR},le={[VE]:t.NEVER,[YE]:t.ALWAYS,[GE]:t.LESS,[T0]:t.LEQUAL,[WE]:t.EQUAL,[qE]:t.GEQUAL,[XE]:t.GREATER,[jE]:t.NOTEQUAL};function xe(P,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Zu||M.magFilter===Ua||M.magFilter===Nr||M.minFilter===ri||M.minFilter===Zu||M.minFilter===Ua||M.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,Z[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,Z[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,Z[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,A[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,A[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===$n||M.minFilter!==Ua&&M.minFilter!==Nr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function I(P,M){let H=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",E));const ee=M.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const D=Y(M);if(D!==P.__cacheKey){ne[D]===void 0&&(ne[D]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),ne[D].usedTimes++;const j=ne[P.__cacheKey];j!==void 0&&(ne[P.__cacheKey].usedTimes--,j.usedTimes===0&&w(M)),P.__cacheKey=D,P.__webglTexture=ne[D].texture}return H}function $(P,M,H){let ee=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=I(P,M),D=M.source;n.bindTexture(ee,P.__webglTexture,t.TEXTURE0+H);const j=i.get(D);if(D.version!==j.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const J=qe.getPrimaries(qe.workingColorSpace),ie=M.colorSpace===$i?null:qe.getPrimaries(M.colorSpace),Se=M.colorSpace===$i||J===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=x(M.image,!1,r.maxTextureSize);re=it(M,re);const pe=o.convert(M.format,M.colorSpace),Ee=o.convert(M.type);let Pe=v(M.internalFormat,pe,Ee,M.colorSpace,M.isVideoTexture);xe(ee,M);let _e;const Ie=M.mipmaps,De=M.isVideoTexture!==!0,Xe=j.__version===void 0||ne===!0,k=D.dataReady,he=L(M,re);if(M.isDepthTexture)Pe=y(M.format===Yo,M.type),Xe&&(De?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,Ee,null));else if(M.isDataTexture)if(Ie.length>0){De&&Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ie[0].width,Ie[0].height);for(let K=0,te=Ie.length;K<te;K++)_e=Ie[K],De?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,pe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,pe,Ee,_e.data);M.generateMipmaps=!1}else De?(Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height),k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,pe,Ee,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,Ee,re.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,Ie[0].width,Ie[0].height,re.depth);for(let K=0,te=Ie.length;K<te;K++)if(_e=Ie[K],M.format!==jn)if(pe!==null)if(De){if(k)if(M.layerUpdates.size>0){const ve=sg(_e.width,_e.height,M.format,M.type);for(const me of M.layerUpdates){const Oe=_e.data.subarray(me*ve/_e.data.BYTES_PER_ELEMENT,(me+1)*ve/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,me,_e.width,_e.height,1,pe,Oe)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,pe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,Pe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,_e.width,_e.height,re.depth,pe,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,Pe,_e.width,_e.height,re.depth,0,pe,Ee,_e.data)}else{De&&Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ie[0].width,Ie[0].height);for(let K=0,te=Ie.length;K<te;K++)_e=Ie[K],M.format!==jn?pe!==null?De?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,_e.width,_e.height,pe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,K,Pe,_e.width,_e.height,0,pe,Ee,_e.data)}else if(M.isDataArrayTexture)if(De){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,re.width,re.height,re.depth),k)if(M.layerUpdates.size>0){const K=sg(re.width,re.height,M.format,M.type);for(const te of M.layerUpdates){const ve=re.data.subarray(te*K/re.data.BYTES_PER_ELEMENT,(te+1)*K/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,pe,Ee,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Ee,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,pe,Ee,re.data);else if(M.isData3DTexture)De?(Xe&&n.texStorage3D(t.TEXTURE_3D,he,Pe,re.width,re.height,re.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Ee,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,pe,Ee,re.data);else if(M.isFramebufferTexture){if(Xe)if(De)n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height);else{let K=re.width,te=re.height;for(let ve=0;ve<he;ve++)n.texImage2D(t.TEXTURE_2D,ve,Pe,K,te,0,pe,Ee,null),K>>=1,te>>=1}}else if(Ie.length>0){if(De&&Xe){const K=Re(Ie[0]);n.texStorage2D(t.TEXTURE_2D,he,Pe,K.width,K.height)}for(let K=0,te=Ie.length;K<te;K++)_e=Ie[K],De?k&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,pe,Ee,_e):n.texImage2D(t.TEXTURE_2D,K,Pe,pe,Ee,_e);M.generateMipmaps=!1}else if(De){if(Xe){const K=Re(re);n.texStorage2D(t.TEXTURE_2D,he,Pe,K.width,K.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ee,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,pe,Ee,re);m(M)&&d(ee),j.__version=D.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function oe(P,M,H){if(M.image.length!==6)return;const ee=I(P,M),ne=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+H);const D=i.get(ne);if(ne.version!==D.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const j=qe.getPrimaries(qe.workingColorSpace),J=M.colorSpace===$i?null:qe.getPrimaries(M.colorSpace),ie=M.colorSpace===$i||j===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=M.isCompressedTexture||M.image[0].isCompressedTexture,re=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Se&&!re?pe[te]=x(M.image[te],!0,r.maxCubemapSize):pe[te]=re?M.image[te].image:M.image[te],pe[te]=it(M,pe[te]);const Ee=pe[0],Pe=o.convert(M.format,M.colorSpace),_e=o.convert(M.type),Ie=v(M.internalFormat,Pe,_e,M.colorSpace),De=M.isVideoTexture!==!0,Xe=D.__version===void 0||ee===!0,k=ne.dataReady;let he=L(M,Ee);xe(t.TEXTURE_CUBE_MAP,M);let K;if(Se){De&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ie,Ee.width,Ee.height);for(let te=0;te<6;te++){K=pe[te].mipmaps;for(let ve=0;ve<K.length;ve++){const me=K[ve];M.format!==jn?Pe!==null?De?k&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,_e,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ie,me.width,me.height,0,Pe,_e,me.data)}}}else{if(K=M.mipmaps,De&&Xe){K.length>0&&he++;const te=Re(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(re){De?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Pe,_e,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,pe[te].width,pe[te].height,0,Pe,_e,pe[te].data);for(let ve=0;ve<K.length;ve++){const Oe=K[ve].image[te].image;De?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Oe.width,Oe.height,Pe,_e,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ie,Oe.width,Oe.height,0,Pe,_e,Oe.data)}}else{De?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,_e,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Pe,_e,pe[te]);for(let ve=0;ve<K.length;ve++){const me=K[ve];De?k&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Pe,_e,me.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ie,Pe,_e,me.image[te])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),D.__version=ne.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ce(P,M,H,ee,ne,D){const j=o.convert(H.format,H.colorSpace),J=o.convert(H.type),ie=v(H.internalFormat,j,J,H.colorSpace),Se=i.get(M),re=i.get(H);if(re.__renderTarget=M,!Se.__hasExternalTextures){const pe=Math.max(1,M.width>>D),Ee=Math.max(1,M.height>>D);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,D,ie,pe,Ee,M.depth,0,j,J,null):n.texImage2D(ne,D,ie,pe,Ee,0,j,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,re.__webglTexture,0,Ve(M)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,re.__webglTexture,D),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const ee=M.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,D=y(M.stencilBuffer,ne),j=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=Ve(M);Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,D,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,D,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,D,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,P)}else{const ee=M.textures;for(let ne=0;ne<ee.length;ne++){const D=ee[ne],j=o.convert(D.format,D.colorSpace),J=o.convert(D.type),ie=v(D.internalFormat,j,J,D.colorSpace),Se=Ve(M);H&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ie,M.width,M.height):Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,ie,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ie,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(M.depthTexture);ee.__renderTarget=M,(!ee.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const ne=ee.__webglTexture,D=Ve(M);if(M.depthTexture.format===Do)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,D):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===Yo)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,D):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Le(P){const M=i.get(P),H=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=ee}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,P)}else if(H){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=t.createRenderbuffer(),fe(M.__webglDepthbuffer[ee],P,!1);else{const ne=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=M.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,D)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),fe(M.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(P,M,H){const ee=i.get(P);M!==void 0&&ce(ee.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Le(P)}function nt(P){const M=P.texture,H=i.get(P),ee=i.get(M);P.addEventListener("dispose",C);const ne=P.textures,D=P.isWebGLCubeRenderTarget===!0,j=ne.length>1;if(j||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=M.version,s.memory.textures++),D){H.__webglFramebuffer=[];for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[J]=[];for(let ie=0;ie<M.mipmaps.length;ie++)H.__webglFramebuffer[J][ie]=t.createFramebuffer()}else H.__webglFramebuffer[J]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let J=0;J<M.mipmaps.length;J++)H.__webglFramebuffer[J]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(j)for(let J=0,ie=ne.length;J<ie;J++){const Se=i.get(ne[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),s.memory.textures++)}if(P.samples>0&&Ge(P)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){const ie=ne[J];H.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[J]);const Se=o.convert(ie.format,ie.colorSpace),re=o.convert(ie.type),pe=v(ie.internalFormat,Se,re,ie.colorSpace,P.isXRRenderTarget===!0),Ee=Ve(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,pe,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,H.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(H.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(D){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(t.TEXTURE_CUBE_MAP,M);for(let J=0;J<6;J++)if(M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ce(H.__webglFramebuffer[J][ie],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else ce(H.__webglFramebuffer[J],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(j){for(let J=0,ie=ne.length;J<ie;J++){const Se=ne[J],re=i.get(Se);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),xe(t.TEXTURE_2D,Se),ce(H.__webglFramebuffer,P,Se,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,0),m(Se)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(J=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,ee.__webglTexture),xe(J,M),M.mipmaps&&M.mipmaps.length>0)for(let ie=0;ie<M.mipmaps.length;ie++)ce(H.__webglFramebuffer[ie],P,M,t.COLOR_ATTACHMENT0,J,ie);else ce(H.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,J,0);m(M)&&d(J),n.unbindTexture()}P.depthBuffer&&Le(P)}function je(P){const M=P.textures;for(let H=0,ee=M.length;H<ee;H++){const ne=M[H];if(m(ne)){const D=_(P),j=i.get(ne).__webglTexture;n.bindTexture(D,j),d(D),n.unbindTexture()}}}const gt=[],z=[];function qt(P){if(P.samples>0){if(Ge(P)===!1){const M=P.textures,H=P.width,ee=P.height;let ne=t.COLOR_BUFFER_BIT;const D=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=i.get(P),J=M.length>1;if(J)for(let ie=0;ie<M.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let ie=0;ie<M.length;ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);const Se=i.get(M[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,H,ee,0,0,H,ee,ne,t.NEAREST),l===!0&&(gt.length=0,z.length=0,gt.push(t.COLOR_ATTACHMENT0+ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(gt.push(D),z.push(D),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ie=0;ie<M.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,j.__webglColorRenderbuffer[ie]);const Se=i.get(M[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,j.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(P){return Math.min(r.maxSamples,P.samples)}function Ge(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function be(P){const M=s.render.frame;c.get(P)!==M&&(c.set(P,M),P.update())}function it(P,M){const H=P.colorSpace,ee=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||H!==Jo&&H!==$i&&(qe.getTransfer(H)===rt?(ee!==jn||ne!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=N,this.rebindTextures=Ue,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ge}function JA(t,e){function n(i,r=$i){let o;const s=qe.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===wh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Th)return t.UNSIGNED_SHORT_5_5_5_1;if(i===_0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===m0)return t.BYTE;if(i===g0)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===Mh)return t.INT;if(i===Gr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===la)return t.HALF_FLOAT;if(i===v0)return t.ALPHA;if(i===x0)return t.RGB;if(i===jn)return t.RGBA;if(i===y0)return t.LUMINANCE;if(i===S0)return t.LUMINANCE_ALPHA;if(i===Do)return t.DEPTH_COMPONENT;if(i===Yo)return t.DEPTH_STENCIL;if(i===E0)return t.RED;if(i===Ah)return t.RED_INTEGER;if(i===M0)return t.RG;if(i===Ch)return t.RG_INTEGER;if(i===Rh)return t.RGBA_INTEGER;if(i===vl||i===xl||i===yl||i===Sl)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===vl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===vl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Sl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===jf||i===qf||i===Yf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Xf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$f||i===Kf||i===Zf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===$f||i===Kf)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Zf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===od||i===sd||i===ad||i===ld||i===ud||i===cd||i===fd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Qf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ed)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===td)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===id)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===od)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ad)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ld)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ud)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===El||i===dd||i===hd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===El)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===dd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===hd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===w0||i===pd||i===md||i===gd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===El)return o.COMPRESSED_RED_RGTC1_EXT;if(i===pd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===md)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===gd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class eC extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class nl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(u,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new nl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const nC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class rC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:nC,fragmentShader:iC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new ha(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oC extends es{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const x=new rC,m=n.getContextAttributes();let d=null,_=null;const v=[],y=[],L=new st;let E=null;const C=new Wn;C.viewport=new Mt;const b=new Wn;b.viewport=new Mt;const w=[C,b],S=new eC;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=v[$];return oe===void 0&&(oe=new Ac,v[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=v[$];return oe===void 0&&(oe=new Ac,v[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=v[$];return oe===void 0&&(oe=new Ac,v[$]=oe),oe.getHandSpace()};function B($){const oe=y.indexOf($.inputSource);if(oe===-1)return;const ce=v[oe];ce!==void 0&&(ce.update($.inputSource,$.frame,u||s),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",W);for(let $=0;$<v.length;$++){const oe=y[$];oe!==null&&(y[$]=null,v[$].disconnect(oe))}R=null,U=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,_=null,I.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Wr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ce=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?Yo:Do,ce=m.stencil?qo:Gr);const Ae={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:o};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Wr(h.textureWidth,h.textureHeight,{format:jn,type:Li,depthTexture:new B0(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),I.setContext(r),I.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W($){for(let oe=0;oe<$.removed.length;oe++){const ce=$.removed[oe],fe=y.indexOf(ce);fe>=0&&(y[fe]=null,v[fe].disconnect(ce))}for(let oe=0;oe<$.added.length;oe++){const ce=$.added[oe];let fe=y.indexOf(ce);if(fe===-1){for(let Le=0;Le<v.length;Le++)if(Le>=y.length){y.push(ce),fe=Le;break}else if(y[Le]===null){y[Le]=ce,fe=Le;break}if(fe===-1)break}const Ae=v[fe];Ae&&Ae.connect(ce)}}const q=new X,Q=new X;function N($,oe,ce){q.setFromMatrixPosition(oe.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const fe=q.distanceTo(Q),Ae=oe.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ue=Ae[14]/(Ae[10]-1),nt=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],gt=(Ae[9]-1)/Ae[5],z=(Ae[8]-1)/Ae[0],qt=(Le[8]+1)/Le[0],Ve=Ue*z,Ge=Ue*qt,be=fe/(-z+qt),it=be*-z;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(it),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ae[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Re=Ue+be,P=nt+be,M=Ve-it,H=Ge+(fe-it),ee=je*nt/P*Re,ne=gt*nt/P*Re;$.projectionMatrix.makePerspective(M,H,ee,ne,Re,P),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Z($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let oe=$.near,ce=$.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),S.near=b.near=C.near=oe,S.far=b.far=C.far=ce,(R!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,U=S.far),C.layers.mask=$.layers.mask|2,b.layers.mask=$.layers.mask|4,S.layers.mask=C.layers.mask|b.layers.mask;const fe=$.parent,Ae=S.cameras;Z(S,fe);for(let Le=0;Le<Ae.length;Le++)Z(Ae[Le],fe);Ae.length===2?N(S,C,b):S.projectionMatrix.copy(C.projectionMatrix),A($,S,fe)};function A($,oe,ce){ce===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=_d*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let le=null;function xe($,oe){if(c=oe.getViewerPose(u||s),g=oe,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Le=0;Le<ce.length;Le++){const Ue=ce[Le];let nt=null;if(p!==null)nt=p.getViewport(Ue);else{const gt=f.getViewSubImage(h,Ue);nt=gt.viewport,Le===0&&(e.setRenderTargetTextures(_,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(_))}let je=w[Le];je===void 0&&(je=new Wn,je.layers.enable(Le),je.viewport=new Mt,w[Le]=je),je.matrix.fromArray(Ue.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ue.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(je)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=f.getDepthInformation(ce[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,r.renderState)}}for(let ce=0;ce<v.length;ce++){const fe=y[ce],Ae=v[ce];fe!==null&&Ae!==void 0&&Ae.update(fe,oe,u||s)}le&&le($,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const I=new O0;I.setAnimationLoop(xe),this.setAnimationLoop=function($){le=$},this.dispose=function(){}}}const Sr=new Ii,sC=new Ct;function aC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,N0(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),f(m,d)):d.isMeshPhongMaterial?(o(m,d),c(m,d)):d.isMeshStandardMaterial?(o(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),x(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,_,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const _=e.get(d),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Sr.copy(y),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(sC.makeRotationFromEuler(Sr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,_,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*_,m.scale.value=v*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,_){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const _=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lC(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(g(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const L=v.program;i.updateUBOMapping(_,L);const E=e.render.frame;o[_.id]!==E&&(h(_),o[_.id]=E)}function c(_){const v=f();_.__bindingPointIndex=v;const y=t.createBuffer(),L=_.__size,E=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,L=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let E=0,C=y.length;E<C;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let w=0,S=b.length;w<S;w++){const R=b[w];if(p(R,E,w,L)===!0){const U=R.__offset,B=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let W=0;W<B.length;W++){const q=B[W],Q=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,U+Y,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,L){const E=_.value,C=v+"_"+y;if(L[C]===void 0)return typeof E=="number"||typeof E=="boolean"?L[C]=E:L[C]=E.clone(),!0;{const b=L[C];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return L[C]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function g(_){const v=_.uniforms;let y=0;const L=16;for(let C=0,b=v.length;C<b;C++){const w=Array.isArray(v[C])?v[C]:[v[C]];for(let S=0,R=w.length;S<R;S++){const U=w[S],B=Array.isArray(U.value)?U.value:[U.value];for(let Y=0,W=B.length;Y<W;Y++){const q=B[Y],Q=x(q),N=y%L,Z=N%Q.boundary,A=N+Z;y+=Z,A!==0&&L-A<Q.storage&&(y+=L-A),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=Q.storage}}}const E=y%L;return E>0&&(y+=L-E),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function d(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:d}}class uC{constructor(e={}){const{canvas:n=KE(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const _=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=ar,this.toneMappingExposure=1;const y=this;let L=!1,E=0,C=0,b=null,w=-1,S=null;const R=new Mt,U=new Mt;let B=null;const Y=new ot(0);let W=0,q=n.width,Q=n.height,N=1,Z=null,A=null;const le=new Mt(0,0,q,Q),xe=new Mt(0,0,q,Q);let I=!1;const $=new F0;let oe=!1,ce=!1;const fe=new Ct,Ae=new Ct,Le=new X,Ue=new Mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function gt(){return b===null?N:1}let z=i;function qt(T,F){return n.getContext(T,F)}try{const T={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),z===null){const F="webgl2";if(z=qt(F,T),z===null)throw qt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ve,Ge,be,it,Re,P,M,H,ee,ne,D,j,J,ie,Se,re,pe,Ee,Pe,_e,Ie,De,Xe,k;function he(){Ve=new pT(z),Ve.init(),De=new JA(z,Ve),Ge=new lT(z,Ve,e,De),be=new KA(z,Ve),Ge.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),it=new _T(z),Re=new UA,P=new QA(z,Ve,be,Re,Ge,De,it),M=new cT(y),H=new hT(y),ee=new wM(z),Xe=new sT(z,ee),ne=new mT(z,ee,it,Xe),D=new xT(z,ne,ee,it),Pe=new vT(z,Ge,P),re=new uT(Re),j=new NA(y,M,H,Ve,Ge,Xe,re),J=new aC(y,Re),ie=new FA,Se=new GA(Ve),Ee=new oT(y,M,H,be,D,p,l),pe=new YA(y,D,Ge),k=new lC(z,it,Ge,be),_e=new aT(z,Ve,it),Ie=new gT(z,Ve,it),it.programs=j.programs,y.capabilities=Ge,y.extensions=Ve,y.properties=Re,y.renderLists=ie,y.shadowMap=pe,y.state=be,y.info=it}he();const K=new oC(y,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=Ve.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ve.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize(q,Q,!1))},this.getSize=function(T){return T.set(q,Q)},this.setSize=function(T,F,V=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Q=F,n.width=Math.floor(T*N),n.height=Math.floor(F*N),V===!0&&(n.style.width=T+"px",n.style.height=F+"px"),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(q*N,Q*N).floor()},this.setDrawingBufferSize=function(T,F,V){q=T,Q=F,N=V,n.width=Math.floor(T*V),n.height=Math.floor(F*V),this.setViewport(0,0,T,F)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,F,V,G){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,F,V,G),be.viewport(R.copy(le).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(xe)},this.setScissor=function(T,F,V,G){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,F,V,G),be.scissor(U.copy(xe).multiplyScalar(N).round())},this.getScissorTest=function(){return I},this.setScissorTest=function(T){be.setScissorTest(I=T)},this.setOpaqueSort=function(T){Z=T},this.setTransparentSort=function(T){A=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,F=!0,V=!0){let G=0;if(T){let O=!1;if(b!==null){const ue=b.texture.format;O=ue===Rh||ue===Ch||ue===Ah}if(O){const ue=b.texture.type,ge=ue===Li||ue===Gr||ue===ta||ue===qo||ue===wh||ue===Th,Me=Ee.getClearColor(),we=Ee.getClearAlpha(),ke=Me.r,ze=Me.g,Te=Me.b;ge?(g[0]=ke,g[1]=ze,g[2]=Te,g[3]=we,z.clearBufferuiv(z.COLOR,0,g)):(x[0]=ke,x[1]=ze,x[2]=Te,x[3]=we,z.clearBufferiv(z.COLOR,0,x))}else G|=z.COLOR_BUFFER_BIT}F&&(G|=z.DEPTH_BUFFER_BIT),V&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ie.dispose(),Se.dispose(),Re.dispose(),M.dispose(),H.dispose(),D.dispose(),Xe.dispose(),k.dispose(),j.dispose(),K.dispose(),K.removeEventListener("sessionstart",Xh),K.removeEventListener("sessionend",jh),mr.stop()};function te(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=it.autoReset,F=pe.enabled,V=pe.autoUpdate,G=pe.needsUpdate,O=pe.type;he(),it.autoReset=T,pe.enabled=F,pe.autoUpdate=V,pe.needsUpdate=G,pe.type=O}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const F=T.target;F.removeEventListener("dispose",Oe),yt(F)}function yt(T){zt(T),Re.remove(T)}function zt(T){const F=Re.get(T).programs;F!==void 0&&(F.forEach(function(V){j.releaseProgram(V)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,V,G,O,ue){F===null&&(F=nt);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Me=bx(T,F,V,G,O);be.setMaterial(G,ge);let we=V.index,ke=1;if(G.wireframe===!0){if(we=ne.getWireframeAttribute(V),we===void 0)return;ke=2}const ze=V.drawRange,Te=V.attributes.position;let $e=ze.start*ke,at=(ze.start+ze.count)*ke;ue!==null&&($e=Math.max($e,ue.start*ke),at=Math.min(at,(ue.start+ue.count)*ke)),we!==null?($e=Math.max($e,0),at=Math.min(at,we.count)):Te!=null&&($e=Math.max($e,0),at=Math.min(at,Te.count));const ft=at-$e;if(ft<0||ft===1/0)return;Xe.setup(O,G,Me,V,we);let Jt,Qe=_e;if(we!==null&&(Jt=ee.get(we),Qe=Ie,Qe.setIndex(Jt)),O.isMesh)G.wireframe===!0?(be.setLineWidth(G.wireframeLinewidth*gt()),Qe.setMode(z.LINES)):Qe.setMode(z.TRIANGLES);else if(O.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*gt()),O.isLineSegments?Qe.setMode(z.LINES):O.isLineLoop?Qe.setMode(z.LINE_LOOP):Qe.setMode(z.LINE_STRIP)}else O.isPoints?Qe.setMode(z.POINTS):O.isSprite&&Qe.setMode(z.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Qe.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ce=O._multiDrawStarts,fi=O._multiDrawCounts,Je=O._multiDrawCount,kn=we?ee.get(we).bytesPerElement:1,$r=Re.get(G).currentProgram.getUniforms();for(let dn=0;dn<Je;dn++)$r.setValue(z,"_gl_DrawID",dn),Qe.render(Ce[dn]/kn,fi[dn])}else if(O.isInstancedMesh)Qe.renderInstances($e,ft,O.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,fi=Math.min(V.instanceCount,Ce);Qe.renderInstances($e,ft,fi)}else Qe.render($e,ft)};function et(T,F,V){T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,_a(T,F,V),T.side=cr,T.needsUpdate=!0,_a(T,F,V),T.side=yi):_a(T,F,V)}this.compile=function(T,F,V=null){V===null&&(V=T),d=Se.get(V),d.init(F),v.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),T!==V&&T.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const G=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ue=O.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Me=ue[ge];et(Me,V,O),G.add(Me)}else et(ue,V,O),G.add(ue)}),v.pop(),d=null,G},this.compileAsync=function(T,F,V=null){const G=this.compile(T,F,V);return new Promise(O=>{function ue(){if(G.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&G.delete(ge)}),G.size===0){O(T);return}setTimeout(ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Un=null;function ci(T){Un&&Un(T)}function Xh(){mr.stop()}function jh(){mr.start()}const mr=new O0;mr.setAnimationLoop(ci),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(T){Un=T,K.setAnimationLoop(T),T===null?mr.stop():mr.start()},K.addEventListener("sessionstart",Xh),K.addEventListener("sessionend",jh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,F,b),d=Se.get(T,v.length),d.init(F),v.push(d),Ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),$.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,oe=re.init(this.clippingPlanes,ce),m=ie.get(T,_.length),m.init(),_.push(m),K.enabled===!0&&K.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&wu(ue,F,-1/0,y.sortObjects)}wu(T,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(Z,A),je=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,je&&Ee.addToRenderList(m,T),this.info.render.frame++,oe===!0&&re.beginShadows();const V=d.state.shadowsArray;pe.render(V,T,F),oe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,O=m.transmissive;if(d.setupLights(),F.isArrayCamera){const ue=F.cameras;if(O.length>0)for(let ge=0,Me=ue.length;ge<Me;ge++){const we=ue[ge];Yh(G,O,T,we)}je&&Ee.render(T);for(let ge=0,Me=ue.length;ge<Me;ge++){const we=ue[ge];qh(m,T,we,we.viewport)}}else O.length>0&&Yh(G,O,T,F),je&&Ee.render(T),qh(m,T,F);b!==null&&(P.updateMultisampleRenderTarget(b),P.updateRenderTargetMipmap(b)),T.isScene===!0&&T.onAfterRender(y,T,F),Xe.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(d=v[v.length-1],oe===!0&&re.setGlobalState(y.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function wu(T,F,V,G){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){G&&Ue.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const ge=D.update(T),Me=T.material;Me.visible&&m.push(T,ge,Me,V,Ue.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$.intersectsObject(T))){const ge=D.update(T),Me=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ue.copy(T.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const we=ge.groups;for(let ke=0,ze=we.length;ke<ze;ke++){const Te=we[ke],$e=Me[Te.materialIndex];$e&&$e.visible&&m.push(T,ge,$e,V,Ue.z,Te)}}else Me.visible&&m.push(T,ge,Me,V,Ue.z,null)}}const ue=T.children;for(let ge=0,Me=ue.length;ge<Me;ge++)wu(ue[ge],F,V,G)}function qh(T,F,V,G){const O=T.opaque,ue=T.transmissive,ge=T.transparent;d.setupLightsView(V),oe===!0&&re.setGlobalState(y.clippingPlanes,V),G&&be.viewport(R.copy(G)),O.length>0&&ga(O,F,V),ue.length>0&&ga(ue,F,V),ge.length>0&&ga(ge,F,V),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yh(T,F,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Wr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?la:Li,minFilter:Nr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const ue=d.state.transmissionRenderTarget[G.id],ge=G.viewport||R;ue.setSize(ge.z,ge.w);const Me=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(Y),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),je&&Ee.render(V);const we=y.toneMapping;y.toneMapping=ar;const ke=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),oe===!0&&re.setGlobalState(y.clippingPlanes,G),ga(T,V,G),P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,$e=F.length;Te<$e;Te++){const at=F[Te],ft=at.object,Jt=at.geometry,Qe=at.material,Ce=at.group;if(Qe.side===yi&&ft.layers.test(G.layers)){const fi=Qe.side;Qe.side=un,Qe.needsUpdate=!0,$h(ft,V,G,Jt,Qe,Ce),Qe.side=fi,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(P.updateMultisampleRenderTarget(ue),P.updateRenderTargetMipmap(ue))}y.setRenderTarget(Me),y.setClearColor(Y,W),ke!==void 0&&(G.viewport=ke),y.toneMapping=we}function ga(T,F,V){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,ue=T.length;O<ue;O++){const ge=T[O],Me=ge.object,we=ge.geometry,ke=G===null?ge.material:G,ze=ge.group;Me.layers.test(V.layers)&&$h(Me,F,V,we,ke,ze)}}function $h(T,F,V,G,O,ue){T.onBeforeRender(y,F,V,G,O,ue),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(y,F,V,G,T,ue),O.transparent===!0&&O.side===yi&&O.forceSinglePass===!1?(O.side=un,O.needsUpdate=!0,y.renderBufferDirect(V,F,G,O,T,ue),O.side=cr,O.needsUpdate=!0,y.renderBufferDirect(V,F,G,O,T,ue),O.side=yi):y.renderBufferDirect(V,F,G,O,T,ue),T.onAfterRender(y,F,V,G,O,ue)}function _a(T,F,V){F.isScene!==!0&&(F=nt);const G=Re.get(T),O=d.state.lights,ue=d.state.shadowsArray,ge=O.state.version,Me=j.getParameters(T,O.state,ue,F,V),we=j.getProgramCacheKey(Me);let ke=G.programs;G.environment=T.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(T.isMeshStandardMaterial?H:M).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Oe),ke=new Map,G.programs=ke);let ze=ke.get(we);if(ze!==void 0){if(G.currentProgram===ze&&G.lightsStateVersion===ge)return Zh(T,Me),ze}else Me.uniforms=j.getUniforms(T),T.onBeforeCompile(Me,y),ze=j.acquireProgram(Me,we),ke.set(we,ze),G.uniforms=Me.uniforms;const Te=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Te.clippingPlanes=re.uniform),Zh(T,Me),G.needsLights=Lx(T),G.lightsStateVersion=ge,G.needsLights&&(Te.ambientLightColor.value=O.state.ambient,Te.lightProbe.value=O.state.probe,Te.directionalLights.value=O.state.directional,Te.directionalLightShadows.value=O.state.directionalShadow,Te.spotLights.value=O.state.spot,Te.spotLightShadows.value=O.state.spotShadow,Te.rectAreaLights.value=O.state.rectArea,Te.ltc_1.value=O.state.rectAreaLTC1,Te.ltc_2.value=O.state.rectAreaLTC2,Te.pointLights.value=O.state.point,Te.pointLightShadows.value=O.state.pointShadow,Te.hemisphereLights.value=O.state.hemi,Te.directionalShadowMap.value=O.state.directionalShadowMap,Te.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Te.spotShadowMap.value=O.state.spotShadowMap,Te.spotLightMatrix.value=O.state.spotLightMatrix,Te.spotLightMap.value=O.state.spotLightMap,Te.pointShadowMap.value=O.state.pointShadowMap,Te.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=ze,G.uniformsList=null,ze}function Kh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=Ml.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function Zh(T,F){const V=Re.get(T);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.batchingColor=F.batchingColor,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.instancingMorph=F.instancingMorph,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function bx(T,F,V,G,O){F.isScene!==!0&&(F=nt),P.resetTextureUnits();const ue=F.fog,ge=G.isMeshStandardMaterial?F.environment:null,Me=b===null?y.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Jo,we=(G.isMeshStandardMaterial?H:M).get(G.envMap||ge),ke=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ze=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Te=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,at=!!V.morphAttributes.color;let ft=ar;G.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ft=y.toneMapping);const Jt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qe=Jt!==void 0?Jt.length:0,Ce=Re.get(G),fi=d.state.lights;if(oe===!0&&(ce===!0||T!==S)){const wn=T===S&&G.id===w;re.setState(G,T,wn)}let Je=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==fi.state.version||Ce.outputColorSpace!==Me||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==we||G.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==ze||Ce.morphTargets!==Te||Ce.morphNormals!==$e||Ce.morphColors!==at||Ce.toneMapping!==ft||Ce.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ce.__version=G.version);let kn=Ce.currentProgram;Je===!0&&(kn=_a(G,F,O));let $r=!1,dn=!1,rs=!1;const dt=kn.getUniforms(),Zn=Ce.uniforms;if(be.useProgram(kn.program)&&($r=!0,dn=!0,rs=!0),G.id!==w&&(w=G.id,dn=!0),$r||S!==T){be.buffers.depth.getReversed()?(fe.copy(T.projectionMatrix),QE(fe),JE(fe),dt.setValue(z,"projectionMatrix",fe)):dt.setValue(z,"projectionMatrix",T.projectionMatrix),dt.setValue(z,"viewMatrix",T.matrixWorldInverse);const Ui=dt.map.cameraPosition;Ui!==void 0&&Ui.setValue(z,Le.setFromMatrixPosition(T.matrixWorld)),Ge.logarithmicDepthBuffer&&dt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&dt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,dn=!0,rs=!0)}if(O.isSkinnedMesh){dt.setOptional(z,O,"bindMatrix"),dt.setOptional(z,O,"bindMatrixInverse");const wn=O.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),dt.setValue(z,"boneTexture",wn.boneTexture,P))}O.isBatchedMesh&&(dt.setOptional(z,O,"batchingTexture"),dt.setValue(z,"batchingTexture",O._matricesTexture,P),dt.setOptional(z,O,"batchingIdTexture"),dt.setValue(z,"batchingIdTexture",O._indirectTexture,P),dt.setOptional(z,O,"batchingColorTexture"),O._colorsTexture!==null&&dt.setValue(z,"batchingColorTexture",O._colorsTexture,P));const os=V.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&Pe.update(O,V,kn),(dn||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,dt.setValue(z,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Zn.envMap.value=we,Zn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Zn.envMapIntensity.value=F.environmentIntensity),dn&&(dt.setValue(z,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Px(Zn,rs),ue&&G.fog===!0&&J.refreshFogUniforms(Zn,ue),J.refreshMaterialUniforms(Zn,G,N,Q,d.state.transmissionRenderTarget[T.id]),Ml.upload(z,Kh(Ce),Zn,P)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ml.upload(z,Kh(Ce),Zn,P),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&dt.setValue(z,"center",O.center),dt.setValue(z,"modelViewMatrix",O.modelViewMatrix),dt.setValue(z,"normalMatrix",O.normalMatrix),dt.setValue(z,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wn=G.uniformsGroups;for(let Ui=0,ki=wn.length;Ui<ki;Ui++){const Qh=wn[Ui];k.update(Qh,kn),k.bind(Qh,kn)}}return kn}function Px(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function Lx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(T,F,V){Re.get(T.texture).__webglTexture=F,Re.get(T.depthTexture).__webglTexture=V;const G=Re.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,F){const V=Re.get(T);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,V=0){b=T,E=F,C=V;let G=!0,O=null,ue=!1,ge=!1;if(T){const we=Re.get(T);if(we.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(z.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(we.__hasExternalTextures)P.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Te=T.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(T.width!==Te.image.width||T.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const ze=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ze[F])?O=ze[F][V]:O=ze[F],ue=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?O=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(ze)?O=ze[V]:O=ze,R.copy(T.viewport),U.copy(T.scissor),B=T.scissorTest}else R.copy(le).multiplyScalar(N).floor(),U.copy(xe).multiplyScalar(N).floor(),B=I;if(be.bindFramebuffer(z.FRAMEBUFFER,O)&&G&&be.drawBuffers(T,O),be.viewport(R),be.scissor(U),be.setScissorTest(B),ue){const we=Re.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,V)}else if(ge){const we=Re.get(T.texture),ke=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.__webglTexture,V||0,ke)}w=-1},this.readRenderTargetPixels=function(T,F,V,G,O,ue,ge){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){be.bindFramebuffer(z.FRAMEBUFFER,Me);try{const we=T.texture,ke=we.format,ze=we.type;if(!Ge.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-G&&V>=0&&V<=T.height-O&&z.readPixels(F,V,G,O,De.convert(ke),De.convert(ze),ue)}finally{const we=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(T,F,V,G,O,ue,ge){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const we=T.texture,ke=we.format,ze=we.type;if(!Ge.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=T.width-G&&V>=0&&V<=T.height-O){be.bindFramebuffer(z.FRAMEBUFFER,Me);const Te=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.bufferData(z.PIXEL_PACK_BUFFER,ue.byteLength,z.STREAM_READ),z.readPixels(F,V,G,O,De.convert(ke),De.convert(ze),0);const $e=b!==null?Re.get(b).__webglFramebuffer:null;be.bindFramebuffer(z.FRAMEBUFFER,$e);const at=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ZE(z,at,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Te),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ue),z.deleteBuffer(Te),z.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,F=null,V=0){T.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-V),O=Math.floor(T.image.width*G),ue=Math.floor(T.image.height*G),ge=F!==null?F.x:0,Me=F!==null?F.y:0;P.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,ge,Me,O,ue),be.unbindTexture()},this.copyTextureToTexture=function(T,F,V=null,G=null,O=0){T.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],F=arguments[2],O=arguments[3]||0,V=null);let ue,ge,Me,we,ke,ze,Te,$e,at;const ft=T.isCompressedTexture?T.mipmaps[O]:T.image;V!==null?(ue=V.max.x-V.min.x,ge=V.max.y-V.min.y,Me=V.isBox3?V.max.z-V.min.z:1,we=V.min.x,ke=V.min.y,ze=V.isBox3?V.min.z:0):(ue=ft.width,ge=ft.height,Me=ft.depth||1,we=0,ke=0,ze=0),G!==null?(Te=G.x,$e=G.y,at=G.z):(Te=0,$e=0,at=0);const Jt=De.convert(F.format),Qe=De.convert(F.type);let Ce;F.isData3DTexture?(P.setTexture3D(F,0),Ce=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(P.setTexture2DArray(F,0),Ce=z.TEXTURE_2D_ARRAY):(P.setTexture2D(F,0),Ce=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const fi=z.getParameter(z.UNPACK_ROW_LENGTH),Je=z.getParameter(z.UNPACK_IMAGE_HEIGHT),kn=z.getParameter(z.UNPACK_SKIP_PIXELS),$r=z.getParameter(z.UNPACK_SKIP_ROWS),dn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,we),z.pixelStorei(z.UNPACK_SKIP_ROWS,ke),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ze);const rs=T.isDataArrayTexture||T.isData3DTexture,dt=F.isDataArrayTexture||F.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){const Zn=Re.get(T),os=Re.get(F),wn=Re.get(Zn.__renderTarget),Ui=Re.get(os.__renderTarget);be.bindFramebuffer(z.READ_FRAMEBUFFER,wn.__webglFramebuffer),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let ki=0;ki<Me;ki++)rs&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,O,ze+ki),T.isDepthTexture?(dt&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Re.get(F).__webglTexture,O,at+ki),z.blitFramebuffer(we,ke,ue,ge,Te,$e,ue,ge,z.DEPTH_BUFFER_BIT,z.NEAREST)):dt?z.copyTexSubImage3D(Ce,O,Te,$e,at+ki,we,ke,ue,ge):z.copyTexSubImage2D(Ce,O,Te,$e,at+ki,we,ke,ue,ge);be.bindFramebuffer(z.READ_FRAMEBUFFER,null),be.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else dt?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ce,O,Te,$e,at,ue,ge,Me,Jt,Qe,ft.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Ce,O,Te,$e,at,ue,ge,Me,Jt,ft.data):z.texSubImage3D(Ce,O,Te,$e,at,ue,ge,Me,Jt,Qe,ft):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,O,Te,$e,ue,ge,Jt,Qe,ft.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,O,Te,$e,ft.width,ft.height,Jt,ft.data):z.texSubImage2D(z.TEXTURE_2D,O,Te,$e,ue,ge,Jt,Qe,ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,fi),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Je),z.pixelStorei(z.UNPACK_SKIP_PIXELS,kn),z.pixelStorei(z.UNPACK_SKIP_ROWS,$r),z.pixelStorei(z.UNPACK_SKIP_IMAGES,dn),O===0&&F.generateMipmaps&&z.generateMipmap(Ce),be.unbindTexture()},this.copyTextureToTexture3D=function(T,F,V=null,G=null,O=0){return T.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,T=arguments[2],F=arguments[3],O=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,F,V,G,O)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){E=0,C=0,b=null,be.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}class cC extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);const fC=(t,e)=>{const n=t.parentElement,i=new cC,r=new z0(-1,1,1,-1,0,1),o=new uC({canvas:t,alpha:!0});function s(){const f=n.clientWidth,h=n.clientHeight;o.setSize(f,h)}window.addEventListener("resize",s),s();const a=new Di({uniforms:{time:{value:0},resolution:{value:new st(n.clientWidth,n.clientHeight)}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform float time;
      uniform vec2 resolution;
      varying vec2 vUv;

      vec3 bloom(vec3 color, float threshold, float intensity) {
        float brightness = dot(color, vec3(0.2126, 0.7152, 0.0722));
        float contribution = max(0.0, brightness - threshold) * intensity;
        return color * (1.0 + contribution);
      }

      vec2 curveRemapUV(vec2 uv) {
        uv = uv * 2.0 - 1.0;
        vec2 offset = abs(uv.yx) / vec2(8.0, 6.0);
        uv = uv + uv * offset * offset;
        uv = uv * 0.5 + 0.5;
        return uv;
      }

      float scanline(vec2 uv) {
        return sin(uv.y * 200.0 * 3.14159 * 2.0) * 0.03 + 1.0;
      }

      float verticalSync(vec2 uv) {
        float cycleTime = mod(time, 6.0);
        
        if (cycleTime < 5.0) {
          return 1.0;
        }
        
        float normalizedTime = (cycleTime - 5.0);
        float y = normalizedTime;
        
        return smoothstep(0.0, 1.0, abs(uv.y - y) * 50.0);
      }

      void main() {
        vec2 uv = curveRemapUV(vUv);
        
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
          return;
        }

        float scanlines = scanline(uv);
        float vSync = verticalSync(uv);
        
        float r = scanlines * vSync;
        float g = scanlines * vSync * 1.02;
        float b = scanlines * vSync * 0.98;

        float noise = fract(sin(dot(uv, vec2(12.9898,78.233)) + time) * 43758.5453) * 0.015;
        
        float vignette = 1.0 - length((uv - 0.5) * 1.3);
        vignette = pow(vignette, 0.4);

        float flicker = 0.97 + 0.03 * sin(time * 8.0);

        vec3 color = vec3(r * 0.1, g * 0.15, b * 0.1);
        color += noise;
        color *= vignette * flicker;
        color = bloom(color, 0.3, 2.0);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `}),l=new ha(2,2),u=new oi(l,a);i.add(u);function c(f){requestAnimationFrame(c),a.uniforms.time.value=f*.001,o.render(i,r)}return c(),()=>{window.removeEventListener("resize",s),o.dispose(),l.dispose(),a.dispose()}};function dC(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const hC=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,pC=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mC={};function ag(t,e){return(mC.jsx?pC:hC).test(t)}const gC=/[ \t\n\f\r]/g;function _C(t){return typeof t=="object"?t.type==="text"?lg(t.value):!1:lg(t)}function lg(t){return t.replace(gC,"")===""}class pa{constructor(e,n,i){this.property=e,this.normal=n,i&&(this.space=i)}}pa.prototype.property={};pa.prototype.normal={};pa.prototype.space=null;function X0(t,e){const n={},i={};let r=-1;for(;++r<t.length;)Object.assign(n,t[r].property),Object.assign(i,t[r].normal);return new pa(n,i,e)}function xd(t){return t.toLowerCase()}class Nn{constructor(e,n){this.property=e,this.attribute=n}}Nn.prototype.space=null;Nn.prototype.boolean=!1;Nn.prototype.booleanish=!1;Nn.prototype.overloadedBoolean=!1;Nn.prototype.number=!1;Nn.prototype.commaSeparated=!1;Nn.prototype.spaceSeparated=!1;Nn.prototype.commaOrSpaceSeparated=!1;Nn.prototype.mustUseProperty=!1;Nn.prototype.defined=!1;let vC=0;const Fe=Yr(),Tt=Yr(),j0=Yr(),ae=Yr(),lt=Yr(),Uo=Yr(),mn=Yr();function Yr(){return 2**++vC}const yd=Object.freeze(Object.defineProperty({__proto__:null,boolean:Fe,booleanish:Tt,commaOrSpaceSeparated:mn,commaSeparated:Uo,number:ae,overloadedBoolean:j0,spaceSeparated:lt},Symbol.toStringTag,{value:"Module"})),Cc=Object.keys(yd);class Lh extends Nn{constructor(e,n,i,r){let o=-1;if(super(e,n),ug(this,"space",r),typeof i=="number")for(;++o<Cc.length;){const s=Cc[o];ug(this,Cc[o],(i&yd[s])===yd[s])}}}Lh.prototype.defined=!0;function ug(t,e,n){n&&(t[e]=n)}const xC={}.hasOwnProperty;function ns(t){const e={},n={};let i;for(i in t.properties)if(xC.call(t.properties,i)){const r=t.properties[i],o=new Lh(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),e[i]=o,n[xd(i)]=i,n[xd(o.attribute)]=i}return new pa(e,n,t.space)}const q0=ns({space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Y0=ns({space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function $0(t,e){return e in t?t[e]:e}function K0(t,e){return $0(t,e.toLowerCase())}const Z0=ns({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:K0,properties:{xmlns:null,xmlnsXLink:null}}),Q0=ns({transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Tt,ariaAutoComplete:null,ariaBusy:Tt,ariaChecked:Tt,ariaColCount:ae,ariaColIndex:ae,ariaColSpan:ae,ariaControls:lt,ariaCurrent:null,ariaDescribedBy:lt,ariaDetails:null,ariaDisabled:Tt,ariaDropEffect:lt,ariaErrorMessage:null,ariaExpanded:Tt,ariaFlowTo:lt,ariaGrabbed:Tt,ariaHasPopup:null,ariaHidden:Tt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:lt,ariaLevel:ae,ariaLive:null,ariaModal:Tt,ariaMultiLine:Tt,ariaMultiSelectable:Tt,ariaOrientation:null,ariaOwns:lt,ariaPlaceholder:null,ariaPosInSet:ae,ariaPressed:Tt,ariaReadOnly:Tt,ariaRelevant:null,ariaRequired:Tt,ariaRoleDescription:lt,ariaRowCount:ae,ariaRowIndex:ae,ariaRowSpan:ae,ariaSelected:Tt,ariaSetSize:ae,ariaSort:null,ariaValueMax:ae,ariaValueMin:ae,ariaValueNow:ae,ariaValueText:null,role:null}}),yC=ns({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:K0,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Uo,acceptCharset:lt,accessKey:lt,action:null,allow:null,allowFullScreen:Fe,allowPaymentRequest:Fe,allowUserMedia:Fe,alt:null,as:null,async:Fe,autoCapitalize:null,autoComplete:lt,autoFocus:Fe,autoPlay:Fe,blocking:lt,capture:null,charSet:null,checked:Fe,cite:null,className:lt,cols:ae,colSpan:null,content:null,contentEditable:Tt,controls:Fe,controlsList:lt,coords:ae|Uo,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Fe,defer:Fe,dir:null,dirName:null,disabled:Fe,download:j0,draggable:Tt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Fe,formTarget:null,headers:lt,height:ae,hidden:Fe,high:ae,href:null,hrefLang:null,htmlFor:lt,httpEquiv:lt,id:null,imageSizes:null,imageSrcSet:null,inert:Fe,inputMode:null,integrity:null,is:null,isMap:Fe,itemId:null,itemProp:lt,itemRef:lt,itemScope:Fe,itemType:lt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Fe,low:ae,manifest:null,max:null,maxLength:ae,media:null,method:null,min:null,minLength:ae,multiple:Fe,muted:Fe,name:null,nonce:null,noModule:Fe,noValidate:Fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Fe,optimum:ae,pattern:null,ping:lt,placeholder:null,playsInline:Fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Fe,referrerPolicy:null,rel:lt,required:Fe,reversed:Fe,rows:ae,rowSpan:ae,sandbox:lt,scope:null,scoped:Fe,seamless:Fe,selected:Fe,shadowRootClonable:Fe,shadowRootDelegatesFocus:Fe,shadowRootMode:null,shape:null,size:ae,sizes:null,slot:null,span:ae,spellCheck:Tt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ae,step:null,style:null,tabIndex:ae,target:null,title:null,translate:null,type:null,typeMustMatch:Fe,useMap:null,value:Tt,width:ae,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:lt,axis:null,background:null,bgColor:null,border:ae,borderColor:null,bottomMargin:ae,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Fe,declare:Fe,event:null,face:null,frame:null,frameBorder:null,hSpace:ae,leftMargin:ae,link:null,longDesc:null,lowSrc:null,marginHeight:ae,marginWidth:ae,noResize:Fe,noHref:Fe,noShade:Fe,noWrap:Fe,object:null,profile:null,prompt:null,rev:null,rightMargin:ae,rules:null,scheme:null,scrolling:Tt,standby:null,summary:null,text:null,topMargin:ae,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ae,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Fe,disableRemotePlayback:Fe,prefix:null,property:null,results:ae,security:null,unselectable:null}}),SC=ns({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:$0,properties:{about:mn,accentHeight:ae,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ae,amplitude:ae,arabicForm:null,ascent:ae,attributeName:null,attributeType:null,azimuth:ae,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ae,by:null,calcMode:null,capHeight:ae,className:lt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ae,diffuseConstant:ae,direction:null,display:null,dur:null,divisor:ae,dominantBaseline:null,download:Fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:ae,enableBackground:null,end:null,event:null,exponent:ae,externalResourcesRequired:null,fill:null,fillOpacity:ae,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Uo,g2:Uo,glyphName:Uo,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ae,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ae,horizOriginX:ae,horizOriginY:ae,id:null,ideographic:ae,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ae,k:ae,k1:ae,k2:ae,k3:ae,k4:ae,kernelMatrix:mn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ae,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ae,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ae,overlineThickness:ae,paintOrder:null,panose1:null,path:null,pathLength:ae,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:lt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ae,pointsAtY:ae,pointsAtZ:ae,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mn,rev:mn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mn,requiredFeatures:mn,requiredFonts:mn,requiredFormats:mn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ae,specularExponent:ae,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ae,strikethroughThickness:ae,string:null,stroke:null,strokeDashArray:mn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ae,strokeOpacity:ae,strokeWidth:null,style:null,surfaceScale:ae,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mn,tabIndex:ae,tableValues:null,target:null,targetX:ae,targetY:ae,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ae,underlineThickness:ae,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ae,values:null,vAlphabetic:ae,vMathematical:ae,vectorEffect:null,vHanging:ae,vIdeographic:ae,version:null,vertAdvY:ae,vertOriginX:ae,vertOriginY:ae,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ae,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),EC=/^data[-\w.:]+$/i,cg=/-[a-z]/g,MC=/[A-Z]/g;function wC(t,e){const n=xd(e);let i=e,r=Nn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&EC.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(cg,AC);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!cg.test(o)){let s=o.replace(MC,TC);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=Lh}return new r(i,e)}function TC(t){return"-"+t.toLowerCase()}function AC(t){return t.charAt(1).toUpperCase()}const CC={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},RC=X0([Y0,q0,Z0,Q0,yC],"html"),Ih=X0([Y0,q0,Z0,Q0,SC],"svg");function bC(t){return t.join(" ").trim()}var J0={},fg=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,PC=/\n/g,LC=/^\s*/,IC=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,DC=/^:\s*/,NC=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,UC=/^[;\s]*/,kC=/^\s+|\s+$/g,FC=`
`,dg="/",hg="*",br="",OC="comment",zC="declaration",BC=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(g){var x=g.match(PC);x&&(n+=x.length);var m=g.lastIndexOf(FC);i=~m?g.length-m:i+g.length}function o(){var g={line:n,column:i};return function(x){return x.position=new s(g),u(),x}}function s(g){this.start=g,this.end={line:n,column:i},this.source=e.source}s.prototype.content=t;function a(g){var x=new Error(e.source+":"+n+":"+i+": "+g);if(x.reason=g,x.filename=e.source,x.line=n,x.column=i,x.source=t,!e.silent)throw x}function l(g){var x=g.exec(t);if(x){var m=x[0];return r(m),t=t.slice(m.length),x}}function u(){l(LC)}function c(g){var x;for(g=g||[];x=f();)x!==!1&&g.push(x);return g}function f(){var g=o();if(!(dg!=t.charAt(0)||hg!=t.charAt(1))){for(var x=2;br!=t.charAt(x)&&(hg!=t.charAt(x)||dg!=t.charAt(x+1));)++x;if(x+=2,br===t.charAt(x-1))return a("End of comment missing");var m=t.slice(2,x-2);return i+=2,r(m),t=t.slice(x),i+=2,g({type:OC,comment:m})}}function h(){var g=o(),x=l(IC);if(x){if(f(),!l(DC))return a("property missing ':'");var m=l(NC),d=g({type:zC,property:pg(x[0].replace(fg,br)),value:m?pg(m[0].replace(fg,br)):br});return l(UC),d}}function p(){var g=[];c(g);for(var x;x=h();)x!==!1&&(g.push(x),c(g));return g}return u(),p()};function pg(t){return t?t.replace(kC,br):br}var HC=Jh&&Jh.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(J0,"__esModule",{value:!0});var mg=J0.default=GC,VC=HC(BC);function GC(t,e){var n=null;if(!t||typeof t!="string")return n;var i=(0,VC.default)(t),r=typeof e=="function";return i.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;r?e(s,a,o):a&&(n=n||{},n[s]=a)}}),n}const WC=mg.default||mg,ex=tx("end"),Dh=tx("start");function tx(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function XC(t){const e=Dh(t),n=ex(t);if(e&&n)return{start:e,end:n}}function ks(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?gg(t.position):"start"in t||"end"in t?gg(t):"line"in t||"column"in t?Sd(t):""}function Sd(t){return _g(t&&t.line)+":"+_g(t&&t.column)}function gg(t){return Sd(t&&t.start)+"-"+Sd(t&&t.end)}function _g(t){return t&&typeof t=="number"?t:1}class jt extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof e=="string"?r=e:!o.cause&&e&&(s=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=ks(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}jt.prototype.file="";jt.prototype.name="";jt.prototype.reason="";jt.prototype.message="";jt.prototype.stack="";jt.prototype.column=void 0;jt.prototype.line=void 0;jt.prototype.ancestors=void 0;jt.prototype.cause=void 0;jt.prototype.fatal=void 0;jt.prototype.place=void 0;jt.prototype.ruleId=void 0;jt.prototype.source=void 0;const Nh={}.hasOwnProperty,jC=new Map,qC=/[A-Z]/g,YC=/-([a-z])/g,$C=new Set(["table","tbody","thead","tfoot","tr"]),KC=new Set(["td","th"]),nx="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function ZC(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=oR(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=rR(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Ih:RC,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},o=ix(r,t,void 0);return o&&typeof o!="string"?o:r.create(t,r.Fragment,{children:o||void 0},void 0)}function ix(t,e,n){if(e.type==="element")return QC(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return JC(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return tR(t,e,n);if(e.type==="mdxjsEsm")return eR(t,e);if(e.type==="root")return nR(t,e,n);if(e.type==="text")return iR(t,e)}function QC(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Ih,t.schema=r),t.ancestors.push(e);const o=ox(t,e.tagName,!1),s=sR(t,e);let a=kh(t,e);return $C.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!_C(l):!0})),rx(t,s,o,e),Uh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function JC(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}na(t,e.position)}function eR(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);na(t,e.position)}function tR(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=Ih,t.schema=r),t.ancestors.push(e);const o=e.name===null?t.Fragment:ox(t,e.name,!0),s=aR(t,e),a=kh(t,e);return rx(t,s,o,e),Uh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function nR(t,e,n){const i={};return Uh(i,kh(t,e)),t.create(e,t.Fragment,i,n)}function iR(t,e){return e.value}function rx(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function Uh(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function rR(t,e,n){return i;function i(r,o,s,a){const u=Array.isArray(s.children)?n:e;return a?u(o,s,a):u(o,s)}}function oR(t,e){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=Dh(i);return e(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function sR(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Nh.call(e.properties,r)){const o=lR(t,r,e.properties[r]);if(o){const[s,a]=o;t.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&KC.has(e.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function aR(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else na(t,e.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const a=i.value.data.estree.body[0];a.type,o=t.evaluater.evaluateExpression(a.expression)}else na(t,e.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function kh(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:jC;for(;++i<e.children.length;){const o=e.children[i];let s;if(t.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=r.get(l)||0;s=l+"-"+u,r.set(l,u+1)}}const a=ix(t,o,s);a!==void 0&&n.push(a)}return n}function lR(t,e,n){const i=wC(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?dC(n):bC(n)),i.property==="style"){let r=typeof n=="object"?n:uR(t,String(n));return t.stylePropertyNameCase==="css"&&(r=cR(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?CC[i.property]||i.property:i.attribute,n]}}function uR(t,e){const n={};try{WC(e,i)}catch(r){if(!t.ignoreInvalidStyle){const o=r,s=new jt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=nx+"#cannot-parse-style-attribute",s}}return n;function i(r,o){let s=r;s.slice(0,2)!=="--"&&(s.slice(0,4)==="-ms-"&&(s="ms-"+s.slice(4)),s=s.replace(YC,dR)),n[s]=o}}function ox(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let o=-1,s;for(;++o<r.length;){const a=ag(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=ag(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Nh.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);na(t)}function na(t,e){const n=new jt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=nx+"#cannot-handle-mdx-estrees-without-createevaluater",n}function cR(t){const e={};let n;for(n in t)Nh.call(t,n)&&(e[fR(n)]=t[n]);return e}function fR(t){let e=t.replace(qC,hR);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function dR(t,e){return e.toUpperCase()}function hR(t){return"-"+t.toLowerCase()}const Rc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},pR={};function mR(t,e){const n=pR,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return sx(t,i,r)}function sx(t,e,n){if(gR(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return vg(t.children,e,n)}return Array.isArray(t)?vg(t,e,n):""}function vg(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=sx(t[r],e,n);return i.join("")}function gR(t){return!!(t&&typeof t=="object")}const xg=document.createElement("i");function Fh(t){const e="&"+t+";";xg.innerHTML=e;const n=xg.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function ui(t,e,n,i){const r=t.length;let o=0,s;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(e,n),t.splice(...s);else for(n&&t.splice(e,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(e,0),t.splice(...s),o+=1e4,e+=1e4}function bn(t,e){return t.length>0?(ui(t,t.length,0,e),t):e}const yg={}.hasOwnProperty;function _R(t){const e={};let n=-1;for(;++n<t.length;)vR(e,t[n]);return e}function vR(t,e){let n;for(n in e){const r=(yg.call(t,n)?t[n]:void 0)||(t[n]={}),o=e[n];let s;if(o)for(s in o){yg.call(r,s)||(r[s]=[]);const a=o[s];xR(r[s],Array.isArray(a)?a:a?[a]:[])}}}function xR(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);ui(t,0,0,i)}function ax(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function ko(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ii=pr(/[A-Za-z]/),vn=pr(/[\dA-Za-z]/),yR=pr(/[#-'*+\--9=?A-Z^-~]/);function Ed(t){return t!==null&&(t<32||t===127)}const Md=pr(/\d/),SR=pr(/[\dA-Fa-f]/),ER=pr(/[!-/:-@[-`{-~]/);function Ne(t){return t!==null&&t<-2}function fn(t){return t!==null&&(t<0||t===32)}function Ze(t){return t===-2||t===-1||t===32}const MR=pr(new RegExp("\\p{P}|\\p{S}","u")),wR=pr(/\s/);function pr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function is(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const o=t.charCodeAt(n);let s="";if(o===37&&vn(t.charCodeAt(n+1))&&vn(t.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=t.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(e.push(t.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function ct(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return Ze(l)?(t.enter(n),a(l)):e(l)}function a(l){return Ze(l)&&o++<r?(t.consume(l),a):(t.exit(n),e(l))}}const TR={tokenize:AR};function AR(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),ct(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),o(a)}function o(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Ne(a)?(t.consume(a),t.exit("chunkText"),o):(t.consume(a),s)}}const CR={tokenize:RR},Sg={tokenize:bR};function RR(t){const e=this,n=[];let i=0,r,o,s;return a;function a(v){if(i<n.length){const y=n[i];return e.containerState=y[1],t.attempt(y[0].continuation,l,u)(v)}return u(v)}function l(v){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&_();const y=e.events.length;let L=y,E;for(;L--;)if(e.events[L][0]==="exit"&&e.events[L][1].type==="chunkFlow"){E=e.events[L][1].end;break}d(i);let C=y;for(;C<e.events.length;)e.events[C][1].end={...E},C++;return ui(e.events,L+1,0,e.events.slice(y)),e.events.length=C,u(v)}return a(v)}function u(v){if(i===n.length){if(!r)return h(v);if(r.currentConstruct&&r.currentConstruct.concrete)return g(v);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Sg,c,f)(v)}function c(v){return r&&_(),d(i),h(v)}function f(v){return e.parser.lazy[e.now().line]=i!==n.length,s=e.now().offset,g(v)}function h(v){return e.containerState={},t.attempt(Sg,p,g)(v)}function p(v){return i++,n.push([e.currentConstruct,e.containerState]),h(v)}function g(v){if(v===null){r&&_(),d(0),t.consume(v);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),x(v)}function x(v){if(v===null){m(t.exit("chunkFlow"),!0),d(0),t.consume(v);return}return Ne(v)?(t.consume(v),m(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(v),x)}function m(v,y){const L=e.sliceStream(v);if(y&&L.push(null),v.previous=o,o&&(o.next=v),o=v,r.defineSkip(v.start),r.write(L),e.parser.lazy[v.start.line]){let E=r.events.length;for(;E--;)if(r.events[E][1].start.offset<s&&(!r.events[E][1].end||r.events[E][1].end.offset>s))return;const C=e.events.length;let b=C,w,S;for(;b--;)if(e.events[b][0]==="exit"&&e.events[b][1].type==="chunkFlow"){if(w){S=e.events[b][1].end;break}w=!0}for(d(i),E=C;E<e.events.length;)e.events[E][1].end={...S},E++;ui(e.events,b+1,0,e.events.slice(C)),e.events.length=E}}function d(v){let y=n.length;for(;y-- >v;){const L=n[y];e.containerState=L[1],L[0].exit.call(e,t)}n.length=v}function _(){r.write([null]),o=void 0,r=void 0,e.containerState._closeFlow=void 0}}function bR(t,e,n){return ct(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Eg(t){if(t===null||fn(t)||wR(t))return 1;if(MR(t))return 2}function Oh(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const o=t[r].resolveAll;o&&!i.includes(o)&&(e=o(e,n),i.push(o))}return e}const wd={name:"attention",resolveAll:PR,tokenize:LR};function PR(t,e){let n=-1,i,r,o,s,a,l,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const f={...t[i][1].end},h={...t[n][1].start};Mg(f,-l),Mg(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:f,end:{...t[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},t[i][1].end={...s.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=bn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=bn(u,[["enter",r,e],["enter",s,e],["exit",s,e],["enter",o,e]]),u=bn(u,Oh(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=bn(u,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=bn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,ui(t,i-1,n-i+3,u),n=i+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function LR(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Eg(i);let o;return s;function s(l){return o=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===o)return t.consume(l),a;const u=t.exit("attentionSequence"),c=Eg(l),f=!c||c===2&&r||n.includes(l),h=!r||r===2&&c||n.includes(i);return u._open=!!(o===42?f:f&&(r||!h)),u._close=!!(o===42?h:h&&(c||!f)),e(l)}}function Mg(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const IR={name:"autolink",tokenize:DR};function DR(t,e,n){let i=0;return r;function r(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(p){return ii(p)?(t.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||vn(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(t.consume(p),i=0,l):(p===43||p===45||p===46||vn(p))&&i++<32?(t.consume(p),a):(i=0,u(p))}function l(p){return p===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):p===null||p===32||p===60||Ed(p)?n(p):(t.consume(p),l)}function u(p){return p===64?(t.consume(p),c):yR(p)?(t.consume(p),u):n(p)}function c(p){return vn(p)?f(p):n(p)}function f(p){return p===46?(t.consume(p),i=0,c):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):h(p)}function h(p){if((p===45||vn(p))&&i++<63){const g=p===45?h:f;return t.consume(p),g}return n(p)}}const Su={partial:!0,tokenize:NR};function NR(t,e,n){return i;function i(o){return Ze(o)?ct(t,r,"linePrefix")(o):r(o)}function r(o){return o===null||Ne(o)?e(o):n(o)}}const lx={continuation:{tokenize:kR},exit:FR,name:"blockQuote",tokenize:UR};function UR(t,e,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(s),t.exit("blockQuoteMarker"),o}return n(s)}function o(s){return Ze(s)?(t.enter("blockQuotePrefixWhitespace"),t.consume(s),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(s))}}function kR(t,e,n){const i=this;return r;function r(s){return Ze(s)?ct(t,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return t.attempt(lx,e,n)(s)}}function FR(t){t.exit("blockQuote")}const ux={name:"characterEscape",tokenize:OR};function OR(t,e,n){return i;function i(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),r}function r(o){return ER(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(o)}}const cx={name:"characterReference",tokenize:zR};function zR(t,e,n){const i=this;let r=0,o,s;return a;function a(f){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),l}function l(f){return f===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(f),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),o=31,s=vn,c(f))}function u(f){return f===88||f===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(f),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,s=SR,c):(t.enter("characterReferenceValue"),o=7,s=Md,c(f))}function c(f){if(f===59&&r){const h=t.exit("characterReferenceValue");return s===vn&&!Fh(i.sliceSerialize(h))?n(f):(t.enter("characterReferenceMarker"),t.consume(f),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return s(f)&&r++<o?(t.consume(f),c):n(f)}}const wg={partial:!0,tokenize:HR},Tg={concrete:!0,name:"codeFenced",tokenize:BR};function BR(t,e,n){const i=this,r={partial:!0,tokenize:L};let o=0,s=0,a;return l;function l(E){return u(E)}function u(E){const C=i.events[i.events.length-1];return o=C&&C[1].type==="linePrefix"?C[2].sliceSerialize(C[1],!0).length:0,a=E,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),c(E)}function c(E){return E===a?(s++,t.consume(E),c):s<3?n(E):(t.exit("codeFencedFenceSequence"),Ze(E)?ct(t,f,"whitespace")(E):f(E))}function f(E){return E===null||Ne(E)?(t.exit("codeFencedFence"),i.interrupt?e(E):t.check(wg,x,y)(E)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),h(E))}function h(E){return E===null||Ne(E)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),f(E)):Ze(E)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),ct(t,p,"whitespace")(E)):E===96&&E===a?n(E):(t.consume(E),h)}function p(E){return E===null||Ne(E)?f(E):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(E))}function g(E){return E===null||Ne(E)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),f(E)):E===96&&E===a?n(E):(t.consume(E),g)}function x(E){return t.attempt(r,y,m)(E)}function m(E){return t.enter("lineEnding"),t.consume(E),t.exit("lineEnding"),d}function d(E){return o>0&&Ze(E)?ct(t,_,"linePrefix",o+1)(E):_(E)}function _(E){return E===null||Ne(E)?t.check(wg,x,y)(E):(t.enter("codeFlowValue"),v(E))}function v(E){return E===null||Ne(E)?(t.exit("codeFlowValue"),_(E)):(t.consume(E),v)}function y(E){return t.exit("codeFenced"),e(E)}function L(E,C,b){let w=0;return S;function S(W){return E.enter("lineEnding"),E.consume(W),E.exit("lineEnding"),R}function R(W){return E.enter("codeFencedFence"),Ze(W)?ct(E,U,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(W):U(W)}function U(W){return W===a?(E.enter("codeFencedFenceSequence"),B(W)):b(W)}function B(W){return W===a?(w++,E.consume(W),B):w>=s?(E.exit("codeFencedFenceSequence"),Ze(W)?ct(E,Y,"whitespace")(W):Y(W)):b(W)}function Y(W){return W===null||Ne(W)?(E.exit("codeFencedFence"),C(W)):b(W)}}}function HR(t,e,n){const i=this;return r;function r(s){return s===null?n(s):(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}const bc={name:"codeIndented",tokenize:GR},VR={partial:!0,tokenize:WR};function GR(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),ct(t,o,"linePrefix",5)(u)}function o(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):Ne(u)?t.attempt(VR,s,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Ne(u)?(t.exit("codeFlowValue"),s(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function WR(t,e,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):Ne(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r):ct(t,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):Ne(s)?r(s):n(s)}}const XR={name:"codeText",previous:qR,resolve:jR,tokenize:YR};function jR(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function qR(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function YR(t,e,n){let i=0,r,o;return s;function s(f){return t.enter("codeText"),t.enter("codeTextSequence"),a(f)}function a(f){return f===96?(t.consume(f),i++,a):(t.exit("codeTextSequence"),l(f))}function l(f){return f===null?n(f):f===32?(t.enter("space"),t.consume(f),t.exit("space"),l):f===96?(o=t.enter("codeTextSequence"),r=0,c(f)):Ne(f)?(t.enter("lineEnding"),t.consume(f),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(f))}function u(f){return f===null||f===32||f===96||Ne(f)?(t.exit("codeTextData"),l(f)):(t.consume(f),u)}function c(f){return f===96?(t.consume(f),r++,c):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(f)):(o.type="codeTextData",u(f))}}class $R{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&xs(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),xs(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),xs(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);xs(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);xs(this.left,n.reverse())}}}function xs(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function fx(t){const e={};let n=-1,i,r,o,s,a,l,u;const c=new $R(t);for(;++n<c.length;){for(;n in e;)n=e[n];if(i=c.get(n),n&&i[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,KR(c,n)),n=e[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--&&(s=c.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank");)s[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);r&&(i[1].end={...c.get(r)[1].start},a=c.slice(r,n),a.unshift(i),c.splice(r,n-r+1,a))}}return ui(t,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function KR(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const o=[],s=n._tokenizer||i.parser[n.contentType](n.start),a=s.events,l=[],u={};let c,f,h=-1,p=n,g=0,x=0;const m=[x];for(;p;){for(;t.get(++r)[1]!==p;);o.push(r),p._tokenizer||(c=i.sliceStream(p),p.next||c.push(null),f&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(c),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),f=p,p=p.next}for(p=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(x=h+1,m.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):m.pop(),h=m.length;h--;){const d=a.slice(m[h],m[h+1]),_=o.pop();l.push([_,_+d.length-1]),t.splice(_,2,d)}for(l.reverse(),h=-1;++h<l.length;)u[g+l[h][0]]=g+l[h][1],g+=l[h][1]-l[h][0]-1;return u}const ZR={resolve:JR,tokenize:eb},QR={partial:!0,tokenize:tb};function JR(t){return fx(t),t}function eb(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):Ne(a)?t.check(QR,s,o)(a):(t.consume(a),r)}function o(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function s(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function tb(t,e,n){const i=this;return r;function r(s){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),ct(t,o,"linePrefix")}function o(s){if(s===null||Ne(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):t.interrupt(i.parser.constructs.flow,n,e)(s)}}function dx(t,e,n,i,r,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return f;function f(d){return d===60?(t.enter(i),t.enter(r),t.enter(o),t.consume(d),t.exit(o),h):d===null||d===32||d===41||Ed(d)?n(d):(t.enter(i),t.enter(s),t.enter(a),t.enter("chunkString",{contentType:"string"}),x(d))}function h(d){return d===62?(t.enter(o),t.consume(d),t.exit(o),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),p(d))}function p(d){return d===62?(t.exit("chunkString"),t.exit(a),h(d)):d===null||d===60||Ne(d)?n(d):(t.consume(d),d===92?g:p)}function g(d){return d===60||d===62||d===92?(t.consume(d),p):p(d)}function x(d){return!c&&(d===null||d===41||fn(d))?(t.exit("chunkString"),t.exit(a),t.exit(s),t.exit(i),e(d)):c<u&&d===40?(t.consume(d),c++,x):d===41?(t.consume(d),c--,x):d===null||d===32||d===40||Ed(d)?n(d):(t.consume(d),d===92?m:x)}function m(d){return d===40||d===41||d===92?(t.consume(d),x):x(d)}}function hx(t,e,n,i,r,o){const s=this;let a=0,l;return u;function u(p){return t.enter(i),t.enter(r),t.consume(p),t.exit(r),t.enter(o),c}function c(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(t.exit(o),t.enter(r),t.consume(p),t.exit(r),t.exit(i),e):Ne(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),f(p))}function f(p){return p===null||p===91||p===93||Ne(p)||a++>999?(t.exit("chunkString"),c(p)):(t.consume(p),l||(l=!Ze(p)),p===92?h:f)}function h(p){return p===91||p===92||p===93?(t.consume(p),a++,f):f(p)}}function px(t,e,n,i,r,o){let s;return a;function a(h){return h===34||h===39||h===40?(t.enter(i),t.enter(r),t.consume(h),t.exit(r),s=h===40?41:h,l):n(h)}function l(h){return h===s?(t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):(t.enter(o),u(h))}function u(h){return h===s?(t.exit(o),l(s)):h===null?n(h):Ne(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),ct(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===s||h===null||Ne(h)?(t.exit("chunkString"),u(h)):(t.consume(h),h===92?f:c)}function f(h){return h===s||h===92?(t.consume(h),c):c(h)}}function Fs(t,e){let n;return i;function i(r){return Ne(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):Ze(r)?ct(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const nb={name:"definition",tokenize:rb},ib={partial:!0,tokenize:ob};function rb(t,e,n){const i=this;let r;return o;function o(p){return t.enter("definition"),s(p)}function s(p){return hx.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=ko(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(t.enter("definitionMarker"),t.consume(p),t.exit("definitionMarker"),l):n(p)}function l(p){return fn(p)?Fs(t,u)(p):u(p)}function u(p){return dx(t,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return t.attempt(ib,f,f)(p)}function f(p){return Ze(p)?ct(t,h,"whitespace")(p):h(p)}function h(p){return p===null||Ne(p)?(t.exit("definition"),i.parser.defined.push(r),e(p)):n(p)}}function ob(t,e,n){return i;function i(a){return fn(a)?Fs(t,r)(a):n(a)}function r(a){return px(t,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return Ze(a)?ct(t,s,"whitespace")(a):s(a)}function s(a){return a===null||Ne(a)?e(a):n(a)}}const sb={name:"hardBreakEscape",tokenize:ab};function ab(t,e,n){return i;function i(o){return t.enter("hardBreakEscape"),t.consume(o),r}function r(o){return Ne(o)?(t.exit("hardBreakEscape"),e(o)):n(o)}}const lb={name:"headingAtx",resolve:ub,tokenize:cb};function ub(t,e){let n=t.length-2,i=3,r,o;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},o={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},ui(t,i,n-i+1,[["enter",r,e],["enter",o,e],["exit",o,e],["exit",r,e]])),t}function cb(t,e,n){let i=0;return r;function r(c){return t.enter("atxHeading"),o(c)}function o(c){return t.enter("atxHeadingSequence"),s(c)}function s(c){return c===35&&i++<6?(t.consume(c),s):c===null||fn(c)?(t.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(t.enter("atxHeadingSequence"),l(c)):c===null||Ne(c)?(t.exit("atxHeading"),e(c)):Ze(c)?ct(t,a,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function l(c){return c===35?(t.consume(c),l):(t.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||fn(c)?(t.exit("atxHeadingText"),a(c)):(t.consume(c),u)}}const fb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ag=["pre","script","style","textarea"],db={concrete:!0,name:"htmlFlow",resolveTo:mb,tokenize:gb},hb={partial:!0,tokenize:vb},pb={partial:!0,tokenize:_b};function mb(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function gb(t,e,n){const i=this;let r,o,s,a,l;return u;function u(I){return c(I)}function c(I){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(I),f}function f(I){return I===33?(t.consume(I),h):I===47?(t.consume(I),o=!0,x):I===63?(t.consume(I),r=3,i.interrupt?e:A):ii(I)?(t.consume(I),s=String.fromCharCode(I),m):n(I)}function h(I){return I===45?(t.consume(I),r=2,p):I===91?(t.consume(I),r=5,a=0,g):ii(I)?(t.consume(I),r=4,i.interrupt?e:A):n(I)}function p(I){return I===45?(t.consume(I),i.interrupt?e:A):n(I)}function g(I){const $="CDATA[";return I===$.charCodeAt(a++)?(t.consume(I),a===$.length?i.interrupt?e:U:g):n(I)}function x(I){return ii(I)?(t.consume(I),s=String.fromCharCode(I),m):n(I)}function m(I){if(I===null||I===47||I===62||fn(I)){const $=I===47,oe=s.toLowerCase();return!$&&!o&&Ag.includes(oe)?(r=1,i.interrupt?e(I):U(I)):fb.includes(s.toLowerCase())?(r=6,$?(t.consume(I),d):i.interrupt?e(I):U(I)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(I):o?_(I):v(I))}return I===45||vn(I)?(t.consume(I),s+=String.fromCharCode(I),m):n(I)}function d(I){return I===62?(t.consume(I),i.interrupt?e:U):n(I)}function _(I){return Ze(I)?(t.consume(I),_):S(I)}function v(I){return I===47?(t.consume(I),S):I===58||I===95||ii(I)?(t.consume(I),y):Ze(I)?(t.consume(I),v):S(I)}function y(I){return I===45||I===46||I===58||I===95||vn(I)?(t.consume(I),y):L(I)}function L(I){return I===61?(t.consume(I),E):Ze(I)?(t.consume(I),L):v(I)}function E(I){return I===null||I===60||I===61||I===62||I===96?n(I):I===34||I===39?(t.consume(I),l=I,C):Ze(I)?(t.consume(I),E):b(I)}function C(I){return I===l?(t.consume(I),l=null,w):I===null||Ne(I)?n(I):(t.consume(I),C)}function b(I){return I===null||I===34||I===39||I===47||I===60||I===61||I===62||I===96||fn(I)?L(I):(t.consume(I),b)}function w(I){return I===47||I===62||Ze(I)?v(I):n(I)}function S(I){return I===62?(t.consume(I),R):n(I)}function R(I){return I===null||Ne(I)?U(I):Ze(I)?(t.consume(I),R):n(I)}function U(I){return I===45&&r===2?(t.consume(I),q):I===60&&r===1?(t.consume(I),Q):I===62&&r===4?(t.consume(I),le):I===63&&r===3?(t.consume(I),A):I===93&&r===5?(t.consume(I),Z):Ne(I)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(hb,xe,B)(I)):I===null||Ne(I)?(t.exit("htmlFlowData"),B(I)):(t.consume(I),U)}function B(I){return t.check(pb,Y,xe)(I)}function Y(I){return t.enter("lineEnding"),t.consume(I),t.exit("lineEnding"),W}function W(I){return I===null||Ne(I)?B(I):(t.enter("htmlFlowData"),U(I))}function q(I){return I===45?(t.consume(I),A):U(I)}function Q(I){return I===47?(t.consume(I),s="",N):U(I)}function N(I){if(I===62){const $=s.toLowerCase();return Ag.includes($)?(t.consume(I),le):U(I)}return ii(I)&&s.length<8?(t.consume(I),s+=String.fromCharCode(I),N):U(I)}function Z(I){return I===93?(t.consume(I),A):U(I)}function A(I){return I===62?(t.consume(I),le):I===45&&r===2?(t.consume(I),A):U(I)}function le(I){return I===null||Ne(I)?(t.exit("htmlFlowData"),xe(I)):(t.consume(I),le)}function xe(I){return t.exit("htmlFlow"),e(I)}}function _b(t,e,n){const i=this;return r;function r(s){return Ne(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}function vb(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Su,e,n)}}const xb={name:"htmlText",tokenize:yb};function yb(t,e,n){const i=this;let r,o,s;return a;function a(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),l}function l(A){return A===33?(t.consume(A),u):A===47?(t.consume(A),L):A===63?(t.consume(A),v):ii(A)?(t.consume(A),b):n(A)}function u(A){return A===45?(t.consume(A),c):A===91?(t.consume(A),o=0,g):ii(A)?(t.consume(A),_):n(A)}function c(A){return A===45?(t.consume(A),p):n(A)}function f(A){return A===null?n(A):A===45?(t.consume(A),h):Ne(A)?(s=f,Q(A)):(t.consume(A),f)}function h(A){return A===45?(t.consume(A),p):f(A)}function p(A){return A===62?q(A):A===45?h(A):f(A)}function g(A){const le="CDATA[";return A===le.charCodeAt(o++)?(t.consume(A),o===le.length?x:g):n(A)}function x(A){return A===null?n(A):A===93?(t.consume(A),m):Ne(A)?(s=x,Q(A)):(t.consume(A),x)}function m(A){return A===93?(t.consume(A),d):x(A)}function d(A){return A===62?q(A):A===93?(t.consume(A),d):x(A)}function _(A){return A===null||A===62?q(A):Ne(A)?(s=_,Q(A)):(t.consume(A),_)}function v(A){return A===null?n(A):A===63?(t.consume(A),y):Ne(A)?(s=v,Q(A)):(t.consume(A),v)}function y(A){return A===62?q(A):v(A)}function L(A){return ii(A)?(t.consume(A),E):n(A)}function E(A){return A===45||vn(A)?(t.consume(A),E):C(A)}function C(A){return Ne(A)?(s=C,Q(A)):Ze(A)?(t.consume(A),C):q(A)}function b(A){return A===45||vn(A)?(t.consume(A),b):A===47||A===62||fn(A)?w(A):n(A)}function w(A){return A===47?(t.consume(A),q):A===58||A===95||ii(A)?(t.consume(A),S):Ne(A)?(s=w,Q(A)):Ze(A)?(t.consume(A),w):q(A)}function S(A){return A===45||A===46||A===58||A===95||vn(A)?(t.consume(A),S):R(A)}function R(A){return A===61?(t.consume(A),U):Ne(A)?(s=R,Q(A)):Ze(A)?(t.consume(A),R):w(A)}function U(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(t.consume(A),r=A,B):Ne(A)?(s=U,Q(A)):Ze(A)?(t.consume(A),U):(t.consume(A),Y)}function B(A){return A===r?(t.consume(A),r=void 0,W):A===null?n(A):Ne(A)?(s=B,Q(A)):(t.consume(A),B)}function Y(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||fn(A)?w(A):(t.consume(A),Y)}function W(A){return A===47||A===62||fn(A)?w(A):n(A)}function q(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),e):n(A)}function Q(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),N}function N(A){return Ze(A)?ct(t,Z,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):Z(A)}function Z(A){return t.enter("htmlTextData"),s(A)}}const zh={name:"labelEnd",resolveAll:wb,resolveTo:Tb,tokenize:Ab},Sb={tokenize:Cb},Eb={tokenize:Rb},Mb={tokenize:bb};function wb(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&ui(t,0,t.length,n),t}function Tb(t,e){let n=t.length,i=0,r,o,s,a;for(;n--;)if(r=t[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:t[o][1].type==="labelLink"?"link":"image",start:{...t[o][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[o][1].start},end:{...t[s][1].end}},c={type:"labelText",start:{...t[o+i+2][1].end},end:{...t[s-2][1].start}};return a=[["enter",l,e],["enter",u,e]],a=bn(a,t.slice(o+1,o+i+3)),a=bn(a,[["enter",c,e]]),a=bn(a,Oh(e.parser.constructs.insideSpan.null,t.slice(o+i+4,s-3),e)),a=bn(a,[["exit",c,e],t[s-2],t[s-1],["exit",u,e]]),a=bn(a,t.slice(s+1)),a=bn(a,[["exit",l,e]]),ui(t,o,t.length,a),t}function Ab(t,e,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(h){return o?o._inactive?f(h):(s=i.parser.defined.includes(ko(i.sliceSerialize({start:o.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelEnd"),l):n(h)}function l(h){return h===40?t.attempt(Sb,c,s?c:f)(h):h===91?t.attempt(Eb,c,s?u:f)(h):s?c(h):f(h)}function u(h){return t.attempt(Mb,c,f)(h)}function c(h){return e(h)}function f(h){return o._balanced=!0,n(h)}}function Cb(t,e,n){return i;function i(f){return t.enter("resource"),t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),r}function r(f){return fn(f)?Fs(t,o)(f):o(f)}function o(f){return f===41?c(f):dx(t,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(f)}function s(f){return fn(f)?Fs(t,l)(f):c(f)}function a(f){return n(f)}function l(f){return f===34||f===39||f===40?px(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(f):c(f)}function u(f){return fn(f)?Fs(t,c)(f):c(f)}function c(f){return f===41?(t.enter("resourceMarker"),t.consume(f),t.exit("resourceMarker"),t.exit("resource"),e):n(f)}}function Rb(t,e,n){const i=this;return r;function r(a){return hx.call(i,t,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(ko(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function s(a){return n(a)}}function bb(t,e,n){return i;function i(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),r}function r(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),e):n(o)}}const Pb={name:"labelStartImage",resolveAll:zh.resolveAll,tokenize:Lb};function Lb(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),o}function o(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const Ib={name:"labelStartLink",resolveAll:zh.resolveAll,tokenize:Db};function Db(t,e,n){const i=this;return r;function r(s){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),t.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):e(s)}}const Pc={name:"lineEnding",tokenize:Nb};function Nb(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),ct(t,e,"linePrefix")}}const wl={name:"thematicBreak",tokenize:Ub};function Ub(t,e,n){let i=0,r;return o;function o(u){return t.enter("thematicBreak"),s(u)}function s(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Ne(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),Ze(u)?ct(t,a,"whitespace")(u):a(u))}}const tn={continuation:{tokenize:zb},exit:Hb,name:"list",tokenize:Ob},kb={partial:!0,tokenize:Vb},Fb={partial:!0,tokenize:Bb};function Ob(t,e,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:Md(p)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),p===42||p===45?t.check(wl,n,u)(p):u(p);if(!i.interrupt||p===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(p)}return n(p)}function l(p){return Md(p)&&++s<10?(t.consume(p),l):(!i.interrupt||s<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(t.exit("listItemValue"),u(p)):n(p)}function u(p){return t.enter("listItemMarker"),t.consume(p),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,t.check(Su,i.interrupt?n:c,t.attempt(kb,h,f))}function c(p){return i.containerState.initialBlankLine=!0,o++,h(p)}function f(p){return Ze(p)?(t.enter("listItemPrefixWhitespace"),t.consume(p),t.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return i.containerState.size=o+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(p)}}function zb(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Su,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,ct(t,e,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!Ze(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(Fb,e,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,ct(t,t.attempt(tn,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Bb(t,e,n){const i=this;return ct(t,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?e(o):n(o)}}function Hb(t){t.exit(this.containerState.type)}function Vb(t,e,n){const i=this;return ct(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!Ze(o)&&s&&s[1].type==="listItemPrefixWhitespace"?e(o):n(o)}}const Cg={name:"setextUnderline",resolveTo:Gb,tokenize:Wb};function Gb(t,e){let n=t.length,i,r,o;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!o&&t[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...t[r][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",o?(t.splice(r,0,["enter",s,e]),t.splice(o+1,0,["exit",t[i][1],e]),t[i][1].end={...t[o][1].end}):t[i][1]=s,t.push(["exit",s,e]),t}function Wb(t,e,n){const i=this;let r;return o;function o(u){let c=i.events.length,f;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){f=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||f)?(t.enter("setextHeadingLine"),r=u,s(u)):n(u)}function s(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),Ze(u)?ct(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Ne(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const Xb={tokenize:jb};function jb(t){const e=this,n=t.attempt(Su,i,t.attempt(this.parser.constructs.flowInitial,r,ct(t,t.attempt(this.parser.constructs.flow,r,t.attempt(ZR,r)),"linePrefix")));return n;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const qb={resolveAll:gx()},Yb=mx("string"),$b=mx("text");function mx(t){return{resolveAll:gx(t==="text"?Kb:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],o=n.attempt(r,s,a);return s;function s(c){return u(c)?o(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const f=r[c];let h=-1;if(f)for(;++h<f.length;){const p=f[h];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function gx(t){return e;function e(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return t?t(n,i):n}}function Kb(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const u=r[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const Zb={42:tn,43:tn,45:tn,48:tn,49:tn,50:tn,51:tn,52:tn,53:tn,54:tn,55:tn,56:tn,57:tn,62:lx},Qb={91:nb},Jb={[-2]:bc,[-1]:bc,32:bc},eP={35:lb,42:wl,45:[Cg,wl],60:db,61:Cg,95:wl,96:Tg,126:Tg},tP={38:cx,92:ux},nP={[-5]:Pc,[-4]:Pc,[-3]:Pc,33:Pb,38:cx,42:wd,60:[IR,xb],91:Ib,92:[sb,ux],93:zh,95:wd,96:XR},iP={null:[wd,qb]},rP={null:[42,95]},oP={null:[]},sP=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:rP,contentInitial:Qb,disable:oP,document:Zb,flow:eP,flowInitial:Jb,insideSpan:iP,string:tP,text:nP},Symbol.toStringTag,{value:"Module"}));function aP(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let s=[],a=[];const l={attempt:C(L),check:C(E),consume:_,enter:v,exit:y,interrupt:C(E,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:t,previous:null,sliceSerialize:h,sliceStream:p,write:f};let c=e.tokenize.call(u,l);return e.resolveAll&&o.push(e),u;function f(R){return s=bn(s,R),m(),s[s.length-1]!==null?[]:(b(e,0),u.events=Oh(o,u.events,u),u.events)}function h(R,U){return uP(p(R),U)}function p(R){return lP(s,R)}function g(){const{_bufferIndex:R,_index:U,line:B,column:Y,offset:W}=i;return{_bufferIndex:R,_index:U,line:B,column:Y,offset:W}}function x(R){r[R.line]=R.column,S()}function m(){let R;for(;i._index<s.length;){const U=s[i._index];if(typeof U=="string")for(R=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===R&&i._bufferIndex<U.length;)d(U.charCodeAt(i._bufferIndex));else d(U)}}function d(R){c=c(R)}function _(R){Ne(R)?(i.line++,i.column=1,i.offset+=R===-3?2:1,S()):R!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=R}function v(R,U){const B=U||{};return B.type=R,B.start=g(),u.events.push(["enter",B,u]),a.push(B),B}function y(R){const U=a.pop();return U.end=g(),u.events.push(["exit",U,u]),U}function L(R,U){b(R,U.from)}function E(R,U){U.restore()}function C(R,U){return B;function B(Y,W,q){let Q,N,Z,A;return Array.isArray(Y)?xe(Y):"tokenize"in Y?xe([Y]):le(Y);function le(ce){return fe;function fe(Ae){const Le=Ae!==null&&ce[Ae],Ue=Ae!==null&&ce.null,nt=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ue)?Ue:Ue?[Ue]:[]];return xe(nt)(Ae)}}function xe(ce){return Q=ce,N=0,ce.length===0?q:I(ce[N])}function I(ce){return fe;function fe(Ae){return A=w(),Z=ce,ce.partial||(u.currentConstruct=ce),ce.name&&u.parser.constructs.disable.null.includes(ce.name)?oe():ce.tokenize.call(U?Object.assign(Object.create(u),U):u,l,$,oe)(Ae)}}function $(ce){return R(Z,A),W}function oe(ce){return A.restore(),++N<Q.length?I(Q[N]):q}}}function b(R,U){R.resolveAll&&!o.includes(R)&&o.push(R),R.resolve&&ui(u.events,U,u.events.length-U,R.resolve(u.events.slice(U),u)),R.resolveTo&&(u.events=R.resolveTo(u.events,u))}function w(){const R=g(),U=u.previous,B=u.currentConstruct,Y=u.events.length,W=Array.from(a);return{from:Y,restore:q};function q(){i=R,u.previous=U,u.currentConstruct=B,u.events.length=Y,a=W,S()}}function S(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function lP(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,o=e.end._bufferIndex;let s;if(n===r)s=[t[n].slice(i,o)];else{if(s=t.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(t[r].slice(0,o))}return s}function uP(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const o=t[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}function cP(t){const i={constructs:_R([sP,...(t||{}).extensions||[]]),content:r(TR),defined:[],document:r(CR),flow:r(Xb),lazy:{},string:r(Yb),text:r($b)};return i;function r(o){return s;function s(a){return aP(i,o,a)}}}function fP(t){for(;!fx(t););return t}const Rg=/[\0\t\n\r]/g;function dP(){let t=1,e="",n=!0,i;return r;function r(o,s,a){const l=[];let u,c,f,h,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),f=0,e="",n&&(o.charCodeAt(0)===65279&&f++,n=void 0);f<o.length;){if(Rg.lastIndex=f,u=Rg.exec(o),h=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(h),!u){e=o.slice(f);break}if(p===10&&f===h&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),f<h&&(l.push(o.slice(f,h)),t+=h-f),p){case 0:{l.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,l.push(-2);t++<c;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}f=h+1}return a&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const hP=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function pP(t){return t.replace(hP,mP)}function mP(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return ax(n.slice(o?2:1),o?16:10)}return Fh(n)||t}const _x={}.hasOwnProperty;function gP(t,e,n){return typeof e!="string"&&(n=e,e=void 0),_P(n)(fP(cP(n).document().write(dP()(t,e,!0))))}function _P(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(it),autolinkProtocol:w,autolinkEmail:w,atxHeading:o(qt),blockQuote:o(Ue),characterEscape:w,characterReference:w,codeFenced:o(nt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(nt,s),codeText:o(je,s),codeTextData:w,data:w,codeFlowValue:w,definition:o(gt),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(z),hardBreakEscape:o(Ve),hardBreakTrailing:o(Ve),htmlFlow:o(Ge,s),htmlFlowData:w,htmlText:o(Ge,s),htmlTextData:w,image:o(be),label:s,link:o(it),listItem:o(P),listItemValue:h,listOrdered:o(Re,f),listUnordered:o(Re),paragraph:o(M),reference:I,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(qt),strong:o(H),thematicBreak:o(ne)},exit:{atxHeading:l(),atxHeadingSequence:L,autolink:l(),autolinkEmail:Le,autolinkProtocol:Ae,blockQuote:l(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:ce,characterReference:fe,codeFenced:l(m),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:S,codeIndented:l(d),codeText:l(W),codeTextData:S,data:S,definition:l(),definitionDestinationString:y,definitionLabelString:_,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(U),hardBreakTrailing:l(U),htmlFlow:l(B),htmlFlowData:S,htmlText:l(Y),htmlTextData:S,image:l(Q),label:Z,labelText:N,lineEnding:R,link:l(q),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:$,resourceDestinationString:A,resourceTitleString:le,resource:xe,setextHeading:l(b),setextHeadingLineSequence:C,setextHeadingText:E,strong:l(),thematicBreak:l()}};vx(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(D){let j={type:"root",children:[]};const J={stack:[j],tokenStack:[],config:e,enter:a,exit:u,buffer:s,resume:c,data:n},ie=[];let Se=-1;for(;++Se<D.length;)if(D[Se][1].type==="listOrdered"||D[Se][1].type==="listUnordered")if(D[Se][0]==="enter")ie.push(Se);else{const re=ie.pop();Se=r(D,re,Se)}for(Se=-1;++Se<D.length;){const re=e[D[Se][0]];_x.call(re,D[Se][1].type)&&re[D[Se][1].type].call(Object.assign({sliceSerialize:D[Se][2].sliceSerialize},J),D[Se][1])}if(J.tokenStack.length>0){const re=J.tokenStack[J.tokenStack.length-1];(re[1]||bg).call(J,void 0,re[0])}for(j.position={start:Wi(D.length>0?D[0][1].start:{line:1,column:1,offset:0}),end:Wi(D.length>0?D[D.length-2][1].end:{line:1,column:1,offset:0})},Se=-1;++Se<e.transforms.length;)j=e.transforms[Se](j)||j;return j}function r(D,j,J){let ie=j-1,Se=-1,re=!1,pe,Ee,Pe,_e;for(;++ie<=J;){const Ie=D[ie];switch(Ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ie[0]==="enter"?Se++:Se--,_e=void 0;break}case"lineEndingBlank":{Ie[0]==="enter"&&(pe&&!_e&&!Se&&!Pe&&(Pe=ie),_e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_e=void 0}if(!Se&&Ie[0]==="enter"&&Ie[1].type==="listItemPrefix"||Se===-1&&Ie[0]==="exit"&&(Ie[1].type==="listUnordered"||Ie[1].type==="listOrdered")){if(pe){let De=ie;for(Ee=void 0;De--;){const Xe=D[De];if(Xe[1].type==="lineEnding"||Xe[1].type==="lineEndingBlank"){if(Xe[0]==="exit")continue;Ee&&(D[Ee][1].type="lineEndingBlank",re=!0),Xe[1].type="lineEnding",Ee=De}else if(!(Xe[1].type==="linePrefix"||Xe[1].type==="blockQuotePrefix"||Xe[1].type==="blockQuotePrefixWhitespace"||Xe[1].type==="blockQuoteMarker"||Xe[1].type==="listItemIndent"))break}Pe&&(!Ee||Pe<Ee)&&(pe._spread=!0),pe.end=Object.assign({},Ee?D[Ee][1].start:Ie[1].end),D.splice(Ee||ie,0,["exit",pe,Ie[2]]),ie++,J++}if(Ie[1].type==="listItemPrefix"){const De={type:"listItem",_spread:!1,start:Object.assign({},Ie[1].start),end:void 0};pe=De,D.splice(ie,0,["enter",De,Ie[2]]),ie++,J++,Pe=void 0,_e=!0}}}return D[j][1]._spread=re,J}function o(D,j){return J;function J(ie){a.call(this,D(ie),ie),j&&j.call(this,ie)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(D,j,J){this.stack[this.stack.length-1].children.push(D),this.stack.push(D),this.tokenStack.push([j,J||void 0]),D.position={start:Wi(j.start),end:void 0}}function l(D){return j;function j(J){D&&D.call(this,J),u.call(this,J)}}function u(D,j){const J=this.stack.pop(),ie=this.tokenStack.pop();if(ie)ie[0].type!==D.type&&(j?j.call(this,D,ie[0]):(ie[1]||bg).call(this,D,ie[0]));else throw new Error("Cannot close `"+D.type+"` ("+ks({start:D.start,end:D.end})+"): it’s not open");J.position.end=Wi(D.end)}function c(){return mR(this.stack.pop())}function f(){this.data.expectingFirstListItemValue=!0}function h(D){if(this.data.expectingFirstListItemValue){const j=this.stack[this.stack.length-2];j.start=Number.parseInt(this.sliceSerialize(D),10),this.data.expectingFirstListItemValue=void 0}}function p(){const D=this.resume(),j=this.stack[this.stack.length-1];j.lang=D}function g(){const D=this.resume(),j=this.stack[this.stack.length-1];j.meta=D}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function m(){const D=this.resume(),j=this.stack[this.stack.length-1];j.value=D.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function d(){const D=this.resume(),j=this.stack[this.stack.length-1];j.value=D.replace(/(\r?\n|\r)$/g,"")}function _(D){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=ko(this.sliceSerialize(D)).toLowerCase()}function v(){const D=this.resume(),j=this.stack[this.stack.length-1];j.title=D}function y(){const D=this.resume(),j=this.stack[this.stack.length-1];j.url=D}function L(D){const j=this.stack[this.stack.length-1];if(!j.depth){const J=this.sliceSerialize(D).length;j.depth=J}}function E(){this.data.setextHeadingSlurpLineEnding=!0}function C(D){const j=this.stack[this.stack.length-1];j.depth=this.sliceSerialize(D).codePointAt(0)===61?1:2}function b(){this.data.setextHeadingSlurpLineEnding=void 0}function w(D){const J=this.stack[this.stack.length-1].children;let ie=J[J.length-1];(!ie||ie.type!=="text")&&(ie=ee(),ie.position={start:Wi(D.start),end:void 0},J.push(ie)),this.stack.push(ie)}function S(D){const j=this.stack.pop();j.value+=this.sliceSerialize(D),j.position.end=Wi(D.end)}function R(D){const j=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=j.children[j.children.length-1];J.position.end=Wi(D.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(j.type)&&(w.call(this,D),S.call(this,D))}function U(){this.data.atHardBreak=!0}function B(){const D=this.resume(),j=this.stack[this.stack.length-1];j.value=D}function Y(){const D=this.resume(),j=this.stack[this.stack.length-1];j.value=D}function W(){const D=this.resume(),j=this.stack[this.stack.length-1];j.value=D}function q(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=j,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function Q(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const j=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=j,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function N(D){const j=this.sliceSerialize(D),J=this.stack[this.stack.length-2];J.label=pP(j),J.identifier=ko(j).toLowerCase()}function Z(){const D=this.stack[this.stack.length-1],j=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ie=D.children;J.children=ie}else J.alt=j}function A(){const D=this.resume(),j=this.stack[this.stack.length-1];j.url=D}function le(){const D=this.resume(),j=this.stack[this.stack.length-1];j.title=D}function xe(){this.data.inReference=void 0}function I(){this.data.referenceType="collapsed"}function $(D){const j=this.resume(),J=this.stack[this.stack.length-1];J.label=j,J.identifier=ko(this.sliceSerialize(D)).toLowerCase(),this.data.referenceType="full"}function oe(D){this.data.characterReferenceType=D.type}function ce(D){const j=this.sliceSerialize(D),J=this.data.characterReferenceType;let ie;J?(ie=ax(j,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ie=Fh(j);const Se=this.stack[this.stack.length-1];Se.value+=ie}function fe(D){const j=this.stack.pop();j.position.end=Wi(D.end)}function Ae(D){S.call(this,D);const j=this.stack[this.stack.length-1];j.url=this.sliceSerialize(D)}function Le(D){S.call(this,D);const j=this.stack[this.stack.length-1];j.url="mailto:"+this.sliceSerialize(D)}function Ue(){return{type:"blockquote",children:[]}}function nt(){return{type:"code",lang:null,meta:null,value:""}}function je(){return{type:"inlineCode",value:""}}function gt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function z(){return{type:"emphasis",children:[]}}function qt(){return{type:"heading",depth:0,children:[]}}function Ve(){return{type:"break"}}function Ge(){return{type:"html",value:""}}function be(){return{type:"image",title:null,url:"",alt:null}}function it(){return{type:"link",title:null,url:"",children:[]}}function Re(D){return{type:"list",ordered:D.type==="listOrdered",start:null,spread:D._spread,children:[]}}function P(D){return{type:"listItem",spread:D._spread,checked:null,children:[]}}function M(){return{type:"paragraph",children:[]}}function H(){return{type:"strong",children:[]}}function ee(){return{type:"text",value:""}}function ne(){return{type:"thematicBreak"}}}function Wi(t){return{line:t.line,column:t.column,offset:t.offset}}function vx(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?vx(t,i):vP(t,i)}}function vP(t,e){let n;for(n in e)if(_x.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function bg(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+ks({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+ks({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+ks({start:e.start,end:e.end})+") is still open")}function xP(t){const e=this;e.parser=n;function n(i){return gP(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function yP(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function SP(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function EP(t,e){const n=e.value?e.value+`
`:"",i={};e.lang&&(i.className=["language-"+e.lang]);let r={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(r.data={meta:e.meta}),t.patch(e,r),r=t.applyData(e,r),r={type:"element",tagName:"pre",properties:{},children:[r]},t.patch(e,r),r}function MP(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function wP(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function TP(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=is(i.toLowerCase()),o=t.footnoteOrder.indexOf(i);let s,a=t.footnoteCounts.get(i);a===void 0?(a=0,t.footnoteOrder.push(i),s=t.footnoteOrder.length):s=o+1,a+=1,t.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function AP(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function CP(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function xx(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function RP(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return xx(t,e);const r={src:is(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,o),t.applyData(e,o)}function bP(t,e){const n={src:is(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function PP(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function LP(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return xx(t,e);const r={href:is(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function IP(t,e){const n={href:is(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function DP(t,e,n){const i=t.all(e),r=n?NP(n):yx(e),o={},s=[];if(typeof e.checked=="boolean"){const c=i[0];let f;c&&c.type==="element"&&c.tagName==="p"?f=c:(f={type:"element",tagName:"p",properties:{},children:[]},i.unshift(f)),f.children.length>0&&f.children.unshift({type:"text",value:" "}),f.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const c=i[a];(r||a!==0||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!r?s.push(...c.children):s.push(c)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return t.patch(e,u),t.applyData(e,u)}function NP(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=yx(n[i])}return e}function yx(t){const e=t.spread;return e??t.children.length>1}function UP(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,o),t.applyData(e,o)}function kP(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function FP(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function OP(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function zP(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=Dh(e.children[1]),l=ex(e.children[e.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,o),t.applyData(e,o)}function BP(t,e,n){const i=n?n.children:void 0,o=(i?i.indexOf(e):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:e.children.length;let l=-1;const u=[];for(;++l<a;){const f=e.children[l],h={},p=s?s[l]:void 0;p&&(h.align=p);let g={type:"element",tagName:o,properties:h,children:[]};f&&(g.children=t.all(f),t.patch(f,g),g=t.applyData(f,g)),u.push(g)}const c={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,c),t.applyData(e,c)}function HP(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const Pg=9,Lg=32;function VP(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const o=[];for(;i;)o.push(Ig(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return o.push(Ig(e.slice(r),r>0,!1)),o.join("")}function Ig(t,e,n){let i=0,r=t.length;if(e){let o=t.codePointAt(i);for(;o===Pg||o===Lg;)i++,o=t.codePointAt(i)}if(n){let o=t.codePointAt(r-1);for(;o===Pg||o===Lg;)r--,o=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function GP(t,e){const n={type:"text",value:VP(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function WP(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const XP={blockquote:yP,break:SP,code:EP,delete:MP,emphasis:wP,footnoteReference:TP,heading:AP,html:CP,imageReference:RP,image:bP,inlineCode:PP,linkReference:LP,link:IP,listItem:DP,list:UP,paragraph:kP,root:FP,strong:OP,table:zP,tableCell:HP,tableRow:BP,text:GP,thematicBreak:WP,toml:il,yaml:il,definition:il,footnoteDefinition:il};function il(){}const Sx=-1,Eu=0,Ql=1,Jl=2,Bh=3,Hh=4,Vh=5,Gh=6,Ex=7,Mx=8,Dg=typeof self=="object"?self:globalThis,jP=(t,e)=>{const n=(r,o)=>(t.set(o,r),r),i=r=>{if(t.has(r))return t.get(r);const[o,s]=e[r];switch(o){case Eu:case Sx:return n(s,r);case Ql:{const a=n([],r);for(const l of s)a.push(i(l));return a}case Jl:{const a=n({},r);for(const[l,u]of s)a[i(l)]=i(u);return a}case Bh:return n(new Date(s),r);case Hh:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case Vh:{const a=n(new Map,r);for(const[l,u]of s)a.set(i(l),i(u));return a}case Gh:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case Ex:{const{name:a,message:l}=s;return n(new Dg[a](l),r)}case Mx:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r)}return n(new Dg[o](s),r)};return i},Ng=t=>jP(new Map,t)(0),fo="",{toString:qP}={},{keys:YP}=Object,ys=t=>{const e=typeof t;if(e!=="object"||!t)return[Eu,e];const n=qP.call(t).slice(8,-1);switch(n){case"Array":return[Ql,fo];case"Object":return[Jl,fo];case"Date":return[Bh,fo];case"RegExp":return[Hh,fo];case"Map":return[Vh,fo];case"Set":return[Gh,fo]}return n.includes("Array")?[Ql,n]:n.includes("Error")?[Ex,n]:[Jl,n]},rl=([t,e])=>t===Eu&&(e==="function"||e==="symbol"),$P=(t,e,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=ys(s);switch(a){case Eu:{let c=s;switch(l){case"bigint":a=Mx,c=s.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);c=null;break;case"undefined":return r([Sx],s)}return r([a,c],s)}case Ql:{if(l)return r([l,[...s]],s);const c=[],f=r([a,c],s);for(const h of s)c.push(o(h));return f}case Jl:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(e&&"toJSON"in s)return o(s.toJSON());const c=[],f=r([a,c],s);for(const h of YP(s))(t||!rl(ys(s[h])))&&c.push([o(h),o(s[h])]);return f}case Bh:return r([a,s.toISOString()],s);case Hh:{const{source:c,flags:f}=s;return r([a,{source:c,flags:f}],s)}case Vh:{const c=[],f=r([a,c],s);for(const[h,p]of s)(t||!(rl(ys(h))||rl(ys(p))))&&c.push([o(h),o(p)]);return f}case Gh:{const c=[],f=r([a,c],s);for(const h of s)(t||!rl(ys(h)))&&c.push(o(h));return f}}const{message:u}=s;return r([a,{name:l,message:u}],s)};return o},Ug=(t,{json:e,lossy:n}={})=>{const i=[];return $P(!(e||n),!!e,new Map,i)(t),i},eu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?Ng(Ug(t,e)):structuredClone(t):(t,e)=>Ng(Ug(t,e));function KP(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function ZP(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function QP(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||KP,i=t.options.footnoteBackLabel||ZP,r=t.options.footnoteLabel||"Footnotes",o=t.options.footnoteLabelTagName||"h2",s=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const c=t.all(u),f=String(u.identifier).toUpperCase(),h=is(f.toLowerCase());let p=0;const g=[],x=t.footnoteCounts.get(f);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let _=typeof n=="string"?n:n(l,p);typeof _=="string"&&(_={type:"text",value:_}),g.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const m=c[c.length-1];if(m&&m.type==="element"&&m.tagName==="p"){const _=m.children[m.children.length-1];_&&_.type==="text"?_.value+=" ":m.children.push({type:"text",value:" "}),m.children.push(...g)}else c.push(...g);const d={type:"element",tagName:"li",properties:{id:e+"fn-"+h},children:t.wrap(c,!0)};t.patch(u,d),a.push(d)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...eu(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const wx=function(t){if(t==null)return n2;if(typeof t=="function")return Mu(t);if(typeof t=="object")return Array.isArray(t)?JP(t):e2(t);if(typeof t=="string")return t2(t);throw new Error("Expected function, string, or object as test")};function JP(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=wx(t[n]);return Mu(i);function i(...r){let o=-1;for(;++o<e.length;)if(e[o].apply(this,r))return!0;return!1}}function e2(t){const e=t;return Mu(n);function n(i){const r=i;let o;for(o in t)if(r[o]!==e[o])return!1;return!0}}function t2(t){return Mu(e);function e(n){return n&&n.type===t}}function Mu(t){return e;function e(n,i,r){return!!(i2(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function n2(){return!0}function i2(t){return t!==null&&typeof t=="object"&&"type"in t}const Tx=[],r2=!0,kg=!1,o2="skip";function s2(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const o=wx(r),s=i?-1:1;a(t,void 0,[])();function a(l,u,c){const f=l&&typeof l=="object"?l:{};if(typeof f.type=="string"){const p=typeof f.tagName=="string"?f.tagName:typeof f.name=="string"?f.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Tx,g,x,m;if((!e||o(l,u,c[c.length-1]||void 0))&&(p=a2(n(l,c)),p[0]===kg))return p;if("children"in l&&l.children){const d=l;if(d.children&&p[0]!==o2)for(x=(i?d.children.length:-1)+s,m=c.concat(d);x>-1&&x<d.children.length;){const _=d.children[x];if(g=a(_,x,m)(),g[0]===kg)return g;x=typeof g[1]=="number"?g[1]:x+s}}return p}}}function a2(t){return Array.isArray(t)?t:typeof t=="number"?[r2,t]:t==null?Tx:[t]}function Ax(t,e,n,i){let r,o,s;typeof e=="function"&&typeof n!="function"?(o=void 0,s=e,r=n):(o=e,s=n,r=i),s2(t,o,a,r);function a(l,u){const c=u[u.length-1],f=c?c.children.indexOf(l):void 0;return s(l,f,c)}}const Td={}.hasOwnProperty,l2={};function u2(t,e){const n=e||l2,i=new Map,r=new Map,o=new Map,s={...XP,...n.handlers},a={all:u,applyData:f2,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:c2,wrap:h2};return Ax(t,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const f=c.type==="definition"?i:r,h=String(c.identifier).toUpperCase();f.has(h)||f.set(h,c)}}),a;function l(c,f){const h=c.type,p=a.handlers[h];if(Td.call(a.handlers,h)&&p)return p(a,c,f);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in c){const{children:x,...m}=c,d=eu(m);return d.children=a.all(c),d}return eu(c)}return(a.options.unknownHandler||d2)(a,c,f)}function u(c){const f=[];if("children"in c){const h=c.children;let p=-1;for(;++p<h.length;){const g=a.one(h[p],c);if(g){if(p&&h[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Fg(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=Fg(x.value))}Array.isArray(g)?f.push(...g):f.push(g)}}}return f}}function c2(t,e){t.position&&(e.position=XC(t))}function f2(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,o=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,eu(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function d2(t,e){const n=e.data||{},i="value"in e&&!(Td.call(n,"hProperties")||Td.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function h2(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function Fg(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function Og(t,e){const n=u2(t,e),i=n.one(t,void 0),r=QP(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function p2(t,e){return t&&"run"in t?async function(n,i){const r=Og(n,{file:i,...e});await t.run(r,i)}:function(n,i){return Og(n,{file:i,...t||e})}}function zg(t){if(t)throw t}var Tl=Object.prototype.hasOwnProperty,Cx=Object.prototype.toString,Bg=Object.defineProperty,Hg=Object.getOwnPropertyDescriptor,Vg=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Cx.call(e)==="[object Array]"},Gg=function(e){if(!e||Cx.call(e)!=="[object Object]")return!1;var n=Tl.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&Tl.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||Tl.call(e,r)},Wg=function(e,n){Bg&&n.name==="__proto__"?Bg(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},Xg=function(e,n){if(n==="__proto__")if(Tl.call(e,n)){if(Hg)return Hg(e,n).value}else return;return e[n]},m2=function t(){var e,n,i,r,o,s,a=arguments[0],l=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=Xg(a,n),r=Xg(e,n),a!==r&&(c&&r&&(Gg(r)||(o=Vg(r)))?(o?(o=!1,s=i&&Vg(i)?i:[]):s=i&&Gg(i)?i:{},Wg(a,{name:n,newValue:t(c,s,r)})):typeof r<"u"&&Wg(a,{name:n,newValue:r}));return a};const Lc=Jg(m2);function Ad(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function g2(){const t=[],e={run:n,use:i};return e;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...u){const c=t[++o];let f=-1;if(l){s(l);return}for(;++f<r.length;)(u[f]===null||u[f]===void 0)&&(u[f]=r[f]);r=u,c?_2(c,a)(...u):s(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function _2(t,e){let n;return i;function i(...s){const a=t.length>s.length;let l;a&&s.push(r);try{l=t.apply(this,s)}catch(u){const c=u;if(a&&n)throw c;return r(c)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,e(s,...a))}function o(s){r(null,s)}}const ei={basename:v2,dirname:x2,extname:y2,join:S2,sep:"/"};function v2(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');ma(t);let n=0,i=-1,r=t.length,o;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let s=-1,a=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(t.codePointAt(r)===e.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=t.length),t.slice(n,i)}function x2(t){if(ma(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function y2(t){ma(t);let e=t.length,n=-1,i=0,r=-1,o=0,s;for(;e--;){const a=t.codePointAt(e);if(a===47){if(s){i=e+1;break}continue}n<0&&(s=!0,n=e+1),a===46?r<0?r=e:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function S2(...t){let e=-1,n;for(;++e<t.length;)ma(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":E2(n)}function E2(t){ma(t);const e=t.codePointAt(0)===47;let n=M2(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function M2(t,e){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=t.length;){if(s<t.length)a=t.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,s):n=t.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function ma(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const w2={cwd:T2};function T2(){return"/"}function Cd(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function A2(t){if(typeof t=="string")t=new URL(t);else if(!Cd(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return C2(t)}function C2(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const Ic=["history","path","basename","stem","extname","dirname"];class Rx{constructor(e){let n;e?Cd(e)?n={path:e}:typeof e=="string"||R2(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":w2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Ic.length;){const o=Ic[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)Ic.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?ei.basename(this.path):void 0}set basename(e){Nc(e,"basename"),Dc(e,"basename"),this.path=ei.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?ei.dirname(this.path):void 0}set dirname(e){jg(this.basename,"dirname"),this.path=ei.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?ei.extname(this.path):void 0}set extname(e){if(Dc(e,"extname"),jg(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ei.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Cd(e)&&(e=A2(e)),Nc(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?ei.basename(this.path,this.extname):void 0}set stem(e){Nc(e,"stem"),Dc(e,"stem"),this.path=ei.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new jt(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Dc(t,e){if(t&&t.includes(ei.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+ei.sep+"`")}function Nc(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function jg(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function R2(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const b2=function(t){const i=this.constructor.prototype,r=i[t],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},P2={}.hasOwnProperty;class Wh extends b2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=g2()}copy(){const e=new Wh;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(Lc(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Fc("data",this.frozen),this.namespace[e]=n,this):P2.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Fc("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=ol(e),i=this.parser||this.Parser;return Uc("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),Uc("process",this.parser||this.Parser),kc("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=ol(e),l=i.parse(a);i.run(l,a,function(c,f,h){if(c||!f||!h)return u(c);const p=f,g=i.stringify(p,h);D2(g)?h.value=g:h.result=g,u(c,h)});function u(c,f){c||!f?s(c):o?o(f):n(void 0,f)}}}processSync(e){let n=!1,i;return this.freeze(),Uc("processSync",this.parser||this.Parser),kc("processSync",this.compiler||this.Compiler),this.process(e,r),Yg("processSync","process",n),i;function r(o,s){n=!0,zg(o),i=s}}run(e,n,i){qg(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=ol(n);r.run(e,l,u);function u(c,f,h){const p=f||e;c?a(c):s?s(p):i(void 0,p,h)}}}runSync(e,n){let i=!1,r;return this.run(e,n,o),Yg("runSync","run",i),r;function o(s,a){zg(s),r=a,i=!0}}stringify(e,n){this.freeze();const i=ol(n),r=this.compiler||this.Compiler;return kc("stringify",r),qg(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Fc("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...f]=u;l(c,f)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Lc(!0,r.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const f=u[c];o(f)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,c){let f=-1,h=-1;for(;++f<i.length;)if(i[f][0]===u){h=f;break}if(h===-1)i.push([u,...c]);else if(c.length>0){let[p,...g]=c;const x=i[h][1];Ad(x)&&Ad(p)&&(p=Lc(!0,x,p)),i[h]=[u,p,...g]}}}}const L2=new Wh().freeze();function Uc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function kc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Fc(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function qg(t){if(!Ad(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Yg(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function ol(t){return I2(t)?t:new Rx(t)}function I2(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function D2(t){return typeof t=="string"||N2(t)}function N2(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const U2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",$g=[],Kg={allowDangerousHtml:!0},k2=/^(https?|ircs?|mailto|xmpp)$/i,F2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function O2(t){const e=t.allowedElements,n=t.allowElement,i=t.children||"",r=t.className,o=t.components,s=t.disallowedElements,a=t.rehypePlugins||$g,l=t.remarkPlugins||$g,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Kg}:Kg,c=t.skipHtml,f=t.unwrapDisallowed,h=t.urlTransform||z2,p=L2().use(xP).use(l).use(p2,u).use(a),g=new Rx;typeof i=="string"&&(g.value=i);for(const _ of F2)Object.hasOwn(t,_.from)&&(""+_.from+(_.to?"use `"+_.to+"` instead":"remove it")+U2+_.id,void 0);const x=p.parse(g);let m=p.runSync(x,g);return r&&(m={type:"element",tagName:"div",properties:{className:r},children:m.type==="root"?m.children:[m]}),Ax(m,d),ZC(m,{Fragment:Ke.Fragment,components:o,ignoreInvalidStyle:!0,jsx:Ke.jsx,jsxs:Ke.jsxs,passKeys:!0,passNode:!0});function d(_,v,y){if(_.type==="raw"&&y&&typeof v=="number")return c?y.children.splice(v,1):y.children[v]={type:"text",value:_.value},v;if(_.type==="element"){let L;for(L in Rc)if(Object.hasOwn(Rc,L)&&Object.hasOwn(_.properties,L)){const E=_.properties[L],C=Rc[L];(C===null||C.includes(_.tagName))&&(_.properties[L]=h(String(E||""),L,_))}}if(_.type==="element"){let L=e?!e.includes(_.tagName):s?s.includes(_.tagName):!1;if(!L&&n&&typeof v=="number"&&(L=!n(_,v,y)),L&&y&&typeof v=="number")return f&&_.children?y.children.splice(v,1,..._.children):y.children.splice(v,1),v}}}function z2(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e<0||r>-1&&e>r||n>-1&&e>n||i>-1&&e>i||k2.test(t.slice(0,e))?t:""}const Zg=`# Henry Benn\r
Orlando, FL  \r
352 978 5552  \r
henry.j.benn@gmail.com  \r
[LinkedIn](https://www.linkedin.com/in/henry-benn/)\r
\r
## Professional Summary\r
Data Professional with specialization in SQL, Python, Snowflake, and a high-level understanding of how data applies to business operations. Strong background in data engineering, machine learning, and executive-facing data visualization.\r
\r
## Certifications\r
- Comp TIA Data+ (Expected Jan 2025)\r
\r
## Professional Experience\r
\r
### Data Engineer\r
**The Walt Disney Company, Orlando, FL** | December 2023 - Present\r
- **Data Engineering/DevOps:** Managed on-prem Airflow containers for large-scale data orchestration as well as Dev-Ops tools including AWS, Azure, and Snowflake.\r
- **Visualization Development:** Created executive-facing dashboards using PowerBI, Tableau, and custom solutions.\r
- **Machine Learning/AI Ops:** Conducted risk analysis, automated incident data summaries, and implemented NLP for advanced data insights. Leveraging AI for advanced monitoring solutions.\r
- **System Administration:** Administered the team's Snowflake account, optimizing database operations and supporting strategic decision-making.\r
*Extensively used SQL and Python in all tasks.*\r
\r
### Data Analyst\r
**A1 Stone World, Jacksonville, FL** | November 2022 - September 2023\r
- **Data Analysis & Predictive Modeling**: Skilled in using Python, R, and Excel for analyzing production data, forecasting demand, and optimizing manufacturing processes.\r
- **Financial Reporting & Analysis**: Proficient in generating financial reports, cost analysis, and budgeting using tools like QuickBooks and SAP to support business decisions.\r
- **Data Visualization & Reporting**: Adept at creating actionable dashboards with Power BI and Tableau to communicate fabrication metrics and financial insights to management.\r
- **Process Optimization & Quality Control**: Knowledge of lean manufacturing and statistical process control (SPC) to improve efficiency and ensure product quality.\r
\r
### Agricultural Analyst\r
**Goorarooman Farming, Thallon, QLD** | January 2020 - January 2021\r
- **Data Analysis & Statistical Modeling**: Proficient in analyzing agricultural data using R, SAS, and SPSS to forecast trends and optimize crop/livestock outcomes.\r
- **Geospatial & Remote Sensing Expertise**: Skilled in GIS (ArcGIS, QGIS) and satellite imagery tools (Sentinel-2, Landsat) for precision agriculture and land-use mapping.\r
- **Data Visualization & Reporting**: Experienced in creating actionable insights with Tableau and Power BI for stakeholders in farming and agribusiness.\r
- **Agricultural Knowledge**: Deep understanding of agronomy and sustainable practices to drive data-informed decisions in farm management and policy.\r
\r
## Education\r
\r
### Bachelor's Degree\r
**The University of New South Wales** | Jan 2015 - Jan 2020`;let Er=[];const B2=async t=>{try{console.log("Sending message:",t),t==="START_CHAT"&&(Er=[]),Er.push({role:"user",content:t}),Er.length>8&&(Er=Er.slice(-8));const e=await fetch("http://localhost:3000/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:Er})});if(!e.ok){const r=await e.json();throw new Error(r.details||"Server error")}const n=await e.json();console.log("Received response:",n);let i=[];if(n.content&&Array.isArray(n.content)){const r=n.content.filter(s=>s.type==="text").map(s=>s.text);i.push(...r),Er.push({role:"assistant",content:r.join(`
`)});const o=n.content.find(s=>s.type==="tool_use");if(o&&o.name==="send_email"){const s=[`
Email Details:`,"To: henry.j.benn@gmail.com",`CC: ${o.input.userEmail}`,`Subject: ${o.input.subject}`,`
Message:`,`${o.input.message}`].join(`
`);i.push(s),n.emailResult&&n.emailResult.success?i.push(`
Email sent successfully!`):i.push(`
Failed to send email. Please try again.`)}}return i.join(`
`)}catch(e){throw console.error("Error getting AI response:",e),e}};function H2({initialInput:t,onCommand:e}){const[n,i]=Dt.useState([]),[r,o]=Dt.useState(""),[s,a]=Dt.useState(!1),[l,u]=Dt.useState(!1),c=Dt.useRef(null),f=Dt.useRef(null),h=Dt.useRef(!1);Dt.useEffect(()=>{if(h.current)return;h.current=!0;const b=["Welcome to henryOS v0.1.337 (Prototype Build)","---------------------------------------------","[*] Kernel initialized... ✓","[*] Memory allocation... ✓","[*] Digital anima awakened... ✓","[*] Caffeine reserves: 92%"," ","    ▓█████▒░ henryOS ░▒█████▓","    Making use of your data, one byte at a time."," ",`Last login: ${new Date().toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})}`,'Type "help" for available commands.'];(async()=>{a(!0);for(const S of b)await new Promise(R=>{i(U=>[...U,{text:S,isAI:!1}]),setTimeout(()=>{p(),R()},50)});a(!1)})()},[]);const p=()=>{f.current&&(f.current.scrollTop=f.current.scrollHeight)};Dt.useEffect(()=>{var E;(E=c.current)==null||E.focus()},[s]),Dt.useEffect(()=>{t&&y({key:"Enter",preventDefault:()=>{}})},[t]);const g=async E=>{if(typeof E=="string"){const C=E.split(`
`);for(const b of C)await new Promise(w=>{i(S=>[...S,{text:b,isAI:!1}]),setTimeout(()=>{p(),w()},50)})}else if(typeof E=="object")if(E.isMarkdown){const b=m(E.text).split(`
`);for(const w of b)await new Promise(S=>{i(R=>[...R,{text:w,isAI:!1,isMarkdown:!0}]),setTimeout(()=>{p(),S()},50)})}else{const C=E.text.split(`
`);for(const b of C)await new Promise(w=>{i(S=>[...S,{text:b,isAI:E.isAI||!1,isHTML:E.isHTML||!1}]),setTimeout(()=>{p(),w()},50)})}},x=(E,C)=>{const b=E.split(" "),w=[];let S=[],R=0;return b.forEach(U=>{if(R+U.length+1>C)if(R>0&&(w.push(S.join(" ")),S=[],R=0),U.length>C){const B=U.match(new RegExp(`.{1,${C}}`,"g"))||[];B.forEach((Y,W)=>{W===B.length-1?(S=[Y],R=Y.length):w.push(Y)})}else S=[U],R=U.length;else S.push(U),R+=U.length+(R>0?1:0)}),S.length>0&&w.push(S.join(" ")),w.map(U=>U.trim())},m=E=>{const C=f.current;if(!C)return E;const b=C.getBoundingClientRect().width;if(b<768)return E.replace(/\r/g,"").split(`
`).map(le=>le.trim()).join(`
`);const w=b-40,R=Math.floor(w/9.5),U=R-4,B="═".repeat(R-2),Y=`╔${B}╗`,W=`╚${B}╝`,q=`║${" ".repeat(R-2)}║`,N=E.replace(/\r/g,"").split(`
`).map(A=>x(A.trim(),U)).flat().map(A=>`║ ${A.padEnd(U," ")} ║`);return[Y,q,...N,q,W].join(`
`)},d={1:{name:"📊 Data Pipeline Automation",description:"Automated ETL processes using Airflow",url:"/projects/data-pipeline.html"},2:{name:"🤖 AI Chat Interface",url:"https://github.com/hbenn/ai-chat-interface"},3:{name:"📈 Interactive Dashboard",url:"/projects/dashboard.html"},4:{name:"🔍 ML Analysis Tool",url:"https://github.com/hbenn/ml-analysis"}},_=(E,C)=>`<a href="${C.url}" target="_blank" rel="noopener noreferrer" class="terminal-link clickable-project" data-project="${E}">${C.name}</a>`,v=async E=>{const C=E.toLowerCase().trim();await g({text:`> ${E}`,isAI:!1});try{let b;switch(C){case"help":b=`Available commands:
- clear   : Clear the terminal
- help    : Show this help message
- about   : Learn about me and my projects
- resume  : Display resume
- chat    : Start a chat with my digital anima
- contact : View contact information`,await g(b);break;case"clear":i([]);break;case"chat":b=`Chat is currently disabled. 
It works, but I need to find a server that wont kill my wallet.
I made a digital version of me using a custom LLM. It can answer any questions about me and also send me emails from you, on your behalf.


--------------------------------


For now, please use the "contact" command to get my details.`,await g(b);break;case"resume":b={text:Zg,isMarkdown:!0},await g(b);break;case"--exit":l?(u(!1),await g({text:"Exiting chat mode...",isAI:!1})):await g({text:"Not in chat mode.",isAI:!1});break;case"about":b={text:`About Henry Benn
--------------------

Hi! I'm Henry, a data professional specializing in innovative solutions and creative problem-solving.
I know how to get it done, and I know how to get it done well.


Skills & Expertise:


• Data Engineering (ETL -> DataOps -> AI Ops)
  - Snowflake
  - Airflow
  - Python
  - SQL
  - Docker
  - Kubernetes
  - To be honest, if you need the data, I can move and refine it.
  

• Data Visualization
  - PowerBI 
  - Tableau
  - Custom React Apps
  - Apache Superset
  - This is the fun part, I can make your data look good.


• Machine Learning & AI Engineering
  - Python
  - SQL
  - Docker
  - Kubernetes
  - Prompt Engineering
  - Agentic AI
  - LLMs
  - RAG
  - Embeddings
  - LangChain
  - Hugging Face
  
Featured Projects:
${Object.entries(d).map(([S,R])=>`${_(S,R)} - ${R.description||""}`).join(`
`)}

Click any project to view more details.`,isHTML:!0},await g(b);break;case"project":const w=E.split(" ")[1];b=handleProjectCommand(w),await g(b);break;case"contact":b={text:`Contact Information
-------------------
Email: <a href="mailto:henry.j.benn@gmail.com" class="terminal-link">henry.j.benn@gmail.com</a>
LinkedIn: <a href="https://linkedin.com/in/henry-benn" target="_blank" class="terminal-link">linkedin.com/in/henry-benn</a>
GitHub: <a href="https://github.com/henryb11" target="_blank" class="terminal-link">github.com/henryb11</a>

Feel free to reach out! I'm always open to interesting conversations and opportunities.`,isHTML:!0},await g(b);break;default:if(l){await g({text:"Processing response...",isAI:!1});try{const S=await B2(E);await g({text:S,isAI:!0})}catch(S){await g({text:`Error: ${S.message}`,isAI:!0})}}else await g({text:`Command not found: ${E}. Type "help" for available commands.`,isAI:!1})}}catch(b){console.error("Error handling command:",b),await g({text:`Error: ${b.message}`,isAI:!0})}},y=async E=>{if(E.key==="Enter"&&!s){const C=t||r.trim();o(""),i(b=>[...b,`> ${C}`]),await v(C)}},L=()=>{var E;(E=c.current)==null||E.focus()};return Dt.useEffect(()=>{const E=()=>{if(f.current){const C=n[n.length-1];C&&C.text.includes("resume")&&i(b=>{const w=[...b];return w[w.length-1]={text:m(Zg),isAI:!1},w})}};return window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[n]),Ke.jsx("div",{className:"terminal-window",onClick:L,children:Ke.jsxs("div",{className:"terminal-output",ref:f,children:[n.map((E,C)=>Ke.jsx("div",{className:`terminal-line ${E.isAI?"ai-response":""}`,children:E.isMarkdown?Ke.jsx(O2,{children:E.text}):E.isHTML?Ke.jsx("div",{dangerouslySetInnerHTML:{__html:E.text}}):E.text},C)),Ke.jsxs("div",{className:"terminal-input-line",children:[!s&&(l?"chat>":">"),Ke.jsx("input",{ref:c,type:"text",value:r,onChange:E=>o(E.target.value),onKeyDown:y,disabled:s})]})]})})}const Qg=[`

     #####    ##       ##### ##   
  ######  /  #### / ######  /##   
 /#   /  /   ####/ /#   /  / ##   
/    /  /    # #  /    /  /  ##   
    /  /     #        /  /   /    
   ## ##     #       ## ##  /     
   ## ##     #       ## ## /      
   ## ########       ## ##/       
   ## ##     #       ## ## ###    
   ## ##     ##      ## ##   ###  
   #  ##     ##      #  ##     ## 
      /       ##        /      ## 
  /##/        ##    /##/     ###  
 /  #####      ##  /  ########    
/     ##          /     ####      
#                 #               
 ##                ##             
`,`
                                 
     *****    **       ***** **   
  ******  *  **** * ******  ***   
 **   *  *   ***** **   *  * **   
*    *  *    * *  *    *  *  **   
    *  *     *        *  *   *    
   ** **     *       ** **  *     
   ** **     *       ** ** *      
   ** ********       ** ***       
   ** **     *       ** ** ***    
   ** **     **      ** **   ***  
   *  **     **      *  **     ** 
      *       **        *      ** 
  ****        **    ****     ***  
 *  *****      **  *  ********    
*     **          *     ****      
*                 *               
 **                **             
`];function V2(){const[t,e]=Dt.useState(0),[n,i]=Dt.useState("");Dt.useEffect(()=>{const o=setInterval(()=>{e(s=>(s+1)%Qg.length)},1262);return()=>clearInterval(o)},[]),Dt.useEffect(()=>{const o=document.getElementById("shader-overlay");return fC(o)},[]);const r=o=>{i(o)};return Ke.jsxs(Ke.Fragment,{children:[Ke.jsxs("div",{className:"crt-screen",children:[Ke.jsx("canvas",{id:"shader-overlay"}),Ke.jsxs("div",{className:"sidebar",children:[Ke.jsx("div",{className:"header-monitor monitor-frame",children:Ke.jsx("div",{className:"terminal-container",children:Ke.jsxs("div",{className:"content",children:[Ke.jsx("div",{className:"ascii-art",children:Qg[t]}),Ke.jsx("div",{className:"terminal-text",children:"Data Solutions"})]})})}),Ke.jsxs("div",{className:"menu-options",children:[Ke.jsx("button",{className:"menu-item",onClick:()=>r("help"),children:"Help"}),Ke.jsx("button",{className:"menu-item",onClick:()=>r("about"),children:"About"}),Ke.jsx("button",{className:"menu-item",onClick:()=>r("contact"),children:"Contact"}),Ke.jsx("button",{className:"menu-item",onClick:()=>r("resume"),children:"Resume"})]})]}),Ke.jsx("div",{className:"main-content",children:Ke.jsx("div",{className:"terminal-container",children:Ke.jsx(H2,{initialInput:n})})})]}),Ke.jsx("div",{className:"monitor-footer",style:{backgroundImage:`url(${oE})`,display:"flex",justifyContent:"center",alignItems:"center"},children:Ke.jsx("img",{src:sE,alt:"HBM Logo",style:{height:"80%",maxWidth:"100px",objectFit:"contain"}})})]})}Oc.createRoot(document.getElementById("root")).render(Ke.jsx(qx.StrictMode,{children:Ke.jsx(V2,{})}));
