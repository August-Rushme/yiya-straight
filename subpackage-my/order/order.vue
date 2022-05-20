<template>
	<view>
       <uni-card>
         <view class="title d-flex j-sb">
			 <view class="">
			 	<text class="font-lg font-weight">牙齿美白</text>
				<text class="text-light-muted">></text>
			 </view>
			 <view class="hasPay font-md">
			 	已付款
			 </view>
		 </view> 
		 <view class="d-flex mt-1">
		 	<u-avatar src="https://img.alicdn.com/imgextra/i2/130209169/O1CN01N7yNHU2HbSErTGZgA_!!0-saturn_solar.jpg_468x468q75.jpg_.webp" shape="square" :size="90">	

			</u-avatar>
			<view class="content ml-1">
				<view class="d-flex j-sb font-md ">
					<view class="left">
						<view class="font-weight">
							牙齿美白套餐
						</view>
						<view class="text-light-muted">
							工作日|限成人
						</view>
						<view class="text-light-muted">
							订单号：SDYDH0001
						</view>
						<view class="font-weight pt-1">
							实付款￥69.00 
						</view>
					</view>
					<view class="right">
						<view class="font-weight" style="text-align: end;" >
								￥79.00
						</view>
					<view class="text-light-muted " style="text-align: end;">
						×1
					</view>
					<view class="text-center comment" @click="goToEvaluation">
						评价
					</view>
					</view>
				</view>
			</view>
		 </view>
       </uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: ['未付款', '待评价', '已付款'],
			}
		},
		methods: {
			goToEvaluation(){
				uni.navigateTo({
					url: '/subpackage-my/evaluation/evaluation'
				})
			}
		}
	}
</script>

<style scope lang="scss">
.hasPay {
	color: rgb(222, 85, 13);
}
.content{
	flex: 1;
}
.comment {
	height: 50rpx;
	width: 120rpx;
	border: 1px solid #ff9000;
	color: #ff9000;
	border-radius: 25rpx;
	line-height: 50rpx;
	margin-top: 50rpx;
}
</style>
