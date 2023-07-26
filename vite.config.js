import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [

    UnoCSS({

      // NOTE: Uncomment to try the custom element
      // mode: 'shadow-dom',
      extractors: [extractorSvelte()]
    }),
    svelte()
  ],
})
