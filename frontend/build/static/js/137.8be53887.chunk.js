(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[137],{1443:function(e,t,c){"use strict";c.r(t);var a=c(0),l=c(643),s=c(27),n=c(84),i=c(59),d=c(614),o=c(10);var r=function(e){let{fees:t,balance:c,totalPaid:a,totalBill:l}=e;return Object(o.jsx)("div",{className:"content__container blue_bg ",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col",children:t?Object(o.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"orange_color",scope:"col",children:"FEES"}),Object(o.jsxs)("th",{className:"orange_color",scope:"col",children:["Amount (",Object(d.b)(),")"]})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"Tution Fee"}),Object(o.jsx)("td",{children:null===t||void 0===t?void 0:t.tution})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"Facility Fee"}),Object(o.jsx)("td",{children:null===t||void 0===t?void 0:t.facility})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"Maintenance Fee"}),Object(o.jsx)("th",{children:null===t||void 0===t?void 0:t.maintenance})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"Exam Fee"}),Object(o.jsx)("th",{children:null===t||void 0===t?void 0:t.exam})]})]})]}):Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("p",{children:"No fees details yet "})})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsxs)("table",{className:"table table-sm table-borderless text-light",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"orange_color",scope:"col",children:"FEES BALANCES"}),Object(o.jsxs)("th",{className:"orange_color",scope:"col",children:["Amount (",Object(d.b)(),")"]})]})}),Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"TOTAL FEES"}),Object(o.jsx)("th",{scope:"row",children:l})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"row",children:"FEES PAID"}),Object(o.jsx)("th",{scope:"row",children:a})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"text-light",scope:"row",children:"FEES DUE"}),Object(o.jsx)("th",{className:"text-light",scope:"row",children:c})]})]})]})})]})})};const j=[{id:"date",name:"Date"},{id:"paymentMethod",name:"Payment Method"},{id:"bank",name:"Bank"},{id:"description",name:"Description"},{id:"amount",name:"Amount ".concat(Object(d.b)())}];t.default=function(){const[e,t]=Object(a.useState)(!1),[c,d]=Object(a.useState)([]),[b,h]=Object(a.useState)({}),O=Object(n.c)(i.d),[u,x]=Object(a.useState)(0),[v,m]=Object(a.useState)(0),[p,g]=Object(a.useState)(0);return Object(a.useEffect)((()=>{(async()=>{var e,c,a;t(!0);let l=await s.a.get("/transactions/student/".concat(null===O||void 0===O?void 0:O.userID));d(l.data);let n=await s.a.get("/students/student/".concat(null===O||void 0===O?void 0:O.userID));console.log(n);const i=await s.a.get("/fees/type/".concat(null===(e=n.data.student)||void 0===e?void 0:e.classID,"/").concat(null===(c=n.data.student)||void 0===c?void 0:c.status));h(i.data),console.log(i.data);const o=Object.values(i.data).reduce(((e,t)=>Number(e)+Number(t)),0),r=null===(a=l.data)||void 0===a?void 0:a.reduce(((e,t)=>Number(e)+Number(null===t||void 0===t?void 0:t.amount)),0);x(o),m(r),g(o-r),t(!1)})()}),[O]),Object(o.jsxs)("div",{children:[Object(o.jsx)(r,{fees:b,totalBill:u,totalPaid:v,balance:p}),Object(o.jsx)("h3",{className:"mb-3 mt-5",children:"Fees Transactions"}),Object(o.jsx)(l.a,{data:c,noActions:!0,tableHeader:j,loading:e})]})}},621:function(e,t,c){"use strict";var a=c(609),l=c(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(0)),n=(0,a(c(610)).default)(s.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.default=n},629:function(e,t,c){"use strict";c(0);var a=c(457),l=c(160),s=c(1304),n=c(626),i=c.n(n),d=c(628),o=c.n(d),r=c(627),j=c.n(r),b=c(625),h=c.n(b),O=c(10);const u=Object(a.a)((e=>({root:{flexShrink:0,marginLeft:e.spacing(2.5)}})));t.a=function(e){const t=u(),c=Object(l.a)(),{count:a,page:n,rowsPerPage:d,onChangePage:r}=e;return Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)(s.a,{onClick:e=>{r(e,0)},disabled:0===n,"aria-label":"first page",children:"rtl"===c.direction?Object(O.jsx)(h.a,{}):Object(O.jsx)(i.a,{})}),Object(O.jsx)(s.a,{onClick:e=>{r(e,n-1)},disabled:0===n,"aria-label":"previous page",children:"rtl"===c.direction?Object(O.jsx)(j.a,{}):Object(O.jsx)(o.a,{})}),Object(O.jsx)(s.a,{onClick:e=>{r(e,n+1)},disabled:n>=Math.ceil(a/d)-1,"aria-label":"next page",children:"rtl"===c.direction?Object(O.jsx)(o.a,{}):Object(O.jsx)(j.a,{})}),Object(O.jsx)(s.a,{onClick:e=>{r(e,Math.max(0,Math.ceil(a/d)-1))},disabled:n>=Math.ceil(a/d)-1,"aria-label":"last page",children:"rtl"===c.direction?Object(O.jsx)(i.a,{}):Object(O.jsx)(h.a,{})})]})}},630:function(e,t,c){"use strict";var a=c(609),l=c(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(0)),n=(0,a(c(610)).default)(s.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");t.default=n},638:function(e,t,c){"use strict";var a=c(609),l=c(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=l(c(0)),n=(0,a(c(610)).default)(s.createElement("path",{d:"M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"}),"Toc");t.default=n},643:function(e,t,c){"use strict";c.d(t,"a",(function(){return y}));var a=c(0),l=c.n(a),s=c(457),n=c(941),i=c(942),d=c(937),o=c(939),r=c(940),j=c(686),b=c(1411),h=c(938),O=c(816),u=c(1304),x=c(621),v=c.n(x),m=c(630),p=c.n(m),g=c(629),f=c(617),N=c.n(f),w=c(792),E=c(638),M=c.n(E),P=c(10);const S=Object(s.a)({table:{width:"100%"}});function y(e){var t;let{data:c,tableHeader:a,handleEdit:s,handleDelete:x,loading:m,isCanteen:f,isEdit:E,isItems:y,noActions:_,noData:D}=e;const A=S(),[C,F]=l.a.useState(0),[k,z]=l.a.useState(5),I=k-Math.min(k,(null===c||void 0===c?void 0:c.length)-C*k);return Object(P.jsx)(r.a,{component:O.a,children:Object(P.jsxs)(n.a,{className:A.table,"aria-label":"custom pagination table",children:[Object(P.jsx)(d.a,{children:Object(P.jsxs)(h.a,{children:[a&&(null===a||void 0===a?void 0:a.map((e=>Object(P.jsx)(o.a,{children:e.name},e.id)))),!_&&Object(P.jsx)(o.a,{children:"Actions"})]})}),m?Object(P.jsx)(i.a,{className:"text-center my-5 w-100",children:Object(P.jsx)(h.a,{children:Object(P.jsx)(o.a,{colSpan:a.lenght,children:Object(P.jsx)("span",{className:"spinner-grow spinner-grow-sm",role:"status"})})})}):Object(P.jsxs)(i.a,{children:[(null===c||void 0===c?void 0:c.length)<=0?Object(P.jsx)(h.a,{children:Object(P.jsx)(o.a,{colSpan:a.length+1,className:"text-center text-danger",children:D||"No data"})}):Object(P.jsx)(P.Fragment,{children:null===(t=k>0?null===c||void 0===c?void 0:c.slice(C*k,C*k+k):c)||void 0===t?void 0:t.map((e=>Object(P.jsxs)(h.a,{children:[a&&(null===a||void 0===a?void 0:a.map((t=>{var c,a;return Object(P.jsx)(o.a,{align:"left",children:(a=e[null===t||void 0===t?void 0:t.id],new RegExp("^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$").test(a)?null===(c=N()(e[null===t||void 0===t?void 0:t.id]))||void 0===c?void 0:c.format("D MMMM YYYY"):e[null===t||void 0===t?void 0:t.id]||"-")},null===t||void 0===t?void 0:t.id)}))),!_&&Object(P.jsx)(o.a,{align:"left",children:Object(P.jsxs)("div",{className:"d-flex align-items-center",children:[Object(P.jsx)(w.a,{title:y?"Manage Inventory":"delete",children:Object(P.jsx)(u.a,{onClick:()=>x(f?e.memberID:e._id),children:y?Object(P.jsx)(M.a,{}):Object(P.jsx)(p.a,{})})}),!E&&Object(P.jsx)(w.a,{title:"edit",children:Object(P.jsx)(u.a,{onClick:()=>s(f?e.memberID:e._id),children:Object(P.jsx)(v.a,{})})})]})})]},e._id)))}),I>0&&Object(P.jsx)(h.a,{style:{height:53},children:Object(P.jsx)(o.a,{colSpan:6})})]}),Object(P.jsx)(j.a,{children:Object(P.jsx)(h.a,{children:(null===c||void 0===c?void 0:c.length)>5&&Object(P.jsx)(b.a,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],count:null===c||void 0===c?void 0:c.length,rowsPerPage:k,page:C,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onChangePage:(e,t)=>{F(t)},onChangeRowsPerPage:e=>{z(parseInt(e.target.value,10)),F(0)},ActionsComponent:g.a})})})]})})}}}]);
//# sourceMappingURL=137.8be53887.chunk.js.map