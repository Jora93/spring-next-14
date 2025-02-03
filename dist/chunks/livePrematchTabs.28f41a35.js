(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".live-prematch-switcher{padding:8px!important;margin-bottom:4px;height:64px!important;border-radius:6px!important}.live-prematch-switcher.customMenu__wrapper{background:var(--v3-black-0)}.live-prematch-switcher .customMenu{align-items:center;background:var(--v3-black-6);border-radius:10px;padding:4px;height:48px;text-overflow:ellipsis;overflow:hidden}.live-prematch-switcher .customMenu .customMenu__item{padding:12px 6px}@media screen and (max-width: 1350px){.live-prematch-switcher .customMenu .customMenu__item{font-size:12px}}.live-prematch-switcher .customMenu .customSkeleton-content .customSkeleton-title{margin-top:0!important}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var f=Object.defineProperty,v=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var u=(t,r,e)=>r in t?f(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,p=(t,r)=>{for(var e in r||(r={}))g.call(r,e)&&u(t,e,r[e]);if(c)for(var e of c(r))h.call(r,e)&&u(t,e,r[e]);return t},a=(t,r)=>v(t,S(r));import{j as E,S as b}from"./index.9a33d21b.js";import{useState as d,useEffect as y}from"react";import{c as l}from"./generic.cf030613.js";import{R as C}from"./index.2e7649fa.js";import{e as R}from"./get-data-level.0ccc74a6.js";import{C as k}from"./index.de4d9376.js";import{u as x}from"./useSportsbookConfigs.7961e643.js";import{u as A}from"./useTranslation.70287e96.js";import"react-dom";import"./route-manipulation.7a3d02e7.js";import"./not-real-sports.64fc4139.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./swarm-command-names.afa48e3f.js";import"./index.fbd937ed.js";import"./lazy.73833dcd.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.17630e7e.js";import"./useUpdateEffect.ee726e5b.js";import"./context.f61a2be2.js";const K=()=>{const{t}=A(),r=x(),[e,n]=d(null);return y(()=>{let o=r.sportType;o!=null&&o.includes("all")&&(o="[0, 2, 5]"),[1,2].map(m=>{R(C.gForSubscribe(),{game:"@count"},{game:{type:m},sport:{type:{"@in":o?Array.isArray(o)?o.map(Number):JSON.parse(o).map(Number):[l.E_SPORT,l.GENERAL,l.UFC]}}},i=>{n(s=>a(p({},s||{}),{[m===1?"live":"prematch"]:i.game}))},!0,i=>{n(s=>a(p({},s||{}),{[m===1?"live":"prematch"]:i.game}))})})},[]),E.jsx(k,{className:"live-prematch-switcher",items:[{key:"live",value:`${t("sportsbook.live")} (${e==null?void 0:e.live})`,skeleton:!e||(e==null?void 0:e.live)===void 0},{key:"prematch",value:`${t("sportsbook.prematch")} (${e==null?void 0:e.prematch})`,skeleton:!e||(e==null?void 0:e.prematch)===void 0}],activeItem:r.type,setActiveItem:o=>{r.type!==o&&window.location.assign(b.PAGE_URLS[o])},fullWidth:!0})};export{K as LivePrematchTabs};
