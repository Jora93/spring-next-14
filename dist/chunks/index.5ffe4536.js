(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".eventCollapse__caret{color:var(--v3-black-45);transition:transform .24s}.eventCollapse__caret-expanded{transform:rotate(180deg)}.eventCollapse__body{height:0}.eventCollapse__body--open{height:initial}div.v3-event-collapse__header.v3-event-collapse__header--esport{padding:8px 16px;background-color:var(--v3-black-0)}.v3-event-collapse__esportPrematchAll{background-color:var(--v3-black-2)}.v3-event-collapse__esportPrematchAll--mobile{margin-top:4px;background-color:var(--v3-black-6)}.v3-event-collapse__esportPrematchAll--mobile:not(.v3-event-collapse__esportPrematchAll){margin:4px}.v3-event-collapse__esportPrematchAll--mobile .v3-select-arrow{right:5px}.esport__competitions__container--mobile .esport__collapse__container{margin-top:4px;margin-bottom:0}.esport__competitions__container--mobile .eventCollapse__title{font-size:14px;line-height:20px}.esport__competitions__container--mobile div.v3-event-collapse__header.v3-event-collapse__header--esport{padding:8px 12px}.esport__competitions__container--mobile .esport__collapse__container>.v3-event-collapse__header{padding:0 12px}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var f=Object.defineProperty,g=Object.defineProperties;var _=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(e,i,t)=>i in e?f(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,s=(e,i)=>{for(var t in i||(i={}))u.call(i,t)&&m(e,t,i[t]);if(r)for(var t of r(i))C.call(i,t)&&m(e,t,i[t]);return e},v=(e,i)=>g(e,_(i));import{j as a}from"./index.053dea56.js";import{forwardRef as y,useState as N,useEffect as j}from"react";import{c as l}from"./index.fbd937ed.js";import{G as $,E as b}from"./app-data.da3833f4.js";import{s as n}from"./styled-components.browser.esm.22f548e7.js";import{E as z}from"./index.652e9765.js";import"react-dom";import"./backend-status-codes.80bfe624.js";import"./i18next.083d61f0.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.ffa75b49.js";const A=n.div`
  color: var(--v3-text-color);
  margin-bottom: ${e=>e.$noMargin?"1px":"4px"};
  border-radius: ${e=>e.$noRadius?0:"6px"};
  overflow: hidden;
  ${e=>e.size==="middle"&&`
      ${h} {
        font-size: 16px;
        line-height: 16px;
      }
      ${x} {
        padding: 0px 12px;
        height: 48px;
      }
  `}
`,x=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 39px;
  line-height: 16px;
  cursor: pointer;
  padding: 0px 8px 0 8px;
  ${e=>e.isActive?` 
        min-height: 40px;
        background-color: var(--v3-black-2);
      `:`
        background-color: var(--v3-black-0);
      `}
`,h=n.div`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  flex: 1;
`,E=n.div`
  margin-right: 8px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,w=n.div`
  font-size: 12px;
  padding: 0 8px;
  color: var(--v3-text-color-secondary);
`;const J=y((e,i)=>{const[t,o]=N(!!e.defaultActive);return j(()=>{o(!!e.defaultActive)},[e.defaultActive]),e.hideWrapper?e.children:a.jsxs(A,v(s(s({"data-testid":e.dataTestId,ref:i,size:e.size,isActive:t,$noMargin:e.noMargin,$noRadius:e.noRadius},t&&{className:"active"}),e.style&&{style:e.style}),{className:l([e.wrapperClassName||"v3-event-collapse",{"eventCollapse--active":t}]),children:[(!!e.icon||!!e.title||!!e.extra)&&a.jsxs(x,{isActive:t,onClick:()=>{var d;(d=e.onChange)==null||d.call(e,!t),o(c=>!c),e.setCollapsedCount&&e.setCollapsedCount(c=>c+1)},className:l(["v3-event-collapse__header",`${e.headerClassName||""}`,{[`${e.headerClassName}--active`]:t&&e.headerClassName,"v3-event-collapse__header-active":t}]),children:[!!e.icon&&a.jsx(E,{className:"eventCollapse__icon",children:e.icon}),a.jsx(h,{className:"eventCollapse__title","data-testid":"event-title",title:typeof e.title=="string"?e.title:"",children:e.title}),e.extra&&a.jsx(w,{className:"extra__container",children:e.extra}),a.jsx(z,{size:"sm",className:"eventCollapse__caretIcon",ghost:!0,icon:a.jsx($,{lib:"generic",name:"caretDownSmall",theme:"default",size:b._24,className:l(["eventCollapse__caret",{"eventCollapse__caret-expanded":t}])})})]}),e.renderInDom?a.jsx("div",{className:l(["navigationCollapse__body",{"navigationCollapse__body--open":t}]),children:e.children}):t&&e.children]}))});export{J as EventCollapse};
