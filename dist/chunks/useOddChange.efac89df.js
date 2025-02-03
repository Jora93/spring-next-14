(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(".odd__indicator{position:absolute;opacity:0;left:50%}@keyframes indicator-blink{50%{opacity:1}}.odd__indicator--up{top:-6px;color:var(--v3-cyan-base);transform:translate(-50%) rotate(180deg);animation:indicator-blink 1s 0s 5}.odd__indicator--up.odd__indicator-isEvent{top:-20px}.odd__indicator--down{bottom:-6px;color:var(--v3-red-base);transform:translate(-50%) rotate(0);animation:indicator-blink 1s 0s 5}.odd__indicator-withBase{left:initial}.odd__indicator-withBase.odd__indicator--down{bottom:initial;transform:translate(0);left:8px}.odd__indicator-withBase.odd__indicator--up{top:initial;transform:translate(0) rotate(180deg);right:8px}.odd__indicator--usa.odd__indicator--up{color:var(--v3-cyan-base);transform:translate(-50%) rotate(-45deg);animation:indicator-blink 2s 0s 5;top:0;right:-5px;left:unset}.odd__indicator--usa.odd__indicator--down{color:var(--v3-red-base);transform:translate(-50%) rotate(45deg);animation:indicator-blink 2s 0s 5;bottom:0;right:-5px;left:unset}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import{j as o,i as T,u as G,$ as K,S as Z,a0 as J}from"./index.9a33d21b.js";import{c as X}from"./index.fbd937ed.js";import{U as tt,D as et,s as ot}from"./usePredefinedStakes.892527de.js";import{G as U,h as it,E as nt}from"./app-data.3313f084.js";import{_ as st}from"./i18next.083d61f0.js";import{memo as rt,useState as Q,useCallback as B,useEffect as at,Suspense as ct,useRef as lt,useMemo as dt}from"react";import{l as ut}from"./lazy.73833dcd.js";import{s as m}from"./styled-components.browser.esm.04179a03.js";import{B as A}from"./index.7d5f88f7.js";import{C as pt}from"./index.9eebc582.js";import{ac as ft,ad as j,ab as w,ae as ht,af as mt,ag as gt}from"./index.2e7649fa.js";import{h as z,a as _t,d as xt,b as bt,i as Et,j as St,k as Bt}from"./index.9e499441.js";import{u as F}from"./useTranslation.70287e96.js";import{u as W}from"./useDispatch.151d3a82.js";import{u}from"./index.17630e7e.js";import{b as yt,L as wt,s as Ot}from"./swarm-command-names.afa48e3f.js";import{E as jt,s as I}from"./backend-status-codes.4c1943df.js";import{u as Pt}from"./useOpenLoginPopup.9bf6877c.js";import{u as kt}from"./useDoBet.55e9cf8f.js";import{g as Ct}from"./socket.c1bf8301.js";import{g as Tt}from"./user-data.358c1cdc.js";const de=(t,r)=>{const n=+(t||0);return t?+r>n?"up":+r<n?"down":"":""};var vt=(t=>(t.Validate="validateRecaptcha",t.Verified="recaptchaVerified",t))(vt||{});const ue=({indicatorValue:t,withBase:r,isEvent:n,isUsaLayout:l=!1})=>o.jsx(U,{lib:"generic",name:l?"arrowIndicator":"arrowDown",theme:"default",size:l?tt:et,position:"absolute",className:X(["odd__indicator",`odd__indicator--${t}`,{"odd__indicator--usa":l,"odd__indicator-withBase":r,"odd__indicator-isEvent":n}])}),Rt=m.div`
  width: ${T()?"264px":"328px"};
  padding: 4px 0;
`,Lt=m.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
`,Nt=m.div`
  width: 68px;
  min-width: 68px;
  height: 68px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--v3-black-4);
  & > div {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--v3-black-6);
    & path {
      fill: var(--v3-primary-6);
    }
  }
`,At=m.div`
  width: 100%;
  padding-left: 8px;
`,It=m.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: var(--v3-text-color);
  padding-bottom: 4px;
`,Vt=m.div`
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: var(--v3-text-color-secondary);
`,Dt=m.div`
  padding: 16px 0;
  border-top: 1px solid var(--v3-black-6);
`,Ut=m.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`,Qt=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,V=m.div`
  width: calc(50% - 4px);
`,{Recaptcha:zt}=ut(()=>st(()=>import("./index.08401935.js"),["chunks/index.08401935.js","chunks/index.9a33d21b.js","chunks/styled-components.browser.esm.04179a03.js","chunks/index.2e7649fa.js","chunks/backend-status-codes.4c1943df.js","chunks/i18next.083d61f0.js","chunks/swarm-command-names.afa48e3f.js","chunks/global-variables.eb46f49b.js","chunks/index.9fa2e41e.js","chunks/index.56325e35.js","chunks/app-data.3313f084.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/create-fake-array.68114bc4.js","chunks/index.17630e7e.js","chunks/index.184af16c.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/index.9e499441.js","chunks/user-data.358c1cdc.js","chunks/v4.751847df.js","chunks/useDispatch.151d3a82.js","chunks/useMounted.6d9c5610.js"])),pe=rt(({onCancel:t,onConfirm:r,validateRecaptcha:n,selectedEvents:l})=>{const a=W(),i=u(z),_=u(it),[k,p]=Q(!1),{t:g}=F(),f=B(c=>{c==null||c.stopPropagation(),_?p(!0):r==null||r()},[_]);return at(()=>{n&&p(!0)},[n,l]),o.jsxs(o.Fragment,{children:[!n&&o.jsxs(Rt,{children:[o.jsxs(Lt,{children:[o.jsx(Nt,{children:o.jsx("div",{children:o.jsx(U,{lib:"generic",name:"infoOutlined",theme:"default",size:nt._30})})}),o.jsxs(At,{children:[o.jsx(It,{children:g("betslip.howToBet")}),o.jsx(Vt,{children:g("betslip.howToBetMessage")})]})]}),o.jsx(Dt,{children:o.jsx(Ut,{onClick:c=>{c.stopPropagation(),a(ft())},children:o.jsx(pt,{checked:!i,children:g("betslip.dontShowMessage")})})}),o.jsxs(Qt,{children:[o.jsx(V,{children:o.jsx(A,{fullwidth:!0,type:"default",size:"large",onClick:t,children:g("account.cancel")})}),o.jsx(V,{children:o.jsx(A,{fullwidth:!0,type:"primary",size:"large",onClick:f,children:g("betslip.betNow")})})]})]}),_&&o.jsx(ct,{children:o.jsx(zt,{action:"do_bet",onSetRecaptchaToken:()=>{r==null||r(),p(!1)},shouldValidate:k})})]})}),Ft=280,D=4,P=32,fe=()=>{const t=lt(null);return{buttonRef:t,getButtonPosition:()=>{var n,l;if(t.current){const{offsetLeft:a}=t.current,{innerWidth:i}=window;return((l=(n=t.current)==null?void 0:n.getBoundingClientRect())==null?void 0:l.top)<Ft?a>(i-P)/2?"bottomRight":a>(i-P)/D?"bottom":"bottomLeft":a>(i-P)/2?"topRight":a>(i-P)/D?"top":"topLeft"}return"topLeft"}}},he=(t,r,n)=>{const[l,a]=Q(null),i=W(),_=u(Tt),k=G(),{t:p}=F(),g=u(_t),f=u(z),c=u(xt),b=u(bt),h=u(Ct),H=u(Et),M=u(St),v=u(Bt),Y=Pt(),{doBetHandler:q}=kt(),E=B(e=>{T()||document.querySelectorAll("[data-popover-parent]").forEach(d=>{d instanceof HTMLElement&&(e==="enable"?d.style.overflow="auto":d.style.overflow="hidden")})},[]),O=B(e=>{if(!_){Y();return}const S=T()?document.body:document.getElementById("betslip-wrapper");if(e&&c){const d=M.some(s=>s==e.id),x=H.some(s=>s==e.id);i(j("increase")),q({amount:Number(c),bets:[{event_id:Number(e.id),price:Number(e.price),booking_id:e.booking_id}],type:yt.SINGLE,mode:d?K:x||Z.SUPER_BET_DEFAULT_ON?J:Number(JSON.parse(wt.getItem(Ot("betslip","ACCEPT_BET"))).value)},s=>{const{result:y}=s;if(i(w("")),y!=="OK"&&y!==jt){I(p("betslip.wentWrong")),i(j("decrease"));return}i(j("decrease")),t([]),i(ht())},()=>{i(j("decrease")),t([]),i(w(""))},()=>{},S)}},[_,k,c,t,i,p]),R=B((e,S)=>{const d=x=>{x==null||x.stopPropagation(),O({id:e,price:S}),f&&(a(null),E("enable"))};f&&_?Number(c)&&(E("disable"),a({id:e,onCancel:s=>{s==null||s.stopPropagation(),i(w("")),t([]),a(null),E("enable")},onConfirm:d})):a({id:e,onCancel:()=>{i(w(""))},onConfirm:d,validateRecaptcha:!0,selectedEvents:n})},[f,c,O,_,E,p,n]),L=B(()=>{f&&(t([]),a(null),E("enable"),i(w("")))},[E,f]),N=B((e,S,d,x,s)=>{var y;if(g&&!(b!=null&&b.active)&&!c)t([]),I(p("betslip.noStake")),(y=document.getElementById("quick-bet-input-stake"))==null||y.focus();else{if(!n.includes(e)||d||x)if(g&&!(b!=null&&b.active))f?R(e,S):O({id:e,price:S});else{if(h!=null&&h.max_selections_in_multiple_bet&&v.length>=(h==null?void 0:h.max_selections_in_multiple_bet)){ot(p("betslip.eventsMaxCountMessage").replace("{%eventsMaxCount%}",`${h==null?void 0:h.max_selections_in_multiple_bet}`));return}r(e,d),s==null||s()}else i(mt(!1)),gt(e),s==null||s(),f&&(a(null),E("enable"));t(C=>C.includes(e)?C.filter($=>$!==e):[...C,e])}},[f,g,c,b,h,v,n,O,r,R,p]);return dt(()=>({oddChangeHandler:N,popover:l,hidePopover:L}),[N,l,L])};export{pe as C,vt as E,ue as O,fe as a,de as g,he as u};
