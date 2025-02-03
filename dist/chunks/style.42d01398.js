import{S as a}from"./useMatchInfoHide.cfd9a4de.js";import{s as e}from"./styled-components.browser.esm.22f548e7.js";import{i as t}from"./index.053dea56.js";import{b7 as r}from"./index.c0392060.js";const d=i=>i.from===r.normal&&i.to===r.minimized?`
      animation-duration: 0.3s;
      ${n} {
        transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 0.045);
        ${o} {
          transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 0.045);
        }
      }
    `:"",f=e.div`
  opacity: 1;
  z-index: 3;
  will-change: bottom, transform, opacity, left, right;
  transform: translateX(0);
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 0.045);
  ${i=>i.skipTransition?"":"transition: transform 0.5s, opacity 0.5s, left 0.5s, right 0.5s;"}

  line-height: 1;
  ${d}
  ${i=>{switch(i.to){case"normal":return` 
          left: 8px;
          right: 8px;
          animation-name: vp-normalizing;
          position: ${!i.racing&&t()?"absolute":"static"};
          ${n} {
            box-shadow: none;
            border-radius: ${t()?i.racing?i.racing?"4px":"0 0 6px 6px":"6px":0};
              -webkit-border-radius: ${t()?i.racing?i.racing?"4px":"0 0 6px 6px":"6px":0};
            ${o} {
              width: 100%;
            }
          }
          ${i.racing&&t()&&`
          padding: 0 8px;
          margin-top: 5px;
        `}
        `;case"fullscreen":return` 
          left: 8px;
          right: 8px;
          position: fixed;
          top: 12px;
          ${n} {
            padding: 0;
            box-shadow: none;
            border-radius: 6px;
            -webkit-border-radius: 6px;
            ${o} {
              border-radius: 6px;
              -webkit-border-radius: 6px;
              width: 100%;
            }
          }
        `;case"minimized":return` 
          left: 0;
          right: 0;
          animation-name: vp-minimizing;
          position: fixed;
          bottom: 0;
          ${n} {
            padding: 8px 12px;
            box-shadow: var(--v3-shadow-1-down);
            border-radius: 0;
            -webkit-border-radius: 0;
            ${o} {
              border-radius: 8px;
              -webkit-border-radius: 8px;
              width: 118px;
            }
          }
        `;case"fixedOnTop":return` 
          left: 8px;
          right: 8px;
          animation-name: vp-fixedOnTop;
          position: ${!i.racing&&t()?"absolute":"static"};
          ${n} {
            box-shadow: none;
            border-radius: ${t()?i.racing?i.racing?"4px":"0 0 6px 6px":"6px":i.isTheatreMode?"0":"4px 4px 0 0"}; 
             -webkit-border-radius: ${t()?i.racing?i.racing?"4px":"0 0 6px 6px":"6px":i.isTheatreMode?"0":"4px 4px 0 0"};
            ${o} {
              width: 100%;
            }
          }
          ${i.racing&&t()&&`
          padding: 0 8px;
          margin-top: 5px;
        `}
        `;default:return""}}}
`,o=e.div`
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  will-change: width;
  z-index: 1;
`,h=e.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  will-change: transform;
  transition: transform 0.22s linear;
  transform: translateX(
    ${i=>i.section==="analytics"?"-100":"0"}%
  );
`,n=e(a)`
  will-change: padding;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  background-color: var(--v3-black-0);
`,s=e.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 99%;
  overflow: hidden;
`;e.iframe`
  border: none;
  width: 100%;
  height: 100%;
  ${i=>i.eventsNone&&`
          pointer-events: none;
        `}
`;const m=e.div`
  font-size: 12px;
  color: var(--v3-text-color);
  font-weight: 600;
`,v=e.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  ${i=>i.isActive?`
        background-color: var(--v3-black-6);
        color: var(--v3-text-color);
        svg {
          fill: var(--v3-text-color);
        }
      `:`
        background-color: var(--v3-black-4);
        color: var(--v3-text-color-secondary);
        svg {
          fill: var(--v3-text-color-secondary);
        }
      `}
`,l=e.div`
  position: absolute;
  ${i=>i.minimized?` top: 20%;left: 35%;
  `:"top: calc(50% - 20px);left: 0;"}
  right: 0;
  z-index: 1;
  text-align: center;
  justify-content: center;
  ${i=>i.videoLoad?` display: flex;
  `:"display: none"};
`,c=e.div`
  ${i=>i.showIcon?` display: inline-block;
  `:"display: none;"}
  position: absolute;
  ${i=>i.matchMode?"bottom: 5px;":"top: 5px;"}
  z-index: 1;
  right: 5px;
  cursor: pointer;
`,u=e.div`
  position: relative;
  width: 100%;
  height: ${i=>i.$fullHeight?"100%":"80%"};
  ${t()?"":`&:hover { 
    ${c} , ${l} {
      display: flex
   }  `}
`,w=e.div`
  display: flex;
  height: 32px;
  margin: ${t()?"12px 0":"8px"};
  ${i=>i.$hiddenPlayer&&"margin: 0;"}
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--v3-black-0);
  border-radius: 4px;
  -webkit-border-radius: 4px;
  cursor: pointer;
  gap: 8px;
`,$=e(s)`
  color: var(--v3-text-color);
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  flex-wrap: wrap;
  background-color: var(--v3-black-0);
`;export{o as C,m as G,v as I,c as M,s as O,u as P,n as S,$ as V,h as a,f as b,w as c};
