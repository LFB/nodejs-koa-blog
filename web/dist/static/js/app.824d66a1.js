(function(e){function t(t){for(var n,a,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return s.p+"static/js/"+({about:"about",articleDetail:"articleDetail",articlesList:"articlesList"}[e]||e)+"."+{about:"9b9a18a5",articleDetail:"6a4cc04f",articlesList:"b06884b6"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1,articleDetail:1,articlesList:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="static/css/"+({about:"about",articleDetail:"articleDetail",articlesList:"articlesList"}[e]||e)+"."+{about:"87a71f31",articleDetail:"33086726",articlesList:"c9f56fe0"}[e]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="http://images.boblog.com/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"121d":function(e,t,r){"use strict";r.r(t);var n={loadingList:[],isLoading:!0},a={PUSH_LOADING:function(e,t){e.loadingList.push({text:t||"加载中.."})},SHIFT_LOADING:function(e){e.loadingList.shift()},SHOULD_LOADING:function(e,t){e.isLoading=t}},o={isLoading:function(e){return e.loadingList.length>0},loadingText:function(e){return e.loadingList.length>0?e.loadingList[0].text:null}},i={openLoading:function(e,t){e.commit("PUSH_LOADING",t)},closeLoading:function(e){e.commit("SHIFT_LOADING")}};t["default"]={namespaced:!0,state:n,mutations:a,getters:o,actions:i}},3474:function(e,t,r){"use strict";var n=r("d42d"),a=r.n(n);a.a},4360:function(e,t,r){"use strict";r("4160"),r("d3b7"),r("ac1f"),r("5319"),r("159b"),r("ddb0");var n=r("2b0e"),a=r("2f62");n["a"].use(a["a"]);var o=new a["a"].Store({mutations:{},actions:{}}),i=r("c653");function c(e){e.keys().forEach((function(t){o.registerModule(t.replace(/(^\.\/)|(\.js$)/g,""),e(t).default)}))}c(i),t["a"]=o},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("d3b7"),r("96cf");var n=r("aa30"),a=r("9259"),o=r("96c4"),i=r("8d8f"),c=r("64e9"),s=r("be95"),u=r("674c"),l=r("65eb"),d=r("e3f5"),f=r("5250"),p=r("beb5"),m=r("2b0e"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.isLoading?r("v-loading",{attrs:{text:e.loadingText}}):e._e(),r("v-headers"),r("router-view"),r("BackTop"),r("v-footer")],1)},v=[],b=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),h=r("2f62"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"loading-wrap"},[r("div",{staticClass:"loading-box"}),r("div",{staticClass:"loading-text"},[e._v(e._s(e.text))])])},y=[],x={props:["text"],data:function(){return{}},computed:{},mounted:function(){},methods:{}},L=x,O=(r("b3ea"),r("2877")),_=Object(O["a"])(L,w,y,!1,null,"2629b14a",null),E=_.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header-wrap"},[n("section",{staticClass:"header-inner"},[n("div",{staticClass:"logo"},[n("div",{staticClass:"logo-box",on:{click:function(t){return e.toLink("/")}}},[n("img",{attrs:{src:r("9d64"),alt:"logo"}})])]),n("div",{staticClass:"nav"},[n("ul",{staticClass:"nav-box"},e._l(e.nav,(function(t,r){return n("li",{key:r,class:r===e.navIndex?"nav-item nav-item-active":"nav-item",on:{click:function(n){return e.toLink(t.router,r===e.navIndex)}}},[e._v(" "+e._s(t.name)+" ")])})),0)]),n("div",{staticClass:"search"},[n("Input",{staticStyle:{width:"auto"},attrs:{size:"default",suffix:"ios-search",placeholder:"搜索文章.."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)])])},T=[];r("b0c0"),r("ac1f"),r("5319");function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(r,!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={name:"",computed:C({},Object(h["d"])({navIndex:function(e){return e.headers.navIndex}})),data:function(){return{keyword:"",nav:[{name:"文章",router:"/"},{name:"关于",router:"/about"}]}},methods:{toLink:function(e,t){t||this.$router.push(e)},search:function(){var e="/articles?keyword="+this.keyword;"article-list"!==this.$route.name?this.$router.push(e):window.location.replace(e)}}},S=P,I=(r("3474"),Object(O["a"])(S,j,T,!1,null,"a610529e",null)),D=I.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"Footer-wrap"},[r("footer",{staticClass:"footer-inner"},[r("p",[e._v("www.boblog.com - 波博客 Copyright© Author梁凤波 itbo@163.com")]),r("p",[r("a",{attrs:{href:"http://www.miit.gov.cn",target:"_blank"}},[e._v("粤ICP备18001135号-3")])])])])}],N=(r("cec8"),{}),H=Object(O["a"])(N,A,R,!1,null,"5b1670b8",null),U=H.exports;function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(r,!0).forEach((function(t){Object(b["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={components:{VLoading:E,VHeaders:D,VFooter:U},computed:B({},Object(h["c"])("loading",["isLoading","loadingText"]))},F=$,V=(r("7c55"),Object(O["a"])(F,g,v,!1,null,null,null)),G=V.exports,K=r("8c4f");m["a"].use(K["a"]);var q=[{path:"/",meta:{navIndex:0},name:"article-list",component:function(){return r.e("articlesList").then(r.bind(null,"73d4"))}},{path:"/article/detail",meta:{navIndex:-1},name:"article-detail",component:function(){return r.e("articleDetail").then(r.bind(null,"ca09"))}},{path:"/about",meta:{navIndex:1},name:"about",component:function(){return r.e("about").then(r.bind(null,"754b"))}}],W=new K["a"]({mode:"history",base:Object({NODE_ENV:"production",VUE_APP_BASE_API:"https://www.boblog.com/v1/api",BASE_URL:"http://images.boblog.com/"}).PUBLIC_PATH,routes:q,scrollBehavior:function(e,t,r){return r||{x:0,y:0}}}),X=W,z=r("4360"),J=r("c16e"),Y=r.n(J),Q=(r("499a"),r("f8ce"),r("caf9")),Z=r("b2d8"),ee=r.n(Z);r("64e1");m["a"].component("Input",p["a"]),m["a"].component("Icon",f["a"]),m["a"].component("Button",d["a"]),m["a"].component("Drawer",l["a"]),m["a"].component("Avatar",u["a"]),m["a"].component("Page",s["a"]),m["a"].component("BackTop",c["a"]),m["a"].component("Form",i["a"]),m["a"].component("FormItem",o["a"]),m["a"].component("Modal",a["a"]),m["a"].use(Q["a"],{error:r("9d64"),loading:r("9d64")}),m["a"].use(ee.a),m["a"].prototype.$Message=n["a"],m["a"].config.productionTip=!1,m["a"].use(Y.a,{namespace:"boblog__",name:"ls",storage:"local"}),X.beforeEach((function(e,t,r){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:z["a"].commit("headers/SET_NAV_INDEX",e.meta.navIndex),r();case 2:case"end":return t.stop()}}))})),new m["a"]({router:X,store:z["a"],render:function(e){return e(G)}}).$mount("#app")},"5ba8":function(e,t,r){},"5e84":function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("e1d2"),a={list:function(e){return n["a"].get("/article",e)},detail:function(e){var t=e.id;return delete e.id,n["a"].get("/article/"+t,e)}},o={},i={},c={list:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,regeneratorRuntime.awrap(a.list(t));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}))},detail:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,regeneratorRuntime.awrap(a.detail(t));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}))}};t["default"]={namespaced:!0,state:o,mutations:i,actions:c}},"7c55":function(e,t,r){"use strict";var n=r("5ba8"),a=r.n(n);a.a},"8ffc":function(e,t,r){},"9d64":function(e,t,r){e.exports=r.p+"static/img/logo.464bd5d7.png"},aa4a:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("e1d2"),a={create:function(e){return n["a"].post("/reply",e)}},o={},i={},c={createReply:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,regeneratorRuntime.awrap(a.create(t));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}))}};t["default"]={namespaced:!0,state:o,actions:c,mutations:i}},b3ea:function(e,t,r){"use strict";var n=r("8ffc"),a=r.n(n);a.a},ba6e:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("e1d2"),a={list:function(e){return n["a"].get("/advertise",e)}},o={advertiseList:[]},i={SET_ADVERTISE_LIST:function(e,t){e.advertiseList=t}},c={list:function(e,t){var r,n,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(r=e.state,n=e.commit,!(r.advertiseList&&r.advertiseList.length>0)){i.next=3;break}return i.abrupt("return",r.advertiseList);case 3:return i.next=5,regeneratorRuntime.awrap(a.list(t));case 5:return o=i.sent,n("SET_ADVERTISE_LIST",o.data.data.data),i.abrupt("return",o);case 8:case"end":return i.stop()}}))}};t["default"]={namespaced:!0,state:o,actions:c,mutations:i}},c42d:function(e,t,r){},c653:function(e,t,r){var n={"./advertise.js":"ba6e","./articles.js":"5e84","./category.js":"d0c1","./comment.js":"f07f","./headers.js":"d0120","./loading.js":"121d","./reply.js":"aa4a"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="c653"},cec8:function(e,t,r){"use strict";var n=r("c42d"),a=r.n(n);a.a},d0120:function(e,t,r){"use strict";r.r(t);var n={navIndex:0},a={SET_NAV_INDEX:function(e,t){e.navIndex=t}},o={};t["default"]={namespaced:!0,state:n,mutations:a,actions:o}},d0c1:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("e1d2"),a={list:function(e){return n["a"].get("/category",e)}},o={categoryList:[]},i={SET_CATEGORY_LIST:function(e,t){e.categoryList=t}},c={list:function(e,t){var r,n,o;return regeneratorRuntime.async((function(i){while(1)switch(i.prev=i.next){case 0:if(r=e.state,n=e.commit,!(r.categoryList&&r.categoryList.length>0)){i.next=3;break}return i.abrupt("return",r.categoryList);case 3:return i.next=5,regeneratorRuntime.awrap(a.list(t));case 5:return o=i.sent,n("SET_CATEGORY_LIST",o.data.data),i.abrupt("return",o);case 8:case"end":return i.stop()}}))}};t["default"]={namespaced:!0,state:o,actions:c,mutations:i}},d42d:function(e,t,r){},e1d2:function(e,t,r){"use strict";r("99af"),r("4160"),r("c975"),r("a15b"),r("d3b7"),r("159b");var n=r("4328"),a=r.n(n),o=r("2b0e"),i=r("bc3a"),c=r.n(i),s={},u="https://www.boblog.com/v1/api";s.ajax=c.a.create({baseURL:u,timeout:3e4}),s.api=u,s.oauthUrl=u;var l=s,d=r("4360");l.ajax.defaults.headers.common={"X-Requested-With":"XMLHttpRequest"},l.ajax.interceptors.request.use((function(e){var t=e.isLoading||void 0===e.isLoading;return t&&d["a"].dispatch("loading/openLoading"),e.headers.common.Authorization="Bearer ".concat(o["a"].ls.get("WATCH_CHECK_TOKEN")),e}),(function(e){return Promise.reject(e)})),l.ajax.interceptors.response.use((function(e){var t=e.headers["new-token"];return t&&o["a"].ls.set("WATCH_CHECK_TOKEN",t),f(),e}),(function(e){var t=e.response,r=[];t&&t.config&&t.config.extraErrors?r=t.config.extraErrors:t&t.config&&t.config.params&&t.config.params.extraErrors&&(r=t.config.params.extraErrors);var n=t?t.data:{},a=n.code;if(-1===r.indexOf(a))switch(a){case 401:o["a"].ls.set("WATCH_CHECK_TOKEN",null),window.location.href="".concat("https://www.boblog.com/v1/api","/wechat-server/code?target_url=").concat(encodeURIComponent(document.URL));break;case 404:console.log("查询信息不存在");break;case 413:console.log(t.data.message);break;case 418:console.log(t.data.message);break;case 422:t.data.errors?function(){var e=[];for(var r in t.data.errors)t.data.errors[r].forEach((function(t){e.push(t)}));var n=e.length>0?e.join("，"):e;console.log(n)}():console.log(t.data.message);break;case 500:console.log(t.data.message||"服务器开了一会小差~","error");break;default:console.log(t.data.message)}return f(),Promise.reject(e)}));t["a"]={post:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isLoading,n=void 0===r||r,o=t.extraErrors,i=void 0===o?[]:o;return l.ajax({method:"post",url:e,data:a.a.stringify(t),timeout:3e4,isLoading:n,extraErrors:i,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})},get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isLoading,n=void 0===r||r,o=t.extraErrors,i=void 0===o?[]:o;return l.ajax({method:"get",url:e,params:t,paramsSerializer:function(e){return a.a.stringify(e)},isLoading:n,extraErrors:i})},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isLoading,n=void 0===r||r,a=t.extraErrors,o=void 0===a?[]:a;return l.ajax({method:"delete",url:e,params:t,isLoading:n,extraErrors:o})},put:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.isLoading,n=void 0===r||r,o=t.extraErrors,i=void 0===o?[]:o;return l.ajax({method:"put",url:e,data:a.a.stringify(t),isLoading:n,extraErrors:i,timeout:3e4,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}})}};function f(){setTimeout((function(){d["a"].dispatch("loading/closeLoading")}),100)}},f07f:function(e,t,r){"use strict";r.r(t);r("d3b7"),r("96cf");var n=r("e1d2"),a={list:function(e){return n["a"].get("/comment/target/list",e)},create:function(e){return n["a"].post("/comment",e)}},o={commentList:[],commentPage:null},i={SET_COMMENT_LIST:function(e,t){e.commentList=t},SET_COMMENT_PAGE:function(e,t){e.commentPage=t}},c={getCommentList:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,regeneratorRuntime.awrap(a.list(t));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}))},createComment:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return e.state,e.commit,n.next=3,regeneratorRuntime.awrap(a.create(t));case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}))}};t["default"]={namespaced:!0,state:o,actions:c,mutations:i}}});