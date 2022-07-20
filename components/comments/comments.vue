<template>
	<view class="comment">
		<slot name="title">
			<view class="title d-flex j-sb p-2" style="background-color: #FFFFFF;">
				<text class="font-md font-weight">用户评价({{ total }})</text>
				<text class="font-md text-muted">></text>
			</view>
		</slot>
		<!-- 类型选项 -->
		<view class="options row px-2" style="background-color: #FFFFFF;">
			<block v-for="(item, index) in comments2.options" :key="index">
				<view @tap="changeOption(index)" class="option-item span-6 mr-2 px-2 mb-2" :class="index === optionsIndex ? 'select' : ''">{{ item.label }}({{ item.total }})</view>
			</block>
		</view>
		<!-- 如果有评论 -->
		<template v-if="comments2.content.length > 0">
		<!-- 评论 -->
		<view class="content" :class="isCard ? '.grayBg' : 'p-2'">
			<block v-for="(item2, index2) in comments2.content" :key="index2">
				<view :class="isCard ? 'card p-1' : ''">
					<!-- 顶部用户信息 -->
					<view class="userInfo">
						<view class="d-flex j-sb">
							<view class="d-flex">
								<u-avatar :src="item2.avatar"></u-avatar>
								<view class="ml-1">
									<text class="pl-1">{{ item2.nickName }}</text>
									<u-rate :count="5" :readonly="true" v-model="item2.rate"></u-rate>
								</view>
							</view>
							<view class="text-muted">{{item2.createTime }} </view>
						</view>
					</view>
					<!-- 评论内容 -->
					<view class="comment-content mb-1">{{ item2.content }}</view>
					<!-- 照片 -->
					<view class="photo my-2" style="margin-left: 100rpx;"><u-album :urls="item2.photo"  :radius="'15rpx'" multipleSize="95"></u-album></view>
					<!-- 点赞以及回复数 -->
					<view class="d-flex j-sb" style="margin-left: 100rpx;">
						<view class="d-flex">
							<u-icon name="chat" color="dark" size="15" @tap="goPushCommentsPage(item2.id)"></u-icon>
							<text>{{ item2.newReply.length }}</text>
						</view>
						<view class="d-flex">
							<u-icon name="thumb-up" @tap="giveThumbUp(index2,item2.id)" :color="item2.thumbColor" size="15"></u-icon>
							<text class="pr-1">{{ item2.likes }}</text>
						</view>
					</view>
					<!-- 回复内容 -->
					<view class="py-1 mt-1 d-flex a-center j-sb border-top" style="margin-left: 100rpx;" @tap="goPushCommentsPage(item2.id)">
						<view class="d-flex reply">
							<view class="text-muted pr-1">{{ item2.newReply[0].role === '用户' ? item2.newReply[0].nickName + ':' : '商家回复:'  }}</view>
							<view class="replyContent">{{ item2.newReply[0].content }}</view>
						</view>
		
						<view class="ml-1"><u-icon name="arrow-right" color="dark" size="10"></u-icon></view>
					</view>
				</view>
			</block>
		</view>
		
		<!-- 更多评价 -->
		<template v-if="canLookMore">
			<view class="lookAll d-flex m-2 j-center">
				<text class="font-md" @tap="lookAllComments">查看全部评价</text>
				<u-icon name="arrow-down" color="dark" size="15"></u-icon>
			</view>
		</template>
		</template>
		<!-- 如果没有评论 -->
		<template v-else>
			<view class="font-md text-center py-2">暂无评论</view>
		</template>
	</view>
</template>

<script>
	import { mapActions } from 'vuex';
export default {
	props: {
		isCard: {
			type: Boolean,
			default: false
		},
		comments: Object,
		canLookMore: {
			type: Boolean,
			default: true
		},
		total: {
			type: Number,
			default: 0
		},
		moreCommentsId: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			optionsIndex: 0,
		};
	},
   computed: {
	   comments2(){
		   this.$props.comments.content.forEach(item => {
			   item.createTime = this.createTime(item.createTime);
		   })
		   return this.$props.comments
	   },
	   createTime(){
		   return  function(time){
			   const date = new Date(time.replace(/-/g,'/'))
		           var y = date.getFullYear()
		             var m = date.getMonth() + 1
		             m = m < 10 ? '0' + m : m
		             var d = date.getDate()
		             d = d < 10 ? '0' + d : d
		             var h = date.getHours()
		             h = h < 10 ? '0' + h : h
		             var minute = date.getMinutes()
		             minute = minute < 10 ? '0' + minute : minute
		             var second = date.getSeconds()
		             second = second < 10 ? '0' + second : second
		             return y + '/' + m + '/' + d + ' ' + h + ':' + minute + ':' + second
	 } 
	   }
   },
 	methods: {
		...mapActions(['praise','unPraise','getCommentsByTypeAction','isPraiseAction','getReplyById']),
	      async	changeOption(index) {
			  this.$emit('indexChange',index+1);
		       const reply =  await this.getCommentsByTypeAction({
						   pageNum: 1,
						   pageSize: 2,
						   clinicId: this.$props.moreCommentsId,
						   labelId: index+1
					   });
					   console.log(reply);
					   const content = [];
					   reply.list.forEach(async (item) => {
					   	const isPraise = await this.isPraiseAction({
					   		userId: uni.getStorageSync('userInfo').id,
					   		commentId: item.id
					   	});
					   	const newReply = [];
						const _this = this
					   	item.replyId.forEach( async item2 =>{
							const reply2 = await _this.getReplyById({
								pageSize: 99,
								pageNum: 1,
								replyId: item2
							})
					   		newReply.push(reply2.list[0])
					   	})
	
					   	const newObj = {
					   		...item,
					   		newReply: newReply,
					   		thumbColor: isPraise == 'true' ? 'red' : 'dark'
					   	};
					    console.log(newObj);
					   	content.push(newObj);
					   });
		  this.$props.comments.content = content;
			this.optionsIndex = index;
		},
		goPushCommentsPage(id) {
			uni.navigateTo({
				url: `/subpackage-index/push-comments/push-comments?id=${id}&clinicId=${this.$props.moreCommentsId}`
			});
		},
		lookAllComments() {
			uni.navigateTo({
				url: '/subpackage-index/detail-comment/detail-comment?id=' + this.$props.moreCommentsId
			});
		},
	 giveThumbUp(index2,id) {
			const _this = this
			uni.$u.throttle(async ()=>{
				if (_this.comments2.content[index2].thumbColor === 'dark') {
				   await _this.praise({
						userId: uni.getStorageSync('userInfo').id,
						commentId: id,
					})
					_this.comments2.content[index2].likes++;
				} else {
					  await _this.unPraise({
						userId: uni.getStorageSync('userInfo').id,
						commentId: id,
					})
					_this.comments2.content[index2].likes--;
				}
				_this.comments2.content[index2].thumbColor = _this.comments2.content[index2].thumbColor === 'dark' ? 'red' : 'dark';
			}, 500)
			
		}
	}
};
</script>

<style scoped lang="scss">
.grayBg {
	background-color: #f5f5f5 !important;
}
.option-item {
	height: 50rpx;
	color: #636162;
	line-height: 50rpx;
	text-align: center;
	background-color: #f7f5f6;
	border-radius: 20rpx;
}
.select {
	color: #e0a534;
	background-color: #fbf6ea;
}
.comment-content {
	margin-left: 100rpx;
}
.card {
	background-color: #ffffff;
	margin: 15rpx;
	border-radius: 15rpx;
}
.reply {
	width: 580rpx;
}
.replyContent {
	flex: 1;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
</style>
