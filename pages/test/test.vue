
<template>
	<view class="d-flex flex-column j-center a-center" style="height: 100vh;">
		<view class="registerIme d-flex j-sb px-4 py-1 ">
			<view >
				<view class="font-lg font-weight">
					极速预约
				</view>
				 <view class="font-md">
				 	一键预约 操作简易
				 </view>
				 <view class="imeBtn mt-2">
				 	预约
				 </view>
			</view>
		   <image src="../../static/images/registerImme.png" mode="heightFix" style="height: 200rpx;" ></image>
		</view>
	</view>

</template>

<script>

export default {
	data() {
		return {
	
		};
	},
	methods: {

	}

};
</script>

<style scope lang="scss">
.registerIme{
	width: 700rpx;
	height: 220rpx;
	border-radius: 20rpx;
	color: #eafefd;
	background: linear-gradient(to right, #5fd4b7,#51ceb4);
	box-shadow: 0rpx 0rpx 10rpx 4rpx #82d2c5;
	.imeBtn{
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		color: #10c5a5;
		background: linear-gradient(to bottom,#e8fefc,#bff8eb);
	}
}

</style>
