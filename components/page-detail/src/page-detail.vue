<template>
  <view >
    <!--    <scroll-view scroll-x="true" style="height: 80rpx;" :scroll-with-animation="true"> -->
    <!-- <view
        v-for="(item, index) in tabBars"
        @click="changeTab(index)"
        :key="index"
        class="scroll-row-item px-3"
        style="height: 80rpx;line-height: 80rpx;"
        :class="tabIndex === index ? 'main-text-color' : ''"
      >
        <text class="font-md">{{ item.name }}</text> -->
    <!-- </view> -->
    <!-- 轮播图 -->
    <!--  <view class="wh-full" style="width: 720rpx; height: 500rpx;"><u-album :urls="swiperData" keyName="img" ></u-album></view> -->

    <view class="p-1">
      <u--image
        :showLoading="true"
        :src="swiperData[0].img"
        width="100%"
        height="300rpx"
        @click="click"
        radius="10"
      ></u--image>
    </view>
    <card>
      <view class="content" v-for="(item, index) in shopData" :key="index">
        <view class="goodsInfo d-flex flex-row m-2 a-center">
          <u--image :showLoading="true" :src="item.src" width="84px" height="84px"></u--image>
          <view class="infoText flex-column mx-2">
            <text class="font-weight font-md">{{ item.address }}</text>
            <u-rate count="5" v-model="value" readonly allowHalf="true"></u-rate>
            <text>{{ item.desc }}</text>
            <view class="flex-row j-center a-center "></view>
            <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1">国家认证</text>
            <text style="border: #F0AD4E solid 1px; color: #E45656;" class="mx-1 px-1">顶级医师</text>
          </view>
        </view>
      </view>
    </card>

    <!--    <swiper-image :swiperData="swiperData"></swiper-image> -->
    <!-- tab栏 -->
    <view class="border-bottom ">
      <u-tabs
        :current="tabIndex"
        :list="tabBars"
        @click="changeTab"
        :activeStyle="{
          color: '#303133',
          fontWeight: 'bold',
          transform: 'scale(1.05)'
        }"
      ></u-tabs>
    </view>

    <!--  </scroll-view> -->
    <swiper :current="tabIndex" style="height: 400rpx;" @change="handleChangeTab">
      <swiper-item v-for="(item, index) in tabBars" :key="index">
        <scroll-view scroll-y="true" style="height: 400rpx;" enable-flex>
          <view v-for="i in 50" :key="i">{{ i }}</view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import card from '@/components/common/card.vue';
import swiperImage from '@/components/index/swiper-image.vue';
export default {
  components: {
    swiperImage
  },
  data() {
    return {
      value: 4.6,
      tabIndex: 0,
      swiperData: [{ img: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png' }],
      tabBars: [
        {
          name: '全部'
        },
        {
          name: '洗牙'
        },
        {
          name: '美白'
        },
        {
          name: '补牙'
        },
        {
          name: '拔牙'
        },
        {
          name: '儿童齿科'
        },
        {
          name: '检查'
        },
        {
          name: '矫正'
        }
      ],
      shopData: [
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '国贸口腔(国贸路def区4栋11楼)',
          desc: '国贸路|齿科',
          label: ['']
        }
      ]
    };
  },
  methods: {
    // 点击上方tab时改变swiper的选项
    changeTab(item) {
      if (item.index && this.tabIndex == item.index) {
        return;
      } else if (item.index) {
        this.tabIndex = item.index;
      } else {
        // 原生处理
        this.tabIndex = item;
      }
    },
    // 处理swiper滑动时的页面切换
    handleChangeTab(item) {
      this.changeTab(item.detail.current);
    }
  }
};
</script>

<style></style>
