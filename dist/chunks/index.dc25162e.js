(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(`.ant-tooltip{box-sizing:border-box;margin:0;padding:0;color:#000000d9;font-size:14px;font-variant:tabular-nums;line-height:1.5715;list-style:none;font-feature-settings:"tnum";position:absolute;z-index:1070;display:block;width:max-content;width:intrinsic;max-width:250px;visibility:visible}.ant-tooltip-content{position:relative}.ant-tooltip-hidden{display:none}.ant-tooltip-placement-top,.ant-tooltip-placement-topLeft,.ant-tooltip-placement-topRight{padding-bottom:14.3137085px}.ant-tooltip-placement-right,.ant-tooltip-placement-rightTop,.ant-tooltip-placement-rightBottom{padding-left:14.3137085px}.ant-tooltip-placement-bottom,.ant-tooltip-placement-bottomLeft,.ant-tooltip-placement-bottomRight{padding-top:14.3137085px}.ant-tooltip-placement-left,.ant-tooltip-placement-leftTop,.ant-tooltip-placement-leftBottom{padding-right:14.3137085px}.ant-tooltip-inner{min-width:30px;min-height:32px;padding:6px 8px;color:#fff;text-align:left;text-decoration:none;word-wrap:break-word;background-color:#000000bf;border-radius:2px;box-shadow:0 3px 6px -4px #0000001f,0 6px 16px #00000014,0 9px 28px 8px #0000000d}.ant-tooltip-arrow{position:absolute;z-index:2;display:block;width:22px;height:22px;overflow:hidden;background:transparent;pointer-events:none}.ant-tooltip-arrow-content{--antd-arrow-background-color: linear-gradient(to right bottom, rgba(0, 0, 0, .65), rgba(0, 0, 0, .75));position:absolute;inset:0;display:block;width:11.3137085px;height:11.3137085px;margin:auto;background-color:transparent;content:"";pointer-events:auto;border-radius:0 0 2px;pointer-events:none}.ant-tooltip-arrow-content:before{position:absolute;top:-11.3137085px;left:-11.3137085px;width:33.9411255px;height:33.9411255px;background:var(--antd-arrow-background-color);background-repeat:no-repeat;background-position:-10px -10px;content:"";clip-path:path("M 9.849242404917499 24.091883092036785 A 5 5 0 0 1 13.384776310850237 22.627416997969522 L 20.627416997969522 22.627416997969522 A 2 2 0 0 0 22.627416997969522 20.627416997969522 L 22.627416997969522 13.384776310850237 A 5 5 0 0 1 24.091883092036785 9.849242404917499 L 23.091883092036785 9.849242404917499 L 9.849242404917499 23.091883092036785 Z")}.ant-tooltip-placement-top .ant-tooltip-arrow,.ant-tooltip-placement-topLeft .ant-tooltip-arrow,.ant-tooltip-placement-topRight .ant-tooltip-arrow{bottom:0;transform:translateY(100%)}.ant-tooltip-placement-top .ant-tooltip-arrow-content,.ant-tooltip-placement-topLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-topRight .ant-tooltip-arrow-content{box-shadow:3px 3px 7px #00000012;transform:translateY(-11px) rotate(45deg)}.ant-tooltip-placement-top .ant-tooltip-arrow{left:50%;transform:translateY(100%) translate(-50%)}.ant-tooltip-placement-topLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-topRight .ant-tooltip-arrow{right:13px}.ant-tooltip-placement-right .ant-tooltip-arrow,.ant-tooltip-placement-rightTop .ant-tooltip-arrow,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{left:0;transform:translate(-100%)}.ant-tooltip-placement-right .ant-tooltip-arrow-content,.ant-tooltip-placement-rightTop .ant-tooltip-arrow-content,.ant-tooltip-placement-rightBottom .ant-tooltip-arrow-content{box-shadow:-3px 3px 7px #00000012;transform:translate(11px) rotate(135deg)}.ant-tooltip-placement-right .ant-tooltip-arrow{top:50%;transform:translate(-100%) translateY(-50%)}.ant-tooltip-placement-rightTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-rightBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-left .ant-tooltip-arrow,.ant-tooltip-placement-leftTop .ant-tooltip-arrow,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{right:0;transform:translate(100%)}.ant-tooltip-placement-left .ant-tooltip-arrow-content,.ant-tooltip-placement-leftTop .ant-tooltip-arrow-content,.ant-tooltip-placement-leftBottom .ant-tooltip-arrow-content{box-shadow:3px -3px 7px #00000012;transform:translate(-11px) rotate(315deg)}.ant-tooltip-placement-left .ant-tooltip-arrow{top:50%;transform:translate(100%) translateY(-50%)}.ant-tooltip-placement-leftTop .ant-tooltip-arrow{top:5px}.ant-tooltip-placement-leftBottom .ant-tooltip-arrow{bottom:5px}.ant-tooltip-placement-bottom .ant-tooltip-arrow,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{top:0;transform:translateY(-100%)}.ant-tooltip-placement-bottom .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow-content,.ant-tooltip-placement-bottomRight .ant-tooltip-arrow-content{box-shadow:-3px -3px 7px #00000012;transform:translateY(11px) rotate(225deg)}.ant-tooltip-placement-bottom .ant-tooltip-arrow{left:50%;transform:translateY(-100%) translate(-50%)}.ant-tooltip-placement-bottomLeft .ant-tooltip-arrow{left:13px}.ant-tooltip-placement-bottomRight .ant-tooltip-arrow{right:13px}.ant-tooltip-pink .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-pink .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-magenta .ant-tooltip-inner{background-color:#eb2f96}.ant-tooltip-magenta .ant-tooltip-arrow-content:before{background:#eb2f96}.ant-tooltip-red .ant-tooltip-inner{background-color:#f5222d}.ant-tooltip-red .ant-tooltip-arrow-content:before{background:#f5222d}.ant-tooltip-volcano .ant-tooltip-inner{background-color:#fa541c}.ant-tooltip-volcano .ant-tooltip-arrow-content:before{background:#fa541c}.ant-tooltip-orange .ant-tooltip-inner{background-color:#fa8c16}.ant-tooltip-orange .ant-tooltip-arrow-content:before{background:#fa8c16}.ant-tooltip-yellow .ant-tooltip-inner{background-color:#fadb14}.ant-tooltip-yellow .ant-tooltip-arrow-content:before{background:#fadb14}.ant-tooltip-gold .ant-tooltip-inner{background-color:#faad14}.ant-tooltip-gold .ant-tooltip-arrow-content:before{background:#faad14}.ant-tooltip-cyan .ant-tooltip-inner{background-color:#13c2c2}.ant-tooltip-cyan .ant-tooltip-arrow-content:before{background:#13c2c2}.ant-tooltip-lime .ant-tooltip-inner{background-color:#a0d911}.ant-tooltip-lime .ant-tooltip-arrow-content:before{background:#a0d911}.ant-tooltip-green .ant-tooltip-inner{background-color:#52c41a}.ant-tooltip-green .ant-tooltip-arrow-content:before{background:#52c41a}.ant-tooltip-blue .ant-tooltip-inner{background-color:#1890ff}.ant-tooltip-blue .ant-tooltip-arrow-content:before{background:#1890ff}.ant-tooltip-geekblue .ant-tooltip-inner{background-color:#2f54eb}.ant-tooltip-geekblue .ant-tooltip-arrow-content:before{background:#2f54eb}.ant-tooltip-purple .ant-tooltip-inner{background-color:#722ed1}.ant-tooltip-purple .ant-tooltip-arrow-content:before{background:#722ed1}.ant-tooltip-rtl{direction:rtl}.ant-tooltip-rtl .ant-tooltip-inner{text-align:right}
.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover{color:var(--v3-primary-5)}.sportsbook-game-list-wrapper__games:not(.sportsbook-game-list-wrapper__games-mobile) .gameFavIcon:hover.md{width:24px!important;height:24px!important}`)),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var ut=Object.defineProperty,ft=Object.defineProperties;var dt=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var gt=Object.prototype.hasOwnProperty,Tt=Object.prototype.propertyIsEnumerable;var Q=(l,f,g)=>f in l?ut(l,f,{enumerable:!0,configurable:!0,writable:!0,value:g}):l[f]=g,$=(l,f)=>{for(var g in f||(f={}))gt.call(f,g)&&Q(l,g,f[g]);if(z)for(var g of z(f))Tt.call(f,g)&&Q(l,g,f[g]);return l},j=(l,f)=>ft(l,dt(f));import{S,e as E,g as St,E as q,aa as yt,i as I,j as Et}from"./index.9a33d21b.js";import{memo as ht,useMemo as J,useLayoutEffect as X,useEffect as N}from"react";import{s as bt}from"./array-sort-by.690dd174.js";import{s as At}from"./data-fields.c78d776a.js";import{R as Lt,N as Z}from"./index.2e7649fa.js";import{O as Ct,u as Dt}from"./index.0a152e8c.js";import{m as Mt,g as tt}from"./route-manipulation.7a3d02e7.js";import{g as It,f as ot}from"./game-data.f991b97b.js";import{m as kt}from"./sports-menu.50cd0700.js";import{E as n}from"./not-real-sports.64fc4139.js";import{b as h,T as it}from"./sportsbook.2cb562a0.js";import{e as _t,u as vt}from"./get-data-level.0ccc74a6.js";import{g as Ot}from"./sportsbook.843a40b0.js";import{G as Gt}from"./index.ed357a12.js";import{u as Nt}from"./useSportsbookConfigs.7961e643.js";import{u as Rt}from"./useMounted.6d9c5610.js";import{u as Ut}from"./useSearchParams.353231ec.js";import{u as $t}from"./index.3dc509b3.js";import{u as Ft}from"./useSbRouteMatch.ecfb9430.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import{I as Vt,b as wt,a as xt,j as Bt,A as Ht,d as Wt,c as Kt,l as Yt,h as Pt}from"./sport-data.58080bc0.js";import{s as M,x as zt,y as Qt,p as at,z as jt,r as rt,A as qt}from"./new-sportsbook.1752e123.js";import{k as Jt}from"./fav-data.eb686620.js";import{g as Xt,p as Zt,e as to,s as oo}from"./new-sportsbook.6886dfa1.js";import{u as io}from"./useTranslation.70287e96.js";import{u as b}from"./index.17630e7e.js";import{u as ao}from"./useDispatch.151d3a82.js";import"react-dom";import"./swarm-command-names.afa48e3f.js";import"./generic.cf030613.js";import"./lazy.73833dcd.js";import"./index.fbd937ed.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./col.94909042.js";import"./index.9011aacc.js";import"./index.7d5f88f7.js";import"./placements.2094afc0.js";import"./index.9fa2e41e.js";import"./handleRedirectToSportsBook.1fa97cf0.js";import"./tour.8bae694e.js";import"./toConsumableArray.635ccf3f.js";import"./index.cd749fad.js";import"./styled-components.browser.esm.04179a03.js";import"./useOpenLoginPopup.9bf6877c.js";import"./custom-categories.700b2888.js";import"./index.1dfc2dcd.js";import"./user-data.358c1cdc.js";import"./batch.dcd71b53.js";import"./index.184af16c.js";import"./index.9eebc582.js";import"./index.5f1e48b3.js";import"./useCalculateBetslipFixedSwitchersHeight.8651a87e.js";import"./index.9e499441.js";import"./odds.3bca0cb7.js";import"./index.b85c00ef.js";import"./index.cb829a96.js";import"./index.9c369ab9.js";import"./index.3dbf2b2e.js";import"./index.f4c7d5fb.js";import"./index.b40f854c.js";import"./Skeleton.da8e5d7a.js";import"./global-variables.eb46f49b.js";import"./Skeleton.e7ccd4f0.js";import"./game-current-state.dbd76719.js";import"./usePredefinedStakes.892527de.js";import"./socket.c1bf8301.js";import"./sport-list.d0c83c34.js";import"./live-games-helper.ab98b608.js";import"./index.f24e8077.js";import"./index.fcc8b535.js";import"./rtl.d50a3051.js";import"./index.625ed26a.js";import"./index.3536b24d.js";import"./hide-private-competitions.bb3e889f.js";import"./private-competitions.91107fbb.js";import"./index.c7348bcc.js";import"./api-post-message-sender.98c07ac7.js";import"./dropdown.29a72cea.js";import"./EllipsisOutlined.53bf0b36.js";import"./KeyCode.6413d982.js";import"./index.aa1549be.js";import"./index.c5ad8069.js";import"./index.08cf9b6f.js";import"./Overflow.554112a5.js";import"./FavoriteButtonGame.520918c4.js";import"./index.29e6371b.js";import"./EmptyOddGroup.91184c82.js";import"./EmptyOdd.1f8b4e8f.js";import"./calculate-boosted-odds.8854e450.js";import"./useOddChange.efac89df.js";import"./useDoBet.55e9cf8f.js";import"./editBetActions.4f0fb51e.js";import"./edit-bet.f841d32c.js";import"./getAdvancedMultipleGeneralField.2fa28824.js";import"./counterOffer.74a34af9.js";import"./useEventbus.6393d2bd.js";import"./index.27fc0452.js";import"./index.d4b2e2e7.js";import"./index.856ed0f4.js";import"./match-tracker-sports.bb8d5033.js";import"./spec-elems.a06c4bcb.js";import"./useSortFavoriteSportsOrdering.8c105f2d.js";import"./index.44f69af2.js";import"./useUpdateEffect.ee726e5b.js";import"./index.6cdb25e4.js";import"./index.7a2bd44d.js";import"./style.b04602fb.js";import"./context.f61a2be2.js";import"./index.3089aa99.js";import"./index.6eb22f1b.js";import"./useSportsFavoriteClickHandler.d437d18b.js";import"./index.e5947b84.js";import"./useBoostedOdds.fba5ecbe.js";import"./useContentHeight.06461539.js";import"./jackpot.6ac13427.js";import"./index.9e446389.js";import"./index.a1fbe297.js";import"./index.f57a2e81.js";import"./index.a12ad9da.js";import"./get-tournament-time.5f47a243.js";const ro=l=>"gameCount"in l,so=l=>typeof l.game=="number",Da=ht(({extraItems:l,isOverview:f,whereParams:g})=>{var H,W;const e=Nt(),a=b(Xt),{history:k,push:st}=$t(),p=ao(),{mounted:pt}=Rt(),_=b(Jt),et=b(Vt),{t:F}=io(),{layoutType:R}=Ut(),t=Ft(`${Mt(window.getPathname())}${`${f?`/${Ct}`:""}/:sport?/:region?/:competition?/:game?`}`),D=b(Zt),v=b(wt),O=b(xt),L=b(Bt),G=b(Ht),{orderSports:mt,orderIsLoading:nt,firstSportId:V,needToLoadOrderedData:lt}=Dt(),w=b(to),y=b(oo)[e.type===h.live?h.live:h.prematch],A=J(()=>mt(structuredClone(D)),[w,D]),m=J(()=>A!=null&&A.length?[...l||[],...A].map(o=>({id:o.id,alias:o.alias,name:o.name,order:o.order,gameCount:ro(o)?o.gameCount:so(o)?o.game:void 0,afterIconIsRendered:o.afterIconIsRendered})).filter(o=>Number(o.id)>0&&!S.MOCKED_DATA?!!o.gameCount:!0):null,[A,l]),x=(o,d)=>{if(Object.keys((o==null?void 0:o.sport)||{}).length&&pt.current){const r=$({},o.sport),[i,s]=kt(r,d,t==null?void 0:t.params.sport);p(jt({[e.type===h.live?h.live:h.prematch]:s})),p(rt(bt(Object.values(i))))}else p(rt(void 0))};X(()=>{e.spbLayoutType===E.ADVANCED&&!R&&!t.params.sport&&(a!=null&&a.alias)&&p(M(null))},[R,t.params.sport,a==null?void 0:a.alias]),N(()=>{const o=Lt.gForSubscribe(`SportsbookSportsMenu${e.type}`),d={sport:At.sport,game:"@count"},r=g||{game:{type:e.type==="live"?1:{"@in":[0,2]}},sport:{type:{"@in":It(e.sportType)}}};O&&(r.sport.id={"@in":O}),v&&Object.keys(v).length>0&&(r.game.start_ts=v);let i=[];const s=new Promise(u=>{!!+S.SPORTS_GROUPING&&[E.AMERICAN,E.CLASSIC].includes(e.spbLayoutType)?Ot(C=>{i=C,u(C)},()=>{u([])}):u([])}),c=new Promise(u=>{_t(o,d,r,T=>{u(T)},!0,T=>{x(T,i)})});return Promise.all([c,s]).then(([u,T])=>{x(u,T)}),()=>{vt(o)}},[v,O,g]),N(()=>{var o,d,r,i;if(!((((o=t.params)==null?void 0:o.sport)===n.topMatches||((d=t.params)==null?void 0:d.sport)===n.olympicCompetition)&&!a)){if(((r=t.params)==null?void 0:r.sport)===n.olympicCompetition&&(a==null?void 0:a.alias)!==n.olympicCompetition){p(M({id:-10,alias:n.olympicCompetition,name:F("sportsbook.olympicCompetition")}));return}if(((i=t.params)==null?void 0:i.sport)===n.topMatches&&(a==null?void 0:a.alias)!==n.topMatches){p(M({id:-9,alias:n.topMatches,name:F("sportsbook.topMatches")}));return}(m||y)&&B([...m||[],...y||[]])}},[m==null?void 0:m.length,V,y==null?void 0:y.length,(H=t.params)==null?void 0:H.sport]);const B=o=>{const r=e.spbLayoutType===E.ADVANCED&&!R||e.pageType===St.prematch&&(S.TOP_LEAGUES&&S.SPORT_MENU_DEFAULT_SELECTED==="topLeagues"&&S.TOP_LEAGUES_LAYOUT===q.compact||S.TOP_MATCHES&&S.SPORT_MENU_DEFAULT_SELECTED===n.topMatches&&S.TOP_MATCHES_LAYOUT===yt.compact)&&e.spbLayoutType!==E.AMERICAN&&!I();if(!D||r)return;let i=o.find(s=>s.alias===(t==null?void 0:t.params.sport));if(!i)for(const s of o){const c="sports"in s?s.sports.find(u=>u.alias===(t==null?void 0:t.params.sport)):null;if(c){i=c;break}}if(!i&&!I())switch(S.SPORT_MENU_DEFAULT_SELECTED){case"sportsTypes":i=A?A[0]:D[0];break;case"topLeagues":i=o.find(s=>s.alias===n.topLeague);break;case"topMatches":i=o.find(s=>s.alias===n.topMatches);break;case"todayEvents":i=o.find(s=>s.alias===n.todayEvents);break;case"boostedOdds":i=o.find(s=>s.alias===n.boostedOdds);break;case"outright":i=o.find(s=>s.alias===n.outright);break;case"betBuilder":i=o.find(s=>s.alias===n.betBuilder);break;case"multiples":i=o.find(s=>s.alias===n.multiples);break}i||(i=A?A[0]:D[0]),!(lt&&(!V||!w))&&(t!=null&&t.params.sport&&Z.includes(t==null?void 0:t.params.sport)&&a||a&&i&&a.alias===i.alias||(t==null?void 0:t.params.sport)==="team"||(t==null?void 0:t.params.sport)==="favorite"||U({id:Number(i==null?void 0:i.id),alias:(i==null?void 0:i.alias)||"",name:(i==null?void 0:i.name)||"",gameCount:(i==null?void 0:i.gameCount)||0},!0))},U=(o,d)=>{var s,c,u,T,C,K,Y;et&&!d&&p(Wt(!1));const r="sports"in o&&e.type===h.live?o.sports[0]:o;if(S.MOCKED_DATA){p(M(r));return}if(r.alias===(a==null?void 0:a.alias))return;if(Z.includes(r.alias)&&O&&p(Kt(null)),(s=L==null?void 0:L[r.alias])!=null&&s[0]&&G[r.alias]&&((c=G[r.alias])==null?void 0:c.value)!==((u=L==null?void 0:L[r.alias])==null?void 0:u[0].value)&&p(Yt(j($({},G),{[r.alias]:((T=L[r.alias])==null?void 0:T[0])||G[r.alias]}))),p(Pt(void 0)),p(zt(!1)),p(Qt(!1)),p(M(r)),e.spbLayoutType===E.ADVANCED&&p(at(r.alias)),it.MULTIVIEW===((C=t==null?void 0:t.params)==null?void 0:C.sport)&&I()||![it.MULTIVIEW,r.alias].includes((K=t==null?void 0:t.params)==null?void 0:K.sport)){const P=tt(((Y=t==null?void 0:t.path)==null?void 0:Y.replace(/:sport\?.*$/,r.alias))||"");e.spbLayoutType===E.ADVANCED?st(`${P}${k.location.search}`,d):k.push(`${P}${k.location.search}`)}},ct=o=>{p(qt(o.id,e.type===h.live?h.live:h.prematch))};return X(()=>{var o,d,r,i,s;if(!((o=t==null?void 0:t.params)!=null&&o.sport)&&m&&!I()&&B(m),(d=t==null?void 0:t.params)!=null&&d.sport&&(m||y)){let c=m==null?void 0:m.find(u=>u.alias===t.params.sport);if(!c&&y)for(const u of y){const T=u.sports.find(C=>C.alias===t.params.sport);if(T){c=T;break}}c&&(S.SPORT_MENU_DEFAULT_SELECTED!=="topLeagues"&&S.TOP_LEAGUES_LAYOUT===q.compact||c.alias!==(a==null?void 0:a.alias)||c.gameCount!==(a==null?void 0:a.game))&&(e.spbLayoutType===E.ADVANCED&&p(at(c.alias)),p(M(c))),e.spbLayoutType===E.ADVANCED&&m&&!c&&U({id:Number((r=m[0])==null?void 0:r.id),alias:((i=m[0])==null?void 0:i.alias)||"",name:((s=m[0])==null?void 0:s.name)||""},!0)}},[D,m,y,(W=t==null?void 0:t.params)==null?void 0:W.sport]),N(()=>{a&&(I()?p(ot({name:a.name})):e.spbLayoutType!==E.CLASSIC&&p(ot({name:a.name})))},[a]),N(()=>{var o;if(t.params.sport===n.team&&_.length&&!a){const r=_.find(({sport:i})=>i.alias===t.params.region)||_[0];k.push(`${tt(t.path)}/${t.params.sport}/${(o=r.sport)==null?void 0:o.alias}/${r.teamId}${window.location.search}`)}},[a,_]),Et.jsx(Gt,{layout:"underline",items:m,selectedItem:a,onSelectItem:U,groupItems:y,toggleGroupState:ct,orderIsLoading:nt})});export{Da as SportsbookSportsMenu};
