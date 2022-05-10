<template>
	<view class="page d-flex">
		<scroll-view scroll-y style="flex: 1;height: 100%;" class="border-right border-light-secondary">
			<block v-for="(item, index) in labels" :key="index">
				<view class="border-bottom border-light-secondary py-1"><view class="text-center font-md text-muted py-1" :class=" currentIndex === index ? 'isactive' : ''" @tap="changeCate(index)">{{item.label}}</view></view>
			</block>
		</scroll-view>
		
		<scroll-view scroll-y style="flex: 3;height: 100%;" class="border-right border-light-secondary">
				<block v-for="(item2,index2) in details" :key="index2">
					<view class="d-flex j-sb border-bottom font-md p-2 text-muted" @click="goTodesignAppoint" >
						<view>
							{{item2.detail}}
						</view>
						<view >
							>
						</view>
					</view>
					
				</block>

			
		</scroll-view>
			</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				labels: [
					{
						label: '牙齿美白'
					},
					{
						label: '牙齿矫正'
					},
					{
						label: '口腔检查'
					},
					{
						label: '牙呲治疗'
					}
				],
				details: [
				   {
					   detail: '冷光美白'
				   }	
				],
				
			}
		},
		methods: {
			changeCate(index){
				this.currentIndex = index;
			},
			goTodesignAppoint(){
				uni.navigateTo({
					url: '/subpackage-project/designative-appointment/designative-appointment'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page {
	height: 100%;
}
.isactive {
	border-left: 8upx solid #21b0ab;
	color: #21b0ab !important;
}
</style>
