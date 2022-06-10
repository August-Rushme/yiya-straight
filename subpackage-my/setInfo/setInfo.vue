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
			<view class="item d-flex j-sb py-3 px-2 border-bottom" @click="showPopup(item.type,item.options,item.placeholder)">
				<view class="font-weight">{{ item.title }}</view>
				<view class="d-flex text-muted">
						<view class="d-flex a-center">
							<text>{{ item.value === null ? '去设置' : item.value }}</text>
							<text class="font-md text-light-muted ml-1">></text>
						</view>
				</view>
			</view>
		</block>
		<ke-popup :type="type" :show="show" @close="close" @cancle="cancle" :options="options"  :placeholder="placeholder"></ke-popup>
	</view>
</template>

<script>
import kePopup from '@/components/common/ke-popup.vue'
export default {
	components: {
		kePopup: kePopup
	},
	data() {
		return {
			avatar: uni.getStorageSync('avatar'),
			type: '',
			placeholder: '',
			show: false,
			options: [],
			userInfo: [
				{
					title: '昵称',
					type: 'input',
					placeholder: '请输入昵称',
					value: uni.getStorageSync('userInfo').nickname
				},
				{
					title: '密码',
					type: 'password',
					placeholder: '请输入密码',
					value: uni.getStorageSync('userInfo').password
				},
				{
					title: '性别',
					options: ['男','女'],
					type: 'select',
					value: uni.getStorageSync('userInfo').sex
				},
				{
					title: '电话号码',
					placeholder: '请输入电话号码',
					type: 'input',
					value: uni.getStorageSync('userInfo').tel
				},
				{
					title: '邮箱',
					placeholder: '请输入邮箱',
					type: 'input',
					value: uni.getStorageSync('userInfo').email
				},
				{
					title: '年龄',
					type: 'input',
					placeholder: '请输入年龄',
					value: uni.getStorageSync('userInfo').age
				},
				{
					title: '地址',
					placeholder: '请输入地址',
					type: 'textArea',
					value: uni.getStorageSync('userInfo').address
				}
			]
		};
	},
	methods: {
		showPopup(type,options,placeholder){
			this.type = type;
			this.placeholder = placeholder
			this.options = options;
			this.show = true;
		},
		close(){
			this.show = false;
		},
		cancle() {
			this.show = false;
		}
	}
};
</script>

<style scope>

</style>
