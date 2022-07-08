<template>
	<view class="p-2">
		<view class="font-lg font-weight">商品列表</view>
		<block v-for="(item,index) in goodsData" :key="index">
      <uni-card>
		  <view class="d-flex" @click="goToGoodsPage">
		  			<image :src="item.img"  mode="widthFix" style="width: 160rpx;"></image>
					<view class="rightContent ml-2 ">
						<view class="name font-weight">
							{{item.name}}
						</view>
						<view  class="py-1">
							{{item.label}}
						</view>
						<view class="">
							<text style="color: #e91c28; " class="mr-1">￥{{item.price}}</text>
			<text style="font-size: 22upx;text-decoration: line-through;">￥{{item.oldPrice}}</text>
						</view>
					</view>
		  </view>
		  		
	  </uni-card>
		</block>

	</view>
</template>

<script>
import { mapActions } from 'vuex';
	
	export default {
		data() {
			return {
				goodsData: [],
				pageInfo: {
					pageSize: 10,
					pageNum: 1
				},
				key: ''
			}
		},
		methods: {
			...mapActions(['getSearchResultAction']),
			goToGoodsPage(){
				uni.navigateTo({
					url: '/subpackage-index/product-info/product-info'
				})
			}
		},
		async onLoad(options){
			this.key = options.key
		   const res  = await this.getSearchResultAction({
			   key: options.key,
			  ...this.pageInfo 
		   })
	       this.goodsData = res.list;
		},
		async onReachBottom() {
			this.pageInfo.pageNum++;
			uni.showLoading({
				title:'加载中'
			});
			const res  = await this.getSearchResultAction({
						   key: this.key,
						   ...this.pageInfo 
			})
			if(res.list.length > 0 ){
				this.goodsData.push(...res.list)
				uni.hideLoading()
			}else{
				uni.hideLoading();
				uni.showToast({
					title: '没有更多数据了',
					icon: 'none'
				});
			}
			
		}
	}
</script>

<style scoped lang="scss">
.rightContent{
	flex: 1;
    overflow: hidden;
   .name{
	   white-space: nowrap;
	   overflow: hidden;
	   text-overflow: ellipsis;
   }
}
</style>
