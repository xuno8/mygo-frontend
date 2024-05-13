<template>
  <div id="app" class="flex flex-col h-screen">
    <Navbar />
    <!-- <main class="flex-grow overflow-hidden"> -->
    <router-view></router-view>
    <!-- </main> -->
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  overflow-y: hidden;
}
#app {
  position: relative;
}
</style>
