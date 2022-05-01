<template>
<view class="">
	客服
</view>
</template>

<script>

export default {
	data() {
		return {

		};
	},
	methods: {

	
		
		sendMessage() {
			if(this.message.length > 0 ){
		    let textMessage = this.im.createCustomMessage({
			type: 'message',
			payload: {
				avatar:uni.getStorageSync('userInfo').id === 18 ? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg' : uni.getStorageSync('avatar'),
				nickName: uni.getStorageSync('userInfo').id === 18 ? '客服小牙' : uni.getStorageSync('username'),
				isMe: true,
				text: this.message
			},
			to: {
				type: GoEasy.IM_SCENE.PRIVATE, //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
				id: uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
				data: { avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname } //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
			}
		    });
				const _this = this;
			
			}

		}
	},
	onLoad() {
		const goeasy = GoEasy.getInstance({
			host: 'hangzhou.goeasy.io', //若是新加坡区域：singapore.goeasy.io
			appkey: 'BC-e96694fd44c241118ac251cc61492c8d',
			allowNotification: true,
			modules: ['im'] //根据需要，传入‘pubsub’或'im’，或数组方式同时传入
		});
		goeasy.connect({
			id: uni.getStorageSync('userInfo').id, //pubsub选填，im必填，最大长度60字符
			data: {
				avatar: uni.getStorageSync('userInfo').photo,
				nickname: uni.getStorageSync('userInfo').nickname
			}, //必须是一个对象，pubsub选填，im必填，最大长度300字符，用于上下线提醒和查询在线用户列表时，扩展更多的属性
			onSuccess: function() {
				//连接成功
				console.log('GoEasy connect successfully.'); //连接成功
			},
			onFailed: function(error) {
				//连接失败
				console.log('Failed to connect GoEasy, code:' + error.code + ',error:' + error.content);
			},
			onProgress: function(attempts) {
				//连接或自动重连中
				console.log('GoEasy is connecting', attempts);
			}
		});
		this.title = '已为您转接人工客服';
		this.goeasy = goeasy;
		this.im = goeasy.im;
		const _this = this;
		var onPrivateMessageReceived = function(message) {
			if(message.payload.text === '已读'){
				// console.log(message)
				_this.messagelist.forEach(
				(item) => {
					if(item.messageId === message.payload.messageReadId){
						item.isRead = true
					}
				}
				)
			}
			else if(message.type === 'image'){
	_this.messagelist.push({
		type: message.type,
		isMe: false,
		messageId: message.messageId,
		timestamp: message.timestamp,
		isRead: true,
		avatar:
			message.senderId === '18'
				? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg'
				: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Bsgia8Lrzu2l9UPqAQxClMo581aIoaicmSes58mvD2F31g08bGHw1qrgicyjHpmXL6uOF8hVmEvibRnuHsSsAQpzVA/132',
		text: null,
		imgSrc: message.payload.url,
		nickName: message.senderId === '18' ? '客服小牙' : 'X'
	});
	_this.$nextTick(function() {
		uni.pageScrollTo({
			scrollTop: 9999,
			duration: 0
		});
	});
	_this.im.markPrivateMessageAsRead({
		userId: message.senderId, //聊天对象的userId
		onSuccess: function() {
			//标记对方的消息为已读
			let textMessage = _this.im.createCustomMessage({
				type: 'mark',
				payload: {
					messageReadId: message.messageId,
					text: '已读'
				},
				to: {
					type: GoEasy.IM_SCENE.PRIVATE, //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
					id: uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
					data: { avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname } //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
				}
			});
			_this.im.sendMessage({
				message: textMessage,
				onSuccess: function(message) {
					//发送成功
			    console.log('标记成功!')
				},
				onFailed: function(error) {
					//发送失败
					console.log('Failed to send private message，code:' + error.code + ' ,error ' + error.content);
				}
			});
		},
		onFailed: function(error) {
			//标记失败
			console.log('Failed to mark as read, code:' + error.code + ' content:' + error.content);
		}
	});
			}
			else if(message.type === 'audio'){
				_this.messagelist.push({
					type: message.type,
					isMe: false,
					messageId: message.messageId,
					timestamp: message.timestamp,
					isRead: true,
					avatar:
						message.senderId === '18'
							? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg'
							: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Bsgia8Lrzu2l9UPqAQxClMo581aIoaicmSes58mvD2F31g08bGHw1qrgicyjHpmXL6uOF8hVmEvibRnuHsSsAQpzVA/132',
					text: null,
					imgSrc: '',
					videoSrc: message.payload.url,
					nickName: message.senderId === '18' ? '客服小牙' : 'X'
				});
				_this.$nextTick(function() {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 0
					});
				});
				_this.im.markPrivateMessageAsRead({
					userId: message.senderId, //聊天对象的userId
					onSuccess: function() {
						//标记对方的消息为已读
						let textMessage = _this.im.createCustomMessage({
							type: 'mark',
							payload: {
								messageReadId: message.messageId,
								text: '已读'
							},
							to: {
								type: GoEasy.IM_SCENE.PRIVATE, //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
								id: uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
								data: { avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname } //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
							}
						});
						_this.im.sendMessage({
							message: textMessage,
							onSuccess: function(message) {
								//发送成功
						    console.log('标记成功!')
							},
							onFailed: function(error) {
								//发送失败
								console.log('Failed to send private message，code:' + error.code + ' ,error ' + error.content);
							}
						});
					},
					onFailed: function(error) {
						//标记失败
						console.log('Failed to mark as read, code:' + error.code + ' content:' + error.content);
					}
				});
			}
			else{
				_this.messagelist.push({
					type: message.type,
					isMe: false,
					messageId: message.messageId,
					timestamp: message.timestamp,
					isRead: true,
					avatar:
						message.senderId === '18'
							? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg'
							: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Bsgia8Lrzu2l9UPqAQxClMo581aIoaicmSes58mvD2F31g08bGHw1qrgicyjHpmXL6uOF8hVmEvibRnuHsSsAQpzVA/132',
					text: message.payload.text,
					nickName: message.senderId === '18' ? '客服小牙' : 'X'
				});
				_this.$nextTick(function() {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 0
					});
				});
				_this.im.markPrivateMessageAsRead({
					userId: message.senderId, //聊天对象的userId
					onSuccess: function() {
						//标记对方的消息为已读
						let textMessage = _this.im.createCustomMessage({
							type: 'mark',
							payload: {
								messageReadId: message.messageId,
								text: '已读'
							},
							to: {
								type: GoEasy.IM_SCENE.PRIVATE, //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
								id: uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
								data: { avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname } //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
							}
						});
						_this.im.sendMessage({
							message: textMessage,
							onSuccess: function(message) {
								//发送成功
						    console.log('标记成功!')
							},
							onFailed: function(error) {
								//发送失败
								console.log('Failed to send private message，code:' + error.code + ' ,error ' + error.content);
							}
						});
					},
					onFailed: function(error) {
						//标记失败
						console.log('Failed to mark as read, code:' + error.code + ' content:' + error.content);
					}
				});
			}

		};
		//监听和接收单聊消息
		
	},
	onUnload() {
		this.goeasy.disconnect({
			onSuccess: function() {
				console.log('GoEasy disconnect successfully.');
			},
			onFailed: function(error) {
				console.log('Failed to disconnect GoEasy, code:' + error.code + ',error:' + error.content);
			}
		});
	}
};
</script>

<style scoped lang="scss">

</style>
