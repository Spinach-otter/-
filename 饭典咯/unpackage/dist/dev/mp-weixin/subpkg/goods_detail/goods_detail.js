"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      // 商品详情对象
      goods_info: {
        "goods_id": 8888,
        "cat_id": 1085,
        "goods_name": "特别好吃的菜菜菜",
        "goods_price": 500,
        "goods_number": 100,
        "goods_weight": 100,
        "goods_introduce": "富文本内容",
        "goods_state": 2,
        "is_del": "0",
        "add_time": 1516361489,
        "upd_time": 1516361489,
        "delete_time": null,
        "hot_mumber": 0,
        "is_promote": false,
        "cat_one_id": 995,
        "cat_two_id": 1075,
        "cat_three_id": 1085,
        "goods_cat": "995,1075,1085",
        "pics": [
          {
            "pics_id": 38711,
            "goods_id": 8888,
            "pics_big": "../../static/detail/12.jpg",
            "pics_mid": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
            "pics_sma": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg",
            "pics_big_url": "../../static/detail/12.jpg",
            "pics_mid_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_400x400.jpg",
            "pics_sma_url": "http://image1.suning.cn/uimg/b2c/newcatentries/0070134290-000000000149003877_1_200x200.jpg"
          }
        ],
        "attrs": [
          {
            "goods_id": 8888,
            "attr_id": 9210,
            "attr_value": "户外直刀",
            "add_price": 0,
            "attr_name": "主体参数-类别",
            "attr_sel": "only",
            "attr_write": "manual",
            "attr_vals": "放大镜"
          }
        ],
        "remarks": [
          {
            "avt": "../../static/avatar.jpg",
            "content": "好吃"
          },
          {
            "avt": "../../static/avatar.jpg",
            "content": "还行"
          },
          {
            "avt": "../../static/avatar.jpg",
            "content": "不错"
          },
          {
            "avt": "../../static/avatar.jpg",
            "content": "一般般"
          },
          {
            "avt": "../../static/avatar.jpg",
            "content": "不太辣，很好吃"
          },
          {
            "avt": "../../static/avatar.jpg",
            "content": "不太合胃口"
          }
        ]
      }
    };
  },
  onLoad(options) {
    options.goods_id;
  },
  methods: {
    // 实现轮播图的预览效果
    preview(i) {
      common_vendor.index.previewImage({
        // 预览时，默认显示图片的索引
        current: i,
        // 所有图片 url 地址的数组
        urls: this.goods_info.pics.map((x) => x.pics_big)
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
    a: common_vendor.f($data.goods_info.pics, (item, i, i0) => {
      return {
        a: item.pics_big,
        b: common_vendor.o(($event) => $options.preview(i), i),
        c: i
      };
    }),
    b: common_vendor.t($data.goods_info.goods_price),
    c: common_vendor.t($data.goods_info.goods_name),
    d: common_vendor.p({
      type: "star",
      size: "18",
      color: "gray"
    }),
    e: common_vendor.p({
      type: "chatbubble",
      size: "18",
      color: "gray"
    }),
    f: common_vendor.f($data.goods_info.remarks, (remark, index, i0) => {
      return {
        a: remark.avt,
        b: common_vendor.t(remark.content),
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/chenyanling/Desktop/饭典咯/饭典咯/subpkg/goods_detail/goods_detail.vue"]]);
wx.createPage(MiniProgramPage);
