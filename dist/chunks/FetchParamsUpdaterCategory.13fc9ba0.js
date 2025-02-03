import{memo as y,useMemo as h,useCallback as b,useLayoutEffect as v}from"react";import{m as _}from"./index.9a33d21b.js";import{C as r,c as O}from"./custom-categories.700b2888.js";import{m as P}from"./route-manipulation.7a3d02e7.js";import{u as T}from"./useSbRouteMatch.ecfb9430.js";import{b as A,c as E}from"./new-casino.50453b68.js";import{u as F}from"./CasinoGamesConfigsContext.b2b74c57.js";import{u as G,C as L}from"./index.47005fb3.js";import{u as f}from"./index.17630e7e.js";import"react-dom";import"./i18next.083d61f0.js";import"./swarm-command-names.afa48e3f.js";import"./index.2e7649fa.js";import"./backend-status-codes.4c1943df.js";import"./not-real-sports.64fc4139.js";import"./lazy.73833dcd.js";import"./new-casino.c45049f4.js";import"./new-casino.e5c4000d.js";import"./casino.a461d655.js";import"./index.10ad49d0.js";import"./app-data.3313f084.js";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./style.b04602fb.js";import"./styled-components.browser.esm.04179a03.js";import"./useTranslation.70287e96.js";import"./context.f61a2be2.js";import"./index.22f8fdf2.js";import"./index.6cdb25e4.js";import"./index.ccacb51f.js";import"./useOpenLoginPopup.9bf6877c.js";import"./index.1dfc2dcd.js";import"./useSearchParams.353231ec.js";import"./fav-data.eb686620.js";import"./user-data.358c1cdc.js";import"./useDispatch.151d3a82.js";import"./index.9eebc582.js";import"./index.5f1e48b3.js";import"./toConsumableArray.635ccf3f.js";import"./placements.2094afc0.js";import"./index.7d5f88f7.js";import"./usePredefinedStakes.892527de.js";import"./odds.3bca0cb7.js";import"./socket.c1bf8301.js";import"./batch.dcd71b53.js";import"./index.9e499441.js";import"./index.b40f854c.js";import"./maps.0cbca0c2.js";import"./useQuery.5322b9d6.js";import"./QueryClientProvider.e298e67a.js";import"./casino-data.e9191b01.js";import"./casino-data.957df014.js";import"./index.6af7a08e.js";import"./useDebounce.2f1da174.js";import"./index.e1efc537.js";const B=()=>{const{dispatchFetchParams:u}=G(),{configs:i,computedConfigs:s}=F(),d=_(),p=f(A),c=f(E),e=T(`${P(d.pathname,!1,!0)}/:category`),a=h(()=>{var t;return(t=s.leftSideBarAvailable?c:p)!=null?t:[]},[s.leftSideBarAvailable,p,c]),n=b(()=>{var g;const t=i.bindWithCategories?((g=e==null?void 0:e.params)==null?void 0:g.category)||r.all.id:r.all.id,m=t===r.special.id,C=t===r.specialLive.id;let o,l;return i.bindWithCategories?t&&t!==r.all.id?(m||(o=t),C&&(o="28")):o=a.filter(S=>!Number.isNaN(Number(S))).join(",")||void 0:i.categoryIds&&(o=i.categoryIds),O.includes(o||"")&&(o=void 0),o===void 0&&!a.length&&(l=t),{category:o,_fake_category:l}},[i,e.params.category,a]);return v(()=>{const{category:t,_fake_category:m}=n();u({type:L.SET,payload:{category:t,_fake_category:m}})},[n]),null},Ut=y(B);export{Ut as FetchParamsUpdaterCategory};
