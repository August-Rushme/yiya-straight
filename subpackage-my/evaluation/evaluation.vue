<template>
	<view class="page d-flex p-2  j-center">
		<view class="card p-2">
			<!-- 商品描述 -->
			<view class="d-flex a-center">
				<u-avatar src="https://img.alicdn.com/imgextra/i2/130209169/O1CN01N7yNHU2HbSErTGZgA_!!0-saturn_solar.jpg_468x468q75.jpg_.webp" shape="square" :size="90"></u-avatar>
				<view class="ml-3 font-md">
					<view class=" font-weight">牙齿美白套餐</view>
					<view class=" text-muted py-1">工作日|限成人</view>
					<view class="text-muted ">实付款：69元</view>
				</view>
			</view>
			<!-- 评价 -->
			<view class="d-flex my-3 a-center">
				<text class="mr-1">描述相符</text>
				<u-rate :count="5" v-model="value" gutter="10" size="20"></u-rate>
			</view>
			<!-- 标签 -->
			<view class="d-flex my-2 ">
				<text style="width: 120rpx;">快捷标签</text>
				<view class="options">
					<view class="row">
						<block v-for="(item, index) in labels" :key="index">
							<view class="option-item span24-7 mr-2 mb-2" :class="item.isActive ? 'select' : ''" @click="select(index,item.name)">{{ item.name }}</view>
						</block>
					</view>
				</view>
			</view>
			<!-- 评论 -->
			<u--textarea v-model="value2" placeholder="从多个角度评价宝贝,可以帮助更多想买的人" count height="120"></u--textarea>
			<!-- 照片 -->

			<template v-if="imgUrls.length <= 0">
				<view class="photo mt-3 d-flex j-center a-center" @click="chooseImage">
					<view class="d-flex j-center a-center flex-column">
						<uni-icons type="camera-filled" color="#22b1ac" size="30"></uni-icons>
						<view class="text-light-muted">为宝贝拍买家秀</view>
					</view>
				</view>
			</template>
			<template v-else>
				<view class="mt-3 d-flex">
					<block v-for="(item, index) in imgUrls" :key="index">
						<view class="album"><image :src="item" class="img" @click="previewImg(index)"></image> <view class="close d-flex j-center a-center" @click="deleteImg(index)">
							<uni-icons type="closeempty" size="20" color="#ffffff"></uni-icons>
						</view></view>
						
					</block>
					<!-- <u-album :urls="imgUrls" :radius="'15rpx'" multipleSize="100" singleSize="100" space="15"></u-album> -->
					<template v-if="imgUrls.length < 3">
						<view class="slectMore d-flex j-center a-center " @click="chooseImage">
							<view class="d-flex j-center a-center flex-column">
								<uni-icons type="camera-filled" color="#22b1ac" size="30"></uni-icons>
								<view class="text-light-muted">为宝贝拍买家秀</view>
							</view>
						</view>
					</template>
				</view>
			</template>
			<!-- 提示 -->
			<view class="tip d-flex a-center mt-2 py-2 px-1">
				<image src="../../static/images/tip.png" mode="widthFix" style="width: 30rpx;height: 30rpx;"></image>
				<text>发图可以帮助他人更真实地了解商品~</text>
			</view>
			<!-- 发布 -->

			<view class="push">发布</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 0,
			value2: '',
			labels: [
				{
					name: '服务热情',
					isActive: false
				},
				{
					name: '性价比高',
					isActive: false
				},
				{
					name: '环境很好',
					isActive: false
				},
				{
					name: '价格实惠',
					isActive: false
				},
				{
					name: '高大上',
					isActive: false
				},
				{
					name: '质量好',
					isActive: false
				}
			],
			imgUrls: [],
			selectedLabels: []
		};
	},
	methods: {
		select(index,name) {
			this.labels[index].isActive = !this.labels[index].isActive;
			this.selectedLabels.push(name)
			console.log(this.selectedLabels);
		},
		chooseImage() {
			let count = 3 - this.imgUrls.length;

			const _this = this;
			uni.chooseImage({
				count: count, //默认9
				sizeType: ['compressed'], //可以指定是原图还是压缩图，默认二者都有
				success: function(res) {
					_this.imgUrls.push(...res.tempFilePaths);
					console.log(_this.imgUrls);
				}
			});
		},
		deleteImg(index) {
		 this.imgUrls.splice(index,1);
		},
		previewImg(index){
			uni.previewImage({
				        current: index,
						urls: this.imgUrls
					});
		}
	}
};
</script>

<style scope lang="scss">
.page {
	height: 100%;
	background-color: #f5f5f5;
	.card {
		width: 710rpx;
		background-color: white;
		border-radius: 20rpx;
	}
	.photo {
		height: 200rpx;
		border: 1rpx dashed #dadbde;
	}
	.slectMore {
		height: 200rpx;
		width: 200rpx;
		border: 1rpx dashed #dadbde;
		border-radius: 15rpx;
	}
	.tip {
		height: 40rpx;
		line-height: 40rpx;
		background-color: #fef4f3;
		color: #f94f03;
		border-radius: 15rpx;
	}
	.album {
		position: relative;
		.img {
			display: block;
			height: 200rpx;
			width: 200rpx;
			border-radius: 15rpx;
			margin-right: 30rpx;
		}
		.close {
			position: absolute;
			width: 50rpx;
			height: 50rpx;
			background-color: rgba(0, 0, 0, 0.1);
			top: 0;
			right: 30rpx;
		}
	}
	.push {
		margin-top: 70rpx;
		margin-left: 105rpx;
		width: 500rpx;
		height: 60rpx;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		background: linear-gradient(to right, #20dab4, #22b1ac);
		color: white;
	}
	.option-item {
		height: 50rpx;
		color: #636162;
		line-height: 50rpx;
		font-size: 20rpx;
		text-align: center;
		background-color: #f7f5f6;
		border-radius: 20rpx;
	}
	.select {
		color: #e0a534;
		background-color: #fbf6ea;
	}
}
</style>
