<template>
  <view class="register">
    <u-button type="primary" @tap="register">挂号</u-button>
    <u-popup :show="show" mode="bottom" @close="close" @open="open" round="10">
      <view>
        <view class="u-popup-slot">
          <view class="header d-flex j-sb">
            <text class="font-weight m-1 font-md">预约信息</text>
            <button type="default" size="mini" @click="show = !show" class="m-1">取消</button>
          </view>
          <u--form labelPosition="left" :model="model1" :rules="rules" ref="userInfoRef">
            <view class="mx-2">
              <u-form-item label="姓名:" prop="userInfo.name" borderBottom ref="item1">
                <u--input v-model="model1.userInfo.name" border="none" placeholder="请输入姓名"></u--input>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item label="性别:" prop="userInfo.sex" borderBottom @click="showSex = true" ref="item1">
                <u--input
                  v-model="model1.userInfo.sex"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择性别"
                  border="none"
                ></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item label="手机号:" prop="userInfo.phone" borderBottom ref="item1" labelWidth="55">
                <u--input v-model="model1.userInfo.phone" placeholder="请输入手机号码" border="none"></u--input>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item
                label="预约时间:"
                prop="userInfo.appointment"
                labelWidth="80"
                borderBottom
                @click="
                  showCalendar = true;
                  hideKeyboard();
                "
              >
                <u--input
                  v-model="model1.userInfo.appointment"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择预约时间"
                  border="none"
                ></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item label="预约项目:" prop="userInfo.project" labelWidth="80" borderBottom>
                <u--input v-model="model1.userInfo.project" placeholder="请输入预约项目" border="none"></u--input>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item label="症状描述:" prop="userInfo.desc" labelWidth="70" borderBottom>
                <u--textarea placeholder="请输入症状描述" v-model="model1.desc" count></u--textarea>
              </u-form-item>
            </view>
            <view class="mx-2 mt-3"><u-button type="primary" text="提交" @click="submit"></u-button></view>
            <view class="mx-2 mt-3"><u-button type="error" text="重置" @click="reset"></u-button></view>
          </u--form>
          <u-action-sheet
            :show="showSex"
            :actions="actions"
            title="请选择性别"
            @close="showSex = false"
            @select="sexSelect"
          ></u-action-sheet>
          <u-datetime-picker
            :show="showCalendar"
            :value="appointment"
            mode="date"
            closeOnClickOverlay
            @confirm="appointmentConfirm"
            @cancel="appointmentClose"
            @close="appointmentClose"
          ></u-datetime-picker>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      show: false,
      showSex: false,
      showCalendar: false,
      appointment: Number(new Date()),
      model1: {
        userInfo: {
          name: '',
          sex: '',
          phone: '',
          appointment: '',
          project: '',
          desc: ''
        }
      },
      actions: [
        {
          name: '男'
        },
        {
          name: '女'
        }
      ],
      rules: {
        'userInfo.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['blur', 'change']
        },
        'userInfo.sex': {
          type: 'string',
          max: 1,
          required: true,
          message: '请选择男或女',
          trigger: ['blur', 'change']
        },
        'userInfo.phone': {
          type: 'string',
          required: true,
          message: '请填写手机号',
          trigger: ['blur', 'change']
        },
        'userInfo.appointment': {
          type: 'string',
          required: true,
          message: '请选择预约时间',
          trigger: ['blur', 'change']
        },
        'userInfo.project': {
          type: 'string',
          required: true,
          message: '请输入预约项目',
          trigger: ['blur', 'change']
        },
        'userInfo.desc': {
          type: 'string',
          message: '请输入症状描述',
          trigger: ['blur', 'change']
        }
      }
    };
  },

  methods: {
    // 预约
    register() {
      this.isLogin = uni.getStorageSync('isLogin');
      console.log(this.isLogin);
      if (this.isLogin) {
        this.show = true;
        return;
      }
      uni.navigateTo({
        url: '../login/login'
      });
    },
    // 处理底部弹出层
    open() {
      console.log('open');
    },
    close() {
      this.show = false;
      console.log('close');
    },
    // 选择性别
    sexSelect(e) {
      this.model1.userInfo.sex = e.name;
      this.$refs.form1.validateField('userInfo.sex');
    },
    // 确认预约时间
    appointmentConfirm(e) {
      this.showCalendar = false;
      this.model1.userInfo.appointment = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
    },
    // 处理关闭
    appointmentClose() {
      this.showCalendar = false;
    },
    // 提交预约
    submit() {
      // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
      this.$refs.userInfoRef
        .validate()
        .then(res => {
          uni.$u.toast('预约成功');
        })
        .catch(errors => {
          uni.$u.toast('请完成预约信息填写');
        });
    },
    // 重置预约
    reset() {
      const validateList = [
        'userInfo.name',
        'userInfo.sex',
        'userInfo.phone',
        'userInfo.appointment',
        'userInfo.project',
        'userInfo.desc'
      ];
      this.$refs.userInfoRef.resetFields();
      this.$refs.userInfoRef.clearValidate();
      setTimeout(() => {
        this.$refs.userInfoRef.clearValidate(validateList);
        // 或者使用 this.$refs.form1.clearValidate()
      }, 10);
    },
    hideKeyboard() {
      uni.hideKeyboard();
    }
  }
};
</script>

<style lang="scss" scoped>
.u-popup-slot {
  width: 100%;
  height: auto;
}
.m {
  padding: 20upx;
}
</style>
