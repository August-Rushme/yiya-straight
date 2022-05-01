import http from '../request/index.js';

const doctorApi = {
	getAllDoctorLabel: '/goods/getDoctorLabel',
	getDoctorBylLabelId: '/goods/getDoctorByLabel',
	getDoctorById: '/goods/getDoctorById'
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