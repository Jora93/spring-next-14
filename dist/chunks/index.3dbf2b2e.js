(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".favoriteTeam-skeleton{gap:8px;width:100%;height:48px;display:flex;padding:0 12px;align-items:center;background-color:var(--v3-black-0);margin-bottom:4px}.favoriteTeam-skeleton__wide{padding:8px}.favoriteTeam-skeleton__element{width:100%!important;height:100%!important}.favoriteTeam-skeleton__element__cube{width:24px!important;height:24px!important;min-width:24px!important;border-radius:50%!important}.favoriteTeam-skeleton span{font-weight:600}.imageOverlay{position:absolute;width:100%;height:100%;background:var(--v3-black);opacity:.5;top:0;left:0}.overlayContent{position:relative;z-index:2}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var f=Object.defineProperty;var d=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,i,a)=>i in e?f(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,l=(e,i)=>{for(var a in i||(i={}))b.call(i,a)&&p(e,a,i[a]);if(d)for(var a of d(i))y.call(i,a)&&p(e,a,i[a]);return e};import{j as t,i as o}from"./index.9a33d21b.js";import{createContext as j,useContext as w,useCallback as k,memo as T}from"react";import{S as n,R as m,C as $}from"./app-data.3313f084.js";import{c as C}from"./create-fake-array.68114bc4.js";import{s as r}from"./styled-components.browser.esm.04179a03.js";import{R as z,C as S}from"./index.f4c7d5fb.js";import"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import{h as _,y as I}from"./sport-data.58080bc0.js";import{u as N}from"./useDispatch.151d3a82.js";import{c as x}from"./index.fbd937ed.js";import{u as B}from"./useTranslation.70287e96.js";import{C as R}from"./index.9fa2e41e.js";const g=j(void 0),ie=e=>t.jsx(g.Provider,{value:e.sportName,children:e.children});function ae(){return w(g)}const re=r.div`
  display: flex;
  line-height: 1;
  align-items: center;
  padding-bottom: 8px;

  &:first-child:last-child {
    padding-bottom: 0;
  }
`,F=r.div`
  color: var(--v3-${e=>e.whiteText?"white":"text-color"});
  ${e=>e.bolt&&"font-weight: 600;"}
  ${e=>e.$justify&&"justify-content: space-between;"}
  ${e=>e.selectedGames?`
      justify-content: flex-end;
    `:`
      flex: 1;
    `}
  
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
`,H=r.div`
  ${e=>e.selectedGames?`
      padding: 0;
      margin: 0 12px;
      height: 44px;`:` 
      padding: 0 8px;
      margin: 0;
      height: ${e.calendar?"36":"32"}px;
    `}

  display: flex;
  align-items: center;
  border-bottom: 1px solid
    ${e=>e.whiteText?"var(--v3-black-15-fixed)":"var(--v3-black-4)"};

  .calendar-left {
    display: flex;
    align-items: center;

    &-icon {
      margin-right: 7px;
    }
  }

  .calendar-right {
    display: flex;
    gap: 8px;
    align-items: center;
    color: var(--v3-black-45);
    margin-left: 8px;

    &-time {
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.1px;
      color: var(--v3-text-color);
    }
  }
`,h=r.div`
  margin-bottom: ${e=>e.calendar?"4":e.isBoostedOdd?"0":"2"}px;

  ${e=>e.selectedGames?`padding: 8px 12px 12px 12px;
    `:` padding: 8px;
    `}
`,ne=r.div`
  position: relative;
  ${e=>e.calendar?`border-radius: 6px;
    box-shadow: var(--v3-shadow-strong);
  `:""}
  cursor: pointer;
  background-color: var(--v3-black-0);
  ${e=>e.selectedGames&&e.bgImg?`background-image: url(${e.bgImg});
     background-position: center;
     background-repeat: no-repeat;
     background-size: cover;
  `:""}
  &:last-child {
    ${h} {
      margin-bottom: unset;
    }
  }
  ${e=>!o()&&`    
    ${e.active?`
        border-left: 4px solid var(--v3-primary-6);        
      `:""}
  `}
`,M=r.div`
  color: var(--v3-primary-4);
  margin-left: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
`,W=3,oe=({hideOdds:e,selectedGames:i,isBoostedOdd:a})=>t.jsxs("div",{style:{background:"var(--v3-black-0)"},children:[t.jsxs(H,{children:[t.jsx(F,{children:t.jsx(n,{title:{style:{width:100,margin:0,height:10}},paragraph:!1,active:!0})}),t.jsx(M,{children:t.jsx(n,{title:{style:{width:20,margin:0,height:10}},paragraph:!1,active:!0})})]}),t.jsxs(h,{isBoostedOdd:a,children:[t.jsx(n,{avatar:l({shape:"circle",size:i?"default":"small",style:{width:20,height:20,marginTop:2}},i&&{style:{marginTop:o()?"0px":"-2px"}}),title:{style:{marginTop:4,marginBottom:4}},paragraph:!1,active:!0}),e?null:t.jsx(n,{avatar:l({shape:"circle",size:i?"default":"small",style:{width:20,height:20,marginTop:2}},i&&{style:{marginTop:"4px"}}),title:{style:{marginTop:4,marginBottom:4}},paragraph:!1,active:!0}),e?null:t.jsx(z,{gutterV:m._4,gutterH:m._4,children:C(W).map(s=>t.jsx(S,{xs:$.SIZE_8,children:t.jsx(n,{title:{style:{marginTop:8,marginBottom:0,height:32,width:"100%"}},paragraph:!1,active:!0})},s))})]})]}),se=()=>{const e=N();return k((i,a="game",s=0,v=!1,u)=>{const c=()=>{switch(i&&i.scrollIntoView(u),window.scrollY+window.innerHeight<document.body.scrollHeight&&window.scrollBy(0,-s),a){case"game":e(I(void 0));break;case"competition":e(_(void 0));break}};v?c():setTimeout(c)},[])};const le=T(()=>{const{t:e}=B();return t.jsxs("div",{className:x(["favoriteTeam-skeleton",{"favoriteTeam-skeleton__wide":o()}]),children:[t.jsx(n.Button,{active:!0,className:x(["favoriteTeam-skeleton__element",{"favoriteTeam-skeleton__element__cube":!o()}])}),!o()&&t.jsx("span",{children:e("sportsbook.myFavoriteTeam")})]})}),G=r.div`
  color: var(--v3-text-color);
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding-left: 4px;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  height: 28px;
  direction: ltr;
  ${e=>e.size==="large"&&`
        height: 44px;
        min-width: 44px;
    `}
`,ce=({children:e,size:i,onClick:a})=>t.jsx(G,{className:"markets__count",size:i||"default",onClick:a,children:e});const de=({condition:e,children:i})=>t.jsxs(t.Fragment,{children:[e&&t.jsx("div",{className:"imageOverlay"}),t.jsx(R,{condition:!!e,wrapper:a=>t.jsx("div",{className:"overlayContent",children:a}),children:i})]}),P=r.span`
  background-color: var(--v3-black-6);
  color: var(--v3-text-color);
  justify-content: center;
  display: inline-flex;
  align-items: center;
  font-size: 12px;
  ${e=>{switch(e.size){case"md":return`
        height: 24px;
        padding: 0 8px;
        min-width: 24px;
        line-height: 24px;
        border-radius: 4px;
      `;case"sm":default:return`
        height: 16px;
        padding: 2px 6px;
        min-width: 24px;
        min-height: 20px;
        line-height: 16px;
        border-radius: 4px;
      `}}}
`,D=r.span`
  margin-right: 4px;
`,pe=e=>t.jsx(P,{size:e.size,children:e.icon?t.jsxs(t.Fragment,{children:[t.jsx(D,{children:e.icon}),t.jsx("span",{children:e.children})]}):e.children});export{ne as C,le as F,H,de as I,oe as M,pe as P,ie as S,F as T,h as W,ae as a,ce as b,re as c,se as u};
