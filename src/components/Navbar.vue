<template>
  <nav class="bg-transparent fixed top-0 left-0 w-full">
    <div class="container mx-auto px-4 py-4 flex items-center">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo" class="h-10" />
        <!-- <span class="site-title ml-3">搜買夠!!!!!</span> -->
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.site-title {
  font-size: 20px;
  /* color: #333; */
  font-weight: bold;
}
</style>
