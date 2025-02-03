(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode('.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}')),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var w=Object.defineProperty;var A=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var B=(s,t,o)=>t in s?w(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,r=(s,t)=>{for(var o in t||(t={}))J.call(t,o)&&B(s,o,t[o]);if(A)for(var o of A(t))z.call(t,o)&&B(s,o,t[o]);return s};import{_ as k}from"./i18next.083d61f0.js";import"./backend-status-codes.4c1943df.js";import{F as K}from"./index.b34290f2.js";import"./col.94909042.js";import{j as D}from"./index.9a33d21b.js";import{useCallback as T,memo as U,useState as E,useEffect as P}from"react";import{a2 as W,bU as q,aa as g,a3 as G,bV as H,bW as Q}from"./index.2e7649fa.js";import{L as v,s as C,d as _}from"./swarm-command-names.afa48e3f.js";import{g as y,O}from"./odds.3bca0cb7.js";import{l as V}from"./lazy.73833dcd.js";import{E as X}from"./configs-provider.acbc0fc5.js";import{V as Z}from"./index.6cdb25e4.js";import{l as $,b as tt}from"./usePredefinedStakes.892527de.js";import{P as et,l as ot}from"./index.9e499441.js";import{u as m}from"./index.17630e7e.js";import{u as h}from"./useDispatch.151d3a82.js";import{u as st}from"./useTranslation.70287e96.js";import"react-dom";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./index.7d5f88f7.js";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./index.9011aacc.js";import"./useEventbus.6393d2bd.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./context.f61a2be2.js";const at={BASIC:0,ADVANCED:1},{BASIC:it,ADVANCED:rt}=at,dt=[{id:it,label:"Basic",value:0},{id:rt,label:"Advanced",value:1}],mt=()=>{const s=m(y),t=m(et),o=h();return T((a,i)=>{i&&s!==a&&(i==="fractional"&&!t?$(a):o(W(a)),q(i))},[s,t])},{BetslipSettingsMobile:pt}=V(()=>k(()=>import("./index.c7539386.js"),["chunks/index.c7539386.js","chunks/backend-status-codes.4c1943df.js","chunks/index.9a33d21b.js","chunks/i18next.083d61f0.js","chunks/component.338ef72c.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/lazy.73833dcd.js","chunks/index.fbd937ed.js","chunks/useContentHeight.06461539.js","chunks/index.9e499441.js","chunks/index.17630e7e.js","chunks/user-data.358c1cdc.js","chunks/configs-provider.acbc0fc5.js","chunks/useEventbus.6393d2bd.js","chunks/index.b40f854c.js","chunks/app-data.3313f084.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.9fa2e41e.js","chunks/styled-components.browser.esm.04179a03.js","chunks/batch.dcd71b53.js","chunks/useDispatch.151d3a82.js","chunks/index.7d5f88f7.js","chunks/index.b34290f2.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/getScrollBarSize.0c62defe.js","chunks/KeyCode.6413d982.js","chunks/index.9c369ab9.js","chunks/index.b64f0182.js","chunks/quickBetActions.2e30a183.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.3b8e1d1d.js","chunks/index.1514cd2f.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.08cf9b6f.js","chunks/useCheckStakeBalance.aceba74b.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/socket.c1bf8301.js","chunks/index.7dece25d.js","chunks/api-post-message-sender.98c07ac7.js","chunks/index.1dfc2dcd.js","chunks/index.de4d9376.js","chunks/useUpdateEffect.ee726e5b.js","chunks/index.184af16c.js","chunks/wrapper-row-z-index.6fe5ad22.js","chunks/private-competitions.91107fbb.js","chunks/game-current-state.dbd76719.js","chunks/sport-list.d0c83c34.js","chunks/not-real-sports.64fc4139.js","chunks/get-data-level.0ccc74a6.js","chunks/global-variables.eb46f49b.js","chunks/account-settings.fd25e903.js","chunks/index.6af7a08e.js","chunks/fixed-header.6d1fc172.js","chunks/new-casino.50453b68.js","chunks/index.5860c036.js","chunks/index.8ebbf22c.js","chunks/Form.e29033c5.js","chunks/index.56325e35.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/v4.751847df.js","chunks/index.ceba7035.js","chunks/index.549a573d.js","chunks/Skeleton.a5b55c7c.js","chunks/Overflow.554112a5.js","chunks/CheckOutlined.2d4387be.js","chunks/casino.a461d655.js"])),{BetslipSettingsDesktop:nt}=V(()=>k(()=>import("./index.c4e6bd7d.js"),["chunks/index.c4e6bd7d.js","chunks/index.9a33d21b.js","chunks/index.56325e35.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/index.184af16c.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/index.9e499441.js","chunks/user-data.358c1cdc.js","chunks/v4.751847df.js","chunks/useDispatch.151d3a82.js","chunks/Form.e29033c5.js","chunks/index.7d5f88f7.js","chunks/index.b34290f2.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/index.1514cd2f.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.08cf9b6f.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/socket.c1bf8301.js","chunks/batch.dcd71b53.js","chunks/styled-components.browser.esm.04179a03.js","chunks/index.ceba7035.js","chunks/index.549a573d.js","chunks/Skeleton.a5b55c7c.js","chunks/KeyCode.6413d982.js","chunks/Overflow.554112a5.js","chunks/CheckOutlined.2d4387be.js","chunks/casino.a461d655.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js"])),zt=U(({onSettingsClose:s})=>{const{t}=st(),o=m(y),d=m(ot),a=r({},O.find(e=>e.id===o)),{predefinedStakes:i,setPredefinedStakes:M}=tt(),p=JSON.parse(v.getItem(C("betslip","ACCEPT_BET"))),n=p!=null?p:_[0],[b,c]=E(n),[l,f]=E(a),[S,ct]=E(r({},dt[d])),[F]=K.useForm(),L=h(),I=mt(),N=T(e=>{v.setItem(C("betslip","ACCEPT_BET"),e)},[]);P(()=>()=>{f(a),c(n)},[]),P(()=>{F.setFieldsValue(i)},[i]);const x=T(()=>{const{id:e,value:u}=l;I(e,u)},[l]),j=()=>{const{id:e}=S;d!==S.id&&(G({key:X.SET_BETSLIP_TYPE,payload:e}),H(e),L(Q(e)))},R=e=>{N(JSON.stringify(b)),M(e),j(),x(),s()},Y=[{id:2,name:"oddFormat",label:t("betslip.oddFormat"),value:[l.value],onOk:([e])=>{f(r({},g(O,"value",e,!1)))},onDismiss:()=>{f(a)},data:O},{id:3,name:"acceptOdds",label:t("betslip.acceptOdds"),value:[b.value],onOk:([e])=>{const u=r({},g(_,"value",e,!1));c(u)},onDismiss:()=>{c(n)},data:_}];return D.jsx(Z,{mobile:pt,desktop:nt,fallback:D.jsx("span",{}),innerProps:{predefinedStakes:i,form:F,onValidSubmit:R,pickers:Y,onSettingsClose:s,betslipType:d}})});export{zt as SettingsModal};
