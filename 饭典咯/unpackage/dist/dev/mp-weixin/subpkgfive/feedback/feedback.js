"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      feedbacks: [],
      recommendation: ""
    };
  },
  onLoad() {
    this.fetchFeedbacks();
  },
  methods: {
    fetchFeedbacks() {
      common_vendor.index.request({
        url: "http://localhost:8080/feedback/",
        method: "GET",
        success: (res) => {
          this.feedbacks = res.data;
        },
        fail() {
          console.log("fail connect");
        }
      });
    },
    sendFeedback() {
      const userInfo = this.$store.state.userInfo;
      common_vendor.index.request({
        url: "http://localhost:8080/add/feedback/",
        method: "GET",
        data: {
          userName: userInfo.nickName,
          content: this.recommendation
        },
        success: (res) => {
          console.log(res);
          this.fetchFeedbacks();
          this.recommendation = "";
        },
        fail() {
          console.log("fail connect");
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.recommendation,
    b: common_vendor.o(($event) => $data.recommendation = $event.detail.value),
    c: common_vendor.o((...args) => $options.sendFeedback && $options.sendFeedback(...args)),
    d: common_vendor.f($data.feedbacks, (item, i, i0) => {
      return {
        a: common_vendor.t(item.recommend),
        b: i
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkgfive/feedback/feedback.vue"]]);
wx.createPage(MiniProgramPage);
