import{k as E,l as N,f as O,m as y}from"../chunks/pages.DhWHf17a.js";import{e as H}from"../chunks/index.WSG0M6Ao.js";import{s as D,e as M,b as h,f as T,g as q,c as w,d as $,l as u,m as A,t as P,j as S,o as z,h as I}from"../chunks/scheduler.ZZPKKsPO.js";import{S as j,i as C,c as d,a as p,m as g,t as l,g as L,b as m,e as F,d as _}from"../chunks/index.DaiLRgRD.js";import{A as B,C as G,P as J}from"../chunks/PreviousNextPage.CaCF5lV2.js";import{A as K}from"../chunks/ArgsList.6gwRZqD2.js";const Q=E(),R=({params:o,url:t})=>{const n=N(o.directive),r=O(t.pathname);if(!n||!r)throw H(404,`Directive ${o.directive} not found.`);return{directive:n,page:r}},ie=Object.freeze(Object.defineProperty({__proto__:null,load:R,prerender:Q},Symbol.toStringTag,{value:"Module"}));function U(o){let t=o[0].name+"",n;return{c(){n=P(t)},l(r){n=S(r,t)},m(r,i){u(r,n,i)},p(r,i){i&1&&t!==(t=r[0].name+"")&&z(n,t)},d(r){r&&$(n)}}}function k(o){let t,n,r,i;return t=new B({props:{id:"arguments",depth:2,$$slots:{default:[V]},$$scope:{ctx:o}}}),r=new K({props:{data:o[1]}}),{c(){d(t.$$.fragment),n=h(),d(r.$$.fragment)},l(a){p(t.$$.fragment,a),n=w(a),p(r.$$.fragment,a)},m(a,c){g(t,a,c),u(a,n,c),g(r,a,c),i=!0},p(a,c){const e={};c&4&&(e.$$scope={dirty:c,ctx:a}),t.$set(e);const s={};c&2&&(s.data=a[1]),r.$set(s)},i(a){i||(l(t.$$.fragment,a),l(r.$$.fragment,a),i=!0)},o(a){m(t.$$.fragment,a),m(r.$$.fragment,a),i=!1},d(a){a&&$(n),_(t,a),_(r,a)}}}function V(o){let t;return{c(){t=P("Arguments")},l(n){t=S(n,"Arguments")},m(n,r){u(n,t,r)},d(n){n&&$(t)}}}function W(o){let t,n,r,i,a,c;n=new B({props:{id:"title",depth:1,$$slots:{default:[U]},$$scope:{ctx:o}}}),i=new G({props:{source:o[0].description}});let e=o[1].length>0&&k(o);return{c(){t=M("section"),d(n.$$.fragment),r=h(),d(i.$$.fragment),a=h(),e&&e.c()},l(s){t=T(s,"SECTION",{});var f=q(t);p(n.$$.fragment,f),r=w(f),p(i.$$.fragment,f),a=w(f),e&&e.l(f),f.forEach($)},m(s,f){u(s,t,f),g(n,t,null),A(t,r),g(i,t,null),A(t,a),e&&e.m(t,null),c=!0},p(s,[f]){const v={};f&5&&(v.$$scope={dirty:f,ctx:s}),n.$set(v);const b={};f&1&&(b.source=s[0].description),i.$set(b),s[1].length>0?e?(e.p(s,f),f&2&&l(e,1)):(e=k(s),e.c(),l(e,1),e.m(t,null)):e&&(L(),m(e,1,1,()=>{e=null}),F())},i(s){c||(l(n.$$.fragment,s),l(i.$$.fragment,s),l(e),c=!0)},o(s){m(n.$$.fragment,s),m(i.$$.fragment,s),m(e),c=!1},d(s){s&&$(t),_(n),_(i),e&&e.d()}}}function X(o,t,n){let{directive:r}=t,i;return o.$$set=a=>{"directive"in a&&n(0,r=a.directive)},o.$$.update=()=>{o.$$.dirty&1&&n(1,i=y(r))},[r,i]}class Y extends j{constructor(t){super(),C(this,t,X,W,D,{directive:0})}}function Z(o){let t,n,r,i,a,c;return document.title=t="Directive - "+o[0].directive.name,r=new Y({props:{directive:o[0].directive}}),a=new J({props:{page:o[0].page}}),{c(){n=h(),d(r.$$.fragment),i=h(),d(a.$$.fragment)},l(e){I("svelte-fycjkl",document.head).forEach($),n=w(e),p(r.$$.fragment,e),i=w(e),p(a.$$.fragment,e)},m(e,s){u(e,n,s),g(r,e,s),u(e,i,s),g(a,e,s),c=!0},p(e,[s]){(!c||s&1)&&t!==(t="Directive - "+e[0].directive.name)&&(document.title=t);const f={};s&1&&(f.directive=e[0].directive),r.$set(f);const v={};s&1&&(v.page=e[0].page),a.$set(v)},i(e){c||(l(r.$$.fragment,e),l(a.$$.fragment,e),c=!0)},o(e){m(r.$$.fragment,e),m(a.$$.fragment,e),c=!1},d(e){e&&($(n),$(i)),_(r,e),_(a,e)}}}function x(o,t,n){let{data:r}=t;return o.$$set=i=>{"data"in i&&n(0,r=i.data)},[r]}class oe extends j{constructor(t){super(),C(this,t,x,Z,D,{data:0})}}export{oe as component,ie as universal};
