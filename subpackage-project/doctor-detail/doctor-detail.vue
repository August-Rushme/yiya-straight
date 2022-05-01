<template>
	<view class="page">
		<view class="px-2 mb-3">
			<view class="py-2 d-flex"><u-avatar :src="doctorInfo.avatar" :size="60"></u-avatar>
			 <view class="ml-2">
				 <view class="font-lg font-weight">{{doctorInfo.name}}</view>
				 <view>
				 	<text class="mx-1">{{doctorInfo.title}}</text>
					<text class="text-muted">|</text>
					<text class="mx-1">{{doctorInfo.profession}}</text>
					<text class="text-muted">|</text>
					<text class="mx-1">从业{{doctorInfo.workYears}}年</text>
				 </view> 
			 </view>
			</view>
			 <view class="px-2 d-flex">
				 <view style="padding-top: 6rpx;">
				 	<image src="/static/images/skill.png" style="width: 45rpx; height: 45rpx;">
				 	</image>
				 </view>
				<view class="ml-1">
					<view class="font-md">擅长</view>
					<view class="text-muted">
						{{doctorInfo.gootAt}}
					</view>
				</view>
			 </view>
			 <view class="px-2 d-flex">
			 				 <view style="padding-top: 6rpx;">
			 				 	<image src="/static/images/resume.png" style="width: 45rpx; height: 45rpx;">
			 				 	</image>
			 				 </view>
			 				<view class="ml-1">
			 					<view class="font-md">个人简历</view>
			 					<view class="text-muted">
			 						{{doctorInfo.profile}}
			 					</view>
			 				</view>
			 </view>
		</view>
        <divider></divider>
		<!-- 所属医院 -->
		<view class="p-2">
			<view class="title pl-1 font-md font-weight">
				所属医院
			</view>
			<view class="d-flex a-center mt-2 pb-3 j-sb" style="border-bottom: 1px solid #EFEFEF; margin-bottom: 80rpx;">
				<view>
					<view class="pl-1">
						{{clinicInfo.name}}
					</view>
					<u-rate :count="5" v-model="clinicInfo.rate" readonly allowHalf="true"></u-rate>
				</view>
				<u-icon name="phone-fill" color="#fd672c" size="30"></u-icon>
			</view>
		</view>
		
		<view >
			<button style="background: #d81421; color: white; width: 500rpx;">
				评价Ta
			</button>
		</view>
		
		<view class="mt-3">
			<button style="background: #21b0ab; color: white; width: 500rpx;">
				在线问诊
			</button>
		</view>
	
		
	</view>
</template>

<script>
	import { mapActions } from 'vuex'
export default {
	data() {
		return {
			doctorInfo: {
			},
			clinicInfo: {
				
			}
		};
	},
	async onLoad(option) {
	 const res = await this.getDoctorByIdAction(parseInt(option.id));
     this.doctorInfo = res;
	 const clinicRes = await this.getClinicById(res.clinicId);
	 this.clinicInfo = clinicRes
	},
	methods: {
		...mapActions(['getDoctorByIdAction','getClinicById'])
	}
};
</script>

<style scoped lang="scss">
.page{
	height: 100%;
	// .bottom {
	// 	position: absolute;
	// 	width: 100%;
		
	// 	bottom: 0;
	// }
}

</style>
