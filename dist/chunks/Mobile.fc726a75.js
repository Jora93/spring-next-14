import{i,j as r}from"./index.053dea56.js";import{useEffect as a}from"react";import{u as n}from"./useCalculateBetslipFixedSwitchersHeight.b869a969.js";import{at as m}from"./index.59a19261.js";import{u as d}from"./index.ffa75b49.js";import"react-dom";import"./index.c0392060.js";import"./backend-status-codes.80bfe624.js";import"./i18next.083d61f0.js";import"./swarm-command-names.230156ba.js";import"./odds.334494eb.js";import"./user-data.f480309c.js";const p=t=>{const e={}.REACT_APP_ENV==="widgets"?"body":"#root";return`${e} {
    padding-bottom: 80px;
  }
  @supports (margin-bottom: env(safe-area-inset-bottom)) {
    ${e} {
      padding-bottom: calc(env(safe-area-inset-bottom) + ${t}px);
    }
  }`},y=()=>{const t=n(),o=d(m);return a(()=>{const e=document.querySelector("header.header-rows"),s=["header-row-fix","fixed"];e&&i()&&(o?e.classList.add(...s):e.classList.remove(...s))},[o]),r.jsx("style",{children:p(t)})};export{y as BetslipSetupManagerMobile};
