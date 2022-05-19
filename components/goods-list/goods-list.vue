<template>
	
	<view class="content" >
	<block v-for="(item, index) in shopData" :key="index">
	<view class="goodsInfo d-flex flex-row m-2 a-center" style="position: relative;"  @click.stop="goDetail(item.id)">
	  <u--image :showLoading="true" :src="item.img" width="80px" height="80px"></u--image>
	  <view class="infoText flex-column mx-2" style="flex: 1;">
		  <view class="d-flex" style="position: relative;">
		  	    <text class="font-weight font-md line-30" style="display: inline-block; width: 400rpx;padding-bottom: 8rpx; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{ item.name }}</text>
				<view class="d-flex flex-column j-center a-center" style="position: absolute; right: 0;" @click.stop="goHere">
					<image src="../../static/images/navigation.png" mode="heightFix" style="height: 60rpx;"></image>
					<view class="text-light-muted  font-sm">
						去这里
					</view>
				</view>
		  </view>

	    <u-rate count="5" v-model="item.rate" readonly allowHalf="true"></u-rate>
	    <text class="line-30" style="display: inline-block; width: 400rpx;padding-top: 8rpx; white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{ item.address }}</text>
	    <view class="flex-row j-center a-center "></view>
		<block v-for="(item2, index2) in item.newScope" :key="index2">
			   <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1 mr-1">{{item2}}</text>
		</block>
		
		<view class="text-light-muted" style="position: absolute; bottom: 0;right: 16rpx;">
		     4.0km
		</view>
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
			goDetail(id){
				uni.navigateTo({
					url: `/subpackage-index/goods-detail/goods-detail?id=${id}`
				})
			},
			goHere(){
				let plugin = requirePlugin('routePlan');
				let key = 'GG6BZ-LTCWP-BG4DD-VRG5X-YA4LF-FZB23';  //使用在腾讯位置服务申请的key
				let referer = 'straight';   //调用插件的app的名称
				let endPoint = JSON.stringify({  //终点
				    'name': '吉野家(北京西站北口店)',
				    'latitude': 19.981393,
				    'longitude': 110.510048
				});
				wx.navigateTo({
				    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
			}
		}
	};
</script>

<style>
</style>
