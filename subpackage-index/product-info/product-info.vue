<template>
	<view class="">
		<view class="p-2">
			<!-- 标题 -->
			<view class="mb-1">
				<view class="font-lg font-weight">{{ productInfo.name }}</view>
				<view class="">随时退 | 过期退 | 需预约</view>
				<view class="d-flex j-sb">
					<view>周末假期通用 | {{ goodsInfo.label }}</view>
					<view>半年消费{{ goodsInfo.sales }}</view>
				</view>
			</view>
			<!-- banner -->
			<block v-for="(item, index) in goodsInfo.bannerSrc" :key="index">
				<image :src="productInfo.img" mode="widthFix" style="width: 710rpx;border-radius: 15rpx;"></image>
			</block>
		
			<view class="border-top mt-2 d-flex">
				<view class="d-flex a-center mr-2">
					<uni-icons type="calendar" size="40" color="#333333"></uni-icons>
					<view>
						<view class="text-muted pt-1 line-30">适用时间</view>
						<view>周末节假日通用</view>
					</view>
				</view>
				<view class="d-flex a-center">
					<uni-icons type="staff" size="40" color="#333333"></uni-icons>
					<view>
						<view class="text-muted pt-1 line-30">适用人群</view>
						<view>限成人</view>
					</view>
				</view>
			</view>
			<view class="border mb-1">
				<view class="d-flex j-sb  p-2 font-weight" style="background-color: #fdf3f2">
					<view class="">[热销项目] {{ productInfo.name }}</view>
					<view class="">￥{{ productInfo.price }}</view>
				</view>
				
				<view class="d-flex mt-1 px-2 mb-2">
					<view class="font-weight mr-2">服务流程</view>
					<view style="flex: 1;">
						<block v-for="(item, index) in goodsInfo.progress" :key="index">
							<view class="d-flex j-sb">
								<view class="">
									<text class="progressIndex mr-1">{{ index + 1  }}</text>
									<text class="font-weight">{{ item.name }}</text>
								</view>
				
								<view class="">
									<text>{{ item.mount }}份</text>
									<text class="text-end" style="display: inline-block; width: 100rpx;">￥{{ item.price }}</text>
								</view>
							</view>
						</block>
					</view>
				</view>
			</view>
		</view>
		
		<divider></divider>
		
		<view class="p-2">
			<view class="text-center mb-2">
				<text class="imgDetail">图文详情</text>
			</view>
			<image :src="goodsInfo.detailImg" mode="widthFix" style="width: 100%;"></image>
		</view>
		<divider></divider>
		<view class="px-2">
			<view class="title m-2 font-md font-weight">更多商家</view>
			<goods-list :shopData="shopData"></goods-list>
		</view>
		<view class="buy px-3  pb-2">
			<view class="d-flex flex-column">
				<uni-icons type="phone" size="30"></uni-icons>
				 <view class="text-muted" style="margin-top: -20rpx;">
				 	咨询
				 </view>
			</view>
			 <view class="buyButton pb-2" @click="goToPay(productId)">
			 	<text class="font-lg">￥ </text> <text class="font-big mr-3">{{productInfo.price}}</text>  <text class="font-big" >立即购买</text>
			 </view>
		</view>
	</view>
	 
</template>

<script>
import goodsList from '@/components/goods-list/goods-list.vue';
import { mapActions } from 'vuex';
export default {
	components: {
		goodsList,
	},
	data() {
		return {
			pageInfo: {
				pageSize: 5,
				pageNum: 1
			},
			location: {},
			shopData: [],
			goodsInfo: {
				title: '牙齿美白套餐',
				label: '限工作日 | 成人',
				sales: 143,
				bannerSrc: ['https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2785135471/O1CN01vqHBI31qHlZyR56SV_!!0-item_pic.jpg_580x580Q90.jpg_.webp'],
				price: 68,
				progress: [
					{
						name: '挂号',
						mount: 1,
						price: 10
					},
					{
						name: '全口检查',
						mount: 1,
						price: 100
					},
					{
						name: '超声波洁牙',
						mount: 1,
						price: 200
					},
					{
						name: '抛光',
						mount: 1,
						price: 0
					},
					{
						name: '牙周上药',
						mount: 1,
						price: 0
					},
					{
						name: '口腔健康指导',
						mount: 1,
						price: 0
					}
				],
	
				detailImg: 'https://img1.baidu.com/it/u=1834901590,2063113377&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=4834',
		
			},
			productId: '',
			productInfo: {
				
			}
		};
	},
	methods: {
		...mapActions(['getClinicByLocationAction','getProductByIdAction']),
		previewImg() {
			uni.previewImage({
				urls: this.goodsInfo.bannerSrc
			});
		},
		goToPay(id) {
			uni.navigateTo({
				url: `/subpackage-index/pay/pay?id=${id}`
			})
		}
	},
  async	onLoad(options) {
	const _this = this;
	this.productInfo = await  this.getProductByIdAction(options.id);
	this.productId =  options.id;
	uni.getLocation({
			type: 'wgs84',
			success: async res => {
			  const	location =  {
					lat: res.latitude,
					lng: res.longitude
				}
				_this.location = location
			const res2 = await _this.getClinicByLocationAction(
			{
				..._this.pageInfo,
				...location
			});
			this.shopData = res2.list;
			}
	});
	},
	async onReachBottom() {
		this.pageInfo.pageNum++;
		uni.showLoading({
			title: '加载中'
		});
	const res = await this.getClinicByLocationAction({
		...this.location ,
		...this.pageInfo
	});
	if (res.list.length > 0) {
		uni.hideLoading();
		this.shopData.push(...res.list);
	} else {
		uni.hideLoading();
		uni.showToast({
			title: '没有更多数据了',
			icon: 'none'
		});
	}
	},
};
</script>

<style scoped>
.progressIndex {
	display: inline-block;
	width: 30rpx;
	height: 30rpx;
	font-size: 20rpx;
	line-height: 30rpx;
	text-align: center;
	border-radius: 50%;
	background-color: #ff6203;
	color: white;
}
.imgDetail::before {
	content: '';
	display: inline-block;
	width: 80rpx;
    border-top: 2rpx solid #dee2e6;
	padding-bottom: 8rpx;
	margin-right: 10rpx;
}
.imgDetail::after {
	content: '';
	display: inline-block;
	width: 80rpx;
    border-top: 2rpx solid #dee2e6;
	padding-bottom: 8rpx;
	margin-left: 10rpx;
}
.buy{
	display: flex;
	justify-content: space-between;
	position: fixed;
	width: 100%;
	bottom: 0rpx;
    background-color: white;
	border-top: 1px solid #dee2e6;
}
.buyButton {
	width: 590rpx;
	height: 90rpx;
	line-height: 90prx;
	text-align: center;
	margin-top: 20rpx;
	border-radius: 20rpx;
	color: white;
	background-color: #22b1ac;
}
</style>
