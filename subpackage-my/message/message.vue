<template>
	<view class="p-2">
		
		<view class="search mb-1">
			<u--input
			    placeholder="搜索"
			    prefixIcon="search"
			    prefixIconStyle="font-size: 22px;color: #909399"
			></u--input>
		</view>
		<block v-for="(item,index) in friends" :key="index">
			<view class="my-2">
				<uni-card :is-full="true">
					<view class="d-flex a-center">
						<view>
					
							<u-avatar :src="item.avatar" shape="square" :size="50">				
							</u-avatar>

						</view>

						  <view class=" ml-2 " style="width: 100%;">
						  	<view class="d-flex j-sb a-center">
								<view class="font-md font-weight">
									{{item.nickname}}
								</view>
						  		<view class=" text-light-muted">
						  			{{item.latestMessage.time}}
						  		</view>
						  	</view>
							<view class="d-flex j-sb a-center">
								<view class="text-light-muted mt-1 content">
									{{item.latestMessage.content}}				
								</view>
								<view class="myBadage" :class="item.value > 99 ? 'px-2' : ''">
									 {{item.value > 99 ? '99+' : item.value}}
								</view>	
							</view>
						
						  </view>
					</view>
				</uni-card>
			</view>
	
		</block>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				friends: [
					{
						avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJsAibhKl94xrSQVNECeRk35s4AZB5wk6U9SwmQPzRTnCuEwiaRjCsA1BBwwKic2jtO9PCUG9icFqznjQ/132',
						nickname: 'August Rush',
						value: 166,
						latestMessage: {
							content: '哈哈哈哈hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
							time: '2022/5/2 16:47'
						},
					},
					{
						avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJsAibhKl94xrSQVNECeRk35s4AZB5wk6U9SwmQPzRTnCuEwiaRjCsA1BBwwKic2jtO9PCUG9icFqznjQ/132',
						nickname: 'August Rush',
						value: 186,
						latestMessage: {
							content: '哈哈哈哈',
							time: '2022/5/2 16:48'
						},
					}
				]
			}
		},
		methods: {
		}
	}
</script>

<style scope lang="less">
	.myBadage {
	 min-width: 40rpx;
	 height: 40rpx;
	 line-height: 40rpx;
	 text-align: center;
	 border-radius: 20rpx;
	 background-color: #f56c6c;
	 color: white;
	}
	.content {
		max-width: 400rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
