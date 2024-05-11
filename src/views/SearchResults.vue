<template>
  <div>
    <search-bar></search-bar>
    <div v-if="searchResults.length">
      <h1>搜尋結果</h1>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          {{ result.text }} - {{ result.episode }} -
          {{ formatTime(result.start_time) }}
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
