<template v-if="requestOk">
	<view>
		<view class="m-1 goods-detail">
			<!-- banner -->
			<view class="album"><u-album :urls="[clinicInfo.img]" keyName="src1" :radius="'15rpx'"></u-album></view>
			<!-- 商品信息 -->
			<view class="goods-info  d-flex a-center mt-1">
				<u-avatar :src="clinicInfo.img2" :size="60"></u-avatar>
				<view class="content ml-1">
					<text class="font-lg font-weight">{{ clinicInfo.name }}</text>
					<view class="d-flex my-1">
						<u-rate :count="5" v-model="clinicInfo.rate" readonly allowHalf="true"></u-rate>
						详情 > {{ comments.content.length }}条
					</view>
					<view class="">{{ clinicInfo.label }} {{ clinicInfo.address }}</view>
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
					<text class="text-dark">{{ clinicInfo.address }}</text>
					<view class="text-muted">{{ clinicInfo.detailedAddress }}</view>
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
			clinicInfo: {},
			moreCommentsId: 0,
			requestOk: false,
			pageInfo: {
				pageSize: 5,
				pageNum: 1
			},
			businessInfo: {
				status: '营业中',
				startWeekDay: '周一',
				endWeekDay: '周日',
				startTime: '08:30',
				endTime: '18:30',
				licences: ['优质店铺', '医疗许可证']
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
	
					]
				},
				{
					name: '洗牙',
					list: [

					]
				},
				{
					name: '美白',
					list: [

					]
				},
				{
					name: '补牙',
					list: [

					]
				},
				{
					name: '拔牙',
					list: [

					]
				},
				{
					name: '儿童齿科',
					list: [

					]
				},
				{
					name: '检查',
					list: [

					]
				},
				{
					name: '矫正',
					list: [
					]
				}
			],
			list: [
			],
			comments: {
				options: [],
				content: []
			}
		};
	},
	async onLoad(option) {
			const _this = this;
		this.moreCommentsId = option.id;
		uni.showLoading({
			title:'加载中...'
		})
		const goodRes = await this.getProductByTypeAction({
			pageNum: 1,
			pageSize: 99,
			clinicId: parseInt(option.id)
		})
	   goodRes.list.forEach(item => {
		 _this.goodsData.forEach(item2 => {
			 if(item2.name === item.type) {
				 item2.list.push({
					 id: item.id,
					 src: item.img,
					 title: item.name,
					 price: item.price,
					 oprice: item.oldPrice,
					 lable: [item.label]
				 })
			 }
		 })
	   })
	   this.goodsData[0].list = goodRes.list.map(item => {
		 return{
			   id: item.id,
			   src: item.img,
			   title: item.name,
			   price: item.price,
			   oprice: item.oldPrice,
			   lable: [item.label]
		 }  
	   })
		this.clinicInfo = await this.getClinicById(option.id);
		this.list = this.clinicInfo.doctorList; 

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
				          uni.hideLoading();
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
	methods: {
		...mapActions(['getClinicByLocationAction',  'getCommentsLabelsAction', 'isPraiseAction','getCommentsByTypeAction','getReplyById','getClinicById','getProductByTypeAction'])
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
