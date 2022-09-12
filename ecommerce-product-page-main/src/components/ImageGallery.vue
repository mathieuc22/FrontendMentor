<template>

  <div class="gallery">
    <div @click="lightbox = true" class="gallery__image">
      <img :src="`img/${photos[selected].fullsize}`" alt="Product image">
      <button class="btn btn--round btn--prev" @click="selected > 0 ? selected-- : selected = photos.length - 1">
        <img src="../assets/images/icon-previous.svg" alt="icon previous">
      </button>
      <button class="btn btn--round btn--next" @click="selected < photos.length - 1 ? selected++ : selected = 0">
        <img src="../assets/images/icon-next.svg" alt="icon next">
      </button>
    </div>
    <ul class="gallery__thumbnails">
      <li v-for="(photo, index) in photos" :key="index" class="gallery__thumbnail" @click="selected = index"
        :class="{ selected: selected === index }">
        <img :src="`img/${photo.thumbnail}`" alt="Product thumbnail">
      </li>
    </ul>
  </div>

  <Lightbox v-if="lightbox" :photos="photos" @close="lightbox = false" />

</template>

<script setup>
import Lightbox from './Lightbox.vue';
import { ref } from 'vue';
defineProps(['photos'])

const selected = ref(0)

const lightbox = ref(false)

</script>

<style lang="scss">
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.333vh;
  height: 100%;
  width: auto;

  @media screen and (max-width: $mq-max-width) {
    width: 100%;
  }

  & img {
    display: block;
    height: 100%;
    width: 100%;
  }

  &__image {
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: relative;
    max-height: 61vh;

    @media screen and (max-width: $mq-max-width) {
      height: 300px;
      width: 100%;
    }

    & img {
      display: block;
      object-fit: cover;
      object-position: top;
      border-radius: 10px;

      @media screen and (max-width: $mq-max-width) {
        border-radius: unset;
      }
    }
  }

  &__thumbnails {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 445px;

    @media screen and (max-width: $mq-max-width) {
      display: none;
    }
  }

  &__thumbnail {
    background-color: $color-neutral-White;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    max-height: 92px;
    max-width: 92px;

    &:hover {
      filter: opacity(0.3);
    }
  }

}

.selected {
  border: 2px solid $color-primary-Orange;

  & img {
    filter: opacity(0.3);
  }
}


.btn {
  display: none;
  position: absolute;
  cursor: pointer;
  border: none;
  background: none;
  width: 9px;
  height: 14px;

  @media screen and (max-width: $mq-max-width) {
    display: flex;
  }

  &--round {
    &::before {
      content: '';
      display: inline-block;
      background-color: $color-neutral-White;
      border-radius: 50%;
      height: 39px;
      width: 39px;
      position: absolute;
      z-index: -1;
    }

    border-radius: 50%;
    align-items: center;
    justify-content: center;
  }

  &--prev {
    left: 36px;
    transform: translateX(-50%);

    &:hover svg path {
      stroke: $color-primary-Orange;
    }
  }

  &--next {
    right: 36px;
    transform: translateX(50%);

    &:hover svg path {
      stroke: $color-primary-Orange;
    }
  }
}
</style>