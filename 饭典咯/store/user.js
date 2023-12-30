// store/user.js

const state = {
  userInfo: null,
  openid: ''
};

const mutations = {
  SET_USER_INFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_OPENID(state, openid) {
    state.openid = openid;
  }
};

const actions = {
  setUserInfo({ commit }, userInfo) {
    commit('SET_USER_INFO', userInfo);
  },
  setOpenid({ commit }, openid) {
    commit('SET_OPENID', openid);
  }
};

const getters = {
  getUserInfo: (state) => state.userInfo,
  getOpenid: (state) => state.openid
};

export default {
  state,
  mutations,
  actions,
  getters
};
