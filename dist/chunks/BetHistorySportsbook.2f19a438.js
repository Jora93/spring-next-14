var A=Object.defineProperty,G=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var u=(s,e,o)=>e in s?A(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,f=(s,e)=>{for(var o in e||(e={}))w.call(e,o)&&u(s,o,e[o]);if(d)for(var o of d(e))U.call(e,o)&&u(s,o,e[o]);return s},b=(s,e)=>G(s,$(e));import{_ as y}from"./i18next.083d61f0.js";import{j as t}from"./index.9a33d21b.js";import{useState as q,useEffect as J,Suspense as K}from"react";import{G as Q,E as W}from"./app-data.3313f084.js";import{o as X}from"./swarm-command-names.afa48e3f.js";import{l as B}from"./lazy.73833dcd.js";import{a as Y}from"./fixed-header.6d1fc172.js";import{E as Z}from"./index.9c369ab9.js";import{L as tt}from"./index.b40f854c.js";import{N as et}from"./index.5860c036.js";import{B as ot}from"./index.7d5f88f7.js";import{u as st}from"./usePopupScrollDisable.d1a6ece6.js";import{F as _}from"./new-sportsbook.1752e123.js";import{E as rt}from"./new-sportsbook.6886dfa1.js";import{g as it}from"./user-data.358c1cdc.js";import{u as at}from"./useTranslation.70287e96.js";import{u as mt}from"./useDispatch.151d3a82.js";import{u as g}from"./index.17630e7e.js";import"react-dom";import"./index.fbd937ed.js";import"./backend-status-codes.4c1943df.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./styled-components.browser.esm.04179a03.js";import"./index.8ebbf22c.js";import"./index.2e7649fa.js";import"./context.f61a2be2.js";const{BetListHistory:lt}=B(()=>y(()=>import("./BetListHistory.6f8d7c2e.js"),["chunks/BetListHistory.6f8d7c2e.js","chunks/i18next.083d61f0.js","chunks/backend-status-codes.4c1943df.js","chunks/index.9a33d21b.js","chunks/index.3b8e1d1d.js","chunks/index.7d5f88f7.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.2e7649fa.js","chunks/swarm-command-names.afa48e3f.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/index.17630e7e.js","chunks/socket.c1bf8301.js","chunks/batch.dcd71b53.js","chunks/user-data.358c1cdc.js","chunks/index.9e499441.js","chunks/useDispatch.151d3a82.js","chunks/app-data.3313f084.js","chunks/create-fake-array.68114bc4.js","chunks/lazy.73833dcd.js","chunks/get-match-scores.69e0fa86.js","chunks/index.f94c4970.js","chunks/sortable.esm.f749ffa2.js","chunks/favorite-team.a5b4287b.js","chunks/index.9537878a.js","chunks/styled-components.browser.esm.04179a03.js","chunks/data-fields.c78d776a.js","chunks/route-manipulation.7a3d02e7.js","chunks/not-real-sports.64fc4139.js","chunks/get-data-level.0ccc74a6.js","chunks/index.b40f854c.js","chunks/sport-data.58080bc0.js","chunks/new-sportsbook.1752e123.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.2d2dceca.js","chunks/index.9c369ab9.js","chunks/useSportsbookConfigs.7961e643.js","chunks/generic.cf030613.js","chunks/index.53b56213.js","chunks/main.f5ab03e3.js","chunks/index.27fc0452.js","chunks/index.5fc60538.js","chunks/index.9fa2e41e.js","chunks/index.b34290f2.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/index.1514cd2f.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.08cf9b6f.js","chunks/index.5f1e48b3.js","chunks/KeyCode.6413d982.js","chunks/payment.5d90c3dc.js","chunks/account-settings.fd25e903.js","chunks/index.6af7a08e.js","chunks/index.56325e35.js","chunks/index.184af16c.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/v4.751847df.js","chunks/index.ceba7035.js","chunks/index.549a573d.js","chunks/Skeleton.a5b55c7c.js","chunks/Overflow.554112a5.js","chunks/CheckOutlined.2d4387be.js","chunks/casino.a461d655.js","chunks/useBetlsipNotEmptyPopup.e8996772.js","chunks/rtl.d50a3051.js","chunks/useMounted.6d9c5610.js","chunks/index.59f07ac5.js","chunks/useProceedRebetEditBet.457aa878.js","chunks/index.1dfc2dcd.js","chunks/quickBetActions.2e30a183.js","chunks/spec-elems.a06c4bcb.js","chunks/index.6cdb25e4.js","chunks/useFetchAccountParams.6304e015.js","chunks/useQuery.5322b9d6.js","chunks/QueryClientProvider.e298e67a.js"])),{BetFilter:nt}=B(()=>y(()=>import("./index.ad2ad9d4.js"),["chunks/index.ad2ad9d4.js","chunks/i18next.083d61f0.js","chunks/backend-status-codes.4c1943df.js","chunks/index.9a33d21b.js","chunks/index.b34290f2.js","chunks/toConsumableArray.635ccf3f.js","chunks/placements.2094afc0.js","chunks/index.7d5f88f7.js","chunks/index.fbd937ed.js","chunks/create-test-id.17a0abc8.js","chunks/index.9011aacc.js","chunks/col.94909042.js","chunks/swarm-command-names.afa48e3f.js","chunks/lazy.73833dcd.js","chunks/create-fake-array.68114bc4.js","chunks/app-data.3313f084.js","chunks/index.17630e7e.js","chunks/index.b40f854c.js","chunks/index.1dfc2dcd.js","chunks/index.6cdb25e4.js","chunks/index.59f07ac5.js","chunks/index.2e7649fa.js","chunks/account-settings.fd25e903.js","chunks/index.6af7a08e.js","chunks/useProceedRebetEditBet.457aa878.js","chunks/index.1514cd2f.js","chunks/statusUtils.ab0a6b68.js","chunks/SearchOutlined.0011f146.js","chunks/index.08cf9b6f.js","chunks/styled-components.browser.esm.04179a03.js","chunks/index.56325e35.js","chunks/index.184af16c.js","chunks/usePopupScrollDisable.d1a6ece6.js","chunks/useSearchParams.353231ec.js","chunks/index.9e499441.js","chunks/user-data.358c1cdc.js","chunks/v4.751847df.js","chunks/useDispatch.151d3a82.js","chunks/useTranslation.70287e96.js","chunks/context.f61a2be2.js","chunks/index.ceba7035.js","chunks/route-manipulation.7a3d02e7.js","chunks/not-real-sports.64fc4139.js","chunks/usePredefinedStakes.892527de.js","chunks/odds.3bca0cb7.js","chunks/socket.c1bf8301.js","chunks/batch.dcd71b53.js","chunks/useBetlsipNotEmptyPopup.e8996772.js","chunks/rtl.d50a3051.js","chunks/quickBetActions.2e30a183.js","chunks/spec-elems.a06c4bcb.js","chunks/useMounted.6d9c5610.js","chunks/useFetchAccountParams.6304e015.js","chunks/useQuery.5322b9d6.js","chunks/QueryClientProvider.e298e67a.js"])),zt=s=>{const{betHistory:e,filters:o,params:x,setOptions:j,executeRebet:S,cashoutModal:h,setCashoutModal:k,setCurrentTicket:v,currentTicket:E,setVisible:H,isLoading:m,oddFormat:I,isDatePicker:L,setIsDatePicker:N,endDate:D,setEndDate:F,startDate:T,setStartDate:M,betId:O,setBetId:P,setIsLoading:R,setSelectedSport:z,selectedSport:C}=s,{t:r}=at(),[a,i]=q(!1),l=mt(),n=g(it),p=document.getElementById("bottom-navigation"),V=g(rt);return J(()=>{n||l(_(!1))},[n]),st(V),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"betHistorySportsBook__navBar",children:t.jsx(et,b(f({title:r("pages.betHistory")},!a&&{goBack:()=>{l(_(!1)),i(!1)}}),{extra:a?t.jsx("div",{className:"accountModal__closeButton",onClick:()=>{i(!1)},children:r("account.closeModal")}):t.jsx(Z,{icon:t.jsx(Q,{lib:"generic",name:"params",theme:"default",size:W._16}),size:"md",onClick:()=>{i(!0)}})}))}),t.jsxs("div",{className:"betHistorySportsBook",style:{paddingBottom:`${Y()+(p!==null?p.offsetHeight:0)}px`},children:[t.jsx("div",{className:"betHistorySportsBook__title"}),t.jsx(K,{fallback:t.jsx(tt,{}),children:a?t.jsxs(t.Fragment,{children:[t.jsx(nt,{loading:m,setFilterVisibility:i,setIsLoading:R,isSportsBook:!0,filters:o,params:x,setOptions:j,isDatePicker:L,setIsDatePicker:N,startDate:T,setStartDate:M,endDate:D,setEndDate:F,betId:O,setBetId:P,setSelectedSport:z,betResults:X.map(c=>({label:r(`betslip.${c.name}`),value:String(c.id)})),selectedSport:C}),t.jsx("div",{className:"betHistorySportsBook__wrapper",children:t.jsx("div",{className:"betHistorySportsBook__button",children:t.jsx(ot,{form:"betHistoryFormMobile",className:"betHistorySportsBook__btn",type:"primary",size:"large",htmlType:"submit",children:r("account.applyFilter")})})})]}):t.jsx("div",{className:"betHistorySportsBook__betList",children:t.jsx(lt,{betHistory:e,isLoading:m,executeRebet:S,cashoutModal:h,setCashoutModal:k,setCurrentTicket:v,currentTicket:E,setVisible:H,oddFormat:I})})})]})]})};export{zt as BetHistorySportsbook};
