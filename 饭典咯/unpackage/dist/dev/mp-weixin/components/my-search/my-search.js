"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-search",
  data() {
    return {};
  },
  methods: {
    // 点击了模拟的 input 输入框
    searchBoxHandler() {
      this.$emit("click");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "search",
      size: "17"
    }),
    b: common_vendor.o((...args) => $options.searchBoxHandler && $options.searchBoxHandler(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/components/my-search/my-search.vue"]]);
wx.createComponent(Component);
