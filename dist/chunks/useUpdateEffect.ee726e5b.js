import{useRef as u,useEffect as s}from"react";function n(){const r=u(!0);return r.current?(r.current=!1,!0):r.current}function i(r,e){const t=n();s(()=>{if(!t)return r()},e)}export{i as u};
