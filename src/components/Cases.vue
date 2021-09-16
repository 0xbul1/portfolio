<template>
  <section class="cases">
    <div class="container-fluid">
      <div class="cases-navigation">
        <div class="cases-arrow prev disabled">
          <CasesPrev />
        </div>
        <div class="cases-arrow next">
          <CasesNext />
        </div>
      </div>
      <div class="row">
        <div class="case" v-for="caseItem in caseStudies" :key="caseItem.id">
          <div class="case-details">
            <span>{{ caseItem.subtitle }}</span>
            <h2>{{ caseItem.title }}</h2>
          </div>
          <div class="case-image">
            <img :src="dynamicImport(caseItem.img)" :alt="caseItem.title" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CasesPrev from '../assets/arrow-left.svg';
import CasesNext from '../assets/arrow-right.svg';
export default {
  name: 'Cases',
  components: {
    CasesPrev,
    CasesNext,
  },
  setup() {
    const caseStudies = [
      {
        id: 1,
        subtitle: 'Curology',
        title: 'A custom formula for your skin’s unique needs',
        img: 'img1',
      },
      {
        id: 2,
        subtitle: 'Yourspace',
        title: 'Open space floor plans for you next venture',
        img: 'img2',
      },
      {
        id: 3,
        subtitle: 'Lumin',
        title: 'For your best look ever',
        img: 'img3',
      },
    ];
    const dynamicImport = (name) => {
      return new URL(`../assets/${name}.png`, import.meta.url).href;
    };
    return {
      caseStudies,
      dynamicImport,
    };
  },
};
</script>

<style lang="scss" scoped>
.cases {
  height: 50vh;
  height: calc(var(--vh, 1vh) * 50);
  .cases-navigation {
    position: absolute;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 6;
    padding: 32px;
    box-sizing: border-box;
    @include media('<=tablet') {
      display: none;
    }
    .cases-arrow {
      background: rgba(0, 0, 0, 0.4);
      height: 72px;
      width: 72px;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        color: $white;
        height: 28px;
        width: 28px;
      }
      &.disabled {
        opacity: 0.3;
      }
    }
  }
  .row {
    @include media('<=tablet') {
      flex-direction: column;
    }
    .case {
      position: relative;
      background: $black;
      cursor: pointer;
      &:hover {
        .case-image {
          opacity: 0.4;
        }
      }
      .case-details {
        width: 33.3333vw;
        height: 50vh;
        height: calc(var(--vh, 1vh) * 50);
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 32px;
        box-sizing: border-box;
        z-index: 1;
        position: relative;
        @include media('<=tablet') {
          width: 100vw;
        }
        @include media('<=phone') {
          padding: 16px;
        }
        span {
          margin-top: 156px;
          font-size: 1.6rem;
          opacity: 0.8;
          color: $white;
          font-weight: 600;
          @include media('<=desktop', '>tablet') {
            font-size: 1.4rem;
          }
          @include media('<=phone') {
            font-size: 1.2rem;
            line-height: 2.2rem;
          }
        }
        h2 {
          font-size: 2.4rem;
          line-height: 3.4rem;
          width: 85%;
          margin-top: 16px;
          color: $white;
          @include media('<=desktop', '>tablet') {
            font-size: 2rem;
            line-height: 2.4rem;
          }
          @include media('<=phone') {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 8px;
          }
        }
      }
      .case-image {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        opacity: 0.65;
        transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
