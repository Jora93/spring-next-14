(function(){"use strict";try{if(typeof document!="undefined"){var t=document.createElement("style");t.appendChild(document.createTextNode(".comp__team-name{font-size:16px;margin:0 8px!important;font-weight:400}span.esport__team-name{width:32px!important;height:32px!important;flex-shrink:0;font-size:12px!important;line-height:12px!important;padding:4px;border-radius:50%;background:rgba(185,185,185,.15)}span.esport__team-name .teamLogoImage{width:20px!important;height:20px!important}")),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import{j as i}from"./index.053dea56.js";import{useState as h}from"react";import{c as p}from"./index.fbd937ed.js";import{s as t}from"./styled-components.browser.esm.22f548e7.js";import{T as f}from"./index.3dcc1bea.js";import{u as v}from"./useTranslation.70287e96.js";const a=t.span`
  color: var(--v3-text-color);
  ${e=>!e.hasImage&&"background: var(--v3-black-6);"}
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`,s=t.span`
  line-height: 16px;
  height: 20px;
  display: flex;
  align-items: center;
  color: var(--v3-${e=>e.whiteText?"white":"text-color"});
`,u=t.span`
  flex-direction: ${e=>e.reverse?"row-reverse":"row"};
  display: inline-flex;
  align-items: center;
  flex: 1;
  ${e=>{const n=e.reverse?"right":"left";switch(e.size){case"lg":return`
        ${a} {
          width: 36px;
          height: 36px;
          font-size: 10px;
          line-height: 10px;
        }
        ${s} {
          font-size: 16px;
          margin-${n}: 11px;
          font-weight: 400;
        }
      `;case"md":return`
        ${a} {
          width: 20px;
          min-width: 20px;
          height: 20px;
          font-size: 11px;
          line-height: 11px;
        }
        ${s} {
          font-size: 12px;
          margin-${n}: 8px;
          font-weight: 400;
        }
      `;case"sm":default:return`
        ${a} {
          width: 18px;
          height: 18px;  
          font-size: 11px;
          line-height: 11px;
        }
        ${s} {
          font-size: 12px;
          margin-${n}: 4px;
        }
      `}}};
`,b={D:"var(--v3-yellow-7)",W:"var(--v3-cyan-base)",L:"var(--v3-red-base)"},T=t.div`
  ${e=>!e.$loading&&`background: url(${e.bgImageSrc}) rgba(0, 0, 0, 0.5) no-repeat center center;`}
  background-blend-mode: multiply;
  background-size: cover;
  height: 140px;
  margin: 8px 8px;
  border-radius: 4px;
  color: var(--v3-black-0);
  padding: 12px;
`,I=t.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: var(--v3-black-15);
`,S=t.div`
  color: var(--v3-black-0);
  display: flex;
  justify-content: space-between;
  margin-top: ${e=>e.fullHeight?"2px":"12px"};
  align-items: center;
`,P=t.span`
  color: ${e=>b[e.resultKey]};
  background-color: var(--v3-black-100);
  border-radius: 2px;
  width: 16px;
  height: 16px;
  text-align: center;
  font-size: 11px;
  margin: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`,$=t.p`
  font-size: 11px;
  color: var(--v3-white);
  padding-left: 13px;
  margin-bottom: 5px;
`;const _=e=>{var r,c,l,m,x,d;const[n,g]=h(!1),{t:o}=v();return i.jsxs(u,{className:"teamLogoWrapper",reverse:e.reverse||!1,size:e.size||"sm",children:[e.logo&&i.jsx(a,{hasImage:n,className:p(["logo-simple",{[e.className||""]:e.className}]),children:i.jsx(f,{teamId:e.teamId,size:e.dontShowTitle?"md":e.size||"sm",setHasImage:g,competition:e.competition,children:i.jsx("span",{className:"teamNameAsIcon",children:e.name?String(e.name).substr(0,2).toUpperCase():"-"})})}),i.jsxs("div",{className:"comp__teamName__wrapper",children:[!e.dontShowTitle&&i.jsx(s,{className:"comp__team-name",whiteText:e.whiteText,style:e.nameStyle,children:e.name}),(((r=e.entry)==null?void 0:r.Position)||((c=e.entry)==null?void 0:c.Points))&&i.jsx($,{children:`${((l=e.entry)==null?void 0:l.Position)&&`${o("sportsbook.position")}: ${(m=e.entry)==null?void 0:m.Position} |`} ${((x=e.entry)==null?void 0:x.Points)&&`${o("sportsbook.point(s)")}: ${(d=e.entry)==null?void 0:d.Points}`}`})]})]})};export{S as G,I as H,P as R,T as S,_ as T};
