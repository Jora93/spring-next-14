(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{BetOnLeaguePublic as i}from"../elements/BetOnLeague/BetOnLeague.public.js";import r from"../elements/Esport/Esport.public.js";import m from"../elements/Sportsbook/Sportsbook.public.js";import t from"../elements/TopCasinoWinners/TopCasinoWinners.public.js";import{EWidgetName as o}from"./widgets-names.js";import p from"../elements/Betslip/Betslip.public.js";import e from"../elements/Calendar/Calendar.public.js";import l from"../elements/CasinoSingleGame/CasinoSingleGame.public.js";import a from"../elements/Clock/Clock.public.js";import{E as s}from"../../chunks/Events.public.32d28a8c.js";import n from"../elements/FTNRate/FTNRate.public.js";import u from"../elements/SkillGames/SkillGames.public.js";import c from"../elements/TvGames/TvGames.public.js";import b from"../elements/VirtualSports/VirtualSport.public.js";import"../../chunks/index.9a33d21b.js";import"react";import"react-dom";import"../../chunks/swarm-command-names.afa48e3f.js";import"../../chunks/odds.3bca0cb7.js";import"../../chunks/index.17630e7e.js";import"../../chunks/index.1dfc2dcd.js";import"../../chunks/useContentHeight.06461539.js";import"../../chunks/index.9e499441.js";import"../../chunks/user-data.358c1cdc.js";import"../../chunks/index.0a152e8c.js";import"../../chunks/i18next.083d61f0.js";import"../../chunks/generic.cf030613.js";import"../../chunks/route-manipulation.7a3d02e7.js";import"../../chunks/index.2e7649fa.js";import"../../chunks/backend-status-codes.4c1943df.js";import"../../chunks/not-real-sports.64fc4139.js";import"../../chunks/lazy.73833dcd.js";import"../../chunks/get-data-level.0ccc74a6.js";import"../../chunks/useSportsbookConfigs.7961e643.js";import"../../chunks/index.fbd937ed.js";import"../../chunks/app-data.3313f084.js";import"../../chunks/create-test-id.17a0abc8.js";import"../../chunks/create-fake-array.68114bc4.js";import"../../chunks/data-fields.c78d776a.js";import"../../chunks/array-sort-by.690dd174.js";import"../../chunks/game-data.f991b97b.js";import"../../chunks/tour.8bae694e.js";import"../../chunks/index.9c369ab9.js";import"../../chunks/styled-components.browser.esm.04179a03.js";import"../../chunks/toConsumableArray.635ccf3f.js";import"../../chunks/placements.2094afc0.js";import"../../chunks/index.7d5f88f7.js";import"../../chunks/useOpenLoginPopup.9bf6877c.js";import"../../chunks/custom-categories.700b2888.js";import"../../chunks/useSearchParams.353231ec.js";import"../../chunks/fav-data.eb686620.js";import"../../chunks/useDispatch.151d3a82.js";import"../../chunks/index.9fa2e41e.js";import"../../chunks/useTranslation.70287e96.js";import"../../chunks/context.f61a2be2.js";import"../../chunks/index.29e6371b.js";import"../../chunks/EmptyOddGroup.91184c82.js";import"../../chunks/EmptyOdd.1f8b4e8f.js";import"../../chunks/usePredefinedStakes.892527de.js";import"../../chunks/socket.c1bf8301.js";import"../../chunks/batch.dcd71b53.js";import"../../chunks/calculate-boosted-odds.8854e450.js";import"../../chunks/useOddChange.efac89df.js";import"../../chunks/index.9eebc582.js";import"../../chunks/index.5f1e48b3.js";import"../../chunks/useDoBet.55e9cf8f.js";import"../../chunks/editBetActions.4f0fb51e.js";import"../../chunks/edit-bet.f841d32c.js";import"../../chunks/getAdvancedMultipleGeneralField.2fa28824.js";import"../../chunks/counterOffer.74a34af9.js";import"../../chunks/useEventbus.6393d2bd.js";import"../../chunks/sport-data.58080bc0.js";import"../../chunks/index.27fc0452.js";import"../../chunks/useSbRouteMatch.ecfb9430.js";import"../../chunks/index.3dbf2b2e.js";import"../../chunks/index.f4c7d5fb.js";import"../../chunks/new-sportsbook.6886dfa1.js";import"../../chunks/index.a12ad9da.js";import"../../chunks/Skeleton.e7ccd4f0.js";import"../../chunks/game-current-state.dbd76719.js";import"../../chunks/sport-list.d0c83c34.js";import"../../chunks/live-games-helper.ab98b608.js";import"../../chunks/col.94909042.js";import"../../chunks/index.9011aacc.js";import"../../chunks/index.f24e8077.js";import"../../chunks/index.fcc8b535.js";import"../../chunks/useMounted.6d9c5610.js";import"../../chunks/rtl.d50a3051.js";import"../../chunks/index.c7348bcc.js";import"../../chunks/api-post-message-sender.98c07ac7.js";import"../../chunks/match-tracker-sports.bb8d5033.js";import"../../chunks/Skeleton.da8e5d7a.js";import"../../chunks/handleRedirectToSportsBook.1fa97cf0.js";import"../../chunks/index.cd749fad.js";import"../../chunks/index.3dc509b3.js";import"../../chunks/get-tournament-time.5f47a243.js";import"../../chunks/sportsbook.2cb562a0.js";import"../../chunks/index.cb829a96.js";import"../../chunks/index.b40f854c.js";import"../../chunks/new-sportsbook.1752e123.js";import"../../chunks/index.184af16c.js";import"../../chunks/useCalculateBetslipFixedSwitchersHeight.8651a87e.js";import"../../chunks/index.b85c00ef.js";import"../../chunks/global-variables.eb46f49b.js";import"../../chunks/index.625ed26a.js";import"../../chunks/index.3536b24d.js";import"../../chunks/hide-private-competitions.bb3e889f.js";import"../../chunks/private-competitions.91107fbb.js";import"../../chunks/dropdown.29a72cea.js";import"../../chunks/EllipsisOutlined.53bf0b36.js";import"../../chunks/KeyCode.6413d982.js";import"../../chunks/index.aa1549be.js";import"../../chunks/index.c5ad8069.js";import"../../chunks/index.08cf9b6f.js";import"../../chunks/Overflow.554112a5.js";import"../../chunks/FavoriteButtonGame.520918c4.js";import"../../chunks/index.d4b2e2e7.js";import"../../chunks/index.856ed0f4.js";import"../../chunks/spec-elems.a06c4bcb.js";import"../../chunks/useSortFavoriteSportsOrdering.8c105f2d.js";import"../../chunks/index.44f69af2.js";import"../../chunks/useUpdateEffect.ee726e5b.js";import"../../chunks/index.6cdb25e4.js";import"../../chunks/index.7a2bd44d.js";import"../../chunks/style.b04602fb.js";import"../../chunks/index.3089aa99.js";import"../../chunks/index.6eb22f1b.js";import"../../chunks/useSportsFavoriteClickHandler.d437d18b.js";import"../../chunks/index.e5947b84.js";import"../../chunks/useBoostedOdds.fba5ecbe.js";import"../../chunks/jackpot.6ac13427.js";import"../../chunks/index.9e446389.js";import"../../chunks/index.a1fbe297.js";import"../../chunks/index.f57a2e81.js";import"../../chunks/index.0f98349d.js";import"../../chunks/get-domain.8143fbe7.js";import"./widget-partner-types.js";import"../Wrapper.js";import"../../chunks/QueryClientProvider.e298e67a.js";import"../../chunks/weekday.4f991ab7.js";import"../../chunks/index.b05b279b.js";import"../../chunks/useStreamConfig.2daa4281.js";import"../../chunks/live-stream.2a4336e5.js";import"../../chunks/game-url.afce1e8e.js";import"../../chunks/casino.a461d655.js";import"../../chunks/app-routes.c65435c5.js";import"../../chunks/index.50c8d634.js";import"../../chunks/index.6af7a08e.js";import"../../chunks/index.56325e35.js";import"../../chunks/usePopupScrollDisable.d1a6ece6.js";import"../../chunks/v4.751847df.js";import"../../chunks/useFetchAccountParams.6304e015.js";import"../../chunks/useQuery.5322b9d6.js";import"../../chunks/account-settings.fd25e903.js";const sr={[o.Events]:s,[o.SkillGames]:u,[o.VirtualSport]:b,[o.Esport]:r,[o.Clock]:a,[o.BetOnLeague]:i,[o.TvGames]:c,[o.Sportsbook]:m,[o.CasinoSingleGame]:l,[o.Calendar]:e,[o.FTNRate]:n,[o.Betslip]:p,[o.TopCasinoWinners]:t};export{sr as EXPOSED_WIDGETS_PUBLIC};
