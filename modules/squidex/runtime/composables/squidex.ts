//TODO:
// - AUTO része a modulnak






/* 

const baseUrl = "https://squidex.zhorna.space"


const contentClient = reactive(createClient<paths>({
    baseUrl: baseUrl || "https://squidex.zhorna.space"
}))



const graphQLClient = "";
 */


/* 
const _client2 = ref((() => {


    console.log("Creating SQUIDEX Client")




    return createClient<paths>({
        baseUrl: "https://squidex.zhorna.space"
    })
})()) */




export { useSquidexUtils } from "./utils"




export const useSquidexGraphQL = () => {
    const app = useNuxtApp()


    return app.$squidex.graphQLClient
}


/* 
TODO: Beállítani lehessen itt dolgokat TOKEN-t pl
*/

export const useSquidexClient = () => {
    const nuxtApp = useNuxtApp()

    return nuxtApp.$squidex.contentClient
}