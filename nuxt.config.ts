
import schema from "./schema.json"


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    modules: [
        '@nuxtjs/tailwindcss'
    ],

    devtools: {
        enabled: true
    },


    squidex: {
        schema,
        baseUrl: "https://cloud.squidex.io"
    }


})