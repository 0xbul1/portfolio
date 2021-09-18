<template>
  <transition name="vite-bounce">
    <Header :dimensions="dimensions" v-if="showHeader" />
  </transition>
  <div class="App">
    <router-view :dimensions="dimensions"></router-view>
  </div>
  <Navigation />
</template>
<script>
import { gsap } from 'gsap';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
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
    const showHeader = ref(true);
    onMounted(() => {
      window.addEventListener('resize', debouncedHandleResize);
      window.addEventListener('scroll', debounceHandleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', debouncedHandleResize);
      window.removeEventListener('scroll', debounceHandleScroll);
    });

    gsap.to('body', 0, { css: { visibility: 'visible' } });

    const debouncedHandleResize = debounce(() => {
      dimensions.height = window.innerHeight;
      dimensions.width = window.innerWidth;
    }, 1000);

    const debounceHandleScroll = debounce(() => {
      const heightY = document.documentElement.scrollTop;
      if (heightY < 100) {
        showHeader.value = true;
      } else {
        showHeader.value = false;
      }
    }, 100);

    return {
      dimensions,
      showHeader,
    };
  },
};
</script>
<style>
/* scroll css animation */
.vite-bounce-enter-active {
  animation: vite-bounce-in 0.5s;
}
.vite-bounce-leave-active {
  animation: vite-bounce-in 0.3s reverse;
}
@keyframes vite-bounce-in {
  0% {
    transform: scaleY(0);
  }
  50% {
    transform: scaleY(1.05);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
