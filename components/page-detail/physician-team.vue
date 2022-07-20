<template>
  <view class="mx-2">
    <view class="d-flex flex-row j-sb mt-2 mb-2 font-weight font-md"><text>医师团队({{physicianList.length}})</text></view>
    <view class="mx-0">
      <u-scroll-list @right="right" @left="left" :indicator="false">
        <view class="scroll-list" style="flex-direction: row;">
          <view
            class="scroll-list__goods-item"
			 @click="goToDoctorPage(item.id)"
            v-for="(item, index) in physicianList"
            :key="index"
            :class="[index === 9 && 'scroll-list__goods-item--no-margin-right']"
          >
            <uni-card  spacing="0rpx" padding="10rpx" margin="10rpx">
              <image class="scroll-list__goods-item__image" :src="item.avatar"></image>
              <view class="a-center">
                <view class="font-md font-weight">{{ item.name }}</view>
                <view class="" style="color: #82848a;">{{ item.profession }}</view>
                <view class="">已工作{{ item.workYears }}年</view>
              </view>
            </uni-card>
          </view>
        </view>
      </u-scroll-list>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    physicianList: Array
  },
  data() {
    return {};
  },
  methods: {
    left() {
      console.log('left');
    },
    right() {
      console.log('right');
    },
	goToDoctorPage(id){
		uni.navigateTo({
			url: `/subpackage-project/doctor-detail/doctor-detail?id=${id}`
		})
	}
  }
};
</script>

<style lang="scss" scoped>
.scroll-list {
  @include flex(column);

  &__goods-item {
    margin-right: 0px;

    &__image {
      width: 180rpx;
      height: 190rpx;
      border-radius: 4rpx;
    }

    &__text {
      color: #f56c6c;
      text-align: center;
      font-size: 48rpx;
      margin-top: 10rpx;
    }
  }
}
</style>
