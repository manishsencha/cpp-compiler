(this["webpackJsonponline-editor"]=this["webpackJsonponline-editor"]||[]).push([[0],{23:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n(16),r=n.n(i),c=(n(23),n(7)),a=n.n(c),s=n(17),l=n(3),u=n(5),p=(n(27),n(18)),d=n.n(p),f=n(2);var j=function(){var e=Object(o.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(""),c=Object(l.a)(r,2),p=c[0],j=c[1],b=Object(o.useState)(""),h=Object(l.a)(b,2),x=h[0],O=h[1],y=Object(o.useState)(!1),v=Object(l.a)(y,2),g=v[0],w=v[1];Object(o.useEffect)((function(){return alert("Sorry for the incovenience The app is not currently fully functional on web. If you want to use the app please clone the project and use it on your system.")}),[]);var m=function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.next=4,d.a.post(window.location.href,{code:n,ip:p}).then((function(e){var t=e.data;return console.log(t),""!==t.stderr?O(t.stderr):O(t.stdout)})).catch((function(e){return alert(e)}));case 4:w(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"10px",marginBottom:"10px",padding:"10px"},children:[Object(f.jsx)("div",{style:{fontSize:30,color:"white"},children:"CPP Compiler"}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{disabled:g,onClick:m,style:{height:"40px",width:"70px",fontSize:"20px",outline:"none",cursor:"pointer",backgroundColor:"#ccc",border:"none"},children:"Run"})})]}),Object(f.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",overflowY:"hidden"},children:Object(f.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[Object(f.jsx)(u.a,{height:"60vh",width:"60vw",defaultLanguage:"cpp",defaultValue:n,onChange:function(e){return i(e)},options:{fontSize:16}}),Object(f.jsxs)("div",{style:{marginTop:"20px",backgroundColor:"#333",padding:"10px"},children:[Object(f.jsx)("span",{style:{fontSize:"20px",color:"white"},children:"Input"}),Object(f.jsx)(u.a,{height:"100px",defaultValue:p,onChange:function(e){return j(e)},options:{lineNumbers:"off",minimap:{enabled:!1}}})]}),Object(f.jsxs)("div",{style:{marginTop:"20px",backgroundColor:"#333",padding:"10px"},children:[Object(f.jsx)("span",{style:{fontSize:"20px",color:"white"},children:"Output"}),Object(f.jsx)(u.a,{height:"100px",options:{lineNumbers:"off",minimap:{enabled:!1},readOnly:!0},value:x})]})]})})]})};r.a.render(Object(f.jsx)(j,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.1216d0da.chunk.js.map