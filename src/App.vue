<template>
  <!-- <MenuGlobal /> -->
  <main class="container">
    <router-view />
  </main>
</template>

<script>
  import HomeView from "@/views/HomeView.vue";
  import MenuGlobal from "./components/MenuGlobal.vue";
  export default {
  components: {
    MenuGlobal
  },
  methods: {
  },
};
</script>
<style lang="scss">
  @import "../src/assets/style.scss";
</style>
