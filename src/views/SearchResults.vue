<template>
  <div class="search-results-container">
    <search-bar></search-bar>
    <div class="results-container" v-if="searchResults.length">
      <h1>搜尋結果</h1>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <h2 class="result-title">{{ result.text }}</h2>
          <p class="result-detail">集數：{{ result.episode }}</p>
          <p class="result-detail">時間：{{ formatTime(result.start_time) }}</p>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>沒有找到任何結果。</p>
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  components: {
    SearchBar,
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResults;
    },
  },
  methods: {
    formatTime(timeString) {
      const parts = timeString.split(":");
      if (parts.length >= 3) {
        return `${parts[1]}:${parts[2].split(",")[0]}`;
      }
      return timeString;
    },
  },
};
</script>

<style scoped>
.search-results-container {
  margin-top: 20px;
}

/* 搜尋結果4字 */
.results-container h1 {
  font-size: 24px;
  margin-bottom: 10px;
  padding: 20px 0px 5px;
  /* text-align: left; */
}

.results-container ul {
  list-style: none;
  padding: 0;
  margin-bottom: 60px; /* 留出足夠空間給底部欄 */
  max-height: calc(100vh - 280px); /* 設定最大高度為視窗高度減去上下空間 */
  overflow-y: auto; /* 允許垂直滾動 */
}

.results-container li {
  font-size: 18px;
  margin-bottom: 5px;
  padding: 10px 0;
  /* border-bottom: 1px solid #ccc; */
}

.result-title {
  font-size: 20px;
  font-weight: bold;
  /* text-align: left; */
}

.result-detail {
  font-size: 16px;
  /* margin-left: 20px; */
  /* text-align: left; */
}
</style>
