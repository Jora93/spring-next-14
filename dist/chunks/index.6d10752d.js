import{useEffect as e}from"react";import"./index.053dea56.js";import{av as s,aw as n}from"./index.c0392060.js";import"./backend-status-codes.80bfe624.js";import"./i18next.083d61f0.js";import{g as c}from"./user-data.f480309c.js";import{u as f}from"./index.ffa75b49.js";import{u as d}from"./useDispatch.cd750ed9.js";import"react-dom";import"./swarm-command-names.230156ba.js";const N=()=>{const o=f(c),r=d(),{prepareFavoritesInitialData:m}=n();e(()=>{o&&m(t=>{p(t.teams)})},[o]);const p=t=>{const i=t.map(a=>({teamId:a.TeamId,teamName:a.TeamName,sport:{name:a.SportName,id:a.SportId,alias:a.SportAlias}}));r(s(i))};return e(()=>{o||r(s([]))},[o]),null};export{N as FetchFavoriteTeamsData};
