<template>
  <div class="image-viewer-container">
    <div v-if="imageData">
      <p class="text-title">{{ imageData.text }}</p>
      <img :src="imageData.image_data" alt="Screenshot" />
      <p>{{ imageData.line }}</p>
      <p>集數：{{ imageData.episode }}</p>
      <p>時間：{{ formatTime(imageData.time_info) }}</p>
      <p>（重新整理來獲得同台詞的不同張圖片。）</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageViewer",
  props: ["id"],
  data() {
    return {
      imageData: null,
    };
  },
  mounted() {
    this.fetchImageData();
  },
  methods: {
    fetchImageData() {
      axios
        .get(`https://mygowebapp.azurewebsites.net/id/${this.id}`)
        .then((response) => {
          this.imageData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching image data:", error);
          alert("無法載入圖片資訊。");
        });
    },
    formatTime(timeString) {
      // 假設 timeString 是 "hh:mm:ss,sss" 格式
      const parts = timeString.split(":");
      if (parts.length >= 3) {
        // 只取 "mm:ss" 部分
        const seconds = parts[2].split(",")[0]; // 移除毫秒部分
        return `${parts[1]}:${seconds}`;
      }
      return timeString; // 如果格式不符合預期，返回原始字符串
    },
  },
};
</script>

<style scoped>
.image-viewer-container {
  padding-top: 20px; /* 增加與頂部的間距 */
}

.image-viewer-container img {
  width: 100%;
  max-width: 1080px; /* 調整為適合的最大寬度 */
}

.image-viewer-container p {
  margin-bottom: 10px; /* 統一段落間距 */
}

.image-viewer-container .text-title {
  font-size: 48px; /* 增大字體大小 */
  font-weight: bold; /* 字體加粗 */
  margin-bottom: 20px; /* 增加下方間距，避免與下一行文字太擠 */
}
</style>
