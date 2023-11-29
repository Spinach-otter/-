<template>
  <view>
	  <my-search @click="gotoSearch"></my-search>
    <view class="scroll-view-container">
      <!-- 左侧的滚动视图区域 -->
      <scroll-view class="left-scroll-view" scroll-y :style="{height: wh + 'px'}">
		  <block v-for="(item, i) in cateList" :key="i">
		    <view :class="['left-scroll-view-item', i === active ? 'active' : '']" @click="activeChanged(i)">{{item.cat_name}}</view>
		  </block>
      </scroll-view>
      <!-- 右侧的滚动视图区域 -->
      <scroll-view class="right-scroll-view" scroll-y :style="{height: wh + 'px'}">
          <!-- 动态渲染三级分类的列表数据 -->
          <view class="cate-lv3-list">
            <!-- 三级分类 Item 项 -->
            <view class="cate-lv3-item" v-for="(item3, i3) in cateLevel2" :key="i3" @click="gotoGoodsList(item3)">
              <!-- 图片 -->
              <image :src="item3.cat_icon"></image>
              <!-- 文本 -->
              <text>{{item3.cat_name}}</text>
            </view>
          </view>
      </scroll-view>

    </view>
  </view>
</template>

<script>
  export default {
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
					{
						"cat_id": 1,
						  "cat_name": "店1",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 2,
						  "cat_name": "店2",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 3,
						  "cat_name": "店3",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 4,
						  "cat_name": "店4",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 5,
						  "cat_name": "店5",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 6,
						  "cat_name": "店6",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 7,
						  "cat_name": "店7",
						  "cat_icon": "../../static/logo.png"
					},
				],
			},
			{
				"cat_id": 2,
				"cat_name": "一食二楼",
				"children": [
					{
						"cat_id": 1,
						  "cat_name": "店1",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 2,
						  "cat_name": "店2",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 3,
						  "cat_name": "店3",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 4,
						  "cat_name": "店4",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 5,
						  "cat_name": "店5",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 6,
						  "cat_name": "店6",
						  "cat_icon": "../../static/logo.png"
					},
				],
			},
			{
				"cat_id": 3,
				"cat_name": "二食一楼",
				"children": [
					{
						"cat_id": 1,
						  "cat_name": "店1",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 2,
						  "cat_name": "店2",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 3,
						  "cat_name": "店3",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 4,
						  "cat_name": "店4",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 5,
						  "cat_name": "店5",
						  "cat_icon": "../../static/logo.png"
					},
				],
			},
			{
				"cat_id": 4,
				"cat_name": "二食二楼",
				"children": [
					{
						"cat_id": 1,
						  "cat_name": "店1",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 2,
						  "cat_name": "店2",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 3,
						  "cat_name": "店3",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 4,
						  "cat_name": "店4",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 5,
						  "cat_name": "店5",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 6,
						  "cat_name": "店6",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 7,
						  "cat_name": "店7",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 8,
						  "cat_name": "店8",
						  "cat_icon": "../../static/logo.png"
					},
				],
			},
			{
				"cat_id": 5,
				"cat_name": "二食三楼",
				"children": [
					{
						"cat_id": 1,
						  "cat_name": "店1",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 2,
						  "cat_name": "店2",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 3,
						  "cat_name": "店3",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 4,
						  "cat_name": "店4",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 5,
						  "cat_name": "店5",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 6,
						  "cat_name": "店6",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 7,
						  "cat_name": "店7",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 8,
						  "cat_name": "店8",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 9,
						  "cat_name": "店9",
						  "cat_icon": "../../static/logo.png"
					},
					{
						"cat_id": 10,
						  "cat_name": "店10",
						  "cat_icon": "../../static/logo.png"
					},
				],
			},
		],
      };
    },
    onLoad() {
      // 获取当前系统的信息
      const sysInfo = uni.getSystemInfoSync()
      // 为 wh 窗口可用高度动态赋值
      this.wh = sysInfo.windowHeight - 50
	  this.cateLevel2 = this.cateList[0].children
    },
	methods: {
	  // 选中项改变的事件处理函数
	  activeChanged(i) {
	    this.active = i
		  // 为二级分类列表重新赋值
		  this.cateLevel2 = this.cateList[i].children
	  },
	  // 点击三级分类项跳转到商品列表页面
	  gotoGoodsList(item3) {
	    uni.navigateTo({
	      url: '/subpkgtwo/goods_list/goods_list?cid=' + item3.cat_id
	    })
	  },
	  // 跳转到分包中的搜索页面
	     gotoSearch() {
	       uni.navigateTo({
	         url: '/subpkgthree/search/search'
	       })
	     }
	},
  }
</script>

<style lang="scss">
.scroll-view-container {
  display: flex;

  .left-scroll-view {
    width: 120px;

    .left-scroll-view-item {
      line-height: 60px;
      background-color: #f7f7f7;
      text-align: center;
      font-size: 12px;

      // 激活项的样式
      &.active {
        background-color: #ffffff;
        position: relative;

        // 渲染激活项左侧的红色指示边线
        &::before {
          content: ' ';
          display: block;
          width: 3px;
          height: 30px;
          background-color: #c00000;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}

.cate-lv3-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  .cate-lv3-item {
    width: 33.33%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    image {
      width: 60px;
      height: 60px;
    }

    text {
      font-size: 12px;
    }
  }
}
</style>
