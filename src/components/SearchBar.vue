<template>
  <div class="search-bar w-full max-w-2xl">
    <form
      @submit.prevent="onSearch"
      class="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm"
    >
      <input
        type="text"
        v-model="searchQuery"
        placeholder="春日影..."
        class="flex-grow py-2 text-lg bg-transparent focus:outline-none px-4"
      />
      <button
        type="submit"
        class="search-button flex items-center justify-center p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button
        type="button"
        @click="onRandom"
        class="random-button flex items-center justify-center p-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill-rule="evenodd"
          clip-rule="evenodd"
        >
          <path
            d="M21.67 3.955l-2.825-2.202.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.942-2.292h-4.162c-3.547.043-5.202 3.405-6.913 7.023 1.711 3.617 3.366 6.979 6.913 7.022h4.099l-2.883-2.247.665-.753 4.478 3.497-4.474 3.503-.665-.753 2.884-2.247h-4.11c-3.896-.048-5.784-3.369-7.461-6.858-1.687 3.51-3.592 6.842-7.539 6.858h-2.623v-1h2.621c3.6-.014 5.268-3.387 6.988-7.022-1.72-3.636-3.388-7.009-6.988-7.023h-2.621v-1h2.623c3.947.016 5.852 3.348 7.539 6.858 1.677-3.489 3.565-6.81 7.461-6.858h4.047z"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    async onSearch() {
      if (this.searchQuery.trim() === "") {
        alert("請輸入關鍵字");
        return;
      }
      try {
        const response = await axios.post(
          "https://mygowebapp.azurewebsites.net/search",
          {
            query: this.searchQuery,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data); // 處理響應數據
        // 根據需要更新界面或進行導航
      } catch (error) {
        console.error("ERROR!", error);
        alert("ERROR!!!!!");
      }
    },
    onRandom() {
      alert("此功能開發中...");
    },
  },
};
</script>

<style scoped>
input::placeholder {
  opacity: 1;
}
.search-bar input {
  width: 100%;
}
.random-button {
  padding-right: 16px;
}

input::placeholder {
  opacity: 1;
}
</style>
