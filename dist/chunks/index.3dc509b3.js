(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(".sport__tournament__wrapper{position:relative;padding:8px;background:var(--v3-black-4);border-bottom-left-radius:6px;border-bottom-right-radius:6px;box-shadow:var(--v3-shadow-strong);cursor:auto}.sport__tournament__wrapper>div{background:var(--v3-black-0);border-radius:6px;line-height:16px;font-size:12px}.sport__tournament__wrapper>div .sports__tour-empty{padding:27px 52px}.sport__tournament__wrapper .sport__tour-item{background:var(--v3-black-2);color:var(--v3-black-85);font-size:14px;padding:8px;border-radius:4px}.sport__tournament__wrapper .sport__tour-item:not(:last-child){margin-bottom:4px}.sport__tournament__wrapper .sport__tour-item:hover{background:var(--v3-black-6);color:var(--v3-black-85)}.sport__tournament-loading{position:relative;height:70px}.sport__tournament-loading .v3-spin{justify-content:center}.sport__tournament--mobile{background-color:var(--v3-black-6);border-radius:6px}.sport__tournament--mobile+.favoriteTeam--mobile .favoriteTeam-mobile__trigger{margin:0}.sport__tournament--mobile .eventCollapse__title{font-size:14px!important;line-height:20px!important}.sport__tournament--mobile__header{background-color:var(--v3-black-0);height:40px!important;min-height:40px!important}.sport__tournament--mobile__title{font-weight:400;font-size:14px!important;line-height:20px!important}.sports__tour-name{font-size:14px;font-weight:600;color:var(--v3-black-85)}.sports__tour-header{justify-content:space-between;align-items:center;padding:8px;border-bottom:1px solid var(--v3-black-4)}.sports__tour-reset{font-size:12px;color:var(--v3-black-45);display:flex;align-items:center}.sports__tour-reset span:first-child{margin:0 4px}.sports__tour-reset.v3-icon{margin-top:1px}.sports__tour-info{color:var(--v3-black-65);font-size:12px;margin:4px 0}.sports__tour-selected{background:var(--v3-black-6);border-radius:4px}.sports__tour-selected>div{display:flex;align-items:center;padding-left:8px;padding-right:8px;line-height:16px}.sports__tour-details-container{padding-top:4px;padding-bottom:8px;justify-content:space-between;align-items:center;line-height:20px}.sports__tour-details-container span:first-child{font-size:14px;font-weight:600;color:var(--v3-black-85)}.sports__tour-see-details{text-decoration:underline;color:var(--v3-primary-color);font-size:12px}.sports__tour-empty{display:flex;align-items:center;justify-content:center;min-height:30px;text-align:center}.mobile-sports__tour{background-color:var(--v3-black-0);padding-bottom:8px;padding-top:8px;border-bottom:1px solid var(--v3-black-6)}.mobile-sports__tour>div{border-radius:4px;margin:0 8px;border-bottom:1px solid var(--v3-black-6)}.mobile-sports__tour .sport__tour-item{height:33px;background-color:var(--v3-black-0);display:flex;align-items:center}.mobile-sports__tour .sport__tournament{background-color:var(--v3-black-4)}.mobile-sports__tour .eventCollapse__title{font-size:14px!important}.mobile-sports__tour .v3-event-collapse__header{background-color:var(--v3-black-4);height:36px;min-height:36px}.mobile-sports__tour .sports__tour-selected{background-color:var(--v3-black-0)}.mobile-sports__tour .eventCollapse__title,.mobile-sports__tour .sports__tour-header .sports__tour-name{font-weight:100}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{useCallback as x,useState as h,useEffect as y}from"react";import{u as k,S as $,j as s,i as u}from"./index.9a33d21b.js";import{_ as z}from"./i18next.083d61f0.js";import{c as B}from"./index.fbd937ed.js";import{G as O,I as M,E as P}from"./app-data.3313f084.js";import{g as A}from"./get-tournament-time.5f47a243.js";import{m as H,g as K}from"./route-manipulation.7a3d02e7.js";import{p as f,R as g,I as J}from"./index.2e7649fa.js";import{T as Q}from"./sportsbook.2cb562a0.js";import{C as T}from"./swarm-command-names.afa48e3f.js";import{EventCollapse as V}from"./index.cb829a96.js";import{L as W}from"./index.b40f854c.js";import{a as Z}from"./index.1dfc2dcd.js";import{u as q}from"./usePredefinedStakes.892527de.js";import{u as X}from"./useSbRouteMatch.ecfb9430.js";import"./backend-status-codes.4c1943df.js";import{a as Y,c as L}from"./sport-data.58080bc0.js";import{p as ss,g as es}from"./new-sportsbook.6886dfa1.js";import{u as os}from"./useTranslation.70287e96.js";import{u as j}from"./index.17630e7e.js";import{u as ts}from"./useDispatch.151d3a82.js";const D=[],Rs=()=>{const t=k(),r=x((i,d=!1)=>{d||D.push(`${window.getPathname()}${window.location.search}`),t.push(i)},[]),n=x(()=>D.pop(),[]),a=x(i=>{const d=n();t.push(d||i)},[]);return{history:t,push:r,getFrom:n,goBack:a,location:t.location}},ns=(t,r,n=null)=>{f.then(a=>{a.sendCommand({command:T.GET_TOURNAMENT_LIST,params:t,rid:g.gForCommand()},"",r,null,n)})},bs=(t,r)=>{f.then(n=>{n.sendCommand({command:T.GET_TOURNAMENT,params:{tournament_id:t},rid:g.gForCommand()},"",r)})},vs=(t,r)=>{f.then(n=>{n.sendCommand({command:T.GET_TOURNAMENT_STATS,params:{tournament_id:t},rid:g.gForCommand()},"",r)})},ys=(t,r,n)=>{f.then(a=>{a.sendCommand({command:T.JOIN_TO_TOURNAMENT,params:{tournament_id:t},rid:g.gForCommand()},"",r,null,n)})};$.IS_RTL&&z(()=>Promise.resolve({}),["assets/rtl9.css"]);const Os=()=>{var v;const[t,r]=h(!1),[n,a]=h(!0),[i,d]=h(null),[o,C]=h(null),N=j(ss),S=j(es),m=j(Y),E=k(),I=ts(),{t:c}=os(),{path:F}=X(),{currency:R}=q(),G=e=>{var l;if((l=e==null?void 0:e.SportRuleList)!=null&&l.SelectedSportItems){const _=[];if(e.SportRuleList.SelectedSportItems.map(p=>{_.push(p.Id)}),I(L(_)),C(e),!_.includes(S==null?void 0:S.id)){const p=N==null?void 0:N.find(({id:U})=>_.includes(Number(U)));E.push(`${H(window.getPathname())}/${p==null?void 0:p.alias}`)}}},b=()=>{I(L(null)),C(null)},w=e=>{const l=`${K(F)}/${Q.TOURNAMENTS}/?tournamentId=${o==null?void 0:o.Id}`;e.preventDefault(),e.stopPropagation(),E.push(u()?Z({tournamentId:o==null?void 0:o.Id.toString()}):l)};return y(()=>{t&&ns({product_type_id:J.SPORT},e=>{e!=null&&e.result&&(d(e.result),a(!1))})},[t]),y(()=>{o&&!(m!=null&&m.length)&&b()},[o,m==null?void 0:m.length]),s.jsx("div",{className:B(["sport__tournament",{"sport__tournament--mobile":u()}]),children:s.jsx(V,{title:s.jsx("span",{className:"sport__tournament--mobile__title",children:c("pages.tournaments")}),noMargin:u(),icon:s.jsx(O,{lib:"generic",name:"tournament",theme:"colored",className:"text-color",size:u()?M.MOBILE_20:M.DESKTOP_24}),onChange:e=>{r(e)},defaultActive:!1,headerClassName:u()?"sport__tournament--mobile__header":"",size:"middle",children:s.jsx("div",{className:"sport__tournament__wrapper",children:n?s.jsx("div",{className:"sport__tournament-loading",children:s.jsx(W,{size:P._16})}):i?s.jsx("div",{className:o?"selected__tour-container":"",children:o?s.jsxs("div",{className:"sports__tour-selected",children:[s.jsxs("div",{className:"sports__tour-header",children:[s.jsx("span",{className:"sports__tour-name",children:o.Name}),s.jsxs("span",{className:"sports__tour-reset",onClick:b,children:[s.jsx("span",{children:c("sportsbook.reset")}),s.jsx(O,{lib:"generic",name:"close",theme:"default",size:P._8})]})]}),s.jsxs("div",{className:"sports__tour-info",children:[s.jsxs("span",{children:[c("casino.buyInFee"),": "]}),s.jsxs("span",{children:[" ",R," ",(v=o==null?void 0:o.RegistrationAmount)==null?void 0:v.toString()]})]}),s.jsxs("div",{className:"sports__tour-info",children:[A(o.StartDate,".")," -"," ",A(o.EndDate,".")]}),s.jsxs("div",{className:"sports__tour-details-container",children:[s.jsxs("span",{children:[R," ",o.PrizeFund]}),s.jsx("span",{onClick:w,className:"sports__tour-see-details",children:c("sportsbook.seeDetails")})]})]}):i.length?i.map((e,l)=>s.jsx("div",{className:"sport__tour-item",onClick:()=>G(e),children:e.Name},l)):s.jsx("div",{className:"sports__tour-empty",children:c("emptyMessages.noTournamentGame")})}):s.jsx("div",{className:"sports__tour-empty",children:c("emptyMessages.noTournamentGame")})})},"1-sport-tournament")})};export{Os as S,vs as a,ns as b,bs as g,ys as j,Rs as u};
