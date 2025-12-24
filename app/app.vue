<script setup lang="ts">
import { nl, en } from '@nuxt/ui/locale'
import type { NavigationMenuItem } from '@nuxt/ui'

const { locale, setLocale } = useI18n()
const locales = { nl, en }

const navItems = computed<NavigationMenuItem[]>(() => [
    {
        label: 'Home',
        icon: 'i-lucide-house',
        to: '/',
        children: [
            {
                label: $t('navigation.about'),
                icon: 'el:group',
                to: '/#about'
            },
            {
                label: $t('navigation.drinks'),
                icon: 'lucide-lab:wine-glass-bottle',
                to: '/#drinks'
            },
        ]
    },
    {
        label: $t('navigation.events'),
        icon: 'i-lucide-calendar',
        to: '/events'
    },
    {
        label: $t('navigation.news'),
        icon: 'i-lucide-book-open-text',
        to: '/news',
        children: [
            {
                label: 'Posts',
                icon: 'i-lucide-file-text',
                to: '/'
            },
            {
                label: 'Molotov krant',
                icon: 'i-lucide-file-text',
                to: '/'
            }
        ]
    }])
</script>

<template>
    <UApp :locale="locales[locale]">
        <UHeader title="Café Molotov">
            <UNavigationMenu :items="navItems" content-orientation="vertical" />

            <template #right>
                <UColorModeButton />
                <ULocaleSelect :model-value="locale" :locales="Object.values(locales)" @update:model-value="setLocale($event)" />
            </template>

            <template #body>
                <UNavigationMenu :items="navItems" orientation="vertical" />
            </template>
        </UHeader>


        <UMain>
            <UContainer>
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </UContainer>
        </UMain>
    </UApp>
</template>
