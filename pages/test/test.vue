
<template>
	<view class="content">
     <view class="bg-danger" @tap="test">
     	选择
     </view>
	 <view class="bg-dark" @tap="send">
	 	send
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
	         wx.requestSubscribeMessage({
	           tmplIds: ['bet02VNFijJfRWs2ewz6vHWBGrga_3pIYCmU-wlACdo'],
	           success (res) { 
				  console.log(res);
			   }
	         })
		},
		send(){
		}
	}

};
</script>

<style>

</style>
