<template>
	<view>
		<u-sticky bgColor="#fff">
			<u-tabs
				:list="list"
				:current="tabIndex"
				lineColor="#22b1ac"
				lineWidth="30"
				@click="changeTab"
				:activeStyle="{
					color: '#333333',
					fontWeight: 'bold',
					transform: 'scale(1.05)'
				}"
			></u-tabs>
		</u-sticky>
		<divider></divider>
		<swiper :current="tabIndex" class="swiper" @change="handleChangeTab">
			<swiper-item v-for="(item, index) in list" class="swiper" :key="index">
				<view class="ctImage">
					<template v-if="item.picture.length > 0">
						<block v-for="(item2, index2) in item.picture" :key="index2">
							<view class="p-2"><image :src="item2"></image></view>
						</block>
					</template>
				</view>

				<!-- 				<template v-esle>
											<image src="https://oss-augustrush.oss-cn-shenzhen.aliyuncs.com/yayiImage/noImage.png" mode="widthFix" style="width: 750rpx;margin-top: 100rpx;"></image>
											<view class="text-light-muted noImage">暂无影像</view>
										</template> -->
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex: 0,
			list: [
				{
					name: '全部',
					picture: [
						'https://picb.zhimg.com/v2-4c86675b25f32c2b77910b843f04c7c4_r.jpg',
						'https://ts1.cn.mm.bing.net/th/id/R-C.0c9ba80488846941e78754601909cfc4?rik=zNESrtx%2buBYg4g&riu=http%3a%2f%2fwww.xjishu.com%2fimg%2fyytu%2fyx%2f2533-121120120I8.jpg&ehk=OSbrWfp62I8DX1viMqcGb%2bfvKy1QdKg5yEMvy4%2b6KA8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
						'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=850f468e79cf3bc7e855c5e8e4309697/2fdda3cc7cd98d10e3efb6b2283fb80e7bec907e.jpg'
					]
				},
				{
					name: '全景',
					picture: ['https://picb.zhimg.com/v2-4c86675b25f32c2b77910b843f04c7c4_r.jpg']
				},
				{
					name: '内窥镜',
					picture: [
						'https://ts1.cn.mm.bing.net/th/id/R-C.0c9ba80488846941e78754601909cfc4?rik=zNESrtx%2buBYg4g&riu=http%3a%2f%2fwww.xjishu.com%2fimg%2fyytu%2fyx%2f2533-121120120I8.jpg&ehk=OSbrWfp62I8DX1viMqcGb%2bfvKy1QdKg5yEMvy4%2b6KA8%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
						'https://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=850f468e79cf3bc7e855c5e8e4309697/2fdda3cc7cd98d10e3efb6b2283fb80e7bec907e.jpg'
					]
				},
				{
					name: 'PLY数据',
					picture: []
				},
				{
					name: 'STL数据',
					picture: []
				},
				{
					name: 'CBCT',
					picture: []
				},
				{
					name: 'X光分析',
					picture: []
				},
				{
					name: '文档图片',
					picture: []
				},
				{
					name: '其他',
					picture: []
				}
			]
		};
	},
	methods: {
		changeTab(item) {
			this.tabIndex = item.index ? item.index : item;
		},
		handleChangeTab(item) {
			this.changeTab(item.detail.current);
		}
	}
};
</script>

<style scoped>
.swiper {
	min-height: calc(100vh - 53px);
}
.ctImage {
	height: calc(100vh - 53px);
	overflow-y: scroll;
}
.noImage {
	font-size: 60rpx;
	text-align: center;
	margin-top: -180rpx;
}
</style>
