<template>
  <view class="swiper-area pos-r" v-if="swiperData && swiperData.length > 0">
    <!-- 轮播组件 -->
    <swiper
      class="swiper"
      autoplay
      indicator-dots
      indicator-color="#f7f7f7"
      indicator-active-color="#ff6a6c"
      circular="true"
    >
      <swiper-item class="swiper-item  box-sizing-b" v-for="(item, index) in swiperData" :key="index">
        <view class="wh-full">
          <image class="wh-full" mode="aspectFill" :lazy-load="true" :src="item.img" />
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
export default {
  props: {
    swiperData: Array
  },
  methods: {
    topage(item) {
      console.log('点击了轮播图');
      uni.navigateTo({
        url:'/pages/test/test'
      })
    }
  }
};
</script>

<style lang="scss"></style>
