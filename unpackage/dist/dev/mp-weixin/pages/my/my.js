(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{161:function(e,n,t){"use strict";(function(e){t(5);o(t(3));var n=o(t(162));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t(1)["createPage"])},162:function(e,n,t){"use strict";t.r(n);var o=t(163),r=t(165);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t(167);var c,i=t(11),u=Object(i["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"0be17cc6",null,!1,o["components"],c);u.options.__file="pages/my/my.vue",n["default"]=u.exports},163:function(e,n,t){"use strict";t.r(n);var o=t(164);t.d(n,"render",(function(){return o["render"]})),t.d(n,"staticRenderFns",(function(){return o["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return o["recyclableRender"]})),t.d(n,"components",(function(){return o["components"]}))},164:function(e,n,t){"use strict";var o;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return c})),t.d(n,"recyclableRender",(function(){return a})),t.d(n,"components",(function(){return o}));try{o={uAvatar:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uview-ui/components/u-avatar/u-avatar")]).then(t.bind(null,341))}}}catch(i){if(-1===i.message.indexOf("Cannot find module")||-1===i.message.indexOf(".vue"))throw i;console.error(i.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,n=e.$createElement;e._self._c},a=!1,c=[];r._withStripped=!0},165:function(e,n,t){"use strict";t.r(n);var o=t(166),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},166:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(140);function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i={data:function(){return{otherNav:[{name:"全部订单",src:"/static/images/order.png",pageName:"order"},{name:"我的优惠卷",src:"/static/images/coupon.png",pageName:"coupon"},{name:"我的消息",src:"/static/images/message.png",pageName:"message"},{name:"设置个人信息",src:"/static/images/setInfo.png",pageName:"setInfo"},{name:"联系客服",src:"/static/images/server.png",pageName:"server"},{name:"切换账号",src:"/static/images/switchAccount.png",pageName:"login"}]}},computed:a({},(0,o.mapState)(["username","avatar","token"])),onShow:function(){this.localLoginAction()},methods:a(a({},(0,o.mapActions)(["localLoginAction"])),{},{gotoLogin:function(){e.navigateTo({url:"/pages/login/login"})},goSetInfo:function(){this.token?e.navigateTo({url:"/pages/setInfo/setInfo"}):e.navigateTo({url:"/pages/login/login"})},goToDedical:function(){e.navigateTo({url:"/pages/medical/medical"})},goToRecord:function(){e.navigateTo({url:"/pages/record/record"})},goToAppointment:function(){e.navigateTo({url:"/pages/appointment/appointment"})},goToAboutUs:function(){e.navigateTo({url:"/pages/aboutUs/aboutUs"})},goToPage:function(n){if(this.token){var t="/pages/"+n+"/"+n;e.navigateTo({url:t})}else e.navigateTo({url:"/pages/login/login"})}})};n.default=i}).call(this,t(1)["default"])},167:function(e,n,t){"use strict";t.r(n);var o=t(168),r=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,(function(){return o[e]}))}(a);n["default"]=r.a},168:function(e,n,t){}},[[161,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map