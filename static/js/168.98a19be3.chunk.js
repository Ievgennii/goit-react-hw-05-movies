"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{5094:function(n,e,t){t.d(e,{Hg:function(){return s},Jh:function(){return l},TP:function(){return p},z1:function(){return u},zv:function(){return d}});var r=t(5861),a=t(7757),i=t.n(a),o=t(1243),c="0585bdb531ffd463c0471d665e0201d5";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},7168:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,a,i,o,c,s,u,p,d,l=t(8683),h=t(9439),f=t(7689),x=t(5094),g=t(2791),v=t(168),m=t(6444),w=t(1087),Z=m.ZP.h2(r||(r=(0,v.Z)(["\n  margin: 0;\n"]))),b=m.ZP.div(a||(a=(0,v.Z)(["\n  display: flex;\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),y=m.ZP.div(i||(i=(0,v.Z)(["\n  padding: 20px 40px;\n"]))),j=m.ZP.ul(o||(o=(0,v.Z)(["\n  list-style: none;\n  display: flex;\n  padding: 0;\n  gap: 16px;\n"]))),_=m.ZP.button(c||(c=(0,v.Z)(["\n  margin-top: 16px;\n  margin-right: 10px;\n  padding: 8px 16px;\n  border-radius: 4px;\n  border: none;\n  margin-bottom: 10px;\n  font-weight: 500;\n  &:hover {\n    background-color: blue;\n    color: white;\n  }\n  &.active {\n    background-color: blue;\n    color: white;\n  }\n"]))),k=(0,m.ZP)(w.rU)(s||(s=(0,v.Z)(["\n  display: flex;\n  font-size: 14px;\n  align-items: center;\n  column-gap: 10px;\n  &:hover {\n    \n    color: white;\n  }\n"]))),P=m.ZP.div(u||(u=(0,v.Z)(["\n  padding: 20px;\n  border-bottom: solid 1px grey;\n"]))),U=(0,m.ZP)(w.rU)(p||(p=(0,v.Z)(["\ndisplay: flex;\nfont-size: 14px;\nalign-items: center;\ncolumn-gap: 10px;\n&:hover {\n  \n  color: white;\n}\n\n  &.active {\n    ccolor: white;\n  }\n"]))),z=(0,m.ZP)(w.rU)(d||(d=(0,v.Z)(["\ndisplay: flex;\nfont-size: 14px;\nalign-items: center;\ncolumn-gap: 10px;\n&:hover {\n  \n  color: white;\n}\n\n  &.active {\n    ccolor: white;\n  }\n"]))),S=t(8617),C=t(184),T=function(){var n,e,t=(0,g.useState)({}),r=(0,h.Z)(t,2),a=r[0],i=r[1],o=(0,f.TH)(),c=(0,f.UO)().movieId;(0,g.useEffect)((function(){(0,x.TP)(c).then((function(n){return i(n)}))}),[c]);var s=a.original_title,u=a.overview,p=a.genres,d=a.poster_path,v=(10*a.vote_average).toFixed(2);return(0,C.jsxs)("main",{children:[(0,C.jsx)(_,{type:"button",children:(0,C.jsxs)(k,{to:null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:[(0,C.jsx)(S.siY,{size:16}),"Go back"]})}),(0,C.jsxs)(b,{children:[(0,C.jsx)("img",{src:d?"https://image.tmdb.org/t/p/w300".concat(d):"http://www.suryalaya.org/images/no_image.jpg",width:320,height:380,loading:"lazy",alt:"poster"}),(0,C.jsxs)(y,{children:[(0,C.jsx)(Z,{children:s}),(0,C.jsxs)("h3",{children:["User score: ",v,"%"]}),(0,C.jsx)("h3",{children:"Overview"}),(0,C.jsxs)("p",{children:[u," "]}),(0,C.jsx)("h3",{children:"Genres"}),(0,C.jsx)(j,{children:p&&p.length&&p.map((function(n){var e=n.id,t=n.name;return(0,C.jsx)("li",{children:t},e)}))})]})]}),(0,C.jsxs)(P,{children:[(0,C.jsx)("h4",{children:"Additional information"}),(0,C.jsx)(_,{type:"button",children:(0,C.jsx)(z,{state:(0,l.Z)({},o.state),to:"cast",children:"Cast"})}),(0,C.jsx)(_,{type:"button",children:(0,C.jsx)(U,{state:(0,l.Z)({},o.state),to:"reviews",children:"Reviews"})})]}),(0,C.jsx)(f.j3,{})]})}}}]);
//# sourceMappingURL=168.98a19be3.chunk.js.map