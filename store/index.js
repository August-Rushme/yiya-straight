import Vue from 'vue';
import Vuex from 'vuex';
import http from '../service/request/index.js';
import message from '../service/request/message.js';
import {
  addAppointment
} from '../service/appoinment/http-appoinment.js'
Vue.use(Vuex);
const store = new Vuex.Store({
<<<<<<< HEAD
  state: {
    username: '默认昵称',
    avatar: '',
    token: '',
    userInfo: '',
  },
  mutations: {
    changeUsername(state, payload) {
      state.username = payload
      uni.setStorageSync('username', payload);
    },
    changeAvatar(state, payload) {
      state.avatar = payload
      uni.setStorageSync('avatar', payload);
    },
    changeToken(state, payload) {
      state.token = payload
      uni.setStorageSync('token', payload);
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
      uni.setStorageSync('userInfo', payload);
    }
  },
  actions: {
    async loginByAccountAction({
      commit,
      state
    }, payload) {
      const res = await http.post('/user/loginByAccount', {
        userName: payload.username,
        password: payload.password
      });
      if (res === '用户名不存在') {
        return message.message("账号或者密码错误")
      } else {
        commit('changeUsername', res.user.nickname);
        commit('changeAvatar', res.user.photo);
        commit('changeToken', res.token);
        commit('changeUserInfo', res.user);
        message.message("登录成功")
      }
=======
	state: {
		username: '默认昵称',
		avatar: '',
		token: '',
		userInfo: ''
	},
	mutations:{
		changeUsername(state,payload){
			state.username = payload
			uni.setStorageSync('username',payload);
		},
		changeAvatar(state,payload){
			state.avatar = payload
			uni.setStorageSync('avatar',payload);
		},
		changeToken(state,payload){
			state.token = payload
			uni.setStorageSync('token',payload);
		},
		changeUserInfo(state,payload){
			state.userInfo = payload
			uni.setStorageSync('userInfo',payload);
		}
	},
	actions: {
	   async loginByAccountAction({commit,state},payload){
		const res = await http.post('/user/loginByAccount', {
		  userName: payload.username,
		  password: payload.password
		});
		if(!res.user){
		 return message.message("账号或者密码错误")
		}else{
			commit('changeUsername',res.user.nickname);
			commit('changeAvatar',res.user.photo);
			commit('changeToken',res.token);
			commit('changeUserInfo',res.user);
			message.message("登录成功")
		}
>>>>>>> bc2f93a7c15c0dde71c4e2bae1389f9280a21208


    },
    localLoginAction({
      commit
    }) {
      if (uni.getStorageSync('token')) {
        commit('changeUsername', uni.getStorageSync('username'));
        commit('changeAvatar', uni.getStorageSync('avatar'));
        commit('changeToken', uni.getStorageSync('token'));
        commit('changeToken', uni.getStorageSync('changeUserInfo'));
      }
    },
    async addAppoinmentAction({
      commit
    }, payload) {
      console.log(payload)
      const res = await addAppointment(payload);
      if (!res.code == 200) {
        return uni.$u.toast('预约失败');
      }
      uni.$u.toast("预约成功")
      console.log(res)
    },
    
  }
})
export default store
