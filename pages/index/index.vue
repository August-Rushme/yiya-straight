<template>
  <view class="box-sizing-b w-full">
    <!-- 顶部搜索 -->
    <index-header :search-tip="searchTip"></index-header>
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
      <view class="content">
        <view class="goodsInfo d-flex flex-row m-2 a-center">
          <u--image
            :showLoading="true"
            src="https://s1.ax1x.com/2022/03/09/bWK0l8.png"
            width="80px"
            height="80px"
          ></u--image>
          <view class="infoText flex-column mx-2">
            <text class="font-weight font-md">德韩口腔(德胜路abc区3栋10楼)</text>
            <u-rate count="5" v-model="value"></u-rate>
            <text>abc路|齿科</text>
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
      value: 4
    };
  },
  onLoad() {},
  methods: {}
};
</script>

<style lang="scss"></style>
