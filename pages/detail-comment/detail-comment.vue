<template>
  <view>
    <view class="p-2">
      <view class="d-flex a-center py-2 border-bottom border-light-secondary">
        <text class="text-muted">用户评价({{ total }})</text>
        <text class="main-price-color ml-auto mr-1">{{ good_rate * 100 + '%' }}</text>
        <text class="text-muted">满意</text>
      </view>
      <view class="d-flex flex-wrap pt-3" style="margin-right: -20rpx;">
        <view
          class="px-2 py border rounded mr-2 mb-2 cate-item"
          v-for="(item, index) in cateList"
          :key="index"
          :class="cateIndex === index ? 'active' : ''"
          @click="handleCateChange(index)"
        >
          {{ item.name }}
        </view>
      </view>
    </view>
    <divider />

    <view class="p-2 d-flex a-start border-bottom border-light-secondary" v-for="(item, index) in list" :key="index">
      <image
        :src="item.user.avatar"
        mode="widthFix"
        style="width: 90rpx;height: 90rpx;"
        class="rounded flex-shrink"
      ></image>
      <view class="pl-2 flex-1">
        <view class="d-flex a-center">
          <text class="font-md text-primary font-weight">{{ item.user.nickName }}</text>
          <view class="iconfont icon-service main-price-color ml-auto">
            <text class="pl-1 font">{{ item.rating }}</text>
          </view>
        </view>
        <view class="line-h-md font-md">{{ item.review.data }}</view>
        <view class="row" v-if="item.review.image.length > 0">
          <view class="span24-8 px pb" v-for="(img, imgIndex) in item.review.image" :key="imgIndex">
            <image :src="img" mode="widthFix" style="height: 100rpx;"></image>
          </view>
        </view>
        <view class="d-flex a-center">
          <text class="text-light-muted">{{ item.reviewTime }}</text>
          <view class="d-flex text-light-muted ml-auto a-center mr-2">
            {{ item.goodsNum }}
            <text class="iconfont icon-dianzan text-muted ml"></text>
          </view>
          <view class="d-flex text-light-muted a-center">
            <text class="iconfont icon-pinglun text-muted ml"></text>
          </view>
        </view>
        <!-- 客服回复 -->
        <view
          class="bg-light-secondary rounded p-2 d-flex flex-wrap a-center mt-1"
          v-for="(item2, index2) in item.extra"
          :key="index2"
        >
          <template v-if="!item2.isuser">
            <text class="main-price-color">官方回复：</text>
            {{ item2.data }}
            <view class="iconfont icon-dianzan text-light-muted line-h-md font ml-2">
              <text class="text-muted pl-1">赞客服 {{ item2.goodNum }}</text>
            </view>
          </template>
        </view>
      </view>
    </view>
    <divider />
    <!-- 上拉加载 -->
    <view class="d-flex a-center j-center text-light-muted font-md py-3">{{ loadtext }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      cateIndex: 0,
      cateList: [
        { name: '全部', value: '' },
        { name: '服务热情', value: '/good' },
        { name: '大夫赞', value: '/doctor' },
        { name: '环境很好', value: '/goodEnvironment' },
        { name: '体验很棒', value: '/goodExperience' },
        { name: '性比价高', value: '/goodPrice' },
        { name: '价格实惠', value: '/goodBenefit' }
      ],
      total: 600,
      good_rate: 0.96,
      list: [
        {
          user: {
            avatar: 'https://preview.qiantucdn.com/58pic/43/75/52/51z58PICkXpNfkUUEi4KA_PIC2018.png!qt324_nowater_jpg',
            nickName: '我是xxx'
          },
          rating: '好评',
          review: {
            data: '无论你在何方,无论你在何处,只要你身穿那件白色的工作服,你一直保持..',
            image: [
              'https://preview.qiantucdn.com/paixin/94/17/20/56M58PICQZI7rzYbpH9V2_PIC2018.jpg!qt324_nowater_jpg',
              'https://preview.qiantucdn.com/paixin/62/37/04/85w58PICYw3FsSCnmdXzz_PIC2018.jpg!qt324_nowater_jpg',
              'https://preview.qiantucdn.com/paixin/16/48/79/32k58PICFiX58PIC2irzYQBjQ_PIC2018.jpg!qt324_nowater_jpg'
            ]
          },
          reviewTime: '2022-4-17',
          goodsNum: 128,
          extra: [
            {
              isuser: false,
              data: '感谢您对小店的支持,有什么问题请及时联系我们',
              goodNum: 66
            }
          ]
        },
        {
          user: {
            avatar: 'https://preview.qiantucdn.com/58pic/43/75/52/51z58PICkXpNfkUUEi4KA_PIC2018.png!qt324_nowater_jpg',
            nickName: '我是xxx'
          },
          rating: '好评',
          review: {
            data: '无论你在何方,无论你在何处,只要你身穿那件白色的工作服,你一直保持..',
            image: [
              'https://preview.qiantucdn.com/paixin/94/17/20/56M58PICQZI7rzYbpH9V2_PIC2018.jpg!qt324_nowater_jpg',
              'https://preview.qiantucdn.com/paixin/62/37/04/85w58PICYw3FsSCnmdXzz_PIC2018.jpg!qt324_nowater_jpg',
              'https://preview.qiantucdn.com/paixin/16/48/79/32k58PICFiX58PIC2irzYQBjQ_PIC2018.jpg!qt324_nowater_jpg'
            ]
          },
          reviewTime: '2022-4-17',
          goodsNum: 128,
          extra: [
            {
              isuser: false,
              data: '感谢您对小店的支持,有什么问题请及时联系我们',
              goodNum: 66
            }
          ]
        }
      ],
      page: 1,
      // 1.上拉加载更多 2.加载中... 3.没有更多了
      loadtext: '上拉加载更多'
    };
  },

  methods: {
    handleCateChange(index) {
      this.cateIndex = index;
      uni.showLoading({
        title: '加载中...'
      });
      uni.hideLoading();
    }
  }
};
</script>

<style>
.cate-item {
  background: #ffebec;
  color: #7b6d6c;
  border-color: #f4e0e1;
}
.cate-item.active {
  background: #ff6b01 !important;
  color: #ffffff !important;
  border-color: #de7232 !important;
}
</style>
