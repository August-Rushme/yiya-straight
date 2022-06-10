<template>
	<view class="d-flex j-center a-center" style="height: 100vh;">
	    <uni-card spacing="0">
			<view style="width: 350rpx;">
				<view class="d-flex j-sb border-bottom">
					<view>
								 <text style="width: 3em;">病人:</text> <text>张三</text>
					</view>
					<view >
							      <text style="width: 3em;">医生:</text> <text>李四</text>
					</view>
				</view>
				<view class="d-flex border-bottom pt-1">
					<text style="width: 3em;">处置:</text>
				     <text class="cardContent">处置内容</text>
				</view>
				<view class="d-flex pt-1">
					<text style="width: 3em;">医嘱:</text>
				     <text class="cardContent">医嘱内容医嘱内容医嘱内容医嘱内容</text>
				</view>
			</view>

		</uni-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
.cardContent {
	flex: 1;
	overflow: hidden;
    white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
