(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-link/u-link"],{654:function(n,t,e){"use strict";e.r(t);var i=e(655),u=e(657);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e(660);var o,c=e(11),a=Object(c["default"])(u["default"],i["render"],i["staticRenderFns"],!1,null,"15816aae",null,!1,i["components"],o);a.options.__file="uni_modules/uview-ui/components/u-link/u-link.vue",t["default"]=a.exports},655:function(n,t,e){"use strict";e.r(t);var i=e(656);e.d(t,"render",(function(){return i["render"]})),e.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]})),e.d(t,"recyclableRender",(function(){return i["recyclableRender"]})),e.d(t,"components",(function(){return i["components"]}))},656:function(n,t,e){"use strict";var i;e.r(t),e.d(t,"render",(function(){return u})),e.d(t,"staticRenderFns",(function(){return o})),e.d(t,"recyclableRender",(function(){return r})),e.d(t,"components",(function(){return i}));var u=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__get_style([n.linkStyle,n.$u.addStyle(n.customStyle)]));n.$mp.data=Object.assign({},{$root:{s0:e}})},r=!1,o=[];u._withStripped=!0},657:function(n,t,e){"use strict";e.r(t);var i=e(658),u=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=u.a},658:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(e(659));function u(n){return n&&n.__esModule?n:{default:n}}var r={name:"u-link",mixins:[n.$u.mpMixin,n.$u.mixin,i.default],computed:{linkStyle:function(){var t={color:this.color,fontSize:n.$u.addUnit(this.fontSize),lineHeight:n.$u.addUnit(n.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return t}},methods:{openLink:function(){var t=this;n.setClipboardData({data:this.href,success:function(){n.hideToast(),t.$nextTick((function(){n.$u.toast(t.mpTips)}))}}),this.$emit("click")}}};t.default=r}).call(this,e(1)["default"])},660:function(n,t,e){"use strict";e.r(t);var i=e(661),u=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=u.a},661:function(n,t,e){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-link/u-link.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-link/u-link-create-component',
    {
        'uni_modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(654))
        })
    },
    [['uni_modules/uview-ui/components/u-link/u-link-create-component']]
]);
