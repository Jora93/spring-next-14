var b=Object.defineProperty,D=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var u=(s,n,m)=>n in s?b(s,n,{enumerable:!0,configurable:!0,writable:!0,value:m}):s[n]=m,a=(s,n)=>{for(var m in n||(n={}))g.call(n,m)&&u(s,m,n[m]);if(C)for(var m of C(n))O.call(n,m)&&u(s,m,n[m]);return s},_=(s,n)=>D(s,A(n));import{S as t,j as e}from"./index.9a33d21b.js";import{c as M}from"./index.fbd937ed.js";import{G as l,E as p}from"./app-data.3313f084.js";import{M as R}from"./tour.8bae694e.js";import{bM as E}from"./index.2e7649fa.js";import{u as k}from"./CasinoGamesConfigsContext.b2b74c57.js";import{E as y}from"./index.9c369ab9.js";import{B as L}from"./index.7d5f88f7.js";import{u as U}from"./useOpenCasinoGame.6de477e1.js";import{g as z}from"./user-data.358c1cdc.js";import{I as F}from"./index.bce1d4ad.js";import"./index.ccacb51f.js";import{u as B}from"./useTranslation.70287e96.js";import{u as Z}from"./index.17630e7e.js";import"react";import"react-dom";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./swarm-command-names.afa48e3f.js";import"./styled-components.browser.esm.04179a03.js";import"./custom-categories.700b2888.js";import"./route-manipulation.7a3d02e7.js";import"./not-real-sports.64fc4139.js";import"./index.1dfc2dcd.js";import"./new-casino.c45049f4.js";import"./game-url.afce1e8e.js";import"./casino.a461d655.js";import"./get-domain.8143fbe7.js";import"./app-routes.c65435c5.js";import"./index.c7348bcc.js";import"./api-post-message-sender.98c07ac7.js";import"./sport-data.58080bc0.js";import"./useDispatch.151d3a82.js";import"./batch.dcd71b53.js";import"./casino-data.e9191b01.js";import"./useSearchParams.353231ec.js";import"./useSbRouteMatch.ecfb9430.js";import"./lazy.73833dcd.js";import"./casino-data.957df014.js";import"./context.f61a2be2.js";const w=14,Ro=({game:s,isFavorite:n,onFavoriteToggle:m,casinoPlayRealBtnSize:x,casinoNameSize:i,index:v,scaleOut:N,hidePartials:o})=>{const{t:j}=B(),T=U(),G=Z(z),{configs:c}=k(),f=(r,S)=>(r.stopPropagation(),T(S,s)),d=i?+i-2:w,I=!!(!s.types.funMode||t.CASINO_DISABLE_FUN_MODE_FOR_NOT_AUTHORIZED_USERS&&!G||!t.CASINO_FUN_MODE);return e.jsxs("div",{className:"x-casinoGameCardWrapper",style:{order:v},children:[e.jsx("div",_(a({className:M(["x-casinoGameCardDesktop",{"x-casinoGameCardDesktop__scaleOut":N}]),"data-testid":"casino_game_card"},t.USER_PERSONALIZATION_ENABLED?{"data-tour":R}:{}),{children:e.jsx(F,_(a({},s),{children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"x-casinoGameCardDesktop__buttons",children:[e.jsxs("div",{className:"casino__real-btn",children:[!s.types.realMode&&t.DECENTRALIZED_CASINO_URL?null:e.jsxs("div",{className:"casino__real-btn-wrapper",onClick:r=>f(r,E.REAL),children:[e.jsx(l,{lib:"casino",name:"play",theme:"default",className:"casino__real-btn-icon",style:{fontSize:"2vw"},size:Number(x)||p._44}),e.jsx(l,{lib:"casino",name:"play",theme:"colored",className:"casino__real-btn-icon-colored",style:{fontSize:"2vw"},size:Number(x)||p._44})]}),!(o!=null&&o.name)&&!c.gameTitle&&e.jsx("span",{className:"casino__name",style:{fontSize:`${i}px`},children:s.name}),!(o!=null&&o.providerTitle)&&!c.gameTitle&&e.jsx("span",{className:"casino__provider-title",style:{fontSize:`${d}px`},children:s.provider_title})]}),I?null:e.jsx(L,{type:"fun",className:"x-casinoGameCardDesktop__buttons__btnFun",onClick:r=>f(r,E.FUN),style:{fontSize:`${d}px`},children:j("casino.funMode")})]}),!(o!=null&&o.favorite)&&e.jsx("div",{className:"x-casinoGameCardDesktop__favoriteBtn",children:e.jsx(y,{icon:e.jsx(l,{lib:"generic",name:"heart",theme:"default",size:N?p._12:p._16}),size:"md",onClick:m,active:n,className:"casino__fav-icon"})})]})}))})),c.gameTitle&&(!(o!=null&&o.name)||!(o!=null&&o.providerTitle))&&e.jsxs("div",{className:"x-casinoGameCardTitle x-casinoGameCardTitle--desktop",children:[!(o!=null&&o.name)&&e.jsx("div",{className:"x-casinoGameCardTitle__gameName globalEllipsis",children:s.name}),!(o!=null&&o.providerTitle)&&e.jsx("div",{className:"x-casinoGameCardTitle__providerName globalEllipsis",children:s.provider_title})]})]})};export{Ro as CasinoGameCardDesktop};
