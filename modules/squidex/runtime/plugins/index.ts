import { defineNuxtPlugin } from '#app'
import createClient from 'openapi-fetch';
import type { paths } from '.nuxt/squidex';
import { Fetcher } from 'openapi-typescript-fetch'
import { squidex as SquidexClient } from '../client';

export default defineNuxtPlugin((nuxtApp) => {

    const runtimeConfig = useRuntimeConfig()


    const baseUrl = null;


    /* const contentClient = createClient<paths>({
        baseUrl: baseUrl ?? "https://cloud.squidex.io",
    }) */

    /* const contentClient = Fetcher.for<paths>()


    // global configuration
    contentClient.configure({
        baseUrl: 'https://cloud.squidex.io'
    }) */


    const contentClient = new SquidexClient({
        BASE: "https://cloud.squidex.io"
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
