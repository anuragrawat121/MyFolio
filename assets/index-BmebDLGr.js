(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function cM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var zh={exports:{}},Jo={};var b_;function uM(){if(b_)return Jo;b_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Jo.Fragment=e,Jo.jsx=i,Jo.jsxs=i,Jo}var T_;function fM(){return T_||(T_=1,zh.exports=uM()),zh.exports}var G=fM(),Bh={exports:{}},rt={};var A_;function hM(){if(A_)return rt;A_=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function x(L,Z,Ae){this.props=L,this.context=Z,this.refs=M,this.updater=Ae||b}x.prototype.isReactComponent={},x.prototype.setState=function(L,Z){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,Z,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function D(){}D.prototype=x.prototype;function P(L,Z,Ae){this.props=L,this.context=Z,this.refs=M,this.updater=Ae||b}var C=P.prototype=new D;C.constructor=P,w(C,x.prototype),C.isPureReactComponent=!0;var I=Array.isArray;function N(){}var z={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function O(L,Z,Ae){var Re=Ae.ref;return{$$typeof:r,type:L,key:Z,ref:Re!==void 0?Re:null,props:Ae}}function W(L,Z){return O(L.type,Z,L.props)}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function J(L){var Z={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Ae){return Z[Ae]})}var me=/\/+/g;function ve(L,Z){return typeof L=="object"&&L!==null&&L.key!=null?J(""+L.key):Z.toString(36)}function $(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(Z){L.status==="pending"&&(L.status="fulfilled",L.value=Z)},function(Z){L.status==="pending"&&(L.status="rejected",L.reason=Z)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function B(L,Z,Ae,Re,Ie){var re=typeof L;(re==="undefined"||re==="boolean")&&(L=null);var ye=!1;if(L===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(L.$$typeof){case r:case e:ye=!0;break;case _:return ye=L._init,B(ye(L._payload),Z,Ae,Re,Ie)}}if(ye)return Ie=Ie(L),ye=Re===""?"."+ve(L,0):Re,I(Ie)?(Ae="",ye!=null&&(Ae=ye.replace(me,"$&/")+"/"),B(Ie,Z,Ae,"",function(Xe){return Xe})):Ie!=null&&(k(Ie)&&(Ie=W(Ie,Ae+(Ie.key==null||L&&L.key===Ie.key?"":(""+Ie.key).replace(me,"$&/")+"/")+ye)),Z.push(Ie)),1;ye=0;var Ee=Re===""?".":Re+":";if(I(L))for(var Me=0;Me<L.length;Me++)Re=L[Me],re=Ee+ve(Re,Me),ye+=B(Re,Z,Ae,re,Ie);else if(Me=S(L),typeof Me=="function")for(L=Me.call(L),Me=0;!(Re=L.next()).done;)Re=Re.value,re=Ee+ve(Re,Me++),ye+=B(Re,Z,Ae,re,Ie);else if(re==="object"){if(typeof L.then=="function")return B($(L),Z,Ae,Re,Ie);throw Z=String(L),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return ye}function H(L,Z,Ae){if(L==null)return L;var Re=[],Ie=0;return B(L,Re,"","",function(re){return Z.call(Ae,re,Ie++)}),Re}function ee(L){if(L._status===-1){var Z=L._result;Z=Z(),Z.then(function(Ae){(L._status===0||L._status===-1)&&(L._status=1,L._result=Ae)},function(Ae){(L._status===0||L._status===-1)&&(L._status=2,L._result=Ae)}),L._status===-1&&(L._status=0,L._result=Z)}if(L._status===1)return L._result.default;throw L._result}var pe=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Te={map:H,forEach:function(L,Z,Ae){H(L,function(){Z.apply(this,arguments)},Ae)},count:function(L){var Z=0;return H(L,function(){Z++}),Z},toArray:function(L){return H(L,function(Z){return Z})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=g,rt.Children=Te,rt.Component=x,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=P,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,Z,Ae){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Re=w({},L.props),Ie=L.key;if(Z!=null)for(re in Z.key!==void 0&&(Ie=""+Z.key),Z)!T.call(Z,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Z.ref===void 0||(Re[re]=Z[re]);var re=arguments.length-2;if(re===1)Re.children=Ae;else if(1<re){for(var ye=Array(re),Ee=0;Ee<re;Ee++)ye[Ee]=arguments[Ee+2];Re.children=ye}return O(L.type,Ie,Re)},rt.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},rt.createElement=function(L,Z,Ae){var Re,Ie={},re=null;if(Z!=null)for(Re in Z.key!==void 0&&(re=""+Z.key),Z)T.call(Z,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(Ie[Re]=Z[Re]);var ye=arguments.length-2;if(ye===1)Ie.children=Ae;else if(1<ye){for(var Ee=Array(ye),Me=0;Me<ye;Me++)Ee[Me]=arguments[Me+2];Ie.children=Ee}if(L&&L.defaultProps)for(Re in ye=L.defaultProps,ye)Ie[Re]===void 0&&(Ie[Re]=ye[Re]);return O(L,re,Ie)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:d,render:L}},rt.isValidElement=k,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:ee}},rt.memo=function(L,Z){return{$$typeof:p,type:L,compare:Z===void 0?null:Z}},rt.startTransition=function(L){var Z=z.T,Ae={};z.T=Ae;try{var Re=L(),Ie=z.S;Ie!==null&&Ie(Ae,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(N,pe)}catch(re){pe(re)}finally{Z!==null&&Ae.types!==null&&(Z.types=Ae.types),z.T=Z}},rt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},rt.use=function(L){return z.H.use(L)},rt.useActionState=function(L,Z,Ae){return z.H.useActionState(L,Z,Ae)},rt.useCallback=function(L,Z){return z.H.useCallback(L,Z)},rt.useContext=function(L){return z.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,Z){return z.H.useDeferredValue(L,Z)},rt.useEffect=function(L,Z){return z.H.useEffect(L,Z)},rt.useEffectEvent=function(L){return z.H.useEffectEvent(L)},rt.useId=function(){return z.H.useId()},rt.useImperativeHandle=function(L,Z,Ae){return z.H.useImperativeHandle(L,Z,Ae)},rt.useInsertionEffect=function(L,Z){return z.H.useInsertionEffect(L,Z)},rt.useLayoutEffect=function(L,Z){return z.H.useLayoutEffect(L,Z)},rt.useMemo=function(L,Z){return z.H.useMemo(L,Z)},rt.useOptimistic=function(L,Z){return z.H.useOptimistic(L,Z)},rt.useReducer=function(L,Z,Ae){return z.H.useReducer(L,Z,Ae)},rt.useRef=function(L){return z.H.useRef(L)},rt.useState=function(L){return z.H.useState(L)},rt.useSyncExternalStore=function(L,Z,Ae){return z.H.useSyncExternalStore(L,Z,Ae)},rt.useTransition=function(){return z.H.useTransition()},rt.version="19.2.3",rt}var R_;function xp(){return R_||(R_=1,Bh.exports=hM()),Bh.exports}var ue=xp();const hl=cM(ue);var Fh={exports:{}},$o={},Hh={exports:{}},Gh={};var w_;function dM(){return w_||(w_=1,(function(r){function e(B,H){var ee=B.length;B.push(H);e:for(;0<ee;){var pe=ee-1>>>1,Te=B[pe];if(0<l(Te,H))B[pe]=H,B[ee]=Te,ee=pe;else break e}}function i(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var H=B[0],ee=B.pop();if(ee!==H){B[0]=ee;e:for(var pe=0,Te=B.length,L=Te>>>1;pe<L;){var Z=2*(pe+1)-1,Ae=B[Z],Re=Z+1,Ie=B[Re];if(0>l(Ae,ee))Re<Te&&0>l(Ie,Ae)?(B[pe]=Ie,B[Re]=ee,pe=Re):(B[pe]=Ae,B[Z]=ee,pe=Z);else if(Re<Te&&0>l(Ie,ee))B[pe]=Ie,B[Re]=ee,pe=Re;else break e}}return H}function l(B,H){var ee=B.sortIndex-H.sortIndex;return ee!==0?ee:B.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],_=1,g=null,v=3,S=!1,b=!1,w=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function C(B){for(var H=i(p);H!==null;){if(H.callback===null)s(p);else if(H.startTime<=B)s(p),H.sortIndex=H.expirationTime,e(m,H);else break;H=i(p)}}function I(B){if(w=!1,C(B),!b)if(i(m)!==null)b=!0,N||(N=!0,J());else{var H=i(p);H!==null&&$(I,H.startTime-B)}}var N=!1,z=-1,T=5,O=-1;function W(){return M?!0:!(r.unstable_now()-O<T)}function k(){if(M=!1,N){var B=r.unstable_now();O=B;var H=!0;try{e:{b=!1,w&&(w=!1,D(z),z=-1),S=!0;var ee=v;try{t:{for(C(B),g=i(m);g!==null&&!(g.expirationTime>B&&W());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,v=g.priorityLevel;var Te=pe(g.expirationTime<=B);if(B=r.unstable_now(),typeof Te=="function"){g.callback=Te,C(B),H=!0;break t}g===i(m)&&s(m),C(B)}else s(m);g=i(m)}if(g!==null)H=!0;else{var L=i(p);L!==null&&$(I,L.startTime-B),H=!1}}break e}finally{g=null,v=ee,S=!1}H=void 0}}finally{H?J():N=!1}}}var J;if(typeof P=="function")J=function(){P(k)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ve=me.port2;me.port1.onmessage=k,J=function(){ve.postMessage(null)}}else J=function(){x(k,0)};function $(B,H){z=x(function(){B(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(B){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var ee=v;v=H;try{return B()}finally{v=ee}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(B,H){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ee=v;v=B;try{return H()}finally{v=ee}},r.unstable_scheduleCallback=function(B,H,ee){var pe=r.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?pe+ee:pe):ee=pe,B){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=ee+Te,B={id:_++,callback:H,priorityLevel:B,startTime:ee,expirationTime:Te,sortIndex:-1},ee>pe?(B.sortIndex=ee,e(p,B),i(m)===null&&B===i(p)&&(w?(D(z),z=-1):w=!0,$(I,ee-pe))):(B.sortIndex=Te,e(m,B),b||S||(b=!0,N||(N=!0,J()))),B},r.unstable_shouldYield=W,r.unstable_wrapCallback=function(B){var H=v;return function(){var ee=v;v=H;try{return B.apply(this,arguments)}finally{v=ee}}}})(Gh)),Gh}var C_;function pM(){return C_||(C_=1,Hh.exports=dM()),Hh.exports}var Vh={exports:{}},Pn={};var D_;function mM(){if(D_)return Pn;D_=1;var r=xp();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,_)},Pn.flushSync=function(m){var p=f.T,_=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=_,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&s.d.X(m,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,_){return f.H.useFormState(m,p,_)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.3",Pn}var U_;function gM(){if(U_)return Vh.exports;U_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Vh.exports=mM(),Vh.exports}var L_;function _M(){if(L_)return $o;L_=1;var r=pM(),e=xp(),i=gM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var y=!1,R=u.child;R;){if(R===a){y=!0,a=u,o=h;break}if(R===o){y=!0,o=u,a=h;break}R=R.sibling}if(!y){for(R=h.child;R;){if(R===a){y=!0,a=h,o=u;break}if(R===o){y=!0,o=h,a=u;break}R=R.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),P=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),O=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var me=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===me?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case w:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case O:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case D:return(t._context.displayName||"Context")+".Consumer";case C:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case T:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var $=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},pe=[],Te=-1;function L(t){return{current:t}}function Z(t){0>Te||(t.current=pe[Te],pe[Te]=null,Te--)}function Ae(t,n){Te++,pe[Te]=t.current,t.current=n}var Re=L(null),Ie=L(null),re=L(null),ye=L(null);function Ee(t,n){switch(Ae(re,n),Ae(Ie,t),Ae(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Y0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Y0(n),t=Z0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(Re),Ae(Re,t)}function Me(){Z(Re),Z(Ie),Z(re)}function Xe(t){t.memoizedState!==null&&Ae(ye,t);var n=Re.current,a=Z0(n,t.type);n!==a&&(Ae(Ie,t),Ae(Re,a))}function Pe(t){Ie.current===t&&(Z(Re),Z(Ie)),ye.current===t&&(Z(ye),Zo._currentValue=ee)}var Ct,ot;function gt(t){if(Ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ct=n&&n[1]||"",ot=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ct+t+ot}var dt=!1;function _t(t,n){if(!t||dt)return"";dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(ce){var le=ce}Reflect.construct(t,[],Se)}else{try{Se.call()}catch(ce){le=ce}t.call(Se.prototype)}}else{try{throw Error()}catch(ce){le=ce}(Se=t())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(ce){if(ce&&le&&typeof ce.stack=="string")return[ce.stack,le.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),y=h[0],R=h[1];if(y&&R){var F=y.split(`
`),ne=R.split(`
`);for(u=o=0;o<F.length&&!F[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===F.length||u===ne.length)for(o=F.length-1,u=ne.length-1;1<=o&&0<=u&&F[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(F[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||F[o]!==ne[u]){var ge=`
`+F[o].replace(" at new "," at ");return t.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",t.displayName)),ge}while(1<=o&&0<=u);break}}}finally{dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?gt(a):""}function tn(t,n){switch(t.tag){case 26:case 27:case 5:return gt(t.type);case 16:return gt("Lazy");case 13:return t.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return _t(t.type,!1);case 11:return _t(t.type.render,!1);case 1:return _t(t.type,!0);case 31:return gt("Activity");default:return""}}function nn(t){try{var n="",a=null;do n+=tn(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var an=Object.prototype.hasOwnProperty,ln=r.unstable_scheduleCallback,qt=r.unstable_cancelCallback,rn=r.unstable_shouldYield,Y=r.unstable_requestPaint,Ht=r.unstable_now,Dt=r.unstable_getCurrentPriorityLevel,U=r.unstable_ImmediatePriority,E=r.unstable_UserBlockingPriority,K=r.unstable_NormalPriority,se=r.unstable_LowPriority,he=r.unstable_IdlePriority,we=r.log,Le=r.unstable_setDisableYieldValue,fe=null,de=null;function De(t){if(typeof we=="function"&&Le(t),de&&typeof de.setStrictMode=="function")try{de.setStrictMode(fe,t)}catch{}}var Ge=Math.clz32?Math.clz32:Je,ze=Math.log,Ne=Math.LN2;function Je(t){return t>>>=0,t===0?32:31-(ze(t)/Ne|0)|0}var $e=256,at=262144,X=4194304;function Ce(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Ce(o):(y&=R,y!==0?u=Ce(y):a||(a=R&~t,a!==0&&(u=Ce(a))))):(R=o&~h,R!==0?u=Ce(R):y!==0?u=Ce(y):a||(a=o&~t,a!==0&&(u=Ce(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ue(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function He(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function be(){var t=X;return X<<=1,(X&62914560)===0&&(X=4194304),t}function je(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function We(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kt(t,n,a,o,u,h){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ne=t.hiddenUpdates;for(a=y&~a;0<a;){var ge=31-Ge(a),Se=1<<ge;R[ge]=0,F[ge]=-1;var le=ne[ge];if(le!==null)for(ne[ge]=null,ge=0;ge<le.length;ge++){var ce=le[ge];ce!==null&&(ce.lane&=-536870913)}a&=~Se}o!==0&&Nt(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(y&~n))}function Nt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ti(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ni(t,n){var a=n&-n;return a=(a&42)!==0?1:oo(a),(a&(t.suspendedLanes|n))!==0?0:a}function oo(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function lo(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function co(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:__(t.type))}function es(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var Bi=Math.random().toString(36).slice(2),fn="__reactFiber$"+Bi,An="__reactProps$"+Bi,Zn="__reactContainer$"+Bi,gr="__reactEvents$"+Bi,Tl="__reactListeners$"+Bi,Al="__reactHandles$"+Bi,_r="__reactResources$"+Bi,Oa="__reactMarker$"+Bi;function Pa(t){delete t[fn],delete t[An],delete t[gr],delete t[Tl],delete t[Al]}function ta(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zn]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=t_(t);t!==null;){if(a=t[fn])return a;t=t_(t)}return n}t=a,a=t.parentNode}return null}function na(t){if(t=t[fn]||t[Zn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function vr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ia(t){var n=t[_r];return n||(n=t[_r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(t){t[Oa]=!0}var Rl=new Set,A={};function q(t,n){oe(t,n),oe(t+"Capture",n)}function oe(t,n){for(A[t]=n,t=0;t<n.length;t++)Rl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},Be={};function ke(t){return an.call(Be,t)?!0:an.call(ae,t)?!1:ie.test(t)?Be[t]=!0:(ae[t]=!0,!1)}function Oe(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ye(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qe(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,h.call(this,y)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function At(t){if(!t._valueTracker){var n=lt(t)?"checked":"value";t._valueTracker=Qe(t,n,""+t[n])}}function Qt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=lt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Xt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Ot=/[\n"\\]/g;function Pt(t){return t.replace(Ot,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,h,y,R){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?vt(t,y,et(n)):a!=null?vt(t,y,et(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+et(R):t.removeAttribute("name")}function On(t,n,a,o,u,h,y,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){At(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),At(t)}function vt(t,n,a){n==="number"&&Xt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ii(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Ai(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if($(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),At(t)}function ai(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var It=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jt(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||It.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ri(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Jt(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Jt(t,h,n[h])}function Lt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xr(t){return za.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ia(){}var Nu=null;function Ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,ns=null;function qp(t){var n=na(t);if(n&&(t=n.stateNode)){var a=t[An]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Pt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[An]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Qt(o)}break e;case"textarea":ii(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&vn(t,!!a.multiple,n,!1)}}}var Pu=!1;function Yp(t,n,a){if(Pu)return t(n,a);Pu=!0;try{var o=t(n);return o}finally{if(Pu=!1,(ts!==null||ns!==null)&&(pc(),ts&&(n=ts,t=ns,ns=ts=null,qp(n),t)))for(n=0;n<t.length;n++)qp(t[n])}}function uo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[An]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=!1;if(aa)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Iu=!1}var Ba=null,zu=null,wl=null;function Zp(){if(wl)return wl;var t,n=zu,a=n.length,o,u="value"in Ba?Ba.value:Ba.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(o=1;o<=y&&n[a-o]===u[h-o];o++);return wl=u.slice(t,1<o?1-o:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function jp(){return!1}function jn(t){function n(a,o,u,h,y){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=y,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Dl:jp,this.isPropagationStopped=jp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=jn(Sr),ho=g({},Sr,{view:0,detail:0}),oS=jn(ho),Bu,Fu,po,Ll=g({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Bu=t.screenX-po.screenX,Fu=t.screenY-po.screenY):Fu=Bu=0,po=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),Kp=jn(Ll),lS=g({},Ll,{dataTransfer:0}),cS=jn(lS),uS=g({},ho,{relatedTarget:0}),Hu=jn(uS),fS=g({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),hS=jn(fS),dS=g({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),pS=jn(dS),mS=g({},Sr,{data:0}),Qp=jn(mS),gS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=vS[t])?!!n[t]:!1}function Gu(){return xS}var SS=g({},ho,{key:function(t){if(t.key){var n=gS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yS=jn(SS),MS=g({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=jn(MS),ES=g({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gu}),bS=jn(ES),TS=g({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),AS=jn(TS),RS=g({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=jn(RS),CS=g({},Sr,{newState:0,oldState:0}),DS=jn(CS),US=[9,13,27,32],Vu=aa&&"CompositionEvent"in window,mo=null;aa&&"documentMode"in document&&(mo=document.documentMode);var LS=aa&&"TextEvent"in window&&!mo,$p=aa&&(!Vu||mo&&8<mo&&11>=mo),em=" ",tm=!1;function nm(t,n){switch(t){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function NS(t,n){switch(t){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(tm=!0,em);case"textInput":return t=n.data,t===em&&tm?null:t;default:return null}}function OS(t,n){if(is)return t==="compositionend"||!Vu&&nm(t,n)?(t=Zp(),wl=zu=Ba=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $p&&n.locale!=="ko"?null:n.data;default:return null}}var PS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!PS[t.type]:n==="textarea"}function rm(t,n,a,o){ts?ns?ns.push(o):ns=[o]:ts=o,n=yc(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var go=null,_o=null;function IS(t){G0(t,0)}function Nl(t){var n=vr(t);if(Qt(n))return t}function sm(t,n){if(t==="change")return n}var om=!1;if(aa){var ku;if(aa){var Xu="oninput"in document;if(!Xu){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Xu=typeof lm.oninput=="function"}ku=Xu}else ku=!1;om=ku&&(!document.documentMode||9<document.documentMode)}function cm(){go&&(go.detachEvent("onpropertychange",um),_o=go=null)}function um(t){if(t.propertyName==="value"&&Nl(_o)){var n=[];rm(n,_o,t,Ou(t)),Yp(IS,n)}}function zS(t,n,a){t==="focusin"?(cm(),go=n,_o=a,go.attachEvent("onpropertychange",um)):t==="focusout"&&cm()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(_o)}function FS(t,n){if(t==="click")return Nl(n)}function HS(t,n){if(t==="input"||t==="change")return Nl(n)}function GS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ri=typeof Object.is=="function"?Object.is:GS;function vo(t,n){if(ri(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!an.call(n,u)||!ri(t[u],n[u]))return!1}return!0}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,n){var a=fm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fm(a)}}function dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Xt(t.document)}return n}function Wu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var VS=aa&&"documentMode"in document&&11>=document.documentMode,as=null,qu=null,xo=null,Yu=!1;function mm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Yu||as==null||as!==Xt(o)||(o=as,"selectionStart"in o&&Wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&vo(xo,o)||(xo=o,o=yc(qu,"onSelect"),0<o.length&&(n=new Ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=as)))}function yr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var rs={animationend:yr("Animation","AnimationEnd"),animationiteration:yr("Animation","AnimationIteration"),animationstart:yr("Animation","AnimationStart"),transitionrun:yr("Transition","TransitionRun"),transitionstart:yr("Transition","TransitionStart"),transitioncancel:yr("Transition","TransitionCancel"),transitionend:yr("Transition","TransitionEnd")},Zu={},gm={};aa&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function Mr(t){if(Zu[t])return Zu[t];if(!rs[t])return t;var n=rs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in gm)return Zu[t]=n[a];return t}var _m=Mr("animationend"),vm=Mr("animationiteration"),xm=Mr("animationstart"),kS=Mr("transitionrun"),XS=Mr("transitionstart"),WS=Mr("transitioncancel"),Sm=Mr("transitionend"),ym=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function wi(t,n){ym.set(t,n),q(n,[t])}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],ss=0,Ku=0;function Pl(){for(var t=ss,n=Ku=ss=0;n<t;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var h=mi[n];if(mi[n++]=null,o!==null&&u!==null){var y=o.pending;y===null?u.next=u:(u.next=y.next,y.next=u),o.pending=u}h!==0&&Mm(a,u,h)}}function Il(t,n,a,o){mi[ss++]=t,mi[ss++]=n,mi[ss++]=a,mi[ss++]=o,Ku|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Qu(t,n,a,o){return Il(t,n,a,o),zl(t)}function Er(t,n){return Il(t,null,null,n),zl(t)}function Mm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ge(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function zl(t){if(50<Go)throw Go=0,oh=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var os={};function qS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,n,a,o){return new qS(t,n,a,o)}function Ju(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=si(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Em(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Bl(t,n,a,o,u,h){var y=0;if(o=t,typeof t=="function")Ju(t)&&(y=1);else if(typeof t=="string")y=Qy(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case O:return t=si(31,a,n,u),t.elementType=O,t.lanes=h,t;case w:return br(a.children,u,h,n);case M:y=8,u|=24;break;case x:return t=si(12,a,n,u|2),t.elementType=x,t.lanes=h,t;case I:return t=si(13,a,n,u),t.elementType=I,t.lanes=h,t;case N:return t=si(19,a,n,u),t.elementType=N,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:y=10;break e;case D:y=9;break e;case C:y=11;break e;case z:y=14;break e;case T:y=16,o=null;break e}y=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=si(y,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function br(t,n,a,o){return t=si(7,t,o,n),t.lanes=a,t}function $u(t,n,a){return t=si(6,t,null,n),t.lanes=a,t}function bm(t){var n=si(18,null,null,0);return n.stateNode=t,n}function ef(t,n,a){return n=si(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Tm=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Tm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nn(n)},Tm.set(t,n),n)}return{value:t,source:n,stack:nn(n)}}var ls=[],cs=0,Fl=null,So=0,_i=[],vi=0,Fa=null,Hi=1,Gi="";function sa(t,n){ls[cs++]=So,ls[cs++]=Fl,Fl=t,So=n}function Am(t,n,a){_i[vi++]=Hi,_i[vi++]=Gi,_i[vi++]=Fa,Fa=t;var o=Hi;t=Gi;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var h=32-Ge(n)+u;if(30<h){var y=u-u%5;h=(o&(1<<y)-1).toString(32),o>>=y,u-=y,Hi=1<<32-Ge(n)+u|a<<u|o,Gi=h+t}else Hi=1<<h|a<<u|o,Gi=t}function tf(t){t.return!==null&&(sa(t,1),Am(t,1,0))}function nf(t){for(;t===Fl;)Fl=ls[--cs],ls[cs]=null,So=ls[--cs],ls[cs]=null;for(;t===Fa;)Fa=_i[--vi],_i[vi]=null,Gi=_i[--vi],_i[vi]=null,Hi=_i[--vi],_i[vi]=null}function Rm(t,n){_i[vi++]=Hi,_i[vi++]=Gi,_i[vi++]=Fa,Hi=n.id,Gi=n.overflow,Fa=t}var Rn=null,Yt=null,Et=!1,Ha=null,xi=!1,af=Error(s(519));function Ga(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(gi(n,t)),af}function wm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[An]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<ko.length;a++)St(ko[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),On(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ai(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||W0(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=ia),n=!0):n=!1,n||Ga(t,!0)}function Cm(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Rn=Rn.return}}function us(t){if(t!==Rn)return!1;if(!Et)return Cm(t),Et=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mh(t.type,t.memoizedProps)),a=!a),a&&Yt&&Ga(t),Cm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=e_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Yt=e_(t)}else n===27?(n=Yt,tr(t.type)?(t=Rh,Rh=null,Yt=t):Yt=n):Yt=Rn?yi(t.stateNode.nextSibling):null;return!0}function Tr(){Yt=Rn=null,Et=!1}function rf(){var t=Ha;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ha=null),t}function yo(t){Ha===null?Ha=[t]:Ha.push(t)}var sf=L(null),Ar=null,oa=null;function Va(t,n,a){Ae(sf,n._currentValue),n._currentValue=a}function la(t){t._currentValue=sf.current,Z(sf)}function of(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function lf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var y=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){h.lanes|=a,R=h.alternate,R!==null&&(R.lanes|=a),of(h.return,a,t),o||(y=null);break e}h=R.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,h=y.alternate,h!==null&&(h.lanes|=a),of(y,a,t),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function fs(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var R=u.type;ri(u.pendingProps.value,y.value)||(t!==null?t.push(R):t=[R])}}else if(u===ye.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Zo):t=[Zo])}u=u.return}t!==null&&lf(n,t,a,o),n.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!ri(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,oa=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return Dm(Ar,t)}function Gl(t,n){return Ar===null&&Rr(t),Dm(t,n)}function Dm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},oa===null){if(t===null)throw Error(s(308));oa=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else oa=oa.next=n;return a}var YS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ZS=r.unstable_scheduleCallback,jS=r.unstable_NormalPriority,dn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new YS,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&ZS(jS,function(){t.controller.abort()})}var Eo=null,uf=0,hs=0,ds=null;function KS(t,n){if(Eo===null){var a=Eo=[];uf=0,hs=dh(),ds={status:"pending",value:void 0,then:function(o){a.push(o)}}}return uf++,n.then(Um,Um),n}function Um(){if(--uf===0&&Eo!==null){ds!==null&&(ds.status="fulfilled");var t=Eo;Eo=null,hs=0,ds=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function QS(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Lm=B.S;B.S=function(t,n){m0=Ht(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&KS(t,n),Lm!==null&&Lm(t,n)};var wr=L(null);function ff(){var t=wr.current;return t!==null?t:Wt.pooledCache}function Vl(t,n){n===null?Ae(wr,wr.current):Ae(wr,n.pool)}function Nm(){var t=ff();return t===null?null:{parent:dn._currentValue,pool:t}}var ps=Error(s(460)),hf=Error(s(474)),kl=Error(s(542)),Xl={then:function(){}};function Om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ia,ia),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zm(t),t;default:if(typeof n.status=="string")n.then(ia,ia);else{if(t=Wt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zm(t),t}throw Dr=n,ps}}function Cr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,ps):a}}var Dr=null;function Im(){if(Dr===null)throw Error(s(459));var t=Dr;return Dr=null,t}function zm(t){if(t===ps||t===kl)throw Error(s(483))}var ms=null,bo=0;function Wl(t){var n=bo;return bo+=1,ms===null&&(ms=[]),Pm(ms,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ql(t,n){throw n.$$typeof===v?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bm(t){function n(j,V){if(t){var te=j.deletions;te===null?(j.deletions=[V],j.flags|=16):te.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=ra(j,V),j.index=0,j.sibling=null,j}function h(j,V,te){return j.index=te,t?(te=j.alternate,te!==null?(te=te.index,te<V?(j.flags|=67108866,V):te):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function y(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function R(j,V,te,xe){return V===null||V.tag!==6?(V=$u(te,j.mode,xe),V.return=j,V):(V=u(V,te),V.return=j,V)}function F(j,V,te,xe){var tt=te.type;return tt===w?ge(j,V,te.props.children,xe,te.key):V!==null&&(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Cr(tt)===V.type)?(V=u(V,te.props),To(V,te),V.return=j,V):(V=Bl(te.type,te.key,te.props,null,j.mode,xe),To(V,te),V.return=j,V)}function ne(j,V,te,xe){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=ef(te,j.mode,xe),V.return=j,V):(V=u(V,te.children||[]),V.return=j,V)}function ge(j,V,te,xe,tt){return V===null||V.tag!==7?(V=br(te,j.mode,xe,tt),V.return=j,V):(V=u(V,te),V.return=j,V)}function Se(j,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=$u(""+V,j.mode,te),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case S:return te=Bl(V.type,V.key,V.props,null,j.mode,te),To(te,V),te.return=j,te;case b:return V=ef(V,j.mode,te),V.return=j,V;case T:return V=Cr(V),Se(j,V,te)}if($(V)||J(V))return V=br(V,j.mode,te,null),V.return=j,V;if(typeof V.then=="function")return Se(j,Wl(V),te);if(V.$$typeof===P)return Se(j,Gl(j,V),te);ql(j,V)}return null}function le(j,V,te,xe){var tt=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return tt!==null?null:R(j,V,""+te,xe);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case S:return te.key===tt?F(j,V,te,xe):null;case b:return te.key===tt?ne(j,V,te,xe):null;case T:return te=Cr(te),le(j,V,te,xe)}if($(te)||J(te))return tt!==null?null:ge(j,V,te,xe,null);if(typeof te.then=="function")return le(j,V,Wl(te),xe);if(te.$$typeof===P)return le(j,V,Gl(j,te),xe);ql(j,te)}return null}function ce(j,V,te,xe,tt){if(typeof xe=="string"&&xe!==""||typeof xe=="number"||typeof xe=="bigint")return j=j.get(te)||null,R(V,j,""+xe,tt);if(typeof xe=="object"&&xe!==null){switch(xe.$$typeof){case S:return j=j.get(xe.key===null?te:xe.key)||null,F(V,j,xe,tt);case b:return j=j.get(xe.key===null?te:xe.key)||null,ne(V,j,xe,tt);case T:return xe=Cr(xe),ce(j,V,te,xe,tt)}if($(xe)||J(xe))return j=j.get(te)||null,ge(V,j,xe,tt,null);if(typeof xe.then=="function")return ce(j,V,te,Wl(xe),tt);if(xe.$$typeof===P)return ce(j,V,te,Gl(V,xe),tt);ql(V,xe)}return null}function Ze(j,V,te,xe){for(var tt=null,Rt=null,Ke=V,ut=V=0,Mt=null;Ke!==null&&ut<te.length;ut++){Ke.index>ut?(Mt=Ke,Ke=null):Mt=Ke.sibling;var wt=le(j,Ke,te[ut],xe);if(wt===null){Ke===null&&(Ke=Mt);break}t&&Ke&&wt.alternate===null&&n(j,Ke),V=h(wt,V,ut),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt,Ke=Mt}if(ut===te.length)return a(j,Ke),Et&&sa(j,ut),tt;if(Ke===null){for(;ut<te.length;ut++)Ke=Se(j,te[ut],xe),Ke!==null&&(V=h(Ke,V,ut),Rt===null?tt=Ke:Rt.sibling=Ke,Rt=Ke);return Et&&sa(j,ut),tt}for(Ke=o(Ke);ut<te.length;ut++)Mt=ce(Ke,j,ut,te[ut],xe),Mt!==null&&(t&&Mt.alternate!==null&&Ke.delete(Mt.key===null?ut:Mt.key),V=h(Mt,V,ut),Rt===null?tt=Mt:Rt.sibling=Mt,Rt=Mt);return t&&Ke.forEach(function(sr){return n(j,sr)}),Et&&sa(j,ut),tt}function nt(j,V,te,xe){if(te==null)throw Error(s(151));for(var tt=null,Rt=null,Ke=V,ut=V=0,Mt=null,wt=te.next();Ke!==null&&!wt.done;ut++,wt=te.next()){Ke.index>ut?(Mt=Ke,Ke=null):Mt=Ke.sibling;var sr=le(j,Ke,wt.value,xe);if(sr===null){Ke===null&&(Ke=Mt);break}t&&Ke&&sr.alternate===null&&n(j,Ke),V=h(sr,V,ut),Rt===null?tt=sr:Rt.sibling=sr,Rt=sr,Ke=Mt}if(wt.done)return a(j,Ke),Et&&sa(j,ut),tt;if(Ke===null){for(;!wt.done;ut++,wt=te.next())wt=Se(j,wt.value,xe),wt!==null&&(V=h(wt,V,ut),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt);return Et&&sa(j,ut),tt}for(Ke=o(Ke);!wt.done;ut++,wt=te.next())wt=ce(Ke,j,ut,wt.value,xe),wt!==null&&(t&&wt.alternate!==null&&Ke.delete(wt.key===null?ut:wt.key),V=h(wt,V,ut),Rt===null?tt=wt:Rt.sibling=wt,Rt=wt);return t&&Ke.forEach(function(lM){return n(j,lM)}),Et&&sa(j,ut),tt}function kt(j,V,te,xe){if(typeof te=="object"&&te!==null&&te.type===w&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case S:e:{for(var tt=te.key;V!==null;){if(V.key===tt){if(tt=te.type,tt===w){if(V.tag===7){a(j,V.sibling),xe=u(V,te.props.children),xe.return=j,j=xe;break e}}else if(V.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===T&&Cr(tt)===V.type){a(j,V.sibling),xe=u(V,te.props),To(xe,te),xe.return=j,j=xe;break e}a(j,V);break}else n(j,V);V=V.sibling}te.type===w?(xe=br(te.props.children,j.mode,xe,te.key),xe.return=j,j=xe):(xe=Bl(te.type,te.key,te.props,null,j.mode,xe),To(xe,te),xe.return=j,j=xe)}return y(j);case b:e:{for(tt=te.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(j,V.sibling),xe=u(V,te.children||[]),xe.return=j,j=xe;break e}else{a(j,V);break}else n(j,V);V=V.sibling}xe=ef(te,j.mode,xe),xe.return=j,j=xe}return y(j);case T:return te=Cr(te),kt(j,V,te,xe)}if($(te))return Ze(j,V,te,xe);if(J(te)){if(tt=J(te),typeof tt!="function")throw Error(s(150));return te=tt.call(te),nt(j,V,te,xe)}if(typeof te.then=="function")return kt(j,V,Wl(te),xe);if(te.$$typeof===P)return kt(j,V,Gl(j,te),xe);ql(j,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(j,V.sibling),xe=u(V,te),xe.return=j,j=xe):(a(j,V),xe=$u(te,j.mode,xe),xe.return=j,j=xe),y(j)):a(j,V)}return function(j,V,te,xe){try{bo=0;var tt=kt(j,V,te,xe);return ms=null,tt}catch(Ke){if(Ke===ps||Ke===kl)throw Ke;var Rt=si(29,Ke,null,j.mode);return Rt.lanes=xe,Rt.return=j,Rt}}}var Ur=Bm(!0),Fm=Bm(!1),ka=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Xa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Wa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ut&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=zl(t),Mm(t,null,a),n}return Il(t,o,n,a),zl(t)}function Ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}function mf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=y:h=h.next=y,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gf=!1;function Ro(){if(gf){var t=ds;if(t!==null)throw t}}function wo(t,n,a,o){gf=!1;var u=t.updateQueue;ka=!1;var h=u.firstBaseUpdate,y=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,ne=F.next;F.next=null,y===null?h=ne:y.next=ne,y=F;var ge=t.alternate;ge!==null&&(ge=ge.updateQueue,R=ge.lastBaseUpdate,R!==y&&(R===null?ge.firstBaseUpdate=ne:R.next=ne,ge.lastBaseUpdate=F))}if(h!==null){var Se=u.baseState;y=0,ge=ne=F=null,R=h;do{var le=R.lane&-536870913,ce=le!==R.lane;if(ce?(yt&le)===le:(o&le)===le){le!==0&&le===hs&&(gf=!0),ge!==null&&(ge=ge.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,nt=R;le=n;var kt=a;switch(nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){Se=Ze.call(kt,Se,le);break e}Se=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,le=typeof Ze=="function"?Ze.call(kt,Se,le):Ze,le==null)break e;Se=g({},Se,le);break e;case 2:ka=!0}}le=R.callback,le!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[le]:ce.push(le))}else ce={lane:le,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ge===null?(ne=ge=ce,F=Se):ge=ge.next=ce,y|=le;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;ce=R,R=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);ge===null&&(F=Se),u.baseState=F,u.firstBaseUpdate=ne,u.lastBaseUpdate=ge,h===null&&(u.shared.lanes=0),Ka|=y,t.lanes=y,t.memoizedState=Se}}function Hm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Gm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Hm(a[t],n)}var gs=L(null),Yl=L(0);function Vm(t,n){t=_a,Ae(Yl,t),Ae(gs,n),_a=t|n.baseLanes}function _f(){Ae(Yl,_a),Ae(gs,gs.current)}function vf(){_a=Yl.current,Z(gs),Z(Yl)}var oi=L(null),Si=null;function qa(t){var n=t.alternate;Ae(cn,cn.current&1),Ae(oi,t),Si===null&&(n===null||gs.current!==null||n.memoizedState!==null)&&(Si=t)}function xf(t){Ae(cn,cn.current),Ae(oi,t),Si===null&&(Si=t)}function km(t){t.tag===22?(Ae(cn,cn.current),Ae(oi,t),Si===null&&(Si=t)):Ya()}function Ya(){Ae(cn,cn.current),Ae(oi,oi.current)}function li(t){Z(oi),Si===t&&(Si=null),Z(cn)}var cn=L(0);function Zl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Th(a)||Ah(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ca=0,ct=null,Gt=null,pn=null,jl=!1,_s=!1,Lr=!1,Kl=0,Co=0,vs=null,JS=0;function sn(){throw Error(s(321))}function Sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ri(t[a],n[a]))return!1;return!0}function yf(t,n,a,o,u,h){return ca=h,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?Ag:If,Lr=!1,h=a(o,u),Lr=!1,_s&&(h=Wm(n,a,o,u)),Xm(t),h}function Xm(t){B.H=Lo;var n=Gt!==null&&Gt.next!==null;if(ca=0,pn=Gt=ct=null,jl=!1,Co=0,vs=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&Hl(t)&&(mn=!0))}function Wm(t,n,a,o){ct=t;var u=0;do{if(_s&&(vs=null),Co=0,_s=!1,25<=u)throw Error(s(301));if(u+=1,pn=Gt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=Rg,h=n(a,o)}while(_s);return h}function $S(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function Mf(){var t=Kl!==0;return Kl=0,t}function Ef(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function bf(t){if(jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}jl=!1}ca=0,pn=Gt=ct=null,_s=!1,Co=Kl=0,vs=null}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?ct.memoizedState=pn=t:pn=pn.next=t,pn}function un(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=pn===null?ct.memoizedState:pn.next;if(n!==null)pn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},pn===null?ct.memoizedState=pn=t:pn=pn.next=t}return pn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=Co;return Co+=1,vs===null&&(vs=[]),t=Pm(vs,t,n),n=ct,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Ag:If),t}function Jl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===P)return wn(t)}throw Error(s(438,String(t)))}function Tf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ql(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=W;return n.index++,a}function ua(t,n){return typeof n=="function"?n(t):n}function $l(t){var n=un();return Af(n,Gt,t)}function Af(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var y=u.next;u.next=h.next,h.next=y}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=y=null,F=null,ne=n,ge=!1;do{var Se=ne.lane&-536870913;if(Se!==ne.lane?(yt&Se)===Se:(ca&Se)===Se){var le=ne.revertLane;if(le===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),Se===hs&&(ge=!0);else if((ca&le)===le){ne=ne.next,le===hs&&(ge=!0);continue}else Se={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=Se,y=h):F=F.next=Se,ct.lanes|=le,Ka|=le;Se=ne.action,Lr&&a(h,Se),h=ne.hasEagerState?ne.eagerState:a(h,Se)}else le={lane:Se,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=le,y=h):F=F.next=le,ct.lanes|=Se,Ka|=Se;ne=ne.next}while(ne!==null&&ne!==n);if(F===null?y=h:F.next=R,!ri(h,t.memoizedState)&&(mn=!0,ge&&(a=ds,a!==null)))throw a;t.memoizedState=h,t.baseState=y,t.baseQueue=F,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Rf(t){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do h=t(h,y.action),y=y.next;while(y!==u);ri(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function qm(t,n,a){var o=ct,u=un(),h=Et;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!ri((Gt||u).memoizedState,a);if(y&&(u.memoizedState=a,mn=!0),u=u.queue,Df(jm.bind(null,o,u,t),[t]),u.getSnapshot!==n||y||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,xs(9,{destroy:void 0},Zm.bind(null,o,u,a,n),null),Wt===null)throw Error(s(349));h||(ca&127)!==0||Ym(o,n,a)}return a}function Ym(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Ql(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Zm(t,n,a,o){n.value=a,n.getSnapshot=o,Km(n)&&Qm(t)}function jm(t,n,a){return a(function(){Km(n)&&Qm(t)})}function Km(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ri(t,a)}catch{return!0}}function Qm(t){var n=Er(t,2);n!==null&&ei(n,t,2)}function wf(t){var n=Gn();if(typeof t=="function"){var a=t;if(t=a(),Lr){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},n}function Jm(t,n,a,o){return t.baseState=a,Af(t,Gt,typeof o=="function"?o:ua)}function ey(t,n,a,o,u){if(nc(t))throw Error(s(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){h.listeners.push(y)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,$m(n,h)):(h.next=a.next,n.pending=a.next=h)}}function $m(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,y={};B.T=y;try{var R=a(u,o),F=B.S;F!==null&&F(y,R),eg(t,n,R)}catch(ne){Cf(t,n,ne)}finally{h!==null&&y.types!==null&&(h.types=y.types),B.T=h}}else try{h=a(u,o),eg(t,n,h)}catch(ne){Cf(t,n,ne)}}function eg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){tg(t,n,o)},function(o){return Cf(t,n,o)}):tg(t,n,a)}function tg(t,n,a){n.status="fulfilled",n.value=a,ng(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,$m(t,a)))}function Cf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ng(n),n=n.next;while(n!==o)}t.action=null}function ng(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ig(t,n){return n}function ag(t,n){if(Et){var a=Wt.formState;if(a!==null){e:{var o=ct;if(Et){if(Yt){t:{for(var u=Yt,h=xi;u.nodeType!==8;){if(!h){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Yt=yi(u.nextSibling),o=u.data==="F!";break e}}Ga(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ig,lastRenderedState:n},a.queue=o,a=Eg.bind(null,ct,o),o.dispatch=a,o=wf(!1),h=Pf.bind(null,ct,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ey.bind(null,ct,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function rg(t){var n=un();return sg(n,Gt,t)}function sg(t,n,a){if(n=Af(t,n,ig)[0],t=$l(ua)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Do(n)}catch(y){throw y===ps?kl:y}else o=n;n=un();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,xs(9,{destroy:void 0},ty.bind(null,u,a),null)),[o,h,t]}function ty(t,n){t.action=n}function og(t){var n=un(),a=Gt;if(a!==null)return sg(n,a,t);un(),n=n.memoizedState,a=un();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function xs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Ql(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function lg(){return un().memoizedState}function ec(t,n,a,o){var u=Gn();ct.flags|=t,u.memoizedState=xs(1|n,{destroy:void 0},a,o===void 0?null:o)}function tc(t,n,a,o){var u=un();o=o===void 0?null:o;var h=u.memoizedState.inst;Gt!==null&&o!==null&&Sf(o,Gt.memoizedState.deps)?u.memoizedState=xs(n,h,a,o):(ct.flags|=t,u.memoizedState=xs(1|n,h,a,o))}function cg(t,n){ec(8390656,8,t,n)}function Df(t,n){tc(2048,8,t,n)}function ny(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Ql(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function ug(t){var n=un().memoizedState;return ny({ref:n,nextImpl:t}),function(){if((Ut&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function fg(t,n){return tc(4,2,t,n)}function hg(t,n){return tc(4,4,t,n)}function dg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function pg(t,n,a){a=a!=null?a.concat([t]):null,tc(4,4,dg.bind(null,n,t),a)}function Uf(){}function mg(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function gg(t,n){var a=un();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Sf(n,o[1]))return o[0];if(o=t(),Lr){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o}function Lf(t,n,a){return a===void 0||(ca&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=_0(),ct.lanes|=t,Ka|=t,a)}function _g(t,n,a,o){return ri(a,n)?a:gs.current!==null?(t=Lf(t,a,o),ri(t,n)||(mn=!0),t):(ca&42)===0||(ca&1073741824)!==0&&(yt&261930)===0?(mn=!0,t.memoizedState=a):(t=_0(),ct.lanes|=t,Ka|=t,n)}function vg(t,n,a,o,u){var h=H.p;H.p=h!==0&&8>h?h:8;var y=B.T,R={};B.T=R,Pf(t,!1,n,a);try{var F=u(),ne=B.S;if(ne!==null&&ne(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var ge=QS(F,o);Uo(t,n,ge,fi(t))}else Uo(t,n,o,fi(t))}catch(Se){Uo(t,n,{then:function(){},status:"rejected",reason:Se},fi())}finally{H.p=h,y!==null&&R.types!==null&&(y.types=R.types),B.T=y}}function iy(){}function Nf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=xg(t).queue;vg(t,u,n,ee,a===null?iy:function(){return Sg(t),a(o)})}function xg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ee},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sg(t){var n=xg(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},fi())}function Of(){return wn(Zo)}function yg(){return un().memoizedState}function Mg(){return un().memoizedState}function ay(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=Xa(a);var o=Wa(n,t,a);o!==null&&(ei(o,n,a),Ao(o,n,a)),n={cache:cf()},t.payload=n;return}n=n.return}}function ry(t,n,a){var o=fi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nc(t)?bg(n,a):(a=Qu(t,n,a,o),a!==null&&(ei(a,t,o),Tg(a,n,o)))}function Eg(t,n,a){var o=fi();Uo(t,n,a,o)}function Uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(nc(t))bg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var y=n.lastRenderedState,R=h(y,a);if(u.hasEagerState=!0,u.eagerState=R,ri(R,y))return Il(t,n,u,0),Wt===null&&Pl(),!1}catch{}if(a=Qu(t,n,u,o),a!==null)return ei(a,t,o),Tg(a,n,o),!0}return!1}function Pf(t,n,a,o){if(o={lane:2,revertLane:dh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(n)throw Error(s(479))}else n=Qu(t,a,o,2),n!==null&&ei(n,t,2)}function nc(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function bg(t,n){_s=jl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ti(t,a)}}var Lo={readContext:wn,use:Jl,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Lo.useEffectEvent=sn;var Ag={readContext:wn,use:Jl,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:cg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ec(4194308,4,dg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ec(4194308,4,t,n)},useInsertionEffect:function(t,n){ec(4,2,t,n)},useMemo:function(t,n){var a=Gn();n=n===void 0?null:n;var o=t();if(Lr){De(!0);try{t()}finally{De(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(Lr){De(!0);try{a(n)}finally{De(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=ry.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:function(t){t=wf(t);var n=t.queue,a=Eg.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uf,useDeferredValue:function(t,n){var a=Gn();return Lf(a,t,n)},useTransition:function(){var t=wf(!1);return t=vg.bind(null,ct,t.queue,!0,!1),Gn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Gn();if(Et){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(yt&127)!==0||Ym(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,cg(jm.bind(null,o,h,t),[t]),o.flags|=2048,xs(9,{destroy:void 0},Zm.bind(null,o,h,a,n),null),a},useId:function(){var t=Gn(),n=Wt.identifierPrefix;if(Et){var a=Gi,o=Hi;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=JS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Of,useFormState:ag,useActionState:ag,useOptimistic:function(t){var n=Gn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pf.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return Gn().memoizedState=ay.bind(null,ct)},useEffectEvent:function(t){var n=Gn(),a={impl:t};return n.memoizedState=a,function(){if((Ut&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},If={readContext:wn,use:Jl,useCallback:mg,useContext:wn,useEffect:Df,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:$l,useRef:lg,useState:function(){return $l(ua)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=un();return _g(a,Gt.memoizedState,t,n)},useTransition:function(){var t=$l(ua)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:qm,useId:yg,useHostTransitionStatus:Of,useFormState:rg,useActionState:rg,useOptimistic:function(t,n){var a=un();return Jm(a,Gt,t,n)},useMemoCache:Tf,useCacheRefresh:Mg};If.useEffectEvent=ug;var Rg={readContext:wn,use:Jl,useCallback:mg,useContext:wn,useEffect:Df,useImperativeHandle:pg,useInsertionEffect:fg,useLayoutEffect:hg,useMemo:gg,useReducer:Rf,useRef:lg,useState:function(){return Rf(ua)},useDebugValue:Uf,useDeferredValue:function(t,n){var a=un();return Gt===null?Lf(a,t,n):_g(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Rf(ua)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:qm,useId:yg,useHostTransitionStatus:Of,useFormState:og,useActionState:og,useOptimistic:function(t,n){var a=un();return Gt!==null?Jm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Mg};Rg.useEffectEvent=ug;function zf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Xa(o);u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,o),n!==null&&(ei(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=fi(),u=Xa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Wa(t,u,o),n!==null&&(ei(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),o=Xa(a);o.tag=2,n!=null&&(o.callback=n),n=Wa(t,o,a),n!==null&&(ei(n,t,a),Ao(n,t,a))}};function wg(t,n,a,o,u,h,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,y):n.prototype&&n.prototype.isPureReactComponent?!vo(a,o)||!vo(u,h):!0}function Cg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Bf.enqueueReplaceState(n,n.state,null)}function Nr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Dg(t){Ol(t)}function Ug(t){console.error(t)}function Lg(t){Ol(t)}function ic(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ng(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ff(t,n,a){return a=Xa(a),a.tag=3,a.payload={element:null},a.callback=function(){ic(t,n)},a}function Og(t){return t=Xa(t),t.tag=3,t}function Pg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Ng(n,a,o)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){Ng(n,a,o),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function sy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&fs(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?mc():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),uh(t,o,u)),!1;case 22:return a.flags|=65536,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),uh(t,o,u)),!1}throw Error(s(435,a.tag))}return uh(t,o,u),mc(),!1}if(Et)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==af&&(t=Error(s(422),{cause:o}),yo(gi(t,a)))):(o!==af&&(n=Error(s(423),{cause:o}),yo(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,a),u=Ff(t.stateNode,o,u),mf(t,u),on!==4&&(on=2)),!1;var h=Error(s(520),{cause:o});if(h=gi(h,a),Ho===null?Ho=[h]:Ho.push(h),on!==4&&(on=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ff(a.stateNode,o,t),mf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Og(u),Pg(u,t,a,o),mf(a,u),!1}a=a.return}while(a!==null);return!1}var Hf=Error(s(461)),mn=!1;function Cn(t,n,a,o){n.child=t===null?Fm(n,null,a,o):Ur(n,t.child,a,o)}function Ig(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var y={};for(var R in o)R!=="ref"&&(y[R]=o[R])}else y=o;return Rr(n),o=yf(t,n,a,y,h,u),R=Mf(),t!==null&&!mn?(Ef(t,n,u),fa(t,n,u)):(Et&&R&&tf(n),n.flags|=1,Cn(t,n,o,u),n.child)}function zg(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Ju(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Bg(t,n,h,o,u)):(t=Bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Zf(t,u)){var y=h.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(y,o)&&t.ref===n.ref)return fa(t,n,u)}return n.flags|=1,t=ra(h,o),t.ref=n.ref,t.return=n,n.child=t}function Bg(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(vo(h,o)&&t.ref===n.ref)if(mn=!1,n.pendingProps=o=h,Zf(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,fa(t,n,u)}return Gf(t,n,a,o,u)}function Fg(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return Hg(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(n,h!==null?h.cachePool:null),h!==null?Vm(n,h):_f(),km(n);else return o=n.lanes=536870912,Hg(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Vl(n,h.cachePool),Vm(n,h),Ya(),n.memoizedState=null):(t!==null&&Vl(n,null),_f(),Ya());return Cn(t,n,u,a),n.child}function No(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Hg(t,n,a,o,u){var h=ff();return h=h===null?null:{parent:dn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Vl(n,null),_f(),km(n),t!==null&&fs(t,n,o,!0),n.childLanes=u,null}function ac(t,n){return n=sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Gg(t,n,a){return Ur(n,t.child,null,a),t=ac(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function oy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Et){if(o.mode==="hidden")return t=ac(n,o),n.lanes=536870912,No(null,t);if(xf(n),(t=Yt)?(t=$0(t,xi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=bm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ga(n);return n.lanes=536870912,null}return ac(n,o)}var h=t.memoizedState;if(h!==null){var y=h.dehydrated;if(xf(n),u)if(n.flags&256)n.flags&=-257,n=Gg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||fs(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(o=Wt,o!==null&&(y=ni(o,a),y!==0&&y!==h.retryLane))throw h.retryLane=y,Er(t,y),ei(o,t,y),Hf;mc(),n=Gg(t,n,a)}else t=h.treeContext,Yt=yi(y.nextSibling),Rn=n,Et=!0,Ha=null,xi=!1,t!==null&&Rm(n,t),n=ac(n,o),n.flags|=4096;return n}return t=ra(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function rc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gf(t,n,a,o,u){return Rr(n),a=yf(t,n,a,o,void 0,u),o=Mf(),t!==null&&!mn?(Ef(t,n,u),fa(t,n,u)):(Et&&o&&tf(n),n.flags|=1,Cn(t,n,a,u),n.child)}function Vg(t,n,a,o,u,h){return Rr(n),n.updateQueue=null,a=Wm(n,o,a,u),Xm(t),o=Mf(),t!==null&&!mn?(Ef(t,n,h),fa(t,n,h)):(Et&&o&&tf(n),n.flags|=1,Cn(t,n,a,h),n.child)}function kg(t,n,a,o,u){if(Rr(n),n.stateNode===null){var h=os,y=a.contextType;typeof y=="object"&&y!==null&&(h=wn(y)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},df(n),y=a.contextType,h.context=typeof y=="object"&&y!==null?wn(y):os,h.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(zf(n,a,y,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(y=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),y!==h.state&&Bf.enqueueReplaceState(h,h.state,null),wo(n,o,h,u),Ro(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,F=Nr(a,R);h.props=F;var ne=h.context,ge=a.contextType;y=os,typeof ge=="object"&&ge!==null&&(y=wn(ge));var Se=a.getDerivedStateFromProps;ge=typeof Se=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ge||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||ne!==y)&&Cg(n,h,o,y),ka=!1;var le=n.memoizedState;h.state=le,wo(n,o,h,u),Ro(),ne=n.memoizedState,R||le!==ne||ka?(typeof Se=="function"&&(zf(n,a,Se,o),ne=n.memoizedState),(F=ka||wg(n,a,F,o,le,ne,y))?(ge||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),h.props=o,h.state=ne,h.context=y,o=F):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,pf(t,n),y=n.memoizedProps,ge=Nr(a,y),h.props=ge,Se=n.pendingProps,le=h.context,ne=a.contextType,F=os,typeof ne=="object"&&ne!==null&&(F=wn(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==Se||le!==F)&&Cg(n,h,o,F),ka=!1,le=n.memoizedState,h.state=le,wo(n,o,h,u),Ro();var ce=n.memoizedState;y!==Se||le!==ce||ka||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof R=="function"&&(zf(n,a,R,o),ce=n.memoizedState),(ge=ka||wg(n,a,ge,o,le,ce,F)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?(ne||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ce,F),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ce,F)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=F,o=ge):(typeof h.componentDidUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&le===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,rc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,a,u)):Cn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=fa(t,n,u),t}function Xg(t,n,a,o){return Tr(),n.flags|=256,Cn(t,n,a,o),n.child}var Vf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kf(t){return{baseLanes:t,cachePool:Nm()}}function Xf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ui),t}function Wg(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,y;if((y=h)||(y=t!==null&&t.memoizedState===null?!1:(cn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Et){if(u?qa(n):Ya(),(t=Yt)?(t=$0(t,xi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Fa!==null?{id:Hi,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=bm(t),a.return=n,n.child=a,Rn=n,Yt=null)):t=null,t===null)throw Ga(n);return Ah(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Ya(),u=n.mode,R=sc({mode:"hidden",children:R},u),o=br(o,u,a,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,y,a),n.memoizedState=Vf,No(null,o)):(qa(n),Wf(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(h)n.flags&256?(qa(n),n.flags&=-257,n=qf(t,n,a)):n.memoizedState!==null?(Ya(),n.child=t.child,n.flags|=128,n=null):(Ya(),R=o.fallback,u=n.mode,o=sc({mode:"visible",children:o.children},u),R=br(R,u,a,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,Ur(n,t.child,null,a),o=n.child,o.memoizedState=kf(a),o.childLanes=Xf(t,y,a),n.memoizedState=Vf,n=No(null,o));else if(qa(n),Ah(R)){if(y=R.nextSibling&&R.nextSibling.dataset,y)var ne=y.dgst;y=ne,o=Error(s(419)),o.stack="",o.digest=y,yo({value:o,source:null,stack:null}),n=qf(t,n,a)}else if(mn||fs(t,n,a,!1),y=(a&t.childLanes)!==0,mn||y){if(y=Wt,y!==null&&(o=ni(y,a),o!==0&&o!==F.retryLane))throw F.retryLane=o,Er(t,o),ei(y,t,o),Hf;Th(R)||mc(),n=qf(t,n,a)}else Th(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,Yt=yi(R.nextSibling),Rn=n,Et=!0,Ha=null,xi=!1,t!==null&&Rm(n,t),n=Wf(n,o.children),n.flags|=4096);return n}return u?(Ya(),R=o.fallback,u=n.mode,F=t.child,ne=F.sibling,o=ra(F,{mode:"hidden",children:o.children}),o.subtreeFlags=F.subtreeFlags&65011712,ne!==null?R=ra(ne,R):(R=br(R,u,a,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,No(null,o),o=n.child,R=t.child.memoizedState,R===null?R=kf(a):(u=R.cachePool,u!==null?(F=dn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Nm(),R={baseLanes:R.baseLanes|a,cachePool:u}),o.memoizedState=R,o.childLanes=Xf(t,y,a),n.memoizedState=Vf,No(t.child,o)):(qa(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function Wf(t,n){return n=sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sc(t,n){return t=si(22,t,null,n),t.lanes=0,t}function qf(t,n,a){return Ur(n,t.child,null,a),t=Wf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),of(t.return,n,a)}function Yf(t,n,a,o,u,h){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=o,y.tail=a,y.tailMode=u,y.treeForkCount=h)}function Yg(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var y=cn.current,R=(y&2)!==0;if(R?(y=y&1|2,n.flags|=128):y&=1,Ae(cn,y),Cn(t,n,o,a),o=Et?So:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&qg(t,a,n);else if(t.tag===19)qg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Zl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Yf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Zl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Yf(n,!0,a,null,h,o);break;case"together":Yf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function fa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(fs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function ly(t,n,a){switch(n.tag){case 3:Ee(n,n.stateNode.containerInfo),Va(n,dn,t.memoizedState.cache),Tr();break;case 27:case 5:Xe(n);break;case 4:Ee(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,xf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wg(t,n,a):(qa(n),t=fa(t,n,a),t!==null?t.sibling:null);qa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(fs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Yg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ae(cn,cn.current),o)break;return null;case 22:return n.lanes=0,Fg(t,n,a,n.pendingProps);case 24:Va(n,dn,t.memoizedState.cache)}return fa(t,n,a)}function Zg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!Zf(t,a)&&(n.flags&128)===0)return mn=!1,ly(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Et&&(n.flags&1048576)!==0&&Am(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Cr(n.elementType),n.type=t,typeof t=="function")Ju(t)?(o=Nr(t,o),n.tag=1,n=kg(null,n,t,o,a)):(n.tag=0,n=Gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===C){n.tag=11,n=Ig(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=zg(null,n,t,o,a);break e}}throw n=ve(t)||t,Error(s(306,n,""))}}return n;case 0:return Gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Nr(o,n.pendingProps),kg(t,n,o,u,a);case 3:e:{if(Ee(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,pf(t,n),wo(n,o,null,a);var y=n.memoizedState;if(o=y.cache,Va(n,dn,o),o!==h.cache&&lf(n,[dn],a,!0),Ro(),o=y.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Xg(t,n,o,a);break e}else if(o!==u){u=gi(Error(s(424)),n),yo(u),n=Xg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Yt=yi(t.firstChild),Rn=n,Et=!0,Ha=null,xi=!0,a=Fm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Tr(),o===u){n=fa(t,n,a);break e}Cn(t,n,o,a)}n=n.child}return n;case 26:return rc(t,n),t===null?(a=r_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Et||(a=n.type,t=n.pendingProps,o=Mc(re.current).createElement(a),o[fn]=n,o[An]=t,Dn(o,a,t),hn(o),n.stateNode=o):n.memoizedState=r_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xe(n),t===null&&Et&&(o=n.stateNode=n_(n.type,n.pendingProps,re.current),Rn=n,xi=!0,u=Yt,tr(n.type)?(Rh=u,Yt=yi(o.firstChild)):Yt=u),Cn(t,n,n.pendingProps.children,a),rc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Et&&((u=o=Yt)&&(o=By(o,n.type,n.pendingProps,xi),o!==null?(n.stateNode=o,Rn=n,Yt=yi(o.firstChild),xi=!1,u=!0):u=!1),u||Ga(n)),Xe(n),u=n.type,h=n.pendingProps,y=t!==null?t.memoizedProps:null,o=h.children,Mh(u,h)?o=null:y!==null&&Mh(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=yf(t,n,$S,null,null,a),Zo._currentValue=u),rc(t,n),Cn(t,n,o,a),n.child;case 6:return t===null&&Et&&((t=a=Yt)&&(a=Fy(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Rn=n,Yt=null,t=!0):t=!1),t||Ga(n)),null;case 13:return Wg(t,n,a);case 4:return Ee(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ur(n,null,o,a):Cn(t,n,o,a),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,a);case 7:return Cn(t,n,n.pendingProps,a),n.child;case 8:return Cn(t,n,n.pendingProps.children,a),n.child;case 12:return Cn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Va(n,n.type,o.value),Cn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Rr(n),u=wn(u),o=o(u),n.flags|=1,Cn(t,n,o,a),n.child;case 14:return zg(t,n,n.type,n.pendingProps,a);case 15:return Bg(t,n,n.type,n.pendingProps,a);case 19:return Yg(t,n,a);case 31:return oy(t,n,a);case 22:return Fg(t,n,a,n.pendingProps);case 24:return Rr(n),o=wn(dn),t===null?(u=ff(),u===null&&(u=Wt,h=cf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},df(n),Va(n,dn,u)):((t.lanes&a)!==0&&(pf(t,n),wo(n,null,null,a),Ro()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Va(n,dn,o)):(o=h.cache,Va(n,dn,o),o!==u.cache&&lf(n,[dn],a,!0))),Cn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ha(t){t.flags|=4}function jf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(y0())t.flags|=8192;else throw Dr=Xl,hf}else t.flags&=-16777217}function jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!u_(n))if(y0())t.flags|=8192;else throw Dr=Xl,hf}function oc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?be():536870912,t.lanes|=n,Es|=n)}function Oo(t,n){if(!Et)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function cy(t,n,a){var o=n.pendingProps;switch(nf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),la(dn),Me(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(us(n)?ha(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,rf())),Zt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ha(n),h!==null?(Zt(n),jg(n,h)):(Zt(n),jf(n,u,null,o,a))):h?h!==t.memoizedState?(ha(n),Zt(n),jg(n,h)):(Zt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ha(n),Zt(n),jf(n,u,t,o,a)),null;case 27:if(Pe(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}t=Re.current,us(n)?wm(n):(t=n_(u,o,a),n.stateNode=t,ha(n))}return Zt(n),null;case 5:if(Pe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Zt(n),null}if(h=Re.current,us(n))wm(n);else{var y=Mc(re.current);switch(h){case 1:h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=y.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?y.createElement("select",{is:o.is}):y.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?y.createElement(u,{is:o.is}):y.createElement(u)}}h[fn]=n,h[An]=o;e:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)h.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break e;for(;y.sibling===null;){if(y.return===null||y.return===n)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=h;e:switch(Dn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ha(n)}}return Zt(n),jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ha(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,us(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||W0(t.nodeValue,a)),t||Ga(n,!0)}else t=Mc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return Zt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=us(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),t=!1}else a=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Zt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=us(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),u=!1}else u=rf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),oc(n,n.updateQueue),Zt(n),null);case 4:return Me(),t===null&&_h(n.stateNode.containerInfo),Zt(n),null;case 10:return la(n.type),Zt(n),null;case 19:if(Z(cn),o=n.memoizedState,o===null)return Zt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Oo(o,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Zl(t),h!==null){for(n.flags|=128,Oo(o,!1),t=h.updateQueue,n.updateQueue=t,oc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Em(a,t),a=a.sibling;return Ae(cn,cn.current&1|2),Et&&sa(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Ht()>hc&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Zl(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,oc(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Et)return Zt(n),null}else 2*Ht()-o.renderingStartTime>hc&&a!==536870912&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ht(),t.sibling=null,a=cn.current,Ae(cn,u?a&1|2:a&1),Et&&sa(n,o.treeForkCount),t):(Zt(n),null);case 22:case 23:return li(n),vf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&oc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Z(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(dn),Zt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uy(t,n){switch(nf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return la(dn),Me(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Pe(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(cn),null;case 4:return Me(),null;case 10:return la(n.type),null;case 22:case 23:return li(n),vf(),t!==null&&Z(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return la(dn),null;case 25:return null;default:return null}}function Kg(t,n){switch(nf(n),n.tag){case 3:la(dn),Me();break;case 26:case 27:case 5:Pe(n);break;case 4:Me();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Z(cn);break;case 10:la(n.type);break;case 22:case 23:li(n),vf(),t!==null&&Z(wr);break;case 24:la(dn)}}function Po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,y=a.inst;o=h(),y.destroy=o}a=a.next}while(a!==u)}}catch(R){Bt(n,n.return,R)}}function Za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var y=o.inst,R=y.destroy;if(R!==void 0){y.destroy=void 0,u=n;var F=a,ne=R;try{ne()}catch(ge){Bt(u,F,ge)}}}o=o.next}while(o!==h)}}catch(ge){Bt(n,n.return,ge)}}function Qg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Gm(n,a)}catch(o){Bt(t,t.return,o)}}}function Jg(t,n,a){a.props=Nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function Io(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Vi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function $g(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Kf(t,n,a){try{var o=t.stateNode;Ly(o,t.type,a,n),o[An]=n}catch(u){Bt(t,t.return,u)}}function e0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&tr(t.type)||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||e0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&tr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ia));else if(o!==4&&(o===27&&tr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Jf(t,n,a),t=t.sibling;t!==null;)Jf(t,n,a),t=t.sibling}function lc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&tr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(lc(t,n,a),t=t.sibling;t!==null;)lc(t,n,a),t=t.sibling}function t0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[fn]=t,n[An]=a}catch(h){Bt(t,t.return,h)}}var da=!1,gn=!1,$f=!1,n0=typeof WeakSet=="function"?WeakSet:Set,En=null;function fy(t,n){if(t=t.containerInfo,Sh=Cc,t=pm(t),Wu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var y=0,R=-1,F=-1,ne=0,ge=0,Se=t,le=null;t:for(;;){for(var ce;Se!==a||u!==0&&Se.nodeType!==3||(R=y+u),Se!==h||o!==0&&Se.nodeType!==3||(F=y+o),Se.nodeType===3&&(y+=Se.nodeValue.length),(ce=Se.firstChild)!==null;)le=Se,Se=ce;for(;;){if(Se===t)break t;if(le===a&&++ne===u&&(R=y),le===h&&++ge===o&&(F=y),(ce=Se.nextSibling)!==null)break;Se=le,le=Se.parentNode}Se=ce}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(yh={focusedElem:t,selectionRange:a},Cc=!1,En=n;En!==null;)if(n=En,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,En=t;else for(;En!==null;){switch(n=En,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ze=Nr(a.type,u);t=o.getSnapshotBeforeUpdate(Ze,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Bt(a,a.return,nt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)bh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":bh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,En=t;break}En=n.return}}function i0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ma(t,a),o&4&&Po(5,a);break;case 1:if(ma(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Bt(a,a.return,y)}else{var u=Nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Bt(a,a.return,y)}}o&64&&Qg(a),o&512&&Io(a,a.return);break;case 3:if(ma(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Gm(t,n)}catch(y){Bt(a,a.return,y)}}break;case 27:n===null&&o&4&&t0(a);case 26:case 5:ma(t,a),n===null&&o&4&&$g(a),o&512&&Io(a,a.return);break;case 12:ma(t,a);break;case 31:ma(t,a),o&4&&s0(t,a);break;case 13:ma(t,a),o&4&&o0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Sy.bind(null,a),Hy(t,a))));break;case 22:if(o=a.memoizedState!==null||da,!o){n=n!==null&&n.memoizedState!==null||gn,u=da;var h=gn;da=o,(gn=n)&&!h?ga(t,a,(a.subtreeFlags&8772)!==0):ma(t,a),da=u,gn=h}break;case 30:break;default:ma(t,a)}}function a0(t){var n=t.alternate;n!==null&&(t.alternate=null,a0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Pa(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Kn=!1;function pa(t,n,a){for(a=a.child;a!==null;)r0(t,n,a),a=a.sibling}function r0(t,n,a){if(de&&typeof de.onCommitFiberUnmount=="function")try{de.onCommitFiberUnmount(fe,a)}catch{}switch(a.tag){case 26:gn||Vi(a,n),pa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:gn||Vi(a,n);var o=$t,u=Kn;tr(a.type)&&($t=a.stateNode,Kn=!1),pa(t,n,a),Wo(a.stateNode),$t=o,Kn=u;break;case 5:gn||Vi(a,n);case 6:if(o=$t,u=Kn,$t=null,pa(t,n,a),$t=o,Kn=u,$t!==null)if(Kn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(h){Bt(a,n,h)}else try{$t.removeChild(a.stateNode)}catch(h){Bt(a,n,h)}break;case 18:$t!==null&&(Kn?(t=$t,Q0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Us(t)):Q0($t,a.stateNode));break;case 4:o=$t,u=Kn,$t=a.stateNode.containerInfo,Kn=!0,pa(t,n,a),$t=o,Kn=u;break;case 0:case 11:case 14:case 15:Za(2,a,n),gn||Za(4,a,n),pa(t,n,a);break;case 1:gn||(Vi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Jg(a,n,o)),pa(t,n,a);break;case 21:pa(t,n,a);break;case 22:gn=(o=gn)||a.memoizedState!==null,pa(t,n,a),gn=o;break;default:pa(t,n,a)}}function s0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Us(t)}catch(a){Bt(n,n.return,a)}}}function o0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Us(t)}catch(a){Bt(n,n.return,a)}}function hy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new n0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new n0),n;default:throw Error(s(435,t.tag))}}function cc(t,n){var a=hy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=yy.bind(null,t,o);o.then(u,u)}})}function Qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,y=n,R=y;e:for(;R!==null;){switch(R.tag){case 27:if(tr(R.type)){$t=R.stateNode,Kn=!1;break e}break;case 5:$t=R.stateNode,Kn=!1;break e;case 3:case 4:$t=R.stateNode.containerInfo,Kn=!0;break e}R=R.return}if($t===null)throw Error(s(160));r0(h,y,u),$t=null,Kn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)l0(n,t),n=n.sibling}var Ci=null;function l0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Qn(n,t),Jn(t),o&4&&(Za(3,t,t.return),Po(3,t),Za(5,t,t.return));break;case 1:Qn(n,t),Jn(t),o&512&&(gn||a===null||Vi(a,a.return)),o&64&&da&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ci;if(Qn(n,t),Jn(t),o&512&&(gn||a===null||Vi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Oa]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Dn(h,o,a),h[fn]=t,hn(h),o=h;break e;case"link":var y=l_("link","href",u).get(o+(a.href||""));if(y){for(var R=0;R<y.length;R++)if(h=y[R],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(R,1);break t}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;case"meta":if(y=l_("meta","content",u).get(o+(a.content||""))){for(R=0;R<y.length;R++)if(h=y[R],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(R,1);break t}}h=u.createElement(o),Dn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[fn]=t,hn(h),o=h}t.stateNode=o}else c_(u,t.type,t.stateNode);else t.stateNode=o_(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?c_(u,t.type,t.stateNode):o_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Qn(n,t),Jn(t),o&512&&(gn||a===null||Vi(a,a.return)),a!==null&&o&4&&Kf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Qn(n,t),Jn(t),o&512&&(gn||a===null||Vi(a,a.return)),t.flags&32){u=t.stateNode;try{ai(u,"")}catch(Ze){Bt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Kf(t,u,a!==null?a.memoizedProps:u)),o&1024&&($f=!0);break;case 6:if(Qn(n,t),Jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ze){Bt(t,t.return,Ze)}}break;case 3:if(Tc=null,u=Ci,Ci=Ec(n.containerInfo),Qn(n,t),Ci=u,Jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Us(n.containerInfo)}catch(Ze){Bt(t,t.return,Ze)}$f&&($f=!1,c0(t));break;case 4:o=Ci,Ci=Ec(t.stateNode.containerInfo),Qn(n,t),Jn(t),Ci=o;break;case 12:Qn(n,t),Jn(t);break;case 31:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 13:Qn(n,t),Jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fc=Ht()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ne=da,ge=gn;if(da=ne||u,gn=ge||F,Qn(n,t),gn=ge,da=ne,Jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||da||gn||Or(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(h=F.stateNode,u)y=h.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{R=F.stateNode;var Se=F.memoizedProps.style,le=Se!=null&&Se.hasOwnProperty("display")?Se.display:null;R.style.display=le==null||typeof le=="boolean"?"":(""+le).trim()}}catch(Ze){Bt(F,F.return,Ze)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Ze){Bt(F,F.return,Ze)}}}else if(n.tag===18){if(a===null){F=n;try{var ce=F.stateNode;u?J0(ce,!0):J0(F.stateNode,!1)}catch(Ze){Bt(F,F.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cc(t,a))));break;case 19:Qn(n,t),Jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 30:break;case 21:break;default:Qn(n,t),Jn(t)}}function Jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(e0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=Qf(t);lc(t,h,u);break;case 5:var y=a.stateNode;a.flags&32&&(ai(y,""),a.flags&=-33);var R=Qf(t);lc(t,R,y);break;case 3:case 4:var F=a.stateNode.containerInfo,ne=Qf(t);Jf(t,ne,F);break;default:throw Error(s(161))}}catch(ge){Bt(t,t.return,ge)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function c0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;c0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ma(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)i0(t,n.alternate,n),n=n.sibling}function Or(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Or(n);break;case 1:Vi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jg(n,n.return,a),Or(n);break;case 27:Wo(n.stateNode);case 26:case 5:Vi(n,n.return),Or(n);break;case 22:n.memoizedState===null&&Or(n);break;case 30:Or(n);break;default:Or(n)}t=t.sibling}}function ga(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,y=h.flags;switch(h.tag){case 0:case 11:case 15:ga(u,h,a),Po(4,h);break;case 1:if(ga(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Bt(o,o.return,ne)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)Hm(F[u],R)}catch(ne){Bt(o,o.return,ne)}}a&&y&64&&Qg(h),Io(h,h.return);break;case 27:t0(h);case 26:case 5:ga(u,h,a),a&&o===null&&y&4&&$g(h),Io(h,h.return);break;case 12:ga(u,h,a);break;case 31:ga(u,h,a),a&&y&4&&s0(u,h);break;case 13:ga(u,h,a),a&&y&4&&o0(u,h);break;case 22:h.memoizedState===null&&ga(u,h,a),Io(h,h.return);break;case 30:break;default:ga(u,h,a)}n=n.sibling}}function eh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function th(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Di(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)u0(t,n,a,o),n=n.sibling}function u0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Di(t,n,a,o),u&2048&&Po(9,n);break;case 1:Di(t,n,a,o);break;case 3:Di(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){Di(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,y=h.id,R=h.onPostCommit;typeof R=="function"&&R(y,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){Bt(n,n.return,F)}}else Di(t,n,a,o);break;case 31:Di(t,n,a,o);break;case 13:Di(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,y=n.alternate,n.memoizedState!==null?h._visibility&2?Di(t,n,a,o):zo(t,n):h._visibility&2?Di(t,n,a,o):(h._visibility|=2,Ss(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&eh(y,n);break;case 24:Di(t,n,a,o),u&2048&&th(n.alternate,n);break;default:Di(t,n,a,o)}}function Ss(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,y=n,R=a,F=o,ne=y.flags;switch(y.tag){case 0:case 11:case 15:Ss(h,y,R,F,u),Po(8,y);break;case 23:break;case 22:var ge=y.stateNode;y.memoizedState!==null?ge._visibility&2?Ss(h,y,R,F,u):zo(h,y):(ge._visibility|=2,Ss(h,y,R,F,u)),u&&ne&2048&&eh(y.alternate,y);break;case 24:Ss(h,y,R,F,u),u&&ne&2048&&th(y.alternate,y);break;default:Ss(h,y,R,F,u)}n=n.sibling}}function zo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:zo(a,o),u&2048&&eh(o.alternate,o);break;case 24:zo(a,o),u&2048&&th(o.alternate,o);break;default:zo(a,o)}n=n.sibling}}var Bo=8192;function ys(t,n,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)f0(t,n,a),t=t.sibling}function f0(t,n,a){switch(t.tag){case 26:ys(t,n,a),t.flags&Bo&&t.memoizedState!==null&&Jy(a,Ci,t.memoizedState,t.memoizedProps);break;case 5:ys(t,n,a);break;case 3:case 4:var o=Ci;Ci=Ec(t.stateNode.containerInfo),ys(t,n,a),Ci=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,ys(t,n,a),Bo=o):ys(t,n,a));break;default:ys(t,n,a)}}function h0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Fo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,p0(o,t)}h0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)d0(t),t=t.sibling}function d0(t){switch(t.tag){case 0:case 11:case 15:Fo(t),t.flags&2048&&Za(9,t,t.return);break;case 3:Fo(t);break;case 12:Fo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,uc(t)):Fo(t);break;default:Fo(t)}}function uc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];En=o,p0(o,t)}h0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Za(8,n,n.return),uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,uc(n));break;default:uc(n)}t=t.sibling}}function p0(t,n){for(;En!==null;){var a=En;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,En=o;else e:for(a=t;En!==null;){o=En;var u=o.sibling,h=o.return;if(a0(o),o===a){En=null;break e}if(u!==null){u.return=h,En=u;break e}En=h}}}var dy={getCacheForType:function(t){var n=wn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(dn).controller.signal}},py=typeof WeakMap=="function"?WeakMap:Map,Ut=0,Wt=null,xt=null,yt=0,zt=0,ci=null,ja=!1,Ms=!1,nh=!1,_a=0,on=0,Ka=0,Pr=0,ih=0,ui=0,Es=0,Ho=null,$n=null,ah=!1,fc=0,m0=0,hc=1/0,dc=null,Qa=null,xn=0,Ja=null,bs=null,va=0,rh=0,sh=null,g0=null,Go=0,oh=null;function fi(){return(Ut&2)!==0&&yt!==0?yt&-yt:B.T!==null?dh():co()}function _0(){if(ui===0)if((yt&536870912)===0||Et){var t=at;at<<=1,(at&3932160)===0&&(at=262144),ui=t}else ui=536870912;return t=oi.current,t!==null&&(t.flags|=32),ui}function ei(t,n,a){(t===Wt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),$a(t,yt,ui,!1)),We(t,a),((Ut&2)===0||t!==Wt)&&(t===Wt&&((Ut&2)===0&&(Pr|=a),on===4&&$a(t,yt,ui,!1)),ki(t))}function v0(t,n,a){if((Ut&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ue(t,n),u=o?_y(t,n):ch(t,n,!0),h=o;do{if(u===0){Ms&&!o&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!my(a)){u=ch(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;e:{var R=t;u=Ho;var F=R.current.memoizedState.isDehydrated;if(F&&(Ts(R,y).flags|=256),y=ch(R,y,!1),y!==2){if(nh&&!F){R.errorRecoveryDisabledLanes|=h,Pr|=h,u=4;break e}h=$n,$n=u,h!==null&&($n===null?$n=h:$n.push.apply($n,h))}u=y}if(h=!1,u!==2)continue}}if(u===1){Ts(t,0),$a(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:$a(o,n,ui,!ja);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=fc+300-Ht(),10<u)){if($a(o,n,ui,!ja),_e(o,0,!0)!==0)break e;va=n,o.timeoutHandle=j0(x0.bind(null,o,a,$n,dc,ah,n,ui,Pr,Es,ja,h,"Throttled",-0,0),u);break e}x0(o,a,$n,dc,ah,n,ui,Pr,Es,ja,h,null,-0,0)}}break}while(!0);ki(t)}function x0(t,n,a,o,u,h,y,R,F,ne,ge,Se,le,ce){if(t.timeoutHandle=-1,Se=n.subtreeFlags,Se&8192||(Se&16785408)===16785408){Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ia},f0(n,h,Se);var Ze=(h&62914560)===h?fc-Ht():(h&4194048)===h?m0-Ht():0;if(Ze=$y(Se,Ze),Ze!==null){va=h,t.cancelPendingCommit=Ze(R0.bind(null,t,n,h,a,o,u,y,R,F,ge,Se,null,le,ce)),$a(t,h,y,!ne);return}}R0(t,n,h,a,o,u,y,R,F)}function my(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ri(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,o){n&=~ih,n&=~Pr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ge(u),y=1<<h;o[h]=-1,u&=~y}a!==0&&Nt(t,a,n)}function pc(){return(Ut&6)===0?(Vo(0),!1):!0}function lh(){if(xt!==null){if(zt===0)var t=xt.return;else t=xt,oa=Ar=null,bf(t),ms=null,bo=0,t=xt;for(;t!==null;)Kg(t.alternate,t),t=t.return;xt=null}}function Ts(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Py(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),va=0,lh(),Wt=t,xt=a=ra(t.current,null),yt=n,zt=0,ci=null,ja=!1,Ms=Ue(t,n),nh=!1,Es=ui=ih=Pr=Ka=on=0,$n=Ho=null,ah=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),h=1<<u;n|=t[u],o&=~h}return _a=n,Pl(),a}function S0(t,n){ct=null,B.H=Lo,n===ps||n===kl?(n=Im(),zt=3):n===hf?(n=Im(),zt=4):zt=n===Hf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,xt===null&&(on=1,ic(t,gi(n,t.current)))}function y0(){var t=oi.current;return t===null?!0:(yt&4194048)===yt?Si===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Si:!1}function M0(){var t=B.H;return B.H=Lo,t===null?Lo:t}function E0(){var t=B.A;return B.A=dy,t}function mc(){on=4,ja||(yt&4194048)!==yt&&oi.current!==null||(Ms=!0),(Ka&134217727)===0&&(Pr&134217727)===0||Wt===null||$a(Wt,yt,ui,!1)}function ch(t,n,a){var o=Ut;Ut|=2;var u=M0(),h=E0();(Wt!==t||yt!==n)&&(dc=null,Ts(t,n)),n=!1;var y=on;e:do try{if(zt!==0&&xt!==null){var R=xt,F=ci;switch(zt){case 8:lh(),y=6;break e;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var ne=zt;if(zt=0,ci=null,As(t,R,F,ne),a&&Ms){y=0;break e}break;default:ne=zt,zt=0,ci=null,As(t,R,F,ne)}}gy(),y=on;break}catch(ge){S0(t,ge)}while(!0);return n&&t.shellSuspendCounter++,oa=Ar=null,Ut=o,B.H=u,B.A=h,xt===null&&(Wt=null,yt=0,Pl()),y}function gy(){for(;xt!==null;)b0(xt)}function _y(t,n){var a=Ut;Ut|=2;var o=M0(),u=E0();Wt!==t||yt!==n?(dc=null,hc=Ht()+500,Ts(t,n)):Ms=Ue(t,n);e:do try{if(zt!==0&&xt!==null){n=xt;var h=ci;t:switch(zt){case 1:zt=0,ci=null,As(t,n,h,1);break;case 2:case 9:if(Om(h)){zt=0,ci=null,T0(n);break}n=function(){zt!==2&&zt!==9||Wt!==t||(zt=7),ki(t)},h.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Om(h)?(zt=0,ci=null,T0(n)):(zt=0,ci=null,As(t,n,h,7));break;case 5:var y=null;switch(xt.tag){case 26:y=xt.memoizedState;case 5:case 27:var R=xt;if(y?u_(y):R.stateNode.complete){zt=0,ci=null;var F=R.sibling;if(F!==null)xt=F;else{var ne=R.return;ne!==null?(xt=ne,gc(ne)):xt=null}break t}}zt=0,ci=null,As(t,n,h,5);break;case 6:zt=0,ci=null,As(t,n,h,6);break;case 8:lh(),on=6;break e;default:throw Error(s(462))}}vy();break}catch(ge){S0(t,ge)}while(!0);return oa=Ar=null,B.H=o,B.A=u,Ut=a,xt!==null?0:(Wt=null,yt=0,Pl(),on)}function vy(){for(;xt!==null&&!rn();)b0(xt)}function b0(t){var n=Zg(t.alternate,t,_a);t.memoizedProps=t.pendingProps,n===null?gc(t):xt=n}function T0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Vg(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=Vg(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:bf(n);default:Kg(a,n),n=xt=Em(n,_a),n=Zg(a,n,_a)}t.memoizedProps=t.pendingProps,n===null?gc(t):xt=n}function As(t,n,a,o){oa=Ar=null,bf(n),ms=null,bo=0;var u=n.return;try{if(sy(t,u,n,a,yt)){on=1,ic(t,gi(a,t.current)),xt=null;return}}catch(h){if(u!==null)throw xt=u,h;on=1,ic(t,gi(a,t.current)),xt=null;return}n.flags&32768?(Et||o===1?t=!0:Ms||(yt&536870912)!==0?t=!1:(ja=t=!0,(o===2||o===9||o===3||o===6)&&(o=oi.current,o!==null&&o.tag===13&&(o.flags|=16384))),A0(n,t)):gc(n)}function gc(t){var n=t;do{if((n.flags&32768)!==0){A0(n,ja);return}t=n.return;var a=cy(n.alternate,n,_a);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=t}while(n!==null);on===0&&(on=5)}function A0(t,n){do{var a=uy(t.alternate,t);if(a!==null){a.flags&=32767,xt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xt=t;return}xt=t=a}while(t!==null);on=6,xt=null}function R0(t,n,a,o,u,h,y,R,F){t.cancelPendingCommit=null;do _c();while(xn!==0);if((Ut&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Ku,Kt(t,a,h,y,R,F),t===Wt&&(xt=Wt=null,yt=0),bs=n,Ja=t,va=a,rh=h,sh=u,g0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,My(K,function(){return L0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=H.p,H.p=2,y=Ut,Ut|=4;try{fy(t,n,a)}finally{Ut=y,H.p=u,B.T=o}}xn=1,w0(),C0(),D0()}}function w0(){if(xn===1){xn=0;var t=Ja,n=bs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Ut;Ut|=4;try{l0(n,t);var h=yh,y=pm(t.containerInfo),R=h.focusedElem,F=h.selectionRange;if(y!==R&&R&&R.ownerDocument&&dm(R.ownerDocument.documentElement,R)){if(F!==null&&Wu(R)){var ne=F.start,ge=F.end;if(ge===void 0&&(ge=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(ge,R.value.length);else{var Se=R.ownerDocument||document,le=Se&&Se.defaultView||window;if(le.getSelection){var ce=le.getSelection(),Ze=R.textContent.length,nt=Math.min(F.start,Ze),kt=F.end===void 0?nt:Math.min(F.end,Ze);!ce.extend&&nt>kt&&(y=kt,kt=nt,nt=y);var j=hm(R,nt),V=hm(R,kt);if(j&&V&&(ce.rangeCount!==1||ce.anchorNode!==j.node||ce.anchorOffset!==j.offset||ce.focusNode!==V.node||ce.focusOffset!==V.offset)){var te=Se.createRange();te.setStart(j.node,j.offset),ce.removeAllRanges(),nt>kt?(ce.addRange(te),ce.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),ce.addRange(te))}}}}for(Se=[],ce=R;ce=ce.parentNode;)ce.nodeType===1&&Se.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var xe=Se[R];xe.element.scrollLeft=xe.left,xe.element.scrollTop=xe.top}}Cc=!!Sh,yh=Sh=null}finally{Ut=u,H.p=o,B.T=a}}t.current=n,xn=2}}function C0(){if(xn===2){xn=0;var t=Ja,n=bs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=H.p;H.p=2;var u=Ut;Ut|=4;try{i0(t,n.alternate,n)}finally{Ut=u,H.p=o,B.T=a}}xn=3}}function D0(){if(xn===4||xn===3){xn=0,Y();var t=Ja,n=bs,a=va,o=g0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,bs=Ja=null,U0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Qa=null),lo(a),n=n.stateNode,de&&typeof de.onCommitFiberRoot=="function")try{de.onCommitFiberRoot(fe,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=H.p,H.p=2,B.T=null;try{for(var h=t.onRecoverableError,y=0;y<o.length;y++){var R=o[y];h(R.value,{componentStack:R.stack})}}finally{B.T=n,H.p=u}}(va&3)!==0&&_c(),ki(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===oh?Go++:(Go=0,oh=t):Go=0,Vo(0)}}function U0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function _c(){return w0(),C0(),D0(),L0()}function L0(){if(xn!==5)return!1;var t=Ja,n=rh;rh=0;var a=lo(va),o=B.T,u=H.p;try{H.p=32>a?32:a,B.T=null,a=sh,sh=null;var h=Ja,y=va;if(xn=0,bs=Ja=null,va=0,(Ut&6)!==0)throw Error(s(331));var R=Ut;if(Ut|=4,d0(h.current),u0(h,h.current,y,a),Ut=R,Vo(0,!1),de&&typeof de.onPostCommitFiberRoot=="function")try{de.onPostCommitFiberRoot(fe,h)}catch{}return!0}finally{H.p=u,B.T=o,U0(t,n)}}function N0(t,n,a){n=gi(a,n),n=Ff(t.stateNode,n,2),t=Wa(t,n,2),t!==null&&(We(t,2),ki(t))}function Bt(t,n,a){if(t.tag===3)N0(t,t,a);else for(;n!==null;){if(n.tag===3){N0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Qa===null||!Qa.has(o))){t=gi(a,t),a=Og(2),o=Wa(n,a,2),o!==null&&(Pg(a,o,n,t),We(o,2),ki(o));break}}n=n.return}}function uh(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new py;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(nh=!0,u.add(a),t=xy.bind(null,t,n,a),n.then(t,t))}function xy(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Wt===t&&(yt&a)===a&&(on===4||on===3&&(yt&62914560)===yt&&300>Ht()-fc?(Ut&2)===0&&Ts(t,0):ih|=a,Es===yt&&(Es=0)),ki(t)}function O0(t,n){n===0&&(n=be()),t=Er(t,n),t!==null&&(We(t,n),ki(t))}function Sy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),O0(t,a)}function yy(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),O0(t,a)}function My(t,n){return ln(t,n)}var vc=null,Rs=null,fh=!1,xc=!1,hh=!1,er=0;function ki(t){t!==Rs&&t.next===null&&(Rs===null?vc=Rs=t:Rs=Rs.next=t),xc=!0,fh||(fh=!0,by())}function Vo(t,n){if(!hh&&xc){hh=!0;do for(var a=!1,o=vc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var y=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ge(42|t)+1)-1,h&=u&~(y&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,B0(o,h))}else h=yt,h=_e(o,o===Wt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ue(o,h)||(a=!0,B0(o,h));o=o.next}while(a);hh=!1}}function Ey(){P0()}function P0(){xc=fh=!1;var t=0;er!==0&&Oy()&&(t=er);for(var n=Ht(),a=null,o=vc;o!==null;){var u=o.next,h=I0(o,n);h===0?(o.next=null,a===null?vc=u:a.next=u,u===null&&(Rs=a)):(a=o,(t!==0||(h&3)!==0)&&(xc=!0)),o=u}xn!==0&&xn!==5||Vo(t),er!==0&&(er=0)}function I0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var y=31-Ge(h),R=1<<y,F=u[y];F===-1?((R&a)===0||(R&o)!==0)&&(u[y]=He(R,n)):F<=n&&(t.expiredLanes|=R),h&=~R}if(n=Wt,a=yt,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&qt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ue(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&qt(o),lo(a)){case 2:case 8:a=E;break;case 32:a=K;break;case 268435456:a=he;break;default:a=K}return o=z0.bind(null,t),a=ln(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&qt(o),t.callbackPriority=2,t.callbackNode=null,2}function z0(t,n){if(xn!==0&&xn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(_c()&&t.callbackNode!==a)return null;var o=yt;return o=_e(t,t===Wt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(v0(t,o,n),I0(t,Ht()),t.callbackNode!=null&&t.callbackNode===a?z0.bind(null,t):null)}function B0(t,n){if(_c())return null;v0(t,n,!0)}function by(){Iy(function(){(Ut&6)!==0?ln(U,Ey):P0()})}function dh(){if(er===0){var t=hs;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),er=t}return er}function F0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:xr(""+t)}function H0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Ty(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=F0((u[An]||null).action),y=o.submitter;y&&(n=(n=y[An]||null)?F0(n.formAction):y.getAttribute("formAction"),n!==null&&(h=n,y=null));var R=new Ul("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(er!==0){var F=y?H0(u,y):new FormData(u);Nf(a,{pending:!0,data:F,method:u.method,action:h},null,F)}}else typeof h=="function"&&(R.preventDefault(),F=y?H0(u,y):new FormData(u),Nf(a,{pending:!0,data:F,method:u.method,action:h},h,F))},currentTarget:u}]})}}for(var ph=0;ph<ju.length;ph++){var mh=ju[ph],Ay=mh.toLowerCase(),Ry=mh[0].toUpperCase()+mh.slice(1);wi(Ay,"on"+Ry)}wi(_m,"onAnimationEnd"),wi(vm,"onAnimationIteration"),wi(xm,"onAnimationStart"),wi("dblclick","onDoubleClick"),wi("focusin","onFocus"),wi("focusout","onBlur"),wi(kS,"onTransitionRun"),wi(XS,"onTransitionStart"),wi(WS,"onTransitionCancel"),wi(Sm,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),q("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),q("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),q("onBeforeInput",["compositionend","keypress","textInput","paste"]),q("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),q("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function G0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var y=o.length-1;0<=y;y--){var R=o[y],F=R.instance,ne=R.currentTarget;if(R=R.listener,F!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ne;try{h(u)}catch(ge){Ol(ge)}u.currentTarget=null,h=F}else for(y=0;y<o.length;y++){if(R=o[y],F=R.instance,ne=R.currentTarget,R=R.listener,F!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=ne;try{h(u)}catch(ge){Ol(ge)}u.currentTarget=null,h=F}}}}function St(t,n){var a=n[gr];a===void 0&&(a=n[gr]=new Set);var o=t+"__bubble";a.has(o)||(V0(n,t,2,!1),a.add(o))}function gh(t,n,a){var o=0;n&&(o|=4),V0(a,t,o,n)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function _h(t){if(!t[Sc]){t[Sc]=!0,Rl.forEach(function(a){a!=="selectionchange"&&(wy.has(a)||gh(a,!1,t),gh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Sc]||(n[Sc]=!0,gh("selectionchange",!1,n))}}function V0(t,n,a,o){switch(__(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=Lh}a=u.bind(null,n,a,t),u=void 0,!Iu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function vh(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var y=o.tag;if(y===3||y===4){var R=o.stateNode.containerInfo;if(R===u)break;if(y===4)for(y=o.return;y!==null;){var F=y.tag;if((F===3||F===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;R!==null;){if(y=ta(R),y===null)return;if(F=y.tag,F===5||F===6||F===26||F===27){o=h=y;continue e}R=R.parentNode}}o=o.return}Yp(function(){var ne=h,ge=Ou(a),Se=[];e:{var le=ym.get(t);if(le!==void 0){var ce=Ul,Ze=t;switch(t){case"keypress":if(Cl(a)===0)break e;case"keydown":case"keyup":ce=yS;break;case"focusin":Ze="focus",ce=Hu;break;case"focusout":Ze="blur",ce=Hu;break;case"beforeblur":case"afterblur":ce=Hu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=cS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=bS;break;case _m:case vm:case xm:ce=hS;break;case Sm:ce=AS;break;case"scroll":case"scrollend":ce=oS;break;case"wheel":ce=wS;break;case"copy":case"cut":case"paste":ce=pS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Jp;break;case"toggle":case"beforetoggle":ce=DS}var nt=(n&4)!==0,kt=!nt&&(t==="scroll"||t==="scrollend"),j=nt?le!==null?le+"Capture":null:le;nt=[];for(var V=ne,te;V!==null;){var xe=V;if(te=xe.stateNode,xe=xe.tag,xe!==5&&xe!==26&&xe!==27||te===null||j===null||(xe=uo(V,j),xe!=null&&nt.push(Xo(V,xe,te))),kt)break;V=V.return}0<nt.length&&(le=new ce(le,Ze,null,a,ge),Se.push({event:le,listeners:nt}))}}if((n&7)===0){e:{if(le=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",le&&a!==Nu&&(Ze=a.relatedTarget||a.fromElement)&&(ta(Ze)||Ze[Zn]))break e;if((ce||le)&&(le=ge.window===ge?ge:(le=ge.ownerDocument)?le.defaultView||le.parentWindow:window,ce?(Ze=a.relatedTarget||a.toElement,ce=ne,Ze=Ze?ta(Ze):null,Ze!==null&&(kt=c(Ze),nt=Ze.tag,Ze!==kt||nt!==5&&nt!==27&&nt!==6)&&(Ze=null)):(ce=null,Ze=ne),ce!==Ze)){if(nt=Kp,xe="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Jp,xe="onPointerLeave",j="onPointerEnter",V="pointer"),kt=ce==null?le:vr(ce),te=Ze==null?le:vr(Ze),le=new nt(xe,V+"leave",ce,a,ge),le.target=kt,le.relatedTarget=te,xe=null,ta(ge)===ne&&(nt=new nt(j,V+"enter",Ze,a,ge),nt.target=te,nt.relatedTarget=kt,xe=nt),kt=xe,ce&&Ze)t:{for(nt=Cy,j=ce,V=Ze,te=0,xe=j;xe;xe=nt(xe))te++;xe=0;for(var tt=V;tt;tt=nt(tt))xe++;for(;0<te-xe;)j=nt(j),te--;for(;0<xe-te;)V=nt(V),xe--;for(;te--;){if(j===V||V!==null&&j===V.alternate){nt=j;break t}j=nt(j),V=nt(V)}nt=null}else nt=null;ce!==null&&k0(Se,le,ce,nt,!1),Ze!==null&&kt!==null&&k0(Se,kt,Ze,nt,!0)}}e:{if(le=ne?vr(ne):window,ce=le.nodeName&&le.nodeName.toLowerCase(),ce==="select"||ce==="input"&&le.type==="file")var Rt=sm;else if(am(le))if(om)Rt=HS;else{Rt=BS;var Ke=zS}else ce=le.nodeName,!ce||ce.toLowerCase()!=="input"||le.type!=="checkbox"&&le.type!=="radio"?ne&&Lt(ne.elementType)&&(Rt=sm):Rt=FS;if(Rt&&(Rt=Rt(t,ne))){rm(Se,Rt,a,ge);break e}Ke&&Ke(t,le,ne),t==="focusout"&&ne&&le.type==="number"&&ne.memoizedProps.value!=null&&vt(le,"number",le.value)}switch(Ke=ne?vr(ne):window,t){case"focusin":(am(Ke)||Ke.contentEditable==="true")&&(as=Ke,qu=ne,xo=null);break;case"focusout":xo=qu=as=null;break;case"mousedown":Yu=!0;break;case"contextmenu":case"mouseup":case"dragend":Yu=!1,mm(Se,a,ge);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":mm(Se,a,ge)}var ut;if(Vu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else is?nm(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&($p&&a.locale!=="ko"&&(is||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&is&&(ut=Zp()):(Ba=ge,zu="value"in Ba?Ba.value:Ba.textContent,is=!0)),Ke=yc(ne,Mt),0<Ke.length&&(Mt=new Qp(Mt,t,null,a,ge),Se.push({event:Mt,listeners:Ke}),ut?Mt.data=ut:(ut=im(a),ut!==null&&(Mt.data=ut)))),(ut=LS?NS(t,a):OS(t,a))&&(Mt=yc(ne,"onBeforeInput"),0<Mt.length&&(Ke=new Qp("onBeforeInput","beforeinput",null,a,ge),Se.push({event:Ke,listeners:Mt}),Ke.data=ut)),Ty(Se,t,ne,a,ge)}G0(Se,n)})}function Xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function yc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=uo(t,a),u!=null&&o.unshift(Xo(t,u,h)),u=uo(t,n),u!=null&&o.push(Xo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Cy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function k0(t,n,a,o,u){for(var h=n._reactName,y=[];a!==null&&a!==o;){var R=a,F=R.alternate,ne=R.stateNode;if(R=R.tag,F!==null&&F===o)break;R!==5&&R!==26&&R!==27||ne===null||(F=ne,u?(ne=uo(a,h),ne!=null&&y.unshift(Xo(a,ne,F))):u||(ne=uo(a,h),ne!=null&&y.push(Xo(a,ne,F)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var Dy=/\r\n?/g,Uy=/\u0000|\uFFFD/g;function X0(t){return(typeof t=="string"?t:""+t).replace(Dy,`
`).replace(Uy,"")}function W0(t,n){return n=X0(n),X0(t)===n}function Vt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ai(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ai(t,""+o);break;case"className":Ye(t,"class",o);break;case"tabIndex":Ye(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ye(t,a,o);break;case"style":Ri(t,o,h);break;case"data":if(n!=="object"){Ye(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xr(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=xr(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ia);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=xr(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),Oe(t,"popover",o);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Oe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Fi.get(a)||a,Oe(t,a,o))}}function xh(t,n,a,o,u,h){switch(a){case"style":Ri(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ai(t,o):(typeof o=="number"||typeof o=="bigint")&&ai(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ia);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[An]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):Oe(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var y=a[h];if(y!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,h,y,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var R=h=y=u=null,F=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var ge=a[o];if(ge!=null)switch(o){case"name":u=ge;break;case"type":y=ge;break;case"checked":F=ge;break;case"defaultChecked":ne=ge;break;case"value":h=ge;break;case"defaultValue":R=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Vt(t,n,o,ge,a,null)}}On(t,h,R,F,ne,y,u,!1);return;case"select":St("invalid",t),o=y=h=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":y=R;break;case"multiple":o=R;default:Vt(t,n,u,R,a,null)}n=h,a=y,t.multiple=!!o,n!=null?vn(t,!!o,n,!1):a!=null&&vn(t,!!o,a,!0);return;case"textarea":St("invalid",t),h=u=o=null;for(y in a)if(a.hasOwnProperty(y)&&(R=a[y],R!=null))switch(y){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Vt(t,n,y,R,a,null)}Ai(t,o,u,h);return;case"option":for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!=null)&&(F==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,F,o,a,null));return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)St(ko[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ne,o,a,null)}return;default:if(Lt(n)){for(ge in a)a.hasOwnProperty(ge)&&(o=a[ge],o!==void 0&&xh(t,n,ge,o,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(o=a[R],o!=null&&Vt(t,n,R,o,a,null))}function Ly(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,y=null,R=null,F=null,ne=null,ge=null;for(ce in a){var Se=a[ce];if(a.hasOwnProperty(ce)&&Se!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":F=Se;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,Se)}}for(var le in o){var ce=o[le];if(Se=a[le],o.hasOwnProperty(le)&&(ce!=null||Se!=null))switch(le){case"type":h=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":ge=ce;break;case"value":y=ce;break;case"defaultValue":R=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==Se&&Vt(t,n,le,ce,o,Se)}}Ve(t,y,R,F,ne,ge,h,u);return;case"select":ce=y=R=le=null;for(h in a)if(F=a[h],a.hasOwnProperty(h)&&F!=null)switch(h){case"value":break;case"multiple":ce=F;default:o.hasOwnProperty(h)||Vt(t,n,h,null,o,F)}for(u in o)if(h=o[u],F=a[u],o.hasOwnProperty(u)&&(h!=null||F!=null))switch(u){case"value":le=h;break;case"defaultValue":R=h;break;case"multiple":y=h;default:h!==F&&Vt(t,n,u,h,o,F)}n=R,a=y,o=ce,le!=null?vn(t,!!a,le,!1):!!o!=!!a&&(n!=null?vn(t,!!a,n,!0):vn(t,!!a,a?[]:"",!1));return;case"textarea":ce=le=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Vt(t,n,R,null,o,u)}for(y in o)if(u=o[y],h=a[y],o.hasOwnProperty(y)&&(u!=null||h!=null))switch(y){case"value":le=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Vt(t,n,y,u,o,h)}ii(t,le,ce);return;case"option":for(var Ze in a)le=a[Ze],a.hasOwnProperty(Ze)&&le!=null&&!o.hasOwnProperty(Ze)&&(Ze==="selected"?t.selected=!1:Vt(t,n,Ze,null,o,le));for(F in o)le=o[F],ce=a[F],o.hasOwnProperty(F)&&le!==ce&&(le!=null||ce!=null)&&(F==="selected"?t.selected=le&&typeof le!="function"&&typeof le!="symbol":Vt(t,n,F,le,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in a)le=a[nt],a.hasOwnProperty(nt)&&le!=null&&!o.hasOwnProperty(nt)&&Vt(t,n,nt,null,o,le);for(ne in o)if(le=o[ne],ce=a[ne],o.hasOwnProperty(ne)&&le!==ce&&(le!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:Vt(t,n,ne,le,o,ce)}return;default:if(Lt(n)){for(var kt in a)le=a[kt],a.hasOwnProperty(kt)&&le!==void 0&&!o.hasOwnProperty(kt)&&xh(t,n,kt,void 0,o,le);for(ge in o)le=o[ge],ce=a[ge],!o.hasOwnProperty(ge)||le===ce||le===void 0&&ce===void 0||xh(t,n,ge,le,o,ce);return}}for(var j in a)le=a[j],a.hasOwnProperty(j)&&le!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,le);for(Se in o)le=o[Se],ce=a[Se],!o.hasOwnProperty(Se)||le===ce||le==null&&ce==null||Vt(t,n,Se,le,o,ce)}function q0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ny(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,y=u.initiatorType,R=u.duration;if(h&&R&&q0(y)){for(y=0,R=u.responseEnd,o+=1;o<a.length;o++){var F=a[o],ne=F.startTime;if(ne>R)break;var ge=F.transferSize,Se=F.initiatorType;ge&&q0(Se)&&(F=F.responseEnd,y+=ge*(F<R?1:(R-ne)/(F-ne)))}if(--o,n+=8*(h+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sh=null,yh=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function Y0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Z0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Eh=null;function Oy(){var t=window.event;return t&&t.type==="popstate"?t===Eh?!1:(Eh=t,!0):(Eh=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,Py=typeof clearTimeout=="function"?clearTimeout:void 0,K0=typeof Promise=="function"?Promise:void 0,Iy=typeof queueMicrotask=="function"?queueMicrotask:typeof K0<"u"?function(t){return K0.resolve(null).then(t).catch(zy)}:j0;function zy(t){setTimeout(function(){throw t})}function tr(t){return t==="head"}function Q0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Us(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Wo(a);for(var h=a.firstChild;h;){var y=h.nextSibling,R=h.nodeName;h[Oa]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=y}}else a==="body"&&Wo(t.ownerDocument.body);a=u}while(a);Us(n)}function J0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function bh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bh(a),Pa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function By(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Oa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function Fy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function $0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function Th(t){return t.data==="$?"||t.data==="$~"}function Ah(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Hy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Rh=null;function e_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function t_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function n_(t,n,a){switch(n=Mc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Pa(t)}var Mi=new Map,i_=new Set;function Ec(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var xa=H.d;H.d={f:Gy,r:Vy,D:ky,C:Xy,L:Wy,m:qy,X:Zy,S:Yy,M:jy};function Gy(){var t=xa.f(),n=pc();return t||n}function Vy(t){var n=na(t);n!==null&&n.tag===5&&n.type==="form"?Sg(n):xa.r(t)}var ws=typeof document>"u"?null:document;function a_(t,n,a){var o=ws;if(o&&typeof n=="string"&&n){var u=Pt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),i_.has(u)||(i_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function ky(t){xa.D(t),a_("dns-prefetch",t,null)}function Xy(t,n){xa.C(t,n),a_("preconnect",t,n)}function Wy(t,n,a){xa.L(t,n,a);var o=ws;if(o&&t&&n){var u='link[rel="preload"][as="'+Pt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Pt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Pt(a.imageSizes)+'"]')):u+='[href="'+Pt(t)+'"]';var h=u;switch(n){case"style":h=Cs(t);break;case"script":h=Ds(t)}Mi.has(h)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(h))||n==="script"&&o.querySelector(Yo(h))||(n=o.createElement("link"),Dn(n,"link",t),hn(n),o.head.appendChild(n)))}}function qy(t,n){xa.m(t,n);var a=ws;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Pt(o)+'"][href="'+Pt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ds(t)}if(!Mi.has(h)&&(t=g({rel:"modulepreload",href:t},n),Mi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Yo(h)))return}o=a.createElement("link"),Dn(o,"link",t),hn(o),a.head.appendChild(o)}}}function Yy(t,n,a){xa.S(t,n,a);var o=ws;if(o&&t){var u=Ia(o).hoistableStyles,h=Cs(t);n=n||"default";var y=u.get(h);if(!y){var R={loading:0,preload:null};if(y=o.querySelector(qo(h)))R.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(h))&&wh(t,a);var F=y=o.createElement("link");hn(F),Dn(F,"link",t),F._p=new Promise(function(ne,ge){F.onload=ne,F.onerror=ge}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,bc(y,n,o)}y={type:"stylesheet",instance:y,count:1,state:R},u.set(h,y)}}}function Zy(t,n){xa.X(t,n);var a=ws;if(a&&t){var o=Ia(a).hoistableScripts,u=Ds(t),h=o.get(u);h||(h=a.querySelector(Yo(u)),h||(t=g({src:t,async:!0},n),(n=Mi.get(u))&&Ch(t,n),h=a.createElement("script"),hn(h),Dn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function jy(t,n){xa.M(t,n);var a=ws;if(a&&t){var o=Ia(a).hoistableScripts,u=Ds(t),h=o.get(u);h||(h=a.querySelector(Yo(u)),h||(t=g({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&Ch(t,n),h=a.createElement("script"),hn(h),Dn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function r_(t,n,a,o){var u=(u=re.current)?Ec(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Cs(a.href),a=Ia(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Cs(a.href);var h=Ia(u).hoistableStyles,y=h.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,y),(h=u.querySelector(qo(t)))&&!h._p&&(y.instance=h,y.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),h||Ky(u,t,a,y.state))),n&&o===null)throw Error(s(528,""));return y}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ds(a),a=Ia(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Cs(t){return'href="'+Pt(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function s_(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Ky(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),hn(n),t.head.appendChild(n))}function Ds(t){return'[src="'+Pt(t)+'"]'}function Yo(t){return"script[async]"+t}function o_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Pt(a.href)+'"]');if(o)return n.instance=o,hn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),hn(o),Dn(o,"style",u),bc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Cs(a.href);var h=t.querySelector(qo(u));if(h)return n.state.loading|=4,n.instance=h,hn(h),h;o=s_(a),(u=Mi.get(u))&&wh(o,u),h=(t.ownerDocument||t).createElement("link"),hn(h);var y=h;return y._p=new Promise(function(R,F){y.onload=R,y.onerror=F}),Dn(h,"link",o),n.state.loading|=4,bc(h,a.precedence,t),n.instance=h;case"script":return h=Ds(a.src),(u=t.querySelector(Yo(h)))?(n.instance=u,hn(u),u):(o=a,(u=Mi.get(h))&&(o=g({},a),Ch(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),hn(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,bc(o,a.precedence,t));return n.instance}function bc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,y=0;y<o.length;y++){var R=o[y];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ch(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Tc=null;function l_(t,n,a){if(Tc===null){var o=new Map,u=Tc=new Map;u.set(a,o)}else u=Tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[Oa]||h[fn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var y=h.getAttribute(n)||"";y=t+y;var R=o.get(y);R?R.push(h):o.set(y,[h])}}return o}function c_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Qy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function u_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Jy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Cs(o.href),h=n.querySelector(qo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,hn(h);return}h=n.ownerDocument||n,o=s_(o),(u=Mi.get(u))&&wh(o,u),h=h.createElement("link"),hn(h);var y=h;y._p=new Promise(function(R,F){y.onload=R,y.onerror=F}),Dn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Dh=0;function $y(t,n){return t.stylesheets&&t.count===0&&wc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&wc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Dh===0&&(Dh=62500*Ny());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&wc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Dh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rc=null;function wc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rc=new Map,n.forEach(eM,t),Rc=null,Ac.call(t))}function eM(t,n){if(!(n.state.loading&4)){var a=Rc.get(t);if(a)var o=a.get(null);else{a=new Map,Rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var y=u[h];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),o=y)}o&&a.set(null,o)}u=n.instance,y=u.getAttribute("data-precedence"),h=a.get(y)||o,h===o&&a.set(null,u),a.set(y,u),this.count++,o=Ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Zo={$$typeof:P,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function tM(t,n,a,o,u,h,y,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function f_(t,n,a,o,u,h,y,R,F,ne,ge,Se){return t=new tM(t,n,a,y,F,ne,ge,Se,R),n=1,h===!0&&(n|=24),h=si(3,null,null,n),t.current=h,h.stateNode=t,n=cf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},df(h),t}function h_(t){return t?(t=os,t):os}function d_(t,n,a,o,u,h){u=h_(u),o.context===null?o.context=u:o.pendingContext=u,o=Xa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Wa(t,o,n),a!==null&&(ei(a,t,n),Ao(a,t,n))}function p_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Uh(t,n){p_(t,n),(t=t.alternate)&&p_(t,n)}function m_(t){if(t.tag===13||t.tag===31){var n=Er(t,67108864);n!==null&&ei(n,t,67108864),Uh(t,67108864)}}function g_(t){if(t.tag===13||t.tag===31){var n=fi();n=oo(n);var a=Er(t,n);a!==null&&ei(a,t,n),Uh(t,n)}}var Cc=!0;function nM(t,n,a,o){var u=B.T;B.T=null;var h=H.p;try{H.p=2,Lh(t,n,a,o)}finally{H.p=h,B.T=u}}function iM(t,n,a,o){var u=B.T;B.T=null;var h=H.p;try{H.p=8,Lh(t,n,a,o)}finally{H.p=h,B.T=u}}function Lh(t,n,a,o){if(Cc){var u=Nh(o);if(u===null)vh(t,n,o,Dc,a),v_(t,o);else if(rM(u,t,n,a,o))o.stopPropagation();else if(v_(t,o),n&4&&-1<aM.indexOf(t)){for(;u!==null;){var h=na(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var y=Ce(h.pendingLanes);if(y!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;y;){var F=1<<31-Ge(y);R.entanglements[1]|=F,y&=~F}ki(h),(Ut&6)===0&&(hc=Ht()+500,Vo(0))}}break;case 31:case 13:R=Er(h,2),R!==null&&ei(R,h,2),pc(),Uh(h,2)}if(h=Nh(o),h===null&&vh(t,n,o,Dc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else vh(t,n,o,null,a)}}function Nh(t){return t=Ou(t),Oh(t)}var Dc=null;function Oh(t){if(Dc=null,t=ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Dc=t,null}function __(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Dt()){case U:return 2;case E:return 8;case K:case se:return 32;case he:return 268435456;default:return 32}default:return 32}}var Ph=!1,nr=null,ir=null,ar=null,jo=new Map,Ko=new Map,rr=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function v_(t,n){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=na(n),n!==null&&m_(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function rM(t,n,a,o,u){switch(n){case"focusin":return nr=Qo(nr,t,n,a,o,u),!0;case"dragenter":return ir=Qo(ir,t,n,a,o,u),!0;case"mouseover":return ar=Qo(ar,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return jo.set(h,Qo(jo.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Ko.set(h,Qo(Ko.get(h)||null,t,n,a,o,u)),!0}return!1}function x_(t){var n=ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,es(t.priority,function(){g_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,es(t.priority,function(){g_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Nh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Nu=o,a.target.dispatchEvent(o),Nu=null}else return n=na(a),n!==null&&m_(n),t.blockedOn=a,!1;n.shift()}return!0}function S_(t,n,a){Uc(t)&&a.delete(n)}function sM(){Ph=!1,nr!==null&&Uc(nr)&&(nr=null),ir!==null&&Uc(ir)&&(ir=null),ar!==null&&Uc(ar)&&(ar=null),jo.forEach(S_),Ko.forEach(S_)}function Lc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ph||(Ph=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,sM)))}var Nc=null;function y_(t){Nc!==t&&(Nc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Nc===t&&(Nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Oh(o||a)===null)continue;break}var h=na(a);h!==null&&(t.splice(n,3),n-=3,Nf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Us(t){function n(F){return Lc(F,t)}nr!==null&&Lc(nr,t),ir!==null&&Lc(ir,t),ar!==null&&Lc(ar,t),jo.forEach(n),Ko.forEach(n);for(var a=0;a<rr.length;a++){var o=rr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)x_(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],y=u[An]||null;if(typeof h=="function")y||y_(a);else if(y){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,y=h[An]||null)R=y.formAction;else if(Oh(u)!==null)continue}else R=y.action;typeof R=="function"?a[o+1]=R:(a.splice(o,3),o-=3),y_(a)}}}function M_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ih(t){this._internalRoot=t}Oc.prototype.render=Ih.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=fi();d_(a,o,t,n,null,null)},Oc.prototype.unmount=Ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;d_(t.current,2,null,t,null,null),pc(),n[Zn]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var n=co();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rr.length&&n!==0&&n<rr[a].priority;a++);rr.splice(a,0,t),a===0&&x_(t)}};var E_=e.version;if(E_!=="19.2.3")throw Error(s(527,E_,"19.2.3"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{fe=Pc.inject(oM),de=Pc}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Dg,h=Ug,y=Lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=f_(t,1,!1,null,null,a,o,null,u,h,y,M_),t[Zn]=n.current,_h(t),new Ih(n)},$o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",h=Dg,y=Ug,R=Lg,F=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=f_(t,1,!0,n,a??null,o,u,F,h,y,R,M_),n.context=h_(null),a=n.current,o=fi(),o=oo(o),u=Xa(o),u.callback=null,Wa(a,u,o),a=o,n.current.lanes=a,We(n,a),ki(n),t[Zn]=n.current,_h(t),new Oc(n)},$o.version="19.2.3",$o}var N_;function vM(){if(N_)return Fh.exports;N_=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Fh.exports=_M(),Fh.exports}var xM=vM();var O_="popstate";function SM(r={}){function e(s,l){let{pathname:c,search:f,hash:d}=s.location;return wd("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:dl(l)}return MM(e,i,null,r)}function Sn(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function zi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yM(){return Math.random().toString(36).substring(2,10)}function P_(r,e){return{usr:r.state,key:r.key,idx:e}}function wd(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Sl(e):e,state:i,key:e&&e.key||s||yM()}}function dl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Sl(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function MM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,d="POP",m=null,p=_();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function _(){return(f.state||{idx:null}).idx}function g(){d="POP";let M=_(),x=M==null?null:M-p;p=M,m&&m({action:d,location:w.location,delta:x})}function v(M,x){d="PUSH";let D=wd(w.location,M,x);p=_()+1;let P=P_(D,p),C=w.createHref(D);try{f.pushState(P,"",C)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(C)}c&&m&&m({action:d,location:w.location,delta:1})}function S(M,x){d="REPLACE";let D=wd(w.location,M,x);p=_();let P=P_(D,p),C=w.createHref(D);f.replaceState(P,"",C),c&&m&&m({action:d,location:w.location,delta:0})}function b(M){return EM(M)}let w={get action(){return d},get location(){return r(l,f)},listen(M){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(O_,g),m=M,()=>{l.removeEventListener(O_,g),m=null}},createHref(M){return e(l,M)},createURL:b,encodeLocation(M){let x=b(M);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:v,replace:S,go(M){return f.go(M)}};return w}function EM(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Sn(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:dl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function $v(r,e,i="/"){return bM(r,e,i,!1)}function bM(r,e,i,s){let l=typeof e=="string"?Sl(e):e,c=Ca(l.pathname||"/",i);if(c==null)return null;let f=ex(r);TM(f);let d=null;for(let m=0;d==null&&m<f.length;++m){let p=IM(c);d=OM(f[m],p,s)}return d}function ex(r,e=[],i=[],s="",l=!1){let c=(f,d,m=l,p)=>{let _={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(_.relativePath.startsWith("/")){if(!_.relativePath.startsWith(s)&&m)return;Sn(_.relativePath.startsWith(s),`Absolute route path "${_.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),_.relativePath=_.relativePath.slice(s.length)}let g=Aa([s,_.relativePath]),v=i.concat(_);f.children&&f.children.length>0&&(Sn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),ex(f.children,e,v,g,m)),!(f.path==null&&!f.index)&&e.push({path:g,score:LM(g,f.index),routesMeta:v})};return r.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let m of tx(f.path))c(f,d,!0,m)}),e}function tx(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=tx(s.join("/")),d=[];return d.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&d.push(...f),d.map(m=>r.startsWith("/")&&m===""?"/":m)}function TM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:NM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var AM=/^:[\w-]+$/,RM=3,wM=2,CM=1,DM=10,UM=-2,I_=r=>r==="*";function LM(r,e){let i=r.split("/"),s=i.length;return i.some(I_)&&(s+=UM),e&&(s+=wM),i.filter(l=>!I_(l)).reduce((l,c)=>l+(AM.test(c)?RM:c===""?CM:DM),s)}function NM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function OM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let d=0;d<s.length;++d){let m=s[d],p=d===s.length-1,_=c==="/"?e:e.slice(c.length)||"/",g=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},_),v=m.route;if(!g&&p&&i&&!s[s.length-1].route.index&&(g=_u({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!g)return null;Object.assign(l,g.params),f.push({params:l,pathname:Aa([c,g.pathname]),pathnameBase:HM(Aa([c,g.pathnameBase])),route:v}),g.pathnameBase!=="/"&&(c=Aa([c,g.pathnameBase]))}return f}function _u(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=PM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:s.reduce((p,{paramName:_,isOptional:g},v)=>{if(_==="*"){let b=d[v]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const S=d[v];return g&&!S?p[_]=void 0:p[_]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:r}}function PM(r,e=!1,i=!0){zi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,m)=>(s.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function IM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ca(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var nx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zM=r=>nx.test(r);function BM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Sl(r):r,c;if(i)if(zM(i))c=i;else{if(i.includes("//")){let f=i;i=i.replace(/\/\/+/g,"/"),zi(!1,`Pathnames cannot have embedded double slashes - normalizing ${f} -> ${i}`)}i.startsWith("/")?c=z_(i.substring(1),"/"):c=z_(i,e)}else c=e;return{pathname:c,search:GM(s),hash:VM(l)}}function z_(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function kh(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function FM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function ix(r){let e=FM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function ax(r,e,i,s=!1){let l;typeof r=="string"?l=Sl(r):(l={...r},Sn(!l.pathname||!l.pathname.includes("?"),kh("?","pathname","search",l)),Sn(!l.pathname||!l.pathname.includes("#"),kh("#","pathname","hash",l)),Sn(!l.search||!l.search.includes("#"),kh("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let g=e.length-1;if(!s&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),g-=1;l.pathname=v.join("/")}d=g>=0?e[g]:"/"}let m=BM(l,d),p=f&&f!=="/"&&f.endsWith("/"),_=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||_)&&(m.pathname+="/"),m}var Aa=r=>r.join("/").replace(/\/\/+/g,"/"),HM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),GM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,VM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,kM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function XM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function WM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var rx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function sx(r,e){let i=r;if(typeof i!="string"||!nx.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(rx)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),d=Ca(f.pathname,e);f.origin===c.origin&&d!=null?i=d+f.search+f.hash:l=!0}catch{zi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ox=["POST","PUT","PATCH","DELETE"];new Set(ox);var qM=["GET",...ox];new Set(qM);var to=ue.createContext(null);to.displayName="DataRouter";var Tu=ue.createContext(null);Tu.displayName="DataRouterState";var YM=ue.createContext(!1),lx=ue.createContext({isTransitioning:!1});lx.displayName="ViewTransition";var ZM=ue.createContext(new Map);ZM.displayName="Fetchers";var jM=ue.createContext(null);jM.displayName="Await";var Ti=ue.createContext(null);Ti.displayName="Navigation";var Au=ue.createContext(null);Au.displayName="Location";var La=ue.createContext({outlet:null,matches:[],isDataRoute:!1});La.displayName="Route";var Sp=ue.createContext(null);Sp.displayName="RouteError";var cx="REACT_ROUTER_ERROR",KM="REDIRECT",QM="ROUTE_ERROR_RESPONSE";function JM(r){if(r.startsWith(`${cx}:${KM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function $M(r){if(r.startsWith(`${cx}:${QM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new kM(e.status,e.statusText,e.data)}catch{}}function eE(r,{relative:e}={}){Sn(yl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=ue.useContext(Ti),{hash:l,pathname:c,search:f}=Ml(r,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:Aa([i,c])),s.createHref({pathname:d,search:f,hash:l})}function yl(){return ue.useContext(Au)!=null}function Jr(){return Sn(yl(),"useLocation() may be used only in the context of a <Router> component."),ue.useContext(Au).location}var ux="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fx(r){ue.useContext(Ti).static||ue.useLayoutEffect(r)}function tE(){let{isDataRoute:r}=ue.useContext(La);return r?pE():nE()}function nE(){Sn(yl(),"useNavigate() may be used only in the context of a <Router> component.");let r=ue.useContext(to),{basename:e,navigator:i}=ue.useContext(Ti),{matches:s}=ue.useContext(La),{pathname:l}=Jr(),c=JSON.stringify(ix(s)),f=ue.useRef(!1);return fx(()=>{f.current=!0}),ue.useCallback((m,p={})=>{if(zi(f.current,ux),!f.current)return;if(typeof m=="number"){i.go(m);return}let _=ax(m,JSON.parse(c),l,p.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Aa([e,_.pathname])),(p.replace?i.replace:i.push)(_,p.state,p)},[e,i,c,l,r])}ue.createContext(null);function Ml(r,{relative:e}={}){let{matches:i}=ue.useContext(La),{pathname:s}=Jr(),l=JSON.stringify(ix(i));return ue.useMemo(()=>ax(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function iE(r,e,i,s,l){Sn(yl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=ue.useContext(Ti),{matches:f}=ue.useContext(La),d=f[f.length-1],m=d?d.params:{},p=d?d.pathname:"/",_=d?d.pathnameBase:"/",g=d&&d.route;{let D=g&&g.path||"";dx(p,!g||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Jr(),S;S=v;let b=S.pathname||"/",w=b;if(_!=="/"){let D=_.replace(/^\//,"").split("/");w="/"+b.replace(/^\//,"").split("/").slice(D.length).join("/")}let M=$v(r,{pathname:w});return zi(g||M!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),zi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),lE(M&&M.map(D=>Object.assign({},D,{params:Object.assign({},m,D.params),pathname:Aa([_,c.encodeLocation?c.encodeLocation(D.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?_:Aa([_,c.encodeLocation?c.encodeLocation(D.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:D.pathnameBase])})),f,i,s,l)}function aE(){let r=dE(),e=XM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=ue.createElement(ue.Fragment,null,ue.createElement("p",null,"💿 Hey developer 👋"),ue.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",ue.createElement("code",{style:c},"ErrorBoundary")," or"," ",ue.createElement("code",{style:c},"errorElement")," prop on your route.")),ue.createElement(ue.Fragment,null,ue.createElement("h2",null,"Unexpected Application Error!"),ue.createElement("h3",{style:{fontStyle:"italic"}},e),i?ue.createElement("pre",{style:l},i):null,f)}var rE=ue.createElement(aE,null),hx=class extends ue.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=$M(r.digest);i&&(r=i)}let e=r!==void 0?ue.createElement(La.Provider,{value:this.props.routeContext},ue.createElement(Sp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?ue.createElement(sE,{error:r},e):e}};hx.contextType=YM;var Xh=new WeakMap;function sE({children:r,error:e}){let{basename:i}=ue.useContext(Ti);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=JM(e.digest);if(s){let l=Xh.get(e);if(l)throw l;let c=sx(s.location,i);if(rx&&!Xh.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Xh.set(e,f),f}return ue.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function oE({routeContext:r,match:e,children:i}){let s=ue.useContext(to);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),ue.createElement(La.Provider,{value:r},i)}function lE(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let _=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);Sn(_>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,_+1))}let d=!1,m=-1;if(i)for(let _=0;_<c.length;_++){let g=c[_];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=_),g.route.id){let{loaderData:v,errors:S}=i,b=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||b){d=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}let p=i&&s?(_,g)=>{s(_,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:WM(i.matches),errorInfo:g})}:void 0;return c.reduceRight((_,g,v)=>{let S,b=!1,w=null,M=null;i&&(S=f&&g.route.id?f[g.route.id]:void 0,w=g.route.errorElement||rE,d&&(m<0&&v===0?(dx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),b=!0,M=null):m===v&&(b=!0,M=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,v+1)),D=()=>{let P;return S?P=w:b?P=M:g.route.Component?P=ue.createElement(g.route.Component,null):g.route.element?P=g.route.element:P=_,ue.createElement(oE,{match:g,routeContext:{outlet:_,matches:x,isDataRoute:i!=null},children:P})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?ue.createElement(hx,{location:i.location,revalidation:i.revalidation,component:w,error:S,children:D(),routeContext:{outlet:null,matches:x,isDataRoute:!0},onError:p}):D()},null)}function yp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cE(r){let e=ue.useContext(to);return Sn(e,yp(r)),e}function uE(r){let e=ue.useContext(Tu);return Sn(e,yp(r)),e}function fE(r){let e=ue.useContext(La);return Sn(e,yp(r)),e}function Mp(r){let e=fE(r),i=e.matches[e.matches.length-1];return Sn(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function hE(){return Mp("useRouteId")}function dE(){let r=ue.useContext(Sp),e=uE("useRouteError"),i=Mp("useRouteError");return r!==void 0?r:e.errors?.[i]}function pE(){let{router:r}=cE("useNavigate"),e=Mp("useNavigate"),i=ue.useRef(!1);return fx(()=>{i.current=!0}),ue.useCallback(async(l,c={})=>{zi(i.current,ux),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var B_={};function dx(r,e,i){!e&&!B_[r]&&(B_[r]=!0,zi(!1,i))}ue.memo(mE);function mE({routes:r,future:e,state:i,onError:s}){return iE(r,void 0,i,s,e)}function gE({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Sn(!yl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=r.replace(/^\/*/,"/"),m=ue.useMemo(()=>({basename:d,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[d,l,c,f]);typeof i=="string"&&(i=Sl(i));let{pathname:p="/",search:_="",hash:g="",state:v=null,key:S="default"}=i,b=ue.useMemo(()=>{let w=Ca(p,d);return w==null?null:{location:{pathname:w,search:_,hash:g,state:v,key:S},navigationType:s}},[d,p,_,g,v,S,s]);return zi(b!=null,`<Router basename="${d}"> is not able to match the URL "${p}${_}${g}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:ue.createElement(Ti.Provider,{value:m},ue.createElement(Au.Provider,{children:e,value:b}))}var cu="get",uu="application/x-www-form-urlencoded";function Ru(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function _E(r){return Ru(r)&&r.tagName.toLowerCase()==="button"}function vE(r){return Ru(r)&&r.tagName.toLowerCase()==="form"}function xE(r){return Ru(r)&&r.tagName.toLowerCase()==="input"}function SE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function yE(r,e){return r.button===0&&(!e||e==="_self")&&!SE(r)}var Ic=null;function ME(){if(Ic===null)try{new FormData(document.createElement("form"),0),Ic=!1}catch{Ic=!0}return Ic}var EE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wh(r){return r!=null&&!EE.has(r)?(zi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${uu}"`),null):r}function bE(r,e){let i,s,l,c,f;if(vE(r)){let d=r.getAttribute("action");s=d?Ca(d,e):null,i=r.getAttribute("method")||cu,l=Wh(r.getAttribute("enctype"))||uu,c=new FormData(r)}else if(_E(r)||xE(r)&&(r.type==="submit"||r.type==="image")){let d=r.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=r.getAttribute("formaction")||d.getAttribute("action");if(s=m?Ca(m,e):null,i=r.getAttribute("formmethod")||d.getAttribute("method")||cu,l=Wh(r.getAttribute("formenctype"))||Wh(d.getAttribute("enctype"))||uu,c=new FormData(d,r),!ME()){let{name:p,type:_,value:g}=r;if(_==="image"){let v=p?`${p}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else p&&c.append(p,g)}}else{if(Ru(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=cu,s=null,l=uu,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Ep(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function TE(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&Ca(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function AE(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function wE(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await AE(c,i);return f.links?f.links():[]}return[]}));return LE(s.flat(1).filter(RE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function F_(r,e,i,s,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,d=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||d(m,p)):c==="data"?e.filter((m,p)=>{let _=s.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(f(m,p)||d(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function CE(r,e,{includeHydrateFallback:i}={}){return DE(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function DE(r){return[...new Set(r)]}function UE(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function LE(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(UE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function px(){let r=ue.useContext(to);return Ep(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function NE(){let r=ue.useContext(Tu);return Ep(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var bp=ue.createContext(void 0);bp.displayName="FrameworkContext";function mx(){let r=ue.useContext(bp);return Ep(r,"You must render this element inside a <HydratedRouter> element"),r}function OE(r,e){let i=ue.useContext(bp),[s,l]=ue.useState(!1),[c,f]=ue.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:p,onMouseLeave:_,onTouchStart:g}=e,v=ue.useRef(null);ue.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let w=x=>{x.forEach(D=>{f(D.isIntersecting)})},M=new IntersectionObserver(w,{threshold:.5});return v.current&&M.observe(v.current),()=>{M.disconnect()}}},[r]),ue.useEffect(()=>{if(s){let w=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(w)}}},[s]);let S=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,v,{}]:[c,v,{onFocus:el(d,S),onBlur:el(m,b),onMouseEnter:el(p,S),onMouseLeave:el(_,b),onTouchStart:el(g,S)}]:[!1,v,{}]}function el(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function PE({page:r,...e}){let{router:i}=px(),s=ue.useMemo(()=>$v(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?ue.createElement(zE,{page:r,matches:s,...e}):null}function IE(r){let{manifest:e,routeModules:i}=mx(),[s,l]=ue.useState([]);return ue.useEffect(()=>{let c=!1;return wE(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function zE({page:r,matches:e,...i}){let s=Jr(),{future:l,manifest:c,routeModules:f}=mx(),{basename:d}=px(),{loaderData:m,matches:p}=NE(),_=ue.useMemo(()=>F_(r,e,p,c,s,"data"),[r,e,p,c,s]),g=ue.useMemo(()=>F_(r,e,p,c,s,"assets"),[r,e,p,c,s]),v=ue.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let w=new Set,M=!1;if(e.forEach(D=>{let P=c.routes[D.route.id];!P||!P.hasLoader||(!_.some(C=>C.route.id===D.route.id)&&D.route.id in m&&f[D.route.id]?.shouldRevalidate||P.hasClientLoader?M=!0:w.add(D.route.id))}),w.size===0)return[];let x=TE(r,d,l.unstable_trailingSlashAwareDataRequests,"data");return M&&w.size>0&&x.searchParams.set("_routes",e.filter(D=>w.has(D.route.id)).map(D=>D.route.id).join(",")),[x.pathname+x.search]},[d,l.unstable_trailingSlashAwareDataRequests,m,s,c,_,e,r,f]),S=ue.useMemo(()=>CE(g,c),[g,c]),b=IE(g);return ue.createElement(ue.Fragment,null,v.map(w=>ue.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...i})),S.map(w=>ue.createElement("link",{key:w,rel:"modulepreload",href:w,...i})),b.map(({key:w,link:M})=>ue.createElement("link",{key:w,nonce:i.nonce,...M})))}function BE(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var FE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{FE&&(window.__reactRouterVersion="7.12.0")}catch{}function HE({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=ue.useRef();l.current==null&&(l.current=SM({window:s,v5Compat:!0}));let c=l.current,[f,d]=ue.useState({action:c.action,location:c.location}),m=ue.useCallback(p=>{i===!1?d(p):ue.startTransition(()=>d(p))},[i]);return ue.useLayoutEffect(()=>c.listen(m),[c,m]),ue.createElement(gE,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var gx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_x=ue.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:d,target:m,to:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v,...S},b){let{basename:w,unstable_useTransitions:M}=ue.useContext(Ti),x=typeof p=="string"&&gx.test(p),D=sx(p,w);p=D.to;let P=eE(p,{relative:l}),[C,I,N]=OE(s,S),z=XE(p,{replace:f,state:d,target:m,preventScrollReset:_,relative:l,viewTransition:g,unstable_defaultShouldRevalidate:v,unstable_useTransitions:M});function T(W){e&&e(W),W.defaultPrevented||z(W)}let O=ue.createElement("a",{...S,...N,href:D.absoluteURL||P,onClick:D.isExternal||c?e:T,ref:BE(b,I),target:m,"data-discover":!x&&i==="render"?"true":void 0});return C&&!x?ue.createElement(ue.Fragment,null,O,ue.createElement(PE,{page:P})):O});_x.displayName="Link";var GE=ue.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:d,children:m,...p},_){let g=Ml(f,{relative:p.relative}),v=Jr(),S=ue.useContext(Tu),{navigator:b,basename:w}=ue.useContext(Ti),M=S!=null&&jE(g)&&d===!0,x=b.encodeLocation?b.encodeLocation(g).pathname:g.pathname,D=v.pathname,P=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(D=D.toLowerCase(),P=P?P.toLowerCase():null,x=x.toLowerCase()),P&&w&&(P=Ca(P,w)||P);const C=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let I=D===x||!l&&D.startsWith(x)&&D.charAt(C)==="/",N=P!=null&&(P===x||!l&&P.startsWith(x)&&P.charAt(x.length)==="/"),z={isActive:I,isPending:N,isTransitioning:M},T=I?e:void 0,O;typeof s=="function"?O=s(z):O=[s,I?"active":null,N?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let W=typeof c=="function"?c(z):c;return ue.createElement(_x,{...p,"aria-current":T,className:O,ref:_,style:W,to:f,viewTransition:d},typeof m=="function"?m(z):m)});GE.displayName="NavLink";var VE=ue.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=cu,action:d,onSubmit:m,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v,...S},b)=>{let{unstable_useTransitions:w}=ue.useContext(Ti),M=YE(),x=ZE(d,{relative:p}),D=f.toLowerCase()==="get"?"get":"post",P=typeof d=="string"&&gx.test(d),C=I=>{if(m&&m(I),I.defaultPrevented)return;I.preventDefault();let N=I.nativeEvent.submitter,z=N?.getAttribute("formmethod")||f,T=()=>M(N||I.currentTarget,{fetcherKey:e,method:z,navigate:i,replace:l,state:c,relative:p,preventScrollReset:_,viewTransition:g,unstable_defaultShouldRevalidate:v});w&&i!==!1?ue.startTransition(()=>T()):T()};return ue.createElement("form",{ref:b,method:D,action:x,onSubmit:s?m:C,...S,"data-discover":!P&&r==="render"?"true":void 0})});VE.displayName="Form";function kE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vx(r){let e=ue.useContext(to);return Sn(e,kE(r)),e}function XE(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d,unstable_useTransitions:m}={}){let p=tE(),_=Jr(),g=Ml(r,{relative:c});return ue.useCallback(v=>{if(yE(v,e)){v.preventDefault();let S=i!==void 0?i:dl(_)===dl(g),b=()=>p(r,{replace:S,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:d});m?ue.startTransition(()=>b()):b()}},[_,p,g,i,s,e,r,l,c,f,d,m])}var WE=0,qE=()=>`__${String(++WE)}__`;function YE(){let{router:r}=vx("useSubmit"),{basename:e}=ue.useContext(Ti),i=hE(),s=r.fetch,l=r.navigate;return ue.useCallback(async(c,f={})=>{let{action:d,method:m,encType:p,formData:_,body:g}=bE(c,e);if(f.navigate===!1){let v=f.fetcherKey||qE();await s(v,i,f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,flushSync:f.flushSync})}else await l(f.action||d,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:_,body:g,formMethod:f.method||m,formEncType:f.encType||p,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function ZE(r,{relative:e}={}){let{basename:i}=ue.useContext(Ti),s=ue.useContext(La);Sn(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...Ml(r||".",{relative:e})},f=Jr();if(r==null){c.search=f.search;let d=new URLSearchParams(c.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(g=>g).forEach(g=>d.append("index",g));let _=d.toString();c.search=_?`?${_}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Aa([i,c.pathname])),dl(c)}function jE(r,{relative:e}={}){let i=ue.useContext(lx);Sn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=vx("useViewTransitionState"),l=Ml(r,{relative:e});if(!i.isTransitioning)return!1;let c=Ca(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=Ca(i.nextLocation.pathname,s)||i.nextLocation.pathname;return _u(l.pathname,f)!=null||_u(l.pathname,c)!=null}const KE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),H_=r=>{const e=QE(r);return e.charAt(0).toUpperCase()+e.slice(1)},xx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),JE=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};var $E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const eb=ue.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},m)=>ue.createElement("svg",{ref:m,...$E,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:xx("lucide",l),...!c&&!JE(d)&&{"aria-hidden":"true"},...d},[...f.map(([p,_])=>ue.createElement(p,_)),...Array.isArray(c)?c:[c]]));const Yn=(r,e)=>{const i=ue.forwardRef(({className:s,...l},c)=>ue.createElement(eb,{ref:c,iconNode:e,className:xx(`lucide-${KE(H_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=H_(r),i};const tb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],nb=Yn("arrow-up-right",tb);const ib=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],ab=Yn("code-xml",ib);const rb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],sb=Yn("download",rb);const ob=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],lb=Yn("file-text",ob);const cb=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],ub=Yn("gauge",cb);const fb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Sx=Yn("github",fb);const hb=[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]],yx=Yn("instagram",hb);const db=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],pb=Yn("layers",db);const mb=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Mx=Yn("linkedin",mb);const gb=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Ex=Yn("mail",gb);const _b=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],vb=Yn("menu",_b);const xb=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],G_=Yn("moon",xb);const Sb=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],yb=Yn("pen-tool",Sb);const Mb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],V_=Yn("sun",Mb);const Eb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],bb=Yn("x",Eb);function Tb(r,{delay:e=0,speed:i=100}={}){const[s,l]=ue.useState("");return ue.useEffect(()=>{let c=0,f;const m=setTimeout(()=>{f=setInterval(()=>{c+=1,l(r.slice(0,c)),c>=r.length&&clearInterval(f)},i)},e);return()=>{clearTimeout(m),clearInterval(f)}},[r,e,i]),s}const Ab=()=>{const e=Tb("Software Developer",{delay:2100,speed:90});return G.jsxs("div",{className:"hero-content",children:[G.jsx("p",{className:"hero-kicker",children:"Available for freelance work"}),G.jsxs("h1",{className:"hero-name",children:["Anurag",G.jsx("em",{children:"Rawat"})]}),G.jsxs("p",{className:"hero-role",children:[e,G.jsx("span",{className:"typed-cursor","aria-hidden":"true",children:"|"})]}),G.jsxs("p",{className:"hero-lede",children:["I build digital products that feel considered — from crop-route engines to art-house portfolios. ",G.jsx("em",{children:"Clear systems. Quiet interfaces."})]}),G.jsxs("div",{className:"cta-buttons",children:[G.jsx("a",{href:"#projects",className:"btn btn-primary",children:"View work"}),G.jsxs("a",{href:"https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:[G.jsx(lb,{className:"w-4 h-4"})," Resume"]}),G.jsx("a",{href:"#contact",className:"btn btn-secondary",children:"Let's talk"})]}),G.jsxs("div",{className:"social-links",children:[G.jsx("a",{href:"https://github.com/anuragrawat121",target:"_blank",className:"social-link",rel:"noopener noreferrer","aria-label":"GitHub",children:G.jsx(Sx,{className:"w-4 h-4"})}),G.jsx("a",{href:"https://www.linkedin.com/in/anurag-rawat-03884b296",target:"_blank",className:"social-link",rel:"noopener noreferrer","aria-label":"LinkedIn",children:G.jsx(Mx,{className:"w-4 h-4"})}),G.jsx("a",{href:"https://www.instagram.com/rwt._.anurag",target:"_blank",className:"social-link",rel:"noopener noreferrer","aria-label":"Instagram",children:G.jsx(yx,{className:"w-4 h-4"})}),G.jsx("a",{href:"mailto:arwt8947@gmail.com",className:"social-link","aria-label":"Email",children:G.jsx(Ex,{className:"w-4 h-4"})})]})]})},bx=hl.createContext(),Rb=({children:r})=>{const[e,i]=hl.useState(()=>localStorage.getItem("theme")||"dark");hl.useEffect(()=>{const l=document.documentElement;e==="light"?l.classList.add("light-theme"):l.classList.remove("light-theme"),localStorage.setItem("theme",e)},[e]);const s=()=>{i(l=>l==="dark"?"light":"dark")};return G.jsx(bx.Provider,{value:{mode:e,toggleMode:s},children:r})},k_=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#career",label:"Career"},{href:"#skills",label:"Skills"},{href:"#services",label:"Services"},{href:"#projects",label:"Projects"},{href:"#contact",label:"Contact"},{href:"https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ",label:"Resume",isExternal:!0}],wb=()=>{const[r,e]=ue.useState(!1),[i,s]=ue.useState(!1),{mode:l,toggleMode:c}=ue.useContext(bx);return ue.useEffect(()=>{const f=()=>s(window.scrollY>16);return f(),window.addEventListener("scroll",f,{passive:!0}),()=>window.removeEventListener("scroll",f)},[]),G.jsxs("nav",{className:`navbar ${i?"is-scrolled":""}`,children:[G.jsxs("div",{className:"nav-container",children:[G.jsxs("a",{href:"#home",className:"logo",children:[G.jsx("span",{className:"logo-mark",children:"AR"}),G.jsxs("span",{className:"logo-word",children:["anurag",G.jsx("span",{children:"."})]})]}),G.jsxs("div",{className:"nav-links",children:[k_.map(f=>G.jsx("a",{className:"nav-link",href:f.href,...f.isExternal?{target:"_blank",rel:"noopener noreferrer"}:{},children:f.label},f.label)),G.jsx("button",{onClick:c,className:"theme-toggle-btn","aria-label":"Toggle theme",children:l==="dark"?G.jsx(V_,{size:18}):G.jsx(G_,{size:18})})]}),G.jsxs("div",{className:"mobile-menu-btn",children:[G.jsx("button",{onClick:c,className:"theme-toggle-btn","aria-label":"Toggle theme",children:l==="dark"?G.jsx(V_,{size:18}):G.jsx(G_,{size:18})}),G.jsx("button",{onClick:()=>e(!r),className:"mobile-toggle","aria-label":"Toggle menu",children:r?G.jsx(bb,{size:18}):G.jsx(vb,{size:18})})]})]}),r&&G.jsx("div",{className:"mobile-menu",children:G.jsx("div",{className:"mobile-menu-links",children:k_.map(f=>G.jsx("a",{className:"nav-link",href:f.href,onClick:()=>e(!1),...f.isExternal?{target:"_blank",rel:"noopener noreferrer"}:{},children:f.label},f.label))})})]})},Cb="/MyFolio/assets/pfp-CA2wP8O8.jpeg",Db=[{name:"React",href:"https://react.dev/",icon:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000"},{name:"JavaScript",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",icon:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000"},{name:"Tailwind",href:"https://tailwindcss.com/",icon:"https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"},{name:"Python",href:"https://www.python.org/",icon:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000"},{name:"TypeScript",href:"https://www.typescriptlang.org/",icon:"https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000"},{name:"Node.js",href:"https://nodejs.org/",icon:"https://img.icons8.com/?size=100&id=54087&format=png&color=000000"}],Ub=()=>G.jsx("div",{className:"portrait-wrap",children:G.jsxs("div",{className:"portrait",children:[G.jsxs("div",{className:"portrait-frame",children:[G.jsx("img",{src:Cb,alt:"Anurag Rawat"}),G.jsx("span",{className:"portrait-caption",children:"Based in India"})]}),G.jsx("div",{className:"orbit",children:Db.map(r=>G.jsx("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:"orbit-item","aria-label":r.name,children:G.jsx("img",{src:r.icon,alt:""})},r.name))})]})}),Lb=()=>{const r=ue.useRef(null),e=ue.useRef(null);return ue.useEffect(()=>{const i=r.current,s=e.current;if(!i||!s)return;let l=0,c=0,f=0,d=0,m=!1,p;const _=S=>{l=S.clientX,c=S.clientY},g=S=>{m=!!S.target.closest("a, button"),s.classList.toggle("is-hover",m)},v=()=>{f+=(l-f)*.16,d+=(c-d)*.16,i.style.transform=`translate3d(${l}px, ${c}px, 0) translate(-50%, -50%)`,s.style.transform=`translate3d(${f}px, ${d}px, 0) translate(-50%, -50%)`,p=requestAnimationFrame(v)};return window.addEventListener("mousemove",_),window.addEventListener("mouseover",g),p=requestAnimationFrame(v),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",_),window.removeEventListener("mouseover",g)}},[]),G.jsxs(G.Fragment,{children:[G.jsx("div",{ref:r,className:"cursor-dot","aria-hidden":"true"}),G.jsx("div",{ref:e,className:"cursor-ring","aria-hidden":"true"})]})},Nb=({isLoading:r})=>{const[e,i]=hl.useState(0);return hl.useEffect(()=>{if(r){const s=setInterval(()=>{i(l=>l>=100?(clearInterval(s),100):l+1)},20);return()=>clearInterval(s)}},[r]),G.jsxs("div",{className:`loader ${r?"":"is-done"}`,"aria-hidden":!r,children:[G.jsxs("div",{className:"loader-mark",children:["Anurag ",G.jsx("em",{children:"Rawat"})]}),G.jsx("div",{className:"loader-track",children:G.jsx("div",{className:"loader-fill",style:{width:`${e}%`}})}),G.jsxs("div",{className:"loader-meta",children:[G.jsx("span",{children:"Loading"}),G.jsxs("span",{children:[e,"%"]})]})]})},Ln=({children:r,className:e="",delay:i=0,as:s="div"})=>{const l=ue.useRef(null),[c,f]=ue.useState(!1);return ue.useEffect(()=>{const d=l.current;if(!d)return;const m=new IntersectionObserver(([p])=>{p.isIntersecting&&(f(!0),m.disconnect())},{threshold:.14,rootMargin:"0px 0px -8% 0px"});return m.observe(d),()=>m.disconnect()},[]),G.jsx(s,{ref:l,className:`reveal ${c?"is-visible":""} ${e}`,style:{transitionDelay:`${i}ms`},children:r})},no=({index:r,kicker:e,title:i,italic:s})=>G.jsxs("header",{className:"section-header",children:[G.jsxs("p",{className:"section-kicker",children:[G.jsx("span",{children:r}),e]}),G.jsxs("h2",{className:"section-title",children:[i,s?G.jsxs("em",{children:[" ",s]}):null]})]}),X_=[{name:"React",icon:"https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",link:"https://react.dev/"},{name:"JavaScript",icon:"https://img.icons8.com/?size=100&id=108784&format=png&color=000000",link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{name:"HTML5",icon:"https://img.icons8.com/?size=100&id=20909&format=png&color=000000",link:"https://developer.mozilla.org/en-US/docs/Web/HTML"},{name:"CSS3",icon:"https://img.icons8.com/?size=100&id=21278&format=png&color=000000",link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},{name:"Tailwind",icon:"https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",link:"https://tailwindcss.com/"},{name:"Node.js",icon:"https://img.icons8.com/?size=100&id=54087&format=png&color=000000",link:"https://nodejs.org/"},{name:"Git",icon:"https://img.icons8.com/?size=100&id=20906&format=png&color=000000",link:"https://git-scm.com/"},{name:"Python",icon:"https://img.icons8.com/?size=100&id=13441&format=png&color=000000",link:"https://www.python.org/"},{name:"TypeScript",icon:"https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",link:"https://www.typescriptlang.org/"},{name:"Redux",icon:"https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",link:"https://redux.js.org/"},{name:"MongoDB",icon:"https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",link:"https://www.mongodb.com/"},{name:"Express",icon:"https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",link:"https://expressjs.com/"}],Ob=()=>{const r=[...X_,...X_];return G.jsxs("section",{className:"site-section",id:"skills",children:[G.jsx(Ln,{children:G.jsx(no,{index:"03",kicker:"Stack",title:"Tools I actually",italic:"ship with."})}),G.jsx(Ln,{delay:80,children:G.jsxs("div",{className:"marquee-wrap",children:[G.jsx("div",{className:"marquee-row",children:r.map((e,i)=>G.jsxs("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"skill-chip",children:[G.jsx("img",{src:e.icon,alt:""}),G.jsx("span",{children:e.name})]},`a-${e.name}-${i}`))}),G.jsx("div",{className:"marquee-row reverse",children:r.map((e,i)=>G.jsxs("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"skill-chip",children:[G.jsx("img",{src:e.icon,alt:""}),G.jsx("span",{children:e.name})]},`b-${e.name}-${i}`))})]})})]})};const Tp="185",Pb=0,W_=1,Ib=2,fu=1,zb=2,ll=3,mr=0,Wn=1,Yi=2,Ra=0,Zs=1,q_=2,Y_=3,Z_=4,Bb=5,Vr=100,Fb=101,Hb=102,Gb=103,Vb=104,kb=200,Xb=201,Wb=202,qb=203,Cd=204,Dd=205,Yb=206,Zb=207,jb=208,Kb=209,Qb=210,Jb=211,$b=212,e1=213,t1=214,Ud=0,Ld=1,Nd=2,Qs=3,Od=4,Pd=5,Id=6,zd=7,wu=0,n1=1,i1=2,Ki=0,Tx=1,Ax=2,Rx=3,wx=4,Cx=5,Dx=6,Ux=7,Lx=300,Kr=301,Js=302,qh=303,Yh=304,Cu=306,Bd=1e3,Ta=1001,Fd=1002,Nn=1003,a1=1004,zc=1005,Bn=1006,Zh=1007,Yr=1008,pi=1009,Nx=1010,Ox=1011,pl=1012,Ap=1013,Ji=1014,Zi=1015,Da=1016,Rp=1017,wp=1018,ml=1020,Px=35902,Ix=35899,zx=1021,Bx=1022,Pi=1023,Ua=1026,Zr=1027,Fx=1028,Cp=1029,Qr=1030,Dp=1031,Up=1033,hu=33776,du=33777,pu=33778,mu=33779,Hd=35840,Gd=35841,Vd=35842,kd=35843,Xd=36196,Wd=37492,qd=37496,Yd=37488,Zd=37489,vu=37490,jd=37491,Kd=37808,Qd=37809,Jd=37810,$d=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,rp=37817,sp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,hp=36495,dp=36283,pp=36284,xu=36285,mp=36286,r1=3200,gl=0,s1=1,dr="",Xn="srgb",Su="srgb-linear",yu="linear",Ft="srgb",Ls=7680,j_=519,o1=512,l1=513,c1=514,Lp=515,u1=516,f1=517,Np=518,h1=519,K_=35044,Q_="300 es",ji=2e3,_l=2001;function d1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function vl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function p1(){const r=vl("canvas");return r.style.display="block",r}const J_={};function $_(...r){const e="THREE."+r.shift();console.log(e,...r)}function Hx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function it(...r){r=Hx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Tt(...r){r=Hx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function js(...r){const e=r.join(" ");e in J_||(J_[e]=!0,it(...r))}function m1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const g1={[Ud]:Ld,[Nd]:Id,[Od]:zd,[Qs]:Pd,[Ld]:Ud,[Id]:Nd,[zd]:Od,[Pd]:Qs};class $r{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ev=1234567;const ul=Math.PI/180,xl=180/Math.PI;function io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(In[r&255]+In[r>>8&255]+In[r>>16&255]+In[r>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[i&63|128]+In[i>>8&255]+"-"+In[i>>16&255]+In[i>>24&255]+In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]).toLowerCase()}function pt(r,e,i){return Math.max(e,Math.min(i,r))}function Op(r,e){return(r%e+e)%e}function _1(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function v1(r,e,i){return r!==e?(i-r)/(e-r):0}function fl(r,e,i){return(1-i)*r+i*e}function x1(r,e,i,s){return fl(r,e,1-Math.exp(-i*s))}function S1(r,e=1){return e-Math.abs(Op(r,e*2)-e)}function y1(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function M1(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function E1(r,e){return r+Math.floor(Math.random()*(e-r+1))}function b1(r,e){return r+Math.random()*(e-r)}function T1(r){return r*(.5-Math.random())}function A1(r){r!==void 0&&(ev=r);let e=ev+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function R1(r){return r*ul}function w1(r){return r*xl}function C1(r){return(r&r-1)===0&&r!==0}function D1(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function U1(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function L1(r,e,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),m=f(i/2),p=c((e+s)/2),_=f((e+s)/2),g=c((e-s)/2),v=f((e-s)/2),S=c((s-e)/2),b=f((s-e)/2);switch(l){case"XYX":r.set(d*_,m*g,m*v,d*p);break;case"YZY":r.set(m*v,d*_,m*g,d*p);break;case"ZXZ":r.set(m*g,m*v,d*_,d*p);break;case"XZX":r.set(d*_,m*b,m*S,d*p);break;case"YXY":r.set(m*S,d*_,m*b,d*p);break;case"ZYZ":r.set(m*b,m*S,d*_,d*p);break;default:it("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ys(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tv={DEG2RAD:ul,RAD2DEG:xl,generateUUID:io,clamp:pt,euclideanModulo:Op,mapLinear:_1,inverseLerp:v1,lerp:fl,damp:x1,pingpong:S1,smoothstep:y1,smootherstep:M1,randInt:E1,randFloat:b1,randFloatSpread:T1,seededRandom:A1,degToRad:R1,radToDeg:w1,isPowerOfTwo:C1,ceilPowerOfTwo:D1,floorPowerOfTwo:U1,setQuaternionFromProperEuler:L1,normalize:Vn,denormalize:Ys},Gp=class Gp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=pt(this.x,e.x,i.x),this.y=pt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=pt(this.x,e,i),this.y=pt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gp.prototype.isVector2=!0;let mt=Gp;class ao{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,d){let m=s[l+0],p=s[l+1],_=s[l+2],g=s[l+3],v=c[f+0],S=c[f+1],b=c[f+2],w=c[f+3];if(g!==w||m!==v||p!==S||_!==b){let M=m*v+p*S+_*b+g*w;M<0&&(v=-v,S=-S,b=-b,w=-w,M=-M);let x=1-d;if(M<.9995){const D=Math.acos(M),P=Math.sin(D);x=Math.sin(x*D)/P,d=Math.sin(d*D)/P,m=m*x+v*d,p=p*x+S*d,_=_*x+b*d,g=g*x+w*d}else{m=m*x+v*d,p=p*x+S*d,_=_*x+b*d,g=g*x+w*d;const D=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=D,p*=D,_*=D,g*=D}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,s,l,c,f){const d=s[l],m=s[l+1],p=s[l+2],_=s[l+3],g=c[f],v=c[f+1],S=c[f+2],b=c[f+3];return e[i]=d*b+_*g+m*S-p*v,e[i+1]=m*b+_*v+p*g-d*S,e[i+2]=p*b+_*S+d*v-m*g,e[i+3]=_*b-d*g-m*v-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,m=Math.sin,p=d(s/2),_=d(l/2),g=d(c/2),v=m(s/2),S=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=v*_*g+p*S*b,this._y=p*S*g-v*_*b,this._z=p*_*b+v*S*g,this._w=p*_*g-v*S*b;break;case"YXZ":this._x=v*_*g+p*S*b,this._y=p*S*g-v*_*b,this._z=p*_*b-v*S*g,this._w=p*_*g+v*S*b;break;case"ZXY":this._x=v*_*g-p*S*b,this._y=p*S*g+v*_*b,this._z=p*_*b+v*S*g,this._w=p*_*g-v*S*b;break;case"ZYX":this._x=v*_*g-p*S*b,this._y=p*S*g+v*_*b,this._z=p*_*b-v*S*g,this._w=p*_*g+v*S*b;break;case"YZX":this._x=v*_*g+p*S*b,this._y=p*S*g+v*_*b,this._z=p*_*b-v*S*g,this._w=p*_*g-v*S*b;break;case"XZY":this._x=v*_*g-p*S*b,this._y=p*S*g-v*_*b,this._z=p*_*b+v*S*g,this._w=p*_*g+v*S*b;break;default:it("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],v=s+d+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-m)*S,this._y=(c-p)*S,this._z=(f-l)*S}else if(s>d&&s>g){const S=2*Math.sqrt(1+s-d-g);this._w=(_-m)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-s-g);this._w=(c-p)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(m+_)/S}else{const S=2*Math.sqrt(1+g-s-d);this._w=(f-l)/S,this._x=(c+p)/S,this._y=(m+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+f*d+l*p-c*m,this._y=l*_+f*m+c*d-s*p,this._z=c*_+f*p+s*m-l*d,this._w=f*_-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vp=class Vp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(nv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(nv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,d=e.z,m=e.w,p=2*(f*l-d*s),_=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+m*p+f*g-d*_,this.y=s+m*_+d*p-c*g,this.z=l+m*g+c*_-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=pt(this.x,e.x,i.x),this.y=pt(this.y,e.y,i.y),this.z=pt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=pt(this.x,e,i),this.y=pt(this.y,e,i),this.z=pt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*f-s*m,this.z=s*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return jh.copy(this).projectOnVector(e),this.sub(jh)}reflect(e){return this.sub(jh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(pt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vp.prototype.isVector3=!0;let Q=Vp;const jh=new Q,nv=new ao,kp=class kp{constructor(e,i,s,l,c,f,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p)}set(e,i,s,l,c,f,d,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=m,_[6]=s,_[7]=f,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],_=s[4],g=s[7],v=s[2],S=s[5],b=s[8],w=l[0],M=l[3],x=l[6],D=l[1],P=l[4],C=l[7],I=l[2],N=l[5],z=l[8];return c[0]=f*w+d*D+m*I,c[3]=f*M+d*P+m*N,c[6]=f*x+d*C+m*z,c[1]=p*w+_*D+g*I,c[4]=p*M+_*P+g*N,c[7]=p*x+_*C+g*z,c[2]=v*w+S*D+b*I,c[5]=v*M+S*P+b*N,c[8]=v*x+S*C+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8];return i*f*_-i*d*p-s*c*_+s*d*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=_*f-d*p,v=d*m-_*c,S=p*c-f*m,b=i*g+s*v+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=g*w,e[1]=(l*p-_*s)*w,e[2]=(d*s-l*f)*w,e[3]=v*w,e[4]=(_*i-l*m)*w,e[5]=(l*c-d*i)*w,e[6]=S*w,e[7]=(s*m-p*i)*w,e[8]=(f*i-s*c)*w,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*d)+f+e,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(e,i){return js("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kh.makeScale(e,i)),this}rotate(e){return js("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kh.makeRotation(-e)),this}translate(e,i){return js("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kp.prototype.isMatrix3=!0;let st=kp;const Kh=new st,iv=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),av=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function N1(){const r={enabled:!0,workingColorSpace:Su,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ft&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ft&&(l.r=Ks(l.r),l.g=Ks(l.g),l.b=Ks(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===dr?yu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Su]:{primaries:e,whitePoint:s,transfer:yu,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:s,transfer:Ft,toXYZ:iv,fromXYZ:av,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),r}const bt=N1();function wa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ns;class O1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ns===void 0&&(Ns=vl("canvas")),Ns.width=e.width,Ns.height=e.height;const l=Ns.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ns}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=vl("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=wa(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:e.width,height:e.height}}else return it("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P1=0;class Pp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P1++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Qh(l[f].image)):c.push(Qh(l[f]))}else c=Qh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Qh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?O1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(it("Texture: Unable to serialize Texture."),{})}let I1=0;const Jh=new Q;class Fn extends $r{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=Ta,l=Ta,c=Bn,f=Yr,d=Pi,m=pi,p=Fn.DEFAULT_ANISOTROPY,_=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I1++}),this.uuid=io(),this.name="",this.source=new Pp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jh).x}get height(){return this.source.getSize(Jh).y}get depth(){return this.source.getSize(Jh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){it(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Ta:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Ta:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Lx;Fn.DEFAULT_ANISOTROPY=1;const Xp=class Xp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],_=m[4],g=m[8],v=m[1],S=m[5],b=m[9],w=m[2],M=m[6],x=m[10];if(Math.abs(_-v)<.01&&Math.abs(g-w)<.01&&Math.abs(b-M)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+w)<.1&&Math.abs(b+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(p+1)/2,C=(S+1)/2,I=(x+1)/2,N=(_+v)/4,z=(g+w)/4,T=(b+M)/4;return P>C&&P>I?P<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(P),l=N/s,c=z/s):C>I?C<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),s=N/l,c=T/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=z/c,l=T/c),this.set(s,l,c,i),this}let D=Math.sqrt((M-b)*(M-b)+(g-w)*(g-w)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(M-b)/D,this.y=(g-w)/D,this.z=(v-_)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=pt(this.x,e.x,i.x),this.y=pt(this.y,e.y,i.y),this.z=pt(this.z,e.z,i.z),this.w=pt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=pt(this.x,e,i),this.y=pt(this.y,e,i),this.z=pt(this.z,e,i),this.w=pt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(pt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xp.prototype.isVector4=!0;let en=Xp;class z1 extends $r{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new en(0,0,e,i),this.scissorTest=!1,this.viewport=new en(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Fn(l),f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Pp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qi extends z1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Gx extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class B1 extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ta,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bu=class bu{constructor(e,i,s,l,c,f,d,m,p,_,g,v,S,b,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,d,m,p,_,g,v,S,b,w,M)}set(e,i,s,l,c,f,d,m,p,_,g,v,S,b,w,M){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=m,x[2]=p,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=b,x[11]=w,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Os.setFromMatrixColumn(e,0).length(),c=1/Os.setFromMatrixColumn(e,1).length(),f=1/Os.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const v=f*_,S=f*g,b=d*_,w=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=S+b*p,i[5]=v-w*p,i[9]=-d*m,i[2]=w-v*p,i[6]=b+S*p,i[10]=f*m}else if(e.order==="YXZ"){const v=m*_,S=m*g,b=p*_,w=p*g;i[0]=v+w*d,i[4]=b*d-S,i[8]=f*p,i[1]=f*g,i[5]=f*_,i[9]=-d,i[2]=S*d-b,i[6]=w+v*d,i[10]=f*m}else if(e.order==="ZXY"){const v=m*_,S=m*g,b=p*_,w=p*g;i[0]=v-w*d,i[4]=-f*g,i[8]=b+S*d,i[1]=S+b*d,i[5]=f*_,i[9]=w-v*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(e.order==="ZYX"){const v=f*_,S=f*g,b=d*_,w=d*g;i[0]=m*_,i[4]=b*p-S,i[8]=v*p+w,i[1]=m*g,i[5]=w*p+v,i[9]=S*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(e.order==="YZX"){const v=f*m,S=f*p,b=d*m,w=d*p;i[0]=m*_,i[4]=w-v*g,i[8]=b*g+S,i[1]=g,i[5]=f*_,i[9]=-d*_,i[2]=-p*_,i[6]=S*g+b,i[10]=v-w*g}else if(e.order==="XZY"){const v=f*m,S=f*p,b=d*m,w=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=v*g+w,i[5]=f*_,i[9]=S*g-b,i[2]=b*g-S,i[6]=d*_,i[10]=w*g+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(F1,e,H1)}lookAt(e,i,s){const l=this.elements;return hi.subVectors(e,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),or.crossVectors(s,hi),or.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),or.crossVectors(s,hi)),or.normalize(),Bc.crossVectors(hi,or),l[0]=or.x,l[4]=Bc.x,l[8]=hi.x,l[1]=or.y,l[5]=Bc.y,l[9]=hi.y,l[2]=or.z,l[6]=Bc.z,l[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],_=s[1],g=s[5],v=s[9],S=s[13],b=s[2],w=s[6],M=s[10],x=s[14],D=s[3],P=s[7],C=s[11],I=s[15],N=l[0],z=l[4],T=l[8],O=l[12],W=l[1],k=l[5],J=l[9],me=l[13],ve=l[2],$=l[6],B=l[10],H=l[14],ee=l[3],pe=l[7],Te=l[11],L=l[15];return c[0]=f*N+d*W+m*ve+p*ee,c[4]=f*z+d*k+m*$+p*pe,c[8]=f*T+d*J+m*B+p*Te,c[12]=f*O+d*me+m*H+p*L,c[1]=_*N+g*W+v*ve+S*ee,c[5]=_*z+g*k+v*$+S*pe,c[9]=_*T+g*J+v*B+S*Te,c[13]=_*O+g*me+v*H+S*L,c[2]=b*N+w*W+M*ve+x*ee,c[6]=b*z+w*k+M*$+x*pe,c[10]=b*T+w*J+M*B+x*Te,c[14]=b*O+w*me+M*H+x*L,c[3]=D*N+P*W+C*ve+I*ee,c[7]=D*z+P*k+C*$+I*pe,c[11]=D*T+P*J+C*B+I*Te,c[15]=D*O+P*me+C*H+I*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],d=e[5],m=e[9],p=e[13],_=e[2],g=e[6],v=e[10],S=e[14],b=e[3],w=e[7],M=e[11],x=e[15],D=m*S-p*v,P=d*S-p*g,C=d*v-m*g,I=f*S-p*_,N=f*v-m*_,z=f*g-d*_;return i*(w*D-M*P+x*C)-s*(b*D-M*I+x*N)+l*(b*P-w*I+x*z)-c*(b*C-w*N+M*z)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],f=e[5],d=e[9],m=e[2],p=e[6],_=e[10];return i*(f*_-d*p)-s*(c*_-d*m)+l*(c*p-f*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],d=e[5],m=e[6],p=e[7],_=e[8],g=e[9],v=e[10],S=e[11],b=e[12],w=e[13],M=e[14],x=e[15],D=i*d-s*f,P=i*m-l*f,C=i*p-c*f,I=s*m-l*d,N=s*p-c*d,z=l*p-c*m,T=_*w-g*b,O=_*M-v*b,W=_*x-S*b,k=g*M-v*w,J=g*x-S*w,me=v*x-S*M,ve=D*me-P*J+C*k+I*W-N*O+z*T;if(ve===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/ve;return e[0]=(d*me-m*J+p*k)*$,e[1]=(l*J-s*me-c*k)*$,e[2]=(w*z-M*N+x*I)*$,e[3]=(v*N-g*z-S*I)*$,e[4]=(m*W-f*me-p*O)*$,e[5]=(i*me-l*W+c*O)*$,e[6]=(M*C-b*z-x*P)*$,e[7]=(_*z-v*C+S*P)*$,e[8]=(f*J-d*W+p*T)*$,e[9]=(s*W-i*J-c*T)*$,e[10]=(b*N-w*C+x*D)*$,e[11]=(g*C-_*N-S*D)*$,e[12]=(d*O-f*k-m*T)*$,e[13]=(i*k-s*O+l*T)*$,e[14]=(w*P-b*I-M*D)*$,e[15]=(_*I-g*P+v*D)*$,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,d=e.y,m=e.z,p=c*f,_=c*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+s,_*m-l*f,0,p*m-l*d,_*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,m=i._w,p=c+c,_=f+f,g=d+d,v=c*p,S=c*_,b=c*g,w=f*_,M=f*g,x=d*g,D=m*p,P=m*_,C=m*g,I=s.x,N=s.y,z=s.z;return l[0]=(1-(w+x))*I,l[1]=(S+C)*I,l[2]=(b-P)*I,l[3]=0,l[4]=(S-C)*N,l[5]=(1-(v+x))*N,l[6]=(M+D)*N,l[7]=0,l[8]=(b+P)*z,l[9]=(M-D)*z,l[10]=(1-(v+w))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Os.set(l[0],l[1],l[2]).length();const d=Os.set(l[4],l[5],l[6]).length(),m=Os.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ui.copy(this);const p=1/f,_=1/d,g=1/m;return Ui.elements[0]*=p,Ui.elements[1]*=p,Ui.elements[2]*=p,Ui.elements[4]*=_,Ui.elements[5]*=_,Ui.elements[6]*=_,Ui.elements[8]*=g,Ui.elements[9]*=g,Ui.elements[10]*=g,i.setFromRotationMatrix(Ui),s.x=f,s.y=d,s.z=m,this}makePerspective(e,i,s,l,c,f,d=ji,m=!1){const p=this.elements,_=2*c/(i-e),g=2*c/(s-l),v=(i+e)/(i-e),S=(s+l)/(s-l);let b,w;if(m)b=c/(f-c),w=f*c/(f-c);else if(d===ji)b=-(f+c)/(f-c),w=-2*f*c/(f-c);else if(d===_l)b=-f/(f-c),w=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,d=ji,m=!1){const p=this.elements,_=2/(i-e),g=2/(s-l),v=-(i+e)/(i-e),S=-(s+l)/(s-l);let b,w;if(m)b=1/(f-c),w=f/(f-c);else if(d===ji)b=-2/(f-c),w=-(f+c)/(f-c);else if(d===_l)b=-1/(f-c),w=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=b,p[14]=w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};bu.prototype.isMatrix4=!0;let jt=bu;const Os=new Q,Ui=new jt,F1=new Q(0,0,0),H1=new Q(1,1,1),or=new Q,Bc=new Q,hi=new Q,rv=new jt,sv=new ao;class $i{constructor(e=0,i=0,s=0,l=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-pt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(pt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:it("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return rv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return sv.setFromEuler(this),this.setFromQuaternion(sv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class Vx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let G1=0;const ov=new Q,Ps=new ao,Sa=new jt,Fc=new Q,tl=new Q,V1=new Q,k1=new ao,lv=new Q(1,0,0),cv=new Q(0,1,0),uv=new Q(0,0,1),fv={type:"added"},X1={type:"removed"},Is={type:"childadded",child:null},$h={type:"childremoved",child:null};class Tn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Q,i=new $i,s=new ao,l=new Q(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new jt},normalMatrix:{value:new st}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ps.setFromAxisAngle(e,i),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,i){return Ps.setFromAxisAngle(e,i),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(lv,e)}rotateY(e){return this.rotateOnAxis(cv,e)}rotateZ(e){return this.rotateOnAxis(uv,e)}translateOnAxis(e,i){return ov.copy(e).applyQuaternion(this.quaternion),this.position.add(ov.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(lv,e)}translateY(e){return this.translateOnAxis(cv,e)}translateZ(e){return this.translateOnAxis(uv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Fc.copy(e):Fc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(tl,Fc,this.up):Sa.lookAt(Fc,tl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Ps.setFromRotationMatrix(Sa),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fv),Is.child=e,this.dispatchEvent(Is),Is.child=null):Tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(X1),$h.child=e,this.dispatchEvent($h),$h.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fv),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,V1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,k1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let f=0,d=c.length;f<d;f++)c[f].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];c(e.shapes,g)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=f(e.geometries),m=f(e.materials),p=f(e.textures),_=f(e.images),g=f(e.shapes),v=f(e.skeletons),S=f(e.animations),b=f(e.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),g.length>0&&(s.shapes=g),v.length>0&&(s.skeletons=v),S.length>0&&(s.animations=S),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new Q(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jr extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W1={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const w of e.hand.values()){const M=i.getJointPose(w,s),x=this._getHandJoint(p,w);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,b=.005;p.inputState.pinching&&v>S+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&v<=S-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(W1)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new jr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Hc={h:0,s:0,l:0};function td(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class ft{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=bt.workingColorSpace){return this.r=e,this.g=i,this.b=s,bt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=bt.workingColorSpace){if(e=Op(e,1),i=pt(i,0,1),s=pt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=td(f,c,e+1/3),this.g=td(f,c,e),this.b=td(f,c,e-1/3)}return bt.colorSpaceToWorking(this,l),this}setStyle(e,i=Xn){function s(c){c!==void 0&&parseFloat(c)<1&&it("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:it("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);it("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Xn){const s=kx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):it("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Ks(e.r),this.g=Ks(e.g),this.b=Ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return bt.workingToColorSpace(zn.copy(this),e),Math.round(pt(zn.r*255,0,255))*65536+Math.round(pt(zn.g*255,0,255))*256+Math.round(pt(zn.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=bt.workingColorSpace){bt.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const _=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=_<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=bt.workingColorSpace){return bt.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=Xn){bt.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,l=zn.b;return e!==Xn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+i,lr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(lr),e.getHSL(Hc);const s=fl(lr.h,Hc.h,i),l=fl(lr.s,Hc.s,i),c=fl(lr.l,Hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new ft;ft.NAMES=kx;class q1 extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Li=new Q,ya=new Q,nd=new Q,Ma=new Q,zs=new Q,Bs=new Q,hv=new Q,id=new Q,ad=new Q,rd=new Q,sd=new en,od=new en,ld=new en;class Oi{constructor(e=new Q,i=new Q,s=new Q){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Li.subVectors(e,i),l.cross(Li);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Li.subVectors(l,i),ya.subVectors(s,i),nd.subVectors(e,i);const f=Li.dot(Li),d=Li.dot(ya),m=Li.dot(nd),p=ya.dot(ya),_=ya.dot(nd),g=f*p-d*d;if(g===0)return c.set(0,0,0),null;const v=1/g,S=(p*m-d*_)*v,b=(f*_-d*m)*v;return c.set(1-S-b,b,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,s,l,c,f,d,m){return this.getBarycoord(e,i,s,l,Ma)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ma.x),m.addScaledVector(f,Ma.y),m.addScaledVector(d,Ma.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return sd.setScalar(0),od.setScalar(0),ld.setScalar(0),sd.fromBufferAttribute(e,i),od.fromBufferAttribute(e,s),ld.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(sd,c.x),f.addScaledVector(od,c.y),f.addScaledVector(ld,c.z),f}static isFrontFacing(e,i,s,l){return Li.subVectors(s,i),ya.subVectors(e,i),Li.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Li.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,d;zs.subVectors(l,s),Bs.subVectors(c,s),id.subVectors(e,s);const m=zs.dot(id),p=Bs.dot(id);if(m<=0&&p<=0)return i.copy(s);ad.subVectors(e,l);const _=zs.dot(ad),g=Bs.dot(ad);if(_>=0&&g<=_)return i.copy(l);const v=m*g-_*p;if(v<=0&&m>=0&&_<=0)return f=m/(m-_),i.copy(s).addScaledVector(zs,f);rd.subVectors(e,c);const S=zs.dot(rd),b=Bs.dot(rd);if(b>=0&&S<=b)return i.copy(c);const w=S*p-m*b;if(w<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Bs,d);const M=_*b-S*g;if(M<=0&&g-_>=0&&S-b>=0)return hv.subVectors(c,l),d=(g-_)/(g-_+(S-b)),i.copy(l).addScaledVector(hv,d);const x=1/(M+w+v);return f=w*x,d=v*x,i.copy(s).addScaledVector(zs,f).addScaledVector(Bs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new Q(1/0,1/0,1/0),i=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ni.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ni.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ni.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ni):Ni.fromBufferAttribute(c,f),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Gc.copy(s.boundingBox)),Gc.applyMatrix4(e.matrixWorld),this.union(Gc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nl),Vc.subVectors(this.max,nl),Fs.subVectors(e.a,nl),Hs.subVectors(e.b,nl),Gs.subVectors(e.c,nl),cr.subVectors(Hs,Fs),ur.subVectors(Gs,Hs),Ir.subVectors(Fs,Gs);let i=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!cd(i,Fs,Hs,Gs,Vc)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,Fs,Hs,Gs,Vc))?!1:(kc.crossVectors(cr,ur),i=[kc.x,kc.y,kc.z],cd(i,Fs,Hs,Gs,Vc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Ni=new Q,Gc=new El,Fs=new Q,Hs=new Q,Gs=new Q,cr=new Q,ur=new Q,Ir=new Q,nl=new Q,Vc=new Q,kc=new Q,zr=new Q;function cd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){zr.fromArray(r,c);const d=l.x*Math.abs(zr.x)+l.y*Math.abs(zr.y)+l.z*Math.abs(zr.z),m=e.dot(zr),p=i.dot(zr),_=s.dot(zr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const _n=new Q,Xc=new mt;let Y1=0;class Ii extends $r{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Y1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=K_,this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Xc.fromBufferAttribute(this,i),Xc.applyMatrix3(e),this.setXY(i,Xc.x,Xc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix3(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyMatrix4(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.applyNormalMatrix(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)_n.fromBufferAttribute(this,i),_n.transformDirection(e),this.setXYZ(i,_n.x,_n.y,_n.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ys(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ys(i,this.array)),i}setX(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ys(i,this.array)),i}setY(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ys(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ys(i,this.array)),i}setW(e,i){return this.normalized&&(i=Vn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Vn(i,this.array),s=Vn(s,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Xx extends Ii{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Wx extends Ii{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Hn extends Ii{constructor(e,i,s){super(new Float32Array(e),i,s)}}const Z1=new El,il=new Q,ud=new Q;class bl{constructor(e=new Q,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):Z1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;il.subVectors(e,this.center);const i=il.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(il,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(il.copy(e.center).add(ud)),this.expandByPoint(il.copy(e.center).sub(ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let j1=0;const Ei=new jt,fd=new Tn,Vs=new Q,di=new El,al=new El,bn=new Q;class qn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(d1(e)?Wx:Xx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new st().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,i,s){return Ei.makeTranslation(e,i,s),this.applyMatrix4(Ei),this}scale(e,i,s){return Ei.makeScale(e,i,s),this.applyMatrix4(Ei),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Hn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&it("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];al.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(di.min,al.min),di.expandByPoint(bn),bn.addVectors(di.max,al.max),di.expandByPoint(bn)):(di.expandByPoint(al.min),di.expandByPoint(al.max))}di.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)bn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)bn.fromBufferAttribute(d,p),m&&(Vs.fromBufferAttribute(e,p),bn.add(Vs)),l=Math.max(l,s.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let f=this.getAttribute("tangent");(f===void 0||f.count!==s.count)&&(f=new Ii(new Float32Array(4*s.count),4),this.setAttribute("tangent",f));const d=[],m=[];for(let T=0;T<s.count;T++)d[T]=new Q,m[T]=new Q;const p=new Q,_=new Q,g=new Q,v=new mt,S=new mt,b=new mt,w=new Q,M=new Q;function x(T,O,W){p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,O),g.fromBufferAttribute(s,W),v.fromBufferAttribute(c,T),S.fromBufferAttribute(c,O),b.fromBufferAttribute(c,W),_.sub(p),g.sub(p),S.sub(v),b.sub(v);const k=1/(S.x*b.y-b.x*S.y);isFinite(k)&&(w.copy(_).multiplyScalar(b.y).addScaledVector(g,-S.y).multiplyScalar(k),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-b.x).multiplyScalar(k),d[T].add(w),d[O].add(w),d[W].add(w),m[T].add(M),m[O].add(M),m[W].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,O=D.length;T<O;++T){const W=D[T],k=W.start,J=W.count;for(let me=k,ve=k+J;me<ve;me+=3)x(e.getX(me+0),e.getX(me+1),e.getX(me+2))}const P=new Q,C=new Q,I=new Q,N=new Q;function z(T){I.fromBufferAttribute(l,T),N.copy(I);const O=d[T];P.copy(O),P.sub(I.multiplyScalar(I.dot(O))).normalize(),C.crossVectors(N,O);const k=C.dot(m[T])<0?-1:1;f.setXYZW(T,P.x,P.y,P.z,k)}for(let T=0,O=D.length;T<O;++T){const W=D[T],k=W.start,J=W.count;for(let me=k,ve=k+J;me<ve;me+=3)z(e.getX(me+0)),z(e.getX(me+1)),z(e.getX(me+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let v=0,S=s.count;v<S;v++)s.setXYZ(v,0,0,0);const l=new Q,c=new Q,f=new Q,d=new Q,m=new Q,p=new Q,_=new Q,g=new Q;if(e)for(let v=0,S=e.count;v<S;v+=3){const b=e.getX(v+0),w=e.getX(v+1),M=e.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,M),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,w),p.fromBufferAttribute(s,M),d.add(_),m.add(_),p.add(_),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(w,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),_.subVectors(f,c),g.subVectors(l,c),_.cross(g),s.setXYZ(v+0,_.x,_.y,_.z),s.setXYZ(v+1,_.x,_.y,_.z),s.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,m){const p=d.array,_=d.itemSize,g=d.normalized,v=new p.constructor(m.length*_);let S=0,b=0;for(let w=0,M=m.length;w<M;w++){d.isInterleavedBufferAttribute?S=m[w]*d.data.stride+d.offset:S=m[w]*_;for(let x=0;x<_;x++)v[b++]=p[S++]}return new Ii(v,_,g)}if(this.index===null)return it("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new qn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let _=0,g=p.length;_<g;_++){const v=p[_],S=e(v,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,v=p.length;g<v;g++){const S=p[g];_.push(S.toJSON(e.data))}_.length>0&&(l[m]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const c=e.morphAttributes;for(const p in c){const _=[],g=c[p];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,_=f.length;p<_;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let K1=0;class Na extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=io(),this.name="",this.type="Material",this.blending=Zs,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Dd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){it(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){it(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(s.blending=this.blending),this.side!==mr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Cd&&(s.blendSrc=this.blendSrc),this.blendDst!==Dd&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ls&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ls&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ls&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const m=c[d];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new mt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ba=new Q,hd=new Q,Wc=new Q,fr=new Q,dd=new Q,qc=new Q,pd=new Q;class Ip{constructor(e=new Q,i=new Q(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ba)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ba.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ba.copy(this.origin).addScaledVector(this.direction,i),ba.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hd.copy(e).add(i).multiplyScalar(.5),Wc.copy(i).sub(e).normalize(),fr.copy(this.origin).sub(hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Wc),d=fr.dot(this.direction),m=-fr.dot(Wc),p=fr.lengthSq(),_=Math.abs(1-f*f);let g,v,S,b;if(_>0)if(g=f*m-d,v=f*d-m,b=c*_,g>=0)if(v>=-b)if(v<=b){const w=1/_;g*=w,v*=w,S=g*(g+f*v+2*d)+v*(f*g+v+2*m)+p}else v=c,g=Math.max(0,-(f*v+d)),S=-g*g+v*(v+2*m)+p;else v=-c,g=Math.max(0,-(f*v+d)),S=-g*g+v*(v+2*m)+p;else v<=-b?(g=Math.max(0,-(-f*c+d)),v=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+v*(v+2*m)+p):v<=b?(g=0,v=Math.min(Math.max(-c,-m),c),S=v*(v+2*m)+p):(g=Math.max(0,-(f*c+d)),v=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+v*(v+2*m)+p);else v=f>0?-c:c,g=Math.max(0,-(f*v+d)),S=-g*g+v*(v+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(hd).addScaledVector(Wc,v),S}intersectSphere(e,i){ba.subVectors(e.center,this.origin);const s=ba.dot(this.direction),l=ba.dot(ba)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return p>=0?(s=(e.min.x-v.x)*p,l=(e.max.x-v.x)*p):(s=(e.max.x-v.x)*p,l=(e.min.x-v.x)*p),_>=0?(c=(e.min.y-v.y)*_,f=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,f=(e.min.y-v.y)*_),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(e.min.z-v.z)*g,m=(e.max.z-v.z)*g):(d=(e.max.z-v.z)*g,m=(e.min.z-v.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ba)!==null}intersectTriangle(e,i,s,l,c){dd.subVectors(i,e),qc.subVectors(s,e),pd.crossVectors(dd,qc);let f=this.direction.dot(pd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;fr.subVectors(this.origin,e);const m=d*this.direction.dot(qc.crossVectors(fr,qc));if(m<0)return null;const p=d*this.direction.dot(dd.cross(fr));if(p<0||m+p>f)return null;const _=-d*fr.dot(pd);return _<0?null:this.at(_/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kr extends Na{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dv=new jt,Br=new Ip,Yc=new bl,pv=new Q,Zc=new Q,jc=new Q,Kc=new Q,md=new Q,Qc=new Q,mv=new Q,Jc=new Q;class Un extends Tn{constructor(e=new qn,i=new kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const _=d[m],g=c[m];_!==0&&(md.fromBufferAttribute(g,e),f?Qc.addScaledVector(md,_):Qc.addScaledVector(md.sub(i),_))}i.add(Qc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Yc.copy(s.boundingSphere),Yc.applyMatrix4(c),Br.copy(e.ray).recast(e.near),!(Yc.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Yc,pv)===null||Br.origin.distanceToSquared(pv)>(e.far-e.near)**2))&&(dv.copy(c).invert(),Br.copy(e.ray).applyMatrix4(dv),!(s.boundingBox!==null&&Br.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Br)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,w=v.length;b<w;b++){const M=v[b],x=f[M.materialIndex],D=Math.max(M.start,S.start),P=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=D,I=P;C<I;C+=3){const N=d.getX(C),z=d.getX(C+1),T=d.getX(C+2);l=$c(this,x,e,s,p,_,g,N,z,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let M=b,x=w;M<x;M+=3){const D=d.getX(M),P=d.getX(M+1),C=d.getX(M+2);l=$c(this,f,e,s,p,_,g,D,P,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,w=v.length;b<w;b++){const M=v[b],x=f[M.materialIndex],D=Math.max(M.start,S.start),P=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let C=D,I=P;C<I;C+=3){const N=C,z=C+1,T=C+2;l=$c(this,x,e,s,p,_,g,N,z,T),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(m.count,S.start+S.count);for(let M=b,x=w;M<x;M+=3){const D=M,P=M+1,C=M+2;l=$c(this,f,e,s,p,_,g,D,P,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function Q1(r,e,i,s,l,c,f,d){let m;if(e.side===Wn?m=s.intersectTriangle(f,c,l,!0,d):m=s.intersectTriangle(l,c,f,e.side===mr,d),m===null)return null;Jc.copy(d),Jc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Jc);return p<i.near||p>i.far?null:{distance:p,point:Jc.clone(),object:r}}function $c(r,e,i,s,l,c,f,d,m,p){r.getVertexPosition(d,Zc),r.getVertexPosition(m,jc),r.getVertexPosition(p,Kc);const _=Q1(r,e,i,s,Zc,jc,Kc,mv);if(_){const g=new Q;Oi.getBarycoord(mv,Zc,jc,Kc,g),l&&(_.uv=Oi.getInterpolatedAttribute(l,d,m,p,g,new mt)),c&&(_.uv1=Oi.getInterpolatedAttribute(c,d,m,p,g,new mt)),f&&(_.normal=Oi.getInterpolatedAttribute(f,d,m,p,g,new Q),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const v={a:d,b:m,c:p,normal:new Q,materialIndex:0};Oi.getNormal(Zc,jc,Kc,v.normal),_.face=v,_.barycoord=g}return _}class J1 extends Fn{constructor(e=null,i=1,s=1,l,c,f,d,m,p=Nn,_=Nn,g,v){super(null,f,d,m,p,_,l,c,g,v),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gd=new Q,$1=new Q,eT=new st;class Gr{constructor(e=new Q(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=gd.subVectors(s,i).cross($1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(gd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||eT.getNormalMatrix(e),l=this.coplanarPoint(gd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new bl,tT=new mt(.5,.5),eu=new Q;class zp{constructor(e=new Gr,i=new Gr,s=new Gr,l=new Gr,c=new Gr,f=new Gr){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],m=c[2],p=c[3],_=c[4],g=c[5],v=c[6],S=c[7],b=c[8],w=c[9],M=c[10],x=c[11],D=c[12],P=c[13],C=c[14],I=c[15];if(l[0].setComponents(p-f,S-_,x-b,I-D).normalize(),l[1].setComponents(p+f,S+_,x+b,I+D).normalize(),l[2].setComponents(p+d,S+g,x+w,I+P).normalize(),l[3].setComponents(p-d,S-g,x-w,I-P).normalize(),s)l[4].setComponents(m,v,M,C).normalize(),l[5].setComponents(p-m,S-v,x-M,I-C).normalize();else if(l[4].setComponents(p-m,S-v,x-M,I-C).normalize(),i===ji)l[5].setComponents(p+m,S+v,x+M,I+C).normalize();else if(i===_l)l[5].setComponents(m,v,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){Fr.center.set(0,0,0);const i=tT.distanceTo(e.center);return Fr.radius=.7071067811865476+i,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(eu.x=l.normal.x>0?e.max.x:e.min.x,eu.y=l.normal.y>0?e.max.y:e.min.y,eu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(eu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qx extends Na{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Mu=new Q,Eu=new Q,gv=new jt,rl=new Ip,tu=new bl,_d=new Q,_v=new Q;class nT extends Tn{constructor(e=new qn,i=new qx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Mu.fromBufferAttribute(i,l-1),Eu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Mu.distanceTo(Eu);e.setAttribute("lineDistance",new Hn(s,1))}else it("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),tu.copy(s.boundingSphere),tu.applyMatrix4(l),tu.radius+=c,e.ray.intersectsSphere(tu)===!1)return;gv.copy(l).invert(),rl.copy(e.ray).applyMatrix4(gv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=s.index,v=s.attributes.position;if(_!==null){const S=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let w=S,M=b-1;w<M;w+=p){const x=_.getX(w),D=_.getX(w+1),P=nu(this,e,rl,m,x,D,w);P&&i.push(P)}if(this.isLineLoop){const w=_.getX(b-1),M=_.getX(S),x=nu(this,e,rl,m,w,M,b-1);x&&i.push(x)}}else{const S=Math.max(0,f.start),b=Math.min(v.count,f.start+f.count);for(let w=S,M=b-1;w<M;w+=p){const x=nu(this,e,rl,m,w,w+1,w);x&&i.push(x)}if(this.isLineLoop){const w=nu(this,e,rl,m,b-1,S,b-1);w&&i.push(w)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function nu(r,e,i,s,l,c,f){const d=r.geometry.attributes.position;if(Mu.fromBufferAttribute(d,l),Eu.fromBufferAttribute(d,c),i.distanceSqToSegment(Mu,Eu,_d,_v)>s)return;_d.applyMatrix4(r.matrixWorld);const p=e.ray.origin.distanceTo(_d);if(!(p<e.near||p>e.far))return{distance:p,point:_v.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}class Yx extends Na{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vv=new jt,gp=new Ip,iu=new bl,au=new Q;class iT extends Tn{constructor(e=new qn,i=new Yx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),iu.copy(s.boundingSphere),iu.applyMatrix4(l),iu.radius+=c,e.ray.intersectsSphere(iu)===!1)return;vv.copy(l).invert(),gp.copy(e.ray).applyMatrix4(vv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const v=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let b=v,w=S;b<w;b++){const M=p.getX(b);au.fromBufferAttribute(g,M),xv(au,M,m,l,e,i,this)}}else{const v=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let b=v,w=S;b<w;b++)au.fromBufferAttribute(g,b),xv(au,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function xv(r,e,i,s,l,c,f){const d=gp.distanceSqToPoint(r);if(d<i){const m=new Q;gp.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Zx extends Fn{constructor(e=[],i=Kr,s,l,c,f,d,m,p,_){super(e,i,s,l,c,f,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends Fn{constructor(e,i,s=Ji,l,c,f,d=Nn,m=Nn,p,_=Ua,g=1){if(_!==Ua&&_!==Zr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:i,depth:g};super(v,l,c,f,d,m,_,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class aT extends $s{constructor(e,i=Ji,s=Kr,l,c,f=Nn,d=Nn,m,p=Ua){const _={width:e,height:e,depth:1},g=[_,_,_,_,_,_];super(e,e,i,s,l,c,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ro extends qn{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],_=[],g=[];let v=0,S=0;b("z","y","x",-1,-1,s,i,e,f,c,0),b("z","y","x",1,-1,s,i,-e,f,c,1),b("x","z","y",1,1,e,s,i,l,f,2),b("x","z","y",1,-1,e,s,-i,l,f,3),b("x","y","z",1,-1,e,i,s,l,c,4),b("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Hn(p,3)),this.setAttribute("normal",new Hn(_,3)),this.setAttribute("uv",new Hn(g,2));function b(w,M,x,D,P,C,I,N,z,T,O){const W=C/z,k=I/T,J=C/2,me=I/2,ve=N/2,$=z+1,B=T+1;let H=0,ee=0;const pe=new Q;for(let Te=0;Te<B;Te++){const L=Te*k-me;for(let Z=0;Z<$;Z++){const Ae=Z*W-J;pe[w]=Ae*D,pe[M]=L*P,pe[x]=ve,p.push(pe.x,pe.y,pe.z),pe[w]=0,pe[M]=0,pe[x]=N>0?1:-1,_.push(pe.x,pe.y,pe.z),g.push(Z/z),g.push(1-Te/T),H+=1}}for(let Te=0;Te<T;Te++)for(let L=0;L<z;L++){const Z=v+L+$*Te,Ae=v+L+$*(Te+1),Re=v+(L+1)+$*(Te+1),Ie=v+(L+1)+$*Te;m.push(Z,Ae,Ie),m.push(Ae,Re,Ie),ee+=6}d.addGroup(S,ee,O),S+=ee,v+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class rT{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){it("Curve: .getPoint() not implemented.")}getPointAt(e,i){const s=this.getUtoTmapping(e);return this.getPoint(s,i)}getPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPoint(s/e));return i}getSpacedPoints(e=5){const i=[];for(let s=0;s<=e;s++)i.push(this.getPointAt(s/e));return i}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=e;f++)s=this.getPoint(f/e),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=e*s[c-1];let d=0,m=c-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(c-1);const _=s[l],v=s[l+1]-_,S=(f-_)/v;return(l+S)/(c-1)}getTangent(e,i){let l=e-1e-4,c=e+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),m=i||(f.isVector2?new mt:new Q);return m.copy(d).sub(f).normalize(),m}getTangentAt(e,i){const s=this.getUtoTmapping(e);return this.getTangent(s,i)}computeFrenetFrames(e,i=!1){const s=new Q,l=[],c=[],f=[],d=new Q,m=new jt;for(let S=0;S<=e;S++){const b=S/e;l[S]=this.getTangentAt(b,new Q)}c[0]=new Q,f[0]=new Q;let p=Number.MAX_VALUE;const _=Math.abs(l[0].x),g=Math.abs(l[0].y),v=Math.abs(l[0].z);_<=p&&(p=_,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),v<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let S=1;S<=e;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(pt(l[S-1].dot(l[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(d,b))}f[S].crossVectors(l[S],c[S])}if(i===!0){let S=Math.acos(pt(c[0].dot(c[e]),-1,1));S/=e,l[0].dot(d.crossVectors(c[0],c[e]))>0&&(S=-S);for(let b=1;b<=e;b++)c[b].applyMatrix4(m.makeRotationAxis(l[b],S*b)),f[b].crossVectors(l[b],c[b])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function sT(r,e){const i=1-r;return i*i*e}function oT(r,e){return 2*(1-r)*r*e}function lT(r,e){return r*r*e}function vd(r,e,i,s){return sT(r,e)+oT(r,i)+lT(r,s)}class cT extends rT{constructor(e=new Q,i=new Q,s=new Q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=i,this.v2=s}getPoint(e,i=new Q){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(vd(e,l.x,c.x,f.x),vd(e,l.y,c.y,f.y),vd(e,l.z,c.z,f.z)),s}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Du extends qn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,_=m+1,g=e/d,v=i/m,S=[],b=[],w=[],M=[];for(let x=0;x<_;x++){const D=x*v-f;for(let P=0;P<p;P++){const C=P*g-c;b.push(C,-D,0),w.push(0,0,1),M.push(P/d),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let D=0;D<d;D++){const P=D+p*x,C=D+p*(x+1),I=D+1+p*(x+1),N=D+1+p*x;S.push(P,C,N),S.push(C,I,N)}this.setIndex(S),this.setAttribute("position",new Hn(b,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Du(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bp extends qn{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],m=[],p=[],_=[];let g=e;const v=(i-e)/l,S=new Q,b=new mt;for(let w=0;w<=l;w++){for(let M=0;M<=s;M++){const x=c+M/s*f;S.x=g*Math.cos(x),S.y=g*Math.sin(x),m.push(S.x,S.y,S.z),p.push(0,0,1),b.x=(S.x/i+1)/2,b.y=(S.y/i+1)/2,_.push(b.x,b.y)}g+=v}for(let w=0;w<l;w++){const M=w*(s+1);for(let x=0;x<s;x++){const D=x+M,P=D,C=D+s+1,I=D+s+2,N=D+1;d.push(P,C,N),d.push(C,I,N)}}this.setIndex(d),this.setAttribute("position",new Hn(m,3)),this.setAttribute("normal",new Hn(p,3)),this.setAttribute("uv",new Hn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bp(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Xr extends qn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+d,Math.PI);let p=0;const _=[],g=new Q,v=new Q,S=[],b=[],w=[],M=[];for(let x=0;x<=s;x++){const D=[],P=x/s,C=f+P*d,I=e*Math.cos(C),N=Math.sqrt(e*e-I*I);let z=0;x===0&&f===0?z=.5/i:x===s&&m===Math.PI&&(z=-.5/i);for(let T=0;T<=i;T++){const O=T/i,W=l+O*c;g.x=-N*Math.cos(W),g.y=I,g.z=N*Math.sin(W),b.push(g.x,g.y,g.z),v.copy(g).normalize(),w.push(v.x,v.y,v.z),M.push(O+z,1-P),D.push(p++)}_.push(D)}for(let x=0;x<s;x++)for(let D=0;D<i;D++){const P=_[x][D+1],C=_[x][D],I=_[x+1][D],N=_[x+1][D+1];(x!==0||f>0)&&S.push(P,C,N),(x!==s-1||m<Math.PI)&&S.push(C,I,N)}this.setIndex(S),this.setAttribute("position",new Hn(b,3)),this.setAttribute("normal",new Hn(w,3)),this.setAttribute("uv",new Hn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function eo(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Sv(l))l.isRenderTargetTexture?(it("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Sv(l[0])){const c=[];for(let f=0,d=l.length;f<d;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function kn(r){const e={};for(let i=0;i<r.length;i++){const s=eo(r[i]);for(const l in s)e[l]=s[l]}return e}function Sv(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function uT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Kx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const fT={clone:eo,merge:kn};var hT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ea extends Na{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=eo(e.uniforms),this.uniformsGroups=uT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new ft().setHex(l.value);break;case"v2":this.uniforms[s].value=new mt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new Q().fromArray(l.value);break;case"v4":this.uniforms[s].value=new en().fromArray(l.value);break;case"m3":this.uniforms[s].value=new st().fromArray(l.value);break;case"m4":this.uniforms[s].value=new jt().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class pT extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mT extends Na{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gT extends Na{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ft(16777215),this.specular=new ft(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _T extends Na{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=wu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vT extends Na{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=r1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xT extends Na{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(yv(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!yv(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function yv(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class ST{constructor(e,i,s){const l=this;let c=!1,f=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(_){d++,c===!1&&l.onStart!==void 0&&l.onStart(_,f,d),c=!0},this.itemEnd=function(_){f++,l.onProgress!==void 0&&l.onProgress(_,f,d),f===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,v=p.length;g<v;g+=2){const S=p[g],b=p[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yT=new ST;class Fp{constructor(e){this.manager=e!==void 0?e:yT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,i){const s=this;return new Promise(function(l,c){s.load(e,l,i,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Fp.DEFAULT_MATERIAL_NAME="__DEFAULT";const ks=new WeakMap;class MT extends Fp{constructor(e){super(e)}load(e,i,s,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,f=xd.get(`image:${e}`);if(f!==void 0){if(f.complete===!0)c.manager.itemStart(e),setTimeout(function(){i&&i(f),c.manager.itemEnd(e)},0);else{let g=ks.get(f);g===void 0&&(g=[],ks.set(f,g)),g.push({onLoad:i,onError:l})}return f}const d=vl("img");function m(){_(),i&&i(this);const g=ks.get(this)||[];for(let v=0;v<g.length;v++){const S=g[v];S.onLoad&&S.onLoad(this)}ks.delete(this),c.manager.itemEnd(e)}function p(g){_(),l&&l(g),xd.remove(`image:${e}`);const v=ks.get(this)||[];for(let S=0;S<v.length;S++){const b=v[S];b.onError&&b.onError(g)}ks.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),xd.add(`image:${e}`,d),c.manager.itemStart(e),d.src=e,d}}class ET extends Fp{constructor(e){super(e)}load(e,i,s,l){const c=new Fn,f=new MT(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(e,function(d){c.image=d,c.needsUpdate=!0,i!==void 0&&i(c)},s,l),c}}class Qx extends Tn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Sd=new jt,Mv=new Q,Ev=new Q;class bT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Mv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Mv),Ev.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ev),i.updateMatrixWorld(),Sd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===_l||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ru=new Q,su=new ao,Xi=new Q;class Jx extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ru,su,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(ru,su,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ru,su,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new Q,bv=new mt,Tv=new mt;class bi extends Jx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,i){return this.getViewBounds(e,bv,Tv),i.subVectors(Tv,bv)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(ul*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Hp extends Jx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class TT extends bT{constructor(){super(new Hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Av extends Qx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new TT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class AT extends Qx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Xs=-90,Ws=1;class RT extends Tn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new bi(Xs,Ws,e,i);l.layers=this.layers,this.add(l);const c=new bi(Xs,Ws,e,i);c.layers=this.layers,this.add(c);const f=new bi(Xs,Ws,e,i);f.layers=this.layers,this.add(f);const d=new bi(Xs,Ws,e,i);d.layers=this.layers,this.add(d);const m=new bi(Xs,Ws,e,i);m.layers=this.layers,this.add(m);const p=new bi(Xs,Ws,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,m]=i;for(const p of i)this.remove(p);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_l)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,m,p,_]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,_),e.setRenderTarget(g,v,S),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class wT extends bi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,it("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const Wp=class Wp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};Wp.prototype.isMatrix2=!0;let Rv=Wp;function wv(r,e,i,s){const l=DT(s);switch(i){case zx:return r*e;case Fx:return r*e/l.components*l.byteLength;case Cp:return r*e/l.components*l.byteLength;case Qr:return r*e*2/l.components*l.byteLength;case Dp:return r*e*2/l.components*l.byteLength;case Bx:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case Up:return r*e*4/l.components*l.byteLength;case hu:case du:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gd:case kd:return Math.max(r,16)*Math.max(e,8)/4;case Hd:case Vd:return Math.max(r,8)*Math.max(e,8)/2;case Xd:case Wd:case Yd:case Zd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case qd:case vu:case jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $d:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case hp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case dp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xu:case mp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function DT(r){switch(r){case pi:case Nx:return{byteLength:1,components:1};case pl:case Ox:case Da:return{byteLength:2,components:1};case Rp:case wp:return{byteLength:2,components:4};case Ji:case Ap:case Zi:return{byteLength:4,components:1};case Px:case Ix:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tp}}));typeof window<"u"&&(window.__THREE__?it("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tp);function $x(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function UT(r){const e=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,v=r.createBuffer();r.bindBuffer(m,v),r.bufferData(m,p,_),d.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const _=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,_);else{g.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<g.length;S++){const b=g[v],w=g[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,g[v]=w)}g.length=v+1;for(let S=0,b=g.length;S<b;S++){const w=g[S];r.bufferSubData(p,w.start*_.BYTES_PER_ELEMENT,_,w.start,w.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(r.deleteBuffer(m.buffer),e.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:f}}var LT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NT=`#ifdef USE_ALPHAHASH
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
#endif`,OT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
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
#endif`,FT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WT=`#ifdef USE_IRIDESCENCE
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
#endif`,qT=`#ifdef USE_BUMPMAP
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
#endif`,YT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,JT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,eA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tA=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,nA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iA=`vec3 transformedNormal = objectNormal;
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
#endif`,aA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lA="gl_FragColor = linearToOutputTexel( gl_FragColor );",cA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hA=`#ifdef USE_ENVMAP
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
#endif`,dA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_A=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xA=`#ifdef USE_GRADIENTMAP
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
}`,SA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,EA=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#endif
#include <lightprobes_pars_fragment>`,bA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
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
#endif`,TA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,DA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,NA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OA=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,PA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,VA=`#if defined( USE_POINTS_UV )
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
#endif`,kA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZA=`#ifdef USE_MORPHTARGETS
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
#endif`,jA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tR=`#ifdef USE_NORMALMAP
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
#endif`,nR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oR=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,_R=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,vR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xR=`#ifdef USE_SKINNING
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
#endif`,SR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yR=`#ifdef USE_SKINNING
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
#endif`,MR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ER=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,AR=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RR=`#ifdef USE_TRANSMISSION
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
#endif`,wR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,NR=`uniform sampler2D t2D;
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
}`,OR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BR=`#include <common>
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
}`,FR=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HR=`#define DISTANCE
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
}`,GR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XR=`uniform float scale;
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
}`,WR=`uniform vec3 diffuse;
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
}`,qR=`#include <common>
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
}`,YR=`uniform vec3 diffuse;
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
}`,ZR=`#define LAMBERT
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
}`,jR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,KR=`#define MATCAP
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
}`,QR=`#define MATCAP
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
}`,JR=`#define NORMAL
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
}`,$R=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,e2=`#define PHONG
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
}`,t2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,n2=`#define STANDARD
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
}`,i2=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,a2=`#define TOON
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
}`,r2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,s2=`uniform float size;
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
}`,o2=`uniform vec3 diffuse;
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
}`,l2=`#include <common>
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
}`,c2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,u2=`uniform float rotation;
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
}`,f2=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:LT,alphahash_pars_fragment:NT,alphamap_fragment:OT,alphamap_pars_fragment:PT,alphatest_fragment:IT,alphatest_pars_fragment:zT,aomap_fragment:BT,aomap_pars_fragment:FT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:VT,beginnormal_vertex:kT,bsdfs:XT,iridescence_fragment:WT,bumpmap_pars_fragment:qT,clipping_planes_fragment:YT,clipping_planes_pars_fragment:ZT,clipping_planes_pars_vertex:jT,clipping_planes_vertex:KT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:$T,color_vertex:eA,common:tA,cube_uv_reflection_fragment:nA,defaultnormal_vertex:iA,displacementmap_pars_vertex:aA,displacementmap_vertex:rA,emissivemap_fragment:sA,emissivemap_pars_fragment:oA,colorspace_fragment:lA,colorspace_pars_fragment:cA,envmap_fragment:uA,envmap_common_pars_fragment:fA,envmap_pars_fragment:hA,envmap_pars_vertex:dA,envmap_physical_pars_fragment:bA,envmap_vertex:pA,fog_vertex:mA,fog_pars_vertex:gA,fog_fragment:_A,fog_pars_fragment:vA,gradientmap_pars_fragment:xA,lightmap_pars_fragment:SA,lights_lambert_fragment:yA,lights_lambert_pars_fragment:MA,lights_pars_begin:EA,lights_toon_fragment:TA,lights_toon_pars_fragment:AA,lights_phong_fragment:RA,lights_phong_pars_fragment:wA,lights_physical_fragment:CA,lights_physical_pars_fragment:DA,lights_fragment_begin:UA,lights_fragment_maps:LA,lights_fragment_end:NA,lightprobes_pars_fragment:OA,logdepthbuf_fragment:PA,logdepthbuf_pars_fragment:IA,logdepthbuf_pars_vertex:zA,logdepthbuf_vertex:BA,map_fragment:FA,map_pars_fragment:HA,map_particle_fragment:GA,map_particle_pars_fragment:VA,metalnessmap_fragment:kA,metalnessmap_pars_fragment:XA,morphinstance_vertex:WA,morphcolor_vertex:qA,morphnormal_vertex:YA,morphtarget_pars_vertex:ZA,morphtarget_vertex:jA,normal_fragment_begin:KA,normal_fragment_maps:QA,normal_pars_fragment:JA,normal_pars_vertex:$A,normal_vertex:eR,normalmap_pars_fragment:tR,clearcoat_normal_fragment_begin:nR,clearcoat_normal_fragment_maps:iR,clearcoat_pars_fragment:aR,iridescence_pars_fragment:rR,opaque_fragment:sR,packing:oR,premultiplied_alpha_fragment:lR,project_vertex:cR,dithering_fragment:uR,dithering_pars_fragment:fR,roughnessmap_fragment:hR,roughnessmap_pars_fragment:dR,shadowmap_pars_fragment:pR,shadowmap_pars_vertex:mR,shadowmap_vertex:gR,shadowmask_pars_fragment:_R,skinbase_vertex:vR,skinning_pars_vertex:xR,skinning_vertex:SR,skinnormal_vertex:yR,specularmap_fragment:MR,specularmap_pars_fragment:ER,tonemapping_fragment:bR,tonemapping_pars_fragment:TR,transmission_fragment:AR,transmission_pars_fragment:RR,uv_pars_fragment:wR,uv_pars_vertex:CR,uv_vertex:DR,worldpos_vertex:UR,background_vert:LR,background_frag:NR,backgroundCube_vert:OR,backgroundCube_frag:PR,cube_vert:IR,cube_frag:zR,depth_vert:BR,depth_frag:FR,distance_vert:HR,distance_frag:GR,equirect_vert:VR,equirect_frag:kR,linedashed_vert:XR,linedashed_frag:WR,meshbasic_vert:qR,meshbasic_frag:YR,meshlambert_vert:ZR,meshlambert_frag:jR,meshmatcap_vert:KR,meshmatcap_frag:QR,meshnormal_vert:JR,meshnormal_frag:$R,meshphong_vert:e2,meshphong_frag:t2,meshphysical_vert:n2,meshphysical_frag:i2,meshtoon_vert:a2,meshtoon_frag:r2,points_vert:s2,points_frag:o2,shadow_vert:l2,shadow_frag:c2,sprite_vert:u2,sprite_frag:f2},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},qi={basic:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:kn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:kn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:kn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:kn([Fe.points,Fe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:kn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:kn([Fe.common,Fe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:kn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:kn([Fe.sprite,Fe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:kn([Fe.common,Fe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:kn([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};qi.physical={uniforms:kn([qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const ou={r:0,b:0,g:0},h2=new jt,eS=new st;eS.set(-1,0,0,0,1,0,0,0,1);function d2(r,e,i,s,l,c){const f=new ft(0);let d=l===!0?0:1,m,p,_=null,g=0,v=null;function S(D){let P=D.isScene===!0?D.background:null;if(P&&P.isTexture){const C=D.backgroundBlurriness>0;P=e.get(P,C)}return P}function b(D){let P=!1;const C=S(D);C===null?M(f,d):C&&C.isColor&&(M(C,1),P=!0);const I=r.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||P)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function w(D,P){const C=S(P);C&&(C.isCubeTexture||C.mapping===Cu)?(p===void 0&&(p=new Un(new ro(1,1,1),new ea({name:"BackgroundCubeMaterial",uniforms:eo(qi.backgroundCube.uniforms),vertexShader:qi.backgroundCube.vertexShader,fragmentShader:qi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,N,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(h2.makeRotationFromEuler(P.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(eS),p.material.toneMapped=bt.getTransfer(C.colorSpace)!==Ft,(_!==C||g!==C.version||v!==r.toneMapping)&&(p.material.needsUpdate=!0,_=C,g=C.version,v=r.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Un(new Du(2,2),new ea({name:"BackgroundMaterial",uniforms:eo(qi.background.uniforms),vertexShader:qi.background.vertexShader,fragmentShader:qi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=bt.getTransfer(C.colorSpace)!==Ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(_!==C||g!==C.version||v!==r.toneMapping)&&(m.material.needsUpdate=!0,_=C,g=C.version,v=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function M(D,P){D.getRGB(ou,Kx(r)),i.buffers.color.setClear(ou.r,ou.g,ou.b,P,c)}function x(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,P=1){f.set(D),d=P,M(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,M(f,d)},render:b,addToRenderList:w,dispose:x}}function p2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=v(null);let c=l,f=!1;function d(k,J,me,ve,$){let B=!1;const H=g(k,ve,me,J);c!==H&&(c=H,p(c.object)),B=S(k,ve,me,$),B&&b(k,ve,me,$),$!==null&&e.update($,r.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,C(k,J,me,ve),$!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function m(){return r.createVertexArray()}function p(k){return r.bindVertexArray(k)}function _(k){return r.deleteVertexArray(k)}function g(k,J,me,ve){const $=ve.wireframe===!0;let B=s[J.id];B===void 0&&(B={},s[J.id]=B);const H=k.isInstancedMesh===!0?k.id:0;let ee=B[H];ee===void 0&&(ee={},B[H]=ee);let pe=ee[me.id];pe===void 0&&(pe={},ee[me.id]=pe);let Te=pe[$];return Te===void 0&&(Te=v(m()),pe[$]=Te),Te}function v(k){const J=[],me=[],ve=[];for(let $=0;$<i;$++)J[$]=0,me[$]=0,ve[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:me,attributeDivisors:ve,object:k,attributes:{},index:null}}function S(k,J,me,ve){const $=c.attributes,B=J.attributes;let H=0;const ee=me.getAttributes();for(const pe in ee)if(ee[pe].location>=0){const L=$[pe];let Z=B[pe];if(Z===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor)),L===void 0||L.attribute!==Z||Z&&L.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==ve}function b(k,J,me,ve){const $={},B=J.attributes;let H=0;const ee=me.getAttributes();for(const pe in ee)if(ee[pe].location>=0){let L=B[pe];L===void 0&&(pe==="instanceMatrix"&&k.instanceMatrix&&(L=k.instanceMatrix),pe==="instanceColor"&&k.instanceColor&&(L=k.instanceColor));const Z={};Z.attribute=L,L&&L.data&&(Z.data=L.data),$[pe]=Z,H++}c.attributes=$,c.attributesNum=H,c.index=ve}function w(){const k=c.newAttributes;for(let J=0,me=k.length;J<me;J++)k[J]=0}function M(k){x(k,0)}function x(k,J){const me=c.newAttributes,ve=c.enabledAttributes,$=c.attributeDivisors;me[k]=1,ve[k]===0&&(r.enableVertexAttribArray(k),ve[k]=1),$[k]!==J&&(r.vertexAttribDivisor(k,J),$[k]=J)}function D(){const k=c.newAttributes,J=c.enabledAttributes;for(let me=0,ve=J.length;me<ve;me++)J[me]!==k[me]&&(r.disableVertexAttribArray(me),J[me]=0)}function P(k,J,me,ve,$,B,H){H===!0?r.vertexAttribIPointer(k,J,me,$,B):r.vertexAttribPointer(k,J,me,ve,$,B)}function C(k,J,me,ve){w();const $=ve.attributes,B=me.getAttributes(),H=J.defaultAttributeValues;for(const ee in B){const pe=B[ee];if(pe.location>=0){let Te=$[ee];if(Te===void 0&&(ee==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),ee==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor)),Te!==void 0){const L=Te.normalized,Z=Te.itemSize,Ae=e.get(Te);if(Ae===void 0)continue;const Re=Ae.buffer,Ie=Ae.type,re=Ae.bytesPerElement,ye=Ie===r.INT||Ie===r.UNSIGNED_INT||Te.gpuType===Ap;if(Te.isInterleavedBufferAttribute){const Ee=Te.data,Me=Ee.stride,Xe=Te.offset;if(Ee.isInstancedInterleavedBuffer){for(let Pe=0;Pe<pe.locationSize;Pe++)x(pe.location+Pe,Ee.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Pe=0;Pe<pe.locationSize;Pe++)M(pe.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Pe=0;Pe<pe.locationSize;Pe++)P(pe.location+Pe,Z/pe.locationSize,Ie,L,Me*re,(Xe+Z/pe.locationSize*Pe)*re,ye)}else{if(Te.isInstancedBufferAttribute){for(let Ee=0;Ee<pe.locationSize;Ee++)x(pe.location+Ee,Te.meshPerAttribute);k.isInstancedMesh!==!0&&ve._maxInstanceCount===void 0&&(ve._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ee=0;Ee<pe.locationSize;Ee++)M(pe.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Re);for(let Ee=0;Ee<pe.locationSize;Ee++)P(pe.location+Ee,Z/pe.locationSize,Ie,L,Z*re,Z/pe.locationSize*Ee*re,ye)}}else if(H!==void 0){const L=H[ee];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(pe.location,L);break;case 3:r.vertexAttrib3fv(pe.location,L);break;case 4:r.vertexAttrib4fv(pe.location,L);break;default:r.vertexAttrib1fv(pe.location,L)}}}}D()}function I(){O();for(const k in s){const J=s[k];for(const me in J){const ve=J[me];for(const $ in ve){const B=ve[$];for(const H in B)_(B[H].object),delete B[H];delete ve[$]}}delete s[k]}}function N(k){if(s[k.id]===void 0)return;const J=s[k.id];for(const me in J){const ve=J[me];for(const $ in ve){const B=ve[$];for(const H in B)_(B[H].object),delete B[H];delete ve[$]}}delete s[k.id]}function z(k){for(const J in s){const me=s[J];for(const ve in me){const $=me[ve];if($[k.id]===void 0)continue;const B=$[k.id];for(const H in B)_(B[H].object),delete B[H];delete $[k.id]}}}function T(k){for(const J in s){const me=s[J],ve=k.isInstancedMesh===!0?k.id:0,$=me[ve];if($!==void 0){for(const B in $){const H=$[B];for(const ee in H)_(H[ee].object),delete H[ee];delete $[B]}delete me[ve],Object.keys(me).length===0&&delete s[J]}}}function O(){W(),f=!0,c!==l&&(c=l,p(c.object))}function W(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:W,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:T,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:D}}function m2(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,_){_!==0&&(r.drawArraysInstanced(s,m,p,_),i.update(p,s,_))}function d(m,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,_);let v=0;for(let S=0;S<_;S++)v+=p[S];i.update(v,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function g2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Pi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const T=z===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==pi&&s.convert(z)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Zi&&!T)}function m(z){if(z==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(it("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&v===!1&&it("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),P=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),N=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:C,maxSamples:I,samples:N}}function _2(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Gr,d=new st,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||s!==0||l;return l=v,s=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,v){i=_(g,v,0)},this.setState=function(g,v,S){const b=g.clippingPlanes,w=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!l||b===null||b.length===0||c&&!M)c?_(null):p();else{const D=c?0:s,P=D*4;let C=x.clippingState||null;m.value=C,C=_(b,v,P,S);for(let I=0;I!==P;++I)C[I]=i[I];x.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(g,v,S,b){const w=g!==null?g.length:0;let M=null;if(w!==0){if(M=m.value,b!==!0||M===null){const x=S+w*4,D=v.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<x)&&(M=new Float32Array(x));for(let P=0,C=S;P!==w;++P,C+=4)f.copy(g[P]).applyMatrix4(D,d),f.normal.toArray(M,C),M[C+3]=f.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,M}}const pr=4,Cv=[.125,.215,.35,.446,.526,.582],Wr=20,v2=256,sl=new Hp,Dv=new ft;let yd=null,Md=0,Ed=0,bd=!1;const x2=new Q;class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=x2}=c;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=bd,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Kr||e.mapping===Js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Da,format:Pi,colorSpace:Su,depthBuffer:!1},l=Lv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lv(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=S2(c)),this._blurMaterial=M2(c,e,i),this._ggxMaterial=y2(c,e,i)}return l}_compileMaterial(e){const i=new Un(new qn,e);this._renderer.compile(i,sl)}_sceneToCubeUV(e,i,s,l,c){const m=new bi(90,1,i,s),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(Dv),g.toneMapping=Ki,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new ro,new kr({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,M=w.material;let x=!1;const D=e.background;D?D.isColor&&(M.color.copy(D),e.background=null,x=!0):(M.color.copy(Dv),x=!0);for(let P=0;P<6;P++){const C=P%3;C===0?(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+_[P],c.y,c.z)):C===1?(m.up.set(0,0,p[P]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+_[P],c.z)):(m.up.set(0,p[P],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+_[P]));const I=this._cubeSize;qs(l,C*I,P>2?I:0,I,I),g.setRenderTarget(l),x&&g.render(w,m),g.render(e,m)}g.toneMapping=S,g.autoClear=v,e.background=D}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Kr||e.mapping===Js;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;qs(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,sl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),v=0+p*1.25,S=g*v,{_lodMax:b}=this,w=this._sizeLods[s],M=3*w*(s>b-pr?s-b+pr:0),x=4*(this._cubeSize-w);m.envMap.value=e.texture,m.roughness.value=S,m.mipInt.value=b-i,qs(c,M,x,3*w,2*w),l.setRenderTarget(c),l.render(d,sl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,qs(e,M,x,3*w,2*w),l.setRenderTarget(e),l.render(d,sl)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Tt("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const v=p.uniforms,S=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),w=c/b,M=isFinite(c)?1+Math.floor(_*w):Wr;M>Wr&&it(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Wr}`);const x=[];let D=0;for(let z=0;z<Wr;++z){const T=z/w,O=Math.exp(-T*T/2);x.push(O),z===0?D+=O:z<M&&(D+=2*O)}for(let z=0;z<x.length;z++)x[z]=x[z]/D;v.envMap.value=e.texture,v.samples.value=M,v.weights.value=x,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-s;const C=this._sizeLods[l],I=3*C*(l>P-pr?l-P+pr:0),N=4*(this._cubeSize-C);qs(i,I,N,3*C,2*C),m.setRenderTarget(i),m.render(g,sl)}}function S2(r){const e=[],i=[],s=[];let l=r;const c=r-pr+1+Cv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);e.push(d);let m=1/d;f>r-pr?m=Cv[f-r+pr-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),_=-p,g=1+p,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,b=6,w=3,M=2,x=1,D=new Float32Array(w*b*S),P=new Float32Array(M*b*S),C=new Float32Array(x*b*S);for(let N=0;N<S;N++){const z=N%3*2/3-1,T=N>2?0:-1,O=[z,T,0,z+2/3,T,0,z+2/3,T+1,0,z,T,0,z+2/3,T+1,0,z,T+1,0];D.set(O,w*b*N),P.set(v,M*b*N);const W=[N,N,N,N,N,N];C.set(W,x*b*N)}const I=new qn;I.setAttribute("position",new Ii(D,w)),I.setAttribute("uv",new Ii(P,M)),I.setAttribute("faceIndex",new Ii(C,x)),s.push(new Un(I,null)),l>pr&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function Lv(r,e,i){const s=new Qi(r,e,i);return s.texture.mapping=Cu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function qs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function y2(r,e,i){return new ea({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function M2(r,e,i){const s=new Float32Array(Wr),l=new Q(0,1,0);return new ea({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Nv(){return new ea({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

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
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Ov(){return new ea({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ra,depthTest:!1,depthWrite:!1})}function Uu(){return`

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
	`}class tS extends Qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ro(5,5,5),c=new ea({name:"CubemapFromEquirect",uniforms:eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Ra});c.uniforms.tEquirect.value=i;const f=new Un(l,c),d=i.minFilter;return i.minFilter===Yr&&(i.minFilter=Bn),new RT(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function E2(r){let e=new WeakMap,i=new WeakMap,s=null;function l(v,S=!1){return v==null?null:S?f(v):c(v)}function c(v){if(v&&v.isTexture){const S=v.mapping;if(S===qh||S===Yh)if(e.has(v)){const b=e.get(v).texture;return d(b,v.mapping)}else{const b=v.image;if(b&&b.height>0){const w=new tS(b.height);return w.fromEquirectangularTexture(r,v),e.set(v,w),v.addEventListener("dispose",p),d(w.texture,v.mapping)}else return null}}return v}function f(v){if(v&&v.isTexture){const S=v.mapping,b=S===qh||S===Yh,w=S===Kr||S===Js;if(b||w){let M=i.get(v);const x=M!==void 0?M.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==x)return s===null&&(s=new Uv(r)),M=b?s.fromEquirectangular(v,M):s.fromCubemap(v,M),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),M.texture;if(M!==void 0)return M.texture;{const D=v.image;return b&&D&&D.height>0||w&&D&&m(D)?(s===null&&(s=new Uv(r)),M=b?s.fromEquirectangular(v):s.fromCubemap(v),M.texture.pmremVersion=v.pmremVersion,i.set(v,M),v.addEventListener("dispose",_),M.texture):null}}}return v}function d(v,S){return S===qh?v.mapping=Kr:S===Yh&&(v.mapping=Js),v}function m(v){let S=0;const b=6;for(let w=0;w<b;w++)v[w]!==void 0&&S++;return S===b}function p(v){const S=v.target;S.removeEventListener("dispose",p);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function _(v){const S=v.target;S.removeEventListener("dispose",_);const b=i.get(S);b!==void 0&&(i.delete(S),b.dispose())}function g(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:g}}function b2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&js("WebGLRenderer: "+s+" extension not supported."),l}}}function T2(r,e,i,s){const l={},c=new WeakMap;function f(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const b in v.attributes)e.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(e.remove(S),c.delete(v)),s.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(g,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function m(g){const v=g.attributes;for(const S in v)e.update(v[S],r.ARRAY_BUFFER)}function p(g){const v=[],S=g.index,b=g.attributes.position;let w=0;if(b===void 0)return;if(S!==null){const D=S.array;w=S.version;for(let P=0,C=D.length;P<C;P+=3){const I=D[P+0],N=D[P+1],z=D[P+2];v.push(I,N,N,z,z,I)}}else{const D=b.array;w=b.version;for(let P=0,C=D.length/3-1;P<C;P+=3){const I=P+0,N=P+1,z=P+2;v.push(I,N,N,z,z,I)}}const M=new(b.count>=65535?Wx:Xx)(v,1);M.version=w;const x=c.get(g);x&&e.remove(x),c.set(g,M)}function _(g){const v=c.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function A2(r,e,i){let s;function l(g){s=g}let c,f;function d(g){c=g.type,f=g.bytesPerElement}function m(g,v){r.drawElements(s,v,c,g*f),i.update(v,s,1)}function p(g,v,S){S!==0&&(r.drawElementsInstanced(s,v,c,g*f,S),i.update(v,s,S))}function _(g,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,v,0,c,g,0,S);let w=0;for(let M=0;M<S;M++)w+=v[M];i.update(w,s,1)}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_}function R2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Tt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function w2(r,e,i){const s=new WeakMap,l=new en;function c(f,d,m){const p=f.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let v=s.get(d);if(v===void 0||v.count!==g){let W=function(){T.dispose(),s.delete(d),d.removeEventListener("dispose",W)};var S=W;v!==void 0&&v.texture.dispose();const b=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let C=0;b===!0&&(C=1),w===!0&&(C=2),M===!0&&(C=3);let I=d.attributes.position.count*C,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const z=new Float32Array(I*N*4*g),T=new Gx(z,I,N,g);T.type=Zi,T.needsUpdate=!0;const O=C*4;for(let k=0;k<g;k++){const J=x[k],me=D[k],ve=P[k],$=I*N*4*k;for(let B=0;B<J.count;B++){const H=B*O;b===!0&&(l.fromBufferAttribute(J,B),z[$+H+0]=l.x,z[$+H+1]=l.y,z[$+H+2]=l.z,z[$+H+3]=0),w===!0&&(l.fromBufferAttribute(me,B),z[$+H+4]=l.x,z[$+H+5]=l.y,z[$+H+6]=l.z,z[$+H+7]=0),M===!0&&(l.fromBufferAttribute(ve,B),z[$+H+8]=l.x,z[$+H+9]=l.y,z[$+H+10]=l.z,z[$+H+11]=ve.itemSize===4?l.w:1)}}v={count:g,texture:T,size:new mt(I,N)},s.set(d,v),d.addEventListener("dispose",W)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const w=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",w),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:c}}function C2(r,e,i,s,l){let c=new WeakMap;function f(p){const _=l.render.frame,g=p.geometry,v=e.get(p,g);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==_&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,_))),p.isSkinnedMesh){const S=p.skeleton;c.get(S)!==_&&(S.update(),c.set(S,_))}return v}function d(){c=new WeakMap}function m(p){const _=p.target;_.removeEventListener("dispose",m),s.releaseStatesOfObject(_),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:d}}const D2={[Tx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[wx]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Ux]:"NEUTRAL_TONE_MAPPING",[Cx]:"CUSTOM_TONE_MAPPING"};function U2(r,e,i,s,l,c){const f=new Qi(e,i,{type:r,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new $s(e,i):void 0}),d=new Qi(e,i,{type:Da,depthBuffer:!1,stencilBuffer:!1}),m=new qn;m.setAttribute("position",new Hn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Hn([0,2,0,0,2,0],2));const p=new pT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new Un(m,p),g=new Hp(-1,1,1,-1,0,1);let v=null,S=null,b=!1,w,M=null,x=[],D=!1;this.setSize=function(P,C){f.setSize(P,C),d.setSize(P,C);for(let I=0;I<x.length;I++){const N=x[I];N.setSize&&N.setSize(P,C)}},this.setEffects=function(P){x=P,D=x.length>0&&x[0].isRenderPass===!0;const C=f.width,I=f.height;for(let N=0;N<x.length;N++){const z=x[N];z.setSize&&z.setSize(C,I)}},this.begin=function(P,C){if(b||P.toneMapping===Ki&&x.length===0)return!1;if(M=C,C!==null){const I=C.width,N=C.height;(f.width!==I||f.height!==N)&&this.setSize(I,N)}return D===!1&&P.setRenderTarget(f),w=P.toneMapping,P.toneMapping=Ki,!0},this.hasRenderPass=function(){return D},this.end=function(P,C){P.toneMapping=w,b=!0;let I=f,N=d;for(let z=0;z<x.length;z++){const T=x[z];if(T.enabled!==!1&&(T.render(P,N,I,C),T.needsSwap!==!1)){const O=I;I=N,N=O}}if(v!==P.outputColorSpace||S!==P.toneMapping){v=P.outputColorSpace,S=P.toneMapping,p.defines={},bt.getTransfer(v)===Ft&&(p.defines.SRGB_TRANSFER="");const z=D2[S];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(M),P.render(_,g),M=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){f.depthTexture&&f.depthTexture.dispose(),f.dispose(),d.dispose(),m.dispose(),p.dispose()}}const nS=new Fn,_p=new $s(1,1),iS=new Gx,aS=new B1,rS=new Zx,Pv=[],Iv=[],zv=new Float32Array(16),Bv=new Float32Array(9),Fv=new Float32Array(4);function so(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=Pv[l];if(c===void 0&&(c=new Float32Array(l),Pv[l]=c),e!==0){s.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,r[f].toArray(c,d)}return c}function yn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function Mn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Lu(r,e){let i=Iv[e];i===void 0&&(i=new Int32Array(e),Iv[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function L2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function N2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2fv(this.addr,e),Mn(i,e)}}function O2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(yn(i,e))return;r.uniform3fv(this.addr,e),Mn(i,e)}}function P2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4fv(this.addr,e),Mn(i,e)}}function I2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;Fv.set(s),r.uniformMatrix2fv(this.addr,!1,Fv),Mn(i,s)}}function z2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;Bv.set(s),r.uniformMatrix3fv(this.addr,!1,Bv),Mn(i,s)}}function B2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(yn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mn(i,e)}else{if(yn(i,s))return;zv.set(s),r.uniformMatrix4fv(this.addr,!1,zv),Mn(i,s)}}function F2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function H2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2iv(this.addr,e),Mn(i,e)}}function G2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3iv(this.addr,e),Mn(i,e)}}function V2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4iv(this.addr,e),Mn(i,e)}}function k2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function X2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(yn(i,e))return;r.uniform2uiv(this.addr,e),Mn(i,e)}}function W2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(yn(i,e))return;r.uniform3uiv(this.addr,e),Mn(i,e)}}function q2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(yn(i,e))return;r.uniform4uiv(this.addr,e),Mn(i,e)}}function Y2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(_p.compareFunction=i.isReversedDepthBuffer()?Np:Lp,c=_p):c=nS,i.setTexture2D(e||c,l)}function Z2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||aS,l)}function j2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||rS,l)}function K2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||iS,l)}function Q2(r){switch(r){case 5126:return L2;case 35664:return N2;case 35665:return O2;case 35666:return P2;case 35674:return I2;case 35675:return z2;case 35676:return B2;case 5124:case 35670:return F2;case 35667:case 35671:return H2;case 35668:case 35672:return G2;case 35669:case 35673:return V2;case 5125:return k2;case 36294:return X2;case 36295:return W2;case 36296:return q2;case 35678:case 36198:case 36298:case 36306:case 35682:return Y2;case 35679:case 36299:case 36307:return Z2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return K2}}function J2(r,e){r.uniform1fv(this.addr,e)}function $2(r,e){const i=so(e,this.size,2);r.uniform2fv(this.addr,i)}function ew(r,e){const i=so(e,this.size,3);r.uniform3fv(this.addr,i)}function tw(r,e){const i=so(e,this.size,4);r.uniform4fv(this.addr,i)}function nw(r,e){const i=so(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function iw(r,e){const i=so(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function aw(r,e){const i=so(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function rw(r,e){r.uniform1iv(this.addr,e)}function sw(r,e){r.uniform2iv(this.addr,e)}function ow(r,e){r.uniform3iv(this.addr,e)}function lw(r,e){r.uniform4iv(this.addr,e)}function cw(r,e){r.uniform1uiv(this.addr,e)}function uw(r,e){r.uniform2uiv(this.addr,e)}function fw(r,e){r.uniform3uiv(this.addr,e)}function hw(r,e){r.uniform4uiv(this.addr,e)}function dw(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=_p:f=nS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||f,c[d])}function pw(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||aS,c[f])}function mw(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||rS,c[f])}function gw(r,e,i){const s=this.cache,l=e.length,c=Lu(i,l);yn(s,c)||(r.uniform1iv(this.addr,c),Mn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||iS,c[f])}function _w(r){switch(r){case 5126:return J2;case 35664:return $2;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return aw;case 5124:case 35670:return rw;case 35667:case 35671:return sw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return fw;case 36296:return hw;case 35678:case 36198:case 36298:case 36306:case 35682:return dw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}class vw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Q2(i.type)}}class xw{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_w(i.type)}}class Sw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function Hv(r,e){r.seq.push(e),r.map[e.id]=e}function yw(r,e,i){const s=r.name,l=s.length;for(Td.lastIndex=0;;){const c=Td.exec(s),f=Td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Hv(i,p===void 0?new vw(d,r,e):new xw(d,r,e));break}else{let g=i.map[d];g===void 0&&(g=new Sw(d),Hv(i,g)),i=g}}}class gu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=e.getActiveUniform(i,f),m=e.getUniformLocation(i,d.name);yw(d,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function Gv(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const Mw=37297;let Ew=0;function bw(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Vv=new st;function Tw(r){bt._getMatrix(Vv,bt.workingColorSpace,r);const e=`mat3( ${Vv.elements.map(i=>i.toFixed(4))} )`;switch(bt.getTransfer(r)){case yu:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return it("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function kv(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+bw(r.getShaderSource(e),d)}else return c}function Aw(r,e){const i=Tw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Rw={[Tx]:"Linear",[Ax]:"Reinhard",[Rx]:"Cineon",[wx]:"ACESFilmic",[Dx]:"AgX",[Ux]:"Neutral",[Cx]:"Custom"};function ww(r,e){const i=Rw[e];return i===void 0?(it("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const lu=new Q;function Cw(){bt.getLuminanceCoefficients(lu);const r=lu.x.toFixed(4),e=lu.y.toFixed(4),i=lu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function Uw(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function Lw(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:d}}return i}function cl(r){return r!==""}function Xv(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wv(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nw=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(r){return r.replace(Nw,Pw)}const Ow=new Map;function Pw(r,e){let i=ht[e];if(i===void 0){const s=Ow.get(e);if(s!==void 0)i=ht[s],it('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vp(i)}const Iw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(Iw,zw)}function zw(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Yv(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Bw={[fu]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function Fw(r){return Bw[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Hw={[Kr]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[Cu]:"ENVMAP_TYPE_CUBE_UV"};function Gw(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Hw[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Vw={[Js]:"ENVMAP_MODE_REFRACTION"};function kw(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Vw[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Xw={[wu]:"ENVMAP_BLENDING_MULTIPLY",[n1]:"ENVMAP_BLENDING_MIX",[i1]:"ENVMAP_BLENDING_ADD"};function Ww(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Xw[r.combine]||"ENVMAP_BLENDING_NONE"}function qw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function Yw(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=Fw(i),p=Gw(i),_=kw(i),g=Ww(i),v=qw(i),S=Dw(i),b=Uw(c),w=l.createProgram();let M,x,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),x.length>0&&(x+=`
`)):(M=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),x=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ki?"#define TONE_MAPPING":"",i.toneMapping!==Ki?ht.tonemapping_pars_fragment:"",i.toneMapping!==Ki?ww("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Aw("linearToOutputTexel",i.outputColorSpace),Cw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),f=vp(f),f=Xv(f,i),f=Wv(f,i),d=vp(d),d=Xv(d,i),d=Wv(d,i),f=qv(f),d=qv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",i.glslVersion===Q_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Q_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=D+M+f,C=D+x+d,I=Gv(l,l.VERTEX_SHADER,P),N=Gv(l,l.FRAGMENT_SHADER,C);l.attachShader(w,I),l.attachShader(w,N),i.index0AttributeName!==void 0?l.bindAttribLocation(w,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function z(k){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(w)||"",me=l.getShaderInfoLog(I)||"",ve=l.getShaderInfoLog(N)||"",$=J.trim(),B=me.trim(),H=ve.trim();let ee=!0,pe=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(ee=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,w,I,N);else{const Te=kv(l,I,"vertex"),L=kv(l,N,"fragment");Tt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+$+`
`+Te+`
`+L)}else $!==""?it("WebGLProgram: Program Info Log:",$):(B===""||H==="")&&(pe=!1);pe&&(k.diagnostics={runnable:ee,programLog:$,vertexShader:{log:B,prefix:M},fragmentShader:{log:H,prefix:x}})}l.deleteShader(I),l.deleteShader(N),T=new gu(l,w),O=Lw(l,w)}let T;this.getUniforms=function(){return T===void 0&&z(this),T};let O;this.getAttributes=function(){return O===void 0&&z(this),O};let W=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=l.getProgramParameter(w,Mw)),W},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=N,this}let Zw=0;class jw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new Kw(e),i.set(e,s)),s}}class Kw{constructor(e){this.id=Zw++,this.code=e,this.usedTimes=0}}function Qw(r){return r===Qr||r===vu||r===xu}function Jw(r,e,i,s,l,c){const f=new Vx,d=new jw,m=new Set,p=[],_=new Map,g=s.logarithmicDepthBuffer;let v=s.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function w(T,O,W,k,J,me){const ve=k.fog,$=J.geometry,B=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,H=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||B,H),pe=ee&&ee.mapping===Cu?ee.image.height:null,Te=S[T.type];T.precision!==null&&(v=s.getMaxPrecision(T.precision),v!==T.precision&&it("WebGLProgram.getParameters:",T.precision,"not supported, using",v,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Z=L!==void 0?L.length:0;let Ae=0;$.morphAttributes.position!==void 0&&(Ae=1),$.morphAttributes.normal!==void 0&&(Ae=2),$.morphAttributes.color!==void 0&&(Ae=3);let Re,Ie,re,ye;if(Te){const We=qi[Te];Re=We.vertexShader,Ie=We.fragmentShader}else{Re=T.vertexShader,Ie=T.fragmentShader;const We=d.getVertexShaderStage(T),Kt=d.getFragmentShaderStage(T);d.update(T,We,Kt),re=We.id,ye=Kt.id}const Ee=r.getRenderTarget(),Me=r.state.buffers.depth.getReversed(),Xe=J.isInstancedMesh===!0,Pe=J.isBatchedMesh===!0,Ct=!!T.map,ot=!!T.matcap,gt=!!ee,dt=!!T.aoMap,_t=!!T.lightMap,tn=!!T.bumpMap&&T.wireframe===!1,nn=!!T.normalMap,an=!!T.displacementMap,ln=!!T.emissiveMap,qt=!!T.metalnessMap,rn=!!T.roughnessMap,Y=T.anisotropy>0,Ht=T.clearcoat>0,Dt=T.dispersion>0,U=T.iridescence>0,E=T.sheen>0,K=T.transmission>0,se=Y&&!!T.anisotropyMap,he=Ht&&!!T.clearcoatMap,we=Ht&&!!T.clearcoatNormalMap,Le=Ht&&!!T.clearcoatRoughnessMap,fe=U&&!!T.iridescenceMap,de=U&&!!T.iridescenceThicknessMap,De=E&&!!T.sheenColorMap,Ge=E&&!!T.sheenRoughnessMap,ze=!!T.specularMap,Ne=!!T.specularColorMap,Je=!!T.specularIntensityMap,$e=K&&!!T.transmissionMap,at=K&&!!T.thicknessMap,X=!!T.gradientMap,Ce=!!T.alphaMap,_e=T.alphaTest>0,Ue=!!T.alphaHash,He=!!T.extensions;let be=Ki;T.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(be=r.toneMapping);const je={shaderID:Te,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:Ie,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:ye,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:v,batching:Pe,batchingColor:Pe&&J._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&J.instanceColor!==null,instancingMorph:Xe&&J.morphTexture!==null,outputColorSpace:Ee===null?r.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:bt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ct,matcap:ot,envMap:gt,envMapMode:gt&&ee.mapping,envMapCubeUVHeight:pe,aoMap:dt,lightMap:_t,bumpMap:tn,normalMap:nn,displacementMap:an,emissiveMap:ln,normalMapObjectSpace:nn&&T.normalMapType===s1,normalMapTangentSpace:nn&&T.normalMapType===gl,packedNormalMap:nn&&T.normalMapType===gl&&Qw(T.normalMap.format),metalnessMap:qt,roughnessMap:rn,anisotropy:Y,anisotropyMap:se,clearcoat:Ht,clearcoatMap:he,clearcoatNormalMap:we,clearcoatRoughnessMap:Le,dispersion:Dt,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:de,sheen:E,sheenColorMap:De,sheenRoughnessMap:Ge,specularMap:ze,specularColorMap:Ne,specularIntensityMap:Je,transmission:K,transmissionMap:$e,thicknessMap:at,gradientMap:X,opaque:T.transparent===!1&&T.blending===Zs&&T.alphaToCoverage===!1,alphaMap:Ce,alphaTest:_e,alphaHash:Ue,combine:T.combine,mapUv:Ct&&b(T.map.channel),aoMapUv:dt&&b(T.aoMap.channel),lightMapUv:_t&&b(T.lightMap.channel),bumpMapUv:tn&&b(T.bumpMap.channel),normalMapUv:nn&&b(T.normalMap.channel),displacementMapUv:an&&b(T.displacementMap.channel),emissiveMapUv:ln&&b(T.emissiveMap.channel),metalnessMapUv:qt&&b(T.metalnessMap.channel),roughnessMapUv:rn&&b(T.roughnessMap.channel),anisotropyMapUv:se&&b(T.anisotropyMap.channel),clearcoatMapUv:he&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:we&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:de&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:De&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&b(T.sheenRoughnessMap.channel),specularMapUv:ze&&b(T.specularMap.channel),specularColorMapUv:Ne&&b(T.specularColorMap.channel),specularIntensityMapUv:Je&&b(T.specularIntensityMap.channel),transmissionMapUv:$e&&b(T.transmissionMap.channel),thicknessMapUv:at&&b(T.thicknessMap.channel),alphaMapUv:Ce&&b(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(nn||Y),vertexNormals:!!$.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(Ct||Ce),fog:!!ve,useFog:T.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||$.attributes.normal===void 0&&nn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Me,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ae,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:me.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&W.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,decodeVideoTexture:Ct&&T.map.isVideoTexture===!0&&bt.getTransfer(T.map.colorSpace)===Ft,decodeVideoTextureEmissive:ln&&T.emissiveMap.isVideoTexture===!0&&bt.getTransfer(T.emissiveMap.colorSpace)===Ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Yi,flipSided:T.side===Wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function M(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const W in T.defines)O.push(W),O.push(T.defines[W]);return T.isRawShaderMaterial===!1&&(x(O,T),D(O,T),O.push(r.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function x(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function D(T,O){f.disableAll(),O.instancing&&f.enable(0),O.instancingColor&&f.enable(1),O.instancingMorph&&f.enable(2),O.matcap&&f.enable(3),O.envMap&&f.enable(4),O.normalMapObjectSpace&&f.enable(5),O.normalMapTangentSpace&&f.enable(6),O.clearcoat&&f.enable(7),O.iridescence&&f.enable(8),O.alphaTest&&f.enable(9),O.vertexColors&&f.enable(10),O.vertexAlphas&&f.enable(11),O.vertexUv1s&&f.enable(12),O.vertexUv2s&&f.enable(13),O.vertexUv3s&&f.enable(14),O.vertexTangents&&f.enable(15),O.anisotropy&&f.enable(16),O.alphaHash&&f.enable(17),O.batching&&f.enable(18),O.dispersion&&f.enable(19),O.batchingColor&&f.enable(20),O.gradientMap&&f.enable(21),O.packedNormalMap&&f.enable(22),O.vertexNormals&&f.enable(23),T.push(f.mask),f.disableAll(),O.fog&&f.enable(0),O.useFog&&f.enable(1),O.flatShading&&f.enable(2),O.logarithmicDepthBuffer&&f.enable(3),O.reversedDepthBuffer&&f.enable(4),O.skinning&&f.enable(5),O.morphTargets&&f.enable(6),O.morphNormals&&f.enable(7),O.morphColors&&f.enable(8),O.premultipliedAlpha&&f.enable(9),O.shadowMapEnabled&&f.enable(10),O.doubleSided&&f.enable(11),O.flipSided&&f.enable(12),O.useDepthPacking&&f.enable(13),O.dithering&&f.enable(14),O.transmission&&f.enable(15),O.sheen&&f.enable(16),O.opaque&&f.enable(17),O.pointsUvs&&f.enable(18),O.decodeVideoTexture&&f.enable(19),O.decodeVideoTextureEmissive&&f.enable(20),O.alphaToCoverage&&f.enable(21),O.numLightProbeGrids>0&&f.enable(22),O.hasPositionAttribute&&f.enable(23),T.push(f.mask)}function P(T){const O=S[T.type];let W;if(O){const k=qi[O];W=fT.clone(k.uniforms)}else W=T.uniforms;return W}function C(T,O){let W=_.get(O);return W!==void 0?++W.usedTimes:(W=new Yw(r,O,T,l),p.push(W),_.set(O,W)),W}function I(T){if(--T.usedTimes===0){const O=p.indexOf(T);p[O]=p[p.length-1],p.pop(),_.delete(T.cacheKey),T.destroy()}}function N(T){d.remove(T)}function z(){d.dispose()}return{getParameters:w,getProgramCacheKey:M,getUniforms:P,acquireProgram:C,releaseProgram:I,releaseShaderCache:N,programs:p,dispose:z}}function $w(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function eC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Zv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jv(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(v){let S=0;return v.isInstancedMesh&&(S+=2),v.isSkinnedMesh&&(S+=1),S}function d(v,S,b,w,M,x){let D=r[e];return D===void 0?(D={id:v.id,object:v,geometry:S,material:b,materialVariant:f(v),groupOrder:w,renderOrder:v.renderOrder,z:M,group:x},r[e]=D):(D.id=v.id,D.object=v,D.geometry=S,D.material=b,D.materialVariant=f(v),D.groupOrder=w,D.renderOrder=v.renderOrder,D.z=M,D.group=x),e++,D}function m(v,S,b,w,M,x){const D=d(v,S,b,w,M,x);b.transmission>0?s.push(D):b.transparent===!0?l.push(D):i.push(D)}function p(v,S,b,w,M,x){const D=d(v,S,b,w,M,x);b.transmission>0?s.unshift(D):b.transparent===!0?l.unshift(D):i.unshift(D)}function _(v,S,b){i.length>1&&i.sort(v||eC),s.length>1&&s.sort(S||Zv),l.length>1&&l.sort(S||Zv),b&&(i.reverse(),s.reverse(),l.reverse())}function g(){for(let v=e,S=r.length;v<S;v++){const b=r[v];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:g,sort:_}}function tC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new jv,r.set(s,[f])):l>=c.length?(f=new jv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function nC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Q,color:new ft};break;case"SpotLight":i={position:new Q,direction:new Q,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Q,color:new ft,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Q,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":i={color:new ft,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=i,i}}}function iC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let aC=0;function rC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sC(r){const e=new nC,i=iC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const l=new Q,c=new jt,f=new jt;function d(p){let _=0,g=0,v=0;for(let O=0;O<9;O++)s.probe[O].set(0,0,0);let S=0,b=0,w=0,M=0,x=0,D=0,P=0,C=0,I=0,N=0,z=0;p.sort(rC);for(let O=0,W=p.length;O<W;O++){const k=p[O],J=k.color,me=k.intensity,ve=k.distance;let $=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Qr?$=k.shadow.map.texture:$=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)_+=J.r*me,g+=J.g*me,v+=J.b*me;else if(k.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(k.sh.coefficients[B],me);z++}else if(k.isDirectionalLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.directionalShadow[S]=ee,s.directionalShadowMap[S]=$,s.directionalShadowMatrix[S]=k.shadow.matrix,D++}s.directional[S]=B,S++}else if(k.isSpotLight){const B=e.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(J).multiplyScalar(me),B.distance=ve,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,s.spot[w]=B;const H=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,H.updateMatrices(k),k.castShadow&&N++),s.spotLightMatrix[w]=H.matrix,k.castShadow){const ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,s.spotShadow[w]=ee,s.spotShadowMap[w]=$,C++}w++}else if(k.isRectAreaLight){const B=e.get(k);B.color.copy(J).multiplyScalar(me),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=B,M++}else if(k.isPointLight){const B=e.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const H=k.shadow,ee=i.get(k);ee.shadowIntensity=H.intensity,ee.shadowBias=H.bias,ee.shadowNormalBias=H.normalBias,ee.shadowRadius=H.radius,ee.shadowMapSize=H.mapSize,ee.shadowCameraNear=H.camera.near,ee.shadowCameraFar=H.camera.far,s.pointShadow[b]=ee,s.pointShadowMap[b]=$,s.pointShadowMatrix[b]=k.shadow.matrix,P++}s.point[b]=B,b++}else if(k.isHemisphereLight){const B=e.get(k);B.skyColor.copy(k.color).multiplyScalar(me),B.groundColor.copy(k.groundColor).multiplyScalar(me),s.hemi[x]=B,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Fe.LTC_FLOAT_1,s.rectAreaLTC2=Fe.LTC_FLOAT_2):(s.rectAreaLTC1=Fe.LTC_HALF_1,s.rectAreaLTC2=Fe.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=g,s.ambient[2]=v;const T=s.hash;(T.directionalLength!==S||T.pointLength!==b||T.spotLength!==w||T.rectAreaLength!==M||T.hemiLength!==x||T.numDirectionalShadows!==D||T.numPointShadows!==P||T.numSpotShadows!==C||T.numSpotMaps!==I||T.numLightProbes!==z)&&(s.directional.length=S,s.spot.length=w,s.rectArea.length=M,s.point.length=b,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+I-N,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=z,T.directionalLength=S,T.pointLength=b,T.spotLength=w,T.rectAreaLength=M,T.hemiLength=x,T.numDirectionalShadows=D,T.numPointShadows=P,T.numSpotShadows=C,T.numSpotMaps=I,T.numLightProbes=z,s.version=aC++)}function m(p,_){let g=0,v=0,S=0,b=0,w=0;const M=_.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const P=p[x];if(P.isDirectionalLight){const C=s.directional[g];C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(P.isSpotLight){const C=s.spot[S];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(P.isRectAreaLight){const C=s.rectArea[b];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(M),f.identity(),c.copy(P.matrixWorld),c.premultiply(M),f.extractRotation(c),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(f),C.halfHeight.applyMatrix4(f),b++}else if(P.isPointLight){const C=s.point[v];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(M),v++}else if(P.isHemisphereLight){const C=s.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(M),w++}}}return{setup:d,setupView:m,state:s}}function Kv(r){const e=new sC(r),i=[],s=[],l=[];function c(v){g.camera=v,i.length=0,s.length=0,l.length=0}function f(v){i.push(v)}function d(v){s.push(v)}function m(v){l.push(v)}function p(){e.setup(i)}function _(v){e.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:g,setupLights:p,setupLightsView:_,pushLight:f,pushShadow:d,pushLightProbeGrid:m}}function oC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new Kv(r),e.set(l,[d])):c>=f.length?(d=new Kv(r),f.push(d)):d=f[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const lC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,uC=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],fC=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Qv=new jt,ol=new Q,Ad=new Q;function hC(r,e,i){let s=new zp;const l=new mt,c=new mt,f=new en,d=new vT,m=new xT,p={},_=i.maxTextureSize,g={[mr]:Wn,[Wn]:mr,[Yi]:Yi},v=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:lC,fragmentShader:cC}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new qn;b.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Un(b,v),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let x=this.type;this.render=function(N,z,T){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||N.length===0)return;this.type===zb&&(it("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fu);const O=r.getRenderTarget(),W=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),J=r.state;J.setBlending(Ra),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const me=x!==this.type;me&&z.traverse(function(ve){ve.material&&(Array.isArray(ve.material)?ve.material.forEach($=>$.needsUpdate=!0):ve.material.needsUpdate=!0)});for(let ve=0,$=N.length;ve<$;ve++){const B=N[ve],H=B.shadow;if(H===void 0){it("WebGLShadowMap:",B,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ee=H.getFrameExtents();l.multiply(ee),c.copy(H.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ee.x),l.x=c.x*ee.x,H.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ee.y),l.y=c.y*ee.y,H.mapSize.y=c.y));const pe=r.state.buffers.depth.getReversed();if(H.camera._reversedDepth=pe,H.map===null||me===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ll){if(B.isPointLight){it("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Qi(l.x,l.y,{format:Qr,type:Da,minFilter:Bn,magFilter:Bn,generateMipmaps:!1}),H.map.texture.name=B.name+".shadowMap",H.map.depthTexture=new $s(l.x,l.y,Zi),H.map.depthTexture.name=B.name+".shadowMapDepth",H.map.depthTexture.format=Ua,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else B.isPointLight?(H.map=new tS(l.x),H.map.depthTexture=new aT(l.x,Ji)):(H.map=new Qi(l.x,l.y),H.map.depthTexture=new $s(l.x,l.y,Ji)),H.map.depthTexture.name=B.name+".shadowMap",H.map.depthTexture.format=Ua,this.type===fu?(H.map.depthTexture.compareFunction=pe?Np:Lp,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn);H.camera.updateProjectionMatrix()}const Te=H.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<Te;L++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,L),r.clear();else{L===0&&(r.setRenderTarget(H.map),r.clear());const Z=H.getViewport(L);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),J.viewport(f)}if(B.isPointLight){const Z=H.camera,Ae=H.matrix,Re=B.distance||Z.far;Re!==Z.far&&(Z.far=Re,Z.updateProjectionMatrix()),ol.setFromMatrixPosition(B.matrixWorld),Z.position.copy(ol),Ad.copy(Z.position),Ad.add(uC[L]),Z.up.copy(fC[L]),Z.lookAt(Ad),Z.updateMatrixWorld(),Ae.makeTranslation(-ol.x,-ol.y,-ol.z),Qv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Qv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(B);s=H.getFrustum(),C(z,T,H.camera,B,this.type)}H.isPointLightShadow!==!0&&this.type===ll&&D(H,T),H.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(O,W,k)};function D(N,z){const T=e.update(w);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,S.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Qi(l.x,l.y,{format:Qr,type:Da})),v.uniforms.shadow_pass.value=N.map.depthTexture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,r.setRenderTarget(N.mapPass),r.clear(),r.renderBufferDirect(z,null,T,v,w,null),S.uniforms.shadow_pass.value=N.mapPass.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,r.setRenderTarget(N.map),r.clear(),r.renderBufferDirect(z,null,T,S,w,null)}function P(N,z,T,O){let W=null;const k=T.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)W=k;else if(W=T.isPointLight===!0?m:d,r.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const J=W.uuid,me=z.uuid;let ve=p[J];ve===void 0&&(ve={},p[J]=ve);let $=ve[me];$===void 0&&($=W.clone(),ve[me]=$,z.addEventListener("dispose",I)),W=$}if(W.visible=z.visible,W.wireframe=z.wireframe,O===ll?W.side=z.shadowSide!==null?z.shadowSide:z.side:W.side=z.shadowSide!==null?z.shadowSide:g[z.side],W.alphaMap=z.alphaMap,W.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,W.map=z.map,W.clipShadows=z.clipShadows,W.clippingPlanes=z.clippingPlanes,W.clipIntersection=z.clipIntersection,W.displacementMap=z.displacementMap,W.displacementScale=z.displacementScale,W.displacementBias=z.displacementBias,W.wireframeLinewidth=z.wireframeLinewidth,W.linewidth=z.linewidth,T.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const J=r.properties.get(W);J.light=T}return W}function C(N,z,T,O,W){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&W===ll)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,N.matrixWorld);const me=e.update(N),ve=N.material;if(Array.isArray(ve)){const $=me.groups;for(let B=0,H=$.length;B<H;B++){const ee=$[B],pe=ve[ee.materialIndex];if(pe&&pe.visible){const Te=P(N,pe,O,W);N.onBeforeShadow(r,N,z,T,me,Te,ee),r.renderBufferDirect(T,null,me,Te,N,ee),N.onAfterShadow(r,N,z,T,me,Te,ee)}}}else if(ve.visible){const $=P(N,ve,O,W);N.onBeforeShadow(r,N,z,T,me,$,null),r.renderBufferDirect(T,null,me,$,N,null),N.onAfterShadow(r,N,z,T,me,$,null)}}const J=N.children;for(let me=0,ve=J.length;me<ve;me++)C(J[me],z,T,O,W)}function I(N){N.target.removeEventListener("dispose",I);for(const T in p){const O=p[T],W=N.target.uuid;W in O&&(O[W].dispose(),delete O[W])}}}function dC(r,e){function i(){let X=!1;const Ce=new en;let _e=null;const Ue=new en(0,0,0,0);return{setMask:function(He){_e!==He&&!X&&(r.colorMask(He,He,He,He),_e=He)},setLocked:function(He){X=He},setClear:function(He,be,je,We,Kt){Kt===!0&&(He*=We,be*=We,je*=We),Ce.set(He,be,je,We),Ue.equals(Ce)===!1&&(r.clearColor(He,be,je,We),Ue.copy(Ce))},reset:function(){X=!1,_e=null,Ue.set(-1,0,0,0)}}}function s(){let X=!1,Ce=!1,_e=null,Ue=null,He=null;return{setReversed:function(be){if(Ce!==be){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),Ce=be;const We=He;He=null,this.setClear(We)}},getReversed:function(){return Ce},setTest:function(be){be?Ee(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(be){_e!==be&&!X&&(r.depthMask(be),_e=be)},setFunc:function(be){if(Ce&&(be=g1[be]),Ue!==be){switch(be){case Ud:r.depthFunc(r.NEVER);break;case Ld:r.depthFunc(r.ALWAYS);break;case Nd:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case Od:r.depthFunc(r.EQUAL);break;case Pd:r.depthFunc(r.GEQUAL);break;case Id:r.depthFunc(r.GREATER);break;case zd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ue=be}},setLocked:function(be){X=be},setClear:function(be){He!==be&&(He=be,Ce&&(be=1-be),r.clearDepth(be))},reset:function(){X=!1,_e=null,Ue=null,He=null,Ce=!1}}}function l(){let X=!1,Ce=null,_e=null,Ue=null,He=null,be=null,je=null,We=null,Kt=null;return{setTest:function(Nt){X||(Nt?Ee(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(Nt){Ce!==Nt&&!X&&(r.stencilMask(Nt),Ce=Nt)},setFunc:function(Nt,ti,ni){(_e!==Nt||Ue!==ti||He!==ni)&&(r.stencilFunc(Nt,ti,ni),_e=Nt,Ue=ti,He=ni)},setOp:function(Nt,ti,ni){(be!==Nt||je!==ti||We!==ni)&&(r.stencilOp(Nt,ti,ni),be=Nt,je=ti,We=ni)},setLocked:function(Nt){X=Nt},setClear:function(Nt){Kt!==Nt&&(r.clearStencil(Nt),Kt=Nt)},reset:function(){X=!1,Ce=null,_e=null,Ue=null,He=null,be=null,je=null,We=null,Kt=null}}}const c=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},v={},S=new WeakMap,b=[],w=null,M=!1,x=null,D=null,P=null,C=null,I=null,N=null,z=null,T=new ft(0,0,0),O=0,W=!1,k=null,J=null,me=null,ve=null,$=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const pe=r.getParameter(r.VERSION);pe.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(pe)[1]),H=ee>=1):pe.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),H=ee>=2);let Te=null,L={};const Z=r.getParameter(r.SCISSOR_BOX),Ae=r.getParameter(r.VIEWPORT),Re=new en().fromArray(Z),Ie=new en().fromArray(Ae);function re(X,Ce,_e,Ue){const He=new Uint8Array(4),be=r.createTexture();r.bindTexture(X,be),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<_e;je++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Ce,0,r.RGBA,1,1,Ue,0,r.RGBA,r.UNSIGNED_BYTE,He):r.texImage2D(Ce+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,He);return be}const ye={};ye[r.TEXTURE_2D]=re(r.TEXTURE_2D,r.TEXTURE_2D,1),ye[r.TEXTURE_CUBE_MAP]=re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[r.TEXTURE_2D_ARRAY]=re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ye[r.TEXTURE_3D]=re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Ee(r.DEPTH_TEST),f.setFunc(Qs),tn(!1),nn(W_),Ee(r.CULL_FACE),dt(Ra);function Ee(X){_[X]!==!0&&(r.enable(X),_[X]=!0)}function Me(X){_[X]!==!1&&(r.disable(X),_[X]=!1)}function Xe(X,Ce){return v[X]!==Ce?(r.bindFramebuffer(X,Ce),v[X]=Ce,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Ce),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Pe(X,Ce){let _e=b,Ue=!1;if(X){_e=S.get(Ce),_e===void 0&&(_e=[],S.set(Ce,_e));const He=X.textures;if(_e.length!==He.length||_e[0]!==r.COLOR_ATTACHMENT0){for(let be=0,je=He.length;be<je;be++)_e[be]=r.COLOR_ATTACHMENT0+be;_e.length=He.length,Ue=!0}}else _e[0]!==r.BACK&&(_e[0]=r.BACK,Ue=!0);Ue&&r.drawBuffers(_e)}function Ct(X){return w!==X?(r.useProgram(X),w=X,!0):!1}const ot={[Vr]:r.FUNC_ADD,[Fb]:r.FUNC_SUBTRACT,[Hb]:r.FUNC_REVERSE_SUBTRACT};ot[Gb]=r.MIN,ot[Vb]=r.MAX;const gt={[kb]:r.ZERO,[Xb]:r.ONE,[Wb]:r.SRC_COLOR,[Cd]:r.SRC_ALPHA,[Qb]:r.SRC_ALPHA_SATURATE,[jb]:r.DST_COLOR,[Yb]:r.DST_ALPHA,[qb]:r.ONE_MINUS_SRC_COLOR,[Dd]:r.ONE_MINUS_SRC_ALPHA,[Kb]:r.ONE_MINUS_DST_COLOR,[Zb]:r.ONE_MINUS_DST_ALPHA,[Jb]:r.CONSTANT_COLOR,[$b]:r.ONE_MINUS_CONSTANT_COLOR,[e1]:r.CONSTANT_ALPHA,[t1]:r.ONE_MINUS_CONSTANT_ALPHA};function dt(X,Ce,_e,Ue,He,be,je,We,Kt,Nt){if(X===Ra){M===!0&&(Me(r.BLEND),M=!1);return}if(M===!1&&(Ee(r.BLEND),M=!0),X!==Bb){if(X!==x||Nt!==W){if((D!==Vr||I!==Vr)&&(r.blendEquation(r.FUNC_ADD),D=Vr,I=Vr),Nt)switch(X){case Zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q_:r.blendFunc(r.ONE,r.ONE);break;case Y_:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Z_:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Tt("WebGLState: Invalid blending: ",X);break}else switch(X){case Zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case q_:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Y_:Tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Z_:Tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Tt("WebGLState: Invalid blending: ",X);break}P=null,C=null,N=null,z=null,T.set(0,0,0),O=0,x=X,W=Nt}return}He=He||Ce,be=be||_e,je=je||Ue,(Ce!==D||He!==I)&&(r.blendEquationSeparate(ot[Ce],ot[He]),D=Ce,I=He),(_e!==P||Ue!==C||be!==N||je!==z)&&(r.blendFuncSeparate(gt[_e],gt[Ue],gt[be],gt[je]),P=_e,C=Ue,N=be,z=je),(We.equals(T)===!1||Kt!==O)&&(r.blendColor(We.r,We.g,We.b,Kt),T.copy(We),O=Kt),x=X,W=!1}function _t(X,Ce){X.side===Yi?Me(r.CULL_FACE):Ee(r.CULL_FACE);let _e=X.side===Wn;Ce&&(_e=!_e),tn(_e),X.blending===Zs&&X.transparent===!1?dt(Ra):dt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ue=X.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ln(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Ee(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function tn(X){k!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),k=X)}function nn(X){X!==Pb?(Ee(r.CULL_FACE),X!==J&&(X===W_?r.cullFace(r.BACK):X===Ib?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),J=X}function an(X){X!==me&&(H&&r.lineWidth(X),me=X)}function ln(X,Ce,_e){X?(Ee(r.POLYGON_OFFSET_FILL),(ve!==Ce||$!==_e)&&(ve=Ce,$=_e,f.getReversed()&&(Ce=-Ce),r.polygonOffset(Ce,_e))):Me(r.POLYGON_OFFSET_FILL)}function qt(X){X?Ee(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function rn(X){X===void 0&&(X=r.TEXTURE0+B-1),Te!==X&&(r.activeTexture(X),Te=X)}function Y(X,Ce,_e){_e===void 0&&(Te===null?_e=r.TEXTURE0+B-1:_e=Te);let Ue=L[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},L[_e]=Ue),(Ue.type!==X||Ue.texture!==Ce)&&(Te!==_e&&(r.activeTexture(_e),Te=_e),r.bindTexture(X,Ce||ye[X]),Ue.type=X,Ue.texture=Ce)}function Ht(){const X=L[Te];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Dt(){try{r.compressedTexImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function E(){try{r.texSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function K(){try{r.texSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function he(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function Le(){try{r.texStorage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function fe(){try{r.texImage2D(...arguments)}catch(X){Tt("WebGLState:",X)}}function de(){try{r.texImage3D(...arguments)}catch(X){Tt("WebGLState:",X)}}function De(X){return g[X]!==void 0?g[X]:r.getParameter(X)}function Ge(X,Ce){g[X]!==Ce&&(r.pixelStorei(X,Ce),g[X]=Ce)}function ze(X){Re.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),Re.copy(X))}function Ne(X){Ie.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Ie.copy(X))}function Je(X,Ce){let _e=p.get(Ce);_e===void 0&&(_e=new WeakMap,p.set(Ce,_e));let Ue=_e.get(X);Ue===void 0&&(Ue=r.getUniformBlockIndex(Ce,X.name),_e.set(X,Ue))}function $e(X,Ce){const Ue=p.get(Ce).get(X);m.get(Ce)!==Ue&&(r.uniformBlockBinding(Ce,Ue,X.__bindingPointIndex),m.set(Ce,Ue))}function at(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),_={},g={},Te=null,L={},v={},S=new WeakMap,b=[],w=null,M=!1,x=null,D=null,P=null,C=null,I=null,N=null,z=null,T=new ft(0,0,0),O=0,W=!1,k=null,J=null,me=null,ve=null,$=null,Re.set(0,0,r.canvas.width,r.canvas.height),Ie.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Ee,disable:Me,bindFramebuffer:Xe,drawBuffers:Pe,useProgram:Ct,setBlending:dt,setMaterial:_t,setFlipSided:tn,setCullFace:nn,setLineWidth:an,setPolygonOffset:ln,setScissorTest:qt,activeTexture:rn,bindTexture:Y,unbindTexture:Ht,compressedTexImage2D:Dt,compressedTexImage3D:U,texImage2D:fe,texImage3D:de,pixelStorei:Ge,getParameter:De,updateUBOMapping:Je,uniformBlockBinding:$e,texStorage2D:we,texStorage3D:Le,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:ze,viewport:Ne,reset:at}}function pC(r,e,i,s,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new mt,_=new WeakMap,g=new Set;let v;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return b?new OffscreenCanvas(U,E):vl("canvas")}function M(U,E,K){let se=1;const he=Dt(U);if((he.width>K||he.height>K)&&(se=K/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const we=Math.floor(se*he.width),Le=Math.floor(se*he.height);v===void 0&&(v=w(we,Le));const fe=E?w(we,Le):v;return fe.width=we,fe.height=Le,fe.getContext("2d").drawImage(U,0,0,we,Le),it("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+we+"x"+Le+")."),fe}else return"data"in U&&it("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function x(U){return U.generateMipmaps}function D(U){r.generateMipmap(U)}function P(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(U,E,K,se,he,we=!1){if(U!==null){if(r[U]!==void 0)return r[U];it("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Le;se&&(Le=e.get("EXT_texture_norm16"),Le||it("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=E;if(E===r.RED&&(K===r.FLOAT&&(fe=r.R32F),K===r.HALF_FLOAT&&(fe=r.R16F),K===r.UNSIGNED_BYTE&&(fe=r.R8),K===r.UNSIGNED_SHORT&&Le&&(fe=Le.R16_EXT),K===r.SHORT&&Le&&(fe=Le.R16_SNORM_EXT)),E===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.R8UI),K===r.UNSIGNED_SHORT&&(fe=r.R16UI),K===r.UNSIGNED_INT&&(fe=r.R32UI),K===r.BYTE&&(fe=r.R8I),K===r.SHORT&&(fe=r.R16I),K===r.INT&&(fe=r.R32I)),E===r.RG&&(K===r.FLOAT&&(fe=r.RG32F),K===r.HALF_FLOAT&&(fe=r.RG16F),K===r.UNSIGNED_BYTE&&(fe=r.RG8),K===r.UNSIGNED_SHORT&&Le&&(fe=Le.RG16_EXT),K===r.SHORT&&Le&&(fe=Le.RG16_SNORM_EXT)),E===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RG8UI),K===r.UNSIGNED_SHORT&&(fe=r.RG16UI),K===r.UNSIGNED_INT&&(fe=r.RG32UI),K===r.BYTE&&(fe=r.RG8I),K===r.SHORT&&(fe=r.RG16I),K===r.INT&&(fe=r.RG32I)),E===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGB8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGB16UI),K===r.UNSIGNED_INT&&(fe=r.RGB32UI),K===r.BYTE&&(fe=r.RGB8I),K===r.SHORT&&(fe=r.RGB16I),K===r.INT&&(fe=r.RGB32I)),E===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(fe=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(fe=r.RGBA16UI),K===r.UNSIGNED_INT&&(fe=r.RGBA32UI),K===r.BYTE&&(fe=r.RGBA8I),K===r.SHORT&&(fe=r.RGBA16I),K===r.INT&&(fe=r.RGBA32I)),E===r.RGB&&(K===r.UNSIGNED_SHORT&&Le&&(fe=Le.RGB16_EXT),K===r.SHORT&&Le&&(fe=Le.RGB16_SNORM_EXT),K===r.UNSIGNED_INT_5_9_9_9_REV&&(fe=r.RGB9_E5),K===r.UNSIGNED_INT_10F_11F_11F_REV&&(fe=r.R11F_G11F_B10F)),E===r.RGBA){const de=we?yu:bt.getTransfer(he);K===r.FLOAT&&(fe=r.RGBA32F),K===r.HALF_FLOAT&&(fe=r.RGBA16F),K===r.UNSIGNED_BYTE&&(fe=de===Ft?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT&&Le&&(fe=Le.RGBA16_EXT),K===r.SHORT&&Le&&(fe=Le.RGBA16_SNORM_EXT),K===r.UNSIGNED_SHORT_4_4_4_4&&(fe=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(fe=r.RGB5_A1)}return(fe===r.R16F||fe===r.R32F||fe===r.RG16F||fe===r.RG32F||fe===r.RGBA16F||fe===r.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function I(U,E){let K;return U?E===null||E===Ji||E===ml?K=r.DEPTH24_STENCIL8:E===Zi?K=r.DEPTH32F_STENCIL8:E===pl&&(K=r.DEPTH24_STENCIL8,it("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===ml?K=r.DEPTH_COMPONENT24:E===Zi?K=r.DEPTH_COMPONENT32F:E===pl&&(K=r.DEPTH_COMPONENT16),K}function N(U,E){return x(U)===!0||U.isFramebufferTexture&&U.minFilter!==Nn&&U.minFilter!==Bn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function z(U){const E=U.target;E.removeEventListener("dispose",z),O(E),E.isVideoTexture&&_.delete(E),E.isHTMLTexture&&g.delete(E)}function T(U){const E=U.target;E.removeEventListener("dispose",T),k(E)}function O(U){const E=s.get(U);if(E.__webglInit===void 0)return;const K=U.source,se=S.get(K);if(se){const he=se[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&W(U),Object.keys(se).length===0&&S.delete(K)}s.remove(U)}function W(U){const E=s.get(U);r.deleteTexture(E.__webglTexture);const K=U.source,se=S.get(K);delete se[E.__cacheKey],f.memory.textures--}function k(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(E.__webglFramebuffer[se]))for(let he=0;he<E.__webglFramebuffer[se].length;he++)r.deleteFramebuffer(E.__webglFramebuffer[se][he]);else r.deleteFramebuffer(E.__webglFramebuffer[se]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[se])}else{if(Array.isArray(E.__webglFramebuffer))for(let se=0;se<E.__webglFramebuffer.length;se++)r.deleteFramebuffer(E.__webglFramebuffer[se]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let se=0;se<E.__webglColorRenderbuffer.length;se++)E.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[se]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=U.textures;for(let se=0,he=K.length;se<he;se++){const we=s.get(K[se]);we.__webglTexture&&(r.deleteTexture(we.__webglTexture),f.memory.textures--),s.remove(K[se])}s.remove(U)}let J=0;function me(){J=0}function ve(){return J}function $(U){J=U}function B(){const U=J;return U>=l.maxTextures&&it("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),J+=1,U}function H(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ee(U,E){const K=s.get(U);if(U.isVideoTexture&&Y(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const se=U.image;if(se===null)it("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)it("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,U,E);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+E)}function pe(U,E){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Me(K,U,E);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+E)}function Te(U,E){const K=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Me(K,U,E);return}i.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+E)}function L(U,E){const K=s.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){Xe(K,U,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+E)}const Z={[Bd]:r.REPEAT,[Ta]:r.CLAMP_TO_EDGE,[Fd]:r.MIRRORED_REPEAT},Ae={[Nn]:r.NEAREST,[a1]:r.NEAREST_MIPMAP_NEAREST,[zc]:r.NEAREST_MIPMAP_LINEAR,[Bn]:r.LINEAR,[Zh]:r.LINEAR_MIPMAP_NEAREST,[Yr]:r.LINEAR_MIPMAP_LINEAR},Re={[o1]:r.NEVER,[h1]:r.ALWAYS,[l1]:r.LESS,[Lp]:r.LEQUAL,[c1]:r.EQUAL,[Np]:r.GEQUAL,[u1]:r.GREATER,[f1]:r.NOTEQUAL};function Ie(U,E){if(E.type===Zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Bn||E.magFilter===Zh||E.magFilter===zc||E.magFilter===Yr||E.minFilter===Bn||E.minFilter===Zh||E.minFilter===zc||E.minFilter===Yr)&&it("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Z[E.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Z[E.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Z[E.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Ae[E.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Ae[E.minFilter]),E.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Nn||E.minFilter!==zc&&E.minFilter!==Yr||E.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function re(U,E){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",z));const se=E.source;let he=S.get(se);he===void 0&&(he={},S.set(se,he));const we=H(E);if(we!==U.__cacheKey){he[we]===void 0&&(he[we]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,K=!0),he[we].usedTimes++;const Le=he[U.__cacheKey];Le!==void 0&&(he[U.__cacheKey].usedTimes--,Le.usedTimes===0&&W(E)),U.__cacheKey=we,U.__webglTexture=he[we].texture}return K}function ye(U,E,K){return Math.floor(Math.floor(U/K)/E)}function Ee(U,E,K,se){const we=U.updateRanges;if(we.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,K,se,E.data);else{we.sort((Ge,ze)=>Ge.start-ze.start);let Le=0;for(let Ge=1;Ge<we.length;Ge++){const ze=we[Le],Ne=we[Ge],Je=ze.start+ze.count,$e=ye(Ne.start,E.width,4),at=ye(ze.start,E.width,4);Ne.start<=Je+1&&$e===at&&ye(Ne.start+Ne.count-1,E.width,4)===$e?ze.count=Math.max(ze.count,Ne.start+Ne.count-ze.start):(++Le,we[Le]=Ne)}we.length=Le+1;const fe=i.getParameter(r.UNPACK_ROW_LENGTH),de=i.getParameter(r.UNPACK_SKIP_PIXELS),De=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Ge=0,ze=we.length;Ge<ze;Ge++){const Ne=we[Ge],Je=Math.floor(Ne.start/4),$e=Math.ceil(Ne.count/4),at=Je%E.width,X=Math.floor(Je/E.width),Ce=$e,_e=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,at),i.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,at,X,Ce,_e,K,se,E.data)}U.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,fe),i.pixelStorei(r.UNPACK_SKIP_PIXELS,de),i.pixelStorei(r.UNPACK_SKIP_ROWS,De)}}function Me(U,E,K){let se=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(se=r.TEXTURE_3D);const he=re(U,E),we=E.source;i.bindTexture(se,U.__webglTexture,r.TEXTURE0+K);const Le=s.get(we);if(we.version!==Le.__version||he===!0){if(i.activeTexture(r.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=bt.getPrimaries(bt.workingColorSpace),Ue=E.colorSpace===dr?null:bt.getPrimaries(E.colorSpace),He=E.colorSpace===dr||_e===Ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He)}i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment);let de=M(E.image,!1,l.maxTextureSize);de=Ht(E,de);const De=c.convert(E.format,E.colorSpace),Ge=c.convert(E.type);let ze=C(E.internalFormat,De,Ge,E.normalized,E.colorSpace,E.isVideoTexture);Ie(se,E);let Ne;const Je=E.mipmaps,$e=E.isVideoTexture!==!0,at=Le.__version===void 0||he===!0,X=we.dataReady,Ce=N(E,de);if(E.isDepthTexture)ze=I(E.format===Zr,E.type),at&&($e?i.texStorage2D(r.TEXTURE_2D,1,ze,de.width,de.height):i.texImage2D(r.TEXTURE_2D,0,ze,de.width,de.height,0,De,Ge,null));else if(E.isDataTexture)if(Je.length>0){$e&&at&&i.texStorage2D(r.TEXTURE_2D,Ce,ze,Je[0].width,Je[0].height);for(let _e=0,Ue=Je.length;_e<Ue;_e++)Ne=Je[_e],$e?X&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,De,Ge,Ne.data):i.texImage2D(r.TEXTURE_2D,_e,ze,Ne.width,Ne.height,0,De,Ge,Ne.data);E.generateMipmaps=!1}else $e?(at&&i.texStorage2D(r.TEXTURE_2D,Ce,ze,de.width,de.height),X&&Ee(E,de,De,Ge)):i.texImage2D(r.TEXTURE_2D,0,ze,de.width,de.height,0,De,Ge,de.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){$e&&at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,Je[0].width,Je[0].height,de.depth);for(let _e=0,Ue=Je.length;_e<Ue;_e++)if(Ne=Je[_e],E.format!==Pi)if(De!==null)if($e){if(X)if(E.layerUpdates.size>0){const He=wv(Ne.width,Ne.height,E.format,E.type);for(const be of E.layerUpdates){const je=Ne.data.subarray(be*He/Ne.data.BYTES_PER_ELEMENT,(be+1)*He/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,be,Ne.width,Ne.height,1,De,je)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,de.depth,De,Ne.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,ze,Ne.width,Ne.height,de.depth,0,Ne.data,0,0);else it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?X&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,Ne.width,Ne.height,de.depth,De,Ge,Ne.data):i.texImage3D(r.TEXTURE_2D_ARRAY,_e,ze,Ne.width,Ne.height,de.depth,0,De,Ge,Ne.data)}else{$e&&at&&i.texStorage2D(r.TEXTURE_2D,Ce,ze,Je[0].width,Je[0].height);for(let _e=0,Ue=Je.length;_e<Ue;_e++)Ne=Je[_e],E.format!==Pi?De!==null?$e?X&&i.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,De,Ne.data):i.compressedTexImage2D(r.TEXTURE_2D,_e,ze,Ne.width,Ne.height,0,Ne.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?X&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,Ne.width,Ne.height,De,Ge,Ne.data):i.texImage2D(r.TEXTURE_2D,_e,ze,Ne.width,Ne.height,0,De,Ge,Ne.data)}else if(E.isDataArrayTexture)if($e){if(at&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ce,ze,de.width,de.height,de.depth),X)if(E.layerUpdates.size>0){const _e=wv(de.width,de.height,E.format,E.type);for(const Ue of E.layerUpdates){const He=de.data.subarray(Ue*_e/de.data.BYTES_PER_ELEMENT,(Ue+1)*_e/de.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ue,de.width,de.height,1,De,Ge,He)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,De,Ge,de.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ze,de.width,de.height,de.depth,0,De,Ge,de.data);else if(E.isData3DTexture)$e?(at&&i.texStorage3D(r.TEXTURE_3D,Ce,ze,de.width,de.height,de.depth),X&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,De,Ge,de.data)):i.texImage3D(r.TEXTURE_3D,0,ze,de.width,de.height,de.depth,0,De,Ge,de.data);else if(E.isFramebufferTexture){if(at)if($e)i.texStorage2D(r.TEXTURE_2D,Ce,ze,de.width,de.height);else{let _e=de.width,Ue=de.height;for(let He=0;He<Ce;He++)i.texImage2D(r.TEXTURE_2D,He,ze,_e,Ue,0,De,Ge,null),_e>>=1,Ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in r){const _e=r.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),de.parentNode!==_e){_e.appendChild(de),g.add(E),_e.onpaint=Ue=>{const He=Ue.changedElements;for(const be of g)He.includes(be.image)&&(be.needsUpdate=!0)},_e.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,de);else{const He=r.RGBA,be=r.RGBA,je=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,He,be,je,de)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Je.length>0){if($e&&at){const _e=Dt(Je[0]);i.texStorage2D(r.TEXTURE_2D,Ce,ze,_e.width,_e.height)}for(let _e=0,Ue=Je.length;_e<Ue;_e++)Ne=Je[_e],$e?X&&i.texSubImage2D(r.TEXTURE_2D,_e,0,0,De,Ge,Ne):i.texImage2D(r.TEXTURE_2D,_e,ze,De,Ge,Ne);E.generateMipmaps=!1}else if($e){if(at){const _e=Dt(de);i.texStorage2D(r.TEXTURE_2D,Ce,ze,_e.width,_e.height)}X&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,De,Ge,de)}else i.texImage2D(r.TEXTURE_2D,0,ze,De,Ge,de);x(E)&&D(se),Le.__version=we.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Xe(U,E,K){if(E.image.length!==6)return;const se=re(U,E),he=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+K);const we=s.get(he);if(he.version!==we.__version||se===!0){i.activeTexture(r.TEXTURE0+K);const Le=bt.getPrimaries(bt.workingColorSpace),fe=E.colorSpace===dr?null:bt.getPrimaries(E.colorSpace),de=E.colorSpace===dr||Le===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Ge=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let be=0;be<6;be++)!De&&!Ge?ze[be]=M(E.image[be],!0,l.maxCubemapSize):ze[be]=Ge?E.image[be].image:E.image[be],ze[be]=Ht(E,ze[be]);const Ne=ze[0],Je=c.convert(E.format,E.colorSpace),$e=c.convert(E.type),at=C(E.internalFormat,Je,$e,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ce=we.__version===void 0||se===!0,_e=he.dataReady;let Ue=N(E,Ne);Ie(r.TEXTURE_CUBE_MAP,E);let He;if(De){X&&Ce&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,at,Ne.width,Ne.height);for(let be=0;be<6;be++){He=ze[be].mipmaps;for(let je=0;je<He.length;je++){const We=He[je];E.format!==Pi?Je!==null?X?_e&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,We.width,We.height,Je,We.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,at,We.width,We.height,0,We.data):it("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,We.width,We.height,Je,$e,We.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,at,We.width,We.height,0,Je,$e,We.data)}}}else{if(He=E.mipmaps,X&&Ce){He.length>0&&Ue++;const be=Dt(ze[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ue,at,be.width,be.height)}for(let be=0;be<6;be++)if(Ge){X?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ze[be].width,ze[be].height,Je,$e,ze[be].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,ze[be].width,ze[be].height,0,Je,$e,ze[be].data);for(let je=0;je<He.length;je++){const Kt=He[je].image[be].image;X?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,Kt.width,Kt.height,Je,$e,Kt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,at,Kt.width,Kt.height,0,Je,$e,Kt.data)}}else{X?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Je,$e,ze[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,at,Je,$e,ze[be]);for(let je=0;je<He.length;je++){const We=He[je];X?_e&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,Je,$e,We.image[be]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,at,Je,$e,We.image[be])}}}x(E)&&D(r.TEXTURE_CUBE_MAP),we.__version=he.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Pe(U,E,K,se,he,we){const Le=c.convert(K.format,K.colorSpace),fe=c.convert(K.type),de=C(K.internalFormat,Le,fe,K.normalized,K.colorSpace),De=s.get(E),Ge=s.get(K);if(Ge.__renderTarget=E,!De.__hasExternalTextures){const ze=Math.max(1,E.width>>we),Ne=Math.max(1,E.height>>we);he===r.TEXTURE_3D||he===r.TEXTURE_2D_ARRAY?i.texImage3D(he,we,de,ze,Ne,E.depth,0,Le,fe,null):i.texImage2D(he,we,de,ze,Ne,0,Le,fe,null)}i.bindFramebuffer(r.FRAMEBUFFER,U),rn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,he,Ge.__webglTexture,0,qt(E)):(he===r.TEXTURE_2D||he>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,he,Ge.__webglTexture,we),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(U,E,K){if(r.bindRenderbuffer(r.RENDERBUFFER,U),E.depthBuffer){const se=E.depthTexture,he=se&&se.isDepthTexture?se.type:null,we=I(E.stencilBuffer,he),Le=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;rn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(E),we,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(E),we,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,we,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,U)}else{const se=E.textures;for(let he=0;he<se.length;he++){const we=se[he],Le=c.convert(we.format,we.colorSpace),fe=c.convert(we.type),de=C(we.internalFormat,Le,fe,we.normalized,we.colorSpace);rn(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,qt(E),de,E.width,E.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,qt(E),de,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,de,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(U,E,K){const se=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=s.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),he.__webglTexture===void 0){he.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E.depthTexture);const De=c.convert(E.depthTexture.format),Ge=c.convert(E.depthTexture.type);let ze;E.depthTexture.format===Ua?ze=r.DEPTH_COMPONENT24:E.depthTexture.format===Zr&&(ze=r.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,ze,E.width,E.height,0,De,Ge,null)}}else ee(E.depthTexture,0);const we=he.__webglTexture,Le=qt(E),fe=se?r.TEXTURE_CUBE_MAP_POSITIVE_X+K:r.TEXTURE_2D,de=E.depthTexture.format===Zr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ua)rn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,we,0);else if(E.depthTexture.format===Zr)rn(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,fe,we,0,Le):r.framebufferTexture2D(r.FRAMEBUFFER,de,fe,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function gt(U){const E=s.get(U),K=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),se){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=se}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let se=0;se<6;se++)ot(E.__webglFramebuffer[se],U,se);else{const se=U.texture.mipmaps;se&&se.length>0?ot(E.__webglFramebuffer[0],U,0):ot(E.__webglFramebuffer,U,0)}else if(K){E.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[se]),E.__webglDepthbuffer[se]===void 0)E.__webglDepthbuffer[se]=r.createRenderbuffer(),Ct(E.__webglDepthbuffer[se],U,!1);else{const he=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[se];r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,we)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Ct(E.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,we),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,we)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function dt(U,E,K){const se=s.get(U);E!==void 0&&Pe(se.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&gt(U)}function _t(U){const E=U.texture,K=s.get(U),se=s.get(E);U.addEventListener("dispose",T);const he=U.textures,we=U.isWebGLCubeRenderTarget===!0,Le=he.length>1;if(Le||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=E.version,f.memory.textures++),we){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let de=0;de<E.mipmaps.length;de++)K.__webglFramebuffer[fe][de]=r.createFramebuffer()}else K.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)K.__webglFramebuffer[fe]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Le)for(let fe=0,de=he.length;fe<de;fe++){const De=s.get(he[fe]);De.__webglTexture===void 0&&(De.__webglTexture=r.createTexture(),f.memory.textures++)}if(U.samples>0&&rn(U)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const de=he[fe];K.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const De=c.convert(de.format,de.colorSpace),Ge=c.convert(de.type),ze=C(de.internalFormat,De,Ge,de.normalized,de.colorSpace,U.isXRRenderTarget===!0),Ne=qt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,ze,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(K.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(we){i.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,E);for(let fe=0;fe<6;fe++)if(E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Pe(K.__webglFramebuffer[fe][de],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,de);else Pe(K.__webglFramebuffer[fe],U,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);x(E)&&D(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Le){for(let fe=0,de=he.length;fe<de;fe++){const De=he[fe],Ge=s.get(De);let ze=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ze=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ze,Ge.__webglTexture),Ie(ze,De),Pe(K.__webglFramebuffer,U,De,r.COLOR_ATTACHMENT0+fe,ze,0),x(De)&&D(ze)}i.unbindTexture()}else{let fe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(fe,se.__webglTexture),Ie(fe,E),E.mipmaps&&E.mipmaps.length>0)for(let de=0;de<E.mipmaps.length;de++)Pe(K.__webglFramebuffer[de],U,E,r.COLOR_ATTACHMENT0,fe,de);else Pe(K.__webglFramebuffer,U,E,r.COLOR_ATTACHMENT0,fe,0);x(E)&&D(fe),i.unbindTexture()}U.depthBuffer&&gt(U)}function tn(U){const E=U.textures;for(let K=0,se=E.length;K<se;K++){const he=E[K];if(x(he)){const we=P(U),Le=s.get(he).__webglTexture;i.bindTexture(we,Le),D(we),i.unbindTexture()}}}const nn=[],an=[];function ln(U){if(U.samples>0){if(rn(U)===!1){const E=U.textures,K=U.width,se=U.height;let he=r.COLOR_BUFFER_BIT;const we=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=s.get(U),fe=E.length>1;if(fe)for(let De=0;De<E.length;De++)i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const de=U.texture.mipmaps;de&&de.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let De=0;De<E.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Ge=s.get(E[De]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,K,se,0,0,K,se,he,r.NEAREST),m===!0&&(nn.length=0,an.length=0,nn.push(r.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(nn.push(we),an.push(we),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,an)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,nn))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let De=0;De<E.length;De++){i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.RENDERBUFFER,Le.__webglColorRenderbuffer[De]);const Ge=s.get(E[De]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+De,r.TEXTURE_2D,Ge,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function qt(U){return Math.min(l.maxSamples,U.samples)}function rn(U){const E=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(U){const E=f.render.frame;_.get(U)!==E&&(_.set(U,E),U.update())}function Ht(U,E){const K=U.colorSpace,se=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Su&&K!==dr&&(bt.getTransfer(K)===Ft?(se!==Pi||he!==pi)&&it("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Tt("WebGLTextures: Unsupported texture color space:",K)),E}function Dt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=B,this.resetTextureUnits=me,this.getTextureUnits=ve,this.setTextureUnits=$,this.setTexture2D=ee,this.setTexture2DArray=pe,this.setTexture3D=Te,this.setTextureCube=L,this.rebindTextures=dt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=tn,this.updateMultisampleRenderTarget=ln,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=rn,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function mC(r,e){function i(s,l=dr){let c;const f=bt.getTransfer(l);if(s===pi)return r.UNSIGNED_BYTE;if(s===Rp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===wp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Px)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Ix)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Nx)return r.BYTE;if(s===Ox)return r.SHORT;if(s===pl)return r.UNSIGNED_SHORT;if(s===Ap)return r.INT;if(s===Ji)return r.UNSIGNED_INT;if(s===Zi)return r.FLOAT;if(s===Da)return r.HALF_FLOAT;if(s===zx)return r.ALPHA;if(s===Bx)return r.RGB;if(s===Pi)return r.RGBA;if(s===Ua)return r.DEPTH_COMPONENT;if(s===Zr)return r.DEPTH_STENCIL;if(s===Fx)return r.RED;if(s===Cp)return r.RED_INTEGER;if(s===Qr)return r.RG;if(s===Dp)return r.RG_INTEGER;if(s===Up)return r.RGBA_INTEGER;if(s===hu||s===du||s===pu||s===mu)if(f===Ft)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===hu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===hu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Hd||s===Gd||s===Vd||s===kd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Hd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Xd||s===Wd||s===qd||s===Yd||s===Zd||s===vu||s===jd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Xd||s===Wd)return f===Ft?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===qd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Yd)return c.COMPRESSED_R11_EAC;if(s===Zd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===vu)return c.COMPRESSED_RG11_EAC;if(s===jd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kd||s===Qd||s===Jd||s===$d||s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jd)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$d)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===Ft?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===hp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===Ft?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dp||s===pp||s===xu||s===mp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===dp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xu)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ml?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const gC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_C=`
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

}`;class vC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new jx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ea({vertexShader:gC,fragmentShader:_C,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Un(new Du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xC extends $r{constructor(e,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",m=1,p=null,_=null,g=null,v=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",M=new vC,x={},D=i.getContextAttributes();let P=null,C=null;const I=[],N=[],z=new mt;let T=null;const O=new bi;O.viewport=new en;const W=new bi;W.viewport=new en;const k=[O,W],J=new wT;let me=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=I[re];return ye===void 0&&(ye=new ed,I[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=I[re];return ye===void 0&&(ye=new ed,I[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=I[re];return ye===void 0&&(ye=new ed,I[re]=ye),ye.getHandSpace()};function $(re){const ye=N.indexOf(re.inputSource);if(ye===-1)return;const Ee=I[ye];Ee!==void 0&&(Ee.update(re.inputSource,re.frame,p||f),Ee.dispatchEvent({type:re.type,data:re.inputSource}))}function B(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",H);for(let re=0;re<I.length;re++){const ye=N[re];ye!==null&&(N[re]=null,I[re].disconnect(ye))}me=null,ve=null,M.reset();for(const re in x)delete x[re];e.setRenderTarget(P),S=null,v=null,g=null,l=null,C=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(T),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&it("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,s.isPresenting===!0&&it("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",B),l.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await i.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(z),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Me=null,Xe=null;D.depth&&(Xe=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ee=D.stencil?Zr:Ua,Me=D.stencil?ml:Ji);const Pe={colorFormat:i.RGBA8,depthFormat:Xe,scaleFactor:c};g=this.getBinding(),v=g.createProjectionLayer(Pe),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new Qi(v.textureWidth,v.textureHeight,{format:Pi,type:pi,depthTexture:new $s(v.textureWidth,v.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,Ee),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Qi(S.framebufferWidth,S.framebufferHeight,{format:Pi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ie.setContext(l),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(re){for(let ye=0;ye<re.removed.length;ye++){const Ee=re.removed[ye],Me=N.indexOf(Ee);Me>=0&&(N[Me]=null,I[Me].disconnect(Ee))}for(let ye=0;ye<re.added.length;ye++){const Ee=re.added[ye];let Me=N.indexOf(Ee);if(Me===-1){for(let Pe=0;Pe<I.length;Pe++)if(Pe>=N.length){N.push(Ee),Me=Pe;break}else if(N[Pe]===null){N[Pe]=Ee,Me=Pe;break}if(Me===-1)break}const Xe=I[Me];Xe&&Xe.connect(Ee)}}const ee=new Q,pe=new Q;function Te(re,ye,Ee){ee.setFromMatrixPosition(ye.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const Me=ee.distanceTo(pe),Xe=ye.projectionMatrix.elements,Pe=Ee.projectionMatrix.elements,Ct=Xe[14]/(Xe[10]-1),ot=Xe[14]/(Xe[10]+1),gt=(Xe[9]+1)/Xe[5],dt=(Xe[9]-1)/Xe[5],_t=(Xe[8]-1)/Xe[0],tn=(Pe[8]+1)/Pe[0],nn=Ct*_t,an=Ct*tn,ln=Me/(-_t+tn),qt=ln*-_t;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(qt),re.translateZ(ln),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Xe[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const rn=Ct+ln,Y=ot+ln,Ht=nn-qt,Dt=an+(Me-qt),U=gt*ot/Y*rn,E=dt*ot/Y*rn;re.projectionMatrix.makePerspective(Ht,Dt,U,E,rn,Y),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function L(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let ye=re.near,Ee=re.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Ee=M.depthFar)),J.near=W.near=O.near=ye,J.far=W.far=O.far=Ee,(me!==J.near||ve!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),me=J.near,ve=J.far),J.layers.mask=re.layers.mask|6,O.layers.mask=J.layers.mask&-5,W.layers.mask=J.layers.mask&-3;const Me=re.parent,Xe=J.cameras;L(J,Me);for(let Pe=0;Pe<Xe.length;Pe++)L(Xe[Pe],Me);Xe.length===2?Te(J,O,W):J.projectionMatrix.copy(O.projectionMatrix),Z(re,J,Me)};function Z(re,ye,Ee){Ee===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Ee.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=xl*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&S===null))return m},this.setFoveation=function(re){m=re,v!==null&&(v.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(J)},this.getCameraTexture=function(re){return x[re]};let Ae=null;function Re(re,ye){if(_=ye.getViewerPose(p||f),b=ye,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Me=!1;Ee.length!==J.cameras.length&&(J.cameras.length=0,Me=!0);for(let ot=0;ot<Ee.length;ot++){const gt=Ee[ot];let dt=null;if(S!==null)dt=S.getViewport(gt);else{const tn=g.getViewSubImage(v,gt);dt=tn.viewport,ot===0&&(e.setRenderTargetTextures(C,tn.colorTexture,tn.depthStencilTexture),e.setRenderTarget(C))}let _t=k[ot];_t===void 0&&(_t=new bi,_t.layers.enable(ot),_t.viewport=new en,k[ot]=_t),_t.matrix.fromArray(gt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(gt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(dt.x,dt.y,dt.width,dt.height),ot===0&&(J.matrix.copy(_t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Me===!0&&J.cameras.push(_t)}const Xe=l.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){g=s.getBinding();const ot=g.getDepthInformation(Ee[0]);ot&&ot.isValid&&ot.texture&&M.init(ot,l.renderState)}if(Xe&&Xe.includes("camera-access")&&w){e.state.unbindTexture(),g=s.getBinding();for(let ot=0;ot<Ee.length;ot++){const gt=Ee[ot].camera;if(gt){let dt=x[gt];dt||(dt=new jx,x[gt]=dt);const _t=g.getCameraImage(gt);dt.sourceTexture=_t}}}}for(let Ee=0;Ee<I.length;Ee++){const Me=N[Ee],Xe=I[Ee];Me!==null&&Xe!==void 0&&Xe.update(Me,ye,p||f)}Ae&&Ae(re,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),b=null}const Ie=new $x;Ie.setAnimationLoop(Re),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const SC=new jt,sS=new st;sS.set(-1,0,0,0,1,0,0,0,1);function yC(r,e){function i(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,Kx(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function l(M,x,D,P,C){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(M,x):x.isMeshLambertMaterial?(c(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),_(M,x),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(M,x),v(M,x),x.isMeshPhysicalMaterial&&S(M,x,C)):x.isMeshMatcapMaterial?(c(M,x),b(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),w(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&d(M,x)):x.isPointsMaterial?m(M,x,D,P):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,i(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Wn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,i(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Wn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,i(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,i(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const D=e.get(x),P=D.envMap,C=D.envMapRotation;P&&(M.envMap.value=P,M.envMapRotation.value.setFromMatrix4(SC.makeRotationFromEuler(C)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(sS),M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform))}function d(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,D,P){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*D,M.scale.value=P*.5,x.map&&(M.map.value=x.map,i(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,i(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,i(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function _(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function v(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,D){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Wn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,x){x.matcap&&(M.matcap.value=x.matcap)}function w(M,x){const D=e.get(x).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function MC(r,e,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,I){const N=I.program;s.uniformBlockBinding(C,N)}function p(C,I){let N=l[C.id];N===void 0&&(M(C),N=_(C),l[C.id]=N,C.addEventListener("dispose",D));const z=I.program;s.updateUBOMapping(C,z);const T=e.render.frame;c[C.id]!==T&&(v(C),c[C.id]=T)}function _(C){const I=g();C.__bindingPointIndex=I;const N=r.createBuffer(),z=C.__size,T=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,z,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,N),N}function g(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return Tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const I=l[C.id],N=C.uniforms,z=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let T=0,O=N.length;T<O;T++){const W=N[T];if(Array.isArray(W))for(let k=0,J=W.length;k<J;k++)S(W[k],T,k,z);else S(W,T,0,z)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(C,I,N,z){if(w(C,I,N,z)===!0){const T=C.__offset,O=C.value;if(Array.isArray(O)){let W=0;for(let k=0;k<O.length;k++){const J=O[k],me=x(J);b(J,C.__data,W),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(W+=me.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(O,C.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,T,C.__data)}}function b(C,I,N){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,N)}function w(C,I,N,z){const T=C.value,O=I+"_"+N;if(z[O]===void 0)return typeof T=="number"||typeof T=="boolean"?z[O]=T:ArrayBuffer.isView(T)?z[O]=T.slice():z[O]=T.clone(),!0;{const W=z[O];if(typeof T=="number"||typeof T=="boolean"){if(W!==T)return z[O]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(W.equals(T)===!1)return W.copy(T),!0}}return!1}function M(C){const I=C.uniforms;let N=0;const z=16;for(let O=0,W=I.length;O<W;O++){const k=Array.isArray(I[O])?I[O]:[I[O]];for(let J=0,me=k.length;J<me;J++){const ve=k[J],$=Array.isArray(ve.value)?ve.value:[ve.value];for(let B=0,H=$.length;B<H;B++){const ee=$[B],pe=x(ee),Te=N%z,L=Te%pe.boundary,Z=Te+L;N+=L,Z!==0&&z-Z<pe.storage&&(N+=z-Z),ve.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),ve.__offset=N,N+=pe.storage}}}const T=N%z;return T>0&&(N+=z-T),C.__size=N,C.__cache={},this}function x(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?it("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):it("WebGLRenderer: Unsupported uniform value type.",C),I}function D(C){const I=C.target;I.removeEventListener("dispose",D);const N=f.indexOf(I.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function P(){for(const C in l)r.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:m,update:p,dispose:P}}const EC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Wi=null;function bC(){return Wi===null&&(Wi=new J1(EC,16,16,Qr,Da),Wi.name="DFG_LUT",Wi.minFilter=Bn,Wi.magFilter=Bn,Wi.wrapS=Ta,Wi.wrapT=Ta,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}class TC{constructor(e={}){const{canvas:i=p1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=pi}=e;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const w=S,M=new Set([Up,Dp,Cp]),x=new Set([pi,Ji,pl,ml,Rp,wp]),D=new Uint32Array(4),P=new Int32Array(4),C=new Q;let I=null,N=null;const z=[],T=[];let O=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const W=this;let k=!1,J=null,me=null,ve=null,$=null;this._outputColorSpace=Xn;let B=0,H=0,ee=null,pe=-1,Te=null;const L=new en,Z=new en;let Ae=null;const Re=new ft(0);let Ie=0,re=i.width,ye=i.height,Ee=1,Me=null,Xe=null;const Pe=new en(0,0,re,ye),Ct=new en(0,0,re,ye);let ot=!1;const gt=new zp;let dt=!1,_t=!1;const tn=new jt,nn=new Q,an=new en,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qt=!1;function rn(){return ee===null?Ee:1}let Y=s;function Ht(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tp}`),i.addEventListener("webglcontextlost",Kt,!1),i.addEventListener("webglcontextrestored",Nt,!1),i.addEventListener("webglcontextcreationerror",ti,!1),Y===null){const q="webgl2";if(Y=Ht(q,A),Y===null)throw Ht(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Tt("WebGLRenderer: "+A.message),A}let Dt,U,E,K,se,he,we,Le,fe,de,De,Ge,ze,Ne,Je,$e,at,X,Ce,_e,Ue,He,be;function je(){Dt=new b2(Y),Dt.init(),Ue=new mC(Y,Dt),U=new g2(Y,Dt,e,Ue),E=new dC(Y,Dt),U.reversedDepthBuffer&&v&&E.buffers.depth.setReversed(!0),me=Y.createFramebuffer(),ve=Y.createFramebuffer(),$=Y.createFramebuffer(),K=new R2(Y),se=new $w,he=new pC(Y,Dt,E,se,U,Ue,K),we=new E2(W),Le=new UT(Y),He=new p2(Y,Le),fe=new T2(Y,Le,K,He),de=new C2(Y,fe,Le,He,K),X=new w2(Y,U,he),Je=new _2(se),De=new Jw(W,we,Dt,U,He,Je),Ge=new yC(W,se),ze=new tC,Ne=new oC(Dt),at=new d2(W,we,E,de,b,m),$e=new hC(W,de,U),be=new MC(Y,K,U,E),Ce=new m2(Y,Dt,K),_e=new A2(Y,Dt,K),K.programs=De.programs,W.capabilities=U,W.extensions=Dt,W.properties=se,W.renderLists=ze,W.shadowMap=$e,W.state=E,W.info=K}je(),w!==pi&&(O=new U2(w,i.width,i.height,d,l,c));const We=new xC(W,Y);this.xr=We,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const A=Dt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Dt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(re,ye,!1))},this.getSize=function(A){return A.set(re,ye)},this.setSize=function(A,q,oe=!0){if(We.isPresenting){it("WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,ye=q,i.width=Math.floor(A*Ee),i.height=Math.floor(q*Ee),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),O!==null&&O.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(re*Ee,ye*Ee).floor()},this.setDrawingBufferSize=function(A,q,oe){re=A,ye=q,Ee=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(w===pi){Tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){it("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(L)},this.getViewport=function(A){return A.copy(Pe)},this.setViewport=function(A,q,oe,ie){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,q,oe,ie),E.viewport(L.copy(Pe).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(Ct)},this.setScissor=function(A,q,oe,ie){A.isVector4?Ct.set(A.x,A.y,A.z,A.w):Ct.set(A,q,oe,ie),E.scissor(Z.copy(Ct).multiplyScalar(Ee).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(A){E.setScissorTest(ot=A)},this.setOpaqueSort=function(A){Me=A},this.setTransparentSort=function(A){Xe=A},this.getClearColor=function(A){return A.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor(...arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ie=0;if(A){let ae=!1;if(ee!==null){const Be=ee.texture.format;ae=M.has(Be)}if(ae){const Be=ee.texture.type,ke=x.has(Be),Oe=at.getClearColor(),Ye=at.getClearAlpha(),qe=Oe.r,et=Oe.g,lt=Oe.b;ke?(D[0]=qe,D[1]=et,D[2]=lt,D[3]=Ye,Y.clearBufferuiv(Y.COLOR,0,D)):(P[0]=qe,P[1]=et,P[2]=lt,P[3]=Ye,Y.clearBufferiv(Y.COLOR,0,P))}else ie|=Y.COLOR_BUFFER_BIT}q&&(ie|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(ie|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&Y.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),J=A},this.dispose=function(){i.removeEventListener("webglcontextlost",Kt,!1),i.removeEventListener("webglcontextrestored",Nt,!1),i.removeEventListener("webglcontextcreationerror",ti,!1),at.dispose(),ze.dispose(),Ne.dispose(),se.dispose(),we.dispose(),de.dispose(),He.dispose(),be.dispose(),De.dispose(),We.dispose(),We.removeEventListener("sessionstart",fn),We.removeEventListener("sessionend",An),Zn.stop()};function Kt(A){A.preventDefault(),$_("WebGLRenderer: Context Lost."),k=!0}function Nt(){$_("WebGLRenderer: Context Restored."),k=!1;const A=K.autoReset,q=$e.enabled,oe=$e.autoUpdate,ie=$e.needsUpdate,ae=$e.type;je(),K.autoReset=A,$e.enabled=q,$e.autoUpdate=oe,$e.needsUpdate=ie,$e.type=ae}function ti(A){Tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ni(A){const q=A.target;q.removeEventListener("dispose",ni),oo(q)}function oo(A){lo(A),se.remove(A)}function lo(A){const q=se.get(A).programs;q!==void 0&&(q.forEach(function(oe){De.releaseProgram(oe)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ie,ae,Be){q===null&&(q=ln);const ke=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Oe=Ia(A,q,oe,ie,ae);E.setMaterial(ie,ke);let Ye=oe.index,qe=1;if(ie.wireframe===!0){if(Ye=fe.getWireframeAttribute(oe),Ye===void 0)return;qe=2}const et=oe.drawRange,lt=oe.attributes.position;let Qe=et.start*qe,At=(et.start+et.count)*qe;Be!==null&&(Qe=Math.max(Qe,Be.start*qe),At=Math.min(At,(Be.start+Be.count)*qe)),Ye!==null?(Qe=Math.max(Qe,0),At=Math.min(At,Ye.count)):lt!=null&&(Qe=Math.max(Qe,0),At=Math.min(At,lt.count));const Qt=At-Qe;if(Qt<0||Qt===1/0)return;He.setup(ae,ie,Oe,oe,Ye);let Xt,Ot=Ce;if(Ye!==null&&(Xt=Le.get(Ye),Ot=_e,Ot.setIndex(Xt)),ae.isMesh)ie.wireframe===!0?(E.setLineWidth(ie.wireframeLinewidth*rn()),Ot.setMode(Y.LINES)):Ot.setMode(Y.TRIANGLES);else if(ae.isLine){let Pt=ie.linewidth;Pt===void 0&&(Pt=1),E.setLineWidth(Pt*rn()),ae.isLineSegments?Ot.setMode(Y.LINES):ae.isLineLoop?Ot.setMode(Y.LINE_LOOP):Ot.setMode(Y.LINE_STRIP)}else ae.isPoints?Ot.setMode(Y.POINTS):ae.isSprite&&Ot.setMode(Y.TRIANGLES);if(ae.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Ot.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Pt=ae._multiDrawStarts,Ve=ae._multiDrawCounts,On=ae._multiDrawCount,vt=Ye?Le.get(Ye).bytesPerElement:1,vn=se.get(ie).currentProgram.getUniforms();for(let ii=0;ii<On;ii++)vn.setValue(Y,"_gl_DrawID",ii),Ot.render(Pt[ii]/vt,Ve[ii])}else if(ae.isInstancedMesh)Ot.renderInstances(Qe,Qt,ae.count);else if(oe.isInstancedBufferGeometry){const Pt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ve=Math.min(oe.instanceCount,Pt);Ot.renderInstances(Qe,Qt,Ve)}else Ot.render(Qe,Qt)};function co(A,q,oe){A.transparent===!0&&A.side===Yi&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,Pa(A,q,oe),A.side=mr,A.needsUpdate=!0,Pa(A,q,oe),A.side=Yi):Pa(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),N=Ne.get(oe),N.init(q),T.push(N),oe.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),A!==oe&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(q.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Be=ae.material;if(Be)if(Array.isArray(Be))for(let ke=0;ke<Be.length;ke++){const Oe=Be[ke];co(Oe,oe,ae),ie.add(Oe)}else co(Be,oe,ae),ie.add(Be)}),N=T.pop(),ie},this.compileAsync=function(A,q,oe=null){const ie=this.compile(A,q,oe);return new Promise(ae=>{function Be(){if(ie.forEach(function(ke){se.get(ke).currentProgram.isReady()&&ie.delete(ke)}),ie.size===0){ae(A);return}setTimeout(Be,10)}Dt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let es=null;function Bi(A){es&&es(A)}function fn(){Zn.stop()}function An(){Zn.start()}const Zn=new $x;Zn.setAnimationLoop(Bi),typeof self<"u"&&Zn.setContext(self),this.setAnimationLoop=function(A){es=A,We.setAnimationLoop(A),A===null?Zn.stop():Zn.start()},We.addEventListener("sessionstart",fn),We.addEventListener("sessionend",An),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;J!==null&&J.renderStart(A,q);const oe=We.enabled===!0&&We.isPresenting===!0,ie=O!==null&&(ee===null||oe)&&O.begin(W,ee);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(We.cameraAutoUpdate===!0&&We.updateCamera(q),q=We.getCamera()),A.isScene===!0&&A.onBeforeRender(W,A,q,ee),N=Ne.get(A,T.length),N.init(q),N.state.textureUnits=he.getTextureUnits(),T.push(N),tn.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),gt.setFromProjectionMatrix(tn,ji,q.reversedDepth),_t=this.localClippingEnabled,dt=Je.init(this.clippingPlanes,_t),I=ze.get(A,z.length),I.init(),z.push(I),We.enabled===!0&&We.isPresenting===!0){const ke=W.xr.getDepthSensingMesh();ke!==null&&gr(ke,q,-1/0,W.sortObjects)}gr(A,q,0,W.sortObjects),I.finish(),W.sortObjects===!0&&I.sort(Me,Xe,q.reversedDepth),qt=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1,qt&&at.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),dt===!0&&Je.beginShadows();const ae=N.state.shadowsArray;if($e.render(ae,A,q),dt===!0&&Je.endShadows(),(ie&&O.hasRenderPass())===!1){const ke=I.opaque,Oe=I.transmissive;if(N.setupLights(),q.isArrayCamera){const Ye=q.cameras;if(Oe.length>0)for(let qe=0,et=Ye.length;qe<et;qe++){const lt=Ye[qe];Al(ke,Oe,A,lt)}qt&&at.render(A);for(let qe=0,et=Ye.length;qe<et;qe++){const lt=Ye[qe];Tl(I,A,lt,lt.viewport)}}else Oe.length>0&&Al(ke,Oe,A,q),qt&&at.render(A),Tl(I,A,q)}ee!==null&&H===0&&(he.updateMultisampleRenderTarget(ee),he.updateRenderTargetMipmap(ee)),ie&&O.end(W),A.isScene===!0&&A.onAfterRender(W,A,q),He.resetDefaultState(),pe=-1,Te=null,T.pop(),T.length>0?(N=T[T.length-1],he.setTextureUnits(N.state.textureUnits),dt===!0&&Je.setGlobalState(W.clippingPlanes,N.state.camera)):N=null,z.pop(),z.length>0?I=z[z.length-1]:I=null,J!==null&&J.renderEnd()};function gr(A,q,oe,ie){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||gt.intersectsSprite(A)){ie&&an.setFromMatrixPosition(A.matrixWorld).applyMatrix4(tn);const ke=de.update(A),Oe=A.material;Oe.visible&&I.push(A,ke,Oe,oe,an.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||gt.intersectsObject(A))){const ke=de.update(A),Oe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),an.copy(A.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),an.copy(ke.boundingSphere.center)),an.applyMatrix4(A.matrixWorld).applyMatrix4(tn)),Array.isArray(Oe)){const Ye=ke.groups;for(let qe=0,et=Ye.length;qe<et;qe++){const lt=Ye[qe],Qe=Oe[lt.materialIndex];Qe&&Qe.visible&&I.push(A,ke,Qe,oe,an.z,lt)}}else Oe.visible&&I.push(A,ke,Oe,oe,an.z,null)}}const Be=A.children;for(let ke=0,Oe=Be.length;ke<Oe;ke++)gr(Be[ke],q,oe,ie)}function Tl(A,q,oe,ie){const{opaque:ae,transmissive:Be,transparent:ke}=A;N.setupLightsView(oe),dt===!0&&Je.setGlobalState(W.clippingPlanes,oe),ie&&E.viewport(L.copy(ie)),ae.length>0&&_r(ae,q,oe),Be.length>0&&_r(Be,q,oe),ke.length>0&&_r(ke,q,oe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Al(A,q,oe,ie){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const Qe=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new Qi(1,1,{generateMipmaps:!0,type:Qe?Da:pi,minFilter:Yr,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace})}const Be=N.state.transmissionRenderTarget[ie.id],ke=ie.viewport||L;Be.setSize(ke.z*W.transmissionResolutionScale,ke.w*W.transmissionResolutionScale);const Oe=W.getRenderTarget(),Ye=W.getActiveCubeFace(),qe=W.getActiveMipmapLevel();W.setRenderTarget(Be),W.getClearColor(Re),Ie=W.getClearAlpha(),Ie<1&&W.setClearColor(16777215,.5),W.clear(),qt&&at.render(oe);const et=W.toneMapping;W.toneMapping=Ki;const lt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),dt===!0&&Je.setGlobalState(W.clippingPlanes,ie),_r(A,oe,ie),he.updateMultisampleRenderTarget(Be),he.updateRenderTargetMipmap(Be),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let At=0,Qt=q.length;At<Qt;At++){const Xt=q[At],{object:Ot,geometry:Pt,material:Ve,group:On}=Xt;if(Ve.side===Yi&&Ot.layers.test(ie.layers)){const vt=Ve.side;Ve.side=Wn,Ve.needsUpdate=!0,Oa(Ot,oe,ie,Pt,Ve,On),Ve.side=vt,Ve.needsUpdate=!0,Qe=!0}}Qe===!0&&(he.updateMultisampleRenderTarget(Be),he.updateRenderTargetMipmap(Be))}W.setRenderTarget(Oe,Ye,qe),W.setClearColor(Re,Ie),lt!==void 0&&(ie.viewport=lt),W.toneMapping=et}function _r(A,q,oe){const ie=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Be=A.length;ae<Be;ae++){const ke=A[ae],{object:Oe,geometry:Ye,group:qe}=ke;let et=ke.material;et.allowOverride===!0&&ie!==null&&(et=ie),Oe.layers.test(oe.layers)&&Oa(Oe,q,oe,Ye,et,qe)}}function Oa(A,q,oe,ie,ae,Be){A.onBeforeRender(W,q,oe,ie,ae,Be),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(W,q,oe,ie,A,Be),ae.transparent===!0&&ae.side===Yi&&ae.forceSinglePass===!1?(ae.side=Wn,ae.needsUpdate=!0,W.renderBufferDirect(oe,q,ie,ae,A,Be),ae.side=mr,ae.needsUpdate=!0,W.renderBufferDirect(oe,q,ie,ae,A,Be),ae.side=Yi):W.renderBufferDirect(oe,q,ie,ae,A,Be),A.onAfterRender(W,q,oe,ie,ae,Be)}function Pa(A,q,oe){q.isScene!==!0&&(q=ln);const ie=se.get(A),ae=N.state.lights,Be=N.state.shadowsArray,ke=ae.state.version,Oe=De.getParameters(A,ae.state,Be,q,oe,N.state.lightProbeGridArray),Ye=De.getProgramCacheKey(Oe);let qe=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ie.fog=q.fog;const et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=we.get(A.envMap||ie.environment,et),ie.envMapRotation=ie.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",ni),qe=new Map,ie.programs=qe);let lt=qe.get(Ye);if(lt!==void 0){if(ie.currentProgram===lt&&ie.lightsStateVersion===ke)return na(A,Oe),lt}else Oe.uniforms=De.getUniforms(A),J!==null&&A.isNodeMaterial&&J.build(A,oe,Oe),A.onBeforeCompile(Oe,W),lt=De.acquireProgram(Oe,Ye),qe.set(Ye,lt),ie.uniforms=Oe.uniforms;const Qe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qe.clippingPlanes=Je.uniform),na(A,Oe),ie.needsLights=Rl(A),ie.lightsStateVersion=ke,ie.needsLights&&(Qe.ambientLightColor.value=ae.state.ambient,Qe.lightProbe.value=ae.state.probe,Qe.directionalLights.value=ae.state.directional,Qe.directionalLightShadows.value=ae.state.directionalShadow,Qe.spotLights.value=ae.state.spot,Qe.spotLightShadows.value=ae.state.spotShadow,Qe.rectAreaLights.value=ae.state.rectArea,Qe.ltc_1.value=ae.state.rectAreaLTC1,Qe.ltc_2.value=ae.state.rectAreaLTC2,Qe.pointLights.value=ae.state.point,Qe.pointLightShadows.value=ae.state.pointShadow,Qe.hemisphereLights.value=ae.state.hemi,Qe.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Qe.spotLightMatrix.value=ae.state.spotLightMatrix,Qe.spotLightMap.value=ae.state.spotLightMap,Qe.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=lt,ie.uniformsList=null,lt}function ta(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function na(A,q){const oe=se.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function vr(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(q.matrixWorld);for(let oe=0,ie=A.length;oe<ie;oe++){const ae=A[oe];if(ae.texture!==null&&ae.boundingBox.containsPoint(C))return ae}return null}function Ia(A,q,oe,ie,ae){q.isScene!==!0&&(q=ln),he.resetTextureUnits();const Be=q.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?q.environment:null,Oe=ee===null?W.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:bt.workingColorSpace,Ye=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,qe=we.get(ie.envMap||ke,Ye),et=ie.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Qe=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,Qt=!!oe.morphAttributes.color;let Xt=Ki;ie.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Xt=W.toneMapping);const Ot=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Pt=Ot!==void 0?Ot.length:0,Ve=se.get(ie),On=N.state.lights;if(dt===!0&&(_t===!0||A!==Te)){const Lt=A===Te&&ie.id===pe;Je.setState(ie,A,Lt)}let vt=!1;ie.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==On.state.version||Ve.outputColorSpace!==Oe||ae.isBatchedMesh&&Ve.batching===!1||!ae.isBatchedMesh&&Ve.batching===!0||ae.isBatchedMesh&&Ve.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ve.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ve.instancing===!1||!ae.isInstancedMesh&&Ve.instancing===!0||ae.isSkinnedMesh&&Ve.skinning===!1||!ae.isSkinnedMesh&&Ve.skinning===!0||ae.isInstancedMesh&&Ve.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ve.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ve.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ve.instancingMorph===!1&&ae.morphTexture!==null||Ve.envMap!==qe||ie.fog===!0&&Ve.fog!==Be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Je.numPlanes||Ve.numIntersection!==Je.numIntersection)||Ve.vertexAlphas!==et||Ve.vertexTangents!==lt||Ve.morphTargets!==Qe||Ve.morphNormals!==At||Ve.morphColors!==Qt||Ve.toneMapping!==Xt||Ve.morphTargetsCount!==Pt||!!Ve.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ve.__version=ie.version);let vn=Ve.currentProgram;vt===!0&&(vn=Pa(ie,q,ae),J&&ie.isNodeMaterial&&J.onUpdateProgram(ie,vn,Ve));let ii=!1,Ai=!1,ai=!1;const It=vn.getUniforms(),Jt=Ve.uniforms;if(E.useProgram(vn.program)&&(ii=!0,Ai=!0,ai=!0),ie.id!==pe&&(pe=ie.id,Ai=!0),Ve.needsLights){const Lt=vr(N.state.lightProbeGridArray,ae);Ve.lightProbeGrid!==Lt&&(Ve.lightProbeGrid=Lt,Ai=!0)}if(ii||Te!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(Y,"projectionMatrix",A.projectionMatrix),It.setValue(Y,"viewMatrix",A.matrixWorldInverse);const Fi=It.map.cameraPosition;Fi!==void 0&&Fi.setValue(Y,nn.setFromMatrixPosition(A.matrixWorld)),U.logarithmicDepthBuffer&&It.setValue(Y,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&It.setValue(Y,"isOrthographic",A.isOrthographicCamera===!0),Te!==A&&(Te=A,Ai=!0,ai=!0)}if(Ve.needsLights&&(On.state.directionalShadowMap.length>0&&It.setValue(Y,"directionalShadowMap",On.state.directionalShadowMap,he),On.state.spotShadowMap.length>0&&It.setValue(Y,"spotShadowMap",On.state.spotShadowMap,he),On.state.pointShadowMap.length>0&&It.setValue(Y,"pointShadowMap",On.state.pointShadowMap,he)),ae.isSkinnedMesh){It.setOptional(Y,ae,"bindMatrix"),It.setOptional(Y,ae,"bindMatrixInverse");const Lt=ae.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),It.setValue(Y,"boneTexture",Lt.boneTexture,he))}ae.isBatchedMesh&&(It.setOptional(Y,ae,"batchingTexture"),It.setValue(Y,"batchingTexture",ae._matricesTexture,he),It.setOptional(Y,ae,"batchingIdTexture"),It.setValue(Y,"batchingIdTexture",ae._indirectTexture,he),It.setOptional(Y,ae,"batchingColorTexture"),ae._colorsTexture!==null&&It.setValue(Y,"batchingColorTexture",ae._colorsTexture,he));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&X.update(ae,oe,vn),(Ai||Ve.receiveShadow!==ae.receiveShadow)&&(Ve.receiveShadow=ae.receiveShadow,It.setValue(Y,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&q.environment!==null&&(Jt.envMapIntensity.value=q.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=bC()),Ai){if(It.setValue(Y,"toneMappingExposure",W.toneMappingExposure),Ve.needsLights&&hn(Jt,ai),Be&&ie.fog===!0&&Ge.refreshFogUniforms(Jt,Be),Ge.refreshMaterialUniforms(Jt,ie,Ee,ye,N.state.transmissionRenderTarget[A.id]),Ve.needsLights&&Ve.lightProbeGrid){const Lt=Ve.lightProbeGrid;Jt.probesSH.value=Lt.texture,Jt.probesMin.value.copy(Lt.boundingBox.min),Jt.probesMax.value.copy(Lt.boundingBox.max),Jt.probesResolution.value.copy(Lt.resolution)}gu.upload(Y,ta(Ve),Jt,he)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(gu.upload(Y,ta(Ve),Jt,he),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&It.setValue(Y,"center",ae.center),It.setValue(Y,"modelViewMatrix",ae.modelViewMatrix),It.setValue(Y,"normalMatrix",ae.normalMatrix),It.setValue(Y,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Lt=ie.uniformsGroups;for(let Fi=0,za=Lt.length;Fi<za;Fi++){const xr=Lt[Fi];be.update(xr,vn),be.bind(xr,vn)}}return vn}function hn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Rl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(A,q,oe){const ie=se.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=q,se.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:oe,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=se.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,oe=0){ee=A,B=q,H=oe;let ie=null,ae=!1,Be=!1;if(A){const Oe=se.get(A);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),L.copy(A.viewport),Z.copy(A.scissor),Ae=A.scissorTest,E.viewport(L),E.scissor(Z),E.setScissorTest(Ae),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(Oe.__hasExternalTextures)he.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const et=A.depthTexture;if(Oe.__boundDepthTexture!==et){if(et!==null&&se.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const Ye=A.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Be=!0);const qe=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ie=qe[q][oe]:ie=qe[q],ae=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ie=se.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ie=qe[oe]:ie=qe,L.copy(A.viewport),Z.copy(A.scissor),Ae=A.scissorTest}else L.copy(Pe).multiplyScalar(Ee).floor(),Z.copy(Ct).multiplyScalar(Ee).floor(),Ae=ot;if(oe!==0&&(ie=me),E.bindFramebuffer(Y.FRAMEBUFFER,ie)&&E.drawBuffers(A,ie),E.viewport(L),E.scissor(Z),E.setScissorTest(Ae),ae){const Oe=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Be){const Oe=q;for(let Ye=0;Ye<A.textures.length;Ye++){const qe=se.get(A.textures[Ye]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ye,qe.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=se.get(A.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,q,oe,ie,ae,Be,ke,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){E.bindFramebuffer(Y.FRAMEBUFFER,Ye);try{const qe=A.textures[Oe],et=qe.format,lt=qe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(et)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(lt)){Tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-ae&&Y.readPixels(q,oe,ie,ae,Ue.convert(et),Ue.convert(lt),Be)}finally{const qe=ee!==null?se.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ie,ae,Be,ke,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye)if(q>=0&&q<=A.width-ie&&oe>=0&&oe<=A.height-ae){E.bindFramebuffer(Y.FRAMEBUFFER,Ye);const qe=A.textures[Oe],et=qe.format,lt=qe.type;if(A.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe),!U.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.bufferData(Y.PIXEL_PACK_BUFFER,Be.byteLength,Y.STREAM_READ),Y.readPixels(q,oe,ie,ae,Ue.convert(et),Ue.convert(lt),0);const At=ee!==null?se.get(ee).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,At);const Qt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await m1(Y,Qt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Qe),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Be),Y.deleteBuffer(Qe),Y.deleteSync(Qt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ie=Math.pow(2,-oe),ae=Math.floor(A.image.width*ie),Be=Math.floor(A.image.height*ie),ke=q!==null?q.x:0,Oe=q!==null?q.y:0;he.setTexture2D(A,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,oe,0,0,ke,Oe,ae,Be),E.unbindTexture()},this.copyTextureToTexture=function(A,q,oe=null,ie=null,ae=0,Be=0){let ke,Oe,Ye,qe,et,lt,Qe,At,Qt;const Xt=A.isCompressedTexture?A.mipmaps[Be]:A.image;if(oe!==null)ke=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,et=oe.min.y,lt=oe.isBox3?oe.min.z:0;else{const Jt=Math.pow(2,-ae);ke=Math.floor(Xt.width*Jt),Oe=Math.floor(Xt.height*Jt),A.isDataArrayTexture?Ye=Xt.depth:A.isData3DTexture?Ye=Math.floor(Xt.depth*Jt):Ye=1,qe=0,et=0,lt=0}ie!==null?(Qe=ie.x,At=ie.y,Qt=ie.z):(Qe=0,At=0,Qt=0);const Ot=Ue.convert(q.format),Pt=Ue.convert(q.type);let Ve;q.isData3DTexture?(he.setTexture3D(q,0),Ve=Y.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Ve=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Ve=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,q.unpackAlignment);const On=E.getParameter(Y.UNPACK_ROW_LENGTH),vt=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),vn=E.getParameter(Y.UNPACK_SKIP_PIXELS),ii=E.getParameter(Y.UNPACK_SKIP_ROWS),Ai=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Xt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Xt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,qe),E.pixelStorei(Y.UNPACK_SKIP_ROWS,et),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,lt);const ai=A.isDataArrayTexture||A.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const Jt=se.get(A),Ri=se.get(q),Lt=se.get(Jt.__renderTarget),Fi=se.get(Ri.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Lt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let za=0;za<Ye;za++)ai&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ae,lt+za),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,se.get(q).__webglTexture,Be,Qt+za)),Y.blitFramebuffer(qe,et,ke,Oe,Qe,At,ke,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||se.has(A)){const Jt=se.get(A),Ri=se.get(q);E.bindFramebuffer(Y.READ_FRAMEBUFFER,ve),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,$);for(let Lt=0;Lt<Ye;Lt++)ai?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Jt.__webglTexture,ae,lt+Lt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Jt.__webglTexture,ae),It?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ri.__webglTexture,Be,Qt+Lt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Ri.__webglTexture,Be),ae!==0?Y.blitFramebuffer(qe,et,ke,Oe,Qe,At,ke,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):It?Y.copyTexSubImage3D(Ve,Be,Qe,At,Qt+Lt,qe,et,ke,Oe):Y.copyTexSubImage2D(Ve,Be,Qe,At,qe,et,ke,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else It?A.isDataTexture||A.isData3DTexture?Y.texSubImage3D(Ve,Be,Qe,At,Qt,ke,Oe,Ye,Ot,Pt,Xt.data):q.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Be,Qe,At,Qt,ke,Oe,Ye,Ot,Xt.data):Y.texSubImage3D(Ve,Be,Qe,At,Qt,ke,Oe,Ye,Ot,Pt,Xt):A.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Be,Qe,At,ke,Oe,Ot,Pt,Xt.data):A.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Be,Qe,At,Xt.width,Xt.height,Ot,Xt.data):Y.texSubImage2D(Y.TEXTURE_2D,Be,Qe,At,ke,Oe,Ot,Pt,Xt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,On),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,vt),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,vn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ii),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ai),Be===0&&q.generateMipmaps&&Y.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){B=0,H=0,ee=null,E.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=bt._getDrawingBufferColorSpace(e),i.unpackColorSpace=bt._getUnpackColorSpace()}}const Jv=320,AC="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg",RC="https://unpkg.com/three-globe/example/img/earth-topology.png",wC="https://threejs.org/examples/textures/planets/earth_clouds_1024.png",Hr={lat:21.15,lon:79.09},Rd=[{name:"San Francisco",lat:37.77,lon:-122.42},{name:"London",lat:51.51,lon:-.13},{name:"Singapore",lat:1.35,lon:103.82},{name:"Berlin",lat:52.52,lon:13.4},{name:"Dubai",lat:25.2,lon:55.27},{name:"Tokyo",lat:35.68,lon:139.65}],qr=(r,e,i)=>{const s=tv.degToRad(90-r),l=tv.degToRad(e+180);return new Q(-i*Math.sin(s)*Math.cos(l),i*Math.cos(s),i*Math.sin(s)*Math.sin(l))},CC=(r,e,i=1.38)=>{const s=qr(r.lat,r.lon,1.02),l=qr(e.lat,e.lon,1.02),c=s.clone().add(l).normalize().multiplyScalar(i);return new cT(s,c,l)},DC=()=>{const r=ue.useRef(null);return ue.useEffect(()=>{const e=r.current;if(!e)return;const i=new q1,s=new bi(42,1,.1,40);s.position.z=2.55;const l=new TC({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setSize(Jv,Jv),l.outputColorSpace=Xn,e.appendChild(l.domElement);const c=[],f=Me=>(c.push(Me),Me),d=f(new qn),m=420,p=new Float32Array(m*3);for(let Me=0;Me<m;Me+=1){const Xe=8+Math.random()*10,Pe=qr(Math.random()*180-90,Math.random()*360-180,Xe);p[Me*3]=Pe.x,p[Me*3+1]=Pe.y,p[Me*3+2]=Pe.z}d.setAttribute("position",new Ii(p,3));const _=new iT(d,f(new Yx({color:14411775,size:.018,transparent:!0,opacity:.7})));i.add(_);const g=new jr;g.rotation.z=.35,i.add(g);const v=f(new Xr(1,64,64)),S=f(new gT({color:10204360,shininess:8,specular:new ft(2236962)})),b=new Un(v,S);g.add(b);const w=new Un(f(new Xr(1.12,48,48)),f(new kr({color:7252223,transparent:!0,opacity:.14,side:Wn})));g.add(w);const M=f(new _T({transparent:!0,opacity:0,depthWrite:!1})),x=new Un(f(new Xr(1.018,64,64)),M);g.add(x),i.add(new AT(16777215,.42));const D=new Av(16774373,1.45);D.position.set(5,1.4,3.2),i.add(D);const P=new Av(8299263,.28);P.position.set(-4,-1,-2),i.add(P);const C=new jr;g.add(C);const I=f(new kr({color:14150911})),N=f(new kr({color:16761466})),z=f(new Xr(.016,12,12)),T=new Un(z,N);T.position.copy(qr(Hr.lat,Hr.lon,1.02)),C.add(T);const O=f(new kr({color:16761466,transparent:!0,opacity:.7,side:Yi})),W=new Un(f(new Bp(.03,.038,32)),O),k=qr(Hr.lat,Hr.lon,1);W.position.copy(qr(Hr.lat,Hr.lon,1.025)),W.quaternion.setFromUnitVectors(new Q(0,0,1),k.normalize()),C.add(W),Rd.forEach(Me=>{const Xe=new Un(z,I);Xe.position.copy(qr(Me.lat,Me.lon,1.018)),C.add(Xe)});const J=Rd.map((Me,Xe)=>{const Pe=CC(Hr,Me,1.32+Xe%3*.06),Ct=Pe.getPoints(64),ot=f(new qn().setFromPoints(Ct)),gt=new nT(ot,f(new qx({color:10406911,transparent:!0,opacity:.42})));C.add(gt);const dt=new Un(f(new Xr(.012,8,8)),f(new kr({color:16777215})));return C.add(dt),{curve:Pe,packet:dt,offset:Xe/Rd.length}}),me=[0,1,2].map(Me=>{const Xe=new Un(f(new ro(.035,.018,.022)),f(new mT({color:14015976,metalness:.7,roughness:.3,emissive:2241348}))),Pe=new jr;return Pe.rotation.x=.4+Me*.45,Pe.rotation.z=Me*.7,Xe.position.set(1.28,0,0),Pe.add(Xe),g.add(Pe),Pe}),ve=new ET;ve.setCrossOrigin("anonymous"),ve.load(AC,Me=>{Me.colorSpace=Xn,S.map=Me,S.color.set(16777215),S.needsUpdate=!0}),ve.load(RC,Me=>{S.bumpMap=Me,S.bumpScale=.05,S.needsUpdate=!0}),ve.load(wC,Me=>{Me.colorSpace=Xn,M.map=Me,M.opacity=.32,M.needsUpdate=!0});let $=!1,B=0,H=0,ee=.9,pe=.28,Te=0,L=0,Z=0;const Ae=new CT,Re=l.domElement;Re.style.cursor="grab";const Ie=Me=>{$=!0,Te=0,L=0,B=Me.clientX,H=Me.clientY,Re.style.cursor="grabbing",Re.setPointerCapture(Me.pointerId)},re=Me=>{if(!$)return;const Xe=Me.clientX-B,Pe=Me.clientY-H;B=Me.clientX,H=Me.clientY,ee+=Xe*.0055,pe=Math.max(-1.05,Math.min(1.05,pe+Pe*.0055)),Te=Xe*.0055,L=Pe*.0055},ye=Me=>{$=!1,Re.style.cursor="grab",Re.hasPointerCapture(Me.pointerId)&&Re.releasePointerCapture(Me.pointerId)};Re.addEventListener("pointerdown",Ie),Re.addEventListener("pointermove",re),Re.addEventListener("pointerup",ye),Re.addEventListener("pointercancel",ye);const Ee=()=>{const Me=Ae.getElapsedTime();$||(ee+=Te+.0024,pe+=L,Te*=.93,L*=.93,pe+=(.28-pe)*.018),g.rotation.y=ee,g.rotation.x=pe,x.rotation.y+=7e-4,_.rotation.y+=15e-5;const Xe=1+(Math.sin(Me*2.4)+1)*.55;W.scale.set(Xe,Xe,Xe),O.opacity=.55-(Xe-1)*.35,J.forEach((Pe,Ct)=>{const ot=(Me*.12+Pe.offset)%1;Pe.packet.position.copy(Pe.curve.getPointAt(ot)),Pe.packet.scale.setScalar(.7+Math.sin(Me*4+Ct)*.2)}),me.forEach((Pe,Ct)=>{Pe.rotation.y+=.004+Ct*.0012}),l.render(i,s),Z=requestAnimationFrame(Ee)};return Ee(),()=>{cancelAnimationFrame(Z),Re.removeEventListener("pointerdown",Ie),Re.removeEventListener("pointermove",re),Re.removeEventListener("pointerup",ye),Re.removeEventListener("pointercancel",ye),c.forEach(Me=>Me.dispose?.()),l.dispose(),e.contains(Re)&&e.removeChild(Re)}},[]),G.jsxs("div",{className:"globe-wrap",children:[G.jsx("div",{ref:r,className:"globe-stage"}),G.jsx("p",{className:"globe-hint",children:"India · remote corridors · drag to explore"})]})},UC=()=>G.jsxs("section",{className:"site-section",id:"about",children:[G.jsx(Ln,{children:G.jsx(no,{index:"01",kicker:"About",title:"World-class code,",italic:"from anywhere."})}),G.jsxs("div",{className:"about-layout",children:[G.jsx(Ln,{children:G.jsx(DC,{})}),G.jsxs(Ln,{delay:120,className:"about-copy",children:[G.jsx("div",{className:"remote-badge",children:"Remote ready"}),G.jsxs("p",{children:["I'm a software developer with a bias for"," ",G.jsx("strong",{children:"clear systems"})," and interfaces that feel inevitable. I work across the stack — React and Next.js on the surface, Python, Node, and Postgres underneath."]}),G.jsx("p",{children:"Recent work includes MandiSync, a live mandi-arbitrage tool for Indian farmers, and ArtByAnjali, an animation-led art portfolio with a custom admin."}),G.jsxs("div",{className:"about-stats",children:[G.jsxs("div",{className:"about-stat",children:[G.jsx("span",{children:"04"}),G.jsx("small",{children:"Shipped products"})]}),G.jsxs("div",{className:"about-stat",children:[G.jsx("span",{children:"FS"}),G.jsx("small",{children:"Full-stack"})]}),G.jsxs("div",{className:"about-stat",children:[G.jsx("span",{children:"IN"}),G.jsx("small",{children:"Based in India"})]})]}),G.jsx("div",{style:{marginTop:"1.75rem"},children:G.jsxs("a",{href:"https://drive.google.com/uc?export=download&id=1VafCk3WhuVaIC0FEjFGvBOjzPqeif7qZ",target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary inline-flex items-center gap-2",children:[G.jsx(sb,{className:"w-4 h-4"})," Download Resume (PDF)"]})})]})]})]}),LC=[{period:"2024 — Jul 2026",title:"Master of Computer Applications",place:"Dev Bhoomi Uttarakhand University",detail:"Completed in July 2026. Two years of full-stack work, system design basics, and turning coursework into things I could actually ship — not just submit."},{period:"2021 — 2024",title:"Bachelor of Computer Applications",place:"Shri Guru Ram Rai University",detail:"Where I got serious about web development and modular thinking. Also captained the university volleyball team to a championship — taught me more about pressure and teamwork than any lab ever did."},{period:"2019 — 2021",title:"Higher Secondary",place:"GIC Rikhnikhal, Pauri Garhwal",detail:"Grew up in the hills of Uttarakhand. Finished school with 80% in Class XII and 74% in Class X — science stream, first steps toward building with computers."}],NC=[{period:"Jan — May 2026",title:"Frontend Developer Intern",place:"Codeware IT Pvt. Ltd.",detail:"Worked on a live e-commerce product in React and Tailwind — wiring REST APIs, fixing cross-browser quirks, and keeping the UI fast enough that it didn’t feel like a side project."},{period:"Jun — Jul 2025",title:"Software Developer Intern",place:"Uttarakhand Media Ventures Pvt. Ltd.",detail:"Built and refined components for a news portal where content updates constantly. Learned how to keep layouts stable when data is always moving, and how Git fits into a real team workflow."}],OC=()=>G.jsxs("section",{className:"site-section",id:"career",children:[G.jsx(Ln,{children:G.jsx(no,{index:"02",kicker:"Career",title:"Where I learned",italic:"to build."})}),G.jsx(Ln,{delay:60,children:G.jsx("p",{className:"career-intro",children:"I'm from Pauri Garhwal, Uttarakhand — a small-town start, but I've been lucky to study, intern, and build in places that pushed me. This is the path that got me here."})}),G.jsxs("div",{className:"career-block",children:[G.jsx(Ln,{children:G.jsx("h3",{className:"career-label",children:"Education"})}),G.jsx("div",{className:"career-list",children:LC.map((r,e)=>G.jsx(Ln,{delay:e*60,children:G.jsxs("article",{className:"career-row",children:[G.jsx("time",{className:"career-period",children:r.period}),G.jsxs("div",{className:"career-body",children:[G.jsx("h4",{className:"career-title",children:r.title}),G.jsx("p",{className:"career-place",children:r.place}),G.jsx("p",{className:"career-detail",children:r.detail})]})]})},r.title))})]}),G.jsxs("div",{className:"career-block",children:[G.jsx(Ln,{children:G.jsx("h3",{className:"career-label",children:"Experience"})}),G.jsx("div",{className:"career-list",children:NC.map((r,e)=>G.jsx(Ln,{delay:e*60,children:G.jsxs("article",{className:"career-row",children:[G.jsx("time",{className:"career-period",children:r.period}),G.jsxs("div",{className:"career-body",children:[G.jsx("h4",{className:"career-title",children:r.title}),G.jsx("p",{className:"career-place",children:r.place}),G.jsx("p",{className:"career-detail",children:r.detail})]})]})},r.title))})]})]}),PC=[{title:"Web Development",description:"Responsive product interfaces with React, Next.js, and careful performance budgets.",icon:ab},{title:"Interface Design",description:"Layouts, type, and motion that make a product feel inevitable instead of decorated.",icon:yb},{title:"Software Systems",description:"APIs, data models, and admin flows that stay maintainable after the first demo.",icon:pb},{title:"Performance",description:"Load, interaction, and SEO work so the experience holds up on real devices.",icon:ub}],IC=()=>G.jsxs("section",{className:"site-section",id:"services",children:[G.jsx(Ln,{children:G.jsx(no,{index:"04",kicker:"Services",title:"What I can take",italic:"off your plate."})}),G.jsx("div",{className:"services-list",children:PC.map((r,e)=>{const i=r.icon;return G.jsx(Ln,{delay:e*70,children:G.jsxs("div",{className:"service-row",children:[G.jsx("span",{className:"service-index",children:String(e+1).padStart(2,"0")}),G.jsx("h3",{className:"service-title",children:r.title}),G.jsx("p",{className:"service-copy",children:r.description}),G.jsx(i,{className:"service-icon",size:18})]})},r.title)})})]}),zC=[{title:"MandiSync",description:"Crop arbitrage dashboard for Indian farmers using live Agmarknet prices",tech:["Next.js","FastAPI","PostGIS","TypeScript"],link:"https://anuragrawat121.github.io/MandiSync/",repo:"https://github.com/anuragrawat121/MandiSync",featured:!0},{title:"ArtByAnjali",description:"High-performance MERN art portfolio with scroll-driven animations and a custom admin dashboard",tech:["React","Node.js","MongoDB","GSAP"],link:"https://artbyanjali.vercel.app/"},{title:"College Event Manager",description:"Full-stack college event management solution",tech:["React","Tailwind","Node.js","MongoDB"],link:"https://college-event-manager-ko2c.vercel.app/"},{title:"Portfolio Website",description:"A modern portfolio website built with React and Tailwind CSS",tech:["React","Tailwind","JavaScript"],link:"https://anuragrawat121.github.io/MyFolio/"}],BC=()=>G.jsxs("section",{className:"site-section",id:"projects",children:[G.jsx(Ln,{children:G.jsx(no,{index:"05",kicker:"Selected work",title:"Things I’ve",italic:"shipped."})}),G.jsx("div",{className:"projects-stack",children:zC.map((r,e)=>G.jsx(Ln,{delay:e*80,children:G.jsxs("article",{className:`project-card ${r.featured?"is-featured":""}`,children:[G.jsx("span",{className:"project-index",children:String(e+1).padStart(2,"0")}),G.jsxs("div",{children:[G.jsx("h3",{className:"project-title",children:r.title}),G.jsx("p",{className:"project-description",children:r.description}),G.jsx("div",{className:"project-tech",children:r.tech.map(i=>G.jsx("span",{className:"tech-tag",children:i},i))})]}),(r.link||r.repo)&&G.jsxs("div",{className:"project-actions",children:[r.link&&G.jsxs("a",{href:r.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:["Live ",G.jsx(nb,{size:14})]}),r.repo&&G.jsx("a",{href:r.repo,target:"_blank",rel:"noopener noreferrer",className:"btn btn-secondary",children:"Repo"})]})]})},r.title))})]}),FC=()=>G.jsxs("section",{className:"site-section",id:"contact",children:[G.jsx(Ln,{children:G.jsx(no,{index:"06",kicker:"Contact",title:"Let’s make",italic:"something."})}),G.jsxs(Ln,{delay:100,className:"contact-panel",children:[G.jsxs("p",{className:"contact-headline",children:["Have a project",G.jsx("br",{}),G.jsx("em",{children:"in mind?"})]}),G.jsx("a",{className:"contact-mail",href:"mailto:arwt8947@gmail.com",children:"arwt8947@gmail.com"}),G.jsx("p",{className:"contact-note",children:"Open to freelance, collaborations, and full-time product work. A short note about the problem is enough to start."}),G.jsxs("div",{className:"social-links",style:{marginBottom:"1.75rem"},children:[G.jsx("a",{href:"mailto:arwt8947@gmail.com",className:"social-link","aria-label":"Email",children:G.jsx(Ex,{className:"w-4 h-4"})}),G.jsx("a",{href:"https://github.com/anuragrawat121",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"GitHub",children:G.jsx(Sx,{className:"w-4 h-4"})}),G.jsx("a",{href:"https://www.linkedin.com/in/anurag-rawat-03884b296",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"LinkedIn",children:G.jsx(Mx,{className:"w-4 h-4"})}),G.jsx("a",{href:"https://www.instagram.com/rwt._.anurag",target:"_blank",rel:"noopener noreferrer",className:"social-link","aria-label":"Instagram",children:G.jsx(yx,{className:"w-4 h-4"})})]}),G.jsx("a",{href:"https://wa.me/7017349285?text=Hi%20Anurag%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.",target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary",children:"Send a message"})]})]}),HC=()=>{const r=ue.useRef(null);return ue.useEffect(()=>{const e=r.current;if(!e)return;const i=()=>{const s=window.scrollY,l=document.documentElement.scrollHeight-window.innerHeight,c=l>0?s/l*100:0;e.style.width=`${c}%`};return i(),window.addEventListener("scroll",i,{passive:!0}),window.addEventListener("resize",i),()=>{window.removeEventListener("scroll",i),window.removeEventListener("resize",i)}},[]),G.jsx("div",{ref:r,className:"scroll-progress","aria-hidden":"true"})};function GC(){const[r,e]=ue.useState(!0);return ue.useEffect(()=>{const i=setTimeout(()=>{e(!1)},2e3);return()=>clearTimeout(i)},[]),G.jsxs(Rb,{children:[G.jsx(Nb,{isLoading:r}),G.jsx(HC,{}),G.jsxs("div",{className:"site-shell",children:[G.jsx(Lb,{}),G.jsx(wb,{}),G.jsx("section",{id:"home",className:"hero",children:G.jsxs("div",{className:"hero-grid",children:[G.jsx(Ab,{}),G.jsx(Ub,{})]})}),G.jsx(UC,{}),G.jsx(OC,{}),G.jsx(Ob,{}),G.jsx(IC,{}),G.jsx(BC,{}),G.jsx(FC,{}),G.jsxs("footer",{className:"site-footer",children:[G.jsx("span",{children:"Anurag Rawat"}),G.jsx("span",{children:"© 2026"})]})]})]})}xM.createRoot(document.getElementById("root")).render(G.jsx(HE,{children:G.jsx(GC,{})}));
