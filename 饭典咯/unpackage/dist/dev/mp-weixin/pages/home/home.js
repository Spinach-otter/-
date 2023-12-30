"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 1. 轮播图的数据列表，默认为空数组
      swiperList: [],
      DianList: []
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:8080/notices/",
      method: "GET",
      success: (res) => {
        this.swiperList = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/display/",
      method: "GET",
      success: (res) => {
        this.DianList = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
  },
  methods: {
    // 跳转到分包中的搜索页面
    gotoSearch() {
      common_vendor.index.navigateTo({
        url: "/subpkgthree/search/search"
      });
    }
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.gotoSearch),
    b: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.poster,
        b: i
      };
    }),
    c: common_vendor.f($data.DianList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.shopName),
        b: common_vendor.f(item.topThreeDishes, (dish, j, i1) => {
          return {
            a: dish.dishesPhoto,
            b: common_vendor.t(dish.dishesName),
            c: common_vendor.t(dish.dishesPrice),
            d: j
          };
        }),
        c: i,
        d: "/subpkgtwo/goods_list/goods_list?shopId=" + item.shopId
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
