<template>
  <view>
    <uni-status-bar />
    <view class="d-flex a-center j-sb py-2 px-3 text-light-muted">
      <view class="iconfont icon-shanchu1" @click="goBack"></view>
      <view class="font-md" @click="forget">忘记密码</view>
    </view>

    <view class="p-5">
      <view class="font-big mb-5">密码登录</view>

      <input
        type="text"
        class="border-bottom mb-4  px-0"
        placeholder="请输入手机号/邮箱/账号"
        v-model="username"
        placeholder-class="text-light-muted"
        @focus="focus('username')"
        @blur="blur('username')"
        :class="focusClass.username ? 'input-border-color' : ''"
      />

      <input
        type="password"
        class="border-bottom mb-4  px-0"
        placeholder="请输入密码"
        v-model="password"
        placeholder-class="text-light-muted"
        @focus="focus('password')"
        @blur="blur('password')"
        :class="focusClass.password ? 'input-border-color' : ''"
      />
      <view
        class="py-2 w-100 d-flex a-center j-center main-bg-color text-white rounded font-md mb-4"
        hover-class="main-bg-hover-color"
        @click="submit"
      >
        登录
      </view>
      <view class="d-flex j-sb">
        <label class="checkbox d-flex a-center" @click="check = !check">
          <checkbox :checked="check" />
          <text class="text-light-muted font">已阅读并同意XXXXX协议</text>
        </label>
        <view class="text-light-muted">
          没有账号?
          <text style="color: #2b59c1" @click="goToRegester">立即注册</text>
        </view>
      </view>
      <view class="d-flex j-center mt-3">
        <view class="d-flex a-center" @click="loginByWx">
          <u-icon name="weixin-fill" color="#2ddc72" size="28"></u-icon>
          微信登录
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import uniStatusBar from '@/components/uni-ui/uni-status-bar/uni-status-bar.vue';
export default {
  components: {
    uniStatusBar
  },
  data() {
    return {
      username: '',
      password: '',
      check: true,
      // 验证规则
      rules: {
        username: [
          {
            rule: /^[a-zA-Z]\w{5,17}$/,
            msg: '账号必须字母开头，长度在6~18之间，只能包含字母、数字和下划线'
          }
        ],
        password: [
          {
            rule: /^.{5,20}$/,
            msg: '密码长度必须为5-20个字符'
          }
        ]
      },
      focusClass: {
        username: false,
        password: false
      }
    };
  },
  methods: {
    goBack() {
      uni.navigateBack({
        delta: 1
      });
    },
    // 表单验证
    validate(key) {
      var check = true;
      this.rules[key].forEach(v => {
        // 验证失败
        if (!v.rule.test(this[key])) {
          uni.showToast({ title: v.msg, icon: 'none' });
          check = false;
          return false;
        }
      });
      return check;
    },
    // 提交表单
    async submit() {
      let _this = this;
      if (!this.check) {
        return uni.showToast({
          title: '请先同意XXXXX协议',
          icon: 'none'
        });
      }
      // 验证用户名
      if (!this.validate('username')) return;
      // 验证密码
      if (!this.validate('password')) return;
      
      const res = await _this.$http.post('/user/loginByAccount', {
        userName: _this.username,
        password: _this.password
      });
      if(!res.code==200){
       return _this.$message.message("账号或者密码错误")
      }
      _this.$message.message("登录成功")
      console.log(res)
      this.goBack();
    },
    //wx登录
    loginByWx() {
      let _this = this;
      uni.getUserProfile({
        desc: '用户登录',
        success: res => {
          uni.login({
            provider: 'weixin',
            async success(res) {
              console.log(res);
              const resp = await _this.$http.post('/user/loginByWx', { code: res.code });
              console.log(resp);
            }
          });
        }
      });
    },
    //注册
    goToRegester() {
      uni.navigateTo({
        url: '/pages/register-account/register-account'
      });
    },
    forget() {
      console.log(123);
    }
  }
};
</script>

<style></style>
