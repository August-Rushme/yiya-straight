(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-album/u-album"],{494:function(t,e,n){"use strict";n.r(e);var i=n(495),r=n(497);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n(500);var o,s=n(11),a=Object(s["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"02546599",null,!1,i["components"],o);a.options.__file="uni_modules/uview-ui/components/u-album/u-album.vue",e["default"]=a.exports},495:function(t,e,n){"use strict";n.r(e);var i=n(496);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},496:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return u})),n.d(e,"components",(function(){return i}));try{i={"u-Text":function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u--text/u--text")]).then(n.bind(null,528))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.showUrls,(function(e,n){var i=t.__get_orig(e),r=t.__map(e,(function(e,i){var r=t.__get_orig(e),u=t.__get_style([t.imageStyle(n+1,i+1)]),o=t.getSrc(e);return{$orig:r,s0:u,m0:o}}));return{$orig:i,l0:r}})));t._isMounted||(t.e0=function(e,n){var i=arguments[arguments.length-1].currentTarget.dataset,r=i.eventParams||i["event-params"];n=r.item;t.previewFullImage&&t.onPreviewTap(t.getSrc(n))}),t.$mp.data=Object.assign({},{$root:{l1:n}})},u=!1,o=[];r._withStripped=!0},497:function(t,e,n){"use strict";n.r(e);var i=n(498),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},498:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=u(n(34)),r=u(n(499));function u(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n,i,r,u,o){try{var s=t[u](o),a=s.value}catch(c){return void n(c)}s.done?e(a):Promise.resolve(a).then(i,r)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var u=t.apply(e,n);function s(t){o(u,i,r,s,a,"next",t)}function a(t){o(u,i,r,s,a,"throw",t)}s(void 0)}))}}var a={name:"u-album",mixins:[t.$u.mpMixin,t.$u.mixin,r.default],data:function(){return{singleWidth:0,singleHeight:0,singlePercent:.6}},watch:{urls:{immediate:!0,handler:function(t){1===t.length&&this.getImageRect()}}},computed:{imageStyle:function(){var e=this;return function(n,i){var r=e.space,u=e.rowCount,o=(e.multipleSize,e.urls,t.$u),s=o.addUnit,a=(o.addStyle,e.showUrls.length),c=(e.urls.length,{marginRight:s(r),marginBottom:s(r)});return n===a&&(c.marginBottom=0),(i===u||n===a&&i===e.showUrls[n-1].length)&&(c.marginRight=0),c}},showUrls:function(){var t=this,e=[];return this.urls.map((function(n,i){if(i+1<=t.maxCount){var r=Math.floor(i/t.rowCount);e[r]||(e[r]=[]),e[r].push(n)}})),e},imageWidth:function(){return t.$u.addUnit(1===this.urls.length?this.singleWidth:this.multipleSize)},imageHeight:function(){return t.$u.addUnit(1===this.urls.length?this.singleHeight:this.multipleSize)},albumWidth:function(){var t=0;return t=1===this.urls.length?this.singleWidth:this.showUrls[0].length*this.multipleSize+this.space*(this.showUrls[0].length-1),this.$emit("albumWidth",t),t}},methods:{onPreviewTap:function(e){var n=this,i=this.urls.map((function(t){return n.getSrc(t)}));t.previewImage({current:e,urls:i})},getSrc:function(e){return t.$u.test.object(e)?this.keyName&&e[this.keyName]||e.src:e},getImageRect:function(){var e=this,n=this.getSrc(this.urls[0]);t.getImageInfo({src:n,success:function(t){var n=t.width>=t.height;e.singleWidth=n?e.singleSize:t.width/t.height*e.singleSize,e.singleHeight=n?t.height/t.width*e.singleWidth:e.singleSize},fail:function(){e.getComponentWidth()}})},getComponentWidth:function(){var e=this;return s(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$u.sleep(30);case 2:e.$uGetRect(".u-album__row").then((function(t){e.singleWidth=t.width*e.singlePercent}));case 3:case"end":return n.stop()}}),n)})))()}}};e.default=a}).call(this,n(1)["default"])},500:function(t,e,n){"use strict";n.r(e);var i=n(501),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=r.a},501:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uview-ui/components/u-album/u-album.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-album/u-album-create-component',
    {
        'uni_modules/uview-ui/components/u-album/u-album-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(494))
        })
    },
    [['uni_modules/uview-ui/components/u-album/u-album-create-component']]
]);
