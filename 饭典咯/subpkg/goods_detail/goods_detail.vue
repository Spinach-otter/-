<template>
	<view>
		<image :src="dishes_info.dishesPhoto" mode=""></image>
		
		<!-- 商品信息区域 -->
		<view class="goods-info-box">
		  <!-- 商品价格 -->
		  <view class="price">￥{{dishes_info.dishesPrice}}</view>
		  <!-- 信息主体区域 -->
		  <view class="goods-info-body">
		    <!-- 商品名称 -->
		    <view class="goods-name">{{dishes_info.dishesName}}</view>
		    <!-- 收藏 -->
		    <view class="favi" v-if="this.$store.state.isLoggedIn" @click="toggleFavorite">
		      <uni-icons :type="isFavorited ? 'star-filled' : 'star'" size="18" color="gray"></uni-icons>
		      <text>收藏</text>
		    </view>
			<!-- 点评 -->
			<view class="favi" v-if="this.$store.state.isLoggedIn" @click="showCommentInput = true">
			  <uni-icons type="chatbubble" size="18" color="gray"></uni-icons>
			  <text>点评</text>
			</view>
		  </view>
		  
		</view>
		  <!-- 评论输入框 -->
		    <view v-if="showCommentInput">
		      <input v-model="commentText" type="text" placeholder="请输入评论内容">
		      <button @click="submitComment">提交评论</button>
		    </view>
		
		  
		<!-- 评论区 -->
		<view class="remark-body">
		    <!-- 使用 v-for 遍历 remarks 数组 -->
		    <view class="remark-item" v-for="(remark, index) in remarks" :key="index">
		      <image :src="remark.userAvatar" class="avatar"></image>
		      <view class="remark-content">{{ remark.content }}</view>
		    </view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
		  return {
			  dishes_id:'',
			  dishes_info:{},
			  remarks:[],
			  isFavorited: false, // 标识是否已经收藏
			  showCommentInput: false, // 控制评论输入框的显示
			  commentText: '', // 用户填写的评论内容
		  };
		},
		onLoad(options) {
		  // 获取商品 Id
		  this.dishes_id = options.dishesId;
		  // 调用请求商品详情数据的方法
		  //this.getGoodsDetail(goods_id)
		  this.fresh();
		  // 检查用户是否已经收藏该商品
		this.checkIfFavorited();
		},
		methods:{
			fresh() {
				showCommentInput:false;
				uni.request({
					url:'http://localhost:8080/dish/info/',
					method:'GET',
							data:{id:this.dishes_id},
					success: (res) => {
						console.log(res);
						this.dishes_info=res.data;
					},
					fail() {
						console.log("fail connect");
					}
				})
				uni.request({
					url:'http://localhost:8080/marks/',
					method:'GET',
					data:{id:this.dishes_id},
					success: (res) => {
						console.log(res);
						this.remarks=res.data;
					},
					fail() {
						console.log("fail connect");
					}
				})
			},
			checkIfFavorited() {
				if(!this.$store.state.isLoggedIn) return;
			      // 假设你有一个 API 来检查用户是否已经收藏了商品
			      uni.request({
			        url: 'http://localhost:8080/checkFavorite/',
			        method: 'GET',
			        data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
			        success: (res) => {
			          this.isFavorited = res.data; // 根据后端返回的结果更新收藏状态
			        },
			        fail() {
			          console.log("fail connect");
			        }
			      });
			    },
			 toggleFavorite() {
			      // 点击收藏按钮时触发的方法
			      // 根据收藏状态来进行收藏或取消收藏的操作
			      if (this.isFavorited) {
			        // 取消收藏的逻辑
			        uni.request({
			          url: 'http://localhost:8080/del/likes/',
			          method: 'GET',
			          data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
			          success: (res) => {
			            // this.isFavorited = res.data; // 根据后端返回的结果更新收藏状态
						console.log(res);
			          },
			          fail() {
			            console.log("fail connect");
			          }
			        });
			      } else {
			        // 收藏的逻辑
			        uni.request({
			          url: 'http://localhost:8080/add/likes/',
			          method: 'GET',
			          data: { userName: this.$store.state.userInfo.nickName, dishesId: this.dishes_id },
			          success: (res) => {
			            // this.isFavorited = res.data; // 根据后端返回的结果更新收藏状态
			        	console.log(res);
			          },
			          fail() {
			            console.log("fail connect");
			          }
			        });
			      }
			      
			      // 更新收藏状态
			      this.isFavorited = !this.isFavorited;
			    },
			
			    // 提交评论方法
			    submitComment() {
			      // ... 提交评论的逻辑 ...
				  uni.request({
				    url: 'http://localhost:8080/add/mark/',
				    method: 'GET',
				    data: { 
						userName: this.$store.state.userInfo.nickName, 
						dishesId: this.dishes_id ,
						content:this.commentText,
					},
				    success: (res) => {
				      // this.isFavorited = res.data; // 根据后端返回的结果更新收藏状态
				  	console.log(res);
				    },
				    fail() {
				      console.log("fail connect");
				    }
				  });
				  
				  console.log('提交评论:', this.commentText);
			      
				  this.fresh();
				  // 提交评论后清空评论内容
				  this.commentText = '';
			    },
		}
	}
</script>

<style lang="scss">
image {
  height: 750rpx;
    width: 100%;
}

// 商品信息区域的样式
.goods-info-box {
  padding: 10px;
  padding-right: 0;
  background-color: white;

  .price {
    color: #c00000;
    font-size: 18px;
    margin: 10px 0;
  }

  .goods-info-body {
    display: flex;
    justify-content: space-between;

    .goods-name {
      font-size: 20px;
      padding-right: 10px;
    }
    // 收藏区域
    .favi {
      width: 80px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-left: 1px solid #efefef;
      color: gray;
    }
	
  }
}

uni-popup {
  background-color: #ffffff;
  width: 100%;
}

input {
  width: 80%;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  display: block;
  width: 50%;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

.remark-body {
	margin-top: 5px;
	margin-left: 5px;
	margin-right: 5px;
	
	.remark-item{
		height: 80px;
		background-color: white;
		border-radius: 10px;
		display: flex;
		margin-bottom: 5px;
		
		.avatar{
			margin-top: 15px;
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-right: 10px;
			margin-left: 5px;
		}
		.remark-content{
			line-height: 80px;
			
		}
	}
}
</style>
