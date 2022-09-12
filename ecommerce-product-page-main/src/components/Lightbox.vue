<template>


    <div class="modal">
        <div class="gallery">
            <div class="gallery__image">
                <button class="btn btn--close" @click="$emit('close')">
                    <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                            fill="#69707D" fill-rule="evenodd" />
                    </svg>
                </button>
                <img :src="`img/${photos[selected].fullsize}`" alt="Product image">
                <button class="btn btn--round btn--prev"
                    @click="selected > 0 ? selected-- : selected = photos.length - 1">
                    <svg viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </svg>
                </button>
                <button class="btn btn--round btn--next"
                    @click="selected < photos.length - 1 ? selected++ : selected = 0">
                    <svg viewBox="-3 0 17 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                    </svg>
                </button>
            </div>
            <ul class="gallery__thumbnails">
                <li v-for="(photo, index) in photos" :key="index" class="gallery__thumbnail" @click="selected = index"
                    :class="{ selected: selected === index }">
                    <img :src="`img/${photo.thumbnail}`" alt="Product thumbnail">
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
defineProps(['photos'])

const selected = ref(0)

</script>

<style lang="scss" scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    resize: horizontal;

    @media screen and (max-width: $mq-max-width) {
        display: none;
    }
}

.btn {
    position: absolute;
    cursor: pointer;
    border: none;
    background: none;
    display: flex;

    &--close {
        top: -46px;
        right: 0;
        width: 24px;
        height: 24px;

        & svg path {
            fill: $color-neutral-White;
        }

        &:hover svg path {
            fill: $color-primary-Orange;
        }
    }

    &--round {
        width: 18px;
        height: 18px;

        &::before {
            content: '';
            display: inline-block;
            background-color: $color-neutral-White;
            border-radius: 50%;
            height: 56px;
            width: 56px;
            position: absolute;
            z-index: -1;
        }

        border-radius: 50%;
        align-items: center;
        justify-content: center;
    }

    &--prev {
        left: 0;
        transform: translateX(-50%);

        &:hover svg path {
            stroke: $color-primary-Orange;
        }
    }

    &--next {
        right: 0;
        transform: translateX(50%);

        &:hover svg path {
            stroke: $color-primary-Orange;
        }
    }
}
</style>
