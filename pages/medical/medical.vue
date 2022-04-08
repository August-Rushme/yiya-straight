<template>
	

	<view>
		
		<view class="">
			<u-cell-group>
					<u-cell  title="就诊" center=true></u-cell>
					
				</u-cell-group>
		</view>
		
		<view>
				<u-action-sheet :actions="list1" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title1" :show="show"></u-action-sheet>
				<u-button @click="show = true">病人病历1</u-button>
				<u-action-sheet :actions="list2" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title2" :show="show"></u-action-sheet>
				<u-button @click="show = true">病人病历2</u-button>
				<u-action-sheet :actions="list3" :closeOnClickOverlay="true" :closeOnClickAction="true"  :title="title3" :show="show"></u-action-sheet>
				<u-button @click="show = true">病人病历3</u-button>
				
			</view>

		<view class="">
			<u--textarea v-model="value1" placeholder="病人病历" height=300  ></u--textarea>
		</view>
	</view>
	

	
</template>

<script>
export default {
	data() {
		return {
			title1:'病因1',
			list1: [
				{
					name:'病因一'
				},
				{
					name: '病因二'
				}
			],
			title2:'病因2',
			list2: [
				{
					name:'病因一'
				},
				{
					name: '病因二'
				}
			],
			title3:'病因3',
			list3: [
				{
					name:'病因一'
				},
				{
					name: '病因二'
				}
			],
			show: false
		};
	},
	onLoad() {},
	methods: {
	}
};
</script>

<style>
</style>
