<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheNavbar from "./components/TheNavbar.vue";

</script>

<template>
  
  <div id="app">

      <the-navbar/>
      <router-view/>
      <the-footer class="the-footer"/>

  </div>

</template>

<style lang="scss" scoped>
.the-footer{
  position: relative;
  bottom: 0;
}
</style>