<template>
	<view>
		<view class="search-box" >
			<my-search @click="gotoSearch"></my-search>
		</view>
		
	    <!-- 轮播图区域 -->
	    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
	      <!-- 循环渲染轮播图的 item 项 -->
	      <swiper-item v-for="(item, i) in swiperList" :key="i">
	        <!-- <navigator class="swiper-item" :url="'/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id"> -->
	          <!-- 动态绑定图片的 src 属性 -->
	          <image :src="item.poster"></image>
	        <!-- </navigator> -->
	      </swiper-item>
	    </swiper>
		
		
		<view class="dianpu-list" >
		  <navigator class="dianpu" v-for="(item,i) in DianList" :key="i" :url="'/subpkgtwo/goods_list/goods_list?shopId='+item.shopId">
			  <view class="dian-info">{{item.shopName}}</view>
			  <view class="dishe-list">
				  <view class="dish-info" v-for="(dish,j) in item.topThreeDishes" :key="j">
					  <image :src="dish.dishesPhoto" class="dish-img"></image>
					  <view class="dish-info-name">{{dish.dishesName}}</view>
					  <view class="dish-info-price">{{dish.dishesPrice}}元</view>
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
			  swiperList: [],
			  DianList: [],
			};
		},
		onLoad() {
			uni.request({
				url:'http://localhost:8080/notices/',
				method:'GET',
				success: (res) => {
					// console.log(res);
					this.swiperList=res.data;
				},
				fail() {
					console.log("fail connect");
				}
			});
			uni.request({
				url:'http://localhost:8080/display/',
				method:'GET',
				success: (res) => {
					// console.log(res);
					this.DianList=res.data;
				},
				fail() {
					console.log("fail connect");
				}
			})
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
