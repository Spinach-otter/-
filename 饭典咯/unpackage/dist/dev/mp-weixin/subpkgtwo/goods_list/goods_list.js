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
      goodsList: [],
      // 总数量，用来实现分页
      total: 11
    };
  },
  onLoad(options) {
    this.queryObj.query = options.shopName || "";
    this.queryObj.cid = options.shopId || "";
    common_vendor.index.request({
      url: "http://localhost:8080/dishes/",
      method: "GET",
      data: this.queryObj,
      success: (res) => {
        console.log(res);
        this.goodsList = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
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
        a: goods.dishesPhoto,
        b: common_vendor.t(goods.dishesName),
        c: common_vendor.t(goods.dishesPrice),
        d: i,
        e: common_vendor.o(($event) => $options.gotoDetail(goods), i)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkgtwo/goods_list/goods_list.vue"]]);
wx.createPage(MiniProgramPage);
