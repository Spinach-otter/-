"use strict";
const state = {
  isLoggedIn: false,
  userInfo: {}
};
const mutations = {
  SET_LOGIN_STATUS(state2, status) {
    state2.isLoggedIn = status;
  },
  SET_USER_INFO(state2, userInfo) {
    state2.userInfo = userInfo;
  }
  // 可能还会有其他 mutations 根据需求定义
};
const user = {
  state,
  mutations
};
exports.user = user;
