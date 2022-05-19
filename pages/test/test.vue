
<template>
  <view class="">
  	  <view class="bg-danger" @click="search">
  	  	search
  	  </view>
	  <view @click="showMap">
	  	showMap
	  </view>
  </view>

</template>

<script>

export default {
	data() {
		return {
	    scollInto: 'tab1',
		qqmapsdk: '',
		};
	},
	onLoad(){
		const QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
		const qqmapsdk = new QQMapWX({
            key: 'GG6BZ-LTCWP-BG4DD-VRG5X-YA4LF-FZB23'
        });
		this.qqmapsdk = qqmapsdk;

	},
	methods: {
		search(){
			this.qqmapsdk.search({
			       keyword: '口腔',
			       success: function (res) {
			           console.log(res);
			       },
			       fail: function (res) {
			           console.log(res);
			       },
			   complete: function (res) {
			       console.log(res);
			   }
			})
		},


	}

};
</script>

<style scope lang="scss">


</style>
