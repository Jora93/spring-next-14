import{i,j as r}from"./index.9a33d21b.js";import{useEffect as a}from"react";import{u as n}from"./useCalculateBetslipFixedSwitchersHeight.8651a87e.js";import{at as m}from"./index.9e499441.js";import{u as d}from"./index.17630e7e.js";import"react-dom";import"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import"./i18next.083d61f0.js";import"./swarm-command-names.afa48e3f.js";import"./odds.3bca0cb7.js";import"./user-data.358c1cdc.js";const p=t=>{const e={}.REACT_APP_ENV==="widgets"?"body":"#root";return`${e} {
    padding-bottom: 80px;
  }
  @supports (margin-bottom: env(safe-area-inset-bottom)) {
    ${e} {
      padding-bottom: calc(env(safe-area-inset-bottom) + ${t}px);
    }
  }`},y=()=>{const t=n(),o=d(m);return a(()=>{const e=document.querySelector("header.header-rows"),s=["header-row-fix","fixed"];e&&i()&&(o?e.classList.add(...s):e.classList.remove(...s))},[o]),r.jsx("style",{children:p(t)})};export{y as BetslipSetupManagerMobile};
