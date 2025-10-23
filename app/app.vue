<script setup lang="ts">
import { nl, en, fr, de } from '@nuxt/ui/locale'
import type { NavigationMenuItem } from '@nuxt/ui'

const locale = ref('nl')
const navItems = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/',
        children: [
            {
                label: 'Over ons',
                icon: 'el:group',
                to: '/#about'
            },
            {
                label: 'Dranken',
                icon: 'lucide-lab:wine-glass-bottle',
                to: '/#drinks'
            },
        ]
    },
    {
        label: 'News',
        icon: 'i-lucide-book-open-text',
        to: '/news',
        children: [
            {
                // Ideally this would be filled up dynamically with the latest few posts.

                label: 'Latest post',
                icon: 'i-lucide-file-text',
                description: 'This description is just an example.',
                to: '/'
            },
            {
                label: 'Molotov krant',
                icon: 'i-lucide-file-text',
                to: '/'
            }
        ]
    },
    {
        label: 'Events',
        icon: 'i-lucide-calendar',
        to: '/events'
    }
])
</script>

<template>
    <UApp>
        <UHeader title="Café Molotov">
            <UNavigationMenu :items="navItems" content-orientation="vertical" />

            <template #right>
                <UColorModeButton />
                <ULocaleSelect v-model="locale" :locales="[nl, en, fr, de]" />
            </template>

            <template #body>
                <UNavigationMenu :items="navItems" orientation="vertical" />
            </template>
        </UHeader>

        <UMain>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </UMain>
    </UApp>
</template>
