import http from '../request/index.js';

const clinicApi = {
	getClinicList: '/goods/getClinic',
	getClinicById: '/goods/getClinicDetail',
	getClinicByLocation: '/appointment/getClinicByLatAndLng'
}

export function getClinicList(data){
  return http.post(clinicApi.getClinicList,{
	  ...data
  })	
}
export function getClinicById(id){
  return http.post(clinicApi.getClinicById+`/${id}`)	
}
export function getClinicByLocation(data) {
	return http.post(clinicApi.getClinicByLocation,{
		...data
	})
}