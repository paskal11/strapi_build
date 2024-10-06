const __vite__fileDeps=["strapi-Ck8xygrr.js","strapi-COJtagOC.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as P,cj as _,ck as w,aK as D,u as M,j as i,P as N,b9 as T,b as A,cl as C,r as g,c4 as O,ca as U,cm as R,aF as B,cn as H,by as K,bz as $,bp as q,aq as F,co as G,cp as V,cq as z,cr as J,a4 as W}from"./strapi-Ck8xygrr.js";import{s as Y}from"./sortBy-Dh_GYQ56.js";import{s as Q}from"./selectors--muHmKGe-B7Ov7BXx.js";import"./_baseMap-zxR0aXVM.js";import"./_baseEach-DO8YpNGT.js";const X=n=>n.map(a=>{const r=a.links.map(o=>({...o,isDisplayed:!1}));return{...a,links:r}}),Z=()=>{const[{isLoading:n,menu:a},r]=g.useState({isLoading:!0,menu:[]}),o=O("useSettingsMenu",s=>s.checkUserHasPermissions),b=U("useSettingsMenu",s=>s.shouldUpdateStrapi),m=R("useSettingsMenu",s=>s.settings),c=B(Q),h=g.useMemo(()=>H(),[]),{admin:e,global:t}=K(h,async()=>(await $(()=>import("./strapi-Ck8xygrr.js").then(s=>s.jD),__vite__mapDeps([0,1])).then(s=>s.J)).SETTINGS_LINKS_EE(),{combine(s,l){return{admin:[...l.admin,...s.admin],global:[...s.global,...l.global]}},defaultValue:{admin:[],global:[]}}),f=g.useCallback(s=>{if(!s.id)throw new Error("The settings menu item must have an id attribute.");return{...s,permissions:c.settings?.[s.id]?.main??[]}},[c.settings]);return g.useEffect(()=>{const s=async()=>{const I=await(S=>Promise.all(S.reduce((d,L,k)=>{const x=L.links.map(async(j,p)=>({hasPermission:(await o(j.permissions)).length>0,sectionIndex:k,linkIndex:p}));return[...d,...x]},[])))(v);r(S=>({...S,isLoading:!1,menu:v.map((d,L)=>({...d,links:d.links.map((k,x)=>{const j=I.find(p=>p.sectionIndex===L&&p.linkIndex===x);return{...k,isDisplayed:!!j?.hasPermission}})}))}))},{global:l,...E}=m,v=X([{...l,links:Y([...l.links,...t.map(f)],u=>u.id).map(u=>({...u,hasNotification:u.id==="000-application-infos"&&b}))},{id:"permissions",intlLabel:{id:"Settings.permissions",defaultMessage:"Administration Panel"},links:e.map(f)},...Object.values(E)]);s()},[e,t,m,b,f,o]),{isLoading:n,menu:a.map(s=>({...s,links:s.links.filter(l=>l.isDisplayed)}))}},y=P(_)`
  right: 15px;
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);

  path {
    fill: ${({theme:n})=>n.colors.warning500};
  }
`,ss=P(w)`
  &.active ${y} {
    right: 13px;
  }
`,ts=({menu:n})=>{const{formatMessage:a}=M(),{trackUsage:r}=q(),{pathname:o}=F(),m=n.filter(e=>!e.links.every(t=>t.isDisplayed===!1)).map(e=>({...e,title:e.intlLabel,links:e.links.map(t=>({...t,title:t.intlLabel,name:t.id}))})),c=a({id:"global.settings",defaultMessage:"Settings"}),h=e=>()=>{r("willNavigate",{from:o,to:e})};return i.jsxs(G,{"aria-label":c,children:[i.jsx(V,{label:c}),i.jsx(z,{children:m.map(e=>i.jsx(J,{label:a(e.intlLabel),children:e.links.map(t=>i.jsxs(ss,{tag:W,withBullet:t.hasNotification,to:t.to,onClick:h(t.to),position:"relative",children:[a(t.intlLabel),t?.licenseOnly&&i.jsx(y,{width:"1.5rem",height:"1.5rem"})]},t.id))},e.id))})]})},rs=()=>{const n=D("/settings/:settingId/*"),{formatMessage:a}=M(),{isLoading:r,menu:o}=Z();return r?i.jsx(N.Loading,{}):n?.params.settingId?i.jsxs(A.Root,{sideNav:i.jsx(ts,{menu:o}),children:[i.jsx(N.Title,{children:a({id:"global.settings",defaultMessage:"Settings"})}),i.jsx(C,{})]}):i.jsx(T,{to:"application-infos"})};export{rs as Layout};
