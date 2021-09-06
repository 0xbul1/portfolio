<template>
  <IntroOverlay v-if='animationComplete === false' /> 
  <Banner />
  <Cases />
</template>

<script>
import IntroOverlay from "../components/IntroOverlay.vue";
import Banner from "../components/Banner.vue";
import Cases from "../components/Cases.vue";
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    IntroOverlay,
    Banner,
    Cases,
  },
  setup() {
    const animationComplete = ref(false);
    return {
      animationComplete
    }
  }
};
</script>

<style>
</style>
