"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 1. 轮播图的数据列表，默认为空数组
      swiperList: [
        {
          "image_src": "../../static/lunbo/lb1.png",
          "goods_id": 1
        },
        {
          "image_src": "../../static/lunbo/lb2.png",
          "goods_id": 2
        }
      ],
      DianList: [
        {
          "dian_name": "兰州拉面",
          "goods_list": 1,
          dishes: [
            {
              "img": "../../static/uni.png",
              "name": "刀削面",
              "price": 12
            },
            {
              "img": "../../static/uni.png",
              "name": "拉面",
              "price": 12
            },
            {
              "img": "../../static/uni.png",
              "name": "牛肉拉面",
              "price": 15
            }
          ]
        },
        {
          "dian_name": "秦风面匠",
          "goods_list": 2,
          dishes: [
            {
              "img": "../../static/uni.png",
              "name": "茄汁拌面",
              "price": 13
            },
            {
              "img": "../../static/uni.png",
              "name": "岐山哨子面",
              "price": 14
            },
            {
              "img": "../../static/uni.png",
              "name": "肉夹馍",
              "price": 10
            }
          ]
        },
        {
          "dian_name": "营养自选",
          "goods_list": 3,
          dishes: [
            {
              "img": "../../static/uni.png",
              "name": "米饭",
              "price": 1
            },
            {
              "img": "../../static/uni.png",
              "name": "青菜",
              "price": 2
            },
            {
              "img": "../../static/uni.png",
              "name": "排骨",
              "price": 5
            }
          ]
        }
      ]
    };
  }
};
if (!Array) {
  const _component_my_search = common_vendor.resolveComponent("my-search");
  _component_my_search();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swiperList, (item, i, i0) => {
      return {
        a: item.image_src,
        b: "/subpkg/goods_detail/goods_detail?goods_id=" + item.goods_id,
        c: i
      };
    }),
    b: common_vendor.f($data.DianList, (item, i, i0) => {
      return {
        a: common_vendor.t(item.dian_name),
        b: common_vendor.f(item.dishes, (dish, j, i1) => {
          return {
            a: dish.img,
            b: common_vendor.t(dish.name),
            c: common_vendor.t(dish.price),
            d: j
          };
        }),
        c: i,
        d: "/subpkgtwo/goods_list/goods_list?dian_name=" + item.dian_name
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
