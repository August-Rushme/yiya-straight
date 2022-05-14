<template>
	<view class="d-flex j-center page">
		<view>
			<view class="registerIme d-flex j-sb pl-4 py-1 mt-5">
				<view>
					<view class="font-lg font-weight">极速预约</view>
					<view class="font-md">一键预约 操作简易</view>
					<view class="imeBtn mt-2" @click="goToImmeRegeitser">预约</view>
				</view>
				<image src="https://oss-augustrush.oss-cn-shenzhen.aliyuncs.com/yayiImage/list.png" mode="heightFix" class="img1"></image>
			</view>

			<view class="registerApo d-flex j-sb px-4 py-1 mt-5">
				<view>
					<view class="font-lg font-weight">指定预约</view>
					<view class="font-md">指定医生 精准预约</view>
					<view class="imeBtn mt-2" @click="goToDegnRegeitser">预约</view>
				</view>
				  <image src="https://oss-augustrush.oss-cn-shenzhen.aliyuncs.com/yayiImage/list2.png" mode="heightFix" class="img2"></image>
			</view>
		</view>

		<!-- <u-popup :show="show" mode="bottom" @close="close" @open="open" round="10">

    </u-popup> -->
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
export default {
	data() {
		return {};
	},
	methods: {
		...mapActions(['hasMessageAction']),
		goToImmeRegeitser() {
			uni.navigateTo({
				url: '/subpackage-project/imme-register/imme-register'
			});
		},
		goToDegnRegeitser(){
			uni.navigateTo({
				url: '/subpackage-project/designative-register/designative-register'
			});
		}
	},
	async onShow() {
		const res3 = await this.hasMessageAction(parseInt(uni.getStorageSync('userInfo').id));
		if(res3.count){
				 uni.showTabBarRedDot({
				 		 index: 3,
				 })
		}else{
			uni.hideTabBarRedDot({
				index:3
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.page {
	height: 100vh;
}
.registerIme {
	position: relative;
	width: 700rpx;
	height: 240rpx;
	border-radius: 20rpx;
	color: #eafefd;
	background: linear-gradient(to right, #74e0c5, #54d1b9);
	box-shadow: 0rpx 0rpx 10rpx 4rpx #b2e5df;
	.imeBtn {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		color: #10c5a5;
		background: linear-gradient(to bottom, #e8fefc, #bff8eb);
	}
}
.img1 {
    position: absolute;
    height: 275rpx;
    top: -15rpx;
    right: 30rpx;
}
.img2 {
    position: absolute;
    height: 275rpx;
    top: -15rpx;
    right: 30rpx;
}
.registerApo {
	position: relative;
	width: 700rpx;
	height: 240rpx;
	border-radius: 20rpx;
	color: #eafefd;
	background: linear-gradient(to right, #92c7f8, #67a6ff);
	box-shadow: 0rpx 0rpx 10rpx 4rpx #a4c5ea;
	.imeBtn {
		width: 150rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		color: #6ea0e5;
		background: linear-gradient(to bottom, #eaf2ff, #d3dffd);
	}
}
</style>
