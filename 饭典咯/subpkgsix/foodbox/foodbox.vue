<template>
	
  <view class="container">
	<view class="banner">
		<view class="mian"></view>
		<view class="banner-t">
			<text class="banner-text">今天吃什么</text>
		</view>
		<view class="mian"></view>
	</view>
 <!-- 开盲盒按钮 -->
		 <view class="button-container">
		   <button class="open-button" @click="openBox">开启盲盒</button>
		 </view>
    <!-- 盲盒 -->
		
	  <!--结果展示-->
	  <!--遮面罩-->
	  <view class="dialog" v-show="showResultBkg">
		<view class="dialog-text" v-show="showResultText">
			
		<image class="foodphoto" :src="resultText.dishesPhoto" mode="aspectFill"></image>
		  <view class="name">{{resultText.dishesName}}</view>
		  <view class="loca">{{resultText.dishesNum}}食{{resultText.dishesFloor}}楼{{resultText.dishesShop}}</view>
		 </view>
		<button class="close-button" @click="closeDialog">X</button>
	  </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
	  dialogbkgsrc:"https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E5%85%89.gif",
	  dialogopening:"https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E5%85%89.gif",
	  dialogopenfinish:"https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E8%8F%9C%E5%8D%95.png",
	  showResultBkg: false, // 是否显示抽中盲盒的提示
	  showResultText:false,
      resultText: {} // 抽中盲盒的提示文字
    };
  },
  methods: {
    // 开启盲盒按钮点击事件
    openBox() {
		var that=this;
		this.showResultBkg=true;
		this.dialogbkgsrc=this.dialogopening;
		setTimeout(function(){
        uni.request({
    	url:'http://localhost:8080/getRandomFood/',
    	method:'GET',
    	success: (res) => {
				that.resultText=res.data;
				that.showResultText=true;
				that.dialogbkgsrc=that.dialogopenfinish;
		},
    	fail() {
    		uni.showToast(
    		{
    		  title: '请重新尝试',
    		  icon: 'fail'
    		})
    	}
    });
   },2000);
   },
	closeDialog(){
		this.showResultText=false;
		this.showResultBkg=false;
	}
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: "阿里妈妈刀隶体 Regular";font-weight: 400;src: url("//at.alicdn.com/wf/webfont/vJMiES2UAeVe/TxIjZW9ri2TA.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/vJMiES2UAeVe/qQAuYBLRjMj1.woff") format("woff");
  font-display: swap;
}

.container {
 height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
 background-image: url('https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E8%83%8C%E6%99%AF.gif');
  background-size:100% 100%;
  }
.mian{
	float: left;
	width: 150rpx;
	height: 150rpx;
	background-image: url('https://s3.bmp.ovh/imgs/2024/04/08/2449e19365f04fa2.png');
	background-size: 100% 100%;
}

.banner {
  width: 100%; /* 设置横幅宽度 */
  height: 160rpx;
  background: linear-gradient(to right, #ff0000, #cc0000); /* 设置红色渐变背景 */
  margin-top: 10rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative; /* 设置相对定位 */
  border-radius: 13%;
}

/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */

.banner-t{
	  border: #fff 1rpx solid;
	  padding: 0 8rpx;
	  margin: 0 10rpx;
}

.banner-text {
  font-family: "阿里妈妈刀隶体 Regular";
  font-size: 33px;
  color: #fff; /* 设置文字颜色为白色 */
  border: #fff 1rpx solid;
  padding:13rpx 0rpx;
  margin: 0 6rpx;
  letter-spacing: 1rpx;
}

.button-container {
    position: fixed;
	bottom: 3%;
}

.open-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300rpx;
  height: 90rpx;
  background-color: #ff0000; // 红色
  color: #fff;
  border: none;
  border-radius: 8rpx;
  font-family: "阿里妈妈刀隶体 Regular";
  font-size: 45rpx;
  letter-spacing: 12rpx;
  &:hover {
    background-color: #cc0000; // 深红色
  }
}
  .dialog {
	position: fixed;
	top: 0;
	left: 0;
/* 	background-image: url("https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%8A%BD%E5%A5%96%E4%B8%AD.gif"); */
	background-image: url("https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E6%97%A0%E5%85%89.gif");
	background-size: 100% 100%;
	width: 100%;
	height: 100%;
    z-index: 1000; // 确保弹窗在遮罩上面
    text-align: center;
	.dialog-text{
	
		width: 100%;
		height: 100%;
		background-image: url("https://lsy-pictures-1318433651.cos.ap-shanghai.myqcloud.com/%E8%8F%9C%E5%8D%95.png");
		background-size: 100% 100%;
	}
	.caidan{
		position: absolute;
		width: 100%;
		height: 100%;
	}
	.loca{
		font-family: 'Times New Roman', Times, serif;
		font-size: 40rpx;
		color:  #ec3456; 
		font-weight: 700;
		border-bottom: #ec3456 8rpx solid;
	}
	.name{
		margin:20rpx ;
		font-family: 'Times New Roman', Times, serif;
		font-size: 65rpx;
		font-weight: 700;
		color: #ea501a; // 白色文字
		border-bottom: #ec3456 8rpx solid;
		
	}
		.foodphoto{
			margin-top:50% ;
			width: 480rpx;
			height: 400rpx;
			border: #ec3456 15rpx solid;
		}
    
		.close-button {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  position: fixed;
		  top: 0;
		  right: 0;
		  width: 25rpx;
		  height:50rpx;
		  background-color: rgba(0, 0, 0, 0.8); // 白色背景
		  color: red; // 红色文字
		  border: none;
		  border-radius: 100%;
		  font-size: 40rpx;
		  letter-spacing: 10rpx;
		}
	}
</style>

