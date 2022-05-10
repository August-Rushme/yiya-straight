<template>
  <view>
    <u-empty
      v-if="appointments.length == 0"
      mode="order"
      icon="http://cdn.uviewui.com/uview/empty/order.png"
      text="您还没有相关预约"
    ></u-empty>
    <view  v-if="appointments.length > 0">
      <block v-for="appointment in appointments" :key="appointment.id">
        <uni-section title="我的预约" type="line">
          <uni-card :cover="cover" @click="onClick">
            <view class="title d-flex flex-row j-sb px-1 a-center border-bottom pb-1">
              <view>{{ appointment.appointmentTime }}</view>
              <u-tag v-if="appointment.status == 0" text="预约中" plain shape="circle"></u-tag>
              <u-tag v-if="appointment.status == 1" text="预约成功" type="success" plain shape="circle"></u-tag>
            </view>
            <view class="contentAppointment">
              <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
                <view class="label">姓名:</view>
                <text>{{ appointment.name }}</text>
              </view>
              <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
                <view class="label">性别:</view>
                <text>{{ appointment.gender }}</text>
              </view>
              <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
                <view class="label">出生日期:</view>
                <text>{{ appointment.birthday }}</text>
              </view>
              <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
                <view class="label">手机号:</view>
                <text>{{ appointment.phone }}</text>
              </view>
              <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
                <view class="label">预约项目:</view>
                <text>{{ appointment.project }}</text>
              </view>
            </view>
          </uni-card>
        </uni-section>
      </block>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      appointments: [],
      pageInfo: {
        pageNum: 1,
        pageSize: 3
      }
    };
  },
  async onLoad() {
    if (!uni.getStorageSync('token')) {
      return this.$message.toast('请先登录！');
    }

    const res = await this.$http.post('/appointment/getAppointment', {
      userId: uni.getStorageSync('userInfo').id,
      ...this.pageInfo
    });
    if (!res.code == 200) {
      return this.$message.toast('获取数据失败！');
    }
    // res.data.list.forEach(item => {
    //  new Date(appointment.appointmentTime).getDay()
    // });
    this.appointments = res.data.list;
    console.log(res);
  },
  async onReachBottom() {
    // 下拉刷新
    this.pageInfo.pageNum++;
    uni.showLoading({
      title: '加载中'
    });
    const res = await this.$http.post('/appointment/getAppointment', {
      userId: uni.getStorageSync('userInfo').id,
      ...this.pageInfo
    });
    if (res.data.list.length > 0) {
      uni.hideLoading();
      this.appointments.push(...res.data.list);
    } else {
      this.$message.toast('没有更多数据了');
    }
  },
  methods: {}
};
</script>

<style></style>
