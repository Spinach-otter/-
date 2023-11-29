<template>
	<view class="search-box">
	  <!-- 使用 uni-ui 提供的搜索组件 -->
	  <uni-search-bar @input="input" :radius="100" cancelButton="none"></uni-search-bar>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods: {
		  input(e) {
		    // e.value 是最新的搜索内容
		    console.log(e.value)
		  }
		}
	}
</script>

<style lang="scss">
.uni-searchbar {
  /* #ifndef APP-NVUE */
  display: flex;
  /* #endif */
  flex-direction: row;
  position: relative;
  padding: 16rpx;
  /* 将默认的 #FFFFFF 改为 #C00000 */
  background-color: #c00000;
}

.search-box {
  position: sticky;
  top: 0;
  z-index: 999;
}

</style>
