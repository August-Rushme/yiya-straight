import http from '../request/index.js';
const commentsAPI = {
  getCommentsByClinic: '/comments/clinic', 
  getCommentsLabels: '/comments/labelsById',
  getCommentsByType: '/comments/getByType',
  getReplyById: '/comments/replyById',
  getCommentsById: '/comments',
  commentReply: '/comments/reply',
  isPraise: '/comments/isPraise',
  praise: '/comments/praise',
  unPraise: '/comments/unPraise'
}

export function getCommentsByClinic(data) {
  return http.post(commentsAPI.getCommentsByClinic, {
    ...data
  })
}


export function getCommentsLabels(data) {
	return http.post(commentsAPI.getCommentsLabels,{
		...data
	})
}
export function isPraise(data) {
	return http.post(commentsAPI.isPraise,{
		...data
	})
}
export function praise(data) {
	return http.post(commentsAPI.praise,{
		...data
	})
}
export function unPraise(data) {
	return http.post(commentsAPI.unPraise,{
		...data
	})
}

export function getCommentsByType(data) {
	return http.post(commentsAPI.getCommentsByType,{
		...data
	})
}
export function getReplyById(data) {
	return http.post(commentsAPI.getReplyById,{
		...data
	})
}

export function getCommentsById(id) {
	return http.get(commentsAPI.getCommentsById + '/' + id)
}

export function commentReply(data){
	return http.post(commentsAPI.commentReply,{
		...data
	})
}