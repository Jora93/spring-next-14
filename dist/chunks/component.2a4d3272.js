(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".checkInput,.checkInput:hover{border:1px solid var(--v3-black-15)!important}.checkbuttonwrapper{border-left:none}.checkbutton,.checkInput{height:auto!important;padding:10px 12px!important}.status-checker-modal{background-color:var(--v3-black-1);max-width:380px;border-radius:8px;padding:12px!important}.status-checker-modal.responsive{width:100vw!important;height:100vh!important;overflow-y:auto;z-index:2500;top:0;margin:0;border-radius:0}.status-checker-modal .v3-modal-content{background-color:transparent;box-shadow:none;width:100%}.status-checker-modal .info-box{background-color:var(--v3-black-0);margin-bottom:12px;border-radius:4px}.status-checker-modal .v3-modal-body{padding:0}.status-checker-modal .v3-modal-close-x{width:36px;height:36px;display:flex;justify-content:center;align-items:center}.status-checker-modal .v3-modal-close-x span{display:block}.status-checker-modal .v3-modal-close-x span svg{fill:var(--v3-black-45)}.status-checker-modal .modal-title{font-weight:600;font-size:16px;padding:12px;color:var(--v3-black-85);text-align:left;border-radius:4px;background-color:var(--v3-black-0)}.status-checker-modal .v3-modal-header{font-size:16px;line-height:24px;margin-bottom:12px;background-color:var(--v3-black-0);padding:8px 12px}@media only screen and (max-width: 600px){.event-content{max-height:300px}.status-checker-modal{max-height:100vh;margin-top:0;overflow:hidden}}.message-text{color:var(--v3-text-color)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{_ as I}from"./i18next.083d61f0.js";import{s as v}from"./backend-status-codes.4c1943df.js";import{I as C}from"./index.1514cd2f.js";import{B}from"./index.7d5f88f7.js";import{j as t}from"./index.9a33d21b.js";import{memo as N,useState as a,useEffect as _,Suspense as M}from"react";import{C as E}from"./main.f5ab03e3.js";import{l as T}from"./lazy.73833dcd.js";import{E as z}from"./usePredefinedStakes.892527de.js";import{s as o}from"./styled-components.browser.esm.04179a03.js";import{E as F}from"./index.9c369ab9.js";import{F as $}from"./style.9b4acf51.js";import{G as P}from"./app-data.3313f084.js";import{u as L}from"./useTranslation.70287e96.js";const O=o.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  flex: 1 1 160px;
`,R=o.div`
  padding: 6px 18px;
`,A=o.h6`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--v3-black-85);
  margin-bottom: 4px;
`,G=o.div`
  margin: 8px 0;
  padding-left: 8px;
  border-left: 1px solid var(--v3-black-6);
  flex: 1;
  width: 33%;
`,ae=o.span`
  width: 24px;
  height: 24px;
  background: var(--v3-black-4);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: var(--v3-black-45);
  }
`,V=o(F)`
  background-color: transparent;
`,le=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--v3-black-85);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 12px;

  border-bottom: 1px solid var(--v3-black-6);
  &.no-border {
    border-bottom: none;
  }
  span.title {
    font-style: normal;
  }
  span.value {
    font-weight: 600;
    align-items: center;
    display: flex;
    justify-content: space-between;
    gap: 6px;

    &.accepted {
      color: #0092ff;
    }
    &.returned {
      color: var(--v3-black-65);
    }

    &.won,
    &.cashout {
      color: var(--v3-success-color-light);
    }
    &.lost {
      color: var(--v3-red-3);
    }
  }
`,ie=o.div`
  box-shadow: 0 3px 6px -1px rgba(98, 98, 98, 0.08);
  border-radius: 4px;
  overflow: hidden;
  .title {
    background: var(--v3-primary-color);
    color: #fff;
    padding: 8px 12px;
    font-weight: 600;
    margin-bottom: 0;
  }
`,D=o.div`
  width: 100%;
  padding: 8px 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  margin-bottom: 12px;
  cursor: pointer;

  &.accepted {
    color: #0092ff;
    background-color: var(--v3-black-2);

    svg {
      path {
        fill: #0092ff;
      }
    }
  }

  &.returned {
    color: var(--v3-black-65);
    background-color: rgba(245, 245, 245, 1);

    svg {
      path {
        fill: var(--v3-black-65);
      }
    }
  }

  &.won,
  &.cashout {
    color: var(--v3-success-color-light);
    background-color: rgba(49, 205, 199, 0.12);

    svg {
      path {
        fill: var(--v3-success-color-light);
      }
    }
  }

  &.lost {
    color: var(--v3-red-3);
    background-color: rgba(255, 98, 98, 0.12);

    svg {
      path {
        fill: var(--v3-red-3);
      }
    }
  }
`,ce=o.div`
  max-height: 230px;
  overflow-y: auto;
`;const{BetStatusModal:H}=T(()=>I(()=>import("./BetStatusModal.26ee350e.js"),["chunks/BetStatusModal.26ee350e.js","chunks/index.9a33d21b.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/usePredefinedStakes.892527de.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/odds.3bca0cb7.js","chunks/socket.c1bf8301.js","chunks/batch.dcd71b53.js","chunks/user-data.358c1cdc.js","chunks/index.9e499441.js","chunks/useDispatch.151d3a82.js","chunks/index.2d2dceca.js","chunks/styled-components.browser.esm.04179a03.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.56325e35.js","chunks/index.184af16c.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/v4.751847df.js","chunks/index.1514cd2f.js","chunks/index.7d5f88f7.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/index.08cf9b6f.js","chunks/main.f5ab03e3.js","chunks/lazy.73833dcd.js","chunks/index.9c369ab9.js","chunks/style.9b4acf51.js"])),W=N(({betslipRef:f})=>{const[s,m]=a(""),[i,c]=a(!1),[u,y]=a(null),[g,p]=a(!1),[l,x]=a({type:"",text:""}),{t:r}=L(),k=n=>{m(n.target.value)};_(()=>{s||d()},[s]);const w=()=>{if(isNaN(+s)){v(r("betslip.wrongBookId"),f.current);return}c(!0),z(s,n=>{var h;c(!1);const{details:e}=n;if(e){y(e);let b="";if(e.TypeId===3&&e.SystemMinCount){const S=E.of(Array(e.SelectionList.length).fill(0),e.SystemMinCount).length;b=`${e.SystemMinCount}/${e.SelectionList.length} (${S} ${r("betslip.bets")})`}e.TypeName=`${e.TypeName} ${b}`,p(!0),x({type:(h=e==null?void 0:e.StateName)==null?void 0:h.toLowerCase(),text:e==null?void 0:e.StateName})}else d(),v(r("betslip.wrongBookId"),f.current)},()=>{d(),c(!1)})},d=()=>{x({type:"",text:""}),m("")},j=()=>{p(!1)};return t.jsxs(t.Fragment,{children:[t.jsx($,{children:t.jsxs(R,{children:[t.jsx(A,{children:r("betslip.stausNumber")}),t.jsxs(O,{children:[t.jsx(C,{className:"inputLine checkInput",bordered:!1,placeholder:r("betslip.statusPlaceholder"),value:s,type:"number",onChange:n=>k(n),style:{flex:2,flexGrow:1}}),t.jsx(G,{className:"checkbuttonwrapper",children:t.jsx(B,{style:{width:"100%"},disabled:!s.length||i,loading:i,onClick:w,type:!s.length||i?"default":"primary",className:"checkbutton",children:r("betslip.submit")})})]}),l.text&&t.jsxs(D,{className:`${l.type} fetch-message`,onClick:()=>p(!0),children:[t.jsx("span",{className:"message-text",children:l.text}),t.jsx(V,{className:l.type,icon:t.jsx(P,{lib:"generic",name:"circleInfo",theme:"default",size:16,color:"#FF6262"}),size:"md",margin:"right"})]})]})}),g&&u&&t.jsx(M,{children:t.jsx(H,{onModalClose:j,isModalVisible:g,betInfo:u})})]})}),pe=Object.freeze(Object.defineProperty({__proto__:null,BetslipStatusCheckerComponent:W},Symbol.toStringTag,{value:"Module"}));export{ae as B,ie as E,le as S,ce as a,pe as c};
