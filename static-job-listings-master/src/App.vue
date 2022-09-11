<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import JobList from './components/JobList.vue';
</script>

<template>
  <header></header>
  <main>
    <JobList />
  </main>
</template>

<style lang="scss">
#app {
  position: relative;
}

header {
  height: 156px;
  width: 100%;
  background-color: $color-primary-Desaturated-Dark-Cyan;
  background-image: url(../src/assets/images/bg-header-desktop.svg);
  background-position: center top;
  background-size: 100% 100%;
}

main {
  position: relative;
  margin: auto;
  width: 77.1%;

  @media screen and (max-width: $mq-max-width) {
    width: 85%;
  }
}
</style>
