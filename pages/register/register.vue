<template>
  <view class="register">
    <view class="backg"></view>
    <button @tap="register" class="registerBtn">点击挂号</button>
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
              <u-form-item label="性别:" prop="userInfo.gender" borderBottom @click="showSex = true" ref="item1">
                <u--input
                  v-model="model1.userInfo.gender"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择性别"
                  border="none"
                ></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item
                label="出生日期:"
                prop="userInfo.birthday"
                labelWidth="80"
                borderBottom
                @click="
                  showBirthday = true;
                  hideKeyboard();
                "
              >
                <u--input
                  v-model="model1.userInfo.birthday"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择出生日期"
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
                prop="userInfo.appointmentTime"
                labelWidth="80"
                borderBottom
                @click="
                  showCalendar = true;
                  hideKeyboard();
                "
              >
                <u--input
                  v-model="model1.userInfo.appointmentTime"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择预约时间"
                  border="none"
                ></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item
                label="预约项目:"
                prop="userInfo.project"
                labelWidth="80"
                borderBottom
                @click="showProject = true"
              >
                <u--input
                  v-model="model1.userInfo.project"
                  disabled
                  disabledColor="#ffffff"
                  placeholder="请选择预约项目"
                  border="none"
                ></u--input>
                <u-icon slot="right" name="arrow-right"></u-icon>
              </u-form-item>
            </view>
            <view class="mx-2">
              <u-form-item label="症状描述:" prop="userInfo.desc" labelWidth="70" borderBottom>
                <u--textarea placeholder="请输入症状描述" v-model="model1.userInfo.desc" count></u--textarea>
              </u-form-item>
            </view>
            <view class="mx-2 mt-3"><u-button type="primary" text="提交" @click="submit"></u-button></view>
            <view class="mx-2 mt-3"><u-button type="error" text="重置" @click="reset"></u-button></view>
          </u--form>
          <u-action-sheet
            :show="showSex"
            :actions="genderActions"
            title="请选择性别"
            @close="closeSex"
            @select="genderSelect"
            cancelText="取消"
          ></u-action-sheet>
          <u-action-sheet
            :show="showProject"
            :actions="projectActions"
            title="请选择预约项目"
            @close="showProject = false"
            @select="projectSelect"
          ></u-action-sheet>
          <u-datetime-picker
            :show="showCalendar"
            :value="appointmentTime"
            mode="datetime"
            :minDate="Date.now()"
            :filter="filter"
            closeOnClickOverlay
            @confirm="appointmentConfirm"
            @cancel="appointmentClose"
            @close="appointmentClose"
          ></u-datetime-picker>
          <u-datetime-picker
            :show="showBirthday"
            mode="date"
            :minDate="1650538"
            closeOnClickOverlay
            @confirm="birthdayConfirm"
            @cancel="showBirthday = false"
            @close="showBirthday = false"
          ></u-datetime-picker>
        </view>
      </view>
    </u-popup>
  </view>
</template>

<script>
  import {mapActions} from 'vuex'

export default {
  data() {
    return {
      isLogin: false,
      show: false,
      showSex: false,
      showProject: false,
      showCalendar: false,
      showBirthday: false,
      appointmentTime: '',
      model1: {
        userInfo: {
          name: '',
          gender: '',
          phone: '',
          appointmentTime: '',
          project: '',
          desc: '',
          birthday: '',
          userId: uni.getStorageSync('userInfo')[`id`],
          status:'0'
        }
      },
      genderActions: [
        {
          name: '男'
        },
        {
          name: '女'
        }
      ],
      projectActions: [
        { name: '种植牙' },
        { name: '烤瓷牙' },
        { name: '龋齿' },
        { name: '牙齿美白' },
        { name: '牙齿矫正' }
      ],
      rules: {
        'userInfo.name': {
          type: 'string',
          required: true,
          message: '请填写姓名',
          trigger: ['blur', 'change']
        },
        'userInfo.gender': {
          type: 'string',
          max: 1,
          required: true,
          message: '请选择男或女',
          trigger: ['blur', 'change']
        },
        'userInfo.birthday': {
          type: 'string',
          required: true,
          message: '请选择出生日期',
          trigger: ['blur', 'change']
        },
        'userInfo.phone': {
          type: 'string',
          required: true,
          message: '请填写手机号',
          trigger: ['blur', 'change']
        },
        'userInfo.appointmentTime': {
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
      ...mapActions(['addAppoinmentAction']),
    // 预约
    register() {
      this.show = true;
    },
    // 处理底部弹出层
    open() {
      console.log('open');
    },
    close() {
      // 清空表单
      this.reset();
      this.show = false;
    },
    // 选择性别
    genderSelect(e) {
      this.model1.userInfo.gender = e.name;
      this.$refs.userInfoRef.validateField('userInfo.gender');
    },
    closeSex() {
      this.showSex = false;
    },
    projectSelect(e) {
      this.model1.userInfo.project = e.name;
      this.$refs.userInfoRef.validateField('userInfo.project');
    },
    // 确认预约时间
    appointmentConfirm(e) {
      this.showCalendar = false;
      this.model1.userInfo.appointmentTime = uni.$u.timeFormat(e.value, 'yyyy-mm-dd hh:MM');
    },
    // 处理关闭
    appointmentClose() {
      this.showCalendar = false;
    },
    // 确认出生日期
    birthdayConfirm(e){
      this.showBirthday = false;
      console.log(e.value)
      this.model1.userInfo.birthday = uni.$u.timeFormat(e.value, 'yyyy-mm-dd');
      console.log(uni.$u.timeFormat(e.value, 'yyyy-mm-dd'))
    },
    filter(mode, options) {
      let currentYear = new Date().getFullYear();
      let currentMoth = new Date().getMonth() + 1;
      let currentDay = new Date().getDate();
      let currentHour = new Date().getHours();

      if (mode === 'minute') {
        return options.filter(option => option % 15 === 0);
      }
      return options;
    },
    // 提交预约
    submit() {
      // 如果有错误，会在catch中返回报错信息数组，校验通过则在then中返回true
      this.$refs.userInfoRef
        .validate()
        .then(async res => {
          console.log(this.model1.userInfo);
        this.addAppoinmentAction(this.model1.userInfo)
          
          this.show = false;
          this.reset();
        })
        .catch(errors => {
          console.log(this.model1.userInfo);
          uni.$u.toast('请完成预约信息填写');
        });
    },
    // 重置预约
    reset() {
      const validateList = [
        'userInfo.name',
        'userInfo.gender',
        'userInfo.phone',
        'userInfo.appointmentTime',
        'userInfo.project',
        'userInfo.desc',
        'userInfo.birthday'
      ];

      this.$refs.userInfoRef.resetFields();
      console.log(this.$refs.userInfoRef);
      this.$refs.userInfoRef.clearValidate();
      this.model1.userInfo.appointmentTime = '';
      this.model1.userInfo.desc = '';
      this.model1.userInfo.name = '';
      this.model1.userInfo.phone = '';
      this.model1.userInfo.project = '';
      this.model1.userInfo.gender = '';
      this.model1.userInfo.birthday = '';
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
.register {
  height: 100%;

  background-size: 100% 100%;
}
.registerBtn {
  position: absolute;
  top: 300upx;
  left: 140upx;
  width: 500upx;
  height: 100upx;
  border-radius: 50upx;
  text-align: center;
  line-height: 100upx;
  background-color: #20b2aa;
}
</style>
