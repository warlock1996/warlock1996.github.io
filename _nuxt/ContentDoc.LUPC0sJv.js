import{i as d,m as _,u as y,q as w,s as g,g as D,v as x,x as H,y as u}from"./entry.i5Pa317r.js";import{u as q}from"./vue.f36acd1f.5ryKsiio.js";import S from"./ContentRenderer.E65bQwCn.js";import b from"./ContentQuery.DPC3bi3G.js";import"./ContentRendererMarkdown.vue.VS-HnufE.js";import"./index.1dSrIji7.js";import"./preview.Pn9OCtXi.js";import"./query.1Vdj4lbK.js";const a=(s,p=y())=>{const e=d(s),m=g();_(()=>d(s),(n=e)=>{if(!p.path||!n)return;const t=Object.assign({},(n==null?void 0:n.head)||{});t.meta=[...t.meta||[]],t.link=[...t.link||[]];const r=t.title||(n==null?void 0:n.title);r&&(t.title=r),m.public.content.host;const c=(t==null?void 0:t.description)||(n==null?void 0:n.description);c&&t.meta.filter(l=>l.name==="description").length===0&&t.meta.push({name:"description",content:c}),t!=null&&t.image||(n==null||n.image),w(()=>q(t))},{immediate:!0})},$=D({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:void 0}},render(s){const{contentHead:p}=g().public.content,e=x(),{tag:m,excerpt:f,path:n,query:t,head:r}=s,c=r===void 0?p:r,l={...t||{},path:n||(t==null?void 0:t.path)||H(y().path),find:"one"},v=(o,i)=>u("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return u(b,l,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:C})=>{var h;return c&&a(o),(h=e.default)==null?void 0:h.call(e,{doc:o,refresh:i,isPartial:C,excerpt:f,...this.$attrs})}:({data:o})=>(c&&a(o),u(S,{value:o,excerpt:f,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):v("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||u("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||u("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),j=$,P=j;export{P as default};
