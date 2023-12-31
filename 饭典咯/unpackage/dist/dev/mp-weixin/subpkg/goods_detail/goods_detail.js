"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      dishes_id: "",
      dishes_info: {},
      remarks: [],
      isFavorited: false,
      // 标识是否已经收藏
      showCommentInput: false,
      // 控制评论输入框的显示
      commentText: ""
      // 用户填写的评论内容
    };
  },
  onLoad(options) {
    this.dishes_id = options.dishesId;
    this.fresh();
    this.checkIfFavorited();
  },
  methods: {
    fresh() {
      common_vendor.index.request({
        url: "http://localhost:8080/dish/info/",
        method: "GET",
        data: { id: this.dishes_id },
        success: (res) => {
          console.log(res);
          this.dishes_info = res.data;
        },
        fail() {
          console.log("fail connect");
        }
      });
      common_vendor.index.request({
        url: "http://localhost:8080/marks/",
        method: "GET",
        data: { id: this.dishes_id },
        success: (res) => {
          console.log(res);
          this.remarks = res.data;
        },
        fail() {
          console.log("fail connect");
        }
      });
    },
    checkIfFavorited() {
      if (!this.$store.state.isLoggedIn)
        return;
      common_vendor.index.request({
        url: "http://localhost:8080/checkFavorite/",
        method: "GET",
        data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
        success: (res) => {
          this.isFavorited = res.data;
        },
        fail() {
          console.log("fail connect");
        }
      });
    },
    toggleFavorite() {
      if (this.isFavorited) {
        common_vendor.index.request({
          url: "http://localhost:8080/del/likes/",
          method: "GET",
          data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
          success: (res) => {
            console.log(res);
          },
          fail() {
            console.log("fail connect");
          }
        });
      } else {
        common_vendor.index.request({
          url: "http://localhost:8080/add/likes/",
          method: "GET",
          data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
          success: (res) => {
            console.log(res);
          },
          fail() {
            console.log("fail connect");
          }
        });
      }
      this.isFavorited = !this.isFavorited;
    },
    // 提交评论方法
    submitComment() {
      common_vendor.index.request({
        url: "http://localhost:8080/add/mark/",
        method: "GET",
        data: {
          userName: this.$store.state.userInfo.nickName,
          dishesId: this.dishes_id,
          content: this.commentText
        },
        success: (res) => {
          console.log(res);
        },
        fail() {
          console.log("fail connect");
        }
      });
      console.log("提交评论:", this.commentText);
      this.fresh();
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
  return common_vendor.e({
    a: $data.dishes_info.dishesPhoto,
    b: common_vendor.t($data.dishes_info.dishesPrice),
    c: common_vendor.t($data.dishes_info.dishesName),
    d: this.$store.state.isLoggedIn
  }, this.$store.state.isLoggedIn ? {
    e: common_vendor.p({
      type: $data.isFavorited ? "star-filled" : "star",
      size: "18",
      color: "gray"
    }),
    f: common_vendor.o((...args) => $options.toggleFavorite && $options.toggleFavorite(...args))
  } : {}, {
    g: this.$store.state.isLoggedIn
  }, this.$store.state.isLoggedIn ? {
    h: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "gray"
    }),
    i: common_vendor.o(($event) => $data.showCommentInput = true)
  } : {}, {
    j: $data.showCommentInput
  }, $data.showCommentInput ? {
    k: $data.commentText,
    l: common_vendor.o(($event) => $data.commentText = $event.detail.value),
    m: common_vendor.o((...args) => $options.submitComment && $options.submitComment(...args))
  } : {}, {
    n: common_vendor.f($data.remarks, (remark, index, i0) => {
      return {
        a: remark.userAvatar,
        b: common_vendor.t(remark.content),
        c: index
      };
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkg/goods_detail/goods_detail.vue"]]);
wx.createPage(MiniProgramPage);
