(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var C0={exports:{}},pc={},S0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),kI=Symbol.for("react.portal"),NI=Symbol.for("react.fragment"),xI=Symbol.for("react.strict_mode"),RI=Symbol.for("react.profiler"),AI=Symbol.for("react.provider"),PI=Symbol.for("react.context"),DI=Symbol.for("react.forward_ref"),OI=Symbol.for("react.suspense"),bI=Symbol.for("react.memo"),LI=Symbol.for("react.lazy"),ty=Symbol.iterator;function MI(t){return t===null||typeof t!="object"?null:(t=ty&&t[ty]||t["@@iterator"],typeof t=="function"?t:null)}var T0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,k0={};function As(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||T0}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function N0(){}N0.prototype=As.prototype;function cp(t,e,n){this.props=t,this.context=e,this.refs=k0,this.updater=n||T0}var hp=cp.prototype=new N0;hp.constructor=cp;I0(hp,As.prototype);hp.isPureReactComponent=!0;var ny=Array.isArray,x0=Object.prototype.hasOwnProperty,dp={current:null},R0={key:!0,ref:!0,__self:!0,__source:!0};function A0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)x0.call(e,r)&&!R0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ia,type:t,key:s,ref:o,props:i,_owner:dp.current}}function FI(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function $I(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ry=/\/+/g;function Eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$I(""+t.key):e.toString(36)}function Fl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ia:case kI:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Eh(o,0):r,ny(i)?(n="",t!=null&&(n=t.replace(ry,"$&/")+"/"),Fl(i,e,n,"",function(u){return u})):i!=null&&(fp(i)&&(i=FI(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ry,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",ny(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Eh(s,a);o+=Fl(s,e,n,l,i)}else if(l=MI(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Eh(s,a++),o+=Fl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(t,e,n){if(t==null)return t;var r=[],i=0;return Fl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jI(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},$l={transition:null},UI={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:$l,ReactCurrentOwner:dp};Y.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!fp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=As;Y.Fragment=NI;Y.Profiler=RI;Y.PureComponent=cp;Y.StrictMode=xI;Y.Suspense=OI;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UI;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=dp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)x0.call(e,l)&&!R0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ia,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:PI,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AI,_context:t},t.Consumer=t};Y.createElement=A0;Y.createFactory=function(t){var e=A0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:DI,render:t}};Y.isValidElement=fp;Y.lazy=function(t){return{$$typeof:LI,_payload:{_status:-1,_result:t},_init:jI}};Y.memo=function(t,e){return{$$typeof:bI,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return gt.current.useCallback(t,e)};Y.useContext=function(t){return gt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return gt.current.useEffect(t,e)};Y.useId=function(){return gt.current.useId()};Y.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return gt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};Y.useRef=function(t){return gt.current.useRef(t)};Y.useState=function(t){return gt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return gt.current.useTransition()};Y.version="18.2.0";S0.exports=Y;var I=S0.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VI=I,zI=Symbol.for("react.element"),BI=Symbol.for("react.fragment"),WI=Object.prototype.hasOwnProperty,HI=VI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,KI={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WI.call(e,r)&&!KI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:zI,type:t,key:s,ref:o,props:i,_owner:HI.current}}pc.Fragment=BI;pc.jsx=P0;pc.jsxs=P0;C0.exports=pc;var d=C0.exports,wd={},D0={exports:{}},Dt={},O0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,U){var H=A.length;A.push(U);e:for(;0<H;){var fe=H-1>>>1,Se=A[fe];if(0<i(Se,U))A[fe]=U,A[H]=Se,H=fe;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var U=A[0],H=A.pop();if(H!==U){A[0]=H;e:for(var fe=0,Se=A.length,Mr=Se>>>1;fe<Mr;){var _n=2*(fe+1)-1,Ks=A[_n],wn=_n+1,xi=A[wn];if(0>i(Ks,H))wn<Se&&0>i(xi,Ks)?(A[fe]=xi,A[wn]=H,fe=wn):(A[fe]=Ks,A[_n]=H,fe=_n);else if(wn<Se&&0>i(xi,H))A[fe]=xi,A[wn]=H,fe=wn;else break e}}return U}function i(A,U){var H=A.sortIndex-U.sortIndex;return H!==0?H:A.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,m=!1,v=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=A)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function w(A){if(_=!1,y(A),!v)if(n(l)!==null)v=!0,ki(N);else{var U=n(u);U!==null&&Ni(w,U.startTime-A)}}function N(A,U){v=!1,_&&(_=!1,g(O),O=-1),m=!0;var H=f;try{for(y(U),h=n(l);h!==null&&(!(h.expirationTime>U)||A&&!Le());){var fe=h.callback;if(typeof fe=="function"){h.callback=null,f=h.priorityLevel;var Se=fe(h.expirationTime<=U);U=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&r(l),y(U)}else r(l);h=n(l)}if(h!==null)var Mr=!0;else{var _n=n(u);_n!==null&&Ni(w,_n.startTime-U),Mr=!1}return Mr}finally{h=null,f=H,m=!1}}var R=!1,P=null,O=-1,ee=5,B=-1;function Le(){return!(t.unstable_now()-B<ee)}function nn(){if(P!==null){var A=t.unstable_now();B=A;var U=!0;try{U=P(!0,A)}finally{U?Gn():(R=!1,P=null)}}else R=!1}var Gn;if(typeof p=="function")Gn=function(){p(nn)};else if(typeof MessageChannel<"u"){var Lr=new MessageChannel,rl=Lr.port2;Lr.port1.onmessage=nn,Gn=function(){rl.postMessage(null)}}else Gn=function(){E(nn,0)};function ki(A){P=A,R||(R=!0,Gn())}function Ni(A,U){O=E(function(){A(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,ki(N))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var H=f;f=U;try{return A()}finally{f=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,U){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var H=f;f=A;try{return U()}finally{f=H}},t.unstable_scheduleCallback=function(A,U,H){var fe=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?fe+H:fe):H=fe,A){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=H+Se,A={id:c++,callback:U,priorityLevel:A,startTime:H,expirationTime:Se,sortIndex:-1},H>fe?(A.sortIndex=H,e(u,A),n(l)===null&&A===n(u)&&(_?(g(O),O=-1):_=!0,Ni(w,H-fe))):(A.sortIndex=Se,e(l,A),v||m||(v=!0,ki(N))),A},t.unstable_shouldYield=Le,t.unstable_wrapCallback=function(A){var U=f;return function(){var H=f;f=U;try{return A.apply(this,arguments)}finally{f=H}}}})(b0);O0.exports=b0;var qI=O0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=I,At=qI;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M0=new Set,Lo={};function vi(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(Lo[t]=e,t=0;t<e.length;t++)M0.add(e[t])}var On=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,GI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iy={},sy={};function QI(t){return Ed.call(sy,t)?!0:Ed.call(iy,t)?!1:GI.test(t)?sy[t]=!0:(iy[t]=!0,!1)}function YI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function XI(t,e,n,r){if(e===null||typeof e>"u"||YI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ye={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ye[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ye[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ye[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ye[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ye[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ye[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ye[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ye[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ye[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pp=/[\-:]([a-z])/g;function mp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pp,mp);Ye[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pp,mp);Ye[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pp,mp);Ye[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ye[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ye.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ye[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gp(t,e,n,r){var i=Ye.hasOwnProperty(e)?Ye[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(XI(e,n,i,r)&&(n=null),r||i===null?QI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Wn=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),yp=Symbol.for("react.strict_mode"),Cd=Symbol.for("react.profiler"),F0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),vp=Symbol.for("react.forward_ref"),Sd=Symbol.for("react.suspense"),Td=Symbol.for("react.suspense_list"),_p=Symbol.for("react.memo"),Xn=Symbol.for("react.lazy"),j0=Symbol.for("react.offscreen"),oy=Symbol.iterator;function qs(t){return t===null||typeof t!="object"?null:(t=oy&&t[oy]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Ch;function ao(t){if(Ch===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ch=e&&e[1]||""}return`
`+Ch+t}var Sh=!1;function Th(t,e){if(!t||Sh)return"";Sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ao(t):""}function JI(t){switch(t.tag){case 5:return ao(t.type);case 16:return ao("Lazy");case 13:return ao("Suspense");case 19:return ao("SuspenseList");case 0:case 2:case 15:return t=Th(t.type,!1),t;case 11:return t=Th(t.type.render,!1),t;case 1:return t=Th(t.type,!0),t;default:return""}}function Id(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case bi:return"Portal";case Cd:return"Profiler";case yp:return"StrictMode";case Sd:return"Suspense";case Td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case $0:return(t.displayName||"Context")+".Consumer";case F0:return(t._context.displayName||"Context")+".Provider";case vp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _p:return e=t.displayName||null,e!==null?e:Id(t.type)||"Memo";case Xn:e=t._payload,t=t._init;try{return Id(t(e))}catch{}}return null}function ZI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Id(e);case 8:return e===yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ek(t){var e=U0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=ek(t))}function V0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=U0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ru(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kd(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ay(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function z0(t,e){e=e.checked,e!=null&&gp(t,"checked",e,!1)}function Nd(t,e){z0(t,e);var n=Cr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xd(t,e.type,n):e.hasOwnProperty("defaultValue")&&xd(t,e.type,Cr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ly(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xd(t,e,n){(e!=="number"||ru(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var lo=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function uy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(lo(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cr(n)}}function B0(t,e){var n=Cr(e.value),r=Cr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function W0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?W0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,H0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var go={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},tk=["Webkit","ms","Moz","O"];Object.keys(go).forEach(function(t){tk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),go[e]=go[t]})});function K0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||go.hasOwnProperty(t)&&go[t]?(""+e).trim():e+"px"}function q0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=K0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var nk=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pd(t,e){if(e){if(nk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function Dd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function wp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bd=null,Qi=null,Yi=null;function hy(t){if(t=xa(t)){if(typeof bd!="function")throw Error(S(280));var e=t.stateNode;e&&(e=_c(e),bd(t.stateNode,t.type,e))}}function G0(t){Qi?Yi?Yi.push(t):Yi=[t]:Qi=t}function Q0(){if(Qi){var t=Qi,e=Yi;if(Yi=Qi=null,hy(t),e)for(t=0;t<e.length;t++)hy(e[t])}}function Y0(t,e){return t(e)}function X0(){}var Ih=!1;function J0(t,e,n){if(Ih)return t(e,n);Ih=!0;try{return Y0(t,e,n)}finally{Ih=!1,(Qi!==null||Yi!==null)&&(X0(),Q0())}}function Fo(t,e){var n=t.stateNode;if(n===null)return null;var r=_c(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Ld=!1;if(On)try{var Gs={};Object.defineProperty(Gs,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",Gs,Gs),window.removeEventListener("test",Gs,Gs)}catch{Ld=!1}function rk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var yo=!1,iu=null,su=!1,Md=null,ik={onError:function(t){yo=!0,iu=t}};function sk(t,e,n,r,i,s,o,a,l){yo=!1,iu=null,rk.apply(ik,arguments)}function ok(t,e,n,r,i,s,o,a,l){if(sk.apply(this,arguments),yo){if(yo){var u=iu;yo=!1,iu=null}else throw Error(S(198));su||(su=!0,Md=u)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dy(t){if(_i(t)!==t)throw Error(S(188))}function ak(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dy(i),t;if(s===r)return dy(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function ew(t){return t=ak(t),t!==null?tw(t):null}function tw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=tw(t);if(e!==null)return e;t=t.sibling}return null}var nw=At.unstable_scheduleCallback,fy=At.unstable_cancelCallback,lk=At.unstable_shouldYield,uk=At.unstable_requestPaint,Te=At.unstable_now,ck=At.unstable_getCurrentPriorityLevel,Ep=At.unstable_ImmediatePriority,rw=At.unstable_UserBlockingPriority,ou=At.unstable_NormalPriority,hk=At.unstable_LowPriority,iw=At.unstable_IdlePriority,mc=null,cn=null;function dk(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(mc,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:mk,fk=Math.log,pk=Math.LN2;function mk(t){return t>>>=0,t===0?32:31-(fk(t)/pk|0)|0}var cl=64,hl=4194304;function uo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function au(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=uo(a):(s&=o,s!==0&&(r=uo(s)))}else o=n&~i,o!==0?r=uo(o):s!==0&&(r=uo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function gk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=gk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Fd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function sw(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function kh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function vk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Cp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function ow(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var aw,Sp,lw,uw,cw,$d=!1,dl=[],lr=null,ur=null,cr=null,$o=new Map,jo=new Map,Zn=[],_k="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function py(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":jo.delete(e.pointerId)}}function Qs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=xa(e),e!==null&&Sp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function wk(t,e,n,r,i){switch(e){case"focusin":return lr=Qs(lr,t,e,n,r,i),!0;case"dragenter":return ur=Qs(ur,t,e,n,r,i),!0;case"mouseover":return cr=Qs(cr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $o.set(s,Qs($o.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,jo.set(s,Qs(jo.get(s)||null,t,e,n,r,i)),!0}return!1}function hw(t){var e=zr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=Z0(n),e!==null){t.blockedOn=e,cw(t.priority,function(){lw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Od=r,n.target.dispatchEvent(r),Od=null}else return e=xa(n),e!==null&&Sp(e),t.blockedOn=n,!1;e.shift()}return!0}function my(t,e,n){jl(t)&&n.delete(e)}function Ek(){$d=!1,lr!==null&&jl(lr)&&(lr=null),ur!==null&&jl(ur)&&(ur=null),cr!==null&&jl(cr)&&(cr=null),$o.forEach(my),jo.forEach(my)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,$d||($d=!0,At.unstable_scheduleCallback(At.unstable_NormalPriority,Ek)))}function Uo(t){function e(i){return Ys(i,t)}if(0<dl.length){Ys(dl[0],t);for(var n=1;n<dl.length;n++){var r=dl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Ys(lr,t),ur!==null&&Ys(ur,t),cr!==null&&Ys(cr,t),$o.forEach(e),jo.forEach(e),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)hw(n),n.blockedOn===null&&Zn.shift()}var Xi=Wn.ReactCurrentBatchConfig,lu=!0;function Ck(t,e,n,r){var i=re,s=Xi.transition;Xi.transition=null;try{re=1,Tp(t,e,n,r)}finally{re=i,Xi.transition=s}}function Sk(t,e,n,r){var i=re,s=Xi.transition;Xi.transition=null;try{re=4,Tp(t,e,n,r)}finally{re=i,Xi.transition=s}}function Tp(t,e,n,r){if(lu){var i=jd(t,e,n,r);if(i===null)Mh(t,e,r,uu,n),py(t,r);else if(wk(i,t,e,n,r))r.stopPropagation();else if(py(t,r),e&4&&-1<_k.indexOf(t)){for(;i!==null;){var s=xa(i);if(s!==null&&aw(s),s=jd(t,e,n,r),s===null&&Mh(t,e,r,uu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Mh(t,e,r,null,n)}}var uu=null;function jd(t,e,n,r){if(uu=null,t=wp(r),t=zr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return uu=t,null}function dw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ck()){case Ep:return 1;case rw:return 4;case ou:case hk:return 16;case iw:return 536870912;default:return 16}default:return 16}}var ir=null,Ip=null,Ul=null;function fw(){if(Ul)return Ul;var t,e=Ip,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ul=i.slice(t,1<r?1-r:void 0)}function Vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fl(){return!0}function gy(){return!1}function Ot(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fl:gy,this.isPropagationStopped=gy,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),e}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kp=Ot(Ps),Na=ve({},Ps,{view:0,detail:0}),Tk=Ot(Na),Nh,xh,Xs,gc=ve({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Np,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xs&&(Xs&&t.type==="mousemove"?(Nh=t.screenX-Xs.screenX,xh=t.screenY-Xs.screenY):xh=Nh=0,Xs=t),Nh)},movementY:function(t){return"movementY"in t?t.movementY:xh}}),yy=Ot(gc),Ik=ve({},gc,{dataTransfer:0}),kk=Ot(Ik),Nk=ve({},Na,{relatedTarget:0}),Rh=Ot(Nk),xk=ve({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),Rk=Ot(xk),Ak=ve({},Ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Pk=Ot(Ak),Dk=ve({},Ps,{data:0}),vy=Ot(Dk),Ok={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Lk[t])?!!e[t]:!1}function Np(){return Mk}var Fk=ve({},Na,{key:function(t){if(t.key){var e=Ok[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?bk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Np,charCode:function(t){return t.type==="keypress"?Vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$k=Ot(Fk),jk=ve({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_y=Ot(jk),Uk=ve({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Np}),Vk=Ot(Uk),zk=ve({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bk=Ot(zk),Wk=ve({},gc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Hk=Ot(Wk),Kk=[9,13,27,32],xp=On&&"CompositionEvent"in window,vo=null;On&&"documentMode"in document&&(vo=document.documentMode);var qk=On&&"TextEvent"in window&&!vo,pw=On&&(!xp||vo&&8<vo&&11>=vo),wy=String.fromCharCode(32),Ey=!1;function mw(t,e){switch(t){case"keyup":return Kk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function Gk(t,e){switch(t){case"compositionend":return gw(e);case"keypress":return e.which!==32?null:(Ey=!0,wy);case"textInput":return t=e.data,t===wy&&Ey?null:t;default:return null}}function Qk(t,e){if(Mi)return t==="compositionend"||!xp&&mw(t,e)?(t=fw(),Ul=Ip=ir=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return pw&&e.locale!=="ko"?null:e.data;default:return null}}var Yk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yk[t.type]:e==="textarea"}function yw(t,e,n,r){G0(r),e=cu(e,"onChange"),0<e.length&&(n=new kp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var _o=null,Vo=null;function Xk(t){xw(t,0)}function yc(t){var e=ji(t);if(V0(e))return t}function Jk(t,e){if(t==="change")return e}var vw=!1;if(On){var Ah;if(On){var Ph="oninput"in document;if(!Ph){var Sy=document.createElement("div");Sy.setAttribute("oninput","return;"),Ph=typeof Sy.oninput=="function"}Ah=Ph}else Ah=!1;vw=Ah&&(!document.documentMode||9<document.documentMode)}function Ty(){_o&&(_o.detachEvent("onpropertychange",_w),Vo=_o=null)}function _w(t){if(t.propertyName==="value"&&yc(Vo)){var e=[];yw(e,Vo,t,wp(t)),J0(Xk,e)}}function Zk(t,e,n){t==="focusin"?(Ty(),_o=e,Vo=n,_o.attachEvent("onpropertychange",_w)):t==="focusout"&&Ty()}function eN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yc(Vo)}function tN(t,e){if(t==="click")return yc(e)}function nN(t,e){if(t==="input"||t==="change")return yc(e)}function rN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:rN;function zo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ed.call(e,i)||!en(t[i],e[i]))return!1}return!0}function Iy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ky(t,e){var n=Iy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Iy(n)}}function ww(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ww(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ew(){for(var t=window,e=ru();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ru(t.document)}return e}function Rp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function iN(t){var e=Ew(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ww(n.ownerDocument.documentElement,n)){if(r!==null&&Rp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ky(n,s);var o=ky(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var sN=On&&"documentMode"in document&&11>=document.documentMode,Fi=null,Ud=null,wo=null,Vd=!1;function Ny(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vd||Fi==null||Fi!==ru(r)||(r=Fi,"selectionStart"in r&&Rp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),wo&&zo(wo,r)||(wo=r,r=cu(Ud,"onSelect"),0<r.length&&(e=new kp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fi)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Dh={},Cw={};On&&(Cw=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function vc(t){if(Dh[t])return Dh[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cw)return Dh[t]=e[n];return t}var Sw=vc("animationend"),Tw=vc("animationiteration"),Iw=vc("animationstart"),kw=vc("transitionend"),Nw=new Map,xy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){Nw.set(t,e),vi(e,[t])}for(var Oh=0;Oh<xy.length;Oh++){var bh=xy[Oh],oN=bh.toLowerCase(),aN=bh[0].toUpperCase()+bh.slice(1);Ar(oN,"on"+aN)}Ar(Sw,"onAnimationEnd");Ar(Tw,"onAnimationIteration");Ar(Iw,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(kw,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lN=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Ry(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ok(r,e,void 0,t),t.currentTarget=null}function xw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ry(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ry(i,a,u),s=l}}}if(su)throw t=Md,su=!1,Md=null,t}function le(t,e){var n=e[Kd];n===void 0&&(n=e[Kd]=new Set);var r=t+"__bubble";n.has(r)||(Rw(e,t,2,!1),n.add(r))}function Lh(t,e,n){var r=0;e&&(r|=4),Rw(n,t,r,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Bo(t){if(!t[ml]){t[ml]=!0,M0.forEach(function(n){n!=="selectionchange"&&(lN.has(n)||Lh(n,!1,t),Lh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Lh("selectionchange",!1,e))}}function Rw(t,e,n,r){switch(dw(e)){case 1:var i=Ck;break;case 4:i=Sk;break;default:i=Tp}n=i.bind(null,e,n,t),i=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}J0(function(){var u=s,c=wp(n),h=[];e:{var f=Nw.get(t);if(f!==void 0){var m=kp,v=t;switch(t){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":m=$k;break;case"focusin":v="focus",m=Rh;break;case"focusout":v="blur",m=Rh;break;case"beforeblur":case"afterblur":m=Rh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=kk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Vk;break;case Sw:case Tw:case Iw:m=Rk;break;case kw:m=Bk;break;case"scroll":m=Tk;break;case"wheel":m=Hk;break;case"copy":case"cut":case"paste":m=Pk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=_y}var _=(e&4)!==0,E=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,y;p!==null;){y=p;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,g!==null&&(w=Fo(p,g),w!=null&&_.push(Wo(p,w,y)))),E)break;p=p.return}0<_.length&&(f=new m(f,v,null,n,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Od&&(v=n.relatedTarget||n.fromElement)&&(zr(v)||v[bn]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?zr(v):null,v!==null&&(E=_i(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(_=yy,w="onMouseLeave",g="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=_y,w="onPointerLeave",g="onPointerEnter",p="pointer"),E=m==null?f:ji(m),y=v==null?f:ji(v),f=new _(w,p+"leave",m,n,c),f.target=E,f.relatedTarget=y,w=null,zr(c)===u&&(_=new _(g,p+"enter",v,n,c),_.target=y,_.relatedTarget=E,w=_),E=w,m&&v)t:{for(_=m,g=v,p=0,y=_;y;y=Ri(y))p++;for(y=0,w=g;w;w=Ri(w))y++;for(;0<p-y;)_=Ri(_),p--;for(;0<y-p;)g=Ri(g),y--;for(;p--;){if(_===g||g!==null&&_===g.alternate)break t;_=Ri(_),g=Ri(g)}_=null}else _=null;m!==null&&Ay(h,f,m,_,!1),v!==null&&E!==null&&Ay(h,E,v,_,!0)}}e:{if(f=u?ji(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=Jk;else if(Cy(f))if(vw)N=nN;else{N=eN;var R=Zk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=tN);if(N&&(N=N(t,u))){yw(h,N,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&xd(f,"number",f.value)}switch(R=u?ji(u):window,t){case"focusin":(Cy(R)||R.contentEditable==="true")&&(Fi=R,Ud=u,wo=null);break;case"focusout":wo=Ud=Fi=null;break;case"mousedown":Vd=!0;break;case"contextmenu":case"mouseup":case"dragend":Vd=!1,Ny(h,n,c);break;case"selectionchange":if(sN)break;case"keydown":case"keyup":Ny(h,n,c)}var P;if(xp)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else Mi?mw(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(pw&&n.locale!=="ko"&&(Mi||O!=="onCompositionStart"?O==="onCompositionEnd"&&Mi&&(P=fw()):(ir=c,Ip="value"in ir?ir.value:ir.textContent,Mi=!0)),R=cu(u,O),0<R.length&&(O=new vy(O,t,null,n,c),h.push({event:O,listeners:R}),P?O.data=P:(P=gw(n),P!==null&&(O.data=P)))),(P=qk?Gk(t,n):Qk(t,n))&&(u=cu(u,"onBeforeInput"),0<u.length&&(c=new vy("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=P))}xw(h,e)})}function Wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fo(t,n),s!=null&&r.unshift(Wo(t,s,i)),s=Fo(t,e),s!=null&&r.push(Wo(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ay(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fo(n,s),l!=null&&o.unshift(Wo(n,l,a))):i||(l=Fo(n,s),l!=null&&o.push(Wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var uN=/\r\n?/g,cN=/\u0000|\uFFFD/g;function Py(t){return(typeof t=="string"?t:""+t).replace(uN,`
`).replace(cN,"")}function gl(t,e,n){if(e=Py(e),Py(t)!==e&&n)throw Error(S(425))}function hu(){}var zd=null,Bd=null;function Wd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Hd=typeof setTimeout=="function"?setTimeout:void 0,hN=typeof clearTimeout=="function"?clearTimeout:void 0,Dy=typeof Promise=="function"?Promise:void 0,dN=typeof queueMicrotask=="function"?queueMicrotask:typeof Dy<"u"?function(t){return Dy.resolve(null).then(t).catch(fN)}:Hd;function fN(t){setTimeout(function(){throw t})}function Fh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Uo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Uo(e)}function hr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Oy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),on="__reactFiber$"+Ds,Ho="__reactProps$"+Ds,bn="__reactContainer$"+Ds,Kd="__reactEvents$"+Ds,pN="__reactListeners$"+Ds,mN="__reactHandles$"+Ds;function zr(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Oy(t);t!==null;){if(n=t[on])return n;t=Oy(t)}return e}t=n,n=t.parentNode}return null}function xa(t){return t=t[on]||t[bn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function _c(t){return t[Ho]||null}var qd=[],Ui=-1;function Pr(t){return{current:t}}function he(t){0>Ui||(t.current=qd[Ui],qd[Ui]=null,Ui--)}function ae(t,e){Ui++,qd[Ui]=t.current,t.current=e}var Sr={},lt=Pr(Sr),Ct=Pr(!1),ri=Sr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function St(t){return t=t.childContextTypes,t!=null}function du(){he(Ct),he(lt)}function by(t,e,n){if(lt.current!==Sr)throw Error(S(168));ae(lt,e),ae(Ct,n)}function Aw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,ZI(t)||"Unknown",i));return ve({},n,r)}function fu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Sr,ri=lt.current,ae(lt,t),ae(Ct,Ct.current),!0}function Ly(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Aw(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,he(Ct),he(lt),ae(lt,t)):he(Ct),ae(Ct,n)}var Cn=null,wc=!1,$h=!1;function Pw(t){Cn===null?Cn=[t]:Cn.push(t)}function gN(t){wc=!0,Pw(t)}function Dr(){if(!$h&&Cn!==null){$h=!0;var t=0,e=re;try{var n=Cn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,wc=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),nw(Ep,Dr),i}finally{re=e,$h=!1}}return null}var Vi=[],zi=0,pu=null,mu=0,bt=[],Lt=0,ii=null,Tn=1,In="";function $r(t,e){Vi[zi++]=mu,Vi[zi++]=pu,pu=t,mu=e}function Dw(t,e,n){bt[Lt++]=Tn,bt[Lt++]=In,bt[Lt++]=ii,ii=t;var r=Tn;t=In;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Yt(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function Ap(t){t.return!==null&&($r(t,1),Dw(t,1,0))}function Pp(t){for(;t===pu;)pu=Vi[--zi],Vi[zi]=null,mu=Vi[--zi],Vi[zi]=null;for(;t===ii;)ii=bt[--Lt],bt[Lt]=null,In=bt[--Lt],bt[Lt]=null,Tn=bt[--Lt],bt[Lt]=null}var Rt=null,xt=null,pe=!1,Ht=null;function Ow(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function My(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rt=t,xt=hr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rt=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rt=t,xt=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(pe){var e=xt;if(e){var n=e;if(!My(t,e)){if(Gd(t))throw Error(S(418));e=hr(n.nextSibling);var r=Rt;e&&My(t,e)?Ow(r,n):(t.flags=t.flags&-4097|2,pe=!1,Rt=t)}}else{if(Gd(t))throw Error(S(418));t.flags=t.flags&-4097|2,pe=!1,Rt=t}}}function Fy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rt=t}function yl(t){if(t!==Rt)return!1;if(!pe)return Fy(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wd(t.type,t.memoizedProps)),e&&(e=xt)){if(Gd(t))throw bw(),Error(S(418));for(;e;)Ow(t,e),e=hr(e.nextSibling)}if(Fy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=hr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Rt?hr(t.stateNode.nextSibling):null;return!0}function bw(){for(var t=xt;t;)t=hr(t.nextSibling)}function ds(){xt=Rt=null,pe=!1}function Dp(t){Ht===null?Ht=[t]:Ht.push(t)}var yN=Wn.ReactCurrentBatchConfig;function Bt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var gu=Pr(null),yu=null,Bi=null,Op=null;function bp(){Op=Bi=yu=null}function Lp(t){var e=gu.current;he(gu),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){yu=t,Op=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(_t=!0),t.firstContext=null)}function Ut(t){var e=t._currentValue;if(Op!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(yu===null)throw Error(S(308));Bi=t,yu.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var Br=null;function Mp(t){Br===null?Br=[t]:Br.push(t)}function Lw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Jn=!1;function Fp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Mw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Mp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function zl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}function $y(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function vu(t,e,n,r){var i=t.updateQueue;Jn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,m=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){h=v.call(m,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(m,h,f):v,f==null)break e;h=ve({},h,f);break e;case 2:Jn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=h}}function jy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Fw=new L0.Component().refs;function Xd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ec={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=pr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Xt(e,t,i,r),zl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=pr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=dr(t,s,i),e!==null&&(Xt(e,t,i,r),zl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=pr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=dr(t,i,r),e!==null&&(Xt(e,t,r,n),zl(e,t,r))}};function Uy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!zo(n,r)||!zo(i,s):!0}function $w(t,e,n){var r=!1,i=Sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ut(s):(i=St(e)?ri:lt.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ec,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Vy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ec.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Fw,Fp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ut(s):(s=St(e)?ri:lt.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ec.enqueueReplaceState(i,i.state,null),vu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Fw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zy(t){var e=t._init;return e(t._payload)}function jw(t){function e(g,p){if(t){var y=g.deletions;y===null?(g.deletions=[p],g.flags|=16):y.push(p)}}function n(g,p){if(!t)return null;for(;p!==null;)e(g,p),p=p.sibling;return null}function r(g,p){for(g=new Map;p!==null;)p.key!==null?g.set(p.key,p):g.set(p.index,p),p=p.sibling;return g}function i(g,p){return g=mr(g,p),g.index=0,g.sibling=null,g}function s(g,p,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<p?(g.flags|=2,p):y):(g.flags|=2,p)):(g.flags|=1048576,p)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,p,y,w){return p===null||p.tag!==6?(p=Hh(y,g.mode,w),p.return=g,p):(p=i(p,y),p.return=g,p)}function l(g,p,y,w){var N=y.type;return N===Li?c(g,p,y.props.children,w,y.key):p!==null&&(p.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xn&&zy(N)===p.type)?(w=i(p,y.props),w.ref=Js(g,p,y),w.return=g,w):(w=Gl(y.type,y.key,y.props,null,g.mode,w),w.ref=Js(g,p,y),w.return=g,w)}function u(g,p,y,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=Kh(y,g.mode,w),p.return=g,p):(p=i(p,y.children||[]),p.return=g,p)}function c(g,p,y,w,N){return p===null||p.tag!==7?(p=Zr(y,g.mode,w,N),p.return=g,p):(p=i(p,y),p.return=g,p)}function h(g,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Hh(""+p,g.mode,y),p.return=g,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case al:return y=Gl(p.type,p.key,p.props,null,g.mode,y),y.ref=Js(g,null,p),y.return=g,y;case bi:return p=Kh(p,g.mode,y),p.return=g,p;case Xn:var w=p._init;return h(g,w(p._payload),y)}if(lo(p)||qs(p))return p=Zr(p,g.mode,y,null),p.return=g,p;vl(g,p)}return null}function f(g,p,y,w){var N=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return N!==null?null:a(g,p,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return y.key===N?l(g,p,y,w):null;case bi:return y.key===N?u(g,p,y,w):null;case Xn:return N=y._init,f(g,p,N(y._payload),w)}if(lo(y)||qs(y))return N!==null?null:c(g,p,y,w,null);vl(g,y)}return null}function m(g,p,y,w,N){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(y)||null,a(p,g,""+w,N);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case al:return g=g.get(w.key===null?y:w.key)||null,l(p,g,w,N);case bi:return g=g.get(w.key===null?y:w.key)||null,u(p,g,w,N);case Xn:var R=w._init;return m(g,p,y,R(w._payload),N)}if(lo(w)||qs(w))return g=g.get(y)||null,c(p,g,w,N,null);vl(p,w)}return null}function v(g,p,y,w){for(var N=null,R=null,P=p,O=p=0,ee=null;P!==null&&O<y.length;O++){P.index>O?(ee=P,P=null):ee=P.sibling;var B=f(g,P,y[O],w);if(B===null){P===null&&(P=ee);break}t&&P&&B.alternate===null&&e(g,P),p=s(B,p,O),R===null?N=B:R.sibling=B,R=B,P=ee}if(O===y.length)return n(g,P),pe&&$r(g,O),N;if(P===null){for(;O<y.length;O++)P=h(g,y[O],w),P!==null&&(p=s(P,p,O),R===null?N=P:R.sibling=P,R=P);return pe&&$r(g,O),N}for(P=r(g,P);O<y.length;O++)ee=m(P,g,O,y[O],w),ee!==null&&(t&&ee.alternate!==null&&P.delete(ee.key===null?O:ee.key),p=s(ee,p,O),R===null?N=ee:R.sibling=ee,R=ee);return t&&P.forEach(function(Le){return e(g,Le)}),pe&&$r(g,O),N}function _(g,p,y,w){var N=qs(y);if(typeof N!="function")throw Error(S(150));if(y=N.call(y),y==null)throw Error(S(151));for(var R=N=null,P=p,O=p=0,ee=null,B=y.next();P!==null&&!B.done;O++,B=y.next()){P.index>O?(ee=P,P=null):ee=P.sibling;var Le=f(g,P,B.value,w);if(Le===null){P===null&&(P=ee);break}t&&P&&Le.alternate===null&&e(g,P),p=s(Le,p,O),R===null?N=Le:R.sibling=Le,R=Le,P=ee}if(B.done)return n(g,P),pe&&$r(g,O),N;if(P===null){for(;!B.done;O++,B=y.next())B=h(g,B.value,w),B!==null&&(p=s(B,p,O),R===null?N=B:R.sibling=B,R=B);return pe&&$r(g,O),N}for(P=r(g,P);!B.done;O++,B=y.next())B=m(P,g,O,B.value,w),B!==null&&(t&&B.alternate!==null&&P.delete(B.key===null?O:B.key),p=s(B,p,O),R===null?N=B:R.sibling=B,R=B);return t&&P.forEach(function(nn){return e(g,nn)}),pe&&$r(g,O),N}function E(g,p,y,w){if(typeof y=="object"&&y!==null&&y.type===Li&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case al:e:{for(var N=y.key,R=p;R!==null;){if(R.key===N){if(N=y.type,N===Li){if(R.tag===7){n(g,R.sibling),p=i(R,y.props.children),p.return=g,g=p;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Xn&&zy(N)===R.type){n(g,R.sibling),p=i(R,y.props),p.ref=Js(g,R,y),p.return=g,g=p;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===Li?(p=Zr(y.props.children,g.mode,w,y.key),p.return=g,g=p):(w=Gl(y.type,y.key,y.props,null,g.mode,w),w.ref=Js(g,p,y),w.return=g,g=w)}return o(g);case bi:e:{for(R=y.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(g,p.sibling),p=i(p,y.children||[]),p.return=g,g=p;break e}else{n(g,p);break}else e(g,p);p=p.sibling}p=Kh(y,g.mode,w),p.return=g,g=p}return o(g);case Xn:return R=y._init,E(g,p,R(y._payload),w)}if(lo(y))return v(g,p,y,w);if(qs(y))return _(g,p,y,w);vl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(g,p.sibling),p=i(p,y),p.return=g,g=p):(n(g,p),p=Hh(y,g.mode,w),p.return=g,g=p),o(g)):n(g,p)}return E}var fs=jw(!0),Uw=jw(!1),Ra={},hn=Pr(Ra),Ko=Pr(Ra),qo=Pr(Ra);function Wr(t){if(t===Ra)throw Error(S(174));return t}function $p(t,e){switch(ae(qo,e),ae(Ko,t),ae(hn,Ra),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}he(hn),ae(hn,e)}function ps(){he(hn),he(Ko),he(qo)}function Vw(t){Wr(qo.current);var e=Wr(hn.current),n=Ad(e,t.type);e!==n&&(ae(Ko,t),ae(hn,n))}function jp(t){Ko.current===t&&(he(hn),he(Ko))}var ge=Pr(0);function _u(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jh=[];function Up(){for(var t=0;t<jh.length;t++)jh[t]._workInProgressVersionPrimary=null;jh.length=0}var Bl=Wn.ReactCurrentDispatcher,Uh=Wn.ReactCurrentBatchConfig,si=0,ye=null,Ae=null,$e=null,wu=!1,Eo=!1,Go=0,vN=0;function Xe(){throw Error(S(321))}function Vp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function zp(t,e,n,r,i,s){if(si=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bl.current=t===null||t.memoizedState===null?CN:SN,t=n(r,i),Eo){s=0;do{if(Eo=!1,Go=0,25<=s)throw Error(S(301));s+=1,$e=Ae=null,e.updateQueue=null,Bl.current=TN,t=n(r,i)}while(Eo)}if(Bl.current=Eu,e=Ae!==null&&Ae.next!==null,si=0,$e=Ae=ye=null,wu=!1,e)throw Error(S(300));return t}function Bp(){var t=Go!==0;return Go=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?ye.memoizedState=$e=t:$e=$e.next=t,$e}function Vt(){if(Ae===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=$e===null?ye.memoizedState:$e.next;if(e!==null)$e=e,Ae=t;else{if(t===null)throw Error(S(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},$e===null?ye.memoizedState=$e=t:$e=$e.next=t}return $e}function Qo(t,e){return typeof e=="function"?e(t):e}function Vh(t){var e=Vt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ye.lanes|=c,oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,en(r,e.memoizedState)||(_t=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function zh(t){var e=Vt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);en(s,e.memoizedState)||(_t=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zw(){}function Bw(t,e){var n=ye,r=Vt(),i=e(),s=!en(r.memoizedState,i);if(s&&(r.memoizedState=i,_t=!0),r=r.queue,Wp(Kw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Hw.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(S(349));si&30||Ww(n,e,i)}return i}function Ww(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hw(t,e,n,r){e.value=n,e.getSnapshot=r,qw(e)&&Gw(t)}function Kw(t,e,n){return n(function(){qw(e)&&Gw(t)})}function qw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function Gw(t){var e=Ln(t,1);e!==null&&Xt(e,t,1,-1)}function By(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},e.queue=t,t=t.dispatch=EN.bind(null,ye,t),[e.memoizedState,t]}function Yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Qw(){return Vt().memoizedState}function Wl(t,e,n,r){var i=sn();ye.flags|=t,i.memoizedState=Yo(1|e,n,void 0,r===void 0?null:r)}function Cc(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&Vp(r,o.deps)){i.memoizedState=Yo(e,n,s,r);return}}ye.flags|=t,i.memoizedState=Yo(1|e,n,s,r)}function Wy(t,e){return Wl(8390656,8,t,e)}function Wp(t,e){return Cc(2048,8,t,e)}function Yw(t,e){return Cc(4,2,t,e)}function Xw(t,e){return Cc(4,4,t,e)}function Jw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Zw(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,Jw.bind(null,e,t),n)}function Hp(){}function e1(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function t1(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Vp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function n1(t,e,n){return si&21?(en(n,e)||(n=sw(),ye.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,_t=!0),t.memoizedState=n)}function _N(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Uh.transition;Uh.transition={};try{t(!1),e()}finally{re=n,Uh.transition=r}}function r1(){return Vt().memoizedState}function wN(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},i1(t))s1(e,n);else if(n=Lw(t,e,n,r),n!==null){var i=mt();Xt(n,t,r,i),o1(n,e,r)}}function EN(t,e,n){var r=pr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(i1(t))s1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,en(a,o)){var l=e.interleaved;l===null?(i.next=i,Mp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Lw(t,e,i,r),n!==null&&(i=mt(),Xt(n,t,r,i),o1(n,e,r))}}function i1(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function s1(t,e){Eo=wu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function o1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Cp(t,n)}}var Eu={readContext:Ut,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},CN={readContext:Ut,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Wy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4194308,4,Jw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wl(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=wN.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:By,useDebugValue:Hp,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=By(!1),e=t[0];return t=_N.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=sn();if(pe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ve===null)throw Error(S(349));si&30||Ww(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Wy(Kw.bind(null,r,s,t),[t]),r.flags|=2048,Yo(9,Hw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=sn(),e=Ve.identifierPrefix;if(pe){var n=In,r=Tn;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Go++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=vN++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SN={readContext:Ut,useCallback:e1,useContext:Ut,useEffect:Wp,useImperativeHandle:Zw,useInsertionEffect:Yw,useLayoutEffect:Xw,useMemo:t1,useReducer:Vh,useRef:Qw,useState:function(){return Vh(Qo)},useDebugValue:Hp,useDeferredValue:function(t){var e=Vt();return n1(e,Ae.memoizedState,t)},useTransition:function(){var t=Vh(Qo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:zw,useSyncExternalStore:Bw,useId:r1,unstable_isNewReconciler:!1},TN={readContext:Ut,useCallback:e1,useContext:Ut,useEffect:Wp,useImperativeHandle:Zw,useInsertionEffect:Yw,useLayoutEffect:Xw,useMemo:t1,useReducer:zh,useRef:Qw,useState:function(){return zh(Qo)},useDebugValue:Hp,useDeferredValue:function(t){var e=Vt();return Ae===null?e.memoizedState=t:n1(e,Ae.memoizedState,t)},useTransition:function(){var t=zh(Qo)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:zw,useSyncExternalStore:Bw,useId:r1,unstable_isNewReconciler:!1};function ms(t,e){try{var n="",r=e;do n+=JI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IN=typeof WeakMap=="function"?WeakMap:Map;function a1(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Su||(Su=!0,cf=r),Zd(t,e)},n}function l1(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Zd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IN;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jN.bind(null,t,e,n),e.then(t,t))}function Ky(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var kN=Wn.ReactCurrentOwner,_t=!1;function ft(t,e,n,r){e.child=t===null?Uw(e,null,n,r):fs(e,t.child,n,r)}function Gy(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=zp(t,e,n,r,s,i),n=Bp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(pe&&n&&Ap(e),e.flags|=1,ft(t,e,r,i),e.child)}function Qy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u1(t,e,s,r,i)):(t=Gl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:zo,n(o,r)&&t.ref===e.ref)return Mn(t,e,i)}return e.flags|=1,t=mr(s,r),t.ref=e.ref,t.return=e,e.child=t}function u1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(zo(s,r)&&t.ref===e.ref)if(_t=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(_t=!0);else return e.lanes=t.lanes,Mn(t,e,i)}return ef(t,e,n,r,i)}function c1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Hi,Nt),Nt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Hi,Nt),Nt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Hi,Nt),Nt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Hi,Nt),Nt|=r;return ft(t,e,i,n),e.child}function h1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ef(t,e,n,r,i){var s=St(n)?ri:lt.current;return s=hs(e,s),Ji(e,i),n=zp(t,e,n,r,s,i),r=Bp(),t!==null&&!_t?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Mn(t,e,i)):(pe&&r&&Ap(e),e.flags|=1,ft(t,e,n,i),e.child)}function Yy(t,e,n,r,i){if(St(n)){var s=!0;fu(e)}else s=!1;if(Ji(e,i),e.stateNode===null)Hl(t,e),$w(e,n,r),Jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ut(u):(u=St(n)?ri:lt.current,u=hs(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vy(e,o,r,u),Jn=!1;var f=e.memoizedState;o.state=f,vu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||Jn?(typeof c=="function"&&(Xd(e,n,c,r),l=e.memoizedState),(a=Jn||Uy(e,n,a,r,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Mw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Bt(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ut(l):(l=St(n)?ri:lt.current,l=hs(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Vy(e,o,r,l),Jn=!1,f=e.memoizedState,o.state=f,vu(e,r,o,i);var v=e.memoizedState;a!==h||f!==v||Ct.current||Jn?(typeof m=="function"&&(Xd(e,n,m,r),v=e.memoizedState),(u=Jn||Uy(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return tf(t,e,n,r,s,i)}function tf(t,e,n,r,i,s){h1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ly(e,n,!1),Mn(t,e,s);r=e.stateNode,kN.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&Ly(e,n,!0),e.child}function d1(t){var e=t.stateNode;e.pendingContext?by(t,e.pendingContext,e.pendingContext!==e.context):e.context&&by(t,e.context,!1),$p(t,e.containerInfo)}function Xy(t,e,n,r,i){return ds(),Dp(i),e.flags|=256,ft(t,e,n,r),e.child}var nf={dehydrated:null,treeContext:null,retryLane:0};function rf(t){return{baseLanes:t,cachePool:null,transitions:null}}function f1(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ge,i&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=rf(n),e.memoizedState=nf,t):Kp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return NN(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=mr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=mr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?rf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nf,r}return s=t.child,t=s.sibling,r=mr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kp(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,r){return r!==null&&Dp(r),fs(e,t.child,null,n),t=Kp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NN(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bh(Error(S(422))),_l(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=rf(o),e.memoizedState=nf,s);if(!(e.mode&1))return _l(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=Bh(s,r,void 0),_l(t,e,o,r)}if(a=(o&t.childLanes)!==0,_t||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Xt(r,t,i,-1))}return Jp(),r=Bh(Error(S(421))),_l(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=UN.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,xt=hr(i.nextSibling),Rt=e,pe=!0,Ht=null,t!==null&&(bt[Lt++]=Tn,bt[Lt++]=In,bt[Lt++]=ii,Tn=t.id,In=t.overflow,ii=e),e=Kp(e,r.children),e.flags|=4096,e)}function Jy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yd(t.return,e,n)}function Wh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function p1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jy(t,n,e);else if(t.tag===19)Jy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ge,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_u(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_u(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wh(e,!0,n,null,s);break;case"together":Wh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function xN(t,e,n){switch(e.tag){case 3:d1(e),ds();break;case 5:Vw(e);break;case 1:St(e.type)&&fu(e);break;case 4:$p(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(gu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ge,ge.current&1),e.flags|=128,null):n&e.child.childLanes?f1(t,e,n):(ae(ge,ge.current&1),t=Mn(t,e,n),t!==null?t.sibling:null);ae(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return p1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,c1(t,e,n)}return Mn(t,e,n)}var m1,sf,g1,y1;m1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};sf=function(){};g1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wr(hn.current);var s=null;switch(n){case"input":i=kd(t,i),r=kd(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Rd(t,i),r=Rd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=hu)}Pd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Lo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};y1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Zs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function RN(t,e,n){var r=e.pendingProps;switch(Pp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return St(e.type)&&du(),Je(e),null;case 3:return r=e.stateNode,ps(),he(Ct),he(lt),Up(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(yl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(ff(Ht),Ht=null))),sf(t,e),Je(e),null;case 5:jp(e);var i=Wr(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)g1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Je(e),null}if(t=Wr(hn.current),yl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[on]=e,r[Ho]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<co.length;i++)le(co[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":ay(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":uy(r,s),le("invalid",r)}Pd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gl(r.textContent,a,t),i=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ll(r),ly(r,s,!0);break;case"textarea":ll(r),cy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=W0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[Ho]=r,m1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dd(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<co.length;i++)le(co[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":ay(t,r),i=kd(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),le("invalid",t);break;case"textarea":uy(t,r),i=Rd(t,r),le("invalid",t);break;default:i=r}Pd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?q0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&H0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&gp(t,s,l,o))}switch(n){case"input":ll(t),ly(t,r,!1);break;case"textarea":ll(t),cy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)y1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Wr(qo.current),Wr(hn.current),yl(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(s=r.nodeValue!==n)&&(t=Rt,t!==null))switch(t.tag){case 3:gl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return Je(e),null;case 13:if(he(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&xt!==null&&e.mode&1&&!(e.flags&128))bw(),ds(),e.flags|=98560,s=!1;else if(s=yl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[on]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Ht!==null&&(ff(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ge.current&1?Oe===0&&(Oe=3):Jp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return ps(),sf(t,e),t===null&&Bo(e.stateNode.containerInfo),Je(e),null;case 10:return Lp(e.type._context),Je(e),null;case 17:return St(e.type)&&du(),Je(e),null;case 19:if(he(ge),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Zs(s,!1);else{if(Oe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_u(t),o!==null){for(e.flags|=128,Zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>gs&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=_u(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return Je(e),null}else 2*Te()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,Zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=ge.current,ae(ge,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return Xp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function AN(t,e){switch(Pp(e),e.tag){case 1:return St(e.type)&&du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),he(Ct),he(lt),Up(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return jp(e),null;case 13:if(he(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ge),null;case 4:return ps(),null;case 10:return Lp(e.type._context),null;case 22:case 23:return Xp(),null;case 24:return null;default:return null}}var wl=!1,tt=!1,PN=typeof WeakSet=="function"?WeakSet:Set,D=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function of(t,e,n){try{n()}catch(r){we(t,e,r)}}var Zy=!1;function DN(t,e){if(zd=lu,t=Ew(),Rp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,f=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bd={focusedElem:t,selectionRange:n},lu=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,E=v.memoizedState,g=e.stateNode,p=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Bt(e.type,_),E);g.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){we(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return v=Zy,Zy=!1,v}function Co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&of(e,n,s)}i=i.next}while(i!==r)}}function Sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function af(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v1(t){var e=t.alternate;e!==null&&(t.alternate=null,v1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[Ho],delete e[Kd],delete e[pN],delete e[mN])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function _1(t){return t.tag===5||t.tag===3||t.tag===4}function ev(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||_1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=hu));else if(r!==4&&(t=t.child,t!==null))for(lf(t,e,n),t=t.sibling;t!==null;)lf(t,e,n),t=t.sibling}function uf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}var We=null,Wt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)w1(t,e,n),n=n.sibling}function w1(t,e,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(mc,n)}catch{}switch(n.tag){case 5:tt||Wi(n,e);case 6:var r=We,i=Wt;We=null,Qn(t,e,n),We=r,Wt=i,We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Wt?(t=We,n=n.stateNode,t.nodeType===8?Fh(t.parentNode,n):t.nodeType===1&&Fh(t,n),Uo(t)):Fh(We,n.stateNode));break;case 4:r=We,i=Wt,We=n.stateNode.containerInfo,Wt=!0,Qn(t,e,n),We=r,Wt=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&of(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!tt&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Qn(t,e,n),tt=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function tv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new PN),e.forEach(function(r){var i=VN.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function zt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:We=a.stateNode,Wt=!1;break e;case 3:We=a.stateNode.containerInfo,Wt=!0;break e;case 4:We=a.stateNode.containerInfo,Wt=!0;break e}a=a.return}if(We===null)throw Error(S(160));w1(s,o,i),We=null,Wt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E1(e,t),e=e.sibling}function E1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zt(e,t),rn(t),r&4){try{Co(3,t,t.return),Sc(3,t)}catch(_){we(t,t.return,_)}try{Co(5,t,t.return)}catch(_){we(t,t.return,_)}}break;case 1:zt(e,t),rn(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(zt(e,t),rn(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{Mo(i,"")}catch(_){we(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&z0(i,s),Dd(a,o);var u=Dd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?q0(i,h):c==="dangerouslySetInnerHTML"?H0(i,h):c==="children"?Mo(i,h):gp(i,c,h,u)}switch(a){case"input":Nd(i,s);break;case"textarea":B0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Gi(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ho]=s}catch(_){we(t,t.return,_)}}break;case 6:if(zt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){we(t,t.return,_)}}break;case 3:if(zt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Uo(e.containerInfo)}catch(_){we(t,t.return,_)}break;case 4:zt(e,t),rn(t);break;case 13:zt(e,t),rn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qp=Te())),r&4&&tv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(u=tt)||c,zt(e,t),tt=u):zt(e,t),rn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(h=D=c;D!==null;){switch(f=D,m=f.child,f.tag){case 0:case 11:case 14:case 15:Co(4,f,f.return);break;case 1:Wi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){we(r,n,_)}}break;case 5:Wi(f,f.return);break;case 22:if(f.memoizedState!==null){rv(h);continue}}m!==null?(m.return=f,D=m):rv(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=K0("display",o))}catch(_){we(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){we(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zt(e,t),rn(t),r&4&&tv(t);break;case 21:break;default:zt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(_1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Mo(i,""),r.flags&=-33);var s=ev(t);uf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=ev(t);lf(t,a,o);break;default:throw Error(S(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ON(t,e,n){D=t,C1(t)}function C1(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||wl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||tt;a=wl;var u=tt;if(wl=o,(tt=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?iv(i):l!==null?(l.return=o,D=l):iv(i);for(;s!==null;)D=s,C1(s),s=s.sibling;D=i,wl=a,tt=u}nv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):nv(t)}}function nv(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||Sc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Uo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}tt||e.flags&512&&af(e)}catch(f){we(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function rv(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function iv(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Sc(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{af(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{af(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var bN=Math.ceil,Cu=Wn.ReactCurrentDispatcher,qp=Wn.ReactCurrentOwner,jt=Wn.ReactCurrentBatchConfig,Z=0,Ve=null,xe=null,Ge=0,Nt=0,Hi=Pr(0),Oe=0,Xo=null,oi=0,Tc=0,Gp=0,So=null,vt=null,Qp=0,gs=1/0,En=null,Su=!1,cf=null,fr=null,El=!1,sr=null,Tu=0,To=0,hf=null,Kl=-1,ql=0;function mt(){return Z&6?Te():Kl!==-1?Kl:Kl=Te()}function pr(t){return t.mode&1?Z&2&&Ge!==0?Ge&-Ge:yN.transition!==null?(ql===0&&(ql=sw()),ql):(t=re,t!==0||(t=window.event,t=t===void 0?16:dw(t.type)),t):1}function Xt(t,e,n,r){if(50<To)throw To=0,hf=null,Error(S(185));ka(t,n,r),(!(Z&2)||t!==Ve)&&(t===Ve&&(!(Z&2)&&(Tc|=n),Oe===4&&er(t,Ge)),Tt(t,r),n===1&&Z===0&&!(e.mode&1)&&(gs=Te()+500,wc&&Dr()))}function Tt(t,e){var n=t.callbackNode;yk(t,e);var r=au(t,t===Ve?Ge:0);if(r===0)n!==null&&fy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fy(n),e===1)t.tag===0?gN(sv.bind(null,t)):Pw(sv.bind(null,t)),dN(function(){!(Z&6)&&Dr()}),n=null;else{switch(ow(r)){case 1:n=Ep;break;case 4:n=rw;break;case 16:n=ou;break;case 536870912:n=iw;break;default:n=ou}n=A1(n,S1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function S1(t,e){if(Kl=-1,ql=0,Z&6)throw Error(S(327));var n=t.callbackNode;if(Zi()&&t.callbackNode!==n)return null;var r=au(t,t===Ve?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Iu(t,r);else{e=r;var i=Z;Z|=2;var s=I1();(Ve!==t||Ge!==e)&&(En=null,gs=Te()+500,Jr(t,e));do try{FN();break}catch(a){T1(t,a)}while(1);bp(),Cu.current=s,Z=i,xe!==null?e=0:(Ve=null,Ge=0,e=Oe)}if(e!==0){if(e===2&&(i=Fd(t),i!==0&&(r=i,e=df(t,i))),e===1)throw n=Xo,Jr(t,0),er(t,r),Tt(t,Te()),n;if(e===6)er(t,r);else{if(i=t.current.alternate,!(r&30)&&!LN(i)&&(e=Iu(t,r),e===2&&(s=Fd(t),s!==0&&(r=s,e=df(t,s))),e===1))throw n=Xo,Jr(t,0),er(t,r),Tt(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:jr(t,vt,En);break;case 3:if(er(t,r),(r&130023424)===r&&(e=Qp+500-Te(),10<e)){if(au(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Hd(jr.bind(null,t,vt,En),e);break}jr(t,vt,En);break;case 4:if(er(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*bN(r/1960))-r,10<r){t.timeoutHandle=Hd(jr.bind(null,t,vt,En),r);break}jr(t,vt,En);break;case 5:jr(t,vt,En);break;default:throw Error(S(329))}}}return Tt(t,Te()),t.callbackNode===n?S1.bind(null,t):null}function df(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=Iu(t,e),t!==2&&(e=vt,vt=n,e!==null&&ff(e)),t}function ff(t){vt===null?vt=t:vt.push.apply(vt,t)}function LN(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!en(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Gp,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function sv(t){if(Z&6)throw Error(S(327));Zi();var e=au(t,0);if(!(e&1))return Tt(t,Te()),null;var n=Iu(t,e);if(t.tag!==0&&n===2){var r=Fd(t);r!==0&&(e=r,n=df(t,r))}if(n===1)throw n=Xo,Jr(t,0),er(t,e),Tt(t,Te()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,vt,En),Tt(t,Te()),null}function Yp(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(gs=Te()+500,wc&&Dr())}}function ai(t){sr!==null&&sr.tag===0&&!(Z&6)&&Zi();var e=Z;Z|=1;var n=jt.transition,r=re;try{if(jt.transition=null,re=1,t)return t()}finally{re=r,jt.transition=n,Z=e,!(Z&6)&&Dr()}}function Xp(){Nt=Hi.current,he(Hi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hN(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Pp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&du();break;case 3:ps(),he(Ct),he(lt),Up();break;case 5:jp(r);break;case 4:ps();break;case 13:he(ge);break;case 19:he(ge);break;case 10:Lp(r.type._context);break;case 22:case 23:Xp()}n=n.return}if(Ve=t,xe=t=mr(t.current,null),Ge=Nt=e,Oe=0,Xo=null,Gp=Tc=oi=0,vt=So=null,Br!==null){for(e=0;e<Br.length;e++)if(n=Br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Br=null}return t}function T1(t,e){do{var n=xe;try{if(bp(),Bl.current=Eu,wu){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}wu=!1}if(si=0,$e=Ae=ye=null,Eo=!1,Go=0,qp.current=null,n===null||n.return===null){Oe=1,Xo=e,xe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ge,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Ky(o);if(m!==null){m.flags&=-257,qy(m,o,a,s,e),m.mode&1&&Hy(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Hy(s,u,e),Jp();break e}l=Error(S(426))}}else if(pe&&a.mode&1){var E=Ky(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),qy(E,o,a,s,e),Dp(ms(l,a));break e}}s=l=ms(l,a),Oe!==4&&(Oe=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=a1(s,l,e);$y(s,g);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(fr===null||!fr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=l1(s,a,e);$y(s,w);break e}}s=s.return}while(s!==null)}N1(n)}catch(N){e=N,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function I1(){var t=Cu.current;return Cu.current=Eu,t===null?Eu:t}function Jp(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),Ve===null||!(oi&268435455)&&!(Tc&268435455)||er(Ve,Ge)}function Iu(t,e){var n=Z;Z|=2;var r=I1();(Ve!==t||Ge!==e)&&(En=null,Jr(t,e));do try{MN();break}catch(i){T1(t,i)}while(1);if(bp(),Z=n,Cu.current=r,xe!==null)throw Error(S(261));return Ve=null,Ge=0,Oe}function MN(){for(;xe!==null;)k1(xe)}function FN(){for(;xe!==null&&!lk();)k1(xe)}function k1(t){var e=R1(t.alternate,t,Nt);t.memoizedProps=t.pendingProps,e===null?N1(t):xe=e,qp.current=null}function N1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=AN(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Oe=6,xe=null;return}}else if(n=RN(n,e,Nt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Oe===0&&(Oe=5)}function jr(t,e,n){var r=re,i=jt.transition;try{jt.transition=null,re=1,$N(t,e,n,r)}finally{jt.transition=i,re=r}return null}function $N(t,e,n,r){do Zi();while(sr!==null);if(Z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(vk(t,s),t===Ve&&(xe=Ve=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,A1(ou,function(){return Zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jt.transition,jt.transition=null;var o=re;re=1;var a=Z;Z|=4,qp.current=null,DN(t,n),E1(n,t),iN(Bd),lu=!!zd,Bd=zd=null,t.current=n,ON(n),uk(),Z=a,re=o,jt.transition=s}else t.current=n;if(El&&(El=!1,sr=t,Tu=i),s=t.pendingLanes,s===0&&(fr=null),dk(n.stateNode),Tt(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Su)throw Su=!1,t=cf,cf=null,t;return Tu&1&&t.tag!==0&&Zi(),s=t.pendingLanes,s&1?t===hf?To++:(To=0,hf=t):To=0,Dr(),null}function Zi(){if(sr!==null){var t=ow(Tu),e=jt.transition,n=re;try{if(jt.transition=null,re=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,Tu=0,Z&6)throw Error(S(331));var i=Z;for(Z|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Co(8,c,s)}var h=c.child;if(h!==null)h.return=c,D=h;else for(;D!==null;){c=D;var f=c.sibling,m=c.return;if(v1(c),c===u){D=null;break}if(f!==null){f.return=m,D=f;break}D=m}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Co(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var p=t.current;for(D=p;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(N){we(a,a.return,N)}if(a===o){D=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,D=w;break e}D=a.return}}if(Z=i,Dr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(mc,t)}catch{}r=!0}return r}finally{re=n,jt.transition=e}}return!1}function ov(t,e,n){e=ms(n,e),e=a1(t,e,1),t=dr(t,e,1),e=mt(),t!==null&&(ka(t,1,e),Tt(t,e))}function we(t,e,n){if(t.tag===3)ov(t,t,n);else for(;e!==null;){if(e.tag===3){ov(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=ms(n,t),t=l1(e,t,1),e=dr(e,t,1),t=mt(),e!==null&&(ka(e,1,t),Tt(e,t));break}}e=e.return}}function jN(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(Ge&n)===n&&(Oe===4||Oe===3&&(Ge&130023424)===Ge&&500>Te()-Qp?Jr(t,0):Gp|=n),Tt(t,e)}function x1(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=mt();t=Ln(t,e),t!==null&&(ka(t,e,n),Tt(t,n))}function UN(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x1(t,n)}function VN(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),x1(t,n)}var R1;R1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)_t=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return _t=!1,xN(t,e,n);_t=!!(t.flags&131072)}else _t=!1,pe&&e.flags&1048576&&Dw(e,mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Hl(t,e),t=e.pendingProps;var i=hs(e,lt.current);Ji(e,n),i=zp(null,e,r,t,i,n);var s=Bp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(s=!0,fu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fp(e),i.updater=Ec,e.stateNode=i,i._reactInternals=e,Jd(e,r,t,n),e=tf(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&Ap(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BN(r),t=Bt(r,t),i){case 0:e=ef(null,e,r,t,n);break e;case 1:e=Yy(null,e,r,t,n);break e;case 11:e=Gy(null,e,r,t,n);break e;case 14:e=Qy(null,e,r,Bt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),ef(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Yy(t,e,r,i,n);case 3:e:{if(d1(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Mw(t,e),vu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(S(423)),e),e=Xy(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(S(424)),e),e=Xy(t,e,r,n,i);break e}else for(xt=hr(e.stateNode.containerInfo.firstChild),Rt=e,pe=!0,Ht=null,n=Uw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Mn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return Vw(e),t===null&&Qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Wd(r,i)?o=null:s!==null&&Wd(r,s)&&(e.flags|=32),h1(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return f1(t,e,n);case 4:return $p(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Gy(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(gu,r._currentValue),r._currentValue=o,s!==null)if(en(s.value,o)){if(s.children===i.children&&!Ct.current){e=Mn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Ut(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Qy(t,e,r,i,n);case 15:return u1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Hl(t,e),e.tag=1,St(r)?(t=!0,fu(e)):t=!1,Ji(e,n),$w(e,r,i),Jd(e,r,i,n),tf(null,e,r,!0,t,n);case 19:return p1(t,e,n);case 22:return c1(t,e,n)}throw Error(S(156,e.tag))};function A1(t,e){return nw(t,e)}function zN(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new zN(t,e,n,r)}function Zp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BN(t){if(typeof t=="function")return Zp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vp)return 11;if(t===_p)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return Zr(n.children,i,s,e);case yp:o=8,i|=8;break;case Cd:return t=$t(12,n,e,i|2),t.elementType=Cd,t.lanes=s,t;case Sd:return t=$t(13,n,e,i),t.elementType=Sd,t.lanes=s,t;case Td:return t=$t(19,n,e,i),t.elementType=Td,t.lanes=s,t;case j0:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case F0:o=10;break e;case $0:o=9;break e;case vp:o=11;break e;case _p:o=14;break e;case Xn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=$t(22,t,r,e),t.elementType=j0,t.lanes=n,t.stateNode={isHidden:!1},t}function Hh(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Kh(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WN(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kh(0),this.expirationTimes=kh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function em(t,e,n,r,i,s,o,a,l){return t=new WN(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fp(s),t}function HN(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function P1(t){if(!t)return Sr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(St(n))return Aw(t,n,e)}return e}function D1(t,e,n,r,i,s,o,a,l){return t=em(n,r,!0,t,i,s,o,a,l),t.context=P1(null),n=t.current,r=mt(),i=pr(n),s=An(r,i),s.callback=e??null,dr(n,s,i),t.current.lanes=i,ka(t,i,r),Tt(t,r),t}function kc(t,e,n,r){var i=e.current,s=mt(),o=pr(i);return n=P1(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(i,e,o),t!==null&&(Xt(t,i,o,s),zl(t,i,o)),o}function ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function av(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tm(t,e){av(t,e),(t=t.alternate)&&av(t,e)}function KN(){return null}var O1=typeof reportError=="function"?reportError:function(t){console.error(t)};function nm(t){this._internalRoot=t}Nc.prototype.render=nm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));kc(t,e,null,null)};Nc.prototype.unmount=nm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){kc(null,t,null,null)}),e[bn]=null}};function Nc(t){this._internalRoot=t}Nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=uw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Zn.length&&e!==0&&e<Zn[n].priority;n++);Zn.splice(n,0,t),n===0&&hw(t)}};function rm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lv(){}function qN(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ku(o);s.call(u)}}var o=D1(e,r,t,0,null,!1,!1,"",lv);return t._reactRootContainer=o,t[bn]=o.current,Bo(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ku(l);a.call(u)}}var l=em(t,0,!1,null,null,!1,!1,"",lv);return t._reactRootContainer=l,t[bn]=l.current,Bo(t.nodeType===8?t.parentNode:t),ai(function(){kc(e,l,n,r)}),l}function Rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ku(o);a.call(l)}}kc(e,o,t,i)}else o=qN(n,e,t,i,r);return ku(o)}aw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=uo(e.pendingLanes);n!==0&&(Cp(e,n|1),Tt(e,Te()),!(Z&6)&&(gs=Te()+500,Dr()))}break;case 13:ai(function(){var r=Ln(t,1);if(r!==null){var i=mt();Xt(r,t,1,i)}}),tm(t,1)}};Sp=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=mt();Xt(e,t,134217728,n)}tm(t,134217728)}};lw=function(t){if(t.tag===13){var e=pr(t),n=Ln(t,e);if(n!==null){var r=mt();Xt(n,t,e,r)}tm(t,e)}};uw=function(){return re};cw=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};bd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_c(r);if(!i)throw Error(S(90));V0(r),Nd(r,i)}}}break;case"textarea":B0(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};Y0=Yp;X0=ai;var GN={usingClientEntryPoint:!1,Events:[xa,ji,_c,G0,Q0,Yp]},eo={findFiberByHostInstance:zr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},QN={bundleType:eo.bundleType,version:eo.version,rendererPackageName:eo.rendererPackageName,rendererConfig:eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ew(t),t===null?null:t.stateNode},findFiberByHostInstance:eo.findFiberByHostInstance||KN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cl.isDisabled&&Cl.supportsFiber)try{mc=Cl.inject(QN),cn=Cl}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GN;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rm(e))throw Error(S(200));return HN(t,e,null,n)};Dt.createRoot=function(t,e){if(!rm(t))throw Error(S(299));var n=!1,r="",i=O1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=em(t,1,!1,null,null,n,!1,r,i),t[bn]=e.current,Bo(t.nodeType===8?t.parentNode:t),new nm(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=ew(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return ai(t)};Dt.hydrate=function(t,e,n){if(!xc(e))throw Error(S(200));return Rc(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!rm(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=O1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=D1(e,null,t,1,n??null,i,!1,s,o),t[bn]=e.current,Bo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nc(e)};Dt.render=function(t,e,n){if(!xc(e))throw Error(S(200));return Rc(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!xc(t))throw Error(S(40));return t._reactRootContainer?(ai(function(){Rc(null,null,t,!1,function(){t._reactRootContainer=null,t[bn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Yp;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!xc(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return Rc(t,e,n,!1,r)};Dt.version="18.2.0-next-9e3b772b8-20220608";function b1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b1)}catch(t){console.error(t)}}b1(),D0.exports=Dt;var YN=D0.exports,uv=YN;wd.createRoot=uv.createRoot,wd.hydrateRoot=uv.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jo(){return Jo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jo.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const cv="popstate";function XN(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return pf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nu(i)}return ZN(e,n,null,t)}function Re(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function im(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function JN(){return Math.random().toString(36).substr(2,8)}function hv(t,e){return{usr:t.state,key:t.key,idx:e}}function pf(t,e,n,r){return n===void 0&&(n=null),Jo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Os(e):e,{state:n,key:e&&e.key||r||JN()})}function Nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Os(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function ZN(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Jo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=or.Pop;let E=c(),g=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:g})}function f(E,g){a=or.Push;let p=pf(_.location,E,g);n&&n(p,E),u=c()+1;let y=hv(p,u),w=_.createHref(p);try{o.pushState(y,"",w)}catch{i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function m(E,g){a=or.Replace;let p=pf(_.location,E,g);n&&n(p,E),u=c();let y=hv(p,u),w=_.createHref(p);o.replaceState(y,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function v(E){let g=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof E=="string"?E:Nu(E);return Re(g,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,g)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(cv,h),l=E,()=>{i.removeEventListener(cv,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let g=v(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:m,go(E){return o.go(E)}};return _}var dv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dv||(dv={}));function ex(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Os(e):e,i=sm(r.pathname||"/",n);if(i==null)return null;let s=L1(t);tx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=cx(s[a],fx(i));return o}function L1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Re(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=gr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Re(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),L1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:lx(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of M1(s.path))i(s,o,l)}),e}function M1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=M1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ux(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nx=/^:\w+$/,rx=3,ix=2,sx=1,ox=10,ax=-2,fv=t=>t==="*";function lx(t,e){let n=t.split("/"),r=n.length;return n.some(fv)&&(r+=ax),e&&(r+=ix),n.filter(i=>!fv(i)).reduce((i,s)=>i+(nx.test(s)?rx:s===""?sx:ox),r)}function ux(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function cx(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=hx({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:gr([i,c.pathname]),pathnameBase:yx(gr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=gr([i,c.pathnameBase]))}return s}function hx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=dx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let f=a[h]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=px(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function dx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),im(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fx(t){try{return decodeURI(t)}catch(e){return im(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function px(t,e){try{return decodeURIComponent(t)}catch(n){return im(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function sm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function mx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Os(t):t;return{pathname:n?n.startsWith("/")?n:gx(n,e):e,search:vx(r),hash:_x(i)}}function gx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function F1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Os(t):(i=Jo({},t),Re(!i.pathname||!i.pathname.includes("?"),qh("?","pathname","search",i)),Re(!i.pathname||!i.pathname.includes("#"),qh("#","pathname","hash",i)),Re(!i.search||!i.search.includes("#"),qh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;i.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=mx(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const gr=t=>t.join("/").replace(/\/\/+/g,"/"),yx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),vx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,_x=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function wx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const j1=["post","put","patch","delete"];new Set(j1);const Ex=["get",...j1];new Set(Ex);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xu(){return xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},xu.apply(this,arguments)}const om=I.createContext(null),Cx=I.createContext(null),bs=I.createContext(null),Ac=I.createContext(null),wi=I.createContext({outlet:null,matches:[],isDataRoute:!1}),U1=I.createContext(null);function Sx(t,e){let{relative:n}=e===void 0?{}:e;Aa()||Re(!1);let{basename:r,navigator:i}=I.useContext(bs),{hash:s,pathname:o,search:a}=z1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:gr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Aa(){return I.useContext(Ac)!=null}function Pc(){return Aa()||Re(!1),I.useContext(Ac).location}function V1(t){I.useContext(bs).static||I.useLayoutEffect(t)}function Tx(){let{isDataRoute:t}=I.useContext(wi);return t?Fx():Ix()}function Ix(){Aa()||Re(!1);let t=I.useContext(om),{basename:e,navigator:n}=I.useContext(bs),{matches:r}=I.useContext(wi),{pathname:i}=Pc(),s=JSON.stringify(F1(r).map(l=>l.pathnameBase)),o=I.useRef(!1);return V1(()=>{o.current=!0}),I.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=$1(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:gr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function z1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=I.useContext(wi),{pathname:i}=Pc(),s=JSON.stringify(F1(r).map(o=>o.pathnameBase));return I.useMemo(()=>$1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function kx(t,e){return Nx(t,e)}function Nx(t,e,n){Aa()||Re(!1);let{navigator:r}=I.useContext(bs),{matches:i}=I.useContext(wi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Pc(),u;if(e){var c;let _=typeof e=="string"?Os(e):e;a==="/"||(c=_.pathname)!=null&&c.startsWith(a)||Re(!1),u=_}else u=l;let h=u.pathname||"/",f=a==="/"?h:h.slice(a.length)||"/",m=ex(t,{pathname:f}),v=Dx(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:gr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:gr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&v?I.createElement(Ac.Provider,{value:{location:xu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:or.Pop}},v):v}function xx(){let t=Mx(),e=wx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const Rx=I.createElement(xx,null);class Ax extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?I.createElement(wi.Provider,{value:this.props.routeContext},I.createElement(U1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Px(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(om);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(wi.Provider,{value:e},r)}function Dx(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||Re(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||Rx);let f=e.concat(s.slice(0,u+1)),m=()=>{let v;return c?v=h:l.route.Component?v=I.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,I.createElement(Px,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:v})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?I.createElement(Ax,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var mf;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(mf||(mf={}));var Zo;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Zo||(Zo={}));function Ox(t){let e=I.useContext(om);return e||Re(!1),e}function bx(t){let e=I.useContext(Cx);return e||Re(!1),e}function Lx(t){let e=I.useContext(wi);return e||Re(!1),e}function B1(t){let e=Lx(),n=e.matches[e.matches.length-1];return n.route.id||Re(!1),n.route.id}function Mx(){var t;let e=I.useContext(U1),n=bx(Zo.UseRouteError),r=B1(Zo.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Fx(){let{router:t}=Ox(mf.UseNavigateStable),e=B1(Zo.UseNavigateStable),n=I.useRef(!1);return V1(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,xu({fromRouteId:e},s)))},[t,e])}function gf(t){Re(!1)}function $x(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1}=t;Aa()&&Re(!1);let a=e.replace(/^\/*/,"/"),l=I.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Os(r));let{pathname:u="/",search:c="",hash:h="",state:f=null,key:m="default"}=r,v=I.useMemo(()=>{let _=sm(u,a);return _==null?null:{location:{pathname:_,search:c,hash:h,state:f,key:m},navigationType:i}},[a,u,c,h,f,m,i]);return v==null?null:I.createElement(bs.Provider,{value:l},I.createElement(Ac.Provider,{children:n,value:v}))}function jx(t){let{children:e,location:n}=t;return kx(yf(e),n)}var pv;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(pv||(pv={}));new Promise(()=>{});function yf(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,yf(r.props.children,s));return}r.type!==gf&&Re(!1),!r.props.index||!r.props.children||Re(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=yf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vf(){return vf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vf.apply(this,arguments)}function Ux(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Vx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function zx(t,e){return t.button===0&&(!e||e==="_self")&&!Vx(t)}const Bx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function Wx(t){let{basename:e,children:n,window:r}=t,i=I.useRef();i.current==null&&(i.current=XN({window:r,v5Compat:!0}));let s=i.current,[o,a]=I.useState({action:s.action,location:s.location});return I.useLayoutEffect(()=>s.listen(a),[s]),I.createElement($x,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const Hx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Kx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,W1=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=Ux(e,Bx),{basename:f}=I.useContext(bs),m,v=!1;if(typeof u=="string"&&Kx.test(u)&&(m=u,Hx))try{let p=new URL(window.location.href),y=u.startsWith("//")?new URL(p.protocol+u):new URL(u),w=sm(y.pathname,f);y.origin===p.origin&&w!=null?u=w+y.search+y.hash:v=!0}catch{}let _=Sx(u,{relative:i}),E=qx(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function g(p){r&&r(p),p.defaultPrevented||E(p)}return I.createElement("a",vf({},h,{href:m||_,onClick:v||s?r:g,ref:n,target:l}))});var mv;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(mv||(mv={}));var gv;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gv||(gv={}));function qx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Tx(),l=Pc(),u=z1(t,{relative:o});return I.useCallback(c=>{if(zx(c,n)){c.preventDefault();let h=r!==void 0?r:Nu(l)===Nu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const Gx=()=>d.jsx(d.Fragment,{children:d.jsxs("main",{children:[d.jsxs("div",{className:"block-1",children:[d.jsx("h1",{className:"block-1-header",children:"Atletico"}),d.jsxs("p",{className:"block-1-text",children:[d.jsx("span",{children:"Простий та зручний"})," веб-сервіс, у якому ви зможете швидко та просто зробити для себе план харчування або тренування"]})]}),d.jsxs("div",{className:"block-2",children:[d.jsxs("h2",{id:"block-2",className:"block-2-header main-heading",children:["Про ",d.jsx("span",{children:"нас"})]}),d.jsxs("div",{className:"main-block-2",children:[d.jsxs("div",{className:"sub-block",children:[d.jsx("div",{className:"sub-block-img"}),d.jsxs("div",{className:"sub-block-description",children:[d.jsx("h2",{children:"ВВІДНЕ ТРЕНУВАННЯ"}),d.jsx("p",{children:"В кожен абонемент включено індивідуальне вводне тренування з професійним тренером. Він розкаже про властивості всіх тренажерів. Ти дізнаєшся склад свого тіла та отримаєш рекомендації щодо тренувань."})]})]}),d.jsxs("div",{className:"sub-block",children:[d.jsx("div",{className:"sub-block-img"}),d.jsxs("div",{className:"sub-block-description",children:[d.jsx("h2",{children:"БЕЗ ЧЕРГИ НА ТРЕНАЖЕРИ"}),d.jsx("p",{children:"В нашому просторі ти не будеш чекати, поки звільниться тренажер. Завжди зможеш знайти гантелі з потрібною вагою. Зможеш кайфово потренуватися у будь-який час."})]})]}),d.jsxs("div",{className:"sub-block",children:[d.jsx("div",{className:"sub-block-img"}),d.jsxs("div",{className:"sub-block-description",children:[d.jsx("h2",{children:"СТИЛЬ І КОМФОРТ"}),d.jsx("p",{children:"Теж не любиш, коли в залі все заставлено обладнанням, а в роздягальнях в пікові години ніде яблуку упасти? Розуміємо. У нас не так. Якщо ти цінуєш стиль, комфорт, професіоналізм і високий рівень сервісу - тренуйся в Palestra."})]})]}),d.jsxs("div",{className:"sub-block",children:[d.jsx("div",{className:"sub-block-img"}),d.jsxs("div",{className:"sub-block-description",children:[d.jsx("h2",{children:"ЧЕРГОВИЙ ТРЕНЕР"}),d.jsx("p",{children:"За твоєю безпекою слідкує тренер. Він допоможе розібратися з обладнанням, щоб тренування принесло тобі користь і задоволення."})]})]})]})]}),d.jsxs("div",{id:"block-3",className:"block-3",children:[d.jsx("h2",{className:"main-heading",children:"Відеотренування"}),d.jsxs("div",{className:"block-3-main",children:[d.jsxs("div",{className:"sub-block-3-main",children:[d.jsx("h3",{children:"PERFECT 20 MIN FULL BODY WORKOUT FOR BEGINNERS"}),d.jsx("iframe",{className:"video-card",src:"https://www.youtube.com/embed/iCQ2gC4DqJw?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/iCQ2gC4DqJw",children:"Посилання на відео"})]}),d.jsxs("div",{className:"sub-block-3-main",children:[d.jsx("h3",{children:"GET ABS with this KILLER 10 Min Ab Workout"}),d.jsx("iframe",{className:"video-card",src:"https://www.youtube.com/embed/yaMCQa4i5Yw?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/yaMCQa4i5Yw",children:"Посилання на відео"})]}),d.jsxs("div",{className:"sub-block-3-main",children:[d.jsx("h3",{children:"10 MIN BODYWEIGHT WORKOUT"}),d.jsx("iframe",{className:"video-card",src:"https://www.youtube.com/embed/UoC_O3HzsH0?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/UoC_O3HzsH0",children:"Посилання на відео"})]}),d.jsxs("div",{className:"sub-block-3-main",children:[d.jsx("h3",{children:"5 MIN HOME WORKOUT YOU CAN DO EVERY MORNING"}),d.jsx("iframe",{className:"video-card",src:"https://www.youtube.com/embed/fLLScgWQcHc?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/fLLScgWQcHc",children:"Посилання на відео"})]})]})]}),d.jsxs("div",{id:"block-4",className:"block-4",children:[d.jsxs("h2",{className:"main-heading",children:[d.jsx("span",{children:"Цікаві"})," факти"]}),d.jsxs("div",{className:"block-4-body",children:[d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"На більшості сайтів для качків тобі напевно скажуть, що, якщо тренуватися на голодний шлунок, твої м’язи здуються, голова закрутиться, і ти помреш. Нічого подібного. Американці примудрилися довести, що тренування на порожній шлунок корисні. Логічно : хто бігає з ранку, той розуміє, що й на голодний шлунок бігається краще."})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Спочатку кардіо, потім силові вправи. Ще один холівар дозволений: тепер ти не будеш сумніватися, що робити спочатку, а що – потім. Півгодини легкого кардіо, а вже потім силові вправи – так підвищується рівень тестостерону. Якщо робити в іншому порядку, ефект буде вже не таким крутим."})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Періодичне голодування – це круто. Ще одна тому причина – той факт, що голод не дає рости раковим клітинам. Тепер ти працюєш і над своїм зовнішнім виглядом, і над здоров’ям одночасно. Одна суцільна користь!"})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"У Канаді таки науково довели, що дробове харчування ніяким образом не розганяє метаболізм і не допомагає тобі схуднути. Якщо ти знайшов собі виправдання для перекусу, знай, що воно більше не діє!"})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Виявляється, капа робить піднімання тяжкості ефективнішим : рухи виходять інтенсивніше. Не зовсім зрозуміло, в чому причина такої взаємозалежності. Можливо, в тому, що кров в голові починає циркулювати активніше і тим самим підвищує активність мозку. В результаті він починає краще реагувати і регулювати роботу мускулів. А мужики – то не знали!"})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Будь-який бігун скаже тобі те ж саме, а недавно ця істина стала науково доведеним фактом. Коли біжиш з музикою у вухах, менше замислюєшся про те, яку дистанцію вже подолав і що тобі ще належить, і процес протікає швидше і приємніше. У спортзал теж можна брати з собою плеєр і навушники: без них ти будеш виглядати по-ідіотськи, як люди, які в автобусі включають музику з динаміка телефону."})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Хто кидає курити, той вдвічі витриваліший! Такий факт був встановлений в ході одного американського дослідження. Багато людей намагаються кинути цю шкідливу звичку. Щоб натомість їй прийшло щось корисне, можеш почати бігати або піднімати тяжкості: від цього заняття буде багато толку."})]}),d.jsxs("div",{className:"block-4-body-info",children:[d.jsx("div",{className:"img-block-4-info"}),d.jsx("p",{className:"block-4-info",children:"Напевно цьому пункту радів би якийсь качок точно так само, як я зрадів попередньому. Пам’ятаєш, тобі твердили, що за один прийом їжі засвоюється 20-30 г білка? Американці поспіли і тут, встановивши, що за один раз можна примудритися засвоїти цілих сто грамів! Сподіваюся, хтось радий. Тепер він може жерти і рости. Ура."})]})]})]}),d.jsxs("div",{id:"footer",className:"block-footer",children:[d.jsxs("h2",{className:"block-footer-header main-heading",children:["Почніть ",d.jsx("span",{children:"зміни"})," із себе!"]}),d.jsxs("div",{className:"block-footer-description",children:[d.jsx("p",{children:"Створити план"}),d.jsx("span",{children:"Харчування / Тренування"})]}),d.jsx(W1,{className:"button-footer",to:"/cabinet",children:"Створити план"})]})]})}),Qx="/assets/logo-c7dbc346.svg",Yx="/assets/tren-format-text-4b7271b8.svg",Xx="/assets/tren-format-video-757936c3.svg",Ru=t=>{const{imgSrc:e,alt:n,classnames:r}=t,i={logo:Qx,tren_format_text:Yx,tren_format_video:Xx};return d.jsx("img",{src:i[e],alt:n,className:r})};/**
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
 */const H1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Ls(e)},Ls=function(t){return new Error("Firebase Database ("+H1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const K1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Jx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},am={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[h],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new Zx;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Zx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q1=function(t){const e=K1(t);return am.encodeByteArray(e,!0)},Au=function(t){return q1(t).replace(/\./g,"")},Pu=function(t){try{return am.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eR(t){return G1(void 0,t)}function G1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!tR(n)||(t[n]=G1(t[n],e[n]));return t}function tR(t){return t!=="__proto__"}/**
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
 */function nR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rR=()=>nR().__FIREBASE_DEFAULTS__,iR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Pu(t[1]);return e&&JSON.parse(e)},lm=()=>{try{return rR()||iR()||sR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q1=t=>{var e,n;return(n=(e=lm())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Y1=t=>{const e=Q1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X1=()=>{var t;return(t=lm())===null||t===void 0?void 0:t.config},J1=t=>{var e;return(e=lm())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Z1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Au(JSON.stringify(n)),Au(JSON.stringify(o)),a].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function um(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function oR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function aR(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tE(){return H1.NODE_ADMIN===!0}function lR(){try{return typeof indexedDB=="object"}catch{return!1}}function uR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const cR="FirebaseError";class Hn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=cR,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pa.prototype.create)}}class Pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?hR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Hn(i,a,r)}}function hR(t,e){return t.replace(dR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const dR=/\{\$([^}]+)}/g;/**
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
 */function ea(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
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
 */const nE=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ea(Pu(s[0])||""),n=ea(Pu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},fR=function(t){const e=nE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},pR=function(t){const e=nE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Kn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ys(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function _f(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Du(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ou(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yv(s)&&yv(o)){if(!Ou(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yv(t){return t!==null&&typeof t=="object"}/**
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
 */function Ms(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class mR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let h=0;h<80;h++){h<40?h<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):h<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[h]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function gR(t,e){const n=new yR(t,e);return n.subscribe.bind(n)}class yR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Gh),i.error===void 0&&(i.error=Gh),i.complete===void 0&&(i.complete=Gh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Gh(){}function cm(t,e){return`${t} failed: ${e} argument `}/**
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
 */const _R=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,k(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Oc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class wR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dc;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CR(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ER(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ER(t){return t===Ur?void 0:t}function CR(t){return t.instantiationMode==="EAGER"}/**
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
 */class SR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const TR={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},IR=J.INFO,kR={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},NR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=kR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bc{constructor(e){this.name=e,this._logLevel=IR,this._logHandler=NR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?TR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const xR=(t,e)=>e.some(n=>t instanceof n);let vv,_v;function RR(){return vv||(vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AR(){return _v||(_v=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rE=new WeakMap,wf=new WeakMap,iE=new WeakMap,Qh=new WeakMap,hm=new WeakMap;function PR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(yr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&rE.set(n,t)}).catch(()=>{}),hm.set(e,t),e}function DR(t){if(wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wf.set(t,e)}let Ef={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||iE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OR(t){Ef=t(Ef)}function bR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yh(this),e,...n);return iE.set(r,e.sort?e.sort():[e]),yr(r)}:AR().includes(t)?function(...e){return t.apply(Yh(this),e),yr(rE.get(this))}:function(...e){return yr(t.apply(Yh(this),e))}}function LR(t){return typeof t=="function"?bR(t):(t instanceof IDBTransaction&&DR(t),xR(t,RR())?new Proxy(t,Ef):t)}function yr(t){if(t instanceof IDBRequest)return PR(t);if(Qh.has(t))return Qh.get(t);const e=LR(t);return e!==t&&(Qh.set(t,e),hm.set(e,t)),e}const Yh=t=>hm.get(t);function MR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const FR=["get","getKey","getAll","getAllKeys","count"],$R=["put","add","delete","clear"],Xh=new Map;function wv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xh.get(e))return Xh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=$R.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Xh.set(e,s),s}OR(t=>({...t,get:(e,n,r)=>wv(e,n)||t.get(e,n,r),has:(e,n)=>!!wv(e,n)||t.has(e,n)}));/**
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
 */class jR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cf="@firebase/app",Ev="0.9.11";/**
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
 */const li=new bc("@firebase/app"),VR="@firebase/app-compat",zR="@firebase/analytics-compat",BR="@firebase/analytics",WR="@firebase/app-check-compat",HR="@firebase/app-check",KR="@firebase/auth",qR="@firebase/auth-compat",GR="@firebase/database",QR="@firebase/database-compat",YR="@firebase/functions",XR="@firebase/functions-compat",JR="@firebase/installations",ZR="@firebase/installations-compat",e2="@firebase/messaging",t2="@firebase/messaging-compat",n2="@firebase/performance",r2="@firebase/performance-compat",i2="@firebase/remote-config",s2="@firebase/remote-config-compat",o2="@firebase/storage",a2="@firebase/storage-compat",l2="@firebase/firestore",u2="@firebase/firestore-compat",c2="firebase",h2="9.22.1";/**
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
 */const Sf="[DEFAULT]",d2={[Cf]:"fire-core",[VR]:"fire-core-compat",[BR]:"fire-analytics",[zR]:"fire-analytics-compat",[HR]:"fire-app-check",[WR]:"fire-app-check-compat",[KR]:"fire-auth",[qR]:"fire-auth-compat",[GR]:"fire-rtdb",[QR]:"fire-rtdb-compat",[YR]:"fire-fn",[XR]:"fire-fn-compat",[JR]:"fire-iid",[ZR]:"fire-iid-compat",[e2]:"fire-fcm",[t2]:"fire-fcm-compat",[n2]:"fire-perf",[r2]:"fire-perf-compat",[i2]:"fire-rc",[s2]:"fire-rc-compat",[o2]:"fire-gcs",[a2]:"fire-gcs-compat",[l2]:"fire-fst",[u2]:"fire-fst-compat","fire-js":"fire-js",[c2]:"fire-js-all"};/**
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
 */const bu=new Map,Tf=new Map;function f2(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(Tf.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;Tf.set(e,t);for(const n of bu.values())f2(n,t);return!0}function Lc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const p2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},vr=new Pa("app","Firebase",p2);/**
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
 */class m2{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ei=h2;function sE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Sf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw vr.create("bad-app-name",{appName:String(i)});if(n||(n=X1()),!n)throw vr.create("no-options");const s=bu.get(i);if(s){if(Ou(n,s.options)&&Ou(r,s.config))return s;throw vr.create("duplicate-app",{appName:i})}const o=new SR(i);for(const l of Tf.values())o.addComponent(l);const a=new m2(n,r,o);return bu.set(i,a),a}function dm(t=Sf){const e=bu.get(t);if(!e&&t===Sf&&X1())return sE();if(!e)throw vr.create("no-app",{appName:t});return e}function dn(t,e,n){var r;let i=(r=d2[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}ui(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const g2="firebase-heartbeat-database",y2=1,ta="firebase-heartbeat-store";let Jh=null;function oE(){return Jh||(Jh=MR(g2,y2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ta)}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),Jh}async function v2(t){try{return await(await oE()).transaction(ta).objectStore(ta).get(aE(t))}catch(e){if(e instanceof Hn)li.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function Cv(t,e){try{const r=(await oE()).transaction(ta,"readwrite");await r.objectStore(ta).put(e,aE(t)),await r.done}catch(n){if(n instanceof Hn)li.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(r.message)}}}function aE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _2=1024,w2=30*24*60*60*1e3;class E2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new S2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Sv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=w2}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Sv(),{heartbeatsToSend:n,unsentEntries:r}=C2(this._heartbeatsCache.heartbeats),i=Au(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Sv(){return new Date().toISOString().substring(0,10)}function C2(t,e=_2){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class S2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lR()?uR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await v2(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tv(t){return Au(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function T2(t){ui(new Tr("platform-logger",e=>new jR(e),"PRIVATE")),ui(new Tr("heartbeat",e=>new E2(e),"PRIVATE")),dn(Cf,Ev,t),dn(Cf,Ev,"esm2017"),dn("fire-js","")}T2("");var I2="firebase",k2="9.22.1";/**
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
 */dn(I2,k2,"app");function fm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N2=lE,uE=new Pa("auth","Firebase",lE());/**
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
 */const Lu=new bc("@firebase/auth");function x2(t,...e){Lu.logLevel<=J.WARN&&Lu.warn(`Auth (${Ei}): ${t}`,...e)}function Ql(t,...e){Lu.logLevel<=J.ERROR&&Lu.error(`Auth (${Ei}): ${t}`,...e)}/**
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
 */function gn(t,...e){throw pm(t,...e)}function fn(t,...e){return pm(t,...e)}function cE(t,e,n){const r=Object.assign(Object.assign({},N2()),{[e]:n});return new Pa("auth","Firebase",r).create(e,{appName:t.name})}function R2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&gn(t,"argument-error"),cE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return uE.create(t,...e)}function z(t,e,...n){if(!t)throw pm(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Fn(t,e){t||kn(e)}/**
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
 */function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A2(){return Iv()==="http:"||Iv()==="https:"}function Iv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function P2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A2()||oR()||"connection"in navigator)?navigator.onLine:!0}function D2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=um()||eE()}get(){return P2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function mm(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class hE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const O2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const b2=new Da(3e4,6e4);function dE(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Oa(t,e,n,r,i={}){return fE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ms(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),hE.fetch()(pE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function fE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},O2),e);try{const i=new M2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Sl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cE(t,c,u);gn(t,c)}}catch(i){if(i instanceof Hn)throw i;gn(t,"network-request-failed",{message:String(i)})}}async function L2(t,e,n,r,i={}){const s=await Oa(t,e,n,r,i);return"mfaPendingCredential"in s&&gn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function pE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?mm(t.config,i):`${t.config.apiScheme}://${i}`}class M2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),b2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function F2(t,e){return Oa(t,"POST","/v1/accounts:delete",e)}async function $2(t,e){return Oa(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function j2(t,e=!1){const n=ct(t),r=await n.getIdToken(e),i=gm(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(Zh(i.auth_time)),issuedAtTime:Io(Zh(i.iat)),expirationTime:Io(Zh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zh(t){return Number(t)*1e3}function gm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pu(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function U2(t){const e=gm(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Hn&&V2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class z2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await na(t,$2(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?H2(s.providerUserInfo):[],a=W2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function B2(t){const e=ct(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function W2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function H2(t){return t.map(e=>{var{providerId:n}=e,r=fm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function K2(t,e){const n=await fE(t,{},async()=>{const r=Ms({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=pE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):U2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return z(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await K2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ra;return r&&(z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ra,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
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
 */function Yn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ei{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new z2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return j2(this,e)}reload(){return B2(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ei(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await na(this,F2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:N,providerData:R,stsTokenManager:P}=n;z(y&&P,e,"internal-error");const O=ra.fromJSON(this.name,P);z(typeof y=="string",e,"internal-error"),Yn(h,e.name),Yn(f,e.name),z(typeof w=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),Yn(m,e.name),Yn(v,e.name),Yn(_,e.name),Yn(E,e.name),Yn(g,e.name),Yn(p,e.name);const ee=new ei({uid:y,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:m,tenantId:_,stsTokenManager:O,createdAt:g,lastLoginAt:p});return R&&Array.isArray(R)&&(ee.providerData=R.map(B=>Object.assign({},B))),E&&(ee._redirectEventId=E),ee}static async _fromIdTokenResponse(e,n,r=!1){const i=new ra;i.updateFromServerResponse(n);const s=new ei({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mu(s),s}}/**
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
 */const kv=new Map;function Nn(t){Fn(t instanceof Function,"Expected a class definition");let e=kv.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,kv.set(t,e),e)}/**
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
 */class gE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}gE.type="NONE";const Nv=gE;/**
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
 */function Yl(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ei._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(Nn(Nv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Nn(Nv);const o=Yl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ei._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new es(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new es(s,e,r))}}/**
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
 */function xv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_E(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EE(e))return"Blackberry";if(CE(e))return"Webos";if(ym(e))return"Safari";if((e.includes("chrome/")||vE(e))&&!e.includes("edge/"))return"Chrome";if(wE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function yE(t=ut()){return/firefox\//i.test(t)}function ym(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vE(t=ut()){return/crios\//i.test(t)}function _E(t=ut()){return/iemobile/i.test(t)}function wE(t=ut()){return/android/i.test(t)}function EE(t=ut()){return/blackberry/i.test(t)}function CE(t=ut()){return/webos/i.test(t)}function Mc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function q2(t=ut()){var e;return Mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function G2(){return aR()&&document.documentMode===10}function SE(t=ut()){return Mc(t)||wE(t)||CE(t)||EE(t)||/windows phone/i.test(t)||_E(t)}function Q2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function TE(t,e=[]){let n;switch(t){case"Browser":n=xv(ut());break;case"Worker":n=`${xv(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}async function IE(t,e){return Oa(t,"GET","/v2/recaptchaConfig",dE(t,e))}function Rv(t){return t!==void 0&&t.enterprise!==void 0}class kE{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function Y2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function NE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Y2().appendChild(r)})}function X2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const J2="https://www.google.com/recaptcha/enterprise.js?render=",Z2="recaptcha-enterprise",eA="NO_RECAPTCHA";class tA{constructor(e){this.type=Z2,this.auth=ba(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IE(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new kE(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Rv(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(eA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Rv(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}NE(J2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class nA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class rA{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Av(this),this.idTokenSubscription=new Av(this),this.beforeStateQueue=new nA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=D2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ct(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}async initializeRecaptchaConfig(){const e=await IE(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new kE(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new tA(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return z(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ba(t){return ct(t)}class Av{constructor(e){this.auth=e,this.observer=null,this.addObserver=gR(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function iA(t,e){const n=Lc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ou(s,e??{}))return i;gn(i,"already-initialized")}return n.initialize({options:e})}function sA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oA(t,e,n){const r=ba(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=xE(e),{host:o,port:a}=aA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lA()}function xE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aA(t){const e=xE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Pv(o)}}}function Pv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class RE{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
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
 */async function ts(t,e){return L2(t,"POST","/v1/accounts:signInWithIdp",dE(t,e))}/**
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
 */const uA="http://localhost";class ci extends RE{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ci(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ci(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:uA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ms(n)}return e}}/**
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
 */class vm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class La extends vm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tr extends La{constructor(){super("facebook.com")}static credential(e){return ci._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.FACEBOOK_SIGN_IN_METHOD="facebook.com";tr.PROVIDER_ID="facebook.com";/**
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
 */class Sn extends La{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ci._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
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
 */class nr extends La{constructor(){super("github.com")}static credential(e){return ci._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nr.credential(e.oauthAccessToken)}catch{return null}}}nr.GITHUB_SIGN_IN_METHOD="github.com";nr.PROVIDER_ID="github.com";/**
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
 */class rr extends La{constructor(){super("twitter.com")}static credential(e,n){return ci._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rr.credential(n,r)}catch{return null}}}rr.TWITTER_SIGN_IN_METHOD="twitter.com";rr.PROVIDER_ID="twitter.com";/**
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
 */class vs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ei._fromIdTokenResponse(e,r,i),o=Dv(r);return new vs({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Dv(r);return new vs({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Dv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fu extends Hn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Fu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Fu(e,n,r,i)}}function AE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Fu._fromErrorAndOperation(t,s,e,r):s})}async function cA(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vs._forOperation(t,"link",r)}/**
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
 */async function hA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await na(t,AE(r,i,e,t),n);z(s.idToken,r,"internal-error");const o=gm(s.idToken);z(o,r,"internal-error");const{sub:a}=o;return z(t.uid===a,r,"user-mismatch"),vs._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&gn(r,"user-mismatch"),s}}/**
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
 */async function dA(t,e,n=!1){const r="signIn",i=await AE(t,r,e),s=await vs._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function fA(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function pA(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}const $u="__sak";/**
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
 */class PE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function mA(){const t=ut();return ym(t)||Mc(t)}const gA=1e3,yA=10;class DE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mA()&&Q2(),this.fallbackToPolling=SE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);G2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,yA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}DE.type="LOCAL";const vA=DE;/**
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
 */class OE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OE.type="SESSION";const bE=OE;/**
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
 */function _A(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _A(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
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
 */function _m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class wA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=_m("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const f=h;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function EA(t){pn().location.href=t}/**
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
 */function LE(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function CA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TA(){return LE()?self:null}/**
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
 */const ME="firebaseLocalStorageDb",IA=1,ju="firebaseLocalStorage",FE="fbase_key";class Ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $c(t,e){return t.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function kA(){const t=indexedDB.deleteDatabase(ME);return new Ma(t).toPromise()}function kf(){const t=indexedDB.open(ME,IA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ju,{keyPath:FE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ju)?e(r):(r.close(),await kA(),e(await kf()))})})}async function Ov(t,e,n){const r=$c(t,!0).put({[FE]:e,value:n});return new Ma(r).toPromise()}async function NA(t,e){const n=$c(t,!1).get(e),r=await new Ma(n).toPromise();return r===void 0?null:r.value}function bv(t,e){const n=$c(t,!0).delete(e);return new Ma(n).toPromise()}const xA=800,RA=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(TA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CA(),!this.activeServiceWorker)return;this.sender=new wA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kf();return await Ov(e,$u,"1"),await bv(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ov(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>NA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>bv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$c(i,!1).getAll();return new Ma(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const AA=$E;new Da(3e4,6e4);/**
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
 */function jE(t,e){return e?Nn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class wm extends RE{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function PA(t){return dA(t.auth,new wm(t),t.bypassAuthState)}function DA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),hA(n,new wm(t),t.bypassAuthState)}async function OA(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),cA(n,new wm(t),t.bypassAuthState)}/**
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
 */class UE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return PA;case"linkViaPopup":case"linkViaRedirect":return OA;case"reauthViaPopup":case"reauthViaRedirect":return DA;default:gn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const bA=new Da(2e3,1e4);async function LA(t,e,n){const r=ba(t);R2(t,e,vm);const i=jE(r,n);return new Hr(r,"signInViaPopup",e,i).executeNotNull()}class Hr extends UE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,bA.get())};e()}}Hr.currentPopupAction=null;/**
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
 */const MA="pendingRedirect",Xl=new Map;class FA extends UE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xl.get(this.auth._key());if(!e){try{const r=await $A(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xl.set(this.auth._key(),e)}return this.bypassAuthState||Xl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $A(t,e){const n=VA(e),r=UA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jA(t,e){Xl.set(t._key(),e)}function UA(t){return Nn(t._redirectPersistence)}function VA(t){return Yl(MA,t.config.apiKey,t.name)}async function zA(t,e,n=!1){const r=ba(t),i=jE(r,e),o=await new FA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const BA=10*60*1e3;class WA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!VE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lv(e))}saveEventToCache(e){this.cachedEventUids.add(Lv(e)),this.lastProcessedEventTime=Date.now()}}function Lv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function VE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return VE(t);default:return!1}}/**
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
 */async function KA(t,e={}){return Oa(t,"GET","/v1/projects",e)}/**
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
 */const qA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GA=/^https?/;async function QA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KA(t);for(const n of e)try{if(YA(n))return}catch{}gn(t,"unauthorized-domain")}function YA(t){const e=If(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!GA.test(n))return!1;if(qA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const XA=new Da(3e4,6e4);function Mv(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function JA(t){return new Promise((e,n)=>{var r,i,s;function o(){Mv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mv(),n(fn(t,"network-request-failed"))},timeout:XA.get()})}if(!((i=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=pn().gapi)===null||s===void 0)&&s.load)o();else{const a=X2("iframefcb");return pn()[a]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},NE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jl=null,e})}let Jl=null;function ZA(t){return Jl=Jl||JA(t),Jl}/**
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
 */const eP=new Da(5e3,15e3),tP="__/auth/iframe",nP="emulator/auth/iframe",rP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sP(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?mm(e,nP):`https://${t.config.authDomain}/${tP}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},i=iP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ms(r).slice(1)}`}async function oP(t){const e=await ZA(t),n=pn().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:sP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),a=pn().setTimeout(()=>{s(o)},eP.get());function l(){pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const aP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lP=500,uP=600,cP="_blank",hP="http://localhost";class Fv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dP(t,e,n,r=lP,i=uP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},aP),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=vE(u)?cP:n),yE(u)&&(e=e||hP,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,v])=>`${f}${m}=${v},`,"");if(q2(u)&&a!=="_self")return fP(e||"",a),new Fv(null);const h=window.open(e||"",a,c);z(h,t,"popup-blocked");try{h.focus()}catch{}return new Fv(h)}function fP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const pP="__/auth/handler",mP="emulator/auth/handler",gP=encodeURIComponent("fac");async function $v(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:i};if(e instanceof vm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",_f(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof La){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${gP}=${encodeURIComponent(l)}`:"";return`${yP(t)}?${Ms(a).slice(1)}${u}`}function yP({config:t}){return t.emulator?mm(t,mP):`https://${t.authDomain}/${pP}`}/**
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
 */const ed="webStorageSupport";class vP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bE,this._completeRedirectFn=zA,this._overrideRedirectResult=jA}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await $v(e,n,r,If(),i);return dP(e,o,_m())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await $v(e,n,r,If(),i);return EA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oP(e),r=new WA(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ed,{type:ed},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ed];o!==void 0&&n(!!o),gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=QA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return SE()||ym()||Mc()}}const _P=vP;var jv="@firebase/auth",Uv="0.23.2";/**
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
 */class wP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function CP(t){ui(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TE(t)},u=new rA(r,i,s,l);return sA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Tr("auth-internal",e=>{const n=ba(e.getProvider("auth").getImmediate());return(r=>new wP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(jv,Uv,EP(t)),dn(jv,Uv,"esm2017")}/**
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
 */const SP=5*60,TP=J1("authIdTokenMaxAge")||SP;let Vv=null;const IP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>TP)return;const i=n==null?void 0:n.token;Vv!==i&&(Vv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function kP(t=dm()){const e=Lc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iA(t,{popupRedirectResolver:_P,persistence:[AA,vA,bE]}),r=J1("authTokenSyncURL");if(r){const s=IP(r);pA(n,s,()=>s(n.currentUser)),fA(n,o=>s(o))}const i=Q1("auth");return i&&oA(n,`http://${i}`),n}CP("Browser");const zv="@firebase/database",Bv="0.14.4";/**
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
 */let zE="";function NP(t){zE=t}/**
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
 */class xP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ea(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class RP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Kn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const BE=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xP(e)}}catch{}return new RP},Kr=BE("localStorage"),Nf=BE("sessionStorage");/**
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
 */const ns=new bc("@firebase/database"),AP=function(){let t=1;return function(){return t++}}(),WE=function(t){const e=_R(t),n=new mR;n.update(e);const r=n.digest();return am.encodeByteArray(r)},Fa=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Fa.apply(null,r):typeof r=="object"?e+=Ue(r):e+=r,e+=" "}return e};let ti=null,Wv=!0;const PP=function(t,e){k(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(ns.logLevel=J.VERBOSE,ti=ns.log.bind(ns),e&&Nf.set("logging_enabled",!0)):typeof t=="function"?ti=t:(ti=null,Nf.remove("logging_enabled"))},nt=function(...t){if(Wv===!0&&(Wv=!1,ti===null&&Nf.get("logging_enabled")===!0&&PP(!0)),ti){const e=Fa.apply(null,t);ti(e)}},$a=function(t){return function(...e){nt(t,...e)}},xf=function(...t){const e="FIREBASE INTERNAL ERROR: "+Fa(...t);ns.error(e)},$n=function(...t){const e=`FIREBASE FATAL ERROR: ${Fa(...t)}`;throw ns.error(e),new Error(e)},It=function(...t){const e="FIREBASE WARNING: "+Fa(...t);ns.warn(e)},DP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&It("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},HE=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},OP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_s="[MIN_NAME]",hi="[MAX_NAME]",Fs=function(t,e){if(t===e)return 0;if(t===_s||e===hi)return-1;if(e===_s||t===hi)return 1;{const n=Hv(t),r=Hv(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},bP=function(t,e){return t===e?0:t<e?-1:1},to=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Em=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=Ue(e[r]),n+=":",n+=Em(t[e[r]]);return n+="}",n},KE=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function kt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const qE=function(t){k(!HE(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},LP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},MP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function FP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const $P=new RegExp("^-?(0*)\\d{1,10}$"),jP=-2147483648,UP=2147483647,Hv=function(t){if($P.test(t)){const e=Number(t);if(e>=jP&&e<=UP)return e}return null},$s=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw It("Exception was thrown by user callback.",n),e},Math.floor(0))}},VP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class zP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){It(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class BP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',It(e)}}class rs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}rs.OWNER="owner";/**
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
 */const Cm="5",GE="v",QE="s",YE="r",XE="f",JE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ZE="ls",eC="p",Rf="ac",tC="websocket",nC="long_polling";/**
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
 */class rC{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Kr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Kr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function WP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function iC(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let r;if(e===tC)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===nC)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WP(t)&&(n.ns=t.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class HP{constructor(){this.counters_={}}incrementCounter(e,n=1){Kn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return eR(this.counters_)}}/**
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
 */const td={},nd={};function Sm(t){const e=t.toString();return td[e]||(td[e]=new HP),td[e]}function KP(t,e){const n=t.toString();return nd[n]||(nd[n]=e()),nd[n]}/**
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
 */class qP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$s(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Kv="start",GP="close",QP="pLPCommand",YP="pRTLPCB",sC="id",oC="pw",aC="ser",XP="cb",JP="seg",ZP="ts",eD="d",tD="dframe",lC=1870,uC=30,nD=lC-uC,rD=25e3,iD=3e4;class Ki{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=$a(e),this.stats_=Sm(n),this.urlFn=l=>(this.appCheckToken&&(l[Rf]=this.appCheckToken),iC(n,nC,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new qP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(iD)),OP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Tm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Kv)this.id=a,this.password=l;else if(o===GP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Kv]="t",r[aC]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[XP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[GE]=Cm,this.transportSessionId&&(r[QE]=this.transportSessionId),this.lastSessionId&&(r[ZE]=this.lastSessionId),this.applicationId&&(r[eC]=this.applicationId),this.appCheckToken&&(r[Rf]=this.appCheckToken),typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(r[YE]=XE);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ki.forceAllow_=!0}static forceDisallow(){Ki.forceDisallow_=!0}static isAvailable(){return Ki.forceAllow_?!0:!Ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!LP()&&!MP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=q1(n),i=KE(r,nD);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[tD]="t",r[sC]=e,r[oC]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Tm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=AP(),window[QP+this.uniqueCallbackIdentifier]=e,window[YP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Tm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sC]=this.myID,e[oC]=this.myPW,e[aC]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+uC+r.length<=lC;){const o=this.pendingSegs.shift();r=r+"&"+JP+i+"="+o.seg+"&"+ZP+i+"="+o.ts+"&"+eD+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(rD)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const sD=16384,oD=45e3;let Uu=null;typeof MozWebSocket<"u"?Uu=MozWebSocket:typeof WebSocket<"u"&&(Uu=WebSocket);class Kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=$a(this.connId),this.stats_=Sm(n),this.connURL=Kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[GE]=Cm,typeof location<"u"&&location.hostname&&JE.test(location.hostname)&&(o[YE]=XE),n&&(o[QE]=n),r&&(o[ZE]=r),i&&(o[Rf]=i),s&&(o[eC]=s),iC(e,tC,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Kr.set("previous_websocket_failure",!0);try{let r;tE(),this.mySock=new Uu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Uu!==null&&!Kt.forceDisallow_}static previouslyFailed(){return Kr.isInMemoryStorage||Kr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Kr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ea(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=KE(n,sD);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oD))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Kt.responsesRequiredToBeHealthy=2;Kt.healthyTimeout=3e4;/**
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
 */class ia{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ki,Kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Kt&&Kt.isAvailable();let r=n&&!Kt.previouslyFailed();if(e.webSocketOnly&&(n||It("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Kt];else{const i=this.transports_=[];for(const s of ia.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ia.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ia.globalTransportInitialized_=!1;/**
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
 */const aD=6e4,lD=5e3,uD=10*1024,cD=100*1024,rd="t",qv="d",hD="s",Gv="r",dD="e",Qv="o",Yv="a",Xv="n",Jv="p",fD="h";class pD{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=$a("c:"+this.id+":"),this.transportManager_=new ia(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>cD?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>uD?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(rd in e){const n=e[rd];n===Yv?this.upgradeIfSecondaryHealthy_():n===Gv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Qv&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=to("t",e),r=to("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Jv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Yv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=to("t",e),r=to("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=to(rd,e);if(qv in e){const r=e[qv];if(n===fD){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Xv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===hD?this.onConnectionShutdown_(r):n===Gv?this.onReset_(r):n===dD?xf("Server Error: "+r):n===Qv?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):xf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Cm!==r&&It("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(aD))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lD))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Jv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Kr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class cC{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class hC{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Vu extends hC{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!um()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Vu}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zv=32,e_=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ne(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ir(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function dC(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mD(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function fC(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function pC(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Pe(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function G(t){return t.pieceNum_>=t.pieces_.length}function wt(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return wt(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Im(t,e){if(Ir(t)!==Ir(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function qt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Ir(t)>Ir(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class gD{constructor(e,n){this.errorPrefix_=n,this.parts_=fC(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Oc(this.parts_[r]);mC(this)}}function yD(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Oc(e),mC(t)}function vD(t){const e=t.parts_.pop();t.byteLength_-=Oc(e),t.parts_.length>0&&(t.byteLength_-=1)}function mC(t){if(t.byteLength_>e_)throw new Error(t.errorPrefix_+"has a key path longer than "+e_+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zv+") or object contains a cycle "+Vr(t))}function Vr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class km extends hC{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new km}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const no=1e3,_D=60*5*1e3,t_=30*1e3,wD=1.3,ED=3e4,CD="server_kill",n_=3;class Pn extends cC{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Pn.nextPersistentConnectionId_++,this.log_=$a("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=no,this.maxReconnectDelay_=_D,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!tE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");km.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Vu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(Ue(s)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Dc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Pn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Kn(e,"w")){const r=ys(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();It(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||pR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=t_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fR(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):xf("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ED&&(this.reconnectDelay_=no),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*wD)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Pn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(h){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new pD(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{It(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(CD)},s))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&It(h),l())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_f(this.interruptReasons_)&&(this.reconnectDelay_=no,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Em(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=n_&&(this.reconnectDelay_=t_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=n_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zE.replace(/\./g,"-")]=1,um()?e["framework.cordova"]=1:eE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Vu.getInstance().currentlyOnline();return _f(this.interruptReasons_)&&e}}Pn.nextPersistentConnectionId_=0;Pn.nextConnectionId_=0;/**
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
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
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
 */class jc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(_s,e),i=new q(_s,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
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
 */let Tl;class gC extends jc{static get __EMPTY_NODE(){return Tl}static set __EMPTY_NODE(e){Tl=e}compare(e,n){return Fs(e.name,n.name)}isDefinedOn(e){throw Ls("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(hi,Tl)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,Tl)}toString(){return".key"}}const is=new gC;/**
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
 */class Il{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??Et.EMPTY_NODE,this.right=s??Et.EMPTY_NODE}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Et.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Et.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0;je.BLACK=!1;class SD{copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Et{constructor(e,n=Et.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Et(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new Et(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}Et.EMPTY_NODE=new SD;/**
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
 */function TD(t,e){return Fs(t.name,e.name)}function Nm(t,e){return Fs(t,e)}/**
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
 */let Af;function ID(t){Af=t}const yC=function(t){return typeof t=="number"?"number:"+qE(t):"string:"+t},vC=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Kn(e,".sv"),"Priority must be a string or number.")}else k(t===Af||t.isEmpty(),"priority of unexpected type.");k(t===Af||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let r_;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vC(this.priorityNode_)}static set __childrenNodeConstructor(e){r_=e}static get __childrenNodeConstructor(){return r_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return G(e)?this:K(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(k(r!==".priority"||Ir(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yC(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=qE(this.value_):e+=this.value_,this.lazyHash_=WE(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return k(i>=0,"Unknown leaf type: "+n),k(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _C,wC;function kD(t){_C=t}function ND(t){wC=t}class xD extends jc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(hi,new Me("[PRIORITY-POST]",wC))}makePost(e,n){const r=_C(e);return new q(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ee=new xD;/**
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
 */const RD=Math.log(2);class AD{constructor(e){const n=s=>parseInt(Math.log(s)/RD,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const zu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let h,f;if(c===0)return null;if(c===1)return h=t[l],f=n?n(h):h,new je(f,h.node,je.BLACK,null,null);{const m=parseInt(c/2,10)+l,v=i(l,m),_=i(m+1,u);return h=t[m],f=n?n(h):h,new je(f,h.node,je.BLACK,v,_)}},s=function(l){let u=null,c=null,h=t.length;const f=function(v,_){const E=h-v,g=h;h-=v;const p=i(E+1,g),y=t[E],w=n?n(y):y;m(new je(w,y.node,_,null,p))},m=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),E=Math.pow(2,l.count-(v+1));_?f(E,je.BLACK):(f(E,je.BLACK),f(E,je.RED))}return c},o=new AD(t.length),a=s(o);return new Et(r||e,a)};/**
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
 */let id;const Ai={};class xn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return k(Ai&&Ee,"ChildrenNode.ts has not been loaded"),id=id||new xn({".priority":Ai},{".priority":Ee}),id}get(e){const n=ys(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Et?n:null}hasIndex(e){return Kn(this.indexSet_,e.toString())}addIndex(e,n){k(e!==is,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=zu(r,e.getCompare()):a=Ai;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new xn(c,u)}addToIndexes(e,n){const r=Du(this.indexes_,(i,s)=>{const o=ys(this.indexSet_,s);if(k(o,"Missing index implementation for "+s),i===Ai)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(q.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),zu(a,o.getCompare())}else return Ai;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new q(e.name,a))),l.insert(e,e.node)}});return new xn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Du(this.indexes_,i=>{if(i===Ai)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new xn(r,this.indexSet_)}}/**
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
 */let ro;class F{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vC(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ro||(ro=new F(new Et(Nm),null,xn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ro}updatePriority(e){return this.children_.isEmpty()?this:new F(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ro:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ro:this.priorityNode_;return new F(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{k(K(e)!==".priority"||Ir(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ee,(o,a)=>{n[o]=a.val(e),r++,s&&F.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yC(this.getPriority().val())+":"),this.forEachChild(Ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":WE(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ja?-1:0}withIndex(e){if(e===is||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new F(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===is||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ee),i=n.getIterator(Ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===is?null:this.indexMap_.get(e.toString())}}F.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class PD extends F{constructor(){super(new Et(Nm),F.EMPTY_NODE,xn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return F.EMPTY_NODE}isEmpty(){return!1}}const ja=new PD;Object.defineProperties(q,{MIN:{value:new q(_s,F.EMPTY_NODE)},MAX:{value:new q(hi,ja)}});gC.__EMPTY_NODE=F.EMPTY_NODE;Me.__childrenNodeConstructor=F;ID(ja);ND(ja);/**
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
 */const DD=!0;function Ke(t,e=null){if(t===null)return F.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Ke(e))}if(!(t instanceof Array)&&DD){const n=[];let r=!1;if(kt(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ke(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new q(o,l)))}}),n.length===0)return F.EMPTY_NODE;const s=zu(n,TD,o=>o.name,Nm);if(r){const o=zu(n,Ee.getCompare());return new F(s,Ke(e),new xn({".priority":o},{".priority":Ee}))}else return new F(s,Ke(e),xn.Default)}else{let n=F.EMPTY_NODE;return kt(t,(r,i)=>{if(Kn(t,r)&&r.substring(0,1)!=="."){const s=Ke(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ke(e))}}kD(Ke);/**
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
 */class OD extends jc{constructor(e){super(),this.indexPath_=e,k(!G(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fs(e.name,n.name):s}makePost(e,n){const r=Ke(e),i=F.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=F.EMPTY_NODE.updateChild(this.indexPath_,ja);return new q(hi,e)}toString(){return fC(this.indexPath_,0).join("/")}}/**
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
 */class bD extends jc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fs(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Ke(e);return new q(n,r)}toString(){return".value"}}const LD=new bD;/**
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
 */function EC(t){return{type:"value",snapshotNode:t}}function ws(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function sa(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function oa(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function MD(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class xm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(sa(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ws(n,r)):o.trackChildChange(oa(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(sa(i,s))}),n.isLeafNode()||n.forEachChild(Ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(oa(i,s,o))}else r.trackChildChange(ws(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?F.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class aa{constructor(e){this.indexedFilter_=new xm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=aa.getStartPost_(e),this.endPost_=aa.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=F.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=F.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(F.EMPTY_NODE);const s=this;return n.forEachChild(Ee,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,F.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class FD{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new aa(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=F.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=F.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=F.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(F.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,F.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,m)=>h(m,f)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new q(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(oa(n,r,h)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(sa(n,h));const _=a.updateImmediateChild(n,F.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ws(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(sa(u.name,u.node)),s.trackChildChange(ws(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,F.EMPTY_NODE)):e}}/**
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
 */class Rm{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_s}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:hi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ee}copy(){const e=new Rm;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $D(t){return t.loadsAllData()?new xm(t.getIndex()):t.hasLimit()?new FD(t):new aa(t)}function i_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ee?n="$priority":t.index_===LD?n="$value":t.index_===is?n="$key":(k(t.index_ instanceof OD,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=Ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+Ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=Ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function s_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ee&&(e.i=t.index_.toString()),e}/**
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
 */class Bu extends cC{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=$a("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Bu.getListenId_(e,r),a={};this.listens_[o]=a;const l=i_(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let h=c;if(u===404&&(h=null,u=null),u===null&&this.onDataUpdate_(s,h,!1,r),ys(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=Bu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=i_(e._queryParams),r=e._path.toString(),i=new Dc;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ms(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ea(a.responseText)}catch{It("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&It("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class jD{constructor(){this.rootNode_=F.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Wu(){return{value:null,children:new Map}}function CC(t,e,n){if(G(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Wu());const i=t.children.get(r);e=oe(e),CC(i,e,n)}}function Pf(t,e,n){t.value!==null?n(e,t.value):UD(t,(r,i)=>{const s=new se(e.toString()+"/"+r);Pf(i,s,n)})}function UD(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class VD{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const o_=10*1e3,zD=30*1e3,BD=5*60*1e3;class WD{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new VD(e);const r=o_+(zD-o_)*Math.random();ko(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;kt(e,(i,s)=>{s>0&&Kn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*BD))}}/**
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
 */var Gt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Gt||(Gt={}));function SC(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Am(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Pm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Hu{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Gt.ACK_USER_WRITE,this.source=SC()}operationForChild(e){if(G(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Hu(ne(),n,this.revert)}}else return k(K(this.path)===e,"operationForChild called for unrelated child."),new Hu(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class la{constructor(e,n){this.source=e,this.path=n,this.type=Gt.LISTEN_COMPLETE}operationForChild(e){return G(this.path)?new la(this.source,ne()):new la(this.source,oe(this.path))}}/**
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
 */class di{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Gt.OVERWRITE}operationForChild(e){return G(this.path)?new di(this.source,ne(),this.snap.getImmediateChild(e)):new di(this.source,oe(this.path),this.snap)}}/**
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
 */class ua{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Gt.MERGE}operationForChild(e){if(G(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new di(this.source,ne(),n.value):new ua(this.source,ne(),n)}else return k(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ua(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fi{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(G(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class HD{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function KD(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(MD(o.childName,o.snapshotNode))}),io(t,i,"child_removed",e,r,n),io(t,i,"child_added",e,r,n),io(t,i,"child_moved",s,r,n),io(t,i,"child_changed",e,r,n),io(t,i,"value",e,r,n),i}function io(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>GD(t,a,l)),o.forEach(a=>{const l=qD(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function qD(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function GD(t,e,n){if(e.childName==null||n.childName==null)throw Ls("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Uc(t,e){return{eventCache:t,serverCache:e}}function No(t,e,n,r){return Uc(new fi(e,n,r),t.serverCache)}function TC(t,e,n,r){return Uc(t.eventCache,new fi(e,n,r))}function Df(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let sd;const QD=()=>(sd||(sd=new Et(bP)),sd);class ue{constructor(e,n=QD()){this.value=e,this.children=n}static fromObject(e){let n=new ue(null);return kt(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ne(),value:this.value};if(G(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:Pe(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(G(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new ue(null)}}set(e,n){if(G(e))return new ue(n,this.children);{const r=K(e),s=(this.children.get(r)||new ue(null)).set(oe(e),n),o=this.children.insert(r,s);return new ue(this.value,o)}}remove(e){if(G(e))return this.children.isEmpty()?new ue(null):new ue(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ue(null):new ue(this.value,s)}else return this}}get(e){if(G(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(G(e))return n;{const r=K(e),s=(this.children.get(r)||new ue(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ue(this.value,o)}}fold(e){return this.fold_(ne(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Pe(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ne(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(G(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),Pe(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ne(),n)}foreachOnPath_(e,n,r){if(G(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),Pe(n,i),r):new ue(null)}}foreach(e){this.foreach_(ne(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Pe(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Jt{constructor(e){this.writeTree_=e}static empty(){return new Jt(new ue(null))}}function xo(t,e,n){if(G(e))return new Jt(new ue(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=wt(i,e);return s=s.updateChild(o,n),new Jt(t.writeTree_.set(i,s))}else{const i=new ue(n),s=t.writeTree_.setTree(e,i);return new Jt(s)}}}function a_(t,e,n){let r=t;return kt(n,(i,s)=>{r=xo(r,Pe(e,i),s)}),r}function l_(t,e){if(G(e))return Jt.empty();{const n=t.writeTree_.setTree(e,new ue(null));return new Jt(n)}}function Of(t,e){return Ci(t,e)!=null}function Ci(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(wt(n.path,e)):null}function u_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ee,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function _r(t,e){if(G(e))return t;{const n=Ci(t,e);return n!=null?new Jt(new ue(n)):new Jt(t.writeTree_.subtree(e))}}function bf(t){return t.writeTree_.isEmpty()}function Es(t,e){return IC(ne(),t.writeTree_,e)}function IC(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(k(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=IC(Pe(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Pe(t,".priority"),r)),n}}/**
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
 */function Dm(t,e){return RC(e,t)}function YD(t,e,n,r,i){k(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=xo(t.visibleWrites,e,n)),t.lastWriteId=r}function XD(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function JD(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ZD(a,r.path)?i=!1:qt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return eO(t),!0;if(r.snap)t.visibleWrites=l_(t.visibleWrites,r.path);else{const a=r.children;kt(a,l=>{t.visibleWrites=l_(t.visibleWrites,Pe(r.path,l))})}return!0}else return!1}function ZD(t,e){if(t.snap)return qt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&qt(Pe(t.path,n),e))return!0;return!1}function eO(t){t.visibleWrites=kC(t.allWrites,tO,ne()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tO(t){return t.visible}function kC(t,e,n){let r=Jt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)qt(n,o)?(a=wt(n,o),r=xo(r,a,s.snap)):qt(o,n)&&(a=wt(o,n),r=xo(r,ne(),s.snap.getChild(a)));else if(s.children){if(qt(n,o))a=wt(n,o),r=a_(r,a,s.children);else if(qt(o,n))if(a=wt(o,n),G(a))r=a_(r,ne(),s.children);else{const l=ys(s.children,K(a));if(l){const u=l.getChild(oe(a));r=xo(r,ne(),u)}}}else throw Ls("WriteRecord should have .snap or .children")}}return r}function NC(t,e,n,r,i){if(!r&&!i){const s=Ci(t.visibleWrites,e);if(s!=null)return s;{const o=_r(t.visibleWrites,e);if(bf(o))return n;if(n==null&&!Of(o,ne()))return null;{const a=n||F.EMPTY_NODE;return Es(o,a)}}}else{const s=_r(t.visibleWrites,e);if(!i&&bf(s))return n;if(!i&&n==null&&!Of(s,ne()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(qt(u.path,e)||qt(e,u.path))},a=kC(t.allWrites,o,e),l=n||F.EMPTY_NODE;return Es(a,l)}}}function nO(t,e,n){let r=F.EMPTY_NODE;const i=Ci(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_r(t.visibleWrites,e);return n.forEachChild(Ee,(o,a)=>{const l=Es(_r(s,new se(o)),a);r=r.updateImmediateChild(o,l)}),u_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_r(t.visibleWrites,e);return u_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function rO(t,e,n,r,i){k(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Pe(e,n);if(Of(t.visibleWrites,s))return null;{const o=_r(t.visibleWrites,s);return bf(o)?i.getChild(n):Es(o,i.getChild(n))}}function iO(t,e,n,r){const i=Pe(e,n),s=Ci(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_r(t.visibleWrites,i);return Es(o,r.getNode().getImmediateChild(n))}else return null}function sO(t,e){return Ci(t.visibleWrites,e)}function oO(t,e,n,r,i,s,o){let a;const l=_r(t.visibleWrites,e),u=Ci(l,ne());if(u!=null)a=u;else if(n!=null)a=Es(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],h=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&c.length<i;)h(m,r)!==0&&c.push(m),m=f.getNext();return c}else return[]}function aO(){return{visibleWrites:Jt.empty(),allWrites:[],lastWriteId:-1}}function Ku(t,e,n,r){return NC(t.writeTree,t.treePath,e,n,r)}function Om(t,e){return nO(t.writeTree,t.treePath,e)}function c_(t,e,n,r){return rO(t.writeTree,t.treePath,e,n,r)}function qu(t,e){return sO(t.writeTree,Pe(t.treePath,e))}function lO(t,e,n,r,i,s){return oO(t.writeTree,t.treePath,e,n,r,i,s)}function bm(t,e,n){return iO(t.writeTree,t.treePath,e,n)}function xC(t,e){return RC(Pe(t.treePath,e),t.writeTree)}function RC(t,e){return{treePath:t,writeTree:e}}/**
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
 */class uO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,oa(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,sa(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ws(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,oa(r,e.snapshotNode,i.oldSnap));else throw Ls("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const AC=new cO;class Lm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new fi(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return bm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),s=lO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function hO(t){return{filter:t}}function dO(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function fO(t,e,n,r,i){const s=new uO;let o,a;if(n.type===Gt.OVERWRITE){const u=n;u.source.fromUser?o=Lf(t,e,u.path,u.snap,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!G(u.path),o=Gu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Gt.MERGE){const u=n;u.source.fromUser?o=mO(t,e,u.path,u.children,r,i,s):(k(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Mf(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Gt.ACK_USER_WRITE){const u=n;u.revert?o=vO(t,e,u.path,r,i,s):o=gO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Gt.LISTEN_COMPLETE)o=yO(t,e,n.path,r,s);else throw Ls("Unknown operation type: "+n.type);const l=s.getChanges();return pO(e,o,l),{viewCache:o,changes:l}}function pO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Df(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(EC(Df(e)))}}function PC(t,e,n,r,i,s){const o=e.eventCache;if(qu(r,n)!=null)return e;{let a,l;if(G(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=pi(e),c=u instanceof F?u:F.EMPTY_NODE,h=Om(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const u=Ku(r,pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=K(n);if(u===".priority"){k(Ir(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const h=c_(r,n,c,l);h!=null?a=t.filter.updatePriority(c,h):a=o.getNode()}else{const c=oe(n);let h;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=c_(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(u).updateChild(c,f):h=o.getNode().getImmediateChild(u)}else h=bm(r,u,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),u,h,c,i,s):a=o.getNode()}}return No(e,a,o.isFullyInitialized()||G(n),t.filter.filtersNodes())}}function Gu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(G(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),m,null)}else{const m=K(n);if(!l.isCompleteForPath(n)&&Ir(n)>1)return e;const v=oe(n),E=l.getNode().getImmediateChild(m).updateChild(v,r);m===".priority"?u=c.updatePriority(l.getNode(),E):u=c.updateChild(l.getNode(),m,E,v,AC,null)}const h=TC(e,u,l.isFullyInitialized()||G(n),c.filtersNodes()),f=new Lm(i,h,s);return PC(t,h,n,i,f,a)}function Lf(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Lm(i,e,s);if(G(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=No(e,u,!0,t.filter.filtersNodes());else{const h=K(n);if(h===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=No(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=oe(n),m=a.getNode().getImmediateChild(h);let v;if(G(f))v=r;else{const _=c.getCompleteChild(h);_!=null?dC(f)===".priority"&&_.getChild(pC(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=F.EMPTY_NODE}if(m.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),h,v,f,c,o);l=No(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function h_(t,e){return t.eventCache.isCompleteForChild(e)}function mO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Pe(n,l);h_(e,K(c))&&(a=Lf(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Pe(n,l);h_(e,K(c))||(a=Lf(t,a,c,u,i,s,o))}),a}function d_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Mf(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;G(n)?u=r:u=new ue(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((h,f)=>{if(c.hasChild(h)){const m=e.serverCache.getNode().getImmediateChild(h),v=d_(t,m,f);l=Gu(t,l,new se(h),v,i,s,o,a)}}),u.children.inorderTraversal((h,f)=>{const m=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!c.hasChild(h)&&!m){const v=e.serverCache.getNode().getImmediateChild(h),_=d_(t,v,f);l=Gu(t,l,new se(h),_,i,s,o,a)}}),l}function gO(t,e,n,r,i,s,o){if(qu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(G(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Gu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(G(n)){let u=new ue(null);return l.getNode().forEachChild(is,(c,h)=>{u=u.set(new se(c),h)}),Mf(t,e,n,u,i,s,a,o)}else return e}else{let u=new ue(null);return r.foreach((c,h)=>{const f=Pe(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Mf(t,e,n,u,i,s,a,o)}}function yO(t,e,n,r,i){const s=e.serverCache,o=TC(e,s.getNode(),s.isFullyInitialized()||G(n),s.isFiltered());return PC(t,o,n,r,AC,i)}function vO(t,e,n,r,i,s){let o;if(qu(r,n)!=null)return e;{const a=new Lm(r,e,i),l=e.eventCache.getNode();let u;if(G(n)||K(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ku(r,pi(e));else{const h=e.serverCache.getNode();k(h instanceof F,"serverChildren would be complete if leaf node"),c=Om(r,h)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=K(n);let h=bm(r,c,e.serverCache);h==null&&e.serverCache.isCompleteForChild(c)&&(h=l.getImmediateChild(c)),h!=null?u=t.filter.updateChild(l,c,h,oe(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,F.EMPTY_NODE,oe(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ku(r,pi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||qu(r,ne())!=null,No(e,u,o,t.filter.filtersNodes())}}/**
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
 */class _O{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new xm(r.getIndex()),s=$D(r);this.processor_=hO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(F.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(F.EMPTY_NODE,a.getNode(),null),c=new fi(l,o.isFullyInitialized(),i.filtersNodes()),h=new fi(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Uc(h,c),this.eventGenerator_=new HD(this.query_)}get query(){return this.query_}}function wO(t){return t.viewCache_.serverCache.getNode()}function EO(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!G(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function f_(t){return t.eventRegistrations_.length===0}function CO(t,e){t.eventRegistrations_.push(e)}function p_(t,e,n){const r=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function m_(t,e,n,r){e.type===Gt.MERGE&&e.source.queryId!==null&&(k(pi(t.viewCache_),"We should always have a full cache before handling merges"),k(Df(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=fO(t.processor_,i,e,n,r);return dO(t.processor_,s.viewCache),k(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,DC(t,s.changes,s.viewCache.eventCache.getNode(),null)}function SO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ee,(s,o)=>{r.push(ws(s,o))}),n.isFullyInitialized()&&r.push(EC(n.getNode())),DC(t,r,n.getNode(),e)}function DC(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return KD(t.eventGenerator_,e,n,i)}/**
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
 */let Qu;class TO{constructor(){this.views=new Map}}function IO(t){k(!Qu,"__referenceConstructor has already been defined"),Qu=t}function kO(){return k(Qu,"Reference.ts has not been loaded"),Qu}function NO(t){return t.views.size===0}function Mm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return k(s!=null,"SyncTree gave us an op for an invalid query."),m_(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(m_(o,e,n,r));return s}}function xO(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ku(n,i?r:null),l=!1;a?l=!0:r instanceof F?(a=Om(n,r),l=!1):(a=F.EMPTY_NODE,l=!1);const u=Uc(new fi(a,l,!1),new fi(r,i,!1));return new _O(e,u)}return o}function RO(t,e,n,r,i,s){const o=xO(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),CO(o,n),SO(o,n)}function AO(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=kr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(p_(u,n,r)),f_(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(p_(l,n,r)),f_(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!kr(t)&&s.push(new(kO())(e._repo,e._path)),{removed:s,events:o}}function OC(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function ss(t,e){let n=null;for(const r of t.views.values())n=n||EO(r,e);return n}function bC(t,e){if(e._queryParams.loadsAllData())return Vc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function LC(t,e){return bC(t,e)!=null}function kr(t){return Vc(t)!=null}function Vc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Yu;function PO(t){k(!Yu,"__referenceConstructor has already been defined"),Yu=t}function DO(){return k(Yu,"Reference.ts has not been loaded"),Yu}let OO=1;class g_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ue(null),this.pendingWriteTree_=aO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function MC(t,e,n,r,i){return YD(t.pendingWriteTree_,e,n,r,i),i?Ua(t,new di(SC(),e,n)):[]}function qr(t,e,n=!1){const r=XD(t.pendingWriteTree_,e);if(JD(t.pendingWriteTree_,e)){let s=new ue(null);return r.snap!=null?s=s.set(ne(),!0):kt(r.children,o=>{s=s.set(new se(o),!0)}),Ua(t,new Hu(r.path,s,n))}else return[]}function zc(t,e,n){return Ua(t,new di(Am(),e,n))}function bO(t,e,n){const r=ue.fromObject(n);return Ua(t,new ua(Am(),e,r))}function LO(t,e){return Ua(t,new la(Am(),e))}function MO(t,e,n){const r=$m(t,n);if(r){const i=jm(r),s=i.path,o=i.queryId,a=wt(s,e),l=new la(Pm(o),a);return Um(t,s,l)}else return[]}function Ff(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||LC(o,e))){const l=AO(o,e,n,r);NO(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(s,(f,m)=>kr(m));if(c&&!h){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=jO(f);for(let v=0;v<m.length;++v){const _=m[v],E=_.query,g=jC(t,_);t.listenProvider_.startListening(Ro(E),Xu(t,E),g.hashFn,g.onComplete)}}}!h&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Ro(e),null):u.forEach(f=>{const m=t.queryToTagMap.get(Bc(f));t.listenProvider_.stopListening(Ro(f),m)}))}UO(t,u)}return a}function FO(t,e,n,r){const i=$m(t,r);if(i!=null){const s=jm(i),o=s.path,a=s.queryId,l=wt(o,e),u=new di(Pm(a),l,n);return Um(t,o,u)}else return[]}function $O(t,e,n,r){const i=$m(t,r);if(i){const s=jm(i),o=s.path,a=s.queryId,l=wt(o,e),u=ue.fromObject(n),c=new ua(Pm(a),l,u);return Um(t,o,c)}else return[]}function y_(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const v=wt(f,i);s=s||ss(m,v),o=o||kr(m)});let a=t.syncPointTree_.get(i);a?(o=o||kr(a),s=s||ss(a,ne())):(a=new TO,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=F.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const _=ss(v,ne());_&&(s=s.updateImmediateChild(m,_))}));const u=LC(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=Bc(e);k(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=VO();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const c=Dm(t.pendingWriteTree_,i);let h=RO(a,e,n,c,s,l);if(!u&&!o&&!r){const f=bC(a,e);h=h.concat(zO(t,e,f))}return h}function Fm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=wt(o,e),u=ss(a,l);if(u)return u});return NC(i,e,s,n,!0)}function Ua(t,e){return FC(e,t.syncPointTree_,null,Dm(t.pendingWriteTree_,ne()))}function FC(t,e,n,r){if(G(t.path))return $C(t,e,n,r);{const i=e.get(ne());n==null&&i!=null&&(n=ss(i,ne()));let s=[];const o=K(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=xC(r,o);s=s.concat(FC(a,l,u,c))}return i&&(s=s.concat(Mm(i,t,r,n))),s}}function $C(t,e,n,r){const i=e.get(ne());n==null&&i!=null&&(n=ss(i,ne()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=xC(r,o),c=t.operationForChild(o);c&&(s=s.concat($C(c,a,l,u)))}),i&&(s=s.concat(Mm(i,t,r,n))),s}function jC(t,e){const n=e.query,r=Xu(t,n);return{hashFn:()=>(wO(e)||F.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?MO(t,n._path,r):LO(t,n._path);{const s=FP(i,n);return Ff(t,n,null,s)}}}}function Xu(t,e){const n=Bc(e);return t.queryToTagMap.get(n)}function Bc(t){return t._path.toString()+"$"+t._queryIdentifier}function $m(t,e){return t.tagToQueryMap.get(e)}function jm(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Um(t,e,n){const r=t.syncPointTree_.get(e);k(r,"Missing sync point for query tag that we're tracking");const i=Dm(t.pendingWriteTree_,e);return Mm(r,n,i,null)}function jO(t){return t.fold((e,n,r)=>{if(n&&kr(n))return[Vc(n)];{let i=[];return n&&(i=OC(n)),kt(r,(s,o)=>{i=i.concat(o)}),i}})}function Ro(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(DO())(t._repo,t._path):t}function UO(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Bc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function VO(){return OO++}function zO(t,e,n){const r=e._path,i=Xu(t,e),s=jC(t,n),o=t.listenProvider_.startListening(Ro(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)k(!kr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,h)=>{if(!G(u)&&c&&kr(c))return[Vc(c).query];{let f=[];return c&&(f=f.concat(OC(c).map(m=>m.query))),kt(h,(m,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Ro(c),Xu(t,c))}}return o}/**
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
 */class Vm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Vm(n)}node(){return this.node_}}class zm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Pe(this.path_,e);return new zm(this.syncTree_,n)}node(){return Fm(this.syncTree_,this.path_)}}const BO=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},v_=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return WO(t[".sv"],e,n);if(typeof t[".sv"]=="object")return HO(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},WO=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},HO=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&k(!1,"Unexpected increment value: "+r);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},KO=function(t,e,n,r){return Bm(e,new zm(n,t),r)},UC=function(t,e,n){return Bm(t,new Vm(e),n)};function Bm(t,e,n){const r=t.getPriority().val(),i=v_(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=v_(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,Ke(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(Ee,(a,l)=>{const u=Bm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Wm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Hm(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=ys(r.node.children,i)||{children:{},childCount:0};r=new Wm(i,r,s),n=oe(n),i=K(n)}return r}function js(t){return t.node.value}function VC(t,e){t.node.value=e,$f(t)}function zC(t){return t.node.childCount>0}function qO(t){return js(t)===void 0&&!zC(t)}function Wc(t,e){kt(t.node.children,(n,r)=>{e(new Wm(n,t,r))})}function BC(t,e,n,r){n&&!r&&e(t),Wc(t,i=>{BC(i,e,!0,r)}),n&&r&&e(t)}function GO(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Va(t){return new se(t.parent===null?t.name:Va(t.parent)+"/"+t.name)}function $f(t){t.parent!==null&&QO(t.parent,t.name,t)}function QO(t,e,n){const r=qO(n),i=Kn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,$f(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,$f(t))}/**
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
 */const YO=/[\[\].#$\/\u0000-\u001F\u007F]/,XO=/[\[\].#$\u0000-\u001F\u007F]/,od=10*1024*1024,WC=function(t){return typeof t=="string"&&t.length!==0&&!YO.test(t)},HC=function(t){return typeof t=="string"&&t.length!==0&&!XO.test(t)},JO=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),HC(t)},ZO=function(t,e,n,r){r&&e===void 0||Km(cm(t,"value"),e,n)},Km=function(t,e,n){const r=n instanceof se?new gD(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Vr(r)+" with contents = "+e.toString());if(HE(e))throw new Error(t+"contains "+e.toString()+" "+Vr(r));if(typeof e=="string"&&e.length>od/3&&Oc(e)>od)throw new Error(t+"contains a string greater than "+od+" utf8 bytes "+Vr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(kt(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!WC(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yD(r,o),Km(t,a,r),vD(r)}),i&&s)throw new Error(t+' contains ".value" child '+Vr(r)+" in addition to actual children.")}},KC=function(t,e,n,r){if(!(r&&n===void 0)&&!HC(n))throw new Error(cm(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),KC(t,e,n,r)},tb=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},nb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!WC(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!JO(n))throw new Error(cm(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class rb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function qm(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Im(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function qC(t,e,n){qm(t,n),GC(t,r=>Im(r,e))}function jn(t,e,n){qm(t,n),GC(t,r=>qt(r,e)||qt(e,r))}function GC(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(ib(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function ib(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ti&&nt("event: "+n.toString()),$s(r)}}}/**
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
 */const sb="repo_interrupt",ob=25;class ab{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Wu(),this.transactionQueueTree_=new Wm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lb(t,e,n){if(t.stats_=Sm(t.repoInfo_),t.forceRestClient_||VP())t.server_=new Bu(t.repoInfo_,(r,i,s,o)=>{__(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>w_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Pn(t.repoInfo_,e,(r,i,s,o)=>{__(t,r,i,s,o)},r=>{w_(t,r)},r=>{cb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=KP(t.repoInfo_,()=>new WD(t.stats_,t.server_)),t.infoData_=new jD,t.infoSyncTree_=new g_({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=zc(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qm(t,"connected",!1),t.serverSyncTree_=new g_({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);jn(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function ub(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Gm(t){return BO({timestamp:ub(t)})}function __(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Du(n,u=>Ke(u));o=$O(t.serverSyncTree_,s,l,i)}else{const l=Ke(n);o=FO(t.serverSyncTree_,s,l,i)}else if(r){const l=Du(n,u=>Ke(u));o=bO(t.serverSyncTree_,s,l)}else{const l=Ke(n);o=zc(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Hc(t,s)),jn(t.eventQueue_,a,o)}function w_(t,e){Qm(t,"connected",e),e===!1&&db(t)}function cb(t,e){kt(e,(n,r)=>{Qm(t,n,r)})}function Qm(t,e,n){const r=new se("/.info/"+e),i=Ke(n);t.infoData_.updateSnapshot(r,i);const s=zc(t.infoSyncTree_,r,i);jn(t.eventQueue_,r,s)}function QC(t){return t.nextWriteId_++}function hb(t,e,n,r,i){Ym(t,"set",{path:e.toString(),value:n,priority:r});const s=Gm(t),o=Ke(n,r),a=Fm(t.serverSyncTree_,e),l=UC(o,a,s),u=QC(t),c=MC(t.serverSyncTree_,e,l,u,!0);qm(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const v=f==="ok";v||It("set at "+e+" failed: "+f);const _=qr(t.serverSyncTree_,u,!v);jn(t.eventQueue_,e,_),mb(t,i,f,m)});const h=eS(t,e);Hc(t,h),jn(t.eventQueue_,h,[])}function db(t){Ym(t,"onDisconnectEvents");const e=Gm(t),n=Wu();Pf(t.onDisconnect_,ne(),(i,s)=>{const o=KO(i,s,t.serverSyncTree_,e);CC(n,i,o)});let r=[];Pf(n,ne(),(i,s)=>{r=r.concat(zc(t.serverSyncTree_,i,s));const o=eS(t,i);Hc(t,o)}),t.onDisconnect_=Wu(),jn(t.eventQueue_,ne(),r)}function fb(t,e,n){let r;K(e._path)===".info"?r=y_(t.infoSyncTree_,e,n):r=y_(t.serverSyncTree_,e,n),qC(t.eventQueue_,e._path,r)}function E_(t,e,n){let r;K(e._path)===".info"?r=Ff(t.infoSyncTree_,e,n):r=Ff(t.serverSyncTree_,e,n),qC(t.eventQueue_,e._path,r)}function pb(t){t.persistentConnection_&&t.persistentConnection_.interrupt(sb)}function Ym(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function mb(t,e,n,r){e&&$s(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function YC(t,e,n){return Fm(t.serverSyncTree_,e,n)||F.EMPTY_NODE}function Xm(t,e=t.transactionQueueTree_){if(e||Kc(t,e),js(e)){const n=JC(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gb(t,Va(e),n)}else zC(e)&&Wc(e,n=>{Xm(t,n)})}function gb(t,e,n){const r=n.map(u=>u.currentWriteId),i=YC(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];k(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const h=wt(e,c.path);s=s.updateChild(h,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ym(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(qr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Kc(t,Hm(t.transactionQueueTree_,e)),Xm(t,t.transactionQueueTree_),jn(t.eventQueue_,e,c);for(let f=0;f<h.length;f++)$s(h[f])}else{if(u==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{It("transaction at "+l.toString()+" failed: "+u);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=u}Hc(t,e)}},o)}function Hc(t,e){const n=XC(t,e),r=Va(n),i=JC(t,n);return yb(t,i,r),r}function yb(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=wt(n,l.path);let c=!1,h;if(k(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,h=l.abortReason,i=i.concat(qr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ob)c=!0,h="maxretry",i=i.concat(qr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=YC(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Km("transaction failed: Data returned ",m,l.path);let v=Ke(m);typeof m=="object"&&m!=null&&Kn(m,".priority")||(v=v.updatePriority(f.getPriority()));const E=l.currentWriteId,g=Gm(t),p=UC(v,f,g);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=QC(t),o.splice(o.indexOf(E),1),i=i.concat(MC(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(qr(t.serverSyncTree_,E,!0))}else c=!0,h="nodata",i=i.concat(qr(t.serverSyncTree_,l.currentWriteId,!0))}jn(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}Kc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$s(r[a]);Xm(t,t.transactionQueueTree_)}function XC(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&js(r)===void 0;)r=Hm(r,n),e=oe(e),n=K(e);return r}function JC(t,e){const n=[];return ZC(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ZC(t,e,n){const r=js(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Wc(e,i=>{ZC(t,i,n)})}function Kc(t,e){const n=js(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,VC(e,n.length>0?n:void 0)}Wc(e,r=>{Kc(t,r)})}function eS(t,e){const n=Va(XC(t,e)),r=Hm(t.transactionQueueTree_,e);return GO(r,i=>{ad(t,i)}),ad(t,r),BC(r,i=>{ad(t,i)}),n}function ad(t,e){const n=js(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(qr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?VC(e,void 0):n.length=s+1,jn(t.eventQueue_,Va(e),i);for(let o=0;o<r.length;o++)$s(r[o])}}/**
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
 */function vb(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function _b(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):It(`Invalid query segment '${n}' in query '${t}'`)}return e}const C_=function(t,e){const n=wb(t),r=n.namespace;n.domain==="firebase.com"&&$n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&$n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||DP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new rC(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},wb=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(c,h)),c<h&&(i=vb(t.substring(c,h)));const f=_b(t.substring(Math.min(t.length,h)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class tS{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class nS{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Eb{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Jm{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return G(this._path)?null:dC(this._path)}get ref(){return new qn(this._repo,this._path)}get _queryIdentifier(){const e=s_(this._queryParams),n=Em(e);return n==="{}"?"default":n}get _queryObject(){return s_(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof Jm))return!1;const n=this._repo===e._repo,r=Im(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mD(this._path)}}class qn extends Jm{constructor(e,n){super(e,n,new Rm,!1)}get parent(){const e=pC(this._path);return e===null?null:new qn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ca{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Ju(this.ref,e);return new ca(this._node.getChild(n),r,Ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new ca(i,Ju(this.ref,r),Ee)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function S_(t,e){return t=ct(t),t._checkNotDeleted("ref"),e!==void 0?Ju(t._root,e):t._root}function Ju(t,e){return t=ct(t),K(t._path)===null?eb("child","path",e,!1):KC("child","path",e,!1),new qn(t._repo,Pe(t._path,e))}function Cb(t,e){t=ct(t),tb("set",t._path),ZO("set",e,t._path,!1);const n=new Dc;return hb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class Zm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new tS("value",this,new ca(e.snapshotNode,new qn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nS(this,e,n):null}matches(e){return e instanceof Zm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class eg{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new nS(this,e,n):null}createEvent(e,n){k(e.childName!=null,"Child events should have a childName.");const r=Ju(new qn(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new tS(e.type,this,new ca(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof eg?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Sb(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,h)=>{E_(t._repo,t,a),l(c,h)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Eb(n,s||void 0),a=e==="value"?new Zm(o):new eg(e,o);return fb(t._repo,t,a),()=>E_(t._repo,t,a)}function Tb(t,e,n,r){return Sb(t,"value",e,n,r)}IO(qn);PO(qn);/**
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
 */const Ib="FIREBASE_DATABASE_EMULATOR_HOST",jf={};let kb=!1;function Nb(t,e,n,r){t.repoInfo_=new rC(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function xb(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||$n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=C_(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[Ib]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=C_(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new rs(rs.OWNER):new BP(t.name,t.options,e);nb("Invalid Firebase Database URL",o),G(o.path)||$n("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ab(a,t,c,new zP(t.name,n));return new Pb(h,t)}function Rb(t,e){const n=jf[e];(!n||n[t.key]!==t)&&$n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pb(t),delete n[t.key]}function Ab(t,e,n,r){let i=jf[e.name];i||(i={},jf[e.name]=i);let s=i[t.toURLString()];return s&&$n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new ab(t,kb,n,r),i[t.toURLString()]=s,s}class Pb{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qn(this._repo,ne())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Rb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&$n("Cannot call "+e+" on a deleted database.")}}function Db(t=dm(),e){const n=Lc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Y1("database");r&&Ob(n,...r)}return n}function Ob(t,e,n,r={}){t=ct(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&$n("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&$n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new rs(rs.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Z1(r.mockUserToken,t.app.options.projectId);s=new rs(o)}Nb(i,e,n,s)}/**
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
 */function bb(t){NP(Ei),ui(new Tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return xb(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),dn(zv,Bv,t),dn(zv,Bv,"esm2017")}Pn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Pn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};bb();var Lb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,tg=tg||{},j=Lb||self;function qc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function za(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Mb(t){return Object.prototype.hasOwnProperty.call(t,ld)&&t[ld]||(t[ld]=++Fb)}var ld="closure_uid_"+(1e9*Math.random()>>>0),Fb=0;function $b(t,e,n){return t.call.apply(t.bind,arguments)}function jb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=$b:st=jb,st.apply(null,arguments)}function kl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Be(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Or(){this.s=this.s,this.o=this.o}var Ub=0;Or.prototype.s=!1;Or.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Ub!=0)&&Mb(this)};Or.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ng(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function T_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(qc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var Vb=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",()=>{},e),j.removeEventListener("test",()=>{},e)}catch{}return t}();function ha(t){return/^[\s\xa0]*$/.test(t)}function Gc(){var t=j.navigator;return t&&(t=t.userAgent)?t:""}function an(t){return Gc().indexOf(t)!=-1}function rg(t){return rg[" "](t),t}rg[" "]=function(){};function zb(t,e){var n=bL;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var Bb=an("Opera"),Cs=an("Trident")||an("MSIE"),iS=an("Edge"),Uf=iS||Cs,sS=an("Gecko")&&!(Gc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge"))&&!(an("Trident")||an("MSIE"))&&!an("Edge"),Wb=Gc().toLowerCase().indexOf("webkit")!=-1&&!an("Edge");function oS(){var t=j.document;return t?t.documentMode:void 0}var Vf;e:{var ud="",cd=function(){var t=Gc();if(sS)return/rv:([^\);]+)(\)|;)/.exec(t);if(iS)return/Edge\/([\d\.]+)/.exec(t);if(Cs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Wb)return/WebKit\/(\S+)/.exec(t);if(Bb)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(cd&&(ud=cd?cd[1]:""),Cs){var hd=oS();if(hd!=null&&hd>parseFloat(ud)){Vf=String(hd);break e}}Vf=ud}var zf;if(j.document&&Cs){var I_=oS();zf=I_||parseInt(Vf,10)||void 0}else zf=void 0;var Hb=zf;function da(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(sS){e:{try{rg(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Kb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&da.$.h.call(this)}}Be(da,ot);var Kb={2:"touch",3:"pen",4:"mouse"};da.prototype.h=function(){da.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ba="closure_listenable_"+(1e6*Math.random()|0),qb=0;function Gb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++qb,this.fa=this.ia=!1}function Qc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function ig(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Qb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function aS(t){const e={};for(const n in t)e[n]=t[n];return e}const k_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<k_.length;s++)n=k_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yc(t){this.src=t,this.g={},this.h=0}Yc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Wf(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Gb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=rS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var sg="closure_lm_"+(1e6*Math.random()|0),dd={};function uS(t,e,n,r,i){if(r&&r.once)return hS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)uS(t,e[s],n,r,i);return null}return n=lg(n),t&&t[Ba]?t.O(e,n,za(r)?!!r.capture:!!r,i):cS(t,e,n,!1,r,i)}function cS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=za(i)?!!i.capture:!!i,a=ag(t);if(a||(t[sg]=a=new Yc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Yb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Vb||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(fS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Yb(){function t(n){return e.call(t.src,t.listener,n)}const e=Xb;return t}function hS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)hS(t,e[s],n,r,i);return null}return n=lg(n),t&&t[Ba]?t.P(e,n,za(r)?!!r.capture:!!r,i):cS(t,e,n,!0,r,i)}function dS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dS(t,e[s],n,r,i);else r=za(r)?!!r.capture:!!r,n=lg(n),t&&t[Ba]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Wf(s,n,r,i),-1<n&&(Qc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=ag(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wf(e,n,r,i)),(n=-1<t?e[t]:null)&&og(n))}function og(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ba])Bf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(fS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=ag(e))?(Bf(n,t),n.h==0&&(n.src=null,e[sg]=null)):Qc(t)}}}function fS(t){return t in dd?dd[t]:dd[t]="on"+t}function Xb(t,e){if(t.fa)t=!0;else{e=new da(e,this);var n=t.listener,r=t.la||t.src;t.ia&&og(t),t=n.call(r,e)}return t}function ag(t){return t=t[sg],t instanceof Yc?t:null}var fd="__closure_events_fn_"+(1e9*Math.random()>>>0);function lg(t){return typeof t=="function"?t:(t[fd]||(t[fd]=function(e){return t.handleEvent(e)}),t[fd])}function ze(){Or.call(this),this.i=new Yc(this),this.S=this,this.J=null}Be(ze,Or);ze.prototype[Ba]=!0;ze.prototype.removeEventListener=function(t,e,n,r){dS(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var i=e;e=new ot(r,t),lS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Nl(o,r,!0,e)&&i}if(o=e.g=t,i=Nl(o,r,!0,e)&&i,i=Nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Nl(o,r,!1,e)&&i}ze.prototype.N=function(){if(ze.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qc(n[r]);delete t.g[e],t.h--}}this.J=null};ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};ze.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ug=j.JSON.stringify;class Jb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Zb(){var t=cg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eL{constructor(){this.h=this.g=null}add(e,n){const r=pS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var pS=new Jb(()=>new tL,t=>t.reset());class tL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nL(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function rL(t){j.setTimeout(()=>{throw t},0)}let fa,pa=!1,cg=new eL,mS=()=>{const t=j.Promise.resolve(void 0);fa=()=>{t.then(iL)}};var iL=()=>{for(var t;t=Zb();){try{t.h.call(t.g)}catch(n){rL(n)}var e=pS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}pa=!1};function Xc(t,e){ze.call(this),this.h=t||1,this.g=e||j,this.j=st(this.qb,this),this.l=Date.now()}Be(Xc,ze);x=Xc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(hg(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function hg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Xc.$.N.call(this),hg(this),delete this.g};function dg(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function gS(t){t.g=dg(()=>{t.g=null,t.i&&(t.i=!1,gS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class sL extends Or{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gS(this)}N(){super.N(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ma(t){Or.call(this),this.h=t,this.g={}}Be(ma,Or);var N_=[];function yS(t,e,n,r){Array.isArray(n)||(n&&(N_[0]=n.toString()),n=N_);for(var i=0;i<n.length;i++){var s=uS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function vS(t){ig(t.g,function(e,n){this.g.hasOwnProperty(n)&&og(e)},t),t.g={}}ma.prototype.N=function(){ma.$.N.call(this),vS(this)};ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Jc(){this.g=!0}Jc.prototype.Ea=function(){this.g=!1};function oL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function aL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+uL(t,n)+(r?" "+r:"")})}function lL(t,e){t.info(function(){return"TIMEOUT: "+e})}Jc.prototype.info=function(){};function uL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ug(n)}catch{return e}}var Si={},x_=null;function Zc(){return x_=x_||new ze}Si.Ta="serverreachability";function _S(t){ot.call(this,Si.Ta,t)}Be(_S,ot);function ga(t){const e=Zc();Qe(e,new _S(e))}Si.STAT_EVENT="statevent";function wS(t,e){ot.call(this,Si.STAT_EVENT,t),this.stat=e}Be(wS,ot);function pt(t){const e=Zc();Qe(e,new wS(e,t))}Si.Ua="timingevent";function ES(t,e){ot.call(this,Si.Ua,t),this.size=e}Be(ES,ot);function Wa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var eh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},CS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fg(){}fg.prototype.h=null;function R_(t){return t.h||(t.h=t.i())}function SS(){}var Ha={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pg(){ot.call(this,"d")}Be(pg,ot);function mg(){ot.call(this,"c")}Be(mg,ot);var Hf;function th(){}Be(th,fg);th.prototype.g=function(){return new XMLHttpRequest};th.prototype.i=function(){return{}};Hf=new th;function Ka(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ma(this),this.P=cL,t=Uf?125:void 0,this.V=new Xc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new TS}function TS(){this.i=null,this.g="",this.h=!1}var cL=45e3,Kf={},Zu={};x=Ka.prototype;x.setTimeout=function(t){this.P=t};function qf(t,e,n){t.L=1,t.v=rh(Un(e)),t.s=n,t.S=!0,IS(t,null)}function IS(t,e){t.G=Date.now(),qa(t),t.A=Un(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),OS(n.i,"t",r),t.C=0,n=t.l.J,t.h=new TS,t.g=eT(t.l,n?e:null,!t.s),0<t.O&&(t.M=new sL(st(t.Pa,t,t.g),t.O)),yS(t.U,t.g,"readystatechange",t.nb),e=t.I?aS(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ga(),oL(t.j,t.u,t.A,t.m,t.W,t.s)}x.nb=function(t){t=t.target;const e=this.M;e&&ln(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=ln(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Uf||this.g&&(this.h.h||this.g.ja()||O_(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ga(3):ga(2)),nh(this);var n=this.g.da();this.ca=n;t:if(kS(this)){var r=O_(this.g);t="";var i=r.length,s=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gr(this),Ao(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,aL(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ha(a)){var u=a;break t}}u=null}if(n=u)qi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gf(this,n);else{this.i=!1,this.o=3,pt(12),Gr(this),Ao(this);break e}}this.S?(NS(this,c,o),Uf&&this.i&&c==3&&(yS(this.U,this.V,"tick",this.mb),this.V.start())):(qi(this.j,this.m,o,null),Gf(this,o)),c==4&&Gr(this),this.i&&!this.J&&(c==4?YS(this.l,this):(this.i=!1,qa(this)))}else PL(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pt(12)):(this.o=0,pt(13)),Gr(this),Ao(this)}}}catch{}finally{}};function kS(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function NS(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=hL(t,n),i==Zu){e==4&&(t.o=4,pt(14),r=!1),qi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kf){t.o=4,pt(15),qi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qi(t.j,t.m,i,null),Gf(t,i);kS(t)&&i!=Zu&&i!=Kf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Eg(e),e.M=!0,pt(11))):(qi(t.j,t.m,n,"[Invalid Chunked Response]"),Gr(t),Ao(t))}x.mb=function(){if(this.g){var t=ln(this.g),e=this.g.ja();this.C<e.length&&(nh(this),NS(this,t,e),this.i&&t!=4&&qa(this))}};function hL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zu:(n=Number(e.substring(n,r)),isNaN(n)?Kf:(r+=1,r+n>e.length?Zu:(e=e.slice(r,r+n),t.C=r+n,e)))}x.cancel=function(){this.J=!0,Gr(this)};function qa(t){t.Y=Date.now()+t.P,xS(t,t.P)}function xS(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Wa(st(t.lb,t),e)}function nh(t){t.B&&(j.clearTimeout(t.B),t.B=null)}x.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(lL(this.j,this.A),this.L!=2&&(ga(),pt(17)),Gr(this),this.o=2,Ao(this)):xS(this,this.Y-t)};function Ao(t){t.l.H==0||t.J||YS(t.l,t)}function Gr(t){nh(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,hg(t.V),vS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qf(n.i,t))){if(!t.K&&Qf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)nc(n),oh(n);else break e;wg(n),pt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wa(st(n.ib,n),6e3));if(1>=MS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Qr(n,11)}else if((t.K||n.g==t)&&nc(n),!ha(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gg(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ce(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ZS(r,r.J?r.pa:null,r.Y),o.K){FS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(nh(a),qa(a)),r.g=o}else GS(r);0<n.j.length&&ah(n)}else u[0]!="stop"&&u[0]!="close"||Qr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Qr(n,7):_g(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ga(4)}catch{}}function dL(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(qc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function fL(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(qc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function RS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(qc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fL(t),r=dL(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var AS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ni(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ni){this.h=t.h,ec(this,t.j),this.s=t.s,this.g=t.g,tc(this,t.m),this.l=t.l;var e=t.i,n=new ya;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),A_(this,n),this.o=t.o}else t&&(e=String(t).match(AS))?(this.h=!1,ec(this,e[1]||"",!0),this.s=ho(e[2]||""),this.g=ho(e[3]||"",!0),tc(this,e[4]),this.l=ho(e[5]||"",!0),A_(this,e[6]||"",!0),this.o=ho(e[7]||"")):(this.h=!1,this.i=new ya(null,this.h))}ni.prototype.toString=function(){var t=[],e=this.j;e&&t.push(fo(e,P_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(fo(e,P_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(fo(n,n.charAt(0)=="/"?yL:gL,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",fo(n,_L)),t.join("")};function Un(t){return new ni(t)}function ec(t,e,n){t.j=n?ho(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function A_(t,e,n){e instanceof ya?(t.i=e,wL(t.i,t.h)):(n||(e=fo(e,vL)),t.i=new ya(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function rh(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ho(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,mL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function mL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var P_=/[#\/\?@]/g,gL=/[#\?:]/g,yL=/[#\?]/g,vL=/[#\?@]/g,_L=/#/g;function ya(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function br(t){t.g||(t.g=new Map,t.h=0,t.i&&pL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=ya.prototype;x.add=function(t,e){br(this),this.i=null,t=Us(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function PS(t,e){br(t),e=Us(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function DS(t,e){return br(t),e=Us(t,e),t.g.has(e)}x.forEach=function(t,e){br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){br(this);let e=[];if(typeof t=="string")DS(this,t)&&(e=e.concat(this.g.get(Us(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return br(this),this.i=null,t=Us(this,t),DS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function OS(t,e,n){PS(t,e),0<n.length&&(t.i=null,t.g.set(Us(t,e),ng(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Us(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wL(t,e){e&&!t.j&&(br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(PS(this,r),OS(this,i,n))},t)),t.j=e}var EL=class{constructor(t,e){this.g=t,this.map=e}};function bS(t){this.l=t||CL,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ka&&j.g.Ka()&&j.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var CL=10;function LS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function MS(t){return t.h?1:t.g?t.g.size:0}function Qf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function gg(t,e){t.g?t.g.add(e):t.h=e}function FS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}bS.prototype.cancel=function(){if(this.i=$S(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function $S(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ng(t.i)}var SL=class{stringify(t){return j.JSON.stringify(t,void 0)}parse(t){return j.JSON.parse(t,void 0)}};function TL(){this.g=new SL}function IL(t,e,n){const r=n||"";try{RS(t,function(i,s){let o=i;za(i)&&(o=ug(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function kL(t,e){const n=new Jc;if(j.Image){const r=new Image;r.onload=kl(xl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=kl(xl,n,r,"TestLoadImage: error",!1,e),r.onabort=kl(xl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=kl(xl,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ga(t){this.l=t.fc||null,this.j=t.ob||!1}Be(Ga,fg);Ga.prototype.g=function(){return new ih(this.l,this.j)};Ga.prototype.i=function(t){return function(){return t}}({});function ih(t,e){ze.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=yg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(ih,ze);var yg=0;x=ih.prototype;x.open=function(t,e){if(this.readyState!=yg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,va(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||j).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qa(this)),this.readyState=yg};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function jS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qa(this):va(this),this.readyState==3&&jS(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Qa(this))};x.Ya=function(t){this.g&&(this.response=t,Qa(this))};x.ka=function(){this.g&&Qa(this)};function Qa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,va(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ih.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var NL=j.JSON.parse;function Ce(t){ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=US,this.L=this.M=!1}Be(Ce,ze);var US="",xL=/^https?$/i,RL=["POST","PUT"];x=Ce.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Hf.g(),this.C=this.u?R_(this.u):R_(Hf),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){D_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=j.FormData&&t instanceof j.FormData,!(0<=rS(RL,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{BS(this),0<this.B&&((this.L=AL(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=dg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){D_(this,s)}};function AL(t){return Cs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof tg<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function D_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,VS(t),sh(t)}function VS(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),sh(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sh(this,!0)),Ce.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?zS(this):this.kb())};x.kb=function(){zS(this)};function zS(t){if(t.h&&typeof tg<"u"&&(!t.C[1]||ln(t)!=4||t.da()!=2)){if(t.v&&ln(t)==4)dg(t.La,0,t);else if(Qe(t,"readystatechange"),ln(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(AS)[1]||null;!i&&j.self&&j.self.location&&(i=j.self.location.protocol.slice(0,-1)),r=!xL.test(i?i.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var s=2<ln(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",VS(t)}}finally{sh(t)}}}}function sh(t,e){if(t.g){BS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function BS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function ln(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),NL(e)}};function O_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case US:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function PL(t){const e={};t=(t.g&&2<=ln(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ha(t[r]))continue;var n=nL(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}Qb(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function WS(t){let e="";return ig(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function vg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=WS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function so(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function HS(t){this.Ga=0,this.j=[],this.l=new Jc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=so("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=so("baseRetryDelayMs",5e3,t),this.hb=so("retryDelaySeedMs",1e4,t),this.eb=so("forwardChannelMaxRetries",2,t),this.xa=so("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new bS(t&&t.concurrentRequestLimit),this.Ja=new TL,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=HS.prototype;x.ra=8;x.H=1;function _g(t){if(KS(t),t.H==3){var e=t.W++,n=Un(t.I);if(ce(n,"SID",t.K),ce(n,"RID",e),ce(n,"TYPE","terminate"),Ya(t,n),e=new Ka(t,t.l,e),e.L=2,e.v=rh(Un(n)),n=!1,j.navigator&&j.navigator.sendBeacon)try{n=j.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=eT(e.l,null),e.g.ha(e.v)),e.G=Date.now(),qa(e)}JS(t)}function oh(t){t.g&&(Eg(t),t.g.cancel(),t.g=null)}function KS(t){oh(t),t.u&&(j.clearTimeout(t.u),t.u=null),nc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function ah(t){if(!LS(t.i)&&!t.m){t.m=!0;var e=t.Na;fa||mS(),pa||(fa(),pa=!0),cg.add(e,t),t.C=0}}function DL(t,e){return MS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wa(st(t.Na,t,e),XS(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ka(this,this.l,t);let s=this.s;if(this.U&&(s?(s=aS(s),lS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qS(this,i,e),n=Un(this.I),ce(n,"RID",t),ce(n,"CVER",22),this.F&&ce(n,"X-HTTP-Session-Id",this.F),Ya(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(WS(s)))+"&"+e:this.o&&vg(n,this.o,s)),gg(this.i,i),this.bb&&ce(n,"TYPE","init"),this.P?(ce(n,"$req",e),ce(n,"SID","null"),i.aa=!0,qf(i,n,null)):qf(i,n,e),this.H=2}}else this.H==3&&(t?b_(this,t):this.j.length==0||LS(this.i)||b_(this))};function b_(t,e){var n;e?n=e.m:n=t.W++;const r=Un(t.I);ce(r,"SID",t.K),ce(r,"RID",n),ce(r,"AID",t.V),Ya(t,r),t.o&&t.s&&vg(r,t.o,t.s),n=new Ka(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=qS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),gg(t.i,n),qf(n,r,e)}function Ya(t,e){t.na&&ig(t.na,function(n,r){ce(e,r,n)}),t.h&&RS({},function(n,r){ce(e,r,n)})}function qS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{IL(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function GS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;fa||mS(),pa||(fa(),pa=!0),cg.add(e,t),t.A=0}}function wg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wa(st(t.Ma,t),XS(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,QS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wa(st(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pt(10),oh(this),QS(this))};function Eg(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function QS(t){t.g=new Ka(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Un(t.wa);ce(e,"RID","rpc"),ce(e,"SID",t.K),ce(e,"AID",t.V),ce(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ce(e,"TO",t.qa),ce(e,"TYPE","xmlhttp"),Ya(t,e),t.o&&t.s&&vg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rh(Un(e)),n.s=null,n.S=!0,IS(n,t)}x.ib=function(){this.v!=null&&(this.v=null,oh(this),wg(this),pt(19))};function nc(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function YS(t,e){var n=null;if(t.g==e){nc(t),Eg(t),t.g=null;var r=2}else if(Qf(t.i,e))n=e.F,FS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Zc(),Qe(r,new ES(r,n)),ah(t)}else GS(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&DL(t,e)||r==2&&wg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Qr(t,5);break;case 4:Qr(t,10);break;case 3:Qr(t,6);break;default:Qr(t,2)}}}function XS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Qr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new ni("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||ec(n,"https"),rh(n)),kL(n.toString(),r)}else pt(2);t.H=0,t.h&&t.h.za(e),JS(t),KS(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pt(2)):(this.l.info("Failed to ping google.com"),pt(1))};function JS(t){if(t.H=0,t.ma=[],t.h){const e=$S(t.i);(e.length!=0||t.j.length!=0)&&(T_(t.ma,e),T_(t.ma,t.j),t.i.i.length=0,ng(t.j),t.j.length=0),t.h.ya()}}function ZS(t,e,n){var r=n instanceof ni?Un(n):new ni(n);if(r.g!="")e&&(r.g=e+"."+r.g),tc(r,r.m);else{var i=j.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ni(null);r&&ec(s,r),e&&(s.g=e),i&&tc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ce(r,n,e),ce(r,"VER",t.ra),Ya(t,r),r}function eT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ce(new Ga({ob:!0})):new Ce(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function tT(){}x=tT.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function rc(){if(Cs&&!(10<=Number(Hb)))throw Error("Environmental error: no available transport.")}rc.prototype.g=function(t,e){return new Pt(t,e)};function Pt(t,e){ze.call(this),this.g=new HS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ha(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ha(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Vs(this)}Be(Pt,ze);Pt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ZS(t,null,t.Y),ah(t)};Pt.prototype.close=function(){_g(this.g)};Pt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ug(t),t=n);e.j.push(new EL(e.fb++,t)),e.H==3&&ah(e)};Pt.prototype.N=function(){this.g.h=null,delete this.j,_g(this.g),delete this.g,Pt.$.N.call(this)};function nT(t){pg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Be(nT,pg);function rT(){mg.call(this),this.status=1}Be(rT,mg);function Vs(t){this.g=t}Be(Vs,tT);Vs.prototype.Ba=function(){Qe(this.g,"a")};Vs.prototype.Aa=function(t){Qe(this.g,new nT(t))};Vs.prototype.za=function(t){Qe(this.g,new rT)};Vs.prototype.ya=function(){Qe(this.g,"b")};function OL(){this.blockSize=-1}function tn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Be(tn,OL);tn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function pd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}tn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)pd(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){pd(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){pd(this,r),i=0;break}}this.h=i,this.i+=e};tn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ie(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var bL={};function Cg(t){return-128<=t&&128>t?zb(t,function(e){return new ie([e|0],0>e?-1:0)}):new ie([t|0],0>t?-1:0)}function un(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return qe(un(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yf;return new ie(e,0)}function iT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return qe(iT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=un(Math.pow(e,8)),r=os,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=un(Math.pow(e,s)),r=r.R(s).add(un(o))):(r=r.R(n),r=r.add(un(o)))}return r}var Yf=4294967296,os=Cg(0),Xf=Cg(1),L_=Cg(16777216);x=ie.prototype;x.ea=function(){if(Mt(this))return-qe(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yf+r)*e,e*=Yf}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(Mt(this))return"-"+qe(this).toString(t);for(var e=un(Math.pow(t,6)),n=this,r="";;){var i=sc(n,e).g;n=ic(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Rn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Mt(t){return t.h==-1}x.X=function(t){return t=ic(this,t),Mt(t)?-1:Rn(t)?0:1};function qe(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ie(n,~t.h).add(Xf)}x.abs=function(){return Mt(this)?qe(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ie(n,n[n.length-1]&-2147483648?-1:0)};function ic(t,e){return t.add(qe(e))}x.R=function(t){if(Rn(this)||Rn(t))return os;if(Mt(this))return Mt(t)?qe(this).R(qe(t)):qe(qe(this).R(t));if(Mt(t))return qe(this.R(qe(t)));if(0>this.X(L_)&&0>t.X(L_))return un(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Rl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Rl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Rl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Rl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ie(n,0)};function Rl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function oo(t,e){this.g=t,this.h=e}function sc(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new oo(os,os);if(Mt(t))return e=sc(qe(t),e),new oo(qe(e.g),qe(e.h));if(Mt(e))return e=sc(t,qe(e)),new oo(qe(e.g),e.h);if(30<t.g.length){if(Mt(t)||Mt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xf,r=e;0>=r.X(t);)n=M_(n),r=M_(r);var i=Pi(n,1),s=Pi(r,1);for(r=Pi(r,2),n=Pi(n,2);!Rn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pi(r,1),n=Pi(n,1)}return e=ic(t,i.R(e)),new oo(i,e)}for(i=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=un(n),o=s.R(e);Mt(o)||0<o.X(t);)n-=r,s=un(n),o=s.R(e);Rn(s)&&(s=Xf),i=i.add(s),t=ic(t,o)}return new oo(i,t)}x.gb=function(t){return sc(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ie(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ie(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ie(n,this.h^t.h)};function M_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ie(n,t.h)}function Pi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ie(i,t.h)}rc.prototype.createWebChannel=rc.prototype.g;Pt.prototype.send=Pt.prototype.u;Pt.prototype.open=Pt.prototype.m;Pt.prototype.close=Pt.prototype.close;eh.NO_ERROR=0;eh.TIMEOUT=8;eh.HTTP_ERROR=6;CS.COMPLETE="complete";SS.EventType=Ha;Ha.OPEN="a";Ha.CLOSE="b";Ha.ERROR="c";Ha.MESSAGE="d";ze.prototype.listen=ze.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;tn.prototype.digest=tn.prototype.l;tn.prototype.reset=tn.prototype.reset;tn.prototype.update=tn.prototype.j;ie.prototype.add=ie.prototype.add;ie.prototype.multiply=ie.prototype.R;ie.prototype.modulo=ie.prototype.gb;ie.prototype.compare=ie.prototype.X;ie.prototype.toNumber=ie.prototype.ea;ie.prototype.toString=ie.prototype.toString;ie.prototype.getBits=ie.prototype.D;ie.fromNumber=un;ie.fromString=iT;var LL=function(){return new rc},ML=function(){return Zc()},md=eh,FL=CS,$L=Si,F_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},jL=Ga,Al=SS,UL=Ce,VL=tn,as=ie;const $_="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let zs="9.22.1";/**
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
 */const mi=new bc("@firebase/firestore");function j_(){return mi.logLevel}function b(t,...e){if(mi.logLevel<=J.DEBUG){const n=e.map(Sg);mi.debug(`Firestore (${zs}): ${t}`,...n)}}function Vn(t,...e){if(mi.logLevel<=J.ERROR){const n=e.map(Sg);mi.error(`Firestore (${zs}): ${t}`,...n)}}function Ss(t,...e){if(mi.logLevel<=J.WARN){const n=e.map(Sg);mi.warn(`Firestore (${zs}): ${t}`,...n)}}function Sg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function $(t="Unexpected state"){const e=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function de(t,e){t||$()}function W(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Hn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class BL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WL{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new sT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new et(e)}}class HL{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class KL{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new HL(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GL{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(de(typeof n.token=="string"),this.T=n.token,new qL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function QL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oT{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class V{constructor(e){this.timestamp=e}static fromTimestamp(e){return new V(e)}static min(){return new V(new be(0,0))}static max(){return new V(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class _a{constructor(e,n,r){n===void 0?n=0:n>e.length&&$(),r===void 0?r=e.length-n:r>e.length-n&&$(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends _a{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const YL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends _a{construct(e,n,r){return new it(e,n,r)}static isValidIdentifier(e){return YL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new L(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new L(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new L(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new L(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new it(n)}static emptyPath(){return new it([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(me.fromString(e))}static fromName(e){return new M(me.fromString(e).popFirst(5))}static empty(){return new M(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new me(e.slice()))}}function XL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=V.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Nr(i,M.empty(),e)}function JL(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(V.min(),M.empty(),-1)}static max(){return new Nr(V.max(),M.empty(),-1)}}function ZL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const eM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xa(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==eM)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ja(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tg{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Tg.ct=-1;function lh(t){return t==null}function oc(t){return t===0&&1/t==-1/0}function nM(t){return typeof t=="number"&&Number.isInteger(t)&&!oc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function U_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class _e{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pl(this.root,e,this.comparator,!0)}}class Pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??He.RED,this.left=i??He.EMPTY,this.right=s??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new He(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return He.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(t,e,n,r,i){return this}insert(t,e,n){return new He(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new V_(this.data.getIterator())}getIteratorFrom(e){return new V_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class V_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(it.comparator)}static empty(){return new Qt([])}unionWith(e){let n=new at(it.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lT("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const rM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(de(!!t),typeof t=="string"){let e=0;const n=rM.exec(t);if(de(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function Ig(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kg(t){const e=t.mapValue.fields.__previous_value__;return Ig(e)?kg(e):e}function wa(t){const e=xr(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class iM{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ea{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ea("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ea&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ig(t)?4:sM(t)?9007199254740991:10:$()}function yn(t,e){if(t===e)return!0;const n=yi(t);if(n!==yi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return wa(t).isEqual(wa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=xr(r.timestampValue),o=xr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return gi(r.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?oc(s)===oc(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(U_(s)!==U_(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!yn(s[a],o[a])))return!1;return!0}(t,e);default:return $()}}function Ca(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function Is(t,e){if(t===e)return 0;const n=yi(t),r=yi(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return z_(t.timestampValue,e.timestampValue);case 4:return z_(wa(t),wa(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(i,s){const o=gi(i),a=gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=te(o[l],a[l]);if(u!==0)return u}return te(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=te(Ne(i.latitude),Ne(s.latitude));return o!==0?o:te(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Is(o[l],a[l]);if(u)return u}return te(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Dl.mapValue&&s===Dl.mapValue)return 0;if(i===Dl.mapValue)return 1;if(s===Dl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=te(a[c],u[c]);if(h!==0)return h;const f=Is(o[a[c]],l[u[c]]);if(f!==0)return f}return te(a.length,u.length)}(t.mapValue,e.mapValue);default:throw $()}}function z_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=xr(t),r=xr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function ks(t){return Jf(t)}function Jf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=xr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Jf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Jf(r.fields[a])}`;return s+"}"}(t.mapValue):$();var e,n}function Zf(t){return!!t&&"integerValue"in t}function Ng(t){return!!t&&"arrayValue"in t}function B_(t){return!!t&&"nullValue"in t}function W_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Zl(t){return!!t&&"mapValue"in t}function Po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function sM(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Zl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(n)}setAll(e){let n=it.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Po(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Zl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Zl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Bs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Po(this.value))}}function uT(t){const e=[];return Bs(t.fields,(n,r)=>{const i=new it([n]);if(Zl(r)){const s=uT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qt(e)}/**
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
 */class rt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new rt(e,0,V.min(),V.min(),V.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new rt(e,1,n,V.min(),r,i,0)}static newNoDocument(e,n){return new rt(e,2,n,V.min(),V.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,V.min(),V.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(V.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=V.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ac{constructor(e,n){this.position=e,this.inclusive=n}}function H_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Is(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function K_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Do{constructor(e,n="asc"){this.field=e,this.dir=n}}function oM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cT{}class De extends cT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new lM(e,n,r):n==="array-contains"?new hM(e,r):n==="in"?new dM(e,r):n==="not-in"?new fM(e,r):n==="array-contains-any"?new pM(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new uM(e,r):new cM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Is(n,this.value)):n!==null&&yi(this.value)===yi(n)&&this.matchesComparison(Is(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class vn extends cT{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new vn(e,n)}matches(e){return hT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function hT(t){return t.op==="and"}function dT(t){return aM(t)&&hT(t)}function aM(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function ep(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ks(t.value);if(dT(t))return t.filters.map(e=>ep(e)).join(",");{const e=t.filters.map(n=>ep(n)).join(",");return`${t.op}(${e})`}}function fT(t,e){return t instanceof De?function(n,r){return r instanceof De&&n.op===r.op&&n.field.isEqual(r.field)&&yn(n.value,r.value)}(t,e):t instanceof vn?function(n,r){return r instanceof vn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&fT(s,r.filters[o]),!0):!1}(t,e):void $()}function pT(t){return t instanceof De?function(e){return`${e.field.canonicalString()} ${e.op} ${ks(e.value)}`}(t):t instanceof vn?function(e){return e.op.toString()+" {"+e.getFilters().map(pT).join(" ,")+"}"}(t):"Filter"}class lM extends De{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class uM extends De{constructor(e,n){super(e,"in",n),this.keys=mT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class cM extends De{constructor(e,n){super(e,"not-in",n),this.keys=mT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class hM extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ng(n)&&Ca(n.arrayValue,this.value)}}class dM extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ca(this.value.arrayValue,n)}}class fM extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ca(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ca(this.value.arrayValue,n)}}class pM extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ng(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ca(this.value.arrayValue,r))}}/**
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
 */class mM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function q_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new mM(t,e,n,r,i,s,o)}function xg(t){const e=W(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ep(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),e.dt=n}return e.dt}function Rg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oM(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!K_(t.startAt,e.startAt)&&K_(t.endAt,e.endAt)}function tp(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class uh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function gM(t,e,n,r,i,s,o,a){return new uh(t,e,n,r,i,s,o,a)}function gT(t){return new uh(t)}function G_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function yM(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function vM(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function _M(t){return t.collectionGroup!==null}function ls(t){const e=W(t);if(e.wt===null){e.wt=[];const n=vM(e),r=yM(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Do(n)),e.wt.push(new Do(it.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Do(it.keyField(),s))}}}return e.wt}function zn(t){const e=W(t);if(!e._t)if(e.limitType==="F")e._t=q_(e.path,e.collectionGroup,ls(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ls(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Do(s.field,o))}const r=e.endAt?new ac(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ac(e.startAt.position,e.startAt.inclusive):null;e._t=q_(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function np(t,e,n){return new uh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ch(t,e){return Rg(zn(t),zn(e))&&t.limitType===e.limitType}function yT(t){return`${xg(zn(t))}|lt:${t.limitType}`}function rp(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>pT(r)).join(", ")}]`),lh(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ks(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ks(r)).join(",")),`Target(${n})`}(zn(t))}; limitType=${t.limitType})`}function hh(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ls(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=H_(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ls(n),r)||n.endAt&&!function(i,s,o){const a=H_(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ls(n),r))}(t,e)}function wM(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vT(t){return(e,n)=>{let r=!1;for(const i of ls(t)){const s=EM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function EM(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Is(a,l):$()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Bs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aT(this.inner)}size(){return this.innerSize}}/**
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
 */const CM=new _e(M.comparator);function Bn(){return CM}const _T=new _e(M.comparator);function po(...t){let e=_T;for(const n of t)e=e.insert(n.key,n);return e}function wT(t){let e=_T;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return Oo()}function ET(){return Oo()}function Oo(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const SM=new _e(M.comparator),TM=new at(M.comparator);function Q(...t){let e=TM;for(const n of t)e=e.add(n);return e}const IM=new at(te);function kM(){return IM}/**
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
 */function CT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oc(e)?"-0":e}}function ST(t){return{integerValue:""+t}}function NM(t,e){return nM(e)?ST(e):CT(t,e)}/**
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
 */class dh{constructor(){this._=void 0}}function xM(t,e,n){return t instanceof lc?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Ig(i)&&(i=kg(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Sa?IT(t,e):t instanceof Ta?kT(t,e):function(r,i){const s=TT(r,i),o=Q_(s)+Q_(r.gt);return Zf(s)&&Zf(r.gt)?ST(o):CT(r.serializer,o)}(t,e)}function RM(t,e,n){return t instanceof Sa?IT(t,e):t instanceof Ta?kT(t,e):n}function TT(t,e){return t instanceof uc?Zf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class lc extends dh{}class Sa extends dh{constructor(e){super(),this.elements=e}}function IT(t,e){const n=NT(e);for(const r of t.elements)n.some(i=>yn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ta extends dh{constructor(e){super(),this.elements=e}}function kT(t,e){let n=NT(e);for(const r of t.elements)n=n.filter(i=>!yn(i,r));return{arrayValue:{values:n}}}class uc extends dh{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Q_(t){return Ne(t.integerValue||t.doubleValue)}function NT(t){return Ng(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Sa&&r instanceof Sa||n instanceof Ta&&r instanceof Ta?Ts(n.elements,r.elements,yn):n instanceof uc&&r instanceof uc?yn(n.gt,r.gt):n instanceof lc&&r instanceof lc}(t.transform,e.transform)}class PM{constructor(e,n){this.version=e,this.transformResults=n}}class Dn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Dn}static exists(e){return new Dn(void 0,e)}static updateTime(e){return new Dn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fh{}function xT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new AT(t.key,Dn.none()):new Za(t.key,t.data,Dn.none());{const n=t.data,r=Ft.empty();let i=new at(it.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ti(t.key,r,new Qt(i.toArray()),Dn.none())}}function DM(t,e,n){t instanceof Za?function(r,i,s){const o=r.value.clone(),a=X_(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(r,i,s){if(!eu(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=X_(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(RT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function bo(t,e,n,r){return t instanceof Za?function(i,s,o,a){if(!eu(i.precondition,s))return o;const l=i.value.clone(),u=J_(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ti?function(i,s,o,a){if(!eu(i.precondition,s))return o;const l=J_(i.fieldTransforms,a,s),u=s.data;return u.setAll(RT(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return eu(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function OM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=TT(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function Y_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ts(n,r,(i,s)=>AM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Za extends fh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ti extends fh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function X_(t,e,n){const r=new Map;de(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,RM(o,a,n[i]))}return r}function J_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,xM(s,o,e))}return r}class AT extends fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bM extends fh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class LM{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&DM(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ET();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=xT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(V.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>Y_(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>Y_(n,r))}}class Ag{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){de(e.mutations.length===r.length);let i=SM;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Ag(e,n,r,i)}}/**
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
 */class MM{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class FM{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,X;function $M(t){switch(t){default:return $();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function PT(t){if(t===void 0)return Vn("GRPC error has no .code"),C.UNKNOWN;switch(t){case ke.OK:return C.OK;case ke.CANCELLED:return C.CANCELLED;case ke.UNKNOWN:return C.UNKNOWN;case ke.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case ke.INTERNAL:return C.INTERNAL;case ke.UNAVAILABLE:return C.UNAVAILABLE;case ke.UNAUTHENTICATED:return C.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case ke.NOT_FOUND:return C.NOT_FOUND;case ke.ALREADY_EXISTS:return C.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return C.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case ke.ABORTED:return C.ABORTED;case ke.OUT_OF_RANGE:return C.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return C.UNIMPLEMENTED;case ke.DATA_LOSS:return C.DATA_LOSS;default:return $()}}(X=ke||(ke={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Pg{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ol}static getOrCreateInstance(){return Ol===null&&(Ol=new Pg),Ol}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ol=null;/**
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
 */function jM(){return new TextEncoder}/**
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
 */const UM=new as([4294967295,4294967295],0);function Z_(t){const e=jM().encode(t),n=new VL;return n.update(e),new Uint8Array(n.digest())}function e0(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new as([n,r],0),new as([i,s],0)]}class Dg{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new mo(`Invalid padding: ${n}`);if(r<0)throw new mo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new mo(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=as.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(as.fromNumber(r)));return i.compare(UM)===1&&(i=new as([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=Z_(e),[r,i]=e0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Dg(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=Z_(e),[r,i]=e0(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class mo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ph{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,el.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ph(V.min(),i,new _e(te),Bn(),Q())}}class el{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new el(r,n,Q(),Q(),Q())}}/**
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
 */class tu{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class DT{constructor(e,n){this.targetId=e,this.Vt=n}}class OT{constructor(e,n,r=ht.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class t0{constructor(){this.St=0,this.Dt=r0(),this.Ct=ht.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Q(),n=Q(),r=Q();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:$()}}),new el(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=r0()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class VM{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=Bn(),this.zt=n0(),this.Wt=new _e(te)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:$()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(tp(o))if(i===0){const a=new M(o.path);this.Yt(r,a,rt.newNoDocument(a,V.min()))}else de(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=Pg.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,c,h){var f,m,v,_,E,g;const p={localCacheCount:c,existenceFilterCount:h.count},y=h.unchangedNames;return y&&(p.bloomFilter={applied:u===0,hashCount:(f=y==null?void 0:y.hashCount)!==null&&f!==void 0?f:0,bitmapLength:(_=(v=(m=y==null?void 0:y.bits)===null||m===void 0?void 0:m.bitmap)===null||v===void 0?void 0:v.length)!==null&&_!==void 0?_:0,padding:(g=(E=y==null?void 0:y.bits)===null||E===void 0?void 0:E.padding)!==null&&g!==void 0?g:0}),p}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=gi(s).toUint8Array()}catch(c){if(c instanceof lT)return Ss("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw c}try{u=new Dg(l,o,a)}catch(c){return Ss(c instanceof mo?"BloomFilter error: ":"Applying bloom filter failed: ",c),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&tp(a.target)){const l=new M(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,rt.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=Q();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new ph(e,n,this.Wt,this.jt,r);return this.jt=Bn(),this.zt=n0(),this.Wt=new _e(te),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new t0,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new at(te),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new t0),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function n0(){return new _e(M.comparator)}function r0(){return new _e(M.comparator)}const zM=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),BM=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),WM=(()=>({and:"AND",or:"OR"}))();class HM{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ip(t,e){return t.useProto3Json||lh(e)?e:{value:e}}function cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function KM(t,e){return cc(t,e.toTimestamp())}function mn(t){return de(!!t),V.fromTimestamp(function(e){const n=xr(e);return new be(n.seconds,n.nanos)}(t))}function Og(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function LT(t){const e=me.fromString(t);return de(jT(e)),e}function sp(t,e){return Og(t.databaseId,e.path)}function gd(t,e){const n=LT(e);if(n.get(1)!==t.databaseId.projectId)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(MT(n))}function op(t,e){return Og(t.databaseId,e)}function qM(t){const e=LT(t);return e.length===4?me.emptyPath():MT(e)}function ap(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function MT(t){return de(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function i0(t,e,n){return{name:sp(t,e),fields:n.value.mapValue.fields}}function GM(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(de(u===void 0||typeof u=="string"),ht.fromBase64String(u||"")):(de(u===void 0||u instanceof Uint8Array),ht.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:PT(l.code);return new L(u,l.message||"")}(o);n=new OT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gd(t,r.document.name),s=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):V.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new tu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gd(t,r.document),s=r.readTime?mn(r.readTime):V.min(),o=rt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gd(t,r.document),s=r.removedTargetIds||[];n=new tu([],s,i,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FM(i,s),a=r.targetId;n=new DT(a,o)}}return n}function QM(t,e){let n;if(e instanceof Za)n={update:i0(t,e.key,e.value)};else if(e instanceof AT)n={delete:sp(t,e.key)};else if(e instanceof Ti)n={update:i0(t,e.key,e.data),updateMask:i4(e.fieldMask)};else{if(!(e instanceof bM))return $();n={verify:sp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof lc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Sa)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ta)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof uc)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw $()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:KM(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(t,e.precondition)),n}function YM(t,e){return t&&t.length>0?(de(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?mn(r.updateTime):mn(i);return s.isEqual(V.min())&&(s=mn(i)),new PM(s,r.transformResults||[])}(n,e))):[]}function XM(t,e){return{documents:[op(t,e.path)]}}function JM(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=op(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=op(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return $T(vn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Di(c.field),direction:t4(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ip(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function ZM(t){let e=qM(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){de(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=FT(c);return h instanceof vn&&dT(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Do(Oi(h.field),function(f){switch(f){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,lh(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,f=c.values||[];return new ac(f,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,f=c.values||[];return new ac(f,h)}(n.endAt)),gM(e,i,o,s,a,"F",l,u)}function e4(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FT(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Oi(e.unaryFilter.field);return De.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Oi(e.unaryFilter.field);return De.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Oi(e.unaryFilter.field);return De.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oi(e.unaryFilter.field);return De.create(s,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(t):t.fieldFilter!==void 0?function(e){return De.create(Oi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return vn.create(e.compositeFilter.filters.map(n=>FT(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(t):$()}function t4(t){return zM[t]}function n4(t){return BM[t]}function r4(t){return WM[t]}function Di(t){return{fieldPath:t.canonicalString()}}function Oi(t){return it.fromServerFormat(t.fieldPath)}function $T(t){return t instanceof De?function(e){if(e.op==="=="){if(W_(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NAN"}};if(B_(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(W_(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NOT_NAN"}};if(B_(e.value))return{unaryFilter:{field:Di(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Di(e.field),op:n4(e.op),value:e.value}}}(t):t instanceof vn?function(e){const n=e.getFilters().map(r=>$T(r));return n.length===1?n[0]:{compositeFilter:{op:r4(e.op),filters:n}}}(t):$()}function i4(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,i,s=V.min(),o=V.min(),a=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class s4{constructor(e){this.fe=e}}function o4(t){const e=ZM({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?np(e,e.limit,"L"):e}/**
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
 */class a4{constructor(){this.rn=new l4}addToCollectionParentIndex(e,n){return this.rn.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(Nr.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class l4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new at(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new at(me.comparator)).toArray()}}/**
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
 */class Ns{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Ns(0)}static Mn(){return new Ns(-1)}}/**
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
 */class u4{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class c4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class h4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bo(r.mutation,i,Qt.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Yr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=po();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=Oo(),a=Oo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ti)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),bo(c.mutation,u,c.mutation.getFieldMask(),be.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new c4(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oo();let i=new _e((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Qt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=ET();c.forEach(f=>{if(!s.has(f)){const m=xT(n.get(f),r.get(f));m!==null&&h.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_M(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(Yr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:wT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=po();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=po();return this.indexManager.getCollectionParents(e,i).next(o=>T.forEach(o,a=>{const l=function(u,c){return new uh(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,rt.newInvalidDocument(u)))});let o=po();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&bo(u.mutation,l,Qt.empty(),be.now()),hh(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class d4{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return T.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:mn(r.createTime)}),T.resolve()}getNamedQuery(e,n){return T.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:o4(r.bundledQuery),readTime:mn(r.readTime)}}(n)),T.resolve()}}/**
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
 */class f4{constructor(){this.overlays=new _e(M.comparator),this.ls=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=Yr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Yr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Yr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new MM(n,r));let s=this.ls.get(n);s===void 0&&(s=Q(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
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
 */class bg{constructor(){this.fs=new at(Fe.ds),this.ws=new at(Fe._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Fe(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new M(new me([])),r=new Fe(n,e),i=new Fe(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new M(new me([])),r=new Fe(n,e),i=new Fe(n,e+1);let s=Q();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Fe(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return M.comparator(e.key,n.key)||te(e.As,n.As)}static _s(e,n){return te(e.As,n.As)||M.comparator(e.key,n.key)}}/**
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
 */class p4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new at(Fe.ds)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LM(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Fe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),i=new Fe(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(te);return n.forEach(i=>{const s=new Fe(i,0),o=new Fe(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),T.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Fe(new M(s),0);let a=new at(te);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),T.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){de(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return T.forEach(n.mutations,i=>{const s=new Fe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Fe(n,0),i=this.Rs.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class m4{constructor(e){this.Ds=e,this.docs=new _e(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():rt.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZL(JL(c),r)<=0||(i.has(c.key)||hh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){$()}Cs(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new g4(this)}getSize(e){return T.resolve(this.size)}}class g4 extends u4{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
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
 */class y4{constructor(e){this.persistence=e,this.xs=new Ws(n=>xg(n),Rg),this.lastRemoteSnapshotVersion=V.min(),this.highestTargetId=0,this.Ns=0,this.ks=new bg,this.targetCount=0,this.Ms=Ns.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),T.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Ns(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.Fn(n),T.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.ks.containsKey(n))}}/**
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
 */class v4{constructor(e,n){this.$s={},this.overlays={},this.Os=new Tg(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new y4(this),this.indexManager=new a4,this.remoteDocumentCache=function(r){return new m4(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new s4(n),this.qs=new d4(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new f4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new p4(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new _4(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return T.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class _4 extends tM{constructor(e){super(),this.currentSequenceNumber=e}}class Lg{constructor(e){this.persistence=e,this.Qs=new bg,this.js=null}static zs(e){return new Lg(e)}get Ws(){if(this.js)return this.js;throw $()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),T.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Ws,r=>{const i=M.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,V.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return T.or([()=>T.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
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
 */class Mg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mg(e,n.fromCache,r,i)}}/**
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
 */class w4{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(G_(n))return T.resolve(null);let r=zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=np(n,null,"F"),r=zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,np(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return G_(n)||i.isEqual(V.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(j_()<=J.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rp(n)),this.Wi(e,o,n,XL(i,-1)))})}ji(e,n){let r=new at(vT(e));return n.forEach((i,s)=>{hh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return j_()<=J.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",rp(n)),this.Ui.getDocumentsMatchingQuery(e,n,Nr.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class E4{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new _e(te),this.Yi=new Ws(s=>xg(s),Rg),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new h4(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function C4(t,e,n,r){return new E4(t,e,n,r)}async function UT(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function S4(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let f=T.resolve();return h.forEach(m=>{f=f.next(()=>u.getEntry(a,m)).next(v=>{const _=l.docVersions.get(m);de(_!==null),v.version.compareTo(_)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Q();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function VT(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function T4(t,e){const n=W(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,h)=>{const f=i.get(h);if(!f)return;a.push(n.Bs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Bs.addMatchingKeys(s,c.addedDocuments,h)));let m=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?m=m.withResumeToken(ht.EMPTY_BYTE_STRING,V.min()).withLastLimboFreeSnapshotVersion(V.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,_,E){return v.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(f,m,c)&&a.push(n.Bs.updateTargetData(s,m))});let l=Bn(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(I4(s,o,e.documentUpdates).next(c=>{l=c.nr,u=c.sr})),!r.isEqual(V.min())){const c=n.Bs.getLastRemoteSnapshotVersion(s).next(h=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function I4(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(V.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function k4(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N4(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function lp(t,e,n){const r=W(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ja(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function s0(t,e,n){const r=W(t);let i=V.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=W(a),h=c.Yi.get(u);return h!==void 0?T.resolve(c.Ji.get(h)):c.Bs.getTargetData(l,u)}(r,o,zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:V.min(),n?s:Q())).next(a=>(x4(r,wM(e),a),{documents:a,ir:s})))}function x4(t,e,n){let r=t.Xi.get(e)||V.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class o0{constructor(){this.activeTargetIds=kM()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class R4{constructor(){this.Hr=new o0,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new o0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class A4{Yr(e){}shutdown(){}}/**
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
 */class a0{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bl=null;function yd(){return bl===null?bl=268435456+Math.round(2147483648*Math.random()):bl++,"0x"+bl.toString(16)}/**
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
 */const P4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class D4{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const Ze="WebChannelConnection";class O4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=yd(),a=this.To(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ss("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+zs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=P4[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=yd();return new Promise((o,a)=>{const l=new UL;l.setWithCredentials(!0),l.listenOnce(FL.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case md.NO_ERROR:const c=l.getResponseJson();b(Ze,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case md.TIMEOUT:b(Ze,`RPC '${e}' ${s} timed out`),a(new L(C.DEADLINE_EXCEEDED,"Request time out"));break;case md.HTTP_ERROR:const h=l.getStatus();if(b(Ze,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const v=function(_){const E=_.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(E)>=0?E:C.UNKNOWN}(m.status);a(new L(v,m.message))}else a(new L(C.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new L(C.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{b(Ze,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(Ze,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=yd(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=LL(),a=ML(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new jL({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");b(Ze,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let f=!1,m=!1;const v=new D4({ro:E=>{m?b(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(b(Ze,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),b(Ze,`RPC '${e}' stream ${i} sending:`,E),h.send(E))},oo:()=>h.close()}),_=(E,g,p)=>{E.listen(g,y=>{try{p(y)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,Al.EventType.OPEN,()=>{m||b(Ze,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Al.EventType.CLOSE,()=>{m||(m=!0,b(Ze,`RPC '${e}' stream ${i} transport closed`),v.wo())}),_(h,Al.EventType.ERROR,E=>{m||(m=!0,Ss(Ze,`RPC '${e}' stream ${i} transport errored:`,E),v.wo(new L(C.UNAVAILABLE,"The operation could not be completed")))}),_(h,Al.EventType.MESSAGE,E=>{var g;if(!m){const p=E.data[0];de(!!p);const y=p,w=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(w){b(Ze,`RPC '${e}' stream ${i} received error:`,w);const N=w.status;let R=function(O){const ee=ke[O];if(ee!==void 0)return PT(ee)}(N),P=w.message;R===void 0&&(R=C.INTERNAL,P="Unknown error status: "+N+" with message "+w.message),m=!0,v.wo(new L(R,P)),h.close()}else b(Ze,`RPC '${e}' stream ${i} received:`,p),v._o(p)}}),_(a,$L.STAT_EVENT,E=>{E.stat===F_.PROXY?b(Ze,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===F_.NOPROXY&&b(Ze,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.fo()},0),v}}function vd(){return typeof document<"u"?document:null}/**
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
 */function mh(t){return new HM(t,!0)}/**
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
 */class zT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class BT{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new zT(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new L(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class b4 extends BT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=GM(this.serializer,e),r=function(i){if(!("targetChange"in i))return V.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?V.min():s.readTime?mn(s.readTime):V.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=ap(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=tp(a)?{documents:XM(i,a)}:{query:JM(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=bT(i,s.resumeToken);const l=ip(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(V.min())>0){o.readTime=cc(i,s.snapshotVersion.toTimestamp());const l=ip(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=e4(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=ap(this.serializer),n.removeTarget=e,this.Wo(n)}}class L4 extends BT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(de(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=YM(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.cu(r,n)}return de(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=ap(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>QM(this.serializer,r))};this.Wo(n)}}/**
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
 */class M4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(C.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new L(C.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class F4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Vn(n),this.mu=!1):b("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class $4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=W(a);l.vu.add(4),await tl(l),l.bu.set("Unknown"),l.vu.delete(4),await gh(l)}(this))})}),this.bu=new F4(r,i)}}async function gh(t){if(Ii(t))for(const e of t.Ru)await e(!0)}async function tl(t){for(const e of t.Ru)await e(!1)}function WT(t,e){const n=W(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),jg(n)?$g(n):Hs(n).Ko()&&Fg(n,e))}function HT(t,e){const n=W(t),r=Hs(n);n.Au.delete(e),r.Ko()&&KT(n,e),n.Au.size===0&&(r.Ko()?r.jo():Ii(n)&&n.bu.set("Unknown"))}function Fg(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(V.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hs(t).su(e)}function KT(t,e){t.Vu.qt(e),Hs(t).iu(e)}function $g(t){t.Vu=new VM({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),Hs(t).start(),t.bu.gu()}function jg(t){return Ii(t)&&!Hs(t).Uo()&&t.Au.size>0}function Ii(t){return W(t).vu.size===0}function qT(t){t.Vu=void 0}async function j4(t){t.Au.forEach((e,n)=>{Fg(t,e)})}async function U4(t,e){qT(t),jg(t)?(t.bu.Iu(e),$g(t)):t.bu.set("Unknown")}async function V4(t,e,n){if(t.bu.set("Online"),e instanceof OT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await hc(t,r)}else if(e instanceof tu?t.Vu.Ht(e):e instanceof DT?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(V.min()))try{const r=await VT(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(ht.EMPTY_BYTE_STRING,u.snapshotVersion)),KT(i,a);const c=new ar(u.target,a,l,u.sequenceNumber);Fg(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await hc(t,r)}}async function hc(t,e,n){if(!Ja(e))throw e;t.vu.add(1),await tl(t),t.bu.set("Offline"),n||(n=()=>VT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await gh(t)})}function GT(t,e){return e().catch(n=>hc(t,n,e))}async function yh(t){const e=W(t),n=Rr(e);let r=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;z4(e);)try{const i=await k4(e.localStore,r);if(i===null){e.Eu.length===0&&n.jo();break}r=i.batchId,B4(e,i)}catch(i){await hc(e,i)}QT(e)&&YT(e)}function z4(t){return Ii(t)&&t.Eu.length<10}function B4(t,e){t.Eu.push(e);const n=Rr(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function QT(t){return Ii(t)&&!Rr(t).Uo()&&t.Eu.length>0}function YT(t){Rr(t).start()}async function W4(t){Rr(t).hu()}async function H4(t){const e=Rr(t);for(const n of t.Eu)e.uu(n.mutations)}async function K4(t,e,n){const r=t.Eu.shift(),i=Ag.from(r,e,n);await GT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yh(t)}async function q4(t,e){e&&Rr(t).ou&&await async function(n,r){if(i=r.code,$M(i)&&i!==C.ABORTED){const s=n.Eu.shift();Rr(n).Qo(),await GT(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await yh(n)}var i}(t,e),QT(t)&&YT(t)}async function l0(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.vu.add(3),await tl(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await gh(n)}async function G4(t,e){const n=W(t);e?(n.vu.delete(2),await gh(n)):e||(n.vu.add(2),await tl(n),n.bu.set("Unknown"))}function Hs(t){return t.Su||(t.Su=function(e,n,r){const i=W(e);return i.fu(),new b4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:j4.bind(null,t),ao:U4.bind(null,t),nu:V4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),jg(t)?$g(t):t.bu.set("Unknown")):(await t.Su.stop(),qT(t))})),t.Su}function Rr(t){return t.Du||(t.Du=function(e,n,r){const i=W(e);return i.fu(),new L4(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:W4.bind(null,t),ao:q4.bind(null,t),au:H4.bind(null,t),cu:K4.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await yh(t)):(await t.Du.stop(),t.Eu.length>0&&(b("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
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
 */class Ug{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Ug(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vg(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Ja(t))return new L(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=po(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class u0{constructor(){this.Cu=new _e(M.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):$():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class xs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new xs(e,n,us.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Q4{constructor(){this.Nu=void 0,this.listeners=[]}}class Y4{constructor(){this.queries=new Ws(e=>yT(e),ch),this.onlineState="Unknown",this.ku=new Set}}async function X4(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Q4),i)try{s.Nu=await n.onListen(r)}catch(o){const a=Vg(o,`Initialization of query '${rp(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&zg(n)}async function J4(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Z4(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&zg(n)}function eF(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function zg(t){t.ku.forEach(e=>{e.next()})}class tF{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new xs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=xs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class XT{constructor(e){this.key=e}}class JT{constructor(e){this.key=e}}class nF{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Q(),this.mutatedKeys=Q(),this.tc=vT(e),this.ec=new us(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new u0,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const f=i.get(c),m=hh(this.query,h)?h:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;f&&m?f.data.isEqual(m.data)?v!==_&&(r.track({type:3,doc:m}),E=!0):this.rc(f,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.tc(m,l)>0||u&&this.tc(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),E=!0):f&&!m&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,c)=>function(h,f){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return m(h)-m(f)}(u.type,c.type)||this.tc(u.doc,c.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new xs(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new u0,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Q(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new JT(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new XT(r))}),n}hc(e){this.Yu=e.ir,this.Zu=Q();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return xs.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class rF{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class iF{constructor(e){this.key=e,this.fc=!1}}class sF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ws(a=>yT(a),ch),this._c=new Map,this.mc=new Set,this.gc=new _e(M.comparator),this.yc=new Map,this.Ic=new bg,this.Tc={},this.Ec=new Map,this.Ac=Ns.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function oF(t,e){const n=gF(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await N4(n.localStore,zn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await aF(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&WT(n.remoteStore,o)}return i}async function aF(t,e,n,r,i){t.Rc=(h,f,m)=>async function(v,_,E,g){let p=_.view.sc(E);p.zi&&(p=await s0(v.localStore,_.query,!1).then(({documents:N})=>_.view.sc(N,p)));const y=g&&g.targetChanges.get(_.targetId),w=_.view.applyChanges(p,v.isPrimaryClient,y);return h0(v,_.targetId,w.cc),w.snapshot}(t,h,f,m);const s=await s0(t.localStore,e,!0),o=new nF(e,s.ir),a=o.sc(s.documents),l=el.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);h0(t,n,u.cc);const c=new rF(e,n,o);return t.wc.set(e,c),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function lF(t,e){const n=W(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!ch(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await lp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),HT(n.remoteStore,r.targetId),up(n,r.targetId)}).catch(Xa)):(up(n,r.targetId),await lp(n.localStore,r.targetId,!0))}async function uF(t,e,n){const r=yF(t);try{const i=await function(s,o){const a=W(s),l=be.now(),u=o.reduce((f,m)=>f.add(m.key),Q());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Bn(),v=Q();return a.Zi.getEntries(f,u).next(_=>{m=_,m.forEach((E,g)=>{g.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(f,m)).next(_=>{c=_;const E=[];for(const g of o){const p=OM(g,c.get(g.key).overlayedDocument);p!=null&&E.push(new Ti(g.key,p,uT(p.value.mapValue),Dn.exists(!0)))}return a.mutationQueue.addMutationBatch(f,l,E,o)}).next(_=>{h=_;const E=_.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(f,_.batchId,E)})}).then(()=>({batchId:h.batchId,changes:wT(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.Tc[s.currentUser.toKey()];l||(l=new _e(te)),l=l.insert(o,a),s.Tc[s.currentUser.toKey()]=l}(r,i.batchId,n),await nl(r,i.changes),await yh(r.remoteStore)}catch(i){const s=Vg(i,"Failed to persist write");n.reject(s)}}async function ZT(t,e){const n=W(t);try{const r=await T4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?de(o.fc):i.removedDocuments.size>0&&(de(o.fc),o.fc=!1))}),await nl(n,r,e)}catch(r){await Xa(r)}}function c0(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=W(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Mu(o)&&(l=!0)}),l&&zg(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function cF(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new _e(M.comparator);o=o.insert(s,rt.newNoDocument(s,V.min()));const a=Q().add(s),l=new ph(V.min(),new Map,new _e(te),o,a);await ZT(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Bg(r)}else await lp(r.localStore,e,!1).then(()=>up(r,e,n)).catch(Xa)}async function hF(t,e){const n=W(t),r=e.batch.batchId;try{const i=await S4(n.localStore,e);tI(n,r,null),eI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nl(n,i)}catch(i){await Xa(i)}}async function dF(t,e,n){const r=W(t);try{const i=await function(s,o){const a=W(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(de(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);tI(r,e,n),eI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nl(r,i)}catch(i){await Xa(i)}}function eI(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function tI(t,e,n){const r=W(t);let i=r.Tc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Tc[r.currentUser.toKey()]=i}}function up(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||nI(t,r)})}function nI(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(HT(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Bg(t))}function h0(t,e,n){for(const r of n)r instanceof XT?(t.Ic.addReference(r.key,e),fF(t,r)):r instanceof JT?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||nI(t,r.key)):$()}function fF(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.mc.add(r),Bg(t))}function Bg(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new M(me.fromString(e)),r=t.Ac.next();t.yc.set(r,new iF(n)),t.gc=t.gc.insert(n,r),WT(t.remoteStore,new ar(zn(gT(n.path)),r,"TargetPurposeLimboResolution",Tg.ct))}}async function nl(t,e,n){const r=W(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mg.Li(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=W(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>T.forEach(l,h=>T.forEach(h.Fi,f=>u.persistence.referenceDelegate.addReference(c,h.targetId,f)).next(()=>T.forEach(h.Bi,f=>u.persistence.referenceDelegate.removeReference(c,h.targetId,f)))))}catch(c){if(!Ja(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const f=u.Ji.get(h),m=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(m);u.Ji=u.Ji.insert(h,v)}}}(r.localStore,s))}async function pF(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await UT(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new L(C.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nl(n,r.er)}}function mF(t,e){const n=W(t),r=n.yc.get(e);if(r&&r.fc)return Q().add(r.key);{let i=Q();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function gF(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ZT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=mF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=cF.bind(null,e),e.dc.nu=Z4.bind(null,e.eventManager),e.dc.Pc=eF.bind(null,e.eventManager),e}function yF(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=dF.bind(null,e),e}class d0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=mh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return C4(this.persistence,new w4,e.initialUser,this.serializer)}createPersistence(e){return new v4(Lg.zs,this.serializer)}createSharedClientState(e){return new R4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vF{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>c0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=pF.bind(null,this.syncEngine),await G4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Y4}createDatastore(e){const n=mh(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new O4(i));var i;return function(s,o,a,l){return new M4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>c0(this.syncEngine,a,0),o=a0.D()?new a0:new A4,new $4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new sF(r,i,s,o,a,l);return u&&(c.vc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=W(e);b("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await tl(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */class _F{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class wF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=oT.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Vg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function _d(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function f0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CF(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>l0(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>l0(e.remoteStore,s)),t._onlineComponents=e}function EF(t){return t.name==="FirebaseError"?t.code===C.FAILED_PRECONDITION||t.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function CF(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await _d(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!EF(n))throw n;Ss("Error using user provided cache. Falling back to memory cache: "+n),await _d(t,new d0)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await _d(t,new d0);return t._offlineComponents}async function rI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await f0(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await f0(t,new vF))),t._onlineComponents}function SF(t){return rI(t).then(e=>e.syncEngine)}async function TF(t){const e=await rI(t),n=e.eventManager;return n.onListen=oF.bind(null,e.syncEngine),n.onUnlisten=lF.bind(null,e.syncEngine),n}function IF(t,e,n={}){const r=new wr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new _F({next:h=>{s.enqueueAndForget(()=>J4(i,c)),h.fromCache&&a.source==="server"?l.reject(new L(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new tF(o,u,{includeMetadataChanges:!0,Ku:!0});return X4(i,c)}(await TF(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function iI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const p0=new Map;/**
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
 */function sI(t,e,n){if(!n)throw new L(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kF(t,e,n,r){if(e===!0&&r===!0)throw new L(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function m0(t){if(!M.isDocumentKey(t))throw new L(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function g0(t){if(M.isDocumentKey(t))throw new L(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":$()}function dc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wg(t);throw new L(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class y0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kF("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(C.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new y0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new y0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new zL;switch(n.type){case"firstParty":return new KL(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=p0.get(e);n&&(b("ComponentProvider","Removing Datastore"),p0.delete(e),n.terminate())}(this),Promise.resolve()}}function NF(t,e,n,r={}){var i;const s=(t=dc(t,vh))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Ss("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=et.MOCK_USER;else{o=Z1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new L(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(l)}t._authCredentials=new BL(new sT(o,a))}}/**
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
 */class Zt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Zt(this.firestore,e,this._key)}}class _h{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _h(this.firestore,e,this._query)}}class Er extends _h{constructor(e,n,r){super(e,n,gT(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Zt(this.firestore,null,new M(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function v0(t,e,...n){if(t=ct(t),sI("collection","path",e),t instanceof vh){const r=me.fromString(e,...n);return g0(r),new Er(t,null,r)}{if(!(t instanceof Zt||t instanceof Er))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return g0(r),new Er(t.firestore,null,r)}}function xF(t,e,...n){if(t=ct(t),arguments.length===1&&(e=oT.A()),sI("doc","path",e),t instanceof vh){const r=me.fromString(e,...n);return m0(r),new Zt(t,null,new M(r))}{if(!(t instanceof Zt||t instanceof Er))throw new L(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return m0(r),new Zt(t.firestore,t instanceof Er?t.converter:null,new M(r))}}/**
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
 */class RF{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new zT(this,"async_queue_retry"),this.Xc=()=>{const n=vd();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=vd();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=vd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new wr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Ja(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Ug.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&$()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Hg extends vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new RF,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aI(this),this._firestoreClient.terminate()}}function AF(t,e){const n=typeof t=="object"?t:dm(),r=typeof t=="string"?t:e||"(default)",i=Lc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Y1("firestore");s&&NF(i,...s)}return i}function oI(t){return t._firestoreClient||aI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aI(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new iM(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,iI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new wF(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Rs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rs(ht.fromBase64String(e))}catch(n){throw new L(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Rs(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Kg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lI{constructor(e){this._methodName=e}}/**
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
 */class qg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const PF=/^__.*__$/;class DF{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new Za(e,this.data,n,this.fieldTransforms)}}function uI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Gg{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ua(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Gg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.fa(e),i}da(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.aa({path:r,la:!1});return i.ua(),i}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return fc(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(uI(this.ca)&&PF.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class OF{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mh(e)}ya(e,n,r,i=!1){return new Gg({ca:e,methodName:n,ga:r,path:it.emptyPath(),la:!1,ma:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bF(t){const e=t._freezeSettings(),n=mh(t._databaseId);return new OF(t._databaseId,!!e.ignoreUndefinedProperties,n)}function LF(t,e,n,r,i,s={}){const o=t.ya(s.merge||s.mergeFields?2:0,e,n,i);fI("Data must be an object, but it was:",o,r);const a=hI(r,o);let l,u;if(s.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const f=MF(e,h,n);if(!o.contains(f))throw new L(C.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);$F(c,f)||c.push(f)}l=new Qt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new DF(new Ft(a),l,u)}function cI(t,e){if(dI(t=ct(t)))return fI("Unsupported field value:",e,t),hI(t,e);if(t instanceof lI)return function(n,r){if(!uI(r.ca))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=cI(o,r.wa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=ct(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return NM(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=be.fromDate(n);return{timestampValue:cc(r.serializer,i)}}if(n instanceof be){const i=new be(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:cc(r.serializer,i)}}if(n instanceof qg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Rs)return{bytesValue:bT(r.serializer,n._byteString)};if(n instanceof Zt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Og(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${Wg(n)}`)}(t,e)}function hI(t,e){const n={};return aT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bs(t,(r,i)=>{const s=cI(i,e.ha(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof qg||t instanceof Rs||t instanceof Zt||t instanceof lI)}function fI(t,e,n){if(!dI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Wg(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function MF(t,e,n){if((e=ct(e))instanceof Kg)return e._internalPath;if(typeof e=="string")return pI(t,e);throw fc("Field path arguments must be of type string or ",t,!1,void 0,n)}const FF=new RegExp("[~\\*/\\[\\]]");function pI(t,e,n){if(e.search(FF)>=0)throw fc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Kg(...e.split("."))._internalPath}catch{throw fc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new L(C.INVALID_ARGUMENT,a+t+l)}function $F(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jF(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jF extends mI{data(){return super.data()}}function gI(t,e){return typeof e=="string"?pI(t,e):e instanceof Kg?e._internalPath:e._delegate._internalPath}/**
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
 */function UF(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VF{convertValue(e,n="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw $()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new qg(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(wa(e));default:return null}}convertTimestamp(e){const n=xr(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);de(jT(r));const i=new Ea(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function zF(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ll{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BF extends mI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new nu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class nu extends BF{data(e={}){return super.data(e)}}class WF{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ll(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new nu(this._firestore,this._userDataWriter,r.key,r,new Ll(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new nu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ll(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new nu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ll(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:HF(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function HF(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class KF extends VF{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Zt(this.firestore,null,n)}}function qF(t){t=dc(t,_h);const e=dc(t.firestore,Hg),n=oI(e),r=new KF(e);return UF(t._query),IF(n,t._query).then(i=>new WF(e,r,t,i))}function GF(t,e){const n=dc(t.firestore,Hg),r=xF(t),i=zF(t.converter,e);return QF(n,[LF(bF(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Dn.exists(!1))]).then(()=>r)}function QF(t,e){return function(n,r){const i=new wr;return n.asyncQueue.enqueueAndForget(async()=>uF(await SF(n),r,i)),i.promise}(oI(t),e)}(function(t,e=!0){(function(n){zs=n})(Ei),ui(new Tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Hg(new WL(n.getProvider("auth-internal")),new GL(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new L(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ea(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),dn($_,"3.12.1",t),dn($_,"3.12.1","esm2017")})();const YF=new Sn,Qg=sE({apiKey:"AIzaSyAsTVL1sNalFPidiNeilbheCRzOywg1SCI",authDomain:"react-project-12715721.firebaseapp.com",projectId:"react-project-12715721",databaseURL:"https://atleticoreact-d3e4c-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"react-project-12715721.appspot.com",messagingSenderId:"886395467083",appId:"1:886395467083:web:6068f57b3da4dd3fdaa4ce"}),_0=Db(Qg),w0=AF(Qg);var Xr=256,yI=[],E0=256,Ml;for(;Xr--;)yI[Xr]=(Xr+256).toString(16).substring(1);function XF(t){var e=0,n=t||11;if(!Ml||Xr+n>E0*2)for(Ml="",Xr=0;e<E0;e++)Ml+=yI[Math.random()*256|0];return Ml.substring(Xr,Xr+++n)}const JF=()=>{I.useEffect(()=>{Tb(S_(_0),Ie=>{const dt=Ie.val();dt!==null&&Object.values(dt).map(Fr=>{Jg(sl=>[...sl,Fr])})}),qF(v0(w0,"callory")).then(Ie=>{const dt=Ie.docs.map(Fr=>({...Fr.data(),id:Fr.id}));Jg(dt)})},[]);const[t,e]=I.useState(!1),[n,r]=I.useState(!1),[i,s]=I.useState(!1),[o,a]=I.useState(!1),[l,u]=I.useState(!1),[c,h]=I.useState(!1),[f,m]=I.useState(!1),[v,_]=I.useState(!1),[E,g]=I.useState(!1),[p,y]=I.useState(!1),[w,N]=I.useState(NaN),[R,P]=I.useState(NaN),[O,ee]=I.useState(NaN),[B,Le]=I.useState(!1),[nn,Gn]=I.useState(!1),[Lr,rl]=I.useState(!1),[ki,Ni]=I.useState(!1),[A,U]=I.useState(!1),[H,fe]=I.useState(!1),[Se,Mr]=I.useState(),[_n,Ks]=I.useState(),[wn,xi]=I.useState(),[vI,_I]=I.useState(),[wI,EI]=I.useState(!1),[Yg,Xg]=I.useState(!1),[il,Jg]=I.useState([]),CI=()=>{g(!1),y(!1),P(NaN),N(NaN),ee(NaN),Le(!1),Gn(!1),rl(!1),Ni(!1),U(!1),fe(!1),Xg(!1)},SI=()=>{n||(e(!1),r(!0))},TI=()=>{t||(e(!0),r(!1))},II=()=>{Mr(!1),EI(!0),E?g(447.6):y(88.36),B&&Le(1.2),nn&&Le(1.5),Lr&&Le(1.8);let Ie,dt;ki?Ie=-500:A?Ie=500:Ie=0,E?dt=(E+R*3.1+O*9.2-w*4.3)*(B+nn+Lr)+Ie:dt=(p+R*4.8+O*13.4-w*5.7)*(B+nn+Lr)+Ie;let Fr=Math.round(dt)*.3/4,sl=Math.round(dt)*.3/9,Zg=Math.round(dt)*.4/4;Mr(Math.round(dt)),Ks(Math.round(Fr)),xi(Math.round(sl)),_I(Math.round(Zg)),Le(0),Xg(!0);const ey=XF();Cb(S_(_0,`/${ey}`),{res:dt,protG:Fr,fatG:sl,carbG:Zg,uuid:ey});try{const wh=GF(v0(w0,"callory"),{calory:Se});console.log("Document written with ID: ",wh.id)}catch(wh){console.error("Error adding document: ",wh)}};return d.jsx(d.Fragment,{children:d.jsxs("main",{children:[d.jsxs("div",{id:"radio-buttons",className:"radio-buttons overlay-my-account",children:[d.jsx("input",{type:"radio",onClick:()=>SI(),className:"radio",name:"radio",id:"radio1"}),d.jsx("label",{className:"radio-button radio-button-train",htmlFor:"radio1",children:"Для тренування"}),d.jsx("input",{type:"radio",onClick:()=>TI(),className:"radio",name:"radio",id:"radio2"}),d.jsx("label",{"data-action":"food",className:"radio-button radio-button-diet",htmlFor:"radio2",children:"Для харчування"})]}),d.jsxs("div",{className:"plan-wrapper",children:[t&&d.jsxs("div",{className:t?"plan-diet block":"plan-diet none",children:[d.jsxs("div",{className:"plan-diet__wrapper",children:[d.jsxs("div",{className:"plan-diet-gender__list",children:[d.jsx("span",{className:"plan-wrapper-placeholder",children:"Оберіть стать"}),d.jsxs("div",{className:"plan-diet-gender",children:[d.jsx("input",{type:"radio",className:"radio-form male",name:"radio-1",id:"radio-1",checked:E,onChange:()=>g(!0)}),d.jsx("label",{htmlFor:"radio-1",children:"Чоловік"}),d.jsx("input",{type:"radio",className:"radio-form fem",name:"radio-1",id:"radio-2",checked:p,onChange:()=>y(!0)}),d.jsx("label",{htmlFor:"radio-2",children:"Жінка"})]})]}),d.jsx("div",{className:"plan-diet-number__wrapper",children:d.jsxs("div",{className:"plan-diet-number__list",children:[d.jsx("span",{className:"plan-wrapper-placeholder",children:"Заповніть дані"}),d.jsxs("div",{className:"plan-diet-number__items",children:[d.jsx("input",{type:"number",className:"plan-diet-number",onChange:Ie=>N(Ie.target.value),value:w,placeholder:"Вік"}),d.jsx("input",{type:"number",className:"plan-diet-number height",onChange:Ie=>P(Ie.target.value),value:R,placeholder:"Ріст см"}),d.jsx("input",{type:"number",className:"plan-diet-number weight",onChange:Ie=>ee(Ie.target.value),value:O,placeholder:"Вага кг"})]})]})})]}),d.jsxs("div",{className:"plan-diet-activity__wrapper",children:[d.jsxs("div",{className:"low-activity",children:[d.jsx("input",{type:"radio",id:"radio-1-act",name:"radio-act",className:"plan-diet-activity actS",checked:B,onChange:()=>Le(!0)}),d.jsx("label",{htmlFor:"radio-1-act",children:"Мала активність"})]}),d.jsxs("div",{className:"average-activity",children:[d.jsx("input",{type:"radio",id:"radio-2-act",name:"radio-act",className:"plan-diet-activity actM",checked:nn,onChange:()=>Gn(!0)}),d.jsx("label",{className:"average-activity",htmlFor:"radio-2-act",children:"Середня активність"})]}),d.jsxs("div",{className:"high-activity",children:[d.jsx("input",{type:"radio",id:"radio-3-act",name:"radio-act",className:"plan-diet-activity actL",checked:Lr,onChange:()=>rl(!0)}),d.jsx("label",{htmlFor:"radio-3-act",children:"Висока активність"})]})]}),d.jsxs("div",{className:"plan-diet-mode__wrapper",children:[d.jsxs("div",{className:"plan-diet-mode__lose",children:[d.jsx("input",{type:"radio",className:"radio-form lost-w",checked:ki,onChange:()=>Ni(!0),name:"radio-weight",id:"radio-1-w"}),d.jsx("label",{htmlFor:"radio-1-w",children:"Скинути вагу"})]}),d.jsxs("div",{className:"plan-diet-mode__gain",children:[d.jsx("input",{type:"radio",className:"radio-form plus-w",checked:A,onChange:()=>U(!0),name:"radio-weight",id:"radio-2-w"}),d.jsx("label",{htmlFor:"radio-2-w",children:"Набрати вагу"})]}),d.jsxs("div",{className:"plan-diet-mode__save",children:[d.jsx("input",{type:"radio",className:"radio-form stop-w",checked:H,onChange:()=>fe(!0),name:"radio-weight",id:"radio-3-w"}),d.jsx("label",{htmlFor:"radio-3-w",children:"Втримати вагу"})]})]}),Yg?d.jsx("button",{className:"plan-diet-btn main-plan-btn",onClick:()=>CI(),children:"Скидання"}):d.jsx("button",{className:"plan-diet-btn main-plan-btn",onClick:()=>II(),children:"Розрахувати"}),d.jsxs("ul",{style:{display:wI&&Yg?"block":"none"},className:"diet-result-list diet-result-block",children:[d.jsxs("li",{children:["Потрібна кількість калорій:",d.jsx("span",{className:"result",children:Se})]}),d.jsxs("li",{children:["Потрібна кількість білків:",d.jsx("span",{className:"result-calc prot",children:_n})]}),d.jsxs("li",{children:["Потрібна кількість жирів:",d.jsx("span",{className:"result-calc fat",children:wn})]}),d.jsxs("li",{children:["Потрібна кількість вуглеводів:",d.jsx("span",{className:"result-calc carb",children:vI})]}),d.jsxs("li",{children:[d.jsx("p",{children:"рекомендований інструмент для створення меню харчування:"}),d.jsx("a",{className:"create-menu",href:"https://www.eatthismuch.com/",children:"Створити меню"})]})]})]}),n&&d.jsxs("div",{className:n?"plan-tren block":"plan-tren none",children:[d.jsxs("div",{className:"btn-tren-category",children:[d.jsx("h2",{className:"main-heading",children:"Категорія"}),d.jsxs("ul",{className:"plan-tren__description-list",children:[d.jsx("li",{children:"Кардіовправи - вправи, які сприяють покращенню роботи серцево-судинної системи і включають в себе біг, велосипед, стрибки, скакалку тощо."}),d.jsx("li",{children:"Силові вправи - вправи з використанням ваги, які сприяють збільшенню м'язової маси і сили, такі як жим лежачи, присідання зі штангою, тяга штанги тощо."}),d.jsx("li",{children:"Розтяжка - вправи, які сприяють збільшенню гнучкості та покращенню роботи суглобів, такі як скручування, нахил голови до колін тощо."}),d.jsx("li",{children:"Комбіновані вправи - це вправи, які поєднують кілька видів фізичних навантажень."})]}),d.jsxs("div",{className:"plan-tren__category-items",children:[d.jsx("input",{type:"radio",className:"tren-category",id:"radio-tren-cat-1",onChange:()=>s(!0),name:"radio-tren-cat"}),d.jsx("label",{className:"label-tren-cat",htmlFor:"radio-tren-cat-1",children:"Кардіовправи"}),d.jsx("input",{type:"radio",className:"tren-category",id:"radio-tren-cat-2",onChange:()=>a(!0),name:"radio-tren-cat"}),d.jsx("label",{className:"label-tren-cat",htmlFor:"radio-tren-cat-2",children:"Силові вправи"}),d.jsx("input",{type:"radio",className:"tren-category",id:"radio-tren-cat-3",onChange:()=>u(!0),name:"radio-tren-cat"}),d.jsx("label",{className:"label-tren-cat",htmlFor:"radio-tren-cat-3",children:"Розтяжка"}),d.jsx("input",{type:"radio",className:"tren-category",id:"radio-tren-cat-4",onChange:()=>h(!0),name:"radio-tren-cat"}),d.jsx("label",{className:"label-tren-cat",htmlFor:"radio-tren-cat-4",children:"Комбіновані вправи"})]})]}),d.jsxs("div",{className:"plan-tren__format",children:[d.jsx("h3",{className:"main-heading",children:"Формат"}),d.jsxs("div",{className:"text-video",children:[d.jsxs("div",{className:"plan-format__video",children:[d.jsx("input",{type:"radio",className:"text-video-radio",name:"radio-tren",id:"radio-tren-1",onChange:()=>m(!0)}),d.jsxs("label",{className:"label-tren",htmlFor:"radio-tren-1",children:[d.jsx(Ru,{classnames:"plan-format-icon",imgSrc:"tren_format_video",alt:"icon video"}),"Відео"]})]}),d.jsxs("div",{className:"plan-format__text",children:[d.jsx("input",{type:"radio",className:"text-video-radio",name:"radio-tren",id:"radio-tren-2",onChange:()=>_(!0)}),d.jsxs("label",{className:"label-tren",htmlFor:"radio-tren-2",children:[d.jsx(Ru,{classnames:"plan-format-icon",imgSrc:"tren_format_text",alt:"icon text"}),"Текст"]})]})]}),d.jsxs("div",{className:"tren-res none",children:[d.jsxs("h2",{children:["Ми підібрали для вас найкращі",d.jsx("div",{className:"cat"})]}),d.jsx("a",{href:"#",children:"Переглянути"})]})]})]})]}),d.jsxs("div",{className:"possible-var",children:[d.jsxs("div",{className:"cardio",children:[i&&f&&d.jsxs("div",{className:"cardio-video block",children:[d.jsxs("h2",{className:"main-heading",children:["Відео ",d.jsx("span",{children:"кардіо "})," тренуваннь"]}),d.jsxs("div",{className:"cards-video-row",children:[d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/pjmNtZKFLK4?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/pjmNtZKFLK4",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/CSKpey9fKsY?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/CSKpey9fKsY",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/kKLPXcmNbC4?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/kKLPXcmNbC4",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/9w-qgci0-Pk?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/9w-qgci0-Pk",children:"Посилання"})]})]})]}),i&&v&&d.jsx("div",{className:"cardio-text block",children:d.jsxs("div",{className:"var-text-main",children:[d.jsx("h2",{className:"main-heading var-list-heading",children:"Кардіовправи"}),d.jsxs("ul",{className:"var-list",children:[d.jsx("li",{children:"Скакалка - проста, але ефективна вправа для кардіотренування. Вона збільшує частоту серцевих скорочень та сприяє покращенню координації рухів.Беріть скакалку в руки, підстрибуйте і пропускайте скакалку під ногами. Рухайтеся протягом 30-60 секунд."}),d.jsx("li",{children:"Біг на місці: Станьте на місці, підніміть коліна вгору, щоб імітувати біг. Рухайтеся протягом 30-60 секунд."}),d.jsx("li",{children:"Швидкі віджимання: Візьміть позу для віджимань, проте рухайтеся швидко, виконуючи віджимання на швидкість. Рухайтеся протягом 30-60 секунд."}),d.jsx("li",{children:"Бігові вправи з підйомом колін: Станьте на місці, зробіть крок, піднімаючи одне коліно вгору, повторіть з іншою ногою. Продовжуйте чергувати коліна, поки рухаєтеся вперед і назад."}),d.jsx("li",{children:"Лахмітники: Станьте зі широко розставленими ногами, опустіться в низьку позицію, зігнувши коліна, а руки витягніть перед собою. Піднімайте по черзі праву та ліву ногу, опускаючи руки нижче."}),d.jsx("li",{children:"Велосипед: Лягте на спину, підніміть ноги і зігніть їх в колінах під кутом 90 градусів. Потім імітуйте крутіння педалей велосипеда, набираючи швидкість, але не забувайте про контроль дихання."}),d.jsx("li",{children:"Берпі: Станьте у позицію для віджимань, виконайте віджимання, а потім швидко прокиньтеся, підтягніть коліна до грудей, після чого стрибніть вгору зі згорнутою з грудей і ніг."}),d.jsx("li",{children:"Складні вправи для рук: Візьміть гантелі, зігніть лікті і підніміть гантелі до плечей. Потім розверніть гантелі в бік і знову зігніть лікті, опустіть гантелі на рівень плечей, а потім поверніть їх до початкового положення. Повторіть цю послідовність 10-12 разів."}),d.jsx("li",{children:"Стрибки з канатом: Візьміть канат, підстрибуйте і стрибайте через канат. Рухайтеся протягом 30-60 секунд."}),d.jsx("li",{children:"Гімнастика: Різноманітні гімнастичні вправи, такі як відштовхування від стіни, присідання, піднімання рук вгору, протягування із зігнутими руками та інші, можуть бути ефективними для кардіотренувань вдома."})]}),d.jsx("p",{children:"Ці вправи можна виконувати по черзі або комбінувати їх у тренування з різними інтервалами та кількістю повторень. Найважливіше - не забувайте про правильну техніку виконання та поступове збільшення навантаження."})]})})]}),d.jsxs("div",{className:"strength",children:[o&&f&&d.jsxs("div",{className:"strength-video block",children:[d.jsxs("h2",{className:"main-heading",children:["Відео ",d.jsx("span",{children:"силових"})," тренуваннь"]}),d.jsxs("div",{className:"cards-video-row",children:[d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/LF1hsGsYYH4?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/LF1hsGsYYH4",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/v4bTFifA5eo?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/v4bTFifA5eo",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/pQ0TDIXYwWQ?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/pQ0TDIXYwWQ",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/hA12K-hlf3U?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/hA12K-hlf3U",children:"Посилання"})]})]})]}),o&&v&&d.jsx("div",{className:"strength-text block",children:d.jsxs("div",{className:"var-text-main",children:[d.jsxs("h2",{className:"main-heading var-list-heading",children:[d.jsx("span",{children:"Силові"})," вправи"]}),d.jsxs("ul",{className:"var-list",children:[d.jsx("li",{children:"Присідання - це одна з найбільш ефективних вправ для тренування ніг. Станьте прямо, стопи на ширині плечей, зігніть коліна і зійдіть на рівень, який вам зручний. Для збільшення ефективності можна тримати гантелі або взуття з вагою. Під час виконання присідань потрібно дотримуватися правильної форми, зберігати спину прямою і не виступати колінами за лінію стопи."}),d.jsx("li",{children:"Віджимання від підлоги - це вправа, яка допомагає підтримувати тіло в формі і зміцнює руки, плечі та груди. Розташуйте руки на підлозі на ширині плечей, спустіть тіло вниз, згинайте лікті і потім поверніть тіло вверх, повторюючи вправу декілька разів."}),d.jsxs("li",{children:["Планка - це вправа, що зміцнює м'язи корпусу, включаючи м'язи живота, спини та ніг. Ляжте на живіт, підніміть тіло на підлокітники, зігніть лікті під кутом 90 градусів. Тримайте позу, доки не відчуєте напругу в м'язах, не забувайте дихати рівномірно."," "]}),d.jsx("li",{children:"Прес - це вправа, яка зміцнює м'язи живота і допомагає зробити живіт плоским. Ляжте на спину зі згиненими колінами, підніміть голову і плечі вгору, спрямуйте руки вперед. Дотримуйтесь рівномірного дихання, повторюйте вправу декілька разів."}),d.jsx("li",{children:"Махи ногами - це вправа, яка зміцнює м'язи ніг і допомагає покращити ко нтроль тіла. Поверніться на всі чотири, опустіть лікті на підлогу, підніміть одну ногу вгору і махніть її вперед-назад декілька разів, потім змініть ногу."}),d.jsx("li",{children:"Махи руками з гантелями - це вправа, яка зміцнює м'язи рук і плечей. Візьміть гантелі, станьте прямо, стопи на ширині плечей, руки з гантелями опущені вниз. Підніміть руки вгору, згинаючи лікті, потім повільно поверніть руки назад, повторюючи вправу декілька разів."}),d.jsxs("li",{children:['Бокові скручування: лежачи на боку, піднімаємо корпус вгору, тримаючи руки вздовж тіла. Вправу потрібно виконувати по 10-15 разів на кожному боці. Вправа "кішка-корова": стаємо на коліна і руки, при цьому долоні встановлюємо на підлогу відповідно до плечей. Починаємо виконувати вправу: спочатку вигинаємо спину, намагаючись дотягнутися головою до стегон, потім повільно опускаємо голову і піднімаємо хребет вгору, вигинаючи його в напрямку стелі. Вправу потрібно виконувати по 10-15 разів.'," "]}),d.jsx("li",{children:"Випади: Станьте на одну ногу, в другій тримайте гантель або водну пляшку. Зробіть крок вперед і зігніть коліно, так щоб кут між стегном і гомілкою склався приблизно під кутом 90 градусів. Потім поверніться в стартову позицію і повторіть вправу на іншу ногу."}),d.jsx("li",{children:"Згинання рук на турніку. Взятись за турник з надхватом, руки розташувати на ширині плечей. Витягти ноги вперед та підняти їх, зігнути руки в ліктях, опустити тулуб і розтягнутися."}),d.jsx("li",{children:"Однією з ефективних вправ для силових тренувань дома є штанга з рюкзаком. Для цього потрібен рюкзак з книжками або іншими важкими предметами, який можна зафіксувати на штангу. Піднімаючи штангу з рюкзаком, можна тренувати різні групи м'язів, залежно від вибраної ваги та кількості повторень. Важливо слідкувати за правильним виконанням вправи та не перевантажувати своє тіло, особливо якщо немає досвіду в роботі зі штангою."})]}),d.jsx("p",{children:"Ці вправи можуть бути корисні для тих, хто не має можливості відвідувати спортивні зали або фітнес-клуби, але хоче тренувати своє тіло вдома. При виконанні вправ важливо дотримуватися правильної техніки і не надмірно навантажувати себе, щоб уникнути травм та погіршення здоров'я. Перед початком будь-яких фізичних навантажень важливо проконсультуватися з лікарем або тренером."})]})})]}),d.jsxs("div",{className:"stretching",children:[l&&f&&d.jsxs("div",{className:"stretching-video block",children:[d.jsxs("h2",{className:"main-heading",children:["Відео тренування ",d.jsx("span",{children:"розтяжки"})]}),d.jsxs("div",{className:"cards-video-row",children:[d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/N2su8DokZrk?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/N2su8DokZrk",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/0_DojjyQxUs?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/0_DojjyQxUs",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/5fmAyqHa6Pc?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/5fmAyqHa6Pc",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/jY4tEiCCC3Q?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/jY4tEiCCC3Q",children:"Посилання"})]})]})]}),l&&v&&d.jsx("div",{className:"stretching-text block",children:d.jsxs("div",{className:"var-text-main",children:[d.jsxs("h2",{className:"main-heading var-list-heading",children:["Вправи на ",d.jsx("span",{children:"розтяжку"})]}),d.jsx("p",{children:"Загальна гімнастика на розтяжку допомагає зняти напругу з м'язів, підвищити гнучкість тіла та зменшити ризик травм. Ось 10 простих вправ для розтяжки вдома:"}),d.jsxs("ul",{className:"var-list",children:[d.jsx("li",{children:"Присідання з розведеними ногами: станьте на ширину плечей, повільно присядьте, розведіть коліна від себе і потім рухом гладко поверніться в початкове положення. Нахили тулуба вперед: станьте на ширину плечей, повільно нахиліть тулуб вперед і опустіть руки вниз до підлоги. Утримуйтеся в цьому положенні на 10-15 секунд, потім поверніться в початкове положення."}),d.jsx("li",{children:"Розтягування біцепса: поставте одну ногу на стілець або іншу підставку, поверніться спинкою до стільця, підніміть руки вгору і нахиліться вперед. Через 10-15 секунд повторіть з іншою ногою."}),d.jsx("li",{children:"Розтягування грудних м'язів: встаньте біля дверей, поставте руки на карниз або на обробку дверей на рівні плечей, відійдіть назад, доки не відчуєте напругу у грудних м'язах. Утримуйтеся на 10-15 секунд."}),d.jsx("li",{children:"Розтягування стегна: сідайте на підлогу, розкриті ноги зігніть в колінах і з'єднайте стопи, доторкніться колінами до підлоги, утримуйтеся на 10-15 секунд."}),d.jsx("li",{children:"Розтягування ікр: станьте перед стіною, поставте руки на неї і наклоніть тіло вперед, одна нога має бути зігнута в коліні, інша - вистрямлена назад, доки відчуєте напругу в ікрах. Утримуйтеся на 10-15 секунд, потім повторіть з іншою ногою."}),d.jsx("li",{children:"Розтягування широких м'язів спини: станьте на ширину плечей, підійміть руки вгору і зціпіть їх у замок, повільно нахиліть тулуб вперед, намагаючись доторкнутися головою до підлоги."}),d.jsx("li",{children:"Розтягування гомілок: сідайте на підлогу, витягніть перед собою ноги і спрямуйте пальці вгору, потім наклоніться вперед і намагайтеся доторкнутися пальцями рук до підлоги."}),d.jsx("li",{children:"Розтягування спини: лягте на спину, зігніть ноги в колінах і поставте їх на підлогу, підніміть лопатки і доторкніться до підлоги з задньої сторони голови."}),d.jsx("li",{children:"Розтягування шиї: станьте прямо, повільно нахиліть голову вліво, утримуйтеся на 10-15 секунд, потім повторіть нахил вправо. Потім нахиліть голову вперед і назад, також на 10-15 секунд кожен нахил. Уникайте різких рухів та болісних відчуттів під час розтягування, зосередьтеся на гладкості та глибині дихання."})]})]})})]}),d.jsxs("div",{className:"complex",children:[c&&f&&d.jsxs("div",{className:"complex-video block",children:[d.jsxs("h2",{className:"main-heading",children:["Відео ",d.jsx("span",{children:"комплексних"})," тренуваннь"]}),d.jsxs("div",{className:"cards-video-row",children:[d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/mgO-fyMgY84?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/mgO-fyMgY84",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/u1VPn57BHLc?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/u1VPn57BHLc",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/sAWHSQZ63Bw?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/sAWHSQZ63Bw",children:"Посилання"})]}),d.jsxs("div",{className:"main-card video-tren-res",children:[d.jsx("iframe",{className:"main-card-video",src:"https://www.youtube.com/embed/RYJCdDZKPMU?controls=0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),d.jsx("a",{href:"https://youtu.be/RYJCdDZKPMU",children:"Посилання"})]})]})]}),c&&v&&d.jsxs("div",{className:"complex-text block",children:[d.jsx("h2",{className:"main-heading var-list-heading",children:"Комбіновані вправи"}),d.jsxs("div",{className:"var-text-main",children:[d.jsx("p",{children:"Комбіновані вправи включають в себе елементи різних видів тренувань, таких як кардіо, силові, функціональні тощо. Вони сприяють розвитку не тільки окремих м'язових груп, але і координації рухів та загальної фізичної підготовки. Комбінування вправ дозволяє збільшити інтенсивність тренування та кількість спалених калорій. Також вони можуть бути цікавішими та більш стимулюючими, оскільки включають у себе різноманітні рухи та вправи."}),d.jsxs("ul",{className:"var-list",children:[d.jsx("li",{children:"Берпі: Стійте на ногах в плечі ширині, опустіться в присідання, підкиньте ноги назад в дошку для віджимань, виконайте одне віджимання, підтягніть ноги назад до початкового положення та відновіться до стану прямої."}),d.jsx("li",{children:"Підйоми колін: Стійте на ногах в плечі ширині, зробіть зігнуті в колінах підйоми колін до рівня талії, опускаючи кожну ногу по черзі."}),d.jsx("li",{children:"Віджимання від підлоги з планкою Почніть з планки на підлозі, зігніть лікті та опустіться до підлоги, потім знову поверніться до планки та виконайте віджимання."}),d.jsx("li",{children:"Скручування на місці: Станьте на підлозі, складіть руки на грудях, зробіть зігнуті в колінах підйоми колін до рівня живота, поверніться до початкового положення і повторіть з іншою ногою."}),d.jsx("li",{children:"Підняття тулуба в сидячому положенні: Сідайте на підлогу з ногами в поперечному положенні, підніміть тулуб на 45 градусів, тримайте кілька секунд, поверніться до початкового положення."}),d.jsx("li",{children:"Складання ніг на груди в сидячому положенні: Сідайте на підлогу з ногами в поперечному положенні, зігніть ноги в колінах та притисніть їх до грудей, тримайте кілька секунд, потім поверніться до початкового положення."}),d.jsx("li",{children:"Складання рук і ніг в стійці на руках: Станьте в позу дошки для віджимань, зробіть віджимання, потім підкиньте ноги назад, щоб знаходитися у стійці на руках, потім зігніть одну ногу в коліні і проведіть її через тіло, після чого розправте її на землю і повторіть з іншою ногою, потім підкиньте ноги назад і виконайте ще одне віджимання, повторюючи цикл вправ. Ця вправа допомагає зміцнити м'язи рук, спини та кора, а також поліпшує координацію та розтяжку."}),d.jsx("li",{children:"Підйоми на носки з присіданням: станьте на носки, долоні покладіть на стіни або меблі для підтримки, зробіть присідання, а потім підніміться на носки. Ця вправа працює з м'язами ніг, а особливо з виконанням присідань на носках, зміцнює м'язи литково-щиколоткового вузла."}),d.jsx("li",{children:"Планка з вправами для рук: установіться в положення планки на передпліччях, долоні повинні бути зігнуті під правим кутом, тіло повинно бути прямим і зігнутим в ліктях. Потім зробіть 5-10 підйомів долонь, чергуючи руки, тобто підніміть ліву долоню, поверніться до початкового положення, підніміть праву долоню і так далі. Ця вправа зміцнює м'язи рук, плечей і коріння."}),d.jsx("li",{children:"Скакалка з присіданням Робите присідання, коли стрибаєте через скакалку. Зберіть ладоні разом перед грудьми, зігніть лікті та проведіть їх уздовж тіла, коли стрибаєте."})]})]})]})]})]}),il.length>0&&d.jsxs("div",{className:"calory_result",children:[d.jsx("h1",{children:"Історія"}),d.jsx("ul",{className:"calory_result-list",children:il==null?void 0:il.map((Ie,dt)=>d.jsxs("li",{className:"calory_result-item",children:[d.jsxs("span",{children:[dt+1,"."]}),d.jsxs("ul",{className:"calory_result-sub-list",children:[d.jsxs("li",{className:"calory_result-sub-item",children:[d.jsx("span",{children:"Калорій: "}),Math.round(Ie.res)]}),d.jsxs("li",{className:"calory_result-sub-item",children:[d.jsx("span",{children:"Білків: "}),Math.round(Ie.protG)]}),d.jsxs("li",{className:"calory_result-sub-item",children:[d.jsx("span",{children:"Жирів: "}),Math.round(Ie.fatG)]}),d.jsxs("li",{className:"calory_result-sub-item",children:[d.jsx("span",{children:"Вуглеводів: "}),Math.round(Ie.carbG)]})]})]},dt))})]})]})})},ZF=()=>d.jsx(d.Fragment,{children:d.jsx("nav",{children:d.jsxs("ul",{className:"navigation",children:[d.jsx("li",{children:d.jsx("a",{href:"/",children:"Головна"})}),d.jsx("li",{children:d.jsx("a",{href:"#block-2",children:"Про нас"})}),d.jsx("li",{children:d.jsx("a",{href:"#block-3",children:"Відео"})}),d.jsx("li",{children:d.jsx("a",{href:"#block-4",children:"Цікаві факти"})}),d.jsx("li",{children:d.jsx("a",{href:"#footer",children:"Створення плану"})})]})})}),e$=()=>{const t=kP(Qg),[e,n]=I.useState(t.currentUser);I.useEffect(()=>t.onAuthStateChanged(s=>{if(s!=null)return n(s)}),[t]);const r=()=>{LA(t,YF).then(i=>n(i.user)).catch(i=>console.error(i))};return d.jsx(d.Fragment,{children:d.jsxs("header",{className:"header",children:[d.jsx("div",{className:"icon",children:d.jsx("a",{href:"/",children:d.jsx(Ru,{imgSrc:"logo",alt:"logo"})})}),d.jsx(ZF,{}),e!=null?d.jsx(d.Fragment,{children:d.jsx(W1,{to:"/cabinet",className:"user-auth",children:"Мій кабінет"})}):d.jsx("a",{onClick:()=>r(),className:"user-auth",children:"Увійти"})]})})},t$=()=>{const t=n=>{const{icon:r}=n;return{icon_1:d.jsx("svg",{className:"footer-item",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#fff",children:d.jsx("path",{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"})}),icon_2:d.jsx("svg",{className:"footer-item",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"#fff",children:d.jsx("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"})}),icon_3:d.jsx("svg",{className:"footer-item",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"#fff",children:d.jsx("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})}),icon_4:d.jsx("svg",{className:"footer-item",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"#fff",children:d.jsx("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"})})}[r]},e=[{id:1,link:"https://www.facebook.com",svg:t({icon:"icon_1"})},{id:2,link:"https://www.instagram.com",svg:t({icon:"icon_2"})},{id:3,link:"https://www.linkedin.com",svg:t({icon:"icon_3"})},{id:4,link:"https://twitter.com",svg:t({icon:"icon_4"})}];return d.jsx(d.Fragment,{children:d.jsx("ul",{className:"footer-row_list",children:e.map(n=>d.jsx("li",{children:d.jsx("a",{href:n.link,children:n.svg})},n.id))})})},n$=()=>d.jsx(d.Fragment,{children:d.jsx("footer",{className:"footer",children:d.jsxs("nav",{className:"footer-row",children:[d.jsx("a",{href:"/",children:d.jsx(Ru,{imgSrc:"logo",alt:"logo"})}),d.jsx(t$,{})]})})}),r$=()=>d.jsxs(d.Fragment,{children:[d.jsx(e$,{}),d.jsxs(jx,{children:[d.jsx(gf,{path:"/",element:d.jsx(Gx,{})}),d.jsx(gf,{path:"/cabinet",element:d.jsx(JF,{})})]}),d.jsx(n$,{})]});wd.createRoot(document.getElementById("root")).render(d.jsx(Wx,{children:d.jsx(r$,{})}));
