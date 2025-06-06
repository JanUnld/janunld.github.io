import{W as f,ɵ as x,b as C,d as _,x as m,h as r,X as b,Y as v,Z as y,D as h,e as a,o as l,g as s,j as P,r as n,z as u,v as c,A as j,t as B,m as T,a5 as D,q as w,n as I}from"./vendor-B4Z4Ohmn.js";import{T as M}from"./index-BtbzzaLC.js";function k(e,o){e&1&&(a(0,"jun-tag",3),l(1,"draft"),s())}function A(e,o){if(e&1&&(a(0,"jun-tag"),l(1),s()),e&2){const t=o.$implicit;n(),u(t)}}function F(e,o){if(e&1&&(a(0,"div",8),T(1,A,2,1,"jun-tag",null,D),s()),e&2){const t=w();n(),I(t.attributes.tags)}}function $(e,o){if(e&1&&(a(0,"div",0)(1,"div")(2,"h1",1),l(3),s()(),a(4,"div",2),_(5,k,2,0,"jun-tag",3),a(6,"time",4),l(7),m(8,"date"),s()()(),a(9,"div",5)(10,"h2",6),l(11),s()(),a(12,"div",5),P(13,"analog-markdown",7),_(14,F,3,0,"div",8),s()),e&2){const t=o;n(3),u(t.attributes.title),n(2),r(t.attributes.draft?5:-1),n(2),c("",j(8,6,t.attributes.date,"mediumDate")," "),n(4),c(" ",t.attributes.description," "),n(2),B("content",t.content),n(),r(t.attributes.tags!=null&&t.attributes.tags.length?14:-1)}}const i=class i{constructor(){this.post$=f({param:"slug",subdirectory:"blog"})}};i.ɵfac=function(t){return new(t||i)},i.ɵcmp=x({type:i,selectors:[["jun-blog-post"]],standalone:!0,features:[C],decls:2,vars:3,consts:[[1,"container","flex","items-center","justify-between"],[1,"text-3xl"],[1,"flex","items-center"],["variant","warning"],[1,"text-xs","text-neutral-500","ml-2"],[1,"container"],[1,"mt-2","text-xl","font-normal","text-neutral-500"],[3,"content"],[1,"blog-post-tags"]],template:function(t,g){if(t&1&&(_(0,$,15,9),m(1,"async")),t&2){let p;r((p=b(1,1,g.post$))?0:-1,p)}},dependencies:[v,y,M,h],styles:[`[_nghost-%COMP%] {

    display: flex;

    flex-direction: column;

    align-items: stretch
}

.blog-post-tags[_ngcontent-%COMP%] {

    margin-top: 1.75rem;

    margin-bottom: 1.75rem
}`]});let d=i;export{d as default};
