(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{i as t,j as o}from"./index.9a33d21b.js";import{c as p}from"./index.fbd937ed.js";import{b as j}from"./game-current-state.dbd76719.js";import{M as v}from"./MatchCardBodyTeamsPistolH2hArcheryH2H.8ccece6a.js";import{s as u,M as y}from"./scroll-to-end.f8c74d13.js";import{b as N,ac as B,ah as I,an as b}from"./game-data.f991b97b.js";import{M}from"./index.53889f5c.js";import{M as C}from"./index.84e39193.js";import{O as H}from"./constants.772ea903.js";import{useEffect as S}from"react";import{a as T}from"./main.417e7624.js";import{c as W}from"./pistol-and-archery-shootings.1f2c32a0.js";import{D as E}from"./index.a12ad9da.js";import{u as P}from"./useTranslation.70287e96.js";import"react-dom";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./usePredefinedStakes.892527de.js";import"./index.2e7649fa.js";import"./swarm-command-names.afa48e3f.js";import"./odds.3bca0cb7.js";import"./index.17630e7e.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./index.9e499441.js";import"./useDispatch.151d3a82.js";import"./sport-list.d0c83c34.js";import"./not-real-sports.64fc4139.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.856ed0f4.js";import"./index.27fc0452.js";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./index.7d5f88f7.js";import"./lazy.73833dcd.js";import"./index.9c369ab9.js";import"./styled-components.browser.esm.04179a03.js";import"./useMounted.6d9c5610.js";import"./tour.8bae694e.js";import"./data-fields.c78d776a.js";import"./useOpenLoginPopup.9bf6877c.js";import"./custom-categories.700b2888.js";import"./route-manipulation.7a3d02e7.js";import"./index.1dfc2dcd.js";import"./useSearchParams.353231ec.js";import"./fav-data.eb686620.js";import"./index.9fa2e41e.js";import"./useSportsbookConfigs.7961e643.js";import"./generic.cf030613.js";import"./index.29e6371b.js";import"./EmptyOddGroup.91184c82.js";import"./EmptyOdd.1f8b4e8f.js";import"./calculate-boosted-odds.8854e450.js";import"./useOddChange.efac89df.js";import"./index.9eebc582.js";import"./index.5f1e48b3.js";import"./useDoBet.55e9cf8f.js";import"./editBetActions.4f0fb51e.js";import"./edit-bet.f841d32c.js";import"./getAdvancedMultipleGeneralField.2fa28824.js";import"./counterOffer.74a34af9.js";import"./useEventbus.6393d2bd.js";import"./sport-data.58080bc0.js";import"./useSbRouteMatch.ecfb9430.js";import"./index.3dbf2b2e.js";import"./index.f4c7d5fb.js";import"./new-sportsbook.6886dfa1.js";import"./Skeleton.e7ccd4f0.js";import"./live-games-helper.ab98b608.js";import"./col.94909042.js";import"./index.9011aacc.js";import"./index.f24e8077.js";import"./index.fcc8b535.js";import"./rtl.d50a3051.js";import"./index.c7348bcc.js";import"./api-post-message-sender.98c07ac7.js";import"./match-tracker-sports.bb8d5033.js";import"./Skeleton.da8e5d7a.js";import"./get-data-level.0ccc74a6.js";import"./index.4438fd10.js";import"./array-sort-by.690dd174.js";import"./style.6aa62012.js";import"./useMatchInfoHide.3b5901b6.js";import"./private-competitions.91107fbb.js";import"./useGetAvailableModes.cf9e89a5.js";import"./context.f61a2be2.js";const $=({game:i})=>{var n,r,c,m;const{t:a}=P(),_=i.info?W(i.info):[];return S(()=>{t()&&u("cardBody__set-points")},[(n=i.info)==null?void 0:n.period_points_home_d,(r=i.info)==null?void 0:r.period_points_away_d]),o.jsxs("div",{className:p(["cardBody__Container",{cardBody__mobile:t()}]),children:[o.jsxs("div",{className:p(["cardBody__previousInfo cardBody__set-points",{"cardBody__set-points-android":!T}]),children:[o.jsx("div",{className:"cardBody__set-points-spacer"}),_.map((s,d)=>o.jsxs("div",{className:"cardBody__infoItem point",children:[o.jsx("div",{className:"matchInfo_card_icon",children:d+1}),o.jsx("div",{className:"matchInfo_card_point",children:s.team1_value}),o.jsx("div",{className:"matchInfo_card_point",children:s.team2_value})]},`${d}${s.team1_value}`))]}),o.jsxs("div",{className:"cardBody__total-points",children:[o.jsx(E,{type:"vertical",className:p(["cardBody__divider",{"cardBody__divider-mobile":t()}])}),o.jsx("div",{className:"cardBody__currentInfo",children:o.jsxs("div",{className:"cardBody__infoItem text-yellow",children:[o.jsx("div",{children:a("sportsbook.total")}),o.jsx("div",{children:((c=i.info)==null?void 0:c.score1)||""}),o.jsx("div",{children:((m=i.info)==null?void 0:m.score2)||""})]})})]})]})},vo=({sportAlias:i,regionAlias:a,competitionName:_,loading:n,game:r,regionName:c,sportImageSrc:m})=>{var s,d,e,l,f,h,x;return n?o.jsx(N,{sportAlias:i}):o.jsxs(o.Fragment,{children:[o.jsxs(B,{className:p([`cardWrapper ${i}`,{cardWrapper__mobile:t(),cardWrapper__desktop:!t()}]),$bgImageSrc:m,children:[o.jsx(y,{sportAlias:i,regionAlias:a,competitionName:_,game:r,regionName:c}),o.jsxs(I,{className:"cardWrapper__body",children:[o.jsx(v,{game:r}),r&&o.jsx($,{game:r})]}),o.jsxs(b,{className:p(["matchInfo__footer",{mobile:t()}]),children:[t()&&o.jsx("div",{children:o.jsx(C,{})}),o.jsxs(o.Fragment,{children:[!t()&&o.jsxs("span",{children:[(r==null?void 0:r.text_info)||"","  ",((s=r==null?void 0:r.info)==null?void 0:s.add_info)||""," "," ",(r==null?void 0:r.add_info_name)||"","  ",(r==null?void 0:r.tv_info)||""]}),!!((d=r==null?void 0:r.info)!=null&&d.current_game_state)&&!!((e=r==null?void 0:r.info)!=null&&e.current_game_state.startsWith("set"))&&o.jsx("div",{className:p(["sets-info",{mobile:t()}]),children:o.jsx("span",{className:"sets-info-text",children:j((l=r==null?void 0:r.info)!=null&&l.current_game_state&&H.includes((f=r==null?void 0:r.info)==null?void 0:f.current_game_state.toLowerCase())?"set1":((h=r==null?void 0:r.info)==null?void 0:h.current_game_state)||"",((x=r==null?void 0:r.info)==null?void 0:x.current_game_time)||"",!0,0,i)})})]})]})]}),t()&&o.jsx(M,{gameInfoName:(r==null?void 0:r.add_info_name)||"",gameInfo:r==null?void 0:r.info})]})};export{vo as MatchCardPistolH2H};
