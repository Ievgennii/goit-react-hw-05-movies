"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{5094:function(n,e,r){r.d(e,{Hg:function(){return s},Jh:function(){return d},TP:function(){return p},z1:function(){return o},zv:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),u=r(1243),i="0585bdb531ffd463c0471d665e0201d5";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,t.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(c().mark((function n(e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3387:function(n,e,r){r.r(e),r.d(e,{default:function(){return m}});var t,a,c,u,i=r(9439),s=r(7689),o=r(2791),p=r(5094),f=r(168),d=r(6444),x=d.ZP.ul(t||(t=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  padding: 0 0 30px;\n"]))),h=d.ZP.li(a||(a=(0,f.Z)(["\n  width: 200px;\n  border-radius: 10px;\n  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;\n\n  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.05);\n  }\n"]))),v=d.ZP.img(c||(c=(0,f.Z)(["\nwidth: 200px;\n  min-height: 330px;\n  border-radius: 10px 10px 0 0;\n  object-fit: cover;\n"]))),l=d.ZP.div(u||(u=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 10px;\n"]))),g=r(184),m=function(){var n=(0,o.useState)([]),e=(0,i.Z)(n,2),r=e[0],t=e[1],a=(0,s.UO)().movieId;return(0,o.useEffect)((function(){(0,p.zv)(a).then((function(n){return t(n.cast)}))}),[a]),(0,g.jsx)(x,{children:r.length>0?r.map((function(n){var e=n.id,r=n.name,t=n.profile_path,a=n.character;return(0,g.jsxs)(h,{children:[(0,g.jsx)(v,{src:t?"https://image.tmdb.org/t/p/w500"+t:"https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",alt:r}),(0,g.jsxs)(l,{children:[(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Actor:"})," ",r]}),(0,g.jsxs)("p",{children:[(0,g.jsx)("b",{children:"Character:"})," ",a]})]})]},e)})):"Sorry, there isn't any info :("})}}}]);
//# sourceMappingURL=387.c8a11396.chunk.js.map