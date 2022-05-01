import http from '../request/index.js';

const clinicApi = {
	getClinicList: '/goods/getClinic',
	getClinicById: '/goods/getClinicDetail'
}

export function getClinicList(data){
  return http.post(clinicApi.getClinicList,{
	  ...data
  })	
}
export function getClinicById(id){
  return http.post(clinicApi.getClinicById+`/${id}`)	
}