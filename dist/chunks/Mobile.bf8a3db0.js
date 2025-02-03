(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{_ as R}from"./i18next.083d61f0.js";import{g as Y,e as V,S as q,j as o,i as w}from"./index.9a33d21b.js";import{useState as X,useMemo as d,useLayoutEffect as Z,useEffect as S,Suspense as _}from"react";import{c as $}from"./index.fbd937ed.js";import{b3 as O,t as J}from"./backend-status-codes.4c1943df.js";import{T as g}from"./match-tracker-sports.bb8d5033.js";import{l as H}from"./lazy.73833dcd.js";import{E as P}from"./game-current-state.dbd76719.js";import{f as a}from"./api-post-message-sender.98c07ac7.js";import{b7 as C,B as G}from"./index.2e7649fa.js";import{b as D}from"./sportsbook.2cb562a0.js";import{a as L}from"./index.0a152e8c.js";import{A as ii}from"./Skeleton.e7ccd4f0.js";import{G as oi,z as ri,m as ti,R as ei,q as si,r as pi,V as mi,S as ni,M as li,Y as ci,Z as di,E as Si}from"./game-data.f991b97b.js";import{M as _i}from"./index.dfb96791.js";import{T as ui,M as fi}from"./index.53889f5c.js";import{B as hi}from"./index.51b5a432.js";import{M as Ti}from"./index.bd615eba.js";import{GameHeader as Ai}from"./index.702d46b8.js";import{S as xi}from"./index.60d4c27f.js";import{H as Ii}from"./index.44f69af2.js";import{u as Mi}from"./useSbRouteMatch.ecfb9430.js";import{X as ji}from"./index.9e499441.js";import{u as Ei}from"./useTranslation.70287e96.js";import{u as ki}from"./useDispatch.151d3a82.js";import{u as m}from"./index.17630e7e.js";import"react-dom";import"./index.1dfc2dcd.js";import"./swarm-command-names.afa48e3f.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./sport-list.d0c83c34.js";import"./not-real-sports.64fc4139.js";import"./generic.cf030613.js";import"./route-manipulation.7a3d02e7.js";import"./get-data-level.0ccc74a6.js";import"./useSportsbookConfigs.7961e643.js";import"./data-fields.c78d776a.js";import"./array-sort-by.690dd174.js";import"./col.94909042.js";import"./index.9011aacc.js";import"./index.7d5f88f7.js";import"./placements.2094afc0.js";import"./index.9fa2e41e.js";import"./handleRedirectToSportsBook.1fa97cf0.js";import"./tour.8bae694e.js";import"./toConsumableArray.635ccf3f.js";import"./fav-data.eb686620.js";import"./index.cd749fad.js";import"./styled-components.browser.esm.04179a03.js";import"./useOpenLoginPopup.9bf6877c.js";import"./custom-categories.700b2888.js";import"./useSearchParams.353231ec.js";import"./index.3dc509b3.js";import"./get-tournament-time.5f47a243.js";import"./index.cb829a96.js";import"./index.9c369ab9.js";import"./index.b40f854c.js";import"./sport-data.58080bc0.js";import"./new-sportsbook.6886dfa1.js";import"./new-sportsbook.1752e123.js";import"./index.184af16c.js";import"./index.9eebc582.js";import"./index.5f1e48b3.js";import"./useCalculateBetslipFixedSwitchersHeight.8651a87e.js";import"./index.b85c00ef.js";import"./index.3dbf2b2e.js";import"./index.f4c7d5fb.js";import"./Skeleton.da8e5d7a.js";import"./global-variables.eb46f49b.js";import"./useMounted.6d9c5610.js";import"./index.625ed26a.js";import"./index.3536b24d.js";import"./hide-private-competitions.bb3e889f.js";import"./private-competitions.91107fbb.js";import"./live-games-helper.ab98b608.js";import"./index.c7348bcc.js";import"./dropdown.29a72cea.js";import"./EllipsisOutlined.53bf0b36.js";import"./KeyCode.6413d982.js";import"./index.aa1549be.js";import"./index.c5ad8069.js";import"./index.08cf9b6f.js";import"./Overflow.554112a5.js";import"./FavoriteButtonGame.520918c4.js";import"./index.29e6371b.js";import"./EmptyOddGroup.91184c82.js";import"./EmptyOdd.1f8b4e8f.js";import"./calculate-boosted-odds.8854e450.js";import"./useOddChange.efac89df.js";import"./useDoBet.55e9cf8f.js";import"./editBetActions.4f0fb51e.js";import"./edit-bet.f841d32c.js";import"./getAdvancedMultipleGeneralField.2fa28824.js";import"./counterOffer.74a34af9.js";import"./useEventbus.6393d2bd.js";import"./index.27fc0452.js";import"./index.f24e8077.js";import"./index.fcc8b535.js";import"./index.d4b2e2e7.js";import"./rtl.d50a3051.js";import"./index.856ed0f4.js";import"./spec-elems.a06c4bcb.js";import"./useSortFavoriteSportsOrdering.8c105f2d.js";import"./index.6cdb25e4.js";import"./index.7a2bd44d.js";import"./style.b04602fb.js";import"./context.f61a2be2.js";import"./index.3089aa99.js";import"./index.6eb22f1b.js";import"./useSportsFavoriteClickHandler.d437d18b.js";import"./index.e5947b84.js";import"./useBoostedOdds.fba5ecbe.js";import"./useContentHeight.06461539.js";import"./jackpot.6ac13427.js";import"./index.9e446389.js";import"./index.a1fbe297.js";import"./index.f57a2e81.js";import"./index.a12ad9da.js";import"./useMatchInfoHide.3b5901b6.js";import"./useSportImage.f3671c73.js";import"./useGetAvailableModes.cf9e89a5.js";import"./index.4438fd10.js";import"./index.6af7a08e.js";import"./v4.751847df.js";import"./index.d6dafe07.js";import"./index.38b6b6dc.js";import"./index.8ebbf22c.js";import"./esport.180bf83f.js";import"./index.549a573d.js";import"./Skeleton.a5b55c7c.js";import"./CheckOutlined.2d4387be.js";import"./SearchOutlined.0011f146.js";import"./statusUtils.ab0a6b68.js";import"./casino.a461d655.js";import"./useUpdateEffect.ee726e5b.js";const{EmptyView:yi}=H(()=>R(()=>import("./EmptyView.5e3ab5a0.js"),["chunks/EmptyView.5e3ab5a0.js","chunks/index.9a33d21b.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js"])),{MatchStreamingContainer:Ni}=H(()=>R(()=>import("./index.bd615eba.js").then(i=>i.i),["chunks/index.bd615eba.js","chunks/index.9a33d21b.js","chunks/match-tracker-sports.bb8d5033.js","chunks/api-post-message-sender.98c07ac7.js","chunks/index.2e7649fa.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/swarm-command-names.afa48e3f.js","chunks/index.1dfc2dcd.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/index.17630e7e.js","chunks/socket.c1bf8301.js","chunks/batch.dcd71b53.js","chunks/user-data.358c1cdc.js","chunks/index.9e499441.js","chunks/useDispatch.151d3a82.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.d6dafe07.js","chunks/generic.cf030613.js","chunks/route-manipulation.7a3d02e7.js","chunks/not-real-sports.64fc4139.js","chunks/useSportsbookConfigs.7961e643.js","chunks/useSbRouteMatch.ecfb9430.js","chunks/game-data.f991b97b.js","chunks/tour.8bae694e.js","chunks/index.9c369ab9.js","chunks/styled-components.browser.esm.04179a03.js","chunks/data-fields.c78d776a.js","chunks/lazy.73833dcd.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.7d5f88f7.js","chunks/useOpenLoginPopup.9bf6877c.js","chunks/custom-categories.700b2888.js","chunks/useSearchParams.353231ec.js","chunks/fav-data.eb686620.js","chunks/index.9fa2e41e.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.29e6371b.js","chunks/EmptyOddGroup.91184c82.js","chunks/EmptyOdd.1f8b4e8f.js","chunks/calculate-boosted-odds.8854e450.js","chunks/useOddChange.efac89df.js","chunks/index.9eebc582.js","chunks/index.5f1e48b3.js","chunks/useDoBet.55e9cf8f.js","chunks/editBetActions.4f0fb51e.js","chunks/edit-bet.f841d32c.js","chunks/getAdvancedMultipleGeneralField.2fa28824.js","chunks/counterOffer.74a34af9.js","chunks/useEventbus.6393d2bd.js","chunks/sport-data.58080bc0.js","chunks/index.27fc0452.js","chunks/index.3dbf2b2e.js","chunks/index.f4c7d5fb.js","chunks/new-sportsbook.6886dfa1.js","chunks/index.a12ad9da.js","chunks/Skeleton.e7ccd4f0.js","chunks/game-current-state.dbd76719.js","chunks/sport-list.d0c83c34.js","chunks/live-games-helper.ab98b608.js","chunks/col.94909042.js","chunks/index.9011aacc.js","chunks/index.f24e8077.js","chunks/index.fcc8b535.js","chunks/useMounted.6d9c5610.js","chunks/rtl.d50a3051.js","chunks/index.c7348bcc.js","chunks/Skeleton.da8e5d7a.js","chunks/useGetAvailableModes.cf9e89a5.js"])),ct=({gameData:i,onBack:p,isLive:r,openTimeLine:v,setOpenTimeLine:B,configs:t})=>{var I,M,j,E,k;const{t:u}=Ei(),s=ki(),[n,F]=X("markets"),f=m(oi),l=m(ri),z=m(ti),K=m(ji),Q=z===C.fullscreen,U=t.pageType===Y.live&&t.spbLayoutType!==V.ADVANCED,{params:{sport:c}}=Mi(),h=(i==null?void 0:i.sportAlias)||c,T=Object.keys(P).includes(h)&&r,A=d(()=>ii[c],[c]),x=d(()=>({timeline:g.includes(i==null?void 0:i.sportAlias)&&l===G.TIMELINE,additionalStrikeStatistics:Object.keys(P).includes(i==null?void 0:i.sportAlias)&&l===G.TIMELINE}),[i==null?void 0:i.sportAlias,l]);Z(()=>{if(i!=null&&i.game)return s(ei({game:i==null?void 0:i.game,region:i.regionName,competition:`${i.competitionId}`,competitionName:i.competitionName,sport:i.sportAlias})),s(si(C.normal)),()=>{var e;s(pi(!1,(e=i==null?void 0:i.game)==null?void 0:e.id))}},[(I=i==null?void 0:i.game)==null?void 0:I.id]),S(()=>()=>{s(mi(null))},[]),S(()=>(i!=null&&i.game&&Object.keys(i.game).length&&s(O(!0)),()=>{s(O(!1))}),[i==null?void 0:i.game]),S(()=>{q.IFRAME_SPORTSBOOK&&(t!=null&&t.fixedScroll)&&setTimeout(()=>{a(document.documentElement.scrollHeight)},J.DURATION_1000)},[i==null?void 0:i.markets,t==null?void 0:t.fixedScroll]);const W=d(()=>{var e,y,N,b;return{1:{id:(e=i==null?void 0:i.game)==null?void 0:e.team1_id,name:(y=i==null?void 0:i.game)==null?void 0:y.team1_name},2:{id:(N=i==null?void 0:i.game)==null?void 0:N.team2_id,name:(b=i==null?void 0:i.game)==null?void 0:b.team2_name}}},[i==null?void 0:i.game]);return i?i.game&&Object.keys(i.game).length===0?o.jsx(_,{fallback:o.jsx(L,{isLive:r,onBack:p,hasAdditionalStatistics:T}),children:o.jsx(yi,{onBack:p})}):o.jsxs("div",{id:"singleGameViewPage",className:$(["singleGameViewPage canBeScrollToTop",{singleGameViewPage__theatreMode:f,singleGameViewPage__mobile:w(),"singleGameViewPage--padding":K,singleGameViewPage__fullScreen:Q}]),children:[o.jsx(Ai,{title:i.competitionName,regionName:i.regionName,sport:i.sportAlias,regionAlias:i.regionAlias,onBack:p,showRegionIcon:!0,game:i.game}),(r||U)&&o.jsxs(o.Fragment,{children:[o.jsx(_i,{sportAlias:i.sportAlias,game:i.game,openTimeLine:v,setOpenTimeLine:B}),o.jsx("div",{style:{borderBottom:"1px solid var(--v3-black-6)"},children:o.jsx(_,{fallback:o.jsx(ni,{classNames:"streamCourtSkeleton__layer"}),children:o.jsx(Ni,{shouldMount:!0,matchStreamingContainerId:Ti})})})]}),!r&&o.jsx("div",{className:w()?"statisticsBanner__mobile":"",children:o.jsx(hi,{gameInfo:{is_stat_available:i.game.is_stat_available,id:i.game.id,teamName1:i.game.team1_name,teamName2:i.game.team2_name,teamId1:i.game.team1_id,teamId2:i.game.team2_id,gameStart:i.game.start_ts,sportAlias:i.sportAlias}})}),r&&o.jsxs(o.Fragment,{children:[x.timeline&&o.jsx(ui,{game:i.game}),x.additionalStrikeStatistics&&o.jsx(_,{fallback:o.jsx(A.skeleton,{}),children:o.jsx(A.view,{sportAlias:h,expanded:!0,teams:W})}),t.spbLayoutType!==V.ADVANCED&&o.jsx(Ii,{size:"large",selectedKey:n,onChange:e=>F(e),items:[{key:"markets",title:u("sportsbook.markets")},{key:"matches",title:u("sportsbook.liveMatches")}]})]}),(!!((M=i.game)!=null&&M.add_info_name)||!!((E=(j=i.game)==null?void 0:j.info)!=null&&E.add_info))&&!r&&o.jsx(fi,{gameInfoName:((k=i.game)==null?void 0:k.add_info_name)||"",gameInfo:i.game.info}),(n==="markets"||!r)&&(i.markets.length?o.jsxs(o.Fragment,{children:[o.jsx(li,{sport:i.sportAlias,gameId:i.game.id,isTheatreMode:f,markets:i.markets,game:i.game,regionAlias:i.regionAlias,sportName:i.sportName,currentSport:i.sportAlias,competitionName:i.competitionName,competitionId:i.competitionId,isLive:r,targetId:"singleGameViewPage"},i.game.id),o.jsx(ci,{})]}):o.jsxs(o.Fragment,{children:[!r&&o.jsx(di,{textInfo:i.game.text_info,style:{marginLeft:7,marginTop:5}}),o.jsx(Si,{})]})),n==="matches"&&o.jsx(xi,{pageType:D.live,showHeader:!1})]}):o.jsx(L,{isLive:r,onBack:p,hasAdditionalStatistics:T})};export{ct as SingleGameViewMobile};
