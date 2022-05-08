import http from '../request/index.js';

const doctorApi = {
	getAllDoctorLabel: '/goods/getDoctorLabel',
	getDoctorBylLabelId: '/goods/getDoctorByLabel',
	getDoctorById: '/goods/getDoctorById',
	getAllDoctor: '/goods/getAllDoctor'
}

export function getAllDoctorLabel(){
	return http.get(doctorApi.getAllDoctorLabel)
}

export function getDoctorBylLabelId(data){
	return http.post(doctorApi.getDoctorBylLabelId,{
		...data
	})
}

export function getDoctorById(id){
	return http.get(doctorApi.getDoctorById + `/${id}`)
}

export function getAllDoctor(data){
	return http.post(doctorApi.getAllDoctor,{
		...data
	})
}