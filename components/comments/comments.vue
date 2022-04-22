<template>
<view class="comment">
	  <slot name="title" >
		<view class="title d-flex j-sb p-2" style="background-color: #FFFFFF;">
			<text class="font-md font-weight">用户评价({{comments.content.length}})</text>
			<text class="font-md text-muted">></text>
		</view>
		</slot>
		<!-- 类型选项 -->
		<view class="options row px-2" style="background-color: #FFFFFF;">
			<block v-for="(item,index) in comments2.options" :key="index">
				<view @tap="changeOption(index)" class="option-item span-6 mr-2 px-2 mb-2" :class="index === optionsIndex ? 'select' : ''">
					{{item.name}}({{item.mount}})
				</view>
			</block>
		</view>
		<template v-if="hasDivider">
			<divider></divider>
		</template>
		<!-- 评论 -->
		<view class="content" :class="isCard ? '.grayBg' : 'p-2' " >	
				<block v-for="(item2,index2) in comments2.content" :key="index2">
					<view :class="isCard ? 'card p-1' : ''">
						<!-- 顶部用户信息 -->
				<view class="userInfo">
					<view class="d-flex j-sb">
						<view class="d-flex">
							<u-avatar :src="item2.avatar"></u-avatar>
							<view class="ml-1">
								<text class="pl-1">{{item2.username}}</text>
								<u-rate :count="5" readonly="true" v-model="item2.starsValue"></u-rate>
							</view>
						</view>
						<view class="text-muted">
							{{item2.commentTime}}
						</view>
					</view>
				</view>
				<!-- 评论内容 -->
				<view class="comment-content mb-1">
				  {{item2.commentContent}}	
				</view>
					<!-- 照片 -->
				<view class="photo my-2" style="margin-left: 100rpx;">
					<u-album :urls="item2.photos" :radius="'15rpx'" multipleSize="95"></u-album>
				</view>
				<!-- 点赞以及回复数 -->
				<view class="d-flex j-sb" style="margin-left: 100rpx;">
					<view class="d-flex">
						<u-icon name="chat" color="dark" size="15" @tap="goPushCommentsPage"></u-icon>
						<text>{{item2.replies.length}}</text>
					</view>
					<view class="d-flex">
						<u-icon name="thumb-up" @tap="giveThumbUp(index2)" :color="item2.thumbColor" size="15"></u-icon>
						<text class="pr-1">{{item2.likes}}</text>
					</view>	
				</view>
				<!-- 回复内容 -->
				<view class="py-1 mt-1 d-flex a-center j-sb border-top" style="margin-left: 100rpx;"  @tap="goPushCommentsPage">
					<view class="d-flex reply">
						<view class="text-muted pr-1">{{item2.replies[0].isBusiness ? '商家回复:' : item2.replies[0].replyname + ':'}}</view>
						<view  class="replyContent">{{item2.replies[0].replyContent}}</view>
					</view>
					
					<view class="ml-1">
						<u-icon name="arrow-right" color="dark" size="10"></u-icon>
					</view>
				</view>
				</view>
				</block>
		
		
		
		</view>
	
		<!-- 更多评价 -->
		<template v-if="canLookMore">
			<view class="lookAll d-flex m-2 j-center">
				  <text class="font-md" @tap="lookAllComments">查看全部评价</text><u-icon name="arrow-down" color="dark" size="15"></u-icon>
			</view>
		</template>
	
	</view>
</template>

<script>
	export default {
		props:{
			hasDivider: {
				type: Boolean,
				default: false
			},
			isCard: {
				type: Boolean,
				default: false
			},
			isCanEdit: {
				type: Boolean,
				default: false
			},
			comments: Object,
			canLookMore: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
			 optionsIndex: 0,
			 comments2: this.$props.comments
			}
		},
		methods:{
	 changeOption(index){
				this.optionsIndex = index
			},
			goPushCommentsPage(){
				uni.navigateTo({
					url: '/pages/push-comments/push-comments'
				})
			},
	   lookAllComments() {
		uni.navigateTo({
			url:'/pages/detail-comment/detail-comment'
		})
	  },
	  giveThumbUp(index2){
	  if(this.comments2.content[index2].thumbColor === 'dark'){
		this.comments2.content[index2].likes++
	  }else{
		this.comments2.content[index2].likes--
	 }
	 this.comments2.content[index2].thumbColor = this.comments2.content[index2].thumbColor === 'dark' ? 'red' : 'dark'
	 }
		}
	};
</script>

<style scoped lang="scss">
		.grayBg {
			background-color: #F5F5F5 !important;
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
		.comment-content{
		 margin-left: 100rpx;
		}
		.card {
			background-color: #FFFFFF;
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
