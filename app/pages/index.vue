<script setup>
const carouselItems = [
    'terras.jpg',
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5'
]
</script>

<template>
    <UContainer>
        <div>
            <NuxtImg src="hero.jpg" class="rounded-lg" />
        </div>
        
        <UCarousel ref="carousel" v-slot="{ item }" arrows dots loop :items="carouselItems" :ui="{ item: 'basis-1/4' }" class="mt-4 mb-4">
            <img :src="item" class="rounded-lg">
        </UCarousel>
        
        <USeparator class="h-16"/>

        <USeparator class="h-16" />
    </UContainer>
</template>

<style lang="scss">

</style>