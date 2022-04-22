import http from '../request/index.js';


const AppoinmentAPI = {
  appoinment: '/appointment/addAppointment', // 添加预约
  getAppoinment: '/appointment/getAppointment'
}

// 添加预约
export function addAppointment(data) {
  return http.post(AppoinmentAPI.appoinment, {
    ...data
  })
}

// 查询预约
export function getAppointmentList(queryInfo) {
  return http.post(AppoinmentAPI.getAppoinment, {
    ...queryInfo
  })
}
