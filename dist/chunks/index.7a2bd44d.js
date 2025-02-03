(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".esportEmptyMatch+.EsportDesktop__competitionsListWrapper{height:unset}.esportEmptyMatch{background-color:var(--v3-black-0);height:100%;display:flex;justify-content:center;align-items:center;border-radius:6px}.esportEmptyMatch__mobile{margin:4px;min-height:440px}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var S=Object.defineProperty,T=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(e,o,r)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,a=(e,o)=>{for(var r in o||(o={}))v.call(o,r)&&b(e,r,o[r]);if(h)for(var r of h(o))O.call(o,r)&&b(e,r,o[r]);return e},y=(e,o)=>T(e,R(o));import"./backend-status-codes.4c1943df.js";import{R as j,a as A,b as M}from"./style.b04602fb.js";import{u as P,i as l,j as p,S as c}from"./index.9a33d21b.js";import{useRef as $,useEffect as k}from"react";import{g as C,G as E}from"./app-data.3313f084.js";import{B as G}from"./index.7d5f88f7.js";import{u as U}from"./useTranslation.70287e96.js";import{u as _}from"./index.17630e7e.js";import"react-dom";import"./i18next.083d61f0.js";import"./styled-components.browser.esm.04179a03.js";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./context.f61a2be2.js";const B=e=>e.charAt(0).toUpperCase()+e.slice(1);const tt=({isLive:e,cover:o,withLink:r,isEvent:u,calendar:x,isESport:d})=>{const{t:m}=U(),w=P(),g=_(C),f=$(),i=(t="c",n=!1)=>{const s=(n?!e:e)?"live":x?"calendar":"prematch";switch(t){case"u":return s.toUpperCase();case"l":return s.toLowerCase();case"c":return B(s)}};return k(()=>{if(l())return;const t=f.current.closest(`[class*=${u?"EventsWrapper":"SBCol"}]`),n=t==null?void 0:t.style.position,s=t==null?void 0:t.style.overflow;return t&&(t.style.position="relative",t.style.overflow="initial"),()=>{t&&(t.style.position=n,t.style.overflow=s)}},[f]),p.jsx(j,a(y(a({title:p.jsx(A,{children:m("sportsbook.noGame")})},o?{style:a({background:"var(--v3-black-2)",position:l()?"static":"absolute",top:0,bottom:0,width:l()||!r||u||d?"100%":"136%",zIndex:11,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",right:0},l()&&{padding:0})}:{style:{background:"var(--v3-black-0)"}}),{icon:p.jsx(E,{lib:"generic",name:"noMatches",theme:"colored",size:176,skeleton:{useEmptyPlaceholder:!0}}),subTitle:p.jsx(M,y(a({},!l()&&{ref:f}),{children:m("sportsbook.noGameText")}))}),r&&!u&&{extra:p.jsx(G,{type:"primary",size:"large",onClick:()=>{var t,n;return d?w.replace(`${c.PAGE_URLS.esport}/${c.SPORTSBOOK_MOUNT_PATH}/AllESports?type=${i("l",!0)}`||`${window.location.origin+((t=g.find(s=>s.type==="esport"&&s.category==="esport"))==null?void 0:t.path)}/${c.SPORTSBOOK_MOUNT_PATH}/AllESports?type=${i("l",!0)}`):window.location.href=c.PAGE_URLS[i("l",!0)]||window.location.origin+((n=g.find(s=>s.type===i("l",!0)||s.category===i("l",!0)))==null?void 0:n.path)},children:m(`emptyMessages.emptyMatches${i()}Action`)})}))};export{tt as EmptyMatches};
