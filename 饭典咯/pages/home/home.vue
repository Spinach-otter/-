<template>
	<view>
		<view class="search-box" >
			<my-search @click="gotoSearch"></my-search>
		</view>
		
	    <!-- 轮播图区域 -->
	    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
	      <!-- 循环渲染轮播图的 item 项 -->
	      <swiper-item v-for="(item, i) in swiperList" :key="i">
	        <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id">
	          <!-- 动态绑定图片的 src 属性 -->
	          <image :src="item.image_src"></image>
	        </navigator>
	      </swiper-item>
	    </swiper>
		
		
		<view class="dianpu-list" >
		  <navigator class="dianpu" v-for="(item,i) in DianList" :key="i" :url="'/subpkgtwo/goods_list/goods_list?dian_name='+item.dian_name">
			  <view class="dian-info">{{item.dian_name}}</view>
			  <view class="dishe-list">
				  <view class="dish-info" v-for="(dish,j) in item.dishes" :key="j">
					  <image :src="dish.img" class="dish-img"></image>
					  <view class="dish-info-name">{{dish.name}}</view>
					  <view class="dish-info-price">{{dish.price}}元</view>
				  </view>
			  </view>
		  </navigator>
		</view>
	  </view>
</template>

<script>
	export default {
		data() {
			return {
		// 1. 轮播图的数据列表，默认为空数组
			  swiperList: [
				  {
					  "image_src":"../../static/lunbo/lb1.png",
					  "goods_id":1,
				  },
				  {
					  "image_src":"../../static/lunbo/lb2.png",
					  "goods_id":2,
				  },
			  ],
			  DianList: [
				  {
					"dian_name":"兰州拉面",
					"goods_list":1,
					dishes:[
						{
							"img":"../../static/uni.png",
							"name":"刀削面",
							"price":12,
						},
						{
							"img":"../../static/uni.png",
							"name":"拉面",
							"price":12,
						},
						{
							"img":"../../static/uni.png",
							"name":"牛肉拉面",
							"price":15,
						},
					],
				  },
				  {
				  					  "dian_name":"秦风面匠",
									  "goods_list":2,
				  					  dishes:[
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"茄汁拌面",
				  							"price":13,
				  						},
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"岐山哨子面",
				  							"price":14,
				  						},
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"肉夹馍",
				  							"price":10,
				  						},
				  					  ],
				  },
				  {
				  					  "dian_name":"营养自选",
									  "goods_list":3,
				  					  dishes:[
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"米饭",
				  							"price":1,
				  						},
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"青菜",
				  							"price":2,
				  						},
				  						{
				  							"img":"../../static/uni.png",
				  							"name":"排骨",
				  							"price":5,
				  						},
				  					  ],
				  },
			  ],
			};
		},
		methods: {
		  // 跳转到分包中的搜索页面
		     gotoSearch() {
		       uni.navigateTo({
		         url: '/subpkgthree/search/search'
		       })
		     }
		},
	}
</script>

<style lang="scss">
swiper {
	height: 350rpx;
	.swiper-item,image {
		height: 100%;
		width: 100%;
	}
	margin-bottom: 5rpx;
}

.dianpu-list {
	height: 400rpx;
}
.dianpu {
	height: 100%;
	background-color: white;
	margin-top: 10rpx;
	border-radius: 15rpx;
	margin-left: 10rpx;
	margin-right: 10rpx;
}
.dian-info {
	height: 20%;
	font-size: 48rpx;
	margin-left: 20rpx;
	padding-top: 20rpx;
	margin-bottom: 20rpx;
}
.dishe-list {
	display: flex;
	justify-content: space-around;
	
	.dish-img {
		height: 180rpx;
		width: 180rpx;
	}
	.dish-info-name {
		text-align: center;
	}
	.dish-info-price {
		text-align: center;
		color: orange;
	}
}


.search-box {
  // 设置定位效果为“吸顶”
  position: sticky;
  // 吸顶的“位置”
  top: 0;
  // 提高层级，防止被轮播图覆盖
  z-index: 999;
}
</style>
