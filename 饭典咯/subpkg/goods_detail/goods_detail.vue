<template>
	<view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
		  <swiper-item v-for="(item, i) in goods_info.pics" :key="i">
		    <!-- 把当前点击的图片的索引，传递到 preview() 处理函数中 -->
		      <image :src="item.pics_big" @click="preview(i)"></image>
		  </swiper-item>
		</swiper>
		
		<!-- 商品信息区域 -->
		<view class="goods-info-box">
		  <!-- 商品价格 -->
		  <view class="price">￥{{goods_info.goods_price}}</view>
		  <!-- 信息主体区域 -->
		  <view class="goods-info-body">
		    <!-- 商品名称 -->
		    <view class="goods-name">{{goods_info.goods_name}}</view>
		    <!-- 收藏 -->
		    <view class="favi">
		      <uni-icons type="star" size="18" color="gray"></uni-icons>
		      <text>收藏</text>
		    </view>
			<!-- 点评 -->
			<view class="favi">
			  <uni-icons type="chatbubble" size="18" color="gray"></uni-icons>
			  <text>点评</text>
			</view>
		  </view>
		</view>
		  
		  
		<!-- 评论区 -->
		<view class="remark-body">
		    <!-- 使用 v-for 遍历 remarks 数组 -->
		    <view class="remark-item" v-for="(remark, index) in goods_info.remarks" :key="index">
		      <image :src="remark.avt" class="avatar"></image>
		      <view class="remark-content">{{ remark.content }}</view>
		    </view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
		  return {
		    // 商品详情对象
		    goods_info: 
			{
				"goods_id": 8888,
				"cat_id": 1085,
				"goods_name": "特别好吃的菜菜菜",
				"goods_price": 500,
				"goods_number": 100,
				"goods_weight": 100,
				"goods_introduce": "富文本内容",
				"goods_state": 2,
				"is_del": "0",
				"add_time": 1516361489,
				"upd_time": 1516361489,
				"delete_time": null,
				"hot_mumber": 0,
				"is_promote": false,
				"cat_one_id": 995,
				"cat_two_id": 1075,
				"cat_three_id": 1085,
				"goods_cat": "995,1075,1085",
				"pics": [
					{
						"pics_id": 38711,
						"goods_id": 8888,
						"pics_big": "../../static/detail/12.jpg",
						"pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
						"pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
						"pics_big_url": "../../static/detail/12.jpg",
						"pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
						"pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
					}
				],
				"attrs": [
					{
						"goods_id": 8888,
						"attr_id": 9210,
						"attr_value": "户外直刀",
						"add_price": 0,
						"attr_name": "主体参数-类别",
						"attr_sel": "only",
						"attr_write": "manual",
						"attr_vals": "放大镜"
					}
				],
				"remarks": [
					{
						"avt":"../../static/avatar.jpg",
						"content":"好吃",
					},
					{
						"avt":"../../static/avatar.jpg",
						"content":"还行",
					},
					{
						"avt":"../../static/avatar.jpg",
						"content":"不错",
					},
					{
						"avt":"../../static/avatar.jpg",
						"content":"一般般",
					},
					{
						"avt":"../../static/avatar.jpg",
						"content":"不太辣，很好吃",
					},
					{
						"avt":"../../static/avatar.jpg",
						"content":"不太合胃口",
					},
				]
			},
		  };
		},
		onLoad(options) {
		  // 获取商品 Id
		  const goods_id = options.goods_id
		  // 调用请求商品详情数据的方法
		  //this.getGoodsDetail(goods_id)
		},
		methods:{
			// 实现轮播图的预览效果
			preview(i) {
			  // 调用 uni.previewImage() 方法预览图片
			  uni.previewImage({
			    // 预览时，默认显示图片的索引
			    current: i,
			    // 所有图片 url 地址的数组
			    urls: this.goods_info.pics.map(x => x.pics_big)
			  })
			}
		}
	}
</script>

<style lang="scss">
swiper {
  height: 750rpx;

  image {
    width: 100%;
    height: 100%;
  }
}

// 商品信息区域的样式
.goods-info-box {
  padding: 10px;
  padding-right: 0;
  background-color: white;

  .price {
    color: #c00000;
    font-size: 18px;
    margin: 10px 0;
  }

  .goods-info-body {
    display: flex;
    justify-content: space-between;

    .goods-name {
      font-size: 20px;
      padding-right: 10px;
    }
    // 收藏区域
    .favi {
      width: 80px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #efefef;
      color: gray;
    }
	
  }
}


.remark-body {
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
	
	.remark-item{
		height: 80px;
		background-color: white;
		border-radius: 10px;
		display: flex;
		margin-bottom: 5px;
		
		.avatar{
			margin-top: 15px;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-right: 10px;
			margin-left: 5px;
		}
		.remark-content{
			line-height: 80px;
			
		}
	}
}
</style>
