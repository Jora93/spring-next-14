(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode("span .gameNameRedirection__loading{position:unset}.betbuilder__detail{display:block;line-height:20px;font-size:12px;overflow:hidden;text-overflow:ellipsis;cursor:text}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var O=Object.defineProperty,j=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(t,s,e)=>s in t?O(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,p=(t,s)=>{for(var e in s||(s={}))I.call(s,e)&&_(t,e,s[e]);if(G)for(var e of G(s))N.call(s,e)&&_(t,e,s[e]);return t},b=(t,s)=>j(t,U(s));import{i as m}from"./i18next.083d61f0.js";import{u as W,j as l,S as n,i as A}from"./index.9a33d21b.js";import{useState as k}from"react";import{s as F}from"./styled-components.browser.esm.04179a03.js";import{E as K}from"./app-data.3313f084.js";import{s as M,r as B,c as D}from"./data-fields.c78d776a.js";import{w as z,l as H,bd as J,b8 as L,aA as T,R as q}from"./index.2e7649fa.js";import{a as Q,b as V}from"./route-manipulation.7a3d02e7.js";import{s as X}from"./backend-status-codes.4c1943df.js";import{e as Y}from"./get-data-level.0ccc74a6.js";import{L as Z}from"./index.b40f854c.js";import{b as ss,a as es,s as ts,c as os}from"./sport-data.58080bc0.js";import{C as is,v as as}from"./new-sportsbook.1752e123.js";import{u as rs}from"./useTranslation.70287e96.js";import{u as ns}from"./useDispatch.151d3a82.js";import{u as C}from"./index.17630e7e.js";const bs=t=>{let s=null,e;if(!t)return s;try{e=JSON.parse(t);const i=e==null?void 0:e.EachWayK,a=e==null?void 0:e.EachWayPlace;(i||a)&&(i===1&&a===1?s=`${m.t("racing.winOnly")}`:s=`${m.t("racing.ewLong")} 1/${i} ${m.t("account.odds")} ${a} ${m.t("racing.places")}`)}catch(i){console.info(i)}return s};const cs=F.span`
  position: relative;
  overflow: hidden;
  min-height: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 16px;
  }
`,As=({gameId:t,gameName:s})=>{const[e,i]=k(!1),{t:a}=rs(),v=W(),r=ns(),R=C(ss),d=C(es),x=()=>{t&&(i(!0),Y(q.gForCommand("CheckGameForRedirect"),b(p(p(p({},M),B),D),{game:["type"]}),{game:{id:Number(t)}},f=>{var $,S;i(!1);const o=z(f.data);if(($=o==null?void 0:o.games)!=null&&$.length){const c=o.sports[0].type===0&&n.PAGE_URLS.esport,w=o.games[0].type===1,u=H.includes(Number(o.sports[0].id)),g=c?n.PAGE_URLS.esport:w?n.PAGE_URLS.live:u?n.PAGE_URLS.racing:n.PAGE_URLS.prematch,E=!c||!A(),P=`/${`${n.SPORTSBOOK_MOUNT_PATH}/`}${u?`${J.UPCOMING}/${Object.keys(L).find(y=>L[y]===o.sports[0].id)}`:o.sports[0].alias}/${E?u?"":`${o.regions[0].alias}/`:""}${E?`${o.competitions[0].id}/`:""}${t}${c?`?type=${w?"live":"prematch"}`:""}`,h=`${g}${P}`.replace(/([^:]\/)\/+/g,"$1");if(h===window.location.href||h===window.location.pathname+window.location.search)r(T(!0));else if(Q(g))V(h,!1,!0);else{const y=g.split(`${window.location.origin}`)[1]||"";R&&Object.keys(R).length&&(r(ts({option:"All",date:!1,count:void 0,name:a("sportsbook.allEvents")})),A()||(r(is(null,!0)),r(as(null)))),d!=null&&d.includes(((S=o.sports[0])==null?void 0:S.id)||null)||r(os(null)),v.push(y+P),r(T(!0))}}else{const c=a("account.gameIsNotAvailable");X(c)}},!1))};return s?l.jsxs(cs,{onClick:x,title:typeof s=="string"?s:"",children:[l.jsx("span",{"data-testid":"betslip-game-teams",children:typeof s=="string"?s:l.jsx(l.Fragment,{children:s.map(f=>f)})}),e&&l.jsx(Z,{size:K._16,className:"gameNameRedirection__loading"})]}):null};export{As as G,bs as g};
