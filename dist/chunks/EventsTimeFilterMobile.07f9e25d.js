import{j as m}from"./index.9a33d21b.js";import{memo as a}from"react";import{c}from"./index.fbd937ed.js";import{a as u}from"./backend-status-codes.4c1943df.js";import{d,U as E}from"./Events.public.32d28a8c.js";import{B as F}from"./index.7d5f88f7.js";import{b0 as T}from"./index.2e7649fa.js";import{u as f,d as h}from"./Skeleton.da8e5d7a.js";import{u as _}from"./useTranslation.70287e96.js";import{u as v}from"./useDispatch.151d3a82.js";import{u as x}from"./index.17630e7e.js";import"react-dom";import"./i18next.083d61f0.js";import"../widgets/Wrapper.js";import"./QueryClientProvider.e298e67a.js";import"./weekday.4f991ab7.js";import"./global-variables.eb46f49b.js";import"./context.f61a2be2.js";import"./swarm-command-names.afa48e3f.js";import"./app-data.3313f084.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./array-sort-by.690dd174.js";import"./lazy.73833dcd.js";import"./get-data-level.0ccc74a6.js";import"./index.f4c7d5fb.js";import"./index.7a2bd44d.js";import"./style.b04602fb.js";import"./styled-components.browser.esm.04179a03.js";import"./useBoostedOdds.fba5ecbe.js";import"./index.9fa2e41e.js";import"./sport-data.58080bc0.js";import"./useMounted.6d9c5610.js";import"./spec-elems.a06c4bcb.js";import"./useSportsbookConfigs.7961e643.js";import"./generic.cf030613.js";import"./route-manipulation.7a3d02e7.js";import"./not-real-sports.64fc4139.js";const pt=a(({fullWidth:o})=>{const{t:e}=_(),t=f(),s=v(),p=x(h)[(t==null?void 0:t.moduleId)||""]||+((t==null?void 0:t.defaultEventsMinutes)||0)||d.HALF_HOUR;return m.jsx("div",{className:c(["eventsTimeFilter",{"eventsTimeFilter--full-width":o}]),children:E.map(r=>{const i=r/u,l=p===r,n=`${i>1?i:r} ${e(`generic.${i>1?"hours":"minutes"}`)}`;return m.jsx("div",{className:"eventsTimeFilter__button",children:m.jsx(F,{type:l?"primary":"cancel",size:"small",onClick:()=>s(T({[(t==null?void 0:t.moduleId)||""]:r})),children:n})},r)})})});export{pt as EventsTimeFilterMobile};
