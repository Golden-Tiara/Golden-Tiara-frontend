<template>
  <div class="pt-8 pb-8 flex items-center justify-center">
    <div class="card-white w-[500px]">
      <div class="flex flex-col">
        <h2 class=" text-2xl text-center font-bold text-gray-800 text-left mb-5">
          เข้าสู่ระบบ
        </h2>
        <form @submit.prevent="submit">
          <div id="input" class="flex flex-col w-full my-5">
            <label for="username" class="text-gray-500 mb-2">หมายเลขบัตรประชาชน</label>
            <input type="text" v-model="formData.national_id" required autocomplete="off" placeholder="โปรดกรอกหมายเลขบัตรประชาชน"
              class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>
          </div>
          <div id="input" class="flex flex-col w-full my-5">
            <label for="password" class="text-gray-500 mb-2">รหัสผ่าน</label>
            <input type="password" v-model="formData.password" required placeholder="โปรดกรอกรหัสผ่าน"
              class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            <p v-if="errorMessage" class="text-red-600 text-sm">{{ errorMessage }}</p>
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



<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = await useAuthStore()
const errorMessage = ref<string | undefined>("")
const formData = reactive({ national_id: "", password: "" })

async function submit() {
  const { data: response, error } = await useMyFetch<any>('auth/login', {
    method: 'POST',
    body: formData
  })
  if (response.value !== null) {
    const { access_token, token_type } = response.value
    if (access_token !== "") {
      auth.setNewToken(access_token)
      const { data: user, error } = await useMyFetch<any>('auth/me', {
        method: 'POST'
      })

      if (user.value !== null) {
        console.log(user.value);
        let name = user.value["name"];
        let national_id = user.value["national_id"];
        let surname = user.value["surname"];
        let phone_number = user.value["phone_number"];
        let image_path = user.value["image_path"];
        let role = user.value["role"];
        auth.setUser(name, national_id, surname, phone_number,image_path, role);
        console.log(auth.setUser)
        console.log( auth.setNewToken(access_token))
        const preLoginRoute = sessionStorage.getItem('preLoginRoute');

        if (preLoginRoute) {
          navigateTo(preLoginRoute);
          sessionStorage.removeItem('preLoginRoute'); // ลบเส้นทางที่จัดเก็บไว้หลังจากใช้งาน
        } else {
          navigateTo('/');
        }
      } else {
        auth.clear()
        errorMessage.value = "โปรดลองอีกครั้ง"
      }
    }
  } else {
    errorMessage.value = error.value?.data.message
  }
}
</script>