<template>
	<view>
		<view class="search-box" >
			<my-search @click="gotoSearch"></my-search>
		</view>
		
	    <!-- 轮播图区域 -->
	    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
	      <!-- 循环渲染轮播图的 item 项 -->
	      <swiper-item v-for="(item, i) in swiperList" :key="i">
	        <navigator class="swiper-item" :url="'/subpkgfour/notice/notice?notice_id=' + item.nid">
	          <!-- 动态绑定图片的 src 属性 -->
	          <image :src="item.poster"></image>
	        </navigator>
	      </swiper-item>
	    </swiper>
		
		
		<view class="dish-list" style="display: flex; flex-wrap: wrap;">
		  <view class="dish-box" v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)" style="width: 45%;">
		    <view class="dish-box-left">
		      <image :src="goods.dishesPhoto" class="dish-pic"></image>
		    </view>
		    <view class="dish-box-right">
		      <view class="dish-info-box">
				  <!-- 商品标题 -->
				  <view class="dish-name">{{goods.dishesName}}</view>
				  <!-- 商品价格 -->
				  <view class="dish-price">￥{{goods.dishesPrice}}</view>
			  </view>
			  <!-- 商品所在位置 -->
			  <view class="dish-shopname">{{goods.dishesNum}}食堂{{goods.dishesFloor}}楼 {{goods.ShopName}}</view>
		    </view>
		  </view>
		</view>
		
		
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
				// 请求参数对象
				queryObj: {
				  // 查询关键词
				  query: '',
				  // 商品分类Id
				  cid: 1,
				  // 页码值
				  pagenum: 1,
				  // 每页显示多少条数据
				  pagesize: 10
				},
				
		// 1. 轮播图的数据列表，默认为空数组
			  swiperList: [],
			  DianList: [],
			  // 商品列表的数据
			  goodsList: [],
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
			});
			// uni.request({
			// 	url:'http://localhost:8080/dishes/',
			// 	method:'GET',
			// 			data: this.queryObj,
			// 	success: (res) => {
			// 		console.log(res);
			// 		this.goodsList=res.data;
			// 	},
			// 	fail() {
			// 		console.log("fail connect");
			// 	}
			// });
			uni.request({
			    url: 'http://localhost:8080/Recommend_dishes/',
			    method: 'GET',
			    data: {
			    		isLoggedIn: this.$store.state.isLoggedIn,
			    		userName: this.$store.state.userInfo.nickName,
			    	},
			    success: (res) => {
			        console.log(res);
			        this.goodsList = res.data;
			        
			        // 遍历this.goodsList中的每个对象
			        this.goodsList.forEach(goods => {
			            uni.request({
			                url: 'http://localhost:8080/Recommend_dishes_shop/',
			                method: 'GET',
			                data: { shop_id: goods.dishesShop }, // 传入dishesShop的值作为shop_id
			                success: (shopRes) => {
			                    console.log(shopRes);
			                    // 将获取到的shop_name放入goods对象的ShopName字段
			                    goods.ShopName = shopRes.data.shop_name;
			                    // 如果你是用的vue,这里应该使用$set
			                    // this.$set(goods, 'ShopName', shopRes.data.shop_name);
			                },
			                fail() {
			                    console.log("fail connect");
			                }
			            });
			        });
			    },
			    fail() {
			        console.log("fail connect");
			    }
			});

		},
		methods: {
		  // 跳转到分包中的搜索页面
		     gotoSearch() {
		       uni.navigateTo({
		         url: '/subpkgthree/search/search'
		       })
		     },
			 // 点击跳转到商品详情页面
			 gotoDetail(item) {
			   uni.navigateTo({
			     url: '/subpkg/goods_detail/goods_detail?dishesId=' + item.dishesId
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

.dish-list {
}
.dish-box{
	height: 350rpx;
	background-color: white;
	margin-top: 20rpx;
	border-radius: 15rpx;
	margin-left: 20rpx;
	margin-right: 10rpx;
	// display: flex;
}
.dish-box-left {
}
.dish-pic {
	width: 100%;
	height: 220rpx;
	display: block;
	border-radius: 15rpx;
}
.dish-box-right{
	// display: flex;
	margin-top: 5%;
}
.dish-info-box {
	display: flex;
	justify-content: space-around;
}
.dish-name {
	font-size: 40rpx;
}
.dish-price {
	font-size: 40rpx;
	color: orange;
}
.dish-shopname{
	color: gray;
	text-align: center;
}


.dianpu-list {
	margin-top: 20rpx;
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
