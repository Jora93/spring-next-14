var u=Object.defineProperty,S=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var s=(o,a,e)=>a in o?u(o,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[a]=e,r=(o,a)=>{for(var e in a||(a={}))E.call(a,e)&&s(o,e,a[e]);if(t)for(var e of t(a))I.call(a,e)&&s(o,e,a[e]);return o},m=(o,a)=>S(o,C(a));import{_ as i}from"./i18next.083d61f0.js";import{S as g,j as n}from"./index.9a33d21b.js";import{useCallback as P}from"react";import{L,s as A}from"./swarm-command-names.afa48e3f.js";import{l}from"./lazy.73833dcd.js";import{V as N}from"./index.6cdb25e4.js";import{C as v}from"./index.ccacb51f.js";import{u as R}from"./useOpenLoginPopup.9bf6877c.js";import{t as y}from"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import{a as O}from"./fav-data.eb686620.js";import{g as V}from"./user-data.358c1cdc.js";import{u as D}from"./useDispatch.151d3a82.js";import{u as _}from"./index.17630e7e.js";g.IS_RTL&&i(()=>Promise.resolve({}),["assets/rtl54.css"]);const{CasinoGameCardMobile:b}=l(()=>i(()=>import("./index.be3e99dd.js"),["chunks/index.be3e99dd.js","chunks/index.9a33d21b.js","chunks/custom-categories.700b2888.js","chunks/i18next.083d61f0.js","chunks/swarm-command-names.afa48e3f.js","chunks/route-manipulation.7a3d02e7.js","chunks/index.2e7649fa.js","chunks/backend-status-codes.4c1943df.js","chunks/not-real-sports.64fc4139.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/CasinoGamesConfigsContext.b2b74c57.js","chunks/index.9c369ab9.js","chunks/styled-components.browser.esm.04179a03.js","chunks/index.7d5f88f7.js","chunks/useOpenCasinoGame.6de477e1.js","chunks/index.1dfc2dcd.js","chunks/new-casino.c45049f4.js","chunks/game-url.afce1e8e.js","chunks/casino.a461d655.js","chunks/get-domain.8143fbe7.js","chunks/app-routes.c65435c5.js","chunks/index.c7348bcc.js","chunks/api-post-message-sender.98c07ac7.js","chunks/sport-data.58080bc0.js","chunks/useDispatch.151d3a82.js","chunks/user-data.358c1cdc.js","chunks/batch.dcd71b53.js","chunks/casino-data.e9191b01.js","chunks/useSearchParams.353231ec.js","chunks/useSbRouteMatch.ecfb9430.js","chunks/useOpenGame.d5a8411f.js","chunks/index.bce1d4ad.js","chunks/lazy.73833dcd.js","chunks/casino-data.957df014.js","chunks/index.ccacb51f.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js"])),{CasinoGameCardDesktop:x}=l(()=>i(()=>import("./index.8095c4c4.js"),["chunks/index.8095c4c4.js","chunks/index.9a33d21b.js","chunks/index.fbd937ed.js","chunks/app-data.3313f084.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/tour.8bae694e.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/CasinoGamesConfigsContext.b2b74c57.js","chunks/index.9c369ab9.js","chunks/styled-components.browser.esm.04179a03.js","chunks/index.7d5f88f7.js","chunks/useOpenCasinoGame.6de477e1.js","chunks/custom-categories.700b2888.js","chunks/route-manipulation.7a3d02e7.js","chunks/not-real-sports.64fc4139.js","chunks/index.1dfc2dcd.js","chunks/new-casino.c45049f4.js","chunks/game-url.afce1e8e.js","chunks/casino.a461d655.js","chunks/get-domain.8143fbe7.js","chunks/app-routes.c65435c5.js","chunks/index.c7348bcc.js","chunks/api-post-message-sender.98c07ac7.js","chunks/sport-data.58080bc0.js","chunks/useDispatch.151d3a82.js","chunks/user-data.358c1cdc.js","chunks/batch.dcd71b53.js","chunks/casino-data.e9191b01.js","chunks/useSearchParams.353231ec.js","chunks/useSbRouteMatch.ecfb9430.js","chunks/index.bce1d4ad.js","chunks/lazy.73833dcd.js","chunks/casino-data.957df014.js","chunks/index.ccacb51f.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js"])),H=o=>{const a=D(),e=_(V),c=R(),p=_(O(o.game.extearnal_game_id,"casino")),f=P(d=>{d.stopPropagation(),!e&&g.USER_PERSONALIZATION_ENABLED?(L.setItem(A("account","UNSIGNED_FAV_CASINO_GAME"),JSON.stringify(o.game)),c()):a(y({entity:o.game,groupKey:"casino"}))},[o.game,e]);return n.jsx(N,{desktop:x,mobile:b,innerProps:m(r({},o),{isFavorite:p,onFavoriteToggle:f,casinoNameSize:o.casinoNameSize,casinoPlayRealBtnSize:o.casinoPlayRealBtnSize,setVisible:o.setVisible}),fallback:n.jsx(v,{hidePartials:o.hidePartials})})};export{H as C};
