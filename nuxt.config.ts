
import schema from "./schema.json"


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({


    modules: [
        '@nuxtjs/tailwindcss',
        "nuxt-graphql-client"
    ],

    devtools: {
        enabled: true
    },


    squidex: {
        schema,
        baseUrl: "https://cloud.squidex.io"
    },


    runtimeConfig: {
        public: {
            GQL_HOST: "https://squidex.zhorna.space/api/content/wolgornn/graphql"
        }
    },


    'graphql-client': {
        watch: true,
        autoImport: true,
        functionPrefix: 'Gql',
        documentPaths: ['./queries'],
        preferGETQueries: false
    }
})