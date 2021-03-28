export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'www.boblog.com',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['element-ui/lib/theme-chalk/index.css', '@/assets/scss/common.scss', '@/assets/css/iconfont.css'],
    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: 'article-details',
                path: '*',
                component: resolve(__dirname, 'pages/article-detail.vue')
            })
        }
    },
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['@/plugins/element-ui', '@/plugins/axios', '@/plugins/axios-ports', { src: '@/assets/js/iconfont.js', ssr: false }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        transpile: [/^element-ui/]
    }
}
