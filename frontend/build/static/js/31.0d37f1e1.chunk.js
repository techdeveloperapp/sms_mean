(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[31],{1330:function(e,t,l){"use strict";l.r(t);var a=l(0),c=l(675),s=l(933),n=l(27),i=l(10);t.default=function(){const[e,t]=Object(a.useState)(""),[l,d]=Object(a.useState)(""),[o,r]=Object(a.useState)([]),[j,b]=Object(a.useState)([]);Object(a.useEffect)((()=>{n.a.get("/notification").then((e=>{r(e.data),b(e.data)}))}),[]);const h=[{type:"text",value:l,label:"Search by name",name:"title",onChange:d},{type:"date",label:"Search by date",value:e,name:"date",onChange:t}];return Object(i.jsxs)("div",{className:" notices",children:[Object(i.jsxs)("div",{className:"mb-5 content__container",children:[Object(i.jsx)("h3",{children:"Notice Board"}),Object(i.jsx)(c.a,{inputFields:h,handleReset:e=>{e.preventDefault(),r(j)},handleSearch:t=>{if(t.preventDefault(),l||e){let t=j.filter((t=>t.title.toLowerCase().includes(l.toLowerCase())||t.description.toLowerCase().includes(l.toLowerCase())||new Date(t.createdAt).toISOString().slice(0,10)===e));r(t)}else r(j)}})]}),Object(i.jsx)("div",{className:"notices__container content__container",children:o.length>0?o.map((e=>Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)(s.a,{description:e.description,date:e.date,title:e.title,id:e._id,isReset:!0,createdAt:null===e||void 0===e?void 0:e.createdAt,createdBy:e.createdBy}),Object(i.jsx)("hr",{})]},e._id))):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("h6",{className:"text-danger text-center",children:"There are no notice"})})})]})}},675:function(e,t,l){"use strict";l(0);var a=l(10);t.a=function(e){let{inputFields:t,title:l,handleSearch:c,isReset:s,handleReset:n,noActions:i}=e;return Object(a.jsxs)("form",{className:"mb-5 content__container",children:[Object(a.jsx)("h3",{className:"mb-3",children:l||""}),Object(a.jsxs)("div",{className:"row g-3 mb-3",children:[t&&t.map((e=>Object(a.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4",children:[Object(a.jsx)("label",{htmlFor:"",children:e.label}),"select"===e.type?Object(a.jsxs)("select",{value:null===e||void 0===e?void 0:e.value,name:null===e||void 0===e?void 0:e.name,onChange:t=>null===e||void 0===e?void 0:e.onChange(t.target.value),className:"form-select form-select-sm py-2",children:[Object(a.jsx)("option",{hidden:!0,defaultValue:!0,children:"Select"}),(null===e||void 0===e?void 0:e.options.length)>0?null===e||void 0===e?void 0:e.options.map((e=>Object(a.jsx)("option",{value:e.id,children:e.name},e.id))):Object(a.jsx)("option",{disabled:!0,children:"No data "})]}):Object(a.jsx)("input",{type:e.type,value:e.value,name:null===e||void 0===e?void 0:e.name,className:"form-control py-3",placeholder:"Search by ".concat(e.name),onChange:t=>null===e||void 0===e?void 0:e.onChange(t.target.value)})]},null===e||void 0===e?void 0:e.name))),!i&&Object(a.jsxs)("div",{className:"col-xs-12 col-sm-6 col-md-4 d-flex mt-5",children:[Object(a.jsx)("div",{className:"mb-3",children:Object(a.jsx)("button",{className:"btn orange__btn ",onClick:c,children:"Search"})}),!s&&Object(a.jsx)("div",{className:" mb-3 ml-3",children:Object(a.jsx)("button",{onClick:n,className:"btn blue__btn ",children:"Reset"})})]})]})]})}},933:function(e,t,l){"use strict";l(0);var a=l(617),c=l.n(a),s=l(1464),n=l(1304),i=l(993),d=l.n(i),o=l(97),r=l(711),j=l(783),b=l(791),h=l(633),m=l.n(h),u=l(1268),v=l(637),x=l(10);const O=Object(o.a)((e=>({root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}})))((e=>{const{children:t,classes:l,onClose:a,...c}=e;return Object(x.jsxs)(j.a,{disableTypography:!0,className:l.root,...c,children:[Object(x.jsx)(u.a,{variant:"h6",children:t}),a?Object(x.jsx)(n.a,{"aria-label":"close",className:l.closeButton,onClick:a,children:Object(x.jsx)(m.a,{})}):null]})})),p=Object(o.a)((e=>({root:{padding:e.spacing(2)}})))(b.a);function g(e){let{open:t,setOpen:l,handleDelete:a,editData:s}=e;const{register:n,handleSubmit:i,errors:d}=Object(v.a)(),o=()=>{l(!1)};return Object(x.jsx)("div",{children:Object(x.jsxs)(r.a,{onClose:o,maxWidth:"sm",fullWidth:!0,"aria-labelledby":"customized-dialog-title",open:t,children:[Object(x.jsx)(O,{id:"customized-dialog-title",onClose:o,children:"Edit Notice"}),Object(x.jsx)(p,{dividers:!0,children:Object(x.jsxs)("form",{className:"row",action:"",children:[Object(x.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(x.jsx)("label",{className:"form-label",children:"Title"}),Object(x.jsx)("input",{type:"text",ref:n({required:!0}),value:null===s||void 0===s?void 0:s.title,onChange:e=>null===s||void 0===s?void 0:s.settitle(e.target.value),className:"form-control py-4",name:"title"}),d.title&&Object(x.jsx)("div",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(x.jsx)("label",{className:"form-label",children:"Date"}),Object(x.jsx)("input",{type:"date",value:c()(null===s||void 0===s?void 0:s.date).format("YYYY-MM-D"),ref:n({required:!0}),onChange:e=>null===s||void 0===s?void 0:s.setdate(e.target.value),className:"form-control py-4",name:"date"}),d.date&&Object(x.jsx)("div",{className:"text-danger",children:"This field is required"})]}),Object(x.jsxs)("div",{className:"col-md-12 mb-5",children:[Object(x.jsx)("label",{className:"form-label",children:"Description"}),Object(x.jsx)("textarea",{value:null===s||void 0===s?void 0:s.description,onChange:e=>null===s||void 0===s?void 0:s.setdescription(e.target.value),rows:5,className:"form-control",name:"description"})]}),Object(x.jsxs)("div",{className:"col-md-6 mb-5",children:[Object(x.jsx)("label",{className:"form-label",children:"Created By"}),Object(x.jsx)("input",{type:"text",ref:n({required:!0}),value:null===s||void 0===s?void 0:s.createdby,onChange:e=>null===s||void 0===s?void 0:s.setcreatedby(e.target.value),className:"form-control  py-4",name:"createdby"})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("button",{disabled:null===s||void 0===s?void 0:s.loading,onClick:i(null===s||void 0===s?void 0:s.handleCreate),className:"btn blue__btn",children:"Save Changes"})}),Object(x.jsx)("div",{className:"col-4",children:Object(x.jsx)("button",{onClick:a,className:"btn btn-danger",children:"Delete"})})]})]})})]})})}t.a=function(e){let{description:t,createdBy:l,date:a,title:i,createdAt:o,isEdit:r,id:j,open:b,setOpen:h,editData:m,handleDelete:u}=e;const v=["#2ad7c5","#ffa201","#f939a1"];let O=v[Math.floor(Math.random()*v.length)];return Object(x.jsxs)("div",{className:"notice d-flex justify-content-between align-items-center",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h4",{children:Object(x.jsx)("strong",{children:i})}),Object(x.jsx)(s.a,{style:{backgroundColor:"".concat(O)},className:"chip__date mb-2",label:c()(a).format(" Do MMMM, YYYY")}),Object(x.jsx)("p",{children:Object(x.jsxs)("strong",{children:[" ",t," "]})}),Object(x.jsx)("div",{children:Object(x.jsxs)("h6",{children:[l," /"," ",Object(x.jsxs)("span",{className:"text-muted",children:[" ",c()(o).fromNow()]})]})})]}),r&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(n.a,{onClick:()=>(h(!0),null===m||void 0===m||m.setdate(a),null===m||void 0===m||m.settitle(i),null===m||void 0===m||m.setcreatedby(l),null===m||void 0===m||m.setdescription(t),void(null===m||void 0===m||m.seteditID(j))),children:Object(x.jsx)(d.a,{})})}),Object(x.jsx)(g,{editData:m,open:b,handleDelete:u,setOpen:h})]})]})}}}]);
//# sourceMappingURL=31.0d37f1e1.chunk.js.map