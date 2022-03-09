<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
  /* 每个页面的公共css */
  @import url("/common/uni.css");
  @import url("/common/animate.css");
  /* 自定义图标库 */
  @import url("/common/icon.css");
  /* 刚刚样式库 */
  @import url("/common/common.css");
  /* 基础样式 */
  @import url("/common/zcm-main.css");
  @import url("/common/common.scss");
  
</style>
