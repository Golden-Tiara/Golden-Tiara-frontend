// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  
  modules: [
      '@vueuse/motion/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  runtimeConfig: {
    public: {
      apiBaseURL: "http://localhost/api/",
    },
  },


  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true, // ตั้งค่าเป็น true ถ้า token จำเป็น
          // type: 'Bearer' // ไม่จำเป็นถ้าใช้ Bearer
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: {url: '/login', method: 'post'},
          logout: {url: '/logout', method: 'post'},
          user: {url: '/me', method: 'get'}
        },
      }
    }
  }


  
})
