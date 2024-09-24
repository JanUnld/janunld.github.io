import{I as E,s as J,O as Q,i as Z,a as k,c as B,ɵ as g,d as f,e as I,f as T,D as V,g as a,h as p,j as M,k as c,l as r,m as G,n as d,o as i,p as D,q as W,r as u,t as Y,u as m,v as q,w as z,x as N,y as X,z as ee,R as te,A as ne,B as oe,C as re,E as ae,F as ie,G as se,H as ce,J as le,K as pe,L as de,M as me,N as ue,P as ge,Q as fe,S as he,T as _e}from"./vendor-vXb6Kv7f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const C of l.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&o(C)}).observe(document,{childList:!0,subtree:!0});function e(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(s){if(s.ep)return;s.ep=!0;const l=e(s);fetch(s.href,l)}})();const be=new E("COLOR_SCHEME",{providedIn:"root",factory:()=>{const n=J("light"),t=window.matchMedia("(prefers-color-scheme: dark)"),e=()=>n.set(t.matches?"dark":"light");return t.addEventListener("change",o=>e()),e(),n}});new E("OCTOKIT",{providedIn:"root",factory:()=>new Q});new E("GITHUB_USER");function ye(n,t){if(n&1&&(a(0,"div",4),c(1),r()),n&2){const e=d().$implicit;i(),Y(" ",e.company.displayName," ")}}function ve(n,t){if(n&1&&(a(0,"span"),c(1),q(2,"date"),r()),n&2){const e=d().$implicit,o=d(2);i(),m(z(2,1,e.endDate,o.dateFormat()))}}function xe(n,t){n&1&&(a(0,"span"),c(1,"now"),r())}function we(n,t){if(n&1&&(a(0,"span",18),c(1),r()),n&2){const e=d();i(),m(e.years?e.years+"y":"")}}function ke(n,t){if(n&1&&(a(0,"span"),c(1),r()),n&2){const e=d();i(),m(e.months?e.months+"m":"")}}function Ce(n,t){if(n&1&&(a(0,"div",17),M(1,we,2,1,"span",18)(2,ke,2,1,"span"),a(3,"span",16),c(4,"·"),r()()),n&2){const e=t;i(),u(e.years?1:-1),i(),u(e.months?2:-1)}}function De(n,t){if(n&1&&(a(0,"div",17)(1,"span"),c(2),r()()),n&2){const e=d().$implicit;i(2),m(e.description)}}function Me(n,t){if(n&1&&(a(0,"div",8)(1,"div",9),p(2,"div",10)(3,"div",11)(4,"div",12),r(),a(5,"div",13)(6,"div"),c(7),r(),a(8,"div",14)(9,"span"),c(10),q(11,"date"),r(),a(12,"span",15),c(13,"‐"),r(),M(14,ve,3,4,"span")(15,xe,2,0,"span"),a(16,"span",16),c(17," · "),r()(),M(18,Ce,5,2,"div",17)(19,De,3,1,"div",17),r()()),n&2){let e;const o=t.$implicit,s=d(2);i(7),m(o.title),i(3),m(z(11,5,o.startDate,s.dateFormat())),i(4),u(o.endDate?14:15),i(4),u((e=s.getDuration(o))?18:-1,e),i(),u(o.description?19:-1)}}function Fe(n,t){if(n&1&&(a(0,"div",0)(1,"div",1)(2,"a",2),p(3,"img",3),M(4,ye,2,1,"div",4),a(5,"span",5),c(6),r()(),a(7,"a",6)(8,"span"),c(9),r(),p(10,"i",7),r()(),I(11,Me,20,8,"div",8,G),r()),n&2){const e=t.$implicit,o=d();i(2),D("href",e.company.href,N),i(),W("alt","",e.company.displayName," logo image"),D("src",o.isDarkMode()?e.company.logoSrc.dark:e.company.logoSrc.default,N),i(),u(e.company.hideDisplayName?-1:4),i(2),Y(" ",e.company.type," "),i(),D("href",e.company.href,N),i(2),m(e.company.displayName),i(2),T(e.positions)}}const h=class h{constructor(){this.colorScheme=Z(be),this.dateFormat=k("MMMM yyyy"),this.companies=k([{id:"nt",displayName:"Novatec Consulting",href:"https://www.novatec-gmbh.de/",logoSrc:{default:"/img/novatec.svg",dark:"/img/novatec-dark.svg"},hideDisplayName:!0,type:"GmbH"},{id:"vg",displayName:"vitagroup",href:"https://www.vitagroup.ag/",logoSrc:{default:"/img/vitagroup.svg",dark:"/img/vitagroup-dark.svg"},hideDisplayName:!0,type:"AG"},{id:"mgs",displayName:"mg.softech",href:"https://www.mgsoftech.de/",logoSrc:{default:"/img/mgsoftech.svg",dark:"/img/mgsoftech-dark.svg"},type:"GmbH"}]),this.experiences=k([{title:"Senior Software Engineer",startDate:"2024-01-01",companyId:"nt",description:"full-time"},{title:"Software Engineer",startDate:"2023-07-01",endDate:"2024-01-01",companyId:"nt",description:"full-time"},{title:"Frontend Engineer",startDate:"2019-01-01",endDate:"2023-07-01",companyId:"vg",description:"full-time"},{title:"Software Developer",startDate:"2017-06-01",endDate:"2018-12-31",companyId:"mgs",description:"full-time"},{title:"Software Developer",startDate:"2015-06-01",endDate:"2017-06-01",companyId:"mgs",description:"full-time, apprenticeship"}]),this.isDarkMode=B(()=>this.colorScheme()==="dark"),this.experienceByCompany=B(()=>this.companies().map(t=>({company:t,positions:this.experiences().filter(e=>e.companyId===t.id)})))}getDuration({startDate:t,endDate:e}){const o=new Date(t),s=e?new Date(e):new Date,l=s.getFullYear()===o.getFullYear(),C=11-o.getMonth(),P=s.getMonth(),L=Math.max(s.getFullYear()-o.getFullYear()-1,0)*11;let F=0;L>0||!l?F=C+L+P:F=P;const U=Math.floor(F/11),K=F%11;return{years:U,months:K}}};h.ɵfac=function(e){return new(e||h)},h.ɵcmp=g({type:h,selectors:[["jun-experience"]],inputs:{dateFormat:[1,"dateFormat"],companies:[1,"companies"],experiences:[1,"experiences"]},standalone:!0,features:[f],decls:2,vars:0,consts:[[1,"mb-8","first:mt-8"],[1,"flex","items-center","justify-between","mb-2"],["target","_blank","rel","noopener noreferrer",1,"flex","items-center","select-none","no-style",3,"href"],[1,"h-7",3,"src","alt"],[1,"ml-2","no-underline"],[1,"ml-2.5","px-2","py-0.5","text-xs","text-neutral-400","dark:text-neutral-600","border-2","border-neutral-200","dark:border-neutral-800","rounded-full"],["target","_blank","rel","noopener noreferrer",1,"ml-4","text-sm","flex","items-center","decoration-1","max-sm:hidden",3,"href"],[1,"iconoir-arrow-up-right-square","ml-1"],[1,"group","flex","items-center"],[1,"flex","flex-col","ml-3","mr-4","self-stretch"],[1,"h-7","border-l-2","border-neutral-300","dark:border-neutral-700"],[1,"h-1.5","w-1.5","rounded","my-2","-ml-0.5","bg-neutral-600","dark:bg-neutral-400"],[1,"grow","border-l-2","group-last:border-transparent","border-neutral-300","dark:border-neutral-700"],[1,"my-3"],[1,"inline-block","mt-1","text-xs","text-neutral-500"],[1,"mx-1"],[1,"mx-2","text-neutral-400","dark:text-neutral-600"],[1,"inline-block","text-xs","text-neutral-400","dark:text-neutral-600"],[1,"first:mr-1"]],template:function(e,o){e&1&&I(0,Fe,13,8,"div",0,G),e&2&&T(o.experienceByCompany())},dependencies:[V],encapsulation:2});let $=h;const _=class _{};_.ɵfac=function(e){return new(e||_)},_.ɵcmp=g({type:_,selectors:[["jun-header"]],standalone:!0,features:[f],decls:1,vars:0,template:function(e,o){e&1&&p(0,"header")},encapsulation:2});let A=_;const Ne=["*"],b=class b{constructor(){this.variant=k("default")}};b.ɵfac=function(e){return new(e||b)},b.ɵcmp=g({type:b,selectors:[["jun-tag"]],inputs:{variant:[1,"variant"]},standalone:!0,features:[f],ngContentSelectors:Ne,decls:1,vars:0,template:function(e,o){e&1&&(X(),ee(0))},styles:[`[_nghost-%COMP%] {display: inline-block;padding-left: 0.5rem;padding-right: 0.5rem;padding-top: 0.25rem;padding-bottom: 0.25rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;border-radius: 9999px;font-size: 0.75rem;line-height: 1rem;font-weight: 600;--tw-bg-opacity: 1;background-color: rgb(209 250 229 / var(--tw-bg-opacity))
}@media (prefers-color-scheme: dark) {[_nghost-%COMP%] {--tw-bg-opacity: 1;background-color: rgb(6 78 59 / var(--tw-bg-opacity))
  }
}[_nghost-%COMP%] {--tw-text-opacity: 1;color: rgb(6 78 59 / var(--tw-text-opacity))
}@media (prefers-color-scheme: dark) {[_nghost-%COMP%] {--tw-text-opacity: 1;color: rgb(209 250 229 / var(--tw-text-opacity))
  }
}[_nghost-%COMP%] {

  &:not(:last-child) {margin-right: 0.25rem
  }

  &[variant='muted'] {--tw-bg-opacity: 1;background-color: rgb(229 229 229 / var(--tw-bg-opacity))
  }

  @media (prefers-color-scheme: dark) {&[variant='muted'] {--tw-bg-opacity: 1;background-color: rgb(38 38 38 / var(--tw-bg-opacity))
    }
  }

  &[variant='muted'] {--tw-text-opacity: 1;color: rgb(23 23 23 / var(--tw-text-opacity))
  }

  @media (prefers-color-scheme: dark) {&[variant='muted'] {--tw-text-opacity: 1;color: rgb(245 245 245 / var(--tw-text-opacity))
    }
  }
  &[variant='warning'] {--tw-bg-opacity: 1;background-color: rgb(253 230 138 / var(--tw-bg-opacity))
  }
  @media (prefers-color-scheme: dark) {&[variant='warning'] {--tw-bg-opacity: 1;background-color: rgb(120 53 15 / var(--tw-bg-opacity))
    }
  }
  &[variant='warning'] {--tw-text-opacity: 1;color: rgb(120 53 15 / var(--tw-text-opacity))
  }
  @media (prefers-color-scheme: dark) {&[variant='warning'] {--tw-text-opacity: 1;color: rgb(254 243 199 / var(--tw-text-opacity))
    }
  }
}`]});let H=b;const Ie=(n,t)=>t.routerLink,Te=()=>({exact:!1});function Oe(n,t){if(n&1&&(a(0,"a",0)(1,"span"),c(2),r()()),n&2){let e;const o=t.$implicit;D("routerLink",o.routerLink)("routerLinkActiveOptions",(e=o.activeOptions)!==null&&e!==void 0?e:oe(3,Te)),i(2),m(o.label)}}const y=class y{constructor(){this.links=k([{label:"Bio",routerLink:"/",activeOptions:{exact:!0}},{label:"Blog",routerLink:"/blog"}])}};y.ɵfac=function(e){return new(e||y)},y.ɵcmp=g({type:y,selectors:[["jun-nav"]],inputs:{links:[1,"links"]},standalone:!0,features:[f],decls:3,vars:0,consts:[["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"]],template:function(e,o){e&1&&(a(0,"nav"),I(1,Oe,3,4,"a",0,Ie),r()),e&2&&(i(),T(o.links()))},dependencies:[te,ne],styles:[`[_nghost-%COMP%] {
  & nav {
    display: flex
  }
  & nav {
    justify-content: center
  }

  & a {
    display: flex
  }

  & a {
    align-items: center
  }

  & a {
    padding-left: 1rem;
    padding-right: 1rem
  }

  & a {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
  }

  & a {
    text-decoration-line: none
  }

  & a:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(229 229 229 / var(--tw-bg-opacity))
  }

  @media (prefers-color-scheme: dark) {
    & a:hover {
      --tw-bg-opacity: 1;
      background-color: rgb(38 38 38 / var(--tw-bg-opacity))
    }
  }

  & a {

    &.active {
      --tw-bg-opacity: 1;
      background-color: rgb(229 229 229 / var(--tw-bg-opacity))
    }

    @media (prefers-color-scheme: dark) {
      &.active {
        --tw-bg-opacity: 1;
        background-color: rgb(38 38 38 / var(--tw-bg-opacity))
      }
    }
  }
}`]});let O=y;const v=class v{};v.ɵfac=function(e){return new(e||v)},v.ɵcmp=g({type:v,selectors:[["jun-no-content"]],standalone:!0,features:[f],decls:7,vars:0,consts:[[1,"mr-6","text-neutral-300","dark:text-neutral-700"],[1,"iconoir-yoga","text-5xl"],[1,"text-2xl","mb-2","text-neutral-700","dark:text-neutral-300"],[1,"text-lg"]],template:function(e,o){e&1&&(a(0,"div",0),p(1,"i",1),r(),a(2,"div")(3,"h1",2),c(4," Nothing here yet "),r(),a(5,"p",3),c(6," It seems that there's no content. I'm probably working on some. "),r()())},styles:[`[_nghost-%COMP%] {
    display: flex;
    align-items: center;
    --tw-text-opacity: 1;
    color: rgb(115 115 115 / var(--tw-text-opacity))
}`]});let R=v;const Se=(n,t)=>t.href;function je(n,t){if(n&1&&(a(0,"a",1),p(1,"i"),r()),n&2){const e=t.$implicit;D("href",e.href,N),i(),re(e.icon)}}const x=class x{constructor(){this.links=k([{icon:"iconoir-github",href:"https://github.com/JanUnld"},{icon:"iconoir-linkedin",href:"https://www.linkedin.com/in/janunld/"}])}};x.ɵfac=function(e){return new(e||x)},x.ɵcmp=g({type:x,selectors:[["jun-socials"]],inputs:{links:[1,"links"]},standalone:!0,features:[f],decls:3,vars:0,consts:[[1,"flex","items-center","text-2xl"],["target","_blank","rel","noopener noreferrer",1,"ml-2","px-2",3,"href"]],template:function(e,o){e&1&&(a(0,"div",0),I(1,je,2,4,"a",1,Se),r()),e&2&&(i(),T(o.links()))},encapsulation:2});let S=x;function Ee(n,t){n&1&&(a(0,"div",0)(1,"div",4),p(2,"i",5),a(3,"span",6),c(4," Running in development mode "),r()()())}const w=class w{constructor(){this.isDevMode=ae()}};w.ɵfac=function(e){return new(e||w)},w.ɵcmp=g({type:w,selectors:[["jun-root"]],standalone:!0,features:[f],decls:13,vars:1,consts:[[1,"py-4","bg-blue-100","dark:bg-blue-950"],[1,"container"],[1,"text-red-500"],["href","https://analogjs.org/","target","_blank"],[1,"container","flex","items-center","text-sm"],[1,"text-lg","iconoir-info-circle","text-blue-800","dark:text-blue-200"],[1,"ml-2","text-blue-600","dark:text-blue-400"]],template:function(e,o){e&1&&(M(0,Ee,5,0,"div",0),a(1,"header",1),p(2,"jun-nav"),r(),p(3,"router-outlet"),a(4,"footer",1)(5,"div"),c(6," made with "),a(7,"span",2),c(8,"♥"),r(),c(9," and "),a(10,"a",3),c(11,"analog"),r()(),p(12,"jun-socials"),r()),e&2&&u(o.isDevMode?0:-1)},dependencies:[ie,O,S],styles:[`[_nghost-%COMP%] {
  & header.container {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem
  }
  & header.container {
    margin-left: auto;
    margin-right: auto
  }
  & header.container {
    display: block
  }
  & header.container {
    border-bottom-width: 4px
  }
  & header.container {
    --tw-border-opacity: 1;
    border-color: rgb(229 229 229 / var(--tw-border-opacity))
  }
  @media (prefers-color-scheme: dark) {
    & header.container {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38 / var(--tw-border-opacity))
    }
  }
  & footer.container {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem
  }
  & footer.container {
    margin-left: auto;
    margin-right: auto
  }
  & footer.container {
    display: flex
  }
  & footer.container {
    align-items: center
  }
  & footer.container {
    justify-content: space-between
  }
  & footer.container {
    padding-top: 1rem;
    padding-bottom: 1rem
  }
  & footer.container {
    font-size: 0.75rem;
    line-height: 1rem
  }
  & footer.container {
    --tw-text-opacity: 1;
    color: rgb(115 115 115 / var(--tw-text-opacity))
  }
  & footer.container {
    border-top-width: 4px
  }
  & footer.container {
    --tw-border-opacity: 1;
    border-color: rgb(229 229 229 / var(--tw-border-opacity))
  }
  @media (prefers-color-scheme: dark) {
    & footer.container {
      --tw-border-opacity: 1;
      border-color: rgb(38 38 38 / var(--tw-border-opacity))
    }
  }
}`]});let j=w;const Pe={providers:[se({eventCoalescing:!0}),ce(),le(),pe(de(),fe()),me(ge(),ue([he]))]};_e(j,Pe).catch(n=>console.error(n));export{$ as E,R as N,H as T};
