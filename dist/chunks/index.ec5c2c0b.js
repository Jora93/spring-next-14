(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".menu-wrapper{width:100%;height:48px;padding:8px 4px;border-radius:4px;position:relative;overflow:hidden;background-color:var(--v3-black-0);box-shadow:var(--v3-shadow-2)}.menu-wrapper__container{display:flex;overflow:auto}.menu-wrapper__container .menuItemFillMobile{cursor:pointer;min-width:45px;height:32px;display:flex;align-items:center;justify-content:center;padding:4px 8px;border-radius:8px;color:var(--v3-text-color)}.menu-wrapper__container .menuItemFillMobile__name{color:var(--v3-color-on-primary);margin-left:4px;visibility:hidden;width:1px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;font-weight:400;line-height:16px;letter-spacing:.1px}.menu-wrapper__container .menuItemFillMobile--active{position:sticky;left:0;right:0;z-index:1;min-width:fit-content;background-color:var(--v3-primary-5)}.menu-wrapper__container .menuItemFillMobile--active__name{visibility:visible;width:auto}.menu-wrapper__container .menuItemFillMobile--active .v3-icon{color:var(--v3-color-on-primary)}.menu-wrapper__container .menuItemFillMobile:not(:last-child){margin-right:2px}")),document.head.appendChild(e)}}catch(i){console.error("vite-plugin-css-injected-by-js",i)}})();
import{_ as p}from"./i18next.083d61f0.js";import{S as e,j as i}from"./index.9a33d21b.js";import{useContext as n}from"react";import{c as s}from"./index.e5947b84.js";import{M as a}from"./MenuItem.7a92e07e.js";import{M as l}from"./useBoostedOdds.fba5ecbe.js";import"react-dom";import"./lazy.73833dcd.js";import"./app-data.3313f084.js";import"./index.fbd937ed.js";import"./backend-status-codes.4c1943df.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.17630e7e.js";import"./useSportsbookConfigs.7961e643.js";import"./generic.cf030613.js";import"./route-manipulation.7a3d02e7.js";import"./index.2e7649fa.js";import"./swarm-command-names.afa48e3f.js";import"./not-real-sports.64fc4139.js";import"./index.9fa2e41e.js";import"./sport-data.58080bc0.js";import"./useDispatch.151d3a82.js";e.DIRECTION==="rtl"&&p(()=>Promise.resolve({}),["assets/rtl59.css"]);const T=()=>{const{items:o,selectedItem:t,onSelectItem:m}=n(s);return o!=null&&o.length?i.jsx("div",{className:"menu-wrapper",children:i.jsx("div",{className:"menu-wrapper__container",children:o.map(r=>i.jsx(a,{item:r,active:(t==null?void 0:t.alias)===r.alias,onClick:()=>m(r)},r.id))})}):i.jsx(l,{})};export{T as MenuFillMobile};
