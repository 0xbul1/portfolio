<template>
  <div class="header">
    <div class="container">
      <div class="row v-center space-between">
        <div class="logo">
          <a to="/" exact> {{ logoName }} </a>
        </div>
        <div class="nav-toggle">
          <div class="hamburger-menu" @click="menuState.menuOpened = true">
            <span></span>
            <span></span>
          </div>
          <div
            class="hamburger-menu-close"
            @click="menuState.menuOpened = false"
          >
            <UpArrow />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, watch, onMounted } from 'vue';
import { openMenu, closeMenu } from '../animations';
import UpArrow from '../assets/up-arrow-circle.svg';
import { VITE_APP_CONFIG } from '../config';

export default {
  name: 'Header',
  components: {
    UpArrow,
  },
  props: {
    dimensions: {
      type: Object,
    },
  },
  setup(props) {
    const menuState = reactive({
      menuOpened: false,
    });
    onMounted(() => {
      watch(
        () => menuState.menuOpened,
        (status) => {
          if (status === true) {
            openMenu(props.dimensions.width);
          } else {
            closeMenu();
          }
        },
        { immediate: true },
      );
    });

    return {
      menuState,
      logoName: VITE_APP_CONFIG.logoName,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
  @include media('<=phone') {
    height: 96px;
  }
  .logo {
    a {
      font-size: 1.2rem;
      letter-spacing: 0.5rem;
      color: $black;
      text-decoration: none;
      font-weight: 700;
    }
  }
  .nav-toggle {
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    @include media('<=tablet') {
      margin-right: 24px;
    }
    @include media('<=phone') {
      width: 20px;
      margin-right: 16px;
    }

    .hamburger-menu {
      width: 25px;
      span {
        text-align: center;
        margin-bottom: 0.3rem;
        background: $black;
        height: 2px;
        width: 100%;
        display: block;
      }
    }
    .hamburger-menu-close {
      position: absolute;
      display: none;

      svg {
        @include media('<=tablet') {
          width: 56px;
        }
        @include media('<=phone') {
          width: 48px;
        }
      }
    }
  }
}
</style>
