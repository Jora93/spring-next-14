var v=Object.defineProperty,D=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var O=(n,o,i)=>o in n?v(n,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[o]=i,S=(n,o)=>{for(var i in o||(o={}))W.call(o,i)&&O(n,i,o[i]);if(N)for(var i of N(o))b.call(o,i)&&O(n,i,o[i]);return n},C=(n,o)=>D(n,H(o));import{i as F}from"./i18next.083d61f0.js";import{S as e,i as r,I as A,N as Q,O as B,C as G}from"./index.9a33d21b.js";import{L as X,s as k}from"./swarm-command-names.afa48e3f.js";import{c as Y}from"./casino.a461d655.js";import{C as j}from"./custom-categories.700b2888.js";import{g as z,m as J}from"./route-manipulation.7a3d02e7.js";import{s as K}from"./backend-status-codes.4c1943df.js";import{g as Z}from"./get-domain.8143fbe7.js";import{g as q}from"./index.1dfc2dcd.js";import{R as m}from"./app-routes.c65435c5.js";const $={ANDROID_WRAPPER_APP:4,IOS_WRAPPER_APP:3},V=e.CASINO_LAUNCH_TYPE===0?"Launch":"Inner/authorization.php/",x=`${V}${e.SHOW_GAMBLING_WITH_LOGO&&r()?"Uk":""}${e.CASINO_LAUNCH_TYPE===0?"Game":""}`,lo=({gameId:n,gameType:o="fun",gameOptions:i=null,scroll:P,extraParams:_,language:T,exitUrlParams:t})=>{var u,L;const l=document.documentElement.lang,w=Z(),U=q("casinoSingleGame",!1,!1),s=Y(),[h,d]=U.split("?");let p="";t&&(p=`${h||`${r()?z(t.path||""):J(t.path||"",!1,!0)}/${t.selectedCategory||j.all.id}`}?${!d&&(s!=null&&s.size)?s.toString():d||""}`);const E=t!=null&&t.includePreviousRoute?`${window.location.origin}${p}`:t!=null&&t.exitUrlAsHomepage?window.location.origin:window.location.href,[y,I]=E.split("?");let R=E;I&&(R=`${y}${A.stringify(C(S({},A.parse(I,{ignoreQueryPrefix:!0})),{accounts:void 0,login:void 0}),{addQueryPrefix:!0})}`);const M=`https://${e.CASINO_GAME_URL_PREFIX}.${w}/${_?"":x}?`;let a=1;Q?a=$.ANDROID_WRAPPER_APP:B?a=$.IOS_WRAPPER_APP:r()&&(a=2);const f={partnerId:e.DECENTRALIZED_CASINO_PARTNER_ID||e.PARTNER_ID,devicetypeid:a,gameId:n,language:T||((u=window.currentLanguageObject)==null?void 0:u.casinoLangPrefix)||G[l]||G[l.slice(0,2)]||e.CURRENT_LANGUAGE.slice(0,2),openType:o,isMobile:r(),deposit_url:e.CURRENT_LANGUAGE_PREFIX===e.DEFAULT_LANGUAGE_PREFIX?`${window.location.origin}${m.deposit}`:`${window.location.origin}/${e.CURRENT_LANGUAGE_PREFIX}${m.deposit}`,browserUrl:window.location.href,logoSource:e.SITE_LOGO_URL||void 0,exitUrl:R};if(e.CASINO_MOBILE_IFRAME&&r()&&document.body.style.overflow!=="hidden"&&!P&&document.body.classList.add("no-scroll"),o==="real"){const g=(L=JSON.parse(X.getItem(k("account","AUTH_DATA"))))==null?void 0:L.auth_token;g?f.token=g:r()&&K(F.t("casino.notLoggedInForPlayingReal"))}let c=`${M}${A.stringify(f)}`;return i&&(c+=`&${i.split('"').join("")}`),_&&(c+=_),e.SHOW_GAMBLING_WITH_LOGO&&!e.CASINO_MOBILE_IFRAME&&(c+=`&gambcomURL=${e.CASINO_GAMBLING_LOGO_URL}`),c};export{lo as g};
