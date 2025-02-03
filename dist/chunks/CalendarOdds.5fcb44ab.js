var Y=Object.defineProperty,Z=Object.defineProperties;var ii=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var oi=Object.prototype.hasOwnProperty,ti=Object.prototype.propertyIsEnumerable;var C=(i,t,e)=>t in i?Y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,g=(i,t)=>{for(var e in t||(t={}))oi.call(t,e)&&C(i,e,t[e]);if(A)for(var e of A(t))ti.call(t,e)&&C(i,e,t[e]);return i},w=(i,t)=>Z(i,ii(t));import{useMemo as k,useRef as ai,memo as G,useId as ei}from"react";import{i as m,j as n}from"./index.053dea56.js";import{H as di,O as si}from"./array-sort-by.690dd174.js";import{q as ri,x as ni}from"./sport-data.b40f7b49.js";import{u as x}from"./index.ffa75b49.js";import{c as q}from"./index.fbd937ed.js";import"./backend-status-codes.80bfe624.js";import{P as ci}from"./index.d930ff85.js";import{a as li,c as hi}from"./usePredefinedStakes.58f7290f.js";import{h as fi,G as M,E as H}from"./app-data.da3833f4.js";import{ab as ui,a3 as mi}from"./index.c0392060.js";import{a as xi,g as pi,E as z,C as bi,O as gi}from"./useOddChange.42d6d46a.js";import{s as O}from"./styled-components.browser.esm.22f548e7.js";import{u as Ei}from"./useEventbus.f35d817d.js";import"./i18next.083d61f0.js";import{d as wi,a as yi,h as ki,f as ji}from"./index.59a19261.js";import{u as _i}from"./useDispatch.cd750ed9.js";import{E as Ni}from"./EmptyOddGroup.d87d06ac.js";import{g as Oi}from"./odds.334494eb.js";const Xi=(i,t=[],e=[])=>{const f=x(ri),u=k(()=>f==="expanded",[f]),p=ai(Number.MAX_SAFE_INTEGER),h=k(()=>{let c=[];if(Array.isArray(t)&&u){if(i!=="Soccer"){const o=t.find(a=>a.type==="P1P2"),d=t.filter(a=>di.includes(a.type)),r=t.filter(a=>si.includes(a.type));if(o&&Object.keys(o).length&&c.push(o),d&&Object.keys(d).length){let a={},l=Number.MAX_SAFE_INTEGER;d.forEach(s=>{s.main_order?s.main_order<l&&(l=s.main_order,a=s):a=d[0]}),c.push(a)}if(r&&Object.keys(r).length){let a=r[0],l=Number.MAX_SAFE_INTEGER;r.forEach(s=>{s.main_order&&(s.main_order===l?s.order<a.order&&(a=s,p.current=s.order):s.main_order<l&&(l=s.main_order,a=s))}),c.push(a)}}else{const o=t.find(a=>a.type==="P1XP2");o&&Object.keys(o).length&&c.push(o);const d=t.find(a=>a.type==="BothTeamsToScore");d&&Object.keys(d).length&&c.push(d);const r=t.filter(a=>a.type==="OverUnder");if(r&&Object.keys(r).length){let a={},l=Number.MAX_SAFE_INTEGER;r.forEach(s=>{s.main_order&&s.main_order<l&&(l=s.main_order,a=s)}),c.push(a)}}c=c.map(o=>{const d={};return e==null||e.forEach(r=>{var a,l;(l=(a=o==null?void 0:o.eventIds)==null?void 0:a.includes)!=null&&l.call(a,r==null?void 0:r.id)&&(d[r==null?void 0:r.id]=r)}),w(g({},o),{event:d})})}return c},[t]);return{filteredEventsList:k(()=>{const c=[];return e&&u&&e.forEach(o=>{h.forEach(d=>{var r,a;(r=d==null?void 0:d.eventIds)!=null&&r.includes(o==null?void 0:o.id)&&c.push(w(g({},o),{market:d,marketId:d.id,marketName:d.name,marketType:d.type,market_name:d.name,type:o.type,name:o==null?void 0:o.name,order:o==null?void 0:o.order,value:`${o==null?void 0:o.id}`,coeficient:o==null?void 0:o.price,base:(a=o==null?void 0:o.base)!=null?a:!1,type1:o!=null&&o.type_1?o==null?void 0:o.type_1:!1,event:{[o==null?void 0:o.id]:o}}))})}),c},[e]),filteredMarketsList:h}},V=100,N=O.span`
  color: var(--v3-${({whiteText:i})=>i?"white":"text-color"});
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  padding-right: 2px;
  word-break: break-word;
  direction: ltr;
  ${({style:i})=>i&&`
     ${i}
    `}
  ${({fullName:i})=>!i&&`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;`}
`,Q=O.span`
  color: var(
    --v3-${({whiteText:i,oddTextColor:t})=>t||(i?"white":"text-color")}
  );
  position: relative;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  white-space: nowrap;
  direction: ltr;
  align-items: center;
`,$i=O.button`
  font-size: 12px;
  min-height: 32px;
  padding: 7px 8px;
  border-radius: 6px;
  display: flex;
  box-sizing: border-box;
  flex: 1;
  width: auto !important;
  margin: 0 2px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({handicap:i})=>i?"space-between":"center"};
  cursor: pointer;
  overflow: hidden;
  cursor: ${({disabled:i})=>i?"default":"pointer"};

  &:focus-within {
    box-shadow: none;
  }
  &:not(:first-child):before {
    display: none;
  }
  ${({$colCount:i})=>i&&`
    max-width: ${V/i}%;
    min-width: ${Math.floor(V/i)-2}%;
    &:last-child:not(:nth-child(${i}n)) {
      max-width: 100%;
    }
  `}
  ${({checked:i,whiteText:t,disabled:e})=>!m()&&!i&&!t&&!e&&`
    &:hover{
      background-color: var(--v3-black-0);
      border: 1px solid var(--v3-primary-5) !important;
      box-shadow: 0px 2px 4px -1px rgba(82, 91, 255, 0.08);
    }
  `}
  background-color: transparent;
  border: 1px solid
    ${({whiteText:i})=>i?"var(--v3-black-15-fixed)":"var(--v3-black-15)"};
  ${({whiteText:i})=>i&&` 
      &:hover{
        border: 1px solid var(--v3-primary-5);
        box-shadow: 0px 2px 4px -1px rgba(82, 91, 255, 0.08);
      }
    `}
  ${({checked:i})=>!!i&&` 
      background-color: var(--v3-primary-6) !important;
      border: 1px solid var(--v3-primary-6) !important;
      ${Q}, 
      ${N} {
        color: var(--v3-color-on-primary) !important;
      }
    `}
  ${({size:i})=>i==="large"&&`
      height: 44px;
    `}
  ${({style:i})=>i&&`
     ${i}
    `}
`,F=G(({parent:i,value:t,coeficient:e,oddFormat:f,name:u,base:p,marketType:h,handicap:b,fullName:c,gameId:o,noBoosted:d,size:r,style:a,isExpanded:l,isBlocked:s})=>{var S,T,R,v;const y=ei(),D=_i(),L=x(wi),j=x(ni),_=li(e),U=x(fi),$=x(yi),X=x(ki),W=x(ji),{buttonRef:J,getButtonPosition:B}=xi(),I=()=>{i.value.includes(t)?i.onChange(t):i.onChange(t,e)},K=E=>{if(E.stopPropagation(),!s&&!(isNaN(+e)||+e==1/0)){if($&&L&&D(ui(y)),$&&!X&&U){mi({key:z.Validate,payload:y});return}I()}},P=k(()=>pi(_,e),[e,_]);return Ei({[z.Verified]:({payload:E})=>{E===y&&I()}},[i.onChange]),n.jsx(ci,{content:n.jsx(bi,g({},i.popover||{})),placement:B(),trigger:"click",visible:!!((S=i==null?void 0:i.popover)!=null&&S.id&&`${(T=i==null?void 0:i.popover)==null?void 0:T.id}`==`${t}`),onVisibleChange:E=>!E&&i.hidePopover(),overlayClassName:q(["quick-bet-confirmation-popover",{"quick-bet-confirmation-popover-right":m()&&B()==="topRight","quick-bet-confirmation-popover-hide":(R=i.popover)==null?void 0:R.validateRecaptcha}]),destroyTooltipOnHide:!0,children:n.jsxs($i,{size:r,onClick:K,handicap:!!b||m()&&!!u||i.showHandicaps,checked:i.value.includes(t)||y===W,style:a,disabled:!!s,$colCount:i.marketColCount,whiteText:i==null?void 0:i.whiteText,ref:J,className:`${l?"custom-col custom-col-text-align-center custom-col-3":""}
        ${l&&!m()?h&&h.includes("OverUnder")||h&&h.includes("Total")||h&&h.includes("Handicap")?"between-handicap":"center-handicap":""}
        ${m()&&l?"between-handicap":""}
        `,children:[b&&n.jsx(N,{className:"calendar__handicap",fullName:c,children:b}),(m()||i.showHandicaps)&&n.jsxs(N,{className:"calendar__handicap",fullName:c,whiteText:i==null?void 0:i.whiteText,children:[m()&&u,typeof p=="number"&&` (${p})`]}),n.jsxs(Q,{whiteText:i.whiteText,children:[((v=j==null?void 0:j[o])==null?void 0:v[t])&&!d&&n.jsx(M,{size:H._16,lib:"sports",name:"boostedodds",style:{marginRight:4},className:"text-color"}),s?n.jsx(M,{lib:"generic",name:"lock",theme:"default",size:H._11,className:"isBlocked-odd"}):hi(e,f),_&&n.jsx(gi,{indicatorValue:P},P)]})]})})}),Wi=G(i=>{const t=x(Oi),e=i.size||"default";return m()&&i.isExpanded?n.jsx("div",{children:i.expandedData&&i.expandedData.map((f,u)=>{var p,h;return((p=f.events)==null?void 0:p.length)>0&&n.jsxs("div",{className:"odd-list-content",children:[n.jsx("h5",{children:f.title}),n.jsx("div",{className:"odd-list-items ",children:(h=f.events)==null?void 0:h.map((b,c)=>n.jsx(F,w(g({noBoosted:i.noBoosted},b),{size:e,oddFormat:t,parent:i,gameId:i.gameId,fullName:i.fullName,isExpanded:i.isExpanded,isBlocked:i.isBlocked}),c))})]},u)})}):i.options.length?n.jsx("div",{className:q(["odd-list-content",{"normal-odd":!(i!=null&&i.isExpanded),"normal-oddExpanded":i==null?void 0:i.isExpanded}]),children:i.options.map((f,u)=>n.jsx(F,w(g({noBoosted:i.noBoosted},f),{size:e,oddFormat:t,parent:i,gameId:i.gameId,fullName:i.fullName,isExpanded:i.isExpanded,isBlocked:i.isBlocked}),u))}):n.jsx("div",{className:"empty-odds",children:n.jsx(Ni,{size:e,isExpanded:i.isExpanded,sportName:i.sportName})})});export{Wi as O,Xi as u};
