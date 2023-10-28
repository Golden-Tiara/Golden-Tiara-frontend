<template>
  <section class="bg-gray-50 ">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Golden Tiara
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            สร้างบัญชีผู้ใช้งาน
          </h1>
          <form class="space-y-4 md:space-y-6 " @submit.prevent="onSubmit()" >
            <div>
              <label for="national_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมายเลขบัตรประชาชน</label>
              <input type="text" name="national_id" id="national_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
              <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
              <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="สมชาย" required="">
            </div>
            <div>
              <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
              <input type="text" name="surname" id="surname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ใจดี" required="">
            </div>
            <div>
              <label for="image_path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รูปภาพของคุณ</label>
            <input type="file" name="image_path" id="image_path" @change="onFileChange"
                   class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   required="">
            </div>
            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              มีบัญชีผู้ใช้งานแล้ว? <a href="/auth/login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from "~/stores/useAuthStore";
const auth = useAuthStore();
function onFileChange(event) {
  formData.imageFile = event.target.files[0];
}
const formData = reactive({
  national_id: "",
  password: "",
  name: "",
  surname: "",
  phoneNumber: "",
  image_path: null
});

const errorMessage = reactive({
  national_id: "",
  password: "",
  name: "",
  surname: "",
  phoneNumber: "",
  image_path: ""
});
const imagePath = ref("");

async function onSubmit() {
  console.log(user)
  Object.keys(errorMessage).forEach(key => {
    errorMessage[key] = "";
  });
  let isFormValid = true;
  Object.keys(formData).forEach(key => {
    if (!formData[key]) {
      errorMessage[key] = `${key} is required.`; // "${key} จำเป็นต้องมี."
      isFormValid = false;
    }
  });

  if (!isFormValid)
    return;
  console.log(formData)
  let registrationData = new FormData();
  Object.keys(formData).forEach(key => {
    if (key !== 'image') {
      registrationData.append(key, formData[key]);
    }
  });

  if (formData.image) {
    registrationData.append('image', formData.image);
  }

  try {
    const { data: response } = await axios.post('http://localhost/api/auth/register', registrationData);
    console.log("Response การลงทะเบียน:", response);

    if (response.success && response.data) {
      imagePath.value = response.data.image_path;
      auth.setUser(name, surname, national_id, phone_number);  // อัปเดต store การยืนยันตัวตนตามความต้องการของแอปพลิเคชันของคุณ
      await navigateTo("/login");
    }
  } catch (error) {
    console.error("Error:", error);
    if (error.response && error.response.data) {
      Object.keys(error.response.data.errors).forEach(key => {
        if (errorMessage[key] !== undefined) {
          errorMessage[key] = error.response.data.errors[key].join(", ");
        }
      });
    }
  }
}
</script>
