"use strict";
const common_vendor = require("../../common/vendor.js");
const store_user = require("../../store/user.js");
const _sfc_main = {
  name: "my-login",
  data() {
    return {
      openid: ""
    };
  },
  methods: {
    // //用户授权之后获取用户的基本信息
    //  getUserInfo(e) {
    //   // uni.getUserProfile({...}) 方法功能: 获取用户信息。页面产生点击事件后才可调用, 每次请求都会弹出授权窗口,用户同意后返回该用户的信息。该接口用来替换 wx.getUserInfo (针对相关接口有较大调整)
    //   uni.getUserProfile({
    //          // 显示用户信息的语言
    //    lang: 'zh_CN',
    //    // 声明获取用户个人信息后的用途，不超过30个字符
    //    desc: '用来授权登录该小程序!',
    //    // 接口调用成功回调函数
    //    success: (userInfo) => {
    //    // 成功的回调里自带一个参数, 这个参数就是用户信息对象(userInfo)。其属性为:
    //    // rawDate: String,不包括敏感信息的原始数据字符串,用于计算签名;
    //    // signature: String, 使用 sha1(rawData + sessionkey) 得到字符串用于校验用户信息;
    //    // encryptedData: String, 包括敏感信息在内的加密数据详细见加密数据解密算法;
    //    // iv: String, 加密算法的初始向量,相见加密数据机密算法;
    //    // cloudID: String, 敏感数据对应的云 ID, 开通云开发的小程序才会返回,可通过云调用直接获取开放数据,详见云开发直接获取开放数据;
    //    // errMsg: String, 错误的描述
    // // console.log(userInfo);
    // this.$store.commit('SET_LOGIN_STATUS', true); // 修改登录状态为 true
    // this.$store.commit('SET_USER_INFO', userInfo.userInfo); // 修改登录状态为 true
    // console.log(this.$store.state.userInfo)
    // // uni.request({
    // // 	url:'http://localhost:8080/add/user/',
    // // 	method:'GET',
    // // data:{
    // // 	name:userInfo.userInfo.nickName,
    // // 	avatar:userInfo.userInfo.avatarUrl,
    // // },
    // // 	success: (res) => {
    // // 		console.log(res);
    // // 		// this.DianList=res.data;
    // // 	},
    // // 	fail() {
    // // 		console.log("fail connect");
    // // 	}
    // // })
    //    uni.showToast(
    // {
    //   title: '登录成功!',
    //   icon: 'success'
    // }
    // )
    //    },
    //    // 接口调用失败回调函数
    //    fail: () => {
    //     uni.showToast(
    //     {
    //       title: '登录失败',
    //       icon: 'error'
    //     }
    //     )
    //    },
    //    // 接口调用完成回调函数
    //    complete: () => {},
    //   })
    //  },
    getUserInfo() {
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          if (res.code) {
            console.log("有了code" + res.code);
            this.sendCodeToBackend(res.code);
          } else {
            console.error("登录失败！" + res.errMsg);
          }
        },
        fail: (err) => {
          console.error("uni.login调用失败！" + err.errMsg);
        }
      });
    },
    sendCodeToBackend(code) {
      common_vendor.index.request({
        url: "http://localhost:8080/get/openid",
        // 替换成你的后端接口地址
        method: "POST",
        data: {
          code
        },
        success: (res) => {
          console.log("success!");
          console.log(res);
          console.log(res.data);
          if (res.data) {
            this.$store.commit("SET_LOGIN_STATUS", true);
            store_user.user.avatarUrl = "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132";
            store_user.user.nickName = "微信用户" + res.data;
            this.$store.commit("SET_USER_INFO", store_user.user);
            this.adduser(store_user.user.nickName, store_user.user.avatarUrl);
            console.log("登录成功！");
          } else {
            console.error("登录失败！");
          }
        },
        fail: (err) => {
          console.error("发送code到后端请求失败！" + err.errMsg);
        }
      });
    },
    adduser(name, avatar) {
      common_vendor.index.request({
        url: "http://localhost:8080/add/user/",
        method: "GET",
        data: {
          name,
          avatar
        },
        success: (res) => {
          const result = res.data["结果"];
          console.log("结果:", result);
        },
        fail() {
          console.log("添加用户失败");
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
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/components/my-login/my-login.vue"]]);
wx.createComponent(Component);
