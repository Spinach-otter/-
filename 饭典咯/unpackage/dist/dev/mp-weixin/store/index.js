"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    //存放状态
    isLoggedIn: false,
    userInfo: {}
  },
  mutations: {
    SET_LOGIN_STATUS(state, status) {
      state.isLoggedIn = status;
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo;
    }
  }
});
exports.store = store;
