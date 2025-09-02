<script setup>
const carouselItems = [
    'https://picsum.photos/640/640?random=1',
    'https://picsum.photos/640/640?random=2',
    'https://picsum.photos/640/640?random=3',
    'https://picsum.photos/640/640?random=4',
    'https://picsum.photos/640/640?random=5'
]
</script>

<template>
    <UContainer>
        <div class="relative">
            <div class="top-8 left-8 absolute flex flex-col gap-4 w-2/3">
                <h1 class="text-lg md:text-6xl font-bold text-neutral-200 uppercase">Eigenzinnig cafeetje met optredens, tuinterras en democratische prijzen</h1>
                <ULink to="#about" class="mr-auto flex text-neutral-400 hover:text-neutral-200">
                    <UIcon name="material-symbols:location-on" class="size-8" />
                    <span class="ml-2 max-w-1/2 md:text-2xl font-bold">Voetweg 48, 9000 Gent</span>
                </ULink>
            </div>
            
            <NuxtImg src="hero.jpg" class="rounded-lg" />
        </div>
        
        <UCarousel ref="carousel" v-slot="{ item }" dots loop :items="carouselItems" :ui="{ item: 'basis-1/3' }" class="mt-4 mb-4">
            <img :src="item" class="rounded-lg">
        </UCarousel>
        
        <USeparator class="h-16"/>

            <h2 id="about" class="text-3xl font-bold">Over ons</h2>
            
            <div class="md:flex gap-16 text-justify">
                <div>
                    <p class="mt-4 md:text-lg">
                        Welkom bij Molotov, waar elke avond een avontuur wacht om zich te ontvouwen.
                        Gelegen in het hart van Gent zijn we niet zomaar een bar.
                        We zijn een toevluchtsoord voor mensen die op zoek zijn naar iets anders.
                    </p>

                    <p class="mt-4 md:text-lg">
                        Wij zijn van mening dat aan goede tijden geen hoog prijskaartje mag hangen.
                        Daarom zijn we er trots op dat we democratische prijzen kunnen aanbieden die
                        kwaliteitsdranken en entertainment voor iedereen toegankelijk maken.
                        Of je nu een student met een beperkt budget bent of een doorgewinterde connaisseur,
                        op onze drankkaart vind je iets om van te houden zonder veel geld uit te geven.
                    </p>

                    <div class="mt-4 flex flex-col gap-4">
                        <ULink to="https://www.facebook.com/molotov.cafe/" class="mr-auto flex">
                            <UIcon name="i-simple-icons-facebook" class="size-6" />
                            <span class="ml-2">Café Molotov</span>
                        </ULink>

                        <ULink to="https://www.instagram.com/molotovgent/" class="mr-auto flex">
                            <UIcon name="i-simple-icons-instagram" class="size-6" />
                            <span class="ml-2">@molotovgent</span>
                        </ULink>

                        <ULink to="mailto:info@cafemolotov.be" class="mr-auto flex">
                            <UIcon name="i-simple-icons-gmail" class="size-6" />
                            <span class="ml-2">info@cafemolotov.be</span>
                        </ULink>
                    </div>
                </div>

                <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDssO3AfU9RluJ4EW7PzjkBJ2yDka6DUrU&q=Café+MOLOTOV" class="mt-4 max-w-full shrink-0"></iframe>
            </div>

        <USeparator class="h-16" />

            <h2 id="drinks" class="text-3xl font-bold">Dranken</h2>
    </UContainer>
</template>

<style lang="scss">

</style>