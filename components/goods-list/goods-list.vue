<template>
	
	<view class="content" >
	<block v-for="(item, index) in shopData" :key="index">
	<view class="goodsInfo d-flex flex-row m-2 a-center"  @tap="goDetail">
	  <u--image :showLoading="true" :src="item.src" width="80px" height="80px"></u--image>
	  <view class="infoText flex-column mx-2">
	    <text class="font-weight font-md">{{ item.address }}</text>
	    <u-rate count="5" v-model="item.starsValue" readonly allowHalf="true"></u-rate>
	    <text>{{ item.desc }}</text>
	    <view class="flex-row j-center a-center "></view>
	    <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1">国家认证</text>
	    <text style="border: #F0AD4E solid 1px; color: #E45656;" class="mx-1 px-1">顶级医师</text>
	  </view>
	</view>
	<view v-if="hasDivider">
		<divider></divider>
	</view>
	</block>
	</view>
</template>

<script>
	export default {
		props: {
		  shopData: Array,
			  hasDivider: {
				  type: Boolean,
				  default: false
			  }
		},
		methods:{
			goDetail(){
				console.log(111)
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail'
				})
			}
		}
	};
</script>

<style>
</style>
