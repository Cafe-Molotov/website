<script setup>
const { data } = await useAsyncData('navigation', () => {
    return queryCollectionNavigation('news')
})
</script>

<template>
    <UPage>
        <template #left>
            <UPageAside>
                <UContainer>
                    <UContentNavigation :navigation="data" highlight />
                </UContainer>
            </UPageAside>
        </template>
        
        <UPageBody>
            <UContainer>
                <slot />
            </UContainer>
        </UPageBody>

        <template #right />
    </UPage>
</template>

<style lang="scss">

</style>