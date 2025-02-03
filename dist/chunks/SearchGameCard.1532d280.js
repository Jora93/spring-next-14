import{j as i,S as I}from"./index.9a33d21b.js";import{useMemo as N}from"react";import{c as u}from"./index.fbd937ed.js";import{d as v}from"./backend-status-codes.4c1943df.js";import{G as w,E as y}from"./app-data.3313f084.js";import{b8 as j}from"./index.2e7649fa.js";import{d as T}from"./usePredefinedStakes.892527de.js";import{a as g}from"./game-current-state.dbd76719.js";import{h as G}from"./hide-private-competitions.bb3e889f.js";import{g as k}from"./user-data.358c1cdc.js";import{u as A}from"./index.17630e7e.js";import"react-dom";import"./i18next.083d61f0.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./swarm-command-names.afa48e3f.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./index.9e499441.js";import"./useDispatch.151d3a82.js";import"./sport-list.d0c83c34.js";import"./not-real-sports.64fc4139.js";import"./private-competitions.91107fbb.js";const it=({gameObj:n,racingPage:p,searchValue:e,selectedGame:c,selectedSport:r,handleRedirect:C})=>{var f,x,l,h;const d=A(k),t=N(()=>d?n:G(n,n.competitionId),[n,d]),_=(o,m)=>m?i.jsx("span",{className:"highlighted-text",children:o==null?void 0:o.split(m).reduce((s,a,L)=>L?s.concat(i.jsx("b",{children:m},m+a),a):[a],[])}):o;return i.jsxs("div",{className:u(["gl-wrapper--gameList--gameItem",{"gl-wrapper--gameList--gameItem--selected":t.id===c}]),onClick:()=>{var o,m;C({gamesStatus:p||(o=t.info)!=null&&o.horse_xml?"racing":t.type===1?"live":"prematch",region:t==null?void 0:t.region_alias,competitionId:t==null?void 0:t.competitionId,competitionName:t==null?void 0:t.competitionName,gameId:t.id,eSport:r.type===0,sportTypeAlias:p||(m=t.info)!=null&&m.horse_xml?Object.keys(j).find(s=>j[s]===r.id)||String(r.id):r.alias,sportType:r.name,gameDate:t==null?void 0:t.start_ts,name:`${t==null?void 0:t.team1_name}${(t==null?void 0:t.team2_name)&&" vs ".concat(t==null?void 0:t.team2_name)}`,team1_name:t==null?void 0:t.team1_name,team2_name:t==null?void 0:t.team2_name})},children:[t.id===c?i.jsx("span",{className:"selectedIconWrapper",children:i.jsx(w,{lib:"generic",name:"checkCircle",theme:"default",size:y._24})}):null,i.jsxs("div",{className:"gl-wrapper--gameTitle",children:[_((f=t==null?void 0:t.team1_name)==null?void 0:f.toLowerCase(),e==null?void 0:e.toLowerCase()),(t==null?void 0:t.team2_name)&&" vs ",_((x=t==null?void 0:t.team2_name)==null?void 0:x.toLowerCase(),e==null?void 0:e.toLowerCase())]}),i.jsxs("div",{className:"searchGame__container",children:[t.type===1?i.jsxs("div",{className:"gl-wrapper--gameStatus",children:[i.jsx("div",{className:"gl-wrapper--indicator",children:"Live"}),i.jsx("div",{children:g({current_game_state:(l=t.info)==null?void 0:l.current_game_state,current_game_time:(h=t.info)==null?void 0:h.current_game_time},r==null?void 0:r.alias)})]}):v.unix(t.start_ts).format(T({date:I.DT.shortDate,time:I.DT.time,includeWeekday:!0,dateTimeSeparator:" | "})),t.text_info?i.jsx("div",{className:"searchGame__info",children:t.text_info}):null]})]})};export{it as SearchGameCard};
