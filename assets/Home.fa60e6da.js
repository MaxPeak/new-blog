import{e,u as a,f as t,g as s,h as l,o,c as n,a as c,i as r,t as i,_ as u,w as v,p as d,j as f,F as m,r as p,k as h,l as k}from"./app.1a193a2c.js";const x=v("data-v-024e1674");d("data-v-024e1674");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,id:"main-title",class:"title"},_={key:2,class:"description"};f();var b=e({expose:[],setup(e){const v=a(),d=t(),f=s((()=>d.value.heroImage||m.value||h.value||b.value)),m=s((()=>null!==d.value.heroText)),p=s((()=>d.value.heroText||v.value.title)),h=s((()=>null!==d.value.tagline)),k=s((()=>d.value.tagline||v.value.description)),b=s((()=>d.value.actionLink&&d.value.actionText)),I=s((()=>d.value.altActionLink&&d.value.altActionText));return x(((e,a)=>l(f)?(o(),n("header",y,[e.$frontmatter.heroImage?(o(),n("figure",g,[c("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):r("",!0),l(m)?(o(),n("h1",$,i(l(p)),1)):r("",!0),l(h)?(o(),n("p",_,i(l(k)),1)):r("",!0),l(b)?(o(),n(u,{key:3,item:{link:l(d).actionLink,text:l(d).actionText},class:"action"},null,8,["item"])):r("",!0),l(I)?(o(),n(u,{key:4,item:{link:l(d).altActionLink,text:l(d).altActionText},class:"action alt"},null,8,["item"])):r("",!0)])):r("",!0)))}});b.__scopeId="data-v-024e1674";const I=v("data-v-e5f225ce");d("data-v-e5f225ce");const T={key:0,class:"home-features"},A={class:"wrapper"},L={class:"container"},w={class:"features"},j={key:0,class:"title"},B={key:1,class:"details"};f();var C=e({expose:[],setup(e){const a=t(),u=s((()=>a.value.features&&a.value.features.length>0)),v=s((()=>a.value.features?a.value.features:[]));return I(((e,a)=>l(u)?(o(),n("div",T,[c("div",A,[c("div",L,[c("div",w,[(o(!0),n(m,null,p(l(v),((e,a)=>(o(),n("section",{key:a,class:"feature"},[e.title?(o(),n("h2",j,i(e.title),1)):r("",!0),e.details?(o(),n("p",B,i(e.details),1)):r("",!0)])))),128))])])])])):r("",!0)))}});C.__scopeId="data-v-e5f225ce";const F={},q=v("data-v-df8b2502");d("data-v-df8b2502");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};f();const G=q(((e,a)=>e.$frontmatter.footer?(o(),n("footer",z,[c("div",D,[c("p",E,i(e.$frontmatter.footer),1)])])):r("",!0)));F.render=G,F.__scopeId="data-v-df8b2502";const H=v("data-v-6e1bdf43");d("data-v-6e1bdf43");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};f();var M=e({expose:[],setup:e=>H(((e,a)=>{const t=h("Content");return o(),n("main",J,[c(b),k(e.$slots,"hero"),c(C),c("div",K,[c(t)]),k(e.$slots,"features"),c(F),k(e.$slots,"footer")])}))});M.__scopeId="data-v-6e1bdf43";export default M;