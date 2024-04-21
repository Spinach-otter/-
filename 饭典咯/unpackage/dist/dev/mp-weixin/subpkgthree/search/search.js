"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 延时器的 timerId
      timer: null,
      // 搜索关键词
      kw: "",
      // 搜索结果列表
      searchResults: []
    };
  },
  methods: {
    input(e) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.kw = e;
        console.log(this.kw);
        this.getSearchList();
      }, 500);
    },
    getSearchList() {
      if (this.kw === "") {
        this.searchResults = [];
        return;
      }
      common_vendor.index.request({
        url: "http://localhost:8080/search/",
        method: "GET",
        // data: this.kw,
        data: { kw: this.kw },
        // 将搜索关键词作为键值对的值传递给后端
        success: (res) => {
          console.log(res);
          this.searchResults = res.data;
        },
        fail() {
          console.log("fail connect");
        }
      });
    },
    gotoDetail(dishesId) {
      common_vendor.index.navigateTo({
        // 指定详情页面的 URL 地址，并传递 id 参数
        url: "/subpkg/goods_detail/goods_detail?dishesId=" + dishesId
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.input),
    b: common_vendor.p({
      radius: 100,
      cancelButton: "none"
    }),
    c: common_vendor.f($data.searchResults, (item, i, i0) => {
      return {
        a: common_vendor.t(item.dishesName),
        b: "b3a97dc8-1-" + i0,
        c: i,
        d: common_vendor.o(($event) => $options.gotoDetail(item.dishesId), i)
      };
    }),
    d: common_vendor.p({
      type: "arrowright",
      size: "16"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/subpkgthree/search/search.vue"]]);
wx.createPage(MiniProgramPage);
