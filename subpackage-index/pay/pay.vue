<template>
	<view class="page ">
		<view class="p-1">
			<view class="goodsInfo p-2">
				<!-- title -->
				<view class="font-md font-weight">海南清合口腔</view>
				<!-- info -->
				<view class="d-flex">
					<u-avatar
						src="https://img.alicdn.com/imgextra/i2/130209169/O1CN01N7yNHU2HbSErTGZgA_!!0-saturn_solar.jpg_468x468q75.jpg_.webp"
						shape="square"
						:size="90"
					></u-avatar>
					<view class="ml-1" style="flex: 1;">
						<view class="d-flex j-sb">
							<view class="font-md">牙齿美白套餐</view>
							<view>
								<text class="font-sm">￥</text>
								<text class="font-weight">{{ price.toFixed(2) }}</text>
							</view>
						</view>
						<view class="text-muted">工作日|仅成人</view>
						<view style="float: right;" class="mt-1">
							<u-number-box v-model="value" @change="valueChange">
								<view slot="minus" class="minus"><u-icon name="minus-circle" size="24"></u-icon></view>
								<text slot="input" style="width: 40px;text-align: center;font-size: 30rpx;" class="input">{{ value }}</text>
								<view slot="plus" class="plus"><u-icon name="plus-circle" size="24"></u-icon></view>
							</u-number-box>
						</view>
					</view>
				</view>
				<!-- other -->
				<view class="mt-4">
					<view class="d-flex j-sb">
						<view>开具发票</view>
						<view class="text-muted">
							<text>此订单暂不支持发票</text>
							<text class="ml-1 font-md">></text>
						</view>
					</view>

					<view class="d-flex j-sb mt-2">
						<view>订单备注</view>
						<view class="d-flex a-center text-muted" @click="popupShow = true">
							<text class="remarks">{{ defaultRemarks }}</text>
							<text class="ml-1 font-md">></text>
						</view>
					</view>
				</view>
			</view>
			<!-- price Detail -->
			<view class="priceDetail p-2 mt-2">
				<view class="font-weight">价格明细</view>
				<view class="d-flex j-sb  mt-1">
					<view>
						<text>商品总价</text>
						<text class="text-muted ml-1">共{{ value }}件宝贝</text>
					</view>
					<view class="font-weight">
						<text class="font-sm">￥</text>
						<text class="font-md">{{ totalCount }}</text>
					</view>
				</view>

				<view class="d-flex j-sb mt-1 a-center">
					<view class="d-flex">
						<image src="/static/images/ticket.png" mode="heightFix" style="height: 45rpx;"></image>
						<text class="ml-1">优惠劵</text>
					</view>
					<view @click="openTicketPopup">
						<text class="text-muted" >{{ defaultTicketsMsg }}</text>
						<text class="ml-1 font-md">></text>
					</view>
				</view>
				<view class="d-flex j-sb mt-1">
					<text>合计</text>
					<view class="font-weight">
						<text class="font-sm">￥</text>
						<text class="font-md">{{ discountCount }}</text>
					</view>
				</view>
			</view>

			<!-- pay ways -->
			<view class="mt-2 p-2 payWays">
				<block v-for="(item, index) in payWays" :key="index">
					<view class="d-flex a-center j-sb mb-2">
						<view class="d-flex">
							<image :src="item.iconSrc" mode="heightFix" style="height: 45rpx;"></image>
							<text class="ml-1 font-weight">{{ item.name }}</text>
						</view>
						<view @click="choosePayWays(index)">
							<template v-if="currentIndex === index">
								<u-icon name="checkmark-circle-fill" color="#fe6109" size="22"></u-icon>
							</template>
							<template v-else>
								<view class="noSelectIcon"></view>
							</template>
						</view>
					</view>
				</block>
			</view>
		</view>
		<!-- submit -->
		<view class="submitOrder pb-4 py-1">
			<view class="d-flex" style="float: right;">
				<view class="font-sm text-muted pt-2 pr-1">共{{ value }}件</view>
				<view class="d-flex flex-column">
					<view class="">
						<text>合计:</text>
						<text style="color: #ed5623;">
							￥
							<text class="font-lg">{{ discountCount }}</text>
						</text>
					</view>
					<view style="color: #ed5623;line-height: 15rpx;">共优惠￥{{ discountPrice.toFixed(2) }}元</view>
				</view>

				<view class="submitButton ml-1 mr-2 mt-2" @click="goToPaySuccess">立即支付</view>
			</view>
		</view>
		<u-popup :show="popupShow" mode="bottom">
			<view class="popup  py-1">
				<view class="closeBtn d-flex j-end mr-1"><u-icon name="close-circle" color="#333333" size="32" @click="popupShow = false"></u-icon></view>
				<view class="px-3 my-1">
					<textarea
						@focus="setHeight"
						@input="enterMsg"
						@blur="cancelHeight"
						class="border p-1"
						style="width: 690rpx;"
						v-model="remarks"
						placeholder="请输入备注"
						:auto-blur="true"
					/>
				</view>
				<view class="remarksBtn" :style="{ 'margin-bottom': blockHeight + 'px' }" @click="complete">提交</view>
			</view>
		</u-popup>
		<u-popup :show="ticketShow" mode="bottom">
			<view class="popup  py-1">
				<view class="closeBtn d-flex j-end mr-1"><u-icon name="close-circle" color="#333333" size="32" @click="ticketShow = false"></u-icon></view>
				<view class="px-4 my-1">
					<scroll-view scroll-y style="max-height: 440rpx;">
						<block v-for="(item2, index2) in tickets" :key="index2">
							<view class="mb-2 card">
								<view class="d-flex" :class="item2.status ? '' : 'disabled'" style="height: 180rpx;">
									<view class="d-flex flex-column j-center a-center font-lg" style="min-width: 5em; border-right: 1px dashed #ededed;">
										<view style="color:#fd3925">
											<text class="font-lg font-weight">￥</text>
											<text class="font-big font-weight">{{ item2.descMoney }}</text>
										</view>
										<view class="text-light-muted font-md">满{{ item2.targetMoney }}使用</view>
									</view>
									<view class="d-flex a-center" style="flex: 1;justify-content: space-around;">
										<view class="d-flex flex-column j-center">
											<view class="font-weight font-md">限{{ item2.type }}使用</view>
											<view class="text-light-muted font-md">{{ item2.expirationTime }}前使用</view>
										</view>
										<view @click="selectTickets(index2, item2.targetMoney, item2.descMoney)">
											<template v-if="item2.status ? true : false">
												<template v-if="item2.isSlected">
													<u-icon name="checkmark-circle-fill" color="#fe6109" size="22"></u-icon>
												</template>
												<template v-else>
													<view class="noSelectIcon"></view>
												</template>
											</template>
										</view>
									</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 1,
			price: 79,
			discountPrice: 0,
			defaultRemarks: '无备注',
			defaultTicketsMsg: '暂未选择任何优惠劵',
			ticketShow: false,
			remarks: '',
			blockHeight: 20,
			popupShow: false,
			currentIndex: 0,
			currentUseTicket: {},
			payWays: [
				{
					name: '钱包支付',
					iconSrc: '/static/images/wallet2.png'
				},
				{
					name: '支付宝',
					iconSrc: '/static/images/alipay.png'
				}
			],
			tickets: [
				{
					type: '牙齿美白类商品',
					expirationTime: '2022/6/30 18:43',
					descMoney: 66,
					targetMoney: 300,
					isSlected: false
				},
				{
					type: '牙齿美白类商品',
					expirationTime: '2022/6/30 18:43',
					descMoney: 88,
					targetMoney: 400,
					isSlected: false
				},
				{
					type: '牙齿美白类商品',
					expirationTime: '2022/6/30 18:43',
					descMoney: 100,
					targetMoney: 500,
					isSlected: false
				}
			]
		};
	},
	computed: {
		totalCount() {
			const totalCount = (this.price * this.value).toFixed(2);
			return totalCount;
		},
		discountCount() {
			const totalCount = (this.price * this.value - this.discountPrice).toFixed(2);
			return totalCount;
		}
	},
	methods: {
		choosePayWays(index) {
			this.currentIndex = index;
		},
		valueChange() {
			console.log(this.totalCount);
			
			setTimeout(()=>{
				if (this.currentUseTicket.targetMoney) {
					if (this.totalCount < this.currentUseTicket.targetMoney) {
						uni.showToast({
							title: '未达到满减值,目前不可参与满减',
							icon: 'none'
						});
						this.discountPrice = 0;
						this.defaultTicketsMsg = '暂未选择任何优惠劵';
					} else {
						this.discountPrice = this.currentUseTicket.descMoney;
						this.defaultTicketsMsg = '减' + this.currentUseTicket.descMoney + '元';
					}
				}
			},10)
		
		
		},
		setHeight(e) {
			this.blockHeight = e.detail.height;
		},
		cancelHeight(e) {
			this.blockHeight = 20;
		},
		enterMsg(e) {
			this.remarks = e.detail.value;
		},
		complete() {
			this.defaultRemarks = this.remarks;
			this.remarks = '';
			this.popupShow = false;
		},
		openTicketPopup() {
			const newTickets = [];
			this.tickets.forEach(item => {
				const newItem = { ...item, status: this.totalCount > item.targetMoney ? true : false };
				item = newItem;
				newTickets.push(newItem);
			});
			this.tickets = newTickets;
			this.ticketShow = true;
		},
		selectTickets(index, targetMoney, descMoney) {
			this.tickets.forEach( (item,index2)=> {
				if(index2 !== index){
					item.isSlected = false;
				}
			})
			this.tickets[index].isSlected = !this.tickets[index].isSlected;
			if (!this.tickets[index].isSlected) {
				this.discountPrice = 0;
				this.currentUseTicket = {};
				this.defaultTicketsMsg = '暂未选择任何优惠劵';
			} else {
				this.discountPrice = descMoney;
				this.currentUseTicket.descMoney = descMoney;
				this.currentUseTicket.targetMoney = targetMoney;
				this.defaultTicketsMsg = '减' + descMoney + '元';
			}
		},
		goToPaySuccess(){
			uni.navigateTo({
				url: '/subpackage-index/pay-success/pay-success'
			})
		}
	}
};
</script>

<style scoped lang="scss">
.page {
	min-height: 100vh;
	background-color: #f5f5f5;
	.goodsInfo,
	.payWays,
	.priceDetail {
		border-radius: 15rpx;
		background-color: white;
	}
	.remarks {
		display: inline-block;
		max-width: 400rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.noSelectIcon {
		width: 44rpx;
		height: 44rpx;
		border-radius: 50%;
		border: 2rpx solid #eeeeee;
	}
	.disabled {
		background-color: #e8ebec;
	}
	.card {
		border-radius: 15rpx;
		border: 1px solid #eaedf4;
		box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.08);
	}
	.submitOrder {
		position: fixed;
		width: 750rpx;
		bottom: 0;
		background-color: white;
	}
	.submitButton {
		width: 180rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
		text-align: center;
		color: white;
		background: linear-gradient(to right, #f09336, #ec5f2b);
	}
	.remarksBtn {
		margin: 20rpx auto;
		width: 300rpx;
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
		text-align: center;
		color: white;
		background: linear-gradient(to right, #f09336, #ec5f2b);
	}
	.block {
		width: 100%;
	}
}
</style>
