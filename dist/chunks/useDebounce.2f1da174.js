import{useState as r,useEffect as c}from"react";const a=(s,e,u)=>{const[n,t]=r(!1);return c(()=>{t(!0);const o=setTimeout(()=>{s(),t(!1)},e);return()=>clearTimeout(o)},[...u,e]),{isDebouncing:n}};export{a as u};
