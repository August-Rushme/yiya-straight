<template>
	<view class="page d-flex">
		<scroll-view scroll-y style="flex: 1;height: 100%;" class="border-right border-light-secondary">
			<block v-for="(item, index) in cateData" :key="index">
				<view class="border-bottom border-light-secondary py-1"><view class="text-center font-md text-muted py-1" :class=" currentIndex === index ? 'isactive' : ''" @tap="changeCate(index,item.id)">{{item.label}}</view></view>
			</block>
		</scroll-view>
		
		<template v-if="doctorInfo.length > 0">
			<scroll-view scroll-y style="flex: 3;height: 100%;" class="border-right border-light-secondary">
				<view class="row">
					<block v-for="(item2,index2) in doctorInfo" :key="index2">
						<view class="doctorItem span24-8 d-flex flex-column a-center j-center py-2" @tap="goDoctorDetail(item2.id)">
							<u-avatar :src="item2.avatar" :size="60"></u-avatar>
							<view class="d-flex a-center j-center">
								<view class="text-center mr-1">{{item2.name}}</view>
								 <view style=" width: 20rpx;height: 20rpx;border-radius: 50%;" :class="item2.isOnline === 0 ? 'offline' :'online'"></view>
								</view>
							</view>
							
					</block>
			
				</view>
				
			</scroll-view>
		</template>
		<template v-else>
			<view style="flex: 3;height: 100%;" class="d-flex j-center a-center">
			<u-empty
			        mode="data"
			        icon="http://cdn.uviewui.com/uview/empty/data.png"
			>
			</u-empty>
				</view>
		</template>

	</view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	components: {},
	data() {
		return {
			currentIndex: 0,
			cateData: [],
			doctorInfo: [
			]
		};
	},
	methods: {
		...mapActions(['getAllDoctorLabelAction','getDoctorBylLabelIdAction']),
	 async changeCate(index,id) {
			this.currentIndex = index;
			this.doctorInfo = [];
			uni.showLoading({
				title: '加载中'
			});
			this.doctorInfo = await this.getDoctorBylLabelIdAction({labelId:id});
			uni.hideLoading();
		},
		goDoctorDetail(id) {
			uni.navigateTo({
				url: `/subpackage-project/doctor-detail/doctor-detail?id=${id}`
			})
		}
	},
     async onShow() {
		 const res = await this.getAllDoctorLabelAction();
		 const res2 = await this.getDoctorBylLabelIdAction({labelId:1});
		 this.cateData = res;
		 this.doctorInfo = res2;
	},

};
</script>

<style scoped lang="scss">
.page {
	height: 100%;
}
.online {
	background-color: green;
}
.offline {
	background-color: #adadad;
}
.isactive {
	border-left: 8upx solid #21b0ab;
	color: #21b0ab !important;
}
</style>
