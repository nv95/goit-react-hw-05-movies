"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[387],{387:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,c,u,i,o=t(439),s=t(791),p=t(689),f=t(168),d=t(444),l=d.ZP.ul(r||(r=(0,f.Z)(["\n  padding: 0;\n  list-style: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  gap: 12px;\n"]))),g=d.ZP.li(a||(a=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  border: 1px solid #e8e8e8;\n  box-shadow: 0px 0px 8px #e8e8e8;\n  border-radius: 8px;\n"]))),h=d.ZP.h3(c||(c=(0,f.Z)(["\n  margin: 12px 0 4px 0;\n  font-weight: 700;\n"]))),m=d.ZP.p(u||(u=(0,f.Z)(["\n  margin: 0;\n  color: grey;\n"]))),x=d.ZP.img(i||(i=(0,f.Z)(["\n  width: 100%;\n  height: 350px;\n  border-radius: 4px;\n"]))),v=t(870),w=t(184),y=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,p.UO)().movieId;return(0,s.useEffect)((function(){(0,v.o_)(a).then((function(n){return r(n.cast)}))}),[a]),(0,w.jsx)(l,{children:t.length>0?t.map((function(n){var e=n.id,t=n.name,r=n.profile_path,a=n.character;return(0,w.jsxs)(g,{children:[(0,w.jsx)(x,{src:r?"https://image.tmdb.org/t/p/w200".concat(r):"http://www.suryalaya.org/images/no_image.jpg",alt:"actor",loading:"lazy",width:120,height:180}),(0,w.jsx)(h,{children:t}),(0,w.jsxs)(m,{children:[" Character: ",a]})]},e)})):"Sorry, there isn't any info :("})}},870:function(n,e,t){t.d(e,{Hg:function(){return o},Oq:function(){return p},o_:function(){return f},sd:function(){return d},z1:function(){return s}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="2634ebd1e012827785177b9737b602d5";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=387.3e7a8e52.chunk.js.map