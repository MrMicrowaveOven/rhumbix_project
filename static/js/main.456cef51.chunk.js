(this.webpackJsonprhumbix_project=this.webpackJsonprhumbix_project||[]).push([[0],{10:function(t,e,n){},11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n(1),o=n.n(i),a=n(4),r=n.n(a),s=(n(10),n(3));n(11);var u=function(t){return Object(c.jsx)("div",{className:"gif",children:Object(c.jsx)("img",{src:t.url})})};var j=function(){var t=Object(i.useState)(""),e=Object(s.a)(t,2),n=e[0],o=e[1],a=Object(i.useState)(""),r=Object(s.a)(a,2),j=r[0],b=r[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{className:"base",children:"\ud83d\udc4b Thanks for taking our programming test!"}),Object(c.jsx)("input",{type:"text",id:"gifKeyword",name:"",onChange:function(t){o(t.target.value)}}),Object(c.jsx)("button",{type:"button",name:"button",onClick:function(){fetch("https://api.giphy.com/v1/gifs/search?q="+n+"&api_key=DLCVuTK6KZExOS7JoMq82bi5MaI6EbWO&limit=1").then((function(t){return t.json()})).then((function(t){console.log(t);var e=t.data[0].images.original.url;console.log(e),b(e)}))},children:"Fetch me a Gif!"}),Object(c.jsx)(u,{url:j})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),o(t),a(t)}))};r.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}},[[12,1,2]]]);
//# sourceMappingURL=main.456cef51.chunk.js.map