<template>
  <view class="box-sizing-b w-full">
    <!-- 顶部搜索 -->
    <index-header :search-tip="searchTip" :search-auto="searchAuto" @search="search"></index-header>
    <!-- 轮播图 -->
    <swiper-image :swiperData="swiperData"></swiper-image>
    <divider />
    <!-- 首页分类 -->
    <index-nav :navData="indexNavs"></index-nav>
    <!-- 全局分割线 -->
    <divider />
    <!-- 基础卡片 -->
    <card>
      <block slot="title">每日精选</block>
     <goods-list :shopData="shopData" :hasDivider="hasDivider"></goods-list>
    </card>

    <!-- 商品 -->
  </view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/indx-nav.vue';
import indexHeader from '@/components/index/index-header.vue';
import card from '@/components/common/card.vue';
import goodsList from '@/components/goods-list/goods-list.vue'
import {mapActions} from 'vuex'
export default {
  components: {
    swiperImage,
    indexNav,
    indexHeader,
    card,
	goodsList
  },
  data() {
    return {
      // 头部参数
	  hasDivider: true,
      searchAuto: !0,
	  pageInfo: {
		pageSize: 5,
		pageNum: 1,
	  },
	  shopData: [],
      searchTip: '请输入搜索关键字',
      swiperData: [
        { img: 'https://s1.ax1x.com/2022/03/09/bWKB6S.png' },
        { img: 'https://s1.ax1x.com/2022/03/09/bWKNFI.png' },
        { img: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png' }
      ],
      indexNavs: [
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWGI8s.png',
          text: '牙齿美白'
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWGo2n.png',
          text: '牙齿矫正'
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWGTvq.png',
          text: '口腔检查'
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWG5Cj.png',
          text: '牙齿治疗'
        }
      ],
    };
  },
 async onLoad() {
	 const res = await this.getClinicListAction(this.pageInfo);

	 this.shopData = res.list; 
	 // this.requestState = true
  },
  async onReachBottom() {
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
  },
  methods: {
	 	...mapActions(['getClinicListAction']),
    // 搜索回调函数
    search() {
      uni.navigateTo({
        url: '../../components/search/search'
      });
      console.log('home search');
    }
  }
};
</script>

<style lang="scss"></style>
