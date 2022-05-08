<template>
	<view class="page">
		<view class="sendInput">
			<u-input placeholder="请描述您的问题或症状" border="surround" v-model="message">
				<template slot="suffix">
					<view class="d-flex a-center">
						<view class="mr-1"><uni-icons type="image" size="30" @tap="chooseImage"></uni-icons></view>
						<view class="mr-1"><uni-icons type="videocam" size="30" @tap="chooseVideo"></uni-icons></view>
						<u-button shape="circle" icon="arrow-upward" size="small" @tap="sendMessage"></u-button>
					</view>
				</template>
			</u-input>
		</view>
	</view>
</template>


<script>

export default {
	data() {
		return {
message: ''
		};
	},
}
</script>

<style scoped lang="scss">
	.sendInput {
		position: fixed;
		width: 750rpx;
		bottom: 0;
		background-color: #ffffff;
	}
</style>
