<template>
  <view class="my-userinfo-container">

    <!-- 头像昵称区域 -->
    <view class="top-box">
      <image src="../../static/avatar.jpg" class="avatar"></image>
      <view class="nickname">spinach</view>
    </view>


	<!-- 面板的列表区域 -->
	<view class="panel-list">
	  <!-- 第一个面板 -->
	  <view class="panel">
	    <!-- panel 的主体区域 -->
	    <view class="panel-body">
	      <!-- panel 的 item 项 -->
	      <view class="panel-item">
	        <text>14</text>
	        <text>收藏的商品</text>
	      </view>
	      <view class="panel-item">
	        <text>18</text>
	        <text>点评的商品</text>
	      </view>
	    </view>
	  </view>
	
	  <!-- 第二个面板 -->
	
	  <!-- 第三个面板 -->
	  <view class="panel">
	    <view class="panel-list-item">
	      <text>食堂情况反馈</text>
	      <uni-icons type="arrowright" size="15"></uni-icons>
	    </view>
	    <view class="panel-list-item">
	      <text>联系客服</text>
	      <uni-icons type="arrowright" size="15"></uni-icons>
	    </view>
	    <view class="panel-list-item">
	      <text>退出登录</text>
	      <uni-icons type="arrowright" size="15"></uni-icons>
	    </view>
	  </view>
	</view>
	
	<view class="test" v-for="(item,i) in info" :key="i">
		<view class="test-c">
			{{item.content}}
		</view>
		<view class="test-s">
			{{item.num}}
		</view>
	</view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
				info:[],
			};
		},
		onLoad() {
			uni.request({
				url:'http://localhost:8080/test/',
				method:'GET',
				success: (res) => {
					console.log(res);
					this.info=res.data;
				},
				fail() {
					console.log("fail connect");
				}
			})
		}
	}
</script>

<style lang="scss">
.my-userinfo-container {
  height: 100%;
  // 为整个组件的结构添加浅灰色的背景
  background-color: #f4f4f4;

  .top-box {
    height: 400rpx;
    background-color: #c00000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .avatar {
      display: block;
      width: 90px;
      height: 90px;
      border-radius: 45px;
      border: 2px solid white;
      box-shadow: 0 1px 5px black;
    }

    .nickname {
      color: white;
      font-weight: bold;
      font-size: 16px;
      margin-top: 10px;
    }
  }
  
  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;
  
    .panel {
      background-color: white;
      border-radius: 3px;
      margin-bottom: 8px;
  
      .panel-body {
        display: flex;
        justify-content: space-around;
  
        .panel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          font-size: 16px;
          padding: 10px 0;
        }
      }
    }
  }
  
  .panel-list-item {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 0 10px;
  }
}

.test {
	height: 20px;
	background-color: aquamarine;
	display: flex;
	
	.test-c {
		width: 50%;
	}
}
</style>
