(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[48],{1375:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(643),l=a(27),i=a(16),s=a(963),d=a(614),r=a(10);t.default=function(){const[e,t]=Object(n.useState)([]),[a,o]=Object(n.useState)(!1),j=Object(i.g)();return Object(n.useEffect)((()=>{l.a.get("/canteen").then((e=>{t(e.data)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"mb-5",children:Object(r.jsx)(s.a,{})}),Object(r.jsx)("h3",{className:"mb-3",children:"Canteen Members"}),Object(r.jsx)(c.a,{data:e,isCanteen:!0,tableHeader:[{id:"memberID",name:" Member ID"},{id:"userID",name:"School ID"},{id:"name",name:"Name"},{id:"role",name:"Type"},{id:"paymentMethod",name:"Payment Method"}],handleEdit:e=>{j.push("/canteen/members/edit/".concat(e))},handleDelete:a=>{window.confirm("Are you sure you want to delete")&&(o(!0),l.a.delete("/canteen/delete/".concat(a)).then((()=>{o(!1),t(e.filter((e=>e.memberID!==a)))})).catch((e=>{console.log(e),Object(d.c)("something went wrong"),o(!1)})))},loading:a})]})}},621:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(0)),i=(0,n(a(610)).default)(l.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=i},629:function(e,t,a){"use strict";a(0);var n=a(457),c=a(160),l=a(1304),i=a(626),s=a.n(i),d=a(628),r=a.n(d),o=a(627),j=a.n(o),b=a(625),h=a.n(b),m=a(10);const u=Object(n.a)((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));t.a=function(e){const t=u(),a=Object(c.a)(),{count:n,page:i,rowsPerPage:d,onChangePage:o}=e;return Object(m.jsxs)("div",{className:t.root,children:[Object(m.jsx)(l.a,{onClick:e=>{o(e,0)},disabled:0===i,"aria-label":"first page",children:"rtl"===a.direction?Object(m.jsx)(h.a,{}):Object(m.jsx)(s.a,{})}),Object(m.jsx)(l.a,{onClick:e=>{o(e,i-1)},disabled:0===i,"aria-label":"previous page",children:"rtl"===a.direction?Object(m.jsx)(j.a,{}):Object(m.jsx)(r.a,{})}),Object(m.jsx)(l.a,{onClick:e=>{o(e,i+1)},disabled:i>=Math.ceil(n/d)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(m.jsx)(r.a,{}):Object(m.jsx)(j.a,{})}),Object(m.jsx)(l.a,{onClick:e=>{o(e,Math.max(0,Math.ceil(n/d)-1))},disabled:i>=Math.ceil(n/d)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(m.jsx)(s.a,{}):Object(m.jsx)(h.a,{})})]})}},630:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(0)),i=(0,n(a(610)).default)(l.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=i},638:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(a(0)),i=(0,n(a(610)).default)(l.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.default=i},643:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var n=a(0),c=a.n(n),l=a(457),i=a(941),s=a(942),d=a(937),r=a(939),o=a(940),j=a(686),b=a(1411),h=a(938),m=a(816),u=a(1304),v=a(621),O=a.n(v),x=a(630),f=a.n(x),p=a(629),g=a(617),M=a.n(g),y=a(792),P=a(638),w=a.n(P),N=a(10);const S=Object(l.a)({table:{width:"100%"}});function C(e){var t;let{data:a,tableHeader:n,handleEdit:l,handleDelete:v,loading:x,isCanteen:g,isEdit:P,isItems:C,noActions:D,noData:z}=e;const k=S(),[I,E]=c.a.useState(0),[_,A]=c.a.useState(5),H=_-Math.min(_,(null===a||void 0===a?void 0:a.length)-I*_);return Object(N.jsx)(o.a,{component:m.a,children:Object(N.jsxs)(i.a,{className:k.table,"aria-label":"custom pagination table",children:[Object(N.jsx)(d.a,{children:Object(N.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((e=>Object(N.jsx)(r.a,{children:e.name},e.id)))),!D&&Object(N.jsx)(r.a,{children:"Actions"})]})}),x?Object(N.jsx)(s.a,{className:"text-center my-5 w-100",children:Object(N.jsx)(h.a,{children:Object(N.jsx)(r.a,{colSpan:n.lenght,children:Object(N.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(N.jsxs)(s.a,{children:[(null===a||void 0===a?void 0:a.length)<=0?Object(N.jsx)(h.a,{children:Object(N.jsx)(r.a,{colSpan:n.length+1,className:"text-center text-danger",children:z||"No data"})}):Object(N.jsx)(N.Fragment,{children:null===(t=_>0?null===a||void 0===a?void 0:a.slice(I*_,I*_+_):a)||void 0===t?void 0:t.map((e=>Object(N.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((t=>{var a,n;return Object(N.jsx)(r.a,{align:"left",children:(n=e[null===t||void 0===t?void 0:t.id],new RegExp("^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$").test(n)?null===(a=M()(e[null===t||void 0===t?void 0:t.id]))||void 0===a?void 0:a.format("D MMMM YYYY"):e[null===t||void 0===t?void 0:t.id]||"-")},null===t||void 0===t?void 0:t.id)}))),!D&&Object(N.jsx)(r.a,{align:"left",children:Object(N.jsxs)("div",{className:"d-flex align-items-center",children:[Object(N.jsx)(y.a,{title:C?"Manage Inventory":"delete",children:Object(N.jsx)(u.a,{onClick:()=>v(g?e.memberID:e._id),children:C?Object(N.jsx)(w.a,{}):Object(N.jsx)(f.a,{})})}),!P&&Object(N.jsx)(y.a,{title:"edit",children:Object(N.jsx)(u.a,{onClick:()=>l(g?e.memberID:e._id),children:Object(N.jsx)(O.a,{})})})]})})]},e._id)))}),H>0&&Object(N.jsx)(h.a,{style:{height:53},children:Object(N.jsx)(r.a,{colSpan:6})})]}),Object(N.jsx)(j.a,{children:Object(N.jsx)(h.a,{children:(null===a||void 0===a?void 0:a.length)>5&&Object(N.jsx)(b.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===a||void 0===a?void 0:a.length,rowsPerPage:_,page:I,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,t)=>{E(t)},onChangeRowsPerPage:e=>{A(parseInt(e.target.value,10)),E(0)},ActionsComponent:p.a})})})]})})}},963:function(e,t,a){"use strict";a(0);var n=a(123),c=a(10);t.a=function(){return Object(c.jsxs)("div",{className:"d-flex xs-flex-column sm-flex-row justify-content-end",children:[Object(c.jsx)(n.c,{activeStyle:{color:"#ffa201"},className:"btn",to:"/canteen/members/register",children:"Add  Canteen Member "}),Object(c.jsx)(n.c,{activeStyle:{color:"#ffa201"},className:"btn",to:"/canteen/members",children:"All Members"}),Object(c.jsx)(n.c,{activeStyle:{color:"#ffa201"},className:"btn",to:"/canteen/payments/plan",children:"Payments Plan"}),Object(c.jsx)(n.c,{activeStyle:{color:"#ffa201"},className:"btn",to:"/canteen/payments/add",children:"Make Payment"}),Object(c.jsx)(n.c,{activeStyle:{color:"#ffa201"},className:"btn",to:"/canteen/payments",children:"All Payments"})]})}}}]);
//# sourceMappingURL=48.b583add8.chunk.js.map