"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dialogbkgsrc: "https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E5%85%89.gif",
      dialogopening: "https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E5%85%89.gif",
      dialogopenfinish: "https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E8%8F%9C%E5%8D%95.png",
      showResultBkg: false,
      // 是否显示抽中盲盒的提示
      showResultText: false,
      resultText: {}
      // 抽中盲盒的提示文字
    };
  },
  methods: {
    // 开启盲盒按钮点击事件
    openBox() {
      var that = this;
      this.showResultBkg = true;
      this.dialogbkgsrc = this.dialogopening;
      setTimeout(function() {
        common_vendor.index.request({
          url: "http://localhost:8080/getRandomFood/",
          method: "GET",
          success: (res) => {
            that.resultText = res.data;
            that.showResultText = true;
            that.dialogbkgsrc = that.dialogopenfinish;
          },
          fail() {
            common_vendor.index.showToast(
              {
                title: "请重新尝试",
                icon: "fail"
              }
            );
          }
        });
      }, 2e3);
    },
    closeDialog() {
      this.showResultText = false;
      this.showResultBkg = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.openBox && $options.openBox(...args)),
    b: $data.resultText.dishesPhoto,
    c: common_vendor.t($data.resultText.dishesName),
    d: common_vendor.t($data.resultText.dishesNum),
    e: common_vendor.t($data.resultText.dishesFloor),
    f: common_vendor.t($data.resultText.dishesShop),
    g: $data.showResultText,
    h: common_vendor.o((...args) => $options.closeDialog && $options.closeDialog(...args)),
    i: $data.showResultBkg
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/subpkgsix/foodbox/foodbox.vue"]]);
wx.createPage(MiniProgramPage);
