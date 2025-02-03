import{j as e}from"./index.053dea56.js";import{s as a}from"./styled-components.browser.esm.22f548e7.js";import{B as o}from"./index.f3890d80.js";const i=a.div`
  background-color: var(--v3-black-0);
  border-bottom: 1px solid var(--v3-black-6);
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 60px;
  flex-shrink: 0;
  display: flex;
  height: 48px;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
`,r=a.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  padding: 12px;
  align-items: center;
`,s=a.span`
  font-size: 18px;
  color: var(--v3-text-color);
  font-weight: 600;
`,n=a.span`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 12px;
  display: flex;
  align-items: center;
`,x=t=>e.jsxs(i,{className:t.isLogin?"popup-header":"",children:[t.goBack&&e.jsx(r,{className:"back-wrapper",children:e.jsx(o,{onClick:t.goBack})}),e.jsx(s,{children:t.title}),e.jsx(n,{className:"extra-wrapper",children:t.extra})]});export{x as N};
