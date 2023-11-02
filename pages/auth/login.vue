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
            <p v-if="errorMessage.national_id" class="text-red-600 text-sm">{{ errorMessage.national_id }}</p>
          </div>
          <div id="input" class="flex flex-col w-full my-5">
            <label for="password" class="text-gray-500 mb-2">รหัสผ่าน</label>
            <input type="password" v-model="formData.password" required placeholder="โปรดกรอกรหัสผ่าน"
              class="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg" />
            <p v-if="errorMessage.password" class="text-red-600 text-sm">{{ errorMessage.password }}</p>
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
import axios from "axios";
const auth = useAuthStore();

const formData = reactive({
  national_id: "",
  password: "",
});

const errorMessage = reactive({
  national_id: "",
  password: "",
});


async function submit() {
  errorMessage.national_id = "";
  errorMessage.password = "";

  if (!formData.national_id) {
    errorMessage.national_id = "national_id is required.";
  }
  if (!formData.password) {
    errorMessage.password = "Password is required.";
  }

  if (errorMessage.national_id || errorMessage.password) {
    return;
  }


  const { data: response, error } = await axios.post('http://localhost/api/auth/login', formData);

  console.log(response)

  if (error) {
    console.log(error.value.data["message"]);
    errorMessage.password = error.value.data["message"];
    return;
  }
  if (response !== null) {

    const { data: response2, error2 } = await axios.post('http://localhost/api/auth/me', {}, {
      headers: {
        Authorization: 'Bearer ' + response.access_token

      }
    });

    const user = response2;
    console.log(user)
    if (user) {
      let national_id = user["national_id"];
      let name = user["name"];
      let surname = user["surname"];
      let phone_number = user["phone_number"];

      console.log(national_id, name, surname, phone_number)
      auth.setUser(national_id, name, surname, phone_number);
      console.log("Auth user:", auth.user);
        await navigateTo("/");
    }
  }
}
</script>