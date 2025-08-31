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
            <h1 class="text-4xl font-bold">Eigenzinnig cafeetje met optredens, tuinterras en democratische prijzen</h1>
            <NuxtImg src="hero.jpg" class="rounded-lg" />
        </div>
        
        <UCarousel ref="carousel" v-slot="{ item }" arrows dots loop :items="carouselItems" :ui="{ item: 'basis-1/4' }" class="mt-4 mb-4">
            <img :src="item" class="rounded-lg">
        </UCarousel>
        
        <USeparator class="h-16"/>

            <h2 id="about" class="text-3xl font-bold">Over ons</h2>
            
            <div class="md:flex gap-16">
                <div>
                    <p class="mt-4 text-lg text-jusify">
                        Welkom bij Molotov, waar elke avond een avontuur wacht om zich te ontvouwen.
                        Gelegen in het hart van Gent zijn we niet zomaar een bar.
                        We zijn een toevluchtsoord voor mensen die op zoek zijn naar iets anders.
                    </p>

                    <p class="mt-4 text-lg text-jusify">
                        Wij zijn van mening dat aan goede tijden geen hoog prijskaartje mag hangen.
                        Daarom zijn we er trots op dat we democratische prijzen kunnen aanbieden die
                        kwaliteitsdranken en entertainment voor iedereen toegankelijk maken.
                        Of je nu een student met een beperkt budget bent of een doorgewinterde connaisseur,
                        op onze drankkaart vind je iets om van te houden zonder veel geld uit te geven.
                    </p>
                </div>

                <div class="w-full">
                    <NuxtImg src="vroeger.jpg" class="mt-4 rounded-xs" />
                </div>
            </div>

        <USeparator class="h-16" />

            <h2 id="drinks">Dranken</h2>
    </UContainer>
</template>

<style lang="scss">

</style>