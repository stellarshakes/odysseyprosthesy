(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{18:function(e,t,n){e.exports=n(30)},23:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(14),r=n.n(o),c=(n(23),n(17));var i=function(e){var t=Object(a.useState)(0),n=Object(c.a)(t,2),o=n[0],r=n[1];return l.a.createElement("span",{onClick:function(){var t=e.entries.length,n=o%t+1;3===n&&(n=0),r(n)}},e.entries[o])},m=n(5);var u=function(){return l.a.createElement("div",null,"this is poem 1",l.a.createElement(m.b,{to:"/poem2"},l.a.createElement("button",null,"this will go to poem 2")),l.a.createElement("p",null,"this is a Cycle span ",l.a.createElement(i,{entries:["word1","word2","word3"]})))};var s=function(){return l.a.createElement("div",null,"this is poem 2",l.a.createElement(m.b,{to:"/poem3"},l.a.createElement("button",null,"this will go to poem 3")))};var p=function(){return l.a.createElement("div",null,"this is poem 3",l.a.createElement(m.b,{to:"/"},l.a.createElement("button",null,"This will go to home page")))},E=n(6);n(29);var h=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.c,null,l.a.createElement(E.a,{path:"/poem2"},l.a.createElement(s,null)),l.a.createElement(E.a,{path:"/poem3"},l.a.createElement(p,null)),l.a.createElement(E.a,{path:"/"},l.a.createElement(u,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(m.a,null,l.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f65b7634.chunk.js.map