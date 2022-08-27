<template>
    <label :for="modelValue">
        <input type="radio" :id="modelValue" name="rating" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
        <span class="dot">{{ modelValue }}</span>
    </label>
</template>

<script setup>

defineProps(['modelValue'])
defineEmits(['update:modelValue'])

</script>

<style lang="scss" scoped>
input[type="radio"] {
    position: absolute;
    opacity: 0;

    &+.dot {
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        font-weight: 700;
    }

    &:hover+.dot {
        background-color: $color-primary-Orange;
        color: $color-neutral-White;
    }

    &:focus+.dot {
        background-color: $color-primary-Orange;
        color: $color-neutral-White;
    }

    &:checked+.dot {
        background-color: $color-neutral-Light-Grey;
        color: $color-neutral-White;
    }
}
</style>