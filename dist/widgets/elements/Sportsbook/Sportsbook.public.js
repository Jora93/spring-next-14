(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var n=Object.defineProperty,c=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(t,i,m)=>i in t?n(t,i,{enumerable:!0,configurable:!0,writable:!0,value:m}):t[i]=m,e=(t,i)=>{for(var m in i||(i={}))f.call(i,m)&&p(t,m,i[m]);if(o)for(var m of o(i))g.call(i,m)&&p(t,m,i[m]);return t},a=(t,i)=>c(t,S(i));import{j as s}from"../../../chunks/index.053dea56.js";import{WidgetWrapper as x}from"../../Wrapper.js";import{S as P}from"../../../chunks/index.dd0790b5.js";import"react";import"react-dom";import"../../../chunks/i18next.083d61f0.js";import"../../../chunks/backend-status-codes.80bfe624.js";import"../../../chunks/QueryClientProvider.04e144dd.js";import"../../../chunks/weekday.e2afce7e.js";import"../../../chunks/global-variables.eb46f49b.js";import"../../../chunks/index.c0392060.js";import"../../../chunks/swarm-command-names.230156ba.js";import"../../../chunks/context.f61a2be2.js";import"../../../chunks/generic.97974c67.js";import"../../../chunks/route-manipulation.fb85cda5.js";import"../../../chunks/not-real-sports.64fc4139.js";import"../../../chunks/lazy.73833dcd.js";import"../../../chunks/get-data-level.db296203.js";import"../../../chunks/useSportsbookConfigs.a1eb5af5.js";import"../../../chunks/index.fbd937ed.js";import"../../../chunks/app-data.da3833f4.js";import"../../../chunks/create-test-id.17a0abc8.js";import"../../../chunks/create-fake-array.68114bc4.js";import"../../../chunks/index.ffa75b49.js";import"../../../chunks/data-fields.6d263ede.js";import"../../../chunks/array-sort-by.690dd174.js";import"../../../chunks/game-data.db5bee93.js";import"../../../chunks/tour.8bae694e.js";import"../../../chunks/index.652e9765.js";import"../../../chunks/styled-components.browser.esm.22f548e7.js";import"../../../chunks/toConsumableArray.19249869.js";import"../../../chunks/placements.f27399b1.js";import"../../../chunks/index.9a56940c.js";import"../../../chunks/useOpenLoginPopup.d27706ba.js";import"../../../chunks/custom-categories.e4debdf9.js";import"../../../chunks/index.fcbc691d.js";import"../../../chunks/useSearchParams.0c3b0efc.js";import"../../../chunks/fav-data.1c5898b7.js";import"../../../chunks/user-data.f480309c.js";import"../../../chunks/useDispatch.cd750ed9.js";import"../../../chunks/index.9fa2e41e.js";import"../../../chunks/useTranslation.70287e96.js";import"../../../chunks/index.59a19261.js";import"../../../chunks/index.a61ad5f8.js";import"../../../chunks/EmptyOddGroup.d87d06ac.js";import"../../../chunks/EmptyOdd.f2ae87eb.js";import"../../../chunks/usePredefinedStakes.58f7290f.js";import"../../../chunks/odds.334494eb.js";import"../../../chunks/socket.c077606d.js";import"../../../chunks/batch.dcd71b53.js";import"../../../chunks/calculate-boosted-odds.8854e450.js";import"../../../chunks/useOddChange.42d6d46a.js";import"../../../chunks/index.c41901f2.js";import"../../../chunks/index.092cd2c1.js";import"../../../chunks/useDoBet.0560f246.js";import"../../../chunks/editBetActions.91db0d9c.js";import"../../../chunks/edit-bet.f841d32c.js";import"../../../chunks/getAdvancedMultipleGeneralField.a271e2a8.js";import"../../../chunks/counterOffer.671956cb.js";import"../../../chunks/useEventbus.f35d817d.js";import"../../../chunks/sport-data.b40f7b49.js";import"../../../chunks/index.d930ff85.js";import"../../../chunks/useSbRouteMatch.6006fa30.js";import"../../../chunks/index.71506da4.js";import"../../../chunks/index.812cdb8e.js";import"../../../chunks/new-sportsbook.b7bad95f.js";import"../../../chunks/index.b35b9773.js";import"../../../chunks/Skeleton.8e936dc0.js";import"../../../chunks/game-current-state.364f0ffb.js";import"../../../chunks/sport-list.d0c83c34.js";import"../../../chunks/live-games-helper.8638cd4e.js";import"../../../chunks/col.a0c1837e.js";import"../../../chunks/index.66ee6c8a.js";import"../../../chunks/index.c08ef8e3.js";import"../../../chunks/index.3dcc1bea.js";import"../../../chunks/useMounted.6d9c5610.js";import"../../../chunks/rtl.f8a1526a.js";import"../../../chunks/index.2c227bf4.js";import"../../../chunks/api-post-message-sender.98c07ac7.js";import"../../../chunks/match-tracker-sports.9fc37b4c.js";import"../../../chunks/Skeleton.98603ae6.js";import"../../../chunks/handleRedirectToSportsBook.89a7df33.js";import"../../../chunks/index.b3ca38a7.js";import"../../../chunks/index.07b8ab74.js";import"../../../chunks/get-tournament-time.134e5bb0.js";import"../../../chunks/sportsbook.2cb562a0.js";import"../../../chunks/index.5ffe4536.js";import"../../../chunks/index.9f857438.js";import"../../../chunks/new-sportsbook.4549be32.js";import"../../../chunks/index.184af16c.js";import"../../../chunks/useCalculateBetslipFixedSwitchersHeight.b869a969.js";import"../../../chunks/index.c2e99b3f.js";import"../../../chunks/index.4224195e.js";import"../../../chunks/index.d6652226.js";import"../../../chunks/hide-private-competitions.0dd8a5a5.js";import"../../../chunks/private-competitions.91107fbb.js";import"../../../chunks/dropdown.76994893.js";import"../../../chunks/EllipsisOutlined.491da4e5.js";import"../../../chunks/KeyCode.6413d982.js";import"../../../chunks/index.f9d28115.js";import"../../../chunks/index.77924ee5.js";import"../../../chunks/index.391bace7.js";import"../../../chunks/Overflow.5f48b1c8.js";import"../../../chunks/FavoriteButtonGame.67180922.js";import"../../../chunks/index.8214fe93.js";import"../../../chunks/index.4e03bf34.js";import"../../../chunks/spec-elems.3577ab05.js";import"../../../chunks/useSortFavoriteSportsOrdering.f78079af.js";import"../../../chunks/index.e408531e.js";import"../../../chunks/useUpdateEffect.ee726e5b.js";import"../../../chunks/index.68ae7eeb.js";import"../../../chunks/index.03ce9bd5.js";import"../../../chunks/style.32a730b7.js";import"../../../chunks/index.34e99d41.js";import"../../../chunks/index.baf6c475.js";import"../../../chunks/useSportsFavoriteClickHandler.d32a0014.js";import"../../../chunks/index.20fa6083.js";import"../../../chunks/useBoostedOdds.4248980f.js";import"../../../chunks/useContentHeight.a1c79de7.js";import"../../../chunks/jackpot.05884396.js";import"../../../chunks/index.98ac8429.js";import"../../../chunks/index.19d3f5f2.js";import"../../../chunks/index.4def701f.js";const j={live:0,prematch:1},Yi=t=>{var i,m,r;return s.jsx(x,{children:s.jsx(P,{configs:a(e({},(i=t==null?void 0:t.params)==null?void 0:i.settings),{pageType:j[(r=(m=t==null?void 0:t.params)==null?void 0:m.settings)==null?void 0:r.type]||0})})})};export{Yi as default};
