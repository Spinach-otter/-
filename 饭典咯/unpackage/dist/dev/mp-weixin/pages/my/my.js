"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_my_login2 = common_vendor.resolveComponent("my-login");
  const _easycom_my_userinfo2 = common_vendor.resolveComponent("my-userinfo");
  (_easycom_my_login2 + _easycom_my_userinfo2)();
}
const _easycom_my_login = () => "../../components/my-login/my-login.js";
const _easycom_my_userinfo = () => "../../components/my-userinfo/my-userinfo.js";
if (!Math) {
  (_easycom_my_login + _easycom_my_userinfo)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !this.$store.state.isLoggedIn
  }, !this.$store.state.isLoggedIn ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
