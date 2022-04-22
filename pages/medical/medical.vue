<template>
<view class="medical p-2">
	<block v-for="(item,index) in list" :key="index">
		<view class="card mb-2">
			<view class="title pl-2 py-1">
				<text class="mr-2">{{item.username}}</text>
				<text>{{item.time}}</text>
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
			list: [
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容'
				},
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容'
				},
				{
					username: '张三',
					time: '2022/4/20 15:38',
					doctorname: '李四',
					management: '这是一段处置内容这是一段处置内容这是一段处置内容这是一段处置内容',
					medicalAdvice: '这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容这是医嘱内容'
				}
			]
			};
	},
	onLoad() {},
	methods: {
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
