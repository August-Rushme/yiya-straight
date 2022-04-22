<template>
	<!-- 
	 
	 
	 -->
	<view class="">
	发布评论页面	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				content:   {
															  	avatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				                                                 username: '我是顾客上帝哦',
															    starsValue: 4.8,
																commentTime: '2022/04/21',
															    commentContent: '就感觉这此体验非常的好大大的好评哦然后就是就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦',
																photos: [
																	'https://cdn.uviewui.com/uview/album/2.jpg',
																	'https://cdn.uviewui.com/uview/album/3.jpg'
																],
																replies: [
																	{
																	isBusiness: false,
																	replyname: '小红',
																	replyContent: '感谢您的认可,祝您生活愉快哦亲感谢您的认可,祝您生活愉快哦亲'
																   },
																   {
																   	isBusiness: false,
																	replyname: '小红',
																   	replyContent: '这家店是真不错哦'
																   },
																],
																likes: 66,
																thumbColor: 'dark',
														  },
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
