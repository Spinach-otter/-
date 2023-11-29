<template>
  <view>
    <view class="goods-list">
      <view v-for="(goods, i) in goodsList" :key="i" @click="gotoDetail(goods)">
        <view class="goods-item">
          <!-- 商品左侧图片区域 -->
          <view class="goods-item-left">
            <image :src="goods.goods_small_logo" class="goods-pic"></image>
          </view>
          <!-- 商品右侧信息区域 -->
          <view class="goods-item-right">
            <!-- 商品标题 -->
            <view class="goods-name">{{goods.goods_name}}</view>
            <view class="goods-info-box">
              <!-- 商品价格 -->
              <view class="goods-price">￥{{goods.goods_price}}</view>
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
				{
					"goods_id": 1,
					"cat_id": 9,
					"goods_name": "菜品1",
					"goods_price": 6,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 2,
					"cat_id": 9,
					"goods_name": "菜品2",
					"goods_price": 9,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 3,
					"cat_id": 9,
					"goods_name": "菜品3",
					"goods_price": 4,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 4,
					"cat_id": 9,
					"goods_name": "菜品4",
					"goods_price": 6499,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 5,
					"cat_id": 9,
					"goods_name": "菜品5",
					"goods_price": 12,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 6,
					"cat_id": 9,
					"goods_name": "菜品6",
					"goods_price": 16,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 7,
					"cat_id": 9,
					"goods_name": "菜品7",
					"goods_price": 20,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 8,
					"cat_id": 9,
					"goods_name": "菜品8",
					"goods_price": 11,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 9,
					"cat_id": 9,
					"goods_name": "菜品9",
					"goods_price": 13,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 10,
					"cat_id": 9,
					"goods_name": "菜品10",
					"goods_price": 12,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
				{
					"goods_id": 11,
					"cat_id": 9,
					"goods_name": "菜品11",
					"goods_price": 6,
					"goods_number": 100,
					"goods_weight": 100,
					"goods_big_logo": "",
					"goods_small_logo": "../../static/logo.png",
					"add_time": 1516663280,
					"upd_time": 1516663280,
					"hot_mumber": 0,
					"is_promote": false,
					"cat_one_id": 1,
					"cat_two_id": 3,
					"cat_three_id": 9
				},
			],
			// 总数量，用来实现分页
			total: 11
		  };
		},
		onLoad(options) {
		  // 将页面参数转存到 this.queryObj 对象中
		  this.queryObj.query = options.dain_name || ''
		  this.queryObj.cid = options.cid || ''
		},
		methods:{
			// 点击跳转到商品详情页面
			gotoDetail(item) {
			  uni.navigateTo({
			    url: '/subpkg/goods_detail/goods_detail?goods_id=' + item.goods_id
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
