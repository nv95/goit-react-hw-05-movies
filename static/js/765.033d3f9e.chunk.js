"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(n,e,t){t.r(e),t.d(e,{Home:function(){return p}});var r=t(439),a=t(854),u=t(870),c=t(791),i=t(87),o=t(614),s=t(184),p=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],p=e[1],f=(0,c.useState)(!1),d=(0,r.Z)(f,2),l=d[0],v=d[1];return(0,c.useEffect)((function(){v(!0),(0,u.Hg)().then((function(n){p(n.results),v(!1)}))}),[]),(0,s.jsxs)(o.o,{children:[(0,s.jsx)(o.H1,{children:" Trending today "}),(0,s.jsxs)("ul",{children:[t.map((function(n){return(0,s.jsx)(o.Li,{children:(0,s.jsx)(i.rU,{to:"/movies/".concat(n.id),children:n.original_title||n.name})},n.id)})),l&&(0,s.jsx)(a.a,{})]})]})}},614:function(n,e,t){t.d(e,{H1:function(){return s},Li:function(){return p},o:function(){return o}});var r,a,u,c=t(168),i=t(444),o=i.ZP.main(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n"]))),s=i.ZP.h1(a||(a=(0,c.Z)(["\n  font-size: 32px;\n  margin-bottom: 20px;\n"]))),p=i.ZP.li(u||(u=(0,c.Z)(["\n  font-size: 20px;\n"])))},854:function(n,e,t){t.d(e,{a:function(){return u}});var r=t(402),a=t(184),u=function(){return(0,a.jsx)("div",{children:(0,a.jsx)(r.NB,{visible:!0,height:"160",width:"160",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},870:function(n,e,t){t.d(e,{Hg:function(){return o},Oq:function(){return p},o_:function(){return f},sd:function(){return d},z1:function(){return s}});var r=t(861),a=t(757),u=t.n(a),c=t(243),i="2634ebd1e012827785177b9737b602d5";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=765.033d3f9e.chunk.js.map