import http from '../request/index.js';

const clinicApi = {
	getClinicList: '/goods/getClinic'
}

export function getClinicList(data){
	console.log(data)
  return http.post(clinicApi.getClinicList,{
	  ...data
  })	
}