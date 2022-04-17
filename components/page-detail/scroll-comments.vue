<template>
  <view class="p-2">
    <scroll-view scroll-x class="scroll-row">
      <view
        class="scroll-row-item rounded bg-light-secondary mr-2 p-2"
        v-for="(item, index) in comments"
        :key="index"
        style="width: 620rpx;height: 380rpx;"
      >
        <view class="d-flex a-center mb-1">
          <image :src="item.userPic" mode="widthFix" style="width: 70rpx;height: 70rpx;" class="rounded-circle"></image>
          <view class="ml-2">
            <text class="font-md line-h">{{ item.userName }}</text>
            <text class="d-block font text-light-muted line-h">{{ item.createTime }}</text>
          </view>
          <view class="iconfont icon-dianzan text-light-muted font pl-1 ml-auto">{{ item.numLikes }}</view>
        </view>

        <text class="d-block font-md mb-2">{{ item.context }}</text>

        <view class="row">
          <view class="span24-8 px-2" v-for="(img, i) in item.imgList" :key="i">
            <u-image :src="img" width="100%" height="115rpx" radius="2"></u-image>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="d-flex a-center j-center py-2 mt-2 text-primary" hover-class="bg-light-secondary" @click="open">
      更多评论
      <view class="iconfont icon-you"></view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['comments', 'goods_id'],
  methods: {
    open() {
      uni.navigateTo({
        url: '../../pages/detail-comment/detail-comment'
      });
    }
  }
};
</script>

<style></style>
