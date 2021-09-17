<template>
  <Header :dimensions="dimensions" />
  <div class="App">
    <router-view :dimensions="dimensions"></router-view>
  </div>
  <Navigation />
</template>
<script>
import { gsap } from 'gsap';
import { onMounted, onUnmounted, reactive } from 'vue';
import { debounce } from './utils';
import Header from './components/Header.vue';
import Navigation from './components/Navigation.vue';

export default {
  components: {
    Header,
    Navigation,
  },
  setup() {
    const dimensions = reactive({
      height: window.innerHeight,
      width: window.innerWidth,
    });

    onMounted(() => {
      window.addEventListener('resize', debouncedHandleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', debouncedHandleResize);
    });

    gsap.to('body', 0, { css: { visibility: 'visible' } });
    const debouncedHandleResize = debounce(() => {
      dimensions.height = window.innerHeight;
      dimensions.width = window.innerWidth;
    }, 1000);

    return {
      dimensions,
    };
  },
};
</script>
<style></style>
