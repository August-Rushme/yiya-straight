<template>
	<view>
		  <u-sticky bgColor="#fff">
		    <u-tabs :list="list" :current="tabIndex" lineColor="#22b1ac" lineWidth="30" @click="changeTab"  :activeStyle="{
            color: '#333333',
            fontWeight: 'bold',
            transform: 'scale(1.05)'
        }"></u-tabs>
		  </u-sticky>
		  <divider></divider>
		  	<swiper :current="tabIndex"  class="swiper" @change="handleChangeTab">
		  	  						<swiper-item v-for="(item, index) in list" :key="index">
		  								<image src="https://oss-augustrush.oss-cn-shenzhen.aliyuncs.com/yayiImage/noImage.png" mode="widthFix" style="width: 750rpx;margin-top: 100rpx;"></image>
		  	  							<view class="text-light-muted noImage">暂无影像</view>
		  	  						</swiper-item>
		  	</swiper>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabIndex: 0,
				   list: [{
				                    name: '全部',
				                }, {
				                    name: '全景',
				                }, {
				                    name: '内窥镜'
				                }, {
				                    name: 'PLY数据'
				                }, {
				                    name: 'STL数据'
				                }, {
				                    name: 'CBCT'
				                }, {
				                    name: 'X光分析'
				                }, {
				                    name: '文档图片'
				                }, {
				                    name: '其他'
				                }]
			}
		},
		methods: {
			changeTab(item){	
				this.tabIndex = item.index ? item.index : item;
			},
			handleChangeTab(item) {
			  this.changeTab(item.detail.current);
			}
		}
	}
</script>

<style scoped>
.swiper {
	height: calc(100vh - 53px);
}
.noImage {
	font-size: 60rpx;
	text-align: center;
    margin-top: -180rpx;
}
</style>
