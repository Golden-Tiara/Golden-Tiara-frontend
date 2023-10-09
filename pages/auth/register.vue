<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
        Flowbite
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#" @submit.prevent="submitForm">
            <!-- Step 1: Email and Password -->
            <div v-if="currentStep === 1">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
              </div>
              <div>
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              </div>
              <button type="button" @click="nextStep" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Next</button>
            </div>

            <!-- Step 2: Additional Information -->
            <div v-if="currentStep === 2">
              <!-- Add fields for national_id, name, surname, phone_number, and image_path here -->
              <div>
                <label for="national_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">เลขบัตรประจำตัวประชาชน</label>
                <input type="text" name="national_id" id="national_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="">
              </div>
              <div>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ชื่อ</label>
                <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="">
              </div>
              <div>
                <label for="surname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">นามสกุล</label>
                <input type="text" name="surname" id="surname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required="">
              </div>
              <div>
                <label for="phone_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">หมายเลขโทรศัพท์มือถือ</label>
                <input type="tel" name="phone_number" id="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-456-7890" required="">
              </div>
              <div>
                <label for="image-path" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Image</label>
                <input type="file" name="image_path" id="image_path" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
              </div>
              <button type="button" @click="prevStep" class="text-sm text-primary-600 hover:underline dark:text-primary-500">Back</button>
              <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Form data
const formData = ref({
  email: '',
  password: '',
  // Add more fields here for Step 2
  // nationalId: '',
  // name: '',
  // surname: '',
  // phoneNumber: '',
  // image: null,
});

// Step control
const currentStep = ref(1);

// Function to move to the next step
const nextStep = () => {
  if (currentStep.value < 2) {
    currentStep.value++;
  }
};

// Function to move to the previous step
const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--;
  }
};

// Form submission
const submitForm = () => {
  // Perform form submission here, including image upload if needed
  // Access form values using formData.email, formData.password, etc.
  // You may want to use a library like axios to send the form data to your server
};
</script>
