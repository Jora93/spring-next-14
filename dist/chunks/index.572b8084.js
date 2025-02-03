(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.tooltip-title{color:var(--v3-text-color);font-size:12px}.tooltip-overlay{color:var(--v3-red)}.bet-types{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:center;margin-bottom:5px;position:relative;padding-bottom:8px}.bet-types h6{padding:12px 2px;flex-grow:1;text-align:center;cursor:pointer;background-color:var(--v3-black-0);margin-bottom:0;font-weight:400;font-size:14px;line-height:20px;color:var(--v3-text-color);position:relative;width:33.33%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.bet-types h6:before{content:"";position:absolute;width:100%;height:2px;background-color:var(--v3-processing-color);left:0;bottom:0;opacity:0}.bet-types h6.active{background-color:var(--v3-black-0);color:var(--v3-text-color)}.bet-types h6.active:before{opacity:1}.bet-types h6.disabled{background-color:var(--v3-black-6);color:var(--v3-black-45);cursor:not-allowed}.bet-types h6--inverse{background-color:var(--v3-black-4)}
.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{j as p}from"./index.9a33d21b.js";import{useEffect as e}from"react";import{d as s}from"./component.338ef72c.js";import{aC as o}from"./index.2e7649fa.js";import{M as a}from"./index.9e499441.js";import{u}from"./useTranslation.70287e96.js";import{u as n}from"./useDispatch.151d3a82.js";import{u as c}from"./index.17630e7e.js";import"react-dom";import"./i18next.083d61f0.js";import"./lazy.73833dcd.js";import"./index.fbd937ed.js";import"./useContentHeight.06461539.js";import"./configs-provider.acbc0fc5.js";import"./useEventbus.6393d2bd.js";import"./index.b40f854c.js";import"./app-data.3313f084.js";import"./backend-status-codes.4c1943df.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.9fa2e41e.js";import"./styled-components.browser.esm.04179a03.js";import"./batch.dcd71b53.js";import"./index.7d5f88f7.js";import"./index.b34290f2.js";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./index.9011aacc.js";import"./col.94909042.js";import"./getScrollBarSize.0c62defe.js";import"./KeyCode.6413d982.js";import"./index.9c369ab9.js";import"./index.b64f0182.js";import"./quickBetActions.2e30a183.js";import"./index.3b8e1d1d.js";import"./index.1514cd2f.js";import"./statusUtils.ab0a6b68.js";import"./SearchOutlined.0011f146.js";import"./index.08cf9b6f.js";import"./useCheckStakeBalance.aceba74b.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./swarm-command-names.afa48e3f.js";import"./socket.c1bf8301.js";import"./user-data.358c1cdc.js";import"./index.7dece25d.js";import"./api-post-message-sender.98c07ac7.js";import"./index.1dfc2dcd.js";import"./index.de4d9376.js";import"./useUpdateEffect.ee726e5b.js";import"./index.184af16c.js";import"./wrapper-row-z-index.6fe5ad22.js";import"./private-competitions.91107fbb.js";import"./game-current-state.dbd76719.js";import"./sport-list.d0c83c34.js";import"./not-real-sports.64fc4139.js";import"./get-data-level.0ccc74a6.js";import"./global-variables.eb46f49b.js";import"./account-settings.fd25e903.js";import"./index.6af7a08e.js";import"./fixed-header.6d1fc172.js";import"./new-casino.50453b68.js";import"./context.f61a2be2.js";const bt=()=>{const{t:r}=u(),t=n(),i=c(a);return e(()=>(t(o(!0)),()=>{t(o(!0))}),[]),p.jsx(s,{featureIsActive:!i,setFeatureIsActive:m=>{t(o(!m))},featureName:r("betslip.useBonusBalance"),tooltipText:r("betslip.useBonusBalanceSwitcherText")})};export{bt as BonusBalanceSwitcher};
