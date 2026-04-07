const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AboutView-CYuz7vik.js","assets/vendor-T2NX2CLv.js","assets/external-link-Brtfi2vi.js","assets/GardenView-C_kd8Azx.js","assets/code-CvcyA92H.js","assets/motion-COhlDiQ2.js","assets/JournalDetail-9yNwr_T3.js","assets/house-BE5gW9Me.js","assets/NotFound-B5E5ZPOE.js"])))=>i.map(i=>d[i]);
import{r as Cp,a as zp,b as z,R as se,L as Nn,u as Qu,c as Ju,B as Np,d as kp,e as Wi}from"./vendor-T2NX2CLv.js";import{i as Nu,g as Dp,s as Dh,a as Ku,b as Oh,c as nh,d as Op,e as _p,f as Rp,h as Up,r as Hp,j as Lp,k as _h,l as Gp,m as Bp,n as qp,o as Vp,S as Yp,H as Zp,F as wa,p as Xp,q as Qp,t as Rh,u as as,v as Jp,w as lh,x as Tt,y as Uh,z as Kp,A as ih,B as Ip,C as ns,D as qu,E as sh,G as Wp,I as Fp,J as xa,K as $p,L as Pp,M as ey,N as oh,O as ty,P as ay,Q as uh,R as ny,T as ly,U as ts,V as iy,W as sy,X as Hh,Y as oy,Z as uy}from"./motion-COhlDiQ2.js";(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))u(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const b of g.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function f(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function u(h){if(h.ep)return;h.ep=!0;const g=f(h);fetch(h.href,g)}})();var ku={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function cy(){if(ch)return El;ch=1;var o=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function f(u,h,g){var b=null;if(g!==void 0&&(b=""+g),h.key!==void 0&&(b=""+h.key),"key"in h){g={};for(var T in h)T!=="key"&&(g[T]=h[T])}else g=h;return h=g.ref,{$$typeof:o,type:u,key:b,ref:h!==void 0?h:null,props:g}}return El.Fragment=c,El.jsx=f,El.jsxs=f,El}var rh;function ry(){return rh||(rh=1,ku.exports=cy()),ku.exports}var d=ry(),Du={exports:{}},Al={},Ou={exports:{}},_u={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function fy(){return fh||(fh=1,(function(o){function c(M,H){var X=M.length;M.push(H);e:for(;0<X;){var ge=X-1>>>1,pe=M[ge];if(0<h(pe,H))M[ge]=H,M[X]=pe,X=ge;else break e}}function f(M){return M.length===0?null:M[0]}function u(M){if(M.length===0)return null;var H=M[0],X=M.pop();if(X!==H){M[0]=X;e:for(var ge=0,pe=M.length,Ze=pe>>>1;ge<Ze;){var we=2*(ge+1)-1,ie=M[we],Re=we+1,Et=M[Re];if(0>h(ie,X))Re<pe&&0>h(Et,ie)?(M[ge]=Et,M[Re]=X,ge=Re):(M[ge]=ie,M[we]=X,ge=we);else if(Re<pe&&0>h(Et,X))M[ge]=Et,M[Re]=X,ge=Re;else break e}}return H}function h(M,H){var X=M.sortIndex-H.sortIndex;return X!==0?X:M.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var g=performance;o.unstable_now=function(){return g.now()}}else{var b=Date,T=b.now();o.unstable_now=function(){return b.now()-T}}var C=[],O=[],L=1,N=null,k=3,B=!1,D=!1,R=!1,_=!1,Y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function J(M){for(var H=f(O);H!==null;){if(H.callback===null)u(O);else if(H.startTime<=M)u(O),H.sortIndex=H.expirationTime,c(C,H);else break;H=f(O)}}function te(M){if(R=!1,J(M),!D)if(f(C)!==null)D=!0,Me||(Me=!0,_e());else{var H=f(O);H!==null&&zt(te,H.startTime-M)}}var Me=!1,Oe=-1,me=5,he=-1;function Qe(){return _?!0:!(o.unstable_now()-he<me)}function Ye(){if(_=!1,Me){var M=o.unstable_now();he=M;var H=!0;try{e:{D=!1,R&&(R=!1,U(Oe),Oe=-1),B=!0;var X=k;try{t:{for(J(M),N=f(C);N!==null&&!(N.expirationTime>M&&Qe());){var ge=N.callback;if(typeof ge=="function"){N.callback=null,k=N.priorityLevel;var pe=ge(N.expirationTime<=M);if(M=o.unstable_now(),typeof pe=="function"){N.callback=pe,J(M),H=!0;break t}N===f(C)&&u(C),J(M)}else u(C);N=f(C)}if(N!==null)H=!0;else{var Ze=f(O);Ze!==null&&zt(te,Ze.startTime-M),H=!1}}break e}finally{N=null,k=X,B=!1}H=void 0}}finally{H?_e():Me=!1}}}var _e;if(typeof Q=="function")_e=function(){Q(Ye)};else if(typeof MessageChannel<"u"){var Va=new MessageChannel,kn=Va.port2;Va.port1.onmessage=Ye,_e=function(){kn.postMessage(null)}}else _e=function(){Y(Ye,0)};function zt(M,H){Oe=Y(function(){M(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(M){M.callback=null},o.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):me=0<M?Math.floor(1e3/M):5},o.unstable_getCurrentPriorityLevel=function(){return k},o.unstable_next=function(M){switch(k){case 1:case 2:case 3:var H=3;break;default:H=k}var X=k;k=H;try{return M()}finally{k=X}},o.unstable_requestPaint=function(){_=!0},o.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var X=k;k=M;try{return H()}finally{k=X}},o.unstable_scheduleCallback=function(M,H,X){var ge=o.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?ge+X:ge):X=ge,M){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=X+pe,M={id:L++,callback:H,priorityLevel:M,startTime:X,expirationTime:pe,sortIndex:-1},X>ge?(M.sortIndex=X,c(O,M),f(C)===null&&M===f(O)&&(R?(U(Oe),Oe=-1):R=!0,zt(te,X-ge))):(M.sortIndex=pe,c(C,M),D||B||(D=!0,Me||(Me=!0,_e()))),M},o.unstable_shouldYield=Qe,o.unstable_wrapCallback=function(M){var H=k;return function(){var X=k;k=H;try{return M.apply(this,arguments)}finally{k=X}}}})(_u)),_u}var dh;function dy(){return dh||(dh=1,Ou.exports=fy()),Ou.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function hy(){if(hh)return Al;hh=1;var o=dy(),c=Cp(),f=zp();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function h(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function g(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function T(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function C(e){if(g(e)!==e)throw Error(u(188))}function O(e){var t=e.alternate;if(!t){if(t=g(e),t===null)throw Error(u(188));return t!==e?null:e}for(var a=e,n=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(n=l.return,n!==null){a=n;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return C(l),e;if(i===n)return C(l),t;i=i.sibling}throw Error(u(188))}if(a.return!==n.return)a=l,n=i;else{for(var s=!1,r=l.child;r;){if(r===a){s=!0,a=l,n=i;break}if(r===n){s=!0,n=l,a=i;break}r=r.sibling}if(!s){for(r=i.child;r;){if(r===a){s=!0,a=i,n=l;break}if(r===n){s=!0,n=i,a=l;break}r=r.sibling}if(!s)throw Error(u(189))}}if(a.alternate!==n)throw Error(u(190))}if(a.tag!==3)throw Error(u(188));return a.stateNode.current===a?e:t}function L(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=L(e),t!==null)return t;e=e.sibling}return null}var N=Object.assign,k=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),D=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),Qe=Symbol.for("react.memo_cache_sentinel"),Ye=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=Ye&&e[Ye]||e["@@iterator"],typeof e=="function"?e:null)}var Va=Symbol.for("react.client.reference");function kn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Va?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case Y:return"Profiler";case _:return"StrictMode";case te:return"Suspense";case Me:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case D:return"Portal";case Q:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case J:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Oe:return t=e.displayName||null,t!==null?t:kn(e.type)||"Memo";case me:t=e._payload,e=e._init;try{return kn(e(t))}catch{}}return null}var zt=Array.isArray,M=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},ge=[],pe=-1;function Ze(e){return{current:e}}function we(e){0>pe||(e.current=ge[pe],ge[pe]=null,pe--)}function ie(e,t){pe++,ge[pe]=e.current,e.current=t}var Re=Ze(null),Et=Ze(null),Kt=Ze(null),Nl=Ze(null);function kl(e,t){switch(ie(Kt,t),ie(Et,e),ie(Re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Md(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Md(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}we(Re),ie(Re,e)}function Ya(){we(Re),we(Et),we(Kt)}function rs(e){e.memoizedState!==null&&ie(Nl,e);var t=Re.current,a=jd(t,e.type);t!==a&&(ie(Et,e),ie(Re,a))}function Dl(e){Et.current===e&&(we(Re),we(Et)),Nl.current===e&&(we(Nl),xl._currentValue=X)}var fs,tc;function Ta(e){if(fs===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);fs=t&&t[1]||"",tc=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+fs+e+tc}var ds=!1;function hs(e,t){if(!e||ds)return"";ds=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var j=function(){throw Error()};if(Object.defineProperty(j.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(j,[])}catch(S){var w=S}Reflect.construct(e,[],j)}else{try{j.call()}catch(S){w=S}e.call(j.prototype)}}else{try{throw Error()}catch(S){w=S}(j=e())&&typeof j.catch=="function"&&j.catch(function(){})}}catch(S){if(S&&w&&typeof S.stack=="string")return[S.stack,w.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=n.DetermineComponentFrameRoot(),s=i[0],r=i[1];if(s&&r){var m=s.split(`
`),x=r.split(`
`);for(l=n=0;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;for(;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;if(n===m.length||l===x.length)for(n=m.length-1,l=x.length-1;1<=n&&0<=l&&m[n]!==x[l];)l--;for(;1<=n&&0<=l;n--,l--)if(m[n]!==x[l]){if(n!==1||l!==1)do if(n--,l--,0>l||m[n]!==x[l]){var E=`
`+m[n].replace(" at new "," at ");return e.displayName&&E.includes("<anonymous>")&&(E=E.replace("<anonymous>",e.displayName)),E}while(1<=n&&0<=l);break}}}finally{ds=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ta(a):""}function im(e,t){switch(e.tag){case 26:case 27:case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return e.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return Ta("Activity");default:return""}}function ac(e){try{var t="",a=null;do t+=im(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var ms=Object.prototype.hasOwnProperty,gs=o.unstable_scheduleCallback,ps=o.unstable_cancelCallback,sm=o.unstable_shouldYield,om=o.unstable_requestPaint,et=o.unstable_now,um=o.unstable_getCurrentPriorityLevel,nc=o.unstable_ImmediatePriority,lc=o.unstable_UserBlockingPriority,Ol=o.unstable_NormalPriority,cm=o.unstable_LowPriority,ic=o.unstable_IdlePriority,rm=o.log,fm=o.unstable_setDisableYieldValue,Dn=null,tt=null;function It(e){if(typeof rm=="function"&&fm(e),tt&&typeof tt.setStrictMode=="function")try{tt.setStrictMode(Dn,e)}catch{}}var at=Math.clz32?Math.clz32:mm,dm=Math.log,hm=Math.LN2;function mm(e){return e>>>=0,e===0?32:31-(dm(e)/hm|0)|0}var _l=256,Rl=262144,Ul=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Hl(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var l=0,i=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var r=n&134217727;return r!==0?(n=r&~i,n!==0?l=Ea(n):(s&=r,s!==0?l=Ea(s):a||(a=r&~e,a!==0&&(l=Ea(a))))):(r=n&~i,r!==0?l=Ea(r):s!==0?l=Ea(s):a||(a=n&~e,a!==0&&(l=Ea(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function On(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function gm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sc(){var e=Ul;return Ul<<=1,(Ul&62914560)===0&&(Ul=4194304),e}function ys(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _n(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pm(e,t,a,n,l,i){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,m=e.expirationTimes,x=e.hiddenUpdates;for(a=s&~a;0<a;){var E=31-at(a),j=1<<E;r[E]=0,m[E]=-1;var w=x[E];if(w!==null)for(x[E]=null,E=0;E<w.length;E++){var S=w[E];S!==null&&(S.lane&=-536870913)}a&=~j}n!==0&&oc(e,n,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(s&~t))}function oc(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-at(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function uc(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-at(a),l=1<<n;l&t|e[n]&t&&(e[n]|=t),a&=~l}}function cc(e,t){var a=t&-t;return a=(a&42)!==0?1:vs(a),(a&(e.suspendedLanes|t))!==0?0:a}function vs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function rc(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Wd(e.type))}function fc(e,t){var a=H.p;try{return H.p=e,t()}finally{H.p=a}}var Wt=Math.random().toString(36).slice(2),Le="__reactFiber$"+Wt,Je="__reactProps$"+Wt,Za="__reactContainer$"+Wt,xs="__reactEvents$"+Wt,ym="__reactListeners$"+Wt,vm="__reactHandles$"+Wt,dc="__reactResources$"+Wt,Rn="__reactMarker$"+Wt;function ws(e){delete e[Le],delete e[Je],delete e[xs],delete e[ym],delete e[vm]}function Xa(e){var t=e[Le];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Za]||a[Le]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=_d(e);e!==null;){if(a=e[Le])return a;e=_d(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[Le]||e[Za]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Ja(e){var t=e[dc];return t||(t=e[dc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ue(e){e[Rn]=!0}var hc=new Set,mc={};function Aa(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(mc[e]=t,e=0;e<t.length;e++)hc.add(t[e])}var bm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gc={},pc={};function xm(e){return ms.call(pc,e)?!0:ms.call(gc,e)?!1:bm.test(e)?pc[e]=!0:(gc[e]=!0,!1)}function Ll(e,t,a){if(xm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Gl(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Nt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function yc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wm(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ss(e){if(!e._valueTracker){var t=yc(e)?"checked":"value";e._valueTracker=wm(e,t,""+e[t])}}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=yc(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Bl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sm=/[\n"\\]/g;function ft(e){return e.replace(Sm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ts(e,t,a,n,l,i,s,r){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+rt(t)):e.value!==""+rt(t)&&(e.value=""+rt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Es(e,s,rt(t)):a!=null?Es(e,s,rt(a)):n!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+rt(r):e.removeAttribute("name")}function bc(e,t,a,n,l,i,s,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ss(e);return}a=a!=null?""+rt(a):"",t=t!=null?""+rt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}n=n??l,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=r?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Ss(e)}function Es(e,t,a){t==="number"&&Bl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ia(e,t,a,n){if(e=e.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<e.length;a++)l=t.hasOwnProperty("$"+e[a].value),e[a].selected!==l&&(e[a].selected=l),l&&n&&(e[a].defaultSelected=!0)}else{for(a=""+rt(a),t=null,l=0;l<e.length;l++){if(e[l].value===a){e[l].selected=!0,n&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function xc(e,t,a){if(t!=null&&(t=""+rt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+rt(a):""}function wc(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(u(92));if(zt(n)){if(1<n.length)throw Error(u(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=rt(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Ss(e)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Tm=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sc(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Tm.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Tc(e,t,a){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var l in t)n=t[l],t.hasOwnProperty(l)&&a[l]!==n&&Sc(e,l,n)}else for(var i in t)t.hasOwnProperty(i)&&Sc(e,i,t[i])}function As(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Em=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Am=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return Am.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function kt(){}var Ms=null;function js(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,$a=null;function Ec(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Je]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ts(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ft(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var l=n[Je]||null;if(!l)throw Error(u(90));Ts(n,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&vc(n)}break e;case"textarea":xc(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ia(e,!!a.multiple,t,!1)}}}var Cs=!1;function Ac(e,t,a){if(Cs)return e(t,a);Cs=!0;try{var n=e(t);return n}finally{if(Cs=!1,(Fa!==null||$a!==null)&&(Ci(),Fa&&(t=Fa,e=$a,$a=Fa=null,Ec(t),e)))for(t=0;t<e.length;t++)Ec(e[t])}}function Hn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Je]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(u(231,t,typeof a));return a}var Dt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zs=!1;if(Dt)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){zs=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{zs=!1}var Ft=null,Ns=null,Vl=null;function Mc(){if(Vl)return Vl;var e,t=Ns,a=t.length,n,l="value"in Ft?Ft.value:Ft.textContent,i=l.length;for(e=0;e<a&&t[e]===l[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===l[i-n];n++);return Vl=l.slice(e,1<n?1-n:void 0)}function Yl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zl(){return!0}function jc(){return!1}function Ke(e){function t(a,n,l,i,s){this._reactName=a,this._targetInst=l,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zl:jc,this.isPropagationStopped=jc,this}return N(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Zl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Zl)},persist:function(){},isPersistent:Zl}),t}var Ma={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ke(Ma),Gn=N({},Ma,{view:0,detail:0}),Mm=Ke(Gn),ks,Ds,Bn,Ql=N({},Gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(ks=e.screenX-Bn.screenX,Ds=e.screenY-Bn.screenY):Ds=ks=0,Bn=e),ks)},movementY:function(e){return"movementY"in e?e.movementY:Ds}}),Cc=Ke(Ql),jm=N({},Ql,{dataTransfer:0}),Cm=Ke(jm),zm=N({},Gn,{relatedTarget:0}),Os=Ke(zm),Nm=N({},Ma,{animationName:0,elapsedTime:0,pseudoElement:0}),km=Ke(Nm),Dm=N({},Ma,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Om=Ke(Dm),_m=N({},Ma,{data:0}),zc=Ke(_m),Rm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Um={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hm[e])?!!t[e]:!1}function _s(){return Lm}var Gm=N({},Gn,{key:function(e){if(e.key){var t=Rm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Yl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Um[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?Yl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bm=Ke(Gm),qm=N({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nc=Ke(qm),Vm=N({},Gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),Ym=Ke(Vm),Zm=N({},Ma,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xm=Ke(Zm),Qm=N({},Ql,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Jm=Ke(Qm),Km=N({},Ma,{newState:0,oldState:0}),Im=Ke(Km),Wm=[9,13,27,32],Rs=Dt&&"CompositionEvent"in window,qn=null;Dt&&"documentMode"in document&&(qn=document.documentMode);var Fm=Dt&&"TextEvent"in window&&!qn,kc=Dt&&(!Rs||qn&&8<qn&&11>=qn),Dc=" ",Oc=!1;function _c(e,t){switch(e){case"keyup":return Wm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function $m(e,t){switch(e){case"compositionend":return Rc(t);case"keypress":return t.which!==32?null:(Oc=!0,Dc);case"textInput":return e=t.data,e===Dc&&Oc?null:e;default:return null}}function Pm(e,t){if(Pa)return e==="compositionend"||!Rs&&_c(e,t)?(e=Mc(),Vl=Ns=Ft=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var eg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!eg[e.type]:t==="textarea"}function Hc(e,t,a,n){Fa?$a?$a.push(n):$a=[n]:Fa=n,t=Ri(t,"onChange"),0<t.length&&(a=new Xl("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Vn=null,Yn=null;function tg(e){xd(e,0)}function Jl(e){var t=Un(e);if(vc(t))return e}function Lc(e,t){if(e==="change")return t}var Gc=!1;if(Dt){var Us;if(Dt){var Hs="oninput"in document;if(!Hs){var Bc=document.createElement("div");Bc.setAttribute("oninput","return;"),Hs=typeof Bc.oninput=="function"}Us=Hs}else Us=!1;Gc=Us&&(!document.documentMode||9<document.documentMode)}function qc(){Vn&&(Vn.detachEvent("onpropertychange",Vc),Yn=Vn=null)}function Vc(e){if(e.propertyName==="value"&&Jl(Yn)){var t=[];Hc(t,Yn,e,js(e)),Ac(tg,t)}}function ag(e,t,a){e==="focusin"?(qc(),Vn=t,Yn=a,Vn.attachEvent("onpropertychange",Vc)):e==="focusout"&&qc()}function ng(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Jl(Yn)}function lg(e,t){if(e==="click")return Jl(t)}function ig(e,t){if(e==="input"||e==="change")return Jl(t)}function sg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:sg;function Zn(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var l=a[n];if(!ms.call(t,l)||!nt(e[l],t[l]))return!1}return!0}function Yc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zc(e,t){var a=Yc(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yc(a)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Qc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Bl(e.document)}return t}function Ls(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var og=Dt&&"documentMode"in document&&11>=document.documentMode,en=null,Gs=null,Xn=null,Bs=!1;function Jc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bs||en==null||en!==Bl(n)||(n=en,"selectionStart"in n&&Ls(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xn&&Zn(Xn,n)||(Xn=n,n=Ri(Gs,"onSelect"),0<n.length&&(t=new Xl("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=en)))}function ja(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tn={animationend:ja("Animation","AnimationEnd"),animationiteration:ja("Animation","AnimationIteration"),animationstart:ja("Animation","AnimationStart"),transitionrun:ja("Transition","TransitionRun"),transitionstart:ja("Transition","TransitionStart"),transitioncancel:ja("Transition","TransitionCancel"),transitionend:ja("Transition","TransitionEnd")},qs={},Kc={};Dt&&(Kc=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Ca(e){if(qs[e])return qs[e];if(!tn[e])return e;var t=tn[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Kc)return qs[e]=t[a];return e}var Ic=Ca("animationend"),Wc=Ca("animationiteration"),Fc=Ca("animationstart"),ug=Ca("transitionrun"),cg=Ca("transitionstart"),rg=Ca("transitioncancel"),$c=Ca("transitionend"),Pc=new Map,Vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vs.push("scrollEnd");function xt(e,t){Pc.set(e,t),Aa(t,[e])}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},dt=[],an=0,Ys=0;function Il(){for(var e=an,t=Ys=an=0;t<e;){var a=dt[t];dt[t++]=null;var n=dt[t];dt[t++]=null;var l=dt[t];dt[t++]=null;var i=dt[t];if(dt[t++]=null,n!==null&&l!==null){var s=n.pending;s===null?l.next=l:(l.next=s.next,s.next=l),n.pending=l}i!==0&&er(a,l,i)}}function Wl(e,t,a,n){dt[an++]=e,dt[an++]=t,dt[an++]=a,dt[an++]=n,Ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Zs(e,t,a,n){return Wl(e,t,a,n),Fl(e)}function za(e,t){return Wl(e,null,null,t),Fl(e)}function er(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var l=!1,i=e.return;i!==null;)i.childLanes|=a,n=i.alternate,n!==null&&(n.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-at(a),e=i.hiddenUpdates,n=e[l],n===null?e[l]=[t]:n.push(t),t.lane=a|536870912),i):null}function Fl(e){if(50<hl)throw hl=0,eu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nn={};function fg(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(e,t,a,n){return new fg(e,t,a,n)}function Xs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var a=e.alternate;return a===null?(a=lt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $l(e,t,a,n,l,i){var s=0;if(n=e,typeof e=="function")Xs(e)&&(s=1);else if(typeof e=="string")s=pp(e,a,Re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=lt(31,a,t,l),e.elementType=he,e.lanes=i,e;case R:return Na(a.children,l,i,t);case _:s=8,l|=24;break;case Y:return e=lt(12,a,t,l|2),e.elementType=Y,e.lanes=i,e;case te:return e=lt(13,a,t,l),e.elementType=te,e.lanes=i,e;case Me:return e=lt(19,a,t,l),e.elementType=Me,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Q:s=10;break e;case U:s=9;break e;case J:s=11;break e;case Oe:s=14;break e;case me:s=16,n=null;break e}s=29,a=Error(u(130,e===null?"null":typeof e,"")),n=null}return t=lt(s,a,t,l),t.elementType=e,t.type=n,t.lanes=i,t}function Na(e,t,a,n){return e=lt(7,e,n,t),e.lanes=a,e}function Qs(e,t,a){return e=lt(6,e,null,t),e.lanes=a,e}function ar(e){var t=lt(18,null,null,0);return t.stateNode=e,t}function Js(e,t,a){return t=lt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var nr=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=nr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:ac(t)},nr.set(e,t),t)}return{value:e,source:t,stack:ac(t)}}var ln=[],sn=0,Pl=null,Qn=0,mt=[],gt=0,$t=null,At=1,Mt="";function _t(e,t){ln[sn++]=Qn,ln[sn++]=Pl,Pl=e,Qn=t}function lr(e,t,a){mt[gt++]=At,mt[gt++]=Mt,mt[gt++]=$t,$t=e;var n=At;e=Mt;var l=32-at(n)-1;n&=~(1<<l),a+=1;var i=32-at(t)+l;if(30<i){var s=l-l%5;i=(n&(1<<s)-1).toString(32),n>>=s,l-=s,At=1<<32-at(t)+l|a<<l|n,Mt=i+e}else At=1<<i|a<<l|n,Mt=e}function Ks(e){e.return!==null&&(_t(e,1),lr(e,1,0))}function Is(e){for(;e===Pl;)Pl=ln[--sn],ln[sn]=null,Qn=ln[--sn],ln[sn]=null;for(;e===$t;)$t=mt[--gt],mt[gt]=null,Mt=mt[--gt],mt[gt]=null,At=mt[--gt],mt[gt]=null}function ir(e,t){mt[gt++]=At,mt[gt++]=Mt,mt[gt++]=$t,At=t.id,Mt=t.overflow,$t=e}var Ge=null,ye=null,ee=!1,Pt=null,pt=!1,Ws=Error(u(519));function ea(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jn(ht(t,e)),Ws}function sr(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[Le]=e,t[Je]=n,a){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(a=0;a<gl.length;a++)F(gl[a],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),bc(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),wc(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Ed(t.textContent,a)?(n.popover!=null&&(F("beforetoggle",t),F("toggle",t)),n.onScroll!=null&&F("scroll",t),n.onScrollEnd!=null&&F("scrollend",t),n.onClick!=null&&(t.onclick=kt),t=!0):t=!1,t||ea(e,!0)}function or(e){for(Ge=e.return;Ge;)switch(Ge.tag){case 5:case 31:case 13:pt=!1;return;case 27:case 3:pt=!0;return;default:Ge=Ge.return}}function on(e){if(e!==Ge)return!1;if(!ee)return or(e),ee=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||gu(e.type,e.memoizedProps)),a=!a),a&&ye&&ea(e),or(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=Od(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));ye=Od(e)}else t===27?(t=ye,ma(e.type)?(e=xu,xu=null,ye=e):ye=t):ye=Ge?vt(e.stateNode.nextSibling):null;return!0}function ka(){ye=Ge=null,ee=!1}function Fs(){var e=Pt;return e!==null&&($e===null?$e=e:$e.push.apply($e,e),Pt=null),e}function Jn(e){Pt===null?Pt=[e]:Pt.push(e)}var $s=Ze(null),Da=null,Rt=null;function ta(e,t,a){ie($s,t._currentValue),t._currentValue=a}function Ut(e){e._currentValue=$s.current,we($s)}function Ps(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function eo(e,t,a,n){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var s=l.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=l;for(var m=0;m<t.length;m++)if(r.context===t[m]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Ps(i.return,a,e),n||(s=null);break e}i=r.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=a,i=s.alternate,i!==null&&(i.lanes|=a),Ps(s,a,e),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===e){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function un(e,t,a,n){e=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var r=l.type;nt(l.pendingProps.value,s.value)||(e!==null?e.push(r):e=[r])}}else if(l===Nl.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(xl):e=[xl])}l=l.return}e!==null&&eo(t,e,a,n),t.flags|=262144}function ei(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oa(e){Da=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return ur(Da,e)}function ti(e,t){return Da===null&&Oa(e),ur(e,t)}function ur(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Rt===null){if(e===null)throw Error(u(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return a}var dg=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},hg=o.unstable_scheduleCallback,mg=o.unstable_NormalPriority,je={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function to(){return{controller:new dg,data:new Map,refCount:0}}function Kn(e){e.refCount--,e.refCount===0&&hg(mg,function(){e.controller.abort()})}var In=null,ao=0,cn=0,rn=null;function gg(e,t){if(In===null){var a=In=[];ao=0,cn=su(),rn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return ao++,t.then(cr,cr),t}function cr(){if(--ao===0&&In!==null){rn!==null&&(rn.status="fulfilled");var e=In;In=null,cn=0,rn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function pg(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(n.status="rejected",n.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),n}var rr=M.S;M.S=function(e,t){Kf=et(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&gg(e,t),rr!==null&&rr(e,t)};var _a=Ze(null);function no(){var e=_a.current;return e!==null?e:de.pooledCache}function ai(e,t){t===null?ie(_a,_a.current):ie(_a,t.pool)}function fr(){var e=no();return e===null?null:{parent:je._currentValue,pool:e}}var fn=Error(u(460)),lo=Error(u(474)),ni=Error(u(542)),li={then:function(){}};function dr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(kt,kt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gr(e),e;default:if(typeof t.status=="string")t.then(kt,kt);else{if(e=de,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=n}},function(n){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,gr(e),e}throw Ua=t,fn}}function Ra(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ua=a,fn):a}}var Ua=null;function mr(){if(Ua===null)throw Error(u(459));var e=Ua;return Ua=null,e}function gr(e){if(e===fn||e===ni)throw Error(u(483))}var dn=null,Wn=0;function ii(e){var t=Wn;return Wn+=1,dn===null&&(dn=[]),hr(dn,e,t)}function Fn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function si(e,t){throw t.$$typeof===k?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function pr(e){function t(y,p){if(e){var v=y.deletions;v===null?(y.deletions=[p],y.flags|=16):v.push(p)}}function a(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function n(y){for(var p=new Map;y!==null;)y.key!==null?p.set(y.key,y):p.set(y.index,y),y=y.sibling;return p}function l(y,p){return y=Ot(y,p),y.index=0,y.sibling=null,y}function i(y,p,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<p?(y.flags|=67108866,p):v):(y.flags|=67108866,p)):(y.flags|=1048576,p)}function s(y){return e&&y.alternate===null&&(y.flags|=67108866),y}function r(y,p,v,A){return p===null||p.tag!==6?(p=Qs(v,y.mode,A),p.return=y,p):(p=l(p,v),p.return=y,p)}function m(y,p,v,A){var V=v.type;return V===R?E(y,p,v.props.children,A,v.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===me&&Ra(V)===p.type)?(p=l(p,v.props),Fn(p,v),p.return=y,p):(p=$l(v.type,v.key,v.props,null,y.mode,A),Fn(p,v),p.return=y,p)}function x(y,p,v,A){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Js(v,y.mode,A),p.return=y,p):(p=l(p,v.children||[]),p.return=y,p)}function E(y,p,v,A,V){return p===null||p.tag!==7?(p=Na(v,y.mode,A,V),p.return=y,p):(p=l(p,v),p.return=y,p)}function j(y,p,v){if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return p=Qs(""+p,y.mode,v),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case B:return v=$l(p.type,p.key,p.props,null,y.mode,v),Fn(v,p),v.return=y,v;case D:return p=Js(p,y.mode,v),p.return=y,p;case me:return p=Ra(p),j(y,p,v)}if(zt(p)||_e(p))return p=Na(p,y.mode,v,null),p.return=y,p;if(typeof p.then=="function")return j(y,ii(p),v);if(p.$$typeof===Q)return j(y,ti(y,p),v);si(y,p)}return null}function w(y,p,v,A){var V=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return V!==null?null:r(y,p,""+v,A);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case B:return v.key===V?m(y,p,v,A):null;case D:return v.key===V?x(y,p,v,A):null;case me:return v=Ra(v),w(y,p,v,A)}if(zt(v)||_e(v))return V!==null?null:E(y,p,v,A,null);if(typeof v.then=="function")return w(y,p,ii(v),A);if(v.$$typeof===Q)return w(y,p,ti(y,v),A);si(y,v)}return null}function S(y,p,v,A,V){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return y=y.get(v)||null,r(p,y,""+A,V);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case B:return y=y.get(A.key===null?v:A.key)||null,m(p,y,A,V);case D:return y=y.get(A.key===null?v:A.key)||null,x(p,y,A,V);case me:return A=Ra(A),S(y,p,v,A,V)}if(zt(A)||_e(A))return y=y.get(v)||null,E(p,y,A,V,null);if(typeof A.then=="function")return S(y,p,v,ii(A),V);if(A.$$typeof===Q)return S(y,p,v,ti(p,A),V);si(p,A)}return null}function G(y,p,v,A){for(var V=null,ae=null,q=p,I=p=0,P=null;q!==null&&I<v.length;I++){q.index>I?(P=q,q=null):P=q.sibling;var ne=w(y,q,v[I],A);if(ne===null){q===null&&(q=P);break}e&&q&&ne.alternate===null&&t(y,q),p=i(ne,p,I),ae===null?V=ne:ae.sibling=ne,ae=ne,q=P}if(I===v.length)return a(y,q),ee&&_t(y,I),V;if(q===null){for(;I<v.length;I++)q=j(y,v[I],A),q!==null&&(p=i(q,p,I),ae===null?V=q:ae.sibling=q,ae=q);return ee&&_t(y,I),V}for(q=n(q);I<v.length;I++)P=S(q,y,I,v[I],A),P!==null&&(e&&P.alternate!==null&&q.delete(P.key===null?I:P.key),p=i(P,p,I),ae===null?V=P:ae.sibling=P,ae=P);return e&&q.forEach(function(ba){return t(y,ba)}),ee&&_t(y,I),V}function Z(y,p,v,A){if(v==null)throw Error(u(151));for(var V=null,ae=null,q=p,I=p=0,P=null,ne=v.next();q!==null&&!ne.done;I++,ne=v.next()){q.index>I?(P=q,q=null):P=q.sibling;var ba=w(y,q,ne.value,A);if(ba===null){q===null&&(q=P);break}e&&q&&ba.alternate===null&&t(y,q),p=i(ba,p,I),ae===null?V=ba:ae.sibling=ba,ae=ba,q=P}if(ne.done)return a(y,q),ee&&_t(y,I),V;if(q===null){for(;!ne.done;I++,ne=v.next())ne=j(y,ne.value,A),ne!==null&&(p=i(ne,p,I),ae===null?V=ne:ae.sibling=ne,ae=ne);return ee&&_t(y,I),V}for(q=n(q);!ne.done;I++,ne=v.next())ne=S(q,y,I,ne.value,A),ne!==null&&(e&&ne.alternate!==null&&q.delete(ne.key===null?I:ne.key),p=i(ne,p,I),ae===null?V=ne:ae.sibling=ne,ae=ne);return e&&q.forEach(function(jp){return t(y,jp)}),ee&&_t(y,I),V}function fe(y,p,v,A){if(typeof v=="object"&&v!==null&&v.type===R&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case B:e:{for(var V=v.key;p!==null;){if(p.key===V){if(V=v.type,V===R){if(p.tag===7){a(y,p.sibling),A=l(p,v.props.children),A.return=y,y=A;break e}}else if(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===me&&Ra(V)===p.type){a(y,p.sibling),A=l(p,v.props),Fn(A,v),A.return=y,y=A;break e}a(y,p);break}else t(y,p);p=p.sibling}v.type===R?(A=Na(v.props.children,y.mode,A,v.key),A.return=y,y=A):(A=$l(v.type,v.key,v.props,null,y.mode,A),Fn(A,v),A.return=y,y=A)}return s(y);case D:e:{for(V=v.key;p!==null;){if(p.key===V)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){a(y,p.sibling),A=l(p,v.children||[]),A.return=y,y=A;break e}else{a(y,p);break}else t(y,p);p=p.sibling}A=Js(v,y.mode,A),A.return=y,y=A}return s(y);case me:return v=Ra(v),fe(y,p,v,A)}if(zt(v))return G(y,p,v,A);if(_e(v)){if(V=_e(v),typeof V!="function")throw Error(u(150));return v=V.call(v),Z(y,p,v,A)}if(typeof v.then=="function")return fe(y,p,ii(v),A);if(v.$$typeof===Q)return fe(y,p,ti(y,v),A);si(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,p!==null&&p.tag===6?(a(y,p.sibling),A=l(p,v),A.return=y,y=A):(a(y,p),A=Qs(v,y.mode,A),A.return=y,y=A),s(y)):a(y,p)}return function(y,p,v,A){try{Wn=0;var V=fe(y,p,v,A);return dn=null,V}catch(q){if(q===fn||q===ni)throw q;var ae=lt(29,q,null,y.mode);return ae.lanes=A,ae.return=y,ae}finally{}}}var Ha=pr(!0),yr=pr(!1),aa=!1;function io(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function so(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var l=n.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),n.pending=t,t=Fl(e),er(e,null,a),t}return Wl(e,n,t,a),Fl(e)}function $n(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uc(e,a)}}function oo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=s:i=i.next=s,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:n.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var uo=!1;function Pn(){if(uo){var e=rn;if(e!==null)throw e}}function el(e,t,a,n){uo=!1;var l=e.updateQueue;aa=!1;var i=l.firstBaseUpdate,s=l.lastBaseUpdate,r=l.shared.pending;if(r!==null){l.shared.pending=null;var m=r,x=m.next;m.next=null,s===null?i=x:s.next=x,s=m;var E=e.alternate;E!==null&&(E=E.updateQueue,r=E.lastBaseUpdate,r!==s&&(r===null?E.firstBaseUpdate=x:r.next=x,E.lastBaseUpdate=m))}if(i!==null){var j=l.baseState;s=0,E=x=m=null,r=i;do{var w=r.lane&-536870913,S=w!==r.lane;if(S?($&w)===w:(n&w)===w){w!==0&&w===cn&&(uo=!0),E!==null&&(E=E.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var G=e,Z=r;w=t;var fe=a;switch(Z.tag){case 1:if(G=Z.payload,typeof G=="function"){j=G.call(fe,j,w);break e}j=G;break e;case 3:G.flags=G.flags&-65537|128;case 0:if(G=Z.payload,w=typeof G=="function"?G.call(fe,j,w):G,w==null)break e;j=N({},j,w);break e;case 2:aa=!0}}w=r.callback,w!==null&&(e.flags|=64,S&&(e.flags|=8192),S=l.callbacks,S===null?l.callbacks=[w]:S.push(w))}else S={lane:w,tag:r.tag,payload:r.payload,callback:r.callback,next:null},E===null?(x=E=S,m=j):E=E.next=S,s|=w;if(r=r.next,r===null){if(r=l.shared.pending,r===null)break;S=r,r=S.next,S.next=null,l.lastBaseUpdate=S,l.shared.pending=null}}while(!0);E===null&&(m=j),l.baseState=m,l.firstBaseUpdate=x,l.lastBaseUpdate=E,i===null&&(l.shared.lanes=0),ca|=s,e.lanes=s,e.memoizedState=j}}function vr(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function br(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)vr(a[e],t)}var hn=Ze(null),oi=Ze(0);function xr(e,t){e=Xt,ie(oi,e),ie(hn,t),Xt=e|t.baseLanes}function co(){ie(oi,Xt),ie(hn,hn.current)}function ro(){Xt=oi.current,we(hn),we(oi)}var it=Ze(null),yt=null;function ia(e){var t=e.alternate;ie(Ee,Ee.current&1),ie(it,e),yt===null&&(t===null||hn.current!==null||t.memoizedState!==null)&&(yt=e)}function fo(e){ie(Ee,Ee.current),ie(it,e),yt===null&&(yt=e)}function wr(e){e.tag===22?(ie(Ee,Ee.current),ie(it,e),yt===null&&(yt=e)):sa()}function sa(){ie(Ee,Ee.current),ie(it,it.current)}function st(e){we(it),yt===e&&(yt=null),we(Ee)}var Ee=Ze(0);function ui(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vu(a)||bu(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,K=null,ce=null,Ce=null,ci=!1,mn=!1,La=!1,ri=0,tl=0,gn=null,yg=0;function Se(){throw Error(u(321))}function ho(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function mo(e,t,a,n,l,i){return Ht=i,K=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?lf:zo,La=!1,i=a(n,l),La=!1,mn&&(i=Tr(t,a,n,l)),Sr(e),i}function Sr(e){M.H=ll;var t=ce!==null&&ce.next!==null;if(Ht=0,Ce=ce=K=null,ci=!1,tl=0,gn=null,t)throw Error(u(300));e===null||ze||(e=e.dependencies,e!==null&&ei(e)&&(ze=!0))}function Tr(e,t,a,n){K=e;var l=0;do{if(mn&&(gn=null),tl=0,mn=!1,25<=l)throw Error(u(301));if(l+=1,Ce=ce=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=sf,i=t(a,n)}while(mn);return i}function vg(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?al(t):t,e=e.useState()[0],(ce!==null?ce.memoizedState:null)!==e&&(K.flags|=1024),t}function go(){var e=ri!==0;return ri=0,e}function po(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function yo(e){if(ci){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ci=!1}Ht=0,Ce=ce=K=null,mn=!1,tl=ri=0,gn=null}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?K.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function Ae(){if(ce===null){var e=K.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=Ce===null?K.memoizedState:Ce.next;if(t!==null)Ce=t,ce=e;else{if(e===null)throw K.alternate===null?Error(u(467)):Error(u(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},Ce===null?K.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function fi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var t=tl;return tl+=1,gn===null&&(gn=[]),e=hr(gn,e,t),t=K,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?lf:zo),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===Q)return Be(e)}throw Error(u(438,String(e)))}function vo(e){var t=null,a=K.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=K.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=fi(),K.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Qe;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=Ae();return bo(t,ce,e)}function bo(e,t,a){var n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=a;var l=e.baseQueue,i=n.pending;if(i!==null){if(l!==null){var s=l.next;l.next=i.next,i.next=s}t.baseQueue=l=i,n.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var r=s=null,m=null,x=t,E=!1;do{var j=x.lane&-536870913;if(j!==x.lane?($&j)===j:(Ht&j)===j){var w=x.revertLane;if(w===0)m!==null&&(m=m.next={lane:0,revertLane:0,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),j===cn&&(E=!0);else if((Ht&w)===w){x=x.next,w===cn&&(E=!0);continue}else j={lane:0,revertLane:x.revertLane,gesture:null,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(r=m=j,s=i):m=m.next=j,K.lanes|=w,ca|=w;j=x.action,La&&a(i,j),i=x.hasEagerState?x.eagerState:a(i,j)}else w={lane:j,revertLane:x.revertLane,gesture:x.gesture,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(r=m=w,s=i):m=m.next=w,K.lanes|=j,ca|=j;x=x.next}while(x!==null&&x!==t);if(m===null?s=i:m.next=r,!nt(i,e.memoizedState)&&(ze=!0,E&&(a=rn,a!==null)))throw a;e.memoizedState=i,e.baseState=s,e.baseQueue=m,n.lastRenderedState=i}return l===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function xo(e){var t=Ae(),a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=e;var n=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var s=l=l.next;do i=e(i,s.action),s=s.next;while(s!==l);nt(i,t.memoizedState)||(ze=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,n]}function Er(e,t,a){var n=K,l=Ae(),i=ee;if(i){if(a===void 0)throw Error(u(407));a=a()}else a=t();var s=!nt((ce||l).memoizedState,a);if(s&&(l.memoizedState=a,ze=!0),l=l.queue,To(jr.bind(null,n,l,e),[e]),l.getSnapshot!==t||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,pn(9,{destroy:void 0},Mr.bind(null,n,l,a,t),null),de===null)throw Error(u(349));i||(Ht&127)!==0||Ar(n,t,a)}return a}function Ar(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=K.updateQueue,t===null?(t=fi(),K.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Mr(e,t,a,n){t.value=a,t.getSnapshot=n,Cr(t)&&zr(e)}function jr(e,t,a){return a(function(){Cr(t)&&zr(e)})}function Cr(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function zr(e){var t=za(e,2);t!==null&&Pe(t,e,2)}function wo(e){var t=Xe();if(typeof e=="function"){var a=e;if(e=a(),La){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function Nr(e,t,a,n){return e.baseState=a,bo(e,ce,typeof n=="function"?n:Lt)}function bg(e,t,a,n,l){if(pi(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){i.listeners.push(s)}};M.T!==null?a(!0):i.isTransition=!1,n(i),a=t.pending,a===null?(i.next=t.pending=i,kr(t,i)):(i.next=a.next,t.pending=a.next=i)}}function kr(e,t){var a=t.action,n=t.payload,l=e.state;if(t.isTransition){var i=M.T,s={};M.T=s;try{var r=a(l,n),m=M.S;m!==null&&m(s,r),Dr(e,t,r)}catch(x){So(e,t,x)}finally{i!==null&&s.types!==null&&(i.types=s.types),M.T=i}}else try{i=a(l,n),Dr(e,t,i)}catch(x){So(e,t,x)}}function Dr(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Or(e,t,n)},function(n){return So(e,t,n)}):Or(e,t,a)}function Or(e,t,a){t.status="fulfilled",t.value=a,_r(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,kr(e,a)))}function So(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,_r(t),t=t.next;while(t!==n)}e.action=null}function _r(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rr(e,t){return t}function Ur(e,t){if(ee){var a=de.formState;if(a!==null){e:{var n=K;if(ee){if(ye){t:{for(var l=ye,i=pt;l.nodeType!==8;){if(!i){l=null;break t}if(l=vt(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){ye=vt(l.nextSibling),n=l.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=Xe(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:t},a.queue=n,a=tf.bind(null,K,n),n.dispatch=a,n=wo(!1),i=Co.bind(null,K,!1,n.queue),n=Xe(),l={state:t,dispatch:null,action:e,pending:null},n.queue=l,a=bg.bind(null,K,l,i,a),l.dispatch=a,n.memoizedState=e,[t,a,!1]}function Hr(e){var t=Ae();return Lr(t,ce,e)}function Lr(e,t,a){if(t=bo(e,t,Rr)[0],e=hi(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=al(t)}catch(s){throw s===fn?ni:s}else n=t;t=Ae();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(K.flags|=2048,pn(9,{destroy:void 0},xg.bind(null,l,a),null)),[n,i,e]}function xg(e,t){e.action=t}function Gr(e){var t=Ae(),a=ce;if(a!==null)return Lr(t,a,e);Ae(),t=t.memoizedState,a=Ae();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function pn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=K.updateQueue,t===null&&(t=fi(),K.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Br(){return Ae().memoizedState}function mi(e,t,a,n){var l=Xe();K.flags|=e,l.memoizedState=pn(1|t,{destroy:void 0},a,n===void 0?null:n)}function gi(e,t,a,n){var l=Ae();n=n===void 0?null:n;var i=l.memoizedState.inst;ce!==null&&n!==null&&ho(n,ce.memoizedState.deps)?l.memoizedState=pn(t,i,a,n):(K.flags|=e,l.memoizedState=pn(1|t,i,a,n))}function qr(e,t){mi(8390656,8,e,t)}function To(e,t){gi(2048,8,e,t)}function wg(e){K.flags|=4;var t=K.updateQueue;if(t===null)t=fi(),K.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Vr(e){var t=Ae().memoizedState;return wg({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function Yr(e,t){return gi(4,2,e,t)}function Zr(e,t){return gi(4,4,e,t)}function Xr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qr(e,t,a){a=a!=null?a.concat([e]):null,gi(4,4,Xr.bind(null,t,e),a)}function Eo(){}function Jr(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&ho(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Kr(e,t){var a=Ae();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&ho(t,n[1]))return n[0];if(n=e(),La){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n}function Ao(e,t,a){return a===void 0||(Ht&1073741824)!==0&&($&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=Wf(),K.lanes|=e,ca|=e,a)}function Ir(e,t,a,n){return nt(a,t)?a:hn.current!==null?(e=Ao(e,a,n),nt(e,t)||(ze=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&($&261930)===0?(ze=!0,e.memoizedState=a):(e=Wf(),K.lanes|=e,ca|=e,t)}function Wr(e,t,a,n,l){var i=H.p;H.p=i!==0&&8>i?i:8;var s=M.T,r={};M.T=r,Co(e,!1,t,a);try{var m=l(),x=M.S;if(x!==null&&x(r,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var E=pg(m,n);nl(e,t,E,ct(e))}else nl(e,t,n,ct(e))}catch(j){nl(e,t,{then:function(){},status:"rejected",reason:j},ct())}finally{H.p=i,s!==null&&r.types!==null&&(s.types=r.types),M.T=s}}function Sg(){}function Mo(e,t,a,n){if(e.tag!==5)throw Error(u(476));var l=Fr(e).queue;Wr(e,l,t,X,a===null?Sg:function(){return $r(e),a(n)})}function Fr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:X},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $r(e){var t=Fr(e);t.next===null&&(t=e.alternate.memoizedState),nl(e,t.next.queue,{},ct())}function jo(){return Be(xl)}function Pr(){return Ae().memoizedState}function ef(){return Ae().memoizedState}function Tg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=na(a);var n=la(t,e,a);n!==null&&(Pe(n,t,a),$n(n,t,a)),t={cache:to()},e.payload=t;return}t=t.return}}function Eg(e,t,a){var n=ct();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},pi(e)?af(t,a):(a=Zs(e,t,a,n),a!==null&&(Pe(a,e,n),nf(a,t,n)))}function tf(e,t,a){var n=ct();nl(e,t,a,n)}function nl(e,t,a,n){var l={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(pi(e))af(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,r=i(s,a);if(l.hasEagerState=!0,l.eagerState=r,nt(r,s))return Wl(e,t,l,0),de===null&&Il(),!1}catch{}finally{}if(a=Zs(e,t,l,n),a!==null)return Pe(a,e,n),nf(a,t,n),!0}return!1}function Co(e,t,a,n){if(n={lane:2,revertLane:su(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},pi(e)){if(t)throw Error(u(479))}else t=Zs(e,a,n,2),t!==null&&Pe(t,e,2)}function pi(e){var t=e.alternate;return e===K||t!==null&&t===K}function af(e,t){mn=ci=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function nf(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,uc(e,a)}}var ll={readContext:Be,use:di,useCallback:Se,useContext:Se,useEffect:Se,useImperativeHandle:Se,useLayoutEffect:Se,useInsertionEffect:Se,useMemo:Se,useReducer:Se,useRef:Se,useState:Se,useDebugValue:Se,useDeferredValue:Se,useTransition:Se,useSyncExternalStore:Se,useId:Se,useHostTransitionStatus:Se,useFormState:Se,useActionState:Se,useOptimistic:Se,useMemoCache:Se,useCacheRefresh:Se};ll.useEffectEvent=Se;var lf={readContext:Be,use:di,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:qr,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,mi(4194308,4,Xr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return mi(4194308,4,e,t)},useInsertionEffect:function(e,t){mi(4,2,e,t)},useMemo:function(e,t){var a=Xe();t=t===void 0?null:t;var n=e();if(La){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Xe();if(a!==void 0){var l=a(t);if(La){It(!0);try{a(t)}finally{It(!1)}}}else l=t;return n.memoizedState=n.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},n.queue=e,e=e.dispatch=Eg.bind(null,K,e),[n.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:function(e){e=wo(e);var t=e.queue,a=tf.bind(null,K,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Eo,useDeferredValue:function(e,t){var a=Xe();return Ao(a,e,t)},useTransition:function(){var e=wo(!1);return e=Wr.bind(null,K,e.queue,!0,!1),Xe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=K,l=Xe();if(ee){if(a===void 0)throw Error(u(407));a=a()}else{if(a=t(),de===null)throw Error(u(349));($&127)!==0||Ar(n,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,qr(jr.bind(null,n,i,e),[e]),n.flags|=2048,pn(9,{destroy:void 0},Mr.bind(null,n,i,a,t),null),a},useId:function(){var e=Xe(),t=de.identifierPrefix;if(ee){var a=Mt,n=At;a=(n&~(1<<32-at(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=ri++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=yg++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:jo,useFormState:Ur,useActionState:Ur,useOptimistic:function(e){var t=Xe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Co.bind(null,K,!0,a),a.dispatch=t,[e,t]},useMemoCache:vo,useCacheRefresh:function(){return Xe().memoizedState=Tg.bind(null,K)},useEffectEvent:function(e){var t=Xe(),a={impl:e};return t.memoizedState=a,function(){if((le&2)!==0)throw Error(u(440));return a.impl.apply(void 0,arguments)}}},zo={readContext:Be,use:di,useCallback:Jr,useContext:Be,useEffect:To,useImperativeHandle:Qr,useInsertionEffect:Yr,useLayoutEffect:Zr,useMemo:Kr,useReducer:hi,useRef:Br,useState:function(){return hi(Lt)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=Ae();return Ir(a,ce.memoizedState,e,t)},useTransition:function(){var e=hi(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Er,useId:Pr,useHostTransitionStatus:jo,useFormState:Hr,useActionState:Hr,useOptimistic:function(e,t){var a=Ae();return Nr(a,ce,e,t)},useMemoCache:vo,useCacheRefresh:ef};zo.useEffectEvent=Vr;var sf={readContext:Be,use:di,useCallback:Jr,useContext:Be,useEffect:To,useImperativeHandle:Qr,useInsertionEffect:Yr,useLayoutEffect:Zr,useMemo:Kr,useReducer:xo,useRef:Br,useState:function(){return xo(Lt)},useDebugValue:Eo,useDeferredValue:function(e,t){var a=Ae();return ce===null?Ao(a,e,t):Ir(a,ce.memoizedState,e,t)},useTransition:function(){var e=xo(Lt)[0],t=Ae().memoizedState;return[typeof e=="boolean"?e:al(e),t]},useSyncExternalStore:Er,useId:Pr,useHostTransitionStatus:jo,useFormState:Gr,useActionState:Gr,useOptimistic:function(e,t){var a=Ae();return ce!==null?Nr(a,ce,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vo,useCacheRefresh:ef};sf.useEffectEvent=Vr;function No(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:N({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ko={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=ct(),l=na(n);l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Pe(t,e,n),$n(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=ct(),l=na(n);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=la(e,l,n),t!==null&&(Pe(t,e,n),$n(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=la(e,n,a),t!==null&&(Pe(t,e,a),$n(t,e,a))}};function of(e,t,a,n,l,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,s):t.prototype&&t.prototype.isPureReactComponent?!Zn(a,n)||!Zn(l,i):!0}function uf(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ko.enqueueReplaceState(t,t.state,null)}function Ga(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=N({},a));for(var l in e)a[l]===void 0&&(a[l]=e[l])}return a}function cf(e){Kl(e)}function rf(e){console.error(e)}function ff(e){Kl(e)}function yi(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function df(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Do(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){yi(e,t)},a}function hf(e){return e=na(e),e.tag=3,e}function mf(e,t,a,n){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=n.value;e.payload=function(){return l(i)},e.callback=function(){df(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){df(t,a,n),typeof l!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})})}function Ag(e,t,a,n,l){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&un(t,a,l,!0),a=it.current,a!==null){switch(a.tag){case 31:case 13:return yt===null?zi():a.alternate===null&&Te===0&&(Te=3),a.flags&=-257,a.flags|=65536,a.lanes=l,n===li?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),nu(e,n,l)),!1;case 22:return a.flags|=65536,n===li?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),nu(e,n,l)),!1}throw Error(u(435,a.tag))}return nu(e,n,l),zi(),!1}if(ee)return t=it.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,n!==Ws&&(e=Error(u(422),{cause:n}),Jn(ht(e,a)))):(n!==Ws&&(t=Error(u(423),{cause:n}),Jn(ht(t,a))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,n=ht(n,a),l=Do(e.stateNode,n,l),oo(e,l),Te!==4&&(Te=2)),!1;var i=Error(u(520),{cause:n});if(i=ht(i,a),dl===null?dl=[i]:dl.push(i),Te!==4&&(Te=2),t===null)return!0;n=ht(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=l&-l,a.lanes|=e,e=Do(a.stateNode,n,e),oo(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ra===null||!ra.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=hf(l),mf(l,e,a,n),oo(a,l),!1}a=a.return}while(a!==null);return!1}var Oo=Error(u(461)),ze=!1;function qe(e,t,a,n){t.child=e===null?yr(t,null,a,n):Ha(t,e.child,a,n)}function gf(e,t,a,n,l){a=a.render;var i=t.ref;if("ref"in n){var s={};for(var r in n)r!=="ref"&&(s[r]=n[r])}else s=n;return Oa(t),n=mo(e,t,a,s,i,l),r=go(),e!==null&&!ze?(po(e,t,l),Gt(e,t,l)):(ee&&r&&Ks(t),t.flags|=1,qe(e,t,n,l),t.child)}function pf(e,t,a,n,l){if(e===null){var i=a.type;return typeof i=="function"&&!Xs(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,yf(e,t,i,n,l)):(e=$l(a.type,null,n,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!qo(e,l)){var s=i.memoizedProps;if(a=a.compare,a=a!==null?a:Zn,a(s,n)&&e.ref===t.ref)return Gt(e,t,l)}return t.flags|=1,e=Ot(i,n),e.ref=t.ref,e.return=t,t.child=e}function yf(e,t,a,n,l){if(e!==null){var i=e.memoizedProps;if(Zn(i,n)&&e.ref===t.ref)if(ze=!1,t.pendingProps=n=i,qo(e,l))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Gt(e,t,l)}return _o(e,t,a,n,l)}function vf(e,t,a,n){var l=n.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,l=0;n!==null;)l=l|n.lanes|n.childLanes,n=n.sibling;n=l&~i}else n=0,t.child=null;return bf(e,t,i,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ai(t,i!==null?i.cachePool:null),i!==null?xr(t,i):co(),wr(t);else return n=t.lanes=536870912,bf(e,t,i!==null?i.baseLanes|a:a,a,n)}else i!==null?(ai(t,i.cachePool),xr(t,i),sa(),t.memoizedState=null):(e!==null&&ai(t,null),co(),sa());return qe(e,t,l,a),t.child}function il(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function bf(e,t,a,n,l){var i=no();return i=i===null?null:{parent:je._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},e!==null&&ai(t,null),co(),wr(t),e!==null&&un(e,t,n,!0),t.childLanes=l,null}function vi(e,t){return t=xi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xf(e,t,a){return Ha(t,e.child,null,a),e=vi(t,t.pendingProps),e.flags|=2,st(t),t.memoizedState=null,e}function Mg(e,t,a){var n=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ee){if(n.mode==="hidden")return e=vi(t,n),t.lanes=536870912,il(null,e);if(fo(t),(e=ye)?(e=Dd(e,pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:At,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=ar(e),a.return=t,t.child=a,Ge=t,ye=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return vi(t,n)}var i=e.memoizedState;if(i!==null){var s=i.dehydrated;if(fo(t),l)if(t.flags&256)t.flags&=-257,t=xf(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(ze||un(e,t,a,!1),l=(a&e.childLanes)!==0,ze||l){if(n=de,n!==null&&(s=cc(n,a),s!==0&&s!==i.retryLane))throw i.retryLane=s,za(e,s),Pe(n,e,s),Oo;zi(),t=xf(e,t,a)}else e=i.treeContext,ye=vt(s.nextSibling),Ge=t,ee=!0,Pt=null,pt=!1,e!==null&&ir(t,e),t=vi(t,n),t.flags|=4096;return t}return e=Ot(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bi(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(u(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function _o(e,t,a,n,l){return Oa(t),a=mo(e,t,a,n,void 0,l),n=go(),e!==null&&!ze?(po(e,t,l),Gt(e,t,l)):(ee&&n&&Ks(t),t.flags|=1,qe(e,t,a,l),t.child)}function wf(e,t,a,n,l,i){return Oa(t),t.updateQueue=null,a=Tr(t,n,a,l),Sr(e),n=go(),e!==null&&!ze?(po(e,t,i),Gt(e,t,i)):(ee&&n&&Ks(t),t.flags|=1,qe(e,t,a,i),t.child)}function Sf(e,t,a,n,l){if(Oa(t),t.stateNode===null){var i=nn,s=a.contextType;typeof s=="object"&&s!==null&&(i=Be(s)),i=new a(n,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ko,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=n,i.state=t.memoizedState,i.refs={},io(t),s=a.contextType,i.context=typeof s=="object"&&s!==null?Be(s):nn,i.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(No(t,a,s,n),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&ko.enqueueReplaceState(i,i.state,null),el(t,n,i,l),Pn(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,m=Ga(a,r);i.props=m;var x=i.context,E=a.contextType;s=nn,typeof E=="object"&&E!==null&&(s=Be(E));var j=a.getDerivedStateFromProps;E=typeof j=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,E||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||x!==s)&&uf(t,i,n,s),aa=!1;var w=t.memoizedState;i.state=w,el(t,n,i,l),Pn(),x=t.memoizedState,r||w!==x||aa?(typeof j=="function"&&(No(t,a,j,n),x=t.memoizedState),(m=aa||of(t,a,m,n,w,x,s))?(E||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=x),i.props=n,i.state=x,i.context=s,n=m):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{i=t.stateNode,so(e,t),s=t.memoizedProps,E=Ga(a,s),i.props=E,j=t.pendingProps,w=i.context,x=a.contextType,m=nn,typeof x=="object"&&x!==null&&(m=Be(x)),r=a.getDerivedStateFromProps,(x=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==j||w!==m)&&uf(t,i,n,m),aa=!1,w=t.memoizedState,i.state=w,el(t,n,i,l),Pn();var S=t.memoizedState;s!==j||w!==S||aa||e!==null&&e.dependencies!==null&&ei(e.dependencies)?(typeof r=="function"&&(No(t,a,r,n),S=t.memoizedState),(E=aa||of(t,a,E,n,w,S,m)||e!==null&&e.dependencies!==null&&ei(e.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(n,S,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(n,S,m)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=S),i.props=n,i.state=S,i.context=m,n=E):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&w===e.memoizedState||(t.flags|=1024),n=!1)}return i=n,bi(e,t),n=(t.flags&128)!==0,i||n?(i=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&n?(t.child=Ha(t,e.child,null,l),t.child=Ha(t,null,a,l)):qe(e,t,a,l),t.memoizedState=i.state,e=t.child):e=Gt(e,t,l),e}function Tf(e,t,a,n){return ka(),t.flags|=256,qe(e,t,a,n),t.child}var Ro={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Uo(e){return{baseLanes:e,cachePool:fr()}}function Ho(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=ut),e}function Ef(e,t,a){var n=t.pendingProps,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(Ee.current&2)!==0),s&&(l=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ee){if(l?ia(t):sa(),(e=ye)?(e=Dd(e,pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:$t!==null?{id:At,overflow:Mt}:null,retryLane:536870912,hydrationErrors:null},a=ar(e),a.return=t,t.child=a,Ge=t,ye=null)):e=null,e===null)throw ea(t);return bu(e)?t.lanes=32:t.lanes=536870912,null}var r=n.children;return n=n.fallback,l?(sa(),l=t.mode,r=xi({mode:"hidden",children:r},l),n=Na(n,l,a,null),r.return=t,n.return=t,r.sibling=n,t.child=r,n=t.child,n.memoizedState=Uo(a),n.childLanes=Ho(e,s,a),t.memoizedState=Ro,il(null,n)):(ia(t),Lo(t,r))}var m=e.memoizedState;if(m!==null&&(r=m.dehydrated,r!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=Go(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),r=n.fallback,l=t.mode,n=xi({mode:"visible",children:n.children},l),r=Na(r,l,a,null),r.flags|=2,n.return=t,r.return=t,n.sibling=r,t.child=n,Ha(t,e.child,null,a),n=t.child,n.memoizedState=Uo(a),n.childLanes=Ho(e,s,a),t.memoizedState=Ro,t=il(null,n));else if(ia(t),bu(r)){if(s=r.nextSibling&&r.nextSibling.dataset,s)var x=s.dgst;s=x,n=Error(u(419)),n.stack="",n.digest=s,Jn({value:n,source:null,stack:null}),t=Go(e,t,a)}else if(ze||un(e,t,a,!1),s=(a&e.childLanes)!==0,ze||s){if(s=de,s!==null&&(n=cc(s,a),n!==0&&n!==m.retryLane))throw m.retryLane=n,za(e,n),Pe(s,e,n),Oo;vu(r)||zi(),t=Go(e,t,a)}else vu(r)?(t.flags|=192,t.child=e.child,t=null):(e=m.treeContext,ye=vt(r.nextSibling),Ge=t,ee=!0,Pt=null,pt=!1,e!==null&&ir(t,e),t=Lo(t,n.children),t.flags|=4096);return t}return l?(sa(),r=n.fallback,l=t.mode,m=e.child,x=m.sibling,n=Ot(m,{mode:"hidden",children:n.children}),n.subtreeFlags=m.subtreeFlags&65011712,x!==null?r=Ot(x,r):(r=Na(r,l,a,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,il(null,n),n=t.child,r=e.child.memoizedState,r===null?r=Uo(a):(l=r.cachePool,l!==null?(m=je._currentValue,l=l.parent!==m?{parent:m,pool:m}:l):l=fr(),r={baseLanes:r.baseLanes|a,cachePool:l}),n.memoizedState=r,n.childLanes=Ho(e,s,a),t.memoizedState=Ro,il(e.child,n)):(ia(t),a=e.child,e=a.sibling,a=Ot(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function Lo(e,t){return t=xi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function xi(e,t){return e=lt(22,e,null,t),e.lanes=0,e}function Go(e,t,a){return Ha(t,e.child,null,a),e=Lo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Af(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ps(e.return,t,a)}function Bo(e,t,a,n,l,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:l,treeForkCount:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=l,s.treeForkCount=i)}function Mf(e,t,a){var n=t.pendingProps,l=n.revealOrder,i=n.tail;n=n.children;var s=Ee.current,r=(s&2)!==0;if(r?(s=s&1|2,t.flags|=128):s&=1,ie(Ee,s),qe(e,t,n,a),n=ee?Qn:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Af(e,a,t);else if(e.tag===19)Af(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(a=t.child,l=null;a!==null;)e=a.alternate,e!==null&&ui(e)===null&&(l=a),a=a.sibling;a=l,a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),Bo(t,!1,l,a,i,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ui(e)===null){t.child=l;break}e=l.sibling,l.sibling=a,a=l,l=e}Bo(t,!0,a,null,i,n);break;case"together":Bo(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(un(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,a=Ot(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ot(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function qo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ei(e)))}function jg(e,t,a){switch(t.tag){case 3:kl(t,t.stateNode.containerInfo),ta(t,je,e.memoizedState.cache),ka();break;case 27:case 5:rs(t);break;case 4:kl(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Ef(e,t,a):(ia(t),e=Gt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var l=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(un(e,t,a,!1),n=(a&t.childLanes)!==0),l){if(n)return Mf(e,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ie(Ee,Ee.current),n)break;return null;case 22:return t.lanes=0,vf(e,t,a,t.pendingProps);case 24:ta(t,je,e.memoizedState.cache)}return Gt(e,t,a)}function jf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!qo(e,a)&&(t.flags&128)===0)return ze=!1,jg(e,t,a);ze=(e.flags&131072)!==0}else ze=!1,ee&&(t.flags&1048576)!==0&&lr(t,Qn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=Ra(t.elementType),t.type=e,typeof e=="function")Xs(e)?(n=Ga(e,n),t.tag=1,t=Sf(null,t,e,n,a)):(t.tag=0,t=_o(null,t,e,n,a));else{if(e!=null){var l=e.$$typeof;if(l===J){t.tag=11,t=gf(null,t,e,n,a);break e}else if(l===Oe){t.tag=14,t=pf(null,t,e,n,a);break e}}throw t=kn(e)||e,Error(u(306,t,""))}}return t;case 0:return _o(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,l=Ga(n,t.pendingProps),Sf(e,t,n,l,a);case 3:e:{if(kl(t,t.stateNode.containerInfo),e===null)throw Error(u(387));n=t.pendingProps;var i=t.memoizedState;l=i.element,so(e,t),el(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,je,n),n!==i.cache&&eo(t,[je],a,!0),Pn(),n=s.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Tf(e,t,n,a);break e}else if(n!==l){l=ht(Error(u(424)),t),Jn(l),t=Tf(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ye=vt(e.firstChild),Ge=t,ee=!0,Pt=null,pt=!0,a=yr(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ka(),n===l){t=Gt(e,t,a);break e}qe(e,t,n,a)}t=t.child}return t;case 26:return bi(e,t),e===null?(a=Ld(t.type,null,t.pendingProps,null))?t.memoizedState=a:ee||(a=t.type,e=t.pendingProps,n=Ui(Kt.current).createElement(a),n[Le]=t,n[Je]=e,Ve(n,a,e),Ue(n),t.stateNode=n):t.memoizedState=Ld(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rs(t),e===null&&ee&&(n=t.stateNode=Rd(t.type,t.pendingProps,Kt.current),Ge=t,pt=!0,l=ye,ma(t.type)?(xu=l,ye=vt(n.firstChild)):ye=l),qe(e,t,t.pendingProps.children,a),bi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ee&&((l=n=ye)&&(n=np(n,t.type,t.pendingProps,pt),n!==null?(t.stateNode=n,Ge=t,ye=vt(n.firstChild),pt=!1,l=!0):l=!1),l||ea(t)),rs(t),l=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,n=i.children,gu(l,i)?n=null:s!==null&&gu(l,s)&&(t.flags|=32),t.memoizedState!==null&&(l=mo(e,t,vg,null,null,a),xl._currentValue=l),bi(e,t),qe(e,t,n,a),t.child;case 6:return e===null&&ee&&((e=a=ye)&&(a=lp(a,t.pendingProps,pt),a!==null?(t.stateNode=a,Ge=t,ye=null,e=!0):e=!1),e||ea(t)),null;case 13:return Ef(e,t,a);case 4:return kl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ha(t,null,n,a):qe(e,t,n,a),t.child;case 11:return gf(e,t,t.type,t.pendingProps,a);case 7:return qe(e,t,t.pendingProps,a),t.child;case 8:return qe(e,t,t.pendingProps.children,a),t.child;case 12:return qe(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),qe(e,t,n.children,a),t.child;case 9:return l=t.type._context,n=t.pendingProps.children,Oa(t),l=Be(l),n=n(l),t.flags|=1,qe(e,t,n,a),t.child;case 14:return pf(e,t,t.type,t.pendingProps,a);case 15:return yf(e,t,t.type,t.pendingProps,a);case 19:return Mf(e,t,a);case 31:return Mg(e,t,a);case 22:return vf(e,t,a,t.pendingProps);case 24:return Oa(t),n=Be(je),e===null?(l=no(),l===null&&(l=de,i=to(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:n,cache:l},io(t),ta(t,je,l)):((e.lanes&a)!==0&&(so(e,t),el(t,null,null,a),Pn()),l=e.memoizedState,i=t.memoizedState,l.parent!==n?(l={parent:n,cache:n},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ta(t,je,n)):(n=i.cache,ta(t,je,n),n!==l.cache&&eo(t,[je],a,!0))),qe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function Bt(e){e.flags|=4}function Vo(e,t,a,n,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(ed())e.flags|=8192;else throw Ua=li,lo}else e.flags&=-16777217}function Cf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Yd(t))if(ed())e.flags|=8192;else throw Ua=li,lo}function wi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sc():536870912,e.lanes|=t,xn|=t)}function sl(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags&65011712,n|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)a|=l.lanes|l.childLanes,n|=l.subtreeFlags,n|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Cg(e,t,a){var n=t.pendingProps;switch(Is(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return ve(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ut(je),Ya(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(on(t)?Bt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fs())),ve(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(Bt(t),i!==null?(ve(t),Cf(t,i)):(ve(t),Vo(t,l,null,n,a))):i?i!==e.memoizedState?(Bt(t),ve(t),Cf(t,i)):(ve(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Bt(t),ve(t),Vo(t,l,e,n,a)),null;case 27:if(Dl(t),a=Kt.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return ve(t),null}e=Re.current,on(t)?sr(t):(e=Rd(l,n,a),t.stateNode=e,Bt(t))}return ve(t),null;case 5:if(Dl(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(!n){if(t.stateNode===null)throw Error(u(166));return ve(t),null}if(i=Re.current,on(t))sr(t);else{var s=Ui(Kt.current);switch(i){case 1:i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=s.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=s.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=s.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?i.multiple=!0:n.size&&(i.size=n.size);break;default:i=typeof n.is=="string"?s.createElement(l,{is:n.is}):s.createElement(l)}}i[Le]=t,i[Je]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)i.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=i;e:switch(Ve(i,l,n),l){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Bt(t)}}return ve(t),Vo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Bt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(u(166));if(e=Kt.current,on(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,l=Ge,l!==null)switch(l.tag){case 27:case 5:n=l.memoizedProps}e[Le]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Ed(e.nodeValue,a)),e||ea(t,!0)}else e=Ui(e).createTextNode(n),e[Le]=t,t.stateNode=e}return ve(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=on(t),a!==null){if(e===null){if(!n)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Le]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),e=!1}else a=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(st(t),t):(st(t),null);if((t.flags&128)!==0)throw Error(u(558))}return ve(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=on(t),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(u(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Le]=t}else ka(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ve(t),l=!1}else l=Fs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(st(t),t):(st(t),null)}return st(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,l=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(l=n.alternate.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==l&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),wi(t,t.updateQueue),ve(t),null);case 4:return Ya(),e===null&&ru(t.stateNode.containerInfo),ve(t),null;case 10:return Ut(t.type),ve(t),null;case 19:if(we(Ee),n=t.memoizedState,n===null)return ve(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)sl(n,!1);else{if(Te!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=ui(e),i!==null){for(t.flags|=128,sl(n,!1),e=i.updateQueue,t.updateQueue=e,wi(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)tr(a,e),a=a.sibling;return ie(Ee,Ee.current&1|2),ee&&_t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&et()>Mi&&(t.flags|=128,l=!0,sl(n,!1),t.lanes=4194304)}else{if(!l)if(e=ui(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,wi(t,e),sl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!ee)return ve(t),null}else 2*et()-n.renderingStartTime>Mi&&a!==536870912&&(t.flags|=128,l=!0,sl(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=et(),e.sibling=null,a=Ee.current,ie(Ee,l?a&1|2:a&1),ee&&_t(t,n.treeForkCount),e):(ve(t),null);case 22:case 23:return st(t),ro(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),a=t.updateQueue,a!==null&&wi(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&we(_a),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Ut(je),ve(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function zg(e,t){switch(Is(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ut(je),Ya(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Dl(t),null;case 31:if(t.memoizedState!==null){if(st(t),t.alternate===null)throw Error(u(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(st(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ka()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return we(Ee),null;case 4:return Ya(),null;case 10:return Ut(t.type),null;case 22:case 23:return st(t),ro(),e!==null&&we(_a),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ut(je),null;case 25:return null;default:return null}}function zf(e,t){switch(Is(t),t.tag){case 3:Ut(je),Ya();break;case 26:case 27:case 5:Dl(t);break;case 4:Ya();break;case 31:t.memoizedState!==null&&st(t);break;case 13:st(t);break;case 19:we(Ee);break;case 10:Ut(t.type);break;case 22:case 23:st(t),ro(),e!==null&&we(_a);break;case 24:Ut(je)}}function ol(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var l=n.next;a=l;do{if((a.tag&e)===e){n=void 0;var i=a.create,s=a.inst;n=i(),s.destroy=n}a=a.next}while(a!==l)}}catch(r){ue(t,t.return,r)}}function oa(e,t,a){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var i=l.next;n=i;do{if((n.tag&e)===e){var s=n.inst,r=s.destroy;if(r!==void 0){s.destroy=void 0,l=t;var m=a,x=r;try{x()}catch(E){ue(l,m,E)}}}n=n.next}while(n!==i)}}catch(E){ue(t,t.return,E)}}function Nf(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{br(t,a)}catch(n){ue(e,e.return,n)}}}function kf(e,t,a){a.props=Ga(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ue(e,t,n)}}function ul(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(l){ue(e,t,l)}}function jt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(l){ue(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){ue(e,t,l)}else a.current=null}function Df(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(l){ue(e,e.return,l)}}function Yo(e,t,a){try{var n=e.stateNode;Fg(n,e.type,a,t),n[Je]=t}catch(l){ue(e,e.return,l)}}function Of(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Of(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xo(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=kt));else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Xo(e,t,a),e=e.sibling;e!==null;)Xo(e,t,a),e=e.sibling}function Si(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Si(e,t,a),e=e.sibling;e!==null;)Si(e,t,a),e=e.sibling}function _f(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Ve(t,n,a),t[Le]=e,t[Je]=a}catch(i){ue(e,e.return,i)}}var qt=!1,Ne=!1,Qo=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,He=null;function Ng(e,t){if(e=e.containerInfo,hu=Yi,e=Qc(e),Ls(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var l=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var s=0,r=-1,m=-1,x=0,E=0,j=e,w=null;t:for(;;){for(var S;j!==a||l!==0&&j.nodeType!==3||(r=s+l),j!==i||n!==0&&j.nodeType!==3||(m=s+n),j.nodeType===3&&(s+=j.nodeValue.length),(S=j.firstChild)!==null;)w=j,j=S;for(;;){if(j===e)break t;if(w===a&&++x===l&&(r=s),w===i&&++E===n&&(m=s),(S=j.nextSibling)!==null)break;j=w,w=j.parentNode}j=S}a=r===-1||m===-1?null:{start:r,end:m}}else a=null}a=a||{start:0,end:0}}else a=null;for(mu={focusedElem:e,selectionRange:a},Yi=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)l=e[a],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,l=i.memoizedProps,i=i.memoizedState,n=a.stateNode;try{var G=Ga(a.type,l);e=n.getSnapshotBeforeUpdate(G,i),n.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ue(a,a.return,Z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)yu(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":yu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Uf(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Yt(e,a),n&4&&ol(5,a);break;case 1:if(Yt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ue(a,a.return,s)}else{var l=Ga(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ue(a,a.return,s)}}n&64&&Nf(a),n&512&&ul(a,a.return);break;case 3:if(Yt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{br(e,t)}catch(s){ue(a,a.return,s)}}break;case 27:t===null&&n&4&&_f(a);case 26:case 5:Yt(e,a),t===null&&n&4&&Df(a),n&512&&ul(a,a.return);break;case 12:Yt(e,a);break;case 31:Yt(e,a),n&4&&Gf(e,a);break;case 13:Yt(e,a),n&4&&Bf(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gg.bind(null,a),ip(e,a))));break;case 22:if(n=a.memoizedState!==null||qt,!n){t=t!==null&&t.memoizedState!==null||Ne,l=qt;var i=Ne;qt=n,(Ne=t)&&!i?Zt(e,a,(a.subtreeFlags&8772)!==0):Yt(e,a),qt=l,Ne=i}break;case 30:break;default:Yt(e,a)}}function Hf(e){var t=e.alternate;t!==null&&(e.alternate=null,Hf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ws(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var be=null,Ie=!1;function Vt(e,t,a){for(a=a.child;a!==null;)Lf(e,t,a),a=a.sibling}function Lf(e,t,a){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Dn,a)}catch{}switch(a.tag){case 26:Ne||jt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||jt(a,t);var n=be,l=Ie;ma(a.type)&&(be=a.stateNode,Ie=!1),Vt(e,t,a),yl(a.stateNode),be=n,Ie=l;break;case 5:Ne||jt(a,t);case 6:if(n=be,l=Ie,be=null,Vt(e,t,a),be=n,Ie=l,be!==null)if(Ie)try{(be.nodeType===9?be.body:be.nodeName==="HTML"?be.ownerDocument.body:be).removeChild(a.stateNode)}catch(i){ue(a,t,i)}else try{be.removeChild(a.stateNode)}catch(i){ue(a,t,i)}break;case 18:be!==null&&(Ie?(e=be,Nd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Cn(e)):Nd(be,a.stateNode));break;case 4:n=be,l=Ie,be=a.stateNode.containerInfo,Ie=!0,Vt(e,t,a),be=n,Ie=l;break;case 0:case 11:case 14:case 15:oa(2,a,t),Ne||oa(4,a,t),Vt(e,t,a);break;case 1:Ne||(jt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&kf(a,t,n)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:Ne=(n=Ne)||a.memoizedState!==null,Vt(e,t,a),Ne=n;break;default:Vt(e,t,a)}}function Gf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Cn(e)}catch(a){ue(t,t.return,a)}}}function Bf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Cn(e)}catch(a){ue(t,t.return,a)}}function kg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rf),t;default:throw Error(u(435,e.tag))}}function Ti(e,t){var a=kg(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var l=Bg.bind(null,e,n);n.then(l,l)}})}function We(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var l=a[n],i=e,s=t,r=s;e:for(;r!==null;){switch(r.tag){case 27:if(ma(r.type)){be=r.stateNode,Ie=!1;break e}break;case 5:be=r.stateNode,Ie=!1;break e;case 3:case 4:be=r.stateNode.containerInfo,Ie=!0;break e}r=r.return}if(be===null)throw Error(u(160));Lf(i,s,l),be=null,Ie=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)qf(t,e),t=t.sibling}var wt=null;function qf(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:We(t,e),Fe(e),n&4&&(oa(3,e,e.return),ol(3,e),oa(5,e,e.return));break;case 1:We(t,e),Fe(e),n&512&&(Ne||a===null||jt(a,a.return)),n&64&&qt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var l=wt;if(We(t,e),Fe(e),n&512&&(Ne||a===null||jt(a,a.return)),n&4){var i=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,l=l.ownerDocument||l;t:switch(n){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Rn]||i[Le]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(n),l.head.insertBefore(i,l.querySelector("head > title"))),Ve(i,n,a),i[Le]=e,Ue(i),n=i;break e;case"link":var s=qd("link","href",l).get(n+(a.href||""));if(s){for(var r=0;r<s.length;r++)if(i=s[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(r,1);break t}}i=l.createElement(n),Ve(i,n,a),l.head.appendChild(i);break;case"meta":if(s=qd("meta","content",l).get(n+(a.content||""))){for(r=0;r<s.length;r++)if(i=s[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(r,1);break t}}i=l.createElement(n),Ve(i,n,a),l.head.appendChild(i);break;default:throw Error(u(468,n))}i[Le]=e,Ue(i),n=i}e.stateNode=n}else Vd(l,e.type,e.stateNode);else e.stateNode=Bd(l,n,e.memoizedProps);else i!==n?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,n===null?Vd(l,e.type,e.stateNode):Bd(l,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:We(t,e),Fe(e),n&512&&(Ne||a===null||jt(a,a.return)),a!==null&&n&4&&Yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(We(t,e),Fe(e),n&512&&(Ne||a===null||jt(a,a.return)),e.flags&32){l=e.stateNode;try{Wa(l,"")}catch(G){ue(e,e.return,G)}}n&4&&e.stateNode!=null&&(l=e.memoizedProps,Yo(e,l,a!==null?a.memoizedProps:l)),n&1024&&(Qo=!0);break;case 6:if(We(t,e),Fe(e),n&4){if(e.stateNode===null)throw Error(u(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(G){ue(e,e.return,G)}}break;case 3:if(Gi=null,l=wt,wt=Hi(t.containerInfo),We(t,e),wt=l,Fe(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Cn(t.containerInfo)}catch(G){ue(e,e.return,G)}Qo&&(Qo=!1,Vf(e));break;case 4:n=wt,wt=Hi(e.stateNode.containerInfo),We(t,e),Fe(e),wt=n;break;case 12:We(t,e),Fe(e);break;case 31:We(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 13:We(t,e),Fe(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ai=et()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 22:l=e.memoizedState!==null;var m=a!==null&&a.memoizedState!==null,x=qt,E=Ne;if(qt=x||l,Ne=E||m,We(t,e),Ne=E,qt=x,Fe(e),n&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(a===null||m||qt||Ne||Ba(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){m=a=t;try{if(i=m.stateNode,l)s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{r=m.stateNode;var j=m.memoizedProps.style,w=j!=null&&j.hasOwnProperty("display")?j.display:null;r.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(G){ue(m,m.return,G)}}}else if(t.tag===6){if(a===null){m=t;try{m.stateNode.nodeValue=l?"":m.memoizedProps}catch(G){ue(m,m.return,G)}}}else if(t.tag===18){if(a===null){m=t;try{var S=m.stateNode;l?kd(S,!0):kd(m.stateNode,!1)}catch(G){ue(m,m.return,G)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ti(e,a))));break;case 19:We(t,e),Fe(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ti(e,n)));break;case 30:break;case 21:break;default:We(t,e),Fe(e)}}function Fe(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Of(n)){a=n;break}n=n.return}if(a==null)throw Error(u(160));switch(a.tag){case 27:var l=a.stateNode,i=Zo(e);Si(e,i,l);break;case 5:var s=a.stateNode;a.flags&32&&(Wa(s,""),a.flags&=-33);var r=Zo(e);Si(e,r,s);break;case 3:case 4:var m=a.stateNode.containerInfo,x=Zo(e);Xo(e,x,m);break;default:throw Error(u(161))}}catch(E){ue(e,e.return,E)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Vf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Yt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Uf(e,t.alternate,t),t=t.sibling}function Ba(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),Ba(t);break;case 1:jt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&kf(t,t.return,a),Ba(t);break;case 27:yl(t.stateNode);case 26:case 5:jt(t,t.return),Ba(t);break;case 22:t.memoizedState===null&&Ba(t);break;case 30:Ba(t);break;default:Ba(t)}e=e.sibling}}function Zt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,l=e,i=t,s=i.flags;switch(i.tag){case 0:case 11:case 15:Zt(l,i,a),ol(4,i);break;case 1:if(Zt(l,i,a),n=i,l=n.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(x){ue(n,n.return,x)}if(n=i,l=n.updateQueue,l!==null){var r=n.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)vr(m[l],r)}catch(x){ue(n,n.return,x)}}a&&s&64&&Nf(i),ul(i,i.return);break;case 27:_f(i);case 26:case 5:Zt(l,i,a),a&&n===null&&s&4&&Df(i),ul(i,i.return);break;case 12:Zt(l,i,a);break;case 31:Zt(l,i,a),a&&s&4&&Gf(l,i);break;case 13:Zt(l,i,a),a&&s&4&&Bf(l,i);break;case 22:i.memoizedState===null&&Zt(l,i,a),ul(i,i.return);break;case 30:break;default:Zt(l,i,a)}t=t.sibling}}function Jo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kn(a))}function Ko(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Yf(e,t,a,n),t=t.sibling}function Yf(e,t,a,n){var l=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),l&2048&&ol(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Kn(e)));break;case 12:if(l&2048){St(e,t,a,n),e=t.stateNode;try{var i=t.memoizedProps,s=i.id,r=i.onPostCommit;typeof r=="function"&&r(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(m){ue(t,t.return,m)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:i=t.stateNode,s=t.alternate,t.memoizedState!==null?i._visibility&2?St(e,t,a,n):cl(e,t):i._visibility&2?St(e,t,a,n):(i._visibility|=2,yn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Jo(s,t);break;case 24:St(e,t,a,n),l&2048&&Ko(t.alternate,t);break;default:St(e,t,a,n)}}function yn(e,t,a,n,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,s=t,r=a,m=n,x=s.flags;switch(s.tag){case 0:case 11:case 15:yn(i,s,r,m,l),ol(8,s);break;case 23:break;case 22:var E=s.stateNode;s.memoizedState!==null?E._visibility&2?yn(i,s,r,m,l):cl(i,s):(E._visibility|=2,yn(i,s,r,m,l)),l&&x&2048&&Jo(s.alternate,s);break;case 24:yn(i,s,r,m,l),l&&x&2048&&Ko(s.alternate,s);break;default:yn(i,s,r,m,l)}t=t.sibling}}function cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,l=n.flags;switch(n.tag){case 22:cl(a,n),l&2048&&Jo(n.alternate,n);break;case 24:cl(a,n),l&2048&&Ko(n.alternate,n);break;default:cl(a,n)}t=t.sibling}}var rl=8192;function vn(e,t,a){if(e.subtreeFlags&rl)for(e=e.child;e!==null;)Zf(e,t,a),e=e.sibling}function Zf(e,t,a){switch(e.tag){case 26:vn(e,t,a),e.flags&rl&&e.memoizedState!==null&&yp(a,wt,e.memoizedState,e.memoizedProps);break;case 5:vn(e,t,a);break;case 3:case 4:var n=wt;wt=Hi(e.stateNode.containerInfo),vn(e,t,a),wt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=rl,rl=16777216,vn(e,t,a),rl=n):vn(e,t,a));break;default:vn(e,t,a)}}function Xf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,Jf(n,e)}Xf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qf(e),e=e.sibling}function Qf(e){switch(e.tag){case 0:case 11:case 15:fl(e),e.flags&2048&&oa(9,e,e.return);break;case 3:fl(e);break;case 12:fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ei(e)):fl(e);break;default:fl(e)}}function Ei(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];He=n,Jf(n,e)}Xf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),Ei(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ei(t));break;default:Ei(t)}e=e.sibling}}function Jf(e,t){for(;He!==null;){var a=He;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Kn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,He=n;else e:for(a=e;He!==null;){n=He;var l=n.sibling,i=n.return;if(Hf(n),n===a){He=null;break e}if(l!==null){l.return=i,He=l;break e}He=i}}}var Dg={getCacheForType:function(e){var t=Be(je),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Be(je).controller.signal}},Og=typeof WeakMap=="function"?WeakMap:Map,le=0,de=null,W=null,$=0,oe=0,ot=null,ua=!1,bn=!1,Io=!1,Xt=0,Te=0,ca=0,qa=0,Wo=0,ut=0,xn=0,dl=null,$e=null,Fo=!1,Ai=0,Kf=0,Mi=1/0,ji=null,ra=null,De=0,fa=null,wn=null,Qt=0,$o=0,Po=null,If=null,hl=0,eu=null;function ct(){return(le&2)!==0&&$!==0?$&-$:M.T!==null?su():rc()}function Wf(){if(ut===0)if(($&536870912)===0||ee){var e=Rl;Rl<<=1,(Rl&3932160)===0&&(Rl=262144),ut=e}else ut=536870912;return e=it.current,e!==null&&(e.flags|=32),ut}function Pe(e,t,a){(e===de&&(oe===2||oe===9)||e.cancelPendingCommit!==null)&&(Sn(e,0),da(e,$,ut,!1)),_n(e,a),((le&2)===0||e!==de)&&(e===de&&((le&2)===0&&(qa|=a),Te===4&&da(e,$,ut,!1)),Ct(e))}function Ff(e,t,a){if((le&6)!==0)throw Error(u(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||On(e,t),l=n?Ug(e,t):au(e,t,!0),i=n;do{if(l===0){bn&&!n&&da(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!_g(a)){l=au(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var r=e;l=dl;var m=r.current.memoizedState.isDehydrated;if(m&&(Sn(r,s).flags|=256),s=au(r,s,!1),s!==2){if(Io&&!m){r.errorRecoveryDisabledLanes|=i,qa|=i,l=4;break e}i=$e,$e=l,i!==null&&($e===null?$e=i:$e.push.apply($e,i))}l=s}if(i=!1,l!==2)continue}}if(l===1){Sn(e,0),da(e,t,0,!0);break}e:{switch(n=e,i=l,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:da(n,t,ut,!ua);break e;case 2:$e=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(l=Ai+300-et(),10<l)){if(da(n,t,ut,!ua),Hl(n,0,!0)!==0)break e;Qt=t,n.timeoutHandle=Cd($f.bind(null,n,a,$e,ji,Fo,t,ut,qa,xn,ua,i,"Throttled",-0,0),l);break e}$f(n,a,$e,ji,Fo,t,ut,qa,xn,ua,i,null,-0,0)}}break}while(!0);Ct(e)}function $f(e,t,a,n,l,i,s,r,m,x,E,j,w,S){if(e.timeoutHandle=-1,j=t.subtreeFlags,j&8192||(j&16785408)===16785408){j={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:kt},Zf(t,i,j);var G=(i&62914560)===i?Ai-et():(i&4194048)===i?Kf-et():0;if(G=vp(j,G),G!==null){Qt=i,e.cancelPendingCommit=G(sd.bind(null,e,t,i,a,n,l,s,r,m,E,j,null,w,S)),da(e,i,s,!x);return}}sd(e,t,i,a,n,l,s,r,m)}function _g(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var l=a[n],i=l.getSnapshot;l=l.value;try{if(!nt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function da(e,t,a,n){t&=~Wo,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var l=t;0<l;){var i=31-at(l),s=1<<i;n[i]=-1,l&=~s}a!==0&&oc(e,a,t)}function Ci(){return(le&6)===0?(ml(0),!1):!0}function tu(){if(W!==null){if(oe===0)var e=W.return;else e=W,Rt=Da=null,yo(e),dn=null,Wn=0,e=W;for(;e!==null;)zf(e.alternate,e),e=e.return;W=null}}function Sn(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ep(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qt=0,tu(),de=e,W=a=Ot(e.current,null),$=t,oe=0,ot=null,ua=!1,bn=On(e,t),Io=!1,xn=ut=Wo=qa=ca=Te=0,$e=dl=null,Fo=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var l=31-at(n),i=1<<l;t|=e[l],n&=~i}return Xt=t,Il(),a}function Pf(e,t){K=null,M.H=ll,t===fn||t===ni?(t=mr(),oe=3):t===lo?(t=mr(),oe=4):oe=t===Oo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,W===null&&(Te=1,yi(e,ht(t,e.current)))}function ed(){var e=it.current;return e===null?!0:($&4194048)===$?yt===null:($&62914560)===$||($&536870912)!==0?e===yt:!1}function td(){var e=M.H;return M.H=ll,e===null?ll:e}function ad(){var e=M.A;return M.A=Dg,e}function zi(){Te=4,ua||($&4194048)!==$&&it.current!==null||(bn=!0),(ca&134217727)===0&&(qa&134217727)===0||de===null||da(de,$,ut,!1)}function au(e,t,a){var n=le;le|=2;var l=td(),i=ad();(de!==e||$!==t)&&(ji=null,Sn(e,t)),t=!1;var s=Te;e:do try{if(oe!==0&&W!==null){var r=W,m=ot;switch(oe){case 8:tu(),s=6;break e;case 3:case 2:case 9:case 6:it.current===null&&(t=!0);var x=oe;if(oe=0,ot=null,Tn(e,r,m,x),a&&bn){s=0;break e}break;default:x=oe,oe=0,ot=null,Tn(e,r,m,x)}}Rg(),s=Te;break}catch(E){Pf(e,E)}while(!0);return t&&e.shellSuspendCounter++,Rt=Da=null,le=n,M.H=l,M.A=i,W===null&&(de=null,$=0,Il()),s}function Rg(){for(;W!==null;)nd(W)}function Ug(e,t){var a=le;le|=2;var n=td(),l=ad();de!==e||$!==t?(ji=null,Mi=et()+500,Sn(e,t)):bn=On(e,t);e:do try{if(oe!==0&&W!==null){t=W;var i=ot;t:switch(oe){case 1:oe=0,ot=null,Tn(e,t,i,1);break;case 2:case 9:if(dr(i)){oe=0,ot=null,ld(t);break}t=function(){oe!==2&&oe!==9||de!==e||(oe=7),Ct(e)},i.then(t,t);break e;case 3:oe=7;break e;case 4:oe=5;break e;case 7:dr(i)?(oe=0,ot=null,ld(t)):(oe=0,ot=null,Tn(e,t,i,7));break;case 5:var s=null;switch(W.tag){case 26:s=W.memoizedState;case 5:case 27:var r=W;if(s?Yd(s):r.stateNode.complete){oe=0,ot=null;var m=r.sibling;if(m!==null)W=m;else{var x=r.return;x!==null?(W=x,Ni(x)):W=null}break t}}oe=0,ot=null,Tn(e,t,i,5);break;case 6:oe=0,ot=null,Tn(e,t,i,6);break;case 8:tu(),Te=6;break e;default:throw Error(u(462))}}Hg();break}catch(E){Pf(e,E)}while(!0);return Rt=Da=null,M.H=n,M.A=l,le=a,W!==null?0:(de=null,$=0,Il(),Te)}function Hg(){for(;W!==null&&!sm();)nd(W)}function nd(e){var t=jf(e.alternate,e,Xt);e.memoizedProps=e.pendingProps,t===null?Ni(e):W=t}function ld(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=wf(a,t,t.pendingProps,t.type,void 0,$);break;case 11:t=wf(a,t,t.pendingProps,t.type.render,t.ref,$);break;case 5:yo(t);default:zf(a,t),t=W=tr(t,Xt),t=jf(a,t,Xt)}e.memoizedProps=e.pendingProps,t===null?Ni(e):W=t}function Tn(e,t,a,n){Rt=Da=null,yo(t),dn=null,Wn=0;var l=t.return;try{if(Ag(e,l,t,a,$)){Te=1,yi(e,ht(a,e.current)),W=null;return}}catch(i){if(l!==null)throw W=l,i;Te=1,yi(e,ht(a,e.current)),W=null;return}t.flags&32768?(ee||n===1?e=!0:bn||($&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=it.current,n!==null&&n.tag===13&&(n.flags|=16384))),id(t,e)):Ni(t)}function Ni(e){var t=e;do{if((t.flags&32768)!==0){id(t,ua);return}e=t.return;var a=Cg(t.alternate,t,Xt);if(a!==null){W=a;return}if(t=t.sibling,t!==null){W=t;return}W=t=e}while(t!==null);Te===0&&(Te=5)}function id(e,t){do{var a=zg(e.alternate,e);if(a!==null){a.flags&=32767,W=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){W=e;return}W=e=a}while(e!==null);Te=6,W=null}function sd(e,t,a,n,l,i,s,r,m){e.cancelPendingCommit=null;do ki();while(De!==0);if((le&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=Ys,pm(e,a,i,s,r,m),e===de&&(W=de=null,$=0),wn=t,fa=e,Qt=a,$o=i,Po=l,If=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qg(Ol,function(){return fd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,l=H.p,H.p=2,s=le,le|=4;try{Ng(e,t,a)}finally{le=s,H.p=l,M.T=n}}De=1,od(),ud(),cd()}}function od(){if(De===1){De=0;var e=fa,t=wn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=H.p;H.p=2;var l=le;le|=4;try{qf(t,e);var i=mu,s=Qc(e.containerInfo),r=i.focusedElem,m=i.selectionRange;if(s!==r&&r&&r.ownerDocument&&Xc(r.ownerDocument.documentElement,r)){if(m!==null&&Ls(r)){var x=m.start,E=m.end;if(E===void 0&&(E=x),"selectionStart"in r)r.selectionStart=x,r.selectionEnd=Math.min(E,r.value.length);else{var j=r.ownerDocument||document,w=j&&j.defaultView||window;if(w.getSelection){var S=w.getSelection(),G=r.textContent.length,Z=Math.min(m.start,G),fe=m.end===void 0?Z:Math.min(m.end,G);!S.extend&&Z>fe&&(s=fe,fe=Z,Z=s);var y=Zc(r,Z),p=Zc(r,fe);if(y&&p&&(S.rangeCount!==1||S.anchorNode!==y.node||S.anchorOffset!==y.offset||S.focusNode!==p.node||S.focusOffset!==p.offset)){var v=j.createRange();v.setStart(y.node,y.offset),S.removeAllRanges(),Z>fe?(S.addRange(v),S.extend(p.node,p.offset)):(v.setEnd(p.node,p.offset),S.addRange(v))}}}}for(j=[],S=r;S=S.parentNode;)S.nodeType===1&&j.push({element:S,left:S.scrollLeft,top:S.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<j.length;r++){var A=j[r];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Yi=!!hu,mu=hu=null}finally{le=l,H.p=n,M.T=a}}e.current=t,De=2}}function ud(){if(De===2){De=0;var e=fa,t=wn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=H.p;H.p=2;var l=le;le|=4;try{Uf(e,t.alternate,t)}finally{le=l,H.p=n,M.T=a}}De=3}}function cd(){if(De===4||De===3){De=0,om();var e=fa,t=wn,a=Qt,n=If;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?De=5:(De=0,wn=fa=null,rd(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(ra=null),bs(a),t=t.stateNode,tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Dn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=M.T,l=H.p,H.p=2,M.T=null;try{for(var i=e.onRecoverableError,s=0;s<n.length;s++){var r=n[s];i(r.value,{componentStack:r.stack})}}finally{M.T=t,H.p=l}}(Qt&3)!==0&&ki(),Ct(e),l=e.pendingLanes,(a&261930)!==0&&(l&42)!==0?e===eu?hl++:(hl=0,eu=e):hl=0,ml(0)}}function rd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Kn(t)))}function ki(){return od(),ud(),cd(),fd()}function fd(){if(De!==5)return!1;var e=fa,t=$o;$o=0;var a=bs(Qt),n=M.T,l=H.p;try{H.p=32>a?32:a,M.T=null,a=Po,Po=null;var i=fa,s=Qt;if(De=0,wn=fa=null,Qt=0,(le&6)!==0)throw Error(u(331));var r=le;if(le|=4,Qf(i.current),Yf(i,i.current,s,a),le=r,ml(0,!1),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Dn,i)}catch{}return!0}finally{H.p=l,M.T=n,rd(e,t)}}function dd(e,t,a){t=ht(a,t),t=Do(e.stateNode,t,2),e=la(e,t,2),e!==null&&(_n(e,2),Ct(e))}function ue(e,t,a){if(e.tag===3)dd(e,e,a);else for(;t!==null;){if(t.tag===3){dd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ra===null||!ra.has(n))){e=ht(a,e),a=hf(2),n=la(t,a,2),n!==null&&(mf(a,n,t,e),_n(n,2),Ct(n));break}}t=t.return}}function nu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Og;var l=new Set;n.set(t,l)}else l=n.get(t),l===void 0&&(l=new Set,n.set(t,l));l.has(a)||(Io=!0,l.add(a),e=Lg.bind(null,e,t,a),t.then(e,e))}function Lg(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,de===e&&($&a)===a&&(Te===4||Te===3&&($&62914560)===$&&300>et()-Ai?(le&2)===0&&Sn(e,0):Wo|=a,xn===$&&(xn=0)),Ct(e)}function hd(e,t){t===0&&(t=sc()),e=za(e,t),e!==null&&(_n(e,t),Ct(e))}function Gg(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),hd(e,a)}function Bg(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,l=e.memoizedState;l!==null&&(a=l.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(u(314))}n!==null&&n.delete(t),hd(e,a)}function qg(e,t){return gs(e,t)}var Di=null,En=null,lu=!1,Oi=!1,iu=!1,ha=0;function Ct(e){e!==En&&e.next===null&&(En===null?Di=En=e:En=En.next=e),Oi=!0,lu||(lu=!0,Yg())}function ml(e,t){if(!iu&&Oi){iu=!0;do for(var a=!1,n=Di;n!==null;){if(e!==0){var l=n.pendingLanes;if(l===0)var i=0;else{var s=n.suspendedLanes,r=n.pingedLanes;i=(1<<31-at(42|e)+1)-1,i&=l&~(s&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,yd(n,i))}else i=$,i=Hl(n,n===de?i:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(i&3)===0||On(n,i)||(a=!0,yd(n,i));n=n.next}while(a);iu=!1}}function Vg(){md()}function md(){Oi=lu=!1;var e=0;ha!==0&&Pg()&&(e=ha);for(var t=et(),a=null,n=Di;n!==null;){var l=n.next,i=gd(n,t);i===0?(n.next=null,a===null?Di=l:a.next=l,l===null&&(En=a)):(a=n,(e!==0||(i&3)!==0)&&(Oi=!0)),n=l}De!==0&&De!==5||ml(e),ha!==0&&(ha=0)}function gd(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var s=31-at(i),r=1<<s,m=l[s];m===-1?((r&a)===0||(r&n)!==0)&&(l[s]=gm(r,t)):m<=t&&(e.expiredLanes|=r),i&=~r}if(t=de,a=$,a=Hl(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(oe===2||oe===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&ps(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||On(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&ps(n),bs(a)){case 2:case 8:a=lc;break;case 32:a=Ol;break;case 268435456:a=ic;break;default:a=Ol}return n=pd.bind(null,e),a=gs(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&ps(n),e.callbackPriority=2,e.callbackNode=null,2}function pd(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ki()&&e.callbackNode!==a)return null;var n=$;return n=Hl(e,e===de?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Ff(e,n,t),gd(e,et()),e.callbackNode!=null&&e.callbackNode===a?pd.bind(null,e):null)}function yd(e,t){if(ki())return null;Ff(e,t,!0)}function Yg(){tp(function(){(le&6)!==0?gs(nc,Vg):md()})}function su(){if(ha===0){var e=cn;e===0&&(e=_l,_l<<=1,(_l&261888)===0&&(_l=256)),ha=e}return ha}function vd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(""+e)}function bd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Zg(e,t,a,n,l){if(t==="submit"&&a&&a.stateNode===l){var i=vd((l[Je]||null).action),s=n.submitter;s&&(t=(t=s[Je]||null)?vd(t.formAction):s.getAttribute("formAction"),t!==null&&(i=t,s=null));var r=new Xl("action","action",null,n,l);e.push({event:r,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ha!==0){var m=s?bd(l,s):new FormData(l);Mo(a,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(r.preventDefault(),m=s?bd(l,s):new FormData(l),Mo(a,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var ou=0;ou<Vs.length;ou++){var uu=Vs[ou],Xg=uu.toLowerCase(),Qg=uu[0].toUpperCase()+uu.slice(1);xt(Xg,"on"+Qg)}xt(Ic,"onAnimationEnd"),xt(Wc,"onAnimationIteration"),xt(Fc,"onAnimationStart"),xt("dblclick","onDoubleClick"),xt("focusin","onFocus"),xt("focusout","onBlur"),xt(ug,"onTransitionRun"),xt(cg,"onTransitionStart"),xt(rg,"onTransitionCancel"),xt($c,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gl));function xd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],l=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var s=n.length-1;0<=s;s--){var r=n[s],m=r.instance,x=r.currentTarget;if(r=r.listener,m!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=x;try{i(l)}catch(E){Kl(E)}l.currentTarget=null,i=m}else for(s=0;s<n.length;s++){if(r=n[s],m=r.instance,x=r.currentTarget,r=r.listener,m!==i&&l.isPropagationStopped())break e;i=r,l.currentTarget=x;try{i(l)}catch(E){Kl(E)}l.currentTarget=null,i=m}}}}function F(e,t){var a=t[xs];a===void 0&&(a=t[xs]=new Set);var n=e+"__bubble";a.has(n)||(wd(t,e,2,!1),a.add(n))}function cu(e,t,a){var n=0;t&&(n|=4),wd(a,e,n,t)}var _i="_reactListening"+Math.random().toString(36).slice(2);function ru(e){if(!e[_i]){e[_i]=!0,hc.forEach(function(a){a!=="selectionchange"&&(Jg.has(a)||cu(a,!1,e),cu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[_i]||(t[_i]=!0,cu("selectionchange",!1,t))}}function wd(e,t,a,n){switch(Wd(t)){case 2:var l=wp;break;case 8:l=Sp;break;default:l=Au}a=l.bind(null,t,a,e),l=void 0,!zs||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),n?l!==void 0?e.addEventListener(t,a,{capture:!0,passive:l}):e.addEventListener(t,a,!0):l!==void 0?e.addEventListener(t,a,{passive:l}):e.addEventListener(t,a,!1)}function fu(e,t,a,n,l){var i=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var r=n.stateNode.containerInfo;if(r===l)break;if(s===4)for(s=n.return;s!==null;){var m=s.tag;if((m===3||m===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;r!==null;){if(s=Xa(r),s===null)return;if(m=s.tag,m===5||m===6||m===26||m===27){n=i=s;continue e}r=r.parentNode}}n=n.return}Ac(function(){var x=i,E=js(a),j=[];e:{var w=Pc.get(e);if(w!==void 0){var S=Xl,G=e;switch(e){case"keypress":if(Yl(a)===0)break e;case"keydown":case"keyup":S=Bm;break;case"focusin":G="focus",S=Os;break;case"focusout":G="blur",S=Os;break;case"beforeblur":case"afterblur":S=Os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=Cc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=Cm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Ym;break;case Ic:case Wc:case Fc:S=km;break;case $c:S=Xm;break;case"scroll":case"scrollend":S=Mm;break;case"wheel":S=Jm;break;case"copy":case"cut":case"paste":S=Om;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=Nc;break;case"toggle":case"beforetoggle":S=Im}var Z=(t&4)!==0,fe=!Z&&(e==="scroll"||e==="scrollend"),y=Z?w!==null?w+"Capture":null:w;Z=[];for(var p=x,v;p!==null;){var A=p;if(v=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||v===null||y===null||(A=Hn(p,y),A!=null&&Z.push(pl(p,A,v))),fe)break;p=p.return}0<Z.length&&(w=new S(w,G,null,a,E),j.push({event:w,listeners:Z}))}}if((t&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",w&&a!==Ms&&(G=a.relatedTarget||a.fromElement)&&(Xa(G)||G[Za]))break e;if((S||w)&&(w=E.window===E?E:(w=E.ownerDocument)?w.defaultView||w.parentWindow:window,S?(G=a.relatedTarget||a.toElement,S=x,G=G?Xa(G):null,G!==null&&(fe=g(G),Z=G.tag,G!==fe||Z!==5&&Z!==27&&Z!==6)&&(G=null)):(S=null,G=x),S!==G)){if(Z=Cc,A="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Nc,A="onPointerLeave",y="onPointerEnter",p="pointer"),fe=S==null?w:Un(S),v=G==null?w:Un(G),w=new Z(A,p+"leave",S,a,E),w.target=fe,w.relatedTarget=v,A=null,Xa(E)===x&&(Z=new Z(y,p+"enter",G,a,E),Z.target=v,Z.relatedTarget=fe,A=Z),fe=A,S&&G)t:{for(Z=Kg,y=S,p=G,v=0,A=y;A;A=Z(A))v++;A=0;for(var V=p;V;V=Z(V))A++;for(;0<v-A;)y=Z(y),v--;for(;0<A-v;)p=Z(p),A--;for(;v--;){if(y===p||p!==null&&y===p.alternate){Z=y;break t}y=Z(y),p=Z(p)}Z=null}else Z=null;S!==null&&Sd(j,w,S,Z,!1),G!==null&&fe!==null&&Sd(j,fe,G,Z,!0)}}e:{if(w=x?Un(x):window,S=w.nodeName&&w.nodeName.toLowerCase(),S==="select"||S==="input"&&w.type==="file")var ae=Lc;else if(Uc(w))if(Gc)ae=ig;else{ae=ng;var q=ag}else S=w.nodeName,!S||S.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?x&&As(x.elementType)&&(ae=Lc):ae=lg;if(ae&&(ae=ae(e,x))){Hc(j,ae,a,E);break e}q&&q(e,w,x),e==="focusout"&&x&&w.type==="number"&&x.memoizedProps.value!=null&&Es(w,"number",w.value)}switch(q=x?Un(x):window,e){case"focusin":(Uc(q)||q.contentEditable==="true")&&(en=q,Gs=x,Xn=null);break;case"focusout":Xn=Gs=en=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Jc(j,a,E);break;case"selectionchange":if(og)break;case"keydown":case"keyup":Jc(j,a,E)}var I;if(Rs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Pa?_c(e,a)&&(P="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(P="onCompositionStart");P&&(kc&&a.locale!=="ko"&&(Pa||P!=="onCompositionStart"?P==="onCompositionEnd"&&Pa&&(I=Mc()):(Ft=E,Ns="value"in Ft?Ft.value:Ft.textContent,Pa=!0)),q=Ri(x,P),0<q.length&&(P=new zc(P,e,null,a,E),j.push({event:P,listeners:q}),I?P.data=I:(I=Rc(a),I!==null&&(P.data=I)))),(I=Fm?$m(e,a):Pm(e,a))&&(P=Ri(x,"onBeforeInput"),0<P.length&&(q=new zc("onBeforeInput","beforeinput",null,a,E),j.push({event:q,listeners:P}),q.data=I)),Zg(j,e,x,a,E)}xd(j,t)})}function pl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ri(e,t){for(var a=t+"Capture",n=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Hn(e,a),l!=null&&n.unshift(pl(e,l,i)),l=Hn(e,t),l!=null&&n.push(pl(e,l,i))),e.tag===3)return n;e=e.return}return[]}function Kg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Sd(e,t,a,n,l){for(var i=t._reactName,s=[];a!==null&&a!==n;){var r=a,m=r.alternate,x=r.stateNode;if(r=r.tag,m!==null&&m===n)break;r!==5&&r!==26&&r!==27||x===null||(m=x,l?(x=Hn(a,i),x!=null&&s.unshift(pl(a,x,m))):l||(x=Hn(a,i),x!=null&&s.push(pl(a,x,m)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var Ig=/\r\n?/g,Wg=/\u0000|\uFFFD/g;function Td(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Wg,"")}function Ed(e,t){return t=Td(t),Td(e)===t}function re(e,t,a,n,l,i){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Wa(e,""+n);break;case"className":Gl(e,"class",n);break;case"tabIndex":Gl(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(e,a,n);break;case"style":Tc(e,n,i);break;case"data":if(t!=="object"){Gl(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&re(e,t,"name",l.name,l,null),re(e,t,"formEncType",l.formEncType,l,null),re(e,t,"formMethod",l.formMethod,l,null),re(e,t,"formTarget",l.formTarget,l,null)):(re(e,t,"encType",l.encType,l,null),re(e,t,"method",l.method,l,null),re(e,t,"target",l.target,l,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=ql(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=kt);break;case"onScroll":n!=null&&F("scroll",e);break;case"onScrollEnd":n!=null&&F("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=ql(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":F("beforetoggle",e),F("toggle",e),Ll(e,"popover",n);break;case"xlinkActuate":Nt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Nt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Nt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Nt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Nt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Nt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Nt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Ll(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Em.get(a)||a,Ll(e,a,n))}}function du(e,t,a,n,l,i){switch(a){case"style":Tc(e,n,i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(u(61));if(a=n.__html,a!=null){if(l.children!=null)throw Error(u(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Wa(e,n):(typeof n=="number"||typeof n=="bigint")&&Wa(e,""+n);break;case"onScroll":n!=null&&F("scroll",e);break;case"onScrollEnd":n!=null&&F("scrollend",e);break;case"onClick":n!=null&&(e.onclick=kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!mc.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),t=a.slice(2,l?a.length-7:void 0),i=e[Je]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof n=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,l);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Ll(e,a,n)}}}function Ve(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",e),F("load",e);var n=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];if(s!=null)switch(i){case"src":n=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:re(e,t,i,s,a,null)}}l&&re(e,t,"srcSet",a.srcSet,a,null),n&&re(e,t,"src",a.src,a,null);return;case"input":F("invalid",e);var r=i=s=l=null,m=null,x=null;for(n in a)if(a.hasOwnProperty(n)){var E=a[n];if(E!=null)switch(n){case"name":l=E;break;case"type":s=E;break;case"checked":m=E;break;case"defaultChecked":x=E;break;case"value":i=E;break;case"defaultValue":r=E;break;case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(u(137,t));break;default:re(e,t,n,E,a,null)}}bc(e,i,r,m,x,s,l,!1);return;case"select":F("invalid",e),n=s=i=null;for(l in a)if(a.hasOwnProperty(l)&&(r=a[l],r!=null))switch(l){case"value":i=r;break;case"defaultValue":s=r;break;case"multiple":n=r;default:re(e,t,l,r,a,null)}t=i,a=s,e.multiple=!!n,t!=null?Ia(e,!!n,t,!1):a!=null&&Ia(e,!!n,a,!0);return;case"textarea":F("invalid",e),i=l=n=null;for(s in a)if(a.hasOwnProperty(s)&&(r=a[s],r!=null))switch(s){case"value":n=r;break;case"defaultValue":l=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(u(91));break;default:re(e,t,s,r,a,null)}wc(e,n,l,i);return;case"option":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:re(e,t,m,n,a,null)}return;case"dialog":F("beforetoggle",e),F("toggle",e),F("cancel",e),F("close",e);break;case"iframe":case"object":F("load",e);break;case"video":case"audio":for(n=0;n<gl.length;n++)F(gl[n],e);break;case"image":F("error",e),F("load",e);break;case"details":F("toggle",e);break;case"embed":case"source":case"link":F("error",e),F("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:re(e,t,x,n,a,null)}return;default:if(As(t)){for(E in a)a.hasOwnProperty(E)&&(n=a[E],n!==void 0&&du(e,t,E,n,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(n=a[r],n!=null&&re(e,t,r,n,a,null))}function Fg(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,s=null,r=null,m=null,x=null,E=null;for(S in a){var j=a[S];if(a.hasOwnProperty(S)&&j!=null)switch(S){case"checked":break;case"value":break;case"defaultValue":m=j;default:n.hasOwnProperty(S)||re(e,t,S,null,n,j)}}for(var w in n){var S=n[w];if(j=a[w],n.hasOwnProperty(w)&&(S!=null||j!=null))switch(w){case"type":i=S;break;case"name":l=S;break;case"checked":x=S;break;case"defaultChecked":E=S;break;case"value":s=S;break;case"defaultValue":r=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(u(137,t));break;default:S!==j&&re(e,t,w,S,n,j)}}Ts(e,s,r,m,x,E,i,l);return;case"select":S=s=r=w=null;for(i in a)if(m=a[i],a.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":S=m;default:n.hasOwnProperty(i)||re(e,t,i,null,n,m)}for(l in n)if(i=n[l],m=a[l],n.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":w=i;break;case"defaultValue":r=i;break;case"multiple":s=i;default:i!==m&&re(e,t,l,i,n,m)}t=r,a=s,n=S,w!=null?Ia(e,!!a,w,!1):!!n!=!!a&&(t!=null?Ia(e,!!a,t,!0):Ia(e,!!a,a?[]:"",!1));return;case"textarea":S=w=null;for(r in a)if(l=a[r],a.hasOwnProperty(r)&&l!=null&&!n.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:re(e,t,r,null,n,l)}for(s in n)if(l=n[s],i=a[s],n.hasOwnProperty(s)&&(l!=null||i!=null))switch(s){case"value":w=l;break;case"defaultValue":S=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==i&&re(e,t,s,l,n,i)}xc(e,w,S);return;case"option":for(var G in a)if(w=a[G],a.hasOwnProperty(G)&&w!=null&&!n.hasOwnProperty(G))switch(G){case"selected":e.selected=!1;break;default:re(e,t,G,null,n,w)}for(m in n)if(w=n[m],S=a[m],n.hasOwnProperty(m)&&w!==S&&(w!=null||S!=null))switch(m){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:re(e,t,m,w,n,S)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)w=a[Z],a.hasOwnProperty(Z)&&w!=null&&!n.hasOwnProperty(Z)&&re(e,t,Z,null,n,w);for(x in n)if(w=n[x],S=a[x],n.hasOwnProperty(x)&&w!==S&&(w!=null||S!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,t));break;default:re(e,t,x,w,n,S)}return;default:if(As(t)){for(var fe in a)w=a[fe],a.hasOwnProperty(fe)&&w!==void 0&&!n.hasOwnProperty(fe)&&du(e,t,fe,void 0,n,w);for(E in n)w=n[E],S=a[E],!n.hasOwnProperty(E)||w===S||w===void 0&&S===void 0||du(e,t,E,w,n,S);return}}for(var y in a)w=a[y],a.hasOwnProperty(y)&&w!=null&&!n.hasOwnProperty(y)&&re(e,t,y,null,n,w);for(j in n)w=n[j],S=a[j],!n.hasOwnProperty(j)||w===S||w==null&&S==null||re(e,t,j,w,n,S)}function Ad(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $g(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var l=a[n],i=l.transferSize,s=l.initiatorType,r=l.duration;if(i&&r&&Ad(s)){for(s=0,r=l.responseEnd,n+=1;n<a.length;n++){var m=a[n],x=m.startTime;if(x>r)break;var E=m.transferSize,j=m.initiatorType;E&&Ad(j)&&(m=m.responseEnd,s+=E*(m<r?1:(r-x)/(m-x)))}if(--n,t+=8*(i+s)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hu=null,mu=null;function Ui(e){return e.nodeType===9?e:e.ownerDocument}function Md(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var pu=null;function Pg(){var e=window.event;return e&&e.type==="popstate"?e===pu?!1:(pu=e,!0):(pu=null,!1)}var Cd=typeof setTimeout=="function"?setTimeout:void 0,ep=typeof clearTimeout=="function"?clearTimeout:void 0,zd=typeof Promise=="function"?Promise:void 0,tp=typeof queueMicrotask=="function"?queueMicrotask:typeof zd<"u"?function(e){return zd.resolve(null).then(e).catch(ap)}:Cd;function ap(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function Nd(e,t){var a=t,n=0;do{var l=a.nextSibling;if(e.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(l),Cn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")yl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yl(a);for(var i=a.firstChild;i;){var s=i.nextSibling,r=i.nodeName;i[Rn]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=s}}else a==="body"&&yl(e.ownerDocument.body);a=l}while(a);Cn(t)}function kd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function yu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yu(a),ws(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function np(e,t,a,n){for(;e.nodeType===1;){var l=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Rn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=vt(e.nextSibling),e===null)break}return null}function lp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vt(e.nextSibling),e===null))return null;return e}function Dd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=vt(e.nextSibling),e===null))return null;return e}function vu(e){return e.data==="$?"||e.data==="$~"}function bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ip(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xu=null;function Od(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return vt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function _d(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Rd(e,t,a){switch(t=Ui(a),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function yl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ws(e)}var bt=new Map,Ud=new Set;function Hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=H.d;H.d={f:sp,r:op,D:up,C:cp,L:rp,m:fp,X:hp,S:dp,M:mp};function sp(){var e=Jt.f(),t=Ci();return e||t}function op(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?$r(t):Jt.r(e)}var An=typeof document>"u"?null:document;function Hd(e,t,a){var n=An;if(n&&typeof t=="string"&&t){var l=ft(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Ud.has(l)||(Ud.add(l),e={rel:e,crossOrigin:a,href:t},n.querySelector(l)===null&&(t=n.createElement("link"),Ve(t,"link",e),Ue(t),n.head.appendChild(t)))}}function up(e){Jt.D(e),Hd("dns-prefetch",e,null)}function cp(e,t){Jt.C(e,t),Hd("preconnect",e,t)}function rp(e,t,a){Jt.L(e,t,a);var n=An;if(n&&e&&t){var l='link[rel="preload"][as="'+ft(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+ft(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+ft(a.imageSizes)+'"]')):l+='[href="'+ft(e)+'"]';var i=l;switch(t){case"style":i=Mn(e);break;case"script":i=jn(e)}bt.has(i)||(e=N({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),n.querySelector(l)!==null||t==="style"&&n.querySelector(vl(i))||t==="script"&&n.querySelector(bl(i))||(t=n.createElement("link"),Ve(t,"link",e),Ue(t),n.head.appendChild(t)))}}function fp(e,t){Jt.m(e,t);var a=An;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+ft(n)+'"][href="'+ft(e)+'"]',i=l;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=jn(e)}if(!bt.has(i)&&(e=N({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(l)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bl(i)))return}n=a.createElement("link"),Ve(n,"link",e),Ue(n),a.head.appendChild(n)}}}function dp(e,t,a){Jt.S(e,t,a);var n=An;if(n&&e){var l=Ja(n).hoistableStyles,i=Mn(e);t=t||"default";var s=l.get(i);if(!s){var r={loading:0,preload:null};if(s=n.querySelector(vl(i)))r.loading=5;else{e=N({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&wu(e,a);var m=s=n.createElement("link");Ue(m),Ve(m,"link",e),m._p=new Promise(function(x,E){m.onload=x,m.onerror=E}),m.addEventListener("load",function(){r.loading|=1}),m.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Li(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:r},l.set(i,s)}}}function hp(e,t){Jt.X(e,t);var a=An;if(a&&e){var n=Ja(a).hoistableScripts,l=jn(e),i=n.get(l);i||(i=a.querySelector(bl(l)),i||(e=N({src:e,async:!0},t),(t=bt.get(l))&&Su(e,t),i=a.createElement("script"),Ue(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function mp(e,t){Jt.M(e,t);var a=An;if(a&&e){var n=Ja(a).hoistableScripts,l=jn(e),i=n.get(l);i||(i=a.querySelector(bl(l)),i||(e=N({src:e,async:!0,type:"module"},t),(t=bt.get(l))&&Su(e,t),i=a.createElement("script"),Ue(i),Ve(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},n.set(l,i))}}function Ld(e,t,a,n){var l=(l=Kt.current)?Hi(l):null;if(!l)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mn(a.href),a=Ja(l).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mn(a.href);var i=Ja(l).hoistableStyles,s=i.get(e);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,s),(i=l.querySelector(vl(e)))&&!i._p&&(s.instance=i,s.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||gp(l,e,a,s.state))),t&&n===null)throw Error(u(528,""));return s}if(t&&n!==null)throw Error(u(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=jn(a),a=Ja(l).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Mn(e){return'href="'+ft(e)+'"'}function vl(e){return'link[rel="stylesheet"]['+e+"]"}function Gd(e){return N({},e,{"data-precedence":e.precedence,precedence:null})}function gp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Ve(t,"link",a),Ue(t),e.head.appendChild(t))}function jn(e){return'[src="'+ft(e)+'"]'}function bl(e){return"script[async]"+e}function Bd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ft(a.href)+'"]');if(n)return t.instance=n,Ue(n),n;var l=N({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Ue(n),Ve(n,"style",l),Li(n,a.precedence,e),t.instance=n;case"stylesheet":l=Mn(a.href);var i=e.querySelector(vl(l));if(i)return t.state.loading|=4,t.instance=i,Ue(i),i;n=Gd(a),(l=bt.get(l))&&wu(n,l),i=(e.ownerDocument||e).createElement("link"),Ue(i);var s=i;return s._p=new Promise(function(r,m){s.onload=r,s.onerror=m}),Ve(i,"link",n),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=jn(a.src),(l=e.querySelector(bl(i)))?(t.instance=l,Ue(l),l):(n=a,(l=bt.get(i))&&(n=N({},a),Su(n,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ue(l),Ve(l,"link",n),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Li(n,a.precedence,e));return t.instance}function Li(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=n.length?n[n.length-1]:null,i=l,s=0;s<n.length;s++){var r=n[s];if(r.dataset.precedence===t)i=r;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function wu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function qd(e,t,a){if(Gi===null){var n=new Map,l=Gi=new Map;l.set(a,n)}else l=Gi,n=l.get(a),n||(n=new Map,l.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),l=0;l<a.length;l++){var i=a[l];if(!(i[Rn]||i[Le]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var s=i.getAttribute(t)||"";s=e+s;var r=n.get(s);r?r.push(i):n.set(s,[i])}}return n}function Vd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function pp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Yd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Mn(n.href),i=t.querySelector(vl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Bi.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=i,Ue(i);return}i=t.ownerDocument||t,n=Gd(n),(l=bt.get(l))&&wu(n,l),i=i.createElement("link"),Ue(i);var s=i;s._p=new Promise(function(r,m){s.onload=r,s.onerror=m}),Ve(i,"link",n),a.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Bi.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Tu=0;function vp(e,t){return e.stylesheets&&e.count===0&&Vi(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Tu===0&&(Tu=62500*$g());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Vi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Tu?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(l)}}:null}function Bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var qi=null;function Vi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,qi=new Map,t.forEach(bp,e),qi=null,Bi.call(e))}function bp(e,t){if(!(t.state.loading&4)){var a=qi.get(e);if(a)var n=a.get(null);else{a=new Map,qi.set(e,a);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var s=l[i];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}l=t.instance,s=l.getAttribute("data-precedence"),i=a.get(s)||n,i===n&&a.set(null,l),a.set(s,l),this.count++,n=Bi.bind(this),l.addEventListener("load",n),l.addEventListener("error",n),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var xl={$$typeof:Q,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function xp(e,t,a,n,l,i,s,r,m){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ys(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ys(0),this.hiddenUpdates=ys(null),this.identifierPrefix=n,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.incompleteTransitions=new Map}function Zd(e,t,a,n,l,i,s,r,m,x,E,j){return e=new xp(e,t,a,s,m,x,E,j,r),t=1,i===!0&&(t|=24),i=lt(3,null,null,t),e.current=i,i.stateNode=e,t=to(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:n,isDehydrated:a,cache:t},io(i),e}function Xd(e){return e?(e=nn,e):nn}function Qd(e,t,a,n,l,i){l=Xd(l),n.context===null?n.context=l:n.pendingContext=l,n=na(t),n.payload={element:a},i=i===void 0?null:i,i!==null&&(n.callback=i),a=la(e,n,t),a!==null&&(Pe(a,e,t),$n(a,e,t))}function Jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Eu(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function Kd(e){if(e.tag===13||e.tag===31){var t=za(e,67108864);t!==null&&Pe(t,e,67108864),Eu(e,67108864)}}function Id(e){if(e.tag===13||e.tag===31){var t=ct();t=vs(t);var a=za(e,t);a!==null&&Pe(a,e,t),Eu(e,t)}}var Yi=!0;function wp(e,t,a,n){var l=M.T;M.T=null;var i=H.p;try{H.p=2,Au(e,t,a,n)}finally{H.p=i,M.T=l}}function Sp(e,t,a,n){var l=M.T;M.T=null;var i=H.p;try{H.p=8,Au(e,t,a,n)}finally{H.p=i,M.T=l}}function Au(e,t,a,n){if(Yi){var l=Mu(n);if(l===null)fu(e,t,n,Zi,a),Fd(e,n);else if(Ep(l,e,t,a,n))n.stopPropagation();else if(Fd(e,n),t&4&&-1<Tp.indexOf(e)){for(;l!==null;){var i=Qa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var s=Ea(i.pendingLanes);if(s!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;s;){var m=1<<31-at(s);r.entanglements[1]|=m,s&=~m}Ct(i),(le&6)===0&&(Mi=et()+500,ml(0))}}break;case 31:case 13:r=za(i,2),r!==null&&Pe(r,i,2),Ci(),Eu(i,2)}if(i=Mu(n),i===null&&fu(e,t,n,Zi,a),i===l)break;l=i}l!==null&&n.stopPropagation()}else fu(e,t,n,null,a)}}function Mu(e){return e=js(e),ju(e)}var Zi=null;function ju(e){if(Zi=null,e=Xa(e),e!==null){var t=g(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=b(t),e!==null)return e;e=null}else if(a===31){if(e=T(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Zi=e,null}function Wd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(um()){case nc:return 2;case lc:return 8;case Ol:case cm:return 32;case ic:return 268435456;default:return 32}default:return 32}}var Cu=!1,ga=null,pa=null,ya=null,wl=new Map,Sl=new Map,va=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fd(e,t){switch(e){case"focusin":case"focusout":ga=null;break;case"dragenter":case"dragleave":pa=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":wl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sl.delete(t.pointerId)}}function Tl(e,t,a,n,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Qa(t),t!==null&&Kd(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Ep(e,t,a,n,l){switch(t){case"focusin":return ga=Tl(ga,e,t,a,n,l),!0;case"dragenter":return pa=Tl(pa,e,t,a,n,l),!0;case"mouseover":return ya=Tl(ya,e,t,a,n,l),!0;case"pointerover":var i=l.pointerId;return wl.set(i,Tl(wl.get(i)||null,e,t,a,n,l)),!0;case"gotpointercapture":return i=l.pointerId,Sl.set(i,Tl(Sl.get(i)||null,e,t,a,n,l)),!0}return!1}function $d(e){var t=Xa(e.target);if(t!==null){var a=g(t);if(a!==null){if(t=a.tag,t===13){if(t=b(a),t!==null){e.blockedOn=t,fc(e.priority,function(){Id(a)});return}}else if(t===31){if(t=T(a),t!==null){e.blockedOn=t,fc(e.priority,function(){Id(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Mu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ms=n,a.target.dispatchEvent(n),Ms=null}else return t=Qa(a),t!==null&&Kd(t),e.blockedOn=a,!1;t.shift()}return!0}function Pd(e,t,a){Xi(e)&&a.delete(t)}function Ap(){Cu=!1,ga!==null&&Xi(ga)&&(ga=null),pa!==null&&Xi(pa)&&(pa=null),ya!==null&&Xi(ya)&&(ya=null),wl.forEach(Pd),Sl.forEach(Pd)}function Qi(e,t){e.blockedOn===t&&(e.blockedOn=null,Cu||(Cu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ap)))}var Ji=null;function eh(e){Ji!==e&&(Ji=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],l=e[t+2];if(typeof n!="function"){if(ju(n||a)===null)continue;break}var i=Qa(a);i!==null&&(e.splice(t,3),t-=3,Mo(i,{pending:!0,data:l,method:a.method,action:n},n,l))}}))}function Cn(e){function t(m){return Qi(m,e)}ga!==null&&Qi(ga,e),pa!==null&&Qi(pa,e),ya!==null&&Qi(ya,e),wl.forEach(t),Sl.forEach(t);for(var a=0;a<va.length;a++){var n=va[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<va.length&&(a=va[0],a.blockedOn===null);)$d(a),a.blockedOn===null&&va.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var l=a[n],i=a[n+1],s=l[Je]||null;if(typeof i=="function")s||eh(a);else if(s){var r=null;if(i&&i.hasAttribute("formAction")){if(l=i,s=i[Je]||null)r=s.formAction;else if(ju(l)!==null)continue}else r=s.action;typeof r=="function"?a[n+1]=r:(a.splice(n,3),n-=3),eh(a)}}}function th(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(s){return l=s})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function zu(e){this._internalRoot=e}Ki.prototype.render=zu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var a=t.current,n=ct();Qd(a,n,e,t,null,null)},Ki.prototype.unmount=zu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Qd(e.current,2,null,e,null,null),Ci(),t[Za]=null}};function Ki(e){this._internalRoot=e}Ki.prototype.unstable_scheduleHydration=function(e){if(e){var t=rc();e={blockedOn:null,target:e,priority:t};for(var a=0;a<va.length&&t!==0&&t<va[a].priority;a++);va.splice(a,0,e),a===0&&$d(e)}};var ah=c.version;if(ah!=="19.2.4")throw Error(u(527,ah,"19.2.4"));H.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=O(t),e=e!==null?L(e):null,e=e===null?null:e.stateNode,e};var Mp={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ii=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ii.isDisabled&&Ii.supportsFiber)try{Dn=Ii.inject(Mp),tt=Ii}catch{}}return Al.createRoot=function(e,t){if(!h(e))throw Error(u(299));var a=!1,n="",l=cf,i=rf,s=ff;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Zd(e,1,!1,null,null,a,n,null,l,i,s,th),e[Za]=t.current,ru(e),new zu(t)},Al.hydrateRoot=function(e,t,a){if(!h(e))throw Error(u(299));var n=!1,l="",i=cf,s=rf,r=ff,m=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(m=a.formState)),t=Zd(e,1,!0,t,a??null,n,l,m,i,s,r,th),t.context=Xd(null),a=t.current,n=ct(),n=vs(n),l=na(n),l.callback=null,la(a,l,n),a=n,t.current.lanes=a,_n(t,a),Ct(t),e[Za]=t.current,ru(e),new Ki(t)},Al.version="19.2.4",Al}var mh;function my(){if(mh)return Du.exports;mh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(c){console.error(c)}}return o(),Du.exports=hy(),Du.exports}var gy=my();const py="modulepreload",yy=function(o){return"/ece_blog/"+o},gh={},ss=function(c,f,u){let h=Promise.resolve();if(f&&f.length>0){let b=function(O){return Promise.all(O.map(L=>Promise.resolve(L).then(N=>({status:"fulfilled",value:N}),N=>({status:"rejected",reason:N}))))};document.getElementsByTagName("link");const T=document.querySelector("meta[property=csp-nonce]"),C=(T==null?void 0:T.nonce)||(T==null?void 0:T.getAttribute("nonce"));h=b(f.map(O=>{if(O=yy(O),O in gh)return;gh[O]=!0;const L=O.endsWith(".css"),N=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${O}"]${N}`))return;const k=document.createElement("link");if(k.rel=L?"stylesheet":py,L||(k.as="script"),k.crossOrigin="",k.href=O,C&&k.setAttribute("nonce",C),document.head.appendChild(k),L)return new Promise((B,D)=>{k.addEventListener("load",B),k.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${O}`)))})}))}function g(b){const T=new Event("vite:preloadError",{cancelable:!0});if(T.payload=b,window.dispatchEvent(T),!T.defaultPrevented)throw b}return h.then(b=>{for(const T of b||[])T.status==="rejected"&&g(T.reason);return c().catch(g)})},Iu=z.createContext({});function Wu(o){const c=z.useRef(null);return c.current===null&&(c.current=o()),c.current}const vy=typeof window<"u",Lh=vy?z.useLayoutEffect:z.useEffect,os=z.createContext(null),Fu=z.createContext({transformPagePoint:o=>o,isStatic:!1,reducedMotion:"never"});function ph(o,c){if(typeof o=="function")return o(c);o!=null&&(o.current=c)}function by(...o){return c=>{let f=!1;const u=o.map(h=>{const g=ph(h,c);return!f&&typeof g=="function"&&(f=!0),g});if(f)return()=>{for(let h=0;h<u.length;h++){const g=u[h];typeof g=="function"?g():ph(o[h],null)}}}}function xy(...o){return z.useCallback(by(...o),o)}class wy extends z.Component{getSnapshotBeforeUpdate(c){const f=this.props.childRef.current;if(Nu(f)&&c.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const u=f.offsetParent,h=Nu(u)&&u.offsetWidth||0,g=Nu(u)&&u.offsetHeight||0,b=getComputedStyle(f),T=this.props.sizeRef.current;T.height=parseFloat(b.height),T.width=parseFloat(b.width),T.top=f.offsetTop,T.left=f.offsetLeft,T.right=h-T.width-T.left,T.bottom=g-T.height-T.top}return null}componentDidUpdate(){}render(){return this.props.children}}function Sy({children:o,isPresent:c,anchorX:f,anchorY:u,root:h,pop:g}){var k;const b=z.useId(),T=z.useRef(null),C=z.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:O}=z.useContext(Fu),L=((k=o.props)==null?void 0:k.ref)??(o==null?void 0:o.ref),N=xy(T,L);return z.useInsertionEffect(()=>{const{width:B,height:D,top:R,left:_,right:Y,bottom:U}=C.current;if(c||g===!1||!T.current||!B||!D)return;const Q=f==="left"?`left: ${_}`:`right: ${Y}`,J=u==="bottom"?`bottom: ${U}`:`top: ${R}`;T.current.dataset.motionPopId=b;const te=document.createElement("style");O&&(te.nonce=O);const Me=h??document.head;return Me.appendChild(te),te.sheet&&te.sheet.insertRule(`
          [data-motion-pop-id="${b}"] {
            position: absolute !important;
            width: ${B}px !important;
            height: ${D}px !important;
            ${Q}px !important;
            ${J}px !important;
          }
        `),()=>{var Oe;(Oe=T.current)==null||Oe.removeAttribute("data-motion-pop-id"),Me.contains(te)&&Me.removeChild(te)}},[c]),d.jsx(wy,{isPresent:c,childRef:T,sizeRef:C,pop:g,children:g===!1?o:z.cloneElement(o,{ref:N})})}const Ty=({children:o,initial:c,isPresent:f,onExitComplete:u,custom:h,presenceAffectsLayout:g,mode:b,anchorX:T,anchorY:C,root:O})=>{const L=Wu(Ey),N=z.useId();let k=!0,B=z.useMemo(()=>(k=!1,{id:N,initial:c,isPresent:f,custom:h,onExitComplete:D=>{L.set(D,!0);for(const R of L.values())if(!R)return;u&&u()},register:D=>(L.set(D,!1),()=>L.delete(D))}),[f,L,u]);return g&&k&&(B={...B}),z.useMemo(()=>{L.forEach((D,R)=>L.set(R,!1))},[f]),z.useEffect(()=>{!f&&!L.size&&u&&u()},[f]),o=d.jsx(Sy,{pop:b==="popLayout",isPresent:f,anchorX:T,anchorY:C,root:O,children:o}),d.jsx(os.Provider,{value:B,children:o})};function Ey(){return new Map}function Gh(o=!0){const c=z.useContext(os);if(c===null)return[!0,null];const{isPresent:f,onExitComplete:u,register:h}=c,g=z.useId();z.useEffect(()=>{if(o)return h(g)},[o]);const b=z.useCallback(()=>o&&u&&u(g),[g,u,o]);return!f&&u?[!1,b]:[!0]}const Fi=o=>o.key||"";function yh(o){const c=[];return z.Children.forEach(o,f=>{z.isValidElement(f)&&c.push(f)}),c}const Sa=({children:o,custom:c,initial:f=!0,onExitComplete:u,presenceAffectsLayout:h=!0,mode:g="sync",propagate:b=!1,anchorX:T="left",anchorY:C="top",root:O})=>{const[L,N]=Gh(b),k=z.useMemo(()=>yh(o),[o]),B=b&&!L?[]:k.map(Fi),D=z.useRef(!0),R=z.useRef(k),_=Wu(()=>new Map),Y=z.useRef(new Set),[U,Q]=z.useState(k),[J,te]=z.useState(k);Lh(()=>{D.current=!1,R.current=k;for(let me=0;me<J.length;me++){const he=Fi(J[me]);B.includes(he)?(_.delete(he),Y.current.delete(he)):_.get(he)!==!0&&_.set(he,!1)}},[J,B.length,B.join("-")]);const Me=[];if(k!==U){let me=[...k];for(let he=0;he<J.length;he++){const Qe=J[he],Ye=Fi(Qe);B.includes(Ye)||(me.splice(he,0,Qe),Me.push(Qe))}return g==="wait"&&Me.length&&(me=Me),te(yh(me)),Q(k),null}const{forceRender:Oe}=z.useContext(Iu);return d.jsx(d.Fragment,{children:J.map(me=>{const he=Fi(me),Qe=b&&!L?!1:k===J||B.includes(he),Ye=()=>{if(Y.current.has(he))return;if(_.has(he))Y.current.add(he),_.set(he,!0);else return;let _e=!0;_.forEach(Va=>{Va||(_e=!1)}),_e&&(Oe==null||Oe(),te(R.current),b&&(N==null||N()),u&&u())};return d.jsx(Ty,{isPresent:Qe,initial:!D.current||f?void 0:!1,custom:c,presenceAffectsLayout:h,mode:g,root:O,onExitComplete:Qe?void 0:Ye,anchorX:T,anchorY:C,children:me},he)})})},Bh=z.createContext({strict:!1}),vh={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let bh=!1;function Ay(){if(bh)return;const o={};for(const c in vh)o[c]={isEnabled:f=>vh[c].some(u=>!!f[u])};Dh(o),bh=!0}function qh(){return Ay(),Dp()}function My(o){const c=qh();for(const f in o)c[f]={...c[f],...o[f]};Dh(c)}const jy=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ls(o){return o.startsWith("while")||o.startsWith("drag")&&o!=="draggable"||o.startsWith("layout")||o.startsWith("onTap")||o.startsWith("onPan")||o.startsWith("onLayout")||jy.has(o)}let Vh=o=>!ls(o);function Cy(o){typeof o=="function"&&(Vh=c=>c.startsWith("on")?!ls(c):o(c))}try{Cy(require("@emotion/is-prop-valid").default)}catch{}function zy(o,c,f){const u={};for(const h in o)h==="values"&&typeof o.values=="object"||Ku(o[h])||(Vh(h)||f===!0&&ls(h)||!c&&!ls(h)||o.draggable&&h.startsWith("onDrag"))&&(u[h]=o[h]);return u}const us=z.createContext({});function Ny(o,c){if(Oh(o)){const{initial:f,animate:u}=o;return{initial:f===!1||nh(f)?f:void 0,animate:nh(u)?u:void 0}}return o.inherit!==!1?c:{}}function ky(o){const{initial:c,animate:f}=Ny(o,z.useContext(us));return z.useMemo(()=>({initial:c,animate:f}),[xh(c),xh(f)])}function xh(o){return Array.isArray(o)?o.join(" "):o}const $u=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Yh(o,c,f){for(const u in c)!Ku(c[u])&&!Op(u,f)&&(o[u]=c[u])}function Dy({transformTemplate:o},c){return z.useMemo(()=>{const f=$u();return _p(f,c,o),Object.assign({},f.vars,f.style)},[c])}function Oy(o,c){const f=o.style||{},u={};return Yh(u,f,o),Object.assign(u,Dy(o,c)),u}function _y(o,c){const f={},u=Oy(o,c);return o.drag&&o.dragListener!==!1&&(f.draggable=!1,u.userSelect=u.WebkitUserSelect=u.WebkitTouchCallout="none",u.touchAction=o.drag===!0?"none":`pan-${o.drag==="x"?"y":"x"}`),o.tabIndex===void 0&&(o.onTap||o.onTapStart||o.whileTap)&&(f.tabIndex=0),f.style=u,f}const Zh=()=>({...$u(),attrs:{}});function Ry(o,c,f,u){const h=z.useMemo(()=>{const g=Zh();return Rp(g,c,Up(u),o.transformTemplate,o.style),{...g.attrs,style:{...g.style}}},[c]);if(o.style){const g={};Yh(g,o.style,o),h.style={...g,...h.style}}return h}const Uy=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Pu(o){return typeof o!="string"||o.includes("-")?!1:!!(Uy.indexOf(o)>-1||/[A-Z]/u.test(o))}function Hy(o,c,f,{latestValues:u},h,g=!1,b){const C=(b??Pu(o)?Ry:_y)(c,u,h,o),O=zy(c,typeof o=="string",g),L=o!==z.Fragment?{...O,...C,ref:f}:{},{children:N}=c,k=z.useMemo(()=>Ku(N)?N.get():N,[N]);return z.createElement(o,{...L,children:k})}function Ly({scrapeMotionValuesFromProps:o,createRenderState:c},f,u,h){return{latestValues:Gy(f,u,h,o),renderState:c()}}function Gy(o,c,f,u){const h={},g=u(o,{});for(const k in g)h[k]=Hp(g[k]);let{initial:b,animate:T}=o;const C=Oh(o),O=Lp(o);c&&O&&!C&&o.inherit!==!1&&(b===void 0&&(b=c.initial),T===void 0&&(T=c.animate));let L=f?f.initial===!1:!1;L=L||b===!1;const N=L?T:b;if(N&&typeof N!="boolean"&&!_h(N)){const k=Array.isArray(N)?N:[N];for(let B=0;B<k.length;B++){const D=Gp(o,k[B]);if(D){const{transitionEnd:R,transition:_,...Y}=D;for(const U in Y){let Q=Y[U];if(Array.isArray(Q)){const J=L?Q.length-1:0;Q=Q[J]}Q!==null&&(h[U]=Q)}for(const U in R)h[U]=R[U]}}}return h}const Xh=o=>(c,f)=>{const u=z.useContext(us),h=z.useContext(os),g=()=>Ly(o,c,u,h);return f?g():Wu(g)},By=Xh({scrapeMotionValuesFromProps:Bp,createRenderState:$u}),qy=Xh({scrapeMotionValuesFromProps:qp,createRenderState:Zh}),Vy=Symbol.for("motionComponentSymbol");function Yy(o,c,f){const u=z.useRef(f);z.useInsertionEffect(()=>{u.current=f});const h=z.useRef(null);return z.useCallback(g=>{var T;g&&((T=o.onMount)==null||T.call(o,g));const b=u.current;if(typeof b=="function")if(g){const C=b(g);typeof C=="function"&&(h.current=C)}else h.current?(h.current(),h.current=null):b(g);else b&&(b.current=g);c&&(g?c.mount(g):c.unmount())},[c])}const Qh=z.createContext({});function zn(o){return o&&typeof o=="object"&&Object.prototype.hasOwnProperty.call(o,"current")}function Zy(o,c,f,u,h,g){var Q,J;const{visualElement:b}=z.useContext(us),T=z.useContext(Bh),C=z.useContext(os),O=z.useContext(Fu),L=O.reducedMotion,N=O.skipAnimations,k=z.useRef(null),B=z.useRef(!1);u=u||T.renderer,!k.current&&u&&(k.current=u(o,{visualState:c,parent:b,props:f,presenceContext:C,blockInitialAnimation:C?C.initial===!1:!1,reducedMotionConfig:L,skipAnimations:N,isSVG:g}),B.current&&k.current&&(k.current.manuallyAnimateOnMount=!0));const D=k.current,R=z.useContext(Qh);D&&!D.projection&&h&&(D.type==="html"||D.type==="svg")&&Xy(k.current,f,h,R);const _=z.useRef(!1);z.useInsertionEffect(()=>{D&&_.current&&D.update(f,C)});const Y=f[Vp],U=z.useRef(!!Y&&typeof window<"u"&&!((Q=window.MotionHandoffIsComplete)!=null&&Q.call(window,Y))&&((J=window.MotionHasOptimisedAnimation)==null?void 0:J.call(window,Y)));return Lh(()=>{B.current=!0,D&&(_.current=!0,window.MotionIsMounted=!0,D.updateFeatures(),D.scheduleRenderMicrotask(),U.current&&D.animationState&&D.animationState.animateChanges())}),z.useEffect(()=>{D&&(!U.current&&D.animationState&&D.animationState.animateChanges(),U.current&&(queueMicrotask(()=>{var te;(te=window.MotionHandoffMarkAsComplete)==null||te.call(window,Y)}),U.current=!1),D.enteringChildren=void 0)}),D}function Xy(o,c,f,u){const{layoutId:h,layout:g,drag:b,dragConstraints:T,layoutScroll:C,layoutRoot:O,layoutCrossfade:L}=c;o.projection=new f(o.latestValues,c["data-framer-portal-id"]?void 0:Jh(o.parent)),o.projection.setOptions({layoutId:h,layout:g,alwaysMeasureLayout:!!b||T&&zn(T),visualElement:o,animationType:typeof g=="string"?g:"both",initialPromotionConfig:u,crossfade:L,layoutScroll:C,layoutRoot:O})}function Jh(o){if(o)return o.options.allowProjection!==!1?o.projection:Jh(o.parent)}function Ru(o,{forwardMotionProps:c=!1,type:f}={},u,h){u&&My(u);const g=f?f==="svg":Pu(o),b=g?qy:By;function T(O,L){let N;const k={...z.useContext(Fu),...O,layoutId:Qy(O)},{isStatic:B}=k,D=ky(O),R=b(O,B);if(!B&&typeof window<"u"){Jy();const _=Ky(k);N=_.MeasureLayout,D.visualElement=Zy(o,R,k,h,_.ProjectionNode,g)}return d.jsxs(us.Provider,{value:D,children:[N&&D.visualElement?d.jsx(N,{visualElement:D.visualElement,...k}):null,Hy(o,O,Yy(R,D.visualElement,L),R,B,c,g)]})}T.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const C=z.forwardRef(T);return C[Vy]=o,C}function Qy({layoutId:o}){const c=z.useContext(Iu).id;return c&&o!==void 0?c+"-"+o:o}function Jy(o,c){z.useContext(Bh).strict}function Ky(o){const c=qh(),{drag:f,layout:u}=c;if(!f&&!u)return{};const h={...f,...u};return{MeasureLayout:f!=null&&f.isEnabled(o)||u!=null&&u.isEnabled(o)?h.MeasureLayout:void 0,ProjectionNode:h.ProjectionNode}}function Iy(o,c){if(typeof Proxy>"u")return Ru;const f=new Map,u=(g,b)=>Ru(g,b,o,c),h=(g,b)=>u(g,b);return new Proxy(h,{get:(g,b)=>b==="create"?u:(f.has(b)||f.set(b,Ru(b,void 0,o,c)),f.get(b))})}const Wy=(o,c)=>c.isSVG??Pu(o)?new Yp(c):new Zp(c,{allowProjection:o!==z.Fragment});class Fy extends wa{constructor(c){super(c),c.animationState||(c.animationState=Xp(c))}updateAnimationControlsSubscription(){const{animate:c}=this.node.getProps();_h(c)&&(this.unmountControls=c.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:c}=this.node.getProps(),{animate:f}=this.node.prevProps||{};c!==f&&this.updateAnimationControlsSubscription()}unmount(){var c;this.node.animationState.reset(),(c=this.unmountControls)==null||c.call(this)}}let $y=0;class Py extends wa{constructor(){super(...arguments),this.id=$y++,this.isExitComplete=!1}update(){var g;if(!this.node.presenceContext)return;const{isPresent:c,onExitComplete:f}=this.node.presenceContext,{isPresent:u}=this.node.prevPresenceContext||{};if(!this.node.animationState||c===u)return;if(c&&u===!1){if(this.isExitComplete){const{initial:b,custom:T}=this.node.getProps();if(typeof b=="string"){const C=Qp(this.node,b,T);if(C){const{transition:O,transitionEnd:L,...N}=C;for(const k in N)(g=this.node.getValue(k))==null||g.jump(N[k])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const h=this.node.animationState.setActive("exit",!c);f&&!c&&h.then(()=>{this.isExitComplete=!0,f(this.id)})}mount(){const{register:c,onExitComplete:f}=this.node.presenceContext||{};f&&f(this.id),c&&(this.unmount=c(this.id))}unmount(){}}const ev={animation:{Feature:Fy},exit:{Feature:Py}};function zl(o){return{point:{x:o.pageX,y:o.pageY}}}const tv=o=>c=>Rh(c)&&o(c,zl(c));function Ml(o,c,f,u){return as(o,c,tv(f),u)}const Kh=({current:o})=>o?o.ownerDocument.defaultView:null,wh=new Set(["auto","scroll"]);class Ih{constructor(c,f,{transformPagePoint:u,contextWindow:h=window,dragSnapToOrigin:g=!1,distanceThreshold:b=3,element:T}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=B=>{this.handleScroll(B.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=$i(this.lastRawMoveEventInfo,this.transformPagePoint));const B=Uu(this.lastMoveEventInfo,this.history),D=this.startEvent!==null,R=Jp(B.offset,{x:0,y:0})>=this.distanceThreshold;if(!D&&!R)return;const{point:_}=B,{timestamp:Y}=lh;this.history.push({..._,timestamp:Y});const{onStart:U,onMove:Q}=this.handlers;D||(U&&U(this.lastMoveEvent,B),this.startEvent=this.lastMoveEvent),Q&&Q(this.lastMoveEvent,B)},this.handlePointerMove=(B,D)=>{this.lastMoveEvent=B,this.lastRawMoveEventInfo=D,this.lastMoveEventInfo=$i(D,this.transformPagePoint),Tt.update(this.updatePoint,!0)},this.handlePointerUp=(B,D)=>{this.end();const{onEnd:R,onSessionEnd:_,resumeAnimation:Y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&Y&&Y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const U=Uu(B.type==="pointercancel"?this.lastMoveEventInfo:$i(D,this.transformPagePoint),this.history);this.startEvent&&R&&R(B,U),_&&_(B,U)},!Rh(c))return;this.dragSnapToOrigin=g,this.handlers=f,this.transformPagePoint=u,this.distanceThreshold=b,this.contextWindow=h||window;const C=zl(c),O=$i(C,this.transformPagePoint),{point:L}=O,{timestamp:N}=lh;this.history=[{...L,timestamp:N}];const{onSessionStart:k}=f;k&&k(c,Uu(O,this.history)),this.removeListeners=Uh(Ml(this.contextWindow,"pointermove",this.handlePointerMove),Ml(this.contextWindow,"pointerup",this.handlePointerUp),Ml(this.contextWindow,"pointercancel",this.handlePointerUp)),T&&this.startScrollTracking(T)}startScrollTracking(c){let f=c.parentElement;for(;f;){const u=getComputedStyle(f);(wh.has(u.overflowX)||wh.has(u.overflowY))&&this.scrollPositions.set(f,{x:f.scrollLeft,y:f.scrollTop}),f=f.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(c){const f=this.scrollPositions.get(c);if(!f)return;const u=c===window,h=u?{x:window.scrollX,y:window.scrollY}:{x:c.scrollLeft,y:c.scrollTop},g={x:h.x-f.x,y:h.y-f.y};g.x===0&&g.y===0||(u?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=g.x,this.lastMoveEventInfo.point.y+=g.y):this.history.length>0&&(this.history[0].x-=g.x,this.history[0].y-=g.y),this.scrollPositions.set(c,h),Tt.update(this.updatePoint,!0))}updateHandlers(c){this.handlers=c}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Kp(this.updatePoint)}}function $i(o,c){return c?{point:c(o.point)}:o}function Sh(o,c){return{x:o.x-c.x,y:o.y-c.y}}function Uu({point:o},c){return{point:o,delta:Sh(o,Wh(c)),offset:Sh(o,av(c)),velocity:nv(c,.1)}}function av(o){return o[0]}function Wh(o){return o[o.length-1]}function nv(o,c){if(o.length<2)return{x:0,y:0};let f=o.length-1,u=null;const h=Wh(o);for(;f>=0&&(u=o[f],!(h.timestamp-u.timestamp>ih(c)));)f--;if(!u)return{x:0,y:0};u===o[0]&&o.length>2&&h.timestamp-u.timestamp>ih(c)*2&&(u=o[1]);const g=Ip(h.timestamp-u.timestamp);if(g===0)return{x:0,y:0};const b={x:(h.x-u.x)/g,y:(h.y-u.y)/g};return b.x===1/0&&(b.x=0),b.y===1/0&&(b.y=0),b}function lv(o,{min:c,max:f},u){return c!==void 0&&o<c?o=u?ns(c,o,u.min):Math.max(o,c):f!==void 0&&o>f&&(o=u?ns(f,o,u.max):Math.min(o,f)),o}function Th(o,c,f){return{min:c!==void 0?o.min+c:void 0,max:f!==void 0?o.max+f-(o.max-o.min):void 0}}function iv(o,{top:c,left:f,bottom:u,right:h}){return{x:Th(o.x,f,h),y:Th(o.y,c,u)}}function Eh(o,c){let f=c.min-o.min,u=c.max-o.max;return c.max-c.min<o.max-o.min&&([f,u]=[u,f]),{min:f,max:u}}function sv(o,c){return{x:Eh(o.x,c.x),y:Eh(o.y,c.y)}}function ov(o,c){let f=.5;const u=qu(o),h=qu(c);return h>u?f=sh(c.min,c.max-u,o.min):u>h&&(f=sh(o.min,o.max-h,c.min)),Wp(0,1,f)}function uv(o,c){const f={};return c.min!==void 0&&(f.min=c.min-o.min),c.max!==void 0&&(f.max=c.max-o.min),f}const Vu=.35;function cv(o=Vu){return o===!1?o=0:o===!0&&(o=Vu),{x:Ah(o,"left","right"),y:Ah(o,"top","bottom")}}function Ah(o,c,f){return{min:Mh(o,c),max:Mh(o,f)}}function Mh(o,c){return typeof o=="number"?o:o[c]||0}const rv=new WeakMap;class fv{constructor(c){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Fp(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=c}start(c,{snapToCursor:f=!1,distanceThreshold:u}={}){const{presenceContext:h}=this.visualElement;if(h&&h.isPresent===!1)return;const g=N=>{f&&this.snapToCursor(zl(N).point),this.stopAnimation()},b=(N,k)=>{const{drag:B,dragPropagation:D,onDragStart:R}=this.getProps();if(B&&!D&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ay(B),!this.openDragLock))return;this.latestPointerEvent=N,this.latestPanInfo=k,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),xa(Y=>{let U=this.getAxisMotionValue(Y).get()||0;if(ny.test(U)){const{projection:Q}=this.visualElement;if(Q&&Q.layout){const J=Q.layout.layoutBox[Y];J&&(U=qu(J)*(parseFloat(U)/100))}}this.originPoint[Y]=U}),R&&Tt.update(()=>R(N,k),!1,!0),oh(this.visualElement,"transform");const{animationState:_}=this.visualElement;_&&_.setActive("whileDrag",!0)},T=(N,k)=>{this.latestPointerEvent=N,this.latestPanInfo=k;const{dragPropagation:B,dragDirectionLock:D,onDirectionLock:R,onDrag:_}=this.getProps();if(!B&&!this.openDragLock)return;const{offset:Y}=k;if(D&&this.currentDirection===null){this.currentDirection=hv(Y),this.currentDirection!==null&&R&&R(this.currentDirection);return}this.updateAxis("x",k.point,Y),this.updateAxis("y",k.point,Y),this.visualElement.render(),_&&Tt.update(()=>_(N,k),!1,!0)},C=(N,k)=>{this.latestPointerEvent=N,this.latestPanInfo=k,this.stop(N,k),this.latestPointerEvent=null,this.latestPanInfo=null},O=()=>{const{dragSnapToOrigin:N}=this.getProps();(N||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:L}=this.getProps();this.panSession=new Ih(c,{onSessionStart:g,onStart:b,onMove:T,onSessionEnd:C,resumeAnimation:O},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:L,distanceThreshold:u,contextWindow:Kh(this.visualElement),element:this.visualElement.current})}stop(c,f){const u=c||this.latestPointerEvent,h=f||this.latestPanInfo,g=this.isDragging;if(this.cancel(),!g||!h||!u)return;const{velocity:b}=h;this.startAnimation(b);const{onDragEnd:T}=this.getProps();T&&Tt.postRender(()=>T(u,h))}cancel(){this.isDragging=!1;const{projection:c,animationState:f}=this.visualElement;c&&(c.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:u}=this.getProps();!u&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),f&&f.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(c,f,u){const{drag:h}=this.getProps();if(!u||!Pi(c,h,this.currentDirection))return;const g=this.getAxisMotionValue(c);let b=this.originPoint[c]+u[c];this.constraints&&this.constraints[c]&&(b=lv(b,this.constraints[c],this.elastic[c])),g.set(b)}resolveConstraints(){var g;const{dragConstraints:c,dragElastic:f}=this.getProps(),u=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(g=this.visualElement.projection)==null?void 0:g.layout,h=this.constraints;c&&zn(c)?this.constraints||(this.constraints=this.resolveRefConstraints()):c&&u?this.constraints=iv(u.layoutBox,c):this.constraints=!1,this.elastic=cv(f),h!==this.constraints&&!zn(c)&&u&&this.constraints&&!this.hasMutatedConstraints&&xa(b=>{this.constraints!==!1&&this.getAxisMotionValue(b)&&(this.constraints[b]=uv(u.layoutBox[b],this.constraints[b]))})}resolveRefConstraints(){const{dragConstraints:c,onMeasureDragConstraints:f}=this.getProps();if(!c||!zn(c))return!1;const u=c.current,{projection:h}=this.visualElement;if(!h||!h.layout)return!1;const g=$p(u,h.root,this.visualElement.getTransformPagePoint());let b=sv(h.layout.layoutBox,g);if(f){const T=f(Pp(b));this.hasMutatedConstraints=!!T,T&&(b=ey(T))}return b}startAnimation(c){const{drag:f,dragMomentum:u,dragElastic:h,dragTransition:g,dragSnapToOrigin:b,onDragTransitionEnd:T}=this.getProps(),C=this.constraints||{},O=xa(L=>{if(!Pi(L,f,this.currentDirection))return;let N=C&&C[L]||{};(b===!0||b===L)&&(N={min:0,max:0});const k=h?200:1e6,B=h?40:1e7,D={type:"inertia",velocity:u?c[L]:0,bounceStiffness:k,bounceDamping:B,timeConstant:750,restDelta:1,restSpeed:10,...g,...N};return this.startAxisValueAnimation(L,D)});return Promise.all(O).then(T)}startAxisValueAnimation(c,f){const u=this.getAxisMotionValue(c);return oh(this.visualElement,c),u.start(ty(c,u,0,f,this.visualElement,!1))}stopAnimation(){xa(c=>this.getAxisMotionValue(c).stop())}getAxisMotionValue(c){const f=`_drag${c.toUpperCase()}`,u=this.visualElement.getProps(),h=u[f];return h||this.visualElement.getValue(c,(u.initial?u.initial[c]:void 0)||0)}snapToCursor(c){xa(f=>{const{drag:u}=this.getProps();if(!Pi(f,u,this.currentDirection))return;const{projection:h}=this.visualElement,g=this.getAxisMotionValue(f);if(h&&h.layout){const{min:b,max:T}=h.layout.layoutBox[f],C=g.get()||0;g.set(c[f]-ns(b,T,.5)+C)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:c,dragConstraints:f}=this.getProps(),{projection:u}=this.visualElement;if(!zn(f)||!u||!this.constraints)return;this.stopAnimation();const h={x:0,y:0};xa(b=>{const T=this.getAxisMotionValue(b);if(T&&this.constraints!==!1){const C=T.get();h[b]=ov({min:C,max:C},this.constraints[b])}});const{transformTemplate:g}=this.visualElement.getProps();this.visualElement.current.style.transform=g?g({},""):"none",u.root&&u.root.updateScroll(),u.updateLayout(),this.constraints=!1,this.resolveConstraints(),xa(b=>{if(!Pi(b,c,null))return;const T=this.getAxisMotionValue(b),{min:C,max:O}=this.constraints[b];T.set(ns(C,O,h[b]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;rv.set(this.visualElement,this);const c=this.visualElement.current,f=Ml(c,"pointerdown",O=>{const{drag:L,dragListener:N=!0}=this.getProps(),k=O.target,B=k!==c&&ly(k);L&&N&&!B&&this.start(O)});let u;const h=()=>{const{dragConstraints:O}=this.getProps();zn(O)&&O.current&&(this.constraints=this.resolveRefConstraints(),u||(u=dv(c,O.current,()=>this.scalePositionWithinConstraints())))},{projection:g}=this.visualElement,b=g.addEventListener("measure",h);g&&!g.layout&&(g.root&&g.root.updateScroll(),g.updateLayout()),Tt.read(h);const T=as(window,"resize",()=>this.scalePositionWithinConstraints()),C=g.addEventListener("didUpdate",(({delta:O,hasLayoutChanged:L})=>{this.isDragging&&L&&(xa(N=>{const k=this.getAxisMotionValue(N);k&&(this.originPoint[N]+=O[N].translate,k.set(k.get()+O[N].translate))}),this.visualElement.render())}));return()=>{T(),f(),b(),C&&C(),u&&u()}}getProps(){const c=this.visualElement.getProps(),{drag:f=!1,dragDirectionLock:u=!1,dragPropagation:h=!1,dragConstraints:g=!1,dragElastic:b=Vu,dragMomentum:T=!0}=c;return{...c,drag:f,dragDirectionLock:u,dragPropagation:h,dragConstraints:g,dragElastic:b,dragMomentum:T}}}function jh(o){let c=!0;return()=>{if(c){c=!1;return}o()}}function dv(o,c,f){const u=uh(o,jh(f)),h=uh(c,jh(f));return()=>{u(),h()}}function Pi(o,c,f){return(c===!0||c===o)&&(f===null||f===o)}function hv(o,c=10){let f=null;return Math.abs(o.y)>c?f="y":Math.abs(o.x)>c&&(f="x"),f}class mv extends wa{constructor(c){super(c),this.removeGroupControls=ts,this.removeListeners=ts,this.controls=new fv(c)}mount(){const{dragControls:c}=this.node.getProps();c&&(this.removeGroupControls=c.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ts}update(){const{dragControls:c}=this.node.getProps(),{dragControls:f}=this.node.prevProps||{};c!==f&&(this.removeGroupControls(),c&&(this.removeGroupControls=c.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Hu=o=>(c,f)=>{o&&Tt.update(()=>o(c,f),!1,!0)};class gv extends wa{constructor(){super(...arguments),this.removePointerDownListener=ts}onPointerDown(c){this.session=new Ih(c,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Kh(this.node)})}createPanHandlers(){const{onPanSessionStart:c,onPanStart:f,onPan:u,onPanEnd:h}=this.node.getProps();return{onSessionStart:Hu(c),onStart:Hu(f),onMove:Hu(u),onEnd:(g,b)=>{delete this.session,h&&Tt.postRender(()=>h(g,b))}}}mount(){this.removePointerDownListener=Ml(this.node.current,"pointerdown",c=>this.onPointerDown(c))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Lu=!1;class pv extends z.Component{componentDidMount(){const{visualElement:c,layoutGroup:f,switchLayoutGroup:u,layoutId:h}=this.props,{projection:g}=c;g&&(f.group&&f.group.add(g),u&&u.register&&h&&u.register(g),Lu&&g.root.didUpdate(),g.addEventListener("animationComplete",()=>{this.safeToRemove()}),g.setOptions({...g.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),sy.hasEverUpdated=!0}getSnapshotBeforeUpdate(c){const{layoutDependency:f,visualElement:u,drag:h,isPresent:g}=this.props,{projection:b}=u;return b&&(b.isPresent=g,c.layoutDependency!==f&&b.setOptions({...b.options,layoutDependency:f}),Lu=!0,h||c.layoutDependency!==f||f===void 0||c.isPresent!==g?b.willUpdate():this.safeToRemove(),c.isPresent!==g&&(g?b.promote():b.relegate()||Tt.postRender(()=>{const T=b.getStack();(!T||!T.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:c}=this.props.visualElement;c&&(c.root.didUpdate(),iy.postRender(()=>{!c.currentAnimation&&c.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:c,layoutGroup:f,switchLayoutGroup:u}=this.props,{projection:h}=c;Lu=!0,h&&(h.scheduleCheckAfterUnmount(),f&&f.group&&f.group.remove(h),u&&u.deregister&&u.deregister(h))}safeToRemove(){const{safeToRemove:c}=this.props;c&&c()}render(){return null}}function Fh(o){const[c,f]=Gh(),u=z.useContext(Iu);return d.jsx(pv,{...o,layoutGroup:u,switchLayoutGroup:z.useContext(Qh),isPresent:c,safeToRemove:f})}const yv={pan:{Feature:gv},drag:{Feature:mv,ProjectionNode:Hh,MeasureLayout:Fh}};function Ch(o,c,f){const{props:u}=o;o.animationState&&u.whileHover&&o.animationState.setActive("whileHover",f==="Start");const h="onHover"+f,g=u[h];g&&Tt.postRender(()=>g(c,zl(c)))}class vv extends wa{mount(){const{current:c}=this.node;c&&(this.unmount=oy(c,(f,u)=>(Ch(this.node,u,"Start"),h=>Ch(this.node,h,"End"))))}unmount(){}}class bv extends wa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let c=!1;try{c=this.node.current.matches(":focus-visible")}catch{c=!0}!c||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Uh(as(this.node.current,"focus",()=>this.onFocus()),as(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function zh(o,c,f){const{props:u}=o;if(o.current instanceof HTMLButtonElement&&o.current.disabled)return;o.animationState&&u.whileTap&&o.animationState.setActive("whileTap",f==="Start");const h="onTap"+(f==="End"?"":f),g=u[h];g&&Tt.postRender(()=>g(c,zl(c)))}class xv extends wa{mount(){const{current:c}=this.node;if(!c)return;const{globalTapTarget:f,propagate:u}=this.node.props;this.unmount=uy(c,(h,g)=>(zh(this.node,g,"Start"),(b,{success:T})=>zh(this.node,b,T?"End":"Cancel")),{useGlobalTarget:f,stopPropagation:(u==null?void 0:u.tap)===!1})}unmount(){}}const Yu=new WeakMap,Gu=new WeakMap,wv=o=>{const c=Yu.get(o.target);c&&c(o)},Sv=o=>{o.forEach(wv)};function Tv({root:o,...c}){const f=o||document;Gu.has(f)||Gu.set(f,{});const u=Gu.get(f),h=JSON.stringify(c);return u[h]||(u[h]=new IntersectionObserver(Sv,{root:o,...c})),u[h]}function Ev(o,c,f){const u=Tv(c);return Yu.set(o,f),u.observe(o),()=>{Yu.delete(o),u.unobserve(o)}}const Av={some:0,all:1};class Mv extends wa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:c={}}=this.node.getProps(),{root:f,margin:u,amount:h="some",once:g}=c,b={root:f?f.current:void 0,rootMargin:u,threshold:typeof h=="number"?h:Av[h]},T=C=>{const{isIntersecting:O}=C;if(this.isInView===O||(this.isInView=O,g&&!O&&this.hasEnteredView))return;O&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",O);const{onViewportEnter:L,onViewportLeave:N}=this.node.getProps(),k=O?L:N;k&&k(C)};return Ev(this.node.current,b,T)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:c,prevProps:f}=this.node;["amount","margin","root"].some(jv(c,f))&&this.startObserver()}unmount(){}}function jv({viewport:o={}},{viewport:c={}}={}){return f=>o[f]!==c[f]}const Cv={inView:{Feature:Mv},tap:{Feature:xv},focus:{Feature:bv},hover:{Feature:vv}},zv={layout:{ProjectionNode:Hh,MeasureLayout:Fh}},Nv={...ev,...Cv,...yv,...zv},ke=Iy(Nv,Wy);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Dv=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(c,f,u)=>u?u.toUpperCase():f.toLowerCase()),Nh=o=>{const c=Dv(o);return c.charAt(0).toUpperCase()+c.slice(1)},$h=(...o)=>o.filter((c,f,u)=>!!c&&c.trim()!==""&&u.indexOf(c)===f).join(" ").trim(),Ov=o=>{for(const c in o)if(c.startsWith("aria-")||c==="role"||c==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=z.forwardRef(({color:o="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:u,className:h="",children:g,iconNode:b,...T},C)=>z.createElement("svg",{ref:C,..._v,width:c,height:c,stroke:o,strokeWidth:u?Number(f)*24/Number(c):f,className:$h("lucide",h),...!g&&!Ov(T)&&{"aria-hidden":"true"},...T},[...b.map(([O,L])=>z.createElement(O,L)),...Array.isArray(g)?g:[g]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(o,c)=>{const f=z.forwardRef(({className:u,...h},g)=>z.createElement(Rv,{ref:g,iconNode:c,className:$h(`lucide-${kv(Nh(o))}`,`lucide-${o}`,u),...h}));return f.displayName=Nh(o),f};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Zu=xe("activity",Uv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cs=xe("book-open",Hv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ph=xe("check",Lv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Bv=xe("chevron-down",Gv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],Vv=xe("code-xml",qv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Bu=xe("cpu",Yv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Xv=xe("file-code-2",Zv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xu=xe("file-text",Qv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4",key:"1slcih"}]],Kv=xe("flame",Jv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",key:"18mbvz"}],["path",{d:"M6.453 15h11.094",key:"3shlmq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}]],is=xe("flask-conical",Iv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],em=xe("gamepad-2",Wv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],$v=xe("hash",Fv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ec=xe("layers",Pv);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]],t0=xe("layout-template",e0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],n0=xe("leaf",a0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],tm=xe("menu",l0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],s0=xe("radio",i0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],jl=xe("search",o0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],c0=xe("send",u0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],f0=xe("share-2",r0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],am=xe("sparkles",d0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]],m0=xe("square-terminal",h0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cl=xe("x",g0);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],y0=xe("zap",p0),U0=se.memo(()=>{var C;const[o,c]=z.useState(""),[f,u]=z.useState(!1);z.useEffect(()=>{const O=new Date().getHours();O<12?c("Good morning"):O<18?c("Good afternoon"):c("Good evening"),u(!0)},[]);const h={"Good morning":["☀️ Rise and shine!","🌱 Fresh start!","☕ Coffee time!"],"Good afternoon":["⚡ Keep going!","🌻 Halfway there!","🚀 Power through!"],"Good evening":["🌙 Almost there!","⭐ Night owl!","🦉 Owl mode activate!"]},g=["✨","🌱","🚀","💫","⭐","🌈","🦄","🎯"],b=g[Math.floor(Math.random()*g.length)],T=((C=h[o])==null?void 0:C[Math.floor(Math.random()*3)])||"";return d.jsx(Sa,{children:f&&d.jsxs(ke.div,{initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0},className:"text-sm text-[var(--color-text-muted)] flex items-center gap-2",children:[d.jsx("span",{children:o}),d.jsx(ke.span,{initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},children:b}),d.jsxs("span",{className:"text-xs opacity-60 hidden sm:inline",children:["• ",T]})]})})}),H0=se.memo(()=>{const[o,c]=z.useState({plants:0,seeds:0,thoughts:0});z.useEffect(()=>{const u={plants:8,seeds:5,thoughts:7};let h=0;const g=()=>{h++;const b=Math.min(h/30,1),T=1-Math.pow(1-b,3);c({plants:Math.floor(u.plants*T),seeds:Math.floor(u.seeds*T),thoughts:Math.floor(u.thoughts*T)}),b<1&&requestAnimationFrame(g)};setTimeout(g,500)},[]);const f=[{label:"Projects",value:o.plants,icon:ec,color:"text-pink-400"},{label:"Notes",value:o.seeds,icon:is,color:"text-orange-400"},{label:"Essays",value:o.thoughts,icon:cs,color:"text-blue-400"}];return d.jsx("div",{className:"flex items-center gap-4 text-xs",children:f.map((u,h)=>d.jsxs("div",{className:"flex items-center gap-1.5",children:[d.jsx(u.icon,{size:12,className:u.color}),d.jsx("span",{className:"font-bold text-[var(--color-text)]",children:u.value}),d.jsx("span",{className:"text-[var(--color-text-muted)]",children:u.label})]},u.label))})}),v0=se.memo(()=>{const[o,c]=z.useState(!1),[f,u]=z.useState([]);return z.useEffect(()=>{const h=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];let g=0;const b=T=>{if(T.key===h[g]){if(g++,g===h.length){c(!0);const C=Array.from({length:50},(O,L)=>({id:L,x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,color:["#c084fc","#67e8f9","#fcd34d","#6ee7b7","#f472b6"][Math.floor(Math.random()*5)]}));u(C),setTimeout(()=>c(!1),3e3),g=0}}else g=0};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[]),d.jsx(Sa,{children:o&&d.jsxs(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 pointer-events-none z-[200]",children:[f.map(h=>d.jsx(ke.div,{initial:{x:h.x,y:h.y,scale:0},animate:{y:[h.y,h.y-200,h.y-400],x:[h.x,h.x+(Math.random()-.5)*100],scale:[0,1.5,0],rotate:[0,Math.random()*360]},transition:{duration:2,ease:"easeOut"},className:"absolute text-2xl",style:{color:h.color},children:["🌸","✨","🌟","💫","🎉","🦄"][Math.floor(Math.random()*6)]},h.id)),d.jsx(ke.div,{initial:{scale:0,y:window.innerHeight/2},animate:{scale:1,y:window.innerHeight/2-50},className:"absolute left-1/2 -translate-x-1/2 text-6xl",children:"🎮"}),d.jsx(ke.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},className:"absolute left-1/2 -translate-x-1/2 top-1/2 mt-16 text-2xl font-black text-white bg-[var(--accent-olive)] px-6 py-2 rounded-2xl",children:"CHEAT ACTIVATED!"})]})})});se.memo(()=>{const[o,c]=z.useState([]),f=z.useRef(0);return z.useEffect(()=>{const u=h=>{c(g=>[...g.slice(-20),{id:f.current++,x:h.clientX,y:h.clientY}])};return window.addEventListener("mousemove",u),()=>window.removeEventListener("mousemove",u)},[]),d.jsx("div",{className:"fixed inset-0 pointer-events-none z-[150] overflow-hidden",children:o.map((u,h)=>d.jsx(ke.div,{initial:{x:u.x,y:u.y,scale:1,opacity:.8},animate:{scale:0,opacity:0},transition:{duration:.5},className:"absolute w-2 h-2 rounded-full bg-[var(--accent-olive)]/30",style:{left:u.x-4,top:u.y-4}},u.id))})});se.memo(()=>{const o=["🐛 Debugging is like being a detective in a crime movie where you're also the murderer.","💻 There's a function called 'sleep' in every language... but productivity never sleeps.","🤖 The first computer bug was an actual moth found in the Mark II in 1947.","📱 Your phone has more computing power than the Apollo 11 guidance computer.","🌐 The first website is still online at info.cern.ch!","🧠 Humans can only hold about 7 items in short-term memory. Plus or minus 2.","🐍 Python is named after Monty Python, not the snake!","⌨️ The QWERTY keyboard was designed to slow down typists to prevent jams."],[c,f]=z.useState(""),[u,h]=z.useState(!1);return z.useEffect(()=>{const g=new Date,b=Math.floor((g.getTime()-new Date(g.getFullYear(),0,0).getTime())/864e5);f(o[b%o.length]),setTimeout(()=>h(!0),2e3)},[]),d.jsx(Sa,{children:u&&d.jsx(ke.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},className:"fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:w-96 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-4 shadow-xl z-40",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx(am,{size:16,className:"text-yellow-400 flex-shrink-0 mt-0.5"}),d.jsx("p",{className:"text-xs text-[var(--color-text-muted)] leading-relaxed",children:c}),d.jsx("button",{onClick:()=>h(!1),className:"text-zinc-500 hover:text-white flex-shrink-0",children:d.jsx(b0,{size:14})})]})})})});const b0=({size:o,className:c})=>d.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:c,children:d.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),L0=o=>{switch(o==null?void 0:o.toLowerCase()){case"essay":return d.jsx(cs,{size:16,className:"text-blue-400"});case"note":return d.jsx(Xu,{size:16,className:"text-emerald-400"});case"lab-note":return d.jsx(is,{size:16,className:"text-orange-400"});case"project":return d.jsx(ec,{size:16,className:"text-pink-400"});case"hobbies":return d.jsx(em,{size:16,className:"text-yellow-400"});default:return d.jsx(Xu,{size:16,className:"text-[var(--accent-olive)]"})}};se.memo(({title:o,url:c})=>{const[f,u]=z.useState(!1),h=async()=>{if(navigator.share)try{await navigator.share({title:o,url:c})}catch(g){console.error("Error sharing:",g)}else try{await navigator.clipboard.writeText(c),u(!0),setTimeout(()=>u(!1),2e3)}catch(g){console.error("Failed to copy:",g)}};return d.jsxs("button",{onClick:h,className:"flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--color-surface)] hover:bg-[var(--color-bg)] text-[var(--color-text)] transition-all duration-200 border border-[var(--color-border)] font-bold text-sm","aria-label":"Share this content",children:[f?d.jsx(Ph,{size:16,className:"text-green-400"}):d.jsx(f0,{size:16}),f?"Copied!":"Share"]})});const G0=se.memo(({text:o,color:c,gifUrl:f,className:u="",onClick:h})=>d.jsx("span",{onClick:h,className:`relative inline-block font-bold underline decoration-4 underline-offset-4 transition-all duration-300 gif-hover-bg ${c} ${u}`,style:{"--gif-url":`url(${f})`},children:o})),kh={"C / C++":m0,STM32:Bu,Robotics:y0,Python:Xv,OpenCV:Zu,I2C:s0,Hardware:Bu,Protocols:Zu,"Embedded Systems":Bu,Default:$v},x0=o=>{const c=["from-[var(--accent-olive)]/50 to-[var(--accent-brown)]/50","from-[var(--accent-tomato)]/50 to-[var(--accent-rust)]/50","from-[var(--accent-olive)]/50 to-[var(--accent-moss)]/50","from-[var(--accent-brown)]/50 to-[var(--accent-clay)]/50","from-[var(--accent-amber)]/50 to-[var(--accent-tomato)]/50"],f=o.split("").reduce((u,h)=>u+h.charCodeAt(0),0)%c.length;return c[f]},B0=se.memo(({text:o,onClick:c,colorClass:f="bg-[var(--color-surface)]",textColorClass:u="text-[var(--color-text-muted)]"})=>{const h=kh[o]||kh.Default;return x0(o),d.jsx("button",{onClick:c,className:"group relative px-3 py-1 text-xs font-bold font-serif rounded-none border-b-2 border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-all duration-300 hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 cursor-corgi",children:d.jsxs("span",{className:"relative z-10 flex items-center gap-1.5",children:[d.jsx(h,{size:12,className:"opacity-40 group-hover:opacity-100 group-hover:text-[var(--accent-olive)] transition-all duration-300"}),d.jsx("span",{className:"underline decoration-[var(--color-border)] group-hover:decoration-[var(--accent-olive)] underline-offset-4",children:o})]})})});se.memo(({children:o,className:c,delay:f=0})=>d.jsx(ke.div,{className:`absolute pointer-events-none opacity-20 hidden md:block ${c}`,animate:{y:[0,-20,0],rotate:[0,10,-10,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut",delay:f},"aria-hidden":"true",children:o}));se.memo(({title:o,description:c,gradient:f,underline:u})=>d.jsxs("div",{className:"group relative mb-8 inline-block w-full md:w-auto z-20",children:[d.jsx("h2",{className:`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${f} underline ${u} underline-offset-8 cursor-help`,children:o}),d.jsx("div",{className:"absolute left-0 -bottom-12 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-2 pointer-events-none whitespace-nowrap z-50",children:d.jsxs("div",{className:"bg-[var(--color-surface)] text-[var(--color-text)] text-sm font-bold px-4 py-2 rounded-xl shadow-2xl border border-[var(--color-border)] flex items-center gap-2",children:[d.jsx(am,{size:14,className:"text-yellow-400 animate-pulse"}),c]})})]}));se.memo(({href:o,icon:c,text:f,colorClass:u,shadowClass:h,gifUrl:g})=>{const b=o.startsWith("http"),T=`relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-2 rounded-xl font-bold text-white transition-all duration-150 border-b-[4px] active:border-b-0 active:translate-y-1 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/50 group overflow-hidden whitespace-nowrap ${u} ${h}`,C=d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none",children:d.jsx("img",{src:g,alt:"",className:"w-full h-full object-cover mix-blend-overlay",referrerPolicy:"no-referrer"})}),d.jsx(c,{size:18,className:"group-hover:scale-110 transition-transform relative z-10","aria-hidden":"true"}),d.jsx("span",{className:"hidden md:inline group-hover:underline decoration-white/30 underline-offset-4 relative z-10",children:f})]});return b?d.jsx("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":`Navigate to ${f} section`,className:T,children:C}):d.jsx(Nn,{to:o,"aria-label":`Navigate to ${f} section`,className:T,children:C})});const nm=se.memo(({isDark:o,onToggle:c})=>d.jsx("button",{onClick:c,className:"group px-3 py-2 rounded-none border-b-2 border-[var(--color-border)] transition-all duration-150 hover:border-[var(--accent-olive)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 bg-[var(--color-surface)] text-[var(--color-text)] font-serif text-sm","aria-label":o?"Switch to light mode":"Switch to dark mode",children:d.jsx("span",{className:"group-hover:underline group-hover:decoration-2 group-hover:decoration-[var(--accent-olive)] group-hover:underline-offset-4",children:o?"Light":"Dark"})}));se.memo(({icon:o,hoverColorClass:c,href:f,ariaLabel:u})=>d.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:`p-3 rounded-2xl bg-[var(--color-surface)] border-b-[4px] border-[var(--color-border)] text-[var(--color-text-muted)] transition-all duration-150 hover:-translate-y-2 active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 ${c}`,children:d.jsx(o,{size:24,"aria-hidden":"true"})}));se.memo(({icon:o,hoverColorClass:c,href:f,ariaLabel:u})=>d.jsx("a",{href:f,target:"_blank",rel:"noopener noreferrer","aria-label":u,className:`w-14 h-14 rounded-full bg-[var(--color-surface)] border-b-[4px] border-[var(--color-border)] text-[var(--color-text-muted)] flex items-center justify-center transition-all duration-150 hover:-translate-y-2 active:border-b-0 active:translate-y-1 focus:outline-none focus:ring-2 focus:ring-[var(--accent-olive)]/50 ${c}`,children:d.jsx(o,{size:24,strokeWidth:2,"aria-hidden":"true"})}));const w0=se.memo(({status:o})=>{switch(o){case"seedling":return d.jsx("span",{title:"Seedling",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-olive)]",children:"Seedling"});case"budding":return d.jsx("span",{title:"Budding",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-brown)]/10 border border-[var(--accent-brown)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-brown)]",children:"Budding"});case"published":return d.jsx("span",{title:"Published",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-moss)]/10 border border-[var(--accent-moss)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-moss)]",children:"Published"});case"in-progress":return d.jsx("span",{title:"In Progress",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-amber)]/10 border border-[var(--accent-amber)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-amber)]",children:"In Progress"});case"completed":return d.jsx("span",{title:"Completed",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--accent-olive)]",children:"Completed"});case"draft":return d.jsx("span",{title:"Draft",className:"inline-flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[var(--color-text-muted)]/10 border border-[var(--color-text-muted)]/20 text-[9px] font-bold uppercase tracking-widest text-[var(--color-text-muted)]",children:"Draft"});default:return null}}),q0=se.memo(()=>{const[o,c]=z.useState(!1);return z.useEffect(()=>{const f=()=>{window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]),d.jsx(Sa,{children:o&&d.jsx(ke.button,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),className:"fixed bottom-8 right-8 z-50 p-4 bg-[var(--color-surface)] text-[var(--color-text-muted)] rounded-none shadow-lg border-b-4 border-[var(--color-border)] hover:border-[var(--accent-olive)] hover:text-[var(--accent-olive)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all group font-serif text-sm","aria-label":"Back to top",children:d.jsxs("span",{className:"flex items-center gap-2",children:["Top",d.jsx(Bv,{size:16,className:"rotate-180 group-hover:translate-y-[-2px] transition-transform"})]})})})}),lm=[{id:"personal-website",date:"2026-04-06",title:"Project: Personal Portfolio Website",type:"project",status:"published",excerpt:"A personal portfolio website built with React, TypeScript, and Tailwind CSS. Features a brutalist design with theme switching and seasonal variations.",content:`# Project: Personal Portfolio Website

A modern, responsive portfolio website built with <a class="inline-link link-green" href="https://react.dev" target="_blank">React</a> and <a class="inline-link link-blue" href="https://typescriptlang.org" target="_blank">TypeScript</a>. This project showcases my journey as an ECE student and my work in software development.

## Overview

This portfolio was created to serve as a digital garden - a space where I can share my projects, learning notes, and ideas. Unlike a traditional blog, a digital garden emphasizes growth and continuous improvement of content.

## Tech Stack

- <a class="inline-link link-green" href="https://react.dev" target="_blank">React 19</a> with TypeScript
- <a class="inline-link link-blue" href="https://tailwindcss.com" target="_blank">Tailwind CSS 4</a>
- <a class="inline-link link-cyan" href="https://vitejs.dev" target="_blank">Vite</a>
- <a class="inline-link link-pink" href="https://motion.dev" target="_blank">Framer Motion</a>

## Key Features

### Theme System
The website features a sophisticated theme system that allows users to switch between dark and light modes. The themes are implemented using CSS custom properties (CSS variables), making it easy to maintain and extend.

### Brutalist Design
The design follows a brutalist aesthetic with:
- Bold typography using Inter and Source Serif fonts
- High contrast color schemes
- Minimal decorative elements
- Intentionally raw, unpolished look

### Responsive Layout
Built with mobile-first approach using Tailwind CSS, ensuring the site looks great on all device sizes.

### Smooth Animations
Framer Motion provides smooth page transitions and micro-interactions throughout the site.

## Implementation Details

### Component Architecture

\`\`\`typescript
// Example component structure
interface JournalEntry {
  id: string;
  title: string;
  content: string;
  tech: string[];
  category: string;
}
\`\`\`

### State Management
React's built-in state management is used throughout, with useState and useEffect hooks for managing theme state and user interactions.

### Routing
React Router handles client-side routing, enabling fast page transitions without full page reloads.

## Challenges & Solutions

### Challenge: Performance
**Solution:** Implemented code splitting with React.lazy() to reduce initial bundle size. Also added lazy loading for images.

### Challenge: Accessibility
**Solution:** Added skip links, ARIA labels, and proper semantic HTML. The site is keyboard navigable and screen reader friendly.

### Challenge: SEO
**Solution:** Added proper meta tags, Open Graph tags, RSS feed, robots.txt, and sitemap.xml.

## Key Learnings

1. **CSS Custom Properties** - Learned how to effectively use CSS variables for theming
2. **React Performance** - Understanding of code splitting and lazy loading
3. **Accessibility** - Importance of semantic HTML and ARIA labels
4. **Design Systems** - How to create consistent design with Tailwind

## Future Improvements

- Add comments section for each post
- Implement full-text search
- Add user authentication for private notes
- Create a newsletter subscription system
- Add more interactive elements

## Links

- <a class="inline-link link-cyan" href="https://je0dev.github.io/personal_website/" target="_blank">Live Demo</a>
- <a class="inline-link link-green" href="https://github.com/Je0Dev/personal_website" target="_blank">GitHub</a>
    `,tech:["React","TypeScript","Tailwind CSS","Vite"],category:"Web Development",readingTime:15,image:"https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg",skills:[{title:"React",description:"Building interactive UI"},{title:"TypeScript",description:"Type-safe development"},{title:"Tailwind CSS",description:"Utility-first styling"}]},{id:"cli-task-manager",date:"2026-03-16",title:"Project: CLI Task Manager",type:"project",status:"published",excerpt:"A command-line task management system written in C with file-based persistence.",content:`# Project: CLI Task Manager

A lightweight CLI application for managing tasks, built in <a class="inline-link link-blue" href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>. This project helped me understand data structures, file I/O, and memory management.

## Overview

The Task Manager is a command-line application that allows users to create, read, update, and delete tasks. It demonstrates fundamental C programming concepts while providing a useful utility.

## Why This Project?

As an ECE student, I wanted to build something practical that would help me understand low-level programming concepts. A task manager seemed like the perfect candidate - simple enough to complete in a reasonable time, but complex enough to teach important concepts like:

- Dynamic memory allocation
- File I/O operations  
- Data structure design
- User input validation
- Error handling

## Features

- **CRUD Operations** - Full create, read, update, and delete functionality
- **Priority Levels** - Tasks can be marked as High, Medium, or Low priority
- **Category Organization** - Tasks can be categorized for better organization
- **File Persistence** - All tasks are saved to a local JSON file
- **Search & Filter** - Find tasks by title, category, or priority
- **Color-coded Output** - Terminal colors for better UX
- **Command History** - Navigate through previous commands

## Technical Implementation

### Data Structures

The core of the application uses a dynamic array implementation:

\`\`\`c
typedef struct {
    int id;
    char title[100];
    char description[255];
    int priority; // 1=High, 2=Medium, 3=Low
    char category[50];
    char dueDate[20];
    int completed;
    time_t createdAt;
    time_t updatedAt;
} Task;

typedef struct {
    Task* tasks;
    int count;
    int capacity;
} TaskList;
\`\`\`

### File Operations

The application uses JSON format for persistence, which I chose for human-readability and ease of debugging:

\`\`\`c
void saveTasks(TaskList* list, const char* filename) {
    FILE* file = fopen(filename, "w");
    if (file == NULL) {
        printf("Error opening file!\\n");
        return;
    }
    
    fprintf(file, "{\\n");
    fprintf(file, "  \\"tasks\\": [\\n");
    
    for (int i = 0; i < list->count; i++) {
        Task* task = &list->tasks[i];
        fprintf(file, "    {\\n");
        fprintf(file, "      \\"id\\": %d,\\n", task->id);
        fprintf(file, "      \\"title\\": \\"%s\\",\\n", task->title);
        fprintf(file, "      \\"completed\\": %s\\n", 
                task->completed ? "true" : "false");
        fprintf(file, "    }");
        if (i < list->count - 1) fprintf(file, ",");
        fprintf(file, "\\n");
    }
    
    fprintf(file, "  ]\\n");
    fprintf(file, "}\\n");
    fclose(file);
}
\`\`\`

### Memory Management Strategy

One of the biggest challenges was proper memory management. I implemented a capacity doubling strategy:

\`\`\`c
void addTask(TaskList* list, Task task) {
    if (list->count >= list->capacity) {
        list->capacity *= 2;
        list->tasks = realloc(list->tasks, 
            list->capacity * sizeof(Task));
        if (list->tasks == NULL) {
            fprintf(stderr, "Memory allocation failed!\\n");
            exit(1);
        }
    }
    list->tasks[list->count++] = task;
}
\`\`\`

## Challenges & Solutions

### Challenge: Memory Management
**Problem:** Managing dynamic memory without leaks or segmentation faults.

**Solution:** I implemented a robust memory management strategy with:
- Capacity doubling to minimize reallocations
- Proper NULL checks after every malloc/realloc
- A cleanup function that frees all allocated memory
- Using Valgrind during development to detect leaks

### Challenge: Data Validation
**Problem:** User input could contain special characters or be too long, causing buffer overflows.

**Solution:** Created validation functions:

\`\`\`c
int validateTitle(const char* title) {
    if (title == NULL || strlen(title) == 0) {
        return 0; // Invalid
    }
    if (strlen(title) > 99) {
        printf("Title too long! Max 99 characters.\\n");
        return 0;
    }
    return 1; // Valid
}
\`\`\`

### Challenge: Cross-platform Compatibility
**Problem:** Terminal color codes work differently on Windows vs Linux/Mac.

**Solution:** Used conditional compilation:

\`\`\`c
#ifdef _WIN32
    #define CLEAR "cls"
#else
    #define CLEAR "clear"
#endif
\`\`\`

## Testing

I implemented comprehensive testing including:

1. **Unit Tests** - Test each function independently
2. **Integration Tests** - Test the full workflow
3. **Edge Case Tests** - Empty lists, maximum capacity, invalid input

\`\`\`bash
# Running tests
make test

# Output example
Test: Add single task... PASSED
Test: Add multiple tasks... PASSED
Test: Delete task... PASSED
Test: Memory cleanup... PASSED

All 15 tests passed!
\`\`\`

## Results

- **Lines of Code:** ~800
- **Build Time:** Instant with Make
- **Memory Usage:** ~50KB for 1000 tasks
- **Performance:** Instant operations on 1000+ tasks

## Future Improvements

Possible enhancements for v2.0:
- SQLite database backend
- Recurring tasks
- Due date reminders
- Export to CSV/JSON
- Multi-user support

## Lessons Learned

This project taught me:
1. The importance of proper memory management in C
2. How to design data structures for efficiency
3. The value of comprehensive error handling
4. How to write maintainable, documented code
5. The importance of testing at every level

## Source Code

Check out the full project on <a class="inline-link link-green" href="https://github.com/Je0Dev/cli-task-manager" target="_blank">GitHub</a>!

### Challenge: File Concurrency
**Solution:** Implemented file locking mechanism to prevent data corruption when multiple instances access the file.

## Key Learnings

1. **Dynamic Memory Allocation** - Understanding malloc, realloc, and free
2. **Data Structures** - Linked lists, arrays, and dynamic structures
3. **File I/O** - Reading and writing files in C
4. **Error Handling** - Proper error handling and edge cases
5. **Code Organization** - Modular programming with header files

## Future Enhancements

- Add recurring tasks
- Implement task dependencies
- Add due date reminders
- Create GUI version
- Add export to CSV/JSON

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/cli_task_manager_system" target="_blank">GitHub</a>
    `,tech:["C","CLI","Data Structures","File I/O"],category:"Software",readingTime:20,image:"https://www.oldbookillustrations.com/site/assets/files/14449/boyed-floating-tackle.jpg",skills:[{title:"C Programming",description:"Systems programming basics"},{title:"Data Structures",description:"Arrays, linked lists"},{title:"File I/O",description:"Reading and writing files"}]},{id:"cli-atm-system",date:"2026-03-16",title:"Project: CLI ATM System",type:"project",status:"published",excerpt:"A command-line ATM simulation demonstrating banking operations in C.",content:`# Project: CLI ATM System

A command-line ATM simulation demonstrating banking operations in <a class="inline-link link-blue" href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank">C</a>. This project simulates basic banking transactions with PIN authentication and transaction history.

## Why This Project?

After completing my CLI Task Manager, I wanted to build something that dealt with more complex data structures and required robust security considerations. An ATM simulation was perfect because it combines:

- **Data persistence** - Save account data between sessions
- **Security** - PIN authentication and account locking
- **Complex operations** - Multiple transaction types with validation
- **Audit trails** - Complete transaction history

## Overview

This ATM system simulates real-world banking operations including:
- PIN verification with attempt limiting
- Balance inquiry
- Cash withdrawal (with denomination handling)
- Deposit money
- Mini statement (recent transactions)
- PIN change
- Account creation

## Architecture

### Account Structure

The core data structure models a real bank account:

\`\`\`c
typedef struct {
    int accountNumber;
    char holderName[100];
    char pin[5]; // 4-digit PIN stored as string
    double balance;
    Transaction* transactions;
    int transactionCount;
    int maxTransactions;
    time_t createdAt;
    int failedAttempts;
    int isLocked;
} Account;
\`\`\`

### Transaction History

Every operation creates an audit trail:

\`\`\`c
typedef struct {
    char timestamp[30];
    char type[20]; // DEPOSIT, WITHDRAWAL, TRANSFER, PIN_CHANGE
    double amount;
    double balanceAfter;
    char description[100];
} Transaction;
\`\`\`

## Security Implementation

This was the most critical aspect of the project. I implemented multiple layers of security:

### PIN Authentication with Lockout

\`\`\`c
int verifyPIN(Account* acc, const char* inputPIN) {
    // Check if account is locked
    if (acc->isLocked) {
        printf("Account is locked. Contact bank.\\n");
        return -1;
    }
    
    int attempts = 0;
    while (attempts < 3) {
        if (strcmp(acc->pin, inputPIN) == 0) {
            acc->failedAttempts = 0; // Reset on success
            return 1; // Success
        }
        attempts++;
        acc->failedAttempts++;
        
        printf("Incorrect PIN. %d attempts remaining.\\n", 
               3 - acc->failedAttempts);
        
        if (acc->failedAttempts >= 3) {
            acc->isLocked = 1;
            printf("Account locked due to too many failed attempts.\\n");
            saveAccounts(); // Persist lock state
            return -1;
        }
    }
    return 0;
}
\`\`\`

### Input Masking

For PIN entry, I implemented secure input that doesn't echo characters:

\`\`\`c
void getSecurePIN(char* buffer, int size) {
    int pos = 0;
    char c;
    
    while ((c = getch()) != '\\r' && pos < size - 1) {
        if (c == '\\b' && pos > 0) {
            pos--;
            printf("\\b \\b"); // Backspace visually
        } else if (c >= '0' && c <= '9') {
            buffer[pos++] = c;
            printf("*"); // Mask input
        }
    }
    buffer[pos] = '\\0';
    printf("\\n");
}
\`\`\`

## Transaction Processing

### Cash Withdrawal with Denominations

The system calculates optimal bill distribution:

\`\`\`c
int withdraw(double amount, int* bills) {
    // bills[0] = $50, bills[1] = $20, bills[2] = $10, bills[3] = $5
    int denominations[] = {50, 20, 10, 5};
    
    if (amount < 5 || amount > 1000) {
        printf("Invalid withdrawal amount. $5-$1000 allowed.\\n");
        return 0;
    }
    
    int remaining = (int)amount;
    for (int i = 0; i < 4; i++) {
        bills[i] = remaining / denominations[i];
        remaining %= denominations[i];
    }
    
    return 1; // Success
}
\`\`\`

## Data Persistence

Accounts are stored in a binary file with simple encryption:

\`\`\`c
void saveAccounts(Account* accounts, int count) {
    FILE* fp = fopen("accounts.dat", "wb");
    if (!fp) return;
    
    // Simple XOR encryption for security
    for (int i = 0; i < count; i++) {
        Account enc = accounts[i];
        // Encrypt PIN (simple XOR with key)
        for (int j = 0; j < 5; j++) {
            enc.pin[j] ^= 0x5A;
        }
        fwrite(&enc, sizeof(Account), 1, fp);
    }
    fclose(fp);
}
\`\`\`

## Challenges Overcome

### Challenge: Concurrent Access
**Problem:** What if two users try to access the same account?

**Solution:** Implemented file locking using flock() on Linux or equivalent on Windows.

### Challenge: Data Integrity
**Problem:** What if the program crashes mid-transaction?

**Solution:** Write transactions to a temporary file first, then atomically rename on success.

## Testing

I created comprehensive test cases:

\`\`\`bash
# Test PIN verification
$ ./atm_test --pin-tests
Testing valid PIN... PASSED
Testing wrong PIN... PASSED
Testing account lockout... PASSED
Testing PIN change... PASSED

# Test transactions
$ ./atm_test --transaction-tests
Testing deposit... PASSED
Testing withdrawal... PASSED
Testing insufficient funds... PASSED
Testing transaction history... PASSED
\`\`\`

## Results

- **Accounts Supported:** Multiple accounts per file
- **Transaction History:** Last 50 transactions per account
- **Security:** 3-attempt lockout, encrypted PIN storage
- **Performance:** Instant operations

## What I Learned

1. **Security-first design** - Always think about how things can be exploited
2. **Data validation** - Never trust user input
3. **Atomic operations** - Ensure data consistency
4. **Testing edge cases** - Especially around security

## Source Code

Available on <a class="inline-link link-green" href="https://github.com/Je0Dev/cli-atm-system" target="_blank">GitHub</a>
        }
        attempts++;
        printf("Incorrect PIN. Attempts remaining: %d\\n", 3 - attempts);
    }
    printf("Account locked for security.\\n");
    return 0; // Failed
}
\`\`\`

## Transaction Processing

### Withdrawal

\`\`\`c
int withdraw(Account* acc, double amount) {
    if (amount > acc->balance) {
        printf("Insufficient funds!\\n");
        return 0;
    }
    if (amount > 1000) {
        printf("Withdrawal limit exceeded (max $1000)\\n");
        return 0;
    }
    acc->balance -= amount;
    addTransaction(acc, "WITHDRAWAL", amount);
    return 1;
}
\`\`\`

## Key Learnings

1. **Structure Handling** - Using structs for related data
2. **Array Operations** - Managing transaction history
3. **Input Validation** - Ensuring valid user input
4. **Security Basics** - Simple authentication

## Links

- <a class="inline-link link-cyan" href="https://github.com/Je0Dev/cli_atm_system" target="_blank">GitHub</a>
    `,tech:["C","CLI","Banking","Security"],category:"Software",readingTime:15,image:"https://www.oldbookillustrations.com/site/assets/files/14448/silent-melancholy.jpg",skills:[{title:"C Programming",description:"Systems programming"},{title:"Data Structures",description:"Struct and arrays"},{title:"Security",description:"Basic authentication"}]},{id:"esp32-timer-sensor",date:"2025-10-23",title:"Project: ESP32 Offboard Timer Sensor",type:"project",status:"published",excerpt:"An ESP32-based precision timer sensor system for embedded applications.",content:`# Project: ESP32 Offboard Timer Sensor

A precision timer system built with <a class="inline-link link-green" href="https://www.espressif.com/en/products/soc/esp32" target="_blank">ESP32</a> for embedded applications. This project demonstrates interrupt-based timing and sensor integration.

## Overview

The ESP32 Timer Sensor is designed for precision timing in embedded systems. It can:
- Measure time intervals with microsecond precision
- Trigger actions at specified intervals
- Interface with various sensors
- Send data via WiFi/Bluetooth

## Hardware

### Components
- ESP32 WROOM-32 module
- OLED display (SSD1306)
- Push buttons for control
- LED indicators
- External sensor inputs

### Circuit Diagram
The system uses the ESP32's built-in timer peripherals along with GPIO for external connections.

## Software Architecture

### Timer Configuration

\`\`\`c
// Configure hardware timer
void setupTimer() {
    timer_config_t config = {
        .alarm_en = TIMER_ALARM_EN,
        .counter_en = TIMER_COUNTER_EN,
        .intr_type = TIMER_INTR_LEVEL,
        .counter_dir = TIMER_COUNT_UP,
        .auto_reload = TIMER_AUTORELOAD_EN,
        .divider = 80  // 80 MHz / 80 = 1 MHz
    };
    
    timer_init(TIMER_GROUP_0, TIMER_0, &config);
    timer_set_alarm_value(TIMER_GROUP_0, TIMER_0, 1000000); // 1 second
}
\`\`\`

## Communication

### WiFi Data Transmission

\`\`\`c
void sendData(float sensorValue) {
    HTTPClient http;
    http.begin(serverEndpoint);
    http.addHeader("Content-Type", "application/json");
    
    char jsonBuffer[128];
    sprintf(jsonBuffer, "{\\"sensor\\": %.2f, \\"timestamp\\": %lu}", 
            sensorValue, millis());
    
    int httpCode = http.POST(jsonBuffer);
    http.end();
}
\`\`\`

## Challenges & Solutions

### Challenge: Timer Precision
**Solution:** Used hardware timer with divider for microsecond precision.

### Challenge: WiFi Stability
**Solution:** Implemented reconnection logic and buffering for offline data.

## Links

- <a class="inline-link link-orange" href="https://github.com/Je0Dev/esp32OffboardTimerSensor" target="_blank">GitHub</a>
    `,tech:["ESP32","C++","Embedded Systems","IoT"],category:"Embedded Systems",readingTime:18,image:"https://www.oldbookillustrations.com/site/assets/files/14432/hanging-one-hand.jpg",skills:[{title:"ESP32",description:"WiFi-enabled microcontroller"},{title:"Embedded C++",description:"Hardware programming"},{title:"IoT",description:"Internet of Things"}]},{id:"echoes-game",date:"2026-03-17",title:"Project: Echoes of the Fallen Kingdom",type:"project",status:"published",excerpt:"A text-based adventure game written in Python with turn-based combat.",content:`# Project: Echoes of the Fallen Kingdom

A text-based RPG adventure in <a class="inline-link link-blue" href="https://www.python.org" target="_blank">Python</a>. Players explore a dark fantasy world, battle monsters, and collect artifacts.

## Game Overview

**Echoes of the Fallen Kingdom** is a narrative-driven RPG where players:
- Explore procedurally generated dungeons
- Battle monsters with turn-based combat
- Collect powerful artifacts
- Make choices that affect the story

## Core Mechanics

### Character System

\`\`\`python
class Character:
    def __init__(self, name, health, attack, defense):
        self.name = name
        self.max_health = health
        self.health = health
        self.attack = attack
        self.defense = defense
        self.inventory = []
        self.abilities = []
    
    def take_damage(self, damage):
        actual_damage = max(1, damage - self.defense)
        self.health -= actual_damage
        return actual_damage
\`\`\`

### Combat System

\`\`\`python
def combat_round(player, enemy):
    print(f"\\n=== Combat with {enemy.name} ===")
    
    # Player attacks
    damage = player.attack - enemy.defense + random.randint(-3, 3)
    enemy.take_damage(damage)
    print(f"You deal {damage} damage!")
    
    if enemy.health <= 0:
        print(f"You defeated {enemy.name}!")
        return True
    
    # Enemy attacks
    damage = enemy.attack - player.defense + random.randint(-2, 2)
    player.take_damage(damage)
    print(f"{enemy.name} deals {damage} damage!")
    
    return player.health > 0
\`\`\`

## Game Features

### Inventory System
Players can collect and use items:
- Weapons (increase attack)
- Armor (increase defense)
- Potions (heal health)
- Artifacts (special abilities)

### Story Choices
Major decisions affect the game's ending:

\`\`\`python
def make_choice(choices):
    print("\\nWhat will you do?")
    for i, choice in enumerate(choices, 1):
        print(f"{i}. {choice}")
    
    while True:
        try:
            selection = int(input("> "))
            if 1 <= selection <= len(choices):
                return selection
        except ValueError:
            pass
\`\`\`

## Development

### File Structure
\`\`\`
echoes_game/
├── main.py          # Game entry point
├── characters/      # Character classes
├── combat/          # Combat system
├── items/           # Item definitions
├── story/           # Narrative content
└── save/            # Save game files
\`\`\`

## Links

- <a class="inline-link link-cyan" href="https://github.com/Je0Dev/echoes_fallen_kingdom_game_python" target="_blank">GitHub</a>
    `,tech:["Python","Game Dev","CLI"],category:"Software",readingTime:20,image:"https://www.oldbookillustrations.com/site/assets/files/14431/sleeping-car.jpg",skills:[{title:"Python",description:"Game logic"},{title:"OOP",description:"Object-oriented design"},{title:"Game Dev",description:"Game mechanics"}]},{id:"neon-vault",date:"2026-03-17",title:"Project: Neon Vault Web Game",type:"project",status:"published",excerpt:"A cyberpunk-themed endless runner web game with neon effects.",content:`# Project: Neon Vault Web Game

A cyberpunk-themed endless runner in <a class="inline-link link-yellow" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>. The player navigates through a neon-lit digital vault, avoiding obstacles and collecting data packets.

## Overview

**Neon Vault** is a fast-paced endless runner game featuring:
- Procedurally generated obstacles
- Score tracking
- Progressive difficulty
- Neon visual effects
- Responsive controls

## Technical Implementation

### Game Loop

\`\`\`javascript
class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.score = 0;
        this.speed = 5;
        this.obstacles = [];
        this.player = { x: 100, y: 300, width: 30, height: 30 };
    }
    
    update() {
        // Clear canvas
        this.ctx.fillStyle = '#0a0a0a';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update player
        this.updatePlayer();
        
        // Update obstacles
        this.updateObstacles();
        
        // Draw elements
        this.draw();
        
        // Check collisions
        this.checkCollisions();
        
        // Request next frame
        if (this.running) {
            requestAnimationFrame(() => this.update());
        }
    }
}
\`\`\`

### Neon Effects

\`\`\`javascript
function drawNeonRect(ctx, x, y, w, h, color) {
    // Outer glow
    ctx.shadowBlur = 20;
    ctx.shadowColor = color;
    
    // Main rectangle
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    
    // Inner bright part
    ctx.shadowBlur = 0;
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + 2, y + 2, w - 4, h - 4);
}
\`\`\`

## Controls

- **Space/Up Arrow** - Jump
- **Down Arrow** - Slide
- **Left/Right** - Move laterally

## Features

### Obstacle Types
1. **Barriers** - Must jump over
2. **Low Gates** - Must slide under
3. **Moving Platforms** - Timing required
4. **Data Packets** - Collect for bonus points

### Power-ups
- **Speed Boost** - Temporary speed increase
- **Shield** - One-hit protection
- **Magnet** - Attract data packets

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/neon_vault_web_game_javascript" target="_blank">GitHub</a>
    `,tech:["JavaScript","Canvas","Game Dev"],category:"Web Development",readingTime:15,image:"https://www.oldbookillustrations.com/site/assets/files/14429/looking-for-vessel.jpg",skills:[{title:"JavaScript",description:"Game logic"},{title:"HTML Canvas",description:"Rendering"},{title:"Game Dev",description:"Game mechanics"}]},{id:"imdb-clone",date:"2026-03-16",title:"Project: IMDB Clone App",type:"project",status:"published",excerpt:"An Android application in Java for movie browsing with watchlist management.",content:`# Project: IMDB Clone App

An Android application in <a class="inline-link link-orange" href="https://developer.android.com" target="_blank">Java</a> for movie browsing with watchlist management. Users can search movies, view details, and manage their watchlist.

## Overview

This app provides:
- Movie search functionality
- Movie details view (rating, synopsis, cast)
- Personal watchlist
- Watched movies tracking
- Favorites collection

## Architecture

### Database Schema (SQLite)

\`\`\`java
public class MovieContract {
    public static final String SQL_CREATE_MOVIES = 
        "CREATE TABLE movies (" +
        "id INTEGER PRIMARY KEY," +
        "title TEXT NOT NULL," +
        "rating REAL," +
        "year INTEGER," +
        "poster_url TEXT," +
        "synopsis TEXT)";
        
    public static final String SQL_CREATE_WATCHLIST =
        "CREATE TABLE watchlist (" +
        "movie_id INTEGER PRIMARY KEY," +
        "date_added TEXT," +
        "FOREIGN KEY(movie_id) REFERENCES movies(id))";
}
\`\`\`

### Data Models

\`\`\`java
public class Movie {
    private long id;
    private String title;
    private double rating;
    private int year;
    private String posterUrl;
    private String synopsis;
    private List<String> genres;
    private List<String> cast;
    
    // Getters and setters
}
\`\`\`

## Key Features

### Search
Users can search movies by title with autocomplete suggestions.

### Watchlist Management
\`\`\`java
public void addToWatchlist(long movieId) {
    ContentValues values = new ContentValues();
    values.put("movie_id", movieId);
    values.put("date_added", new Date().toString());
    db.insert("watchlist", null, values);
}
\`\`\`

## Links

- <a class="inline-link link-green" href="https://github.com/Je0Dev/ImdbCloneApp" target="_blank">GitHub</a>
    `,tech:["Java","Android","SQLite"],category:"Mobile Development",readingTime:12,image:"https://www.oldbookillustrations.com/site/assets/files/14428/astonished-crew.jpg",skills:[{title:"Java",description:"Android development"},{title:"SQLite",description:"Local database"},{title:"UI/UX",description:"Mobile interface"}]},{id:"language-learning-website",date:"2026-04-06",title:"Note: Language Learning Website",type:"note",status:"published",excerpt:"A website for language learning with flashcards and progress tracking.",content:`# Note: Language Learning Website

A website for language learning with flashcards and progress tracking. This project helped me learn React while building something practical.

## Overview

The language learning platform includes:
- Flashcard system for vocabulary
- Spaced repetition algorithm
- Progress tracking dashboard
- Multiple language support
- User accounts (planned)

## Tech Stack

- <a class="inline-link link-green" href="https://react.dev" target="_blank">React</a>
- <a class="inline-link link-blue" href="https://typescriptlang.org" target="_blank">TypeScript</a>
- <a class="inline-link link-blue" href="https://tailwindcss.com" target="_blank">Tailwind</a>

## Flashcard System

\`\`\`typescript
interface Flashcard {
  id: string;
  front: string;      // Word in target language
  back: string;       // Translation
  language: string;
  difficulty: number; // 1-5
  nextReview: Date;
  correctCount: number;
}

interface Deck {
  id: string;
  name: string;
  cards: Flashcard[];
  language: string;
}
\`\`\`

## Spaced Repetition

The app uses a simplified SM-2 algorithm:

\`\`\`typescript
function calculateNextReview(card: Flashcard, quality: number): Date {
  const interval = card.correctCount * 2; // days
  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + interval);
  return nextDate;
}
\`\`\`

## Future Plans

- User authentication
- Multiple users
- Cloud sync
- Mobile app

## Links

- <a class="inline-link link-cyan" href="https://je0dev.github.io/lang_website/" target="_blank">Live Demo</a>
- <a class="inline-link link-green" href="https://github.com/Je0Dev/lang_website" target="_blank">GitHub</a>
    `,tech:["React","TypeScript","Tailwind"],category:"Web Development",readingTime:10,image:"https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg",skills:[{title:"React",description:"Frontend framework"},{title:"Spaced Repetition",description:"Learning algorithm"}]},{id:"ece-learning-journey",date:"2026-03-25",title:"Note: My ECE Learning Journey",type:"note",status:"published",excerpt:"Reflections on my journey through Electrical and Computer Engineering.",content:`# Note: My ECE Learning Journey

Every journey begins with a single step, and mine began in a small classroom in Greece, staring at a blackboard filled with equations that seemed to belong to a different language. That was the moment I realized that engineering wasn't just about building things—it was about seeing the world in a fundamentally different way.

## The Beginning: Why ECE?

I still remember the confusion on my parents' faces when I told them I wanted to study Electrical and Computer Engineering. "Why not just study Computer Science?" they asked. "Isn't that more practical?" 

The truth is, I've always been fascinated by the intersection of hardware and software—the magic that happens when you press a button and something physical happens in the world. There's something deeply satisfying about understanding not just how software works, but how it interacts with the physical world through circuits, signals, and systems.

When I started at the University of Patras, I had no idea what I was getting into. I thought I liked math and physics—that's what got me into ECE in the first place. But I quickly learned that ECE is a different beast entirely. It's not just about knowing the theory; it's about being able to apply it to solve real problems.

## First Year: The Foundation

The first year of ECE is like drinking from a firehose while trying to stay afloat. Calculus, Linear Algebra, Physics—these aren't just abstract concepts to memorize. They're tools you'll use for the rest of your career.

I remember spending hours on Linear Algebra, trying to understand eigenvectors and eigenvalues. At the time, it felt like abstract torture. But now, when I work with machine learning algorithms or signal processing, I realize why it was so important. The mathematics isn't just academic—it's the language of engineering.

Programming fundamentals in C was my first real exposure to coding. I say "exposure" because at first, it felt like learning a completely new way of thinking. Variables, loops, functions—it was all so different from anything I'd done before. But there was something deeply satisfying about writing code that actually compiled and ran. The first time I wrote a program that worked correctly on the first try, I felt like I could conquer the world.

## Second Year: Things Get Real

Second year is where ECE starts to separate itself from pure mathematics. You move from theoretical concepts to actual hardware and real-world applications.

Digital Systems was a revelation. Finally, I could see how all that binary math actually became something useful. Building circuits with logic gates, understanding how computers think at the lowest level—it's the kind of knowledge that changes how you see every piece of technology around you.

Data Structures was another beast entirely. This was my introduction to computer science proper—the art of organizing and manipulating data efficiently. Arrays, linked lists, trees, graphs. Each one is a tool for a different job, and learning when to use which is a skill that takes years to master.

But the real highlight of second year was Signals and Systems. There's something almost magical about being able to transform a time-domain signal into its frequency representation and back again. It's like having a superpower—you can see patterns that others can't, understand behaviors that seem mysterious to everyone else.

## Third Year: The Deep Dive

By third year, you stop being a generalist and start becoming a specialist. The courses get more focused, the projects more complex, and the expectations higher.

Microprocessors was where hardware met software in a way I'd never experienced before. Writing assembly code, understanding how the CPU executes instructions at the lowest level—it's the kind of knowledge that makes you a better programmer overall. When you know what's happening under the hood, you write better code.

Control Systems opened my eyes to how we can make machines behave predictably. From simple thermostats to complex robotic arms, control theory is everywhere. The idea that you can mathematically guarantee how a system will behave—that's powerful stuff.

But it was Embedded Systems that really captured my imagination. There's something special about writing code that interacts directly with hardware. No operating system, no fancy abstractions—just you and the silicon. Every byte matters, every cycle counts. It's a different kind of programming, and I love it.

## The Projects: Learning by Doing

Theory is important, but engineering is ultimately about making things. That's why I'm so grateful for the project-based learning in our curriculum.

My CLI Task Manager was my first real software project—a command-line application that helped users manage their tasks. It taught me about file I/O, data structures, and user interface design. Most importantly, it taught me about the software development process itself: planning, coding, testing, refactoring.

The ATM System project was my introduction to object-oriented design. I learned about classes, inheritance, polymorphism—not as abstract concepts, but as tools for solving real problems. When you're designing a system that handles real money, you can't afford to be sloppy.

The ESP32 Timer Sensor project brought together everything I'd learned about embedded systems. Microcontroller programming, sensor interfacing, wireless communication—all in one project. There's nothing quite like seeing your code make something happen in the physical world.

And then there's the Neon Vault game—the project that taught me about game development, performance optimization, and working under pressure. Building a complete game from scratch is an education in itself.

## Learning New Languages: Rust, Go, Zig, C++, C#

One of the most valuable skills I've developed is the ability to learn new programming languages. Each language has its own philosophy, its own strengths, and its own way of thinking about problems.

Rust taught me about memory safety and ownership. The borrow checker was frustrating at first, but it taught me to think about memory in a way I'd never done before. Now, when I write code in any language, I'm more aware of what's happening with memory.

Go showed me the value of simplicity and concurrency. The goroutines and channels model is elegant in its simplicity. It's a language designed for practical problems, not theoretical elegance.

Zig is still a work in progress, but I'm impressed by its low-level approach. No hidden allocations, no magic—it gives you complete control over what's happening in your program.

C++ has been a journey. It's powerful but complex, and there's always more to learn. The balance between performance and readability is constantly challenging.

And C#, well, that's the language I'm using to explore different paradigms. The .NET ecosystem is vast, and there's always something new to discover.

## What I've Learned

After all these years, what do I know? More importantly, what do I understand?

I've learned that engineering isn't about having all the answers—it's about knowing how to find them. The technology landscape changes so fast that what you learn today will be obsolete in five years. What matters isn't the specific technology, but the ability to learn new things quickly.

I've learned that collaboration is essential. The best engineers aren't the ones who know everything—they're the ones who know how to work with others to solve problems. Code reviews, pair programming, open source contributions—these aren't just best practices, they're how you grow as an engineer.

I've learned that failure is okay. Some of my best learning experiences came from projects that failed spectacularly. The ATM system that crashed, the game that was too slow, the embedded system that did nothing but overheat—all of these taught me more than the successes ever could.

## What's Next

The road ahead is long. I still have years left in my degree, and a lifetime of learning ahead. But I'm excited about the possibilities.

I'm particularly interested in embedded systems and low-level programming. There's something deeply satisfying about writing code that runs close to the metal, that has direct access to hardware, that every cycle matters. I want to explore real-time systems, robotics, and perhaps even operating system development.

I also want to contribute more to open source. The open source community has given me so much—free tools, educational resources, code I could learn from. I want to give back, to contribute to projects that help others the way they've helped me.

And who knows? Maybe I'll pursue a master's degree, maybe in embedded systems, maybe in something else entirely. The beautiful thing about ECE is that it opens so many doors. Hardware, software, theory, application—so many paths to explore.

## The Journey Continues

As I write this, I'm reminded that this is just one chapter in a much longer story. The ECE student of today will become the engineer of tomorrow, and there's no telling what technologies we'll be working with, what problems we'll be solving.

But I know one thing: I'm exactly where I want to be. Struggling with difficult concepts, building projects that sometimes work and sometimes don't, learning new things every single day—that's the life I chose, and I wouldn't trade it for anything.

The blackboard full of equations that once confused me so much? Now I see it as a map of possibilities. Every concept, every theory, every project—it's all part of a journey that's only just beginning.

Here's to the next step.
    `,tech:["Education","ECE"],category:"Reflections",readingTime:15,image:"https://www.oldbookillustrations.com/site/assets/files/14449/boyed-floating-tackle.jpg",skills:[{title:"Problem Solving",description:"Analytical thinking"},{title:"Systems Thinking",description:"Holistic approach"}]},{id:"learning-rust",date:"2026-04-06",title:"Note: Learning Rust",type:"note",status:"published",excerpt:"My journey learning Rust for systems programming.",content:`# Note: Learning Rust

There's a moment in every programmer's life when they encounter a language that makes them question everything they thought they knew about programming. For me, that language was Rust.

I first heard about Rust years ago—everyone in the programming community seemed to be talking about it. "It's the most loved programming language," they said. "It has a steep learning curve," they warned. "The borrow checker will break you," they joked. But I never really understood why until I actually sat down and tried to learn it.

## The First Attempt

My first encounter with Rust was, to put it mildly, humbling. I'd spent years writing code in C, Python, Java—languages where I could do basically whatever I wanted without the compiler complaining too much. Rust was different.

I wrote what I thought was a simple function. The compiler responded with an error about lifetimes that I couldn't make heads or tails of. I tried to fix it. Another error. Then another. After an hour of fighting, I closed the editor and told myself I'd come back to it later.

That "later" took a while to arrive.

## The Second Attempt

A few months later, I decided to give Rust another try. This time, I came prepared. I started with "The Book"—the official Rust programming guide. And something clicked.

The problem with my first attempt wasn't that Rust was too hard. It was that I was approaching it wrong. I was trying to write code the way I always had, and expecting Rust to accept it. But Rust isn't just a different language—it's a different way of thinking about memory, about ownership, about safety.

The borrow checker isn't your enemy. It's your teacher. It's teaching you to think about memory in a way that most high-level languages never do. Once I understood that, everything changed.

## Understanding Ownership

The first big concept to grasp in Rust is ownership. In most languages, you don't really think about what happens to memory when you assign a value to a variable. You just assume it works. But in Rust, every value has exactly one owner, and when that owner goes out of scope, the value is dropped.

This sounds restrictive at first—and it is, initially. But it eliminates an entire class of bugs. No more use-after-free bugs. No more double-free bugs. No more null pointer dereferences (well, mostly). The compiler catches these errors at compile time, before your code ever runs.

The first time I wrote a Rust program that compiled cleanly, I felt a strange sense of pride. The compiler had actually verified that my code was safe. That's not something I could say about code I'd written in other languages.

## The Joy of Pattern Matching

One of my favorite features of Rust is pattern matching. It's not unique to Rust—functional languages have had it for decades—but the way Rust implements it feels particularly elegant.

Match expressions let you handle different cases with ease:

\`\`\`rust
enum Result<T, E> {
    Ok(T),
    Err(E),
}

fn handle_result(r: Result<i32, String>) {
    match r {
        Ok(value) => println!("Got: {}", value),
        Err(error) => println!("Error: {}", error),
    }
}
\`\`\`

This is so much cleaner than the if-else chains I'm used to from other languages. And the compiler ensures you handle every possible case, so you never forget a corner case again.

## The Error Handling Revolution

Speaking of errors—Rust's approach to error handling changed how I think about writing robust code. In other languages, you either use exceptions (which can be caught anywhere and make control flow hard to follow) or return error codes (which are easy to ignore). Rust gives you something better: the Result type.

Functions that can fail return \`Result<T, E>$. You explicitly handle the success and error cases. It's more verbose, but it's also crystal clear. You can never accidentally ignore an error because the compiler will warn you if you don't handle both branches.

And the \`?\` operator makes propagating errors almost as easy as throwing exceptions:

\`\`\`rust
fn read_file_contents(path: &str) -> Result<String, std::io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}
\`\`\`

This is concise, explicit, and safe. What's not to love?

## Concurrency Without Fear

One of Rust's biggest promises is safe concurrency. In other languages, data races are insidious bugs that can hide in production for years, only manifesting under specific timing conditions. Rust makes data races impossible by default.

The ownership system extends to threading. If you try to share data between threads without proper synchronization, the compiler catches it. You can't accidentally create a data race because the compiler won't let you.

And Rust's async/await makes writing concurrent code almost as easy as writing synchronous code. The distinction between "blocking" and "non-blocking" becomes less important when you can write asynchronous code that looks synchronous.

## The Ecosystem

Rust's standard library is surprisingly complete. Strings, collections, file I/O, networking—all built-in. But where Rust really shines is its ecosystem of third-party libraries.

Cargo, Rust's package manager, is a joy to use. Dependencies are declared in your Cargo.toml, and Cargo handles everything: fetching, compiling, versioning. It's like having a super-powered pip/npm bundle in one tool.

Crates.io, the package registry, has libraries for almost everything. Need to parse JSON? Serde has you covered. Want to make HTTP requests? Reqwest is excellent. Building a web server? Choose from Rocket, Actix-web, Axum, and many more.

## The Community

What strikes me most about Rust is its community. The people who use Rust genuinely care about writing good code. They're helpful, patient, and passionate about the language.

The Rust Discord server, the Rust subreddit, the Rust forums—there's always someone willing to help, whether you're a complete beginner or an experienced developer learning a new concept.

And Rust's commitment to inclusivity is refreshing. The Rust team has worked hard to make the language and its community welcoming to everyone. That's not just good ethics—it's good engineering. Diverse teams build better software.

## What I've Built

My Rust journey has included several projects, each teaching me something new. A command-line todo app taught me the basics. An HTTP server introduced me to async programming. A simple database implementation pushed me to understand memory management at a deeper level.

Each project was frustrating at times—fighting the borrow checker, deciphering cryptic error messages, rethinking my approach to problems. But each project also taught me something that made me a better programmer, even in other languages.

I now think about memory safety when I write code in any language. I handle errors more explicitly. I use pattern matching more often. I think about concurrency more carefully. Rust has made me a better programmer, even when I'm not writing Rust.

## The Road Ahead

I'm still learning Rust. I suspect I always will be. There's always more to learn: unsafe Rust, macros, custom allocators, embedded systems programming. The depth of the language is almost overwhelming.

But that's also what makes it exciting. Unlike languages where you've "learned" everything there is to know after a few months, Rust keeps giving. There's always a new technique to learn, a new pattern to discover, a new way to think about problems.

The learning curve is real. The borrow checker will frustrate you. You'll write code that doesn't compile, then write different code that doesn't compile for a different reason. You'll spend hours debugging a problem only to realize the compiler could have told you exactly what was wrong if you'd only read the error message more carefully.

But there's a payoff. When your Rust code compiles, it's correct. When it runs, it's fast. And when you look back at what you've learned, you realize you've grown as a programmer in ways you didn't expect.

So if you're thinking about learning Rust—do it. Embrace the struggle. Fight the borrow checker. Read the error messages. Ask for help when you need it.

And remember: the compiler is your friend.
    `,tech:["Rust","Systems Programming"],category:"Learning",readingTime:12,image:"https://www.oldbookillustrations.com/site/assets/files/14448/silent-melancholy.jpg",skills:[{title:"Rust",description:"Memory-safe systems programming"},{title:"Ownership",description:"Rust's unique feature"}]},{id:"learning-go",date:"2026-04-06",title:"Note: Learning Go",type:"note",status:"published",excerpt:"Exploring Go for backend development and concurrency.",content:`# Note: Learning Go

After the intensity of learning Rust, I was ready for something different. I wanted a language that was simpler, more practical, and better suited for building real-world applications without as much of a learning curve. That's when I turned to Go.

I first encountered Go at a hackathon a couple of years ago. Someone was using it to build a microservice, and I was impressed by how quickly they could spin up a working API. "It's like Python but compiled," they told me. That intrigued me.

## The Philosophy of Simplicity

What strikes me most about Go is its philosophy of intentional simplicity. Unlike many modern languages that keep adding features, Go has deliberately remained small. There's no generics (until recently), no exceptions, no fancy type system. Just simple, readable code that does what it says.

This simplicity isn't a limitation—it's a feature. When I write Go, I spend less time fighting the language and more time solving actual problems. The code I write is easy to understand, easy to maintain, and easy to refactor.

Go's creators understood something important: most code is read more often than it's written. So they optimized for readability over expressiveness. You can pick up a Go codebase you've never seen and understand it within minutes. That's not something you can say about C++ or even Rust.

## The Go Playground

One of the things I love about Go is the Go Playground. It's a web-based environment where you can write and run Go code instantly, no setup required. It's perfect for experimenting, sharing snippets, and testing ideas.

I spent hours in the playground when I was learning Go, just trying out different patterns and seeing how things worked. There's something liberating about being able to experiment without any friction. No installing tools, no configuring environments—just code.

The playground also makes it easy to share code with others. Need to demonstrate a concept? Share a playground link. Want help with a bug? Paste your code into the playground and share it. It's that simple.

## Goroutines: Concurrency Made Easy

Go's approach to concurrency is one of its most powerful features. Goroutines are lightweight threads managed by the Go runtime, not the operating system. You can spawn thousands of goroutines without any issues.

\`\`\`go
func main() {
    // Spawn a goroutine
    go sayHello()
    
    // Wait a bit
    time.Sleep(time.Second)
}

func sayHello() {
    fmt.Println("Hello!")
}
\`\`\`

But the real magic is channels. Channels let goroutines communicate and synchronize safely:

\`\`\`go
func main() {
    ch := make(chan string)
    
    go func() {
        ch <- "Hello from goroutine!"
    }()
    
    msg := <-ch
    fmt.Println(msg)
}
\`\`\`

This simple pattern makes concurrency approachable. You don't need to worry about locks or mutexes or race conditions—channels handle all of that for you.

I built a simple web scraper using goroutines and channels, and it was a revelation. I could fetch multiple pages simultaneously, process results concurrently, and coordinate everything with channels. The code was clean, understandable, and fast.

## The Standard Library

Go's standard library is outstanding. From HTTP servers to JSON parsing to file I/O, it's all built-in. Need to create a web server? The net/http package has you covered. Need to parse JSON? encoding/json is there. Need to work with files? os and io packages handle it all.

This means you can build real applications without reaching for third-party libraries. Of course, the Go ecosystem has excellent libraries for when you need them, but the standard library is sufficient for most tasks.

Here's a complete HTTP server in Go, just using the standard library:

\`\`\`go
package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}
\`\`\`

That's it. One file, no dependencies, and you have a working HTTP server. Try doing that in most other languages.

## Error Handling

Go's approach to error handling is simple but effective. Functions return an error as their last return value. You check for errors explicitly.

\`\`\`go
result, err := doSomething()
if err != nil {
    return err
}
\`\`\`

At first, this felt verbose. Why do I have to check errors everywhere? But I came to appreciate it. Errors aren't hidden in exception hierarchies—they're just values. You can handle them however you want, propagate them up the call stack, or wrap them with context.

No more "catch all the exceptions at the top" patterns. No more silent failures. Errors are visible, explicit, and handled appropriately.

## Build Speed

One of Go's killer features is its build speed. Go compiles incredibly fast—even for large projects. This makes the development loop incredibly satisfying. Change a file, build, test, repeat. It's almost as fast as interpreted languages but produces native binaries.

The go tool is also excellent. go build, go test, go run, go mod—these commands just work. There's no complex configuration, no cryptic flags, no magic. It does what you'd expect.

## The Go Community

The Go community is pragmatic and welcoming. Go isn't a flashy language—it's a tool for getting things done. And the people who use it tend to share that philosophy.

Go conferences are filled with people talking about practical solutions to real problems. Go meetups are collaborative and helpful. The Go subreddit is less toxic than most programming communities.

I also appreciate Go's commitment to backward compatibility. Code you write today will still compile in future versions of Go. That's important for long-term maintenance and for building trust with users.

## What I've Built

My Go journey has included several practical projects. A REST API for managing tasks. A simple CLI tool for processing CSV files. A web scraper that fetches and analyzes pages concurrently.

Each project reinforced what I love about Go: the simplicity, the tooling, the standard library. I never felt like I was fighting the language—instead, it felt like a partner in solving problems.

I also appreciate how testable Go code is. The testing package makes writing tests easy, and the conventions around testing (table-driven tests, subtests) are practical and scalable.

## Tradeoffs

Go isn't perfect. The lack of generics (until recently) made some patterns awkward. The error handling can be verbose. The type system is simple, which means less expressiveness than languages like Rust.

And I've never been a huge fan of the go fmt tool. The formatting rules are fine, but auto-formatting on save can be jarring when you're still figuring things out.

But these are minor complaints. For the kinds of problems I use Go for—backend services, CLI tools, network utilities—it's an excellent choice.

## Go and Me

Go has found a permanent place in my toolkit. It's not my only language—I still use Python for quick scripts, Rust for systems programming, and TypeScript for web development. But Go fills a specific niche: practical, fast, simple programming for real-world problems.

What I appreciate most is Go's honesty. It doesn't try to be everything to everyone. It doesn't chase trends or add flashy features. It's a mature, stable language designed for building software that matters.

In a world of ever-more-complex programming languages, there's something refreshing about Go's simplicity. It's a reminder that sometimes, the best solution is the straightforward one.

I'm not done learning Go—there are still areas I want to explore, like embedded systems with TinyGo, or building more sophisticated microservices. But I'm confident that Go will remain a valuable part of my programming toolkit for years to come.
    `,tech:["Go","Backend"],category:"Learning",readingTime:10,image:"https://www.oldbookillustrations.com/site/assets/files/14432/hanging-one-hand.jpg",skills:[{title:"Go",description:"Simple, fast, concurrent"},{title:"Goroutines",description:"Lightweight threads"}]},{id:"learning-zig",date:"2026-04-06",title:"Note: Learning Zig",type:"note",status:"published",excerpt:"Discovering Zig for low-level programming.",content:`# Note: Learning Zig

After learning Rust and Go, I wanted to explore something even closer to the metal. That's when I discovered Zig—a language that bills itself as "a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software."

What drew me to Zig was its philosophy: no hidden control flow, no hidden memory allocations, no preprocessor. Everything is explicit, everything is visible. It's a language that trusts the programmer.

## First Impressions

My first encounter with Zig was... confusing, honestly. The syntax was unfamiliar, and some of the concepts were different from anything I'd seen before. But there was something appealing about its directness. No magic, no abstractions hiding what your code actually does.

I started by reading through the official documentation and trying to understand Zig's core principles. What I found was a language that's unapologetically low-level while still being modern and practical.

## No Hidden Control Flow

One of Zig's key principles is "no hidden control flow." This means that things that are implicit in other languages are explicit in Zig.

For example, in C, the preprocessor can completely transform your code before compilation. In Zig, there's no preprocessor. What you see is what you get.

Similarly, in many languages, operator overloading can hide what actually happens when you use operators. In Zig, operator overloading doesn't exist. If you use the + operator, you know exactly what code will run.

This makes code more predictable and easier to understand. When you read Zig code, you don't have to wonder what hidden transformations are happening. The code does what it says.

## Manual Memory Management

Zig gives you direct control over memory. There's no garbage collector, no automatic reference counting, no hidden allocations. You're responsible for managing memory yourself.

This sounds scary, but it's actually liberating. You know exactly when memory is allocated and when it's freed. There are no surprises, no runtime overhead, no mysterious pauses while the garbage collector does its work.

Zig does provide tools to help with memory management, like allocators and defer statements:

\`\`\`zig
const std = @import("std");

pub fn main() void {
    var allocator = std.heap.page_allocator;
    
    // Allocate memory
    const memory = allocator.alloc(u8, 100) catch |err| {
        std.debug.print("Error: {}\\n", .{err});
        return;
    };
    defer allocator.free(memory); // Automatic cleanup
    
    std.debug.print("Allocated {} bytes\\n", .{memory.len});
}
\`\`\`

The defer statement ensures that memory is freed even if the code returns early. This is similar to Rust's RAII, but it's explicit rather than automatic.

## C Interoperability

One of Zig's killer features is its seamless C interoperability. You can call C functions directly from Zig, and you can call Zig functions from C. This makes Zig perfect for extending existing C projects or adding modern features to legacy codebases.

I used this feature to add Zig code to a C project I was working on. It was surprisingly smooth—Zig's build system handles the C compilation and linking automatically. I could write new functionality in Zig while keeping the existing C code.

This also makes Zig great for writing C libraries. Instead of writing C directly (which can be error-prone), you can write in Zig and export a C-compatible ABI. You get the safety of Zig with the compatibility of C.

## Comptime

Zig's compile-time execution (comptime) is another powerful feature. You can execute code at compile time, which is useful for generating data, validating types, and creating custom syntax-like constructs.

\`\`\`zig
fn Matrix(comptime T: type, comptime rows: usize, comptime cols: usize) type {
    return [rows][cols]T;
}

const Mat = Matrix(f32, 4, 4);
\`\`\`

This allows for powerful metaprogramming without needing a separate code generation step. The compiler evaluates the code and generates the appropriate types.

## Error Handling

Zig's error handling is explicit and practical. Functions return error unions, and you handle errors explicitly:

\`\`\`zig
const result = maybeFails() catch |err| {
    std.debug.print("Error: {}\\n", .{err});
    return err;
};
\`\`\`

You can also use try to propagate errors:

\`\`\`zig
const data = try readFile("input.txt");
\`\`\`

This is similar to Rust's ? operator, but more explicit. You always know when errors might occur because they're part of the type signature.

## The Zig Community

The Zig community is small but passionate. Andrew Kelley, Zig's creator, is actively involved and responsive to feedback. The language is still evolving, and there's a sense that you're part of something that's being built in real-time.

What I appreciate is the honesty about Zig's status. It's not pretending to be a finished product. It's a work in progress, and the community understands that.

## What I've Learned

Zig has taught me to think differently about low-level programming. It shows that you can have modern language features while still being close to the metal. The explicit nature of the language makes me more aware of what's happening in my code.

I'm not sure if Zig will become my primary language—it still has a small ecosystem and limited library support. But as a tool for specific tasks (low-level programming, C interop, embedded systems), it's excellent.

## The Future

Zig is still a young language, and its future is uncertain. It could become the next big thing in systems programming, or it could remain a niche tool. Either way, I believe it has something valuable to teach us about programming.

The ideas behind Zig—explicit over implicit, manual over automatic, simple over complex—apply regardless of whether Zig itself succeeds. These principles have made me a better programmer, even when I work in other languages.

And who knows? Maybe Zig will become the next Rust. It's certainly ambitious enough. The combination of low-level control, C interoperability, and modern tooling is compelling. I'll be watching its progress with interest.
    `,tech:["Zig","Systems Programming"],category:"Learning",readingTime:10,image:"https://www.oldbookillustrations.com/site/assets/files/14431/sleeping-car.jpg",skills:[{title:"Zig",description:"Low-level programming"},{title:"Memory",description:"Manual management"}]},{id:"learning-csharp",date:"2026-04-06",title:"Note: Learning C#",type:"note",status:"published",excerpt:"Exploring C# for game development and .NET.",content:`# Note: Learning C#

When I first started programming, I thought I'd never touch anything from Microsoft. The world of open source and Linux felt more aligned with my values. But sometimes life has a way of surprising you.

My journey with C# began with a game engine called Unity. I'd always been fascinated by game development, and Unity was (and still is) the most accessible way to bring game ideas to life. But Unity uses C#, so I had to learn it whether I wanted to or not.

## First Encounter: Unity

I remember downloading Unity Hub and creating my first project. The editor was intimidating—windows everywhere, panels for everything, settings for everything. And then I opened the script editor and saw C# code for the first time.

\`\`\`csharp
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    public float speed = 5f;
    
    void Update()
    {
        float moveX = Input.GetAxis("Horizontal");
        float moveY = Input.GetAxis("Vertical");
        
        Vector3 movement = new Vector3(moveX, moveY, 0) * speed * Time.deltaTime;
        transform.Translate(movement);
    }
}
\`\`\`

It looked familiar enough—curly braces, semicolons, similar to Java which I'd learned in school. But the Unity-specific parts were confusing. What was a MonoBehaviour? Why did everything inherit from it? What was Update() and when did it get called?

I spent weeks just trying to understand the basics. How do I make the player move? How do I detect collisions? How do I play sounds? Each question led to more questions, more tutorials, more documentation.

## The .NET Ecosystem

What surprised me about C# was the broader ecosystem. It's not just for games—it's used for web development (ASP.NET), desktop applications (WPF, WinForms), mobile apps (Xamarin, .NET MAUI), cloud services (Azure), and more.

I started exploring other uses of C#. I built a simple desktop application using WPF—just a window with some buttons and text boxes. The declarative XAML syntax was elegant, and the event-driven model made sense.

\`\`\`csharp
<Window x:Class="MyApp.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="My First App" Height="350" Width="525">
    <Grid>
        <Button Content="Click Me" Click="Button_Click"/>
    </Grid>
</Window>
\`\`\`

I also experimented with ASP.NET Core for web development. The middleware pattern was interesting—building up a pipeline of request processing, each piece doing something specific. It was architecturally clean, even if the learning curve was steep.

## Object-Oriented Programming

C# is fundamentally an object-oriented language, and learning C# meant really understanding OOP. Classes, inheritance, polymorphism, interfaces—these aren't just keywords in C#, they're the primary tools for structuring code.

I remember the moment interfaces clicked for me. I was building a game with different types of enemies—goblins, orcs, dragons. Each had similar behaviors (move, attack, take damage) but implemented differently. An interface let me define a contract:

\`\`\`csharp
public interface IDamageable
{
    void TakeDamage(int amount);
    int CurrentHealth { get; }
}

public class Goblin : MonoBehaviour, IDamageable
{
    public int CurrentHealth { get; private set; }
    
    public void TakeDamage(int amount)
    {
        CurrentHealth -= amount;
        if (CurrentHealth <= 0) Die();
    }
}
\`\`\`

Now I could write code that worked with any IDamageable, regardless of the specific type. The code was more flexible, more reusable, more elegant.

## LINQ: A Game Changer

One of C#'s most powerful features is LINQ (Language Integrated Query). It lets you query collections using a SQL-like syntax, making data manipulation surprisingly elegant.

\`\`\`csharp
var highScorePlayers = players
    .Where(p => p.Score > 1000)
    .OrderByDescending(p => p.Score)
    .Take(10)
    .Select(p => p.Name);

foreach (var name in highScorePlayers)
{
    Console.WriteLine(name);
}
\`\`\`

This is so much cleaner than the traditional loop-based approach. It's declarative—you say what you want, not how to get it. After using LINQ, going back to imperative loops feels primitive.

## Async/Await

Asynchronous programming is essential for modern applications, and C# handles it elegantly with async/await. What could be confusing callback hell in other languages becomes surprisingly readable in C#.

\`\`\`csharp
public async Task<string> FetchUserData(int userId)
{
    var client = new HttpClient();
    var response = await client.GetAsync($"https://api.example.com/users/{userId}");
    return await response.Content.ReadAsStringAsync();
}
\`\`\`

The code looks synchronous, but it won't block the calling thread. This is crucial for responsive applications, especially when dealing with network requests or file I/O.

## The C# Community

The C# community is massive and well-established. Stack Overflow has answers to virtually any question. Microsoft provides excellent documentation. There are countless tutorials, courses, and books.

What I appreciate is the consistency. New language features are added regularly (records, pattern matching, source generators), but they're backward compatible. Code I wrote five years ago still compiles and runs.

## Tradeoffs

C# isn't perfect. The .NET ecosystem is large but can be overwhelming. There are multiple frameworks for each type of application, and choosing the right one isn't always clear.

Dependency management with NuGet can be a nightmare. Version conflicts, deprecated packages, abandoned libraries—it's a jungle out there.

And while C# is cross-platform now, it still feels most at home on Windows. Some libraries only work on Windows, some tooling is Windows-specific. It's better than it used to be, but not as frictionless as something like Go.

## What C# Taught Me

Learning C# taught me about the enterprise software world. It's a language designed for building large, complex applications that need to be maintained over years. The emphasis on type safety, tooling, and conventions reflects that.

It also taught me about game development patterns—entity-component systems, update loops, physics simulation, AI behaviors. These concepts transfer to other engines and frameworks.

And it showed me the value of a mature ecosystem. Having a standard library that does practically everything, package managers that work reasonably well, and IDEs that understand your code—these things matter more than I initially realized.

## Looking Forward

I'm still using C# for Unity development. My game projects continue, and I'm always learning new patterns and techniques. The recent additions to the language (records, pattern matching, global usings) keep it fresh.

I'm also interested in exploring .NET MAUI for cross-platform mobile development, and possibly Blazor for web applications. The ecosystem keeps expanding, and there's always more to learn.

C# surprised me. I thought I'd never use Microsoft technologies, but I've found a language and ecosystem that genuinely work well for certain types of projects. It's not my first choice for everything, but it's excellent for what it's designed for.

And who knows? Maybe one day I'll build that full application—a game, a web service, a desktop tool—that makes all this learning worthwhile.
    `,tech:["C#","Unity",".NET"],category:"Learning",readingTime:12,image:"https://www.oldbookillustrations.com/site/assets/files/14429/looking-for-vessel.jpg",skills:[{title:"C#",description:"Microsoft's language"},{title:"Unity",description:"Game engine"}]},{id:"learning-cpp",date:"2026-04-06",title:"Note: Learning C++",type:"note",status:"published",excerpt:"Deep dive into C++ for systems programming.",content:`# Note: Learning C++

<a class="inline-link link-blue" href="https://isocpp.org/" target="_blank">C++</a> is a powerful systems language.

## Why C++?

C++ is used for:
- Game engines (Unreal, Unity)
- Operating systems
- High-performance applications
- Embedded systems
- Compilers and interpreters

## Key Features

### Classes and Objects
\`\`\`cpp
class Player {
private:
    std::string name;
    int health;
    int score;
    
public:
    Player(const std::string& n) : name(n), health(100), score(0) {}
    
    void addScore(int points) {
        score += points;
    }
    
    int getScore() const {
        return score;
    }
};
\`\`\`

### Templates
\`\`\`cpp
template<typename T>
T max(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
int m = max(5, 10);
std::string s = max("hello", "world");
\`\`\`

### Smart Pointers
\`\`\`cpp
#include <memory>

void example() {
    // Unique pointer - automatic cleanup
    auto ptr = std::make_unique<int>(42);
    std::cout << *ptr << std::endl;
    
    // Shared pointer - reference counted
    auto shared = std::make_shared<int>(100);
    auto copy = shared; // Reference count = 2
}
\`\`\`

### STL Containers
\`\`\`cpp
#include <vector>
#include <map>
#include <algorithm>

int main() {
    std::vector<int> numbers = {5, 2, 8, 1, 9};
    std::sort(numbers.begin(), numbers.end());
    
    std::map<std::string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;
}
\`\`\`

## Modern C++ (C++11/14/17/20)

### Auto
\`\`\`cpp
auto x = 5;           // int
auto y = 3.14;        // double
auto z = "hello";    // const char*
\`\`\`

### Range-based for
\`\`\`cpp
std::vector<int> nums = {1, 2, 3, 4, 5};
for (auto n : nums) {
    std::cout << n << " ";
}
\`\`\`

## Resources

- <a class="inline-link link-green" href="https://en.cppreference.com/" target="_blank">cppreference</a>
- <a class="inline-link link-cyan" href="https://www.learncpp.com/" target="_blank">LearnCpp</a>
    `,tech:["C++","Systems Programming"],category:"Learning",readingTime:15,image:"https://www.oldbookillustrations.com/site/assets/files/14428/astonished-crew.jpg",skills:[{title:"Modern C++",description:"C++11/17/20 features"},{title:"Performance",description:"Zero-cost abstractions"}]}];se.memo(()=>{const[o,c]=z.useState("idle"),[f,u]=z.useState({name:"",email:"",message:""}),h=async g=>{g.preventDefault(),c("sending"),setTimeout(()=>{c("success"),u({name:"",email:"",message:""}),setTimeout(()=>c("idle"),5e3)},1500)};return d.jsx("div",{className:"w-full max-w-xl bg-[var(--color-surface)] p-8 rounded-3xl border border-[var(--color-border)] shadow-2xl relative z-10",children:d.jsxs("form",{onSubmit:h,className:"space-y-6",children:[d.jsxs("div",{className:"space-y-2 text-left",children:[d.jsx("label",{htmlFor:"name",className:"text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1",children:"Name"}),d.jsx("input",{id:"name",type:"text",required:!0,value:f.name,onChange:g=>u({...f,name:g.target.value}),className:"w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all",placeholder:"Your Name"})]}),d.jsxs("div",{className:"space-y-2 text-left",children:[d.jsx("label",{htmlFor:"email",className:"text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1",children:"Email"}),d.jsx("input",{id:"email",type:"email",required:!0,value:f.email,onChange:g=>u({...f,email:g.target.value}),className:"w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all",placeholder:"your@email.com"})]}),d.jsxs("div",{className:"space-y-2 text-left",children:[d.jsx("label",{htmlFor:"message",className:"text-sm font-bold text-zinc-500 uppercase tracking-widest ml-1",children:"Message"}),d.jsx("textarea",{id:"message",required:!0,rows:4,value:f.message,onChange:g=>u({...f,message:g.target.value}),className:"w-full bg-black/30 border-2 border-[var(--color-border)] rounded-2xl p-4 text-[var(--color-text)] focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all resize-none",placeholder:"What's on your mind?"})]}),d.jsxs("button",{type:"submit",disabled:o==="sending"||o==="success",className:`w-full py-4 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-2 cursor-star-glove ${o==="success"?"bg-emerald-500 text-white":"bg-white text-black hover:bg-zinc-200 hover:-translate-y-1 active:translate-y-0"} disabled:opacity-70 disabled:hover:translate-y-0`,children:[o==="idle"&&d.jsxs(d.Fragment,{children:[d.jsx(c0,{size:20})," Send Message"]}),o==="sending"&&d.jsx("div",{className:"w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"}),o==="success"&&d.jsxs(d.Fragment,{children:[d.jsx(Ph,{size:20})," Message Sent!"]}),o==="error"&&"Something went wrong"]})]})})});se.memo(({entries:o})=>{const[c,f]=z.useState(""),[u,h]=z.useState(!1),g=Qu(),b=z.useRef(null),T=c.trim()===""?[]:o.filter(C=>C.title.toLowerCase().includes(c.toLowerCase())||C.category.toLowerCase().includes(c.toLowerCase())||C.tech.some(O=>O.toLowerCase().includes(c.toLowerCase()))).map(C=>{var O;return{...C,matchedTags:((O=C.tech)==null?void 0:O.filter(L=>L.toLowerCase().includes(c.toLowerCase())))||[]}});return z.useEffect(()=>{const C=O=>{b.current&&!b.current.contains(O.target)&&h(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]),d.jsxs("div",{className:"relative",ref:b,children:[d.jsxs("div",{className:"relative",children:[d.jsx(jl,{size:18,className:"absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"}),d.jsx("input",{type:"text",placeholder:"Search garden...",value:c,onChange:C=>{f(C.target.value),h(!0)},onFocus:()=>h(!0),className:"w-full sm:w-64 bg-black/20 border border-[var(--color-border)] rounded-xl py-2 pl-12 pr-4 text-sm font-bold text-white focus:outline-none focus:border-[var(--accent-olive)]/50 transition-all placeholder:text-zinc-600"}),c&&d.jsx("button",{onClick:()=>{f(""),h(!1)},className:"absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white",children:d.jsx(Cl,{size:14})})]}),d.jsx(Sa,{children:u&&c&&d.jsx(ke.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute top-full mt-2 w-full sm:w-96 right-0 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl shadow-2xl overflow-hidden z-50",children:T.length>0?d.jsx("div",{className:"max-h-96 overflow-y-auto p-2 no-scrollbar",children:T.map(C=>d.jsxs("button",{onClick:()=>{g(`/journal/${C.id}`),h(!1),f("")},className:"w-full text-left p-4 rounded-xl hover:bg-[var(--color-bg)] transition-all group flex items-start gap-4",children:[d.jsx("div",{className:"mt-1",children:d.jsx(w0,{status:C.status})}),d.jsxs("div",{children:[d.jsx("h4",{className:"font-bold text-white group-hover:text-[var(--accent-olive)] transition-colors text-sm",children:C.title}),d.jsxs("div",{className:"flex items-center gap-2 mt-1 text-[10px] text-zinc-500 uppercase tracking-widest",children:[d.jsx("span",{children:C.category}),d.jsx("span",{className:"w-1 h-1 rounded-full bg-zinc-700"}),d.jsx("span",{children:C.type})]}),C.matchedTags&&C.matchedTags.length>0&&d.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:C.matchedTags.map(O=>d.jsxs("span",{className:"px-1.5 py-0.5 rounded bg-[var(--accent-olive)]/10 border border-[var(--accent-olive)]/20 text-[9px] font-bold text-[var(--accent-olive)] uppercase tracking-wider",children:["#",O]},O))})]})]},C.id))}):d.jsxs("div",{className:"p-8 text-center text-zinc-500 font-bold text-sm",children:['No results found for "',c,'"']})})})]})});const S0=se.memo(({active:o,onClick:c,icon:f,text:u,color:h})=>d.jsxs("button",{onClick:c,className:`flex items-center gap-3 px-4 py-3 rounded-2xl font-black transition-all group relative overflow-hidden ${o?"text-white bg-white/5":"text-zinc-500 hover:text-white hover:bg-white/5"}`,children:[o&&d.jsx(ke.div,{layoutId:`sidebar-active-${u}`,className:`absolute inset-0 ${h} opacity-10`}),d.jsx(f,{size:18,className:`transition-colors ${o?"text-white":"group-hover:text-white"}`}),d.jsx("span",{className:"relative z-10",children:u}),o&&d.jsx(ke.div,{layoutId:`sidebar-dot-${u}`,className:`absolute right-4 w-1.5 h-1.5 rounded-full ${h}`})]})),es=se.memo(({text:o,query:c})=>{if(!c||!o)return d.jsx(d.Fragment,{children:o});try{const f=new RegExp(`(${c.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi"),u=o.split(f);return d.jsx(d.Fragment,{children:u.map((h,g)=>g%2===1?d.jsx("span",{className:"bg-[var(--accent-olive)]/30 text-[var(--accent-olive)] font-bold px-0.5 rounded-sm shadow-[0_0_10px_rgba(93,112,66,0.3)] border border-[var(--accent-olive)]/20",children:h},g):d.jsx("span",{children:h},g))})}catch{return d.jsx(d.Fragment,{children:o})}}),T0=se.memo(({isOpen:o,onClose:c,entries:f})=>{const[u,h]=z.useState(""),[g,b]=z.useState(""),[T,C]=z.useState(-1),[O,L]=z.useState("all"),N=z.useRef(null),k=Qu();z.useEffect(()=>{o?(setTimeout(()=>{var _;return(_=N.current)==null?void 0:_.focus()},100),C(-1)):(h(""),b(""),C(-1))},[o]),z.useEffect(()=>{if(C(-1),u.trim().length>0){const Y=[...new Set(f.flatMap(U=>[U.title,...U.tech||[],U.category]))].find(U=>U.toLowerCase().startsWith(u.toLowerCase())&&U.toLowerCase()!==u.toLowerCase());b(Y?u+Y.slice(u.length):"")}else b("")},[u,f]);const{groupedResults:B,flattenedResults:D}=se.useMemo(()=>{const _={},Y=[],U=O==="all"?f:f.filter(Q=>Q.type===O.slice(0,-1));if(u.trim().length>0)try{const Q=new RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i");U.forEach(J=>{var Qe;const te=Q.test(J.title),Me=Q.test(J.excerpt),Oe=Q.test(J.content),me=((Qe=J.tech)==null?void 0:Qe.filter(Ye=>Q.test(Ye)))||[],he=me.length>0;if(te||Me||Oe||he){const Ye=`${J.category||"Uncategorized"} > ${J.type||"Entry"}`;_[Ye]||(_[Ye]=[]);const _e={...J,matchedTags:me};_[Ye].push(_e),Y.push(_e)}})}catch{}else[...U].sort((J,te)=>new Date(te.date).getTime()-new Date(J.date).getTime()).slice(0,3).forEach(J=>{const te="Recent Activity";_[te]||(_[te]=[]),_[te].push(J),Y.push(J)});return{groupedResults:_,flattenedResults:Y}},[u,f]);if(z.useEffect(()=>{const _=Y=>{if(Y.key==="Escape"&&c(),Y.key==="Tab"&&g&&(Y.preventDefault(),h(g),b("")),Y.key==="ArrowDown"&&(Y.preventDefault(),C(U=>U<D.length-1?U+1:U)),Y.key==="ArrowUp"&&(Y.preventDefault(),C(U=>U>0?U-1:U)),Y.key==="Enter"&&T>=0){Y.preventDefault();const U=D[T];U&&(k(`/journal/${U.id}`),c())}};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[c,g,T,D,k]),z.useEffect(()=>{if(T>=0){const _=document.querySelector('[data-selected="true"]');_&&_.scrollIntoView({behavior:"smooth",block:"nearest"})}},[T]),!o)return null;let R=0;return d.jsxs("div",{className:"fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[15vh] px-4",children:[d.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:c,className:"absolute inset-0 bg-black/70 backdrop-blur-md"}),d.jsxs(ke.div,{initial:{opacity:0,scale:.95,y:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-20},className:"relative w-full max-w-4xl bg-[var(--color-surface)] border-2 border-[var(--color-border)] rounded-none shadow-2xl overflow-hidden flex max-h-[65vh]",children:[d.jsxs("div",{className:"w-48 border-r border-[var(--color-border)] bg-[var(--color-bg)]/30 p-4 hidden md:block",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] mb-4 font-serif",children:"Quick Links"}),d.jsx("nav",{className:"space-y-2",children:[{label:"About",path:"/"},{label:"Garden",path:"/garden"},{label:"Projects",path:"/garden?type=project"},{label:"Notes",path:"/garden?type=note"},{label:"RSS Feed",path:"/rss.xml",external:!0}].map(_=>_.external?d.jsx("a",{href:_.path,target:"_blank",rel:"noopener noreferrer",className:"block px-3 py-2 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all",children:_.label},_.label):d.jsx(Nn,{to:_.path,onClick:c,className:"block px-3 py-2 text-sm font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all",children:_.label},_.label))})]}),d.jsxs("div",{className:"flex-1 flex flex-col",children:[d.jsxs("div",{className:"flex items-center px-6 py-4 border-b-2 border-[var(--color-border)] relative bg-[var(--color-bg)]/50",children:[d.jsxs("div",{className:"relative",children:[d.jsx(jl,{size:24,className:"text-[var(--accent-olive)] mr-4"}),d.jsx("span",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[var(--accent-olive)] rounded-full"})]}),d.jsxs("div",{className:"flex-1 relative",children:[g&&d.jsxs("div",{className:"absolute inset-0 flex items-center text-xl pointer-events-none",children:[d.jsx("span",{className:"text-transparent",children:u}),d.jsx("span",{className:"text-[var(--color-text-muted)]/50",children:g.slice(u.length)}),d.jsx("span",{className:"ml-2 text-[10px] bg-[var(--color-surface)] text-[var(--color-text-muted)] px-1.5 py-0.5 rounded border border-[var(--color-border)] font-mono",children:"TAB"})]}),d.jsx("input",{ref:N,type:"text",placeholder:"Search the garden...",value:u,onChange:_=>h(_.target.value),className:"w-full bg-transparent border-none outline-none text-xl text-[var(--color-text)] placeholder:text-[var(--color-text-muted)]/50 relative z-10 font-serif"})]}),d.jsx("button",{onClick:c,className:"p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] bg-[var(--color-surface)] hover:bg-[var(--color-bg)] rounded-none transition-colors border-b-2 border-[var(--color-border)] hover:border-[var(--accent-olive)]",children:d.jsx(Cl,{size:20})})]}),d.jsx("div",{className:"flex gap-0 px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]/30",children:[{id:"all",label:"All"},{id:"projects",label:"Projects"},{id:"notes",label:"Notes"}].map(_=>d.jsxs("button",{onClick:()=>L(_.id),className:`px-4 py-2 text-sm font-bold font-serif transition-colors relative ${O===_.id?"text-[var(--accent-olive)]":"text-[var(--color-text-muted)] hover:text-[var(--color-text)]"}`,children:[_.label,O===_.id&&d.jsx("span",{className:"absolute bottom-0 left-2 right-2 h-0.5 bg-[var(--accent-olive)] rounded-full"})]},_.id))}),d.jsx("div",{className:"overflow-y-auto p-4 no-scrollbar flex-1 scroll-smooth",children:D.length>0?d.jsx("div",{className:"flex flex-col gap-6",children:Object.entries(B).map(([_,Y])=>d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-[var(--color-text-muted)] px-2 flex items-center gap-2 font-serif",children:[d.jsx("span",{className:"text-[var(--accent-olive)]",children:"#"})," ",_]}),d.jsx("div",{className:"flex flex-col gap-1",children:Y.map(U=>{const J=R++===T;return d.jsxs(Nn,{to:`/journal/${U.id}`,onClick:c,"data-selected":J,className:`flex flex-col gap-1 px-4 py-4 rounded-none transition-all group border-b-2 ${J?"bg-[var(--accent-olive)]/10 border-[var(--accent-olive)] ring-1 ring-[var(--accent-olive)]/30":"border-transparent hover:border-[var(--accent-olive)] hover:bg-[var(--color-bg)]"}`,children:[d.jsx("span",{className:`text-base font-bold font-serif transition-all ${J?"text-[var(--accent-olive)] underline decoration-2 decoration-[var(--accent-olive)] underline-offset-4":"text-[var(--color-text)] group-hover:text-[var(--accent-olive)] group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4"}`,children:d.jsx(es,{text:U.title,query:u})}),d.jsx("span",{className:"text-sm text-[var(--color-text-muted)] line-clamp-2 font-serif",children:d.jsx(es,{text:U.excerpt,query:u})}),U.matchedTags&&U.matchedTags.length>0&&d.jsx("div",{className:"flex flex-wrap gap-1 mt-2",children:U.matchedTags.map(te=>d.jsxs("span",{className:"px-2 py-0.5 rounded-none bg-[var(--accent-olive)]/10 border-b-2 border-[var(--accent-olive)]/20 text-[10px] font-bold text-[var(--accent-olive)] uppercase tracking-wider font-serif",children:["#",d.jsx(es,{text:te,query:u})]},te))}),d.jsxs("div",{className:"mt-2 text-[10px] text-[var(--color-text-muted)] italic flex items-center gap-1.5 font-serif",children:[d.jsx("span",{className:"text-[var(--accent-brown)]",children:"•"}),U.tech&&U.tech.length>0?`${U.tech.slice(0,3).join(" • ")}`:`A ${U.readingTime} min read on ${U.category}`]}),U.content&&u.trim().length>0&&new RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i").test(U.content)&&!new RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i").test(U.title)&&!new RegExp(u.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"i").test(U.excerpt)&&d.jsxs("span",{className:"text-xs text-[var(--color-text-muted)]/70 line-clamp-1 mt-1 italic",children:["...",d.jsx(es,{text:U.content.substring(Math.max(0,U.content.toLowerCase().indexOf(u.toLowerCase())-30),U.content.toLowerCase().indexOf(u.toLowerCase())+u.length+30),query:u}),"..."]})]},U.id)})})]},_))}):d.jsx("div",{className:"py-12 text-center text-[var(--color-text-muted)] font-bold",children:u.trim().length>0?`No results found for "${u}"`:"Start typing to search across all entries..."})})]})]})]})});se.memo(({categories:o,tags:c,availableTypes:f,hasHobbies:u,hasActivity:h,selectedFilters:g=[],onFilterToggle:b,isOpen:T,onToggle:C,isDark:O,onThemeToggle:L})=>{const N=o,k=c||[],B=[{icon:t0,text:"All Garden",filter:"All",color:"bg-[var(--accent-olive)]"},{icon:cs,text:"Essays",filter:"essay",color:"bg-blue-500"},{icon:is,text:"Lab Notes",filter:"lab-note",color:"bg-orange-500"},{icon:Xu,text:"Notes",filter:"note",color:"bg-emerald-500"},{icon:ec,text:"Projects",filter:"project",color:"bg-pink-500"},{icon:em,text:"Hobbies",filter:"Hobbies",color:"bg-yellow-500"},{icon:Zu,text:"Activity",filter:"activity",color:"bg-cyan-500"}].filter(D=>D.filter==="All"?!0:D.filter==="Hobbies"?u:D.filter==="activity"?h:f==null?void 0:f.includes(D.filter));return d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:C,className:"lg:hidden fixed bottom-8 left-8 z-[60] w-14 h-14 rounded-2xl bg-white text-black shadow-2xl flex items-center justify-center hover:-translate-y-1 active:translate-y-0 transition-all border-2 border-black","aria-label":"Toggle Sidebar",children:T?d.jsx(Cl,{size:24}):d.jsx(tm,{size:24})}),d.jsx(Sa,{children:T&&d.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:C,className:"lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55]"})}),d.jsxs("aside",{className:`
      fixed lg:sticky top-0 lg:top-32 left-0 h-full lg:h-fit w-72 lg:w-80 bg-[var(--color-bg)] lg:bg-transparent z-[56] lg:z-0
      p-8 lg:p-0 border-r border-[var(--color-border)] lg:border-none transition-transform duration-300 ease-in-out
      ${T?"translate-x-0":"-translate-x-full lg:translate-x-0"}
      flex flex-col gap-12 overflow-y-auto no-scrollbar gliding-sidebar
    `,children:[d.jsxs("div",{className:"flex items-center justify-between lg:hidden mb-2",children:[d.jsx("span",{className:"text-xl font-black text-white",children:"Navigation"}),d.jsx("button",{onClick:C,className:"text-zinc-400 hover:text-white",children:d.jsx(Cl,{size:24})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4",children:"Navigation"}),d.jsx("nav",{className:"flex flex-col gap-2",children:B.map(D=>{const R=D.filter==="All"?g.length===0:g.includes(D.filter);return d.jsx(S0,{active:R,onClick:()=>{if(D.filter==="activity"){const _=document.getElementById("activity");_&&_.scrollIntoView({behavior:"smooth"})}else b(D.filter);window.innerWidth<1024&&C()},icon:D.icon,text:D.text,color:D.color},D.text)})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4",children:"View Mode"}),d.jsx("div",{className:"px-4",children:d.jsxs("button",{onClick:()=>b("Projects Only"),className:`w-full flex items-center justify-between p-4 rounded-2xl border transition-all ${g.includes("Projects Only")?"bg-cyan-500/10 border-cyan-500/30 text-cyan-400":"bg-white/5 border-white/10 text-zinc-500 hover:border-white/20"}`,children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx(is,{size:16,className:g.includes("Projects Only")?"text-cyan-400":"text-zinc-600"}),d.jsx("span",{className:"text-xs font-black uppercase tracking-widest",children:"Projects Only"})]}),d.jsx("div",{className:`w-8 h-4 rounded-full relative transition-colors ${g.includes("Projects Only")?"bg-cyan-500":"bg-zinc-800"}`,children:d.jsx("div",{className:`absolute top-1 w-2 h-2 rounded-full bg-white transition-all ${g.includes("Projects Only")?"left-5":"left-1"}`})})]})})]}),d.jsxs("div",{className:"space-y-6",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 px-4",children:"Topics"}),d.jsx("nav",{className:"flex flex-col gap-1",children:N.filter(D=>D!=="All").map(D=>d.jsxs("button",{onClick:()=>{b(D),window.innerWidth<1024&&C()},className:`flex items-center gap-3 px-4 py-2 rounded-xl font-bold transition-all text-left group ${g.includes(D)?"text-white bg-white/5":"text-zinc-500 hover:text-white hover:bg-white/5"}`,children:[d.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-all ${g.includes(D)?"bg-[var(--accent-olive)] scale-125":"bg-zinc-800 group-hover:bg-zinc-600"}`}),D]},D))})]}),k.length>0&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"flex items-center justify-between px-4",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500",children:"Tags"}),g.length>0&&d.jsx("button",{onClick:()=>b("CLEAR_ALL"),className:"text-[9px] font-black uppercase tracking-widest text-[var(--accent-olive)] hover:text-[var(--accent-moss)] transition-colors",children:"Clear All"})]}),d.jsx("nav",{className:"flex flex-wrap gap-2 px-4",children:k.map(D=>{const R=lm.filter(_=>_.tech&&_.tech.includes(D)).length;return d.jsxs("button",{onClick:()=>{b(D),window.innerWidth<1024&&C()},className:`px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all border flex items-center gap-2 ${g.includes(D)?"bg-[var(--accent-olive)]/20 border-[var(--accent-olive)]/50 text-[var(--accent-olive)]":"bg-white/5 border-white/10 text-zinc-500 hover:text-white hover:border-white/20"}`,children:[d.jsxs("span",{children:["#",D]}),d.jsx("span",{className:`text-[8px] opacity-50 ${g.includes(D)?"text-[var(--accent-olive)]":"text-zinc-600"}`,children:R})]},D)})})]}),d.jsx("div",{className:"mt-auto pt-8 border-t border-[var(--color-border)] lg:hidden",children:d.jsx(nm,{isDark:O,onToggle:L})})]})]})});const E0=se.memo(({isDark:o,onThemeToggle:c})=>{const[f,u]=z.useState(!1),[h,g]=z.useState(!1),[b,T]=z.useState(!1),C=Ju(),O=Qu(),L=C.pathname==="/",N=C.pathname.startsWith("/garden"),k=[{path:"/",label:"About",icon:cs},{path:"/garden",label:"Garden",icon:n0}],B=R=>{O(`/garden?type=${R}`)},D=[{label:"Projects",filter:"project",icon:Vv},{label:"Notes",filter:"note",icon:Kv}];return se.useEffect(()=>{const R=_=>{(_.metaKey||_.ctrlKey)&&_.key==="k"&&(_.preventDefault(),u(!0))};return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)},[]),d.jsxs(d.Fragment,{children:[d.jsxs("header",{className:"fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-6xl bg-[var(--color-surface)]/95 backdrop-blur-xl border-2 border-[var(--color-border)] rounded-2xl p-2 flex justify-between items-center shadow-2xl",role:"banner",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsxs(Nn,{to:"/",className:"flex items-center gap-3 px-3 py-2 group relative",onMouseEnter:()=>g(!0),onMouseLeave:()=>g(!1),"aria-label":"George's Garden - Home",children:[d.jsxs(ke.div,{className:"w-11 h-11 rounded-none bg-gradient-to-br from-[var(--accent-olive)] to-[var(--accent-moss)] flex items-center justify-center font-black text-white shadow-lg text-xl relative overflow-hidden border-2 border-[var(--accent-olive)]/30",whileHover:{scale:1.05,rotate:2},transition:{type:"spring",stiffness:400,damping:17},children:[h?d.jsx("img",{src:"https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxHOGTdzJC/giphy.gif",alt:"logo",className:"w-full h-full object-cover"}):d.jsx("img",{src:"https://www.oldbookillustrations.com/site/assets/files/14451/came-upon-place.jpg",alt:"logo",className:"w-full h-full object-cover opacity-80",referrerPolicy:"no-referrer"}),d.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"})]}),d.jsxs("div",{className:"hidden sm:block relative",children:[d.jsx("span",{className:`font-bold tracking-wide text-lg transition-colors font-serif ${L?"text-[var(--accent-olive)]":"text-[var(--color-text)] group-hover:text-[var(--accent-olive)]"}`,children:L?"Home":N?"Garden":"Journal"}),d.jsx("span",{className:`absolute -bottom-0.5 left-0 w-full h-0.5 bg-[var(--accent-olive)] rounded-full transition-all duration-300 ${h?"opacity-100":"opacity-0"}`}),d.jsx("span",{className:"block text-[10px] text-[var(--color-text-muted)] font-medium",children:"ECE Student"})]})]}),d.jsx(nm,{isDark:o,onToggle:c})]}),d.jsx("div",{className:"hidden lg:flex items-center gap-1",children:D.map(R=>d.jsxs("button",{onClick:()=>B(R.filter),className:"px-3 py-2 rounded-none font-bold text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all flex items-center gap-2 font-serif",children:[d.jsx(R.icon,{size:14,className:"text-[var(--accent-olive)]"}),R.label]},R.label))}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"hidden md:block w-72",children:d.jsxs("button",{onClick:()=>u(!0),className:"w-full relative flex items-center bg-[var(--color-bg)]/60 border-2 border-[var(--color-border)] rounded-none py-2.5 pl-10 pr-4 text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--accent-olive)]/50 hover:bg-[var(--color-bg)] transition-all text-left group","aria-label":"Search the garden",children:[d.jsxs("div",{className:"relative",children:[d.jsx(jl,{size:16,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--accent-olive)] group-hover:scale-110 transition-transform","aria-hidden":"true"}),d.jsx("span",{className:"absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-2 h-0.5 bg-[var(--accent-olive)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"})]}),d.jsx("span",{className:"text-[var(--color-text-muted)] font-serif",children:"Search the garden..."}),d.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-[var(--color-surface)] px-2 py-1 rounded-none border border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:text-[var(--color-text)] transition-colors font-mono","aria-hidden":"true",children:"⌘K"})]})}),d.jsxs("nav",{className:"flex gap-2",role:"navigation","aria-label":"Main navigation",children:[k.map(R=>{const _=C.pathname===R.path;return d.jsxs(Nn,{to:R.path,className:`relative px-3 md:px-4 py-2.5 rounded-none font-bold text-sm transition-all flex items-center gap-2 font-serif ${_?"text-[var(--accent-olive)]":"text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4"}`,"aria-current":_?"page":void 0,children:[d.jsx(R.icon,{size:16,className:_?"text-[var(--accent-olive)]":""}),d.jsx("span",{className:"hidden sm:inline",children:R.label}),_&&d.jsx("span",{className:"absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-[60%] h-0.5 bg-[var(--accent-olive)] rounded-full"})]},R.path)}),d.jsx("button",{onClick:()=>u(!0),className:"md:hidden p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all","aria-label":"Open search",children:d.jsx(jl,{size:20})}),d.jsx("button",{onClick:()=>T(!0),className:"lg:hidden p-2.5 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all","aria-label":"Open menu",children:d.jsx(tm,{size:20})})]})]})]}),d.jsx(Sa,{children:b&&d.jsx(ke.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-[90]",onClick:()=>T(!1)})}),d.jsxs(ke.div,{initial:{x:"100%"},animate:{x:b?0:"100%"},transition:{type:"spring",stiffness:300,damping:30},className:"lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[var(--color-surface)] border-l border-[var(--color-border)] z-[95] p-6 overflow-y-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-8",children:[d.jsx("span",{className:"text-xl font-black text-[var(--color-text)] font-serif",children:"Menu"}),d.jsx("button",{onClick:()=>T(!1),className:"p-2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)]/50 rounded-xl transition-all",children:d.jsx(Cl,{size:24})})]}),d.jsx("nav",{className:"space-y-2 mb-8",children:k.map(R=>d.jsxs(Nn,{to:R.path,onClick:()=>T(!1),className:`flex items-center gap-3 px-4 py-3 rounded-none font-bold font-serif transition-all ${C.pathname===R.path?"text-[var(--accent-olive)] underline decoration-2 decoration-[var(--accent-olive)] underline-offset-4":"text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4"}`,children:[d.jsx(R.icon,{size:20}),R.label]},R.path))}),d.jsxs("div",{className:"space-y-2 mb-8",children:[d.jsx("h3",{className:"text-[10px] font-black uppercase tracking-widest text-[var(--color-text-muted)] px-4 mb-2 font-serif",children:"Quick Links"}),D.map(R=>d.jsxs("button",{onClick:()=>{T(!1),B(R.filter)},className:"flex items-center gap-3 w-full px-4 py-3 rounded-none font-bold font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all",children:[d.jsx(R.icon,{size:20,className:"text-[var(--accent-olive)]"}),R.label]},R.label))]}),d.jsx("div",{className:"pt-6 border-t border-[var(--color-border)]",children:d.jsxs("button",{onClick:()=>u(!0),className:"w-full flex items-center gap-3 px-4 py-3 rounded-none font-bold font-serif text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:underline hover:decoration-2 hover:decoration-[var(--accent-olive)] hover:underline-offset-4 transition-all",children:[d.jsx(jl,{size:20,className:"text-[var(--accent-olive)]"}),"Search"]})})]}),d.jsx(T0,{isOpen:f,onClose:()=>u(!1),entries:lm})]})}),A0=()=>{const{pathname:o}=Ju();return z.useEffect(()=>{window.scrollTo(0,0)},[o]),null},M0=()=>d.jsx("div",{className:"min-h-screen bg-[var(--color-bg)] flex items-center justify-center",children:d.jsxs("div",{className:"flex flex-col items-center gap-6",children:[d.jsx("div",{className:"w-12 h-12 border-4 border-[var(--accent-olive)] border-t-transparent rounded-full animate-spin"}),d.jsx("p",{className:"text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px]",children:"Loading..."})]})}),j0={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.3,ease:[.25,.1,.25,1]}},exit:{opacity:0,y:-20,transition:{duration:.2,ease:[.25,.1,.25,1]}}},C0=se.lazy(()=>ss(()=>import("./AboutView-CYuz7vik.js").then(o=>o.A),__vite__mapDeps([0,1,2])).then(o=>({default:o.AboutView}))),z0=se.lazy(()=>ss(()=>import("./GardenView-C_kd8Azx.js"),__vite__mapDeps([3,1,4,5])).then(o=>({default:o.GardenView}))),N0=se.lazy(()=>ss(()=>import("./JournalDetail-9yNwr_T3.js"),__vite__mapDeps([6,1,5,4,2,7])).then(o=>({default:o.JournalDetail}))),k0=se.lazy(()=>ss(()=>import("./NotFound-B5E5ZPOE.js"),__vite__mapDeps([8,7,1,5])).then(o=>({default:o.NotFound})));function D0({isDark:o,toggleTheme:c}){const f=Ju();return d.jsx(Sa,{mode:"wait",children:d.jsx(ke.div,{variants:j0,initial:"initial",animate:"animate",exit:"exit",children:d.jsxs(kp,{location:f,children:[d.jsx(Wi,{path:"/",element:d.jsx(C0,{isDark:o,onThemeToggle:c})}),d.jsx(Wi,{path:"/garden",element:d.jsx(z0,{isDark:o,onThemeToggle:c})}),d.jsx(Wi,{path:"/journal/:id",element:d.jsx(N0,{isDark:o,onThemeToggle:c})}),d.jsx(Wi,{path:"*",element:d.jsx(k0,{})})]})},f.pathname)})}function O0(){const[o,c]=z.useState(!0);z.useEffect(()=>{o?document.documentElement.classList.remove("light"):document.documentElement.classList.add("light")},[o]);const f=se.useCallback(()=>c(u=>!u),[]);return d.jsxs(Np,{children:[d.jsx(A0,{}),d.jsx(v0,{}),d.jsx("a",{href:"#main-content",className:"sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent-olive)] focus:text-white focus:rounded-lg focus:font-bold",children:"Skip to main content"}),d.jsx(E0,{isDark:o,onThemeToggle:f}),d.jsx("main",{id:"main-content",children:d.jsx(z.Suspense,{fallback:d.jsx(M0,{}),children:d.jsx(D0,{isDark:o,toggleTheme:f})})})]})}gy.createRoot(document.getElementById("root")).render(d.jsx(z.StrictMode,{children:d.jsx(O0,{})}));export{Sa as A,q0 as B,Bu as C,H0 as G,G0 as H,lm as J,n0 as L,Fu as M,w0 as S,U0 as T,Cl as X,ss as _,$v as a,cs as b,xe as c,Lh as d,tm as e,B0 as f,L0 as g,nm as h,Ph as i,d as j,ke as m,Wu as u};
