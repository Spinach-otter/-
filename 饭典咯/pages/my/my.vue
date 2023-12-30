<template>
  <view>

    <!-- 用户未登录时，显示登录组件 -->
    <my-login v-if="!this.$store.state.isLoggedIn"></my-login>

    <!-- 用户登录后，显示用户信息组件 -->
    <my-userinfo v-else></my-userinfo>

  </view>
</template>

<script>	
	export default {
		data() {
			return {
			};
		},
	}
</script>

<style lang="scss">
</style>
