<template>
<view class="my">
		<!-- 顶部登录 -->
<view class="top-background  d-flex j-center">
	<view class="my-card d-flex j-sb a-center px-4">
		<view class="userInfo d-flex">
			<u-avatar :src="src" size="50"></u-avatar>
			<view class="username ml-1 pt-1">
			 <text class="line-h0 font-md font-weight">默认昵称</text>
			 <view class="" @tap="gotoLogin">
			  设置个人信息>	
			 </view>
			</view>
		</view>
		<view class="toLogin" @tap="gotoLogin">
			去登录
		</view>
	</view>
</view>
<!-- 分割线 -->
<view class="divider">
</view>
<!-- nav导航 -->
	<view class="nav row a-center py-1">
		<view class="navItem span-5">
			<image src="../../static/images/bingli.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			我的病例
		</view>
		<view class="navItem span-5">
			<image src="../../static/images/ct.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			我的CT
		</view>
		<view class="navItem span-5">
			<image src="../../static/images/fankui.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			意见反馈
		</view>
		<view class="navItem span-5">
			<image src="../../static/images/aboutus.png" style="height: 60rpx;width: 60rpx;" mode=""></image>
			关于我们
		</view>
	</view>
<divider></divider>

<!-- 其他导航 -->
<view class="other-nav">
	<block v-for="item in otherNav" :key="item.name">
	<view  class="navItem d-flex j-sb a-center border-bottom  py-2 px-3">
	 <view class="itemname d-flex">
	 	<image src="../../static/images/order.png" mode="" style="width: 48rpx;height: 48rpx;"></image>
	    <text class="ml-2">{{item.name}}</text>
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
	
	export default {
		data() {
			return {
              userInfo: {
				  src: '',
				  name: ''
			  },
			  otherNav: [
				  {
					  name: '全部订单',
					  src: '',
					  pageName: ''
				  }, 
				  {
					  name: '我的优惠卷',
					  src: '',
					  pageName: ''
				  }, 
				  {
					  name: '我的消息',
					  src: '',
					  pageName: ''
				  }, 
				  {
					  name: '设置个人信息',
					  src: '',
					  pageName: ''
				  }, 
				  {
					  name: '联系客服',
					  src: '',
					  pageName: ''
				  }, 
				  {
					  name: '切换账号',
					  src: '',
					  pageName: ''
				  }
			 ]
			}
		},
		methods: {
			gotoLogin() {
				uni.navigateTo({
					url: '/components/login/login'
				})
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
	background: linear-gradient(to bottom,#5c4afe 30%,#2495ff);
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

