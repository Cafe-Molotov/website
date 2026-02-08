<script setup lang="ts">
import { nl, en } from '@nuxt/ui/locale'
import type { NavigationMenuItem, PageLink } from '@nuxt/ui'

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
                to: '#about'
            },
            {
                label: $t('navigation.drinks'),
                icon: 'lucide-lab:wine-glass-bottle',
                to: '#drinks'
            },
        ]
    },
    {
        label: $t('navigation.events'),
        icon: 'i-lucide-calendar',
        to: '/events',
        disabled: true
    },
    {
        label: $t('navigation.news'),
        icon: 'i-lucide-book-open-text',
        to: '/news',
        disabled: true,
        children: [
            {
                label: 'Posts',
                icon: 'i-lucide-file-text',
                to: '/news/posts',
                disabled: true
            },
            {
                label: 'Molotov krant',
                icon: 'i-lucide-file-text',
                to: '/news/newspaper',
                disabled: true
            }
        ]
    }])

    const social = ref<PageLink[]>([
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
    <UApp :locale="locales[locale]">
        <UHeader title="Café Molotov">
            <UNavigationMenu :items="navItems" highlight />

            <template #right>
                <UColorModeButton />
                <ULocaleSelect :model-value="locale" :locales="Object.values(locales)" @update:model-value="setLocale($event)" />
            </template>

            <template #body>
                <UNavigationMenu :items="navItems" orientation="vertical" />

                <USeparator class="h-4" />

                <UPageLinks :title="$t('hours.title')" />
                <p>{{ $t('hours.open') }}</p>
                <p>{{ $t('hours.closed') }}</p>

                <USeparator class="h-4" />

                <UPageLinks title="Social media" :links="social" />

                <USeparator class="h-4" />

                <UPageLinks :title="$t('events.title')" />
                <p>Coming soon!™</p>

                <USeparator class="h-4" />

                <UPageLinks :title="$t('posts.title')" />
                <p>Coming soon!™</p>
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
