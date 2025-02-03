(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode("html .cyprusBetRestriction__wrapper{width:100%;display:flex;flex-direction:column;background:var(--v3-black-4);padding:12px;border-radius:8px;gap:10px;margin-bottom:8px}html .cyprusBetRestriction__description{font-family:Hubot Sans!important;font-size:12px;font-weight:400;line-height:16px;letter-spacing:.005em;color:var(--v3-text-color)!important}html .cyprusBetRestriction__addButton{gap:6px;width:100%;display:flex;align-items:center;justify-content:center;color:var(--v3-primary-color)!important;border:solid 1px var(--v3-primary-color)!important}html .cyprusBetRestriction__addButton:hover{color:var(--v3-primary-color)!important;border:solid 1px var(--v3-primary-color)!important}")),document.head.appendChild(t)}}catch(r){console.error("vite-plugin-css-injected-by-js",r)}})();
import{_ as c}from"./i18next.083d61f0.js";import{j as t,S as l}from"./index.9a33d21b.js";import{Suspense as p}from"react";import{R as u,M as _}from"./index.9672d723.js";import{l as m}from"./lazy.73833dcd.js";import{S as e}from"./app-data.3313f084.js";import{F as d}from"./index.9e499441.js";import{u as h}from"./index.17630e7e.js";const C=()=>t.jsx("div",{className:"cyprusBetRestriction__container",children:t.jsxs("div",{className:"cyprusBetRestriction__wrapper",children:[t.jsxs("div",{className:"cyprusBetRestriction__description",children:[t.jsx(e,{title:{style:{width:"90%",margin:0,height:12}},paragraph:!1,active:!0}),t.jsx(e,{title:{style:{width:"50%",margin:"5px 0 0 0",height:12}},paragraph:!1,active:!0})]}),t.jsx("div",{children:t.jsx(e,{title:{style:{width:"100%",margin:0,height:32}},paragraph:!1,active:!0})})]})}),{CyprusBetRestrictionComponent:f}=m(()=>c(()=>import("./component.d349aaef.js"),["chunks/component.d349aaef.js","chunks/index.9a33d21b.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/index.9672d723.js","chunks/lazy.73833dcd.js","chunks/api-post-message-sender.98c07ac7.js","chunks/index.9e499441.js","chunks/user-data.358c1cdc.js","chunks/Skeleton.a5b55c7c.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.7d5f88f7.js","chunks/component.338ef72c.js","chunks/useContentHeight.06461539.js","chunks/configs-provider.acbc0fc5.js","chunks/useEventbus.6393d2bd.js","chunks/index.b40f854c.js","chunks/index.9fa2e41e.js","chunks/styled-components.browser.esm.04179a03.js","chunks/batch.dcd71b53.js","chunks/useDispatch.151d3a82.js","chunks/index.b34290f2.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/getScrollBarSize.0c62defe.js","chunks/KeyCode.6413d982.js","chunks/index.9c369ab9.js","chunks/index.b64f0182.js","chunks/quickBetActions.2e30a183.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.3b8e1d1d.js","chunks/index.1514cd2f.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.08cf9b6f.js","chunks/useCheckStakeBalance.aceba74b.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/socket.c1bf8301.js","chunks/index.7dece25d.js","chunks/index.1dfc2dcd.js","chunks/index.de4d9376.js","chunks/useUpdateEffect.ee726e5b.js","chunks/index.184af16c.js","chunks/wrapper-row-z-index.6fe5ad22.js","chunks/private-competitions.91107fbb.js","chunks/game-current-state.dbd76719.js","chunks/sport-list.d0c83c34.js","chunks/not-real-sports.64fc4139.js","chunks/get-data-level.0ccc74a6.js","chunks/global-variables.eb46f49b.js","chunks/account-settings.fd25e903.js","chunks/index.6af7a08e.js","chunks/fixed-header.6d1fc172.js","chunks/new-casino.50453b68.js","chunks/counterOffer.74a34af9.js","chunks/editBetActions.4f0fb51e.js","chunks/edit-bet.f841d32c.js","chunks/index.3192f705.js","chunks/useDoBet.55e9cf8f.js","chunks/getAdvancedMultipleGeneralField.2fa28824.js","chunks/index.f94c4970.js","chunks/sortable.esm.f749ffa2.js","chunks/favorite-team.a5b4287b.js","chunks/index.9537878a.js","chunks/data-fields.c78d776a.js","chunks/route-manipulation.7a3d02e7.js","chunks/sport-data.58080bc0.js","chunks/new-sportsbook.1752e123.js","chunks/index.2d2dceca.js","chunks/useSportsbookConfigs.7961e643.js","chunks/generic.cf030613.js","chunks/index.27fc0452.js","chunks/index.549a573d.js","chunks/Overflow.554112a5.js","chunks/CheckOutlined.2d4387be.js","chunks/casino.a461d655.js","chunks/index.55b465b5.js","chunks/useOpenLoginPopup.9bf6877c.js","chunks/custom-categories.700b2888.js","chunks/useSearchParams.353231ec.js","chunks/bet-max-amount.65920891.js"])),B=()=>{const s=h(d);if(!l.DISABLE_ONLY_CYPRUS_MATCHES_BET)return null;const o=Object.values(s).length,r=Object.values(s).reduce((n,a)=>n+ +(a.region_id===u.Cyprus),0),i=_-(o-r);return r&&i?t.jsx(p,{fallback:t.jsx(C,{}),children:t.jsx(f,{ticketsCountToAdd:i})}):null};export{B as C};
