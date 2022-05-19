<template>
  <view class="teeth-whitening">
	  <!-- 搜索框 -->
	  <u-search placeholder="请输入关键字" disabled @click="search" :showAction="false"></u-search>
	  <!-- 轮播图 -->
    <swiper-image :swiperData="swiperData"></swiper-image>
    <!-- 分割线 -->
    <divider></divider>
  <!-- nav -->
    <view class="tab-bar ">
		<block v-for="item in selectList" :key="item.index">
		  <view class="tab-item" @tap="changeTab(item)">
			<text :class="item.index === tabIndex ? 'is-slected' : ''">{{item.name}}</text>
		    <view class="underline" v-if="item.index === tabIndex"></view>
		  </view>
		</block>
	</view>
	

	<view class="goodsInfo p-2">
			<!-- 具体商品信息 -->
		<template v-if="tabIndex === 0">
			<view class="mb-2" v-for="(item, index) in shopData" :key="index">
				<uni-card :isFull="true" spacing="0"  padding="0"  @click="goGoodsDeatail(item.id)">
					<view class="d-flex flex-row m-2 a-center"  style="position: relative;" >
						<view>
							<u--image :showLoading="true" :src="item.img" width="84px" height="84px"></u--image>
						</view>
			
					   <view class="infoText flex-column mx-2" style="flex: 1;">
					   		  <view class="d-flex" style="position: relative;">
					   		  	    <text class="font-weight font-md line-30" style="display: inline-block; width: 400rpx;padding-bottom: 8rpx;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{ item.name }}</text>
					   				<view class="d-flex flex-column j-center a-center" style="position: absolute; right: -14rpx;top:-14rpx;" @click.stop="goHere">
					   					<image src="../../static/images/navigation.png" mode="heightFix" style="height: 60rpx;"></image>
					   					<view class="text-light-muted  font-sm">
					   						去这里
					   					</view>
					   				</view>
					   		  </view>
					    <u-rate count="5" v-model="item.rate" readonly allowHalf="true"></u-rate>
					    <text  style="display: inline-block; width: 400rpx;white-space: nowrap;text-overflow: ellipsis;padding-top: 8rpx; overflow: hidden;line-height: 30rpx;">{{ item.address }}</text>
					    <view class="flex-row j-center a-center "></view>
					    <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1">国家认证</text>
					    <text style="border: #F0AD4E solid 1px; color: #E45656;" class="mx-1 px-1">顶级医师</text>
						
						<view class="text-light-muted" style="position: absolute; bottom: 0;right: 6rpx;">
						     4.0km
						</view>
					  </view>
					</view>
				</uni-card>
			</view>
		</template>
		<!-- 医生信息 -->  
		<template v-else-if="tabIndex === 1">
			<view class="mb-2" v-for="(item, index) in doctorInfo" :key="index"> 
			<uni-card :isFull="true"  padding="0px" @tap="goDoctorsDetail(item.id)" >
				<view class="d-flex flex-row m-2 a-center"  >
					<view style="margin-left: -20upx;">	 <u-avatar :src="item.avatar" size="60"></u-avatar></view>
			
				 <view class="doctorDesc font-md ml-2">
					 <text>
						 <text class="font-weight font-lg text-dark pr-1">{{item.name}}</text>
						 <text >{{item.profession}} 从业{{item.workYears}}年
						 </text>
					 </text>
					 <view class="mb-1">
						 {{item.clinicName}}
					 </view>
					 <view class="d-flex">
						 <block v-for="skillType in item.labels" :key="skillType">
						 <view class="border: 1px solid #6e6e6e;color: #6e6e6e;mr-1;px-1">{{skillType.label}}</view>
						 </block>				
					 </view>
				 </view>
				</view>
			</uni-card>
			</view>
		</template>
	</view>

    <!--  </scroll-view> -->
  </view>
</template>
<script>
import swiperImage from '@/components/index/swiper-image.vue';
import { mapActions } from 'vuex'
  export default {
  components:{
	  swiperImage 
  },
    data() {
      return {
		  tabIndex: 0,
		  pageInfo: {
		  		pageSize: 5,
		  		pageNum: 1,
		  },
		 pageInfo2: {
		 		pageSize: 5,
		 		pageNum: 1,
		 },
        swiperData: [
          { img: 'https://s1.ax1x.com/2022/03/09/bWKB6S.png' },
          { img: 'https://s1.ax1x.com/2022/03/09/bWKNFI.png' },
          { img: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png' }
        ],
		selectList: [
		 {
			 index: 0,
			 name: '商品'
		 },
		 {
			 index: 1,
			 name: '医生'
		 }
		],
		shopData: [],
		doctorInfo: [

		]
      }
    },
	async onLoad(){
		const res = await this.getClinicListAction(this.pageInfo);
		const doctorData = await this.getAllDoctorAction(this.pageInfo2);
		this.doctorInfo = doctorData.list;
		this.shopData = res.list; 	
	},
	async onReachBottom() {
		
		if(this.tabIndex === 0){
			this.pageInfo.pageNum++;
					uni.showLoading({
						title: '加载中'
					});
					const res = await this.getClinicListAction(this.pageInfo);
			if(res.list.length>0){
						uni.hideLoading();
						this.shopData.push(...res.list); 
					}else{
						uni.hideLoading();
						uni.showToast({
						  title: '没有更多数据了',
						  icon: 'none'
						});
					}
		}else{
			this.pageInfo2.pageNum++;
					uni.showLoading({
						title: '加载中'
					});
					const doctorData =  await this.getAllDoctorAction(this.pageInfo2);
			if(doctorData.list.length>0){
						uni.hideLoading();
						this.doctorInfo .push(...doctorData.list); 
					}else{
						uni.hideLoading();
						uni.showToast({
						  title: '没有更多数据了',
						  icon: 'none'
						});
					}
		}
	
	},
    methods: {
		...mapActions(['getClinicListAction','getAllDoctorAction']),
      search(){
		  uni.navigateTo({
		  	url: '/components/search/search'
		  })
	  },
	  changeTab(item) {
		  this.tabIndex = item.index
	  },
	  goGoodsDeatail(id){
		  uni.navigateTo({
		  	url: `/subpackage-index/goods-detail/goods-detail?id=${id}`
		  })
	  },
	  goDoctorsDetail(id){
		  uni.navigateTo({
		  	url: `/subpackage-project/doctor-detail/doctor-detail?id=${id}`
		  })
	  },
	  goHere(){
	  	let plugin = requirePlugin('routePlan');
	  	let key = 'GG6BZ-LTCWP-BG4DD-VRG5X-YA4LF-FZB23';  //使用在腾讯位置服务申请的key
	  	let referer = 'straight';   //调用插件的app的名称
	  	let endPoint = JSON.stringify({  //终点
	  	    'name': '吉野家(北京西站北口店)',
	  	    'latitude': 19.981393,
	  	    'longitude': 110.510048
	  	});
	  	wx.navigateTo({
	  	    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
	  	});
	  }
    }
  }
</script>

<style scoped>
.teeth-whitening >>> .u-search__content {
	margin: 20upx;
}
.tab-bar {
	display: flex;
	height: 90upx;
}
.tab-bar .tab-item {
	width: 350upx;
	height: 90upx;
    display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 40upx;
}
.is-slected {
	font-weight: 700;
}
.underline {
	height: 10upx;
	width: 90upx;
	border-radius: 5upx;
	background-color: #22b1ac;
}
.goodsInfo {
	background-color: #f5f5f5;
}
</style>
