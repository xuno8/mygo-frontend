<template>
  <div class="home flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-4xl font-bold mb-5">搜買夠!!!!!</h1>
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.home {
  margin-top: -72px;
}
</style>
