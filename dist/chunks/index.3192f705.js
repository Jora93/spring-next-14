var T=Object.defineProperty,x=Object.defineProperties;var m=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var s=(t,e,o)=>e in t?T(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,r=(t,e)=>{for(var o in e||(e={}))O.call(e,o)&&s(t,o,e[o]);if(a)for(var o of a(e))b.call(e,o)&&s(t,o,e[o]);return t},l=(t,e)=>x(t,m(e));import{j as c}from"./index.9a33d21b.js";import{createContext as D,useState as E,useContext as _}from"react";import{u as d}from"./useEventbus.6393d2bd.js";var n=(t=>(t.SET_TOTAL_ODDS="SET_TOTAL_ODDS",t))(n||{});const S={totalOdds:0},i=D(S),f=({children:t})=>{const[e,o]=E(S);return d({[n.SET_TOTAL_ODDS]:({payload:u})=>{o(p=>l(r({},p),{totalOdds:u}))}}),c.jsx(i.Provider,{value:e,children:t})},j=()=>_(i);export{f as B,n as E,j as u};
