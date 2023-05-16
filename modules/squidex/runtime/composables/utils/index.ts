










export const useSquidexUtils = () => {
    const app = useNuxtApp()
    const runtimeConfig = useRuntimeConfig()


    const baseUrl = runtimeConfig.public.squidex.baseUrl;
    const appId = "wolgornn"





    function getAssetURL(assetId: string) {
        // `https://squidex.zhorna.space/api/assets/wolgornn/${item.data.image.iv[0]}`

        return `${baseUrl}/api/assets/${appId}/${assetId}`
    }
    
    
    
    
    
    return {
        getAssetURL
    }            
}