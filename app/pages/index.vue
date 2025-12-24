<script setup>
const carouselItems = [
    'dj.jpg',
    'soundsystem.jpg',
    'volk1.jpg',
    'volk2.jpg',
    'https://picsum.photos/800/600?random=1'
]
</script>

<template>
    <div class="relative">
        <div class="top-8 left-8 absolute flex flex-col gap-4 w-2/3">
            <h1 class="text-lg md:text-6xl font-bold text-neutral-200 uppercase">{{ $t('home.title') }}</h1>
            <ULink to="#about" class="mr-auto flex text-neutral-400 hover:text-neutral-200">
                <UIcon name="material-symbols:location-on" class="size-8" />
                <span class="ml-2 max-w-1/2 md:text-2xl font-bold">Voetweg 48, 9000 Gent</span>
            </ULink>
        </div>
        
        <NuxtImg src="hero.jpg" class="rounded-lg" />
    </div>
    
    <UCarousel ref="carousel" v-slot="{ item }" dots loop :items="carouselItems" :ui="{ item: 'basis-1/3' }">
        <img :src="item" class="rounded-lg">
    </UCarousel>
    
    <USeparator class="h-4"/>

    <HomeAboutSection />

    <USeparator class="h-4" />

    <h2 id="drinks" class="text-3xl font-bold">{{$t('navigation.drinks')}}</h2>

    <UEmpty title="No drinks found" class="w-full h-[1200px]"/>
</template>

<style lang="scss">

</style>