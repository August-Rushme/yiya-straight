<template>
	<view style="background-color: #F2F6FC;">
		<view style="background-color: #FFFFFF;height: 40px;margin-top: 10px;">
			<u-subsection bold="true" fontSize="15px" inactiveColor="#c8c9cc" bgColor="#FFFFFF" mode="button" :list="list" :current="curNow" @change="sectionChange"></u-subsection>
		</view>
		<view v-if="curNow==0">
			<view style="background-color: #FFFFFF;height: 80px;">
				<u-row>
					<u-col span="2" offset="1">
						<u-avatar size="55px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Felement%2F40162%2F5054.png_860.png"></u-avatar>
					</u-col>
					<u-col span="8">
						<view>
							<text style="font-size: 20px;">医生助手</text>
							<text style="font-size: 15px;display: block;">在线中，正在为您收集病情</text>
						</view>
					</u-col>
				</u-row>
			</view>
			<view style="height: 470px;overflow: auto;">
				<u-divider text="以下为医助接待"></u-divider>
			</view>
			<view  style="background-color: #FFFFFF;">
				<u-input
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
				</u-input>
			</view>
		</view>
		<view v-if="curNow==1">
			<view style="background-color: #FFFFFF;height: 80px;">
				<u-row>
					<u-col span="2" offset="1">
						<u-avatar size="55px" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F90%2F27%2F5c1dbe9030f1a_610.jpg"></u-avatar>
					</u-col>
					<u-col span="8">
						<view>
							<text style="font-size: 20px;">医生咨询</text>
							<text style="font-size: 15px;display: block;">在线中，正在为您收集病情</text>
						</view>
					</u-col>
				</u-row>
			</view>
			<view style="height: 470px;overflow: auto;">
				<u-divider text="以下为医生接待"></u-divider>
			</view>
			<view  style="background-color: #FFFFFF;">
				<u-input
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
				</u-input>
			</view>
		</view>
		<view v-if="curNow==2">
			<view>
				<u-form
					labelWidth="350rpx"
					labelAlign="center"
					ref="form1">
					<u-form-item
						label="为医助打分"
						borderBottom
						ref="item1">
						<u-rate :count="5" v-model="rate1"></u-rate>
					</u-form-item>
					<u-form-item
						label="为医生打分"
						borderBottom
						ref="item1">
						<u-rate :count="5" v-model="rate2"></u-rate>
					</u-form-item>
					<u-form-item
						label="写下你的评价"
						borderBottom
						labelWidth="300rpx"
						ref="item1">
						<u--textarea count v-model="value2" placeholder="请输入内容" ></u--textarea>
					</u-form-item>
					<u-form-item
						label="待添加"
						borderBottom
						labelWidth="300rpx"
						ref="item1">
					</u-form-item>
					<u-form-item
						label="待添加"
						borderBottom
						labelWidth="300rpx"
						ref="item1">
					</u-form-item>
					<u-form-item
						label="待添加"
						borderBottom
						labelWidth="300rpx"
						ref="item1">
					</u-form-item>
				</u-form>
				<u-button type="primary" text="确定"></u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components:{
		},
			data() {
				return {
					value: '',
					value2:'',
					rate1: '',
					rate2: '',
					list: ['医助接待', '医生咨询', '评价反馈'],
					curNow: 0
				}
			},
			methods:{
				sectionChange(index) {
					this.curNow = index;
				}
			}
		}
</script>

<style>
</style>
