<template>
	<view class="register d-flex j-center">
		<view class="card mt-4 p-4 d-flex flex-column a-center">
			<view><image src="/static/images/logo.png" style="width: 220upx;height: 220upx;margin-bottom: 40upx;" mode=""></image></view>

			<u--form ref="userRef" labelPosition="left" :model="userInfo" :rules="rules" labelWidth="auto">
				<u-form-item label="账号:" prop="userName" borderBottom><u--input v-model="userInfo.userName" border="none" placeholder="请输入账号"></u--input></u-form-item>
				<u-form-item label="密码:" prop="password" borderBottom><u--input v-model="userInfo.password" border="none" placeholder="请输入密码"></u--input></u-form-item>
				<u-form-item label="确认密码:" prop="repeatPassword" borderBottom>
					<u--input v-model="userInfo.repeatPassword" border="none" placeholder="请再次输入密码"></u--input>
				</u-form-item>  
			</u--form>
			<view class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md my-4" hover-class="main-bg-hover-color" @click="submit">
				注册
			</view>
			<view class="text-light-muted">
				已有账号?
			<text style="color: #2b59c1" @click="goToLogin">去登录</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
	
						userInfo: {
							userName: '',
							password: '',
							repeatPassword: ''
						},
					rules: {
						'userName': [{
							type: 'string',
							required: true,
							message: '请输入账号',
							trigger: ['blur', 'change']
						},
						{
							pattern: /^[a-zA-Z]\w{5,17}$/,
							message: '账号必须字母开头，长度在6~18之间，只能包含字母、数字和下划线',
						}
						],
						'password': [{
							type: 'string',
						     required: true,
							message: '请输入密码',
							trigger: ['blur', 'change']
						},
						{
							pattern: /^.{5,20}$/,
							message:"密码长度必须为5-20个字符",
						}
						],
						'repeatPassword': [{
							type: 'string',
							required: true,
						  message: '请再次输入密码',
						  trigger: ['blur', 'change']
						},
						{
							pattern: /^.{5,20}$/,
							message:"密码长度必须为5-20个字符",
						}
						],
					},
		};
	},
	methods: {
		goToLogin(){
		uni.navigateBack({
			delta: 1
		});
		},
		submit(){
			this.$refs.userRef.validate().then(res => {
				let flag = true;
				for(const key in this.rules){
				if(!this.rules[key][1].pattern.test(this.userInfo[key]))
				{
					uni.$u.toast(`${this.rules[key][1].message}`);
					flag = false
					return false
				}
				}
				if(flag){
					if(res &&  this.userInfo.password === this.userInfo.repeatPassword)
					{
						
						uni.navigateBack({
							delta: 1
						});
						uni.$u.toast('注册成功')
					}
					else if(this.userInfo.password !== this.userInfo.repeatPassword){
						uni.$u.toast('两次密码不一致')
					}
					else {
						uni.$u.toast('注册失败')
					}
				}
				
			}).catch(errors => {
                 uni.$u.toast('注册失败')
        })
		}
	}
};
</script>

<style scoped>
.register {
	height: 100%;
}
.card >>> .u-form {
	width: 650upx;
}
</style>
