
<template>

<view class="container">
	<view :class="['loginBtn',active ? 'active' : '']" @click="login">
		{{loginText}}
		<template v-if="active">
		<view class="loadingIcon" :class="active ? 'rotation' : '' ">  
		</view>
		</template>
         <view class="success">
         	
         </view>
	</view>
</view>
</template>

<script>

export default {
	data() {
		return {
			 active: false,
             loginText: '登录',
		};
	},
	methods: {
       login(){
		   this.active = !this.active;
		 if(this.active === true){
			    this.loginText = ''
		 }else{
			 this.loginText = '登录'
		 }
	   }
	}

};
</script>

<style scope lang="scss">
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      cursor: pointer;
      border-radius: 30px;
      height: 60px;
      line-height: 60px;
      text-align: center;
	  transition: all .5s cubic-bezier(.2,1,0,1) ;
      background: linear-gradient(to right,#20d8b4,#22b3ac);
      color: white;
      .loadingIcon {
         width: 40px;
         height: 40px;
         border-radius: 50%;
         border: 5px solid #ededef;
         border-bottom-color: white;
      }
	  .success {
		  width: 30px;
		  height: 40px;
		  transform: rotate(45deg);
		  
	  }
  }
}
.active {
	width: 60px !important;
	height: 60px !important;
}
.rotation {
    animation: rotation .5s ease-in infinite;
}

@keyframes rotation {
    to {
        transform:  rotate(360deg);
    }
}


</style>
