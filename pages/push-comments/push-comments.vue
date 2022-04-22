<template>
	<view class="content 'p-2'">
		<view>
			<!-- 顶部用户信息 -->
			<view class="userInfo">
				<view class="d-flex j-sb">
					<view class="d-flex">
						<u-avatar :src="content.avatar"></u-avatar>
						<view class="ml-1">
							<text class="pl-1">{{ content.username }}</text>
							<u-rate :count="5" readonly="true" v-model="content.starsValue"></u-rate>
						</view>
					</view>
					<view class="text-muted">{{ content.commentTime }}</view>
				</view>
			</view>
			<!-- 评论内容 -->
			<view class="comment-content my-1">{{ content.commentContent }}</view>
			<!-- 照片 -->
			<view class="photo my-2"><u-album :urls="content.photos" :radius="'15rpx'" multipleSize="95"></u-album></view>
			<!-- 点赞以及回复数 -->
			<view class="d-flex j-sb">
				<view class="d-flex" @tap="leaveMessage">
					<u-icon name="chat" color="dark" size="15"></u-icon>
					<text>{{ content.replies.length }}</text>
				</view>
				<view class="d-flex">
					<u-icon name="thumb-up" @tap="giveThumbUp(index2)" :color="content.thumbColor" size="15"></u-icon>
					<text class="pr-1">{{ content.likes }}</text>
				</view>
			</view>
			<!-- 回复内容 -->
			<view class="py-1 border-top">
				<block v-for="(item, index) in content.replies" :key="index">
					<view class="d-flex my-2 reply-content">
						<view style="padding-top: 8rpx;"><u-avatar :src="item.replyAvatar"></u-avatar></view>
						<view class="reply-content ml-1">
							<view class="who">
								<view>{{ item.isBusiness ? '商家回复' : item.replyname }}</view>
								<view class="text-muted py-2 line-h0">{{ item.replyTime }}</view>
								<view class="info">{{ item.replyContent }}</view>
							</view>
						</view>
					</view>
				</block>
			</view>
			<view class="block"></view>
		</view>
		<view class="bottom p-1 d-flex">
			<input class="bottom-input" :focus="focus" type="text" v-model="pushContent" placeholder="说点什么吧..." />
			<view class="send" @tap="send">发布</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import dayjs from 'dayjs';
export default {
	data() {
		return {
			pushContent: '',
			focus: false,
			content: {
				avatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
				username: '我是顾客上帝哦',
				starsValue: 4.8,
				commentTime: '2022/04/21',
				commentContent: '就感觉这此体验非常的好大大的好评哦然后就是就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦',
				photos: ['https://cdn.uviewui.com/uview/album/2.jpg', 'https://cdn.uviewui.com/uview/album/3.jpg'],
				optionLables: ['热情服务', '环境很好'],
				replies: [
					{
						isBusiness: false,
						replyname: '小红',
						replyTime: '2022/04/21 08:31:24',
						replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						replyContent: '感谢您的认可,祝您生活愉快哦亲感谢您的认可,祝您生活愉快哦亲'
					},
					{
						isBusiness: false,
						replyname: '小红',
						replyTime: '2022/04/21 08:31:24',
						replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
						replyContent: '这家店是真不错哦'
					}
				],
				likes: 66,
				thumbColor: 'dark'
			}
		};
	},
	methods: {
		send() {
			if (this.pushContent.length > 0) {
				// const date = new Date();
				const formatDate = dayjs().format('YYYY-MM-DD HH:mm:ss');
				this.content.replies.push({
					isBusiness: false,
					replyname: this.username,
					replyTime: formatDate,
					replyAvatar: this.avatar,
					replyContent: this.pushContent
				});
			}
		},
		onLoad: function(option){
			console.log(option)
		},
		leaveMessage() {
			this.focus = !this.focus;
		},
		giveThumbUp(index2) {
			if (this.content.thumbColor === 'dark') {
				this.content.likes++;
			} else {
				this.content.likes--;
			}
			this.content.thumbColor = this.content.thumbColor === 'dark' ? 'red' : 'dark';
		},
		...mapActions(['localLoginAction'])
	},
	computed: {
		...mapState(['username', 'avatar'])
	},
	onShow() {
		this.localLoginAction();
	}
};
</script>

<style scoped>
.info {
	line-height: 40rpx;
}
.bottom {
	position: fixed;
	bottom: 20rpx;
}
.block {
	background-color: #ffffff;
	height: 70rpx;
}
.bottom-input {
	display: inline-block;
	width: 550rpx;
	height: 60rpx;
	line-height: 60rpx;
	padding-left: 30rpx;
	border-radius: 30rpx;
	color: #000000;
	background-color: #efefef;
}
.send {
	margin-left: 20rpx;
	width: 120rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	border-radius: 30rpx;
	background-color: #fe0137;
	color: white;
}
</style>
