"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 当前选中项的索引，默认让第一项被选中
      active: 0,
      // 窗口的可用高度 = 屏幕高度 - navigationBar高度 - tabBar 高度
      wh: 0,
      cateLevel2: [],
      // 分类数据列表
      cateList: [
        {
          "cat_id": 1,
          "cat_name": "一食一楼",
          "children": [
            // {
            // 	"cat_id": 1,
            // 	  "cat_name": "店1",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 2,
            // 	  "cat_name": "店2",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 3,
            // 	  "cat_name": "店3",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 4,
            // 	  "cat_name": "店4",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 5,
            // 	  "cat_name": "店5",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 6,
            // 	  "cat_name": "店6",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 7,
            // 	  "cat_name": "店7",
            // 	  "cat_icon": "../../static/logo.png"
            // },
          ]
        },
        {
          "cat_id": 2,
          "cat_name": "一食二楼",
          "children": [
            // {
            // 	"cat_id": 1,
            // 	  "cat_name": "店1",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 2,
            // 	  "cat_name": "店2",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 3,
            // 	  "cat_name": "店3",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 4,
            // 	  "cat_name": "店4",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 5,
            // 	  "cat_name": "店5",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 6,
            // 	  "cat_name": "店6",
            // 	  "cat_icon": "../../static/logo.png"
            // },
          ]
        },
        {
          "cat_id": 3,
          "cat_name": "二食一楼",
          "children": [
            // {
            // 	"cat_id": 1,
            // 	  "cat_name": "店1",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 2,
            // 	  "cat_name": "店2",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 3,
            // 	  "cat_name": "店3",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 4,
            // 	  "cat_name": "店4",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 5,
            // 	  "cat_name": "店5",
            // 	  "cat_icon": "../../static/logo.png"
            // },
          ]
        },
        {
          "cat_id": 4,
          "cat_name": "二食二楼",
          "children": [
            // {
            // 	"cat_id": 1,
            // 	  "cat_name": "店1",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 2,
            // 	  "cat_name": "店2",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 3,
            // 	  "cat_name": "店3",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 4,
            // 	  "cat_name": "店4",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 5,
            // 	  "cat_name": "店5",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 6,
            // 	  "cat_name": "店6",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 7,
            // 	  "cat_name": "店7",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 8,
            // 	  "cat_name": "店8",
            // 	  "cat_icon": "../../static/logo.png"
            // },
          ]
        },
        {
          "cat_id": 5,
          "cat_name": "二食三楼",
          "children": [
            // {
            // 	"cat_id": 1,
            // 	  "cat_name": "店1",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 2,
            // 	  "cat_name": "店2",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 3,
            // 	  "cat_name": "店3",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 4,
            // 	  "cat_name": "店4",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 5,
            // 	  "cat_name": "店5",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 6,
            // 	  "cat_name": "店6",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 7,
            // 	  "cat_name": "店7",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 8,
            // 	  "cat_name": "店8",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 9,
            // 	  "cat_name": "店9",
            // 	  "cat_icon": "../../static/logo.png"
            // },
            // {
            // 	"cat_id": 10,
            // 	  "cat_name": "店10",
            // 	  "cat_icon": "../../static/logo.png"
            // },
          ]
        }
      ]
    };
  },
  onLoad() {
    const sysInfo = common_vendor.index.getSystemInfoSync();
    this.wh = sysInfo.windowHeight - 50;
    common_vendor.index.request({
      url: "http://localhost:8080/cat0/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.cateList[0].children = res.data;
        this.cateLevel2 = this.cateList[0].children;
      },
      fail() {
        console.log("fail connect");
      }
    });
    this.cateLevel2 = this.cateList[0].children;
    common_vendor.index.request({
      url: "http://localhost:8080/cat1/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.cateList[1].children = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/cat2/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.cateList[2].children = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/cat3/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.cateList[3].children = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/cat4/",
      method: "GET",
      success: (res) => {
        console.log(res);
        this.cateList[4].children = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
  },
  methods: {
    // 选中项改变的事件处理函数
    activeChanged(i) {
      this.active = i;
      this.cateLevel2 = this.cateList[i].children;
    },
    // 点击三级分类项跳转到商品列表页面
    gotoGoodsList(item3) {
      common_vendor.index.navigateTo({
        url: "/subpkgtwo/goods_list/goods_list?shopId=" + item3.shopId
      });
    },
    // 跳转到分包中的搜索页面
    gotoSearch() {
      common_vendor.index.navigateTo({
        url: "/subpkgthree/search/search"
      });
    }
  }
};
if (!Array) {
  const _easycom_my_search2 = common_vendor.resolveComponent("my-search");
  _easycom_my_search2();
}
const _easycom_my_search = () => "../../components/my-search/my-search.js";
if (!Math) {
  _easycom_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.gotoSearch),
    b: common_vendor.f($data.cateList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.cat_name),
        b: common_vendor.n(i === $data.active ? "active" : ""),
        c: common_vendor.o(($event) => $options.activeChanged(i), i),
        d: i
      };
    }),
    c: $data.wh + "px",
    d: common_vendor.f($data.cateLevel2, (item3, i3, i0) => {
      return {
        a: item3.shopPhoto,
        b: common_vendor.t(item3.shopName),
        c: i3,
        d: common_vendor.o(($event) => $options.gotoGoodsList(item3), i3)
      };
    }),
    e: $data.wh + "px"
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/pages/foods/foods.vue"]]);
wx.createPage(MiniProgramPage);
