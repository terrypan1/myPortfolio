import{o as d,b as h,u as _,ar as y}from"./@vue.a1179c56.js";import{c as g}from"./pinia.5f2d4077.js";import{R as v,c as L,a as P}from"./vue-router.24d37a91.js";import{i as E}from"./element-plus.531e72e3.js";import"./lodash-es.a286bec7.js";import"./@vueuse.01284434.js";import"./@element-plus.73352956.js";import"./@popperjs.36402333.js";import"./@ctrl.82a509e0.js";import"./dayjs.46f97078.js";import"./async-validator.fb49d0f5.js";import"./memoize-one.4ee5c96d.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@floating-ui.43a1fe53.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const R={__name:"App",setup(c){return(r,i)=>(d(),h(_(v)))}},k="modulepreload",O=function(c,r){return new URL(c,r).href},m={},f=function(r,i,s){if(!i||i.length===0)return r();const t=document.getElementsByTagName("link");return Promise.all(i.map(e=>{if(e=O(e,s),e in m)return;m[e]=!0;const o=e.endsWith(".css"),p=o?'[rel="stylesheet"]':"";if(!!s)for(let a=t.length-1;a>=0;a--){const l=t[a];if(l.href===e&&(!o||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${p}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":k,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>r())},A=L({history:P("./"),routes:[{path:"/",redirect:"/frontPage"},{path:"/frontPage",name:"FrontPage",component:()=>f(()=>import("./FrontPage.311dad93.js"),["./FrontPage.311dad93.js","./pinia.5f2d4077.js","./@vue.a1179c56.js","./plugin-vueexport-helper.2444895f.js","./vue-router.24d37a91.js","./FrontPage.6df73905.css"],import.meta.url)},{path:"/home",name:"Home",component:()=>f(()=>import("./Home.399794d6.js"),["./Home.399794d6.js","./@vue.a1179c56.js","./plugin-vueexport-helper.2444895f.js","./vue-router.24d37a91.js","./@element-plus.73352956.js","./Home.9215afab.css"],import.meta.url)}]}),u=y(R);u.use(g());u.use(E);u.use(A);u.mount("#app");
