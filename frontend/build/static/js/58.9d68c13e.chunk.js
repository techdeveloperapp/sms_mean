(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[58],{1105:function(c,e,s){"use strict";var t=s(0),a=s(945),o=s.n(a),l=s(123),d=s(27),n=s(10);e.a=function(c){let{id:e,classID:s}=c;const[a,i]=Object(t.useState)([]);return Object(t.useEffect)((()=>{d.a.get("/courses/courseCode/".concat(e)).then((c=>{i(c.data.docs)}))}),[e]),console.log(e),Object(n.jsx)("div",{className:" col-xs-12 col-sm-6 com-md-4 mb-5",children:Object(n.jsx)("div",{className:"classCard p-5",children:e?Object(n.jsxs)(l.b,{to:"/academics/courses/".concat(e,"/").concat(s),children:[Object(n.jsx)(o.a,{className:"icon"}),Object(n.jsx)("h5",{children:null===a||void 0===a?void 0:a.name}),Object(n.jsx)("span",{children:s})]}):Object(n.jsxs)("div",{children:[Object(n.jsx)(o.a,{className:"icon"}),Object(n.jsx)("h5",{children:"Courses"}),Object(n.jsx)("span",{children:"No course yet"})]})})})}},1334:function(c,e,s){"use strict";s.r(e);var t=s(0),a=s(1105),o=s(59),l=s(84),d=s(27),n=s(10);e.default=function(){const[c,e]=Object(t.useState)([]),s=Object(l.c)(o.d);return Object(t.useEffect)((()=>{d.a.get("/courses/teacher/".concat(null===s||void 0===s?void 0:s.id)).then((c=>{if(console.log(c),c.data.success){var t;let a=null===(t=c.data)||void 0===t?void 0:t.docs.map((c=>{let e=[];return c.classes.map((t=>{t.teacher===(null===s||void 0===s?void 0:s.id)&&e.push({class:t.class,teacher:t.teacher,course:c.code})})),e}));console.log(a.flat()),e(a.flat())}}))}),[s]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"My Tutorial Courses"}),Object(n.jsx)("div",{className:"row mt-5",children:(null===c||void 0===c?void 0:c.length)>0?null===c||void 0===c?void 0:c.map(((c,e)=>Object(n.jsx)(a.a,{id:c.course,classID:c.class},e))):Object(n.jsx)(a.a,{})})]})}},945:function(c,e,s){"use strict";var t=s(609),a=s(611);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(s(0)),l=(0,t(s(610)).default)(o.createElement("path",{d:"M17.5 4.5c-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .65.73.45.75.45C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.41.21.75-.19.75-.45V6c-1.49-1.12-3.63-1.5-5.5-1.5zm3.5 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"}),"ImportContacts");e.default=l}}]);
//# sourceMappingURL=58.9d68c13e.chunk.js.map