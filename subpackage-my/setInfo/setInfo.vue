<template>
	<view class="page">
		<view class="d-flex j-center a-center mt-3">
			<view class="d-flex j-center a-center flex-column">
				<u-avatar :src="avatar" size="100"></u-avatar>
			   <text class="font-md pt-1">
				   更换头像
			   </text>
			</view>
		
		</view>
		<block v-for="(item, index) in userInfo" :key="index">
			<view class="item d-flex j-sb py-3 px-2 border-bottom">
				<view class="font-weight">{{ item.title }}</view>
				<view class="d-flex text-muted">
						<view class="d-flex a-center">
							<text>{{ item.value === null ? '去设置' : item.value }}</text>
							<text class="font-md text-light-muted ml-1">></text>
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
			avatar: uni.getStorageSync('avatar'),
			userInfo: [
				{
					title: '昵称',
					value: uni.getStorageSync('userInfo').nickname
				},
				{
					title: '密码',
					value: uni.getStorageSync('userInfo').password
				},
				{
					title: '性别',
					value: uni.getStorageSync('userInfo').sex
				},
				{
					title: '电话号码',
					value: uni.getStorageSync('userInfo').tel
				},
				{
					title: '角色',
					value: '用户'
				},
				{
					title: '年龄',
					value: uni.getStorageSync('userInfo').age
				},
				{
					title: '地址',
					value: uni.getStorageSync('userInfo').address
				}
			]
		};
	},
	methods: {}
};
</script>

<style scope>

</style>
