import{m as R,C as r,f as m,q as v,l as O,E as V,F as S,G as T,a as P,i as p,H as b,k as A,I as i,j,J as N,g as k,K as $}from"./entry.ac178100.js";import{u as B}from"./asyncData.cc45eb43.js";import{h as c,e as x,j as C}from"./query.bed2eb7b.js";import{w as y,s as w,u as M,a as z}from"./utils.3ba8bf7d.js";/* empty css                */import"./ContentRenderer.25f6be32.js";/* empty css                 */import"./ContentDoc.84e8751f.js";import"./ContentList.54a37ed7.js";import"./ContentQuery.53745ccb.js";import"./ContentRendererMarkdown.a1d1331e.js";import"./ContentSlot.f5d665f1.js";import"./DocumentDrivenEmpty.23f53d7c.js";import"./DocumentDrivenNotFound.72933292.js";import"./Markdown.10bd5c5c.js";import"./ProseCode.29b5e452.js";import{u as H}from"./composables.11491165.js";import"./_commonjsHelpers.fed2a411.js";const q=async t=>{var o,_;const{content:e}=R().public,n=typeof(t==null?void 0:t.params)=="function"?t.params():t||{};e.locales.length&&((_=(o=n.where)==null?void 0:o.find(u=>u._locale))!=null&&_._locale||(n.where=n.where||[],n.where.push({_locale:e.defaultLocale})));const l=e.experimental.stripQueryParameters?y(`/navigation/${`${c(n)}.${e.integrity}`}/${x(n)}.json`):y(`/navigation/${c(n)}.${e.integrity}.json`);if(w())return(await r(()=>import("./client-db.0ec884f2.js"),["./client-db.0ec884f2.js","./entry.ac178100.js","./utils.3ba8bf7d.js","./query.bed2eb7b.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(u=>u.generateNavigation))(n);const a=await $fetch(l,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:C(n),previewToken:M("previewToken").value}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a};const F=m({emits:{error(t){return!0}},setup(t,{slots:e,emit:n}){const l=v(null),a=O();return V(o=>{if(!a.isHydrating)return n("error",o),l.value=o,!1}),()=>{var o,_;return l.value?(o=e.error)==null?void 0:o.call(e,{error:l}):(_=e.default)==null?void 0:_.call(e)}}}),U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"})),Q=m({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(t,{slots:e,attrs:n}){const l=v(!1);return S(()=>{l.value=!0}),a=>{var u;if(l.value)return(u=e.default)==null?void 0:u.call(e);const o=e.fallback||e.placeholder;if(o)return o();const _=a.fallback||a.placeholder||"",d=a.fallbackTag||a.placeholderTag||"span";return T(d,n,_)}}}),g=new WeakMap;function G(t){if(g.has(t))return g.get(t);const e={...t};return e.render?e.render=(n,...l)=>{var a;if(n.mounted$){const o=t.render(n,...l);return o.children===null||typeof o.children=="string"?P(o.type,o.props,o.children,o.patchFlag,o.dynamicProps,o.shapeFlag):p(o)}else return p("div",(a=n.$attrs)!=null?a:n._.attrs)}:e.template&&(e.template=`
      <template v-if="mounted$">${t.template}</template>
      <template v-else><div></div></template>
    `),e.setup=(n,l)=>{var o;const a=v(!1);return S(()=>{a.value=!0}),Promise.resolve(((o=t.setup)==null?void 0:o.call(t,n,l))||{}).then(_=>typeof _!="function"?{..._,mounted$:a}:(...d)=>{if(a.value){const u=_(...d);return u.children===null||typeof u.children=="string"?P(u.type,u.props,u.children,u.patchFlag,u.dynamicProps,u.shapeFlag):p(u)}else return p("div",l.attrs)})},g.set(t,e),e}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q,createClientOnly:G},Symbol.toStringTag,{value:"Module"})),Y=m({name:"DevOnly",setup(t,e){return()=>null}}),J=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"})),K=m({name:"ServerPlaceholder",render(){return T("div")}}),X=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"})),Z=m({name:"NuxtLoadingIndicator",props:{throttle:{type:Number,default:200},duration:{type:Number,default:2e3},height:{type:Number,default:3},color:{type:String,default:"repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"}},setup(t,{slots:e}){const n=tt({duration:t.duration,throttle:t.throttle}),l=O();return l.hook("page:start",n.start),l.hook("page:finish",n.finish),b(()=>n.clear),()=>p("div",{class:"nuxt-loading-indicator",style:{position:"fixed",top:0,right:0,left:0,pointerEvents:"none",width:`${n.progress.value}%`,height:`${t.height}px`,opacity:n.isLoading.value?1:0,background:t.color,backgroundSize:`${100/n.progress.value*100}% auto`,transition:"width 0.1s, height 0.4s, opacity 0.4s",zIndex:999999}},e)}});function tt(t){const e=v(0),n=v(!1),l=A(()=>1e4/t.duration);let a=null,o=null;function _(){u(),e.value=0,n.value=!0,t.throttle?o=setTimeout(E,t.throttle):E()}function d(){e.value=100,I()}function u(){clearInterval(a),clearTimeout(o),a=null,o=null}function L(D){e.value=Math.min(100,e.value+D)}function I(){u(),setTimeout(()=>{n.value=!1,setTimeout(()=>{e.value=0},400)},500)}function E(){a=setInterval(()=>{L(l.value)},100)}return{progress:e,isLoading:n,start:_,finish:d,clear:u}}const et=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"})),rt=t=>Object.fromEntries(Object.entries(t).filter(([,e])=>e!==void 0)),f=(t,e)=>(n,l)=>(H(()=>t({...rt(n),...l.attrs},l)),()=>{var a,o;return e?(o=(a=l.slots).default)==null?void 0:o.call(a):null}),h={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:String,contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},it=m({name:"NoScript",inheritAttrs:!1,props:{...h,title:String,body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a;const n={...t},l=(((a=e.default)==null?void 0:a.call(e))||[]).filter(({children:o})=>o).map(({children:o})=>o).join("");return l&&(n.children=l),{noscript:[n]}})}),nt=m({name:"Link",inheritAttrs:!1,props:{...h,as:String,crossorigin:String,disabled:Boolean,fetchpriority:String,href:String,hreflang:String,imagesizes:String,imagesrcset:String,integrity:String,media:String,prefetch:{type:Boolean,default:void 0},referrerpolicy:String,rel:String,sizes:String,title:String,type:String,methods:String,target:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>({link:[t]}))}),ot=m({name:"Base",inheritAttrs:!1,props:{...h,href:String,target:String},setup:f(t=>({base:t}))}),at=m({name:"Title",inheritAttrs:!1,setup:f((t,{slots:e})=>{var l,a,o;return{title:((o=(a=(l=e.default)==null?void 0:l.call(e))==null?void 0:a[0])==null?void 0:o.children)||null}})}),lt=m({name:"Meta",inheritAttrs:!1,props:{...h,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:f(t=>{const e={...t};return e.httpEquiv&&(e["http-equiv"]=e.httpEquiv,delete e.httpEquiv),{meta:[e]}})}),ut=m({name:"Style",inheritAttrs:!1,props:{...h,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:f((t,{slots:e})=>{var a,o,_;const n={...t},l=(_=(o=(a=e.default)==null?void 0:a.call(e))==null?void 0:o[0])==null?void 0:_.children;return l&&(n.children=l),{style:[n]}})}),_t=m({name:"Head",inheritAttrs:!1,setup:(t,e)=>()=>{var n,l;return(l=(n=e.slots).default)==null?void 0:l.call(n)}}),mt=m({name:"Html",inheritAttrs:!1,props:{...h,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:f(t=>({htmlAttrs:t}),!0)}),dt=m({name:"Body",inheritAttrs:!1,props:{...h,renderPriority:[String,Number]},setup:f(t=>({bodyAttrs:t}),!0)}),s=Object.freeze(Object.defineProperty({__proto__:null,NoScript:it,Link:nt,Base:ot,Title:at,Meta:lt,Style:ut,Head:_t,Html:mt,Body:dt},Symbol.toStringTag,{value:"Module"}));i(()=>r(()=>import("./Footer.613c3a4e.js"),["./Footer.613c3a4e.js","./entry.ac178100.js","./Nav.5dff3546.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Nav.1617b72b.js"),["./Nav.1617b72b.js","./entry.ac178100.js","./Nav.5dff3546.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Post.67a05fe9.js"),["./Post.67a05fe9.js","./ContentRenderer.25f6be32.js","./ContentRendererMarkdown.a1d1331e.js","./entry.ac178100.js","./_commonjsHelpers.fed2a411.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js","./Post.e2de00bb.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ReadingTime.a36fdc4f.js"),["./ReadingTime.a36fdc4f.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./TableOfContents.79011be6.js"),["./TableOfContents.79011be6.js","./entry.ac178100.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js","./ContentRenderer.25f6be32.js","./ContentRendererMarkdown.a1d1331e.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.84e8751f.js","./composables.11491165.js","./ContentQuery.53745ccb.js","./ContentList.54a37ed7.js","./ContentSlot.f5d665f1.js","./DocumentDrivenEmpty.23f53d7c.js","./DocumentDrivenNotFound.72933292.js","./Markdown.10bd5c5c.js","./ProseCode.29b5e452.js","./ProseCode.e63e49c6.css","./Nav.5dff3546.css","./Post.e2de00bb.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentDoc.84e8751f.js"),["./ContentDoc.84e8751f.js","./entry.ac178100.js","./composables.11491165.js","./ContentRenderer.25f6be32.js","./ContentRendererMarkdown.a1d1331e.js","./_commonjsHelpers.fed2a411.js","./ContentQuery.53745ccb.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentList.54a37ed7.js"),["./ContentList.54a37ed7.js","./ContentQuery.53745ccb.js","./entry.ac178100.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>st),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentQuery.53745ccb.js"),["./ContentQuery.53745ccb.js","./entry.ac178100.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRenderer.25f6be32.js"),["./ContentRenderer.25f6be32.js","./ContentRendererMarkdown.a1d1331e.js","./entry.ac178100.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentRendererMarkdown.a1d1331e.js"),["./ContentRendererMarkdown.a1d1331e.js","./entry.ac178100.js","./_commonjsHelpers.fed2a411.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ContentSlot.f5d665f1.js"),["./ContentSlot.f5d665f1.js","./utils.3ba8bf7d.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenEmpty.23f53d7c.js"),["./DocumentDrivenEmpty.23f53d7c.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./DocumentDrivenNotFound.72933292.js"),["./DocumentDrivenNotFound.72933292.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./Markdown.10bd5c5c.js"),["./Markdown.10bd5c5c.js","./ContentSlot.f5d665f1.js","./utils.3ba8bf7d.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseA.2613b519.js"),["./ProseA.2613b519.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseBlockquote.100371a5.js"),["./ProseBlockquote.100371a5.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCode.29b5e452.js"),["./ProseCode.29b5e452.js","./entry.ac178100.js","./ProseCode.e63e49c6.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseCodeInline.5bbc7bdd.js"),["./ProseCodeInline.5bbc7bdd.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseEm.abf49a63.js"),["./ProseEm.abf49a63.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH1.c89a00eb.js"),["./ProseH1.c89a00eb.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH2.27e17362.js"),["./ProseH2.27e17362.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH3.a35f2ead.js"),["./ProseH3.a35f2ead.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH4.a612f650.js"),["./ProseH4.a612f650.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH5.1abb7268.js"),["./ProseH5.1abb7268.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseH6.91bdf894.js"),["./ProseH6.91bdf894.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseHr.c3902860.js"),["./ProseHr.c3902860.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseImg.3142154b.js"),["./ProseImg.3142154b.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseLi.64c94cf6.js"),["./ProseLi.64c94cf6.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseOl.5e2d054c.js"),["./ProseOl.5e2d054c.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseP.c7dec662.js"),["./ProseP.c7dec662.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseStrong.179409cb.js"),["./ProseStrong.179409cb.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTable.3bf64765.js"),["./ProseTable.3bf64765.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTbody.4ea9202b.js"),["./ProseTbody.4ea9202b.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTd.5379937e.js"),["./ProseTd.5379937e.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTh.79d73542.js"),["./ProseTh.79d73542.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseThead.76838330.js"),["./ProseThead.76838330.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseTr.e1b735fa.js"),["./ProseTr.e1b735fa.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./ProseUl.7c02135b.js"),["./ProseUl.7c02135b.js","./entry.ac178100.js"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./welcome.dbfc7e98.js"),["./welcome.dbfc7e98.js","./composables.11491165.js","./entry.ac178100.js","./asyncData.cc45eb43.js","./query.bed2eb7b.js","./utils.3ba8bf7d.js","./ContentRenderer.25f6be32.js","./ContentRendererMarkdown.a1d1331e.js","./_commonjsHelpers.fed2a411.js","./ContentDoc.84e8751f.js","./ContentQuery.53745ccb.js","./ContentList.54a37ed7.js","./ContentSlot.f5d665f1.js","./DocumentDrivenEmpty.23f53d7c.js","./DocumentDrivenNotFound.72933292.js","./Markdown.10bd5c5c.js","./ProseCode.29b5e452.js","./ProseCode.e63e49c6.css","./Nav.5dff3546.css","./Post.e2de00bb.css"],import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.ac178100.js").then(t=>t.Z),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>U),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>W),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>J),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>X),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.ac178100.js").then(t=>t.X),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>et),void 0,import.meta.url).then(t=>t.default||t));i(()=>r(()=>import("./entry.ac178100.js").then(t=>t.Y),[],import.meta.url).then(t=>t.default||t));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.NoScript));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Link));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Base));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Title));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Meta));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Style));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Head));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Html));i(()=>r(()=>Promise.resolve().then(()=>s),void 0,import.meta.url).then(t=>t.Body));const pt=m({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:e}=j(t),n=A(()=>{var a;return typeof((a=e.value)==null?void 0:a.params)=="function"?e.value.params():e.value});if(!n.value&&N("dd-navigation").value){const{navigation:a}=z();return{navigation:a}}const{data:l}=await B(`content-navigation-${c(n.value)}`,()=>q(n.value));return{navigation:l}},render(t){const e=k(),{navigation:n}=t,l=_=>p($,{to:_._path},()=>_.title),a=(_,d)=>p("ul",d?{"data-level":d}:null,_.map(u=>u.children?p("li",null,[l(u),a(u.children,d+1)]):p("li",null,l(u)))),o=_=>a(_,0);return e!=null&&e.default?e.default({navigation:n,...this.$attrs}):o(n)}}),st=Object.freeze(Object.defineProperty({__proto__:null,default:pt},Symbol.toStringTag,{value:"Module"}));export{pt as default};
