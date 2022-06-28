import http from '../request/index.js';

const userApi = {
	getUserById: '/user',
	updateUserInfo: '/user/edit',
	updateAvatar: '/user/updatePhoto',
	getMedicalCase: '/medicalRecord/getById',
	getMedicalDetail: '/medicalRecord'
}

export function getUserById(id){
  return http.get(userApi.getUserById +`/${id}`)	
}

export function updateUserInfo(data){
	return http.post(userApi.updateUserInfo,{
		...data
	})
}

export function updateAvatar(data){
	return http.post(userApi.updateAvatar,{
		...data
	})
}

export function getMedicalCase(data){
	return http.post(userApi.getMedicalCase,{
		...data
	})
}

export function getMedicalDetail(id){
	return http.get(userApi.getMedicalDetail + '/' + id)
}