(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(".tournamentsGamesButtonSkeleton{width:100%;display:flex;align-items:center;justify-content:center;padding:24px 0}.tournamentsGamesButtonSkeleton__button{width:240px!important;height:40px!important}.gameCard-mobile{flex:0 0 50%;max-width:50%}.casinoGameList{padding:15px}.casinoGameListButton--mobile{width:100%;margin-top:15px}.casinoGameListButton--desktop{width:20%;display:block;margin:0 auto}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
var f=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var l=(o,t,m)=>t in o?f(o,t,{enumerable:!0,configurable:!0,writable:!0,value:m}):o[t]=m,e=(o,t)=>{for(var m in t||(t={}))x.call(t,m)&&l(o,m,t[m]);if(n)for(var m of n(t))G.call(t,m)&&l(o,m,t[m]);return o},s=(o,t)=>g(o,C(t));import{j as i,i as p}from"./index.9a33d21b.js";import{S as j,R as c}from"./app-data.3313f084.js";import"./backend-status-codes.4c1943df.js";import{C as S}from"./col.94909042.js";import{R as h}from"./index.9011aacc.js";import{memo as B,useEffect as k}from"react";import{b9 as N}from"./index.2e7649fa.js";import{C as _}from"./index.22f8fdf2.js";import{l as b}from"./casino-data.e9191b01.js";import{h as z,l as L}from"./casino-data.957df014.js";import{u as M}from"./useDispatch.151d3a82.js";import{u}from"./index.17630e7e.js";import{C as R}from"./index.b2c4aedc.js";import{B as T}from"./index.7d5f88f7.js";import{u as A}from"./useTranslation.70287e96.js";import"react-dom";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./i18next.083d61f0.js";import"./placements.2094afc0.js";import"./swarm-command-names.afa48e3f.js";import"./lazy.73833dcd.js";import"./index.6cdb25e4.js";import"./index.ccacb51f.js";import"./CasinoGamesConfigsContext.b2b74c57.js";import"./useOpenLoginPopup.9bf6877c.js";import"./custom-categories.700b2888.js";import"./route-manipulation.7a3d02e7.js";import"./not-real-sports.64fc4139.js";import"./index.1dfc2dcd.js";import"./useSearchParams.353231ec.js";import"./fav-data.eb686620.js";import"./user-data.358c1cdc.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./index.9e499441.js";import"./index.f2580d6f.js";import"./index.3dc509b3.js";import"./get-tournament-time.5f47a243.js";import"./sportsbook.2cb562a0.js";import"./index.cb829a96.js";import"./styled-components.browser.esm.04179a03.js";import"./index.9c369ab9.js";import"./index.b40f854c.js";import"./useSbRouteMatch.ecfb9430.js";import"./sport-data.58080bc0.js";import"./new-sportsbook.6886dfa1.js";import"./useMounted.6d9c5610.js";import"./casino-connector.1ac217b7.js";import"./index.6af7a08e.js";import"./new-casino.e5c4000d.js";import"./CasinoGamePreview.66ca719e.js";import"./casino.a461d655.js";import"./index.b85c00ef.js";import"./index.184af16c.js";import"./context.f61a2be2.js";const E=()=>i.jsx("div",{className:"tournamentsGamesButtonSkeleton",children:i.jsx(j.Button,{className:"tournamentsGamesButtonSkeleton__button"})});const O=B(o=>{var a;const t=M(),m=u(z),d=u(L);return k(()=>{d&&t(b(null))},[m]),i.jsx(h,{gutter:[c._8,c._8],className:o.className,children:(a=o==null?void 0:o.games)==null?void 0:a.map(r=>i.jsx(S,s(e({},o.colSizes),{className:p()?"gameCard-mobile":"",children:i.jsx(_,{game:r,scaleOut:!0,fromAccount:o.fromAccount})}),r.id))})},(o,t)=>!!o.games&&!!t.games&&N(o.games,t.games)),Wo=o=>{const{t}=A();return i.jsxs(i.Fragment,{children:[o.games===null?i.jsx(R,{count:8,colSizes:o.colSizes}):i.jsx(O,{games:o.games,colSizes:o.colSizes}),o.showLoadMoreBtn&&i.jsx("div",{className:"casino__load-more-button casinoGameList",children:o.games===null?i.jsx(E,{}):i.jsx(T,s(e({className:p()?"casinoGameListButton--mobile":"casinoGameListButton--desktop",size:"large",type:"ghost",onClick:()=>{var m;return(m=o.loadMore)==null?void 0:m.call(o)},loading:o.loadMoreBtnLoading},o.loadMoreButtonOptions),{children:t("casino.seeMore")}))})]})};export{Wo as CasinoGamesList};
