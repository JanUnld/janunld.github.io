import{I as O,s as J,O as Q,i as m,ɵ as y,b as h,c as V,d as g,e as i,f as X,g as r,h as d,j as p,k as Z,l as A,m as N,n as I,D as W,o as c,p as q,q as u,r as s,t as F,u as ee,v as Y,w as ne,x as G,y as te,z as f,A as z,B as T,R as oe,C as re,E as ie,F as ae,G as se,H as ce,J as le,K as pe,L as de,M as ue,N as me,P as ge,Q as fe,S as ye,T as he,U as be,V as _e}from"./vendor-B4Z4Ohmn.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const D of l.addedNodes)D.tagName==="LINK"&&D.rel==="modulepreload"&&o(D)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();const ve=new O("COLOR_SCHEME",{providedIn:"root",factory:()=>{const t=J("light"),n=window.matchMedia("(prefers-color-scheme: dark)"),e=()=>t.set(n.matches?"dark":"light");return n.addEventListener("change",o=>e()),e(),t}});new O("OCTOKIT",{providedIn:"root",factory:()=>new Q});new O("GITHUB_USER");const xe=["*"];function we(t,n){t&1&&p(0,"span",0)}const b=class b{constructor(){this.variant=m("default"),this.pulse=m(!1)}};b.ɵfac=function(e){return new(e||b)},b.ɵcmp=y({type:b,selectors:[["jun-tag"]],inputs:{variant:[1,"variant"],pulse:[1,"pulse"]},standalone:!0,features:[h],ngContentSelectors:xe,decls:3,vars:1,consts:[[1,"pulse"],[1,"pill"]],template:function(e,o){e&1&&(V(),g(0,we,1,0,"span",0),i(1,"span",1),X(2),r()),e&2&&d(o.pulse()?0:-1)},styles:[`[_nghost-%COMP%] {

  position: relative;

  display: inline-block;

  .pulse {

    position: absolute
  }

  .pulse {

    display: inline-flex
  }

  .pulse {

    height: 100%
  }

  .pulse {

    width: 100%
  }

  .pulse {

    border-radius: 9999px
  }

  @keyframes ping {

    75%, 100% {

      transform: scale(2);

      opacity: 0
    }
  }

  .pulse {

    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite
  }

  .pulse {

    opacity: 0.5
  }
  .pill {

    padding-left: 0.5rem;

    padding-right: 0.5rem
  }
  .pill {

    padding-top: 0.25rem;

    padding-bottom: 0.25rem
  }
  .pill {

    overflow: hidden
  }
  .pill {

    text-overflow: ellipsis
  }
  .pill {

    white-space: nowrap
  }
  .pill {

    border-radius: 9999px
  }
  .pill {

    font-size: 0.75rem;

    line-height: 1rem
  }
  .pill {

    font-weight: 600
  }
  .pill {

    position: relative
  }
  .pill {

    display: inline-flex
  }

  .pulse, .pill {

    --tw-bg-opacity: 1;

    background-color: rgb(110 231 183 / var(--tw-bg-opacity))
  }

  @media (prefers-color-scheme: dark) {

    .pulse, .pill {

      --tw-bg-opacity: 1;

      background-color: rgb(6 78 59 / var(--tw-bg-opacity))
    }
  }

  .pulse, .pill {

    --tw-text-opacity: 1;

    color: rgb(6 78 59 / var(--tw-text-opacity))
  }

  @media (prefers-color-scheme: dark) {

    .pulse, .pill {

      --tw-text-opacity: 1;

      color: rgb(209 250 229 / var(--tw-text-opacity))
    }
  }

  &:not(:last-child) {

    margin-right: 0.25rem
  }

  &[variant='muted'] {
    .pulse, .pill {

      --tw-bg-opacity: 1;

      background-color: rgb(229 229 229 / var(--tw-bg-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-bg-opacity: 1;

        background-color: rgb(38 38 38 / var(--tw-bg-opacity))
      }
    }
    .pulse, .pill {

      --tw-text-opacity: 1;

      color: rgb(23 23 23 / var(--tw-text-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-text-opacity: 1;

        color: rgb(245 245 245 / var(--tw-text-opacity))
      }
    }
  }
  &[variant='warning'] {
    .pulse, .pill {

      --tw-bg-opacity: 1;

      background-color: rgb(253 230 138 / var(--tw-bg-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-bg-opacity: 1;

        background-color: rgb(120 53 15 / var(--tw-bg-opacity))
      }
    }
    .pulse, .pill {

      --tw-text-opacity: 1;

      color: rgb(120 53 15 / var(--tw-text-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-text-opacity: 1;

        color: rgb(254 243 199 / var(--tw-text-opacity))
      }
    }
  }
  &[variant='error'] {
    .pulse, .pill {

      --tw-bg-opacity: 1;

      background-color: rgb(254 202 202 / var(--tw-bg-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-bg-opacity: 1;

        background-color: rgb(127 29 29 / var(--tw-bg-opacity))
      }
    }
    .pulse, .pill {

      --tw-text-opacity: 1;

      color: rgb(127 29 29 / var(--tw-text-opacity))
    }
    @media (prefers-color-scheme: dark) {

      .pulse, .pill {

        --tw-text-opacity: 1;

        color: rgb(254 226 226 / var(--tw-text-opacity))
      }
    }
  }
}`]});let E=b;const ke=[{id:"cgi",displayName:"CGI",website:"https://www.cgi.com/",logoSrc:{auto:"/img/cgi.svg",dark:"/img/cgi.svg"},hideDisplayName:!0,type:"Inc."},{id:"nt",displayName:"Novatec Consulting",website:"https://www.novatec-gmbh.de/",logoSrc:{auto:"/img/novatec.svg",dark:"/img/novatec-dark.svg"},hideDisplayName:!0,acquiredBy:"cgi",type:"GmbH"},{id:"vg",displayName:"vitagroup",website:"https://www.vitagroup.ag/",logoSrc:{auto:"/img/vitagroup.svg",dark:"/img/vitagroup-dark.svg"},hideDisplayName:!0,type:"AG"},{id:"mgs",displayName:"mg.softech",website:"https://www.mgsoftech.de/",logoSrc:{auto:"/img/mgsoftech.svg",dark:"/img/mgsoftech-dark.svg"},type:"GmbH"}],Ce=[{title:"Senior Consultant",startDate:"2025-06-01",companyId:"cgi"},{title:"Senior Software Engineer",startDate:"2024-01-01",endDate:"2025-06-01",companyId:"nt"},{title:"Software Engineer",startDate:"2023-07-01",endDate:"2024-01-01",companyId:"nt"},{title:"Frontend Engineer",startDate:"2019-01-01",endDate:"2023-07-01",companyId:"vg"},{title:"Software Developer",startDate:"2017-06-01",endDate:"2018-12-31",companyId:"mgs"},{title:"Software Developer",startDate:"2015-06-01",endDate:"2017-06-01",companyId:"mgs",description:"apprenticeship"}];function De(t,n){if(t&1&&(i(0,"div",4),c(1),r()),t&2){const e=u().$implicit;s(),Y(" ",e.company.displayName," ")}}function Fe(t,n){t&1&&(i(0,"jun-tag",6),c(1," active "),r()),t&2&&F("pulse",!0)}function Me(t,n){if(t&1&&(i(0,"span"),c(1),G(2,"date"),r()),t&2){const e=u().$implicit,o=u(2);s(),f(z(2,1,e.endDate,o.dateFormat()))}}function Ne(t,n){t&1&&(i(0,"span"),c(1,"now"),r())}function Ie(t,n){if(t&1&&(i(0,"span",17),c(1),r()),t&2){const e=u();s(),f(e.years?e.years+"y":"")}}function Te(t,n){if(t&1&&(i(0,"span"),c(1),r()),t&2){const e=u();s(),f(e.months?e.months+"m":"")}}function Ee(t,n){if(t&1&&(i(0,"div",16),g(1,Ie,2,1,"span",17)(2,Te,2,1,"span"),r()),t&2){const e=n;s(),d(e.years?1:-1),s(),d(e.months?2:-1)}}function Se(t,n){if(t&1&&(i(0,"div",16)(1,"span",15),c(2," · "),r(),i(3,"span"),c(4),r()()),t&2){const e=u().$implicit;s(4),f(e.description)}}function je(t,n){if(t&1&&(i(0,"div",7)(1,"div",8),p(2,"div",9)(3,"div",10),ne(4),p(5,"div",11),r(),i(6,"div",12)(7,"div"),c(8),r(),i(9,"div",13)(10,"span"),c(11),G(12,"date"),r(),i(13,"span",14),c(14,"‐"),r(),g(15,Me,3,4,"span")(16,Ne,2,0,"span"),i(17,"span",15),c(18," · "),r()(),g(19,Ee,3,2,"div",16)(20,Se,5,1,"div",16),r()()),t&2){let e;const o=n.$implicit,a=u(2),l=a.didAcquireCompany(o.companyId);s(5),te("-mb-5",l)("border-dashed",l)("group-last:border-transparent",!l),s(3),f(o.title),s(3),f(z(12,11,o.startDate,a.dateFormat())),s(4),d(o.endDate?15:16),s(4),d((e=a.getDurationFromExperience(o))?19:-1,e),s(),d(o.description?20:-1)}}function Le(t,n){if(t&1&&(i(0,"div",0)(1,"div",1)(2,"a",2),p(3,"img",3),g(4,De,2,1,"div",4),i(5,"span",5),c(6),r()(),g(7,Fe,2,1,"jun-tag",6),r(),N(8,je,21,14,"div",7,q),r()),t&2){const e=n.$implicit,o=u();s(2),F("href",e.company.website,T),s(),ee("alt","",e.company.displayName," logo image"),F("src",o.isDarkMode()?e.company.logoSrc.dark:e.company.logoSrc.auto,T),s(),d(e.company.hideDisplayName?-1:4),s(2),Y(" ",e.company.type," "),s(),d(o.isActiveCompany(e.positions)?7:-1),s(),I(e.positions)}}const _=class _{constructor(){this.colorScheme=Z(ve),this.companies=m(ke),this.experience=m(Ce),this.experienceByCompany=A(()=>this.companies().map(n=>({company:n,positions:this.experience().filter(e=>e.companyId===n.id)}))),this.dateFormat=m("MMMM yyyy"),this.isDarkMode=A(()=>this.colorScheme()==="dark")}getDurationFromExperience({startDate:n,endDate:e}){const o=new Date(n),a=e?new Date(e):new Date,l=a.getFullYear()===o.getFullYear(),D=11-o.getMonth(),H=a.getMonth(),P=Math.max(a.getFullYear()-o.getFullYear()-1,0)*11;let M=0;P>0||!l?M=D+P+H:M=l?1:H;const U=Math.floor(M/11),K=M%11;return{years:U,months:K}}didAcquireCompany(n){return this.companies().some(e=>e.acquiredBy===n)}isActiveCompany(n){return n.some(e=>!e.endDate)}};_.ɵfac=function(e){return new(e||_)},_.ɵcmp=y({type:_,selectors:[["jun-experience"]],inputs:{companies:[1,"companies"],experience:[1,"experience"],dateFormat:[1,"dateFormat"]},standalone:!0,features:[h],decls:2,vars:0,consts:[[1,"mb-8","first:mt-8"],[1,"flex","items-center","justify-between","mb-2"],["target","_blank","rel","noopener noreferrer",1,"flex","items-center","select-none","no-style",3,"href"],[1,"h-7",3,"src","alt"],[1,"ml-2","no-underline"],[1,"ml-2.5","px-2","py-0.5","text-xs","text-neutral-400","dark:text-neutral-600","border-2","border-neutral-200","dark:border-neutral-800","rounded-full"],[1,"ml-4","text-sm","flex","items-center","decoration-1","max-sm:hidden","cursor-default",3,"pulse"],[1,"group","flex","items-center"],[1,"flex","flex-col","ml-3","mr-4","self-stretch"],[1,"h-7","border-l-2","border-neutral-300","dark:border-neutral-700"],[1,"h-1.5","w-1.5","rounded","my-2","-ml-0.5","bg-neutral-600","dark:bg-neutral-400"],[1,"grow","border-l-2","border-neutral-300","dark:border-neutral-700"],[1,"my-3"],[1,"inline-block","mt-1","text-xs","text-neutral-500"],[1,"mx-1"],[1,"mx-2","text-neutral-400","dark:text-neutral-600"],[1,"inline-block","text-xs","text-neutral-400","dark:text-neutral-600"],[1,"first:mr-1"]],template:function(e,o){e&1&&N(0,Le,10,7,"div",0,q),e&2&&I(o.experienceByCompany())},dependencies:[W,E],encapsulation:2});let B=_;const v=class v{};v.ɵfac=function(e){return new(e||v)},v.ɵcmp=y({type:v,selectors:[["jun-header"]],standalone:!0,features:[h],decls:1,vars:0,template:function(e,o){e&1&&p(0,"header")},encapsulation:2});let R=v;const Oe=(t,n)=>n.routerLink,He=()=>({exact:!1});function Pe(t,n){if(t&1&&(i(0,"a",0)(1,"span"),c(2),r()()),t&2){let e;const o=n.$implicit;F("routerLink",o.routerLink)("routerLinkActiveOptions",(e=o.activeOptions)!==null&&e!==void 0?e:ie(3,He)),s(2),f(o.label)}}const x=class x{constructor(){this.links=m([{label:"Bio",routerLink:"/",activeOptions:{exact:!0}},{label:"Blog",routerLink:"/blog"}])}};x.ɵfac=function(e){return new(e||x)},x.ɵcmp=y({type:x,selectors:[["jun-nav"]],inputs:{links:[1,"links"]},standalone:!0,features:[h],decls:3,vars:0,consts:[["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions"]],template:function(e,o){e&1&&(i(0,"nav"),N(1,Pe,3,4,"a",0,Oe),r()),e&2&&(s(),I(o.links()))},dependencies:[oe,re],styles:[`[_nghost-%COMP%] {
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
}`]});let S=x;const w=class w{};w.ɵfac=function(e){return new(e||w)},w.ɵcmp=y({type:w,selectors:[["jun-no-content"]],standalone:!0,features:[h],decls:7,vars:0,consts:[[1,"mr-6","text-neutral-300","dark:text-neutral-700"],[1,"iconoir-yoga","text-5xl"],[1,"text-2xl","mb-2","text-neutral-700","dark:text-neutral-300"],[1,"text-lg"]],template:function(e,o){e&1&&(i(0,"div",0),p(1,"i",1),r(),i(2,"div")(3,"h1",2),c(4," Nothing here yet "),r(),i(5,"p",3),c(6," It seems that there's no content. I'm probably working on some. "),r()())},styles:[`[_nghost-%COMP%] {
    display: flex;
    align-items: center;
    --tw-text-opacity: 1;
    color: rgb(115 115 115 / var(--tw-text-opacity))
}`]});let $=w;const Ae=(t,n)=>n.href;function Be(t,n){if(t&1&&(i(0,"a",1),p(1,"i"),r()),t&2){const e=n.$implicit;F("href",e.href,T),s(),ae(e.icon)}}const k=class k{constructor(){this.links=m([{icon:"iconoir-github",href:"https://github.com/JanUnld"},{icon:"iconoir-linkedin",href:"https://www.linkedin.com/in/janunld/"}])}};k.ɵfac=function(e){return new(e||k)},k.ɵcmp=y({type:k,selectors:[["jun-social-links"]],inputs:{links:[1,"links"]},standalone:!0,features:[h],decls:3,vars:0,consts:[[1,"flex","items-center","text-2xl"],["target","_blank","rel","noopener noreferrer",1,"ml-2","px-2",3,"href"]],template:function(e,o){e&1&&(i(0,"div",0),N(1,Be,2,4,"a",1,Ae),r()),e&2&&(s(),I(o.links()))},encapsulation:2});let j=k;function Re(t,n){t&1&&(i(0,"div",0)(1,"div",4),p(2,"i",5),i(3,"span",6),c(4," Running in development mode "),r()()())}const C=class C{constructor(){this.isDevMode=se()}};C.ɵfac=function(e){return new(e||C)},C.ɵcmp=y({type:C,selectors:[["jun-root"]],standalone:!0,features:[h],decls:13,vars:1,consts:[[1,"py-4","bg-blue-100","dark:bg-blue-950"],[1,"container"],[1,"text-red-500"],["href","https://analogjs.org/","target","_blank"],[1,"container","flex","items-center","text-sm"],[1,"text-lg","iconoir-info-circle","text-blue-800","dark:text-blue-200"],[1,"ml-2","text-blue-600","dark:text-blue-400"]],template:function(e,o){e&1&&(g(0,Re,5,0,"div",0),i(1,"header",1),p(2,"jun-nav"),r(),p(3,"router-outlet"),i(4,"footer",1)(5,"div"),c(6," made with "),i(7,"span",2),c(8,"♥"),r(),c(9," and "),i(10,"a",3),c(11,"analog"),r()(),p(12,"jun-social-links"),r()),e&2&&d(o.isDevMode?0:-1)},dependencies:[ce,S,j],styles:[`[_nghost-%COMP%] {
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
}`]});let L=C;const $e={providers:[le({eventCoalescing:!0}),pe(),de(),ue(me(),he()),ge(ye(),fe([be]))]};_e(L,$e).catch(t=>console.error(t));export{B as E,$ as N,E as T};
