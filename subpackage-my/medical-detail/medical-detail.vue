<template>
	<view class="page">
		<!-- 标题 -->
         <view class="p-2" style="background-color: white;">
         	<view class="d-flex j-sb py-1 border-bottom">
         		<text>医生</text>
				<text>李满元</text>
         	</view>
			<view class="d-flex j-sb py-1">
				<text>就诊时间</text>
				<text>2022-05-22 14:45:00</text>
			</view>
         </view>	
		 <!-- 病例详情 -->
		 <view class="mt-2 p-2" style="background-color: white;">
                       <view class="border-bottom">
                            <view class="py-1">
                              口腔检查
                            </view>           
							<view class="imgCard">
								<view class="img mt-3">
									
								</view>
							</view>
                       </view>  		 	
		 </view>
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
	.page{
		min-height: 100vh;
		background-color: #f4f4f4;
		.imgCard{
			border: 2rpx solid #f4f4f4;
			border-radius: 15rpx;
		}
	}

</style>
