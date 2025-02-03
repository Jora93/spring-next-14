var C=Object.defineProperty,D=Object.defineProperties;var f=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(a,s,t)=>s in a?C(a,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[s]=t,j=(a,s)=>{for(var t in s||(s={}))F.call(s,t)&&h(a,t,s[t]);if(x)for(var t of x(s))k.call(s,t)&&h(a,t,s[t]);return a},u=(a,s)=>D(a,f(s));import{j as e,S as N,a1 as _}from"./index.9a33d21b.js";import{G as m,Z as A}from"./app-data.3313f084.js";import{d as b}from"./backend-status-codes.4c1943df.js";import{d as H,c as W}from"./usePredefinedStakes.892527de.js";import{B as M,a as z,b as v,c as P,d as S,e as R,f as $,h as L}from"./index.2d2dceca.js";import"./index.9e499441.js";import{B as G,E as O,a as Z,S as I}from"./component.2a4d3272.js";import{u as n}from"./useTranslation.70287e96.js";import{u as X}from"./index.17630e7e.js";import{g as q}from"./odds.3bca0cb7.js";import{M as J}from"./index.56325e35.js";import"react";import"react-dom";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./i18next.083d61f0.js";import"./index.2e7649fa.js";import"./swarm-command-names.afa48e3f.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./useDispatch.151d3a82.js";import"./styled-components.browser.esm.04179a03.js";import"./index.1514cd2f.js";import"./index.7d5f88f7.js";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./statusUtils.ab0a6b68.js";import"./SearchOutlined.0011f146.js";import"./index.9011aacc.js";import"./col.94909042.js";import"./index.08cf9b6f.js";import"./main.f5ab03e3.js";import"./lazy.73833dcd.js";import"./index.9c369ab9.js";import"./style.9b4acf51.js";import"./context.f61a2be2.js";import"./index.184af16c.js";import"./usePopupScrollDisable.d1a6ece6.js";import"./useSearchParams.353231ec.js";import"./v4.751847df.js";const K=({event:a})=>{const{StartTime:s,market_name:t,CompetitionName:i,event_name:r,SportAlias:o,isSuspended:B,Price:c,HomeTeamName:d,AwayTeamName:p,DisplayMarketName:g,DisplaySelectionName:T}=a,{t:E}=n(),w=X(q),y=c===_;return e.jsxs("div",{className:"betslipContainer",children:[e.jsxs(M,{className:"betslipEventInfoPopup",children:[e.jsxs(z,{className:"betslip__bet-head-text",children:[e.jsx(m,{lib:"sports",name:o,style:{marginRight:8},className:"text-color",size:24}),e.jsx("span",{className:"bet-item-name",children:i})]}),e.jsx(G,{className:"betslip__bet-history-icon",children:e.jsx(m,{lib:"generic",name:"time",theme:"default",size:14,color:"var(--v3-black-45)"})})]}),e.jsxs("div",{className:"betItemContent",children:[e.jsxs(v,{className:"bet__event",children:[e.jsx(P,{children:e.jsxs("span",{children:[d," ",d&&p&&"vs"," ",p]})}),s&&e.jsx(S,{children:b.unix(+new Date(s)).format(H({date:N.DT.shortDate}))})]}),e.jsxs(v,{className:"bet__event",children:[e.jsx(R,{children:t}),e.jsx(S,{children:b.unix(+new Date(s)).format(N.DT.time)})]}),e.jsxs("div",{className:r?"bet__container":"bet__container bet-winner__container",children:[e.jsx($,{className:"bet__win-name",children:e.jsxs("span",{style:{fontWeight:"bold"},children:[g," ",T]})}),e.jsx(L,{className:"bet__winner-coef",isSuspended:B,children:y?E("betslip.sp"):W(c,w)})]})]})]})},Q=({events:a})=>{var t;const{t:s}=n();return e.jsxs(O,{children:[e.jsx("h3",{className:"title",children:s("betslip.events")}),e.jsx(Z,{className:"event-content",children:(t=a==null?void 0:a.map)==null?void 0:t.call(a,(i,r)=>e.jsx(K,{event:i},r))})]})},l=({title:a,value:s,type:t,dataTestId:i,border:r=!0})=>e.jsxs(I,{className:r?"":"no-border",children:[e.jsx("span",{className:"title",children:a}),e.jsx("span",u(j({className:`value ${(t==null?void 0:t.toLowerCase())||""}`},i?{"data-testid":i}:{}),{children:s}))]}),$e=({onModalClose:a,isModalVisible:s,betInfo:t})=>{var o;const{t:i}=n(),r=t.Price===_;return e.jsx("div",{className:"custom-modal-wrapper",children:e.jsxs(J,{title:i("betslip.BetStatus"),maxWidth:350,width:350,zIndex:A,align:"left",renderInBody:!0,padding:20,centered:!0,closeIcon:e.jsx(m,{lib:"generic",name:"close",theme:"default",size:16,color:"var(--v3-text-color)"}),visible:s,onCancel:a,className:"bbModal status-checker-modal",maskClosable:!1,style:{borderRadius:"12px",padding:0,maxHeight:"90vh"},bodyStyle:{padding:0,textAlign:"left"},image:!1,children:[e.jsxs("div",{className:"info-box",children:[e.jsx(l,{dataTestId:"status",title:i("betslip.Status"),value:t.StateName,type:t.StateName}),e.jsx(l,{dataTestId:"bet-type",title:"Bet Type",value:t.TypeName}),e.jsx(l,{dataTestId:"date",title:i("betslip.Date"),border:!1,value:`${new Date(t==null?void 0:t.Created).toDateString()}`})]}),e.jsxs("div",{className:"info-box",children:[e.jsx(l,{dataTestId:"number-of-bets",title:i("betslip.NumberofBets"),value:`${((o=t.SelectionList)==null?void 0:o.length)||"-"}`}),e.jsx(l,{title:i("betslip.TotalStake"),dataTestId:"total-stake",value:e.jsxs(e.Fragment,{children:[t.FreeBetAmount?e.jsx(m,{lib:"generic",name:"FreeBet",theme:"colored",size:48,className:"FreeBet"}):null,t.Amount||t.FreeBetAmount]})}),e.jsx(l,{dataTestId:"total-wins",title:i("betslip.TotalWins"),value:r?i("betslip.notAvailableShort"):`${t==null?void 0:t.PossibleWin} ${t.CurrencyId}`,border:!1})]}),e.jsx(Q,{events:t.SelectionList})]})})};export{$e as BetStatusModal};
