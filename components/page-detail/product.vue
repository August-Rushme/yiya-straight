<template>
  <view>
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
    <swiper :current="tabIndex" style="height: 400rpx; margin-bottom: 20rpx;" @change="handleChangeTab">
      <swiper-item v-for="(itemTab, index) in tabBars" :key="index">
        <scroll-view scroll-y="true" style="height: 400rpx;" enable-flex>
          <!-- 产品 -->
          <card>
            <view class="content" v-for="(itemData, indexContent) in goodsData" :key="indexContent">
              <block v-for="(item, listIndex) in itemData.list" :key="listIndex">
                <view class="goodsInfo d-flex flex-row m-2 " v-if="itemData.name == itemTab.name">
                  <u--image :showLoading="true" :src="item.src" width="64px" height="64px" radius="5"></u--image>
                  <view class="infoText flex-column mx-2">
                    <view class="font-weight font-md shop-title">{{ item.title }}</view>
                    <view class="label">{{ item.label }}</view>
                    <view class="d-flex py-1">
                      <price :text="item.price"></price>
                      <view class="ml-1 a-self-end line-h">
                        <text class="font-sm text-light-muted line-through">￥{{ item.oprice }}</text>
                      </view>
                    </view>
                  </view>
                </view>
              </block>
            </view>
          </card>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
import price from '../common/price.vue';
export default {
  components: {
    price
  },
  props: {
    tabBars: Array,
    goodsData: Array
  },
  data() {
    return {
      tabIndex: 0
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
