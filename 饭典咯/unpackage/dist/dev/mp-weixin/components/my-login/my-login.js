"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "my-login",
  data() {
    return {};
  },
  methods: {
    //用户授权之后获取用户的基本信息
    getUserInfo(e) {
      common_vendor.index.getUserProfile({
        // 显示用户信息的语言
        lang: "zh_CN",
        // 声明获取用户个人信息后的用途，不超过30个字符
        desc: "用来授权登录该小程序!",
        // 接口调用成功回调函数
        success: (userInfo) => {
          this.$store.commit("SET_LOGIN_STATUS", true);
          this.$store.commit("SET_USER_INFO", userInfo.userInfo);
          console.log(this.$store.state.userInfo);
          common_vendor.index.showToast(
            {
              title: "登录成功!",
              icon: "success"
            }
          );
        },
        // 接口调用失败回调函数
        fail: () => {
          common_vendor.index.showToast(
            {
              title: "登录失败",
              icon: "error"
            }
          );
        },
        // 接口调用完成回调函数
        complete: () => {
        }
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
    a: common_vendor.p({
      type: "contact-filled",
      size: "100",
      color: "#AFAFAF"
    }),
    b: common_vendor.o((...args) => $options.getUserInfo && $options.getUserInfo(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
