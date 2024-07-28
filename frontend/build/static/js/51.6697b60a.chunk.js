(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[51],{1363:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t(643),i=t(16),l=t(123),d=t(27),s=t(614),r=t(10);a.default=function(){const e=Object(i.g)(),[a,t]=Object(n.useState)(!1),[o,j]=Object(n.useState)([]);return Object(n.useEffect)((()=>{d.a.get("/banking").then((e=>{j(e.data)}))}),[]),Object(r.jsxs)("div",{className:"banking__container",children:[Object(r.jsx)("div",{className:"d-flex justify-content-end",children:Object(r.jsx)(l.b,{to:"/finance/banking/add",children:"Add New Bank"})}),Object(r.jsx)("h3",{children:"Banking Details"}),Object(r.jsx)(c.a,{data:o,handleEdit:a=>{e.push("/finance/banking/transaction/".concat(a))},handleDelete:e=>{window.confirm("are you sure you want to delete banking details")&&d.a.delete("/banking/delete/".concat(e)).then((a=>{if(a.data.error)return Object(s.c)(a.data.error),0;Object(s.m)("Deleted"),j(o.filter((a=>a._id!==e)))}))},loading:a,tableHeader:[{id:"bankName",name:"Bank"},{id:"accountName",name:"Account Name"},{id:"accountNumber",name:"Account Number"},{id:"balance",name:"Balance"}]})]})}},621:function(e,a,t){"use strict";var n=t(609),c=t(611);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(t(0)),l=(0,n(t(610)).default)(i.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");a.default=l},629:function(e,a,t){"use strict";t(0);var n=t(457),c=t(160),i=t(1304),l=t(626),d=t.n(l),s=t(628),r=t.n(s),o=t(627),j=t.n(o),b=t(625),h=t.n(b),u=t(10);const v=Object(n.a)((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));a.a=function(e){const a=v(),t=Object(c.a)(),{count:n,page:l,rowsPerPage:s,onChangePage:o}=e;return Object(u.jsxs)("div",{className:a.root,children:[Object(u.jsx)(i.a,{onClick:e=>{o(e,0)},disabled:0===l,"aria-label":"first page",children:"rtl"===t.direction?Object(u.jsx)(h.a,{}):Object(u.jsx)(d.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,l-1)},disabled:0===l,"aria-label":"previous page",children:"rtl"===t.direction?Object(u.jsx)(j.a,{}):Object(u.jsx)(r.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,l+1)},disabled:l>=Math.ceil(n/s)-1,"aria-label":"next page",children:"rtl"===t.direction?Object(u.jsx)(r.a,{}):Object(u.jsx)(j.a,{})}),Object(u.jsx)(i.a,{onClick:e=>{o(e,Math.max(0,Math.ceil(n/s)-1))},disabled:l>=Math.ceil(n/s)-1,"aria-label":"last page",children:"rtl"===t.direction?Object(u.jsx)(d.a,{}):Object(u.jsx)(h.a,{})})]})}},630:function(e,a,t){"use strict";var n=t(609),c=t(611);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(t(0)),l=(0,n(t(610)).default)(i.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");a.default=l},638:function(e,a,t){"use strict";var n=t(609),c=t(611);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=c(t(0)),l=(0,n(t(610)).default)(i.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");a.default=l},643:function(e,a,t){"use strict";t.d(a,"a",(function(){return z}));var n=t(0),c=t.n(n),i=t(457),l=t(941),d=t(942),s=t(937),r=t(939),o=t(940),j=t(686),b=t(1411),h=t(938),u=t(816),v=t(1304),O=t(621),x=t.n(O),m=t(630),g=t.n(m),p=t(629),f=t(617),k=t.n(f),M=t(792),w=t(638),N=t.n(w),P=t(10);const _=Object(i.a)({table:{width:"100%"}});function z(e){var a;let{data:t,tableHeader:n,handleEdit:i,handleDelete:O,loading:m,isCanteen:f,isEdit:w,isItems:z,noActions:C,noData:y}=e;const D=_(),[E,S]=c.a.useState(0),[H,A]=c.a.useState(5),V=H-Math.min(H,(null===t||void 0===t?void 0:t.length)-E*H);return Object(P.jsx)(o.a,{component:u.a,children:Object(P.jsxs)(l.a,{className:D.table,"aria-label":"custom pagination table",children:[Object(P.jsx)(s.a,{children:Object(P.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((e=>Object(P.jsx)(r.a,{children:e.name},e.id)))),!C&&Object(P.jsx)(r.a,{children:"Actions"})]})}),m?Object(P.jsx)(d.a,{className:"text-center my-5 w-100",children:Object(P.jsx)(h.a,{children:Object(P.jsx)(r.a,{colSpan:n.lenght,children:Object(P.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(P.jsxs)(d.a,{children:[(null===t||void 0===t?void 0:t.length)<=0?Object(P.jsx)(h.a,{children:Object(P.jsx)(r.a,{colSpan:n.length+1,className:"text-center text-danger",children:y||"No data"})}):Object(P.jsx)(P.Fragment,{children:null===(a=H>0?null===t||void 0===t?void 0:t.slice(E*H,E*H+H):t)||void 0===a?void 0:a.map((e=>Object(P.jsxs)(h.a,{children:[n&&(null===n||void 0===n?void 0:n.map((a=>{var t,n;return Object(P.jsx)(r.a,{align:"left",children:(n=e[null===a||void 0===a?void 0:a.id],new RegExp("^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$").test(n)?null===(t=k()(e[null===a||void 0===a?void 0:a.id]))||void 0===t?void 0:t.format("D MMMM YYYY"):e[null===a||void 0===a?void 0:a.id]||"-")},null===a||void 0===a?void 0:a.id)}))),!C&&Object(P.jsx)(r.a,{align:"left",children:Object(P.jsxs)("div",{className:"d-flex align-items-center",children:[Object(P.jsx)(M.a,{title:z?"Manage Inventory":"delete",children:Object(P.jsx)(v.a,{onClick:()=>O(f?e.memberID:e._id),children:z?Object(P.jsx)(N.a,{}):Object(P.jsx)(g.a,{})})}),!w&&Object(P.jsx)(M.a,{title:"edit",children:Object(P.jsx)(v.a,{onClick:()=>i(f?e.memberID:e._id),children:Object(P.jsx)(x.a,{})})})]})})]},e._id)))}),V>0&&Object(P.jsx)(h.a,{style:{height:53},children:Object(P.jsx)(r.a,{colSpan:6})})]}),Object(P.jsx)(j.a,{children:Object(P.jsx)(h.a,{children:(null===t||void 0===t?void 0:t.length)>5&&Object(P.jsx)(b.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===t||void 0===t?void 0:t.length,rowsPerPage:H,page:E,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,a)=>{S(a)},onChangeRowsPerPage:e=>{A(parseInt(e.target.value,10)),S(0)},ActionsComponent:p.a})})})]})})}}}]);
//# sourceMappingURL=51.6697b60a.chunk.js.map