import{useLayoutEffect as o,useEffect as f}from"react";import{n as l}from"./index.053dea56.js";import{f as u}from"./actions.27839be2.js";import{am as m,bn as n}from"./index.c0392060.js";import{k as d,v as B,z as g,Z as F}from"./index.59a19261.js";import{u as t}from"./index.ffa75b49.js";import{u as E}from"./useDispatch.cd750ed9.js";import"react-dom";import"./backend-status-codes.80bfe624.js";import"./i18next.083d61f0.js";import"./swarm-command-names.230156ba.js";import"./user-data.f480309c.js";const j=()=>{const a=t(d),r=t(B),s=t(g),e=t(F),i=E();o(()=>()=>{e&&m({id:e})},[e]),o(()=>{s&&e&&m({id:e,stake:s.toString()})},[s,e]);const p=a.map(({eventId:c})=>c).sort().join("-");return f(()=>()=>{i(n())},[]),o(()=>{i(n(!0)),a.length&&r&&r!==l.SYSTEM&&u()},[p,r]),null};export{j as _FreeBetManager};
