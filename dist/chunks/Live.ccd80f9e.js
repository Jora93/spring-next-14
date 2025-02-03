(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}
.desktopSportsbookClassicWrapper{width:100%;height:100%}.desktopSportsbookClassic{width:100%;display:flex;height:calc(100% - 56px)}.desktopSportsbookClassic .sportsbook-game-list-wrapper .v3-event-collapse{margin-bottom:1px}.desktopSportsbookClassic--live .search__sportsBook{margin-bottom:4px}.desktopSportsbookClassic .multiplesSkeleton{margin:0;height:calc(70vh + 8px)}.desktopSportsbookClassic .multiplesSkeleton.multipleWithPadding{padding:8px 0 0}.desktopSportsbookClassic .notItem__wrapper{margin-top:0}.mobileSportsbookTournament{display:flex;flex-direction:column;padding:8px;gap:8px}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{u as K,S as w,e as V,i as y,j as u}from"./index.9a33d21b.js";import{memo as B,useState as q,useMemo as D,useEffect as b,useCallback as z}from"react";import{c as M}from"./index.fbd937ed.js";import{s as g}from"./array-sort-by.690dd174.js";import{g as _}from"./route-manipulation.7a3d02e7.js";import{b as x}from"./sportsbook.2cb562a0.js";import{a as F}from"./addStreamInfoToGame.83901e46.js";import{S as J}from"./index.66d7486d.js";import{G as Q}from"./GameListHeader.0056e716.js";import{u as U}from"./useSportsbookConfigs.7961e643.js";import{u as W}from"./useSbRouteMatch.ecfb9430.js";import{f as X,d as Y}from"./game-data.f991b97b.js";import{x as Z,y as I}from"./new-sportsbook.1752e123.js";import{t as tt,i as ot,x as it,y as rt}from"./new-sportsbook.6886dfa1.js";import{i as mt}from"./sport-data.58080bc0.js";import{u as pt}from"./useDispatch.151d3a82.js";import{u as n}from"./index.17630e7e.js";import"react-dom";import"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./swarm-command-names.afa48e3f.js";import"./not-real-sports.64fc4139.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./DesktopSportsbookClassic.1bffb724.js";import"./generic.cf030613.js";import"./lazy.73833dcd.js";import"./index.ed5782db.js";import"./favorite-team.a5b4287b.js";import"./index.0a152e8c.js";import"./get-data-level.0ccc74a6.js";import"./data-fields.c78d776a.js";import"./col.94909042.js";import"./index.9011aacc.js";import"./index.7d5f88f7.js";import"./placements.2094afc0.js";import"./useTranslation.70287e96.js";import"./context.f61a2be2.js";import"./index.9fa2e41e.js";import"./handleRedirectToSportsBook.1fa97cf0.js";import"./tour.8bae694e.js";import"./toConsumableArray.635ccf3f.js";import"./fav-data.eb686620.js";import"./index.cd749fad.js";import"./styled-components.browser.esm.04179a03.js";import"./useOpenLoginPopup.9bf6877c.js";import"./custom-categories.700b2888.js";import"./index.1dfc2dcd.js";import"./useSearchParams.353231ec.js";import"./user-data.358c1cdc.js";import"./index.3dc509b3.js";import"./get-tournament-time.5f47a243.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./index.9e499441.js";import"./index.cb829a96.js";import"./index.9c369ab9.js";import"./index.b40f854c.js";import"./index.184af16c.js";import"./index.9eebc582.js";import"./index.5f1e48b3.js";import"./useCalculateBetslipFixedSwitchersHeight.8651a87e.js";import"./index.b85c00ef.js";import"./index.3dbf2b2e.js";import"./index.f4c7d5fb.js";import"./Skeleton.da8e5d7a.js";import"./global-variables.eb46f49b.js";import"./Skeleton.e7ccd4f0.js";import"./game-current-state.dbd76719.js";import"./sport-list.d0c83c34.js";import"./live-games-helper.ab98b608.js";import"./index.f24e8077.js";import"./index.fcc8b535.js";import"./useMounted.6d9c5610.js";import"./rtl.d50a3051.js";import"./index.625ed26a.js";import"./index.3536b24d.js";import"./hide-private-competitions.bb3e889f.js";import"./private-competitions.91107fbb.js";import"./index.c7348bcc.js";import"./api-post-message-sender.98c07ac7.js";import"./dropdown.29a72cea.js";import"./EllipsisOutlined.53bf0b36.js";import"./KeyCode.6413d982.js";import"./index.aa1549be.js";import"./index.c5ad8069.js";import"./index.08cf9b6f.js";import"./Overflow.554112a5.js";import"./FavoriteButtonGame.520918c4.js";import"./index.29e6371b.js";import"./EmptyOddGroup.91184c82.js";import"./EmptyOdd.1f8b4e8f.js";import"./calculate-boosted-odds.8854e450.js";import"./useOddChange.efac89df.js";import"./useDoBet.55e9cf8f.js";import"./editBetActions.4f0fb51e.js";import"./edit-bet.f841d32c.js";import"./getAdvancedMultipleGeneralField.2fa28824.js";import"./counterOffer.74a34af9.js";import"./useEventbus.6393d2bd.js";import"./index.27fc0452.js";import"./index.d4b2e2e7.js";import"./index.856ed0f4.js";import"./match-tracker-sports.bb8d5033.js";import"./spec-elems.a06c4bcb.js";import"./useSortFavoriteSportsOrdering.8c105f2d.js";import"./index.44f69af2.js";import"./useUpdateEffect.ee726e5b.js";import"./index.6cdb25e4.js";import"./index.7a2bd44d.js";import"./style.b04602fb.js";import"./index.3089aa99.js";import"./index.6eb22f1b.js";import"./useSportsFavoriteClickHandler.d437d18b.js";import"./index.e5947b84.js";import"./useBoostedOdds.fba5ecbe.js";import"./useContentHeight.06461539.js";import"./jackpot.6ac13427.js";import"./index.9e446389.js";import"./index.a1fbe297.js";import"./index.f57a2e81.js";import"./index.03d4580a.js";import"./index.d19f64a8.js";import"./index.b128bef9.js";import"./index.4f306345.js";import"./game-data.fdea3414.js";import"./index.b0af1197.js";import"./index.07b59f30.js";import"./app-routes.c65435c5.js";import"./sportsbook.843a40b0.js";import"./index.60d4c27f.js";import"./esport.180bf83f.js";import"./index.549a573d.js";import"./Skeleton.a5b55c7c.js";import"./CheckOutlined.2d4387be.js";import"./SearchOutlined.0011f146.js";import"./statusUtils.ab0a6b68.js";import"./casino.a461d655.js";import"./index.528ba885.js";import"./useSportImage.f3671c73.js";import"./index.dfb96791.js";import"./useMatchInfoHide.3b5901b6.js";import"./useGetAvailableModes.cf9e89a5.js";import"./index.bba5e59c.js";import"./DesktopMultipleCardsSkeleton.848766b1.js";import"./index.c26b8980.js";import"./index.11a570b8.js";import"./index.a12ad9da.js";const or=B(({layoutType:v,gameIds:a,showHeader:T=!0,sport:E})=>{const l=pt(),k=K(),{path:d,params:h}=W(),$=`${E||h.sport}_${x.live}`,G=n(mt),e=n(tt)[$]||null,O=n(ot)[$]||null,c=n(it),r=n(rt),L=U(),[C,N]=q(!1),S=D(()=>{const[t]=Object.values(e||{});return(t==null?void 0:t.name)||""},[e]),i=D(()=>{if(!e||!O&&!w.MOCKED_DATA)return null;const[t]=Object.values(e);return g(Object.values((t==null?void 0:t.region)||{}),r.key&&r.key!=="start_ts"?"name":"",r.name==="time"?"asc":r.type).reduce((o,m)=>(g(Object.values((m==null?void 0:m.competition)||{}),r.key&&r.key!=="start_ts"?"name":"",r.name==="time"?"asc":r.type).forEach(s=>{const H=`${m.name}, ${s.name}`,j=F(r.key?g(Object.values((s==null?void 0:s.game)||{}),r.key,r.type):g(Object.values((s==null?void 0:s.game)||{}),"start_ts"),G);let A=[];c&&(A=j.filter(R=>R.hasVideoStream)),!(c&&!A.length)&&o.push({name:H,details:{sport:{id:Number(t.id),name:t.name,alias:t.alias},region:{id:m.id,name:m.name,alias:m.alias},competition:{id:s.id,name:s.name}},games:j})}),o),[])},[e,O,c,r]);b(()=>{let t=!1;i&&i.length&&(t=!!i.find(p=>{if(p.games&&p.games.length)return!!p.games.find(o=>{if(o.hasVideoStream)return!0})})),l(Z(t)),!t&&c&&l(I(!1))},[i]);const P=z((t,p)=>{if(t==null||t.stopPropagation(),!i)return;const o=i.find(({games:m})=>m.find(f=>f.id===p));k.push(`${_(d)}/${o==null?void 0:o.details.sport.alias}/${o==null?void 0:o.details.region.alias}/${o==null?void 0:o.details.competition.id}/${p}`)},[d,i]);return b(()=>(L.spbLayoutType!==V.CLASSIC&&l(X({name:S})),()=>{l(Y(void 0))}),[S]),b(()=>{if(!w.MOCKED_DATA&&!y()&&!h.game&&(a!=null&&a.length)&&(i!=null&&i.length)){const t=i[0].details,p=t.sport.alias,o=t.region.alias,m=t.competition.id,f=i[0].games[0].id;k.push(`${_(d)}/${p}/${o}/${m}/${f}${window.location.search}`)}},[h.game,a==null?void 0:a.length,i]),u.jsxs("div",{className:M(["sportsbook-game-list-wrapper",{"sportsbook-game-list-wrapper-mobile":y()}]),children:[T&&u.jsx(Q,{gameIds:a,groups:i,showSportTitle:!0,sportName:S,isAllCollapsed:C,setIsAllCollapsed:N}),u.jsx("div",{className:M(["sportsbook-game-list-wrapper__games",{"sportsbook-game-list-wrapper__games-mobile":y()}]),children:u.jsx(J,{layoutType:v,pageType:x.live,groups:i,handleMatchClick:P,isAllCollapsed:C})})]})});export{or as Live};
