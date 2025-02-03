(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode('.crashGame__wrapper{position:absolute;inset:0}.crashGame__wrapper--players{gap:4px;margin:4px;height:24px;padding:4px;display:flex;flex-shrink:0;width:min-content;align-items:center;border-radius:24px;backdrop-filter:blur(2.5px);background:rgba(0,0,0,.7)}.crashGame__wrapper--online{color:#fed359;font-size:12px;font-style:normal;font-weight:400;line-height:16px;letter-spacing:.06px}.crashGame__wrapper--results{left:0;right:0;bottom:0;margin:4px;height:24px;direction:ltr;overflow:hidden;position:absolute;align-items:center;border-radius:24px;backdrop-filter:blur(2.5px);background:rgba(0,0,0,.7)}.crashGame__wrapper--resultItems{top:0;gap:12px;width:100%;right:-10px;display:flex;margin:4px 8px;position:absolute}.crashGame__wrapper--resultItem{display:block;font-size:12px;color:#fff;font-weight:400;line-height:16px;font-style:normal;letter-spacing:.06px}.crashGame__wrapper--resultItem:not(:last-child):after{content:"";width:2px;height:10px;margin:4px 6px;position:absolute;display:inline-block;border-left:1px solid #8C8C8C}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{j as a}from"./index.9a33d21b.js";import{useRef as c,useEffect as l,useState as f}from"react";import{G as u,E as d}from"./app-data.3313f084.js";import"react-dom";import"./index.fbd937ed.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.17630e7e.js";const h=({nextAnimationFrameHandler:s,duration:o=Number.POSITIVE_INFINITY,shouldAnimate:n=!0,render:t})=>{const i=c(0),r=c(performance.now()),e=p=>{let m=(p-r.current)/o;m>1&&(m=1),m<=1&&(s(m),m!=1&&(i.current=requestAnimationFrame(e)))};l(()=>(n?(r.current=performance.now(),i.current=requestAnimationFrame(e)):(cancelAnimationFrame(i.current),t==null||t()),()=>cancelAnimationFrame(i.current)),[n])};const x=1e4,R=({crashGameItem:s})=>{const[o,n]=f(!1),t=c(null);return h({nextAnimationFrameHandler:r=>{if(t.current){const e=t.current;e.style.paddingLeft=`${e.offsetWidth}px`,e&&(r<1?e.style.left=`-${e.scrollWidth*r}px`:(e.style.left=`${e.offsetWidth+e.style.paddingRight}px`,n(!1)))}},shouldAnimate:o,duration:x,render:()=>n(!!s)}),l(()=>{if(t.current){const r=t.current;r.style.paddingLeft=`${r.offsetWidth+r.style.paddingRight}px`}},[t]),a.jsxs("div",{className:"crashGame__wrapper",children:[a.jsxs("div",{className:"crashGame__wrapper--players",children:[a.jsx(u,{lib:"casino",theme:"default",name:"users",size:d._16}),a.jsx("span",{className:"crashGame__wrapper--online",children:s.onlinePlayerCount})]}),a.jsx("div",{className:"crashGame__wrapper--results",children:a.jsx("div",{ref:t,className:"crashGame__wrapper--resultItems",children:s.results.map((r,e)=>a.jsx("span",{className:"crashGame__wrapper--resultItem",children:r},e))})})]})};export{R as CrashGameItem};
