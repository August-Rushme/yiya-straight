<template>
	
	<view class="content" >
	<block v-for="(item, index) in shopData" :key="index">
	<view class="goodsInfo d-flex flex-row m-2 a-center"  @tap="goDetail">
	  <u--image :showLoading="true" :src="item.img" width="80px" height="80px"></u--image>
	  <view class="infoText flex-column mx-2">
	    <text class="font-weight font-md">{{ item.address }}</text>
	    <u-rate count="5" v-model="item.rate" readonly allowHalf="true"></u-rate>
	    <text>{{ item.detailedAddress }}</text>
	    <view class="flex-row j-center a-center "></view>
		<block v-for="(item2, index2) in item.newScope" :key="index2">
			   <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1 mr-1">{{item2}}</text>
		</block>
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
