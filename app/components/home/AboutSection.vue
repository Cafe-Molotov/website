<script setup>

</script>

<template>
    <h2 id="about" class="text-3xl font-bold">{{$t('navigation.about')}}</h2>

    <div class="flex flex-col md:flex-row gap-8">
        <div class="text-justify">
            <p class="md:text-lg">{{ $t('home.about') }}</p>

            <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDssO3AfU9RluJ4EW7PzjkBJ2yDka6DUrU&q=Café+MOLOTOV"
            class="mt-8 max-w-full shrink-0 rounded-lg" />
        </div>

        <NuxtImg src="terras.jpg" width="600" height="450" class="md:max-w-1/2 object-cover rounded-lg" />
    </div>
</template>

<style lang="scss"></style>