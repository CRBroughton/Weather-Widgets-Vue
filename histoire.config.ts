import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  setupFile: '/src/historie.setup.ts',
  plugins: [
    HstVue(),
  ],
})
