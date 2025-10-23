import { defineCollection, defineContentConfig } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        news: defineCollection({
            type: 'page',
            source: 'news/articles/*.md'
        })
    }
})