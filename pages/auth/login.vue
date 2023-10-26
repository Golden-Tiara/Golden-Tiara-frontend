<template>
  <div class="pt-8 pb-8 flex items-center justify-center">
    <div class="card-white w-[500px]">
      <div class="flex flex-col">
        <h2 class=" text-2xl text-center font-bold text-gray-800 text-left mb-5">
          เข้าสู่ระบบ
        </h2>
        <form @submit.prevent="onFormSubmit" class="w-full">
          <div id="input" class="flex flex-col w-full my-5">
            <label for="username" class="text-gray-500 mb-2">หมายเลขบัตรประชาชน</label>
            <input type="text" v-model="national_id" required autocomplete="off" placeholder="โปรดกรอกหมายเลขบัตรประชาชน"
              class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
          </div>
          <div id="input" class="flex flex-col w-full my-5">
            <label for="password" class="text-gray-500 mb-2">รหัสผ่าน</label>
            <input type="password" v-model="password" required placeholder="โปรดกรอกรหัสผ่าน"
              class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
          </div>

          <div id="button" class="flex flex-col w-full my-5">
            <button type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              เข้าสู่ระบบ</button>
            <div class="flex justify-evenly mt-5 ">
              <a href="/auth/register" class="w-full text-center underline font-medium text-gray-500">สร้างบัญชีใหม่</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import { useAuthStore } from '~/stores/useAuthStore.ts'
export default {
  setup() {
    const auth_store = useAuthStore()
    return { auth_store }
  },
  data() {
    return {
      national_id: '',
      password: '',
      error: null,
      disabledButton: false,
      auth: null,
      user: null
    }
  },
  watch: {
    auth_store: {
      immediate: true,
      deep: true,
      handler(newValue, oldValue) {
        this.auth = this.auth_store.getAuth
        this.user = JSON.parse(this.auth_store.getUser)
      }
    },
  },
  async mounted() {
    if (typeof window !== 'undefined') {
      const item = localStorage.getItem('key')
    }
    if (this.auth_store.isAuthen) {
      this.$router.push("/");
    }
  },

  methods: {
    async onFormSubmit() {
      this.error = null

      this.disabledButton = true
      try {
        if (await this.auth_store.login(this.national_id, this.password)) {
          this.$router.push('/')

        } else {
          this.disabledButton = false
        }

      } catch (error) {
        console.error(error.response.data)
        this.disabledButton = false
      }
    }
  },
}

</script>