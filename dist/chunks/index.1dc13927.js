(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".homework__header{gap:8px;cursor:pointer;padding:0 12px;overflow:hidden;border-radius:4px;height:48px;justify-content:space-between;margin-bottom:4px;line-height:16px;display:flex;align-items:center;flex-direction:row;color:var(--v3-text-color);background-color:var(--v3-black-0);flex-shrink:inherit}.homework__header .active{min-height:40px;background-color:var(--v3-black-1);border-bottom:1px solid var(--v3-black-6)}.homework__info svg{color:var(--v3-black-45)!important}.homework__content{flex:1;user-select:none;line-height:14px;align-items:center;display:flex;gap:8px;justify-content:space-between}.homework__title{flex:1;font-size:14px;font-weight:600}.homework__iframe .v3-modal-content{background:transparent!important;box-shadow:none!important}.homework__iframe-content{height:700px}.homework__iframe-content-mobile{height:550px;margin-bottom:100px}.homeworkMobile__header{height:32px;gap:4px;padding:0 8px;min-width:fit-content;background-color:var(--v3-black-4)}.homeworkMobile__header .homework__content{gap:4px}.homeworkMobile__header .homework__title,.homeworkMobile__header .homework__tasks{font-size:11px;font-weight:400}.homeworkMobile__header .homework__info svg{font-size:12px}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{_}from"./i18next.083d61f0.js";import{S as e,u as p,j as o,i as s}from"./index.9a33d21b.js";import{n as c,G as i,I as t,E as h}from"./app-data.3313f084.js";import{a as k}from"./index.1dfc2dcd.js";import{u as w}from"./useTranslation.70287e96.js";import{u as f}from"./index.17630e7e.js";import"react";import"react-dom";import"./index.fbd937ed.js";import"./backend-status-codes.4c1943df.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./swarm-command-names.afa48e3f.js";import"./context.f61a2be2.js";e.IS_RTL&&_(()=>Promise.resolve({}),["assets/rtl30.css"]);const H=()=>{const{t:m}=w(),a=p(),r=f(c);if(!e.HOMEWORK_ENABLED||!r)return null;const n=l=>(l.stopPropagation(),window.open(r.infoUrl));return o.jsxs("div",{className:`homework__header${s()?" homeworkMobile__header":""}`,onClick:()=>a.push(k({homework:"isOpen"})),children:[o.jsx(i,{size:s()?t.MOBILE_18:t.DESKTOP_24,lib:"generic",theme:e.SPORT_ICON_STYLE,name:"homework",className:"text-color"}),o.jsxs("div",{className:"homework__content",children:[o.jsx("span",{className:"homework__title",children:m("sportsbook.homework")}),o.jsxs("span",{className:"homework__tasks primary-color-6",children:[r.answers,"/",r.tasks]}),!!r.infoUrl&&o.jsx(i,{lib:"generic",theme:"default",name:"info",size:h._14,className:"homework__info",onClick:n})]})]})};export{H as Homework};
