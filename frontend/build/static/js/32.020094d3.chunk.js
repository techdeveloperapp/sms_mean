(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[32],{1326:function(e,s,t){"use strict";t.r(s);var c=t(0),a=t(798),n=t(84),r=t(59),i=t(27),d=t(614),l=t(10);s.default=function(){const[e,s]=Object(c.useState)(""),[t,o]=Object(c.useState)(""),j=[{id:"admin",name:"admin"}],b=Object(n.c)(r.d),[m,h]=Object(c.useState)("");return Object(l.jsx)("div",{children:Object(l.jsx)(a.a,{message:e,setmessage:s,onSend:c=>{c.preventDefault(),e&&t&&(h(!0),i.a.post("/chats/user",{message:e,userID:t,sender:null===b||void 0===b?void 0:b.userID}).then((e=>{if(h(!1),e.data.error)return Object(d.c)(e.data.error),0;Object(d.m)("message send"),s("")})))},recipientsOptions:j,recipient:t,sendto:"School Admin",loading:m,searchOptions:()=>j.map((e=>Object(l.jsxs)("option",{value:e.id,children:[" ",e.name," "]},e.id))),setrecipient:o,sender:null===b||void 0===b?void 0:b.id})})}},798:function(e,s,t){"use strict";t(0);var c=t(10);s.a=function(e){let{message:s,setmessage:t,onSend:a,recipient:n,setrecipient:r,sender:i,sendto:d,searchOptions:l,loading:o,error:j}=e;return Object(c.jsxs)("form",{action:"",className:" content__container form__sender",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("h3",{children:["Send Message to ",d]})}),Object(c.jsxs)("div",{className:"row mb-2 px-3",children:[Object(c.jsx)("label",{className:"col-sm-2",htmlFor:"",children:"Recipient:"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsxs)("select",{value:n,onChange:e=>r(e.target.value),id:"inputState",className:"form-select",children:[Object(c.jsx)("option",{defaultChecked:!0,hidden:!0,children:"Choose..."}),l?l():Object(c.jsx)("option",{disabled:!0,children:"No options"})]})})]}),Object(c.jsxs)("div",{className:"row mb-2 px-3",children:[Object(c.jsx)("label",{className:"col-sm-2",htmlFor:"",children:"Sender:"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{className:"form-control",value:i,type:"text",readOnly:!0})})]}),Object(c.jsxs)("div",{className:"mb-2 row",children:[Object(c.jsx)("div",{className:"col-12",children:Object(c.jsx)("textarea",{value:s,onChange:e=>t(e.target.value),className:"form-control",name:"",rows:"10",required:!0,placeholder:"Type here"})}),j&&Object(c.jsx)("div",{className:"text-danger text-center mb-2",children:j}),Object(c.jsx)("div",{className:"col-12",children:Object(c.jsxs)("button",{disabled:o,onClick:a,className:"btn blue__btn w-100",children:[o&&Object(c.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),"Send"]})})]})]})}}}]);
//# sourceMappingURL=32.020094d3.chunk.js.map