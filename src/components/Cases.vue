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
            <img
              :src="require(`../assets/${caseItem.img}.png`)"
              :alt="caseItem.title"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CasesPrev from '../assets/arrow-right.svg';
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
    return {
      caseStudies,
    };
  },
};
</script>

<style></style>
