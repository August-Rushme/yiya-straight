<template>
	<view class="content">
     <view class="bg-danger" @tap="test">
     	选择
     </view>
	</view>
</template>

<script>

export default {
	data() {
		return {
	
		};
	},
	methods: {
		test(){
			uni.chooseImage({
				count:3,
				sizeType: ["compressed"],
				success: (res) => {
					console.log(res)
				}
			})
		}
	}

};
</script>

<style>

</style>
