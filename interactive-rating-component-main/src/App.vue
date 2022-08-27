<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Rating from './components/Rating.vue'
</script>

<template>
  <Rating />
</template>

<style lang="scss">
#app {
  font-family: $font-family-default;
  font-size: $font-size-default;
  font-weight: $font-weight-default;
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
}
</style>
