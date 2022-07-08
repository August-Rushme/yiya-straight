<template>
	<view class="use-page">
		<!-- 搜索内容区 -->
		<view class="search-area pos-r w-full padding-lr dflex-b">
			<view class="h-full flex1 dflex-c a-center">
				<view class="icon-search pos-a"><text class="iconfont iconsousuo-01"></text></view>
				<input
					type="text"
					class="pos-a padding-left padding-tb-xs border-radius-lg box-sizing-b"
					maxlength="20"
					placeholder="请输入关键字"
					@confirm="search"
					v-model="keyword"
					@blur="blur"
					@focus="focus"
				/>
			</view>

			<view class="esBox" :style="{ display: showEsBox }">
				<block v-for="(item, index) in sugguestList" :key="index">
					<view class="mb-1" @click="search(item)">{{ item }}</view>
				</block>
			</view>
			<view
				class="border-radius-big padding-tb-xs padding-lr margin-left"
				style="background: linear-gradient(to right, #20dab4, #22b1ac);color: white;"
				@click="search(keyword)"
			>
				搜索
			</view>
		</view>
		<view class="gap"></view>

		<!-- 搜索历史区 -->
		<view class="padding-lr w-full padding-top-lg" v-if="historyDatas && historyDatas.length > 0">
			<view class="d-flex j-sb">
				<view class="dflex"><text>搜索历史</text></view>
				<u-icon name="trash" size="20" @click="clear"></u-icon>
			</view>
			<view class="dflex dflex-wrap-w">
				<view
					class="item margin-right-sm margin-bottom-sm dflex bg-drak border-radius-lg padding-tb-xs padding-lr"
					v-for="(item, index) in historyDatas"
					:key="index"
					@click="search(item)"
				>
					<text>{{ item }}</text>
				</view>
			</view>
		</view>
		<!-- 热门搜索区 -->
		<view class="padding-lr w-full padding-top-lg" v-if="hotDatas && hotDatas.length > 0">
			<view class="padding-bottom-sm dflex-b">
				<view class="dflex"><text>热门搜索</text></view>
			</view>
			<view class="dflex dflex-wrap-w">
				<view
					class="item margin-right-sm margin-bottom-sm dflex bg-drak border-radius-lg padding-tb-xs padding-lr"
					v-for="(item, index) in hotDatas"
					:key="index"
					@click="search(item.keyword)"
				>
					<text>{{ item.keyword }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	computed: {},
	data() {
		return {
			// 搜索关键字
			keyword: '',
			showEsBox: 'none',
			pageInfo: {
				pageSize: 5,
				pageNum: 1
			},
			// 历史搜索
			historyDatas: [

			],
			sugguestList: [],
			// 热门搜索
			hotDatas: [
				{
					keyword: '牙齿'
				},
				{
					keyword: '口腔'
				}
			]
		};
	},
	onShow() {
		// 初始化
		this.keyword = '';
		this.historyDatas = uni.getStorageSync('historyData') === '' ?  [] : uni.getStorageSync('historyData') 
		// 加载数据
	},
	watch: {
		keyword() {
			if (this.keyword.length > 0) {
				uni.$u.debounce(async () => {
					const res = await this.getProductSuggestAction({
						key: this.keyword
					});
					this.sugguestList = res;
					this.showEsBox = 'block';
				}, 200);
			} else {
				this.showEsBox = 'none';
			}
		}
	},
	methods: {
		...mapActions(['getProductSuggestAction']),
		// 搜索
		search(item) {
			console.log(item);
			const temp  = uni.getStorageSync('historyData') === '' ? [] : uni.getStorageSync('historyData') 
			temp.unshift(item);
			const list  = [...new Set(temp)] 
			uni.setStorageSync('historyData', list.splice(0,10) )
			uni.navigateTo({
				url: `/subpackage-index/good-list/good-list?key=${item}`
			});
		},
		focus() {
			if (this.keyword.length > 0) {
				this.showEsBox = 'block';
			}
		},
		blur() {
			this.showEsBox = 'none';
		},
		// 清空搜索历史
		clear() {
			let _this = this;

			uni.showModal({
				title: '提示',
				content: '清空搜索历史',
				success: function(res) {
					if (res.confirm) {
						_this.historyDatas = [];
						uni.setStorageSync('historyData','')
						return;
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.search-area {
	position: relative;
	height: 120rpx;

	input {
		width: 560rpx;
		padding-left: 60rpx;
		height: 64rpx;
		line-height: 64rpx;
		background-color: #f5f5f5;
	}
	.esBox {
		position: absolute;
		background-color: white;
		padding: 20rpx;
		width: 560rpx;
		top: 92rpx;
		left: 21rpx;
		border: 2rpx solid #dee2e6;
	}
	.icon-search {
		top: 50%;
		left: 40rpx;
		transform: translate(0, -50%);
		z-index: 1;

		text {
			color: #c0c0c0;
		}
	}
}
</style>
