<template>
  <view>
    <uni-section title="卡片封面图+操作栏" type="line">
      <uni-card :cover="cover" @click="onClick">
        <view class="title d-flex flex-row j-sb px-1 a-center border-bottom pb-1">
          <view>2022-04-20 周三 09:00</view>
          <u-tag text="预约中" plain shape="circle"></u-tag>
        </view>
        <view class="contentAppointment">
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">姓名:</view>
            <text>张三</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">性别:</view>
            <text>男</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">出生日期:</view>
            <text>2022-01-01</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">手机号:</view>
            <text>13888888888</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">预约项目:</view>
            <text>牙齿美白</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
    <uni-section title="卡片封面图+操作栏" type="line">
      <uni-card :cover="cover" @click="onClick">
        <view class="title d-flex flex-row j-sb px-1 a-center border-bottom pb-1">
          <view>2022-04-22 周五 09:00</view>
          <u-tag text="预约成功" type="success" plain shape="circle"></u-tag>
        </view>
        <view class="contentAppointment">
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">姓名:</view>
            <text>张三</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">性别:</view>
            <text>男</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">出生日期:</view>
            <text>2022-01-01</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">手机号:</view>
            <text>13888888888</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">预约项目:</view>
            <text>牙齿美白</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
    <uni-section title="卡片封面图+操作栏" type="line">
      <uni-card :cover="cover" @click="onClick">
        <view class="title d-flex flex-row j-sb px-1 a-center border-bottom pb-1">
          <view>2022-04-20 周三 09:00</view>
          <u-tag text="预约中" plain shape="circle"></u-tag>
        </view>
        <view class="contentAppointment">
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">姓名:</view>
            <text>张三</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">性别:</view>
            <text>男</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">出生日期:</view>
            <text>2022-01-01</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">手机号:</view>
            <text>13888888888</text>
          </view>
          <view class="name d-flex j-sb a-center border-bottom pb-1 mt-2 pr-2">
            <view class="label">预约项目:</view>
            <text>牙齿美白</text>
          </view>
        </view>
      </uni-card>
    </uni-section>
  </view>
</template>

<script>
export default {
  data() {
    return {
      appointmentForm: {
        name: '张三'
      }
    };
  },
  methods: {}
};
</script>

<style></style>
