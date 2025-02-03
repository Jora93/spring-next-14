import{j as o,S as y,i as v}from"./index.9a33d21b.js";import{useRef as k,useEffect as w}from"react";import{d as B}from"./dom-to-image.c04af2e7.js";import{s as n}from"./styled-components.browser.esm.04179a03.js";import{c as _}from"./usePredefinedStakes.892527de.js";import{c as g}from"./wrapper-row-z-index.6fe5ad22.js";import{G as S,E as z}from"./app-data.3313f084.js";import{B as I}from"./index.065702c3.js";import{M as C,a as E}from"./index.56325e35.js";import{B as T}from"./index.7d5f88f7.js";import"./index.9e499441.js";import{u as R}from"./useTranslation.70287e96.js";import{u as M}from"./index.17630e7e.js";import{g as G}from"./odds.3bca0cb7.js";import"react-dom";import"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./swarm-command-names.afa48e3f.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./user-data.358c1cdc.js";import"./useDispatch.151d3a82.js";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.3536b24d.js";import"./lazy.73833dcd.js";import"./index.184af16c.js";import"./usePopupScrollDisable.d1a6ece6.js";import"./useSearchParams.353231ec.js";import"./v4.751847df.js";import"./context.f61a2be2.js";const l=n.div`
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid var(--v3-black-2);
  }

  & > strong {
    text-transform: capitalize;
  }
`,O=n.div`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: var(--v3-primary-6);
  color: var(--v3-color-on-primary);
  padding: 3px 12px;
  font-size: 14px;
`,L=n.div`
  background: var(--v3-black-0);
  border-radius: 6px;
  margin-bottom: 8px;
  color: var(--v3-text-color);
  box-shadow: 0 3px 4px 0 rgb(98 98 98 / 8%);
`,D=n.span`
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 0.42px;
  line-height: 16px;
  background-color: var(--v3-primary-6);
  border-radius: 4px;
  padding: 2px 8px;
  margin: 0 9px;
  font-size: 14px !important;
  color: var(--v3-color-on-primary) !important;
`,F=n.div`
  background: var(--v3-black-0);
  padding-bottom: 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  box-shadow: 0 3px 4px 0 #62626214;

  & > div {
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 5px;
    display: flex;
    align-items: center;
    color: var(--v3-text-color);

    span {
      font-size: 12px;
    }
  }
`,jo=({visible:f,onCancel:b,value:a,data:i,displayValue:h})=>{var c,d,m,x;const{t:e}=R(),t=k(null),u=M(G),j=()=>{const r=document.getElementById("booking-download-container");r&&B.toJpeg(r).then(s=>{const p=document.createElement("a");p.download=`${a}.jpeg`,p.href=s,p.click()})};return w(()=>{t.current&&g(t.current,2)}),o.jsxs(C,{visible:f,centered:!0,onCancel:()=>{g(t.current,0,!1,".row-container",!0),b()},image:!1,className:"booking-ticket-modal",closeIconStyle:{right:"8px",top:"8px"},children:[o.jsxs("div",{id:"booking-download-container",style:{background:"var(--v3-black-2)",padding:"0 0 8px"},ref:t,children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",flexDirection:"column",background:"var(--v3-black-0)",padding:"8px",marginBottom:"10px",marginTop:"10px",borderRadius:"6px",boxShadow:"0 3px 4px 0 #62626214"},children:[o.jsx("img",{src:y.LOGO_URL}),o.jsx(I,{value:a,displayValue:h})]}),o.jsxs(L,{children:[o.jsxs(l,{children:[o.jsx("span",{children:e("account.betType")}),o.jsx("strong",{children:(c=i==null?void 0:i.params)==null?void 0:c.bet_type})]}),o.jsxs(l,{children:[o.jsx("span",{children:e("account.oddType")}),o.jsx("strong",{children:(d=i==null?void 0:i.params)==null?void 0:d.odd_type})]}),o.jsxs(l,{children:[o.jsx("span",{children:e("account.bookingId")}),o.jsx("strong",{children:i==null?void 0:i.booking_id})]})]}),o.jsxs("div",{children:[o.jsx(O,{children:e("account.selections")}),(x=(m=i==null?void 0:i.params)==null?void 0:m.events)==null?void 0:x.map((r,s)=>o.jsxs(F,{children:[o.jsxs("div",{style:{paddingBottom:"4px",borderBottom:"1px solid var(--v3-black-2)"},children:[o.jsx(S,{size:z._24,name:r==null?void 0:r.sport_alias,lib:"sports"}),o.jsx("span",{style:{fontSize:"12px",margin:"0 4px"},children:r.competition_name})]}),o.jsxs("div",{style:{justifyContent:"space-between",maxWidth:"84vw",gap:"10px",overflow:"hidden"},children:[o.jsx("span",{style:{display:"block",flex:1,overflow:"hidden",textOverflow:"ellipsis"},children:r.game_name}),o.jsx("span",{children:r.gameStartDate})]}),o.jsxs("div",{style:{justifyContent:"space-between"},children:[o.jsxs("span",{style:{display:"flex",alignItems:"center"},children:[o.jsx("strong",{children:r.market_name}),o.jsx("span",{style:{margin:"0 4px"},children:"|"}),o.jsx("span",{children:r.event_name}),o.jsx(D,{dir:"ltr",children:_(`${r.coeficient}`,u)})]}),o.jsx("span",{children:r.gameStartTime})]})]},s))]})]}),o.jsx(E,{children:o.jsx(T,{style:{marginLeft:v()?"7px":"8px"},size:"large",fullwidth:!0,type:"primary",disabled:!1,loading:!1,onClick:()=>j(),className:"ticketAction__btn",children:e("betslip.download")})})]})};export{jo as BookingTicketModal};
