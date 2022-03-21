<template>
	<view style="margin-top: 10px;">
		<view>
			<u-steps current="0">
				<u-steps-item title="医助接待"></u-steps-item>
				<u-steps-item title="医生咨询"></u-steps-item>
				<u-steps-item title="评价反馈"></u-steps-item>
			</u-steps>
		</view>
		<view style="margin-top: 5px;margin-bottom: 10px;">
			<u-avatar size="45px" style="margin-left: 25px;display: inline-block;" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F90%2F27%2F5c1dbe9030f1a_610.jpg"></u-avatar>
			<view style="display: inline-block;margin-left: 10px;">
				<text style="font-size: 20px;display: block;">医生助手</text>
				<text style="font-size: 15px;">在线中，正在为您收集病情</text>
			</view>
		</view>
		<view style="height: 350px;background-color: #F2F6FC;">
			
		</view>
		<view>
			
			<u--input
				placeholder="请描述您的问题或症状(5-100字)"
			    border="surround"
			    v-model="value"
			    @change="change"
			>
			  	<template slot="suffix">
			  		<u-button
						shape="circle"
						icon="arrow-upward"
			  			size="small"
			  		></u-button>
			  	</template>
			</u--input>
		</view>
	</view>
</template>

<script>
	import card from '@/components/common/card.vue';
	export default {
		components:{
			card
		},
			data() {
				return {
			
					value: '',
					text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用'
				}
			},
			methods:{
				 onReady(){
					    this.$refs.uNotify.primary('Primary主题')
					}
			}
		}
</script>

<style>
</style>
