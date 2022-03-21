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
      <view class="content" v-for="(item, index) in shopData" :key="index" @click="goDatail">
        <view class="goodsInfo d-flex flex-row m-2 a-center">
          <u--image :showLoading="true" :src="item.src" width="80px" height="80px"></u--image>
          <view class="infoText flex-column mx-2">
            <text class="font-weight font-md">{{ item.address }}</text>
            <u-rate count="5" v-model="value" :disabled="true" allowHalf="true"></u-rate>
            <text>{{ item.desc }}</text>
            <view class="flex-row j-center a-center "></view>
            <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1">国家认证</text>
            <text style="border: #F0AD4E solid 1px; color: #E45656;" class="mx-1 px-1">顶级医师</text>
          </view>
        </view>
      </view>
    </card>

    <!-- 商品 -->
  </view>
</template>

<script>
import swiperImage from '@/components/index/swiper-image.vue';
import indexNav from '@/components/index/indx-nav.vue';
import indexHeader from '@/components/index/index-header.vue';
import card from '@/components/common/card.vue';
export default {
  components: {
    swiperImage,
    indexNav,
    indexHeader,
    card
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
          label: ['']
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '国兴口腔(国兴路xyz区5栋12楼)',
          desc: '国兴路|齿科',
          label: ['']
        },
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '德韩口腔(德胜路abc区3栋10楼)',
          desc: 'abc路|齿科',
          label: ['']
        }
      ],
      value: 4.6
    };
  },
  onLoad() {},
  methods: {
    // 搜索回调函数
    search() {
      console.log('home search');
    },
    goDatail(){
      uni.navigateTo({
        url:'/pages/test/test'
      })
    }
  }
};
</script>

<style lang="scss"></style>
