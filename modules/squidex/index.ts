import { defineNuxtModule, addPlugin, createResolver, addTemplate, addImports, addImportsDir } from '@nuxt/kit'
import fs from "node:fs";
import { Readable } from 'node:stream';
import openapiTS, { OpenAPI3 } from "openapi-typescript";

//https://github.com/nuxt-modules/apollo/blob/v5/src/module.ts
import { defu } from "defu"
import * as OpenAPI from 'openapi-typescript-codegen';



export interface ModuleOptions {
    baseUrl: string;
    schema: any;
}

export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'squidex',
        configKey: 'squidex',
        compatibility: {
            nuxt: '^3.0.0-rc.8'
        }
    },
    // Default configuration options of the Nuxt module
    defaults: {
        baseUrl: "https://cloud.squidex.io",
        schema: ""
    },
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        //Generate types for API
        console.log(options)



        // Generate squidex client with openapi-typescript-codegen        
        await OpenAPI.generate({
            input: './schema.json',
            output: resolve('./runtime/client'),
            clientName: "squidex"            
        })




        addPlugin(resolve('./runtime/plugins/index'))

        //Add squidex composables
        addImportsDir(resolve('./runtime/composables'))
    }
})
