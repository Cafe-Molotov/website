<script setup lang="ts">
import type { PageLink } from '@nuxt/ui';

const hours = ref<String[]>([
    "Ma: GESLOTEN",
    "Di: 20u00 - 03u00",
    "Wo: 16u00 - 03u00",
    "Do: 16u00 - 03u00",
    "Vr: 16u00 - 03u00",
    "Za: 20u00 - 03u00",
    "Zo: GESLOTEN (behalve bij speciale gelegenheden)"
])

const links = ref<PageLink[]>([
    {
        label: 'Café Molotov',
        icon: 'i-simple-icons-facebook',
        to: 'https://www.facebook.com/molotov.cafe/',
        target: '_blank'
    },
    {
        label: '@molotovgent',
        icon: 'i-simple-icons-instagram',
        to: 'https://www.instagram.com/molotovgent/',
        target: '_blank'
    },
    {
        label: 'info@cafemolotov.be',
        icon: 'material-symbols:mail',
        to: 'mailto:info@cafemolotov.be'
    }
])
</script>

<template>
    <UPage>
        <UPageBody>
            <slot />
        </UPageBody>

        <template #right>
            <UPageAside>
                <UPageLinks title="Openingsuren" :Links="hours" />
                <ul>
                    <li v-for="item in hours">{{ item }}</li>
                </ul>

                <USeparator class="h-4" />

                <UPageLinks title="Social media" :links="links" />

                <USeparator class="h-4" />

                <UPageLinks title="Upcoming events" />
                <p>Coming soon!™</p>

                <USeparator class="h-4" />

                <UPageLinks title="Latest posts" />
                <p>Coming soon!™</p>
            </UPageAside>
        </template>
    </UPage>
</template>