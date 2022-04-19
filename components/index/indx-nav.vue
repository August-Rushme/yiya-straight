<template>

    <view class="row j-center m-2">
      <view
        class="span-5 d-flex flex-column j-center a-center py-1"
        v-for="(item, index) in navData"
        :key="index"
        @tap="event(item)"
      >
        <image :src="item.src" style="width: 120upx;height: 120upx;" lazy-load="true"></image>
        <text>{{ item.text }}</text>
      </view>
    </view>
  

</template>

<script>
export default {
  props: {
    navData: Array
  },
  methods: {
    event(item) {
      console.log(item);
      uni.navigateTo({
        url:'../../pages/index-nav-detail/teeth-whitening/src/teeth-whitening'
      })
    }
  }
};
</script>

<style></style>
