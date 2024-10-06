import{h as w,i as k,k as m,aI as x,aZ as A,u as O,aO as j,o as C,s as E,a_ as F,a$ as T,v as q,j as s,b as f,P as g,_,U as $,a1 as z,F as H,T as U,S as R,$ as V,aW as B,W as u,b0 as D,b1 as G,b2 as N}from"./strapi-Ck8xygrr.js";import{u as Q}from"./useAdminRoles-DX1MOKC9-DNjmWEvv.js";const W=w().shape({autoRegister:k().required(m.required),defaultRole:x().when("autoRegister",(e,t)=>e?t.required(m.required):t.nullable()),ssoLockedRoles:A().nullable().of(x().when("ssoLockedRoles",(e,t)=>e?t.required(m.required):t.nullable()))}),Z=()=>{const{formatMessage:e}=O(),t=j(l=>l.admin_app.permissions),{toggleNotification:o}=C(),{_unstableFormatAPIError:h,_unstableFormatValidationErrors:p}=E(),{isLoading:i,data:n}=F(),[d,{isLoading:M}]=T(),{isLoading:L,allowedActions:{canUpdate:y,canRead:I}}=q({...t.settings?.sso,readRoles:t.settings?.roles.read??[]}),{roles:S,isLoading:P}=Q(void 0,{skip:!I}),v=async(l,c)=>{try{const a=await d(l);if("error"in a){N(a.error)&&a.error.name==="ValidationError"?c.setErrors(p(a.error)):o({type:"danger",message:h(a.error)});return}o({type:"success",message:e({id:"notification.success.saved"})})}catch{o({type:"danger",message:e({id:"notification.error",defaultMessage:"An error occurred, please try again."})})}},b=P||L||i;return s.jsxs(f.Root,{children:[s.jsx(g.Title,{children:e({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"SSO"})}),s.jsx(g.Main,{"aria-busy":M||b,tabIndex:-1,children:s.jsx(_,{method:"PUT",onSubmit:v,validationSchema:W,disabled:!y,initialValues:n||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},children:({modified:l,isSubmitting:c})=>s.jsxs(s.Fragment,{children:[s.jsx(f.Header,{primaryAction:s.jsx($,{disabled:!l,loading:c,startIcon:s.jsx(z,{}),type:"submit",size:"L",children:e({id:"global.save",defaultMessage:"Save"})}),title:e({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:e({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),s.jsx(f.Content,{children:c||b?s.jsx(g.Loading,{}):s.jsxs(H,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[s.jsx(U,{variant:"delta",tag:"h2",children:e({id:"global.settings",defaultMessage:"Settings"})}),s.jsx(R.Root,{gap:4,children:[{hint:e({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:e({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",size:6,type:"boolean"},{hint:e({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),label:e({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",options:S.map(({id:a,name:r})=>({label:r,value:a.toString()})),placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),size:6,type:"enumeration"},{hint:e({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),label:e({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",options:S.map(({id:a,name:r})=>({label:r,value:a.toString()})),placeholder:e({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),size:6,type:"multi"}].map(({size:a,...r})=>s.jsx(R.Item,{col:a,direction:"column",alignItems:"stretch",children:s.jsx(J,{...r})},r.name))})]})})]})})})]})},J=e=>{switch(e.type){case"multi":return s.jsx(K,{...e});default:return s.jsx(V,{...e})}},K=({hint:e,label:t,name:o,options:h,...p})=>{const i=B(o);return s.jsxs(u.Root,{name:o,hint:e,error:i.error,children:[s.jsx(u.Label,{children:t}),s.jsx(D,{onChange:n=>i.onChange("ssoLockedRoles",n),onClear:()=>i.onChange("ssoLockedRoles",[]),value:i.value??[],withTags:!0,...p,children:h.map(({label:n,value:d})=>s.jsx(G,{value:d,children:n},d))}),s.jsx(u.Hint,{}),s.jsx(u.Error,{})]})},ee=()=>{const e=j(t=>t.admin_app.permissions.settings?.sso?.main);return s.jsx(g.Protect,{permissions:e,children:s.jsx(Z,{})})};export{ee as ProtectedSSO,Z as SingleSignOnPage};
