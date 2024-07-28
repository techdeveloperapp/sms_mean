(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[52],{1370:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(643),i=a(123),l=a(27),s=a(614),d=a(10);const r=[{id:"date",name:"Date"},{id:"category",name:"Category"},{id:"type",name:"Type"},{id:"description",name:"Description"},{id:"amount",name:"Amount (".concat(Object(s.b)(),")")},{id:"paymentMethod",name:"Payment Type"}];t.default=function(){const[e,t]=Object(n.useState)([]);return Object(n.useEffect)((()=>{l.a.get("/transactions").then((e=>{let a=e.data.map((e=>({...e,description:Object(s.i)(e.description,50)})));t(a)}))}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{className:"",children:"Transactions"}),Object(d.jsxs)("div",{className:"float-right mb-4",children:[Object(d.jsx)(i.b,{className:"btn blue__btn mr-4",to:"/finance/transactions/income",children:"Record An Income"}),Object(d.jsx)(i.b,{className:"btn btn-danger",to:"/finance/transactions/expenditure",children:"Make a Payment"})]}),Object(d.jsx)("div",{className:"mt-5",children:Object(d.jsx)(c.a,{handleEdit:e=>{},handleDelete:a=>{l.a.delete("/transactions/delete/".concat(a)).then((n=>{n.data.error&&Object(s.c)(n.data.error),t(e.filter((e=>e._id!==a)))}))},isEdit:!0,data:e,tableHeader:r})})]})}},621:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(0)),l=(0,n(a(610)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=l},629:function(e,t,a){"use strict";a(0);var n=a(457),c=a(160),i=a(1304),l=a(626),s=a.n(l),d=a(628),r=a.n(d),o=a(627),j=a.n(o),b=a(625),h=a.n(b),u=a(10);const v=Object(n.a)((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));t.a=function(e){const t=v(),a=Object(c.a)(),{count:n,page:l,rowsPerPage:d,onChangePage:o}=e;return Object(u.jsxs)("div",{className:t.root,children:[Object(u.jsx)(i.a,{onClick:e=>{o(e,0)},disabled:0===l,"aria-label":"first page",children:"rtl"===a.direction?Object(u.jsx)(h.a,{}):Object(u.jsx)(s.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,l-1)},disabled:0===l,"aria-label":"previous page",children:"rtl"===a.direction?Object(u.jsx)(j.a,{}):Object(u.jsx)(r.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,l+1)},disabled:l>=Math.ceil(n/d)-1,"aria-label":"next page",children:"rtl"===a.direction?Object(u.jsx)(r.a,{}):Object(u.jsx)(j.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,Math.max(0,Math.ceil(n/d)-1))},disabled:l>=Math.ceil(n/d)-1,"aria-label":"last page",children:"rtl"===a.direction?Object(u.jsx)(s.a,{}):Object(u.jsx)(h.a,{})})]})}},630:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(0)),l=(0,n(a(610)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=l},638:function(e,t,a){"use strict";var n=a(609),c=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=c(a(0)),l=(0,n(a(610)).default)(i.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.default=l},643:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(0),c=a.n(n),i=a(457),l=a(941),s=a(942),d=a(937),r=a(939),o=a(940),j=a(686),b=a(1411),h=a(938),u=a(816),v=a(1304),O=a(621),x=a.n(O),m=a(630),p=a.n(m),g=a(629),f=a(617),M=a.n(f),P=a(792),y=a(638),w=a.n(y),C=a(10);const N=Object(i.a)({table:{width:"100%"}});function _(e){var t;let{data:a,tableHeader:n,handleEdit:i,handleDelete:O,loading:m,isCanteen:f,isEdit:y,isItems:_,noActions:z,noData:k}=e;const E=N(),[D,H]=c.a.useState(0),[S,A]=c.a.useState(5),I=S-Math.min(S,(null===a||void 0===a?void 0:a.length)-D*S);return Object(C.jsx)(o.a,{component:u.a,children:Object(C.jsxs)(l.a,{className:E.table,"aria-label":"custom pagination table",children:[Object(C.jsx)(d.a,{children:Object(C.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((e=>Object(C.jsx)(r.a,{children:e.name},e.id)))),!z&&Object(C.jsx)(r.a,{children:"Actions"})]})}),m?Object(C.jsx)(s.a,{className:"text-center my-5 w-100",children:Object(C.jsx)(h.a,{children:Object(C.jsx)(r.a,{colSpan:n.lenght,children:Object(C.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(C.jsxs)(s.a,{children:[(null===a||void 0===a?void 0:a.length)<=0?Object(C.jsx)(h.a,{children:Object(C.jsx)(r.a,{colSpan:n.length+1,className:"text-center text-danger",children:k||"No data"})}):Object(C.jsx)(C.Fragment,{children:null===(t=S>0?null===a||void 0===a?void 0:a.slice(D*S,D*S+S):a)||void 0===t?void 0:t.map((e=>Object(C.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((t=>{var a,n;return Object(C.jsx)(r.a,{align:"left",children:(n=e[null===t||void 0===t?void 0:t.id],new RegExp("^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$").test(n)?null===(a=M()(e[null===t||void 0===t?void 0:t.id]))||void 0===a?void 0:a.format("D MMMM YYYY"):e[null===t||void 0===t?void 0:t.id]||"-")},null===t||void 0===t?void 0:t.id)}))),!z&&Object(C.jsx)(r.a,{align:"left",children:Object(C.jsxs)("div",{className:"d-flex align-items-center",children:[Object(C.jsx)(P.a,{title:_?"Manage Inventory":"delete",children:Object(C.jsx)(v.a,{onClick:()=>O(f?e.memberID:e._id),children:_?Object(C.jsx)(w.a,{}):Object(C.jsx)(p.a,{})})}),!y&&Object(C.jsx)(P.a,{title:"edit",children:Object(C.jsx)(v.a,{onClick:()=>i(f?e.memberID:e._id),children:Object(C.jsx)(x.a,{})})})]})})]},e._id)))}),I>0&&Object(C.jsx)(h.a,{style:{height:53},children:Object(C.jsx)(r.a,{colSpan:6})})]}),Object(C.jsx)(j.a,{children:Object(C.jsx)(h.a,{children:(null===a||void 0===a?void 0:a.length)>5&&Object(C.jsx)(b.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===a||void 0===a?void 0:a.length,rowsPerPage:S,page:D,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,t)=>{H(t)},onChangeRowsPerPage:e=>{A(parseInt(e.target.value,10)),H(0)},ActionsComponent:g.a})})})]})})}}}]);
//# sourceMappingURL=52.f6f0df54.chunk.js.map