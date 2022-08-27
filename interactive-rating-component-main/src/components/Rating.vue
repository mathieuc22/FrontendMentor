<template>
  <div v-if="!modal" class="card">
    <div class="dot">
      <img src="../assets/icon-star.svg" alt="">
    </div>
    <h1 class="card__title">
      How did we do?
    </h1>
    <p class="card__description">
      Please let us know how we did with your support request. All feedback is appreciated to help us improve our
      offering!
    </p>
    <form class="card__form" @submit.prevent novalidate>
      <div class="card__rating">
        <RadioInput v-for="n in 5" :modelValue="n" :key="n" v-model="selectedValue">
        </RadioInput>
      </div>
      <button @click="showModal" class="button">
        Submit
      </button>
      <ValidationError v-if="error"></ValidationError>
    </form>
  </div>
  <ThankYou v-if="modal" :value="selectedValue"></ThankYou>

</template>

<script setup>
import { ref } from 'vue';
import RadioInput from './RadioInput.vue';
import ThankYou from './ThankYou.vue';
import ValidationError from './ValidationError.vue';

const modal = ref(false)
const error = ref(false)
const selectedValue = ref('')

function showModal() {
  if (selectedValue.value) {
    modal.value = !modal.value
  } else {
    error.value = !error.value
  }
}

</script>

<style lang="scss">
.card {
  background-color: darken($color: $color-neutral-Dark-Blue, $amount: 3.5);
  height: 415px;
  width: 412px;
  border-radius: 30px;
  padding: 31px 39px 31px 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: unset;
    border-radius: 15px;
  }

  &--centered {
    align-items: center;
    text-align: center;
  }

  &__title {
    margin-top: 10px;
    color: $color-neutral-White;
    font-size: 1.85em;
    font-weight: 700;
    margin-top: 20px;
  }

  &__description {
    margin-bottom: 15px;
    line-height: 23px;
  }

  &__form {
    position: relative;
  }

  &__rating {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  &__selection {
    margin-top: 35px;
    background-color: $color-neutral-Dark-Blue;
    color: $color-primary-Orange;
    border-radius: 25px;
    padding: 6px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.dot {
  background-color: $color-neutral-Dark-Blue;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }

}

.button {
  background-color: $color-primary-Orange;
  color: $color-neutral-White;
  font-family: $font-family-default;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  height: 45px;
  width: 100%;
  border-radius: 25px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $color-neutral-White;
    color: $color-primary-Orange;
  }
}
</style>