<template>
	<view class="popupView">
		<u-popup :show="show2">
			<view class="p-3 d-flex j-center a-center">
				<template v-if="type === 'input' || type === 'password'">
					<u--input :placeholder="placeholder" border="surround" v-model="value" clearable :password="type === 'password' ? true : false"></u--input>
				</template>
				<template v-else-if="type === 'textArea'">
					<u--textarea v-model="value" :placeholder="placeholder" count></u--textarea>
				</template>

				<template v-else-if="type === 'select'">
					<view style="margin-top: -30rpx;">
						<block v-for="(item, index) in options" :key="index">
							<view class="text-center border-bottom py-2" :class="defaultIndex === index ? 'font-weight' : ''"  @click="select(index,item)" style="width: 750rpx;">
								{{ item }}
							</view>
						</block>
					</view>
				</template>
			</view>
			<view class="d-flex j-center mb-3">
				<view class="d-flex">
					<view class="confirmBtn confirmBtn2 text-muted" @click="cancle">取消</view>
					<view class="confirmBtn" @click="confirm">确定</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	props: {
		type: String,
		placeholder: String,
		rule: {
			type: Array,
			default() {
				return [];
			}
		},
		field: String,
		show: {
			type: Boolean,
			default: false
		},
		options: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			defaultIndex: 0,
			value: ''
		};
	},
	computed: {
		show2() {
			return this.$props.show;
		}
	},
	methods: {
		confirm() {
			this.$emit('confirm', {
				value: this.value
			});
			this.value = '';
		},
		cancle() {
			this.$emit('cancle', {});
			this.value = '';
		},
		select(index,item) {
			this.value = item;
			this.defaultIndex = index;
		}
	}
};
</script>

<style scoped lang="scss">

.confirmBtn {
	width: 220rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	border-radius: 30rpx;
	margin-right: 40rpx;
	background: linear-gradient(to right, #20dab4, #22b1ac);
	color: white;
}
.confirmBtn2 {
	background: #dee2e6;
}
</style>
