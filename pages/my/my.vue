<template>
<view class="my">
		<!-- 顶部登录 -->
<view class="top-background  d-flex j-center">
	<view class="my-card d-flex j-sb a-center px-4">
		<view class="userInfo d-flex">
			<u-avatar :src="avatar" size="50" @click="goSetInfo"></u-avatar>
			<view class="username ml-1 pt-1">
			 <text class="line-h0 font-md font-weight">{{username}}</text>
			 <view class="" @click="goSetInfo">
			  设置个人信息>	
			 </view>
			</view>
		</view>
		<template v-if="!token">
		<view class="toLogin" @tap="gotoLogin" >
			去登录
		</view>
		</template>
	</view>
</view>
<!-- 分割线 -->
<view class="divider">
</view>
<!-- nav导航 -->
	<view class="nav row a-center py-1">
		<view class="navItem span-5" @tap="goToDedical">
			<image src="../../static/images/bingli.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			我的病例
		</view>
		<view class="navItem span-5" @tap="goToRecord">
			<image src="../../static/images/ct.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			我的CT
		</view>
		<view class="navItem span-5" @tap="goToAppointment">
			<image src="../../static/images/yuyue.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			我的预约
		</view>
		<view class="navItem span-5" @tap="goToAboutUs">
			<image src="../../static/images/aboutus.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			关于我们
		</view>
	</view>
<divider></divider>

<!-- 其他导航 -->
<view class="other-nav">
	<block v-for="item in otherNav" :key="item.name">
	<view  class="navItem d-flex j-sb a-center border-bottom  py-2 px-3" @tap="goToPage(item.pageName)">
	 <view class="itemname d-flex">
		 <template v-if="item.needMark">
			 <view class="needMark">
			 		 <image :src="item.src" mode="" style="width: 48rpx;height: 48rpx;"></image>
					 <view class="redDot">
					 	
					 </view>
			 </view>
	
		 <text class="ml-2">{{item.name}}</text>
		 </template>
		 <template v-else>
		 <image :src="item.src" mode="" style="width: 48rpx;height: 48rpx;"></image>
		 <text class="ml-2">{{item.name}}</text>
		 </template>
	 
	 </view>
	 <view class="arrow font-md">
	 	 >
	 </view>
	</view>
	</block>
</view>
</view>
</template>

<script>
	import { mapState,mapActions } from 'vuex'
	export default {
		data() {
			return {
			  otherNav: [
				  {
					  name: '全部订单',
					  src: '/static/images/order.png',
					  pageName: 'order'
				  }, 
				  {
					name: '我的钱包',
					  src: '/static/images/wallet.png',
					  pageName: 'wallet',
				  },
				  {
					  name: '我的优惠卷',
					  src: '/static/images/ticket.png',
					  pageName: 'coupon'
				  }, 
				  {
					  name: '我的消息',
					  src: '/static/images/message.png',
					  pageName: 'message',
					  needMark: false
				  }, 
				  {
					  name: '设置个人信息',
					  src: '/static/images/setInfo.png',
					  pageName: 'setInfo'
				  }, 
				  {
					  name: '联系客服',
					  src: '/static/images/server.png',
					  pageName: 'server'
				  }, 
				  {
					  name: '切换账号',
					  src: '/static/images/switchAccount.png',
					  pageName: 'login'
				  },
			 ]
			}
		},
	 async onShow(){
			this.localLoginAction();
			const res = await this.hasMessageAction(parseInt(uni.getStorageSync('userInfo').id));
			if(res.count){
				this.otherNav[3].needMark = true;
					 uni.showTabBarRedDot({
					 		 index: 3,
					 })
			}else {
				uni.hideTabBarRedDot({
					index:3
				})
				this.otherNav[3].needMark = false
			}
		},
		computed: {
			...mapState(['username','avatar','token'])
		},
		methods: {
			...mapActions(['localLoginAction','hasMessageAction']),
			gotoLogin() {
				uni.navigateTo({
					url: '/subpackage-my/login/login'
				})
			},
			goSetInfo() {
				if(this.token){
					uni.navigateTo({
						url: '/subpackage-my/setInfo/setInfo'
					})
				}
				else{
					uni.navigateTo({
						url: '/subpackage-my/login/login'
					})
				}
			},
			goToDedical() {
				uni.navigateTo({
					url: '/subpackage-my/medical/medical'
				})
			},
			goToRecord() {
				uni.navigateTo({
					url: '/subpackage-my/record/record'
				})
			},
			goToAppointment() {
				uni.navigateTo({
					url: '/subpackage-my/appointment/appointment'
				})
			},
			goToAboutUs() {
				uni.navigateTo({
					url: '/subpackage-my/aboutUs/aboutUs'
				})
			},
			//底部导航跳转
			goToPage(pageName){
				// if(this.token){
					const pagePath = '/subpackage-my/'+ pageName + '/' + pageName;
					uni.navigateTo({
						url: pagePath
					})
				// }
				// else{
				// 	uni.navigateTo({
				// 		url: '/subpackage-my/login/login'
				// 	})
				// }
			}
         },
		 }
</script>

<style scoped lang="scss">
.my{
margin: 0;
.top-background {
	width: 750rpx;
	height: 150rpx;
	background: linear-gradient(to bottom,#22b1ac 30%,#55f6f0);
}
.my-card {
	position: absolute;
	width: 700rpx;
	height: 150rpx;
	margin-top: 75rpx;
	background: #FFFFFF;
	border-radius: 15rpx;
}
.divider {
	width: 750upx;
	height: 100rpx;
	background-color: #F5F5F5;
}
.toLogin {
	width: 200rpx;
	height: 60rpx;
	border-radius: 30rpx;
	line-height: 60rpx;
	text-align: center;
	color: white;
	background: linear-gradient(to right,#f8c897,#b07942);
}
.needMark {
	position: relative;
	.redDot {
		position: absolute;
		top: 0;
		right: 0;
		width: 20rpx;
		height: 20rpx;
		background-color: red;
		border-radius: 50%;
	}
}
.nav {
	.navItem {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
}
}
</style>

