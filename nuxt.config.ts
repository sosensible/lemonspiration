// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/test-utils',
    '@nuxt/icon',
    '@nuxt/scripts'
  ],

  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3000/api',
      ynab: {
        apiKey: process.env.YNAB_ACCESS_TOKEN || '',
        clientId: process.env.YNAB_CLIENT_ID || '',
        clientSecret: process.env.YNAB_CLIENT_SECRET || '',
        redirectUri: process.env.YNAB_REDIRECT_URI || '',
      }
    },
    
    devServer: {
      https: {
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
      }
    },
  },
})