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
              <input  v-model="formData.national_id" type="text" name="national_id" id="national_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              <p v-if="errorMessage.national_id" class="text-red-500">{{ errorMessage.national_id }}</p>
            </div>
            <div>
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">รหัสผ่าน</label>
              <input v-model="formData.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              <p v-if="errorMessage.password" class="text-red-500">{{ errorMessage.password }}</p>
            </div>
            <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
              <input v-model="formData.name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              <p v-if="errorMessage.name" class="text-red-500">{{ errorMessage.name }}</p>
            </div>
            <div>
              <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
              <input type="text" name="surname" id="surname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
            </div>
            <div>
              <label for="phoneNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เบอร์โทรศัพท์</label>
              <input v-model="formData.phone_number" type="text" name="phoneNumber" id="phoneNumber" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              <p v-if="errorMessage.phone_number" class="text-red-500">{{ errorMessage.phone_number }}</p>
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
const uploadedFile = ref(null);
function onFileChange(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }
  const randomFileName = Math.random().toString(36).substring(2, 15) + '.' + file.name.split('.').pop();
  formData.image_path = randomFileName;
  uploadedFile.value = file;
}
const formData = reactive({
  national_id: "",
  password: "",
  name: "",
  surname: "",
  phone_number: "",
  image_path: ""
});

const errorMessage = reactive({
  national_id: "",
  password: "",
  name: "",
  surname: "",
  phone_number: "",
  image_path: ""
});
const imagePath = ref("");

async function onSubmit() {
  Object.keys(errorMessage).forEach(key => {
    errorMessage[key] = "";
  });
  let isFormValid = true;
  Object.keys(formData).forEach(key => {
    if (!formData[key]) {
      errorMessage[key] = `${key} is required.`;
      isFormValid = false;
      console.log(errorMessage[key])
      console.log(errorMessage)
    }
  });
  // Validate National ID
  if (formData.national_id.length !== 13) {
    errorMessage.national_id = "หมายเลขบัตรประชาชนต้องมี 13 ตัวอักษร";
    isFormValid = false;
  }

  // Validate Password
  if (formData.password.length < 6) {
    errorMessage.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร";
    isFormValid = false;
  }

  // Validate Phone Number
  if (formData.phone_number.length !== 10) {
    errorMessage.phone_number = "เบอร์โทรศัพท์ต้องมี 10 ตัวอักษร";
    isFormValid = false;
  }
  console.log(formData)
  console.log(isFormValid)
  if (!isFormValid)
    return;
  console.log(formData)
  let registrationData = new FormData();
  Object.keys(formData).forEach(key => {
    registrationData.append(key, formData[key]);
  });
  if (uploadedFile.value) {
    registrationData.append('image', uploadedFile.value, formData.image_path); // ใช้ชื่อไฟล์แบบสุ่มเป็นชื่อไฟล์
  }


  console.log(formData);
  console.error();
  try {
    const { data: response } = await axios.post('http://localhost/api/auth/register', registrationData);
    console.log("Response การลงทะเบียน:", response);
    await navigateTo("/auth/login");

    if (response.success && response.data) {
      imagePath.value = response.data.image_path;
      auth.setUser(name, surname, national_id, phone_number);
      await navigateTo("/auth/login");
    }
    else {
      console.log(response)
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
