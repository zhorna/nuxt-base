import { defineNuxtPlugin } from '#app'
import createClient from 'openapi-fetch';
import type { paths } from '#build/squidex.d.ts';
import { Fetcher } from 'openapi-typescript-fetch'
// import { squidex as SquidexClient } from '#build/squidex-client';


export default defineNuxtPlugin((nuxtApp) => {

    const runtimeConfig = useRuntimeConfig()


    const baseUrl = null;


    /* const contentClient = createClient<paths>({
        baseUrl: baseUrl ?? "https://cloud.squidex.io",
    }) */

/*     const contentClient = Fetcher.for<paths>()


    console.log(runtimeConfig); */
    

    // global configuration
    /* contentClient.configure({
        baseUrl: runtimeConfig.public.squidex.baseUrl ?? 'https://cloud.squidex.io'
    }) */


    /* const contentClient = new SquidexClient({
        BASE: "https://cloud.squidex.io"
    }) */

    
    


    const graphQLClient = "";

    return {
        provide: {
            squidex: {
                // contentClient,
                graphQLClient
            }
        }
    }
})
