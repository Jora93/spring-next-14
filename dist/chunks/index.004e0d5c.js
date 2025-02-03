(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{_ as o}from"./i18next.083d61f0.js";import{S as p,j as t}from"./index.053dea56.js";import{useLayoutEffect as s}from"react";import{l as r}from"./lazy.73833dcd.js";import{m as a}from"./route-manipulation.fb85cda5.js";import{F as e}from"./index.4def701f.js";import{V as _}from"./index.68ae7eeb.js";import{u as n}from"./useSbRouteMatch.6006fa30.js";import{i as f}from"./game-data.db5bee93.js";import{u}from"./useDispatch.cd750ed9.js";import"react-dom";import"./index.c0392060.js";import"./backend-status-codes.80bfe624.js";import"./swarm-command-names.230156ba.js";import"./not-real-sports.64fc4139.js";import"./useContentHeight.a1c79de7.js";import"./index.fbd937ed.js";import"./app-data.da3833f4.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.ffa75b49.js";import"./tour.8bae694e.js";import"./index.652e9765.js";import"./styled-components.browser.esm.22f548e7.js";import"./data-fields.6d263ede.js";import"./toConsumableArray.19249869.js";import"./placements.f27399b1.js";import"./index.9a56940c.js";import"./useOpenLoginPopup.d27706ba.js";import"./custom-categories.e4debdf9.js";import"./index.fcbc691d.js";import"./useSearchParams.0c3b0efc.js";import"./fav-data.1c5898b7.js";import"./user-data.f480309c.js";import"./index.9fa2e41e.js";import"./useTranslation.70287e96.js";import"./context.f61a2be2.js";import"./useSportsbookConfigs.a1eb5af5.js";import"./generic.97974c67.js";import"./index.59a19261.js";import"./index.a61ad5f8.js";import"./EmptyOddGroup.d87d06ac.js";import"./EmptyOdd.f2ae87eb.js";import"./usePredefinedStakes.58f7290f.js";import"./odds.334494eb.js";import"./socket.c077606d.js";import"./batch.dcd71b53.js";import"./calculate-boosted-odds.8854e450.js";import"./useOddChange.42d6d46a.js";import"./index.c41901f2.js";import"./index.092cd2c1.js";import"./useDoBet.0560f246.js";import"./editBetActions.91db0d9c.js";import"./edit-bet.f841d32c.js";import"./getAdvancedMultipleGeneralField.a271e2a8.js";import"./counterOffer.671956cb.js";import"./useEventbus.f35d817d.js";import"./sport-data.b40f7b49.js";import"./index.d930ff85.js";import"./index.71506da4.js";import"./index.812cdb8e.js";import"./new-sportsbook.b7bad95f.js";import"./index.b35b9773.js";import"./Skeleton.8e936dc0.js";import"./game-current-state.364f0ffb.js";import"./sport-list.d0c83c34.js";import"./live-games-helper.8638cd4e.js";import"./col.a0c1837e.js";import"./index.66ee6c8a.js";import"./index.c08ef8e3.js";import"./index.3dcc1bea.js";import"./useMounted.6d9c5610.js";import"./rtl.f8a1526a.js";import"./index.2c227bf4.js";import"./api-post-message-sender.98c07ac7.js";import"./match-tracker-sports.9fc37b4c.js";import"./Skeleton.98603ae6.js";p.IS_RTL&&o(()=>Promise.resolve({}),["assets/rtl19.css"]);const{DesktopEsport:c}=r(()=>o(()=>import("./index.e3905c12.js"),["chunks/index.e3905c12.js","chunks/index.053dea56.js","chunks/index.fbd937ed.js","chunks/app-data.da3833f4.js","chunks/backend-status-codes.80bfe624.js","chunks/i18next.083d61f0.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.ffa75b49.js","chunks/generic.97974c67.js","chunks/route-manipulation.fb85cda5.js","chunks/index.c0392060.js","chunks/swarm-command-names.230156ba.js","chunks/not-real-sports.64fc4139.js","chunks/tour.8bae694e.js","chunks/array-sort-by.690dd174.js","chunks/lazy.73833dcd.js","chunks/index.dd0790b5.js","chunks/get-data-level.db296203.js","chunks/useSportsbookConfigs.a1eb5af5.js","chunks/data-fields.6d263ede.js","chunks/game-data.db5bee93.js","chunks/index.652e9765.js","chunks/styled-components.browser.esm.22f548e7.js","chunks/toConsumableArray.19249869.js","chunks/placements.f27399b1.js","chunks/index.9a56940c.js","chunks/useOpenLoginPopup.d27706ba.js","chunks/custom-categories.e4debdf9.js","chunks/index.fcbc691d.js","chunks/useSearchParams.0c3b0efc.js","chunks/fav-data.1c5898b7.js","chunks/user-data.f480309c.js","chunks/useDispatch.cd750ed9.js","chunks/index.9fa2e41e.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.59a19261.js","chunks/index.a61ad5f8.js","chunks/EmptyOddGroup.d87d06ac.js","chunks/EmptyOdd.f2ae87eb.js","chunks/usePredefinedStakes.58f7290f.js","chunks/odds.334494eb.js","chunks/socket.c077606d.js","chunks/batch.dcd71b53.js","chunks/calculate-boosted-odds.8854e450.js","chunks/useOddChange.42d6d46a.js","chunks/index.c41901f2.js","chunks/index.092cd2c1.js","chunks/useDoBet.0560f246.js","chunks/editBetActions.91db0d9c.js","chunks/edit-bet.f841d32c.js","chunks/getAdvancedMultipleGeneralField.a271e2a8.js","chunks/counterOffer.671956cb.js","chunks/useEventbus.f35d817d.js","chunks/sport-data.b40f7b49.js","chunks/index.d930ff85.js","chunks/useSbRouteMatch.6006fa30.js","chunks/index.71506da4.js","chunks/index.812cdb8e.js","chunks/new-sportsbook.b7bad95f.js","chunks/index.b35b9773.js","chunks/Skeleton.8e936dc0.js","chunks/game-current-state.364f0ffb.js","chunks/sport-list.d0c83c34.js","chunks/live-games-helper.8638cd4e.js","chunks/col.a0c1837e.js","chunks/index.66ee6c8a.js","chunks/index.c08ef8e3.js","chunks/index.3dcc1bea.js","chunks/useMounted.6d9c5610.js","chunks/rtl.f8a1526a.js","chunks/index.2c227bf4.js","chunks/api-post-message-sender.98c07ac7.js","chunks/match-tracker-sports.9fc37b4c.js","chunks/Skeleton.98603ae6.js","chunks/handleRedirectToSportsBook.89a7df33.js","chunks/index.b3ca38a7.js","chunks/index.07b8ab74.js","chunks/get-tournament-time.134e5bb0.js","chunks/sportsbook.2cb562a0.js","chunks/index.5ffe4536.js","chunks/index.9f857438.js","chunks/new-sportsbook.4549be32.js","chunks/index.184af16c.js","chunks/useCalculateBetslipFixedSwitchersHeight.b869a969.js","chunks/index.c2e99b3f.js","chunks/global-variables.eb46f49b.js","chunks/index.4224195e.js","chunks/index.d6652226.js","chunks/hide-private-competitions.0dd8a5a5.js","chunks/private-competitions.91107fbb.js","chunks/dropdown.76994893.js","chunks/EllipsisOutlined.491da4e5.js","chunks/KeyCode.6413d982.js","chunks/index.f9d28115.js","chunks/index.77924ee5.js","chunks/index.391bace7.js","chunks/Overflow.5f48b1c8.js","chunks/FavoriteButtonGame.67180922.js","chunks/index.8214fe93.js","chunks/index.4e03bf34.js","chunks/spec-elems.3577ab05.js","chunks/useSortFavoriteSportsOrdering.f78079af.js","chunks/index.e408531e.js","chunks/useUpdateEffect.ee726e5b.js","chunks/index.68ae7eeb.js","chunks/index.03ce9bd5.js","chunks/style.32a730b7.js","chunks/index.34e99d41.js","chunks/index.baf6c475.js","chunks/useSportsFavoriteClickHandler.d32a0014.js","chunks/index.20fa6083.js","chunks/useBoostedOdds.4248980f.js","chunks/useContentHeight.a1c79de7.js","chunks/jackpot.05884396.js","chunks/index.98ac8429.js","chunks/index.19d3f5f2.js","chunks/index.4def701f.js","chunks/index.abdc3caf.js","chunks/app-routes.c65435c5.js","chunks/sportsbook.58400eeb.js","chunks/index.b05d7959.js","chunks/favorite-team.a5b4287b.js","chunks/index.60ee90b5.js","chunks/index.ee65228f.js","chunks/usePopupScrollDisable.77ea6409.js","chunks/v4.751847df.js","chunks/index.536e01bf.js","chunks/Skeleton.d4e88166.js","chunks/CheckOutlined.795713a5.js","chunks/SearchOutlined.02ed5a97.js","chunks/statusUtils.c2dcc692.js","chunks/casino.9f590000.js","chunks/results.04f1282e.js","chunks/useDebounce.2f1da174.js","chunks/useStreamConfig.0f45476a.js","chunks/live-stream.d450d78b.js","chunks/index.3cfeccf9.js","chunks/create-where-object.c46b7df7.js","chunks/addStreamInfoToGame.83901e46.js","chunks/MarketListOnlyESportSkeleton.9139d4ab.js","chunks/index.b920b844.js","chunks/esport.180bf83f.js","chunks/index.b3bd77a9.js","chunks/index.bb9c4262.js","chunks/game-data.5bec48e2.js","chunks/index.5d584b7c.js","chunks/Favorites.707ad36d.js","chunks/index.5162f16b.js"])),{MobileEsport:l}=r(()=>o(()=>import("./index.981e9286.js"),["chunks/index.981e9286.js","chunks/index.053dea56.js","chunks/index.fbd937ed.js","chunks/route-manipulation.fb85cda5.js","chunks/index.c0392060.js","chunks/backend-status-codes.80bfe624.js","chunks/i18next.083d61f0.js","chunks/swarm-command-names.230156ba.js","chunks/not-real-sports.64fc4139.js","chunks/useSearchParams.0c3b0efc.js","chunks/Skeleton.8e936dc0.js","chunks/app-data.da3833f4.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.ffa75b49.js","chunks/game-current-state.364f0ffb.js","chunks/usePredefinedStakes.58f7290f.js","chunks/odds.334494eb.js","chunks/socket.c077606d.js","chunks/batch.dcd71b53.js","chunks/user-data.f480309c.js","chunks/index.59a19261.js","chunks/useDispatch.cd750ed9.js","chunks/sport-list.d0c83c34.js","chunks/live-games-helper.8638cd4e.js","chunks/col.a0c1837e.js","chunks/index.66ee6c8a.js","chunks/index.9a56940c.js","chunks/placements.f27399b1.js","chunks/lazy.73833dcd.js","chunks/index.c08ef8e3.js","chunks/styled-components.browser.esm.22f548e7.js","chunks/index.3dcc1bea.js","chunks/useMounted.6d9c5610.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/useSbRouteMatch.6006fa30.js","chunks/rtl.f8a1526a.js","chunks/useSportsbookConfigs.a1eb5af5.js","chunks/generic.97974c67.js","chunks/index.812cdb8e.js","chunks/new-sportsbook.4549be32.js","chunks/new-casino.57a07aad.js","chunks/MarketListOnlyESportSkeleton.9139d4ab.js","chunks/index.9fa2e41e.js","chunks/index.5ffe4536.js","chunks/index.652e9765.js","chunks/index.4224195e.js","chunks/index.d6652226.js","chunks/array-sort-by.690dd174.js","chunks/tour.8bae694e.js","chunks/hide-private-competitions.0dd8a5a5.js","chunks/private-competitions.91107fbb.js","chunks/game-data.db5bee93.js","chunks/data-fields.6d263ede.js","chunks/toConsumableArray.19249869.js","chunks/useOpenLoginPopup.d27706ba.js","chunks/custom-categories.e4debdf9.js","chunks/index.fcbc691d.js","chunks/fav-data.1c5898b7.js","chunks/index.a61ad5f8.js","chunks/EmptyOddGroup.d87d06ac.js","chunks/EmptyOdd.f2ae87eb.js","chunks/calculate-boosted-odds.8854e450.js","chunks/useOddChange.42d6d46a.js","chunks/index.c41901f2.js","chunks/index.092cd2c1.js","chunks/useDoBet.0560f246.js","chunks/editBetActions.91db0d9c.js","chunks/edit-bet.f841d32c.js","chunks/getAdvancedMultipleGeneralField.a271e2a8.js","chunks/counterOffer.671956cb.js","chunks/useEventbus.f35d817d.js","chunks/sport-data.b40f7b49.js","chunks/index.d930ff85.js","chunks/index.71506da4.js","chunks/new-sportsbook.b7bad95f.js","chunks/index.b35b9773.js","chunks/index.2c227bf4.js","chunks/api-post-message-sender.98c07ac7.js","chunks/match-tracker-sports.9fc37b4c.js","chunks/Skeleton.98603ae6.js","chunks/dropdown.76994893.js","chunks/EllipsisOutlined.491da4e5.js","chunks/KeyCode.6413d982.js","chunks/index.f9d28115.js","chunks/index.77924ee5.js","chunks/index.391bace7.js","chunks/Overflow.5f48b1c8.js","chunks/FavoriteButtonGame.67180922.js","chunks/index.8214fe93.js","chunks/index.4e03bf34.js","chunks/spec-elems.3577ab05.js","chunks/index.184af16c.js","chunks/useContentHeight.a1c79de7.js","chunks/useStreamConfig.0f45476a.js","chunks/live-stream.d450d78b.js","chunks/index.34e99d41.js","chunks/index.68ae7eeb.js","chunks/index.dd0790b5.js","chunks/get-data-level.db296203.js","chunks/handleRedirectToSportsBook.89a7df33.js","chunks/index.b3ca38a7.js","chunks/index.07b8ab74.js","chunks/get-tournament-time.134e5bb0.js","chunks/sportsbook.2cb562a0.js","chunks/index.9f857438.js","chunks/useCalculateBetslipFixedSwitchersHeight.b869a969.js","chunks/index.c2e99b3f.js","chunks/global-variables.eb46f49b.js","chunks/useSortFavoriteSportsOrdering.f78079af.js","chunks/index.e408531e.js","chunks/useUpdateEffect.ee726e5b.js","chunks/index.03ce9bd5.js","chunks/style.32a730b7.js","chunks/index.baf6c475.js","chunks/useSportsFavoriteClickHandler.d32a0014.js","chunks/index.20fa6083.js","chunks/useBoostedOdds.4248980f.js","chunks/jackpot.05884396.js","chunks/index.98ac8429.js","chunks/index.19d3f5f2.js","chunks/index.4def701f.js"])),qo=()=>{const i=u(),m=n(`${a(location.pathname)}/:sport?/:game?`);return s(()=>{i(f(!0))},[m.params.sport]),t.jsx(_,{desktop:c,mobile:l,fallback:t.jsx(e,{})})};export{qo as Esport};
