"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      notice_id: "",
      title: "",
      content: "",
      poster: ""
    };
  },
  onLoad(options) {
    this.notice_id = options.notice_id;
    common_vendor.index.request({
      url: "http://localhost:8080/notice/info/",
      method: "GET",
      data: { id: this.notice_id },
      success: (res) => {
        console.log(res);
        this.title = res.data.title;
        this.content = res.data.content;
        this.poster = res.data.poster;
      },
      fail() {
        console.log("fail connect");
      }
    });
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.poster,
    b: common_vendor.t($data.title),
    c: common_vendor.t($data.content)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkgfour/notice/notice.vue"]]);
wx.createPage(MiniProgramPage);
