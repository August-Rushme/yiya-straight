<template>
  <view class="detal-comment">
     <comments :comments="comments" :isCard="isCard" :canLookMore="canLookMore"  :moreCommentsId="commentId">
		 <template slot="title">
		 	<view class="title d-flex j-sb p-3" style="background-color: #FFFFFF;">
		 		<text class="font-md">用户评价({{commentsTotal}})</text>
		 		<view class="font-md d-flex">
					{{getPraisePercent}}
					<u-icon name="heart-fill" color="red" size="20"></u-icon>
				</view>
		 	</view>
		 </template>
	 </comments>
   
    <!-- 上拉加载 -->
	 <divider />
    <view class="d-flex a-center j-center text-light-muted font-md py-2" style="background-color: #FFFFFF;">暂无更多数据</view>
  </view>
</template>
<script>
import comments from '@/components/comments/comments.vue';
import { mapActions } from 'vuex';
export default {
	components:{
		comments
	},
  data() {
    return {
		pageInfo: {
			pageSize: 2,
			pageNum: 1,
		},
		isCard: true,
		commentId: 0,
		canLookMore: false,
		commentsTotal: 0,
         comments:
           {
  		 options: [

  		],
  	  content: [
  		
  	  ]
  	},
    };
  },
 computed:{
	getPraisePercent() {
		let percent = 0;
		let totalStars = 0;
         this.comments.content.forEach(
		item => {
			totalStars =  parseInt(item.rate)  + totalStars
		}
		)
		percent =  (totalStars*100)/(5*this.comments.content.length)
		let PraisePercent = percent.toFixed(2) + '%'
		return PraisePercent 
	}
 },
 async onLoad(option) {
	this.commentId = option.id;
 	const reply = await this.getCommentsByClinicAction({
        ...this.pageInfo,
 		clinicId: parseInt(option.id)
 	});
 	const content = [];
 	reply.list.forEach(async (item) => {
 		const isPraise = await this.isPraiseAction({
 			userId: uni.getStorageSync('userInfo').id,
 			commentId: item.id
 		});
	const newReply = [];
	item.replyId.forEach(item2 =>{
		newReply.push( item.reply[item2])
	})
	const newObj = {
		...item,
		newReply: newReply,
		thumbColor: isPraise == 'true' ? 'red' : 'dark'
	};
 		content.push(newObj);
 	});
 	
	const labels = await this.getCommentsLabelsAction({
		  clinicId: parseInt(option.id)
		});
 	this.comments.options = labels;
 	this.commentsTotal = reply.total;
     this.comments.content = content;
 },
 async onReachBottom() {
 	this.pageInfo.pageNum ++;
	const reply = await this.getCommentsByClinicAction({
	    ...this.pageInfo,
		clinicId: this.commentId
	});
	reply.list.forEach(async (item) => {
		const isPraise = await this.isPraiseAction({
			userId: uni.getStorageSync('userInfo').id,
			commentId: item.id
		});
	const newReply = [];
	item.replyId.forEach(item2 =>{
		newReply.push( item.reply[item2])
	})
	const newObj = {
		...item,
		newReply: newReply,
		thumbColor: isPraise == 'true' ? 'red' : 'dark'
	};
	this.comments.content.push(newObj)
	});
 },
  methods: {
	  ...mapActions([ 'getCommentsByClinicAction', 'getCommentsLabelsAction', 'isPraiseAction'])
  }
};
</script>

<style scoped>
	.detal-comment{
		background-color: #F5F5F5;
	}
</style>
