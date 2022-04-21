(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{270:function(e,n,t){"use strict";(function(e){t(5);r(t(3));var n=r(t(271));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},271:function(e,n,t){"use strict";t.r(n);var r=t(272),o=t(274);for(var c in o)"default"!==c&&function(e){t.d(n,e,(function(){return o[e]}))}(c);var u,i=t(11),s=Object(i["default"])(o["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],u);s.options.__file="pages/login/login.vue",n["default"]=s.exports},272:function(e,n,t){"use strict";t.r(n);var r=t(273);t.d(n,"render",(function(){return r["render"]})),t.d(n,"staticRenderFns",(function(){return r["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return r["recyclableRender"]})),t.d(n,"components",(function(){return r["components"]}))},273:function(e,n,t){"use strict";var r;t.r(n),t.d(n,"render",(function(){return o})),t.d(n,"staticRenderFns",(function(){return u})),t.d(n,"recyclableRender",(function(){return c})),t.d(n,"components",(function(){return r}));try{r={uIcon:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(t.bind(null,424))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.check=!e.check})},c=!1,u=[];o._withStripped=!0},274:function(e,n,t){"use strict";t.r(n);var r=t(275),o=t.n(r);for(var c in r)"default"!==c&&function(e){t.d(n,e,(function(){return r[e]}))}(c);n["default"]=o.a},275:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(t(34)),o=t(140);function c(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,r,o,c,u){try{var i=e[c](u),s=i.value}catch(a){return void t(a)}i.done?n(s):Promise.resolve(s).then(r,o)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var c=e.apply(n,t);function i(e){u(c,r,o,i,s,"next",e)}function s(e){u(c,r,o,i,s,"throw",e)}i(void 0)}))}}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var f=function(){t.e("components/uni-ui/uni-status-bar/uni-status-bar").then(function(){return resolve(t(526))}.bind(null,t)).catch(t.oe)},d={components:{uniStatusBar:f},data:function(){return{username:"",password:"",check:!0,rules:{username:[{rule:/^[a-zA-Z]\w{5,17}$/,msg:"账号必须字母开头，长度在6~18之间，只能包含字母、数字和下划线"}],password:[{rule:/^.{5,20}$/,msg:"密码长度必须为5-20个字符"}]},focusClass:{username:!1,password:!1}}},methods:a(a({},(0,o.mapActions)(["loginByAccountAction"])),{},{goBack:function(){e.navigateBack({delta:1})},validate:function(n){var t=this,r=!0;return this.rules[n].forEach((function(o){if(!o.rule.test(t[n]))return e.showToast({title:o.msg,icon:"none"}),r=!1,!1})),r},submit:function(){var n=this;return i(r.default.mark((function t(){var o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=n,n.check){t.next=3;break}return t.abrupt("return",e.showToast({title:"请先同意XXXXX协议",icon:"none"}));case 3:if(n.validate("username")){t.next=5;break}return t.abrupt("return");case 5:if(n.validate("password")){t.next=7;break}return t.abrupt("return");case 7:n.loginByAccountAction({username:o.username,password:o.password}),n.goBack();case 9:case"end":return t.stop()}}),t)})))()},loginByWx:function(){var n=this;e.getUserProfile({desc:"用户登录",success:function(t){e.login({provider:"weixin",success:function(e){return i(r.default.mark((function t(){var o;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,n.$http.post("/user/loginByWx",{code:e.code});case 3:o=t.sent,console.log(o);case 5:case"end":return t.stop()}}),t)})))()}})}})},goToRegester:function(){e.navigateTo({url:"/pages/register-account/register-account"})},forget:function(){console.log(123)}})};n.default=d}).call(this,t(1)["default"])}},[[270,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map