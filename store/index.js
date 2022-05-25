import Vue from 'vue';
import Vuex from 'vuex';
import http from '../service/request/index.js';
import message from '../service/request/message.js';
import {
  addAppointment
} from '../service/appoinment/http-appoinment.js'
import {
  getClinicList,
  getClinicById,
  getClinicByLocation
} from '../service/clinic/clinic.js'
import {
	getAllDoctorLabel,
	getDoctorBylLabelId,
	getDoctorById,
	getAllDoctor
} from '../service/doctor/doctor.js'
import { getUserById } from '../service/user/user.js';
import {
	getCommentsByClinic,
	getReplyById,
	getCommentsLabels,
	getCommentsByType,
	getCommentsById,
	isPraise,
	praise,
	unPraise,
	commentReply
} from '../service/comments/comments.js'

import { 
	messageSave
} from '../service/chat/chat.js'
import {
	getMessageList,
	searchMessage,
	getMessage,
	remarkIsRead,
	hasMessage
} from '../service/message/message.js'
Vue.use(Vuex);
const store = new Vuex.Store({
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
     if(res.code === 200){
		commit('changeUsername', res.user.nickname);
		commit('changeAvatar', res.user.photo);
		commit('changeToken', res.token);
		commit('changeUserInfo', res.user); 
	 }
	  return res
    },
    localLoginAction({
      commit
    }) {
      if (uni.getStorageSync('token')) {
        commit('changeUsername', uni.getStorageSync('username'));
        commit('changeAvatar', uni.getStorageSync('avatar'));
        commit('changeToken', uni.getStorageSync('token'));
        commit('changeUserInfo', uni.getStorageSync('userInfo'));
      }
    },
    //预约请求 后期分stoe模块
    async addAppoinmentAction({
      commit
    }, payload) {
      console.log(payload)
      const res = await addAppointment(payload);
      if (!res.code == 200) {
        return uni.$u.toast('预约失败');
      }
      uni.$u.toast("预约中，请等医生接单！")
      console.log(res)
    },
	//医生相关请求
	async getAllDoctorLabelAction({commit},payload){
		const res = await getAllDoctorLabel(); 
		if(!res.code == 200){
		  uni.$u.toast('获取分类失败')
		}
		else{
			return res.data
		}
	},
	async getDoctorBylLabelIdAction({commit},payload) {
		const res = await getDoctorBylLabelId(payload)
		if(!res.code == 200){
			uni.$u.toast('获取医生信息失败')
		}
		else{
			return res.data
		}
	},
	async getDoctorByIdAction({commit},payload){
		const res = await getDoctorById(payload);
		if(!res.code == 200){
			uni.$u.toast('获取医生信息失败')
		}
		else{
			return res.data
		}
	},
	async getAllDoctorAction({commit},payload){
		const res = await getAllDoctor(payload)
		if(!res.code == 200){
			uni.$u.toast('获取医生信息失败')
		}
		else{
			return res.data
		}
	},
	//用户相关请求
	async getUserByIdAction({commit},payload){
		const res = await getUserById(payload)
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.user
	},
	//评论相关请求
	async getCommentsByClinicAction({commit},payload){
		const res = await getCommentsByClinic(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('获取评论失败');
		}
		return res.data
	},
	async commentReply({commit},payload){
		const res = await commentReply(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('获取评论失败');
		}
		return res.data
	},
	async getCommentsById({commit},payload){
		const res = await getCommentsById(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('获取评论失败');
		}
		return res.data
	},
	async getCommentsLabelsAction({commit},payload){
		const res = await getCommentsLabels(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async getReplyById({commit},payload){
		const res = await getReplyById(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async isPraiseAction({commit},payload){
		const res = await isPraise(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async praise({commit},payload){
		const res = await praise(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async unPraise({commit},payload){
		const res = await unPraise(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async getCommentsByTypeAction({commit},payload){
		const res = await getCommentsByType(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	//聊天相关请求
	async messageSaveAction({commit},payload){
		const res = await messageSave(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},

	//我的消息 
	async getMessageListAction({commit},payload){
		const res = await getMessageList(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async searchMessageAction({commit},payload){
		const res = await searchMessage(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async getMessageAction({commit},payload){
		const res = await getMessage(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async remarkIsReadAction({commit},payload){
		const res = await remarkIsRead(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res.data
	},
	async hasMessageAction({commit},payload){
		const res = await hasMessage(payload);
		if (!res.code == 200) {
		  return uni.$u.toast('请求失败');
		}
		return res
	},
    //诊所请求 后期分stoe模块
    async getClinicListAction({
      commit
    }, payload) {
      const res = await getClinicList(payload);
      if (!res.code == 200) {
        return uni.$u.toast('请求失败');
      }
      return res.data
    },
  async getClinicById({commit},payload){
	  const res = await getClinicById(payload)
	  if (!res.code == 200) {
	    return uni.$u.toast('请求失败');
	  }
	  return res.data
  },
  async getClinicByLocationAction({commit},payload){
      const res= await getClinicByLocation(payload)
  	if (!res.code == 200) {
  	  return uni.$u.toast('请求失败');
  	}
  	return res.data
  }
  },


})
export default store
