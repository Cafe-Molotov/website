<script setup>
definePageMeta({
    layout: 'news'
})

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
    return queryCollection('news').path(route.path).first()
})
</script>

<template>
    <ContentRenderer v-if="page" :value="page" class="text-justify" />
</template>

<style lang="scss">

</style>