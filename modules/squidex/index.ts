import { defineNuxtModule, addPlugin, createResolver, addTemplate, addImports, addImportsDir } from '@nuxt/kit'
import fs from "node:fs";
import { Readable } from 'node:stream';
// import openapiTS, { OpenAPI3 } from "openapi-typescript";

//https://github.com/nuxt-modules/apollo/blob/v5/src/module.ts
import { defu } from "defu"
import * as OpenAPI from 'openapi-typescript-codegen';



export interface ModuleOptions {
    baseUrl: string;
    schema: any;
    appId: string;
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
        schema: "",
        appId: ""
    },
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        //Generate types for API
/*         const schema = options?.schema || import(resolve("./schema.json"))

        const output = await openapiTS(schema) */

        /* const typeFilename = "squidex.d.ts";
        addTemplate({
            filename: typeFilename,
            getContents: () => {
                return output
            },
        })

        nuxt.hooks.hook('prepare:types', ({ references }) => {
            references.push({ path: resolve(nuxt.options.buildDir, typeFilename) })
        }) */


        nuxt.options.runtimeConfig.public.squidex = defu(nuxt.options.runtimeConfig.public.squidex, {
            baseUrl: options?.baseUrl,
            appId: options?.appId
        })


        // Generate squidex client with openapi-typescript-codegen        
        /* await OpenAPI.generate({
            input: schema,
            output: "./client",
            clientName: "squidex"
        }) */
        /* await OpenAPI.generate({
            input: schema,
            output: resolve(nuxt.options.buildDir, './squidex-client'),
            clientName: "squidex"
        }) */


        addPlugin(resolve('./runtime/plugins/index'))

        //Add squidex composables
        addImportsDir(resolve('./runtime/composables'))
    }
})




// Public runtimeConfig
/* nuxt.options.runtimeConfig.public.squidex = defu(nuxt.options.runtimeConfig.public.squidex, {
    valami: "dimi"
}) */




        //Generate schema
        //TODO: Ha nincs meg ez a schema az optionsben akkor error hogy nincs meg
/* const output = await openapiTS(options.schema)

// Generating types to be injected
const typeFilename = "squidex.d.ts";
addTemplate({
    filename: typeFilename,
    getContents: () => {
        return output
    },
}) */


        // Injecting previously generated types
/* nuxt.hooks.hook('prepare:types', ({ references }) => {
    references.push({ path: resolve(nuxt.options.buildDir, typeFilename) })
}) */