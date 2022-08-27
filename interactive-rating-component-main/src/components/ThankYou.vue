<template>
    <div class="card card--centered">
        <img src="../assets/illustration-thank-you.svg" alt="">
        <div class="card__selection">
            You selected
            {{value}} out of 5
        </div>
        <h1 class="card__title">
            Thank you!
        </h1>
        <p class="card__description">
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
            touch!
        </p>
    </div>
</template>

<script setup>

const props = defineProps({
    value: Number
})

</script>