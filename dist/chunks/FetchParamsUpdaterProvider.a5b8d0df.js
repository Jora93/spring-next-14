import{memo as l,useCallback as u,useLayoutEffect as v}from"react";import{a as P}from"./custom-categories.e4debdf9.js";import{bK as e}from"./index.c0392060.js";import{u as f}from"./useSearchParams.0c3b0efc.js";import{u as S,a as C,C as h}from"./index.2b3f024a.js";import{u as I}from"./CasinoGamesConfigsContext.e82deb44.js";import"./i18next.083d61f0.js";import"./index.053dea56.js";import"react-dom";import"./swarm-command-names.230156ba.js";import"./backend-status-codes.80bfe624.js";import"./lazy.73833dcd.js";import"./new-casino.c4c686c0.js";import"./new-casino.e5c4000d.js";import"./route-manipulation.fb85cda5.js";import"./not-real-sports.64fc4139.js";import"./useSbRouteMatch.6006fa30.js";import"./casino.9f590000.js";import"./index.e56a0208.js";import"./app-data.da3833f4.js";import"./index.fbd937ed.js";import"./create-test-id.17a0abc8.js";import"./create-fake-array.68114bc4.js";import"./index.ffa75b49.js";import"./style.32a730b7.js";import"./styled-components.browser.esm.22f548e7.js";import"./useTranslation.70287e96.js";import"./context.f61a2be2.js";import"./index.ff41ed79.js";import"./index.68ae7eeb.js";import"./index.2ff73181.js";import"./useOpenLoginPopup.d27706ba.js";import"./index.fcbc691d.js";import"./fav-data.1c5898b7.js";import"./user-data.f480309c.js";import"./useDispatch.cd750ed9.js";import"./index.c41901f2.js";import"./index.092cd2c1.js";import"./toConsumableArray.19249869.js";import"./placements.f27399b1.js";import"./index.9a56940c.js";import"./usePredefinedStakes.58f7290f.js";import"./odds.334494eb.js";import"./socket.c077606d.js";import"./batch.dcd71b53.js";import"./index.59a19261.js";import"./index.9f857438.js";import"./maps.0cbca0c2.js";import"./useQuery.758207e2.js";import"./QueryClientProvider.04e144dd.js";import"./casino-data.6512dc9e.js";import"./casino-data.d1fb1a26.js";import"./new-casino.57a07aad.js";import"./index.058a83a7.js";import"./useDebounce.2f1da174.js";import"./index.1967089f.js";const g=(r,p)=>r.filter(t=>p.includes(t)),y=()=>{const{configs:r}=I(),{dispatchFetchParams:p}=S(),{provider:t}=f(),{selectedCategory:s}=C({configs:r}),a=u(()=>{var m,n;const o=r.bindWithProviders?t||e.all.name:e.all.name;let i;if(o===e.all.name)r.providerIds&&(i=r.providerIds);else{const c=(o==null?void 0:o.split(","))||[],d=((n=(m=r.providerIds)==null?void 0:m.split)==null?void 0:n.call(m,","))||[];i=g(c,r.providerIds?d:c).join(",")}return P.includes(s)&&(i=void 0),i},[r,t,s]);return v(()=>{const o=a();p({type:h.SET,payload:{provider:o}})},[a]),null},Er=l(y);export{Er as FetchParamsUpdaterProvider};
