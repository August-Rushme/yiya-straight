(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/test/test"],{39:function(e,t,n){"use strict";(function(e){n(6);s(n(4));var t=s(n(40));function s(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(2)["createPage"])},40:function(e,t,n){"use strict";n.r(t);var s=n(41),r=n(43);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n(45);var a,o=n(16),i=Object(o["default"])(r["default"],s["render"],s["staticRenderFns"],!1,null,null,null,!1,s["components"],a);i.options.__file="pages/test/test.vue",t["default"]=i.exports},41:function(e,t,n){"use strict";n.r(t);var s=n(42);n.d(t,"render",(function(){return s["render"]})),n.d(t,"staticRenderFns",(function(){return s["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return s["recyclableRender"]})),n.d(t,"components",(function(){return s["components"]}))},42:function(e,t,n){"use strict";var s;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return a})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return s}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=!1,a=[];r._withStripped=!0},43:function(e,t,n){"use strict";n.r(t);var s=n(44),r=n.n(s);for(var u in s)"default"!==u&&function(e){n.d(t,e,(function(){return s[e]}))}(u);t["default"]=r.a},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=getApp().globalData.goEasy,r=s.pubsub,u={data:function(){return{message:"",messages:[]}},onLoad:function(){var e=this;r.subscribe({channel:"my_channel",onMessage:function(t){e.unshiftMessage(t.content)},onSuccess:function(){e.unshiftMessage("已经连接到医生助手")},onFailed:function(t){e.unshiftMessage("订阅失败，错误编码："+t.code+" 错误信息："+t.content)}})},methods:{sendMessage:function(){if(""!=this.message.trim()){var e=this,t=this.message;this.message.length>=50&&(t=this.message.substring(0,30)+"..."),r.publish({channel:"my_channel",message:this.message,notification:{title:"收到一条新消息",body:t},onSuccess:function(){e.message=""},onFailed:function(t){e.unshiftMessage("消息发送失败，错误编码："+t.code+" 错误信息："+t.content)}})}},unshiftMessage:function(e){var t=this.formatDate(new Date,"hh:mm"),n=t+" "+e;this.messages.unshift(n)},formatDate:function(e,t){var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var s in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)n.hasOwnProperty(s)&&new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?n[s]:("00"+n[s]).substr((""+n[s]).length)));return t}}};t.default=u},45:function(e,t,n){"use strict";n.r(t);var s=n(46),r=n.n(s);for(var u in s)"default"!==u&&function(e){n.d(t,e,(function(){return s[e]}))}(u);t["default"]=r.a},46:function(e,t,n){}},[[39,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/test/test.js.map