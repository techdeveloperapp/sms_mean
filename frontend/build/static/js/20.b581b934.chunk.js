(this["webpackJsonpschool-dashoboard"]=this["webpackJsonpschool-dashoboard"]||[]).push([[20],{1020:function(e,t,a){"use strict";var o=a(609),n=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,o(a(610)).default)(c.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");t.default=r},1021:function(e,t,a){"use strict";var o=a(609),n=a(611);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,o(a(610)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=r},1106:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));a(0);var o=a(97),n=a(457),c=a(941),r=a(942),i=a(939),s=a(940),l=a(937),d=a(938),u=a(816),p=a(1020),b=a.n(p),m=a(1021),h=a.n(m),f=a(617),v=a.n(f),j=a(10);const g=Object(o.a)((e=>({head:{backgroundColor:"#051f3e",color:e.palette.common.white},body:{fontSize:14}})))(i.a),O=Object(o.a)((e=>({root:{"&:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}}})))(d.a),x=Object(n.a)({table:{minWidth:700},iconSize:{width:20,height:20}});function y(e){let{attendanceData:t}=e;const a=x();return Object(j.jsx)(s.a,{component:u.a,children:Object(j.jsxs)(c.a,{className:a.table,"aria-label":"customized table",children:[Object(j.jsx)(l.a,{children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(g,{children:"#"}),Object(j.jsx)(g,{align:"left",children:"Date"}),Object(j.jsx)(g,{align:"left",children:"Status"})]})}),Object(j.jsx)(r.a,{children:t.length>0?t.map((e=>Object(j.jsxs)(O,{children:[Object(j.jsx)(g,{children:e._id}),Object(j.jsx)(g,{children:v()(e.date).format("Do MMMM  YYYY")}),Object(j.jsx)(g,{align:"left",children:e.status?Object(j.jsx)(b.a,{className:a.iconSize}):Object(j.jsx)(h.a,{className:"".concat(a.iconSize," text-danger")})})]},e._id))):Object(j.jsx)("div",{className:"p-5",children:"No data found"})})]})})}},1324:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(1106),c=a(27),r=a(84),i=a(59),s=a(10);t.default=function(){const[e,t]=Object(o.useState)([]),a=Object(r.c)(i.d);return Object(o.useEffect)((()=>{c.a.get("/attendance/user/".concat(null===a||void 0===a?void 0:a.userID)).then((e=>{console.log(e),t(e.data)}))}),[a]),Object(s.jsxs)("div",{className:"attendance",children:[Object(s.jsx)("h3",{className:"mb-3",children:"Attendance List"}),Object(s.jsx)(n.a,{attendanceData:e})]})}},622:function(e,t,a){"use strict";var o=a(0),n=o.createContext();t.a=n},670:function(e,t,a){"use strict";var o=a(0),n=o.createContext();t.a=n},816:function(e,t,a){"use strict";var o=a(14),n=a(1),c=a(0),r=a(30),i=a(97),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=e.square,u=void 0!==d&&d,p=e.elevation,b=void 0===p?1:p,m=e.variant,h=void 0===m?"elevation":m,f=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return c.createElement(l,Object(n.a)({className:Object(r.a)(a.root,i,"outlined"===h?a.outlined:a["elevation".concat(b)],!u&&a.rounded),ref:t},f))}));t.a=Object(i.a)((function(e){var t={};return e.shadows.forEach((function(e,a){t["elevation".concat(a)]={boxShadow:e}})),Object(n.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},937:function(e,t,a){"use strict";var o=a(1),n=a(14),c=a(0),r=a(30),i=a(97),s=a(622),l={variant:"head"},d="thead",u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.component,p=void 0===u?d:u,b=Object(n.a)(e,["classes","className","component"]);return c.createElement(s.a.Provider,{value:l},c.createElement(p,Object(o.a)({className:Object(r.a)(a.root,i),ref:t,role:p===d?null:"rowgroup"},b)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},938:function(e,t,a){"use strict";var o=a(1),n=a(14),c=a(0),r=a(30),i=a(97),s=a(622),l=a(98),d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,l=e.component,d=void 0===l?"tr":l,u=e.hover,p=void 0!==u&&u,b=e.selected,m=void 0!==b&&b,h=Object(n.a)(e,["classes","className","component","hover","selected"]),f=c.useContext(s.a);return c.createElement(d,Object(o.a)({ref:t,className:Object(r.a)(a.root,i,f&&{head:a.head,footer:a.footer}[f.variant],p&&a.hover,m&&a.selected),role:"tr"===d?null:"row"},h))}));t.a=Object(i.a)((function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(l.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}}),{name:"MuiTableRow"})(d)},939:function(e,t,a){"use strict";var o=a(14),n=a(1),c=a(0),r=a(30),i=a(97),s=a(158),l=a(98),d=a(670),u=a(622),p=c.forwardRef((function(e,t){var a,i,l=e.align,p=void 0===l?"inherit":l,b=e.classes,m=e.className,h=e.component,f=e.padding,v=e.scope,j=e.size,g=e.sortDirection,O=e.variant,x=Object(o.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),y=c.useContext(d.a),N=c.useContext(u.a),w=N&&"head"===N.variant;h?(i=h,a=w?"columnheader":"cell"):i=w?"th":"td";var k=v;!k&&w&&(k="col");var C=f||(y&&y.padding?y.padding:"normal"),z=j||(y&&y.size?y.size:"medium"),R=O||N&&N.variant,M=null;return g&&(M="asc"===g?"ascending":"descending"),c.createElement(i,Object(n.a)({ref:t,className:Object(r.a)(b.root,b[R],m,"inherit"!==p&&b["align".concat(Object(s.a)(p))],"normal"!==C&&b["padding".concat(Object(s.a)(C))],"medium"!==z&&b["size".concat(Object(s.a)(z))],"head"===R&&y&&y.stickyHeader&&b.stickyHeader),"aria-sort":M,role:a,scope:k},x))}));t.a=Object(i.a)((function(e){return{root:Object(n.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(l.e)(Object(l.a)(e.palette.divider,1),.88):Object(l.b)(Object(l.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}}),{name:"MuiTableCell"})(p)},940:function(e,t,a){"use strict";var o=a(1),n=a(14),c=a(0),r=a(30),i=a(97),s=c.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,l=void 0===s?"div":s,d=Object(n.a)(e,["classes","className","component"]);return c.createElement(l,Object(o.a)({ref:t,className:Object(r.a)(a.root,i)},d))}));t.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(s)},941:function(e,t,a){"use strict";var o=a(14),n=a(1),c=a(0),r=a(30),i=a(97),s=a(670),l="table",d=c.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?l:d,p=e.padding,b=void 0===p?"normal":p,m=e.size,h=void 0===m?"medium":m,f=e.stickyHeader,v=void 0!==f&&f,j=Object(o.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=c.useMemo((function(){return{padding:b,size:h,stickyHeader:v}}),[b,h,v]);return c.createElement(s.a.Provider,{value:g},c.createElement(u,Object(n.a)({role:u===l?null:"table",ref:t,className:Object(r.a)(a.root,i,v&&a.stickyHeader)},j)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(d)},942:function(e,t,a){"use strict";var o=a(1),n=a(14),c=a(0),r=a(30),i=a(97),s=a(622),l={variant:"body"},d="tbody",u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.component,p=void 0===u?d:u,b=Object(n.a)(e,["classes","className","component"]);return c.createElement(s.a.Provider,{value:l},c.createElement(p,Object(o.a)({className:Object(r.a)(a.root,i),ref:t,role:p===d?null:"rowgroup"},b)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)}}]);
//# sourceMappingURL=20.b581b934.chunk.js.map