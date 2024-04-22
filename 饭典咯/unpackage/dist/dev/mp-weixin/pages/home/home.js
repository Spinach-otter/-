"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 请求参数对象
      queryObj: {
        // 查询关键词
        query: "",
        // 商品分类Id
        cid: 1,
        // 页码值
        pagenum: 1,
        // 每页显示多少条数据
        pagesize: 10
      },
      // 1. 轮播图的数据列表，默认为空数组
      swiperList: [],
      DianList: [],
      // 商品列表的数据
      goodsList: []
    };
  },
  onLoad() {
    common_vendor.index.request({
      url: "http://localhost:8080/notices/",
      method: "GET",
      success: (res) => {
        this.swiperList = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/display/",
      method: "GET",
      success: (res) => {
        this.DianList = res.data;
      },
      fail() {
        console.log("fail connect");
      }
    });
    common_vendor.index.request({
      url: "http://localhost:8080/Recommend_dishes/",
      method: "GET",
      data: {
        isLoggedIn: this.$store.state.isLoggedIn,
        userName: this.$store.state.userInfo.nickName
      },
      success: (res) => {
        console.log(res);
        this.goodsList = res.data;
        this.goodsList.forEach((goods) => {
          common_vendor.index.request({
            url: "http://localhost:8080/Recommend_dishes_shop/",
            method: "GET",
            data: { shop_id: goods.dishesShop },
            // 传入dishesShop的值作为shop_id
            success: (shopRes) => {
              console.log(shopRes);
              goods.ShopName = shopRes.data.shop_name;
            },
            fail() {
              console.log("fail connect");
            }
          });
        });
      },
      fail() {
        console.log("fail connect");
      }
    });
  },
  methods: {
    // 跳转到分包中的搜索页面
    gotoSearch() {
      common_vendor.index.navigateTo({
        url: "/subpkgthree/search/search"
      });
    },
    // 点击跳转到商品详情页面
    gotoDetail(item) {
      common_vendor.index.navigateTo({
        url: "/subpkg/goods_detail/goods_detail?dishesId=" + item.dishesId
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
    b: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.poster,
        b: "/subpkgfour/notice/notice?notice_id=" + item.nid,
        c: i
      };
    }),
    c: common_vendor.f($data.goodsList, (goods, i, i0) => {
      return {
        a: goods.dishesPhoto,
        b: common_vendor.t(goods.dishesName),
        c: common_vendor.t(goods.dishesPrice),
        d: common_vendor.t(goods.dishesNum),
        e: common_vendor.t(goods.dishesFloor),
        f: common_vendor.t(goods.ShopName),
        g: i,
        h: common_vendor.o(($event) => $options.gotoDetail(goods), i)
      };
    }),
    d: common_vendor.f($data.DianList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.shopName),
        b: common_vendor.f(item.topThreeDishes, (dish, j, i1) => {
          return {
            a: dish.dishesPhoto,
            b: common_vendor.t(dish.dishesName),
            c: common_vendor.t(dish.dishesPrice),
            d: j
          };
        }),
        c: i,
        d: "/subpkgtwo/goods_list/goods_list?shopId=" + item.shopId
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/MyCompusLife/科目/软件工程导论/饭典咯/饭典咯/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
