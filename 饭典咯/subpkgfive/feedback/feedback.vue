<template>
  <view>
    <view class="box">
      <input v-model="recommendation" placeholder="建议" />
      <button @click="sendFeedback">提交</button>
    </view>
    <view class="info" v-for="(item, i) in feedbacks" :key="i">
      {{ item.recommend }}
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      feedbacks: [],
      recommendation: '',
    };
  },
  onLoad() {
    this.fetchFeedbacks();
  },
  methods: {
    fetchFeedbacks() {
      uni.request({
        url: 'http://localhost:8080/feedback/',
        method: 'GET',
        success: (res) => {
          this.feedbacks = res.data;
        },
        fail() {
          console.log('fail connect');
        },
      });
    },
    sendFeedback() {
      const userInfo = this.$store.state.userInfo;
      uni.request({
        url: 'http://localhost:8080/add/feedback/',
        method: 'GET',
        data: {
          userName: userInfo.nickName,
          content: this.recommendation,
        },
        success: (res) => {
          console.log(res);
          this.fetchFeedbacks(); // 更新列表显示最新的反馈
          this.recommendation = ''; // 清空输入框
        },
        fail() {
          console.log('fail connect');
        },
      });
    },
  },
};
</script>

<style lang="scss">
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #f0f0f0;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input {
  flex: 1;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: white;
  font-size: 14px;
}

.info {
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add other styles for the feedback item */
}
</style>
