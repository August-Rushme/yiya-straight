<template>
	<view>
		<view class="d-flex py-2 pl-2 title">
			<view class="total" :class="currentIndex === 0 ? 'isactive' : ''" @click="setIndexZero">全部日期</view>
			<scroll-view scroll-x scroll-with-animation style="width: 640rpx;">
				<view class="d-flex">
					<block v-for="(item, index) in recentlyDate" :key="index">
						<view class="text-muted d-flex flex-column j-center a-center mx-1" :class="currentIndex === index + 1 ? 'isactive' : ''" @click="changeItem(index)">
							<view>{{ item.date }}</view>
							<view>{{ item.weekDay }}</view>
						</view>
					</block>
				</view>
			</scroll-view>
		</view>
		<view class="p-2 doctorInfo">
			<block v-for="(item, index) in doctorInfo" :key="index">
				<view class="mb-2">
					<uni-card is-full spacing="5px">
						<view class="d-flex a-center">
							<image :src="item.avatar" style="width: 120rpx;height: 120rpx; flex-shrink: 0; border-radius: 50%;"></image>
					
							<view class="userInfo ml-2">
								<view>
									<text class="font-weight pr-1" style="font-size: 38upx;">{{ item.userName }}</text>
									<text class="text-muted">{{ item.profession }}</text>
								</view>
								<view>{{ item.clinicName }}</view>
								<view class="goodAt">{{ item.goodAt }}</view>
							</view>
							<template v-if="item.status === 1">
								<view class="appointment" @click="goToAppointment">预约</view>
							</template>
							<template v-else>
								<view class="notAppointment">约满</view>
							</template>
						</view>
					</uni-card>
				</view>

			</block>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			recentlyDate: [],
			doctorInfo: [
				{
					avatar: 'https://n1.hdfimg.com/g12/M03/63/DC/14YBAGGp8jOAEfJUAAZRCbfSmFM530_800_800_1.png?12d4',
					userName: '李满元',
					profession: '主治医师',
					clinicName: '海南清合口腔',
					goodAt: '前突等错、拔除牙齿或治疗口腔囊肿',
					status: 1
				},
				{
					avatar: 'https://n1.hdfimg.com/g12/M03/63/DC/14YBAGGp8jOAEfJUAAZRCbfSmFM530_800_800_1.png?12d4',
					userName: '李满元',
					profession: '主治医师',
					clinicName: '海南清合口腔',
					goodAt: '前突等错、拔除牙齿或治疗口腔囊肿',
					status: 0
				}
			]
		};
	},
	onLoad() {
		const weekDays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
		const date = new Date();
		const formatDate = [];
		let dayIndex = date.getDay();
		for (let i = 0; i < 8; i++) {
			const date2 = new Date(date.getTime() + i * 24 * 60 * 60 * 1000);
			const month = (date2.getMonth() + 1).toString().padStart(2, '0');
			const day = date2
				.getDate()
				.toString()
				.padStart(2, '0');
			const combineDate = month + '/' + day;
			formatDate.push({
				date: combineDate,
				weekDay: weekDays[dayIndex % 7]
			});
			dayIndex++;
		}
		this.recentlyDate = [...this.recentlyDate, ...formatDate];
	},
	methods: {
		changeItem(index) {
			console.log(index + 1);
			this.currentIndex = index + 1;
		},
		setIndexZero() {
			this.currentIndex = 0;
		},
		goToAppointment(){
			uni.navigateTo({
				url: '/subpackage-project/imme-register/imme-register'
			})
		}
	}
};
</script>

<style scoped lang="scss">
.title {
	height: 130rpx;
	.total {
		width: 70rpx;
		border-right: 1px solid #f1f1f1;
	}
	.isactive {
		color: #21b0ab !important;
	}
}
.doctorInfo {
	min-height: calc(100vh - 148rpx);
	background-color: #f5f5f5;
	.userInfo {
		flex-shrink: 1;
		overflow: hidden;
		.goodAt {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}
	}
	.appointment {
		width: 120rpx;
		height: 120rpx;
		flex-shrink: 0;
		line-height: 120rpx;
		text-align: center;
		color: #ff9000;
		border: 1px solid #ff9000;
		border-radius: 50%;
	}
	.notAppointment{
		width: 120rpx;
		height: 120rpx;
		flex-shrink: 0;
		line-height: 120rpx;
		text-align: center;
		color: #a9a5a5;
		border: 1px solid #a9a5a5;
		border-radius: 50%;
	}
}
</style>
