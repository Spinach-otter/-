<template>
  <view class="my-search-container">
    <!-- 使用 view 组件模拟 input 输入框的样式 -->
    <view class="my-search-box" @click="searchBoxHandler">
      <uni-icons type="search" size="17"></uni-icons>
      <text class="placeholder">搜索</text>
    </view>
  </view>
</template>

<script>
	export default {
		name:"my-search",
		data() {
			return {
				
			};
		},
		methods: {
		  // 点击了模拟的 input 输入框
		  searchBoxHandler() {
		    // 触发外界通过 @click 绑定的 click 事件处理函数
		    this.$emit('click')
		  }
		}
	}
</script>

<style lang="scss">
.my-search-container {
  background-color: #c00000;
  height: 50px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.my-search-box {
  height: 36px;
  background-color: #ffffff;
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .placeholder {
    font-size: 15px;
    margin-left: 5px;
  }
}
</style>