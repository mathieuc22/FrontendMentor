<template>
    <header>
        <div class="hamburger" @click="isMobileActive = true">
            <img src="../assets/images/icon-menu.svg" alt="hamburger menu">
        </div>
        <img class="logo" alt="Sneakers logo" src="../assets/logo.svg" />
        <nav class="navigation" :class="{ 'navigation--mobile': isMobileActive }">
            <img class="close" alt="icon close" src="../assets/images/icon-close.svg" @click="isMobileActive = false" />
            <ul class="navlist">
                <li class="navlist__item hover-underline">Collections</li>
                <li class="navlist__item hover-underline">Men</li>
                <li class="navlist__item hover-underline">Women</li>
                <li class="navlist__item hover-underline">About</li>
                <li class="navlist__item hover-underline">Contact</li>
            </ul>
        </nav>
        <nav class="authentication">
            <div class="navlist">
                <div class="navlist__cart">
                    <div @click="cart = !cart" class="navlist__item">
                        <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                fill="#69707D" fill-rule="nonzero" />
                        </svg>
                        <span v-if="shoppingCartQuantity" class="items">{{ shoppingCartQuantity }}</span>
                    </div>
                    <Cart v-if="cart" />
                </div>
                <div class="navlist__item">
                    <img class="avatar" src="../assets/images/image-avatar.png" alt="User avatar">
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, computed } from 'vue';
import Cart from './Cart.vue';

import { useStore } from 'vuex'

const store = useStore()
const shoppingCartQuantity = computed(() => store.getters['cart/cartTotalQuantity'])

const cart = ref(false)
const isMobileActive = ref(false)

</script>

<style lang="scss" scoped>
header {
    height: 113px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: $color-neutral-Dark-grayish-blue;
    border-bottom: 1px solid $color-neutral-Grayish-blue;
    padding-bottom: 6px;

    @media screen and (max-width: $mq-max-width) {
        height: 67px;
        border-bottom: none;
        padding-bottom: none;
        padding: 0 24px;
    }

    p {
        margin-left: 1rem;
    }
}

img {
    display: block;
}

.close {
    display: none;
    position: absolute;
    top: 24px;
    left: 24px;
    z-index: 999;

    @media screen and (max-width: $mq-max-width) {
        display: block;
    }
}

.navigation {
    height: 100%;
    margin-left: 2.3rem;

    @media screen and (max-width: $mq-max-width) {
        display: none;
    }

    &--mobile {
        display: block;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        margin-left: unset;
        background: rgba(0, 0, 0, 0.7);
        animation: fade-in 0.2s;
    }

    & .navlist {

        @media screen and (max-width: $mq-max-width) {
            flex-direction: column;
            align-items: baseline;
            justify-content: flex-start;
            background-color: white;
            width: 66%;
            padding-left: 24px;
            padding-top: 95px;
            gap: 23px;
            transform: translateX(-100%);
            animation: slide-in 0.4s 0.2s forwards;
        }

        &__item {

            @media screen and (max-width: $mq-max-width) {
                height: unset;
                font-size: 1.2em;
                font-weight: 700;
                color: $color-neutral-Black;
            }
        }
    }
}

.authentication {
    margin-left: auto;
}

.navlist {
    height: 100%;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.1rem;

    @media screen and (max-width: $mq-max-width) {
        gap: 0.5rem;
    }

    &__cart {
        position: relative;
    }

    &__item {
        position: relative;
        height: 100%;
        display: inline-flex;
        align-items: center;
        cursor: pointer;

        &:hover {
            color: $color-neutral-Black;

            & svg path {
                fill: black;
            }
        }

    }
}

.items {
    position: absolute;
    top: -5px;
    right: -5px;
    color: $color-neutral-White;
    background-color: $color-primary-Orange;
    font-size: 0.65em;
    font-weight: 700;
    width: 17px;
    border-radius: 15px;
    text-align: center;
}

.avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: 2.5px solid transparent;
    margin-left: 10px;

    @media screen and (max-width: $mq-max-width) {
        width: 29px;
        height: 29px;
    }

    &:hover {
        border: 2.5px solid $color-primary-Orange;
    }
}

.hamburger {
    display: none;

    @media screen and (max-width: $mq-max-width) {
        display: block;
        margin-right: 17px;
    }
}

.hover-underline {

    &:after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleY(0) translateX(-50%);
        height: 4px;
        bottom: -6px;
        left: 50%;
        background-color: $color-primary-Orange;
        transition: all 0.2s ease-in-out;
    }

    &:hover:after {
        transform: scaleY(1) translateX(-50%);
    }
}
</style>