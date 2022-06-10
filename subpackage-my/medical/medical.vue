<template>
<view class="medical p-2">
	<block v-for="(item,index) in list" :key="index">
		<view class="card mb-2" @click="goToMedicalDetail">
			<view class="d-flex j-sb a-center title pl-2 py-1" @click.stop="selectCard(index)">
				<view >
					<text class="mr-2">{{item.username}}</text>
					<text>{{item.time}}</text>
				</view>
		        <template v-if="needSelected">
					<template v-if="!item.selected">
					  <view class="circle"></view>
					</template>
		        	<template v-else>
						<view class="mr-1">
						<u-icon name="checkmark-circle-fill" color="#22b1ac" size="25"></u-icon>
						</view>
		   
		        	</template>
		        </template>
			</view>
			<view class="content">
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">医生</view>
					<view class="item-content">{{item.doctorname}}</view>
				</view>
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">处置</view>
					<view class="item-content">{{item.management}}</view>
				</view>
				<view class="pl-2 py-1 d-flex">
					<view class="item-title mr-2">医嘱</view>
					<view class="item-content">{{item.medicalAdvice}}</view>
				</view>
			</view>
		</view>
	</block>

</view>
</template>

<script>
export default {
	data() {
		return {
			needSelected: false,
			list: [
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容',
					selected: false,
				},
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容',
					selected: false,
				},
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容',
					selected: false,
				}
			]
			};
	},
	onLoad(options) {
		if(options.needSelected){
		 this.needSelected = !!options.needSelected
		}
	},
	methods: {
		goToMedicalDetail(){
			uni.navigateTo({
				url: '/subpackage-my/medical-detail/medical-detail'
			})
		},
		selectCard(index){
			this.list.forEach(item => {
				item.selected = false;
			})
			this.list[index].selected = !this.list[index].selected
		}
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
		.circle{
			width: 50rpx;
			height: 50rpx;
			margin-right: 10rpx;
			border-radius: 50%;
			border: 2rpx solid #dee2e6;
		}
	}

</style>
