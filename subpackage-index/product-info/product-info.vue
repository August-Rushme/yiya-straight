<template>
	<view class="p-2">
		<!-- 标题 -->
		<view class="mb-1">
			<view class="font-lg font-weight">
			{{goodsInfo.title}}
			</view>
			<view class="">
				随时退 | 过期退 | 需预约
			</view>
			<view class="d-flex j-sb">
			 <view >
			 	周末假期通用 | {{goodsInfo.label}}
			 </view>	
			 <view >
			 半年消费{{goodsInfo.sales}}
			 </view>
			</view>
		</view>
		<!-- banner -->
		<block v-for="(item,index) in goodsInfo.bannerSrc" :key="index">
				<image :src="item" mode="widthFix" style="width: 710rpx;border-radius: 15rpx;" @click="previewImg"></image>
		</block>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
			   goodsInfo: {
				   title: '牙齿美白套餐',
				   label: '限工作日 | 成人',
				   sales: 143,
				   bannerSrc: ['https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2785135471/O1CN01vqHBI31qHlZyR56SV_!!0-item_pic.jpg_580x580Q90.jpg_.webp']
			   }
			}
		},
		methods: {
			previewImg(){
						uni.previewImage({
	                      urls: this.goodsInfo.bannerSrc
						});
			}
		}
	}
</script>

<style>

</style>
