(this["webpackJsonpapp-frontend"]=this["webpackJsonpapp-frontend"]||[]).push([[0],{113:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),s=a(29),o=a(41),l=a(159),d=a(48),j=a(25),p=a(144),u=Object(p.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(d.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:500},textarea:{width:"100%",height:200}}})),b=a(35),h=a.n(b),x=a(51),O=a(149),g=a(150),m=a(115),v=a(4),f=a(147),w=a(53),y=a(148),C=a(161),S=a(162),B=a(2),N=[{value:.1,label:"0.1"},{value:.2,label:"0.2"},{value:.3,label:"0.3"},{value:.4,label:"0.4"},{value:.5,label:"0.5"},{value:.6,label:"0.6"},{value:.7,label:"0.7"},{value:.8,label:"0.8"},{value:.9,label:"0.9"},{value:1,label:"1"}];function k(e){return"".concat(e)}var _,D=function(e){var t=e.handleChangeRatio;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(w.a,{id:"discrete-slider-custom",gutterBottom:!0,children:"\u0421\u0442\u0435\u043f\u0435\u043d\u044c \u0441\u0436\u0430\u0442\u0438\u044f"}),Object(B.jsx)(S.a,{onChangeCommitted:t,defaultValue:.1,getAriaValueText:k,max:1,"aria-labelledby":"discrete-slider-custom",step:.1,valueLabelDisplay:"auto",marks:N})]})},M=function(e){var t=e.handleChangeText,a=e.handleChangeRatio,n=e.handleChangeWordCount,r=e.handleSendData,i=u(),c=Object(v.a)(i.textarea);return Object(B.jsxs)("div",{children:[Object(B.jsx)(f.a,{className:c,onChange:function(e){return t(e.target.value)},rowsMax:15,rowsMin:10,"aria-label":"empty textarea",placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 "}),Object(B.jsx)(D,{handleChangeRatio:a}),Object(B.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(B.jsx)(w.a,{id:"discrete-slider-custom",gutterBottom:!0,children:"\u041a\u043e\u043b-\u0432\u043e \u0441\u043b\u043e\u0432 \u0432 \u0442\u0435\u043a\u0441\u0442\u0435"}),Object(B.jsx)(C.a,{"aria-describedby":"my-helper-text",name:"Standard",type:"number",onChange:function(e){return n(e.target.value)}}),Object(B.jsx)(y.a,{style:{marginTop:"20px"},variant:"contained",color:"primary",onClick:r,children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442"})]})]})},R=function(e){var t=e.readData,a=t.result_text,n=t.keywords,r=null===n||void 0===n?void 0:n.map((function(e){return Object(B.jsx)("ul",{children:Object(B.jsxs)("li",{children:["#",e]})})})),i=u(),c=Object(v.a)(i.paper,i.fixedHeight);return Object(B.jsx)(m.a,{className:c,children:Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{style:{paddingBottom:"40px"},children:a}),Object(B.jsx)("div",{children:n?Object(B.jsxs)("div",{children:["\u0425\u044d\u0448\u0442\u0435\u0433\u0438:",r]}):null})]})})},T=a(75).create({baseURL:"https://vk-mini.herokuapp.com/",headers:{"Content-Type":"application/json",Accept:"application/json"}}),I=function(e,t){return Object(x.a)(h.a.mark((function a(){var n;return h.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T.post(e,{params:t});case 3:return n=a.sent,a.abrupt("return",(null===n||void 0===n?void 0:n.data)?null===n||void 0===n?void 0:n.data:n);case 7:throw a.prev=7,a.t0=a.catch(0),console.error(a.t0),a.t0;case 11:case"end":return a.stop()}}),a,null,[[0,7]])})))()};!function(e){e.process_text="process_text/"}(_||(_={}));var H=function(){var e=u(),t=Object(v.a)(e.paper,e.fixedHeight),a=Object(n.useState)({text:"",ratio:"",word_count:null}),r=Object(o.a)(a,2),i=r[0],c=r[1],s=Object(n.useState)({}),l=Object(o.a)(s,2),d=l[0],p=l[1],b=function(){var e=Object(x.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=[]).push(i),e.next=4,I(_.process_text,t);case 4:a=e.sent,p(a[0]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)("main",{className:e.content,children:[Object(B.jsx)("div",{className:e.appBarSpacer}),Object(B.jsx)(O.a,{maxWidth:"lg",className:e.container,children:Object(B.jsxs)(g.a,{container:!0,spacing:2,children:[Object(B.jsx)(g.a,{item:!0,xs:12,md:8,lg:6,children:Object(B.jsx)(m.a,{className:t,children:Object(B.jsx)(M,{handleChangeRatio:function(e,t){c(Object(j.a)(Object(j.a)({},i),{},{ratio:t}))},handleChangeText:function(e){c(Object(j.a)(Object(j.a)({},i),{},{text:e}))},handleChangeWordCount:function(e){var t=Number(e);c(Object(j.a)(Object(j.a)({},i),{},{word_count:t}))},handleSendData:b})})}),Object(B.jsx)(g.a,{item:!0,xs:12,md:8,lg:6,children:Object(B.jsx)(R,{readData:d})})]})})]})},P=a(151),W=a(152),L=a(153),z=a(76),A=a.n(z),F=function(e){var t=e.open,a=e.toggleOpenMenu,n=u();return Object(B.jsx)(P.a,{position:"absolute",className:Object(v.a)(n.appBar,t&&n.appBarShift),children:Object(B.jsxs)(W.a,{className:n.toolbar,children:[Object(B.jsx)(L.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:a,className:Object(v.a)(n.menuButton,t&&n.menuButtonHidden),children:Object(B.jsx)(A.a,{})}),Object(B.jsx)(w.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:n.title,children:"Smart Text"})]})})},G=a(160),J=a(157),V=a(79),E=a.n(V),U=a(154),X=a(155),q=a(156),K=a(78),Q=a.n(K),Y=a(77),Z=a.n(Y),$=Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(s.c,{to:"text_editor",children:Object(B.jsxs)(U.a,{button:!0,children:[Object(B.jsx)(X.a,{children:Object(B.jsx)(Z.a,{})}),Object(B.jsx)(q.a,{primary:"Dashboard"})]})}),Object(B.jsx)(s.c,{to:"parser",children:Object(B.jsxs)(U.a,{button:!0,children:[Object(B.jsx)(X.a,{children:Object(B.jsx)(Q.a,{})}),Object(B.jsx)(q.a,{primary:"Orders"})]})})]}),ee=a(158),te=function(e){var t=e.open,a=e.toggleOpenMenu,n=u();return Object(B.jsxs)(G.a,{variant:"permanent",classes:{paper:Object(v.a)(n.drawerPaper,!t&&n.drawerPaperClose)},open:t,children:[Object(B.jsx)("div",{className:n.toolbarIcon,children:Object(B.jsx)(L.a,{onClick:a,children:Object(B.jsx)(E.a,{})})}),Object(B.jsx)(J.a,{}),Object(B.jsx)(ee.a,{children:$})]})},ae=a(12);var ne=function(){var e=u(),t=r.a.useState(!1),a=Object(o.a)(t,2),n=a[0],i=a[1],c=(Object(ae.f)(),function(){i(!n)});return Object(B.jsx)(s.a,{children:Object(B.jsxs)("div",{className:e.root,children:[Object(B.jsx)(l.a,{}),Object(B.jsx)(F,{open:n,toggleOpenMenu:c}),Object(B.jsx)(te,{open:n,toggleOpenMenu:c}),Object(B.jsxs)(ae.c,{children:[Object(B.jsx)(ae.a,{path:"/text_editor",children:Object(B.jsx)(H,{})}),Object(B.jsx)(ae.a,{path:"/parser",children:Object(B.jsx)("div",{children:"parser"})})]})]})})};c.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(s.b,{basename:"/text_editor",children:Object(B.jsx)(ne,{})})}),document.getElementById("root"))}},[[113,1,2]]]);
//# sourceMappingURL=main.1a59978d.chunk.js.map