import{s as z,w as L,r as H,u as M,g as J,f as U,h as v,i as y,j as Q,k as G,n as K,l as V}from"./@vue.a1179c56.js";var q=Object.defineProperty,X=Object.defineProperties,Y=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))Z.call(t,n)&&C(e,n,t[n]);if(N)for(var n of N(t))k.call(t,n)&&C(e,n,t[n]);return e},te=(e,t)=>X(e,Y(t));function Pe(e,t){var n;const r=z();return L(()=>{r.value=e()},te(ee({},t),{flush:(n=t==null?void 0:t.flush)!=null?n:"sync"})),H(r)}var D;const E=typeof window<"u",ne=e=>typeof e<"u",Ie=e=>typeof e=="boolean",re=e=>typeof e=="function",Ee=e=>typeof e=="number",oe=e=>typeof e=="string",ie=()=>{};E&&((D=window==null?void 0:window.navigator)==null?void 0:D.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function w(e){return typeof e=="function"?e():M(e)}function B(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function ue(e,t={}){let n,r;return s=>{const i=w(e),u=w(t.maxWait);if(n&&clearTimeout(n),i<=0||u!==void 0&&u<=0)return r&&(clearTimeout(r),r=null),s();u&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,s()},u)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,s()},i)}}function se(e,t=!0,n=!0){let r=0,o,s=!0;const i=()=>{o&&(clearTimeout(o),o=void 0)};return a=>{const f=w(e),d=Date.now()-r;if(i(),f<=0)return r=Date.now(),a();d>f&&(n||!s)?(r=Date.now(),a()):t&&(o=setTimeout(()=>{r=Date.now(),s=!0,i(),a()},f-d)),!n&&!o&&(o=setTimeout(()=>s=!0,f)),s=!1}}function ae(e){return e}function x(e){return J()?(U(e),!0):!1}function le(e,t=200,n={}){return B(ue(t,n),e)}function Te(e,t=200,n={}){const r=v(e.value),o=le(()=>{r.value=e.value},t,n);return y(e,()=>o()),r}function Se(e,t=200,n=!1,r=!0){return B(se(t,n,r),e)}function F(e,t=!0){Q()?G(e):t?e():K(e)}function $e(e,t,n={}){const{immediate:r=!0}=n,o=v(!1);let s=null;function i(){s&&(clearTimeout(s),s=null)}function u(){o.value=!1,i()}function a(...f){i(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...f)},w(t))}return r&&(o.value=!0,E&&a()),x(u),{isPending:o,start:a,stop:u}}function b(e){var t;const n=w(e);return(t=n==null?void 0:n.$el)!=null?t:n}const P=E?window:void 0,ce=E?window.document:void 0;function h(...e){let t,n,r,o;if(oe(e[0])||Array.isArray(e[0])?([n,r,o]=e,t=P):[t,n,r,o]=e,!t)return ie;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const s=[],i=()=>{s.forEach(d=>d()),s.length=0},u=(d,m,p)=>(d.addEventListener(m,p,o),()=>d.removeEventListener(m,p,o)),a=y(()=>b(t),d=>{i(),d&&s.push(...n.flatMap(m=>r.map(p=>u(d,m,p))))},{immediate:!0,flush:"post"}),f=()=>{a(),i()};return x(f),f}function xe(e,t,n={}){const{window:r=P,ignore:o,capture:s=!0,detectIframe:i=!1}=n;if(!r)return;let u=!0,a;const f=l=>{r.clearTimeout(a);const c=b(e);if(!(!c||c===l.target||l.composedPath().includes(c))){if(!u){u=!0;return}t(l)}},d=l=>o&&o.some(c=>{const O=b(c);return O&&(l.target===O||l.composedPath().includes(O))}),m=[h(r,"click",f,{passive:!0,capture:s}),h(r,"pointerdown",l=>{const c=b(e);c&&(u=!l.composedPath().includes(c)&&!d(l))},{passive:!0}),h(r,"pointerup",l=>{if(l.button===0){const c=l.composedPath();l.composedPath=()=>c,a=r.setTimeout(()=>f(l),50)}},{passive:!0}),i&&h(r,"blur",l=>{var c;const O=b(e);((c=r.document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(O!=null&&O.contains(r.document.activeElement))&&t(l)})].filter(Boolean);return()=>m.forEach(l=>l())}function fe(e,t=!1){const n=v(),r=()=>n.value=Boolean(e());return r(),F(r,t),n}function de(e){return JSON.parse(JSON.stringify(e))}const S=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$="__vueuse_ssr_handlers__";S[$]=S[$]||{};S[$];function Fe(e,t,{window:n=P,initialValue:r=""}={}){const o=v(r),s=V(()=>{var i;return b(t)||((i=n==null?void 0:n.document)==null?void 0:i.documentElement)});return y([s,()=>w(e)],([i,u])=>{var a;if(i&&n){const f=(a=n.getComputedStyle(i).getPropertyValue(u))==null?void 0:a.trim();o.value=f||r}},{immediate:!0}),y(o,i=>{var u;(u=s.value)!=null&&u.style&&s.value.style.setProperty(w(e),i)}),o}function Ne({document:e=ce}={}){if(!e)return v("visible");const t=v(e.visibilityState);return h(e,"visibilitychange",()=>{t.value=e.visibilityState}),t}var j=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable,me=(e,t)=>{var n={};for(var r in e)pe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&j)for(var r of j(e))t.indexOf(r)<0&&ve.call(e,r)&&(n[r]=e[r]);return n};function Oe(e,t,n={}){const r=n,{window:o=P}=r,s=me(r,["window"]);let i;const u=fe(()=>o&&"ResizeObserver"in o),a=()=>{i&&(i.disconnect(),i=void 0)},f=y(()=>b(e),m=>{a(),u.value&&o&&m&&(i=new ResizeObserver(t),i.observe(m,s))},{immediate:!0,flush:"post"}),d=()=>{a(),f()};return x(d),{isSupported:u,stop:d}}function Ce(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:o=!0,immediate:s=!0}=t,i=v(0),u=v(0),a=v(0),f=v(0),d=v(0),m=v(0),p=v(0),l=v(0);function c(){const O=b(e);if(!O){n&&(i.value=0,u.value=0,a.value=0,f.value=0,d.value=0,m.value=0,p.value=0,l.value=0);return}const _=O.getBoundingClientRect();i.value=_.height,u.value=_.bottom,a.value=_.left,f.value=_.right,d.value=_.top,m.value=_.width,p.value=_.x,l.value=_.y}return Oe(e,c),y(()=>b(e),O=>!O&&c()),o&&h("scroll",c,{passive:!0}),r&&h("resize",c,{passive:!0}),F(()=>{s&&c()}),{height:i,bottom:u,left:a,right:f,top:d,width:m,x:p,y:l,update:c}}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var _e=Object.defineProperty,R=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,A=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ye=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&A(e,n,t[n]);if(R)for(var n of R(t))be.call(t,n)&&A(e,n,t[n]);return e};const ge={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ye({linear:ae},ge);function De(e,t,n,r={}){var o,s,i;const{clone:u=!1,passive:a=!1,eventName:f,deep:d=!1,defaultValue:m}=r,p=Q(),l=n||(p==null?void 0:p.emit)||((o=p==null?void 0:p.$emit)==null?void 0:o.bind(p))||((i=(s=p==null?void 0:p.proxy)==null?void 0:s.$emit)==null?void 0:i.bind(p==null?void 0:p.proxy));let c=f;t||(t="modelValue"),c=f||c||`update:${t.toString()}`;const O=g=>u?re(u)?u(g):de(g):g,_=()=>ne(e[t])?O(e[t]):m;if(a){const g=_(),T=v(g);return y(()=>e[t],I=>T.value=O(I)),y(T,I=>{(I!==e[t]||d)&&l(c,I)},{deep:d}),T}else return V({get(){return _()},set(g){l(c,g)}})}function je({window:e=P}={}){if(!e)return v(!1);const t=v(e.document.hasFocus());return h(e,"blur",()=>{t.value=!1}),h(e,"focus",()=>{t.value=!0}),t}function We(e={}){const{window:t=P,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:o=!0,includeScrollbar:s=!0}=e,i=v(n),u=v(r),a=()=>{t&&(s?(i.value=t.innerWidth,u.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};return a(),F(a),h("resize",a,{passive:!0}),o&&h("orientationchange",a,{passive:!0}),{width:i,height:u}}export{Ee as a,Ie as b,We as c,Ce as d,h as e,Oe as f,Se as g,Fe as h,E as i,$e as j,Ne as k,je as l,Pe as m,De as n,xe as o,Te as r,x as t,b as u};
