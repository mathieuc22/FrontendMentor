<template>

    <Transition name="slide-fade">
        <div v-if="selectedCategories.length" class="filter">
            <ul class="categories">
                <li class="category" v-for="category in selectedCategories">
                    <span class="category__name">{{ category }}</span>
                    <img class="category__remove" @click="removeCategory(category)"
                        src="../../src/assets/images/icon-remove.svg" alt="Remove icon">
                </li>
            </ul>

            <div @click="clear" class="clear">Clear</div>
        </div>
    </Transition>

    <div class="result">
        <ul class="jobs">
            <li class="job" :class="{ featured: job.featured }" v-for="job in filteredJobs" :key="job.id">
                <div class="job__desc">
                    <img class="job__logo" :src="job.logo" alt="">
                    <div class="job__info">
                        <div class="job__company">
                            <span>{{ job.company }}</span>
                            <span v-if="job.new" class="badge">New!</span>
                            <span v-if="job.featured" class="badge badge--dark">Featured</span>
                        </div>
                        <div class="job__position">
                            {{ job.position }}
                        </div>
                        <div class="job__details">
                            <span>{{ job.postedAt }}</span> &#183;
                            <span>{{ job.contract }}</span> &#183;
                            <span>{{ job.location }}</span>
                        </div>
                    </div>
                </div>
                <div class="job__categories">
                    <span class="job__category" @click="addCategory(job.role)">{{ job.role }}</span>
                    <span class="job__category" @click="addCategory(job.level)">{{ job.level }}</span>
                    <span class="job__category" @click="addCategory(language)" v-for="language in job.languages">{{
                            language
                    }}</span>
                    <span class="job__category" @click="addCategory(tool)" v-for="tool in job.tools">{{ tool }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import json from '../assets/data.json'

const selectedCategories = ref([])
const filteredJobs = ref([])

onMounted(() => {
    // init list of jobs
    filteredJobs.value = json
})

function clear() {
    filteredJobs.value = json
    selectedCategories.value = []
}

// recursive filter function based on selected categories array
function filter() {
    // init filtered jobs with all jobs
    filteredJobs.value = json
    // filter based on selected categories
    if (selectedCategories.value.length) {
        selectedCategories.value.forEach(category => {
            filteredJobs.value = filteredJobs.value.filter(job =>
                job.languages.includes(category) ||
                job.tools.includes(category) ||
                job.role === category ||
                job.level === category
            );
        });
    }
}

function addCategory(category) {
    // prevent duplicates
    if (!selectedCategories.value.includes(category)) {
        selectedCategories.value.push(category)
    }
    // refresh list of jobs
    filter()
}

function removeCategory(category) {
    const index = selectedCategories.value.indexOf(category);
    // only splice array when item is found
    if (index > -1) {
        selectedCategories.value.splice(index, 1);
    }
    // refresh list of jobs
    filter()
}

</script>

<style lang="scss" scoped>
.filter {
    width: 100%;
    padding: 20px 40px;
    background-color: $color-neutral-White;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    filter: drop-shadow(0px 10px 10px rgba(91, 164, 164, 0.25));

    @media screen and (max-width: $mq-max-width) {
        position: relative;
        margin-bottom: -50px;
    }
}

.categories {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    font-size: 16.5px;
}

.clear {
    cursor: pointer;
    font-weight: 700;
    font-size: 16.5px;
    color: $color-primary-Desaturated-Dark-Cyan;

    &:hover {
        text-decoration: underline;
    }

}

.category {
    display: inline-flex;
    border-radius: 5px;
    overflow: hidden;

    &__name {
        padding: 8px;
        background-color: $color-neutral-Light-Grayish-Cyan-filter;
        color: $color-primary-Desaturated-Dark-Cyan;
    }

    &__remove {
        cursor: pointer;
        padding: 9px;
        background-color: $color-primary-Desaturated-Dark-Cyan;

        &:hover {
            background-color: $color-neutral-Very-Dark-Grayish-Cyan;
        }
    }
}

.result {
    padding-top: 78px;

    @media screen and (max-width: $mq-max-width) {
        padding-top: 56px;
    }
}

.jobs {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media screen and (max-width: $mq-max-width) {
        gap: 40px;
    }
}

.job {
    position: relative;
    width: 100%;
    padding: 32px 40px;
    background-color: $color-neutral-White;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    filter: drop-shadow(0px 10px 10px rgba(91, 164, 164, 0.25));

    @media screen and (max-width: $mq-max-width) {
        padding: 30px 24px;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }

    &__categories {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
        justify-content: flex-end;

        @media screen and (max-width: $mq-max-width) {
            padding-top: 15px;
            border-top: 2px solid lighten($color: $color-neutral-Dark-Grayish-Cyan, $amount: 35);
            justify-content: flex-start;
        }
    }

    &__category {
        cursor: pointer;
        font-size: 15.6px;
        font-weight: 700;
        padding: 9px;
        border-radius: 5px;
        background-color: $color-neutral-Light-Grayish-Cyan-filter;
        color: $color-primary-Desaturated-Dark-Cyan;

        &:hover {
            background-color: $color-primary-Desaturated-Dark-Cyan;
            color: $color-neutral-White;
        }
    }

    &__desc {
        display: flex;
        gap: 20px;
    }

    &__logo {

        @media screen and (max-width: $mq-max-width) {
            height: 48px;
            width: 48px;
            position: absolute;
            top: 0;
            transform: translateY(-50%);
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        white-space: nowrap;

        @media screen and (max-width: $mq-max-width) {
            gap: 15px;
        }
    }

    &__company {
        font-size: 1.2em;
        font-weight: 700;
        color: $color-primary-Desaturated-Dark-Cyan;
        user-select: none;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &__position {
        font-size: 1.5em;
        font-weight: 700;
        color: $color-neutral-Very-Dark-Grayish-Cyan;
        cursor: pointer;

        @media screen and (max-width: $mq-max-width) {
            font-size: 1.26em;
        }

        &:hover {
            color: $color-primary-Desaturated-Dark-Cyan;
        }
    }

    &__details {
        font-size: 1.2em;
        color: $color-neutral-Dark-Grayish-Cyan;
        display: flex;
        gap: 15px;

        @media screen and (max-width: $mq-max-width) {
            font-size: 1.4em;
        gap: 8px;
        }
    }
}

.badge {
    user-select: none;
    padding: 5px 9px;
    color: $color-neutral-White;
    background-color: $color-primary-Desaturated-Dark-Cyan;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;

    &--dark {
        background-color: $color-neutral-Very-Dark-Grayish-Cyan;
    }
}

.featured {
    padding-left: 35px;
    border-left: 5px solid $color-primary-Desaturated-Dark-Cyan;

    @media screen and (max-width: $mq-max-width) {
        padding-left: 19px;
    }
}

//transitions

.slide-fade-enter-active {
    transition: all 0.25s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-300px);
    opacity: 0;
}
</style>