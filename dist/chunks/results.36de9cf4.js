import{C as t}from"./swarm-command-names.afa48e3f.js";import{R as e,p as d}from"./index.2e7649fa.js";import{e as i}from"./get-data-level.0ccc74a6.js";const E=(m,o,n,a,s)=>{const r={command:t.GET_ACTIVE_COMPETITIONS,params:{from_date:m,to_date:o,sport_type:s||null},rid:e.gForCommand()};d.then(c=>{c.sendCommand(r,"",n,null,a)})},G=(m,o)=>{const n={command:t.GET_RESULT_GAMES,params:m,rid:e.gForCommand()};d.then(a=>{a.sendCommand(n,"",o)})},p=(m,o)=>{const n={command:t.GET_RESULTS,params:{game_id:m},rid:e.gForCommand()};d.then(a=>{a.sendCommand(n,"",o)})},T=(m,o)=>{i(e.gForCommand(),m.what,m.where,o)};export{G as a,p as b,T as f,E as g};
