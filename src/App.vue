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
import { VITE_APP_CONFIG } from './config';

export default {
  components: {
    Header,
    Navigation,
  },
  setup() {
    document.title = VITE_APP_CONFIG.SiteName;
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
