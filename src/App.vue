<template>
  <div @click="rerouteToJohnHutchrson">
  <LayoutHeader></LayoutHeader>
  <router-view></router-view>
  </div>
</template>

<script>

import SoundsListPage from "@/pages/sounds-list-page/SoundsListPage.vue";
import LayoutHeader from "@/layout/header/LayoutHeader.vue";

export default {
  name: "app",
  components: {LayoutHeader, SoundsListPage},
  methods: {
    rerouteToJohnHutchrson() {
      const rand = Math.random();
      if ( rand > 0.95){
        this.$router.push('/sus');
      }
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

</style>

