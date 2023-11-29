"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 请求参数对象
      queryObj: {
        // 查询关键词
        query: "",
        // 商品分类Id
        cid: "",
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
        }
      ],
      // 总数量，用来实现分页
      total: 11
    };
  },
  onLoad(options) {
    this.queryObj.query = options.dain_name || "";
    this.queryObj.cid = options.cid || "";
  },
  methods: {
    // 点击跳转到商品详情页面
    gotoDetail(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.goodsList, (goods, i, i0) => {
      return {
        a: goods.goods_small_logo,
        b: common_vendor.t(goods.goods_name),
        c: common_vendor.t(goods.goods_price),
        d: i,
        e: common_vendor.o(($event) => $options.gotoDetail(goods), i)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkgtwo/goods_list/goods_list.vue"]]);
wx.createPage(MiniProgramPage);
