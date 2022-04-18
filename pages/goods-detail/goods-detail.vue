<template>
	<view>
		<view class="m-1 goods-detail" >
			<!-- banner -->
				<u-album  :urls="bannerSrc" keyName="src1"  :radius="'15rpx'"></u-album>
				<!-- 商品信息 -->
				<view class="goods-info  d-flex a-center mt-1">
					<u-avatar :src="goodsInfo.imgSrc" :size="60"></u-avatar>
					<view class="content ml-1">
						<text class="font-lg font-weight">{{goodsInfo.name}}</text>
						<view class="d-flex my-1">	<u-rate :count="5" v-model="goodsInfo.startsValue"  readonly allowHalf="true"></u-rate>
						详情 > {{goodsInfo.commentValue}}条</view>
					    <view class="">
							{{goodsInfo.organ}}
							{{goodsInfo.address}}
						</view>
					</view>
				</view>
				<!-- 营业时间 -->
				<view class="business-time py-1 border-top border-bottom">
					<view class="">
						{{businessInfo.status}} 
						{{businessInfo.startWeekDay}}到{{businessInfo.endWeekDay}}
						{{businessInfo.startTime}}-{{businessInfo.endTime}}
					</view>
					<view class="d-flex">
						<block v-for="item in businessInfo.licences" :key="item">
							<view class="mr-1 p-1 text-dark" style="background-color: #f7f5f6;">{{item}}</view>
						</block>
					</view>
				</view>
				<!-- 地址 -->
				<view class="d-flex j-sb p-1">
					<view>
						<text class="text-dark">{{contactInfo.address}}</text>
						<view class="text-muted">
							{{contactInfo.addressDetail}}
						</view>
					</view>
					
					<view class="d-flex j-center flex-column a-center">
						<u-icon name="phone-fill" color="#fd672c" size="20"></u-icon>
						电话</view>
				</view>
		</view>
		<!-- 分割线 -->
		<divider></divider>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				               bannerSrc: [{
				                    src1: 'https://cdn.uviewui.com/uview/album/1.jpg',
				                }],
								goodsInfo: {
									imgSrc: 'https://cdn.uviewui.com/uview/album/1.jpg',
									name: '海南市牙口腔门诊部',
									startsValue: 4.6,
									commentValue: 348,
									organ: '口腔医疗机构',
									address: '白龙路路线'
								},
								businessInfo: {
									status: '营业中',
									startWeekDay: '周一',
									endWeekDay: '周日',
									startTime: '08:30',
									endTime: '18:30',
									licences: [
										'优质店铺',
										'医疗许可证'
									]
								},
								contactInfo: {
									address: '阳光大道77号xx商业城2楼6号铺',
									addressDetail: '位于xx商业城内'
								}
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.goods-detail >>> image {
		width: 730upx !important;
		height: 500upx;
	}
</style>
