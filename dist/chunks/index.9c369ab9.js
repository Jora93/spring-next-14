var f=Object.defineProperty,p=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var c=(i,n,t)=>n in i?f(i,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[n]=t,x=(i,n)=>{for(var t in n||(n={}))s.call(n,t)&&c(i,t,n[t]);if(o)for(var t of o(n))m.call(n,t)&&c(i,t,n[t]);return i},l=(i,n)=>p(i,z(n));var d=(i,n)=>{var t={};for(var e in i)s.call(i,e)&&n.indexOf(e)<0&&(t[e]=i[e]);if(i!=null&&o)for(var e of o(i))n.indexOf(e)<0&&m.call(i,e)&&(t[e]=i[e]);return t};import{j as C}from"./index.9a33d21b.js";import S from"react";import{s as v}from"./styled-components.browser.esm.04179a03.js";import{c as a}from"./app-data.3313f084.js";const u=v.span`
  border-radius: 6px;
  ${i=>!i.ghost&&`
      background-color: var(--v3-black-4);
  `}
  ${i=>i.active?`
          color: var(--v3-primary-color) !important;
        `:` 
          color: var(--v3-black-45) !important;
  `}
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 4px;
  cursor: pointer;
  flex-shrink: 0;
  ${i=>`width: ${i.iconContainerSize===a.SMALL?"20px":i.iconContainerSize===0?0:i.iconContainerSize===a.LARGE?"32px":"24px"};
     height: ${i.iconContainerSize===a.SMALL?"20px":i.iconContainerSize===0?0:i.iconContainerSize===a.LARGE?"32px":"24px"};
     
     font-size: ${i.size==="sm"?"12px":"16px"};
     
  `}
`,R=S.forwardRef((h,e)=>{var r=h,{icon:i,dataTestid:n}=r,t=d(r,["icon","dataTestid"]);return C.jsx(u,l(x({},t),{"data-testid":n,className:t.className,ref:e,children:i}))});export{u as C,R as E};
