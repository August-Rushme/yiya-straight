<template>
	<view class="page">
		<view class="d-flex j-center mt-2">
			<view>
				<view class="d-flex j-center">
						<u-icon name="checkmark-circle" color="#46d0b6" size="80"></u-icon>
				</view>
			
				<view class="font-big" style="color: #333333;">
					订单支付成功啦
				</view>
				
				<view class="pl-1 mt-4">
					<view class="processItem">
						<view class="font-weight font-md line-30">
					       	订单支付			
						</view>
						<view class="text-muted">
							{{Date}}
						</view>
					</view>
					<view class="processItem">
						<view class="font-weight font-md line-30">
					        购买成功			
						</view>
						<view class="text-muted">
							待收货
						</view>
					</view>
					<view class="pl-3 lastItem">
						<view class="font-weight font-md line-30">
						    等待诊所回复			
						</view>
						<view class="text-muted">
							诊所预计24小时内联系您
						</view>
					</view>
				</view>
	
			</view>
		</view>
		<view class="d-flex j-sb btnGroup font-lg">
					<view class="btn">
						联系诊所
					</view>
					<view class="btn lookOrderBtn" @click="lookMyOrder">
						查看订单
					</view>
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			Date(){
				const date = new Date();
				const formatDate = uni.$u.timeFormat(date,'yyyy-mm-dd');
				return formatDate;
			}
		},
		methods: {
			lookMyOrder(){
				uni.navigateTo({
					url: '/subpackage-my/order/order'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page{
	font-family: PingFangSC-Medium,sans-serif;
	.processItem {
		position: relative;
		height: 130rpx;
		padding-left: 30rpx;
		border-left: 1px dashed #eaeaea;
	}
	.processItem::before {
		content: '';
		position: absolute;
		width: 12rpx;
		height: 12rpx;
		border-radius: 50%;
		background-color: #ffffff;
		border: 6rpx solid #597fe5;
		left: -13rpx;
		top: 0;
	}
	.lastItem {
		position: relative;
	}
	.lastItem::before {
		content: '';
		position: absolute;
		width: 18rpx;
		height: 18rpx;
	    left: -9rpx;
		border-radius: 50%;
		background-color: #3ed3b9;
	}
	.btnGroup{
		width: 690rpx;
		margin: 80rpx auto;
		.btn {
			width: 330rpx;
		    height: 80rpx;
			line-height: 80rpx;
			border-radius: 40rpx;
		    text-align: center;
			background-color: #efefef;
			color:#5c5c5c;
		 }
		 .lookOrderBtn {
			 background-color: #4c78f6;
			 color: white;
		 }
	}
}

</style>
