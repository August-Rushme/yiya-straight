(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-image/u-image"],{531:function(n,e,i){"use strict";i.r(e);var t=i(532),r=i(534);for(var o in r)"default"!==o&&function(n){i.d(e,n,(function(){return r[n]}))}(o);i(536);var u,d=i(11),a=Object(d["default"])(r["default"],t["render"],t["staticRenderFns"],!1,null,"042b391e",null,!1,t["components"],u);a.options.__file="uni_modules/uview-ui/components/u-image/u-image.vue",e["default"]=a.exports},532:function(n,e,i){"use strict";i.r(e);var t=i(533);i.d(e,"render",(function(){return t["render"]})),i.d(e,"staticRenderFns",(function(){return t["staticRenderFns"]})),i.d(e,"recyclableRender",(function(){return t["recyclableRender"]})),i.d(e,"components",(function(){return t["components"]}))},533:function(n,e,i){"use strict";var t;i.r(e),i.d(e,"render",(function(){return r})),i.d(e,"staticRenderFns",(function(){return u})),i.d(e,"recyclableRender",(function(){return o})),i.d(e,"components",(function(){return t}));try{t={uTransition:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-transition/u-transition")]).then(i.bind(null,575))},uIcon:function(){return Promise.all([i.e("common/vendor"),i.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(i.bind(null,426))}}}catch(d){if(-1===d.message.indexOf("Cannot find module")||-1===d.message.indexOf(".vue"))throw d;console.error(d.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var n=this,e=n.$createElement,i=(n._self._c,n.__get_style([n.wrapStyle,n.backgroundStyle])),t=n.isError||"circle"==n.shape?null:n.$u.addUnit(n.radius),r=n.isError?null:n.$u.addUnit(n.width),o=n.isError?null:n.$u.addUnit(n.height),u=n.showLoading&&n.loading&&"circle"!=n.shape?n.$u.addUnit(n.radius):null,d=n.showLoading&&n.loading?n.$u.addUnit(n.width):null,a=n.showLoading&&n.loading?n.$u.addUnit(n.height):null,s=n.showError&&n.isError&&!n.loading&&"circle"!=n.shape?n.$u.addUnit(n.radius):null,l=n.showError&&n.isError&&!n.loading?n.$u.addUnit(n.width):null,c=n.showError&&n.isError&&!n.loading?n.$u.addUnit(n.height):null;n.$mp.data=Object.assign({},{$root:{s0:i,g0:t,g1:r,g2:o,g3:u,g4:d,g5:a,g6:s,g7:l,g8:c}})},o=!1,u=[];r._withStripped=!0},534:function(n,e,i){"use strict";i.r(e);var t=i(535),r=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,(function(){return t[n]}))}(o);e["default"]=r.a},535:function(n,e,i){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=r(i(488));function r(n){return n&&n.__esModule?n:{default:n}}var o={name:"u-image",mixins:[n.$u.mpMixin,n.$u.mixin,t.default],data:function(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler:function(n){n?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle:function(){var e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"10000px":n.$u.addUnit(this.radius),e.overflow=this.borderRadius>0?"hidden":"visible",n.$u.deepMerge(e,n.$u.addStyle(this.customStyle))}},mounted:function(){this.show=!0},methods:{onClick:function(){this.$emit("click")},onErrorHandler:function(n){this.loading=!1,this.isError=!0,this.$emit("error",n)},onLoadHandler:function(){this.loading=!1,this.isError=!1,this.$emit("load"),this.removeBgColor()},removeBgColor:function(){this.backgroundStyle={backgroundColor:"transparent"}}}};e.default=o}).call(this,i(1)["default"])},536:function(n,e,i){"use strict";i.r(e);var t=i(537),r=i.n(t);for(var o in t)"default"!==o&&function(n){i.d(e,n,(function(){return t[n]}))}(o);e["default"]=r.a},537:function(n,e,i){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-image/u-image.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-image/u-image-create-component',
    {
        'uni_modules/uview-ui/components/u-image/u-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(531))
        })
    },
    [['uni_modules/uview-ui/components/u-image/u-image-create-component']]
]);
