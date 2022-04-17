<template>
  <view>
    <view>
      <view class="p-1">
        <u--image
          :showLoading="true"
          :src="swiperData[0].img"
          width="100%"
          height="300rpx"
          @click="click"
          radius="10"
        ></u--image>
      </view>
      <!-- 商家介绍 -->
      <card>
        <view class="content" v-for="(item, index) in storeData" :key="index">
          <view class="goodsInfo d-flex flex-row m-2 a-center">
            <u--image :showLoading="true" :src="item.src" width="84px" height="84px"></u--image>
            <view class="infoText flex-column mx-2">
              <text class="font-weight font-md">{{ item.address }}</text>
              <u-rate count="5" v-model="value" readonly allowHalf="true"></u-rate>
              <text>{{ item.desc }}</text>
              <view class="flex-row j-center a-center "></view>
              <text style="border: #F0AD4E solid 1px; color: #E45656;" class="px-1">国家认证</text>
              <text style="border: #F0AD4E solid 1px; color: #E45656;" class="mx-1 px-1">顶级医师</text>
            </view>
          </view>
        </view>
      </card>
      <divider style="margin-top: 80rpx;"></divider>
      <!-- 产品 -->
      <product :tabBars="tabBars" :goodsData="goodsData"></product>
      <divider></divider>
      <!-- 医师团队 -->
      <physicianTeam :physicianList="list"></physicianTeam>
      <divider></divider>
      <!-- 用户评论 -->
      <view class="font-md font-weight mx-2 my-2">用户评论</view>
      <scroll-comments :goods_id="detail.id" :comments="comments"></scroll-comments>
    </view>
    <divider></divider>
  </view>
</template>

<script>
import card from '@/components/common/card.vue';
import swiperImage from '@/components/index/swiper-image.vue';
import scrollComments from '@/components/page-detail/scroll-comments.vue';
import physicianTeam from '@/components/page-detail/physician-team.vue';
import product from '@/components/page-detail/product.vue';

export default {
  components: {
    swiperImage,
    scrollComments,
    physicianTeam,
    product
  },
  data() {
    return {
      value: 4.6,

      swiperData: [{ img: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png' }],
      tabBars: [
        {
          name: '全部'
        },
        {
          name: '洗牙'
        },
        {
          name: '美白'
        },
        {
          name: '补牙'
        },
        {
          name: '拔牙'
        },
        {
          name: '儿童齿科'
        },
        {
          name: '检查'
        },
        {
          name: '矫正'
        }
      ],
      storeData: [
        {
          src: 'https://s1.ax1x.com/2022/03/09/bWK0l8.png',
          address: '国贸口腔(国贸路def区4栋11楼)',
          desc: '国贸路|齿科',
          label: ['']
        }
      ],
      goodsData: [
        {
          name: '全部',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            },
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            },
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            },
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '洗牙',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '美白',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            },
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '补牙',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '拔牙',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '儿童齿科',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '检查',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            },
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        },
        {
          name: '矫正',
          list: [
            {
              src:
                'https://preview.qiantucdn.com/paixin/41/93/87/058PICI58PICTWVCuQqJjZt8t_PIC2018.jpg!qt324_nowater_jpg',
              title: '牙齿美白套餐，单人超声波洗牙套餐',
              price: '79',
              oprice: '188',
              label: ['限工作日 | 成人']
            }
          ]
        }
      ],
      list: [
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/17/34/89/06A58PICjaRETFUvfENGa_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/17/34/89/06A58PICjaRETFUvfENGa_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
        },
        {
          name: 'xxx',
          position: '副主任医师',
          workTime: '从业27年',
          thumb: 'https://preview.qiantucdn.com/ing/85/73/14/20f58PICR9bYE26NHriNb_PIC2018.jpg!qt324_nowater_jpg'
        }
      ],
      comments: [
        {
          userPic: 'https://preview.qiantucdn.com/58pic/43/75/85/68w58PICrMPXHvzITqNsD_PIC2018.png!qt324_nowater_jpg',
          userName: 'xxx',
          createTime: '2022-4-17',
          numLikes: 126,
          context: '评论评论评论评论评论评论',
          imgList: [
            'https://preview.qiantucdn.com/paixin/26/40/15/93I58PICx2UaRGIQkJ49c_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/paixin/80/31/46/97M58PICNfFiZwFmRVr58PICp_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/dazhi/64/32/75/9158PIC58PICjnjcJgwAzNyi9_PIC2018.jpg!qt324_nowater_jpg'
          ]
        },
        {
          userPic: 'https://preview.qiantucdn.com/58pic/43/75/85/68w58PICrMPXHvzITqNsD_PIC2018.png!qt324_nowater_jpg',
          userName: 'xxx',
          createTime: '2022-4-17',
          numLikes: 126,
          context: '评论评论评论评论评论评论',
          imgList: [
            'https://preview.qiantucdn.com/paixin/26/40/15/93I58PICx2UaRGIQkJ49c_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/paixin/80/31/46/97M58PICNfFiZwFmRVr58PICp_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/dazhi/64/32/75/9158PIC58PICjnjcJgwAzNyi9_PIC2018.jpg!qt324_nowater_jpg'
          ]
        },
        {
          userPic: 'https://preview.qiantucdn.com/58pic/43/75/85/68w58PICrMPXHvzITqNsD_PIC2018.png!qt324_nowater_jpg',
          userName: 'xxx',
          createTime: '2022-4-17',
          numLikes: 126,
          context: '评论评论评论评论评论评论',
          imgList: [
            'https://preview.qiantucdn.com/paixin/26/40/15/93I58PICx2UaRGIQkJ49c_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/paixin/80/31/46/97M58PICNfFiZwFmRVr58PICp_PIC2018.jpg!qt324_nowater_jpg',
            'https://preview.qiantucdn.com/dazhi/64/32/75/9158PIC58PICjnjcJgwAzNyi9_PIC2018.jpg!qt324_nowater_jpg'
          ]
        }
      ]
    };
  },
  methods: {
    left() {
      console.log('left');
    },
    right() {
      console.log('right');
    }
  }
};
</script>

<style scoped lang="scss">
.label {
  font-size: 20rpx;
  color: #b3b3b3;
}
.shop-title {
  width: 360rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
