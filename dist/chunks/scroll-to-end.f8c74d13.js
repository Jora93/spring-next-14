import{j as s,i as j,S as u}from"./index.9a33d21b.js";import{G as M,E as H,c as N}from"./app-data.3313f084.js";import{l as R,m as L,n as b,b as z}from"./game-current-state.dbd76719.js";import{A as v,C as O}from"./sport-list.d0c83c34.js";import{M as W}from"./index.856ed0f4.js";import{ad as y,ae as D,af as G,ag as P}from"./game-data.f991b97b.js";const B=({sportAlias:a,regionAlias:i,competitionName:E,game:t,regionName:x})=>{var n,c,d,l,e,_,S,f,h,p,C,T,A;const I=[v,O];let o=((n=t==null?void 0:t.info)==null?void 0:n.current_game_state)||"";I.includes(a)&&((d=(c=t==null?void 0:t.info)==null?void 0:c.additional_data)!=null&&d.matchState||((e=(l=t==null?void 0:t.info)==null?void 0:l.additional_data)==null?void 0:e.matchState)===R)&&(((S=(_=t==null?void 0:t.info)==null?void 0:_.additional_data)==null?void 0:S.matchState)===L&&((h=(f=t==null?void 0:t.info)==null?void 0:f.additional_data)!=null&&h.currentSet)?o=`set${(p=t==null?void 0:t.info)==null?void 0:p.additional_data.currentSet}`:o=b[(T=(C=t==null?void 0:t.info)==null?void 0:C.additional_data)==null?void 0:T.matchState]);const r=t&&!o.startsWith("set")?z(o||"",((A=t.info)==null?void 0:A.current_game_time)||"",!0,t.start_ts,a):"";return t?s.jsxs(y,{className:"card-header",children:[j()?s.jsxs("span",{className:"matchInfo__about",children:[t.text_info," ",t.tv_info]}):s.jsxs(D,{children:[s.jsx(M,{lib:"flags",name:i||"",size:H._20}),s.jsxs(G,{className:"location__comp-name",children:[x||i,` - ${E}`]})]}),s.jsxs("div",{className:"card-header-right",children:[!!r&&s.jsx(P,{children:r}),u.STATISTICS_SWITCHER&&!!t.is_stat_available&&s.jsx("div",{className:"matchInfoStatistics",children:s.jsx(W,{size:H._16,iconContainerSize:N.SMALL,matchId:t.id,showStatisticInPopover:t.type!==1})})]})]}):null},F=a=>{const i=document.querySelector(`.${a}`);i&&(u.IS_RTL?i.scrollLeft-=i.offsetWidth:i.scrollLeft+=i.offsetWidth)};export{B as M,F as s};
