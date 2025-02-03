(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".gameDetails__advanced{align-items:center;display:flex;overflow:hidden;text-align:left}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{j as o,i as t,S as L,Z as O}from"./index.9a33d21b.js";import{d as v}from"./game-current-state.dbd76719.js";import{T as C,L as g,S as z,j as b}from"./Skeleton.e7ccd4f0.js";import{s as P}from"./styled-components.browser.esm.04179a03.js";import{T as i}from"./index.f24e8077.js";import{c as k}from"./index.fbd937ed.js";import{C as c}from"./app-data.3313f084.js";import{R as H,C as d}from"./index.f4c7d5fb.js";const Z=P.div`
  padding: 12px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
`;const U=({game:s})=>{var n,e;return o.jsxs(Z,{children:[o.jsxs("div",{className:"gameDetails__advanced",children:[o.jsx(i,{name:s.team1_name}),o.jsx("span",{children:(n=s.info)==null?void 0:n.score1})]}),s.show_type!=="OUTRIGHT"&&o.jsxs("div",{className:"gameDetails__advanced",children:[o.jsx(i,{name:s.team2_name}),o.jsx("span",{children:(e=s.info)==null?void 0:e.score2})]})]})},w=2,G=3,y=32,F=18,$=8,W=({game:s})=>{var r,l,_,f,h,m,p,x,T,j,I,S,E,u,R,A;const n=s.show_type==="OUTRIGHT",e=t()?"sm":"lg",a=(N,D)=>{const M=N===w||D===w;return N===G||D===G?y:M?F:$};return o.jsxs(H,{align:"center",className:k([t()?"simpleRowMob":"simpleRow",{"simpleRow--outhright":n}]),children:[o.jsx(d,{className:n?"team__info--outhright":"team__info",xs:n?t()?c.SIZE_24:c.SIZE_14:c.SIZE_12,children:o.jsxs(C,{className:(l=(r=s.info)==null?void 0:r.score1)!=null&&l.length?"team__info-pad-right":"",[L.IS_RTL?"paddingLeft":"paddingRight"]:a((f=(_=s.info)==null?void 0:_.score1)==null?void 0:f.length,(m=(h=s.info)==null?void 0:h.score2)==null?void 0:m.length),children:[o.jsx(g,{isFirstLogo:!0,className:"logo",children:o.jsx(i,{reverse:!t(),logo:!0,teamId:s.team1_id,name:s.team1_name,dontShowTitle:!0,size:t()?"lg":e})}),o.jsx(i,{name:s.team1_name,size:e,reverse:!t()})]})}),!n&&o.jsxs(d,{xs:c.SIZE_12,children:[o.jsxs(z,{className:"esport__score",children:[(p=s.info)==null?void 0:p.score1," : ",(x=s.info)==null?void 0:x.score2]}),o.jsxs(C,{className:((j=(T=s.info)==null?void 0:T.score2)==null?void 0:j.length)*O?"team__info-pad-left":"",[L.IS_RTL?"paddingRight":"paddingLeft"]:a((S=(I=s.info)==null?void 0:I.score1)==null?void 0:S.length,(u=(E=s.info)==null?void 0:E.score2)==null?void 0:u.length),children:[o.jsx(g,{className:"logo",children:o.jsx(i,{size:t()?"lg":e,logo:!0,teamId:s.team2_id,name:s.team2_name,dontShowTitle:!0})}),o.jsx(i,{name:s.team2_name,size:e})]})]}),s.text_info&&((R=s.info)!=null&&R.add_info)?o.jsx(d,{className:t()?"ESportText-infoMob":"ESportText-info",children:`${s.text_info||""} ${((A=s.info)==null?void 0:A.add_info)||""}`}):null]})},os=({game:s,isESport:n,isLive:e})=>{var r;const a=e&&!!((r=s.info)!=null&&r.additional_data)&&v.includes(s.sportId||-1);return n?a?o.jsx(b,{game:s,isLive:e}):o.jsx(W,{game:s}):o.jsx(U,{game:s})};export{os as G};
