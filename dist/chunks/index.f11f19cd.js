(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode(".bonus-info{border-radius:8px;background-color:var(--v3-black-0)}.bonus-info__iframe-close{display:flex!important;flex-direction:row-reverse;color:var(--v3-black-45);cursor:pointer}.bonus-info__header{color:var(--v3-primary-6);font-size:18px;font-weight:600;line-height:24px;text-align:center;margin-bottom:24px}.bonus-info__headerMob{color:var(--v3-primary-6);font-size:24px;font-style:normal;font-weight:600;line-height:28px;margin:12px 0 24px}.bonus-info__col{border-right:1px solid var(--v3-black-6);padding:4px;color:var(--v3-text-color)}.bonus-info__col:first-child{padding-left:0}.bonus-info__col:last-child{border-right:none;color:var(--v3-success-color)!important;padding-right:0}.bonus-info__rowWrapperMob{padding-bottom:12px;overflow-y:scroll;max-height:188px}.bonus-info__title{text-align:center;font-size:14px;font-weight:600;line-height:16px}.bonus-info__items{display:flex;flex-direction:column;align-items:center}.bonus-info__item{padding-top:4px}.bonus-info__item__Price{min-width:50px;position:relative;text-align:center}.bonus-info__item__Price .freebeticon{position:absolute!important;left:40px}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import{_ as h}from"./i18next.083d61f0.js";import"./backend-status-codes.4c1943df.js";import{C as p}from"./col.94909042.js";import{R as _}from"./index.9011aacc.js";import{S as j,j as o,i as a}from"./index.9a33d21b.js";import{memo as M,useMemo as I}from"react";import{c as N}from"./index.fbd937ed.js";import{G as f,E as d,C as b}from"./app-data.3313f084.js";import{u as C}from"./usePredefinedStakes.892527de.js";import{u as A}from"./useTranslation.70287e96.js";import"react-dom";import"./index.7d5f88f7.js";import"./create-test-id.17a0abc8.js";import"./placements.2094afc0.js";import"./create-fake-array.68114bc4.js";import"./index.17630e7e.js";import"./index.2e7649fa.js";import"./swarm-command-names.afa48e3f.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./index.9e499441.js";import"./useDispatch.151d3a82.js";import"./context.f61a2be2.js";j.IS_RTL&&h(()=>Promise.resolve({}),["assets/rtl80.css"]);const Y=M(({sportBonuses:l,setVisible:s})=>{const{formatAmount:v,currencyId:x}=C(),{t}=A(),c=I(()=>({titles:[{title:t("betslip.betCount")},{title:t("betslip.minOdd")},{title:t("betslip.minBet")},{title:`${t("account.bonus")} %`}],values:[{value:["MinimumSelections","MaximumSelections"]},{value:"MinOdds"},{value:"MinBetStakes"},{value:"AmountPercent"}]}),[l]);return o.jsxs("div",{className:"bonus-info",children:[a()?null:o.jsx(f,{lib:"generic",name:"close",theme:"default",size:d._14,className:"bonus-info__iframe-close",onClick:()=>s==null?void 0:s(!1)}),o.jsx("div",{className:a()?"bonus-info__headerMob":"bonus-info__header",children:t("betslip.bonusInformation")}),o.jsxs("div",{className:a()?"bonus-info__rowWrapperMob":"bonus-info__rowWrapper",children:[o.jsx(_,{children:c.titles.map((e,r)=>o.jsx(p,{span:b.SIZE_6,className:"bonus-info__col",children:o.jsx("div",{className:"bonus-info__title",children:e.title})},r))}),o.jsx(_,{children:c.values.map((e,r)=>o.jsx(p,{span:b.SIZE_6,className:"bonus-info__col",children:o.jsx("div",{className:"bonus-info__items",children:l.map(i=>{var u;let m;if(e.value==="MinBetStakes"){const n=(u=i.MinBetStakes.MinStakes)==null?void 0:u.find(S=>S.Currency===x);m=n!=null&&n.Amount?`${v(String(n==null?void 0:n.Amount)||"")}`:"-"}else m=r?String(i[e.value]):`${i.MinimumSelections} - ${i.MaximumSelections}`;return o.jsxs("span",{className:N(["bonus-info__item",{"bonus-info__item__Price":e.value==="AmountPercent"}]),children:[m,e.value==="AmountPercent"&&i.FreeBetId&&o.jsx(f,{lib:"generic",name:"freebetSmall",theme:"colored",size:d._24,className:"freebeticon"})]},i.MinimumSelections)})})},r))})]})]})});export{Y as BonusInfo};
