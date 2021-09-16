<template>
  <IntroOverlay v-if="animationComplete === false" />
  <Banner />
  <Cases />
</template>

<script>
import { ref, watch, toRef, onMounted } from 'vue';
import { homeAnimation } from '../animations';
import IntroOverlay from '../components/IntroOverlay.vue';
import Banner from '../components/Banner.vue';
import Cases from '../components/Cases.vue';

export default {
  name: 'Home',
  components: {
    IntroOverlay,
    Banner,
    Cases,
  },
  props: {
    dimensions: Object,
  },
  setup(props) {
    const animationComplete = ref(false);
    const completeAnimation = () => {
      animationComplete.value = true;
    };
    onMounted(() => {
      completeAnimation();
    });
    homeAnimation(completeAnimation);
    const vh = props.dimensions.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    return {
      animationComplete,
    };
  },
};
</script>

<style></style>
