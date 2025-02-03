import{useRef as u,useEffect as n}from"react";const s=()=>{const e=u(!1),r=t=>{e.current&&t()};return n(()=>(e.current=!0,()=>{e.current=!1}),[]),{mounted:e,mountCheckWrapper:r}};export{s as u};
