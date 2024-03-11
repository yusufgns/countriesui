(function(y,_){typeof exports=="object"&&typeof module<"u"?_(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],_):(y=typeof globalThis<"u"?globalThis:y||self,_(y["countries-ui"]={},y.React))})(this,function(y,_){"use strict";var V={exports:{}},w={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Ce(){if(Q)return w;Q=1;var U=_,j=Symbol.for("react.element"),B=Symbol.for("react.fragment"),T=Object.prototype.hasOwnProperty,A=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I={key:!0,ref:!0,__self:!0,__source:!0};function k(E,l,O){var v,g={},m=null,W=null;O!==void 0&&(m=""+O),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(W=l.ref);for(v in l)T.call(l,v)&&!I.hasOwnProperty(v)&&(g[v]=l[v]);if(E&&E.defaultProps)for(v in l=E.defaultProps,l)g[v]===void 0&&(g[v]=l[v]);return{$$typeof:j,type:E,key:m,ref:W,props:g,_owner:A.current}}return w.Fragment=B,w.jsx=k,w.jsxs=k,w}var x={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Pe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var U=_,j=Symbol.for("react.element"),B=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),E=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),re=Symbol.iterator,je="@@iterator";function ke(e){if(e===null||typeof e!="object")return null;var r=re&&e[re]||e[je];return typeof r=="function"?r:null}var S=U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];De("error",e,t)}}function De(e,r,t){{var n=S.ReactDebugCurrentFrame,o=n.getStackAddendum();o!==""&&(r+="%s",t=t.concat([o]));var u=t.map(function(i){return String(i)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Fe=!1,Ae=!1,Ie=!1,We=!1,Ye=!1,te;te=Symbol.for("react.module.reference");function $e(e){return!!(typeof e=="string"||typeof e=="function"||e===T||e===I||Ye||e===A||e===O||e===v||We||e===W||Fe||Ae||Ie||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===g||e.$$typeof===k||e.$$typeof===E||e.$$typeof===l||e.$$typeof===te||e.getModuleId!==void 0))}function Le(e,r,t){var n=e.displayName;if(n)return n;var o=r.displayName||r.name||"";return o!==""?t+"("+o+")":t}function ne(e){return e.displayName||"Context"}function h(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case T:return"Fragment";case B:return"Portal";case I:return"Profiler";case A:return"StrictMode";case O:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case E:var r=e;return ne(r)+".Consumer";case k:var t=e;return ne(t._context)+".Provider";case l:return Le(e,e.render,"ForwardRef");case g:var n=e.displayName||null;return n!==null?n:h(e.type)||"Memo";case m:{var o=e,u=o._payload,i=o._init;try{return h(i(u))}catch{return null}}}return null}var R=Object.assign,D=0,ae,ie,oe,ue,se,fe,le;function ce(){}ce.__reactDisabledLog=!0;function Ne(){{if(D===0){ae=console.log,ie=console.info,oe=console.warn,ue=console.error,se=console.group,fe=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}D++}}function Me(){{if(D--,D===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ae}),info:R({},e,{value:ie}),warn:R({},e,{value:oe}),error:R({},e,{value:ue}),group:R({},e,{value:se}),groupCollapsed:R({},e,{value:fe}),groupEnd:R({},e,{value:le})})}D<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=S.ReactCurrentDispatcher,J;function Y(e,r,t){{if(J===void 0)try{throw Error()}catch(o){var n=o.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var G=!1,$;{var Ve=typeof WeakMap=="function"?WeakMap:Map;$=new Ve}function de(e,r){if(!e||G)return"";{var t=$.get(e);if(t!==void 0)return t}var n;G=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ne();try{if(r){var i=function(){throw Error()};if(Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(b){n=b}Reflect.construct(e,[],i)}else{try{i.call()}catch(b){n=b}e.call(i.prototype)}}else{try{throw Error()}catch(b){n=b}e()}}catch(b){if(b&&n&&typeof b.stack=="string"){for(var a=b.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&$.set(e,p),p}while(s>=1&&f>=0);break}}}finally{G=!1,q.current=u,Me(),Error.prepareStackTrace=o}var P=e?e.displayName||e.name:"",Se=P?Y(P):"";return typeof e=="function"&&$.set(e,Se),Se}function Ue(e,r,t){return de(e,!1)}function Be(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Be(e));if(typeof e=="string")return Y(e);switch(e){case O:return Y("Suspense");case v:return Y("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Ue(e.render);case g:return L(e.type,r,t);case m:{var n=e,o=n._payload,u=n._init;try{return L(u(o),r,t)}catch{}}}return""}var N=Object.prototype.hasOwnProperty,ve={},pe=S.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function qe(e,r,t,n,o){{var u=Function.call.bind(N);for(var i in e)if(u(e,i)){var a=void 0;try{if(typeof e[i]!="function"){var d=Error((n||"React class")+": "+t+" type `"+i+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[i]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[i](r,i,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(o),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,i,typeof a),M(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,M(o),c("Failed %s type: %s",t,a.message),M(null))}}}var Je=Array.isArray;function z(e){return Je(e)}function Ge(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function ze(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function he(e){if(ze(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ge(e)),ge(e)}var F=S.ReactCurrentOwner,Ke={key:!0,ref:!0,__self:!0,__source:!0},be,ye,K;K={};function He(e){if(N.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function Xe(e){if(N.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Ze(e,r){if(typeof e.ref=="string"&&F.current&&r&&F.current.stateNode!==r){var t=h(F.current.type);K[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',h(F.current.type),e.ref),K[t]=!0)}}function Qe(e,r){{var t=function(){be||(be=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function er(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var rr=function(e,r,t,n,o,u,i){var a={$$typeof:j,type:e,key:r,ref:t,props:i,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function tr(e,r,t,n,o){{var u,i={},a=null,d=null;t!==void 0&&(he(t),a=""+t),Xe(r)&&(he(r.key),a=""+r.key),He(r)&&(d=r.ref,Ze(r,o));for(u in r)N.call(r,u)&&!Ke.hasOwnProperty(u)&&(i[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)i[u]===void 0&&(i[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Qe(i,f),d&&er(i,f)}return rr(e,a,d,o,n,F.current,i)}}var H=S.ReactCurrentOwner,Ee=S.ReactDebugCurrentFrame;function C(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===j}function me(){{if(H.current){var e=h(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function nr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function ar(e){{var r=me();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function _e(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ar(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+h(e._owner.type)+"."),C(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),C(null)}}function Te(e,r){{if(typeof e!="object")return;if(z(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&_e(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var o=ke(e);if(typeof o=="function"&&o!==e.entries)for(var u=o.call(e),i;!(i=u.next()).done;)Z(i.value)&&_e(i.value,r)}}}function ir(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===g))t=r.propTypes;else return;if(t){var n=h(r);qe(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var o=h(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",o||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){C(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),C(null);break}}e.ref!==null&&(C(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),C(null))}}function Oe(e,r,t,n,o,u){{var i=$e(e);if(!i){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=nr(o);d?a+=d:a+=me();var s;e===null?s="null":z(e)?s="array":e!==void 0&&e.$$typeof===j?(s="<"+(h(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=tr(e,r,t,o,u);if(f==null)return f;if(i){var p=r.children;if(p!==void 0)if(n)if(z(p)){for(var P=0;P<p.length;P++)Te(p[P],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(p,e)}return e===T?or(f):ir(f),f}}function ur(e,r,t){return Oe(e,r,t,!0)}function sr(e,r,t){return Oe(e,r,t,!1)}var fr=sr,lr=ur;x.Fragment=T,x.jsx=fr,x.jsxs=lr}()),x}process.env.NODE_ENV==="production"?V.exports=Ce():V.exports=Pe();var we=V.exports;function xe(){return we.jsx("div",{children:"Test Button"})}y.Button=xe,Object.defineProperty(y,Symbol.toStringTag,{value:"Module"})});
