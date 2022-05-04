<template>
	<view>
		<block v-for="(item, index) in userInfo" :key="index">
			<view class="item d-flex j-sb py-3 px-2 border-bottom">
				<view class="font-weight">{{ item.title }}</view>
				<view class="d-flex text-muted">
					<template v-if="item.title === '头像'">
						<view class="d-flex a-center">
							<u-avatar :src="item.value" size="30"></u-avatar>
							<text class="font-md text-light-muted ml-1">></text>
						</view>
					</template>
					<template v-else>
						<view class="d-flex a-center">
							<text>{{ item.value === null ? '去设置' : item.value }}</text>
							<text class="font-md text-light-muted ml-1">></text>
						</view>
					</template>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			userInfo: [
				{
					title: '头像',
					value: uni.getStorageSync('userInfo').photo
				},
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

<style></style>
