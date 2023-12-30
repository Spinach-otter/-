<template>
  <view>
    <view class="goods-list">
      <view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
        <view class="goods-item">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image :src="goods.dishesPhoto" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">{{goods.dishesName}}</view>
            <view class="goods-info-box">
              <!-- 商品价格 -->
              <view class="goods-price">￥{{goods.dishesPrice}}</view>
            </view>
          </view>
        </view>
      </view>
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
		      cid: '',
		      // 页码值
		      pagenum: 1,
		      // 每页显示多少条数据
		      pagesize: 10
		    },
			// 商品列表的数据
			goodsList: [
			],
			// 总数量，用来实现分页
			total: 11
		  };
		},
		onLoad(options) {
		  // 将页面参数转存到 this.queryObj 对象中
		  this.queryObj.query = options.shopName || '';
		  this.queryObj.cid = options.shopId || '';
		  uni.request({
		  	url:'http://localhost:8080/dishes/',
		  	method:'GET',
			data: this.queryObj,
		  	success: (res) => {
		  		console.log(res);
		  		this.goodsList=res.data;
		  	},
		  	fail() {
		  		console.log("fail connect");
		  	}
		  });
		},
		methods:{
			// 点击跳转到商品详情页面
			gotoDetail(item) {
			  uni.navigateTo({
			    url: '/subpkg/goods_detail/goods_detail?dishesId=' + item.dishesId
			  })
			}
		}
	}
</script>

<style lang="scss">
.goods-item {
  display: flex;
  padding: 10px 5px;
  border-bottom: 1px solid #f0f0f0;
  background-color: white;

  .goods-item-left {
    margin-right: 5px;

    .goods-pic {
      width: 80px;
      height: 80px;
      display: block;
    }
  }

  .goods-item-right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .goods-name {
      font-size: 25px;
    }

    .goods-price {
      font-size: 16px;
      color: #c00000;
    }
  }
}
</style>
