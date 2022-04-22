<template>
  <view>
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
</template>

<script>
export default {
  data() {
    return {
      appointments: [
        {
          id: 1,
          name: '张三',
          gender: '男',
          birthday: '2008-09-15',
          appointmentTime: '2022-04-22 周五 09:00',
          phone: '13888888888',
          project: '牙齿美白',
          status: '1'
        },
        {
          id: 2,
          name: '张三',
          gender: '男',
          birthday: '2008-09-15',
          appointmentTime: '2022-05-22 周五 09:00',
          phone: '13888888888',
          project: '烤瓷牙',
          status: '0'
        },
        {
          id: 3,
          name: '张三',
          gender: '男',
          birthday: '2008-09-15',
          appointmentTime: '2022-04-29 周五 09:00',
          phone: '13888888888',
          project: '种植牙齿',
          status: '0'
        }
      ]
    };
  },
  async onLoad() {
   const res = await this.$http.post('/appointment/getAppointment',{
      userId: uni.getStorageSync('userInfo')[`id`],
      pageSize: 8,
      pageNum:1
    })
    console.log(res)
  },
  methods: {}
};
</script>

<style></style>
