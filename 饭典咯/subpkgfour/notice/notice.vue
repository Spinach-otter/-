<template>
  <view class="notice">
    <view class="poster">
      <image :src="poster" class="poster-image"></image>
    </view>
    <view class="title">{{ title }}</view>
    <view class="content">{{ content }}</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      notice_id: '',
      title: '',
      content: '',
      poster: '',
    };
  },
  onLoad(options) {
    this.notice_id = options.notice_id;
    uni.request({
      url: 'http://localhost:8080/notice/info/',
      method: 'GET',
      data: { id: this.notice_id },
      success: (res) => {
        console.log(res);
        this.title = res.data.title;
        this.content = res.data.content;
        this.poster = res.data.poster;
      },
      fail() {
        console.log('fail connect');
      },
    });
  },
};
</script>

<style lang="scss">
.notice {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加一个轻微的阴影效果 */
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333; /* 使用深一些的颜色 */
  text-align: center;
}

.content {
  font-size: 16px;
  line-height: 1.6;
  color: #666; /* 更浅的文字颜色 */
}

.poster {
  margin-bottom: 20px; /* 海报与标题之间的间距 */
  border-radius: 10px; /* 圆角边框 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.poster-image {
  width: 100%; /* 确保图像填满容器 */
  border-radius: 10px; /* 图像圆角 */
}
</style>
