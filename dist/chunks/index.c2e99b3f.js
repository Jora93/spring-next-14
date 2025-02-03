import{S as X,j as s}from"./index.053dea56.js";import{memo as Y,useRef as w,useMemo as j,useLayoutEffect as L,useEffect as P}from"react";import{c as R}from"./index.fbd937ed.js";import{W as a,s as m}from"./styled-components.browser.esm.22f548e7.js";import{P as z}from"./index.184af16c.js";const C={toLeft:a`{
            0% {transform: translateX(100%);}
            100% {transform: translateX(0);}
            }`,toRight:a`{
            0% {transform: translateX(-100%);}
            100% {transform: translateX(0);}
            }`,toTop:a`{
            0% {transform: translateY(100%);}
            100% {transform: translateY(0);}
            }`,toBottom:a`{
            0% {transform: translateY(-100%);}
            100% {transform: translateY(0);}
            }`},D={toLeft:a`{
            0% {transform: translateX(0);}
            100% {transform: translateX(100%);}
            }`,toRight:a`{
            0% {transform: translateX(0);}
            100% {transform: translateX(-100%);}
            }`,toTop:a`{
            0% {transform: translateY(0);}
            100% {transform: translateY(100%);}
            }`,toBottom:a`{
            0% {transform: translateY(0);}
            100% {transform: translateY(-100%);}
            }`},c=m.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: ${t=>t.maskBackground?t.maskBackground:"rgba(0,0,0,0.3)"};
  z-index: 1;
`,B=m.div`
  position: fixed;
  height: -webkit-fill-available;
  height: -moz-available;
  height: fill-available;
  top: ${t=>t.$maskPosTop?t.$maskPosTop:0};
  left: 0;
  right: 0;
  opacity: ${t=>t.show?1:0};
  z-index: 11;
  pointer-events: ${t=>t.show?"all":"none"};
  overflow: hidden;
  transition: opacity
    ${t=>t.animationTime?t.animationTime:"0.3s"};

  ${c} {
    top: ${t=>t.$maskPosTop?t.$maskPosTop:0};
  }
`,N=m.div`
  position: absolute;
  height: 100%;
  bottom: ${t=>t.posBottom?t.posBottom:0};
  top: ${t=>t.posTop?t.posTop:0};
  left: ${t=>t.posLeft?t.posLeft:0};
  right: ${t=>t.posRight?t.posRight:0};
  display: flex;
  flex-direction: column;
  z-index: 3;
  background: var(--v3-black-0);

  &.customPopup--open {
    animation: ${t=>C[t.animationType]}
      ${t=>t.animationTime?t.animationTime:"0.3s"} ease
      forwards;
  }

  &.customPopup--close {
    animation: ${t=>D[t.animationType]}
      ${t=>t.animationTime?t.animationTime:"0.3s"} ease
      forwards;
  }
`,_=Y(({open:t,children:h,onMaskClick:r,mask:d,animationType:e,animationTime:l,className:$,posBottom:g,posLeft:p,posRight:x,posTop:f,maskPosTop:o,maskBackground:T,style:b={},onBeforeOpen:i,onAnimationEnd:n,initiallyLoaded:v=!1})=>{const u=w(v),y=j(()=>e||"toLeft",[e]);return L(()=>{i==null||i()},[]),P(()=>{t&&(u.current=!0)},[t]),X.MOCKED_DATA?null:s.jsx(z,{children:s.jsxs(B,{show:t,animationTime:l,className:$,style:b,$maskPosTop:o!=null&&o.usePosTop?f:o==null?void 0:o.posTop,children:[d&&s.jsx(c,{className:"customMask",maskBackground:T,onClick:()=>r==null?void 0:r(!0)}),s.jsx(N,{className:R(["custom-data",{"customPopup--open":t,"customPopup--close":!t}]),animationType:y,animationTime:l,posTop:f,posRight:x,posLeft:p,posBottom:g,onAnimationEnd:()=>{n==null||n(t)},children:(t||u.current)&&h})]})})});export{_ as P};
