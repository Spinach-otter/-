import { createStore } from 'vuex'
const store = createStore({
	state:{//存放状态
		isLoggedIn: false,
		userInfo: {}
	},
	mutations:{
		SET_LOGIN_STATUS(state, status) {
		  state.isLoggedIn = status
		},
		SET_USER_INFO(state, userInfo) {
		  state.userInfo = userInfo
		}
	}
})

export default store