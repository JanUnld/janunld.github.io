import{U as b,ɵ as x,d as v,j as _,v as g,r,V as y,W as h,X as P,D as B,g as o,k as l,l as s,h as d,o as n,u as p,w as j,t as T,p as u,n as f,e as D,a3 as I,f as w,x as M}from"./vendor-vXb6Kv7f.js";import{T as k}from"./index-CcPlGpxm.js";function F(e,a){e&1&&(o(0,"jun-tag",3),l(1,"draft"),s())}function $(e,a){if(e&1&&d(0,"img",7),e&2){const t=f();u("src",t.attributes.coverImage,M)}}function A(e,a){if(e&1&&(o(0,"jun-tag"),l(1),s()),e&2){const t=a.$implicit;n(),p(t)}}function N(e,a){if(e&1&&(o(0,"div",9),D(1,A,2,1,"jun-tag",null,I),s()),e&2){const t=f();n(),w(t.attributes.tags)}}function O(e,a){if(e&1&&(o(0,"div",0)(1,"div")(2,"h1",1),l(3),s()(),o(4,"div",2),_(5,F,2,0,"jun-tag",3),o(6,"time",4),l(7),g(8,"date"),s()()(),o(9,"div",5)(10,"h2",6),l(11),s()(),_(12,$,1,1,"img",7),o(13,"div",5),d(14,"analog-markdown",8),_(15,N,3,0,"div",9),s()),e&2){const t=a;n(3),p(t.attributes.title),n(2),r(t.attributes.draft?5:-1),n(2),p(j(8,7,t.attributes.date,"mediumDate")),n(4),T(" ",t.attributes.description," "),n(),r(t.attributes.coverImage?12:-1),n(2),u("content",t.content),n(),r(t.attributes.tags!=null&&t.attributes.tags.length?15:-1)}}const i=class i{constructor(){this.post$=b({param:"slug",subdirectory:"blog"})}};i.ɵfac=function(t){return new(t||i)},i.ɵcmp=x({type:i,selectors:[["jun-blog-post"]],standalone:!0,features:[v],decls:2,vars:3,consts:[[1,"container","flex","items-center","justify-between"],[1,"text-3xl"],[1,"flex","items-center"],["variant","warning"],[1,"text-xs","text-neutral-500","ml-2"],[1,"container"],[1,"mt-2","text-xl","font-normal","text-neutral-500"],["alt","Blog post cover image",3,"src"],[3,"content"],[1,"blog-post-tags"]],template:function(t,C){if(t&1&&(_(0,O,16,10),g(1,"async")),t&2){let c;r((c=y(1,1,C.post$))?0:-1,c)}},dependencies:[h,P,k,B],styles:[`[_nghost-%COMP%] {

    display: flex;

    flex-direction: column;

    align-items: stretch
}

.blog-post-tags[_ngcontent-%COMP%] {

    margin-top: 1.75rem;

    margin-bottom: 1.75rem
}`]});let m=i;export{m as default};
