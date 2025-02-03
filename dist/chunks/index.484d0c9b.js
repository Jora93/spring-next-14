(function(){"use strict";try{if(typeof document!="undefined"){var o=document.createElement("style");o.appendChild(document.createTextNode(".jackpotPoolSlider{position:relative;overflow:hidden}.jackpotPoolSlider--shadow{box-shadow:var(--v3-shadow-strong)}.jackpotPoolSlider__slide{width:100%;overflow:hidden;box-shadow:var(--v3-shadow-strong);cursor:default}.jackpotPoolSlider__slide__title{font-weight:600;text-align:center;color:var(--v3-text-color);padding:16px 76px 28px}.jackpotPoolSlider__slide__title--background{background-color:var(--v3-black-0)}.jackpotPoolSlider .carousel__dots{width:100%;position:absolute;top:calc(var(--carousel-title-height) - 20px)!important;margin:0}.jackpotPoolSlider .carousel__dots button{background-color:var(--v3-black-15);opacity:1}.jackpotPoolSlider .carousel__dots__active button{background-color:var(--v3-primary-6);opacity:1}.jackpotPoolSlider .carousel__arrow{top:calc(var(--carousel-title-height) / 2)!important}.jackpotPoolSlider .carousel__arrow-left{left:24px!important}.jackpotPoolSlider .carousel__arrow-right{right:24px!important}")),document.head.appendChild(o)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{_ as l}from"./i18next.083d61f0.js";import{j as t,a4 as s}from"./index.9a33d21b.js";import{Suspense as d}from"react";import{c as m}from"./index.fbd937ed.js";import{l as c}from"./lazy.73833dcd.js";import{u as n,c as _}from"./index.b7392f96.js";import{JackpotPool as u}from"./index.2a36cb90.js";import"react-dom";import"./jackpot.6ac13427.js";import"./app-data.3313f084.js";import"./backend-status-codes.4c1943df.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.17630e7e.js";import"./generic.cf030613.js";import"./route-manipulation.7a3d02e7.js";import"./index.2e7649fa.js";import"./swarm-command-names.afa48e3f.js";import"./not-real-sports.64fc4139.js";import"./index.6cdb25e4.js";import"./useTranslation.70287e96.js";import"./context.f61a2be2.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./index.9e499441.js";import"./useDispatch.151d3a82.js";import"./casino-data.e9191b01.js";import"./casino-data.957df014.js";import"./index.2b71192b.js";import"./index.27fc0452.js";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./index.7d5f88f7.js";const{SwiperSlider:j}=c(()=>l(()=>import("./index.b128bef9.js"),["chunks/index.b128bef9.js","chunks/i18next.083d61f0.js","chunks/index.9a33d21b.js","chunks/index.fbd937ed.js","chunks/app-data.3313f084.js","chunks/backend-status-codes.4c1943df.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/index.184af16c.js"])),X=({jackpot:e})=>{const o=n(),r=o==null?void 0:o.elementSizes.main,i=Object.values(e);return t.jsx("div",{style:{borderRadius:o==null?void 0:o.jackpotBorderRadius,"--carousel-title-height":`${r.name.line+s.NUMBER_TYPE_44}px`},className:m(["jackpotPoolSlider",{"jackpotPoolSlider--shadow":!!(o!=null&&o.jackpotBackground)}]),children:t.jsx(d,{fallback:t.jsx(_,{}),children:t.jsx(j,{activeSlide:0,slidesPerView:1,bodyArrows:i.length>1,showIndicators:i.length>1,loop:!0,indicatorsCustomClassName:"carousel__dots",drawableTabs:i.map(({Id:p,Name:a})=>t.jsxs("div",{className:"jackpotPoolSlider__slide",children:[t.jsx("div",{style:{fontSize:r.name.font,lineHeight:`${r.name.line}px`},className:m(["jackpotPoolSlider__slide__title",{"jackpotPoolSlider__slide__title--background":!!(o!=null&&o.jackpotBackground)}]),children:a.toUpperCase()}),t.jsx(u,{currentId:p,jackpot:e})]},p))})})})};export{X as JackpotPoolSlider};
