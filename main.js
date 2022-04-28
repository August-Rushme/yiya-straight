import Vue from 'vue'
import App from './App'


// 引入全局组件
import uView from '@/uni_modules/uview-ui'
import divider from "@/components/common/divider.vue"

// 挂载全局属性
import message from './service/request/message.js'
import http from './service/request/index.js'

//导入store
import store from '@/store/index.js'

// import GoEasy from 'goeasy'
// const goEasy = GoEasy.getInstance({
//   host: "hangzhou.goeasy.io", //应用所在的区域地址: 【hangzhou.goeasy.io |singapore.goeasy.io】
//   appkey: "BC-e96694fd44c241118ac251cc61492c8d", // common key
//   // true表示支持通知栏提醒，false则表示不需要通知栏提醒
//   allowNotification: true, //仅有效于app，小程序和H5将会被自动忽略
//   modules: ['pubsub'],
// });

Vue.prototype.$message = message
Vue.prototype.$http = http




// goEasy.connect({
//   onSuccess: function() {
//     console.log("GoEasy connect successfully.")
//   },
//   onFailed: function(error) {
//     console.log("Failed to connect GoEasy, code:" + error.code + ",error:" + error.content);
//     uni.showModal({
//       title: error.code.toString(),
//       content: error.content,
//       showCancel: false,
//       duration: 6000
//     })
//   },
//   onProgress: function(attempts) {
//     console.log("GoEasy is connecting", attempts);
//   }
// });


Vue.use(uView)
Vue.component('divider', divider)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})


app.$mount()
