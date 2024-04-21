"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: [],
      sum_like: 0,
      sum_mark: 0
    };
  },
  computed: {
    ...common_vendor.mapState(["userInfo"])
  },
  mounted() {
    common_vendor.index.request({
      url: "http://localhost:8080/like/count",
      method: "GET",
      data: { username: this.$store.state.userInfo.nickName },
      success: (res) => {
        console.log(res);
        this.sum_like = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    }), common_vendor.index.request({
      url: "http://localhost:8080/mark/count/",
      method: "GET",
      data: { username: this.$store.state.userInfo.nickName },
      success: (res) => {
        console.log(res);
        this.sum_mark = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
  },
  methods: {
    logout() {
      this.$store.commit("SET_LOGIN_STATUS", false);
      common_vendor.index.navigateTo({
        url: "/pages/my/my"
      });
    },
    gotofeedback() {
      common_vendor.index.navigateTo({
        url: "/subpkgfive/feedback/feedback"
      });
    },
    gotofoodboox() {
      common_vendor.index.navigateTo({
        url: "/subpkgsix/foodbox/foodbox"
      });
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
    a: _ctx.userInfo.avatarUrl,
    b: common_vendor.t(_ctx.userInfo.nickName),
    c: common_vendor.t($data.sum_like),
    d: common_vendor.t($data.sum_mark),
    e: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    f: common_vendor.o((...args) => $options.gotofoodboox && $options.gotofoodboox(...args)),
    g: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    h: common_vendor.o((...args) => $options.gotofeedback && $options.gotofeedback(...args)),
    i: common_vendor.p({
      type: "arrowright",
      size: "15"
    }),
    j: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/components/my-userinfo/my-userinfo.vue"]]);
wx.createComponent(Component);
