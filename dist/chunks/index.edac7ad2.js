(function(){"use strict";try{if(typeof document!="undefined"){var e=document.createElement("style");e.appendChild(document.createTextNode(".bet-item-name{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.bet-item-status{margin-left:6px;padding:0 4px;border-radius:4px;background:var(--v3-error-color);text-transform:capitalize;font-size:11px;font-style:normal;font-weight:400;line-height:16px;letter-spacing:.1px;color:var(--v3-black-0)}.betslipEventInfoPopup .v3-popover{width:max-content!important}.betslipEventInfoPopup .v3-popover .v3-popover-arrow-content{width:auto;height:auto}.betslipEventInfoPopup .v3-popover-inner{padding:0 12px}.betslipEventInfoPopup .v3-popover-title{padding:5px 0}.betslipEventInfoPopup .v3-popover-inner-content{padding:12px 0}.betItemContent{line-height:1;background-color:var(--v3-black-0);padding:8px;border-bottom-left-radius:4px;border-bottom-right-radius:4px}.betItemContent__suspend{opacity:.6}.single .betItemContent{border-radius:0}.betslipContainer{margin-bottom:4px;border-radius:6px;box-shadow:var(--v3-shadow-strong)}.betslipContainer:is(.lastItem){margin-bottom:0}.betslipContainer.single .betItemContent{margin-bottom:0!important}.betslipContainer--compact{border-radius:4px}.betslipContainer--compact .betslipEventInfoPopup{padding:5px 12px 4px}.betslipContainer--compact .betItemContent{padding:0 12px}.betBuilder__bet-name{width:100%}.betslip__bet__actions{overflow:hidden;display:flex;align-items:center}.betslip__bet-head-text{width:60%}.betslip__bet__move{touch-action:none}.bet__win-noname{margin-right:12px}.eachWayText{color:var(--v3-text-color);display:flex;font-size:12px;line-height:16px;-webkit-box-align:center;align-items:center;margin-bottom:4px}.bet__container{display:flex;align-items:center;height:28px}.hooryIcon{display:flex;width:28px;height:28px;padding:6px;justify-content:center;align-items:center;gap:4px;border-radius:6px;margin-left:auto;background:linear-gradient(137deg,#4776e6 7.14%,#8e54e9 93.83%)}")),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
import{s as e}from"./styled-components.browser.esm.22f548e7.js";const o=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 1;
  border-bottom: 1px solid var(--v3-black-4);
  background-color: var(--v3-black-0);
  padding: 8px;
  position: relative;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`,n=e.div`
  width: 70%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: var(--v3-text-color);
  letter-spacing: 0.48px;
`,a=e.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 4px;
`,r=e.div`
  font-size: 12px;
  line-height: 16px;
  text-align: right;
  letter-spacing: 0.1px;
  flex-shrink: 0;
  color: var(--v3-text-color-secondary);
`,l=e.span`
  width: 80%;
  color: var(--v3-text-color);
  display: flex;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
`,s=e.span`
  color: var(--v3-text-color);
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
`,p=e.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  color: var(--v3-text-color);
  font-weight: normal;
  letter-spacing: 0.48px;
  ${t=>t.isSuspended&&`
  margin-top:3px;
  
  &.bet__win-name {
   margin-right: 12px;
  }
  `};
`,c=e.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;

  letter-spacing: 0.42px;
  line-height: 16px;

  border-radius: 4px;
  padding: 4px 8px;
  ${t=>t.isSuspended?"margin-top:3px;var(--v3-black-25);  background-color: var(--v3-black-4); font-weight:600; color: var(--v3-black-65);":"margin-left: 12px;color: var(--v3-color-on-primary);  background-color: var(--v3-primary-6);"};
  ${t=>t.isLive&&"margin-bottom: 4px"};
`,d=e.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  color: var(--v3-text-color-secondary);
  text-decoration: line-through;
  letter-spacing: 0.42px;
  border-radius: 6px;
  padding: 2px;
  margin-left: 8px;
`,x=e.span`
  font-size: 11px;
  background-color: var(--v3-error-color);
  color: var(--v3-white);
  padding: 8px;
  line-height: 0;
  border-radius: 4px;
  white-space: nowrap;
`,v=e.span`
  font-size: 12px;
  color: var(--v3-black-65);
`;export{o as B,v as G,x as L,n as a,a as b,l as c,r as d,s as e,p as f,d as g,c as h};
