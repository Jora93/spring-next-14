import{i as r,S as a}from"./index.9a33d21b.js";const t=()=>{if(r())return!1;const e=new RegExp(`${a.PAGE_URLS.casino}/`);return!!window.location.href.match(e)&&a.LEFT_SIDE_BAR&&a.LEFT_SIDE_BAR_CASINO},n=e=>({category_id:e||0}),i="providers",c=()=>{const e=new URLSearchParams(window.location.search);return e.delete("mode"),e.delete("preview"),e.delete("profile"),e.delete("accounts"),e.delete("settings"),e};export{i as S,c,t as l,n as r};
