<template>
	<view class="content 'p-2'">
		<view>
			<!-- 顶部用户信息 -->
			<view class="userInfo">
				<view class="d-flex j-sb">
					<view class="d-flex">
						<u-avatar :src="content.avatar"></u-avatar>
						<view class="ml-1">
							<text class="pl-1">{{ content.nickName }}</text>
							<u-rate :count="5" readonly="true" v-model="content.rate"></u-rate>
						</view>
					</view>
					<view class="text-muted">{{ content.createTime }}</view>
				</view>
			</view>
			<!-- 评论内容 -->
			<view class="comment-content my-1">{{ content.content }}</view>
			<!-- 照片 -->
			<view class="photo my-2"><u-album :urls="content.photo === undefined ? defaultUrls : content.photo" :radius="'15rpx'" multipleSize="95"></u-album></view>
			<!-- 点赞以及回复数 -->
			<view class="d-flex j-sb">
				<view class="d-flex" @tap="leaveMessage">
					<u-icon name="chat" color="dark" size="15"></u-icon>
					<text>{{ content.newReply.length }}</text>
				</view>
				<view class="d-flex">
					<u-icon name="thumb-up" @tap="giveThumbUp(index2)" :color="content.thumbColor" size="15"></u-icon>
					<text class="pr-1">{{ content.likes }}</text>
				</view>
			</view>
			<!-- 回复内容 -->
			<view class="py-1 border-top">
				<block v-for="(item, index) in content.newReply" :key="index">
					<view class="d-flex my-2 reply-content">
						<view style="padding-top: 8rpx;"><u-avatar :src="item.avatar"></u-avatar></view>
						<view class="reply-content ml-1">
							<view class="who">
								<view>{{ item.role === '用户' ? item.nickName : '商家回复' }}</view>
								<view class="text-muted py-2 line-h0">{{ item.time }}</view>
								<view class="info">{{ item.content }}</view>
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
// import dayjs from 'dayjs';
export default {
	data() {
		return {
			pushContent: '',
			id: 1,
			clinicId: 1,
			focus: false,
			defaultUrls: ['https://cdn.uviewui.com/uview/album/3.jpg'],
			content: {}
		};
	},
	methods: {
	 async send() {
			if (this.pushContent.length > 0) {
				const date = new Date();
				const formatDate = uni.$u.timeFormat(date, 'yyyy-mm-dd hh:MM:ss');
				this.content.newReply.push({
					role: '用户',
					nickName: this.username,
					time: formatDate,
					avatar: this.avatar,
					content: this.pushContent
				});
				await this.commentReply({
					userId: uni.getStorageSync('userInfo').id,
					commentId: this.id,
					clinicId: this.clinicId,
					content: this.pushContent,
					role: "用户",
					time: uni.$u.timeFormat(date, 'yyyy-mm-dd hh:MM:ss')
				})
				this.pushContent = '';
				this.$nextTick(function() {
					uni.pageScrollTo({
						scrollTop: 9999,
						duration: 0
					});
				});

				console.log(111);
			}
		},
		formatTime(time) {
			var date = new Date(time);
			var y = date.getFullYear();
			var m = date.getMonth() + 1;
			m = m < 10 ? '0' + m : m;
			var d = date.getDate();
			d = d < 10 ? '0' + d : d;
			var h = date.getHours();
			h = h < 10 ? '0' + h : h;
			var minute = date.getMinutes();
			minute = minute < 10 ? '0' + minute : minute;
			var second = date.getSeconds();
			second = second < 10 ? '0' + second : second;
			return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second;
		},
		leaveMessage() {
			this.focus = !this.focus;
		},
		async giveThumbUp(index2) {
			if (this.content.thumbColor === 'dark') {
				await this.praise({
					userId: uni.getStorageSync('userInfo').id,
					commentId: this.id
				});
				this.content.likes++;
			} else {
				await this.unPraise({
					userId: uni.getStorageSync('userInfo').id,
					commentId: this.id
				});
				this.content.likes--;
			}
			this.content.thumbColor = this.content.thumbColor === 'dark' ? 'red' : 'dark';
		},
		...mapActions(['localLoginAction', 'getCommentsById', 'getReplyById', 'isPraiseAction', 'praise', 'unPraise','commentReply'])
	},
	async onLoad(option) {
		this.id = parseInt(option.id);
		console.log(option)
		this.clinicId = parseInt(option.clinicId);
	
		const res = await this.getCommentsById(parseInt(option.id));
		res.createTime = this.formatTime(res.createTime);
		const reply = [];
		const _this = this;
		const isPraise = await this.isPraiseAction({
			commentId: parseInt(option.id),
			userId: uni.getStorageSync('userInfo').id
		});
		res.replyId.forEach(async item2 => {
			const replyContent = await _this.getReplyById({
				pageSize: 99,
				pageNum: 1,
				replyId: item2
			});
				console.log(replyContent.list[0]);
			replyContent.list[0].time = _this.formatTime(replyContent.list[0].time);
			reply.push(replyContent.list[0]);
		});
		console.log(isPraise)
		const content = {
			...res,
			newReply: reply,
			thumbColor: isPraise == 'true' ? 'red' : 'dark'
		};
		this.content = content;
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
