<template>
<view class="medical p-2">
	<block v-for="(item,index) in list" :key="index">
		<view class="card mb-2" @click="goToMedicalDetail(item.id)">
			<view class="d-flex j-sb a-center title pl-2 py-1">
				<view>
					<text class="mr-2">{{item.userName}}</text>
					<text>{{item.time}}</text>
				</view>
			</view>
			<view class="content">
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">医生</view>
					<view class="item-content">{{item.doctor}}</view>
				</view>
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">处置</view>
					<view class="item-content">{{item.handle}}</view>
				</view>
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">医嘱</view>
					<view class="item-content">{{item.advice}}</view>
				</view>
			</view>
		</view>
	</block>

</view>
</template>

<script>
	import { mapActions } from 'vuex'
export default {
	data() {
		return {
			list: [
			]
			};
	},
 async onLoad() {
        const res = await this.getMedicalCaseAction({
			 id: uni.getStorageSync('userInfo').id,
			 pageSize: 10,
			 pageNum: 1
		})
	   this.list = res.list;
	},
	methods: {
		...mapActions(['getMedicalCaseAction']),
		goToMedicalDetail(id){
			uni.navigateTo({
				url: `/subpackage-my/medical-detail/medical-detail?id=${id}`
			})
		},

	}
};
</script>

<style lang="scss" scoped>
	.medical {
		height: 100%;
		background-color: #f4f4f4;
		.card {
			background-color: #FFFFFF;
			border-radius: 15rpx;
			.title {
				background-color: #fafafa;
				border-radius: 15rpx 15rpx 0 0;
			}
			.item-content{
				flex: 1;
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}

	}

</style>
