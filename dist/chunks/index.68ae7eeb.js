var m=Object.defineProperty;var c=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var s=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))b.call(o,t)&&s(e,t,o[t]);if(c)for(var t of c(o))V.call(o,t)&&s(e,t,o[t]);return e};import{j as i,i as k}from"./index.053dea56.js";import{Suspense as l}from"react";const w={mobile:!0,desktop:!0},h=function(e){const o=e.mobile,t=e.desktop,{mobile:d=!0,desktop:u=!0}=e.conditions||w,r=e.forceViewport?e[e.forceViewport]:null,f={mobile:e.forceViewport!=="desktop",desktop:e.forceViewport!=="mobile"},a=e.forceViewport?f[e.forceViewport]:!0;return i.jsxs(i.Fragment,{children:[r&&a&&i.jsx(l,{children:i.jsx(r,n({},e.innerProps))}),i.jsx(l,{fallback:e.fallback||null,children:r?null:k()?d&&i.jsx(o,n({},e.innerProps)):u&&i.jsx(t,n({},e.innerProps))})]})};export{h as V};
