(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".collapseWrapper{background-color:var(--v3-black-0);border-radius:4px;overflow:hidden;margin-bottom:4px;padding-left:8px;padding-right:8px}.collapseWrapper--active{padding-bottom:8px;background-color:var(--v3-black-4)}.collapseHeader{cursor:pointer;display:flex;flex-direction:row;align-items:center;justify-content:space-between;min-height:52px;line-height:16px;padding:0 4px}.collapseIcon{margin-right:8px}.collapseTitle{display:inline-flex;align-items:center;font-size:14px;line-height:16px;font-weight:600;color:var(--v3-text-color);flex:1;text-transform:capitalize}.expandIcon{transition:transform .24s}.expandIcon--expanded{transform:rotate(180deg)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var z=Object.defineProperty,C=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var d=(a,e,s)=>e in a?z(a,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[e]=s,o=(a,e)=>{for(var s in e||(e={}))G.call(e,s)&&d(a,s,e[s]);if(m)for(var s of m(e))S.call(e,s)&&d(a,s,e[s]);return a},n=(a,e)=>C(a,b(e));import{j as c}from"./index.9a33d21b.js";import{useState as _,useEffect as k}from"react";import{c as i}from"./index.fbd937ed.js";import{G as x,E as j}from"./app-data.3313f084.js";import{c as f}from"./create-test-id.17a0abc8.js";import{E as u}from"./index.9c369ab9.js";const B=({title:a,icon:e,defaultActive:s,onToggle:l,children:v,wrapperClassName:h,headerClassName:I,showArrow:E=!0,arrowIconName:r="CaretDown",renderTitleWithArrow:p})=>{const[t,N]=_(!!s);return k(()=>{l==null||l(t)},[t]),c.jsxs("div",{className:i(["collapseWrapper",{"collapseWrapper--active":t},h]),children:[c.jsxs("div",n(o({},f()),{className:i(["collapseHeader",I]),onClick:()=>N(!t),children:[e&&c.jsx("div",n(o({className:"collapseIcon"},f()),{children:e})),c.jsx("div",{className:"collapseTitle",children:p?p(c.jsx(u,{size:"sm",ghost:!0,icon:c.jsx(x,{lib:"generic",name:r,theme:"default",size:j._15,className:i(["expandIcon",{"expandIcon--expanded":t}])})})):a}),c.jsx("div",{className:"collapseIconsGroup",children:E&&c.jsx(u,{size:"sm",ghost:!0,icon:c.jsx(x,{lib:"generic",name:r,theme:"default",size:j._15,className:i(["expandIcon",{"expandIcon--expanded":t}])})})})]})),t&&v]})};export{B as C};
