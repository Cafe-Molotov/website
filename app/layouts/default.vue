<script setup lang="ts">
import type { PageLink } from '@nuxt/ui';

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
    <UPage>
        <UPageBody>
            <slot />
        </UPageBody>

        <template #right>
            <UPageAside>
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
            </UPageAside>
        </template>
    </UPage>
</template>