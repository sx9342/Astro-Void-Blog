import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/', // 如果部署在子路径需要配置
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind(), react()],
    markdown: {
        shikiConfig: {
          // Choose from Shiki's built-in themes (or add your own)
          // https://shiki.style/themes
          // Alternatively, provide multiple themes
          // See note below for using dual light/dark themes
          themes: {
            light: 'poimandres',
            dark: 'catppuccin-mocha',
          },
        },
      },
    
})
