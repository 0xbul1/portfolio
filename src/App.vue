<template>
  <Header />
  <div class="App">
    <router-view></router-view>
  </div>
</template>
<script>
import Header from './components/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>
<style></style>
