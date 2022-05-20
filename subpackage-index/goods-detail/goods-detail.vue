<template v-if="requestOk">
	<view>
		<view class="m-1 goods-detail">
			<!-- banner -->
			<view class="album"><u-album :urls="bannerSrc" keyName="src1" :radius="'15rpx'"></u-album></view>
			<!-- 商品信息 -->
			<view class="goods-info  d-flex a-center mt-1">
				<u-avatar :src="goodsInfo.imgSrc" :size="60"></u-avatar>
				<view class="content ml-1">
					<text class="font-lg font-weight">{{ goodsInfo.name }}</text>
					<view class="d-flex my-1">
						<u-rate :count="5" v-model="goodsInfo.startsValue" readonly allowHalf="true"></u-rate>
						详情 > {{ goodsInfo.commentValue }}条
					</view>
					<view class="">{{ goodsInfo.organ }} {{ goodsInfo.address }}</view>
				</view>
			</view>
			<!-- 营业时间 -->
			<view class="business-time py-1 border-top border-bottom">
				<view class="">
					{{ businessInfo.status }} {{ businessInfo.startWeekDay }}到{{ businessInfo.endWeekDay }} {{ businessInfo.startTime }}-{{ businessInfo.endTime }}
				</view>
				<view class="d-flex">
					<block v-for="item in businessInfo.licences" :key="item">
						<view class="mr-1 p-1 text-dark" style="background-color: #f7f5f6;">{{ item }}</view>
					</block>
				</view>
			</view>
			<!-- 地址 -->
			<view class="d-flex j-sb p-1">
				<view>
					<text class="text-dark">{{ contactInfo.address }}</text>
					<view class="text-muted">{{ contactInfo.addressDetail }}</view>
				</view>

				<view class="d-flex j-center flex-column a-center">
					<u-icon name="phone-fill" color="#fd672c" size="20"></u-icon>
					电话
				</view>
			</view>
		</view>
		<!-- 分割线 -->
		<divider></divider>
		<!-- 产品 -->
		<product :tabBars="tabBars" :goodsData="goodsData"></product>
		<divider></divider>
		<!-- 医师团队 -->
		<physicianTeam :physicianList="list"></physicianTeam>
		<divider></divider>
		<!-- 用户评价-->
		<comments :comments="comments" :total="commentsTotal" :moreCommentsId="moreCommentsId"></comments>
		<divider></divider>
		<!-- 更多商家 -->
		<view class="more px-2">
			<view class="title m-2 font-md font-weight">更多商家</view>
			<goods-list :shopData="shopData"></goods-list>
		</view>
	</view>
</template>

<script>
import physicianTeam from '@/components/page-detail/physician-team.vue';
import product from '@/components/page-detail/product.vue';
import goodsList from '@/components/goods-list/goods-list.vue';
import comments from '@/components/comments/comments.vue';
import { mapActions } from 'vuex';
export default {
	components: {
		physicianTeam,
		product,
		goodsList,
		comments
	},
	data() {
		return {
			shopData: [],
			location: {},
			commentsTotal: 0,
			moreCommentsId: 0,
			requestOk: false,
			pageInfo: {
				pageSize: 5,
				pageNum: 1
			},
			bannerSrc: [
				{
					src1: 'https://preview.qiantucdn.com/ing/64/59/02/31858PICfATERV2vjbGdg_PIC2018.jpg!qt324_nowater_jpg'
				}
			],
			goodsInfo: {
				imgSrc: 'https://preview.qiantucdn.com/ing/64/59/02/31858PICfATERV2vjbGdg_PIC2018.jpg!qt324_nowater_jpg',
				name: '海南清合口腔',
				startsValue: 4.8,
				commentValue: 13,
				organ: '口腔医疗机构',
				address: '海南省海口市美兰区南宝路'
			},
			businessInfo: {
				status: '营业中',
				startWeekDay: '周一',
				endWeekDay: '周日',
				startTime: '08:30',
				endTime: '18:30',
				licences: ['优质店铺', '医疗许可证']
			},
			contactInfo: {
				address: '阳光大道77号xx商业城2楼6号铺',
				addressDetail: '位于xx商业城内'
			},
			tabBars: [
				{
					name: '全部'
				},
				{
					name: '洗牙'
				},
				{
					name: '美白'
				},
				{
					name: '补牙'
				},
				{
					name: '拔牙'
				},
				{
					name: '儿童齿科'
				},
				{
					name: '检查'
				},
				{
					name: '矫正'
				}
			],
			goodsData: [
				{
					name: '全部',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						},
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						},
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						},
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '洗牙',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '美白',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						},
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '补牙',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '拔牙',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '儿童齿科',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '检查',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						},
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				},
				{
					name: '矫正',
					list: [
						{
							src: 'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
							title: '牙齿美白套餐，单人超声波洗牙套餐',
							price: '79',
							oprice: '188',
							label: ['限工作日 | 成人']
						}
					]
				}
			],
			list: [
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/17/34/89/06A58PICjaRETFUvfENGa_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/17/34/89/06A58PICjaRETFUvfENGa_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
				},
				{
					name: 'xxx',
					position: '副主任医师',
					workTime: '从业27年',
					thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
				}
			],
			comments: {
				options: [],
				content: []
			}
		};
	},
	async onLoad(option) {
		this.moreCommentsId = option.id;
	const _this = this;
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
		const reply = await this.getCommentsByTypeAction({
			pageSize: 2,
			pageNum: 1,
			clinicId: parseInt(option.id),
			labelId: 1,
		});
		const content = [];
		reply.list.forEach(async (item) => {
			const isPraise = await this.isPraiseAction({
				userId: uni.getStorageSync('userInfo').id,
				commentId: item.id
			});
			const newReply = [];
		const _this = this
		item.replyId.forEach( async item2 =>{
			const reply2 = await _this.getReplyById({
				pageSize: 99,
				pageNum: 1,
				replyId: item2
			})
			newReply.push(reply2.list[0])
		})
			const newObj = {
				...item,
				newReply: newReply,
				thumbColor: isPraise == 'true' ? 'red' : 'dark'
			};
			console.log(newObj);
			content.push(newObj);
		});

		const labels = await this.getCommentsLabelsAction({
		  clinicId: parseInt(option.id)
		});
		this.comments.options = labels;
		this.commentsTotal = reply.total;
		this.comments.content = content
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
	if (res.list.length >= 0) {
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
	methods: {
		...mapActions(['getClinicByLocationAction',  'getCommentsLabelsAction', 'isPraiseAction','getCommentsByTypeAction','getReplyById'])
	}
};
</script>

<style scoped>
.album >>> image {
	width: 730upx !important;
	height: 400upx !important;
}
.option-item {
	height: 50rpx;
	color: #636162;
	line-height: 50rpx;
	text-align: center;
	background-color: #f7f5f6;
	border-radius: 20rpx;
}
.select {
	color: #e0a534;
	background-color: #fbf6ea;
}
.comment-content {
	margin-left: 100rpx;
}
.replyContent {
	width: 470rpx;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
