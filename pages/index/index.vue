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
     <goods-list :shopData="shopData" :hasDivider="true"></goods-list>
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
      searchAuto: !0,
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
      shopData: [
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '国贸口腔(国贸路def区4栋11楼)',
          desc: '国贸路|齿科',
		  starsValue: 4.6,
          label: ['']
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '国兴口腔(国兴路xyz区5栋12楼)',
          desc: '国兴路|齿科',
		  starsValue: 4.6,
          label: ['']
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '德韩口腔(德胜路abc区3栋10楼)',
          desc: 'abc路|齿科',
		  starsValue: 4.6,
          label: ['']
        }
      ],
      
    };
  },
  onLoad() {},
  methods: {
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
