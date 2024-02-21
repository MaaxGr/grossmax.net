// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    app: {
        head: {
            link: [
                { rel: 'stylesheet', type: 'text/css', href: '/style.css' },
                { rel: 'stylesheet', type: 'text/css', href: '/layout.css' },
            ],
            script: [
            ]
        },
    },
    css: [
        'bootstrap-icons/font/bootstrap-icons.css'
    ],
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        '@nuxt/content'
    ],
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            fallbackLocale: 'en',
            useCookie: false,
            redirectOn: 'root',  // recommended
        },
        vueI18n: './i18n.config.ts'
    },
})
