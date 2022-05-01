<template>
	<view class="page">
		<view class="ask d-flex j-center">
			<view class="tip text-center my-3">{{ title }}</view>
		</view>
		<block v-for="(item, index) in messagelist" :key="index">
				<view class="p-1 my-1" :class="item.isMe ? 'isMe' : 'isNotMe'">
							<u-avatar :size="50" :src="item.avatar"></u-avatar>
					<view class="mx-1">
						<template v-if="!item.isMe">
							<view class="name">
									{{ item.nickName }}
							</view>
						</template>	
						<template v-if="item.type === 'message'">
							<view class="text">{{ item.text }}</view>
						</template>
						<template v-else-if="item.type === 'image'">
							<view class="image"><image @tap="preview(index)" :src="item.imgSrc" mode="widthFix"></image></view>
						</template>
						<template v-else-if="item.type === 'audio'">				
							<template v-if="item.tmpId === loadingIndex && item.isMe ? isloading[loadingIndex] : false">
								<u-loading-icon mode="circle" :text="progress"></u-loading-icon>
							</template>
							<template v-else>
								<view class="video"><video :src="item.videoSrc" controls></video></view>
							</template>	
						</template>					
						<template v-if="item.isMe">
						<view class="d-flex j-end mt-1">
							<view class="isRead">{{ item.isRead ? '已读' : '未读' }}</view>
						</view>
						</template>
					</view>
				</view>	
		</block>

		<view class="block"></view>
		<view class="sendInput">
			<u-input placeholder="请描述您的问题或症状" border="surround" v-model="message">
				<template slot="suffix">
					<view class="d-flex a-center">
						<view class="mr-1"><uni-icons type="image" size="30" @tap="chooseImage"></uni-icons></view>
						<view class="mr-1"><uni-icons type="videocam" size="30" @tap="chooseVideo"></uni-icons></view>
						<u-button shape="circle" icon="arrow-upward" size="small" @tap="sendMessage"></u-button>
					</view>
				</template>
			</u-input>
		</view>
	</view>
</template>

<script>
	import GoEasy from 'goeasy';
	export default {
		data() {
			return {
				loadingIndex: 0,
				isloading: [true],
				progress: '0%',
				title: '正在连接聊天室',
				messagelist: [
					{
						type: 'message',
						isMe: uni.getStorageSync('userInfo').id === 18,
						messageId: '',
						imgSrc: '',
						videoSrc: '',
						remark: '',
						timestamp: new Date().getTime(),
						isRead: true,
						avatar: 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg',
						text: '请问需要什么帮助',
						nickName: '客服小牙'
					}
				],
				message: ''
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
			this.messageReceived();
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
		},
		methods: {
			sendMessage(){
				if(this.message.length > 0 ){	
					const messageInfo = {
						avatar:uni.getStorageSync('userInfo').id === 18 ? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg' : uni.getStorageSync('avatar'),
						nickName: uni.getStorageSync('userInfo').id === 18 ? '客服小牙' : uni.getStorageSync('username'),
						isMe: true,
						text: this.message
					}
				 const message = this.wsCreatMessage('message',messageInfo);
				 console.log(message);
				   this.wsSendMessage(message);
				}
			},
			preview(index) {
						uni.previewImage({
							urls: [this.messagelist[index].imgSrc]
						});
			},
			chooseVideo(){
				const _this = this;
				uni.chooseVideo({
					mediaType: 	['image', 'video'],
					success: res =>{
						let hasPush = false;
						_this.loadingIndex = _this.loadingIndex + 1;
						_this.isloading.push(true)
						  let message = this.im.createAudioMessage({
						   file: res, //H5获得的图片file对象，Uniapp和小程序调用chooseImage，success时得到的res对象
						   to : {
						       type : GoEasy.IM_SCENE.PRIVATE,   //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
						       id : uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
						       data:{avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname} //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
						   },
					
						        onProgress: function(event) {
									if(!hasPush){
										_this.messagelist.push({
											type: 'audio',
											isMe: true,
											mark: res, 
											tmpId: _this.loadingIndex,
											avatar: uni.getStorageSync('userInfo').id === 18 ? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg' : uni.getStorageSync('avatar'),
											nickName: uni.getStorageSync('userInfo').id === 18 ? '客服小牙' : uni.getStorageSync('username'),
											imgSrc: null,
											text: null,
										});
									   _this.pageToBottom();
										hasPush = true
									}
								     _this.progress =  event.progress + '%';
									console.log('file uploading:', event) }//获取上传进度
						    });
							 this.im.sendMessage({
							      message:message,
							      onSuccess: function (message) {
								  	  _this.isloading[_this.loadingIndex] = false;
									   _this.progress = '0%';
								 const index = _this.messagelist.findIndex(item => {
									  	return  item.mark === res
									  })
								 const currentItem = _this.messagelist.find(item => {
									 return item.mark === res
								 })	
									  const moreMessInfo = {
									  											  messageId: message.messageId,
									  											  timestamp: message.timestamp,
									  											  isRead: message.read,
									  											  videoSrc: message.payload.url
									  }
									  const moreInfo = { ...currentItem , ...moreMessInfo};
									  _this.messagelist.splice(index,1, moreInfo)
							          _this.pageToBottom();
							      },
							      onFailed: function (error) { 
							 			uni.$u.toast('发送失败')
							      }
							  });
					}
				})
			},
			chooseImage(){
				const _this = this;
				uni.chooseImage({
					count: 3,
					sizeType: ["compressed"],
					success: res =>{
						res.tempFiles.forEach( file => {
							var message = this.im.createImageMessage({
							     file: file, //H5获得的图片file对象，Uniapp和小程序调用chooseImage，success时得到的res对象
							     to : {
							         type : GoEasy.IM_SCENE.PRIVATE,   //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
							         id : uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
							         data:{avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname} //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
							     },
							     onProgress: function(event) { console.log('file uploading:', event) } //获取上传进度
							 });
							 this.im.sendMessage({
							      message:message,
							      onSuccess: function (message) {
									  _this.messagelist.push({
									  	type: message.type,
									  	isMe: true,
									  	avatar: uni.getStorageSync('userInfo').id === 18 ? 'http://pic.616pic.com/ys_bnew_img/00/24/33/B9FsNqESNK.jpg' : uni.getStorageSync('avatar'),
									  	nickName: uni.getStorageSync('userInfo').id === 18 ? '客服小牙' : uni.getStorageSync('username'),
									  	messageId: message.messageId,
									  	timestamp: message.timestamp,
									  	isRead: message.read,
										text: null,
									  	imgSrc: message.payload.url
									  });
							         _this.pageToBottom();
							      },
							      onFailed: function (error) { //发送失败
							 			uni.$u.toast('发送失败');
							      }
							  });
						})
					}
				})
			},
			pageToBottom(){
				this.$nextTick(function() {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 0
					});
				});
			},
			remarkAndSend(message){
				const _this = this;
				const payload = {
								messageReadId: message.messageId,
								text: '已读'
							}
				_this.im.markPrivateMessageAsRead({
					userId: message.senderId, //聊天对象的userId
					onSuccess: function() {
						//标记对方的消息为已读
						let textMessage = _this.wsCreatMessage('mark',payload);
			            _this.wsSendMessage(textMessage);
					},
					onFailed: function(error) {
						//标记失败
						console.log('Failed to mark as read, code:' + error.code + ' content:' + error.content);
					}
				});
			},
			wsSendMessage(messageInfo){
				console.log(111);
				const _this = this;
				this.im.sendMessage({
					message: messageInfo,
					onSuccess: function(message) {
						//发送成功
						_this.messagelist.push({
							type: message.type,
							isMe: message.payload.isMe,
							avatar: message.payload.avatar,
							tmpId: payload.id,
							nickName: message.payload.nickName,
							messageId: message.messageId,
							timestamp: message.timestamp,
							isRead: message.read,
							imgSrc: message.payload.imgSrc,
							videoSrc: message.payload.videoSrc,
							text: message.payload.text,
						});
						_this.message = '';
					},
					onFailed: function(error) {
						//发送失败
						uni.$u.toast('发送失败')
					}
				});
			},
			
			wsCreatMessage(messageType,moreInfo){
				const _this = this;
				let textMessage = _this.im.createCustomMessage({
					type: messageType,
					payload: {
						...moreInfo
					},
					to: {
						type: GoEasy.IM_SCENE.PRIVATE, //私聊还是群聊，群聊为GoEasy.IM_SCENE.GROUP
						id: uni.getStorageSync('userInfo').id === 18 ? 17 : 18,
						data: { avatar: uni.getStorageSync('userInfo').photo, nickname: uni.getStorageSync('userInfo').nickname } //好友扩展数据, 任意格式的字符串或者对象，用于更新会话列表conversation.data
					}
				});
			},
			
			messageReceived() {
				const _this = this;
				let onPrivateMessageReceived = function(message) {
					const pushInfo = {
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
						}
				 const update = ()=>{
					 _this.messagelist.push(pushInfo);
					 _this.pageToBottom();
					  _this.remarkAndSend(message);
				 }		
						if(message.payload.text === '已读'){
								_this.messagelist.forEach(
								(item) => {
									if(item.messageId === message.payload.messageReadId){
										item.isRead = true
									}
								}
								)
							}
							else if(message.type === 'image'){
					         update();
							}
							else if(message.type === 'audio'){
							 update();
							}
							else{
					        update();           
							}		
						};
	    _this.im.on(GoEasy.IM_EVENT.PRIVATE_MESSAGE_RECEIVED, onPrivateMessageReceived);
			} 
		
		
		}
	}
</script>

<style scoped lang="scss">
.page {
	// height: 100vh;
	.tip {
		width: 300rpx;
		background-color: #efefef;
		line-height: 50rpx;
		height: 50rpx;
		border-radius: 25rpx;
	}
	.isMe {
		display: flex;
		justify-content: end;
		align-items: center;
		flex-direction: row-reverse;
	}
	.isNotMe{
		display: flex;
	}
	.isRead {
		width: 100rpx;
		background-color: #efefef;
		text-align: center;
		border-radius: 20rpx;
		padding: 0 5rpx;
		line-height: 40rpx;
		height: 40rpx;
	}
	
	.block {
		background-color: #ffffff;
		height: 120rpx;
	}
	.image {
		width: 250rpx;
	}
	.text {
		background-color: #21b0ab;
		max-width: 400rpx;
		text-align: justify; /*实现两端对齐*/
		word-break: break-all;
		border-radius: 15rpx;
		padding: 5rpx 15rpx;
		color: white;
	}
	.sendInput {
		position: fixed;
		width: 750rpx;
		bottom: 0;
		background-color: #ffffff;
	}
}
</style>
