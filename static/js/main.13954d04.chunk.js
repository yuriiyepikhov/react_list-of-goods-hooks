(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{10:function(t,e,s){},12:function(t,e,s){"use strict";s.r(e);var n=s(4),c=s.n(n),o=s(1),a=s(2),l=s.n(a),i=(s(9),s(10),s(0));const r=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var u=function(t){return t.default="default",t.alphabet="alphabet",t.length="length",t}(u||{});const b=u.default,h=u.alphabet,d=u.length;const j=()=>{const[t,e]=Object(o.useState)(b),[s,n]=Object(o.useState)(!1),c=function(t,e){let{sortField:s,reverseStatus:n}=e;const c=[...t];switch(s){case h:c.sort(((t,e)=>t.localeCompare(e)));break;case d:c.sort(((t,e)=>t.length-e.length))}return n&&c.reverse(),c}(r,{sortField:t,reverseStatus:s});return Object(i.jsxs)("div",{className:"section content",children:[Object(i.jsxs)("div",{className:"buttons",children:[Object(i.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":t!==h}),onClick:()=>e(h),children:"Sort alphabetically"}),Object(i.jsx)("button",{type:"button",className:l()("button","is-success",{"is-light":t!==d}),onClick:()=>e(d),children:"Sort by length"}),Object(i.jsx)("button",{type:"button",className:l()("button","is-warning",{"is-light":!1===s}),onClick:()=>{n(!1===s)},children:"Reverse"}),(t!==b||!0===s)&&Object(i.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:()=>{e(b),n(!1)},children:"Reset"})]}),Object(i.jsx)("ul",{children:c.map((t=>Object(i.jsx)("li",{"data-cy":"Good",children:t},t)))})]})};c.a.render(Object(i.jsx)(j,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.13954d04.chunk.js.map