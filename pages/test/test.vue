
<template>
	
	<view>
		<button @tap="startRecord">开始录音</button>
		<button @tap="endRecord">停止录音</button>
		<button @tap="playVoice">播放录音</button>
		<block v-for="(item,index) in voiceArray" :key="index" >
			<view class="audioBox bg-danger py-3 text-center" @click="playAudio(index)">
				录音{{index}}
			</view>
		</block>
	</view>
	


</template>

<script>
const recorderManager = uni.getRecorderManager();
const innerAudioContext = uni.createInnerAudioContext();

innerAudioContext.autoplay = true
export default {
	data() {
		return {
			text: 'uni-app',
			voiceArray: [],
			voicePath: ''
		}
	},
	onLoad() {
		let self = this;
		recorderManager.onStop(function (res) {
			console.log('recorder stop' + JSON.stringify(res));
			self.voiceArray.push(res.tempFilePath);
			self.voicePath = res.tempFilePath;
		});
	},
	methods: {
		startRecord() {
			console.log('开始录音');
			recorderManager.start();
		},
		endRecord() {
			console.log('录音结束');
			recorderManager.stop();
		},
		playVoice() {
			console.log('播放录音');

			if (this.voicePath) {
				console.log(111);
				innerAudioContext.src = this.voicePath;
				innerAudioContext.play();
			}
		},
		playAudio(index){
			innerAudioContext.src = this.voiceArray[index];
			innerAudioContext.play();
		}
	}
}
</script>

<style scope lang="scss">

</style>
