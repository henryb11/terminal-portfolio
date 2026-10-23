(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var ep=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function e_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var t_={exports:{}},nu={},n_={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=Symbol.for("react.element"),Dx=Symbol.for("react.portal"),Nx=Symbol.for("react.fragment"),Ux=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),Fx=Symbol.for("react.provider"),Ox=Symbol.for("react.context"),zx=Symbol.for("react.forward_ref"),Bx=Symbol.for("react.suspense"),Hx=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),tp=Symbol.iterator;function Gx(t){return t===null||typeof t!="object"?null:(t=tp&&t[tp]||t["@@iterator"],typeof t=="function"?t:null)}var i_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},r_=Object.assign,o_={};function Zo(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}Zo.prototype.isReactComponent={};Zo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function s_(){}s_.prototype=Zo.prototype;function bd(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||i_}var Pd=bd.prototype=new s_;Pd.constructor=bd;r_(Pd,Zo.prototype);Pd.isPureReactComponent=!0;var np=Array.isArray,a_=Object.prototype.hasOwnProperty,Ld={current:null},l_={key:!0,ref:!0,__self:!0,__source:!0};function u_(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)a_.call(e,i)&&!l_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ra,type:t,key:o,ref:s,props:r,_owner:Ld.current}}function Wx(t,e){return{$$typeof:ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===ra}function Xx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ip=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Xx(""+t.key):e.toString(36)}function al(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ra:case Dx:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+Au(s,0):i,np(r)?(n="",t!=null&&(n=t.replace(ip,"$&/")+"/"),al(r,e,n,"",function(u){return u})):r!=null&&(Id(r)&&(r=Wx(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(ip,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",np(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+Au(o,a);s+=al(o,e,n,l,r)}else if(l=Gx(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+Au(o,a++),s+=al(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function xa(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(o){return e.call(n,o,r++)}),i}function jx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},ll={transition:null},qx={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:ll,ReactCurrentOwner:Ld};function c_(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:xa,forEach:function(t,e,n){xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xa(t,function(){e++}),e},toArray:function(t){return xa(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Zo;We.Fragment=Nx;We.Profiler=kx;We.PureComponent=bd;We.StrictMode=Ux;We.Suspense=Bx;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qx;We.act=c_;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=r_({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ld.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)a_.call(e,l)&&!l_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ra,type:t.type,key:r,ref:o,props:i,_owner:s}};We.createContext=function(t){return t={$$typeof:Ox,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fx,_context:t},t.Consumer=t};We.createElement=u_;We.createFactory=function(t){var e=u_.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:zx,render:t}};We.isValidElement=Id;We.lazy=function(t){return{$$typeof:Vx,_payload:{_status:-1,_result:t},_init:jx}};We.memo=function(t,e){return{$$typeof:Hx,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=ll.transition;ll.transition={};try{t()}finally{ll.transition=e}};We.unstable_act=c_;We.useCallback=function(t,e){return Zt.current.useCallback(t,e)};We.useContext=function(t){return Zt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};We.useEffect=function(t,e){return Zt.current.useEffect(t,e)};We.useId=function(){return Zt.current.useId()};We.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return Zt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};We.useRef=function(t){return Zt.current.useRef(t)};We.useState=function(t){return Zt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return Zt.current.useTransition()};We.version="18.3.1";n_.exports=We;var Rt=n_.exports;const $x=e_(Rt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yx=Rt,Kx=Symbol.for("react.element"),Zx=Symbol.for("react.fragment"),Qx=Object.prototype.hasOwnProperty,Jx=Yx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ey={key:!0,ref:!0,__self:!0,__source:!0};function f_(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)Qx.call(e,i)&&!ey.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Kx,type:t,key:o,ref:s,props:r,_owner:Jx.current}}nu.Fragment=Zx;nu.jsx=f_;nu.jsxs=f_;t_.exports=nu;var qe=t_.exports,zc={},d_={exports:{}},En={},h_={exports:{}},p_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,$){var A=N.length;N.push($);e:for(;0<A;){var le=A-1>>>1,xe=N[le];if(0<r(xe,$))N[le]=$,N[A]=xe,A=le;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var $=N[0],A=N.pop();if(A!==$){N[0]=A;e:for(var le=0,xe=N.length,L=xe>>>1;le<L;){var Y=2*(le+1)-1,oe=N[Y],ce=Y+1,fe=N[ce];if(0>r(oe,A))ce<xe&&0>r(fe,oe)?(N[le]=fe,N[ce]=A,le=ce):(N[le]=oe,N[Y]=A,le=Y);else if(ce<xe&&0>r(fe,A))N[le]=fe,N[ce]=A,le=ce;else break e}}return $}function r(N,$){var A=N.sortIndex-$.sortIndex;return A!==0?A:N.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(N){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=N)i(u),$.sortIndex=$.expirationTime,e(l,$);else break;$=n(u)}}function y(N){if(x=!1,v(N),!g)if(n(l)!==null)g=!0,G(P);else{var $=n(u);$!==null&&X(y,$.startTime-N)}}function P(N,$){g=!1,x&&(x=!1,f(I),I=-1),p=!0;var A=h;try{for(v($),d=n(l);d!==null&&(!(d.expirationTime>$)||N&&!C());){var le=d.callback;if(typeof le=="function"){d.callback=null,h=d.priorityLevel;var xe=le(d.expirationTime<=$);$=t.unstable_now(),typeof xe=="function"?d.callback=xe:d===n(l)&&i(l),v($)}else i(l);d=n(l)}if(d!==null)var L=!0;else{var Y=n(u);Y!==null&&X(y,Y.startTime-$),L=!1}return L}finally{d=null,h=A,p=!1}}var M=!1,R=null,I=-1,T=5,S=-1;function C(){return!(t.unstable_now()-S<T)}function U(){if(R!==null){var N=t.unstable_now();S=N;var $=!0;try{$=R(!0,N)}finally{$?k():(M=!1,R=null)}}else M=!1}var k;if(typeof _=="function")k=function(){_(U)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,O=V.port2;V.port1.onmessage=U,k=function(){O.postMessage(null)}}else k=function(){m(U,0)};function G(N){R=N,M||(M=!0,k())}function X(N,$){I=m(function(){N(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,G(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var $=3;break;default:$=h}var A=h;h=$;try{return N()}finally{h=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,$){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var A=h;h=N;try{return $()}finally{h=A}},t.unstable_scheduleCallback=function(N,$,A){var le=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?le+A:le):A=le,N){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=A+xe,N={id:c++,callback:$,priorityLevel:N,startTime:A,expirationTime:xe,sortIndex:-1},A>le?(N.sortIndex=A,e(u,N),n(l)===null&&N===n(u)&&(x?(f(I),I=-1):x=!0,X(y,A-le))):(N.sortIndex=xe,e(l,N),g||p||(g=!0,G(P))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var $=h;return function(){var A=h;h=$;try{return N.apply(this,arguments)}finally{h=A}}}})(p_);h_.exports=p_;var ty=h_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny=Rt,Sn=ty;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m_=new Set,zs={};function jr(t,e){Oo(t,e),Oo(t+"Capture",e)}function Oo(t,e){for(zs[t]=e,t=0;t<e.length;t++)m_.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=Object.prototype.hasOwnProperty,iy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rp={},op={};function ry(t){return Bc.call(op,t)?!0:Bc.call(rp,t)?!1:iy.test(t)?op[t]=!0:(rp[t]=!0,!1)}function oy(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sy(t,e,n,i){if(e===null||typeof e>"u"||oy(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qt(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new Qt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new Qt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new Qt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new Qt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new Qt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new Qt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new Qt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new Qt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dd=/[\-:]([a-z])/g;function Nd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dd,Nd);Ot[e]=new Qt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dd,Nd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dd,Nd);Ot[e]=new Qt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new Qt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new Qt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ud(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sy(e,n,r,i)&&(n=null),i||r===null?ry(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ya=Symbol.for("react.element"),po=Symbol.for("react.portal"),mo=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),g_=Symbol.for("react.provider"),__=Symbol.for("react.context"),Fd=Symbol.for("react.forward_ref"),Vc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Od=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),sp=Symbol.iterator;function as(t){return t===null||typeof t!="object"?null:(t=sp&&t[sp]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Cu;function Es(t){if(Cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cu=e&&e[1]||""}return`
`+Cu+t}var Ru=!1;function bu(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function ay(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=bu(t.type,!1),t;case 11:return t=bu(t.type.render,!1),t;case 1:return t=bu(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mo:return"Fragment";case po:return"Portal";case Hc:return"Profiler";case kd:return"StrictMode";case Vc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case __:return(t.displayName||"Context")+".Consumer";case g_:return(t._context.displayName||"Context")+".Provider";case Fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Od:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function ly(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function uy(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=uy(t))}function y_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=x_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ap(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function S_(t,e){e=e.checked,e!=null&&Ud(t,"checked",e,!1)}function jc(t,e){S_(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&qc(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qc(t,e,n){(e!=="number"||Cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ms=Array.isArray;function Co(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $c(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function up(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Ms(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function E_(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function cp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function M_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?M_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ea,w_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ea=Ea||document.createElement("div"),Ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cy=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){cy.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function T_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function A_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=T_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fy=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kc(t,e){if(e){if(fy[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qc=null;function zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jc=null,Ro=null,bo=null;function fp(t){if(t=aa(t)){if(typeof Jc!="function")throw Error(se(280));var e=t.stateNode;e&&(e=au(e),Jc(t.stateNode,t.type,e))}}function C_(t){Ro?bo?bo.push(t):bo=[t]:Ro=t}function R_(){if(Ro){var t=Ro,e=bo;if(bo=Ro=null,fp(t),e)for(t=0;t<e.length;t++)fp(e[t])}}function b_(t,e){return t(e)}function P_(){}var Pu=!1;function L_(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return b_(t,e,n)}finally{Pu=!1,(Ro!==null||bo!==null)&&(P_(),R_())}}function Hs(t,e){var n=t.stateNode;if(n===null)return null;var i=au(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var ef=!1;if(Ci)try{var ls={};Object.defineProperty(ls,"passive",{get:function(){ef=!0}}),window.addEventListener("test",ls,ls),window.removeEventListener("test",ls,ls)}catch{ef=!1}function dy(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var bs=!1,Rl=null,bl=!1,tf=null,hy={onError:function(t){bs=!0,Rl=t}};function py(t,e,n,i,r,o,s,a,l){bs=!1,Rl=null,dy.apply(hy,arguments)}function my(t,e,n,i,r,o,s,a,l){if(py.apply(this,arguments),bs){if(bs){var u=Rl;bs=!1,Rl=null}else throw Error(se(198));bl||(bl=!0,tf=u)}}function qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function I_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dp(t){if(qr(t)!==t)throw Error(se(188))}function gy(t){var e=t.alternate;if(!e){if(e=qr(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return dp(r),t;if(o===i)return dp(r),e;o=o.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function D_(t){return t=gy(t),t!==null?N_(t):null}function N_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=N_(t);if(e!==null)return e;t=t.sibling}return null}var U_=Sn.unstable_scheduleCallback,hp=Sn.unstable_cancelCallback,_y=Sn.unstable_shouldYield,vy=Sn.unstable_requestPaint,Et=Sn.unstable_now,xy=Sn.unstable_getCurrentPriorityLevel,Bd=Sn.unstable_ImmediatePriority,k_=Sn.unstable_UserBlockingPriority,Pl=Sn.unstable_NormalPriority,yy=Sn.unstable_LowPriority,F_=Sn.unstable_IdlePriority,iu=null,si=null;function Sy(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:wy,Ey=Math.log,My=Math.LN2;function wy(t){return t>>>=0,t===0?32:31-(Ey(t)/My|0)|0}var Ma=64,wa=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ll(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ws(a):(o&=s,o!==0&&(i=ws(o)))}else s=n&~r,s!==0?i=ws(s):o!==0&&(i=ws(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function Ty(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ay(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qn(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=Ty(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function nf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O_(){var t=Ma;return Ma<<=1,!(Ma&4194240)&&(Ma=64),t}function Lu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function Cy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function Hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function z_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var B_,Vd,H_,V_,G_,rf=!1,Ta=[],Qi=null,Ji=null,er=null,Vs=new Map,Gs=new Map,qi=[],Ry="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pp(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":Ji=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(e.pointerId)}}function us(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=aa(e),e!==null&&Vd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function by(t,e,n,i,r){switch(e){case"focusin":return Qi=us(Qi,t,e,n,i,r),!0;case"dragenter":return Ji=us(Ji,t,e,n,i,r),!0;case"mouseover":return er=us(er,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Vs.set(o,us(Vs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Gs.set(o,us(Gs.get(o)||null,t,e,n,i,r)),!0}return!1}function W_(t){var e=Lr(t.target);if(e!==null){var n=qr(e);if(n!==null){if(e=n.tag,e===13){if(e=I_(n),e!==null){t.blockedOn=e,G_(t.priority,function(){H_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Qc=i,n.target.dispatchEvent(i),Qc=null}else return e=aa(n),e!==null&&Vd(e),t.blockedOn=n,!1;e.shift()}return!0}function mp(t,e,n){ul(t)&&n.delete(e)}function Py(){rf=!1,Qi!==null&&ul(Qi)&&(Qi=null),Ji!==null&&ul(Ji)&&(Ji=null),er!==null&&ul(er)&&(er=null),Vs.forEach(mp),Gs.forEach(mp)}function cs(t,e){t.blockedOn===e&&(t.blockedOn=null,rf||(rf=!0,Sn.unstable_scheduleCallback(Sn.unstable_NormalPriority,Py)))}function Ws(t){function e(r){return cs(r,t)}if(0<Ta.length){cs(Ta[0],t);for(var n=1;n<Ta.length;n++){var i=Ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&cs(Qi,t),Ji!==null&&cs(Ji,t),er!==null&&cs(er,t),Vs.forEach(e),Gs.forEach(e),n=0;n<qi.length;n++)i=qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<qi.length&&(n=qi[0],n.blockedOn===null);)W_(n),n.blockedOn===null&&qi.shift()}var Po=Ni.ReactCurrentBatchConfig,Il=!0;function Ly(t,e,n,i){var r=tt,o=Po.transition;Po.transition=null;try{tt=1,Gd(t,e,n,i)}finally{tt=r,Po.transition=o}}function Iy(t,e,n,i){var r=tt,o=Po.transition;Po.transition=null;try{tt=4,Gd(t,e,n,i)}finally{tt=r,Po.transition=o}}function Gd(t,e,n,i){if(Il){var r=of(t,e,n,i);if(r===null)Hu(t,e,i,Dl,n),pp(t,i);else if(by(r,t,e,n,i))i.stopPropagation();else if(pp(t,i),e&4&&-1<Ry.indexOf(t)){for(;r!==null;){var o=aa(r);if(o!==null&&B_(o),o=of(t,e,n,i),o===null&&Hu(t,e,i,Dl,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Hu(t,e,i,null,n)}}var Dl=null;function of(t,e,n,i){if(Dl=null,t=zd(i),t=Lr(t),t!==null)if(e=qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=I_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Dl=t,null}function X_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xy()){case Bd:return 1;case k_:return 4;case Pl:case yy:return 16;case F_:return 536870912;default:return 16}default:return 16}}var Ki=null,Wd=null,cl=null;function j_(){if(cl)return cl;var t,e=Wd,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Aa(){return!0}function gp(){return!1}function Mn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Aa:gp,this.isPropagationStopped=gp,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xd=Mn(Qo),sa=xt({},Qo,{view:0,detail:0}),Dy=Mn(sa),Iu,Du,fs,ru=xt({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fs&&(fs&&t.type==="mousemove"?(Iu=t.screenX-fs.screenX,Du=t.screenY-fs.screenY):Du=Iu=0,fs=t),Iu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),_p=Mn(ru),Ny=xt({},ru,{dataTransfer:0}),Uy=Mn(Ny),ky=xt({},sa,{relatedTarget:0}),Nu=Mn(ky),Fy=xt({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),Oy=Mn(Fy),zy=xt({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),By=Mn(zy),Hy=xt({},Qo,{data:0}),vp=Mn(Hy),Vy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xy(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Wy[t])?!!e[t]:!1}function jd(){return Xy}var jy=xt({},sa,{key:function(t){if(t.key){var e=Vy[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Gy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jd,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qy=Mn(jy),$y=xt({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xp=Mn($y),Yy=xt({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jd}),Ky=Mn(Yy),Zy=xt({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qy=Mn(Zy),Jy=xt({},ru,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),eS=Mn(Jy),tS=[9,13,27,32],qd=Ci&&"CompositionEvent"in window,Ps=null;Ci&&"documentMode"in document&&(Ps=document.documentMode);var nS=Ci&&"TextEvent"in window&&!Ps,q_=Ci&&(!qd||Ps&&8<Ps&&11>=Ps),yp=" ",Sp=!1;function $_(t,e){switch(t){case"keyup":return tS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var go=!1;function iS(t,e){switch(t){case"compositionend":return Y_(e);case"keypress":return e.which!==32?null:(Sp=!0,yp);case"textInput":return t=e.data,t===yp&&Sp?null:t;default:return null}}function rS(t,e){if(go)return t==="compositionend"||!qd&&$_(t,e)?(t=j_(),cl=Wd=Ki=null,go=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return q_&&e.locale!=="ko"?null:e.data;default:return null}}var oS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ep(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oS[t.type]:e==="textarea"}function K_(t,e,n,i){C_(i),e=Nl(e,"onChange"),0<e.length&&(n=new Xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ls=null,Xs=null;function sS(t){av(t,0)}function ou(t){var e=xo(t);if(y_(e))return t}function aS(t,e){if(t==="change")return e}var Z_=!1;if(Ci){var Uu;if(Ci){var ku="oninput"in document;if(!ku){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),ku=typeof Mp.oninput=="function"}Uu=ku}else Uu=!1;Z_=Uu&&(!document.documentMode||9<document.documentMode)}function wp(){Ls&&(Ls.detachEvent("onpropertychange",Q_),Xs=Ls=null)}function Q_(t){if(t.propertyName==="value"&&ou(Xs)){var e=[];K_(e,Xs,t,zd(t)),L_(sS,e)}}function lS(t,e,n){t==="focusin"?(wp(),Ls=e,Xs=n,Ls.attachEvent("onpropertychange",Q_)):t==="focusout"&&wp()}function uS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(Xs)}function cS(t,e){if(t==="click")return ou(e)}function fS(t,e){if(t==="input"||t==="change")return ou(e)}function dS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:dS;function js(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bc.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,e){var n=Tp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tp(n)}}function J_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?J_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ev(){for(var t=window,e=Cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Cl(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hS(t){var e=ev(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&J_(n.ownerDocument.documentElement,n)){if(i!==null&&$d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=Ap(n,o);var s=Ap(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pS=Ci&&"documentMode"in document&&11>=document.documentMode,_o=null,sf=null,Is=null,af=!1;function Cp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;af||_o==null||_o!==Cl(i)||(i=_o,"selectionStart"in i&&$d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Is&&js(Is,i)||(Is=i,i=Nl(sf,"onSelect"),0<i.length&&(e=new Xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=_o)))}function Ca(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vo={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Fu={},tv={};Ci&&(tv=document.createElement("div").style,"AnimationEvent"in window||(delete vo.animationend.animation,delete vo.animationiteration.animation,delete vo.animationstart.animation),"TransitionEvent"in window||delete vo.transitionend.transition);function su(t){if(Fu[t])return Fu[t];if(!vo[t])return t;var e=vo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in tv)return Fu[t]=e[n];return t}var nv=su("animationend"),iv=su("animationiteration"),rv=su("animationstart"),ov=su("transitionend"),sv=new Map,Rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){sv.set(t,e),jr(e,[t])}for(var Ou=0;Ou<Rp.length;Ou++){var zu=Rp[Ou],mS=zu.toLowerCase(),gS=zu[0].toUpperCase()+zu.slice(1);fr(mS,"on"+gS)}fr(nv,"onAnimationEnd");fr(iv,"onAnimationIteration");fr(rv,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(ov,"onTransitionEnd");Oo("onMouseEnter",["mouseout","mouseover"]);Oo("onMouseLeave",["mouseout","mouseover"]);Oo("onPointerEnter",["pointerout","pointerover"]);Oo("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ts="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_S=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ts));function bp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,my(i,e,void 0,t),t.currentTarget=null}function av(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;bp(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;bp(r,a,u),o=l}}}if(bl)throw t=tf,bl=!1,tf=null,t}function ht(t,e){var n=e[df];n===void 0&&(n=e[df]=new Set);var i=t+"__bubble";n.has(i)||(lv(e,t,2,!1),n.add(i))}function Bu(t,e,n){var i=0;e&&(i|=4),lv(n,t,i,e)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[Ra]){t[Ra]=!0,m_.forEach(function(n){n!=="selectionchange"&&(_S.has(n)||Bu(n,!1,t),Bu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ra]||(e[Ra]=!0,Bu("selectionchange",!1,e))}}function lv(t,e,n,i){switch(X_(e)){case 1:var r=Ly;break;case 4:r=Iy;break;default:r=Gd}n=r.bind(null,e,n,t),r=void 0,!ef||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Hu(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=Lr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}L_(function(){var u=o,c=zd(n),d=[];e:{var h=sv.get(t);if(h!==void 0){var p=Xd,g=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":p=qy;break;case"focusin":g="focus",p=Nu;break;case"focusout":g="blur",p=Nu;break;case"beforeblur":case"afterblur":p=Nu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Uy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ky;break;case nv:case iv:case rv:p=Oy;break;case ov:p=Qy;break;case"scroll":p=Dy;break;case"wheel":p=eS;break;case"copy":case"cut":case"paste":p=By;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=xp}var x=(e&4)!==0,m=!x&&t==="scroll",f=x?h!==null?h+"Capture":null:h;x=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Hs(_,f),y!=null&&x.push($s(_,y,v)))),m)break;_=_.return}0<x.length&&(h=new p(h,g,null,n,c),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Qc&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[Ri]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Lr(g):null,g!==null&&(m=qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(x=_p,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(x=xp,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:xo(p),v=g==null?h:xo(g),h=new x(y,_+"leave",p,n,c),h.target=m,h.relatedTarget=v,y=null,Lr(c)===u&&(x=new x(f,_+"enter",g,n,c),x.target=v,x.relatedTarget=m,y=x),m=y,p&&g)t:{for(x=p,f=g,_=0,v=x;v;v=Zr(v))_++;for(v=0,y=f;y;y=Zr(y))v++;for(;0<_-v;)x=Zr(x),_--;for(;0<v-_;)f=Zr(f),v--;for(;_--;){if(x===f||f!==null&&x===f.alternate)break t;x=Zr(x),f=Zr(f)}x=null}else x=null;p!==null&&Pp(d,h,p,x,!1),g!==null&&m!==null&&Pp(d,m,g,x,!0)}}e:{if(h=u?xo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var P=aS;else if(Ep(h))if(Z_)P=fS;else{P=uS;var M=lS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(P=cS);if(P&&(P=P(t,u))){K_(d,P,n,c);break e}M&&M(t,h,u),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&qc(h,"number",h.value)}switch(M=u?xo(u):window,t){case"focusin":(Ep(M)||M.contentEditable==="true")&&(_o=M,sf=u,Is=null);break;case"focusout":Is=sf=_o=null;break;case"mousedown":af=!0;break;case"contextmenu":case"mouseup":case"dragend":af=!1,Cp(d,n,c);break;case"selectionchange":if(pS)break;case"keydown":case"keyup":Cp(d,n,c)}var R;if(qd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else go?$_(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(q_&&n.locale!=="ko"&&(go||I!=="onCompositionStart"?I==="onCompositionEnd"&&go&&(R=j_()):(Ki=c,Wd="value"in Ki?Ki.value:Ki.textContent,go=!0)),M=Nl(u,I),0<M.length&&(I=new vp(I,t,null,n,c),d.push({event:I,listeners:M}),R?I.data=R:(R=Y_(n),R!==null&&(I.data=R)))),(R=nS?iS(t,n):rS(t,n))&&(u=Nl(u,"onBeforeInput"),0<u.length&&(c=new vp("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}av(d,e)})}function $s(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=Hs(t,n),o!=null&&i.unshift($s(t,o,r)),o=Hs(t,e),o!=null&&i.push($s(t,o,r))),t=t.return}return i}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pp(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Hs(n,o),l!=null&&s.unshift($s(n,l,a))):r||(l=Hs(n,o),l!=null&&s.push($s(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var vS=/\r\n?/g,xS=/\u0000|\uFFFD/g;function Lp(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(xS,"")}function ba(t,e,n){if(e=Lp(e),Lp(t)!==e&&n)throw Error(se(425))}function Ul(){}var lf=null,uf=null;function cf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ff=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(ES)}:ff;function ES(t){setTimeout(function(){throw t})}function Vu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ws(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ws(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Jo=Math.random().toString(36).slice(2),ni="__reactFiber$"+Jo,Ys="__reactProps$"+Jo,Ri="__reactContainer$"+Jo,df="__reactEvents$"+Jo,MS="__reactListeners$"+Jo,wS="__reactHandles$"+Jo;function Lr(t){var e=t[ni];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ri]||n[ni]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dp(t);t!==null;){if(n=t[ni])return n;t=Dp(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[ni]||t[Ri],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function au(t){return t[Ys]||null}var hf=[],yo=-1;function dr(t){return{current:t}}function pt(t){0>yo||(t.current=hf[yo],hf[yo]=null,yo--)}function ut(t,e){yo++,hf[yo]=t.current,t.current=e}var ur={},Xt=dr(ur),sn=dr(!1),zr=ur;function zo(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function kl(){pt(sn),pt(Xt)}function Np(t,e,n){if(Xt.current!==ur)throw Error(se(168));ut(Xt,e),ut(sn,n)}function uv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,ly(t)||"Unknown",r));return xt({},n,i)}function Fl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,zr=Xt.current,ut(Xt,t),ut(sn,sn.current),!0}function Up(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=uv(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,pt(sn),pt(Xt),ut(Xt,t)):pt(sn),ut(sn,n)}var xi=null,lu=!1,Gu=!1;function cv(t){xi===null?xi=[t]:xi.push(t)}function TS(t){lu=!0,cv(t)}function hr(){if(!Gu&&xi!==null){Gu=!0;var t=0,e=tt;try{var n=xi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,lu=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),U_(Bd,hr),r}finally{tt=e,Gu=!1}}return null}var So=[],Eo=0,Ol=null,zl=0,Cn=[],Rn=0,Br=null,Si=1,Ei="";function wr(t,e){So[Eo++]=zl,So[Eo++]=Ol,Ol=t,zl=e}function fv(t,e,n){Cn[Rn++]=Si,Cn[Rn++]=Ei,Cn[Rn++]=Br,Br=t;var i=Si;t=Ei;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var o=32-qn(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Si=1<<32-qn(e)+r|n<<r|i,Ei=o+t}else Si=1<<o|n<<r|i,Ei=t}function Yd(t){t.return!==null&&(wr(t,1),fv(t,1,0))}function Kd(t){for(;t===Ol;)Ol=So[--Eo],So[Eo]=null,zl=So[--Eo],So[Eo]=null;for(;t===Br;)Br=Cn[--Rn],Cn[Rn]=null,Ei=Cn[--Rn],Cn[Rn]=null,Si=Cn[--Rn],Cn[Rn]=null}var xn=null,_n=null,mt=!1,Gn=null;function dv(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,_n=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,_n=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Si,overflow:Ei}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,_n=null,!0):!1;default:return!1}}function pf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function mf(t){if(mt){var e=_n;if(e){var n=e;if(!kp(t,e)){if(pf(t))throw Error(se(418));e=tr(n.nextSibling);var i=xn;e&&kp(t,e)?dv(i,n):(t.flags=t.flags&-4097|2,mt=!1,xn=t)}}else{if(pf(t))throw Error(se(418));t.flags=t.flags&-4097|2,mt=!1,xn=t}}}function Fp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function Pa(t){if(t!==xn)return!1;if(!mt)return Fp(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cf(t.type,t.memoizedProps)),e&&(e=_n)){if(pf(t))throw hv(),Error(se(418));for(;e;)dv(t,e),e=tr(e.nextSibling)}if(Fp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_n=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_n=null}}else _n=xn?tr(t.stateNode.nextSibling):null;return!0}function hv(){for(var t=_n;t;)t=tr(t.nextSibling)}function Bo(){_n=xn=null,mt=!1}function Zd(t){Gn===null?Gn=[t]:Gn.push(t)}var AS=Ni.ReactCurrentBatchConfig;function ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function La(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Op(t){var e=t._init;return e(t._payload)}function pv(t){function e(f,_){if(t){var v=f.deletions;v===null?(f.deletions=[_],f.flags|=16):v.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=or(f,_),f.index=0,f.sibling=null,f}function o(f,_,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<_?(f.flags|=2,_):v):(f.flags|=2,_)):(f.flags|=1048576,_)}function s(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,v,y){return _===null||_.tag!==6?(_=Ku(v,f.mode,y),_.return=f,_):(_=r(_,v),_.return=f,_)}function l(f,_,v,y){var P=v.type;return P===mo?c(f,_,v.props.children,y,v.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&Op(P)===_.type)?(y=r(_,v.props),y.ref=ds(f,_,v),y.return=f,y):(y=vl(v.type,v.key,v.props,null,f.mode,y),y.ref=ds(f,_,v),y.return=f,y)}function u(f,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Zu(v,f.mode,y),_.return=f,_):(_=r(_,v.children||[]),_.return=f,_)}function c(f,_,v,y,P){return _===null||_.tag!==7?(_=Fr(v,f.mode,y,P),_.return=f,_):(_=r(_,v),_.return=f,_)}function d(f,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Ku(""+_,f.mode,v),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ya:return v=vl(_.type,_.key,_.props,null,f.mode,v),v.ref=ds(f,null,_),v.return=f,v;case po:return _=Zu(_,f.mode,v),_.return=f,_;case Xi:var y=_._init;return d(f,y(_._payload),v)}if(Ms(_)||as(_))return _=Fr(_,f.mode,v,null),_.return=f,_;La(f,_)}return null}function h(f,_,v,y){var P=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:a(f,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:return v.key===P?l(f,_,v,y):null;case po:return v.key===P?u(f,_,v,y):null;case Xi:return P=v._init,h(f,_,P(v._payload),y)}if(Ms(v)||as(v))return P!==null?null:c(f,_,v,y,null);La(f,v)}return null}function p(f,_,v,y,P){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(_,f,""+y,P);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ya:return f=f.get(y.key===null?v:y.key)||null,l(_,f,y,P);case po:return f=f.get(y.key===null?v:y.key)||null,u(_,f,y,P);case Xi:var M=y._init;return p(f,_,v,M(y._payload),P)}if(Ms(y)||as(y))return f=f.get(v)||null,c(_,f,y,P,null);La(_,y)}return null}function g(f,_,v,y){for(var P=null,M=null,R=_,I=_=0,T=null;R!==null&&I<v.length;I++){R.index>I?(T=R,R=null):T=R.sibling;var S=h(f,R,v[I],y);if(S===null){R===null&&(R=T);break}t&&R&&S.alternate===null&&e(f,R),_=o(S,_,I),M===null?P=S:M.sibling=S,M=S,R=T}if(I===v.length)return n(f,R),mt&&wr(f,I),P;if(R===null){for(;I<v.length;I++)R=d(f,v[I],y),R!==null&&(_=o(R,_,I),M===null?P=R:M.sibling=R,M=R);return mt&&wr(f,I),P}for(R=i(f,R);I<v.length;I++)T=p(R,f,I,v[I],y),T!==null&&(t&&T.alternate!==null&&R.delete(T.key===null?I:T.key),_=o(T,_,I),M===null?P=T:M.sibling=T,M=T);return t&&R.forEach(function(C){return e(f,C)}),mt&&wr(f,I),P}function x(f,_,v,y){var P=as(v);if(typeof P!="function")throw Error(se(150));if(v=P.call(v),v==null)throw Error(se(151));for(var M=P=null,R=_,I=_=0,T=null,S=v.next();R!==null&&!S.done;I++,S=v.next()){R.index>I?(T=R,R=null):T=R.sibling;var C=h(f,R,S.value,y);if(C===null){R===null&&(R=T);break}t&&R&&C.alternate===null&&e(f,R),_=o(C,_,I),M===null?P=C:M.sibling=C,M=C,R=T}if(S.done)return n(f,R),mt&&wr(f,I),P;if(R===null){for(;!S.done;I++,S=v.next())S=d(f,S.value,y),S!==null&&(_=o(S,_,I),M===null?P=S:M.sibling=S,M=S);return mt&&wr(f,I),P}for(R=i(f,R);!S.done;I++,S=v.next())S=p(R,f,I,S.value,y),S!==null&&(t&&S.alternate!==null&&R.delete(S.key===null?I:S.key),_=o(S,_,I),M===null?P=S:M.sibling=S,M=S);return t&&R.forEach(function(U){return e(f,U)}),mt&&wr(f,I),P}function m(f,_,v,y){if(typeof v=="object"&&v!==null&&v.type===mo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ya:e:{for(var P=v.key,M=_;M!==null;){if(M.key===P){if(P=v.type,P===mo){if(M.tag===7){n(f,M.sibling),_=r(M,v.props.children),_.return=f,f=_;break e}}else if(M.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Xi&&Op(P)===M.type){n(f,M.sibling),_=r(M,v.props),_.ref=ds(f,M,v),_.return=f,f=_;break e}n(f,M);break}else e(f,M);M=M.sibling}v.type===mo?(_=Fr(v.props.children,f.mode,y,v.key),_.return=f,f=_):(y=vl(v.type,v.key,v.props,null,f.mode,y),y.ref=ds(f,_,v),y.return=f,f=y)}return s(f);case po:e:{for(M=v.key;_!==null;){if(_.key===M)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){n(f,_.sibling),_=r(_,v.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Zu(v,f.mode,y),_.return=f,f=_}return s(f);case Xi:return M=v._init,m(f,_,M(v._payload),y)}if(Ms(v))return g(f,_,v,y);if(as(v))return x(f,_,v,y);La(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,v),_.return=f,f=_):(n(f,_),_=Ku(v,f.mode,y),_.return=f,f=_),s(f)):n(f,_)}return m}var Ho=pv(!0),mv=pv(!1),Bl=dr(null),Hl=null,Mo=null,Qd=null;function Jd(){Qd=Mo=Hl=null}function eh(t){var e=Bl.current;pt(Bl),t._currentValue=e}function gf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Lo(t,e){Hl=t,Qd=Mo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Mo===null){if(Hl===null)throw Error(se(308));Mo=t,Hl.dependencies={lanes:0,firstContext:t}}else Mo=Mo.next=t;return e}var Ir=null;function th(t){Ir===null?Ir=[t]:Ir.push(t)}function gv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,th(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ji=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,th(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}function zp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Vl(t,e,n,i){var r=t.updateQueue;ji=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;s=0,c=u=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=xt({},d,h);break e;case 2:ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,s|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);Vr|=s,t.lanes=s,t.memoizedState=d}}function Bp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var la={},ai=dr(la),Ks=dr(la),Zs=dr(la);function Dr(t){if(t===la)throw Error(se(174));return t}function ih(t,e){switch(ut(Zs,e),ut(Ks,t),ut(ai,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yc(e,t)}pt(ai),ut(ai,e)}function Vo(){pt(ai),pt(Ks),pt(Zs)}function vv(t){Dr(Zs.current);var e=Dr(ai.current),n=Yc(e,t.type);e!==n&&(ut(Ks,t),ut(ai,n))}function rh(t){Ks.current===t&&(pt(ai),pt(Ks))}var _t=dr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wu=[];function oh(){for(var t=0;t<Wu.length;t++)Wu[t]._workInProgressVersionPrimary=null;Wu.length=0}var hl=Ni.ReactCurrentDispatcher,Xu=Ni.ReactCurrentBatchConfig,Hr=0,vt=null,bt=null,Nt=null,Wl=!1,Ds=!1,Qs=0,CS=0;function Bt(){throw Error(se(321))}function sh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function ah(t,e,n,i,r,o){if(Hr=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hl.current=t===null||t.memoizedState===null?LS:IS,t=n(i,r),Ds){o=0;do{if(Ds=!1,Qs=0,25<=o)throw Error(se(301));o+=1,Nt=bt=null,e.updateQueue=null,hl.current=DS,t=n(i,r)}while(Ds)}if(hl.current=Xl,e=bt!==null&&bt.next!==null,Hr=0,Nt=bt=vt=null,Wl=!1,e)throw Error(se(300));return t}function lh(){var t=Qs!==0;return Qs=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Dn(){if(bt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Nt===null?vt.memoizedState:Nt.next;if(e!==null)Nt=e,bt=t;else{if(t===null)throw Error(se(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?vt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Js(t,e){return typeof e=="function"?e(t):e}function ju(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((Hr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,s=i):l=l.next=d,vt.lanes|=c,Vr|=c}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,Kn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,Vr|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function qu(t){var e=Dn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);Kn(o,e.memoizedState)||(on=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function xv(){}function yv(t,e){var n=vt,i=Dn(),r=e(),o=!Kn(i.memoizedState,r);if(o&&(i.memoizedState=r,on=!0),i=i.queue,uh(Mv.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,ea(9,Ev.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(se(349));Hr&30||Sv(n,e,r)}return r}function Sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ev(t,e,n,i){e.value=n,e.getSnapshot=i,wv(e)&&Tv(t)}function Mv(t,e,n){return n(function(){wv(e)&&Tv(t)})}function wv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Tv(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function Hp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Js,lastRenderedState:t},e.queue=t,t=t.dispatch=PS.bind(null,vt,t),[e.memoizedState,t]}function ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Av(){return Dn().memoizedState}function pl(t,e,n,i){var r=Jn();vt.flags|=t,r.memoizedState=ea(1|e,n,void 0,i===void 0?null:i)}function uu(t,e,n,i){var r=Dn();i=i===void 0?null:i;var o=void 0;if(bt!==null){var s=bt.memoizedState;if(o=s.destroy,i!==null&&sh(i,s.deps)){r.memoizedState=ea(e,n,o,i);return}}vt.flags|=t,r.memoizedState=ea(1|e,n,o,i)}function Vp(t,e){return pl(8390656,8,t,e)}function uh(t,e){return uu(2048,8,t,e)}function Cv(t,e){return uu(4,2,t,e)}function Rv(t,e){return uu(4,4,t,e)}function bv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Pv(t,e,n){return n=n!=null?n.concat([t]):null,uu(4,4,bv.bind(null,e,t),n)}function ch(){}function Lv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Iv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&sh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return Hr&21?(Kn(n,e)||(n=O_(),vt.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function RS(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Xu.transition;Xu.transition={};try{t(!1),e()}finally{tt=n,Xu.transition=i}}function Nv(){return Dn().memoizedState}function bS(t,e,n){var i=rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Uv(t))kv(e,n);else if(n=gv(t,e,n,i),n!==null){var r=Kt();$n(n,t,i,r),Fv(n,e,i)}}function PS(t,e,n){var i=rr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uv(t))kv(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,s)){var l=e.interleaved;l===null?(r.next=r,th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=gv(t,e,r,i),n!==null&&(r=Kt(),$n(n,t,i,r),Fv(n,e,i))}}function Uv(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function kv(t,e){Ds=Wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Fv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Hd(t,n)}}var Xl={readContext:In,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},LS={readContext:In,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:Vp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,pl(4194308,4,bv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pl(4194308,4,t,e)},useInsertionEffect:function(t,e){return pl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bS.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Hp,useDebugValue:ch,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Hp(!1),e=t[0];return t=RS.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=Jn();if(mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Ut===null)throw Error(se(349));Hr&30||Sv(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Vp(Mv.bind(null,i,o,t),[t]),i.flags|=2048,ea(9,Ev.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ut.identifierPrefix;if(mt){var n=Ei,i=Si;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},IS={readContext:In,useCallback:Lv,useContext:In,useEffect:uh,useImperativeHandle:Pv,useInsertionEffect:Cv,useLayoutEffect:Rv,useMemo:Iv,useReducer:ju,useRef:Av,useState:function(){return ju(Js)},useDebugValue:ch,useDeferredValue:function(t){var e=Dn();return Dv(e,bt.memoizedState,t)},useTransition:function(){var t=ju(Js)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:yv,useId:Nv,unstable_isNewReconciler:!1},DS={readContext:In,useCallback:Lv,useContext:In,useEffect:uh,useImperativeHandle:Pv,useInsertionEffect:Cv,useLayoutEffect:Rv,useMemo:Iv,useReducer:qu,useRef:Av,useState:function(){return qu(Js)},useDebugValue:ch,useDeferredValue:function(t){var e=Dn();return bt===null?e.memoizedState=t:Dv(e,bt.memoizedState,t)},useTransition:function(){var t=qu(Js)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:yv,useId:Nv,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var cu={isMounted:function(t){return(t=t._reactInternals)?qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=rr(t),o=Ti(i,r);o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&($n(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Kt(),r=rr(t),o=Ti(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=nr(t,o,r),e!==null&&($n(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Kt(),i=rr(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=nr(t,r,i),e!==null&&($n(e,t,i,n),dl(e,t,i))}};function Gp(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!js(n,i)||!js(r,o):!0}function Ov(t,e,n){var i=!1,r=ur,o=e.contextType;return typeof o=="object"&&o!==null?o=In(o):(r=an(e)?zr:Xt.current,i=e.contextTypes,o=(i=i!=null)?zo(t,r):ur),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function Wp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&cu.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nh(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=In(o):(o=an(e)?zr:Xt.current,r.context=zo(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(_f(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&cu.enqueueReplaceState(r,r.state,null),Vl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Go(t,e){try{var n="",i=e;do n+=ay(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function $u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NS=typeof WeakMap=="function"?WeakMap:Map;function zv(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ql||(ql=!0,bf=i),xf(t,e)},n}function Bv(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){xf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){xf(t,e),typeof i!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Xp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new NS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$S.bind(null,t,e,n),e.then(t,t))}function jp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var US=Ni.ReactCurrentOwner,on=!1;function Yt(t,e,n,i){e.child=t===null?mv(e,null,n,i):Ho(e,t.child,n,i)}function $p(t,e,n,i,r){n=n.render;var o=e.ref;return Lo(e,r),i=ah(t,e,n,i,o,r),n=lh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&n&&Yd(e),e.flags|=1,Yt(t,e,i,r),e.child)}function Yp(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!vh(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Hv(t,e,o,i,r)):(t=vl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:js,n(s,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=or(o,i),t.ref=e.ref,t.return=e,e.child=t}function Hv(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(js(o,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return yf(t,e,n,i,r)}function Vv(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(To,gn),gn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(To,gn),gn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ut(To,gn),gn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ut(To,gn),gn|=i;return Yt(t,e,r,n),e.child}function Gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function yf(t,e,n,i,r){var o=an(n)?zr:Xt.current;return o=zo(e,o),Lo(e,r),n=ah(t,e,n,i,o,r),i=lh(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(mt&&i&&Yd(e),e.flags|=1,Yt(t,e,n,r),e.child)}function Kp(t,e,n,i,r){if(an(n)){var o=!0;Fl(e)}else o=!1;if(Lo(e,r),e.stateNode===null)ml(t,e),Ov(e,n,i),vf(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=an(n)?zr:Xt.current,u=zo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Wp(e,s,i,u),ji=!1;var h=e.memoizedState;s.state=h,Vl(e,i,s,r),l=e.memoizedState,a!==i||h!==l||sn.current||ji?(typeof c=="function"&&(_f(e,n,c,i),l=e.memoizedState),(a=ji||Gp(e,n,a,i,h,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,_v(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Hn(e.type,a),s.props=u,d=e.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=an(n)?zr:Xt.current,l=zo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Wp(e,s,i,l),ji=!1,h=e.memoizedState,s.state=h,Vl(e,i,s,r);var g=e.memoizedState;a!==d||h!==g||sn.current||ji?(typeof p=="function"&&(_f(e,n,p,i),g=e.memoizedState),(u=ji||Gp(e,n,u,i,h,g,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Sf(t,e,n,i,o,r)}function Sf(t,e,n,i,r,o){Gv(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Up(e,n,!1),Pi(t,e,o);i=e.stateNode,US.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=Ho(e,t.child,null,o),e.child=Ho(e,null,a,o)):Yt(t,e,a,o),e.memoizedState=i.state,r&&Up(e,n,!0),e.child}function Wv(t){var e=t.stateNode;e.pendingContext?Np(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Np(t,e.context,!1),ih(t,e.containerInfo)}function Zp(t,e,n,i,r){return Bo(),Zd(r),e.flags|=256,Yt(t,e,n,i),e.child}var Ef={dehydrated:null,treeContext:null,retryLane:0};function Mf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var i=e.pendingProps,r=_t.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(_t,r&1),t===null)return mf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=hu(s,i,0,null),t=Fr(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Mf(n),e.memoizedState=Ef,t):fh(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kS(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=or(a,o):(o=Fr(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?Mf(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=Ef,i}return o=t.child,t=o.sibling,i=or(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function fh(t,e){return e=hu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ia(t,e,n,i){return i!==null&&Zd(i),Ho(e,t.child,null,n),t=fh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kS(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=$u(Error(se(422))),Ia(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=hu({mode:"visible",children:i.children},r,0,null),o=Fr(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&Ho(e,t.child,null,s),e.child.memoizedState=Mf(s),e.memoizedState=Ef,o);if(!(e.mode&1))return Ia(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(se(419)),i=$u(o,i,void 0),Ia(t,e,s,i)}if(a=(s&t.childLanes)!==0,on||a){if(i=Ut,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,bi(t,r),$n(i,t,r,-1))}return _h(),i=$u(Error(se(421))),Ia(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=YS.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,_n=tr(r.nextSibling),xn=e,mt=!0,Gn=null,t!==null&&(Cn[Rn++]=Si,Cn[Rn++]=Ei,Cn[Rn++]=Br,Si=t.id,Ei=t.overflow,Br=e),e=fh(e,i.children),e.flags|=4096,e)}function Qp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),gf(t.return,e,n)}function Yu(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function jv(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(Yt(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Qp(t,n,e);else if(t.tag===19)Qp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Yu(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Gl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Yu(e,!0,n,null,o);break;case"together":Yu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ml(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FS(t,e,n){switch(e.tag){case 3:Wv(e),Bo();break;case 5:vv(e);break;case 1:an(e.type)&&Fl(e);break;case 4:ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Bl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(ut(_t,_t.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);ut(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return jv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,Vv(t,e,n)}return Pi(t,e,n)}var qv,wf,$v,Yv;qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};wf=function(){};$v=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Dr(ai.current);var o=null;switch(n){case"input":r=Xc(t,r),i=Xc(t,i),o=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),o=[];break;case"textarea":r=$c(t,r),i=$c(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ul)}Kc(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(zs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(zs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ht("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function hs(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function OS(t,e,n){var i=e.pendingProps;switch(Kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return an(e.type)&&kl(),Ht(e),null;case 3:return i=e.stateNode,Vo(),pt(sn),pt(Xt),oh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(If(Gn),Gn=null))),wf(t,e),Ht(e),null;case 5:rh(e);var r=Dr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)$v(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return Ht(e),null}if(t=Dr(ai.current),Pa(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[ni]=e,i[Ys]=o,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<Ts.length;r++)ht(Ts[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":ap(i,o),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ht("invalid",i);break;case"textarea":up(i,o),ht("invalid",i)}Kc(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ba(i.textContent,a,t),r=["children",""+a]):zs.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ht("scroll",i)}switch(n){case"input":Sa(i),lp(i,o,!0);break;case"textarea":Sa(i),cp(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Ul)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=M_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[ni]=e,t[Ys]=i,qv(t,e,!1,!1),e.stateNode=t;e:{switch(s=Zc(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ts.length;r++)ht(Ts[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":ap(t,i),r=Xc(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ht("invalid",t);break;case"textarea":up(t,i),r=$c(t,i),ht("invalid",t);break;default:r=i}Kc(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?A_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&w_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Bs(t,l):typeof l=="number"&&Bs(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(zs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ht("scroll",t):l!=null&&Ud(t,o,l,s))}switch(n){case"input":Sa(t),lp(t,i,!1);break;case"textarea":Sa(t),cp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?Co(t,!!i.multiple,o,!1):i.defaultValue!=null&&Co(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ul)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=Dr(Zs.current),Dr(ai.current),Pa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ni]=e,(o=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:ba(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ni]=e,e.stateNode=i}return Ht(e),null;case 13:if(pt(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&_n!==null&&e.mode&1&&!(e.flags&128))hv(),Bo(),e.flags|=98560,o=!1;else if(o=Pa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(se(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(se(317));o[ni]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),o=!1}else Gn!==null&&(If(Gn),Gn=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Pt===0&&(Pt=3):_h())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return Vo(),wf(t,e),t===null&&qs(e.stateNode.containerInfo),Ht(e),null;case 10:return eh(e.type._context),Ht(e),null;case 17:return an(e.type)&&kl(),Ht(e),null;case 19:if(pt(_t),o=e.memoizedState,o===null)return Ht(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)hs(o,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Gl(t),s!==null){for(e.flags|=128,hs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(_t,_t.current&1|2),e.child}t=t.sibling}o.tail!==null&&Et()>Wo&&(e.flags|=128,i=!0,hs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Gl(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),hs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!mt)return Ht(e),null}else 2*Et()-o.renderingStartTime>Wo&&n!==1073741824&&(e.flags|=128,i=!0,hs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Et(),e.sibling=null,n=_t.current,ut(_t,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?gn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function zS(t,e){switch(Kd(e),e.tag){case 1:return an(e.type)&&kl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),pt(sn),pt(Xt),oh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rh(e),null;case 13:if(pt(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pt(_t),null;case 4:return Vo(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Da=!1,Wt=!1,BS=typeof WeakSet=="function"?WeakSet:Set,ye=null;function wo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function Tf(t,e,n){try{n()}catch(i){St(t,e,i)}}var Jp=!1;function HS(t,e){if(lf=Il,t=ev(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=s+r),d!==o||i!==0&&d.nodeType!==3||(l=s+i),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(a=s),h===o&&++c===i&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(uf={focusedElem:t,selectionRange:n},Il=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?x:Hn(e.type,x),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(y){St(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return g=Jp,Jp=!1,g}function Ns(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&Tf(e,n,o)}r=r.next}while(r!==i)}}function fu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ni],delete e[Ys],delete e[df],delete e[MS],delete e[wS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zv(t){return t.tag===5||t.tag===3||t.tag===4}function em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Cf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ul));else if(i!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}function Rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Rf(t,e,n),t=t.sibling;t!==null;)Rf(t,e,n),t=t.sibling}var kt=null,Vn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)Qv(t,e,n),n=n.sibling}function Qv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:Wt||wo(n,e);case 6:var i=kt,r=Vn;kt=null,Fi(t,e,n),kt=i,Vn=r,kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Vn?(t=kt,n=n.stateNode,t.nodeType===8?Vu(t.parentNode,n):t.nodeType===1&&Vu(t,n),Ws(t)):Vu(kt,n.stateNode));break;case 4:i=kt,r=Vn,kt=n.stateNode.containerInfo,Vn=!0,Fi(t,e,n),kt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Wt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&Tf(n,e,s),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!Wt&&(wo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(Wt=(i=Wt)||n.memoizedState!==null,Fi(t,e,n),Wt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function tm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new BS),e.forEach(function(i){var r=KS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Vn=!1;break e;case 3:kt=a.stateNode.containerInfo,Vn=!0;break e;case 4:kt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(kt===null)throw Error(se(160));Qv(o,s,r),kt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Jv(e,t),e=e.sibling}function Jv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Qn(t),i&4){try{Ns(3,t,t.return),fu(3,t)}catch(x){St(t,t.return,x)}try{Ns(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:Fn(e,t),Qn(t),i&512&&n!==null&&wo(n,n.return);break;case 5:if(Fn(e,t),Qn(t),i&512&&n!==null&&wo(n,n.return),t.flags&32){var r=t.stateNode;try{Bs(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&S_(r,o),Zc(a,s);var u=Zc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],d=l[s+1];c==="style"?A_(r,d):c==="dangerouslySetInnerHTML"?w_(r,d):c==="children"?Bs(r,d):Ud(r,c,d,u)}switch(a){case"input":jc(r,o);break;case"textarea":E_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?Co(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?Co(r,!!o.multiple,o.defaultValue,!0):Co(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ys]=o}catch(x){St(t,t.return,x)}}break;case 6:if(Fn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(x){St(t,t.return,x)}}break;case 3:if(Fn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ws(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:Fn(e,t),Qn(t);break;case 13:Fn(e,t),Qn(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ph=Et())),i&4&&tm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Wt=(u=Wt)||c,Fn(e,t),Wt=u):Fn(e,t),Qn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ye=t,c=t.child;c!==null;){for(d=ye=c;ye!==null;){switch(h=ye,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ns(4,h,h.return);break;case 1:wo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:wo(h,h.return);break;case 22:if(h.memoizedState!==null){im(d);continue}}p!==null?(p.return=h,ye=p):im(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=T_("display",s))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),Qn(t),i&4&&tm(t);break;case 21:break;default:Fn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zv(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Bs(r,""),i.flags&=-33);var o=em(t);Rf(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=em(t);Cf(t,a,s);break;default:throw Error(se(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VS(t,e,n){ye=t,e0(t)}function e0(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||Da;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Wt;a=Da;var u=Wt;if(Da=s,(Wt=l)&&!u)for(ye=r;ye!==null;)s=ye,l=s.child,s.tag===22&&s.memoizedState!==null?rm(r):l!==null?(l.return=s,ye=l):rm(r);for(;o!==null;)ye=o,e0(o),o=o.sibling;ye=r,Da=a,Wt=u}nm(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,ye=o):nm(t)}}function nm(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Wt||fu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Wt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Bp(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Bp(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ws(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}Wt||e.flags&512&&Af(e)}catch(h){St(e,e.return,h)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function im(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function rm(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{fu(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{Af(e)}catch(l){St(e,o,l)}break;case 5:var s=e.return;try{Af(e)}catch(l){St(e,s,l)}}}catch(l){St(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var GS=Math.ceil,jl=Ni.ReactCurrentDispatcher,dh=Ni.ReactCurrentOwner,Ln=Ni.ReactCurrentBatchConfig,Ye=0,Ut=null,At=null,Ft=0,gn=0,To=dr(0),Pt=0,ta=null,Vr=0,du=0,hh=0,Us=null,nn=null,ph=0,Wo=1/0,vi=null,ql=!1,bf=null,ir=null,Na=!1,Zi=null,$l=0,ks=0,Pf=null,gl=-1,_l=0;function Kt(){return Ye&6?Et():gl!==-1?gl:gl=Et()}function rr(t){return t.mode&1?Ye&2&&Ft!==0?Ft&-Ft:AS.transition!==null?(_l===0&&(_l=O_()),_l):(t=tt,t!==0||(t=window.event,t=t===void 0?16:X_(t.type)),t):1}function $n(t,e,n,i){if(50<ks)throw ks=0,Pf=null,Error(se(185));oa(t,n,i),(!(Ye&2)||t!==Ut)&&(t===Ut&&(!(Ye&2)&&(du|=n),Pt===4&&$i(t,Ft)),ln(t,i),n===1&&Ye===0&&!(e.mode&1)&&(Wo=Et()+500,lu&&hr()))}function ln(t,e){var n=t.callbackNode;Ay(t,e);var i=Ll(t,t===Ut?Ft:0);if(i===0)n!==null&&hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&hp(n),e===1)t.tag===0?TS(om.bind(null,t)):cv(om.bind(null,t)),SS(function(){!(Ye&6)&&hr()}),n=null;else{switch(z_(i)){case 1:n=Bd;break;case 4:n=k_;break;case 16:n=Pl;break;case 536870912:n=F_;break;default:n=Pl}n=l0(n,t0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t0(t,e){if(gl=-1,_l=0,Ye&6)throw Error(se(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var i=Ll(t,t===Ut?Ft:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Yl(t,i);else{e=i;var r=Ye;Ye|=2;var o=i0();(Ut!==t||Ft!==e)&&(vi=null,Wo=Et()+500,kr(t,e));do try{jS();break}catch(a){n0(t,a)}while(!0);Jd(),jl.current=o,Ye=r,At!==null?e=0:(Ut=null,Ft=0,e=Pt)}if(e!==0){if(e===2&&(r=nf(t),r!==0&&(i=r,e=Lf(t,r))),e===1)throw n=ta,kr(t,0),$i(t,i),ln(t,Et()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!WS(r)&&(e=Yl(t,i),e===2&&(o=nf(t),o!==0&&(i=o,e=Lf(t,o))),e===1))throw n=ta,kr(t,0),$i(t,i),ln(t,Et()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Tr(t,nn,vi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=ph+500-Et(),10<e)){if(Ll(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Kt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ff(Tr.bind(null,t,nn,vi),e);break}Tr(t,nn,vi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-qn(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*GS(i/1960))-i,10<i){t.timeoutHandle=ff(Tr.bind(null,t,nn,vi),i);break}Tr(t,nn,vi);break;case 5:Tr(t,nn,vi);break;default:throw Error(se(329))}}}return ln(t,Et()),t.callbackNode===n?t0.bind(null,t):null}function Lf(t,e){var n=Us;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Yl(t,e),t!==2&&(e=nn,nn=n,e!==null&&If(e)),t}function If(t){nn===null?nn=t:nn.push.apply(nn,t)}function WS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Kn(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~hh,e&=~du,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function om(t){if(Ye&6)throw Error(se(327));Io();var e=Ll(t,0);if(!(e&1))return ln(t,Et()),null;var n=Yl(t,e);if(t.tag!==0&&n===2){var i=nf(t);i!==0&&(e=i,n=Lf(t,i))}if(n===1)throw n=ta,kr(t,0),$i(t,e),ln(t,Et()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Tr(t,nn,vi),ln(t,Et()),null}function mh(t,e){var n=Ye;Ye|=1;try{return t(e)}finally{Ye=n,Ye===0&&(Wo=Et()+500,lu&&hr())}}function Gr(t){Zi!==null&&Zi.tag===0&&!(Ye&6)&&Io();var e=Ye;Ye|=1;var n=Ln.transition,i=tt;try{if(Ln.transition=null,tt=1,t)return t()}finally{tt=i,Ln.transition=n,Ye=e,!(Ye&6)&&hr()}}function gh(){gn=To.current,pt(To)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(Kd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&kl();break;case 3:Vo(),pt(sn),pt(Xt),oh();break;case 5:rh(i);break;case 4:Vo();break;case 13:pt(_t);break;case 19:pt(_t);break;case 10:eh(i.type._context);break;case 22:case 23:gh()}n=n.return}if(Ut=t,At=t=or(t.current,null),Ft=gn=e,Pt=0,ta=null,hh=du=Vr=0,nn=Us=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Ir=null}return t}function n0(t,e){do{var n=At;try{if(Jd(),hl.current=Xl,Wl){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wl=!1}if(Hr=0,Nt=bt=vt=null,Ds=!1,Qs=0,dh.current=null,n===null||n.return===null){Pt=1,ta=e,At=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=jp(s);if(p!==null){p.flags&=-257,qp(p,s,a,o,e),p.mode&1&&Xp(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Xp(o,u,e),_h();break e}l=Error(se(426))}}else if(mt&&a.mode&1){var m=jp(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),qp(m,s,a,o,e),Zd(Go(l,a));break e}}o=l=Go(l,a),Pt!==4&&(Pt=2),Us===null?Us=[o]:Us.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=zv(o,l,e);zp(o,f);break e;case 1:a=l;var _=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Bv(o,a,e);zp(o,y);break e}}o=o.return}while(o!==null)}o0(n)}catch(P){e=P,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function i0(){var t=jl.current;return jl.current=Xl,t===null?Xl:t}function _h(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ut===null||!(Vr&268435455)&&!(du&268435455)||$i(Ut,Ft)}function Yl(t,e){var n=Ye;Ye|=2;var i=i0();(Ut!==t||Ft!==e)&&(vi=null,kr(t,e));do try{XS();break}catch(r){n0(t,r)}while(!0);if(Jd(),Ye=n,jl.current=i,At!==null)throw Error(se(261));return Ut=null,Ft=0,Pt}function XS(){for(;At!==null;)r0(At)}function jS(){for(;At!==null&&!_y();)r0(At)}function r0(t){var e=a0(t.alternate,t,gn);t.memoizedProps=t.pendingProps,e===null?o0(t):At=e,dh.current=null}function o0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zS(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,At=null;return}}else if(n=OS(n,e,gn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Pt===0&&(Pt=5)}function Tr(t,e,n){var i=tt,r=Ln.transition;try{Ln.transition=null,tt=1,qS(t,e,n,i)}finally{Ln.transition=r,tt=i}return null}function qS(t,e,n,i){do Io();while(Zi!==null);if(Ye&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Cy(t,o),t===Ut&&(At=Ut=null,Ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Na||(Na=!0,l0(Pl,function(){return Io(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ln.transition,Ln.transition=null;var s=tt;tt=1;var a=Ye;Ye|=4,dh.current=null,HS(t,n),Jv(n,t),hS(uf),Il=!!lf,uf=lf=null,t.current=n,VS(n),vy(),Ye=a,tt=s,Ln.transition=o}else t.current=n;if(Na&&(Na=!1,Zi=t,$l=r),o=t.pendingLanes,o===0&&(ir=null),Sy(n.stateNode),ln(t,Et()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ql)throw ql=!1,t=bf,bf=null,t;return $l&1&&t.tag!==0&&Io(),o=t.pendingLanes,o&1?t===Pf?ks++:(ks=0,Pf=t):ks=0,hr(),null}function Io(){if(Zi!==null){var t=z_($l),e=Ln.transition,n=tt;try{if(Ln.transition=null,tt=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,$l=0,Ye&6)throw Error(se(331));var r=Ye;for(Ye|=4,ye=t.current;ye!==null;){var o=ye,s=o.child;if(ye.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ye=u;ye!==null;){var c=ye;switch(c.tag){case 0:case 11:case 15:Ns(8,c,o)}var d=c.child;if(d!==null)d.return=c,ye=d;else for(;ye!==null;){c=ye;var h=c.sibling,p=c.return;if(Kv(c),c===u){ye=null;break}if(h!==null){h.return=p,ye=h;break}ye=p}}}var g=o.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}ye=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,ye=s;else e:for(;ye!==null;){if(o=ye,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ns(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,ye=f;break e}ye=o.return}}var _=t.current;for(ye=_;ye!==null;){s=ye;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,ye=v;else e:for(s=_;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:fu(9,a)}}catch(P){St(a,a.return,P)}if(a===s){ye=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ye=y;break e}ye=a.return}}if(Ye=r,hr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(iu,t)}catch{}i=!0}return i}finally{tt=n,Ln.transition=e}}return!1}function sm(t,e,n){e=Go(n,e),e=zv(t,e,1),t=nr(t,e,1),e=Kt(),t!==null&&(oa(t,1,e),ln(t,e))}function St(t,e,n){if(t.tag===3)sm(t,t,n);else for(;e!==null;){if(e.tag===3){sm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ir===null||!ir.has(i))){t=Go(n,t),t=Bv(e,t,1),e=nr(e,t,1),t=Kt(),e!==null&&(oa(e,1,t),ln(e,t));break}}e=e.return}}function $S(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Kt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Ft&n)===n&&(Pt===4||Pt===3&&(Ft&130023424)===Ft&&500>Et()-ph?kr(t,0):hh|=n),ln(t,e)}function s0(t,e){e===0&&(t.mode&1?(e=wa,wa<<=1,!(wa&130023424)&&(wa=4194304)):e=1);var n=Kt();t=bi(t,e),t!==null&&(oa(t,e,n),ln(t,n))}function YS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),s0(t,n)}function KS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),s0(t,n)}var a0;a0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,FS(t,e,n);on=!!(t.flags&131072)}else on=!1,mt&&e.flags&1048576&&fv(e,zl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ml(t,e),t=e.pendingProps;var r=zo(e,Xt.current);Lo(e,n),r=ah(null,e,i,t,r,n);var o=lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(o=!0,Fl(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nh(e),r.updater=cu,e.stateNode=r,r._reactInternals=e,vf(e,i,t,n),e=Sf(null,e,i,!0,o,n)):(e.tag=0,mt&&o&&Yd(e),Yt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ml(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=QS(i),t=Hn(i,t),r){case 0:e=yf(null,e,i,t,n);break e;case 1:e=Kp(null,e,i,t,n);break e;case 11:e=$p(null,e,i,t,n);break e;case 14:e=Yp(null,e,i,Hn(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),yf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Kp(t,e,i,r,n);case 3:e:{if(Wv(e),t===null)throw Error(se(387));i=e.pendingProps,o=e.memoizedState,r=o.element,_v(t,e),Vl(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=Go(Error(se(423)),e),e=Zp(t,e,i,n,r);break e}else if(i!==r){r=Go(Error(se(424)),e),e=Zp(t,e,i,n,r);break e}else for(_n=tr(e.stateNode.containerInfo.firstChild),xn=e,mt=!0,Gn=null,n=mv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bo(),i===r){e=Pi(t,e,n);break e}Yt(t,e,i,n)}e=e.child}return e;case 5:return vv(e),t===null&&mf(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,cf(i,r)?s=null:o!==null&&cf(i,o)&&(e.flags|=32),Gv(t,e),Yt(t,e,s,n),e.child;case 6:return t===null&&mf(e),null;case 13:return Xv(t,e,n);case 4:return ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ho(e,null,i,n):Yt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),$p(t,e,i,r,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ut(Bl,i._currentValue),i._currentValue=s,o!==null)if(Kn(o.value,s)){if(o.children===r.children&&!sn.current){e=Pi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Ti(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gf(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(se(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),gf(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Yt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Lo(e,n),r=In(r),i=i(r),e.flags|=1,Yt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),Yp(t,e,i,r,n);case 15:return Hv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),ml(t,e),e.tag=1,an(i)?(t=!0,Fl(e)):t=!1,Lo(e,n),Ov(e,i,r),vf(e,i,r,n),Sf(null,e,i,!0,t,n);case 19:return jv(t,e,n);case 22:return Vv(t,e,n)}throw Error(se(156,e.tag))};function l0(t,e){return U_(t,e)}function ZS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new ZS(t,e,n,i)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fd)return 11;if(t===Od)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vl(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")vh(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case mo:return Fr(n.children,r,o,e);case kd:s=8,r|=8;break;case Hc:return t=Pn(12,n,e,r|2),t.elementType=Hc,t.lanes=o,t;case Vc:return t=Pn(13,n,e,r),t.elementType=Vc,t.lanes=o,t;case Gc:return t=Pn(19,n,e,r),t.elementType=Gc,t.lanes=o,t;case v_:return hu(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case g_:s=10;break e;case __:s=9;break e;case Fd:s=11;break e;case Od:s=14;break e;case Xi:s=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=Pn(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Fr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function hu(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function Ku(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Zu(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Lu(0),this.expirationTimes=Lu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function xh(t,e,n,i,r,o,s,a,l){return t=new JS(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Pn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(o),t}function eE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:po,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function u0(t){if(!t)return ur;t=t._reactInternals;e:{if(qr(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(an(n))return uv(t,n,e)}return e}function c0(t,e,n,i,r,o,s,a,l){return t=xh(n,i,!0,t,r,o,s,a,l),t.context=u0(null),n=t.current,i=Kt(),r=rr(n),o=Ti(i,r),o.callback=e??null,nr(n,o,r),t.current.lanes=r,oa(t,r,i),ln(t,i),t}function pu(t,e,n,i){var r=e.current,o=Kt(),s=rr(r);return n=u0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=nr(r,e,s),t!==null&&($n(t,r,s,o),dl(t,r,s)),s}function Kl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){am(t,e),(t=t.alternate)&&am(t,e)}function tE(){return null}var f0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sh(t){this._internalRoot=t}mu.prototype.render=Sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));pu(t,e,null,null)};mu.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){pu(null,t,null,null)}),e[Ri]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=V_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qi.length&&e!==0&&e<qi[n].priority;n++);qi.splice(n,0,t),n===0&&W_(t)}};function Eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lm(){}function nE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Kl(s);o.call(u)}}var s=c0(e,i,t,0,null,!1,!1,"",lm);return t._reactRootContainer=s,t[Ri]=s.current,qs(t.nodeType===8?t.parentNode:t),Gr(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Kl(l);a.call(u)}}var l=xh(t,0,!1,null,null,!1,!1,"",lm);return t._reactRootContainer=l,t[Ri]=l.current,qs(t.nodeType===8?t.parentNode:t),Gr(function(){pu(e,l,n,i)}),l}function _u(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Kl(s);a.call(l)}}pu(e,s,t,r)}else s=nE(n,e,t,r,i);return Kl(s)}B_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(Hd(e,n|1),ln(e,Et()),!(Ye&6)&&(Wo=Et()+500,hr()))}break;case 13:Gr(function(){var i=bi(t,1);if(i!==null){var r=Kt();$n(i,t,1,r)}}),yh(t,1)}};Vd=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Kt();$n(e,t,134217728,n)}yh(t,134217728)}};H_=function(t){if(t.tag===13){var e=rr(t),n=bi(t,e);if(n!==null){var i=Kt();$n(n,t,e,i)}yh(t,e)}};V_=function(){return tt};G_=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Jc=function(t,e,n){switch(e){case"input":if(jc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=au(i);if(!r)throw Error(se(90));y_(i),jc(i,r)}}}break;case"textarea":E_(t,n);break;case"select":e=n.value,e!=null&&Co(t,!!n.multiple,e,!1)}};b_=mh;P_=Gr;var iE={usingClientEntryPoint:!1,Events:[aa,xo,au,C_,R_,mh]},ps={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rE={bundleType:ps.bundleType,version:ps.version,rendererPackageName:ps.rendererPackageName,rendererConfig:ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=D_(t),t===null?null:t.stateNode},findFiberByHostInstance:ps.findFiberByHostInstance||tE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ua=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ua.isDisabled&&Ua.supportsFiber)try{iu=Ua.inject(rE),si=Ua}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iE;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(e))throw Error(se(200));return eE(t,e,null,n)};En.createRoot=function(t,e){if(!Eh(t))throw Error(se(299));var n=!1,i="",r=f0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=xh(t,1,!1,null,null,n,!1,i,r),t[Ri]=e.current,qs(t.nodeType===8?t.parentNode:t),new Sh(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=D_(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Gr(t)};En.hydrate=function(t,e,n){if(!gu(e))throw Error(se(200));return _u(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!Eh(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=f0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=c0(e,null,t,1,n??null,r,!1,o,s),t[Ri]=e.current,qs(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new mu(e)};En.render=function(t,e,n){if(!gu(e))throw Error(se(200));return _u(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!gu(t))throw Error(se(40));return t._reactRootContainer?(Gr(function(){_u(null,null,t,!1,function(){t._reactRootContainer=null,t[Ri]=null})}),!0):!1};En.unstable_batchedUpdates=mh;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gu(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return _u(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function d0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(d0)}catch(t){console.error(t)}}d0(),d_.exports=En;var oE=d_.exports,um=oE;zc.createRoot=um.createRoot,zc.hydrateRoot=um.hydrateRoot;const sE="/terminal-portfolio/assets/img/plastic2.jpg",aE="/terminal-portfolio/assets/img/hbm.png";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mh="170",lE=0,cm=1,uE=2,h0=1,cE=2,_i=3,cr=0,un=1,yi=2,sr=0,Do=1,fm=2,dm=3,hm=4,fE=5,Rr=100,dE=101,hE=102,pE=103,mE=104,gE=200,_E=201,vE=202,xE=203,Df=204,Nf=205,yE=206,SE=207,EE=208,ME=209,wE=210,TE=211,AE=212,CE=213,RE=214,Uf=0,kf=1,Ff=2,Xo=3,Of=4,zf=5,Bf=6,Hf=7,p0=0,bE=1,PE=2,ar=0,LE=1,IE=2,DE=3,NE=4,UE=5,kE=6,FE=7,m0=300,jo=301,qo=302,Vf=303,Gf=304,vu=306,Wf=1e3,Nr=1001,Xf=1002,Yn=1003,OE=1004,ka=1005,ri=1006,Qu=1007,Ur=1008,Li=1009,g0=1010,_0=1011,na=1012,wh=1013,Wr=1014,Mi=1015,ua=1016,Th=1017,Ah=1018,$o=1020,v0=35902,x0=1021,y0=1022,jn=1023,S0=1024,E0=1025,No=1026,Yo=1027,M0=1028,Ch=1029,w0=1030,Rh=1031,bh=1033,xl=33776,yl=33777,Sl=33778,El=33779,jf=35840,qf=35841,$f=35842,Yf=35843,Kf=36196,Zf=37492,Qf=37496,Jf=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,od=37814,sd=37815,ad=37816,ld=37817,ud=37818,cd=37819,fd=37820,dd=37821,Ml=36492,hd=36494,pd=36495,T0=36283,md=36284,gd=36285,_d=36286,zE=3200,BE=3201,HE=0,VE=1,Yi="",An="srgb",es="srgb-linear",xu="linear",rt="srgb",Qr=7680,pm=519,GE=512,WE=513,XE=514,A0=515,jE=516,qE=517,$E=518,YE=519,mm=35044,gm="300 es",wi=2e3,Zl=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ju=Math.PI/180,vd=180/Math.PI;function ca(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function KE(t,e){return(t%e+e)%e}function ec(t,e,n){return(1-n)*t+n*e}function ms(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function en(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,n=0){st.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,n,i,r,o,s,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],f=r[6],_=r[1],v=r[4],y=r[7],P=r[2],M=r[5],R=r[8];return o[0]=s*x+a*_+l*P,o[3]=s*m+a*v+l*M,o[6]=s*f+a*y+l*R,o[1]=u*x+c*_+d*P,o[4]=u*m+c*v+d*M,o[7]=u*f+c*y+d*R,o[2]=h*x+p*_+g*P,o[5]=h*m+p*v+g*M,o[8]=h*f+p*y+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,h=a*l-c*o,p=u*o-s*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*s)*x,e[3]=h*x,e[4]=(c*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=p*x,e[7]=(i*l-u*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tc.makeScale(e,n)),this}rotate(e){return this.premultiply(tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tc=new Be;function C0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ZE(){const t=Ql("canvas");return t.style.display="block",t}const _m={};function As(t){t in _m||(_m[t]=!0,console.warn(t))}function QE(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function JE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $e={enabled:!0,workingColorSpace:es,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===rt&&(t.r=Ai(t.r),t.g=Ai(t.g),t.b=Ai(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===rt&&(t.r=Uo(t.r),t.g=Uo(t.g),t.b=Uo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Yi?xu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const vm=[.64,.33,.3,.6,.15,.06],xm=[.2126,.7152,.0722],ym=[.3127,.329],Sm=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[es]:{primaries:vm,whitePoint:ym,transfer:xu,toXYZ:Sm,fromXYZ:Em,luminanceCoefficients:xm,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:vm,whitePoint:ym,transfer:rt,toXYZ:Sm,fromXYZ:Em,luminanceCoefficients:xm,outputColorSpaceConfig:{drawingBufferColorSpace:An}}});let Jr;class tM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jr===void 0&&(Jr=Ql("canvas")),Jr.width=e.width,Jr.height=e.height;const i=Jr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Jr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Ai(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class R0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(nc(r[s].image)):o.push(nc(r[s]))}else o=nc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iM=0;class cn extends ts{constructor(e=cn.DEFAULT_IMAGE,n=cn.DEFAULT_MAPPING,i=Nr,r=Nr,o=ri,s=Ur,a=jn,l=Li,u=cn.DEFAULT_ANISOTROPY,c=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=ca(),this.name="",this.source=new R0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wf:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wf:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=m0;cn.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,y=(p+1)/2,P=(f+1)/2,M=(c+h)/4,R=(d+x)/4,I=(g+m)/4;return v>y&&v>P?v<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(v),r=M/i,o=R/i):y>P?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=M/r,o=I/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=R/o,r=I/o),this.set(i,r,o,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-x)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rM extends ts{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new R0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends rM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class b0 extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oM extends cn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[s+0],p=o[s+1],g=o[s+2],x=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==h||u!==p||c!==g){let m=1-a;const f=l*h+u*p+c*g+d*x,_=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),M=Math.atan2(P,f*_);m=Math.sin(m*M)/P,a=Math.sin(a*M)/P}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+g*y,d=d*m+x*y,m===1-a){const P=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=P,u*=P,c*=P,d*=P}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],h=o[s+1],p=o[s+2],g=o[s+3];return e[n]=a*g+c*d+l*p-u*h,e[n+1]=l*g+c*h+u*d-a*p,e[n+2]=u*g+c*p+a*h-l*d,e[n+3]=c*g-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"YXZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"ZXY":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"ZYX":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"YZX":this._x=h*c*d+u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d-h*p*g;break;case"XZY":this._x=h*c*d-u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=s*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new K,Mm=new fa;class da{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,On):On.fromBufferAttribute(o,s),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fa.copy(i.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),Oa.subVectors(this.max,gs),eo.subVectors(e.a,gs),to.subVectors(e.b,gs),no.subVectors(e.c,gs),Oi.subVectors(to,eo),zi.subVectors(no,to),gr.subVectors(eo,no);let n=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-gr.z,gr.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,gr.z,0,-gr.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-gr.y,gr.x,0];return!rc(n,eo,to,no,Oa)||(n=[1,0,0,0,1,0,0,0,1],!rc(n,eo,to,no,Oa))?!1:(za.crossVectors(Oi,zi),n=[za.x,za.y,za.z],rc(n,eo,to,no,Oa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new K,new K,new K,new K,new K,new K,new K,new K],On=new K,Fa=new da,eo=new K,to=new K,no=new K,Oi=new K,zi=new K,gr=new K,gs=new K,Oa=new K,za=new K,_r=new K;function rc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){_r.fromArray(t,o);const a=r.x*Math.abs(_r.x)+r.y*Math.abs(_r.y)+r.z*Math.abs(_r.z),l=e.dot(_r),u=n.dot(_r),c=i.dot(_r);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const sM=new da,_s=new K,oc=new K;class Ph{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):sM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const n=_s.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(_s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(oc)),this.expandByPoint(_s.copy(e.center).sub(oc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new K,sc=new K,Ba=new K,Bi=new K,ac=new K,Ha=new K,lc=new K;class aM{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sc.copy(e).add(n).multiplyScalar(.5),Ba.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(sc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Ba),a=Bi.dot(this.direction),l=-Bi.dot(Ba),u=Bi.lengthSq(),c=Math.abs(1-s*s);let d,h,p,g;if(c>0)if(d=s*l-a,h=s*a-l,g=o*c,d>=0)if(h>=-g)if(h<=g){const x=1/c;d*=x,h*=x,p=d*(d+s*h+2*a)+h*(s*d+h+2*l)+u}else h=o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-s*o+a)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(s*o+a)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=s>0?-o:o,d=Math.max(0,-(s*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sc).addScaledVector(Ba,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,s=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,s=(e.min.y-h.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,o){ac.subVectors(n,e),Ha.subVectors(i,e),lc.crossVectors(ac,Ha);let s=this.direction.dot(lc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Bi.subVectors(this.origin,e);const l=a*this.direction.dot(Ha.crossVectors(Bi,Ha));if(l<0)return null;const u=a*this.direction.dot(ac.cross(Bi));if(u<0||l+u>s)return null;const c=-a*Bi.dot(lc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,s,a,l,u,c,d,h,p,g,x,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,h,p,g,x,m)}set(e,n,i,r,o,s,a,l,u,c,d,h,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=s,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/io.setFromMatrixColumn(e,0).length(),o=1/io.setFromMatrixColumn(e,1).length(),s=1/io.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=s*c,p=s*d,g=a*c,x=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=h-x*u,n[9]=-a*l,n[2]=x-h*u,n[6]=g+p*u,n[10]=s*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,g=u*c,x=u*d;n[0]=h+x*a,n[4]=g*a-p,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=s*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,g=u*c,x=u*d;n[0]=h-x*a,n[4]=-s*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=s*c,n[9]=x-h*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const h=s*c,p=s*d,g=a*c,x=a*d;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+x,n[1]=l*d,n[5]=x*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=x-h*d,n[8]=g*d+p,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+g,n[10]=h-x*d}else if(e.order==="XZY"){const h=s*l,p=s*u,g=a*l,x=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+x,n[5]=s*c,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*c,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lM,e,uM)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Hi.crossVectors(i,hn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Hi.crossVectors(i,hn)),Hi.normalize(),Va.crossVectors(hn,Hi),r[0]=Hi.x,r[4]=Va.x,r[8]=hn.x,r[1]=Hi.y,r[5]=Va.y,r[9]=hn.y,r[2]=Hi.z,r[6]=Va.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],_=i[3],v=i[7],y=i[11],P=i[15],M=r[0],R=r[4],I=r[8],T=r[12],S=r[1],C=r[5],U=r[9],k=r[13],V=r[2],O=r[6],G=r[10],X=r[14],N=r[3],$=r[7],A=r[11],le=r[15];return o[0]=s*M+a*S+l*V+u*N,o[4]=s*R+a*C+l*O+u*$,o[8]=s*I+a*U+l*G+u*A,o[12]=s*T+a*k+l*X+u*le,o[1]=c*M+d*S+h*V+p*N,o[5]=c*R+d*C+h*O+p*$,o[9]=c*I+d*U+h*G+p*A,o[13]=c*T+d*k+h*X+p*le,o[2]=g*M+x*S+m*V+f*N,o[6]=g*R+x*C+m*O+f*$,o[10]=g*I+x*U+m*G+f*A,o[14]=g*T+x*k+m*X+f*le,o[3]=_*M+v*S+y*V+P*N,o[7]=_*R+v*C+y*O+P*$,o[11]=_*I+v*U+y*G+P*A,o[15]=_*T+v*k+y*X+P*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+o*l*d-r*u*d-o*a*h+i*u*h+r*a*p-i*l*p)+x*(+n*l*p-n*u*h+o*s*h-r*s*p+r*u*c-o*l*c)+m*(+n*u*d-n*a*p-o*s*d+i*s*p+o*a*c-i*u*c)+f*(-r*a*c-n*l*d+n*a*h+r*s*d-i*s*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],_=d*m*u-x*h*u+x*l*p-a*m*p-d*l*f+a*h*f,v=g*h*u-c*m*u-g*l*p+s*m*p+c*l*f-s*h*f,y=c*x*u-g*d*u+g*a*p-s*x*p-c*a*f+s*d*f,P=g*d*l-c*x*l-g*a*h+s*x*h+c*a*m-s*d*m,M=n*_+i*v+r*y+o*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=_*R,e[1]=(x*h*o-d*m*o-x*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(a*m*o-x*l*o+x*r*u-i*m*u-a*r*f+i*l*f)*R,e[3]=(d*l*o-a*h*o-d*r*u+i*h*u+a*r*p-i*l*p)*R,e[4]=v*R,e[5]=(c*m*o-g*h*o+g*r*p-n*m*p-c*r*f+n*h*f)*R,e[6]=(g*l*o-s*m*o-g*r*u+n*m*u+s*r*f-n*l*f)*R,e[7]=(s*h*o-c*l*o+c*r*u-n*h*u-s*r*p+n*l*p)*R,e[8]=y*R,e[9]=(g*d*o-c*x*o-g*i*p+n*x*p+c*i*f-n*d*f)*R,e[10]=(s*x*o-g*a*o+g*i*u-n*x*u-s*i*f+n*a*f)*R,e[11]=(c*a*o-s*d*o-c*i*u+n*d*u+s*i*p-n*a*p)*R,e[12]=P*R,e[13]=(c*x*r-g*d*r+g*i*h-n*x*h-c*i*m+n*d*m)*R,e[14]=(g*a*r-s*x*r-g*i*l+n*x*l+s*i*m-n*a*m)*R,e[15]=(s*d*r-c*a*r+c*i*l-n*d*l-s*i*h+n*a*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,h=o*u,p=o*c,g=o*d,x=s*c,m=s*d,f=a*d,_=l*u,v=l*c,y=l*d,P=i.x,M=i.y,R=i.z;return r[0]=(1-(x+f))*P,r[1]=(p+y)*P,r[2]=(g-v)*P,r[3]=0,r[4]=(p-y)*M,r[5]=(1-(h+f))*M,r[6]=(m+_)*M,r[7]=0,r[8]=(g+v)*R,r[9]=(m-_)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=io.set(r[0],r[1],r[2]).length();const s=io.set(r[4],r[5],r[6]).length(),a=io.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const u=1/o,c=1/s,d=1/a;return zn.elements[0]*=u,zn.elements[1]*=u,zn.elements[2]*=u,zn.elements[4]*=c,zn.elements[5]*=c,zn.elements[6]*=c,zn.elements[8]*=d,zn.elements[9]*=d,zn.elements[10]*=d,n.setFromRotationMatrix(zn),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=wi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===wi)p=-(s+o)/(s-o),g=-2*s*o/(s-o);else if(a===Zl)p=-s/(s-o),g=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=wi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(s-o),h=(n+e)*u,p=(i+r)*c;let g,x;if(a===wi)g=(s+o)*d,x=-2*d;else if(a===Zl)g=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const io=new K,zn=new Ct,lM=new K(0,0,0),uM=new K(1,1,1),Hi=new K,Va=new K,hn=new K,wm=new Ct,Tm=new fa;class Ii{constructor(e=0,n=0,i=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class P0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cM=0;const Am=new K,ro=new fa,pi=new Ct,Ga=new K,vs=new K,fM=new K,dM=new fa,Cm=new K(1,0,0),Rm=new K(0,1,0),bm=new K(0,0,1),Pm={type:"added"},hM={type:"removed"},oo={type:"childadded",child:null},uc={type:"childremoved",child:null};class yn extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new K,n=new Ii,i=new fa,r=new K(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Be}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new P0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,n){return ro.setFromAxisAngle(e,n),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ga.copy(e):Ga.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(vs,Ga,this.up):pi.lookAt(Ga,vs,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),ro.setFromRotationMatrix(pi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),oo.child=e,this.dispatchEvent(oo),oo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(hM),uc.child=e,this.dispatchEvent(uc),uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),oo.child=e,this.dispatchEvent(oo),oo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,fM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,dM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),h=s(e.skeletons),p=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new K(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new K,mi=new K,cc=new K,gi=new K,so=new K,ao=new K,Lm=new K,fc=new K,dc=new K,hc=new K,pc=new Mt,mc=new Mt,gc=new Mt;class Xn{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Bn.subVectors(r,n),mi.subVectors(i,n),cc.subVectors(e,n);const s=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(cc),u=mi.dot(mi),c=mi.dot(cc),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,g=(s*c-a*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,gi.x),l.addScaledVector(s,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return pc.setScalar(0),mc.setScalar(0),gc.setScalar(0),pc.fromBufferAttribute(e,n),mc.fromBufferAttribute(e,i),gc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(pc,o.x),s.addScaledVector(mc,o.y),s.addScaledVector(gc,o.z),s}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),mi.subVectors(e,n),Bn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;so.subVectors(r,i),ao.subVectors(o,i),fc.subVectors(e,i);const l=so.dot(fc),u=ao.dot(fc);if(l<=0&&u<=0)return n.copy(i);dc.subVectors(e,r);const c=so.dot(dc),d=ao.dot(dc);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(so,s);hc.subVectors(e,o);const p=so.dot(hc),g=ao.dot(hc);if(g>=0&&p<=g)return n.copy(o);const x=p*u-l*g;if(x<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ao,a);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Lm.subVectors(o,r),a=(d-c)/(d-c+(p-g)),n.copy(r).addScaledVector(Lm,a);const f=1/(m+x+h);return s=x*f,a=h*f,n.copy(i).addScaledVector(so,s).addScaledVector(ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const L0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function _c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ot{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=An){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=KE(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=_c(s,o,e+1/3),this.g=_c(s,o,e),this.b=_c(s,o,e-1/3)}return $e.toWorkingColorSpace(this,r),this}setStyle(e,n=An){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=An){const i=L0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=An){return $e.fromWorkingColorSpace(Gt.copy(this),e),Math.round(rn(Gt.r*255,0,255))*65536+Math.round(rn(Gt.g*255,0,255))*256+Math.round(rn(Gt.b*255,0,255))}getHexString(e=An){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,o=Gt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=$e.workingColorSpace){return $e.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=An){$e.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==An?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Wa);const i=ec(Vi.h,Wa.h,n),r=ec(Vi.s,Wa.s,n),o=ec(Vi.l,Wa.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new ot;ot.NAMES=L0;let pM=0;class yu extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ca(),this.name="",this.blending=Do,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ot(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Do&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Df&&(i.blendSrc=this.blendSrc),this.blendDst!==Nf&&(i.blendDst=this.blendDst),this.blendEquation!==Rr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class I0 extends yu{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new K,Xa=new st;class li{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=mm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Xa.fromBufferAttribute(this,n),Xa.applyMatrix3(e),this.setXY(n,Xa.x,Xa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ms(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=en(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ms(n,this.array)),n}setX(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ms(n,this.array)),n}setY(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ms(n,this.array)),n}setZ(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ms(n,this.array)),n}setW(e,n){return this.normalized&&(n=en(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=en(n,this.array),i=en(i,this.array),r=en(r,this.array),o=en(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mm&&(e.usage=this.usage),e}}class D0 extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class N0 extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Or extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}let mM=0;const Tn=new Ct,vc=new yn,lo=new K,pn=new da,xs=new da,Dt=new K;class $r extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mM++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C0(e)?N0:D0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Be().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Or(i,3))}else{for(let i=0,r=n.count;i<r;i++){const o=e[i];n.setXYZ(i,o.x,o.y,o.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ph);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(pn.min,xs.min),pn.expandByPoint(Dt),Dt.addVectors(pn.max,xs.max),pn.expandByPoint(Dt)):(pn.expandByPoint(xs.min),pn.expandByPoint(xs.max))}pn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Dt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Dt.fromBufferAttribute(a,u),l&&(lo.fromBufferAttribute(e,u),Dt.add(lo)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new K,l[I]=new K;const u=new K,c=new K,d=new K,h=new st,p=new st,g=new st,x=new K,m=new K;function f(I,T,S){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(o,I),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,S),c.sub(u),d.sub(u),p.sub(h),g.sub(h);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(C),a[I].add(x),a[T].add(x),a[S].add(x),l[I].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let I=0,T=_.length;I<T;++I){const S=_[I],C=S.start,U=S.count;for(let k=C,V=C+U;k<V;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new K,y=new K,P=new K,M=new K;function R(I){P.fromBufferAttribute(r,I),M.copy(P);const T=a[I];v.copy(T),v.sub(P.multiplyScalar(P.dot(T))).normalize(),y.crossVectors(M,T);const C=y.dot(l[I])<0?-1:1;s.setXYZW(I,v.x,v.y,v.z,C)}for(let I=0,T=_.length;I<T;++I){const S=_[I],C=S.start,U=S.count;for(let k=C,V=C+U;k<V;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new K,o=new K,s=new K,a=new K,l=new K,u=new K,c=new K,d=new K;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),s.fromBufferAttribute(n,h+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*c;for(let f=0;f<c;f++)h[g++]=u[p++]}return new li(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new $r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Im=new Ct,vr=new aM,ja=new Ph,Dm=new K,qa=new K,$a=new K,Ya=new K,xc=new K,Ka=new K,Nm=new K,Za=new K;class oi extends yn{constructor(e=new $r,n=new I0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Ka.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(xc.fromBufferAttribute(d,e),s?Ka.addScaledVector(xc,c):Ka.addScaledVector(xc.sub(n),c))}n.add(Ka)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(o),vr.copy(e.ray).recast(e.near),!(ja.containsPoint(vr.origin)===!1&&(vr.intersectSphere(ja,Dm)===null||vr.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Im.copy(o).invert(),vr.copy(e.ray).applyMatrix4(Im),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const M=a.getX(y),R=a.getX(y+1),I=a.getX(y+2);r=Qa(this,f,e,i,u,c,d,M,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Qa(this,s,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=h.length;g<x;g++){const m=h[g],f=s[m.materialIndex],_=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,P=v;y<P;y+=3){const M=y,R=y+1,I=y+2;r=Qa(this,f,e,i,u,c,d,M,R,I),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const _=m,v=m+1,y=m+2;r=Qa(this,s,e,i,u,c,d,_,v,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function gM(t,e,n,i,r,o,s,a){let l;if(e.side===un?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===cr,a),l===null)return null;Za.copy(a),Za.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Za);return u<n.near||u>n.far?null:{distance:u,point:Za.clone(),object:t}}function Qa(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,qa),t.getVertexPosition(l,$a),t.getVertexPosition(u,Ya);const c=gM(t,e,n,i,qa,$a,Ya,Nm);if(c){const d=new K;Xn.getBarycoord(Nm,qa,$a,Ya,d),r&&(c.uv=Xn.getInterpolatedAttribute(r,a,l,u,d,new st)),o&&(c.uv1=Xn.getInterpolatedAttribute(o,a,l,u,d,new st)),s&&(c.normal=Xn.getInterpolatedAttribute(s,a,l,u,d,new K),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new K,materialIndex:0};Xn.getNormal(qa,$a,Ya,h.normal),c.face=h,c.barycoord=d}return c}class ha extends $r{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Or(u,3)),this.setAttribute("normal",new Or(c,3)),this.setAttribute("uv",new Or(d,2));function g(x,m,f,_,v,y,P,M,R,I,T){const S=y/R,C=P/I,U=y/2,k=P/2,V=M/2,O=R+1,G=I+1;let X=0,N=0;const $=new K;for(let A=0;A<G;A++){const le=A*C-k;for(let xe=0;xe<O;xe++){const L=xe*S-U;$[x]=L*_,$[m]=le*v,$[f]=V,u.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[f]=M>0?1:-1,c.push($.x,$.y,$.z),d.push(xe/R),d.push(1-A/I),X+=1}}for(let A=0;A<I;A++)for(let le=0;le<R;le++){const xe=h+le+O*A,L=h+le+O*(A+1),Y=h+(le+1)+O*(A+1),oe=h+(le+1)+O*A;l.push(xe,L,oe),l.push(L,Y,oe),N+=6}a.addGroup(p,N,T),p+=N,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ko(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ko(t[n]);for(const r in i)e[r]=i[r]}return e}function _M(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function U0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const vM={clone:Ko,merge:$t};var xM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends yu{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xM,this.fragmentShader=yM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ko(e.uniforms),this.uniformsGroups=_M(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k0 extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gi=new K,Um=new st,km=new st;class Wn extends k0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vd*2*Math.atan(Math.tan(Ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,n){return this.getViewBounds(e,Um,km),n.subVectors(km,Um)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ju*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const uo=-90,co=1;class SM extends yn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wn(uo,co,e,n);r.layers=this.layers,this.add(r);const o=new Wn(uo,co,e,n);o.layers=this.layers,this.add(o);const s=new Wn(uo,co,e,n);s.layers=this.layers,this.add(s);const a=new Wn(uo,co,e,n);a.layers=this.layers,this.add(a);const l=new Wn(uo,co,e,n);l.layers=this.layers,this.add(l);const u=new Wn(uo,co,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class F0 extends cn{constructor(e,n,i,r,o,s,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:jo,super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends Xr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new F0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),o=new Di({name:"CubemapFromEquirect",uniforms:Ko(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:sr});o.uniforms.tEquirect.value=n;const s=new oi(r,o),a=n.minFilter;return n.minFilter===Ur&&(n.minFilter=ri),new SM(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const yc=new K,MM=new K,wM=new Be;class Ar{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yc.subVectors(i,n).cross(MM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||wM.getNormalMatrix(e),r=this.coplanarPoint(yc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new Ph,Ja=new K;class O0{constructor(e=new Ar,n=new Ar,i=new Ar,r=new Ar,o=new Ar,s=new Ar){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=wi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],g=r[9],x=r[10],m=r[11],f=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-o,h-u,m-p,y-f).normalize(),i[1].setComponents(l+o,h+u,m+p,y+f).normalize(),i[2].setComponents(l+s,h+c,m+g,y+_).normalize(),i[3].setComponents(l-s,h-c,m-g,y-_).normalize(),i[4].setComponents(l-a,h-d,m-x,y-v).normalize(),n===wi)i[5].setComponents(l+a,h+d,m+x,y+v).normalize();else if(n===Zl)i[5].setComponents(a,d,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ja.x=r.normal.x>0?e.max.x:e.min.x,Ja.y=r.normal.y>0?e.max.y:e.min.y,Ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function TM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,d[h]=x)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class pa extends $r{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let f=0;f<c;f++){const _=f*h-s;for(let v=0;v<u;v++){const y=v*d-o;g.push(y,-_,0),x.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const v=_+u*f,y=_+u*(f+1),P=_+1+u*(f+1),M=_+1+u*f;p.push(v,y,M),p.push(y,P,M)}this.setIndex(p),this.setAttribute("position",new Or(g,3)),this.setAttribute("normal",new Or(x,3)),this.setAttribute("uv",new Or(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,RM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
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
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NM=`#ifdef USE_BATCHING
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
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zM=`#ifdef USE_IRIDESCENCE
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
#endif`,BM=`#ifdef USE_BUMPMAP
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
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
} // validated`,KM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ZM=`vec3 transformedNormal = objectNormal;
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
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,t1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,n1="gl_FragColor = linearToOutputTexel( gl_FragColor );",i1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,f1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
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
}`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,x1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
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
#endif`,w1=`struct PhysicalMaterial {
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
}`,T1=`
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
#endif`,A1=`#if defined( RE_IndirectDiffuse )
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,R1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,N1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,U1=`#if defined( USE_POINTS_UV )
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
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,W1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ew=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ow=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cw=`float getShadowMask() {
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
}`,fw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pw=`#ifdef USE_SKINNING
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
#endif`,mw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_w=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#ifdef USE_TRANSMISSION
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
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lw=`#include <common>
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
}`,Iw=`#if DEPTH_PACKING == 3200
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
}`,Dw=`#define DISTANCE
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
}`,Nw=`#define DISTANCE
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
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`uniform float scale;
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
}`,Ow=`uniform vec3 diffuse;
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
}`,zw=`#include <common>
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Hw=`#define LAMBERT
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
}`,Vw=`#define LAMBERT
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
}`,Gw=`#define MATCAP
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
}`,Ww=`#define MATCAP
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
}`,Xw=`#define NORMAL
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
}`,jw=`#define NORMAL
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
}`,qw=`#define PHONG
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
}`,$w=`#define PHONG
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
}`,Kw=`#define STANDARD
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
}`,Zw=`#define TOON
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
}`,Qw=`#define TOON
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
}`,Jw=`uniform float size;
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
}`,eT=`uniform vec3 diffuse;
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
}`,tT=`#include <common>
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
}`,nT=`uniform vec3 color;
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
}`,iT=`uniform float rotation;
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
}`,rT=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:AM,alphahash_pars_fragment:CM,alphamap_fragment:RM,alphamap_pars_fragment:bM,alphatest_fragment:PM,alphatest_pars_fragment:LM,aomap_fragment:IM,aomap_pars_fragment:DM,batching_pars_vertex:NM,batching_vertex:UM,begin_vertex:kM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:zM,bumpmap_pars_fragment:BM,clipping_planes_fragment:HM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:WM,color_fragment:XM,color_pars_fragment:jM,color_pars_vertex:qM,color_vertex:$M,common:YM,cube_uv_reflection_fragment:KM,defaultnormal_vertex:ZM,displacementmap_pars_vertex:QM,displacementmap_vertex:JM,emissivemap_fragment:e1,emissivemap_pars_fragment:t1,colorspace_fragment:n1,colorspace_pars_fragment:i1,envmap_fragment:r1,envmap_common_pars_fragment:o1,envmap_pars_fragment:s1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:v1,envmap_vertex:l1,fog_vertex:u1,fog_pars_vertex:c1,fog_fragment:f1,fog_pars_fragment:d1,gradientmap_pars_fragment:h1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:x1,lights_toon_pars_fragment:y1,lights_phong_fragment:S1,lights_phong_pars_fragment:E1,lights_physical_fragment:M1,lights_physical_pars_fragment:w1,lights_fragment_begin:T1,lights_fragment_maps:A1,lights_fragment_end:C1,logdepthbuf_fragment:R1,logdepthbuf_pars_fragment:b1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:L1,map_fragment:I1,map_pars_fragment:D1,map_particle_fragment:N1,map_particle_pars_fragment:U1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:F1,morphinstance_vertex:O1,morphcolor_vertex:z1,morphnormal_vertex:B1,morphtarget_pars_vertex:H1,morphtarget_vertex:V1,normal_fragment_begin:G1,normal_fragment_maps:W1,normal_pars_fragment:X1,normal_pars_vertex:j1,normal_vertex:q1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:Q1,opaque_fragment:J1,packing:ew,premultiplied_alpha_fragment:tw,project_vertex:nw,dithering_fragment:iw,dithering_pars_fragment:rw,roughnessmap_fragment:ow,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:lw,shadowmap_vertex:uw,shadowmask_pars_fragment:cw,skinbase_vertex:fw,skinning_pars_vertex:dw,skinning_vertex:hw,skinnormal_vertex:pw,specularmap_fragment:mw,specularmap_pars_fragment:gw,tonemapping_fragment:_w,tonemapping_pars_fragment:vw,transmission_fragment:xw,transmission_pars_fragment:yw,uv_pars_fragment:Sw,uv_pars_vertex:Ew,uv_vertex:Mw,worldpos_vertex:ww,background_vert:Tw,background_frag:Aw,backgroundCube_vert:Cw,backgroundCube_frag:Rw,cube_vert:bw,cube_frag:Pw,depth_vert:Lw,depth_frag:Iw,distanceRGBA_vert:Dw,distanceRGBA_frag:Nw,equirect_vert:Uw,equirect_frag:kw,linedashed_vert:Fw,linedashed_frag:Ow,meshbasic_vert:zw,meshbasic_frag:Bw,meshlambert_vert:Hw,meshlambert_frag:Vw,meshmatcap_vert:Gw,meshmatcap_frag:Ww,meshnormal_vert:Xw,meshnormal_frag:jw,meshphong_vert:qw,meshphong_frag:$w,meshphysical_vert:Yw,meshphysical_frag:Kw,meshtoon_vert:Zw,meshtoon_frag:Qw,points_vert:Jw,points_frag:eT,shadow_vert:tT,shadow_frag:nT,sprite_vert:iT,sprite_frag:rT},de={common:{diffuse:{value:new ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ot(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ti={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ot(0)},specular:{value:new ot(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ot(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new ot(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ti.physical={uniforms:$t([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ot(0)},specularColor:{value:new ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const el={r:0,b:0,g:0},yr=new Ii,oT=new Ct;function sT(t,e,n,i,r,o,s){const a=new ot(0);let l=o===!0?0:1,u,c,d=null,h=0,p=null;function g(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?n:e).get(v)),v}function x(_){let v=!1;const y=g(_);y===null?f(a,l):y&&y.isColor&&(f(y,1),v=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,v){const y=g(v);y&&(y.isCubeTexture||y.mapping===vu)?(c===void 0&&(c=new oi(new ha(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Ko(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,M,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),yr.copy(v.backgroundRotation),yr.x*=-1,yr.y*=-1,yr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(yr)),c.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new oi(new pa(2,2),new Di({name:"BackgroundMaterial",uniforms:Ko(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=$e.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function f(_,v){_.getRGB(el,U0(t)),i.buffers.color.setClear(el.r,el.g,el.b,v,s)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:x,addToRenderList:m}}function aT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,s=!1;function a(S,C,U,k,V){let O=!1;const G=d(k,U,C);o!==G&&(o=G,u(o.object)),O=p(S,k,U,V),O&&g(S,k,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(O||s)&&(s=!1,y(S,C,U,k),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function d(S,C,U){const k=U.wireframe===!0;let V=i[S.id];V===void 0&&(V={},i[S.id]=V);let O=V[C.id];O===void 0&&(O={},V[C.id]=O);let G=O[k];return G===void 0&&(G=h(l()),O[k]=G),G}function h(S){const C=[],U=[],k=[];for(let V=0;V<n;V++)C[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,C,U,k){const V=o.attributes,O=C.attributes;let G=0;const X=U.getAttributes();for(const N in X)if(X[N].location>=0){const A=V[N];let le=O[N];if(le===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),A===void 0||A.attribute!==le||le&&A.data!==le.data)return!0;G++}return o.attributesNum!==G||o.index!==k}function g(S,C,U,k){const V={},O=C.attributes;let G=0;const X=U.getAttributes();for(const N in X)if(X[N].location>=0){let A=O[N];A===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(A=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(A=S.instanceColor));const le={};le.attribute=A,A&&A.data&&(le.data=A.data),V[N]=le,G++}o.attributes=V,o.attributesNum=G,o.index=k}function x(){const S=o.newAttributes;for(let C=0,U=S.length;C<U;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){const U=o.newAttributes,k=o.enabledAttributes,V=o.attributeDivisors;U[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),V[S]!==C&&(t.vertexAttribDivisor(S,C),V[S]=C)}function _(){const S=o.newAttributes,C=o.enabledAttributes;for(let U=0,k=C.length;U<k;U++)C[U]!==S[U]&&(t.disableVertexAttribArray(U),C[U]=0)}function v(S,C,U,k,V,O,G){G===!0?t.vertexAttribIPointer(S,C,U,V,O):t.vertexAttribPointer(S,C,U,k,V,O)}function y(S,C,U,k){x();const V=k.attributes,O=U.getAttributes(),G=C.defaultAttributeValues;for(const X in O){const N=O[X];if(N.location>=0){let $=V[X];if($===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&($=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&($=S.instanceColor)),$!==void 0){const A=$.normalized,le=$.itemSize,xe=e.get($);if(xe===void 0)continue;const L=xe.buffer,Y=xe.type,oe=xe.bytesPerElement,ce=Y===t.INT||Y===t.UNSIGNED_INT||$.gpuType===wh;if($.isInterleavedBufferAttribute){const fe=$.data,Ae=fe.stride,Le=$.offset;if(fe.isInstancedInterleavedBuffer){for(let Ue=0;Ue<N.locationSize;Ue++)f(N.location+Ue,fe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ue=0;Ue<N.locationSize;Ue++)m(N.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,L);for(let Ue=0;Ue<N.locationSize;Ue++)v(N.location+Ue,le/N.locationSize,Y,A,Ae*oe,(Le+le/N.locationSize*Ue)*oe,ce)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<N.locationSize;fe++)f(N.location+fe,$.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<N.locationSize;fe++)m(N.location+fe);t.bindBuffer(t.ARRAY_BUFFER,L);for(let fe=0;fe<N.locationSize;fe++)v(N.location+fe,le/N.locationSize,Y,A,le*oe,le/N.locationSize*fe*oe,ce)}}else if(G!==void 0){const A=G[X];if(A!==void 0)switch(A.length){case 2:t.vertexAttrib2fv(N.location,A);break;case 3:t.vertexAttrib3fv(N.location,A);break;case 4:t.vertexAttrib4fv(N.location,A);break;default:t.vertexAttrib1fv(N.location,A)}}}}_()}function P(){I();for(const S in i){const C=i[S];for(const U in C){const k=C[U];for(const V in k)c(k[V].object),delete k[V];delete C[U]}delete i[S]}}function M(S){if(i[S.id]===void 0)return;const C=i[S.id];for(const U in C){const k=C[U];for(const V in k)c(k[V].object),delete k[V];delete C[U]}delete i[S.id]}function R(S){for(const C in i){const U=i[C];if(U[S.id]===void 0)continue;const k=U[S.id];for(const V in k)c(k[V].object),delete k[V];delete U[S.id]}}function I(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function lT(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let g=0;g<d;g++)p+=c[g];n.update(p,i,1)}function l(u,c,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)s(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let g=0;for(let x=0;x<d;x++)g+=c[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function uT(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(R){return!(R!==jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Li&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Mi&&!I)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,M=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:P,maxSamples:M}}function cT(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Ar,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const _=o?0:i,v=_*4;let y=f.clippingState||null;l.value=y,y=c(g,h,v,p);for(let P=0;P!==v;++P)y[P]=n[P];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==x;++v,y+=4)s.copy(d[v]).applyMatrix4(_,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function fT(t){let e=new WeakMap;function n(s,a){return a===Vf?s.mapping=jo:a===Gf&&(s.mapping=qo),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Vf||a===Gf)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new EM(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class B0 extends k0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ao=4,Fm=[.125,.215,.35,.446,.526,.582],br=20,Sc=new B0,Om=new ot;let Ec=null,Mc=0,wc=0,Tc=!1;const Cr=(1+Math.sqrt(5))/2,fo=1/Cr,zm=[new K(-Cr,fo,0),new K(Cr,fo,0),new K(-fo,0,Cr),new K(fo,0,Cr),new K(0,Cr,-fo),new K(0,Cr,fo),new K(-1,1,-1),new K(1,1,-1),new K(-1,1,1),new K(1,1,1)];class Bm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,Mc,wc),this._renderer.xr.enabled=Tc,e.scissorTest=!1,tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===jo||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),wc=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:ua,format:jn,colorSpace:es,depthBuffer:!1},r=Hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hm(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dT(o)),this._blurMaterial=hT(o,e,n)}return r}_compileMaterial(e){const n=new oi(this._lodPlanes[0],e);this._renderer.compile(n,Sc)}_sceneToCubeUV(e,n,i,r){const a=new Wn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Om),c.toneMapping=ar,c.autoClear=!1;const p=new I0({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new oi(new ha,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Om),x=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;tl(r,_*v,f>2?v:0,v,v),c.setRenderTarget(r),x&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===jo||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new oi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Sc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=zm[(r-o-1)%zm.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new oi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*br-1),x=o/g,m=isFinite(o)?1+Math.floor(c*x):br;m>br&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${br}`);const f=[];let _=0;for(let R=0;R<br;++R){const I=R/x,T=Math.exp(-I*I/2);f.push(T),R===0?_+=T:R<m&&(_+=2*T)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=s==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const y=this._sizeLods[r],P=3*y*(r>v-Ao?r-v+Ao:0),M=4*(this._cubeSize-y);tl(n,P,M,3*y,2*y),l.setRenderTarget(n),l.render(d,Sc)}}function dT(t){const e=[],n=[],i=[];let r=t;const o=t-Ao+1+Fm.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-Ao?l=Fm[s-t+Ao-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,x=3,m=2,f=1,_=new Float32Array(x*g*p),v=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let M=0;M<p;M++){const R=M%3*2/3-1,I=M>2?0:-1,T=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];_.set(T,x*g*M),v.set(h,m*g*M);const S=[M,M,M,M,M,M];y.set(S,f*g*M)}const P=new $r;P.setAttribute("position",new li(_,x)),P.setAttribute("uv",new li(v,m)),P.setAttribute("faceIndex",new li(y,f)),e.push(P),r>Ao&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Hm(t,e,n){const i=new Xr(t,e,n);return i.texture.mapping=vu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hT(t,e,n){const i=new Float32Array(br),r=new K(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Vm(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Gm(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function pT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Vf||l===Gf,c=l===jo||l===qo;if(u||c){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Bm(t)),d=u?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Bm(t)),d=u?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function mT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&As("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gT(t,e,n,i){const r={},o=new WeakMap;function s(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const x=h.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}h.removeEventListener("dispose",s),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const _=p.array;x=p.version;for(let v=0,y=_.length;v<y;v+=3){const P=_[v+0],M=_[v+1],R=_[v+2];h.push(P,M,M,R,R,P)}}else if(g!==void 0){const _=g.array;x=g.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const P=v+0,M=v+1,R=v+2;h.push(P,M,M,R,R,P)}}else return;const m=new(C0(h)?N0:D0)(h,1);m.version=x;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function c(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function _T(t,e,n){let i;function r(h){i=h}let o,s;function a(h){o=h.type,s=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*s),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,h*s,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)u(h[f]/s,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,x,0,g);let f=0;for(let _=0;_<g;_++)f+=p[_]*x[_];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function vT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xT(t,e,n){const i=new WeakMap,r=new Mt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,M=1;P>e.maxTextureSize&&(M=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*M*4*d),I=new b0(R,P,M,d);I.type=Mi,I.needsUpdate=!0;const T=y*4;for(let C=0;C<d;C++){const U=f[C],k=_[C],V=v[C],O=P*M*4*C;for(let G=0;G<U.count;G++){const X=G*T;g===!0&&(r.fromBufferAttribute(U,G),R[O+X+0]=r.x,R[O+X+1]=r.y,R[O+X+2]=r.z,R[O+X+3]=0),x===!0&&(r.fromBufferAttribute(k,G),R[O+X+4]=r.x,R[O+X+5]=r.y,R[O+X+6]=r.z,R[O+X+7]=0),m===!0&&(r.fromBufferAttribute(V,G),R[O+X+8]=r.x,R[O+X+9]=r.y,R[O+X+10]=r.z,R[O+X+11]=V.itemSize===4?r.w:1)}}h={count:d,texture:I,size:new st(P,M)},i.set(a,h),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function yT(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class H0 extends cn{constructor(e,n,i,r,o,s,a,l,u,c=No){if(c!==No&&c!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===No&&(i=Wr),i===void 0&&c===Yo&&(i=$o),super(null,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Yn,this.minFilter=l!==void 0?l:Yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const V0=new cn,Wm=new H0(1,1),G0=new b0,W0=new oM,X0=new F0,Xm=[],jm=[],qm=new Float32Array(16),$m=new Float32Array(9),Ym=new Float32Array(4);function ns(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Xm[r];if(o===void 0&&(o=new Float32Array(r),Xm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Su(t,e){let n=jm[e];n===void 0&&(n=new Int32Array(e),jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ST(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ET(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function MT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function wT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function TT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;Ym.set(i),t.uniformMatrix2fv(this.addr,!1,Ym),It(n,i)}}function AT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;$m.set(i),t.uniformMatrix3fv(this.addr,!1,$m),It(n,i)}}function CT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Lt(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),It(n,i)}}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function LT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function kT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(Wm.compareFunction=A0,o=Wm):o=V0,n.setTexture2D(e||o,r)}function FT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||W0,r)}function OT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||X0,r)}function zT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||G0,r)}function BT(t){switch(t){case 5126:return ST;case 35664:return ET;case 35665:return MT;case 35666:return wT;case 35674:return TT;case 35675:return AT;case 35676:return CT;case 5124:case 35670:return RT;case 35667:case 35671:return bT;case 35668:case 35672:return PT;case 35669:case 35673:return LT;case 5125:return IT;case 36294:return DT;case 36295:return NT;case 36296:return UT;case 35678:case 36198:case 36298:case 36306:case 35682:return kT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return OT;case 36289:case 36303:case 36311:case 36292:return zT}}function HT(t,e){t.uniform1fv(this.addr,e)}function VT(t,e){const n=ns(e,this.size,2);t.uniform2fv(this.addr,n)}function GT(t,e){const n=ns(e,this.size,3);t.uniform3fv(this.addr,n)}function WT(t,e){const n=ns(e,this.size,4);t.uniform4fv(this.addr,n)}function XT(t,e){const n=ns(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jT(t,e){const n=ns(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qT(t,e){const n=ns(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $T(t,e){t.uniform1iv(this.addr,e)}function YT(t,e){t.uniform2iv(this.addr,e)}function KT(t,e){t.uniform3iv(this.addr,e)}function ZT(t,e){t.uniform4iv(this.addr,e)}function QT(t,e){t.uniform1uiv(this.addr,e)}function JT(t,e){t.uniform2uiv(this.addr,e)}function eA(t,e){t.uniform3uiv(this.addr,e)}function tA(t,e){t.uniform4uiv(this.addr,e)}function nA(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||V0,o[s])}function iA(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||W0,o[s])}function rA(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||X0,o[s])}function oA(t,e,n){const i=this.cache,r=e.length,o=Su(n,r);Lt(i,o)||(t.uniform1iv(this.addr,o),It(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||G0,o[s])}function sA(t){switch(t){case 5126:return HT;case 35664:return VT;case 35665:return GT;case 35666:return WT;case 35674:return XT;case 35675:return jT;case 35676:return qT;case 5124:case 35670:return $T;case 35667:case 35671:return YT;case 35668:case 35672:return KT;case 35669:case 35673:return ZT;case 5125:return QT;case 36294:return JT;case 36295:return eA;case 36296:return tA;case 35678:case 36198:case 36298:case 36306:case 35682:return nA;case 35679:case 36299:case 36307:return iA;case 35680:case 36300:case 36308:case 36293:return rA;case 36289:case 36303:case 36311:case 36292:return oA}}class aA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BT(n.type)}}class lA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=sA(n.type)}}class uA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Km(t,e){t.seq.push(e),t.map[e.id]=e}function cA(t,e,n){const i=t.name,r=i.length;for(Ac.lastIndex=0;;){const o=Ac.exec(i),s=Ac.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){Km(n,u===void 0?new aA(a,t,e):new lA(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new uA(a),Km(n,d)),n=d}}}class wl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);cA(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Zm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fA=37297;let dA=0;function hA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Qm=new Be;function pA(t){$e._getMatrix(Qm,$e.workingColorSpace,t);const e=`mat3( ${Qm.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case xu:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Jm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+hA(t.getShaderSource(e),s)}else return r}function mA(t,e){const n=pA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function gA(t,e){let n;switch(e){case LE:n="Linear";break;case IE:n="Reinhard";break;case DE:n="Cineon";break;case NE:n="ACESFilmic";break;case kE:n="AgX";break;case FE:n="Neutral";break;case UE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const nl=new K;function _A(){$e.getLuminanceCoefficients(nl);const t=nl.x.toFixed(4),e=nl.y.toFixed(4),n=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function xA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Cs(t){return t!==""}function eg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(t){return t.replace(SA,MA)}const EA=new Map;function MA(t,e){let n=He[e];if(n===void 0){const i=EA.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xd(n)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ng(t){return t.replace(wA,TA)}function TA(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function ig(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function AA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===h0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function CA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case jo:case qo:e="ENVMAP_TYPE_CUBE";break;case vu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function RA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qo:e="ENVMAP_MODE_REFRACTION";break}return e}function bA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case p0:e="ENVMAP_BLENDING_MULTIPLY";break;case bE:e="ENVMAP_BLENDING_MIX";break;case PE:e="ENVMAP_BLENDING_ADD";break}return e}function PA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=AA(n),u=CA(n),c=RA(n),d=bA(n),h=PA(n),p=vA(n),g=xA(o),x=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Cs).join(`
`),f.length>0&&(f+=`
`)):(m=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),f=[ig(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ar?"#define TONE_MAPPING":"",n.toneMapping!==ar?He.tonemapping_pars_fragment:"",n.toneMapping!==ar?gA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,mA("linearToOutputTexel",n.outputColorSpace),_A(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Cs).join(`
`)),s=xd(s),s=eg(s,n),s=tg(s,n),a=xd(a),a=eg(a,n),a=tg(a,n),s=ng(s),a=ng(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===gm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=_+m+s,y=_+f+a,P=Zm(r,r.VERTEX_SHADER,v),M=Zm(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,M),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(C){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),k=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(M).trim();let O=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,M);else{const X=Jm(r,P,"vertex"),N=Jm(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+X+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(k===""||V==="")&&(G=!1);G&&(C.diagnostics={runnable:O,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:V,prefix:f}})}r.deleteShader(P),r.deleteShader(M),I=new wl(r,x),T=yA(r,x)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,fA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=M,this}let IA=0;class DA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NA(e),n.set(e,i)),i}}class NA{constructor(e){this.id=IA++,this.code=e,this.usedTimes=0}}function UA(t,e,n,i,r,o,s){const a=new P0,l=new DA,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,C,U,k){const V=U.fog,O=k.geometry,G=T.isMeshStandardMaterial?U.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||G),N=X&&X.mapping===vu?X.image.height:null,$=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const A=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,le=A!==void 0?A.length:0;let xe=0;O.morphAttributes.position!==void 0&&(xe=1),O.morphAttributes.normal!==void 0&&(xe=2),O.morphAttributes.color!==void 0&&(xe=3);let L,Y,oe,ce;if($){const et=ti[$];L=et.vertexShader,Y=et.fragmentShader}else L=T.vertexShader,Y=T.fragmentShader,l.update(T),oe=l.getVertexShaderID(T),ce=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Le=k.isInstancedMesh===!0,Ue=k.isBatchedMesh===!0,nt=!!T.map,je=!!T.matcap,gt=!!X,H=!!T.aoMap,qt=!!T.lightMap,Ve=!!T.bumpMap,Ge=!!T.normalMap,be=!!T.displacementMap,it=!!T.emissiveMap,Re=!!T.metalnessMap,b=!!T.roughnessMap,E=T.anisotropy>0,W=T.clearcoat>0,ee=T.dispersion>0,ne=T.iridescence>0,D=T.sheen>0,Z=T.transmission>0,J=E&&!!T.anisotropyMap,ie=W&&!!T.clearcoatMap,Se=W&&!!T.clearcoatNormalMap,re=W&&!!T.clearcoatRoughnessMap,pe=ne&&!!T.iridescenceMap,Ee=ne&&!!T.iridescenceThicknessMap,Pe=D&&!!T.sheenColorMap,_e=D&&!!T.sheenRoughnessMap,Ie=!!T.specularMap,De=!!T.specularColorMap,Xe=!!T.specularIntensityMap,F=Z&&!!T.transmissionMap,he=Z&&!!T.thicknessMap,Q=!!T.gradientMap,te=!!T.alphaMap,ve=T.alphaTest>0,me=!!T.alphaHash,Oe=!!T.extensions;let yt=ar;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(yt=t.toneMapping);const zt={shaderID:$,shaderType:T.type,shaderName:T.name,vertexShader:L,fragmentShader:Y,defines:T.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Ue,batchingColor:Ue&&k._colorsTexture!==null,instancing:Le,instancingColor:Le&&k.instanceColor!==null,instancingMorph:Le&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:es,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:je,envMap:gt,envMapMode:gt&&X.mapping,envMapCubeUVHeight:N,aoMap:H,lightMap:qt,bumpMap:Ve,normalMap:Ge,displacementMap:h&&be,emissiveMap:it,normalMapObjectSpace:Ge&&T.normalMapType===VE,normalMapTangentSpace:Ge&&T.normalMapType===HE,metalnessMap:Re,roughnessMap:b,anisotropy:E,anisotropyMap:J,clearcoat:W,clearcoatMap:ie,clearcoatNormalMap:Se,clearcoatRoughnessMap:re,dispersion:ee,iridescence:ne,iridescenceMap:pe,iridescenceThicknessMap:Ee,sheen:D,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:Ie,specularColorMap:De,specularIntensityMap:Xe,transmission:Z,transmissionMap:F,thicknessMap:he,gradientMap:Q,opaque:T.transparent===!1&&T.blending===Do&&T.alphaToCoverage===!1,alphaMap:te,alphaTest:ve,alphaHash:me,combine:T.combine,mapUv:nt&&x(T.map.channel),aoMapUv:H&&x(T.aoMap.channel),lightMapUv:qt&&x(T.lightMap.channel),bumpMapUv:Ve&&x(T.bumpMap.channel),normalMapUv:Ge&&x(T.normalMap.channel),displacementMapUv:be&&x(T.displacementMap.channel),emissiveMapUv:it&&x(T.emissiveMap.channel),metalnessMapUv:Re&&x(T.metalnessMap.channel),roughnessMapUv:b&&x(T.roughnessMap.channel),anisotropyMapUv:J&&x(T.anisotropyMap.channel),clearcoatMapUv:ie&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Se&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(T.sheenRoughnessMap.channel),specularMapUv:Ie&&x(T.specularMap.channel),specularColorMapUv:De&&x(T.specularColorMap.channel),specularIntensityMapUv:Xe&&x(T.specularIntensityMap.channel),transmissionMapUv:F&&x(T.transmissionMap.channel),thicknessMapUv:he&&x(T.thicknessMap.channel),alphaMapUv:te&&x(T.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Ge||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!O.attributes.uv&&(nt||te),fog:!!V,useFog:T.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ae,skinning:k.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&C.length>0,shadowMapType:t.shadowMap.type,toneMapping:yt,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&$e.getTransfer(T.map.colorSpace)===rt,decodeVideoTextureEmissive:it&&T.emissiveMap.isVideoTexture===!0&&$e.getTransfer(T.emissiveMap.colorSpace)===rt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===yi,flipSided:T.side===un,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return zt.vertexUv1s=u.has(1),zt.vertexUv2s=u.has(2),zt.vertexUv3s=u.has(3),u.clear(),zt}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const C in T.defines)S.push(C),S.push(T.defines[C]);return T.isRawShaderMaterial===!1&&(_(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function y(T){const S=g[T.type];let C;if(S){const U=ti[S];C=vM.clone(U.uniforms)}else C=T.uniforms;return C}function P(T,S){let C;for(let U=0,k=c.length;U<k;U++){const V=c[U];if(V.cacheKey===S){C=V,++C.usedTimes;break}}return C===void 0&&(C=new LA(t,S,T,o),c.push(C)),C}function M(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function R(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:P,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:I}}function kA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function FA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function rg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function og(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d,h,p,g,x,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),e++,f}function a(d,h,p,g,x,m){const f=s(d,h,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,x,m){const f=s(d,h,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||FA),i.length>1&&i.sort(h||rg),r.length>1&&r.sort(h||rg)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:c,sort:u}}function OA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new og,t.set(i,[s])):r>=o.length?(s=new og,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function zA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new ot};break;case"SpotLight":n={position:new K,direction:new K,color:new ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new ot,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new ot,groundColor:new ot};break;case"RectAreaLight":n={color:new ot,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function BA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HA=0;function VA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GA(t){const e=new zA,n=BA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,o=new Ct,s=new Ct;function a(u){let c=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,_=0,v=0,y=0,P=0,M=0,R=0;u.sort(VA);for(let T=0,S=u.length;T<S;T++){const C=u[T],U=C.color,k=C.intensity,V=C.distance,O=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=U.r*k,d+=U.g*k,h+=U.b*k;else if(C.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(C.sh.coefficients[G],k);R++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const X=C.shadow,N=n.get(C);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=O,i.directionalShadowMatrix[p]=C.shadow.matrix,_++}i.directional[p]=G,p++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(U).multiplyScalar(k),G.distance=V,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,i.spot[x]=G;const X=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,X.updateMatrices(C),C.castShadow&&M++),i.spotLightMatrix[x]=X.matrix,C.castShadow){const N=n.get(C);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=O,y++}x++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(U).multiplyScalar(k),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=G,m++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const X=C.shadow,N=n.get(C);N.shadowIntensity=X.intensity,N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=C.shadow.matrix,v++}i.point[g]=G,g++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(k),G.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==f||I.numDirectionalShadows!==_||I.numPointShadows!==v||I.numSpotShadows!==y||I.numSpotMaps!==P||I.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+P-M,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=R,I.directionalLength=p,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=f,I.numDirectionalShadows=_,I.numPointShadows=v,I.numSpotShadows=y,I.numSpotMaps=P,I.numLightProbes=R,i.version=HA++)}function l(u,c){let d=0,h=0,p=0,g=0,x=0;const m=c.matrixWorldInverse;for(let f=0,_=u.length;f<_;f++){const v=u[f];if(v.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(v.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function sg(t){const e=new GA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function WA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new sg(t),e.set(r,[a])):o>=s.length?(a=new sg(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class XA extends yu{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jA extends yu{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
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
}`;function YA(t,e,n){let i=new O0;const r=new st,o=new st,s=new Mt,a=new XA({depthPacking:BE}),l=new jA,u={},c=n.maxTextureSize,d={[cr]:un,[un]:cr,[yi]:yi},h=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:qA,fragmentShader:$A}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $r;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new oi(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h0;let f=this.type;this.render=function(M,R,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),U=t.state;U.setBlending(sr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=f!==_i&&this.type===_i,V=f===_i&&this.type!==_i;for(let O=0,G=M.length;O<G;O++){const X=M[O],N=X.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const $=N.getFrameExtents();if(r.multiply($),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/$.x),r.x=o.x*$.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/$.y),r.y=o.y*$.y,N.mapSize.y=o.y)),N.map===null||k===!0||V===!0){const le=this.type!==_i?{minFilter:Yn,magFilter:Yn}:{};N.map!==null&&N.map.dispose(),N.map=new Xr(r.x,r.y,le),N.map.texture.name=X.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const A=N.getViewportCount();for(let le=0;le<A;le++){const xe=N.getViewport(le);s.set(o.x*xe.x,o.y*xe.y,o.x*xe.z,o.y*xe.w),U.viewport(s),N.updateMatrices(X,le),i=N.getFrustum(),y(R,I,N.camera,X,this.type)}N.isPointLightShadow!==!0&&this.type===_i&&_(N,I),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,C)};function _(M,R){const I=e.update(x);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Xr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(R,null,I,h,x,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(R,null,I,p,x,null)}function v(M,R,I,T){let S=null;const C=I.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(C!==void 0)S=C;else if(S=I.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=S.uuid,k=R.uuid;let V=u[U];V===void 0&&(V={},u[U]=V);let O=V[k];O===void 0&&(O=S.clone(),V[k]=O,R.addEventListener("dispose",P)),S=O}if(S.visible=R.visible,S.wireframe=R.wireframe,T===_i?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=t.properties.get(S);U.light=I}return S}function y(M,R,I,T,S){if(M.visible===!1)return;if(M.layers.test(R.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&S===_i)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,M.matrixWorld);const k=e.update(M),V=M.material;if(Array.isArray(V)){const O=k.groups;for(let G=0,X=O.length;G<X;G++){const N=O[G],$=V[N.materialIndex];if($&&$.visible){const A=v(M,$,T,S);M.onBeforeShadow(t,M,R,I,k,A,N),t.renderBufferDirect(I,null,k,A,M,N),M.onAfterShadow(t,M,R,I,k,A,N)}}}else if(V.visible){const O=v(M,V,T,S);M.onBeforeShadow(t,M,R,I,k,O,null),t.renderBufferDirect(I,null,k,O,M,null),M.onAfterShadow(t,M,R,I,k,O,null)}}const U=M.children;for(let k=0,V=U.length;k<V;k++)y(U[k],R,I,T,S)}function P(M){M.target.removeEventListener("dispose",P);for(const I in u){const T=u[I],S=M.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const KA={[Uf]:kf,[Ff]:Bf,[Of]:Hf,[Xo]:zf,[kf]:Uf,[Bf]:Ff,[Hf]:Of,[zf]:Xo};function ZA(t,e){function n(){let F=!1;const he=new Mt;let Q=null;const te=new Mt(0,0,0,0);return{setMask:function(ve){Q!==ve&&!F&&(t.colorMask(ve,ve,ve,ve),Q=ve)},setLocked:function(ve){F=ve},setClear:function(ve,me,Oe,yt,zt){zt===!0&&(ve*=yt,me*=yt,Oe*=yt),he.set(ve,me,Oe,yt),te.equals(he)===!1&&(t.clearColor(ve,me,Oe,yt),te.copy(he))},reset:function(){F=!1,Q=null,te.set(-1,0,0,0)}}}function i(){let F=!1,he=!1,Q=null,te=null,ve=null;return{setReversed:function(me){if(he!==me){const Oe=e.get("EXT_clip_control");he?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const yt=ve;ve=null,this.setClear(yt)}he=me},getReversed:function(){return he},setTest:function(me){me?fe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(me){Q!==me&&!F&&(t.depthMask(me),Q=me)},setFunc:function(me){if(he&&(me=KA[me]),te!==me){switch(me){case Uf:t.depthFunc(t.NEVER);break;case kf:t.depthFunc(t.ALWAYS);break;case Ff:t.depthFunc(t.LESS);break;case Xo:t.depthFunc(t.LEQUAL);break;case Of:t.depthFunc(t.EQUAL);break;case zf:t.depthFunc(t.GEQUAL);break;case Bf:t.depthFunc(t.GREATER);break;case Hf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}te=me}},setLocked:function(me){F=me},setClear:function(me){ve!==me&&(he&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){F=!1,Q=null,te=null,ve=null,he=!1}}}function r(){let F=!1,he=null,Q=null,te=null,ve=null,me=null,Oe=null,yt=null,zt=null;return{setTest:function(et){F||(et?fe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(et){he!==et&&!F&&(t.stencilMask(et),he=et)},setFunc:function(et,Un,ci){(Q!==et||te!==Un||ve!==ci)&&(t.stencilFunc(et,Un,ci),Q=et,te=Un,ve=ci)},setOp:function(et,Un,ci){(me!==et||Oe!==Un||yt!==ci)&&(t.stencilOp(et,Un,ci),me=et,Oe=Un,yt=ci)},setLocked:function(et){F=et},setClear:function(et){zt!==et&&(t.clearStencil(et),zt=et)},reset:function(){F=!1,he=null,Q=null,te=null,ve=null,me=null,Oe=null,yt=null,zt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,v=null,y=null,P=null,M=null,R=new ot(0,0,0),I=0,T=!1,S=null,C=null,U=null,k=null,V=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,X=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(N)[1]),G=X>=1):N.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),G=X>=2);let $=null,A={};const le=t.getParameter(t.SCISSOR_BOX),xe=t.getParameter(t.VIEWPORT),L=new Mt().fromArray(le),Y=new Mt().fromArray(xe);function oe(F,he,Q,te){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(F,me),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<Q;Oe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(he,0,t.RGBA,1,1,te,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(he+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const ce={};ce[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),ce[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ce[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Xo),Ve(!1),Ge(cm),fe(t.CULL_FACE),H(sr);function fe(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Ae(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function Le(F,he){return d[F]!==he?(t.bindFramebuffer(F,he),d[F]=he,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=he),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=he),!0):!1}function Ue(F,he){let Q=p,te=!1;if(F){Q=h.get(he),Q===void 0&&(Q=[],h.set(he,Q));const ve=F.textures;if(Q.length!==ve.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Oe=ve.length;me<Oe;me++)Q[me]=t.COLOR_ATTACHMENT0+me;Q.length=ve.length,te=!0}}else Q[0]!==t.BACK&&(Q[0]=t.BACK,te=!0);te&&t.drawBuffers(Q)}function nt(F){return g!==F?(t.useProgram(F),g=F,!0):!1}const je={[Rr]:t.FUNC_ADD,[dE]:t.FUNC_SUBTRACT,[hE]:t.FUNC_REVERSE_SUBTRACT};je[pE]=t.MIN,je[mE]=t.MAX;const gt={[gE]:t.ZERO,[_E]:t.ONE,[vE]:t.SRC_COLOR,[Df]:t.SRC_ALPHA,[wE]:t.SRC_ALPHA_SATURATE,[EE]:t.DST_COLOR,[yE]:t.DST_ALPHA,[xE]:t.ONE_MINUS_SRC_COLOR,[Nf]:t.ONE_MINUS_SRC_ALPHA,[ME]:t.ONE_MINUS_DST_COLOR,[SE]:t.ONE_MINUS_DST_ALPHA,[TE]:t.CONSTANT_COLOR,[AE]:t.ONE_MINUS_CONSTANT_COLOR,[CE]:t.CONSTANT_ALPHA,[RE]:t.ONE_MINUS_CONSTANT_ALPHA};function H(F,he,Q,te,ve,me,Oe,yt,zt,et){if(F===sr){x===!0&&(Ae(t.BLEND),x=!1);return}if(x===!1&&(fe(t.BLEND),x=!0),F!==fE){if(F!==m||et!==T){if((f!==Rr||y!==Rr)&&(t.blendEquation(t.FUNC_ADD),f=Rr,y=Rr),et)switch(F){case Do:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.ONE,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Do:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case fm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case dm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}_=null,v=null,P=null,M=null,R.set(0,0,0),I=0,m=F,T=et}return}ve=ve||he,me=me||Q,Oe=Oe||te,(he!==f||ve!==y)&&(t.blendEquationSeparate(je[he],je[ve]),f=he,y=ve),(Q!==_||te!==v||me!==P||Oe!==M)&&(t.blendFuncSeparate(gt[Q],gt[te],gt[me],gt[Oe]),_=Q,v=te,P=me,M=Oe),(yt.equals(R)===!1||zt!==I)&&(t.blendColor(yt.r,yt.g,yt.b,zt),R.copy(yt),I=zt),m=F,T=!1}function qt(F,he){F.side===yi?Ae(t.CULL_FACE):fe(t.CULL_FACE);let Q=F.side===un;he&&(Q=!Q),Ve(Q),F.blending===Do&&F.transparent===!1?H(sr):H(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),o.setMask(F.colorWrite);const te=F.stencilWrite;a.setTest(te),te&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),it(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(F){S!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),S=F)}function Ge(F){F!==lE?(fe(t.CULL_FACE),F!==C&&(F===cm?t.cullFace(t.BACK):F===uE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),C=F}function be(F){F!==U&&(G&&t.lineWidth(F),U=F)}function it(F,he,Q){F?(fe(t.POLYGON_OFFSET_FILL),(k!==he||V!==Q)&&(t.polygonOffset(he,Q),k=he,V=Q)):Ae(t.POLYGON_OFFSET_FILL)}function Re(F){F?fe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function b(F){F===void 0&&(F=t.TEXTURE0+O-1),$!==F&&(t.activeTexture(F),$=F)}function E(F,he,Q){Q===void 0&&($===null?Q=t.TEXTURE0+O-1:Q=$);let te=A[Q];te===void 0&&(te={type:void 0,texture:void 0},A[Q]=te),(te.type!==F||te.texture!==he)&&($!==Q&&(t.activeTexture(Q),$=Q),t.bindTexture(F,he||ce[F]),te.type=F,te.texture=he)}function W(){const F=A[$];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ee(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function D(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(F){L.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),L.copy(F))}function _e(F){Y.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function Ie(F,he){let Q=u.get(he);Q===void 0&&(Q=new WeakMap,u.set(he,Q));let te=Q.get(F);te===void 0&&(te=t.getUniformBlockIndex(he,F.name),Q.set(F,te))}function De(F,he){const te=u.get(he).get(F);l.get(he)!==te&&(t.uniformBlockBinding(he,te,F.__bindingPointIndex),l.set(he,te))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},$=null,A={},d={},h=new WeakMap,p=[],g=null,x=!1,m=null,f=null,_=null,v=null,y=null,P=null,M=null,R=new ot(0,0,0),I=0,T=!1,S=null,C=null,U=null,k=null,V=null,L.set(0,0,t.canvas.width,t.canvas.height),Y.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:fe,disable:Ae,bindFramebuffer:Le,drawBuffers:Ue,useProgram:nt,setBlending:H,setMaterial:qt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:be,setPolygonOffset:it,setScissorTest:Re,activeTexture:b,bindTexture:E,unbindTexture:W,compressedTexImage2D:ee,compressedTexImage3D:ne,texImage2D:pe,texImage3D:Ee,updateUBOMapping:Ie,uniformBlockBinding:De,texStorage2D:Se,texStorage3D:re,texSubImage2D:D,texSubImage3D:Z,compressedTexSubImage2D:J,compressedTexSubImage3D:ie,scissor:Pe,viewport:_e,reset:Xe}}function ag(t,e,n,i){const r=QA(i);switch(n){case x0:return t*e;case S0:return t*e;case E0:return t*e*2;case M0:return t*e/r.components*r.byteLength;case Ch:return t*e/r.components*r.byteLength;case w0:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case y0:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case bh:return t*e*4/r.components*r.byteLength;case xl:case yl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Sl:case El:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qf:case Yf:return Math.max(t,16)*Math.max(e,8)/4;case jf:case $f:return Math.max(t,8)*Math.max(e,8)/2;case Kf:case Zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ml:case hd:case pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case T0:case md:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QA(t){switch(t){case Li:case g0:return{byteLength:1,components:1};case na:case _0:case ua:return{byteLength:2,components:1};case Th:case Ah:return{byteLength:2,components:4};case Wr:case wh:case Mi:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function JA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new st,c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return p?new OffscreenCanvas(b,E):Ql("canvas")}function x(b,E,W){let ee=1;const ne=Re(b);if((ne.width>W||ne.height>W)&&(ee=W/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const D=Math.floor(ee*ne.width),Z=Math.floor(ee*ne.height);d===void 0&&(d=g(D,Z));const J=E?g(D,Z):d;return J.width=D,J.height=Z,J.getContext("2d").drawImage(b,0,0,D,Z),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+D+"x"+Z+")."),J}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){t.generateMipmap(b)}function _(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(b,E,W,ee,ne=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let D=E;if(E===t.RED&&(W===t.FLOAT&&(D=t.R32F),W===t.HALF_FLOAT&&(D=t.R16F),W===t.UNSIGNED_BYTE&&(D=t.R8)),E===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(D=t.R8UI),W===t.UNSIGNED_SHORT&&(D=t.R16UI),W===t.UNSIGNED_INT&&(D=t.R32UI),W===t.BYTE&&(D=t.R8I),W===t.SHORT&&(D=t.R16I),W===t.INT&&(D=t.R32I)),E===t.RG&&(W===t.FLOAT&&(D=t.RG32F),W===t.HALF_FLOAT&&(D=t.RG16F),W===t.UNSIGNED_BYTE&&(D=t.RG8)),E===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(D=t.RG8UI),W===t.UNSIGNED_SHORT&&(D=t.RG16UI),W===t.UNSIGNED_INT&&(D=t.RG32UI),W===t.BYTE&&(D=t.RG8I),W===t.SHORT&&(D=t.RG16I),W===t.INT&&(D=t.RG32I)),E===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(D=t.RGB8UI),W===t.UNSIGNED_SHORT&&(D=t.RGB16UI),W===t.UNSIGNED_INT&&(D=t.RGB32UI),W===t.BYTE&&(D=t.RGB8I),W===t.SHORT&&(D=t.RGB16I),W===t.INT&&(D=t.RGB32I)),E===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(D=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(D=t.RGBA16UI),W===t.UNSIGNED_INT&&(D=t.RGBA32UI),W===t.BYTE&&(D=t.RGBA8I),W===t.SHORT&&(D=t.RGBA16I),W===t.INT&&(D=t.RGBA32I)),E===t.RGB&&W===t.UNSIGNED_INT_5_9_9_9_REV&&(D=t.RGB9_E5),E===t.RGBA){const Z=ne?xu:$e.getTransfer(ee);W===t.FLOAT&&(D=t.RGBA32F),W===t.HALF_FLOAT&&(D=t.RGBA16F),W===t.UNSIGNED_BYTE&&(D=Z===rt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(D=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(D=t.RGB5_A1)}return(D===t.R16F||D===t.R32F||D===t.RG16F||D===t.RG32F||D===t.RGBA16F||D===t.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function y(b,E){let W;return b?E===null||E===Wr||E===$o?W=t.DEPTH24_STENCIL8:E===Mi?W=t.DEPTH32F_STENCIL8:E===na&&(W=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Wr||E===$o?W=t.DEPTH_COMPONENT24:E===Mi?W=t.DEPTH_COMPONENT32F:E===na&&(W=t.DEPTH_COMPONENT16),W}function P(b,E){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Yn&&b.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function M(b){const E=b.target;E.removeEventListener("dispose",M),I(E),E.isVideoTexture&&c.delete(E)}function R(b){const E=b.target;E.removeEventListener("dispose",R),S(E)}function I(b){const E=i.get(b);if(E.__webglInit===void 0)return;const W=b.source,ee=h.get(W);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&T(b),Object.keys(ee).length===0&&h.delete(W)}i.remove(b)}function T(b){const E=i.get(b);t.deleteTexture(E.__webglTexture);const W=b.source,ee=h.get(W);delete ee[E.__cacheKey],s.memory.textures--}function S(b){const E=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)t.deleteFramebuffer(E.__webglFramebuffer[ee]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=b.textures;for(let ee=0,ne=W.length;ee<ne;ee++){const D=i.get(W[ee]);D.__webglTexture&&(t.deleteTexture(D.__webglTexture),s.memory.textures--),i.remove(W[ee])}i.remove(b)}let C=0;function U(){C=0}function k(){const b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function V(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function O(b,E){const W=i.get(b);if(b.isVideoTexture&&be(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(W,b,E);return}}n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+E)}function G(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Y(W,b,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+E)}function X(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){Y(W,b,E);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+E)}function N(b,E){const W=i.get(b);if(b.version>0&&W.__version!==b.version){oe(W,b,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+E)}const $={[Wf]:t.REPEAT,[Nr]:t.CLAMP_TO_EDGE,[Xf]:t.MIRRORED_REPEAT},A={[Yn]:t.NEAREST,[OE]:t.NEAREST_MIPMAP_NEAREST,[ka]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Qu]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},le={[GE]:t.NEVER,[YE]:t.ALWAYS,[WE]:t.LESS,[A0]:t.LEQUAL,[XE]:t.EQUAL,[$E]:t.GEQUAL,[jE]:t.GREATER,[qE]:t.NOTEQUAL};function xe(b,E){if(E.type===Mi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===Qu||E.magFilter===ka||E.magFilter===Ur||E.minFilter===ri||E.minFilter===Qu||E.minFilter===ka||E.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,$[E.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,$[E.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,$[E.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,A[E.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,A[E.minFilter]),E.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,le[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yn||E.minFilter!==ka&&E.minFilter!==Ur||E.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function L(b,E){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",M));const ee=E.source;let ne=h.get(ee);ne===void 0&&(ne={},h.set(ee,ne));const D=V(E);if(D!==b.__cacheKey){ne[D]===void 0&&(ne[D]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ne[D].usedTimes++;const Z=ne[b.__cacheKey];Z!==void 0&&(ne[b.__cacheKey].usedTimes--,Z.usedTimes===0&&T(E)),b.__cacheKey=D,b.__webglTexture=ne[D].texture}return W}function Y(b,E,W){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=L(b,E),D=E.source;n.bindTexture(ee,b.__webglTexture,t.TEXTURE0+W);const Z=i.get(D);if(D.version!==Z.__version||ne===!0){n.activeTexture(t.TEXTURE0+W);const J=$e.getPrimaries($e.workingColorSpace),ie=E.colorSpace===Yi?null:$e.getPrimaries(E.colorSpace),Se=E.colorSpace===Yi||J===ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let re=x(E.image,!1,r.maxTextureSize);re=it(E,re);const pe=o.convert(E.format,E.colorSpace),Ee=o.convert(E.type);let Pe=v(E.internalFormat,pe,Ee,E.colorSpace,E.isVideoTexture);xe(ee,E);let _e;const Ie=E.mipmaps,De=E.isVideoTexture!==!0,Xe=Z.__version===void 0||ne===!0,F=D.dataReady,he=P(E,re);if(E.isDepthTexture)Pe=y(E.format===Yo,E.type),Xe&&(De?n.texStorage2D(t.TEXTURE_2D,1,Pe,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,Ee,null));else if(E.isDataTexture)if(Ie.length>0){De&&Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ie[0].width,Ie[0].height);for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],De?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,Q,Pe,_e.width,_e.height,0,pe,Ee,_e.data);E.generateMipmaps=!1}else De?(Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,re.width,re.height,pe,Ee,re.data)):n.texImage2D(t.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,Ee,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){De&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,Ie[0].width,Ie[0].height,re.depth);for(let Q=0,te=Ie.length;Q<te;Q++)if(_e=Ie[Q],E.format!==jn)if(pe!==null)if(De){if(F)if(E.layerUpdates.size>0){const ve=ag(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const Oe=_e.data.subarray(me*ve/_e.data.BYTES_PER_ELEMENT,(me+1)*ve/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,me,_e.width,_e.height,1,pe,Oe)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,re.depth,pe,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Pe,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,_e.width,_e.height,re.depth,pe,Ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Pe,_e.width,_e.height,re.depth,0,pe,Ee,_e.data)}else{De&&Xe&&n.texStorage2D(t.TEXTURE_2D,he,Pe,Ie[0].width,Ie[0].height);for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],E.format!==jn?pe!==null?De?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Pe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,_e.width,_e.height,pe,Ee,_e.data):n.texImage2D(t.TEXTURE_2D,Q,Pe,_e.width,_e.height,0,pe,Ee,_e.data)}else if(E.isDataArrayTexture)if(De){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,he,Pe,re.width,re.height,re.depth),F)if(E.layerUpdates.size>0){const Q=ag(re.width,re.height,E.format,E.type);for(const te of E.layerUpdates){const ve=re.data.subarray(te*Q/re.data.BYTES_PER_ELEMENT,(te+1)*Q/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,re.width,re.height,1,pe,Ee,ve)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,Ee,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,pe,Ee,re.data);else if(E.isData3DTexture)De?(Xe&&n.texStorage3D(t.TEXTURE_3D,he,Pe,re.width,re.height,re.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,Ee,re.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,pe,Ee,re.data);else if(E.isFramebufferTexture){if(Xe)if(De)n.texStorage2D(t.TEXTURE_2D,he,Pe,re.width,re.height);else{let Q=re.width,te=re.height;for(let ve=0;ve<he;ve++)n.texImage2D(t.TEXTURE_2D,ve,Pe,Q,te,0,pe,Ee,null),Q>>=1,te>>=1}}else if(Ie.length>0){if(De&&Xe){const Q=Re(Ie[0]);n.texStorage2D(t.TEXTURE_2D,he,Pe,Q.width,Q.height)}for(let Q=0,te=Ie.length;Q<te;Q++)_e=Ie[Q],De?F&&n.texSubImage2D(t.TEXTURE_2D,Q,0,0,pe,Ee,_e):n.texImage2D(t.TEXTURE_2D,Q,Pe,pe,Ee,_e);E.generateMipmaps=!1}else if(De){if(Xe){const Q=Re(re);n.texStorage2D(t.TEXTURE_2D,he,Pe,Q.width,Q.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ee,re)}else n.texImage2D(t.TEXTURE_2D,0,Pe,pe,Ee,re);m(E)&&f(ee),Z.__version=D.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function oe(b,E,W){if(E.image.length!==6)return;const ee=L(b,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+W);const D=i.get(ne);if(ne.version!==D.__version||ee===!0){n.activeTexture(t.TEXTURE0+W);const Z=$e.getPrimaries($e.workingColorSpace),J=E.colorSpace===Yi?null:$e.getPrimaries(E.colorSpace),ie=E.colorSpace===Yi||Z===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const Se=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,pe=[];for(let te=0;te<6;te++)!Se&&!re?pe[te]=x(E.image[te],!0,r.maxCubemapSize):pe[te]=re?E.image[te].image:E.image[te],pe[te]=it(E,pe[te]);const Ee=pe[0],Pe=o.convert(E.format,E.colorSpace),_e=o.convert(E.type),Ie=v(E.internalFormat,Pe,_e,E.colorSpace),De=E.isVideoTexture!==!0,Xe=D.__version===void 0||ee===!0,F=ne.dataReady;let he=P(E,Ee);xe(t.TEXTURE_CUBE_MAP,E);let Q;if(Se){De&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ie,Ee.width,Ee.height);for(let te=0;te<6;te++){Q=pe[te].mipmaps;for(let ve=0;ve<Q.length;ve++){const me=Q[ve];E.format!==jn?Pe!==null?De?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ie,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,0,0,me.width,me.height,Pe,_e,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve,Ie,me.width,me.height,0,Pe,_e,me.data)}}}else{if(Q=E.mipmaps,De&&Xe){Q.length>0&&he++;const te=Re(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,he,Ie,te.width,te.height)}for(let te=0;te<6;te++)if(re){De?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,pe[te].width,pe[te].height,Pe,_e,pe[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,pe[te].width,pe[te].height,0,Pe,_e,pe[te].data);for(let ve=0;ve<Q.length;ve++){const Oe=Q[ve].image[te].image;De?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Oe.width,Oe.height,Pe,_e,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ie,Oe.width,Oe.height,0,Pe,_e,Oe.data)}}else{De?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Pe,_e,pe[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ie,Pe,_e,pe[te]);for(let ve=0;ve<Q.length;ve++){const me=Q[ve];De?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,0,0,Pe,_e,me.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,ve+1,Ie,Pe,_e,me.image[te])}}}m(E)&&f(t.TEXTURE_CUBE_MAP),D.__version=ne.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ce(b,E,W,ee,ne,D){const Z=o.convert(W.format,W.colorSpace),J=o.convert(W.type),ie=v(W.internalFormat,Z,J,W.colorSpace),Se=i.get(E),re=i.get(W);if(re.__renderTarget=E,!Se.__hasExternalTextures){const pe=Math.max(1,E.width>>D),Ee=Math.max(1,E.height>>D);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,D,ie,pe,Ee,E.depth,0,Z,J,null):n.texImage2D(ne,D,ie,pe,Ee,0,Z,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,re.__webglTexture,0,Ve(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,re.__webglTexture,D),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(b,E,W){if(t.bindRenderbuffer(t.RENDERBUFFER,b),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,D=y(E.stencilBuffer,ne),Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=Ve(E);Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,D,E.width,E.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,J,D,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,D,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,b)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const D=ee[ne],Z=o.convert(D.format,D.colorSpace),J=o.convert(D.type),ie=v(D.internalFormat,Z,J,D.colorSpace),Se=Ve(E);W&&Ge(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ie,E.width,E.height):Ge(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Se,ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ae(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),O(E.depthTexture,0);const ne=ee.__webglTexture,D=Ve(E);if(E.depthTexture.format===No)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,D):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(E.depthTexture.format===Yo)Ge(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,D):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Le(b){const E=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const ee=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ee}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Ae(E.__webglFramebuffer,b)}else if(W){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[ee],b,!1);else{const ne=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,D=E.__webglDepthbuffer[ee];t.bindRenderbuffer(t.RENDERBUFFER,D),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,D)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,b,!1);else{const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(b,E,W){const ee=i.get(b);E!==void 0&&ce(ee.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Le(b)}function nt(b){const E=b.texture,W=i.get(b),ee=i.get(E);b.addEventListener("dispose",R);const ne=b.textures,D=b.isWebGLCubeRenderTarget===!0,Z=ne.length>1;if(Z||(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,s.memory.textures++),D){W.__webglFramebuffer=[];for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[J]=[];for(let ie=0;ie<E.mipmaps.length;ie++)W.__webglFramebuffer[J][ie]=t.createFramebuffer()}else W.__webglFramebuffer[J]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let J=0;J<E.mipmaps.length;J++)W.__webglFramebuffer[J]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Z)for(let J=0,ie=ne.length;J<ie;J++){const Se=i.get(ne[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Ge(b)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let J=0;J<ne.length;J++){const ie=ne[J];W.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[J]);const Se=o.convert(ie.format,ie.colorSpace),re=o.convert(ie.type),pe=v(ie.internalFormat,Se,re,ie.colorSpace,b.isXRRenderTarget===!0),Ee=Ve(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,pe,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,W.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(W.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(D){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),xe(t.TEXTURE_CUBE_MAP,E);for(let J=0;J<6;J++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)ce(W.__webglFramebuffer[J][ie],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ie);else ce(W.__webglFramebuffer[J],b,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(E)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Z){for(let J=0,ie=ne.length;J<ie;J++){const Se=ne[J],re=i.get(Se);n.bindTexture(t.TEXTURE_2D,re.__webglTexture),xe(t.TEXTURE_2D,Se),ce(W.__webglFramebuffer,b,Se,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D,0),m(Se)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,ee.__webglTexture),xe(J,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)ce(W.__webglFramebuffer[ie],b,E,t.COLOR_ATTACHMENT0,J,ie);else ce(W.__webglFramebuffer,b,E,t.COLOR_ATTACHMENT0,J,0);m(E)&&f(J),n.unbindTexture()}b.depthBuffer&&Le(b)}function je(b){const E=b.textures;for(let W=0,ee=E.length;W<ee;W++){const ne=E[W];if(m(ne)){const D=_(b),Z=i.get(ne).__webglTexture;n.bindTexture(D,Z),f(D),n.unbindTexture()}}}const gt=[],H=[];function qt(b){if(b.samples>0){if(Ge(b)===!1){const E=b.textures,W=b.width,ee=b.height;let ne=t.COLOR_BUFFER_BIT;const D=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=i.get(b),J=E.length>1;if(J)for(let ie=0;ie<E.length;ie++)n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let ie=0;ie<E.length;ie++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Z.__webglColorRenderbuffer[ie]);const Se=i.get(E[ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,W,ee,0,0,W,ee,ne,t.NEAREST),l===!0&&(gt.length=0,H.length=0,gt.push(t.COLOR_ATTACHMENT0+ie),b.depthBuffer&&b.resolveDepthBuffer===!1&&(gt.push(D),H.push(D),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,H)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let ie=0;ie<E.length;ie++){n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.RENDERBUFFER,Z.__webglColorRenderbuffer[ie]);const Se=i.get(E[ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ie,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const E=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Ve(b){return Math.min(r.maxSamples,b.samples)}function Ge(b){const E=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function be(b){const E=s.render.frame;c.get(b)!==E&&(c.set(b,E),b.update())}function it(b,E){const W=b.colorSpace,ee=b.format,ne=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==es&&W!==Yi&&($e.getTransfer(W)===rt?(ee!==jn||ne!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Re(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=O,this.setTexture2DArray=G,this.setTexture3D=X,this.setTextureCube=N,this.rebindTextures=Ue,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Ge}function eC(t,e){function n(i,r=Yi){let o;const s=$e.getTransfer(r);if(i===Li)return t.UNSIGNED_BYTE;if(i===Th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===v0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===g0)return t.BYTE;if(i===_0)return t.SHORT;if(i===na)return t.UNSIGNED_SHORT;if(i===wh)return t.INT;if(i===Wr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===ua)return t.HALF_FLOAT;if(i===x0)return t.ALPHA;if(i===y0)return t.RGB;if(i===jn)return t.RGBA;if(i===S0)return t.LUMINANCE;if(i===E0)return t.LUMINANCE_ALPHA;if(i===No)return t.DEPTH_COMPONENT;if(i===Yo)return t.DEPTH_STENCIL;if(i===M0)return t.RED;if(i===Ch)return t.RED_INTEGER;if(i===w0)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===bh)return t.RGBA_INTEGER;if(i===xl||i===yl||i===Sl||i===El)if(s===rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===xl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===El)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===xl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===El)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jf||i===qf||i===$f||i===Yf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===jf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Zf||i===Qf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Kf||i===Zf)return s===rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Qf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===od||i===sd||i===ad||i===ld||i===ud||i===cd||i===fd||i===dd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Jf)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ed)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===td)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===id)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===od)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ad)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ld)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ud)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dd)return s===rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ml||i===hd||i===pd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Ml)return s===rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===T0||i===md||i===gd||i===_d)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Ml)return o.COMPRESSED_RED_RGTC1_EXT;if(i===md)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gd)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_d)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tC extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class il extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nC={type:"move"};class Cc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new il,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new il,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new il,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),f=this._getHandJoint(u,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new il;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const iC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new cn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:iC,fragmentShader:rC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new oi(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sC extends ts{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,g=null;const x=new oC,m=n.getContextAttributes();let f=null,_=null;const v=[],y=[],P=new st;let M=null;const R=new Wn;R.viewport=new Mt;const I=new Wn;I.viewport=new Mt;const T=[R,I],S=new tC;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=v[Y];return oe===void 0&&(oe=new Cc,v[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=v[Y];return oe===void 0&&(oe=new Cc,v[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=v[Y];return oe===void 0&&(oe=new Cc,v[Y]=oe),oe.getHandSpace()};function k(Y){const oe=y.indexOf(Y.inputSource);if(oe===-1)return;const ce=v[oe];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,u||s),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",O);for(let Y=0;Y<v.length;Y++){const oe=y[Y];oe!==null&&(y[Y]=null,v[Y].disconnect(oe))}C=null,U=null,x.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,L.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Xr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ce=null,fe=null;m.depth&&(fe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=m.stencil?Yo:No,ce=m.stencil?$o:Wr);const Ae={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(Ae),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new Xr(h.textureWidth,h.textureHeight,{format:jn,type:Li,depthTexture:new H0(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),L.setContext(r),L.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Y){for(let oe=0;oe<Y.removed.length;oe++){const ce=Y.removed[oe],fe=y.indexOf(ce);fe>=0&&(y[fe]=null,v[fe].disconnect(ce))}for(let oe=0;oe<Y.added.length;oe++){const ce=Y.added[oe];let fe=y.indexOf(ce);if(fe===-1){for(let Le=0;Le<v.length;Le++)if(Le>=y.length){y.push(ce),fe=Le;break}else if(y[Le]===null){y[Le]=ce,fe=Le;break}if(fe===-1)break}const Ae=v[fe];Ae&&Ae.connect(ce)}}const G=new K,X=new K;function N(Y,oe,ce){G.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const fe=G.distanceTo(X),Ae=oe.projectionMatrix.elements,Le=ce.projectionMatrix.elements,Ue=Ae[14]/(Ae[10]-1),nt=Ae[14]/(Ae[10]+1),je=(Ae[9]+1)/Ae[5],gt=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],qt=(Le[8]+1)/Le[0],Ve=Ue*H,Ge=Ue*qt,be=fe/(-H+qt),it=be*-H;if(oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(it),Y.translateZ(be),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ae[10]===-1)Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Re=Ue+be,b=nt+be,E=Ve-it,W=Ge+(fe-it),ee=je*nt/b*Re,ne=gt*nt/b*Re;Y.projectionMatrix.makePerspective(E,W,ee,ne,Re,b),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let oe=Y.near,ce=Y.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ce=x.depthFar)),S.near=I.near=R.near=oe,S.far=I.far=R.far=ce,(C!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,U=S.far),R.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,S.layers.mask=R.layers.mask|I.layers.mask;const fe=Y.parent,Ae=S.cameras;$(S,fe);for(let Le=0;Le<Ae.length;Le++)$(Ae[Le],fe);Ae.length===2?N(S,R,I):S.projectionMatrix.copy(R.projectionMatrix),A(Y,S,fe)};function A(Y,oe,ce){ce===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=vd*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let le=null;function xe(Y,oe){if(c=oe.getViewerPose(u||s),g=oe,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let fe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,fe=!0);for(let Le=0;Le<ce.length;Le++){const Ue=ce[Le];let nt=null;if(p!==null)nt=p.getViewport(Ue);else{const gt=d.getViewSubImage(h,Ue);nt=gt.viewport,Le===0&&(e.setRenderTargetTextures(_,gt.colorTexture,h.ignoreDepthValues?void 0:gt.depthStencilTexture),e.setRenderTarget(_))}let je=T[Le];je===void 0&&(je=new Wn,je.layers.enable(Le),je.viewport=new Mt,T[Le]=je),je.matrix.fromArray(Ue.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(Ue.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(nt.x,nt.y,nt.width,nt.height),Le===0&&(S.matrix.copy(je.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),fe===!0&&S.cameras.push(je)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Le=d.getDepthInformation(ce[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,r.renderState)}}for(let ce=0;ce<v.length;ce++){const fe=y[ce],Ae=v[ce];fe!==null&&Ae!==void 0&&Ae.update(fe,oe,u||s)}le&&le(Y,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}const L=new z0;L.setAnimationLoop(xe),this.setAnimationLoop=function(Y){le=Y},this.dispose=function(){}}}const Sr=new Ii,aC=new Ct;function lC(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,U0(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),c(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===un&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===un&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),v=_.envMap,y=_.envMapRotation;v&&(m.envMap.value=v,Sr.copy(y),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),m.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(Sr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===un&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uC(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(g(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const P=v.program;i.updateUBOMapping(_,P);const M=e.render.frame;o[_.id]!==M&&(h(_),o[_.id]=M)}function c(_){const v=d();_.__bindingPointIndex=v;const y=t.createBuffer(),P=_.__size,M=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function d(){for(let _=0;_<a;_++)if(s.indexOf(_)===-1)return s.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let M=0,R=y.length;M<R;M++){const I=Array.isArray(y[M])?y[M]:[y[M]];for(let T=0,S=I.length;T<S;T++){const C=I[T];if(p(C,M,T,P)===!0){const U=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let O=0;O<k.length;O++){const G=k[O],X=x(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,U+V,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,V),V+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,v,y,P){const M=_.value,R=v+"_"+y;if(P[R]===void 0)return typeof M=="number"||typeof M=="boolean"?P[R]=M:P[R]=M.clone(),!0;{const I=P[R];if(typeof M=="number"||typeof M=="boolean"){if(I!==M)return P[R]=M,!0}else if(I.equals(M)===!1)return I.copy(M),!0}return!1}function g(_){const v=_.uniforms;let y=0;const P=16;for(let R=0,I=v.length;R<I;R++){const T=Array.isArray(v[R])?v[R]:[v[R]];for(let S=0,C=T.length;S<C;S++){const U=T[S],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,O=k.length;V<O;V++){const G=k[V],X=x(G),N=y%P,$=N%X.boundary,A=N+$;y+=$,A!==0&&P-A<X.storage&&(y+=P-A),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=X.storage}}}const M=y%P;return M>0&&(y+=P-M),_.__size=y,_.__cache={},this}function x(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function m(_){const v=_.target;v.removeEventListener("dispose",m);const y=s.indexOf(v.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete o[v.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);s=[],r={},o={}}return{bind:l,update:u,dispose:f}}class cC{constructor(e={}){const{canvas:n=ZE(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const _=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=An,this.toneMapping=ar,this.toneMappingExposure=1;const y=this;let P=!1,M=0,R=0,I=null,T=-1,S=null;const C=new Mt,U=new Mt;let k=null;const V=new ot(0);let O=0,G=n.width,X=n.height,N=1,$=null,A=null;const le=new Mt(0,0,G,X),xe=new Mt(0,0,G,X);let L=!1;const Y=new O0;let oe=!1,ce=!1;const fe=new Ct,Ae=new Ct,Le=new K,Ue=new Mt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function gt(){return I===null?N:1}let H=i;function qt(w,z){return n.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mh}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),H===null){const z="webgl2";if(H=qt(z,w),H===null)throw qt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Ge,be,it,Re,b,E,W,ee,ne,D,Z,J,ie,Se,re,pe,Ee,Pe,_e,Ie,De,Xe,F;function he(){Ve=new mT(H),Ve.init(),De=new eC(H,Ve),Ge=new uT(H,Ve,e,De),be=new ZA(H,Ve),Ge.reverseDepthBuffer&&h&&be.buffers.depth.setReversed(!0),it=new vT(H),Re=new kA,b=new JA(H,Ve,be,Re,Ge,De,it),E=new fT(y),W=new pT(y),ee=new TM(H),Xe=new aT(H,ee),ne=new gT(H,ee,it,Xe),D=new yT(H,ne,ee,it),Pe=new xT(H,Ge,b),re=new cT(Re),Z=new UA(y,E,W,Ve,Ge,Xe,re),J=new lC(y,Re),ie=new OA,Se=new WA(Ve),Ee=new sT(y,E,W,be,D,p,l),pe=new YA(y,D,Ge),F=new uC(H,it,Ge,be),_e=new lT(H,Ve,it),Ie=new _T(H,Ve,it),it.programs=Z.programs,y.capabilities=Ge,y.extensions=Ve,y.properties=Re,y.renderLists=ie,y.shadowMap=pe,y.state=be,y.info=it}he();const Q=new sC(y,H);this.xr=Q,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(w){w!==void 0&&(N=w,this.setSize(G,X,!1))},this.getSize=function(w){return w.set(G,X)},this.setSize=function(w,z,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,X=z,n.width=Math.floor(w*N),n.height=Math.floor(z*N),j===!0&&(n.style.width=w+"px",n.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(G*N,X*N).floor()},this.setDrawingBufferSize=function(w,z,j){G=w,X=z,N=j,n.width=Math.floor(w*j),n.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,z,j,q){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,z,j,q),be.viewport(C.copy(le).multiplyScalar(N).round())},this.getScissor=function(w){return w.copy(xe)},this.setScissor=function(w,z,j,q){w.isVector4?xe.set(w.x,w.y,w.z,w.w):xe.set(w,z,j,q),be.scissor(U.copy(xe).multiplyScalar(N).round())},this.getScissorTest=function(){return L},this.setScissorTest=function(w){be.setScissorTest(L=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){A=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(w=!0,z=!0,j=!0){let q=0;if(w){let B=!1;if(I!==null){const ue=I.texture.format;B=ue===bh||ue===Rh||ue===Ch}if(B){const ue=I.texture.type,ge=ue===Li||ue===Wr||ue===na||ue===$o||ue===Th||ue===Ah,Me=Ee.getClearColor(),we=Ee.getClearAlpha(),ke=Me.r,ze=Me.g,Te=Me.b;ge?(g[0]=ke,g[1]=ze,g[2]=Te,g[3]=we,H.clearBufferuiv(H.COLOR,0,g)):(x[0]=ke,x[1]=ze,x[2]=Te,x[3]=we,H.clearBufferiv(H.COLOR,0,x))}else q|=H.COLOR_BUFFER_BIT}z&&(q|=H.DEPTH_BUFFER_BIT),j&&(q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ie.dispose(),Se.dispose(),Re.dispose(),E.dispose(),W.dispose(),D.dispose(),Xe.dispose(),F.dispose(),Z.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",jh),Q.removeEventListener("sessionend",qh),mr.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=it.autoReset,z=pe.enabled,j=pe.autoUpdate,q=pe.needsUpdate,B=pe.type;he(),it.autoReset=w,pe.enabled=z,pe.autoUpdate=j,pe.needsUpdate=q,pe.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const z=w.target;z.removeEventListener("dispose",Oe),yt(z)}function yt(w){zt(w),Re.remove(w)}function zt(w){const z=Re.get(w).programs;z!==void 0&&(z.forEach(function(j){Z.releaseProgram(j)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,q,B,ue){z===null&&(z=nt);const ge=B.isMesh&&B.matrixWorld.determinant()<0,Me=Px(w,z,j,q,B);be.setMaterial(q,ge);let we=j.index,ke=1;if(q.wireframe===!0){if(we=ne.getWireframeAttribute(j),we===void 0)return;ke=2}const ze=j.drawRange,Te=j.attributes.position;let Ke=ze.start*ke,at=(ze.start+ze.count)*ke;ue!==null&&(Ke=Math.max(Ke,ue.start*ke),at=Math.min(at,(ue.start+ue.count)*ke)),we!==null?(Ke=Math.max(Ke,0),at=Math.min(at,we.count)):Te!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Te.count));const ft=at-Ke;if(ft<0||ft===1/0)return;Xe.setup(B,q,Me,j,we);let Jt,Qe=_e;if(we!==null&&(Jt=ee.get(we),Qe=Ie,Qe.setIndex(Jt)),B.isMesh)q.wireframe===!0?(be.setLineWidth(q.wireframeLinewidth*gt()),Qe.setMode(H.LINES)):Qe.setMode(H.TRIANGLES);else if(B.isLine){let Ce=q.linewidth;Ce===void 0&&(Ce=1),be.setLineWidth(Ce*gt()),B.isLineSegments?Qe.setMode(H.LINES):B.isLineLoop?Qe.setMode(H.LINE_LOOP):Qe.setMode(H.LINE_STRIP)}else B.isPoints?Qe.setMode(H.POINTS):B.isSprite&&Qe.setMode(H.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Qe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,fi=B._multiDrawCounts,Je=B._multiDrawCount,kn=we?ee.get(we).bytesPerElement:1,Kr=Re.get(q).currentProgram.getUniforms();for(let dn=0;dn<Je;dn++)Kr.setValue(H,"_gl_DrawID",dn),Qe.render(Ce[dn]/kn,fi[dn])}else if(B.isInstancedMesh)Qe.renderInstances(Ke,ft,B.count);else if(j.isInstancedBufferGeometry){const Ce=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,fi=Math.min(j.instanceCount,Ce);Qe.renderInstances(Ke,ft,fi)}else Qe.render(Ke,ft)};function et(w,z,j){w.transparent===!0&&w.side===yi&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,va(w,z,j),w.side=cr,w.needsUpdate=!0,va(w,z,j),w.side=yi):va(w,z,j)}this.compile=function(w,z,j=null){j===null&&(j=w),f=Se.get(j),f.init(z),v.push(f),j.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const q=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Me=ue[ge];et(Me,j,B),q.add(Me)}else et(ue,j,B),q.add(ue)}),v.pop(),f=null,q},this.compileAsync=function(w,z,j=null){const q=this.compile(w,z,j);return new Promise(B=>{function ue(){if(q.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){B(w);return}setTimeout(ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Un=null;function ci(w){Un&&Un(w)}function jh(){mr.stop()}function qh(){mr.start()}const mr=new z0;mr.setAnimationLoop(ci),typeof self<"u"&&mr.setContext(self),this.setAnimationLoop=function(w){Un=w,Q.setAnimationLoop(w),w===null?mr.stop():mr.start()},Q.addEventListener("sessionstart",jh),Q.addEventListener("sessionend",qh),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(z),z=Q.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,I),f=Se.get(w,v.length),f.init(z),v.push(f),Ae.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Y.setFromProjectionMatrix(Ae),ce=this.localClippingEnabled,oe=re.init(this.clippingPlanes,ce),m=ie.get(w,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Tu(ue,z,-1/0,y.sortObjects)}Tu(w,z,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort($,A),je=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,je&&Ee.addToRenderList(m,w),this.info.render.frame++,oe===!0&&re.beginShadows();const j=f.state.shadowsArray;pe.render(j,w,z),oe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(f.setupLights(),z.isArrayCamera){const ue=z.cameras;if(B.length>0)for(let ge=0,Me=ue.length;ge<Me;ge++){const we=ue[ge];Yh(q,B,w,we)}je&&Ee.render(w);for(let ge=0,Me=ue.length;ge<Me;ge++){const we=ue[ge];$h(m,w,we,we.viewport)}}else B.length>0&&Yh(q,B,w,z),je&&Ee.render(w),$h(m,w,z);I!==null&&(b.updateMultisampleRenderTarget(I),b.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(y,w,z),Xe.resetDefaultState(),T=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],oe===!0&&re.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Tu(w,z,j,q){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){q&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ae);const ge=D.update(w),Me=w.material;Me.visible&&m.push(w,ge,Me,j,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ge=D.update(w),Me=w.material;if(q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Ue.copy(ge.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const we=ge.groups;for(let ke=0,ze=we.length;ke<ze;ke++){const Te=we[ke],Ke=Me[Te.materialIndex];Ke&&Ke.visible&&m.push(w,ge,Ke,j,Ue.z,Te)}}else Me.visible&&m.push(w,ge,Me,j,Ue.z,null)}}const ue=w.children;for(let ge=0,Me=ue.length;ge<Me;ge++)Tu(ue[ge],z,j,q)}function $h(w,z,j,q){const B=w.opaque,ue=w.transmissive,ge=w.transparent;f.setupLightsView(j),oe===!0&&re.setGlobalState(y.clippingPlanes,j),q&&be.viewport(C.copy(q)),B.length>0&&_a(B,z,j),ue.length>0&&_a(ue,z,j),ge.length>0&&_a(ge,z,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function Yh(w,z,j,q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[q.id]===void 0&&(f.state.transmissionRenderTarget[q.id]=new Xr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?ua:Li,minFilter:Ur,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ue=f.state.transmissionRenderTarget[q.id],ge=q.viewport||C;ue.setSize(ge.z,ge.w);const Me=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(V),O=y.getClearAlpha(),O<1&&y.setClearColor(16777215,.5),y.clear(),je&&Ee.render(j);const we=y.toneMapping;y.toneMapping=ar;const ke=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),f.setupLightsView(q),oe===!0&&re.setGlobalState(y.clippingPlanes,q),_a(w,j,q),b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Te=0,Ke=z.length;Te<Ke;Te++){const at=z[Te],ft=at.object,Jt=at.geometry,Qe=at.material,Ce=at.group;if(Qe.side===yi&&ft.layers.test(q.layers)){const fi=Qe.side;Qe.side=un,Qe.needsUpdate=!0,Kh(ft,j,q,Jt,Qe,Ce),Qe.side=fi,Qe.needsUpdate=!0,ze=!0}}ze===!0&&(b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue))}y.setRenderTarget(Me),y.setClearColor(V,O),ke!==void 0&&(q.viewport=ke),y.toneMapping=we}function _a(w,z,j){const q=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ue=w.length;B<ue;B++){const ge=w[B],Me=ge.object,we=ge.geometry,ke=q===null?ge.material:q,ze=ge.group;Me.layers.test(j.layers)&&Kh(Me,z,j,we,ke,ze)}}function Kh(w,z,j,q,B,ue){w.onBeforeRender(y,z,j,q,B,ue),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(y,z,j,q,w,ue),B.transparent===!0&&B.side===yi&&B.forceSinglePass===!1?(B.side=un,B.needsUpdate=!0,y.renderBufferDirect(j,z,q,B,w,ue),B.side=cr,B.needsUpdate=!0,y.renderBufferDirect(j,z,q,B,w,ue),B.side=yi):y.renderBufferDirect(j,z,q,B,w,ue),w.onAfterRender(y,z,j,q,B,ue)}function va(w,z,j){z.isScene!==!0&&(z=nt);const q=Re.get(w),B=f.state.lights,ue=f.state.shadowsArray,ge=B.state.version,Me=Z.getParameters(w,B.state,ue,z,j),we=Z.getProgramCacheKey(Me);let ke=q.programs;q.environment=w.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(w.isMeshStandardMaterial?W:E).get(w.envMap||q.environment),q.envMapRotation=q.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ke===void 0&&(w.addEventListener("dispose",Oe),ke=new Map,q.programs=ke);let ze=ke.get(we);if(ze!==void 0){if(q.currentProgram===ze&&q.lightsStateVersion===ge)return Qh(w,Me),ze}else Me.uniforms=Z.getUniforms(w),w.onBeforeCompile(Me,y),ze=Z.acquireProgram(Me,we),ke.set(we,ze),q.uniforms=Me.uniforms;const Te=q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Te.clippingPlanes=re.uniform),Qh(w,Me),q.needsLights=Ix(w),q.lightsStateVersion=ge,q.needsLights&&(Te.ambientLightColor.value=B.state.ambient,Te.lightProbe.value=B.state.probe,Te.directionalLights.value=B.state.directional,Te.directionalLightShadows.value=B.state.directionalShadow,Te.spotLights.value=B.state.spot,Te.spotLightShadows.value=B.state.spotShadow,Te.rectAreaLights.value=B.state.rectArea,Te.ltc_1.value=B.state.rectAreaLTC1,Te.ltc_2.value=B.state.rectAreaLTC2,Te.pointLights.value=B.state.point,Te.pointLightShadows.value=B.state.pointShadow,Te.hemisphereLights.value=B.state.hemi,Te.directionalShadowMap.value=B.state.directionalShadowMap,Te.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Te.spotShadowMap.value=B.state.spotShadowMap,Te.spotLightMatrix.value=B.state.spotLightMatrix,Te.spotLightMap.value=B.state.spotLightMap,Te.pointShadowMap.value=B.state.pointShadowMap,Te.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=ze,q.uniformsList=null,ze}function Zh(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=wl.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Qh(w,z){const j=Re.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Px(w,z,j,q,B){z.isScene!==!0&&(z=nt),b.resetTextureUnits();const ue=z.fog,ge=q.isMeshStandardMaterial?z.environment:null,Me=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:es,we=(q.isMeshStandardMaterial?W:E).get(q.envMap||ge),ke=q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!j.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Te=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,at=!!j.morphAttributes.color;let ft=ar;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ft=y.toneMapping);const Jt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=Jt!==void 0?Jt.length:0,Ce=Re.get(q),fi=f.state.lights;if(oe===!0&&(ce===!0||w!==S)){const wn=w===S&&q.id===T;re.setState(q,w,wn)}let Je=!1;q.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==fi.state.version||Ce.outputColorSpace!==Me||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==we||q.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==re.numPlanes||Ce.numIntersection!==re.numIntersection)||Ce.vertexAlphas!==ke||Ce.vertexTangents!==ze||Ce.morphTargets!==Te||Ce.morphNormals!==Ke||Ce.morphColors!==at||Ce.toneMapping!==ft||Ce.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ce.__version=q.version);let kn=Ce.currentProgram;Je===!0&&(kn=va(q,z,B));let Kr=!1,dn=!1,os=!1;const dt=kn.getUniforms(),Zn=Ce.uniforms;if(be.useProgram(kn.program)&&(Kr=!0,dn=!0,os=!0),q.id!==T&&(T=q.id,dn=!0),Kr||S!==w){be.buffers.depth.getReversed()?(fe.copy(w.projectionMatrix),JE(fe),eM(fe),dt.setValue(H,"projectionMatrix",fe)):dt.setValue(H,"projectionMatrix",w.projectionMatrix),dt.setValue(H,"viewMatrix",w.matrixWorldInverse);const Ui=dt.map.cameraPosition;Ui!==void 0&&Ui.setValue(H,Le.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&dt.setValue(H,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&dt.setValue(H,"isOrthographic",w.isOrthographicCamera===!0),S!==w&&(S=w,dn=!0,os=!0)}if(B.isSkinnedMesh){dt.setOptional(H,B,"bindMatrix"),dt.setOptional(H,B,"bindMatrixInverse");const wn=B.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),dt.setValue(H,"boneTexture",wn.boneTexture,b))}B.isBatchedMesh&&(dt.setOptional(H,B,"batchingTexture"),dt.setValue(H,"batchingTexture",B._matricesTexture,b),dt.setOptional(H,B,"batchingIdTexture"),dt.setValue(H,"batchingIdTexture",B._indirectTexture,b),dt.setOptional(H,B,"batchingColorTexture"),B._colorsTexture!==null&&dt.setValue(H,"batchingColorTexture",B._colorsTexture,b));const ss=j.morphAttributes;if((ss.position!==void 0||ss.normal!==void 0||ss.color!==void 0)&&Pe.update(B,j,kn),(dn||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,dt.setValue(H,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Zn.envMap.value=we,Zn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(Zn.envMapIntensity.value=z.environmentIntensity),dn&&(dt.setValue(H,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&Lx(Zn,os),ue&&q.fog===!0&&J.refreshFogUniforms(Zn,ue),J.refreshMaterialUniforms(Zn,q,N,X,f.state.transmissionRenderTarget[w.id]),wl.upload(H,Zh(Ce),Zn,b)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(wl.upload(H,Zh(Ce),Zn,b),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&dt.setValue(H,"center",B.center),dt.setValue(H,"modelViewMatrix",B.modelViewMatrix),dt.setValue(H,"normalMatrix",B.normalMatrix),dt.setValue(H,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const wn=q.uniformsGroups;for(let Ui=0,ki=wn.length;Ui<ki;Ui++){const Jh=wn[Ui];F.update(Jh,kn),F.bind(Jh,kn)}}return kn}function Lx(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Ix(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,z,j){Re.get(w.texture).__webglTexture=z,Re.get(w.depthTexture).__webglTexture=j;const q=Re.get(w);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=j===void 0,q.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const j=Re.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){I=w,M=z,R=j;let q=!0,B=null,ue=!1,ge=!1;if(w){const we=Re.get(w);if(we.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(H.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)b.setupRenderTarget(w);else if(we.__hasExternalTextures)b.rebindTextures(w,Re.get(w.texture).__webglTexture,Re.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Te=w.depthTexture;if(we.__boundDepthTexture!==Te){if(Te!==null&&Re.has(Te)&&(w.width!==Te.image.width||w.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ge=!0);const ze=Re.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?B=ze[z][j]:B=ze[z],ue=!0):w.samples>0&&b.useMultisampledRTT(w)===!1?B=Re.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?B=ze[j]:B=ze,C.copy(w.viewport),U.copy(w.scissor),k=w.scissorTest}else C.copy(le).multiplyScalar(N).floor(),U.copy(xe).multiplyScalar(N).floor(),k=L;if(be.bindFramebuffer(H.FRAMEBUFFER,B)&&q&&be.drawBuffers(w,B),be.viewport(C),be.scissor(U),be.setScissorTest(k),ue){const we=Re.get(w.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,j)}else if(ge){const we=Re.get(w.texture),ke=z||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,we.__webglTexture,j||0,ke)}T=-1},this.readRenderTargetPixels=function(w,z,j,q,B,ue,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){be.bindFramebuffer(H.FRAMEBUFFER,Me);try{const we=w.texture,ke=we.format,ze=we.type;if(!Ge.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-q&&j>=0&&j<=w.height-B&&H.readPixels(z,j,q,B,De.convert(ke),De.convert(ze),ue)}finally{const we=I!==null?Re.get(I).__webglFramebuffer:null;be.bindFramebuffer(H.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,q,B,ue,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Re.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Me=Me[ge]),Me){const we=w.texture,ke=we.format,ze=we.type;if(!Ge.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-q&&j>=0&&j<=w.height-B){be.bindFramebuffer(H.FRAMEBUFFER,Me);const Te=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.bufferData(H.PIXEL_PACK_BUFFER,ue.byteLength,H.STREAM_READ),H.readPixels(z,j,q,B,De.convert(ke),De.convert(ze),0);const Ke=I!==null?Re.get(I).__webglFramebuffer:null;be.bindFramebuffer(H.FRAMEBUFFER,Ke);const at=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await QE(H,at,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Te),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,ue),H.deleteBuffer(Te),H.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,j=0){w.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const q=Math.pow(2,-j),B=Math.floor(w.image.width*q),ue=Math.floor(w.image.height*q),ge=z!==null?z.x:0,Me=z!==null?z.y:0;b.setTexture2D(w,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,ge,Me,B,ue),be.unbindTexture()},this.copyTextureToTexture=function(w,z,j=null,q=null,B=0){w.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1],z=arguments[2],B=arguments[3]||0,j=null);let ue,ge,Me,we,ke,ze,Te,Ke,at;const ft=w.isCompressedTexture?w.mipmaps[B]:w.image;j!==null?(ue=j.max.x-j.min.x,ge=j.max.y-j.min.y,Me=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,ke=j.min.y,ze=j.isBox3?j.min.z:0):(ue=ft.width,ge=ft.height,Me=ft.depth||1,we=0,ke=0,ze=0),q!==null?(Te=q.x,Ke=q.y,at=q.z):(Te=0,Ke=0,at=0);const Jt=De.convert(z.format),Qe=De.convert(z.type);let Ce;z.isData3DTexture?(b.setTexture3D(z,0),Ce=H.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(b.setTexture2DArray(z,0),Ce=H.TEXTURE_2D_ARRAY):(b.setTexture2D(z,0),Ce=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment);const fi=H.getParameter(H.UNPACK_ROW_LENGTH),Je=H.getParameter(H.UNPACK_IMAGE_HEIGHT),kn=H.getParameter(H.UNPACK_SKIP_PIXELS),Kr=H.getParameter(H.UNPACK_SKIP_ROWS),dn=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,we),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ze);const os=w.isDataArrayTexture||w.isData3DTexture,dt=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const Zn=Re.get(w),ss=Re.get(z),wn=Re.get(Zn.__renderTarget),Ui=Re.get(ss.__renderTarget);be.bindFramebuffer(H.READ_FRAMEBUFFER,wn.__webglFramebuffer),be.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let ki=0;ki<Me;ki++)os&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.get(w).__webglTexture,B,ze+ki),w.isDepthTexture?(dt&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Re.get(z).__webglTexture,B,at+ki),H.blitFramebuffer(we,ke,ue,ge,Te,Ke,ue,ge,H.DEPTH_BUFFER_BIT,H.NEAREST)):dt?H.copyTexSubImage3D(Ce,B,Te,Ke,at+ki,we,ke,ue,ge):H.copyTexSubImage2D(Ce,B,Te,Ke,at+ki,we,ke,ue,ge);be.bindFramebuffer(H.READ_FRAMEBUFFER,null),be.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else dt?w.isDataTexture||w.isData3DTexture?H.texSubImage3D(Ce,B,Te,Ke,at,ue,ge,Me,Jt,Qe,ft.data):z.isCompressedArrayTexture?H.compressedTexSubImage3D(Ce,B,Te,Ke,at,ue,ge,Me,Jt,ft.data):H.texSubImage3D(Ce,B,Te,Ke,at,ue,ge,Me,Jt,Qe,ft):w.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,B,Te,Ke,ue,ge,Jt,Qe,ft.data):w.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,B,Te,Ke,ft.width,ft.height,Jt,ft.data):H.texSubImage2D(H.TEXTURE_2D,B,Te,Ke,ue,ge,Jt,Qe,ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,fi),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Je),H.pixelStorei(H.UNPACK_SKIP_PIXELS,kn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Kr),H.pixelStorei(H.UNPACK_SKIP_IMAGES,dn),B===0&&z.generateMipmaps&&H.generateMipmap(Ce),be.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j=null,q=null,B=0){return w.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,q=arguments[1]||null,w=arguments[2],z=arguments[3],B=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,j,q,B)},this.initRenderTarget=function(w){Re.get(w).__webglFramebuffer===void 0&&b.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?b.setTextureCube(w,0):w.isData3DTexture?b.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?b.setTexture2DArray(w,0):b.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){M=0,R=0,I=null,be.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}class fC extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mh);const dC=t=>{const e=t.parentElement,n=new fC,i=new B0(-1,1,1,-1,0,1),r=new cC({canvas:t,alpha:!0});function o(){const c=e.clientWidth,d=e.clientHeight;r.setSize(c,d)}window.addEventListener("resize",o),o();const s=new Di({uniforms:{time:{value:0},resolution:{value:new st(e.clientWidth,e.clientHeight)}},vertexShader:`
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
    `}),a=new pa(2,2),l=new oi(a,s);n.add(l);function u(c){requestAnimationFrame(u),s.uniforms.time.value=c*.001,r.render(n,i)}return u(),()=>{window.removeEventListener("resize",o),r.dispose(),a.dispose(),s.dispose()}};function hC(t,e){const n={};return(t[t.length-1]===""?[...t,""]:t).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const pC=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,mC=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,gC={};function lg(t,e){return(gC.jsx?mC:pC).test(t)}const _C=/[ \t\n\f\r]/g;function vC(t){return typeof t=="object"?t.type==="text"?ug(t.value):!1:ug(t)}function ug(t){return t.replace(_C,"")===""}class ma{constructor(e,n,i){this.property=e,this.normal=n,i&&(this.space=i)}}ma.prototype.property={};ma.prototype.normal={};ma.prototype.space=null;function j0(t,e){const n={},i={};let r=-1;for(;++r<t.length;)Object.assign(n,t[r].property),Object.assign(i,t[r].normal);return new ma(n,i,e)}function yd(t){return t.toLowerCase()}class Nn{constructor(e,n){this.property=e,this.attribute=n}}Nn.prototype.space=null;Nn.prototype.boolean=!1;Nn.prototype.booleanish=!1;Nn.prototype.overloadedBoolean=!1;Nn.prototype.number=!1;Nn.prototype.commaSeparated=!1;Nn.prototype.spaceSeparated=!1;Nn.prototype.commaOrSpaceSeparated=!1;Nn.prototype.mustUseProperty=!1;Nn.prototype.defined=!1;let xC=0;const Fe=Yr(),Tt=Yr(),q0=Yr(),ae=Yr(),lt=Yr(),ko=Yr(),mn=Yr();function Yr(){return 2**++xC}const Sd=Object.freeze(Object.defineProperty({__proto__:null,boolean:Fe,booleanish:Tt,commaOrSpaceSeparated:mn,commaSeparated:ko,number:ae,overloadedBoolean:q0,spaceSeparated:lt},Symbol.toStringTag,{value:"Module"})),Rc=Object.keys(Sd);class Ih extends Nn{constructor(e,n,i,r){let o=-1;if(super(e,n),cg(this,"space",r),typeof i=="number")for(;++o<Rc.length;){const s=Rc[o];cg(this,Rc[o],(i&Sd[s])===Sd[s])}}}Ih.prototype.defined=!0;function cg(t,e,n){n&&(t[e]=n)}const yC={}.hasOwnProperty;function is(t){const e={},n={};let i;for(i in t.properties)if(yC.call(t.properties,i)){const r=t.properties[i],o=new Ih(i,t.transform(t.attributes||{},i),r,t.space);t.mustUseProperty&&t.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),e[i]=o,n[yd(i)]=i,n[yd(o.attribute)]=i}return new ma(e,n,t.space)}const $0=is({space:"xlink",transform(t,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),Y0=is({space:"xml",transform(t,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function K0(t,e){return e in t?t[e]:e}function Z0(t,e){return K0(t,e.toLowerCase())}const Q0=is({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:Z0,properties:{xmlns:null,xmlnsXLink:null}}),J0=is({transform(t,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:Tt,ariaAutoComplete:null,ariaBusy:Tt,ariaChecked:Tt,ariaColCount:ae,ariaColIndex:ae,ariaColSpan:ae,ariaControls:lt,ariaCurrent:null,ariaDescribedBy:lt,ariaDetails:null,ariaDisabled:Tt,ariaDropEffect:lt,ariaErrorMessage:null,ariaExpanded:Tt,ariaFlowTo:lt,ariaGrabbed:Tt,ariaHasPopup:null,ariaHidden:Tt,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:lt,ariaLevel:ae,ariaLive:null,ariaModal:Tt,ariaMultiLine:Tt,ariaMultiSelectable:Tt,ariaOrientation:null,ariaOwns:lt,ariaPlaceholder:null,ariaPosInSet:ae,ariaPressed:Tt,ariaReadOnly:Tt,ariaRelevant:null,ariaRequired:Tt,ariaRoleDescription:lt,ariaRowCount:ae,ariaRowIndex:ae,ariaRowSpan:ae,ariaSelected:Tt,ariaSetSize:ae,ariaSort:null,ariaValueMax:ae,ariaValueMin:ae,ariaValueNow:ae,ariaValueText:null,role:null}}),SC=is({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:Z0,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:ko,acceptCharset:lt,accessKey:lt,action:null,allow:null,allowFullScreen:Fe,allowPaymentRequest:Fe,allowUserMedia:Fe,alt:null,as:null,async:Fe,autoCapitalize:null,autoComplete:lt,autoFocus:Fe,autoPlay:Fe,blocking:lt,capture:null,charSet:null,checked:Fe,cite:null,className:lt,cols:ae,colSpan:null,content:null,contentEditable:Tt,controls:Fe,controlsList:lt,coords:ae|ko,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Fe,defer:Fe,dir:null,dirName:null,disabled:Fe,download:q0,draggable:Tt,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Fe,formTarget:null,headers:lt,height:ae,hidden:Fe,high:ae,href:null,hrefLang:null,htmlFor:lt,httpEquiv:lt,id:null,imageSizes:null,imageSrcSet:null,inert:Fe,inputMode:null,integrity:null,is:null,isMap:Fe,itemId:null,itemProp:lt,itemRef:lt,itemScope:Fe,itemType:lt,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Fe,low:ae,manifest:null,max:null,maxLength:ae,media:null,method:null,min:null,minLength:ae,multiple:Fe,muted:Fe,name:null,nonce:null,noModule:Fe,noValidate:Fe,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Fe,optimum:ae,pattern:null,ping:lt,placeholder:null,playsInline:Fe,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Fe,referrerPolicy:null,rel:lt,required:Fe,reversed:Fe,rows:ae,rowSpan:ae,sandbox:lt,scope:null,scoped:Fe,seamless:Fe,selected:Fe,shadowRootClonable:Fe,shadowRootDelegatesFocus:Fe,shadowRootMode:null,shape:null,size:ae,sizes:null,slot:null,span:ae,spellCheck:Tt,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ae,step:null,style:null,tabIndex:ae,target:null,title:null,translate:null,type:null,typeMustMatch:Fe,useMap:null,value:Tt,width:ae,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:lt,axis:null,background:null,bgColor:null,border:ae,borderColor:null,bottomMargin:ae,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Fe,declare:Fe,event:null,face:null,frame:null,frameBorder:null,hSpace:ae,leftMargin:ae,link:null,longDesc:null,lowSrc:null,marginHeight:ae,marginWidth:ae,noResize:Fe,noHref:Fe,noShade:Fe,noWrap:Fe,object:null,profile:null,prompt:null,rev:null,rightMargin:ae,rules:null,scheme:null,scrolling:Tt,standby:null,summary:null,text:null,topMargin:ae,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ae,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Fe,disableRemotePlayback:Fe,prefix:null,property:null,results:ae,security:null,unselectable:null}}),EC=is({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:K0,properties:{about:mn,accentHeight:ae,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ae,amplitude:ae,arabicForm:null,ascent:ae,attributeName:null,attributeType:null,azimuth:ae,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ae,by:null,calcMode:null,capHeight:ae,className:lt,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ae,diffuseConstant:ae,direction:null,display:null,dur:null,divisor:ae,dominantBaseline:null,download:Fe,dx:null,dy:null,edgeMode:null,editable:null,elevation:ae,enableBackground:null,end:null,event:null,exponent:ae,externalResourcesRequired:null,fill:null,fillOpacity:ae,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:ko,g2:ko,glyphName:ko,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ae,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ae,horizOriginX:ae,horizOriginY:ae,id:null,ideographic:ae,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ae,k:ae,k1:ae,k2:ae,k3:ae,k4:ae,kernelMatrix:mn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ae,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ae,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ae,overlineThickness:ae,paintOrder:null,panose1:null,path:null,pathLength:ae,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:lt,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ae,pointsAtY:ae,pointsAtZ:ae,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:mn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:mn,rev:mn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:mn,requiredFeatures:mn,requiredFonts:mn,requiredFormats:mn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ae,specularExponent:ae,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ae,strikethroughThickness:ae,string:null,stroke:null,strokeDashArray:mn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ae,strokeOpacity:ae,strokeWidth:null,style:null,surfaceScale:ae,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:mn,tabIndex:ae,tableValues:null,target:null,targetX:ae,targetY:ae,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:mn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ae,underlineThickness:ae,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ae,values:null,vAlphabetic:ae,vMathematical:ae,vectorEffect:null,vHanging:ae,vIdeographic:ae,version:null,vertAdvY:ae,vertOriginX:ae,vertOriginY:ae,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ae,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),MC=/^data[-\w.:]+$/i,fg=/-[a-z]/g,wC=/[A-Z]/g;function TC(t,e){const n=yd(e);let i=e,r=Nn;if(n in t.normal)return t.property[t.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&MC.test(e)){if(e.charAt(4)==="-"){const o=e.slice(5).replace(fg,CC);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=e.slice(4);if(!fg.test(o)){let s=o.replace(wC,AC);s.charAt(0)!=="-"&&(s="-"+s),e="data"+s}}r=Ih}return new r(i,e)}function AC(t){return"-"+t.toLowerCase()}function CC(t){return t.charAt(1).toUpperCase()}const RC={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},bC=j0([Y0,$0,Q0,J0,SC],"html"),Dh=j0([Y0,$0,Q0,J0,EC],"svg");function PC(t){return t.join(" ").trim()}var ex={},dg=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,LC=/\n/g,IC=/^\s*/,DC=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,NC=/^:\s*/,UC=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,kC=/^[;\s]*/,FC=/^\s+|\s+$/g,OC=`
`,hg="/",pg="*",Pr="",zC="comment",BC="declaration",HC=function(t,e){if(typeof t!="string")throw new TypeError("First argument must be a string");if(!t)return[];e=e||{};var n=1,i=1;function r(g){var x=g.match(LC);x&&(n+=x.length);var m=g.lastIndexOf(OC);i=~m?g.length-m:i+g.length}function o(){var g={line:n,column:i};return function(x){return x.position=new s(g),u(),x}}function s(g){this.start=g,this.end={line:n,column:i},this.source=e.source}s.prototype.content=t;function a(g){var x=new Error(e.source+":"+n+":"+i+": "+g);if(x.reason=g,x.filename=e.source,x.line=n,x.column=i,x.source=t,!e.silent)throw x}function l(g){var x=g.exec(t);if(x){var m=x[0];return r(m),t=t.slice(m.length),x}}function u(){l(IC)}function c(g){var x;for(g=g||[];x=d();)x!==!1&&g.push(x);return g}function d(){var g=o();if(!(hg!=t.charAt(0)||pg!=t.charAt(1))){for(var x=2;Pr!=t.charAt(x)&&(pg!=t.charAt(x)||hg!=t.charAt(x+1));)++x;if(x+=2,Pr===t.charAt(x-1))return a("End of comment missing");var m=t.slice(2,x-2);return i+=2,r(m),t=t.slice(x),i+=2,g({type:zC,comment:m})}}function h(){var g=o(),x=l(DC);if(x){if(d(),!l(NC))return a("property missing ':'");var m=l(UC),f=g({type:BC,property:mg(x[0].replace(dg,Pr)),value:m?mg(m[0].replace(dg,Pr)):Pr});return l(kC),f}}function p(){var g=[];c(g);for(var x;x=h();)x!==!1&&(g.push(x),c(g));return g}return u(),p()};function mg(t){return t?t.replace(FC,Pr):Pr}var VC=ep&&ep.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(ex,"__esModule",{value:!0});var gg=ex.default=WC,GC=VC(HC);function WC(t,e){var n=null;if(!t||typeof t!="string")return n;var i=(0,GC.default)(t),r=typeof e=="function";return i.forEach(function(o){if(o.type==="declaration"){var s=o.property,a=o.value;r?e(s,a,o):a&&(n=n||{},n[s]=a)}}),n}const XC=gg.default||gg,tx=nx("end"),Nh=nx("start");function nx(t){return e;function e(n){const i=n&&n.position&&n.position[t]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function jC(t){const e=Nh(t),n=tx(t);if(e&&n)return{start:e,end:n}}function Fs(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?_g(t.position):"start"in t||"end"in t?_g(t):"line"in t||"column"in t?Ed(t):""}function Ed(t){return vg(t&&t.line)+":"+vg(t&&t.column)}function _g(t){return Ed(t&&t.start)+"-"+Ed(t&&t.end)}function vg(t){return t&&typeof t=="number"?t:1}class jt extends Error{constructor(e,n,i){super(),typeof n=="string"&&(i=n,n=void 0);let r="",o={},s=!1;if(n&&("line"in n&&"column"in n?o={place:n}:"start"in n&&"end"in n?o={place:n}:"type"in n?o={ancestors:[n],place:n.position}:o={...n}),typeof e=="string"?r=e:!o.cause&&e&&(s=!0,r=e.message,o.cause=e),!o.ruleId&&!o.source&&typeof i=="string"){const l=i.indexOf(":");l===-1?o.ruleId=i:(o.source=i.slice(0,l),o.ruleId=i.slice(l+1))}if(!o.place&&o.ancestors&&o.ancestors){const l=o.ancestors[o.ancestors.length-1];l&&(o.place=l.position)}const a=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=a?a.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=a?a.line:void 0,this.name=Fs(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual,this.expected,this.note,this.url}}jt.prototype.file="";jt.prototype.name="";jt.prototype.reason="";jt.prototype.message="";jt.prototype.stack="";jt.prototype.column=void 0;jt.prototype.line=void 0;jt.prototype.ancestors=void 0;jt.prototype.cause=void 0;jt.prototype.fatal=void 0;jt.prototype.place=void 0;jt.prototype.ruleId=void 0;jt.prototype.source=void 0;const Uh={}.hasOwnProperty,qC=new Map,$C=/[A-Z]/g,YC=/-([a-z])/g,KC=new Set(["table","tbody","thead","tfoot","tr"]),ZC=new Set(["td","th"]),ix="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function QC(t,e){if(!e||e.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=e.filePath||void 0;let i;if(e.development){if(typeof e.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=sR(n,e.jsxDEV)}else{if(typeof e.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof e.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=oR(n,e.jsx,e.jsxs)}const r={Fragment:e.Fragment,ancestors:[],components:e.components||{},create:i,elementAttributeNameCase:e.elementAttributeNameCase||"react",evaluater:e.createEvaluater?e.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:e.ignoreInvalidStyle||!1,passKeys:e.passKeys!==!1,passNode:e.passNode||!1,schema:e.space==="svg"?Dh:bC,stylePropertyNameCase:e.stylePropertyNameCase||"dom",tableCellAlignToStyle:e.tableCellAlignToStyle!==!1},o=rx(r,t,void 0);return o&&typeof o!="string"?o:r.create(t,r.Fragment,{children:o||void 0},void 0)}function rx(t,e,n){if(e.type==="element")return JC(t,e,n);if(e.type==="mdxFlowExpression"||e.type==="mdxTextExpression")return eR(t,e);if(e.type==="mdxJsxFlowElement"||e.type==="mdxJsxTextElement")return nR(t,e,n);if(e.type==="mdxjsEsm")return tR(t,e);if(e.type==="root")return iR(t,e,n);if(e.type==="text")return rR(t,e)}function JC(t,e,n){const i=t.schema;let r=i;e.tagName.toLowerCase()==="svg"&&i.space==="html"&&(r=Dh,t.schema=r),t.ancestors.push(e);const o=sx(t,e.tagName,!1),s=aR(t,e);let a=Fh(t,e);return KC.has(e.tagName)&&(a=a.filter(function(l){return typeof l=="string"?!vC(l):!0})),ox(t,s,o,e),kh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function eR(t,e){if(e.data&&e.data.estree&&t.evaluater){const i=e.data.estree.body[0];return i.type,t.evaluater.evaluateExpression(i.expression)}ia(t,e.position)}function tR(t,e){if(e.data&&e.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(e.data.estree);ia(t,e.position)}function nR(t,e,n){const i=t.schema;let r=i;e.name==="svg"&&i.space==="html"&&(r=Dh,t.schema=r),t.ancestors.push(e);const o=e.name===null?t.Fragment:sx(t,e.name,!0),s=lR(t,e),a=Fh(t,e);return ox(t,s,o,e),kh(s,a),t.ancestors.pop(),t.schema=i,t.create(e,o,s,n)}function iR(t,e,n){const i={};return kh(i,Fh(t,e)),t.create(e,t.Fragment,i,n)}function rR(t,e){return e.value}function ox(t,e,n,i){typeof n!="string"&&n!==t.Fragment&&t.passNode&&(e.node=i)}function kh(t,e){if(e.length>0){const n=e.length>1?e:e[0];n&&(t.children=n)}}function oR(t,e,n){return i;function i(r,o,s,a){const u=Array.isArray(s.children)?n:e;return a?u(o,s,a):u(o,s)}}function sR(t,e){return n;function n(i,r,o,s){const a=Array.isArray(o.children),l=Nh(i);return e(r,o,s,a,{columnNumber:l?l.column-1:void 0,fileName:t,lineNumber:l?l.line:void 0},void 0)}}function aR(t,e){const n={};let i,r;for(r in e.properties)if(r!=="children"&&Uh.call(e.properties,r)){const o=uR(t,r,e.properties[r]);if(o){const[s,a]=o;t.tableCellAlignToStyle&&s==="align"&&typeof a=="string"&&ZC.has(e.tagName)?i=a:n[s]=a}}if(i){const o=n.style||(n.style={});o[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return n}function lR(t,e){const n={};for(const i of e.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&t.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const a=s.properties[0];a.type,Object.assign(n,t.evaluater.evaluateExpression(a.argument))}else ia(t,e.position);else{const r=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&t.evaluater){const a=i.value.data.estree.body[0];a.type,o=t.evaluater.evaluateExpression(a.expression)}else ia(t,e.position);else o=i.value===null?!0:i.value;n[r]=o}return n}function Fh(t,e){const n=[];let i=-1;const r=t.passKeys?new Map:qC;for(;++i<e.children.length;){const o=e.children[i];let s;if(t.passKeys){const l=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(l){const u=r.get(l)||0;s=l+"-"+u,r.set(l,u+1)}}const a=rx(t,o,s);a!==void 0&&n.push(a)}return n}function uR(t,e,n){const i=TC(t.schema,e);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=i.commaSeparated?hC(n):PC(n)),i.property==="style"){let r=typeof n=="object"?n:cR(t,String(n));return t.stylePropertyNameCase==="css"&&(r=fR(r)),["style",r]}return[t.elementAttributeNameCase==="react"&&i.space?RC[i.property]||i.property:i.attribute,n]}}function cR(t,e){const n={};try{XC(e,i)}catch(r){if(!t.ignoreInvalidStyle){const o=r,s=new jt("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:o,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw s.file=t.filePath||void 0,s.url=ix+"#cannot-parse-style-attribute",s}}return n;function i(r,o){let s=r;s.slice(0,2)!=="--"&&(s.slice(0,4)==="-ms-"&&(s="ms-"+s.slice(4)),s=s.replace(YC,hR)),n[s]=o}}function sx(t,e,n){let i;if(!n)i={type:"Literal",value:e};else if(e.includes(".")){const r=e.split(".");let o=-1,s;for(;++o<r.length;){const a=lg(r[o])?{type:"Identifier",name:r[o]}:{type:"Literal",value:r[o]};s=s?{type:"MemberExpression",object:s,property:a,computed:!!(o&&a.type==="Literal"),optional:!1}:a}i=s}else i=lg(e)&&!/^[a-z]/.test(e)?{type:"Identifier",name:e}:{type:"Literal",value:e};if(i.type==="Literal"){const r=i.value;return Uh.call(t.components,r)?t.components[r]:r}if(t.evaluater)return t.evaluater.evaluateExpression(i);ia(t)}function ia(t,e){const n=new jt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:e,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=t.filePath||void 0,n.url=ix+"#cannot-handle-mdx-estrees-without-createevaluater",n}function fR(t){const e={};let n;for(n in t)Uh.call(t,n)&&(e[dR(n)]=t[n]);return e}function dR(t){let e=t.replace($C,pR);return e.slice(0,3)==="ms-"&&(e="-"+e),e}function hR(t,e){return e.toUpperCase()}function pR(t){return"-"+t.toLowerCase()}const bc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},mR={};function gR(t,e){const n=mR,i=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return ax(t,i,r)}function ax(t,e,n){if(_R(t)){if("value"in t)return t.type==="html"&&!n?"":t.value;if(e&&"alt"in t&&t.alt)return t.alt;if("children"in t)return xg(t.children,e,n)}return Array.isArray(t)?xg(t,e,n):""}function xg(t,e,n){const i=[];let r=-1;for(;++r<t.length;)i[r]=ax(t[r],e,n);return i.join("")}function _R(t){return!!(t&&typeof t=="object")}const yg=document.createElement("i");function Oh(t){const e="&"+t+";";yg.innerHTML=e;const n=yg.textContent;return n.charCodeAt(n.length-1)===59&&t!=="semi"||n===e?!1:n}function ui(t,e,n,i){const r=t.length;let o=0,s;if(e<0?e=-e>r?0:r+e:e=e>r?r:e,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(e,n),t.splice(...s);else for(n&&t.splice(e,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(e,0),t.splice(...s),o+=1e4,e+=1e4}function bn(t,e){return t.length>0?(ui(t,t.length,0,e),t):e}const Sg={}.hasOwnProperty;function vR(t){const e={};let n=-1;for(;++n<t.length;)xR(e,t[n]);return e}function xR(t,e){let n;for(n in e){const r=(Sg.call(t,n)?t[n]:void 0)||(t[n]={}),o=e[n];let s;if(o)for(s in o){Sg.call(r,s)||(r[s]=[]);const a=o[s];yR(r[s],Array.isArray(a)?a:a?[a]:[])}}}function yR(t,e){let n=-1;const i=[];for(;++n<e.length;)(e[n].add==="after"?t:i).push(e[n]);ui(t,0,0,i)}function lx(t,e){const n=Number.parseInt(t,e);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Fo(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const ii=pr(/[A-Za-z]/),vn=pr(/[\dA-Za-z]/),SR=pr(/[#-'*+\--9=?A-Z^-~]/);function Md(t){return t!==null&&(t<32||t===127)}const wd=pr(/\d/),ER=pr(/[\dA-Fa-f]/),MR=pr(/[!-/:-@[-`{-~]/);function Ne(t){return t!==null&&t<-2}function fn(t){return t!==null&&(t<0||t===32)}function Ze(t){return t===-2||t===-1||t===32}const wR=pr(new RegExp("\\p{P}|\\p{S}","u")),TR=pr(/\s/);function pr(t){return e;function e(n){return n!==null&&n>-1&&t.test(String.fromCharCode(n))}}function rs(t){const e=[];let n=-1,i=0,r=0;for(;++n<t.length;){const o=t.charCodeAt(n);let s="";if(o===37&&vn(t.charCodeAt(n+1))&&vn(t.charCodeAt(n+2)))r=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const a=t.charCodeAt(n+1);o<56320&&a>56319&&a<57344?(s=String.fromCharCode(o,a),r=1):s="�"}else s=String.fromCharCode(o);s&&(e.push(t.slice(i,n),encodeURIComponent(s)),i=n+r+1,s=""),r&&(n+=r,r=0)}return e.join("")+t.slice(i)}function ct(t,e,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(l){return Ze(l)?(t.enter(n),a(l)):e(l)}function a(l){return Ze(l)&&o++<r?(t.consume(l),a):(t.exit(n),e(l))}}const AR={tokenize:CR};function CR(t){const e=t.attempt(this.parser.constructs.contentInitial,i,r);let n;return e;function i(a){if(a===null){t.consume(a);return}return t.enter("lineEnding"),t.consume(a),t.exit("lineEnding"),ct(t,e,"linePrefix")}function r(a){return t.enter("paragraph"),o(a)}function o(a){const l=t.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=l),n=l,s(a)}function s(a){if(a===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(a);return}return Ne(a)?(t.consume(a),t.exit("chunkText"),o):(t.consume(a),s)}}const RR={tokenize:bR},Eg={tokenize:PR};function bR(t){const e=this,n=[];let i=0,r,o,s;return a;function a(v){if(i<n.length){const y=n[i];return e.containerState=y[1],t.attempt(y[0].continuation,l,u)(v)}return u(v)}function l(v){if(i++,e.containerState._closeFlow){e.containerState._closeFlow=void 0,r&&_();const y=e.events.length;let P=y,M;for(;P--;)if(e.events[P][0]==="exit"&&e.events[P][1].type==="chunkFlow"){M=e.events[P][1].end;break}f(i);let R=y;for(;R<e.events.length;)e.events[R][1].end={...M},R++;return ui(e.events,P+1,0,e.events.slice(y)),e.events.length=R,u(v)}return a(v)}function u(v){if(i===n.length){if(!r)return h(v);if(r.currentConstruct&&r.currentConstruct.concrete)return g(v);e.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return e.containerState={},t.check(Eg,c,d)(v)}function c(v){return r&&_(),f(i),h(v)}function d(v){return e.parser.lazy[e.now().line]=i!==n.length,s=e.now().offset,g(v)}function h(v){return e.containerState={},t.attempt(Eg,p,g)(v)}function p(v){return i++,n.push([e.currentConstruct,e.containerState]),h(v)}function g(v){if(v===null){r&&_(),f(0),t.consume(v);return}return r=r||e.parser.flow(e.now()),t.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:o}),x(v)}function x(v){if(v===null){m(t.exit("chunkFlow"),!0),f(0),t.consume(v);return}return Ne(v)?(t.consume(v),m(t.exit("chunkFlow")),i=0,e.interrupt=void 0,a):(t.consume(v),x)}function m(v,y){const P=e.sliceStream(v);if(y&&P.push(null),v.previous=o,o&&(o.next=v),o=v,r.defineSkip(v.start),r.write(P),e.parser.lazy[v.start.line]){let M=r.events.length;for(;M--;)if(r.events[M][1].start.offset<s&&(!r.events[M][1].end||r.events[M][1].end.offset>s))return;const R=e.events.length;let I=R,T,S;for(;I--;)if(e.events[I][0]==="exit"&&e.events[I][1].type==="chunkFlow"){if(T){S=e.events[I][1].end;break}T=!0}for(f(i),M=R;M<e.events.length;)e.events[M][1].end={...S},M++;ui(e.events,I+1,0,e.events.slice(R)),e.events.length=M}}function f(v){let y=n.length;for(;y-- >v;){const P=n[y];e.containerState=P[1],P[0].exit.call(e,t)}n.length=v}function _(){r.write([null]),o=void 0,r=void 0,e.containerState._closeFlow=void 0}}function PR(t,e,n){return ct(t,t.attempt(this.parser.constructs.document,e,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Mg(t){if(t===null||fn(t)||TR(t))return 1;if(wR(t))return 2}function zh(t,e,n){const i=[];let r=-1;for(;++r<t.length;){const o=t[r].resolveAll;o&&!i.includes(o)&&(e=o(e,n),i.push(o))}return e}const Td={name:"attention",resolveAll:LR,tokenize:IR};function LR(t,e){let n=-1,i,r,o,s,a,l,u,c;for(;++n<t.length;)if(t[n][0]==="enter"&&t[n][1].type==="attentionSequence"&&t[n][1]._close){for(i=n;i--;)if(t[i][0]==="exit"&&t[i][1].type==="attentionSequence"&&t[i][1]._open&&e.sliceSerialize(t[i][1]).charCodeAt(0)===e.sliceSerialize(t[n][1]).charCodeAt(0)){if((t[i][1]._close||t[n][1]._open)&&(t[n][1].end.offset-t[n][1].start.offset)%3&&!((t[i][1].end.offset-t[i][1].start.offset+t[n][1].end.offset-t[n][1].start.offset)%3))continue;l=t[i][1].end.offset-t[i][1].start.offset>1&&t[n][1].end.offset-t[n][1].start.offset>1?2:1;const d={...t[i][1].end},h={...t[n][1].start};wg(d,-l),wg(h,l),s={type:l>1?"strongSequence":"emphasisSequence",start:d,end:{...t[i][1].end}},a={type:l>1?"strongSequence":"emphasisSequence",start:{...t[n][1].start},end:h},o={type:l>1?"strongText":"emphasisText",start:{...t[i][1].end},end:{...t[n][1].start}},r={type:l>1?"strong":"emphasis",start:{...s.start},end:{...a.end}},t[i][1].end={...s.start},t[n][1].start={...a.end},u=[],t[i][1].end.offset-t[i][1].start.offset&&(u=bn(u,[["enter",t[i][1],e],["exit",t[i][1],e]])),u=bn(u,[["enter",r,e],["enter",s,e],["exit",s,e],["enter",o,e]]),u=bn(u,zh(e.parser.constructs.insideSpan.null,t.slice(i+1,n),e)),u=bn(u,[["exit",o,e],["enter",a,e],["exit",a,e],["exit",r,e]]),t[n][1].end.offset-t[n][1].start.offset?(c=2,u=bn(u,[["enter",t[n][1],e],["exit",t[n][1],e]])):c=0,ui(t,i-1,n-i+3,u),n=i+u.length-c-2;break}}for(n=-1;++n<t.length;)t[n][1].type==="attentionSequence"&&(t[n][1].type="data");return t}function IR(t,e){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Mg(i);let o;return s;function s(l){return o=l,t.enter("attentionSequence"),a(l)}function a(l){if(l===o)return t.consume(l),a;const u=t.exit("attentionSequence"),c=Mg(l),d=!c||c===2&&r||n.includes(l),h=!r||r===2&&c||n.includes(i);return u._open=!!(o===42?d:d&&(r||!h)),u._close=!!(o===42?h:h&&(c||!d)),e(l)}}function wg(t,e){t.column+=e,t.offset+=e,t._bufferIndex+=e}const DR={name:"autolink",tokenize:NR};function NR(t,e,n){let i=0;return r;function r(p){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),o}function o(p){return ii(p)?(t.consume(p),s):p===64?n(p):u(p)}function s(p){return p===43||p===45||p===46||vn(p)?(i=1,a(p)):u(p)}function a(p){return p===58?(t.consume(p),i=0,l):(p===43||p===45||p===46||vn(p))&&i++<32?(t.consume(p),a):(i=0,u(p))}function l(p){return p===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):p===null||p===32||p===60||Md(p)?n(p):(t.consume(p),l)}function u(p){return p===64?(t.consume(p),c):SR(p)?(t.consume(p),u):n(p)}function c(p){return vn(p)?d(p):n(p)}function d(p){return p===46?(t.consume(p),i=0,c):p===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(p),t.exit("autolinkMarker"),t.exit("autolink"),e):h(p)}function h(p){if((p===45||vn(p))&&i++<63){const g=p===45?h:d;return t.consume(p),g}return n(p)}}const Eu={partial:!0,tokenize:UR};function UR(t,e,n){return i;function i(o){return Ze(o)?ct(t,r,"linePrefix")(o):r(o)}function r(o){return o===null||Ne(o)?e(o):n(o)}}const ux={continuation:{tokenize:FR},exit:OR,name:"blockQuote",tokenize:kR};function kR(t,e,n){const i=this;return r;function r(s){if(s===62){const a=i.containerState;return a.open||(t.enter("blockQuote",{_container:!0}),a.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(s),t.exit("blockQuoteMarker"),o}return n(s)}function o(s){return Ze(s)?(t.enter("blockQuotePrefixWhitespace"),t.consume(s),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),e):(t.exit("blockQuotePrefix"),e(s))}}function FR(t,e,n){const i=this;return r;function r(s){return Ze(s)?ct(t,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return t.attempt(ux,e,n)(s)}}function OR(t){t.exit("blockQuote")}const cx={name:"characterEscape",tokenize:zR};function zR(t,e,n){return i;function i(o){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(o),t.exit("escapeMarker"),r}function r(o){return MR(o)?(t.enter("characterEscapeValue"),t.consume(o),t.exit("characterEscapeValue"),t.exit("characterEscape"),e):n(o)}}const fx={name:"characterReference",tokenize:BR};function BR(t,e,n){const i=this;let r=0,o,s;return a;function a(d){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),l}function l(d){return d===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(d),t.exit("characterReferenceMarkerNumeric"),u):(t.enter("characterReferenceValue"),o=31,s=vn,c(d))}function u(d){return d===88||d===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(d),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),o=6,s=ER,c):(t.enter("characterReferenceValue"),o=7,s=wd,c(d))}function c(d){if(d===59&&r){const h=t.exit("characterReferenceValue");return s===vn&&!Oh(i.sliceSerialize(h))?n(d):(t.enter("characterReferenceMarker"),t.consume(d),t.exit("characterReferenceMarker"),t.exit("characterReference"),e)}return s(d)&&r++<o?(t.consume(d),c):n(d)}}const Tg={partial:!0,tokenize:VR},Ag={concrete:!0,name:"codeFenced",tokenize:HR};function HR(t,e,n){const i=this,r={partial:!0,tokenize:P};let o=0,s=0,a;return l;function l(M){return u(M)}function u(M){const R=i.events[i.events.length-1];return o=R&&R[1].type==="linePrefix"?R[2].sliceSerialize(R[1],!0).length:0,a=M,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),c(M)}function c(M){return M===a?(s++,t.consume(M),c):s<3?n(M):(t.exit("codeFencedFenceSequence"),Ze(M)?ct(t,d,"whitespace")(M):d(M))}function d(M){return M===null||Ne(M)?(t.exit("codeFencedFence"),i.interrupt?e(M):t.check(Tg,x,y)(M)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),h(M))}function h(M){return M===null||Ne(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),d(M)):Ze(M)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),ct(t,p,"whitespace")(M)):M===96&&M===a?n(M):(t.consume(M),h)}function p(M){return M===null||Ne(M)?d(M):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),g(M))}function g(M){return M===null||Ne(M)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),d(M)):M===96&&M===a?n(M):(t.consume(M),g)}function x(M){return t.attempt(r,y,m)(M)}function m(M){return t.enter("lineEnding"),t.consume(M),t.exit("lineEnding"),f}function f(M){return o>0&&Ze(M)?ct(t,_,"linePrefix",o+1)(M):_(M)}function _(M){return M===null||Ne(M)?t.check(Tg,x,y)(M):(t.enter("codeFlowValue"),v(M))}function v(M){return M===null||Ne(M)?(t.exit("codeFlowValue"),_(M)):(t.consume(M),v)}function y(M){return t.exit("codeFenced"),e(M)}function P(M,R,I){let T=0;return S;function S(O){return M.enter("lineEnding"),M.consume(O),M.exit("lineEnding"),C}function C(O){return M.enter("codeFencedFence"),Ze(O)?ct(M,U,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):U(O)}function U(O){return O===a?(M.enter("codeFencedFenceSequence"),k(O)):I(O)}function k(O){return O===a?(T++,M.consume(O),k):T>=s?(M.exit("codeFencedFenceSequence"),Ze(O)?ct(M,V,"whitespace")(O):V(O)):I(O)}function V(O){return O===null||Ne(O)?(M.exit("codeFencedFence"),R(O)):I(O)}}}function VR(t,e,n){const i=this;return r;function r(s){return s===null?n(s):(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}const Pc={name:"codeIndented",tokenize:WR},GR={partial:!0,tokenize:XR};function WR(t,e,n){const i=this;return r;function r(u){return t.enter("codeIndented"),ct(t,o,"linePrefix",5)(u)}function o(u){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?s(u):n(u)}function s(u){return u===null?l(u):Ne(u)?t.attempt(GR,s,l)(u):(t.enter("codeFlowValue"),a(u))}function a(u){return u===null||Ne(u)?(t.exit("codeFlowValue"),s(u)):(t.consume(u),a)}function l(u){return t.exit("codeIndented"),e(u)}}function XR(t,e,n){const i=this;return r;function r(s){return i.parser.lazy[i.now().line]?n(s):Ne(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),r):ct(t,o,"linePrefix",5)(s)}function o(s){const a=i.events[i.events.length-1];return a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):Ne(s)?r(s):n(s)}}const jR={name:"codeText",previous:$R,resolve:qR,tokenize:YR};function qR(t){let e=t.length-4,n=3,i,r;if((t[n][1].type==="lineEnding"||t[n][1].type==="space")&&(t[e][1].type==="lineEnding"||t[e][1].type==="space")){for(i=n;++i<e;)if(t[i][1].type==="codeTextData"){t[n][1].type="codeTextPadding",t[e][1].type="codeTextPadding",n+=2,e-=2;break}}for(i=n-1,e++;++i<=e;)r===void 0?i!==e&&t[i][1].type!=="lineEnding"&&(r=i):(i===e||t[i][1].type==="lineEnding")&&(t[r][1].type="codeTextData",i!==r+2&&(t[r][1].end=t[i-1][1].end,t.splice(r+2,i-r-2),e-=i-r-2,i=r+2),r=void 0);return t}function $R(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function YR(t,e,n){let i=0,r,o;return s;function s(d){return t.enter("codeText"),t.enter("codeTextSequence"),a(d)}function a(d){return d===96?(t.consume(d),i++,a):(t.exit("codeTextSequence"),l(d))}function l(d){return d===null?n(d):d===32?(t.enter("space"),t.consume(d),t.exit("space"),l):d===96?(o=t.enter("codeTextSequence"),r=0,c(d)):Ne(d)?(t.enter("lineEnding"),t.consume(d),t.exit("lineEnding"),l):(t.enter("codeTextData"),u(d))}function u(d){return d===null||d===32||d===96||Ne(d)?(t.exit("codeTextData"),l(d)):(t.consume(d),u)}function c(d){return d===96?(t.consume(d),r++,c):r===i?(t.exit("codeTextSequence"),t.exit("codeText"),e(d)):(o.type="codeTextData",u(d))}}class KR{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,n){const i=n??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(e,i):e>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(e,n,i){const r=n||0;this.setCursor(Math.trunc(e));const o=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return i&&ys(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(e){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(e)}pushMany(e){this.setCursor(Number.POSITIVE_INFINITY),ys(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),ys(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){const n=this.left.splice(e,Number.POSITIVE_INFINITY);ys(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-e,Number.POSITIVE_INFINITY);ys(this.left,n.reverse())}}}function ys(t,e){let n=0;if(e.length<1e4)t.push(...e);else for(;n<e.length;)t.push(...e.slice(n,n+1e4)),n+=1e4}function dx(t){const e={};let n=-1,i,r,o,s,a,l,u;const c=new KR(t);for(;++n<c.length;){for(;n in e;)n=e[n];if(i=c.get(n),n&&i[1].type==="chunkFlow"&&c.get(n-1)[1].type==="listItemPrefix"&&(l=i[1]._tokenizer.events,o=0,o<l.length&&l[o][1].type==="lineEndingBlank"&&(o+=2),o<l.length&&l[o][1].type==="content"))for(;++o<l.length&&l[o][1].type!=="content";)l[o][1].type==="chunkText"&&(l[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(e,ZR(c,n)),n=e[n],u=!0);else if(i[1]._container){for(o=n,r=void 0;o--&&(s=c.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank");)s[0]==="enter"&&(r&&(c.get(r)[1].type="lineEndingBlank"),s[1].type="lineEnding",r=o);r&&(i[1].end={...c.get(r)[1].start},a=c.slice(r,n),a.unshift(i),c.splice(r,n-r+1,a))}}return ui(t,0,Number.POSITIVE_INFINITY,c.slice(0)),!u}function ZR(t,e){const n=t.get(e)[1],i=t.get(e)[2];let r=e-1;const o=[],s=n._tokenizer||i.parser[n.contentType](n.start),a=s.events,l=[],u={};let c,d,h=-1,p=n,g=0,x=0;const m=[x];for(;p;){for(;t.get(++r)[1]!==p;);o.push(r),p._tokenizer||(c=i.sliceStream(p),p.next||c.push(null),d&&s.defineSkip(p.start),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(c),p._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++h<a.length;)a[h][0]==="exit"&&a[h-1][0]==="enter"&&a[h][1].type===a[h-1][1].type&&a[h][1].start.line!==a[h][1].end.line&&(x=h+1,m.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(s.events=[],p?(p._tokenizer=void 0,p.previous=void 0):m.pop(),h=m.length;h--;){const f=a.slice(m[h],m[h+1]),_=o.pop();l.push([_,_+f.length-1]),t.splice(_,2,f)}for(l.reverse(),h=-1;++h<l.length;)u[g+l[h][0]]=g+l[h][1],g+=l[h][1]-l[h][0]-1;return u}const QR={resolve:eb,tokenize:tb},JR={partial:!0,tokenize:nb};function eb(t){return dx(t),t}function tb(t,e){let n;return i;function i(a){return t.enter("content"),n=t.enter("chunkContent",{contentType:"content"}),r(a)}function r(a){return a===null?o(a):Ne(a)?t.check(JR,s,o)(a):(t.consume(a),r)}function o(a){return t.exit("chunkContent"),t.exit("content"),e(a)}function s(a){return t.consume(a),t.exit("chunkContent"),n.next=t.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function nb(t,e,n){const i=this;return r;function r(s){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),ct(t,o,"linePrefix")}function o(s){if(s===null||Ne(s))return n(s);const a=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&a&&a[1].type==="linePrefix"&&a[2].sliceSerialize(a[1],!0).length>=4?e(s):t.interrupt(i.parser.constructs.flow,n,e)(s)}}function hx(t,e,n,i,r,o,s,a,l){const u=l||Number.POSITIVE_INFINITY;let c=0;return d;function d(f){return f===60?(t.enter(i),t.enter(r),t.enter(o),t.consume(f),t.exit(o),h):f===null||f===32||f===41||Md(f)?n(f):(t.enter(i),t.enter(s),t.enter(a),t.enter("chunkString",{contentType:"string"}),x(f))}function h(f){return f===62?(t.enter(o),t.consume(f),t.exit(o),t.exit(r),t.exit(i),e):(t.enter(a),t.enter("chunkString",{contentType:"string"}),p(f))}function p(f){return f===62?(t.exit("chunkString"),t.exit(a),h(f)):f===null||f===60||Ne(f)?n(f):(t.consume(f),f===92?g:p)}function g(f){return f===60||f===62||f===92?(t.consume(f),p):p(f)}function x(f){return!c&&(f===null||f===41||fn(f))?(t.exit("chunkString"),t.exit(a),t.exit(s),t.exit(i),e(f)):c<u&&f===40?(t.consume(f),c++,x):f===41?(t.consume(f),c--,x):f===null||f===32||f===40||Md(f)?n(f):(t.consume(f),f===92?m:x)}function m(f){return f===40||f===41||f===92?(t.consume(f),x):x(f)}}function px(t,e,n,i,r,o){const s=this;let a=0,l;return u;function u(p){return t.enter(i),t.enter(r),t.consume(p),t.exit(r),t.enter(o),c}function c(p){return a>999||p===null||p===91||p===93&&!l||p===94&&!a&&"_hiddenFootnoteSupport"in s.parser.constructs?n(p):p===93?(t.exit(o),t.enter(r),t.consume(p),t.exit(r),t.exit(i),e):Ne(p)?(t.enter("lineEnding"),t.consume(p),t.exit("lineEnding"),c):(t.enter("chunkString",{contentType:"string"}),d(p))}function d(p){return p===null||p===91||p===93||Ne(p)||a++>999?(t.exit("chunkString"),c(p)):(t.consume(p),l||(l=!Ze(p)),p===92?h:d)}function h(p){return p===91||p===92||p===93?(t.consume(p),a++,d):d(p)}}function mx(t,e,n,i,r,o){let s;return a;function a(h){return h===34||h===39||h===40?(t.enter(i),t.enter(r),t.consume(h),t.exit(r),s=h===40?41:h,l):n(h)}function l(h){return h===s?(t.enter(r),t.consume(h),t.exit(r),t.exit(i),e):(t.enter(o),u(h))}function u(h){return h===s?(t.exit(o),l(s)):h===null?n(h):Ne(h)?(t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),ct(t,u,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),c(h))}function c(h){return h===s||h===null||Ne(h)?(t.exit("chunkString"),u(h)):(t.consume(h),h===92?d:c)}function d(h){return h===s||h===92?(t.consume(h),c):c(h)}}function Os(t,e){let n;return i;function i(r){return Ne(r)?(t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),n=!0,i):Ze(r)?ct(t,i,n?"linePrefix":"lineSuffix")(r):e(r)}}const ib={name:"definition",tokenize:ob},rb={partial:!0,tokenize:sb};function ob(t,e,n){const i=this;let r;return o;function o(p){return t.enter("definition"),s(p)}function s(p){return px.call(i,t,a,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function a(p){return r=Fo(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),p===58?(t.enter("definitionMarker"),t.consume(p),t.exit("definitionMarker"),l):n(p)}function l(p){return fn(p)?Os(t,u)(p):u(p)}function u(p){return hx(t,c,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function c(p){return t.attempt(rb,d,d)(p)}function d(p){return Ze(p)?ct(t,h,"whitespace")(p):h(p)}function h(p){return p===null||Ne(p)?(t.exit("definition"),i.parser.defined.push(r),e(p)):n(p)}}function sb(t,e,n){return i;function i(a){return fn(a)?Os(t,r)(a):n(a)}function r(a){return mx(t,o,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(a)}function o(a){return Ze(a)?ct(t,s,"whitespace")(a):s(a)}function s(a){return a===null||Ne(a)?e(a):n(a)}}const ab={name:"hardBreakEscape",tokenize:lb};function lb(t,e,n){return i;function i(o){return t.enter("hardBreakEscape"),t.consume(o),r}function r(o){return Ne(o)?(t.exit("hardBreakEscape"),e(o)):n(o)}}const ub={name:"headingAtx",resolve:cb,tokenize:fb};function cb(t,e){let n=t.length-2,i=3,r,o;return t[i][1].type==="whitespace"&&(i+=2),n-2>i&&t[n][1].type==="whitespace"&&(n-=2),t[n][1].type==="atxHeadingSequence"&&(i===n-1||n-4>i&&t[n-2][1].type==="whitespace")&&(n-=i+1===n?2:4),n>i&&(r={type:"atxHeadingText",start:t[i][1].start,end:t[n][1].end},o={type:"chunkText",start:t[i][1].start,end:t[n][1].end,contentType:"text"},ui(t,i,n-i+1,[["enter",r,e],["enter",o,e],["exit",o,e],["exit",r,e]])),t}function fb(t,e,n){let i=0;return r;function r(c){return t.enter("atxHeading"),o(c)}function o(c){return t.enter("atxHeadingSequence"),s(c)}function s(c){return c===35&&i++<6?(t.consume(c),s):c===null||fn(c)?(t.exit("atxHeadingSequence"),a(c)):n(c)}function a(c){return c===35?(t.enter("atxHeadingSequence"),l(c)):c===null||Ne(c)?(t.exit("atxHeading"),e(c)):Ze(c)?ct(t,a,"whitespace")(c):(t.enter("atxHeadingText"),u(c))}function l(c){return c===35?(t.consume(c),l):(t.exit("atxHeadingSequence"),a(c))}function u(c){return c===null||c===35||fn(c)?(t.exit("atxHeadingText"),a(c)):(t.consume(c),u)}}const db=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Cg=["pre","script","style","textarea"],hb={concrete:!0,name:"htmlFlow",resolveTo:gb,tokenize:_b},pb={partial:!0,tokenize:xb},mb={partial:!0,tokenize:vb};function gb(t){let e=t.length;for(;e--&&!(t[e][0]==="enter"&&t[e][1].type==="htmlFlow"););return e>1&&t[e-2][1].type==="linePrefix"&&(t[e][1].start=t[e-2][1].start,t[e+1][1].start=t[e-2][1].start,t.splice(e-2,2)),t}function _b(t,e,n){const i=this;let r,o,s,a,l;return u;function u(L){return c(L)}function c(L){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(L),d}function d(L){return L===33?(t.consume(L),h):L===47?(t.consume(L),o=!0,x):L===63?(t.consume(L),r=3,i.interrupt?e:A):ii(L)?(t.consume(L),s=String.fromCharCode(L),m):n(L)}function h(L){return L===45?(t.consume(L),r=2,p):L===91?(t.consume(L),r=5,a=0,g):ii(L)?(t.consume(L),r=4,i.interrupt?e:A):n(L)}function p(L){return L===45?(t.consume(L),i.interrupt?e:A):n(L)}function g(L){const Y="CDATA[";return L===Y.charCodeAt(a++)?(t.consume(L),a===Y.length?i.interrupt?e:U:g):n(L)}function x(L){return ii(L)?(t.consume(L),s=String.fromCharCode(L),m):n(L)}function m(L){if(L===null||L===47||L===62||fn(L)){const Y=L===47,oe=s.toLowerCase();return!Y&&!o&&Cg.includes(oe)?(r=1,i.interrupt?e(L):U(L)):db.includes(s.toLowerCase())?(r=6,Y?(t.consume(L),f):i.interrupt?e(L):U(L)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(L):o?_(L):v(L))}return L===45||vn(L)?(t.consume(L),s+=String.fromCharCode(L),m):n(L)}function f(L){return L===62?(t.consume(L),i.interrupt?e:U):n(L)}function _(L){return Ze(L)?(t.consume(L),_):S(L)}function v(L){return L===47?(t.consume(L),S):L===58||L===95||ii(L)?(t.consume(L),y):Ze(L)?(t.consume(L),v):S(L)}function y(L){return L===45||L===46||L===58||L===95||vn(L)?(t.consume(L),y):P(L)}function P(L){return L===61?(t.consume(L),M):Ze(L)?(t.consume(L),P):v(L)}function M(L){return L===null||L===60||L===61||L===62||L===96?n(L):L===34||L===39?(t.consume(L),l=L,R):Ze(L)?(t.consume(L),M):I(L)}function R(L){return L===l?(t.consume(L),l=null,T):L===null||Ne(L)?n(L):(t.consume(L),R)}function I(L){return L===null||L===34||L===39||L===47||L===60||L===61||L===62||L===96||fn(L)?P(L):(t.consume(L),I)}function T(L){return L===47||L===62||Ze(L)?v(L):n(L)}function S(L){return L===62?(t.consume(L),C):n(L)}function C(L){return L===null||Ne(L)?U(L):Ze(L)?(t.consume(L),C):n(L)}function U(L){return L===45&&r===2?(t.consume(L),G):L===60&&r===1?(t.consume(L),X):L===62&&r===4?(t.consume(L),le):L===63&&r===3?(t.consume(L),A):L===93&&r===5?(t.consume(L),$):Ne(L)&&(r===6||r===7)?(t.exit("htmlFlowData"),t.check(pb,xe,k)(L)):L===null||Ne(L)?(t.exit("htmlFlowData"),k(L)):(t.consume(L),U)}function k(L){return t.check(mb,V,xe)(L)}function V(L){return t.enter("lineEnding"),t.consume(L),t.exit("lineEnding"),O}function O(L){return L===null||Ne(L)?k(L):(t.enter("htmlFlowData"),U(L))}function G(L){return L===45?(t.consume(L),A):U(L)}function X(L){return L===47?(t.consume(L),s="",N):U(L)}function N(L){if(L===62){const Y=s.toLowerCase();return Cg.includes(Y)?(t.consume(L),le):U(L)}return ii(L)&&s.length<8?(t.consume(L),s+=String.fromCharCode(L),N):U(L)}function $(L){return L===93?(t.consume(L),A):U(L)}function A(L){return L===62?(t.consume(L),le):L===45&&r===2?(t.consume(L),A):U(L)}function le(L){return L===null||Ne(L)?(t.exit("htmlFlowData"),xe(L)):(t.consume(L),le)}function xe(L){return t.exit("htmlFlow"),e(L)}}function vb(t,e,n){const i=this;return r;function r(s){return Ne(s)?(t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),o):n(s)}function o(s){return i.parser.lazy[i.now().line]?n(s):e(s)}}function xb(t,e,n){return i;function i(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),t.attempt(Eu,e,n)}}const yb={name:"htmlText",tokenize:Sb};function Sb(t,e,n){const i=this;let r,o,s;return a;function a(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),l}function l(A){return A===33?(t.consume(A),u):A===47?(t.consume(A),P):A===63?(t.consume(A),v):ii(A)?(t.consume(A),I):n(A)}function u(A){return A===45?(t.consume(A),c):A===91?(t.consume(A),o=0,g):ii(A)?(t.consume(A),_):n(A)}function c(A){return A===45?(t.consume(A),p):n(A)}function d(A){return A===null?n(A):A===45?(t.consume(A),h):Ne(A)?(s=d,X(A)):(t.consume(A),d)}function h(A){return A===45?(t.consume(A),p):d(A)}function p(A){return A===62?G(A):A===45?h(A):d(A)}function g(A){const le="CDATA[";return A===le.charCodeAt(o++)?(t.consume(A),o===le.length?x:g):n(A)}function x(A){return A===null?n(A):A===93?(t.consume(A),m):Ne(A)?(s=x,X(A)):(t.consume(A),x)}function m(A){return A===93?(t.consume(A),f):x(A)}function f(A){return A===62?G(A):A===93?(t.consume(A),f):x(A)}function _(A){return A===null||A===62?G(A):Ne(A)?(s=_,X(A)):(t.consume(A),_)}function v(A){return A===null?n(A):A===63?(t.consume(A),y):Ne(A)?(s=v,X(A)):(t.consume(A),v)}function y(A){return A===62?G(A):v(A)}function P(A){return ii(A)?(t.consume(A),M):n(A)}function M(A){return A===45||vn(A)?(t.consume(A),M):R(A)}function R(A){return Ne(A)?(s=R,X(A)):Ze(A)?(t.consume(A),R):G(A)}function I(A){return A===45||vn(A)?(t.consume(A),I):A===47||A===62||fn(A)?T(A):n(A)}function T(A){return A===47?(t.consume(A),G):A===58||A===95||ii(A)?(t.consume(A),S):Ne(A)?(s=T,X(A)):Ze(A)?(t.consume(A),T):G(A)}function S(A){return A===45||A===46||A===58||A===95||vn(A)?(t.consume(A),S):C(A)}function C(A){return A===61?(t.consume(A),U):Ne(A)?(s=C,X(A)):Ze(A)?(t.consume(A),C):T(A)}function U(A){return A===null||A===60||A===61||A===62||A===96?n(A):A===34||A===39?(t.consume(A),r=A,k):Ne(A)?(s=U,X(A)):Ze(A)?(t.consume(A),U):(t.consume(A),V)}function k(A){return A===r?(t.consume(A),r=void 0,O):A===null?n(A):Ne(A)?(s=k,X(A)):(t.consume(A),k)}function V(A){return A===null||A===34||A===39||A===60||A===61||A===96?n(A):A===47||A===62||fn(A)?T(A):(t.consume(A),V)}function O(A){return A===47||A===62||fn(A)?T(A):n(A)}function G(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),e):n(A)}function X(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),N}function N(A){return Ze(A)?ct(t,$,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):$(A)}function $(A){return t.enter("htmlTextData"),s(A)}}const Bh={name:"labelEnd",resolveAll:Tb,resolveTo:Ab,tokenize:Cb},Eb={tokenize:Rb},Mb={tokenize:bb},wb={tokenize:Pb};function Tb(t){let e=-1;const n=[];for(;++e<t.length;){const i=t[e][1];if(n.push(t[e]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const r=i.type==="labelImage"?4:2;i.type="data",e+=r}}return t.length!==n.length&&ui(t,0,t.length,n),t}function Ab(t,e){let n=t.length,i=0,r,o,s,a;for(;n--;)if(r=t[n][1],o){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;t[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(s){if(t[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(o=n,r.type!=="labelLink")){i=2;break}}else r.type==="labelEnd"&&(s=n);const l={type:t[o][1].type==="labelLink"?"link":"image",start:{...t[o][1].start},end:{...t[t.length-1][1].end}},u={type:"label",start:{...t[o][1].start},end:{...t[s][1].end}},c={type:"labelText",start:{...t[o+i+2][1].end},end:{...t[s-2][1].start}};return a=[["enter",l,e],["enter",u,e]],a=bn(a,t.slice(o+1,o+i+3)),a=bn(a,[["enter",c,e]]),a=bn(a,zh(e.parser.constructs.insideSpan.null,t.slice(o+i+4,s-3),e)),a=bn(a,[["exit",c,e],t[s-2],t[s-1],["exit",u,e]]),a=bn(a,t.slice(s+1)),a=bn(a,[["exit",l,e]]),ui(t,o,t.length,a),t}function Cb(t,e,n){const i=this;let r=i.events.length,o,s;for(;r--;)if((i.events[r][1].type==="labelImage"||i.events[r][1].type==="labelLink")&&!i.events[r][1]._balanced){o=i.events[r][1];break}return a;function a(h){return o?o._inactive?d(h):(s=i.parser.defined.includes(Fo(i.sliceSerialize({start:o.end,end:i.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelEnd"),l):n(h)}function l(h){return h===40?t.attempt(Eb,c,s?c:d)(h):h===91?t.attempt(Mb,c,s?u:d)(h):s?c(h):d(h)}function u(h){return t.attempt(wb,c,d)(h)}function c(h){return e(h)}function d(h){return o._balanced=!0,n(h)}}function Rb(t,e,n){return i;function i(d){return t.enter("resource"),t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),r}function r(d){return fn(d)?Os(t,o)(d):o(d)}function o(d){return d===41?c(d):hx(t,s,a,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return fn(d)?Os(t,l)(d):c(d)}function a(d){return n(d)}function l(d){return d===34||d===39||d===40?mx(t,u,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):c(d)}function u(d){return fn(d)?Os(t,c)(d):c(d)}function c(d){return d===41?(t.enter("resourceMarker"),t.consume(d),t.exit("resourceMarker"),t.exit("resource"),e):n(d)}}function bb(t,e,n){const i=this;return r;function r(a){return px.call(i,t,o,s,"reference","referenceMarker","referenceString")(a)}function o(a){return i.parser.defined.includes(Fo(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?e(a):n(a)}function s(a){return n(a)}}function Pb(t,e,n){return i;function i(o){return t.enter("reference"),t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),r}function r(o){return o===93?(t.enter("referenceMarker"),t.consume(o),t.exit("referenceMarker"),t.exit("reference"),e):n(o)}}const Lb={name:"labelStartImage",resolveAll:Bh.resolveAll,tokenize:Ib};function Ib(t,e,n){const i=this;return r;function r(a){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(a),t.exit("labelImageMarker"),o}function o(a){return a===91?(t.enter("labelMarker"),t.consume(a),t.exit("labelMarker"),t.exit("labelImage"),s):n(a)}function s(a){return a===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(a):e(a)}}const Db={name:"labelStartLink",resolveAll:Bh.resolveAll,tokenize:Nb};function Nb(t,e,n){const i=this;return r;function r(s){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(s),t.exit("labelMarker"),t.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?n(s):e(s)}}const Lc={name:"lineEnding",tokenize:Ub};function Ub(t,e){return n;function n(i){return t.enter("lineEnding"),t.consume(i),t.exit("lineEnding"),ct(t,e,"linePrefix")}}const Tl={name:"thematicBreak",tokenize:kb};function kb(t,e,n){let i=0,r;return o;function o(u){return t.enter("thematicBreak"),s(u)}function s(u){return r=u,a(u)}function a(u){return u===r?(t.enter("thematicBreakSequence"),l(u)):i>=3&&(u===null||Ne(u))?(t.exit("thematicBreak"),e(u)):n(u)}function l(u){return u===r?(t.consume(u),i++,l):(t.exit("thematicBreakSequence"),Ze(u)?ct(t,a,"whitespace")(u):a(u))}}const tn={continuation:{tokenize:Bb},exit:Vb,name:"list",tokenize:zb},Fb={partial:!0,tokenize:Gb},Ob={partial:!0,tokenize:Hb};function zb(t,e,n){const i=this,r=i.events[i.events.length-1];let o=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,s=0;return a;function a(p){const g=i.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(g==="listUnordered"?!i.containerState.marker||p===i.containerState.marker:wd(p)){if(i.containerState.type||(i.containerState.type=g,t.enter(g,{_container:!0})),g==="listUnordered")return t.enter("listItemPrefix"),p===42||p===45?t.check(Tl,n,u)(p):u(p);if(!i.interrupt||p===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),l(p)}return n(p)}function l(p){return wd(p)&&++s<10?(t.consume(p),l):(!i.interrupt||s<2)&&(i.containerState.marker?p===i.containerState.marker:p===41||p===46)?(t.exit("listItemValue"),u(p)):n(p)}function u(p){return t.enter("listItemMarker"),t.consume(p),t.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||p,t.check(Eu,i.interrupt?n:c,t.attempt(Fb,h,d))}function c(p){return i.containerState.initialBlankLine=!0,o++,h(p)}function d(p){return Ze(p)?(t.enter("listItemPrefixWhitespace"),t.consume(p),t.exit("listItemPrefixWhitespace"),h):n(p)}function h(p){return i.containerState.size=o+i.sliceSerialize(t.exit("listItemPrefix"),!0).length,e(p)}}function Bb(t,e,n){const i=this;return i.containerState._closeFlow=void 0,t.check(Eu,r,o);function r(a){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,ct(t,e,"listItemIndent",i.containerState.size+1)(a)}function o(a){return i.containerState.furtherBlankLines||!Ze(a)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(a)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,t.attempt(Ob,e,s)(a))}function s(a){return i.containerState._closeFlow=!0,i.interrupt=void 0,ct(t,t.attempt(tn,e,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(a)}}function Hb(t,e,n){const i=this;return ct(t,r,"listItemIndent",i.containerState.size+1);function r(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?e(o):n(o)}}function Vb(t){t.exit(this.containerState.type)}function Gb(t,e,n){const i=this;return ct(t,r,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(o){const s=i.events[i.events.length-1];return!Ze(o)&&s&&s[1].type==="listItemPrefixWhitespace"?e(o):n(o)}}const Rg={name:"setextUnderline",resolveTo:Wb,tokenize:Xb};function Wb(t,e){let n=t.length,i,r,o;for(;n--;)if(t[n][0]==="enter"){if(t[n][1].type==="content"){i=n;break}t[n][1].type==="paragraph"&&(r=n)}else t[n][1].type==="content"&&t.splice(n,1),!o&&t[n][1].type==="definition"&&(o=n);const s={type:"setextHeading",start:{...t[r][1].start},end:{...t[t.length-1][1].end}};return t[r][1].type="setextHeadingText",o?(t.splice(r,0,["enter",s,e]),t.splice(o+1,0,["exit",t[i][1],e]),t[i][1].end={...t[o][1].end}):t[i][1]=s,t.push(["exit",s,e]),t}function Xb(t,e,n){const i=this;let r;return o;function o(u){let c=i.events.length,d;for(;c--;)if(i.events[c][1].type!=="lineEnding"&&i.events[c][1].type!=="linePrefix"&&i.events[c][1].type!=="content"){d=i.events[c][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||d)?(t.enter("setextHeadingLine"),r=u,s(u)):n(u)}function s(u){return t.enter("setextHeadingLineSequence"),a(u)}function a(u){return u===r?(t.consume(u),a):(t.exit("setextHeadingLineSequence"),Ze(u)?ct(t,l,"lineSuffix")(u):l(u))}function l(u){return u===null||Ne(u)?(t.exit("setextHeadingLine"),e(u)):n(u)}}const jb={tokenize:qb};function qb(t){const e=this,n=t.attempt(Eu,i,t.attempt(this.parser.constructs.flowInitial,r,ct(t,t.attempt(this.parser.constructs.flow,r,t.attempt(QR,r)),"linePrefix")));return n;function i(o){if(o===null){t.consume(o);return}return t.enter("lineEndingBlank"),t.consume(o),t.exit("lineEndingBlank"),e.currentConstruct=void 0,n}function r(o){if(o===null){t.consume(o);return}return t.enter("lineEnding"),t.consume(o),t.exit("lineEnding"),e.currentConstruct=void 0,n}}const $b={resolveAll:_x()},Yb=gx("string"),Kb=gx("text");function gx(t){return{resolveAll:_x(t==="text"?Zb:void 0),tokenize:e};function e(n){const i=this,r=this.parser.constructs[t],o=n.attempt(r,s,a);return s;function s(c){return u(c)?o(c):a(c)}function a(c){if(c===null){n.consume(c);return}return n.enter("data"),n.consume(c),l}function l(c){return u(c)?(n.exit("data"),o(c)):(n.consume(c),l)}function u(c){if(c===null)return!0;const d=r[c];let h=-1;if(d)for(;++h<d.length;){const p=d[h];if(!p.previous||p.previous.call(i,i.previous))return!0}return!1}}}function _x(t){return e;function e(n,i){let r=-1,o;for(;++r<=n.length;)o===void 0?n[r]&&n[r][1].type==="data"&&(o=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==o+2&&(n[o][1].end=n[r-1][1].end,n.splice(o+2,r-o-2),r=o+2),o=void 0);return t?t(n,i):n}}function Zb(t,e){let n=0;for(;++n<=t.length;)if((n===t.length||t[n][1].type==="lineEnding")&&t[n-1][1].type==="data"){const i=t[n-1][1],r=e.sliceStream(i);let o=r.length,s=-1,a=0,l;for(;o--;){const u=r[o];if(typeof u=="string"){for(s=u.length;u.charCodeAt(s-1)===32;)a++,s--;if(s)break;s=-1}else if(u===-2)l=!0,a++;else if(u!==-1){o++;break}}if(a){const u={type:n===t.length||l||a<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-a,offset:i.end.offset-a},end:{...i.end}};i.end={...u.start},i.start.offset===i.end.offset?Object.assign(i,u):(t.splice(n,0,["enter",u,e],["exit",u,e]),n+=2)}n++}return t}const Qb={42:tn,43:tn,45:tn,48:tn,49:tn,50:tn,51:tn,52:tn,53:tn,54:tn,55:tn,56:tn,57:tn,62:ux},Jb={91:ib},eP={[-2]:Pc,[-1]:Pc,32:Pc},tP={35:ub,42:Tl,45:[Rg,Tl],60:hb,61:Rg,95:Tl,96:Ag,126:Ag},nP={38:fx,92:cx},iP={[-5]:Lc,[-4]:Lc,[-3]:Lc,33:Lb,38:fx,42:Td,60:[DR,yb],91:Db,92:[ab,cx],93:Bh,95:Td,96:jR},rP={null:[Td,$b]},oP={null:[42,95]},sP={null:[]},aP=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:oP,contentInitial:Jb,disable:sP,document:Qb,flow:tP,flowInitial:eP,insideSpan:rP,string:nP,text:iP},Symbol.toStringTag,{value:"Module"}));function lP(t,e,n){let i={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},o=[];let s=[],a=[];const l={attempt:R(P),check:R(M),consume:_,enter:v,exit:y,interrupt:R(M,{interrupt:!0})},u={code:null,containerState:{},defineSkip:x,events:[],now:g,parser:t,previous:null,sliceSerialize:h,sliceStream:p,write:d};let c=e.tokenize.call(u,l);return e.resolveAll&&o.push(e),u;function d(C){return s=bn(s,C),m(),s[s.length-1]!==null?[]:(I(e,0),u.events=zh(o,u.events,u),u.events)}function h(C,U){return cP(p(C),U)}function p(C){return uP(s,C)}function g(){const{_bufferIndex:C,_index:U,line:k,column:V,offset:O}=i;return{_bufferIndex:C,_index:U,line:k,column:V,offset:O}}function x(C){r[C.line]=C.column,S()}function m(){let C;for(;i._index<s.length;){const U=s[i._index];if(typeof U=="string")for(C=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===C&&i._bufferIndex<U.length;)f(U.charCodeAt(i._bufferIndex));else f(U)}}function f(C){c=c(C)}function _(C){Ne(C)?(i.line++,i.column=1,i.offset+=C===-3?2:1,S()):C!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),u.previous=C}function v(C,U){const k=U||{};return k.type=C,k.start=g(),u.events.push(["enter",k,u]),a.push(k),k}function y(C){const U=a.pop();return U.end=g(),u.events.push(["exit",U,u]),U}function P(C,U){I(C,U.from)}function M(C,U){U.restore()}function R(C,U){return k;function k(V,O,G){let X,N,$,A;return Array.isArray(V)?xe(V):"tokenize"in V?xe([V]):le(V);function le(ce){return fe;function fe(Ae){const Le=Ae!==null&&ce[Ae],Ue=Ae!==null&&ce.null,nt=[...Array.isArray(Le)?Le:Le?[Le]:[],...Array.isArray(Ue)?Ue:Ue?[Ue]:[]];return xe(nt)(Ae)}}function xe(ce){return X=ce,N=0,ce.length===0?G:L(ce[N])}function L(ce){return fe;function fe(Ae){return A=T(),$=ce,ce.partial||(u.currentConstruct=ce),ce.name&&u.parser.constructs.disable.null.includes(ce.name)?oe():ce.tokenize.call(U?Object.assign(Object.create(u),U):u,l,Y,oe)(Ae)}}function Y(ce){return C($,A),O}function oe(ce){return A.restore(),++N<X.length?L(X[N]):G}}}function I(C,U){C.resolveAll&&!o.includes(C)&&o.push(C),C.resolve&&ui(u.events,U,u.events.length-U,C.resolve(u.events.slice(U),u)),C.resolveTo&&(u.events=C.resolveTo(u.events,u))}function T(){const C=g(),U=u.previous,k=u.currentConstruct,V=u.events.length,O=Array.from(a);return{from:V,restore:G};function G(){i=C,u.previous=U,u.currentConstruct=k,u.events.length=V,a=O,S()}}function S(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}function uP(t,e){const n=e.start._index,i=e.start._bufferIndex,r=e.end._index,o=e.end._bufferIndex;let s;if(n===r)s=[t[n].slice(i,o)];else{if(s=t.slice(n,r),i>-1){const a=s[0];typeof a=="string"?s[0]=a.slice(i):s.shift()}o>0&&s.push(t[r].slice(0,o))}return s}function cP(t,e){let n=-1;const i=[];let r;for(;++n<t.length;){const o=t[n];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=e?" ":"	";break}case-1:{if(!e&&r)continue;s=" ";break}default:s=String.fromCharCode(o)}r=o===-2,i.push(s)}return i.join("")}function fP(t){const i={constructs:vR([aP,...(t||{}).extensions||[]]),content:r(AR),defined:[],document:r(RR),flow:r(jb),lazy:{},string:r(Yb),text:r(Kb)};return i;function r(o){return s;function s(a){return lP(i,o,a)}}}function dP(t){for(;!dx(t););return t}const bg=/[\0\t\n\r]/g;function hP(){let t=1,e="",n=!0,i;return r;function r(o,s,a){const l=[];let u,c,d,h,p;for(o=e+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),d=0,e="",n&&(o.charCodeAt(0)===65279&&d++,n=void 0);d<o.length;){if(bg.lastIndex=d,u=bg.exec(o),h=u&&u.index!==void 0?u.index:o.length,p=o.charCodeAt(h),!u){e=o.slice(d);break}if(p===10&&d===h&&i)l.push(-3),i=void 0;else switch(i&&(l.push(-5),i=void 0),d<h&&(l.push(o.slice(d,h)),t+=h-d),p){case 0:{l.push(65533),t++;break}case 9:{for(c=Math.ceil(t/4)*4,l.push(-2);t++<c;)l.push(-1);break}case 10:{l.push(-4),t=1;break}default:i=!0,t=1}d=h+1}return a&&(i&&l.push(-5),e&&l.push(e),l.push(null)),l}}const pP=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function mP(t){return t.replace(pP,gP)}function gP(t,e,n){if(e)return e;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),o=r===120||r===88;return lx(n.slice(o?2:1),o?16:10)}return Oh(n)||t}const vx={}.hasOwnProperty;function _P(t,e,n){return typeof e!="string"&&(n=e,e=void 0),vP(n)(dP(fP(n).document().write(hP()(t,e,!0))))}function vP(t){const e={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(it),autolinkProtocol:T,autolinkEmail:T,atxHeading:o(qt),blockQuote:o(Ue),characterEscape:T,characterReference:T,codeFenced:o(nt),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(nt,s),codeText:o(je,s),codeTextData:T,data:T,codeFlowValue:T,definition:o(gt),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(H),hardBreakEscape:o(Ve),hardBreakTrailing:o(Ve),htmlFlow:o(Ge,s),htmlFlowData:T,htmlText:o(Ge,s),htmlTextData:T,image:o(be),label:s,link:o(it),listItem:o(b),listItemValue:h,listOrdered:o(Re,d),listUnordered:o(Re),paragraph:o(E),reference:L,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(qt),strong:o(W),thematicBreak:o(ne)},exit:{atxHeading:l(),atxHeadingSequence:P,autolink:l(),autolinkEmail:Le,autolinkProtocol:Ae,blockQuote:l(),characterEscapeValue:S,characterReferenceMarkerHexadecimal:oe,characterReferenceMarkerNumeric:oe,characterReferenceValue:ce,characterReference:fe,codeFenced:l(m),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:g,codeFlowValue:S,codeIndented:l(f),codeText:l(O),codeTextData:S,data:S,definition:l(),definitionDestinationString:y,definitionLabelString:_,definitionTitleString:v,emphasis:l(),hardBreakEscape:l(U),hardBreakTrailing:l(U),htmlFlow:l(k),htmlFlowData:S,htmlText:l(V),htmlTextData:S,image:l(X),label:$,labelText:N,lineEnding:C,link:l(G),listItem:l(),listOrdered:l(),listUnordered:l(),paragraph:l(),referenceString:Y,resourceDestinationString:A,resourceTitleString:le,resource:xe,setextHeading:l(I),setextHeadingLineSequence:R,setextHeadingText:M,strong:l(),thematicBreak:l()}};xx(e,(t||{}).mdastExtensions||[]);const n={};return i;function i(D){let Z={type:"root",children:[]};const J={stack:[Z],tokenStack:[],config:e,enter:a,exit:u,buffer:s,resume:c,data:n},ie=[];let Se=-1;for(;++Se<D.length;)if(D[Se][1].type==="listOrdered"||D[Se][1].type==="listUnordered")if(D[Se][0]==="enter")ie.push(Se);else{const re=ie.pop();Se=r(D,re,Se)}for(Se=-1;++Se<D.length;){const re=e[D[Se][0]];vx.call(re,D[Se][1].type)&&re[D[Se][1].type].call(Object.assign({sliceSerialize:D[Se][2].sliceSerialize},J),D[Se][1])}if(J.tokenStack.length>0){const re=J.tokenStack[J.tokenStack.length-1];(re[1]||Pg).call(J,void 0,re[0])}for(Z.position={start:Wi(D.length>0?D[0][1].start:{line:1,column:1,offset:0}),end:Wi(D.length>0?D[D.length-2][1].end:{line:1,column:1,offset:0})},Se=-1;++Se<e.transforms.length;)Z=e.transforms[Se](Z)||Z;return Z}function r(D,Z,J){let ie=Z-1,Se=-1,re=!1,pe,Ee,Pe,_e;for(;++ie<=J;){const Ie=D[ie];switch(Ie[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Ie[0]==="enter"?Se++:Se--,_e=void 0;break}case"lineEndingBlank":{Ie[0]==="enter"&&(pe&&!_e&&!Se&&!Pe&&(Pe=ie),_e=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_e=void 0}if(!Se&&Ie[0]==="enter"&&Ie[1].type==="listItemPrefix"||Se===-1&&Ie[0]==="exit"&&(Ie[1].type==="listUnordered"||Ie[1].type==="listOrdered")){if(pe){let De=ie;for(Ee=void 0;De--;){const Xe=D[De];if(Xe[1].type==="lineEnding"||Xe[1].type==="lineEndingBlank"){if(Xe[0]==="exit")continue;Ee&&(D[Ee][1].type="lineEndingBlank",re=!0),Xe[1].type="lineEnding",Ee=De}else if(!(Xe[1].type==="linePrefix"||Xe[1].type==="blockQuotePrefix"||Xe[1].type==="blockQuotePrefixWhitespace"||Xe[1].type==="blockQuoteMarker"||Xe[1].type==="listItemIndent"))break}Pe&&(!Ee||Pe<Ee)&&(pe._spread=!0),pe.end=Object.assign({},Ee?D[Ee][1].start:Ie[1].end),D.splice(Ee||ie,0,["exit",pe,Ie[2]]),ie++,J++}if(Ie[1].type==="listItemPrefix"){const De={type:"listItem",_spread:!1,start:Object.assign({},Ie[1].start),end:void 0};pe=De,D.splice(ie,0,["enter",De,Ie[2]]),ie++,J++,Pe=void 0,_e=!0}}}return D[Z][1]._spread=re,J}function o(D,Z){return J;function J(ie){a.call(this,D(ie),ie),Z&&Z.call(this,ie)}}function s(){this.stack.push({type:"fragment",children:[]})}function a(D,Z,J){this.stack[this.stack.length-1].children.push(D),this.stack.push(D),this.tokenStack.push([Z,J||void 0]),D.position={start:Wi(Z.start),end:void 0}}function l(D){return Z;function Z(J){D&&D.call(this,J),u.call(this,J)}}function u(D,Z){const J=this.stack.pop(),ie=this.tokenStack.pop();if(ie)ie[0].type!==D.type&&(Z?Z.call(this,D,ie[0]):(ie[1]||Pg).call(this,D,ie[0]));else throw new Error("Cannot close `"+D.type+"` ("+Fs({start:D.start,end:D.end})+"): it’s not open");J.position.end=Wi(D.end)}function c(){return gR(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function h(D){if(this.data.expectingFirstListItemValue){const Z=this.stack[this.stack.length-2];Z.start=Number.parseInt(this.sliceSerialize(D),10),this.data.expectingFirstListItemValue=void 0}}function p(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.lang=D}function g(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.meta=D}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function m(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.value=D.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function f(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.value=D.replace(/(\r?\n|\r)$/g,"")}function _(D){const Z=this.resume(),J=this.stack[this.stack.length-1];J.label=Z,J.identifier=Fo(this.sliceSerialize(D)).toLowerCase()}function v(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.title=D}function y(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.url=D}function P(D){const Z=this.stack[this.stack.length-1];if(!Z.depth){const J=this.sliceSerialize(D).length;Z.depth=J}}function M(){this.data.setextHeadingSlurpLineEnding=!0}function R(D){const Z=this.stack[this.stack.length-1];Z.depth=this.sliceSerialize(D).codePointAt(0)===61?1:2}function I(){this.data.setextHeadingSlurpLineEnding=void 0}function T(D){const J=this.stack[this.stack.length-1].children;let ie=J[J.length-1];(!ie||ie.type!=="text")&&(ie=ee(),ie.position={start:Wi(D.start),end:void 0},J.push(ie)),this.stack.push(ie)}function S(D){const Z=this.stack.pop();Z.value+=this.sliceSerialize(D),Z.position.end=Wi(D.end)}function C(D){const Z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const J=Z.children[Z.children.length-1];J.position.end=Wi(D.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&e.canContainEols.includes(Z.type)&&(T.call(this,D),S.call(this,D))}function U(){this.data.atHardBreak=!0}function k(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.value=D}function V(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.value=D}function O(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.value=D}function G(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=Z,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function X(){const D=this.stack[this.stack.length-1];if(this.data.inReference){const Z=this.data.referenceType||"shortcut";D.type+="Reference",D.referenceType=Z,delete D.url,delete D.title}else delete D.identifier,delete D.label;this.data.referenceType=void 0}function N(D){const Z=this.sliceSerialize(D),J=this.stack[this.stack.length-2];J.label=mP(Z),J.identifier=Fo(Z).toLowerCase()}function $(){const D=this.stack[this.stack.length-1],Z=this.resume(),J=this.stack[this.stack.length-1];if(this.data.inReference=!0,J.type==="link"){const ie=D.children;J.children=ie}else J.alt=Z}function A(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.url=D}function le(){const D=this.resume(),Z=this.stack[this.stack.length-1];Z.title=D}function xe(){this.data.inReference=void 0}function L(){this.data.referenceType="collapsed"}function Y(D){const Z=this.resume(),J=this.stack[this.stack.length-1];J.label=Z,J.identifier=Fo(this.sliceSerialize(D)).toLowerCase(),this.data.referenceType="full"}function oe(D){this.data.characterReferenceType=D.type}function ce(D){const Z=this.sliceSerialize(D),J=this.data.characterReferenceType;let ie;J?(ie=lx(Z,J==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):ie=Oh(Z);const Se=this.stack[this.stack.length-1];Se.value+=ie}function fe(D){const Z=this.stack.pop();Z.position.end=Wi(D.end)}function Ae(D){S.call(this,D);const Z=this.stack[this.stack.length-1];Z.url=this.sliceSerialize(D)}function Le(D){S.call(this,D);const Z=this.stack[this.stack.length-1];Z.url="mailto:"+this.sliceSerialize(D)}function Ue(){return{type:"blockquote",children:[]}}function nt(){return{type:"code",lang:null,meta:null,value:""}}function je(){return{type:"inlineCode",value:""}}function gt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function H(){return{type:"emphasis",children:[]}}function qt(){return{type:"heading",depth:0,children:[]}}function Ve(){return{type:"break"}}function Ge(){return{type:"html",value:""}}function be(){return{type:"image",title:null,url:"",alt:null}}function it(){return{type:"link",title:null,url:"",children:[]}}function Re(D){return{type:"list",ordered:D.type==="listOrdered",start:null,spread:D._spread,children:[]}}function b(D){return{type:"listItem",spread:D._spread,checked:null,children:[]}}function E(){return{type:"paragraph",children:[]}}function W(){return{type:"strong",children:[]}}function ee(){return{type:"text",value:""}}function ne(){return{type:"thematicBreak"}}}function Wi(t){return{line:t.line,column:t.column,offset:t.offset}}function xx(t,e){let n=-1;for(;++n<e.length;){const i=e[n];Array.isArray(i)?xx(t,i):xP(t,i)}}function xP(t,e){let n;for(n in e)if(vx.call(e,n))switch(n){case"canContainEols":{const i=e[n];i&&t[n].push(...i);break}case"transforms":{const i=e[n];i&&t[n].push(...i);break}case"enter":case"exit":{const i=e[n];i&&Object.assign(t[n],i);break}}}function Pg(t,e){throw t?new Error("Cannot close `"+t.type+"` ("+Fs({start:t.start,end:t.end})+"): a different token (`"+e.type+"`, "+Fs({start:e.start,end:e.end})+") is open"):new Error("Cannot close document, a token (`"+e.type+"`, "+Fs({start:e.start,end:e.end})+") is still open")}function yP(t){const e=this;e.parser=n;function n(i){return _P(i,{...e.data("settings"),...t,extensions:e.data("micromarkExtensions")||[],mdastExtensions:e.data("fromMarkdownExtensions")||[]})}}function SP(t,e){const n={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(e),!0)};return t.patch(e,n),t.applyData(e,n)}function EP(t,e){const n={type:"element",tagName:"br",properties:{},children:[]};return t.patch(e,n),[t.applyData(e,n),{type:"text",value:`
`}]}function MP(t,e){const n=e.value?e.value+`
`:"",i={};e.lang&&(i.className=["language-"+e.lang]);let r={type:"element",tagName:"code",properties:i,children:[{type:"text",value:n}]};return e.meta&&(r.data={meta:e.meta}),t.patch(e,r),r=t.applyData(e,r),r={type:"element",tagName:"pre",properties:{},children:[r]},t.patch(e,r),r}function wP(t,e){const n={type:"element",tagName:"del",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function TP(t,e){const n={type:"element",tagName:"em",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function AP(t,e){const n=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",i=String(e.identifier).toUpperCase(),r=rs(i.toLowerCase()),o=t.footnoteOrder.indexOf(i);let s,a=t.footnoteCounts.get(i);a===void 0?(a=0,t.footnoteOrder.push(i),s=t.footnoteOrder.length):s=o+1,a+=1,t.footnoteCounts.set(i,a);const l={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(a>1?"-"+a:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};t.patch(e,l);const u={type:"element",tagName:"sup",properties:{},children:[l]};return t.patch(e,u),t.applyData(e,u)}function CP(t,e){const n={type:"element",tagName:"h"+e.depth,properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function RP(t,e){if(t.options.allowDangerousHtml){const n={type:"raw",value:e.value};return t.patch(e,n),t.applyData(e,n)}}function yx(t,e){const n=e.referenceType;let i="]";if(n==="collapsed"?i+="[]":n==="full"&&(i+="["+(e.label||e.identifier)+"]"),e.type==="imageReference")return[{type:"text",value:"!["+e.alt+i}];const r=t.all(e),o=r[0];o&&o.type==="text"?o.value="["+o.value:r.unshift({type:"text",value:"["});const s=r[r.length-1];return s&&s.type==="text"?s.value+=i:r.push({type:"text",value:i}),r}function bP(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return yx(t,e);const r={src:rs(i.url||""),alt:e.alt};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"img",properties:r,children:[]};return t.patch(e,o),t.applyData(e,o)}function PP(t,e){const n={src:rs(e.url)};e.alt!==null&&e.alt!==void 0&&(n.alt=e.alt),e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"img",properties:n,children:[]};return t.patch(e,i),t.applyData(e,i)}function LP(t,e){const n={type:"text",value:e.value.replace(/\r?\n|\r/g," ")};t.patch(e,n);const i={type:"element",tagName:"code",properties:{},children:[n]};return t.patch(e,i),t.applyData(e,i)}function IP(t,e){const n=String(e.identifier).toUpperCase(),i=t.definitionById.get(n);if(!i)return yx(t,e);const r={href:rs(i.url||"")};i.title!==null&&i.title!==void 0&&(r.title=i.title);const o={type:"element",tagName:"a",properties:r,children:t.all(e)};return t.patch(e,o),t.applyData(e,o)}function DP(t,e){const n={href:rs(e.url)};e.title!==null&&e.title!==void 0&&(n.title=e.title);const i={type:"element",tagName:"a",properties:n,children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function NP(t,e,n){const i=t.all(e),r=n?UP(n):Sx(e),o={},s=[];if(typeof e.checked=="boolean"){const c=i[0];let d;c&&c.type==="element"&&c.tagName==="p"?d=c:(d={type:"element",tagName:"p",properties:{},children:[]},i.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:e.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let a=-1;for(;++a<i.length;){const c=i[a];(r||a!==0||c.type!=="element"||c.tagName!=="p")&&s.push({type:"text",value:`
`}),c.type==="element"&&c.tagName==="p"&&!r?s.push(...c.children):s.push(c)}const l=i[i.length-1];l&&(r||l.type!=="element"||l.tagName!=="p")&&s.push({type:"text",value:`
`});const u={type:"element",tagName:"li",properties:o,children:s};return t.patch(e,u),t.applyData(e,u)}function UP(t){let e=!1;if(t.type==="list"){e=t.spread||!1;const n=t.children;let i=-1;for(;!e&&++i<n.length;)e=Sx(n[i])}return e}function Sx(t){const e=t.spread;return e??t.children.length>1}function kP(t,e){const n={},i=t.all(e);let r=-1;for(typeof e.start=="number"&&e.start!==1&&(n.start=e.start);++r<i.length;){const s=i[r];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const o={type:"element",tagName:e.ordered?"ol":"ul",properties:n,children:t.wrap(i,!0)};return t.patch(e,o),t.applyData(e,o)}function FP(t,e){const n={type:"element",tagName:"p",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function OP(t,e){const n={type:"root",children:t.wrap(t.all(e))};return t.patch(e,n),t.applyData(e,n)}function zP(t,e){const n={type:"element",tagName:"strong",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}function BP(t,e){const n=t.all(e),i=n.shift(),r=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:t.wrap([i],!0)};t.patch(e.children[0],s),r.push(s)}if(n.length>0){const s={type:"element",tagName:"tbody",properties:{},children:t.wrap(n,!0)},a=Nh(e.children[1]),l=tx(e.children[e.children.length-1]);a&&l&&(s.position={start:a,end:l}),r.push(s)}const o={type:"element",tagName:"table",properties:{},children:t.wrap(r,!0)};return t.patch(e,o),t.applyData(e,o)}function HP(t,e,n){const i=n?n.children:void 0,o=(i?i.indexOf(e):1)===0?"th":"td",s=n&&n.type==="table"?n.align:void 0,a=s?s.length:e.children.length;let l=-1;const u=[];for(;++l<a;){const d=e.children[l],h={},p=s?s[l]:void 0;p&&(h.align=p);let g={type:"element",tagName:o,properties:h,children:[]};d&&(g.children=t.all(d),t.patch(d,g),g=t.applyData(d,g)),u.push(g)}const c={type:"element",tagName:"tr",properties:{},children:t.wrap(u,!0)};return t.patch(e,c),t.applyData(e,c)}function VP(t,e){const n={type:"element",tagName:"td",properties:{},children:t.all(e)};return t.patch(e,n),t.applyData(e,n)}const Lg=9,Ig=32;function GP(t){const e=String(t),n=/\r?\n|\r/g;let i=n.exec(e),r=0;const o=[];for(;i;)o.push(Dg(e.slice(r,i.index),r>0,!0),i[0]),r=i.index+i[0].length,i=n.exec(e);return o.push(Dg(e.slice(r),r>0,!1)),o.join("")}function Dg(t,e,n){let i=0,r=t.length;if(e){let o=t.codePointAt(i);for(;o===Lg||o===Ig;)i++,o=t.codePointAt(i)}if(n){let o=t.codePointAt(r-1);for(;o===Lg||o===Ig;)r--,o=t.codePointAt(r-1)}return r>i?t.slice(i,r):""}function WP(t,e){const n={type:"text",value:GP(String(e.value))};return t.patch(e,n),t.applyData(e,n)}function XP(t,e){const n={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(e,n),t.applyData(e,n)}const jP={blockquote:SP,break:EP,code:MP,delete:wP,emphasis:TP,footnoteReference:AP,heading:CP,html:RP,imageReference:bP,image:PP,inlineCode:LP,linkReference:IP,link:DP,listItem:NP,list:kP,paragraph:FP,root:OP,strong:zP,table:BP,tableCell:VP,tableRow:HP,text:WP,thematicBreak:XP,toml:rl,yaml:rl,definition:rl,footnoteDefinition:rl};function rl(){}const Ex=-1,Mu=0,Jl=1,eu=2,Hh=3,Vh=4,Gh=5,Wh=6,Mx=7,wx=8,Ng=typeof self=="object"?self:globalThis,qP=(t,e)=>{const n=(r,o)=>(t.set(o,r),r),i=r=>{if(t.has(r))return t.get(r);const[o,s]=e[r];switch(o){case Mu:case Ex:return n(s,r);case Jl:{const a=n([],r);for(const l of s)a.push(i(l));return a}case eu:{const a=n({},r);for(const[l,u]of s)a[i(l)]=i(u);return a}case Hh:return n(new Date(s),r);case Vh:{const{source:a,flags:l}=s;return n(new RegExp(a,l),r)}case Gh:{const a=n(new Map,r);for(const[l,u]of s)a.set(i(l),i(u));return a}case Wh:{const a=n(new Set,r);for(const l of s)a.add(i(l));return a}case Mx:{const{name:a,message:l}=s;return n(new Ng[a](l),r)}case wx:return n(BigInt(s),r);case"BigInt":return n(Object(BigInt(s)),r)}return n(new Ng[o](s),r)};return i},Ug=t=>qP(new Map,t)(0),ho="",{toString:$P}={},{keys:YP}=Object,Ss=t=>{const e=typeof t;if(e!=="object"||!t)return[Mu,e];const n=$P.call(t).slice(8,-1);switch(n){case"Array":return[Jl,ho];case"Object":return[eu,ho];case"Date":return[Hh,ho];case"RegExp":return[Vh,ho];case"Map":return[Gh,ho];case"Set":return[Wh,ho]}return n.includes("Array")?[Jl,n]:n.includes("Error")?[Mx,n]:[eu,n]},ol=([t,e])=>t===Mu&&(e==="function"||e==="symbol"),KP=(t,e,n,i)=>{const r=(s,a)=>{const l=i.push(s)-1;return n.set(a,l),l},o=s=>{if(n.has(s))return n.get(s);let[a,l]=Ss(s);switch(a){case Mu:{let c=s;switch(l){case"bigint":a=wx,c=s.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+l);c=null;break;case"undefined":return r([Ex],s)}return r([a,c],s)}case Jl:{if(l)return r([l,[...s]],s);const c=[],d=r([a,c],s);for(const h of s)c.push(o(h));return d}case eu:{if(l)switch(l){case"BigInt":return r([l,s.toString()],s);case"Boolean":case"Number":case"String":return r([l,s.valueOf()],s)}if(e&&"toJSON"in s)return o(s.toJSON());const c=[],d=r([a,c],s);for(const h of YP(s))(t||!ol(Ss(s[h])))&&c.push([o(h),o(s[h])]);return d}case Hh:return r([a,s.toISOString()],s);case Vh:{const{source:c,flags:d}=s;return r([a,{source:c,flags:d}],s)}case Gh:{const c=[],d=r([a,c],s);for(const[h,p]of s)(t||!(ol(Ss(h))||ol(Ss(p))))&&c.push([o(h),o(p)]);return d}case Wh:{const c=[],d=r([a,c],s);for(const h of s)(t||!ol(Ss(h)))&&c.push(o(h));return d}}const{message:u}=s;return r([a,{name:l,message:u}],s)};return o},kg=(t,{json:e,lossy:n}={})=>{const i=[];return KP(!(e||n),!!e,new Map,i)(t),i},tu=typeof structuredClone=="function"?(t,e)=>e&&("json"in e||"lossy"in e)?Ug(kg(t,e)):structuredClone(t):(t,e)=>Ug(kg(t,e));function ZP(t,e){const n=[{type:"text",value:"↩"}];return e>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(e)}]}),n}function QP(t,e){return"Back to reference "+(t+1)+(e>1?"-"+e:"")}function JP(t){const e=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",n=t.options.footnoteBackContent||ZP,i=t.options.footnoteBackLabel||QP,r=t.options.footnoteLabel||"Footnotes",o=t.options.footnoteLabelTagName||"h2",s=t.options.footnoteLabelProperties||{className:["sr-only"]},a=[];let l=-1;for(;++l<t.footnoteOrder.length;){const u=t.footnoteById.get(t.footnoteOrder[l]);if(!u)continue;const c=t.all(u),d=String(u.identifier).toUpperCase(),h=rs(d.toLowerCase());let p=0;const g=[],x=t.footnoteCounts.get(d);for(;x!==void 0&&++p<=x;){g.length>0&&g.push({type:"text",value:" "});let _=typeof n=="string"?n:n(l,p);typeof _=="string"&&(_={type:"text",value:_}),g.push({type:"element",tagName:"a",properties:{href:"#"+e+"fnref-"+h+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(l,p),className:["data-footnote-backref"]},children:Array.isArray(_)?_:[_]})}const m=c[c.length-1];if(m&&m.type==="element"&&m.tagName==="p"){const _=m.children[m.children.length-1];_&&_.type==="text"?_.value+=" ":m.children.push({type:"text",value:" "}),m.children.push(...g)}else c.push(...g);const f={type:"element",tagName:"li",properties:{id:e+"fn-"+h},children:t.wrap(c,!0)};t.patch(u,f),a.push(f)}if(a.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...tu(s),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(a,!0)},{type:"text",value:`
`}]}}const Tx=function(t){if(t==null)return i2;if(typeof t=="function")return wu(t);if(typeof t=="object")return Array.isArray(t)?e2(t):t2(t);if(typeof t=="string")return n2(t);throw new Error("Expected function, string, or object as test")};function e2(t){const e=[];let n=-1;for(;++n<t.length;)e[n]=Tx(t[n]);return wu(i);function i(...r){let o=-1;for(;++o<e.length;)if(e[o].apply(this,r))return!0;return!1}}function t2(t){const e=t;return wu(n);function n(i){const r=i;let o;for(o in t)if(r[o]!==e[o])return!1;return!0}}function n2(t){return wu(e);function e(n){return n&&n.type===t}}function wu(t){return e;function e(n,i,r){return!!(r2(n)&&t.call(this,n,typeof i=="number"?i:void 0,r||void 0))}}function i2(){return!0}function r2(t){return t!==null&&typeof t=="object"&&"type"in t}const Ax=[],o2=!0,Fg=!1,s2="skip";function a2(t,e,n,i){let r;typeof e=="function"&&typeof n!="function"?(i=n,n=e):r=e;const o=Tx(r),s=i?-1:1;a(t,void 0,[])();function a(l,u,c){const d=l&&typeof l=="object"?l:{};if(typeof d.type=="string"){const p=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(h,"name",{value:"node ("+(l.type+(p?"<"+p+">":""))+")"})}return h;function h(){let p=Ax,g,x,m;if((!e||o(l,u,c[c.length-1]||void 0))&&(p=l2(n(l,c)),p[0]===Fg))return p;if("children"in l&&l.children){const f=l;if(f.children&&p[0]!==s2)for(x=(i?f.children.length:-1)+s,m=c.concat(f);x>-1&&x<f.children.length;){const _=f.children[x];if(g=a(_,x,m)(),g[0]===Fg)return g;x=typeof g[1]=="number"?g[1]:x+s}}return p}}}function l2(t){return Array.isArray(t)?t:typeof t=="number"?[o2,t]:t==null?Ax:[t]}function Cx(t,e,n,i){let r,o,s;typeof e=="function"&&typeof n!="function"?(o=void 0,s=e,r=n):(o=e,s=n,r=i),a2(t,o,a,r);function a(l,u){const c=u[u.length-1],d=c?c.children.indexOf(l):void 0;return s(l,d,c)}}const Ad={}.hasOwnProperty,u2={};function c2(t,e){const n=e||u2,i=new Map,r=new Map,o=new Map,s={...jP,...n.handlers},a={all:u,applyData:d2,definitionById:i,footnoteById:r,footnoteCounts:o,footnoteOrder:[],handlers:s,one:l,options:n,patch:f2,wrap:p2};return Cx(t,function(c){if(c.type==="definition"||c.type==="footnoteDefinition"){const d=c.type==="definition"?i:r,h=String(c.identifier).toUpperCase();d.has(h)||d.set(h,c)}}),a;function l(c,d){const h=c.type,p=a.handlers[h];if(Ad.call(a.handlers,h)&&p)return p(a,c,d);if(a.options.passThrough&&a.options.passThrough.includes(h)){if("children"in c){const{children:x,...m}=c,f=tu(m);return f.children=a.all(c),f}return tu(c)}return(a.options.unknownHandler||h2)(a,c,d)}function u(c){const d=[];if("children"in c){const h=c.children;let p=-1;for(;++p<h.length;){const g=a.one(h[p],c);if(g){if(p&&h[p-1].type==="break"&&(!Array.isArray(g)&&g.type==="text"&&(g.value=Og(g.value)),!Array.isArray(g)&&g.type==="element")){const x=g.children[0];x&&x.type==="text"&&(x.value=Og(x.value))}Array.isArray(g)?d.push(...g):d.push(g)}}}return d}}function f2(t,e){t.position&&(e.position=jC(t))}function d2(t,e){let n=e;if(t&&t.data){const i=t.data.hName,r=t.data.hChildren,o=t.data.hProperties;if(typeof i=="string")if(n.type==="element")n.tagName=i;else{const s="children"in n?n.children:[n];n={type:"element",tagName:i,properties:{},children:s}}n.type==="element"&&o&&Object.assign(n.properties,tu(o)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function h2(t,e){const n=e.data||{},i="value"in e&&!(Ad.call(n,"hProperties")||Ad.call(n,"hChildren"))?{type:"text",value:e.value}:{type:"element",tagName:"div",properties:{},children:t.all(e)};return t.patch(e,i),t.applyData(e,i)}function p2(t,e){const n=[];let i=-1;for(e&&n.push({type:"text",value:`
`});++i<t.length;)i&&n.push({type:"text",value:`
`}),n.push(t[i]);return e&&t.length>0&&n.push({type:"text",value:`
`}),n}function Og(t){let e=0,n=t.charCodeAt(e);for(;n===9||n===32;)e++,n=t.charCodeAt(e);return t.slice(e)}function zg(t,e){const n=c2(t,e),i=n.one(t,void 0),r=JP(n),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return r&&o.children.push({type:"text",value:`
`},r),o}function m2(t,e){return t&&"run"in t?async function(n,i){const r=zg(n,{file:i,...e});await t.run(r,i)}:function(n,i){return zg(n,{file:i,...t||e})}}function Bg(t){if(t)throw t}var Al=Object.prototype.hasOwnProperty,Rx=Object.prototype.toString,Hg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,Gg=function(e){return typeof Array.isArray=="function"?Array.isArray(e):Rx.call(e)==="[object Array]"},Wg=function(e){if(!e||Rx.call(e)!=="[object Object]")return!1;var n=Al.call(e,"constructor"),i=e.constructor&&e.constructor.prototype&&Al.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!n&&!i)return!1;var r;for(r in e);return typeof r>"u"||Al.call(e,r)},Xg=function(e,n){Hg&&n.name==="__proto__"?Hg(e,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):e[n.name]=n.newValue},jg=function(e,n){if(n==="__proto__")if(Al.call(e,n)){if(Vg)return Vg(e,n).value}else return;return e[n]},g2=function t(){var e,n,i,r,o,s,a=arguments[0],l=1,u=arguments.length,c=!1;for(typeof a=="boolean"&&(c=a,a=arguments[1]||{},l=2),(a==null||typeof a!="object"&&typeof a!="function")&&(a={});l<u;++l)if(e=arguments[l],e!=null)for(n in e)i=jg(a,n),r=jg(e,n),a!==r&&(c&&r&&(Wg(r)||(o=Gg(r)))?(o?(o=!1,s=i&&Gg(i)?i:[]):s=i&&Wg(i)?i:{},Xg(a,{name:n,newValue:t(c,s,r)})):typeof r<"u"&&Xg(a,{name:n,newValue:r}));return a};const Ic=e_(g2);function Cd(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function _2(){const t=[],e={run:n,use:i};return e;function n(...r){let o=-1;const s=r.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);a(null,...r);function a(l,...u){const c=t[++o];let d=-1;if(l){s(l);return}for(;++d<r.length;)(u[d]===null||u[d]===void 0)&&(u[d]=r[d]);r=u,c?v2(c,a)(...u):s(null,...u)}}function i(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return t.push(r),e}}function v2(t,e){let n;return i;function i(...s){const a=t.length>s.length;let l;a&&s.push(r);try{l=t.apply(this,s)}catch(u){const c=u;if(a&&n)throw c;return r(c)}a||(l&&l.then&&typeof l.then=="function"?l.then(o,r):l instanceof Error?r(l):o(l))}function r(s,...a){n||(n=!0,e(s,...a))}function o(s){r(null,s)}}const ei={basename:x2,dirname:y2,extname:S2,join:E2,sep:"/"};function x2(t,e){if(e!==void 0&&typeof e!="string")throw new TypeError('"ext" argument must be a string');ga(t);let n=0,i=-1,r=t.length,o;if(e===void 0||e.length===0||e.length>t.length){for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else i<0&&(o=!0,i=r+1);return i<0?"":t.slice(n,i)}if(e===t)return"";let s=-1,a=e.length-1;for(;r--;)if(t.codePointAt(r)===47){if(o){n=r+1;break}}else s<0&&(o=!0,s=r+1),a>-1&&(t.codePointAt(r)===e.codePointAt(a--)?a<0&&(i=r):(a=-1,i=s));return n===i?i=s:i<0&&(i=t.length),t.slice(n,i)}function y2(t){if(ga(t),t.length===0)return".";let e=-1,n=t.length,i;for(;--n;)if(t.codePointAt(n)===47){if(i){e=n;break}}else i||(i=!0);return e<0?t.codePointAt(0)===47?"/":".":e===1&&t.codePointAt(0)===47?"//":t.slice(0,e)}function S2(t){ga(t);let e=t.length,n=-1,i=0,r=-1,o=0,s;for(;e--;){const a=t.codePointAt(e);if(a===47){if(s){i=e+1;break}continue}n<0&&(s=!0,n=e+1),a===46?r<0?r=e:o!==1&&(o=1):r>-1&&(o=-1)}return r<0||n<0||o===0||o===1&&r===n-1&&r===i+1?"":t.slice(r,n)}function E2(...t){let e=-1,n;for(;++e<t.length;)ga(t[e]),t[e]&&(n=n===void 0?t[e]:n+"/"+t[e]);return n===void 0?".":M2(n)}function M2(t){ga(t);const e=t.codePointAt(0)===47;let n=w2(t,!e);return n.length===0&&!e&&(n="."),n.length>0&&t.codePointAt(t.length-1)===47&&(n+="/"),e?"/"+n:n}function w2(t,e){let n="",i=0,r=-1,o=0,s=-1,a,l;for(;++s<=t.length;){if(s<t.length)a=t.codePointAt(s);else{if(a===47)break;a=47}if(a===47){if(!(r===s-1||o===1))if(r!==s-1&&o===2){if(n.length<2||i!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(l=n.lastIndexOf("/"),l!==n.length-1){l<0?(n="",i=0):(n=n.slice(0,l),i=n.length-1-n.lastIndexOf("/")),r=s,o=0;continue}}else if(n.length>0){n="",i=0,r=s,o=0;continue}}e&&(n=n.length>0?n+"/..":"..",i=2)}else n.length>0?n+="/"+t.slice(r+1,s):n=t.slice(r+1,s),i=s-r-1;r=s,o=0}else a===46&&o>-1?o++:o=-1}return n}function ga(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const T2={cwd:A2};function A2(){return"/"}function Rd(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function C2(t){if(typeof t=="string")t=new URL(t);else if(!Rd(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if(t.protocol!=="file:"){const e=new TypeError("The URL must be of scheme file");throw e.code="ERR_INVALID_URL_SCHEME",e}return R2(t)}function R2(t){if(t.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const e=t.pathname;let n=-1;for(;++n<e.length;)if(e.codePointAt(n)===37&&e.codePointAt(n+1)===50){const i=e.codePointAt(n+2);if(i===70||i===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(e)}const Dc=["history","path","basename","stem","extname","dirname"];class bx{constructor(e){let n;e?Rd(e)?n={path:e}:typeof e=="string"||b2(e)?n={value:e}:n=e:n={},this.cwd="cwd"in n?"":T2.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Dc.length;){const o=Dc[i];o in n&&n[o]!==void 0&&n[o]!==null&&(this[o]=o==="history"?[...n[o]]:n[o])}let r;for(r in n)Dc.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?ei.basename(this.path):void 0}set basename(e){Uc(e,"basename"),Nc(e,"basename"),this.path=ei.join(this.dirname||"",e)}get dirname(){return typeof this.path=="string"?ei.dirname(this.path):void 0}set dirname(e){qg(this.basename,"dirname"),this.path=ei.join(e||"",this.basename)}get extname(){return typeof this.path=="string"?ei.extname(this.path):void 0}set extname(e){if(Nc(e,"extname"),qg(this.dirname,"extname"),e){if(e.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(e.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=ei.join(this.dirname,this.stem+(e||""))}get path(){return this.history[this.history.length-1]}set path(e){Rd(e)&&(e=C2(e)),Uc(e,"path"),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path=="string"?ei.basename(this.path,this.extname):void 0}set stem(e){Uc(e,"stem"),Nc(e,"stem"),this.path=ei.join(this.dirname||"",e+(this.extname||""))}fail(e,n,i){const r=this.message(e,n,i);throw r.fatal=!0,r}info(e,n,i){const r=this.message(e,n,i);return r.fatal=void 0,r}message(e,n,i){const r=new jt(e,n,i);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(e||void 0).decode(this.value)}}function Nc(t,e){if(t&&t.includes(ei.sep))throw new Error("`"+e+"` cannot be a path: did not expect `"+ei.sep+"`")}function Uc(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function qg(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}function b2(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const P2=function(t){const i=this.constructor.prototype,r=i[t],o=function(){return r.apply(o,arguments)};return Object.setPrototypeOf(o,i),o},L2={}.hasOwnProperty;class Xh extends P2{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=_2()}copy(){const e=new Xh;let n=-1;for(;++n<this.attachers.length;){const i=this.attachers[n];e.use(...i)}return e.data(Ic(!0,{},this.namespace)),e}data(e,n){return typeof e=="string"?arguments.length===2?(Oc("data",this.frozen),this.namespace[e]=n,this):L2.call(this.namespace,e)&&this.namespace[e]||void 0:e?(Oc("data",this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;const e=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const r=n.call(e,...i);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(e){this.freeze();const n=sl(e),i=this.parser||this.Parser;return kc("parse",i),i(String(n),n)}process(e,n){const i=this;return this.freeze(),kc("process",this.parser||this.Parser),Fc("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(o,s){const a=sl(e),l=i.parse(a);i.run(l,a,function(c,d,h){if(c||!d||!h)return u(c);const p=d,g=i.stringify(p,h);N2(g)?h.value=g:h.result=g,u(c,h)});function u(c,d){c||!d?s(c):o?o(d):n(void 0,d)}}}processSync(e){let n=!1,i;return this.freeze(),kc("processSync",this.parser||this.Parser),Fc("processSync",this.compiler||this.Compiler),this.process(e,r),Yg("processSync","process",n),i;function r(o,s){n=!0,Bg(o),i=s}}run(e,n,i){$g(e),this.freeze();const r=this.transformers;return!i&&typeof n=="function"&&(i=n,n=void 0),i?o(void 0,i):new Promise(o);function o(s,a){const l=sl(n);r.run(e,l,u);function u(c,d,h){const p=d||e;c?a(c):s?s(p):i(void 0,p,h)}}}runSync(e,n){let i=!1,r;return this.run(e,n,o),Yg("runSync","run",i),r;function o(s,a){Bg(s),r=a,i=!0}}stringify(e,n){this.freeze();const i=sl(n),r=this.compiler||this.Compiler;return Fc("stringify",r),$g(e),r(e,i)}use(e,...n){const i=this.attachers,r=this.namespace;if(Oc("use",this.frozen),e!=null)if(typeof e=="function")l(e,n);else if(typeof e=="object")Array.isArray(e)?a(e):s(e);else throw new TypeError("Expected usable value, not `"+e+"`");return this;function o(u){if(typeof u=="function")l(u,[]);else if(typeof u=="object")if(Array.isArray(u)){const[c,...d]=u;l(c,d)}else s(u);else throw new TypeError("Expected usable value, not `"+u+"`")}function s(u){if(!("plugins"in u)&&!("settings"in u))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");a(u.plugins),u.settings&&(r.settings=Ic(!0,r.settings,u.settings))}function a(u){let c=-1;if(u!=null)if(Array.isArray(u))for(;++c<u.length;){const d=u[c];o(d)}else throw new TypeError("Expected a list of plugins, not `"+u+"`")}function l(u,c){let d=-1,h=-1;for(;++d<i.length;)if(i[d][0]===u){h=d;break}if(h===-1)i.push([u,...c]);else if(c.length>0){let[p,...g]=c;const x=i[h][1];Cd(x)&&Cd(p)&&(p=Ic(!0,x,p)),i[h]=[u,p,...g]}}}}const I2=new Xh().freeze();function kc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Fc(t,e){if(typeof e!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Oc(t,e){if(e)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function $g(t){if(!Cd(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Yg(t,e,n){if(!n)throw new Error("`"+t+"` finished async. Use `"+e+"` instead")}function sl(t){return D2(t)?t:new bx(t)}function D2(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function N2(t){return typeof t=="string"||U2(t)}function U2(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const k2="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Kg=[],Zg={allowDangerousHtml:!0},F2=/^(https?|ircs?|mailto|xmpp)$/i,O2=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function z2(t){const e=t.allowedElements,n=t.allowElement,i=t.children||"",r=t.className,o=t.components,s=t.disallowedElements,a=t.rehypePlugins||Kg,l=t.remarkPlugins||Kg,u=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...Zg}:Zg,c=t.skipHtml,d=t.unwrapDisallowed,h=t.urlTransform||B2,p=I2().use(yP).use(l).use(m2,u).use(a),g=new bx;typeof i=="string"&&(g.value=i);for(const _ of O2)Object.hasOwn(t,_.from)&&(""+_.from+(_.to?"use `"+_.to+"` instead":"remove it")+k2+_.id,void 0);const x=p.parse(g);let m=p.runSync(x,g);return r&&(m={type:"element",tagName:"div",properties:{className:r},children:m.type==="root"?m.children:[m]}),Cx(m,f),QC(m,{Fragment:qe.Fragment,components:o,ignoreInvalidStyle:!0,jsx:qe.jsx,jsxs:qe.jsxs,passKeys:!0,passNode:!0});function f(_,v,y){if(_.type==="raw"&&y&&typeof v=="number")return c?y.children.splice(v,1):y.children[v]={type:"text",value:_.value},v;if(_.type==="element"){let P;for(P in bc)if(Object.hasOwn(bc,P)&&Object.hasOwn(_.properties,P)){const M=_.properties[P],R=bc[P];(R===null||R.includes(_.tagName))&&(_.properties[P]=h(String(M||""),P,_))}}if(_.type==="element"){let P=e?!e.includes(_.tagName):s?s.includes(_.tagName):!1;if(!P&&n&&typeof v=="number"&&(P=!n(_,v,y)),P&&y&&typeof v=="number")return d&&_.children?y.children.splice(v,1,..._.children):y.children.splice(v,1),v}}}function B2(t){const e=t.indexOf(":"),n=t.indexOf("?"),i=t.indexOf("#"),r=t.indexOf("/");return e<0||r>-1&&e>r||n>-1&&e>n||i>-1&&e>i||F2.test(t.slice(0,e))?t:""}const Qg=`# Henry Benn
Orlando, FL  
352 978 5552  
henry.j.benn@gmail.com  
[LinkedIn](https://www.linkedin.com/in/henry-benn/)

## Professional Summary
Data Professional with specialization in SQL, Python, Snowflake, and a high-level understanding of how data applies to business operations. Strong background in data engineering, machine learning, and executive-facing data visualization.

## Certifications
- Comp TIA Data+ (Expected Jan 2025)

## Professional Experience

### Data Engineer
**The Walt Disney Company, Orlando, FL** | December 2023 - Present
- **Data Engineering/DevOps:** Managed on-prem Airflow containers for large-scale data orchestration as well as Dev-Ops tools including AWS, Azure, and Snowflake.
- **Visualization Development:** Created executive-facing dashboards using PowerBI, Tableau, and custom solutions.
- **Machine Learning/AI Ops:** Conducted risk analysis, automated incident data summaries, and implemented NLP for advanced data insights. Leveraging AI for advanced monitoring solutions.
- **System Administration:** Administered the team's Snowflake account, optimizing database operations and supporting strategic decision-making.
*Extensively used SQL and Python in all tasks.*

### Data Analyst
**A1 Stone World, Jacksonville, FL** | November 2022 - September 2023
- **Data Analysis & Predictive Modeling**: Skilled in using Python, R, and Excel for analyzing production data, forecasting demand, and optimizing manufacturing processes.
- **Financial Reporting & Analysis**: Proficient in generating financial reports, cost analysis, and budgeting using tools like QuickBooks and SAP to support business decisions.
- **Data Visualization & Reporting**: Adept at creating actionable dashboards with Power BI and Tableau to communicate fabrication metrics and financial insights to management.
- **Process Optimization & Quality Control**: Knowledge of lean manufacturing and statistical process control (SPC) to improve efficiency and ensure product quality.

### Agricultural Analyst
**Goorarooman Farming, Thallon, QLD** | January 2020 - January 2021
- **Data Analysis & Statistical Modeling**: Proficient in analyzing agricultural data using R, SAS, and SPSS to forecast trends and optimize crop/livestock outcomes.
- **Geospatial & Remote Sensing Expertise**: Skilled in GIS (ArcGIS, QGIS) and satellite imagery tools (Sentinel-2, Landsat) for precision agriculture and land-use mapping.
- **Data Visualization & Reporting**: Experienced in creating actionable insights with Tableau and Power BI for stakeholders in farming and agribusiness.
- **Agricultural Knowledge**: Deep understanding of agronomy and sustainable practices to drive data-informed decisions in farm management and policy.

## Education

### Bachelor's Degree
**The University of New South Wales** | Jan 2015 - Jan 2020`;let Er=[];const H2=async t=>{try{console.log("Sending message:",t),t==="START_CHAT"&&(Er=[]),Er.push({role:"user",content:t}),Er.length>8&&(Er=Er.slice(-8));const e=await fetch("http://localhost:3000/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t,history:Er})});if(!e.ok){const r=await e.json();throw new Error(r.details||"Server error")}const n=await e.json();console.log("Received response:",n);let i=[];if(n.content&&Array.isArray(n.content)){const r=n.content.filter(s=>s.type==="text").map(s=>s.text);i.push(...r),Er.push({role:"assistant",content:r.join(`
`)});const o=n.content.find(s=>s.type==="tool_use");if(o&&o.name==="send_email"){const s=[`
Email Details:`,"To: henry.j.benn@gmail.com",`CC: ${o.input.userEmail}`,`Subject: ${o.input.subject}`,`
Message:`,`${o.input.message}`].join(`
`);i.push(s),n.emailResult&&n.emailResult.success?i.push(`
Email sent successfully!`):i.push(`
Failed to send email. Please try again.`)}}return i.join(`
`)}catch(e){throw console.error("Error getting AI response:",e),e}},V2=`---
title: Post Title Here
date: YYYY-MM-DD
tags: tag1, tag2, tag3
description: One sentence summary shown in the blog list.
---

# Post Title Here

Opening paragraph — set the scene or state the problem.

## Section Heading

Body content goes here. Markdown is fully supported:

- Bullet point one
- Bullet point two
- Bullet point three

### Sub-heading

More detailed content. You can use **bold** for emphasis and \`inline code\` for technical terms.

\`\`\`
code blocks work too
\`\`\`

## Conclusion

Wrap-up paragraph.
`,G2=`---
title: Hello World
date: 2026-04-09
tags: meta, intro
description: First post — what this blog is and what I'll write about.
---

# Hello World

Every terminal needs a hello world. This is mine.

## What this is

This blog lives inside my portfolio terminal. It runs on markdown files sitting in a folder — no CMS, no database, no nonsense. You write a file, it shows up here.

The aesthetic is intentional. I spend most of my time in terminals and dashboards, and I wanted a corner of the internet that felt like that. Something with a little texture.

## What I'll write about

Mostly data engineering, AI tooling, and the occasional rabbit hole. Things I figured out the hard way, patterns I keep reaching for, ideas I want to think through in public.

No particular schedule. When there's something worth saying, it goes here.

## The stack

- React + Vite
- Three.js for the CRT shader overlay
- Markdown files in a folder
- Deployed to GitHub Pages

That's it. Simple on purpose.

---

Type \`blog\` to see all posts.
`,W2=Object.assign({"../posts/TEMPLATE.md":V2,"../posts/hello-world.md":G2});function X2(t){const e=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!e)return{meta:{},body:t};const n={};return e[1].split(`
`).forEach(i=>{const r=i.indexOf(":");if(r>-1){const o=i.slice(0,r).trim(),s=i.slice(r+1).trim();o&&(n[o]=s)}}),{meta:n,body:e[2].trim()}}function Mr(){return Object.entries(W2).filter(([t])=>!t.includes("TEMPLATE")).map(([t,e])=>{const n=t.split("/").pop().replace(".md",""),{meta:i,body:r}=X2(e);return{slug:n,title:i.title||n,date:i.date||"",tags:i.tags||"",description:i.description||"",body:r}}).sort((t,e)=>e.date.localeCompare(t.date))}function j2({initialInput:t,initialPost:e}){const[n,i]=Rt.useState([]),[r,o]=Rt.useState(""),[s,a]=Rt.useState(!1),[l,u]=Rt.useState(!1),[c,d]=Rt.useState(null),h=Rt.useRef(null),p=Rt.useRef(null),g=Rt.useRef(!1),x=(C,U)=>{document.title=C?`${C} | Henry's Terminal`:"Henry's Terminal";const k=document.querySelector('meta[name="description"]');k&&k.setAttribute("content",U||"Henry Benn's interactive terminal portfolio")};Rt.useEffect(()=>{if(g.current)return;g.current=!0;const k=["Welcome to henryOS v0.1.337 (Prototype Build)","---------------------------------------------","[*] Kernel initialized... ✓","[*] Memory allocation... ✓","[*] Digital anima awakened... ✓","[*] Caffeine reserves: 92%"," ","    ▓█████▒░ henryOS ░▒█████▓","    Making use of your data, one byte at a time."," ",`Last login: ${new Date().toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0})}`,'Type "help" for available commands.'];(async()=>{a(!0);for(const O of k)await new Promise(G=>{i(X=>[...X,{text:O,isAI:!1}]),setTimeout(()=>{m(),G()},50)});a(!1),e&&await I(`blog ${e}`)})()},[]);const m=()=>{p.current&&(p.current.scrollTop=p.current.scrollHeight)};Rt.useEffect(()=>{var C;(C=h.current)==null||C.focus()},[s]),Rt.useEffect(()=>{t&&T({key:"Enter",preventDefault:()=>{}})},[t]);const f=async C=>{if(typeof C=="string"){const U=C.split(`
`);for(const k of U)await new Promise(V=>{i(O=>[...O,{text:k,isAI:!1}]),setTimeout(()=>{m(),V()},50)})}else if(typeof C=="object")if(C.isMarkdown){const k=v(C.text).split(`
`);for(const V of k)await new Promise(O=>{i(G=>[...G,{text:V,isAI:!1,isMarkdown:!0}]),setTimeout(()=>{m(),O()},50)})}else{const U=C.text.split(`
`);for(const k of U)await new Promise(V=>{i(O=>[...O,{text:k,isAI:C.isAI||!1,isHTML:C.isHTML||!1}]),setTimeout(()=>{m(),V()},50)})}},_=(C,U)=>{const k=C.split(" "),V=[];let O=[],G=0;return k.forEach(X=>{if(G+X.length+1>U)if(G>0&&(V.push(O.join(" ")),O=[],G=0),X.length>U){const N=X.match(new RegExp(`.{1,${U}}`,"g"))||[];N.forEach(($,A)=>{A===N.length-1?(O=[$],G=$.length):V.push($)})}else O=[X],G=X.length;else O.push(X),G+=X.length+(G>0?1:0)}),O.length>0&&V.push(O.join(" ")),V.map(X=>X.trim())},v=C=>{const U=p.current;if(!U)return C;const k=U.getBoundingClientRect().width;if(k<768)return C.replace(/\r/g,"").split(`
`).map(Y=>Y.trim()).join(`
`);const V=k-40,G=Math.floor(V/9.5),X=G-4,N="═".repeat(G-2),$=`╔${N}╗`,A=`╚${N}╝`,le=`║${" ".repeat(G-2)}║`,L=C.replace(/\r/g,"").split(`
`).map(Y=>_(Y.trim(),X)).flat().map(Y=>`║ ${Y.padEnd(X," ")} ║`);return[$,le,...L,le,A].join(`
`)},y=async C=>{if(C.length===0){await f("No posts found.");return}const U=["BLOG","─".repeat(48),...C.flatMap((k,V)=>[`[${V+1}] ${k.date}  ${k.title}`,`    slug: ${k.slug}`,k.tags?`    tags: ${k.tags}`:null,k.description?`    ${k.description}`:null,""]).filter(k=>k!==null),'Type "blog <number>" or "blog <slug>" to read a post.'].join(`
`);await f(U)},P=async(C,U)=>{const k=Mr();d(U),x(C.title,C.description);const V=window.location.origin+window.location.pathname;window.history.replaceState({},"",`${V}?post=${C.slug}`);const O=`# ${C.title}
${C.date}${C.tags?"  |  "+C.tags:""}

`;await f({text:O+C.body,isMarkdown:!0});const G=`${V}?post=${C.slug}`,X=k.length>1?'Type "next" / "prev" to navigate posts, "q" to return to list.':'Type "q" to return to list.',N=["─".repeat(48),`permalink  : ${G}`,`published  : ${C.date}`,C.tags?`tags       : ${C.tags}`:null,"",X].filter($=>$!==null).join(`
`);await f(N)},M={1:{name:"📊 Data Pipeline Automation",description:"Automated ETL processes using Airflow",url:"/projects/data-pipeline.html"},2:{name:"🤖 AI Chat Interface",url:"https://github.com/hbenn/ai-chat-interface"},3:{name:"📈 Interactive Dashboard",url:"/projects/dashboard.html"},4:{name:"🔍 ML Analysis Tool",url:"https://github.com/hbenn/ml-analysis"}},R=(C,U)=>`<a href="${U.url}" target="_blank" rel="noopener noreferrer" class="terminal-link clickable-project" data-project="${C}">${U.name}</a>`,I=async C=>{const U=C.toLowerCase().trim();await f({text:`> ${C}`,isAI:!1});try{if(U==="blog"||U.startsWith("blog ")){const V=U.split(" "),O=Mr();if(V.length===1){d(null),x(null,null),window.history.replaceState({},"",window.location.origin+window.location.pathname),await y(O);return}const G=V.slice(1).join(" "),X=parseInt(G,10);let N,$;if(isNaN(X)){if($=O.findIndex(A=>A.slug===G),$===-1){await f(`Post "${G}" not found. Type "blog" to list available posts.`);return}N=O[$]}else{if(X<1||X>O.length){await f(`Post not found. There are ${O.length} post(s). Type "blog" to list them.`);return}$=X-1,N=O[$]}await P(N,$);return}const k=U.match(/^cat posts\/(.+)$/);if(k){const V=k[1],O=Mr(),G=O.findIndex(X=>X.slug===V);G===-1?await f(`cat: posts/${V}: No such file or directory`):await P(O[G],G);return}if(U==="ls posts"||U==="ls posts/"){const V=Mr(),O=["total "+V.length,...V.map(G=>`${G.date}  ${G.slug}.md`)].join(`
`);await f(O);return}switch(U){case"help":await f(`Available commands:
- clear            : Clear the terminal
- help             : Show this help message
- about            : Learn about me and my projects
- resume           : Display resume
- blog             : List all blog posts
- blog <n>         : Read post by number
- blog <slug>      : Read post by slug
- cat posts/<slug> : Same as blog <slug>
- ls posts         : List post files
- next             : Next post (when reading)
- prev             : Previous post (when reading)
- q / back         : Return to blog list (when reading)
- chat             : Start a chat with my digital anima
- contact          : View contact information`);break;case"clear":i([]);break;case"chat":await f(`Chat is currently disabled.
It works, but I need to find a server that wont kill my wallet.
I made a digital version of me using a custom LLM. It can answer any questions about me and also send me emails from you, on your behalf.


--------------------------------


For now, please use the "contact" command to get my details.`);break;case"resume":await f({text:Qg,isMarkdown:!0});break;case"--exit":l?(u(!1),await f({text:"Exiting chat mode...",isAI:!1})):await f({text:"Not in chat mode.",isAI:!1});break;case"q":case"back":c!==null?(d(null),x(null,null),window.history.replaceState({},"",window.location.origin+window.location.pathname),await y(Mr())):await f({text:'Not reading a post. Type "blog" to list posts.',isAI:!1});break;case"next":{if(c!==null){const V=Mr(),O=c+1;O>=V.length?await f('No more posts. Type "prev" to go back or "q" to return to list.'):await P(V[O],O)}else await f({text:'Not reading a post. Type "blog" to list posts.',isAI:!1});break}case"prev":{if(c!==null){const V=Mr(),O=c-1;O<0?await f('Already at the first post. Type "next" to go forward or "q" to return to list.'):await P(V[O],O)}else await f({text:'Not reading a post. Type "blog" to list posts.',isAI:!1});break}case"about":await f({text:`About Henry Benn
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
${Object.entries(M).map(([V,O])=>`${R(V,O)} - ${O.description||""}`).join(`
`)}

Click any project to view more details.`,isHTML:!0});break;case"contact":await f({text:`Contact Information
-------------------
Email: <a href="mailto:henry.j.benn@gmail.com" class="terminal-link">henry.j.benn@gmail.com</a>
LinkedIn: <a href="https://linkedin.com/in/henry-benn" target="_blank" class="terminal-link">linkedin.com/in/henry-benn</a>
GitHub: <a href="https://github.com/henryb11" target="_blank" class="terminal-link">github.com/henryb11</a>

Feel free to reach out! I'm always open to interesting conversations and opportunities.`,isHTML:!0});break;default:if(l){await f({text:"Processing response...",isAI:!1});try{const V=await H2(C);await f({text:V,isAI:!0})}catch(V){await f({text:`Error: ${V.message}`,isAI:!0})}}else await f({text:`Command not found: ${C}. Type "help" for available commands.`,isAI:!1})}}catch(k){console.error("Error handling command:",k),await f({text:`Error: ${k.message}`,isAI:!0})}},T=async C=>{if(C.key==="Enter"&&!s){const U=t||r.trim();o(""),await I(U)}},S=()=>{var C;(C=h.current)==null||C.focus()};return Rt.useEffect(()=>{const C=()=>{if(p.current){const U=n[n.length-1];U&&U.text.includes("resume")&&i(k=>{const V=[...k];return V[V.length-1]={text:v(Qg),isAI:!1},V})}};return window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)},[n]),qe.jsx("div",{className:"terminal-window",onClick:S,children:qe.jsxs("div",{className:"terminal-output",ref:p,children:[n.map((C,U)=>qe.jsx("div",{className:`terminal-line ${C.isAI?"ai-response":""}`,children:C.isMarkdown?qe.jsx(z2,{children:C.text}):C.isHTML?qe.jsx("div",{dangerouslySetInnerHTML:{__html:C.text}}):C.text},U)),qe.jsxs("div",{className:"terminal-input-line",children:[!s&&(l?"chat>":">"),qe.jsx("input",{ref:h,type:"text",value:r,onChange:C=>o(C.target.value),onKeyDown:T,disabled:s})]})]})})}const Jg=[`

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
`];function q2(){const[t,e]=Rt.useState(0),[n,i]=Rt.useState(""),r=new URLSearchParams(window.location.search).get("post")||"";Rt.useEffect(()=>{const s=setInterval(()=>{e(a=>(a+1)%Jg.length)},1262);return()=>clearInterval(s)},[]),Rt.useEffect(()=>{const s=document.getElementById("shader-overlay");return dC(s)},[]);const o=s=>{i(s)};return qe.jsxs(qe.Fragment,{children:[qe.jsxs("div",{className:"crt-screen",children:[qe.jsx("canvas",{id:"shader-overlay"}),qe.jsxs("div",{className:"sidebar",children:[qe.jsx("div",{className:"header-monitor monitor-frame",children:qe.jsx("div",{className:"terminal-container",children:qe.jsxs("div",{className:"content",children:[qe.jsx("div",{className:"ascii-art",children:Jg[t]}),qe.jsx("div",{className:"terminal-text",children:"Data Solutions"})]})})}),qe.jsxs("div",{className:"menu-options",children:[qe.jsx("button",{className:"menu-item",onClick:()=>o("help"),children:"Help"}),qe.jsx("button",{className:"menu-item",onClick:()=>o("about"),children:"About"}),qe.jsx("button",{className:"menu-item",onClick:()=>o("contact"),children:"Contact"}),qe.jsx("button",{className:"menu-item",onClick:()=>o("resume"),children:"Resume"}),qe.jsx("button",{className:"menu-item",onClick:()=>o("blog"),children:"Blog"})]})]}),qe.jsx("div",{className:"main-content",children:qe.jsx("div",{className:"terminal-container",children:qe.jsx(j2,{initialInput:n,initialPost:r})})})]}),qe.jsx("div",{className:"monitor-footer",style:{backgroundImage:`url(${sE})`,display:"flex",justifyContent:"center",alignItems:"center"},children:qe.jsx("img",{src:aE,alt:"HBM Logo",style:{height:"80%",maxWidth:"100px",objectFit:"contain"}})})]})}zc.createRoot(document.getElementById("root")).render(qe.jsx($x.StrictMode,{children:qe.jsx(q2,{})}));
