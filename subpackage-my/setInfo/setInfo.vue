<template>
	<view class="page">
		<view class="d-flex j-center a-center mt-3">
			<view class="d-flex j-center a-center flex-column">
				<u-avatar :src="avatar" size="100"></u-avatar>
			   <text class="font-md pt-1" @click="setAvatar">
				   更换头像
			   </text>
			</view>
		
		</view>
		<block v-for="(item, index) in userInfo" :key="index">
			<view class="item d-flex j-sb py-3 px-2 border-bottom" @click="showPopup(item.type,item.options,item.placeholder,item.rule,item.field)">
				<view class="font-weight">{{ item.title }}</view>
				<view class="d-flex text-muted">
						<view class="d-flex a-center">
							<text>{{ item.value === null ? '去设置' : item.value }}</text>
							<text class="font-md text-light-muted ml-1">></text>
						</view>
				</view>
			</view>
		</block>
		<kePopup :type="type" :show="show" @close="close" @confirm="confirm" @cancle="cancle" :options="options"  :placeholder="placeholder" ></kePopup>
	</view>
</template>

<script>
import kePopup from '@/components/common/ke-popup.vue'
import { pathToBase64 } from 'image-tools'
import { mapActions,mapMutations } from 'vuex'
export default {
	components: {
		kePopup: kePopup
	},
	data() {
		return {
			avatar: uni.getStorageSync('userInfo').photo,
			type: '',
			placeholder: '',
			show: false,
			options: [],
			rule: '',
			field: '',
			userInfo: [
				{
					title: '昵称',
					field: 'nickname',
					type: 'input',
					placeholder: '请输入昵称',
					value: uni.getStorageSync('userInfo').nickname,
				},
				{
					title: '密码',
					field: 'password',
					type: 'password',
					placeholder: '请输入密码',
					value: uni.getStorageSync('userInfo').password,
					rule: /^.{5,20}$/
				},
				{
					title: '性别',
					field: 'sex',
					options: ['男','女'],
					type: 'select',
					value: uni.getStorageSync('userInfo').sex
				},
				{
					title: '电话号码',
					field: 'tel',
					placeholder: '请输入电话号码',
					type: 'input',
					value: uni.getStorageSync('userInfo').tel,
					rule: /^[1]+[3,8]+\d{9}$/
				},
				{
					title: '邮箱',
					field: 'email',
					placeholder: '请输入邮箱',
					type: 'input',
					value: uni.getStorageSync('userInfo').email,
					rule: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
				},
				{
					title: '年龄',
					field: 'age',
					type: 'input',
					placeholder: '请输入年龄',
					value: uni.getStorageSync('userInfo').age,
					rule: /^((1[0-1])|[1-9])?\d$/
				},
				{
					title: '地址',
					field: 'address',
					placeholder: '请输入地址',
					type: 'textArea',
					value: uni.getStorageSync('userInfo').address,
				}
			]
		};
	},
	methods: {
		...mapActions(['updateUserInfoAction','updateAvatarAction']),
		...mapMutations(['changeAvatar','changeUsername']),
		showPopup(type,options,placeholder,rule,field){
			this.type = type;
			this.placeholder = placeholder
			this.options = options;
			this.rule = rule;
			this.field = field;
			this.show = true;
		},
		close(){
			this.show = false;
		},
		cancle() {
			this.show = false;
		},
		async confirm(value) {
		if(value.value.length > 0){
			if(!this.rule){
				const res = await this.updateUserInfoAction({
								 id: uni.getStorageSync('userInfo').id,
								 [this.field]: value.value
				 })
				 const index = this.userInfo.findIndex( item =>  this.field === item.field);
				        this.userInfo[index].value =  res[`${this.field}`]
						this.changeUsername(res.nickname);
						uni.setStorageSync('userInfo',res);
			}else if(!!this.rule && this.rule.test(value.value)){
				const res = await this.updateUserInfoAction({
								 id: uni.getStorageSync('userInfo').id,
								 [this.field]: value.value
				 })
				 const index = this.userInfo.findIndex( item =>  this.field === item.field);
				        this.userInfo[index].value =  res[`${this.field}`]
						this.changeUsername(res.nickname)
						uni.setStorageSync('userInfo',res);
			}else{
				 uni.showToast({
				 	title: '请输入合法值',
					icon:'error'
				 })
			 }
		}else {
			uni.showToast({
				title: '未做修改,修改失败!',
				icon: 'none'
			})
		}
 
		 
         this.show =false;
		},
		setAvatar() {
			const _this = this;
			uni.chooseImage({
				count: 1, //默认9
				sourceType: ['album','camera'], //从相册选择
				encoding: "base64",
				success: function (res) {
					pathToBase64(res.tempFilePaths[0])
					  .then(async base64 => {
					 const res =  await _this.updateAvatarAction({
							userId: parseInt(uni.getStorageSync('userInfo').id),
							base64: base64
						})
					   uni.setStorageSync('userInfo',res);
					   _this.changeAvatar(res.photo);
						_this.avatar = res.photo
					  })
					  .catch(error => {
					   uni.showToast({
					   	title: error,
						icon: 'none'
					   })
					  })
				}
			});
		}
	}
};
</script>

<style>

</style>
