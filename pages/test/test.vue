
<template>
  <scroll-view scroll-x class="scroll-row" :scroll-into-view="scollInto" scroll-with-animation>
  	<view class="scroll-row-item px-5 py-3" v-for="i in 20" :key="i" :id="'tab'+i" @click="change(i)">{{i}}</view>
  </scroll-view>

</template>

<script>

export default {
	data() {
		return {
	    scollInto: 'tab1',
		};
	},
	methods: {
		change(i){
		this.scollInto = 'tab' + (i > 1 ? i -1 : i);
		console.log(this.scollInto);
		}
	}

};
</script>

<style scope lang="scss">


</style>
