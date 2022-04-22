<template>
  <view class="detal-comment">
     <comments :comments="comments" :isCard="isCard" :canLookMore="canLookMore" :hasDivider="hasDivider" :pageBgColor="pageBgColor">
		 <template slot="title">
		 	<view class="title d-flex j-sb p-3" style="background-color: #FFFFFF;">
		 		<text class="font-md">用户评价({{comments.content.length}})</text>
		 		<view class="font-md d-flex">
					{{getPraisePercent}}
					<u-icon name="heart-fill" color="red" size="20"></u-icon>
				</view>
		 	</view>
		 </template>
	 </comments>
    <divider />
    <!-- 上拉加载 -->
    <view class="d-flex a-center j-center text-light-muted font-md py-2">上拉加载更多</view>
  </view>
</template>
<script>
import comments from '@/components/comments/comments.vue'
export default {
	components:{
		comments
	},
  data() {
    return {
		isCard: true,
		canLookMore: false,
		hasDivider: true,
		pageBgColor: '#f5f5f5f',
         comments:
           {
  		options: [
  			{
  				name: '热情服务',
  				mount: 179
  			},
  			{
  				name: '洗牙',
  				mount: 144
  			},
  			{
  				name: '环境很好',
  				mount: 126
  			},
  			{
  				name: '性价比高',
  				mount: 87
  			},
  			{
  				name: '价格实惠',
  				mount: 119
  			},
  			{
  				name: '高大上',
  				mount: 60
  			},
  		],
  	  content: [
  		  {
  			  	avatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
                username: '我是顾客上帝哦',
  			    starsValue: 4.8,
  				commentTime: '2022/04/21',
  			    commentContent: '就感觉这此体验非常的好大大的好评哦然后就是就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦',
  				photos: [
  					'https://cdn.uviewui.com/uview/album/2.jpg',
  					'https://cdn.uviewui.com/uview/album/3.jpg'
  				],
				optionLables: ['热情服务','环境很好'],
  				replies: [
  					{
  					isBusiness: false,
					replyname: '小红',
					replyTime: '2022/04/21 08:31:24',
					replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  					replyContent: '感谢您的认可,祝您生活愉快哦亲感谢您的认可,祝您生活愉快哦亲'
  				   },
  				   {
  				   	isBusiness: false,
					replyname: '小红',
					replyTime: '2022/04/21 08:31:24',
					replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  				   	replyContent: '这家店是真不错哦'
  				   },
  				],
  				likes: 66,
  				thumbColor: 'dark',
  		  },
  		  {
  		  		avatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  		        username: '我是顾客上帝哦',
  		  		 starsValue: 5,
  		  		commentTime: '2022/04/21',
  		  		commentContent: '就感觉这此体验非常的好大大的好评哦然后就是就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦就感觉这此体验非常的好大大的好评哦',
  		  		photos: [
  		  		'https://cdn.uviewui.com/uview/album/2.jpg',
  		  		'https://cdn.uviewui.com/uview/album/3.jpg',
  				'https://cdn.uviewui.com/uview/album/3.jpg'
  		  		],
  		        optionLables: ['热情服务','环境很好'],
  		  		replies: [
  		  		{
  		  		isBusiness: true,
				replyname: '小红',
				replyTime: '2022/04/21 08:31:24',
				replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  		  		replyContent: '感谢您的认可,祝您生活愉快哦亲'
  		  		 },
  		  		  {
  		  			isBusiness: false,
					replyname: '小红',
					replyTime: '2022/04/21 08:31:24',
					replyAvatar: 'https://img0.baidu.com/it/u=4179632920,2441308760&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
  		  			replyContent: '这家店是真不错哦'
  		  			  },
  		  				],
  		  		likes: 66,
  				thumbColor: 'dark',
  		  },
  		
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
			totalStars = item.starsValue + totalStars
		}
		)
		percent =  (totalStars*100)/(5*this.comments.content.length)
		let PraisePercent = percent.toFixed(2) + '%'
		return PraisePercent 
	}
 },
  methods: {
  }
};
</script>

<style>
</style>
