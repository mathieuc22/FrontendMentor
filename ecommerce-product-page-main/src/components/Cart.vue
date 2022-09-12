<template>

    <div class="cart">
        <h2 class="cart__title">Cart</h2>
        <div v-if="!products.length" class="cart__content">
            <p>Your cart is empty.</p>
        </div>
        <div class="cart__items" v-else>
            <ul>
                <li class="cart-item" v-for="product in products" :key="product.id">
                    <div class="cart-item__thumbnail">
                        <img :src="`img/${product.photo}`" alt="Product thumbnail">
                    </div>
                    <div class="cart-item__content">
                        <p>
                            {{ product.name }}
                        </p>
                        <p>
                            {{ currency(product.price) }} x {{ product.quantity }} <span class="total">{{ currency(product.price * product.quantity) }}</span>
                        </p>
                    </div>
                    <div class="cart-item__delete" @click="removeProductFromCart( product )">
                        <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                    </div>
                </li>
            </ul>
            <div class="cart__checkout">
                <button class="button">
                    Checkout
                </button>
            </div>
        </div>
    </div>


</template>

<script setup>

import { computed } from 'vue'
import { useStore } from 'vuex'
import { currency } from '../currency'

const store = useStore()
const products = computed(() => store.getters['cart/cartProducts'])
const removeProductFromCart = (item) => store.dispatch('cart/removeProductFromCart', item)

</script>

<style lang="scss" scoped>
.cart {
    height: 250px;
    width: 360px;
    position: absolute;
    z-index: 99;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(110%);
    border-radius: 10px;
    background-color: $color-neutral-White;
    box-shadow: 0px 20px 30px 0px rgb(0 0 0 / 20%);
    cursor: initial;

    @media screen and (max-width: $mq-max-width) {
        position: fixed;
        top: 76px;
        transform: translateX(-50%);
        width: 100%;
        max-width: 360px;
    }

    &__title {
        font-size: 1em;
        color: $color-neutral-Black;
        width: 100%;
        height: 26%;
        padding: 25px;
        border-bottom: 1px solid $color-neutral-Grayish-blue;

    }

    &__content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 74%;
        font-weight: 700;
    }

    &__items {
        position: relative;
        padding: 24px;
        height: 74%;
    }

    &__checkout {
        position:absolute;
        bottom: 0;
        left: 0;
        width: calc(100% - 24px * 2);
        margin: 24px;
    }
}

.cart-item {

    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    font-size: 1.1em;

    &__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    &__thumbnail img {
        display: block;
        width: 50px;
        border-radius: 5px;
    }
}

.total {
    color: $color-neutral-Black;
    font-weight: 700;
}

</style>