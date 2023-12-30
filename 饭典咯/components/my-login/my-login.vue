<template>
  <view class="login-container">
    <!-- 提示登录的图标 -->
    <uni-icons type="contact-filled" size="100" color="#AFAFAF"></uni-icons>
    <!-- 登录按钮 -->
    <!-- 可以从 @getuserinfo 事件处理函数的形参中，获取到用户的基本信息 -->
    <button type="primary" class="btn-login" @click="getUserInfo">一键登录</button>
    <!-- 登录提示 -->
    <view class="tips-text">登录后尽享更多权益</view>
  </view>
</template>

<script>
	export default {
		name:"my-login",
		data() {
			return {
				
			};
		},
		methods: {
		  //用户授权之后获取用户的基本信息
		   getUserInfo(e) {
		    // uni.getUserProfile({...}) 方法功能: 获取用户信息。页面产生点击事件后才可调用, 每次请求都会弹出授权窗口,用户同意后返回该用户的信息。该接口用来替换 wx.getUserInfo (针对相关接口有较大调整)
		    uni.getUserProfile({
		           // 显示用户信息的语言
		     lang: 'zh_CN',
		     // 声明获取用户个人信息后的用途，不超过30个字符
		     desc: '用来授权登录该小程序!',
		     // 接口调用成功回调函数
		     success: (userInfo) => {
		     // 成功的回调里自带一个参数, 这个参数就是用户信息对象(userInfo)。其属性为:
		     // rawDate: String,不包括敏感信息的原始数据字符串,用于计算签名;
		     // signature: String, 使用 sha1(rawData + sessionkey) 得到字符串用于校验用户信息;
		     // encryptedData: String, 包括敏感信息在内的加密数据详细见加密数据解密算法;
		     // iv: String, 加密算法的初始向量,相见加密数据机密算法;
		     // cloudID: String, 敏感数据对应的云 ID, 开通云开发的小程序才会返回,可通过云调用直接获取开放数据,详见云开发直接获取开放数据;
		     // errMsg: String, 错误的描述
			 // console.log(userInfo);
			 this.$store.commit('SET_LOGIN_STATUS', true); // 修改登录状态为 true
			 this.$store.commit('SET_USER_INFO', userInfo.userInfo); // 修改登录状态为 true
			 // console.log(this.$store.state.userInfo)
			 // uni.request({
			 // 	url:'http://localhost:8080/add/user/',
			 // 	method:'GET',
				// data:{
				// 	name:userInfo.userInfo.nickName,
				// 	avatar:userInfo.userInfo.avatarUrl,
				// },
			 // 	success: (res) => {
			 // 		console.log(res);
			 // 		// this.DianList=res.data;
			 // 	},
			 // 	fail() {
			 // 		console.log("fail connect");
			 // 	}
			 // })
		     uni.showToast(
			 {
			   title: '登录成功!',
			   icon: 'success'
			 }
			 )
		     },
		     // 接口调用失败回调函数
		     fail: () => {
		      uni.showToast(
		      {
		        title: '登录失败',
		        icon: 'error'
		      }
		      )
		     },
		     // 接口调用完成回调函数
		     complete: () => {},
		    })
		   },
		  },
	}
</script>

<style lang="scss">
.login-container {
  // 登录盒子的样式
  height: 750rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f8f8;
  position: relative;
  overflow: hidden;

  // 绘制登录盒子底部的半椭圆造型
  &::after {
    content: ' ';
    display: block;
    position: absolute;
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    background-color: white;
    border-radius: 100%;
    transform: translateY(50%);
  }

  // 登录按钮的样式
  .btn-login {
    width: 90%;
    border-radius: 100px;
    margin: 15px 0;
    background-color: #c00000;
  }

  // 按钮下方提示消息的样式
  .tips-text {
    font-size: 12px;
    color: gray;
  }
}
</style>