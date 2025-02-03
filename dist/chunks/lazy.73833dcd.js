import{lazy as l}from"react";const f=r=>new Proxy({},{get:(y,t)=>{if(typeof t=="string")return l(()=>r(t).then(a=>({default:a[t]})))}});export{f as l};
