import{j as a,S as m}from"./index.9a33d21b.js";import{d as o,ac as f}from"./backend-status-codes.4c1943df.js";import{d as u}from"./usePredefinedStakes.892527de.js";import{c as y,_ as I,$ as N,a0 as C,a1 as T,a2 as l,a3 as c,a4 as d,a5 as x,a6 as D,a7 as z,a8 as F,a9 as M}from"./game-data.f991b97b.js";import{T as j}from"./index.fcc8b535.js";import{u as O}from"./useSportImage.f3671c73.js";function v({gameData:s}){const{competitionName:h,game:t,sportAlias:p}=s,{team1_name:r,team2_name:i,start_ts:g,team1_id:S,team2_id:e}=t,n=g*f,_=O(p);return s?Object.keys(t).length?a.jsxs(I,{children:[a.jsx(N,{}),a.jsx(C,{src:_,loading:"lazy"}),a.jsxs(T,{children:[a.jsxs(l,{className:"teamFlag__container",children:[a.jsx(j,{teamId:S,size:"lg",sizeByPixels:44,children:a.jsx(c,{children:a.jsx(d,{children:String(r).substr(0,2).toUpperCase()})})}),a.jsx(x,{children:r})]}),a.jsxs(D,{$isOneGame:!!e,children:[a.jsx(z,{children:h}),a.jsx(F,{children:o(n).format(u({date:m.DT.longDate.replace(" YYYY",""),includeWeekday:!0}))}),a.jsx(M,{children:o(n).format(m.DT.time)})]}),e&&a.jsxs(l,{className:"teamFlag__container",children:[a.jsx(j,{teamId:e,size:"lg",sizeByPixels:44,children:a.jsx(c,{children:a.jsx(d,{children:String(i).substr(0,2).toUpperCase()})})}),a.jsx(x,{children:i})]})]})]}):null:a.jsx(y,{})}export{v as M};
