import http from '../request/index.js';

const messageList = {
	getMessageList: '/message/getRecordByUserId',
	searchMessage: '/message/getMessageByKey',
	getMessage: '/message/getMessageList'
}


export function getMessageList(data){
	return http.post(messageList.getMessageList,{
		...data
	})
}

export function searchMessage(data){
	return http.post(messageList.searchMessage,{
		...data
	})
}

export function getMessage(data){
	return  http.post(messageList.getMessage, {
		...data
	})
}