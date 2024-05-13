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
      const parts = timeString.split(":");
      if (parts.length >= 3) {
        const seconds = parts[2].split(",")[0];
        return `${parts[1]}:${seconds}`;
      }
      return timeString;
    },
  },
};
</script>

<style scoped>
.image-viewer-container {
  padding-top: 20px;
}

.image-viewer-container img {
  width: 100%;
  max-width: 1080px;
}

.image-viewer-container p {
  margin-bottom: 10px;
}

.image-viewer-container .text-title {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
