<template>
	<view class="detal-comment">
		<comments :comments="comments" :isCard="isCard" :canLookMore="canLookMore" :moreCommentsId="commentId" @indexChange="indexChange">
			<template slot="title">
				<view class="title d-flex j-sb p-3" style="background-color: #FFFFFF;">
					<text class="font-md">用户评价({{ commentsTotal }})</text>
					<view class="font-md d-flex">
						{{ getPraisePercent }}
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
	components: {
		comments
	},
	data() {
		return {
			pageInfo: {
				pageSize: 2,
				pageNum: 1
			},
			currentId: 0,
			isCard: true,
			commentId: 0,
			canLookMore: false,
			commentsTotal: 0,
			comments: {
				options: [],
				content: []
			}
		};
	},
	computed: {
		getPraisePercent() {
			let percent = 0;
			let totalStars = 0;
			this.comments.content.forEach(item => {
				totalStars = parseInt(item.rate) + totalStars;
			});
			percent = (totalStars * 100) / (5 * this.comments.content.length);
			let PraisePercent = percent.toFixed(2) + '%';
			return PraisePercent;
		}
	},
	async onLoad(option) {
		this.commentId = option.id;
		const reply = await this.getCommentsByTypeAction({
			...this.pageInfo,
			clinicId: parseInt(option.id),
			labelId: 1
		});
		const content = [];
		reply.list.forEach(async item => {
			const isPraise = await this.isPraiseAction({
				userId: uni.getStorageSync('userInfo').id,
				commentId: item.id
			});
			const newReply = [];
			const _this = this;
			item.replyId.forEach(async item2 => {
				const reply2 = await _this.getReplyById({
					pageSize: 99,
					pageNum: 1,
					replyId: item2
				});
				newReply.push(reply2.list[0])
			});
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
		this.pageInfo.pageNum++;

	  const reply = await this.getCommentsByTypeAction({
	     ...this.pageInfo,
	  	clinicId: this.commentId,
	  	labelId: this.currentId
	  });
	  if(reply !== null ){
		  reply.list.forEach(async item => {
		  	const isPraise = await this.isPraiseAction({
		  		userId: uni.getStorageSync('userInfo').id,
		  		commentId: item.id
		  	});
		  	const newReply = [];
		  	const _this = this;
		  	item.replyId.forEach(async item2 => {
		  		const reply2 = await _this.getReplyById({
		  			pageSize: 99,
		  			pageNum: 1,
		  			replyId: item2
		  		});
		  		newReply.push(reply2.list[0])
		  	});
		  	const newObj = {
		  		...item,
		  		newReply: newReply,
		  		thumbColor: isPraise == 'true' ? 'red' : 'dark'
		  	};
		  	this.comments.content.push(newObj);
		  });
	  }

	},
	methods: {
		...mapActions(['getCommentsLabelsAction', 'isPraiseAction', 'getCommentsByTypeAction', 'getReplyById']),
	 indexChange(id) {
	    this.currentId = id;
		this.pageInfo.pageNum = 1;
		this.comments.content = this.comments.content.slice(0,2);
		}
	}
};
</script>

<style scoped>
.detal-comment {
	background-color: #f5f5f5;
}
</style>
