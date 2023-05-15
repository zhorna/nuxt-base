import { defineNuxtModule, addPlugin, createResolver, addTemplate, addImports, addImportsDir } from '@nuxt/kit'
import fs from "node:fs";
import { Readable } from 'node:stream';
import openapiTS, { OpenAPI3 } from "openapi-typescript";

//https://github.com/nuxt-modules/apollo/blob/v5/src/module.ts
import { defu } from "defu"



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



        // Public runtimeConfig
        nuxt.options.runtimeConfig.public.squidex = defu(nuxt.options.runtimeConfig.public.squidex, {
            valami: "dimi"
        })




        //Generate schema
        const output = await openapiTS(options.schema)

        // Generating types to be injected
        const typeFilename = "squidex.d.ts";
        addTemplate({
            filename: typeFilename,
            getContents: () => {
                return output
            },
        })


        // Injecting previously generated types
        nuxt.hooks.hook('prepare:types', ({ references }) => {
            references.push({ path: resolve(nuxt.options.buildDir, typeFilename) })
        })




        // squidexSetup(options.baseUrl)
        //PATHS FOLDER: resolve(nuxt.options.buildDir, typeFilename)

        addPlugin(resolve('./runtime/plugins/plugin'))



        //Add squidex composables
        addImportsDir(resolve('./runtime/composables'))
    }
})
