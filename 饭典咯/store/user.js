// user.js

const state = {
  isLoggedIn: false,
  userInfo: {}
}

const mutations = {
  SET_LOGIN_STATUS(state, status) {
    state.isLoggedIn = status
  },
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo
  }
  // 可能还会有其他 mutations 根据需求定义
}

export default {
  state,
  mutations
}
