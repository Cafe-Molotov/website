<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navItems = ref<NavigationMenuItem[]>([
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

  // Social media
  // Language
])
</script>

<template>
  <UApp>
    <UNavigationMenu content-orientation="vertical" :items="navItems" class="w-full justify-center" />
    <NuxtPage />
  </UApp>
</template>
