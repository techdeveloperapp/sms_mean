(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[25],{1112:function(e,c,s){"use strict";s(0);var l=s(1463),i=s(123),d=s(614),a=s(84),t=s(59),n=s(10);c.a=function(e){let{id:c,name:s,surname:o,middleName:r,role:j,route:v,photoUrl:b}=e;const m=Object(a.c)(t.d);return Object(n.jsxs)("div",{className:"content__container student__info",children:[Object(n.jsx)(l.a,{className:"avatar",src:Object(d.g)(b),alt:Object(d.d)(s||"")}),Object(n.jsxs)("h5",{children:[Object(d.d)(s||"")," ",r&&Object(d.h)(r),"  ",Object(d.d)(o||"")]}),Object(n.jsx)("h6",{children:c}),Object(n.jsx)("div",{className:"text-muted",children:j}),"admin"===(null===m||void 0===m?void 0:m.role)&&Object(n.jsx)(i.b,{to:"/".concat(v,"/edit/").concat(c),className:"btn blue__btn sm__btn mt-4",children:"Edit"})]})}},1224:function(e,c,s){"use strict";s.d(c,"a",(function(){return C}));var l=s(0),i=s.n(l),d=s(1018),a=s.n(d),t=s(457),n=s(160),o=s(961),r=s(1077),j=s(1074),v=s(1268),b=s(1076),m=s(994),h=s(27),u=s(26),O=s(84),x=s(10);var N=function(e){var c,s;let{user:i}=e;const[d,a]=Object(l.useState)(""),[t,n]=Object(l.useState)(""),[o,r]=Object(l.useState)(""),[j,v]=Object(l.useState)(""),b=Object(O.c)(u.h);return console.log(i),Object(l.useEffect)((()=>{if(null!==i&&void 0!==i&&i.fees){let e=b.find((e=>e.code===(null===i||void 0===i?void 0:i.fees)));n(null===e||void 0===e?void 0:e.name)}null!==i&&void 0!==i&&i.scholarship&&h.a.get("/scholarships/".concat(null===i||void 0===i?void 0:i.scholarship)).then((e=>{var c,s;v(null===(c=e.data)||void 0===c||null===(s=c.doc)||void 0===s?void 0:s.name)})),null!==i&&void 0!==i&&i.campusID&&h.a.get("/campuses/".concat(null===i||void 0===i?void 0:i.campusID)).then((e=>{var c,s;console.log(e.data),r(null===(c=e.data)||void 0===c||null===(s=c.docs)||void 0===s?void 0:s.name)})),null!==i&&void 0!==i&&i.section&&h.a.get("/sections/".concat(null===i||void 0===i?void 0:i.section)).then((e=>{var c;a(null===(c=e.data.doc)||void 0===c?void 0:c.name)}))}),[i,b]),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Class "}),Object(x.jsxs)("div",{className:"col-6",children:[null===i||void 0===i?void 0:i.classID," "]})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Section/ House "}),Object(x.jsx)("div",{className:"col-6",children:d||"-"})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Student Status "}),Object(x.jsxs)("div",{className:"col-6",children:[null===i||void 0===i?void 0:i.status," "]})]}),"border"===(null===i||void 0===i?void 0:i.status)&&Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Dormitory "}),Object(x.jsxs)("div",{className:"col-6",children:[null===i||void 0===i?void 0:i.dormitoryID," "]})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Campus "}),Object(x.jsx)("div",{className:"col-6",children:o||"N/A"})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Scholarship "}),Object(x.jsx)("div",{className:"col-6",children:j||"N/A"})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Fees Category "}),Object(x.jsxs)("div",{className:"col-6",children:[t||"-"," "]})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Last School "}),Object(x.jsxs)("div",{className:"col-6",children:[(null===i||void 0===i||null===(c=i.lastSchool)||void 0===c?void 0:c.school)||"N/A"," "]})]}),Object(x.jsxs)("div",{className:"row  mb-3",children:[Object(x.jsx)("div",{className:"col-4",children:"Reason for Leaving last School "}),Object(x.jsxs)("div",{className:"col-6",children:[" ",(null===i||void 0===i||null===(s=i.lastSchool)||void 0===s?void 0:s.reason)||"N/A"," "]})]})]})},f=s(960);var w=function(e){let{user:c}=e;return console.log(c,"guadance tab"),Object(x.jsx)("div",{children:(null===c||void 0===c?void 0:c.length)>0?c.map((e=>Object(x.jsx)(f.a,{guadian:e,noEdit:!0},e._id))):Object(x.jsx)("div",{children:"No guadian info"})})},p=s(995);function g(e){const{children:c,value:s,index:l,...i}=e;return Object(x.jsx)("div",{role:"tabpanel",hidden:s!==l,id:"full-width-tabpanel-".concat(l),"aria-labelledby":"full-width-tab-".concat(l),...i,children:s===l&&Object(x.jsx)(b.a,{p:3,children:Object(x.jsx)(v.a,{children:c})})})}function A(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}const S=Object(t.a)((e=>({root:{backgroundColor:e.palette.background.paper,width:"100%"}})));function C(e){let{user:c}=e;const s=S(),l=Object(n.a)(),[d,t]=i.a.useState(0);return Object(x.jsxs)("div",{className:s.root,children:[Object(x.jsx)(o.a,{position:"static",color:"default",children:Object(x.jsxs)(r.a,{value:d,onChange:(e,c)=>{t(c)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"full width tabs example",children:[Object(x.jsx)(j.a,{label:"Student's Information",...A(0)}),Object(x.jsx)(j.a,{label:"Academics's Information",...A(1)}),Object(x.jsx)(j.a,{label:"Guardian's Information",...A(2)}),Object(x.jsx)(j.a,{label:"Contact Details",...A(3)})]})}),Object(x.jsxs)(a.a,{axis:"rtl"===l.direction?"x-reverse":"x",index:d,onChangeIndex:e=>{t(e)},children:[Object(x.jsx)(g,{value:d,index:0,dir:l.direction,children:Object(x.jsx)(m.a,{user:c})}),Object(x.jsx)(g,{value:d,index:1,dir:l.direction,children:Object(x.jsx)(N,{user:c})}),Object(x.jsx)(g,{value:d,index:2,dir:l.direction,children:Object(x.jsx)(w,{user:null===c||void 0===c?void 0:c.guadian})}),Object(x.jsx)(g,{value:d,index:3,dir:l.direction,children:Object(x.jsx)(p.a,{user:c})})]})]})}},1323:function(e,c,s){"use strict";s.r(c);var l=s(0),i=s(1112),d=s(1224),a=s(27),t=s(16),n=s(614),o=s(126),r=s(10);c.default=function(){const[e,c]=Object(l.useState)(null),[s,j]=Object(l.useState)(!1),{id:v}=Object(t.i)();return Object(l.useEffect)((()=>{j(!0),a.a.get("/students/student/".concat(v)).then((e=>{if(j(!1),e.data.error)return Object(n.c)(e.data.error),0;c(e.data.student)})).catch((()=>{j(!1)}))}),[v]),Object(r.jsx)("div",{className:"student__details",children:s?Object(r.jsx)(o.a,{}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{children:"Student Details"}),Object(r.jsx)("div",{className:"row",children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"col-xs-12 ",children:Object(r.jsx)(i.a,{name:null===e||void 0===e?void 0:e.name,surname:null===e||void 0===e?void 0:e.surname,middleName:null===e||void 0===e?void 0:e.middleName,photoUrl:null===e||void 0===e?void 0:e.profileUrl,role:null===e||void 0===e?void 0:e.role,route:"students",id:null===e||void 0===e?void 0:e.userID})}),Object(r.jsx)("div",{className:"col-xs-12 ",children:Object(r.jsx)(d.a,{user:e})})]}):Object(r.jsx)("h1",{className:"text-danger text-center",children:"Student not found"})})]})})}},960:function(e,c,s){"use strict";s(0);var l=s(1235),i=s(935),d=s.n(i),a=s(1304),t=s(10);c.a=function(e){let{guadian:c,handleDeleteGuadian:s,noEdit:i}=e;return Object(t.jsxs)(l.a,{className:"p-4 mb-3",children:[!i&&Object(t.jsx)("div",{className:"float-end",children:Object(t.jsxs)(a.a,{onClick:()=>s(c.id),children:[" ",Object(t.jsx)(d.a,{})]})}),Object(t.jsxs)("div",{className:"float-start",children:[Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:" Name: "}),Object(t.jsxs)("div",{className:"col-6",children:[null===c||void 0===c?void 0:c.name," "]})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:" Surname : "}),Object(t.jsx)("div",{className:"col-6",children:null===c||void 0===c?void 0:c.lastname})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:"Occupation: "}),Object(t.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.occupation)||null})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:"Contact: "}),Object(t.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.mobile)||null})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:"Email: "}),Object(t.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.email)||null})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:"Relationship: "}),Object(t.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.relationship)||null})]}),Object(t.jsxs)("div",{className:"row  mb-3",children:[Object(t.jsx)("div",{className:"col-6",children:"Address: "}),Object(t.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.address)||null})]})]})]})}},994:function(e,c,s){"use strict";s(0);var l=s(614),i=s(617),d=s.n(i),a=s(10);c.a=function(e){let{user:c,isStaff:s}=e;return Object(a.jsxs)("div",{children:[s&&Object(a.jsxs)("div",{className:"row mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Title: "}),Object(a.jsxs)("div",{className:"col-6",children:[Object(l.d)((null===c||void 0===c?void 0:c.title)||"N/A")," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Surname: "}),Object(a.jsxs)("div",{className:"col-6",children:[Object(l.d)((null===c||void 0===c?void 0:c.surname)||"N/A")," "]})]}),(null===c||void 0===c?void 0:c.middleName)&&Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Middle Name "}),Object(a.jsxs)("div",{className:"col-6",children:[Object(l.d)((null===c||void 0===c?void 0:c.middleName)||"N/A")," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Gender: "}),Object(a.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.gender)||"N/A"})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Email: "}),Object(a.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.email)||"N/A"})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Date of Birth: "}),Object(a.jsxs)("div",{className:"col-6",children:[null!==c&&void 0!==c&&c.dateOfBirth?d()(null===c||void 0===c?void 0:c.dateOfBirth).format("D MMMM YYYY"):"N/A"," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Place of birth "}),Object(a.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.placeOfBirth)||"N/A"," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Religion: "}),Object(a.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.religion)||"N/A"})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Nationality: "}),Object(a.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.nationality)||"N/A"," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Healthy Condition: "}),Object(a.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.health)||"N/A"," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Disease: "}),Object(a.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.disease)||"N/A"," "]})]}),Object(a.jsxs)("div",{className:"row  mb-3",children:[Object(a.jsx)("div",{className:"col-4",children:"Alleges: "}),Object(a.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.allege)||"N/A"," "]})]})]})}},995:function(e,c,s){"use strict";s(0);var l=s(10);c.a=function(e){let{user:c}=e;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"row  mb-3",children:[Object(l.jsx)("div",{className:"col-4",children:"Telephone Number: "}),Object(l.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.telephone)||"N/A"})]}),Object(l.jsxs)("div",{className:"row  mb-3",children:[Object(l.jsx)("div",{className:"col-4",children:"Mobile Number: "}),Object(l.jsx)("div",{className:"col-6",children:(null===c||void 0===c?void 0:c.mobilenumber)||"N/A"})]}),Object(l.jsxs)("div",{className:"row  mb-3",children:[Object(l.jsx)("div",{className:"col-4",children:"Area of Residence: "}),Object(l.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.physicalAddress)||"N/A"," "]})]}),Object(l.jsxs)("div",{className:"row  mb-3",children:[Object(l.jsx)("div",{className:"col-4",children:"Postal Address"}),Object(l.jsxs)("div",{className:"col-6",children:[(null===c||void 0===c?void 0:c.postalAddress)||"N/A"," "]})]})]})}}}]);
//# sourceMappingURL=25.53968247.chunk.js.map