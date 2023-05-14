import { defineNuxtPlugin } from '#app'
import createClient from 'openapi-fetch';
import type { paths } from '.nuxt/squidex';


export default defineNuxtPlugin((nuxtApp) => {

    const runtimeConfig = useRuntimeConfig()


    const baseUrl = null;


    const contentClient = createClient<paths>({
        baseUrl: baseUrl ?? "https://cloud.squidex.io"
    })

    const graphQLClient = "";



    return {
        provide: {
            squidex: {
                contentClient,
                graphQLClient
            }
        }
    }
})
