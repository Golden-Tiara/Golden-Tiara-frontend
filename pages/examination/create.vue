<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class=" bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">เพิ่มรายการตรวจสอบทอง</h1>
        </div>

        <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
          <div class="text-center mb-10">
            <h1 class="font-bold text-3xl text-gray-900">เพิ่มรายการทอง</h1>
          </div>

          <form @submit.prevent="onSubmit()">
            <div class="mb-5">
              <div class="flex -mx-3">
                <div class="w-full px-3">
                  <label for="weight" class="text-xs font-semibold px-1">น้ำหนัก(บาท)</label>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>
                    <input v-model="formData.weight" type="number" id="weight" @input="updateWeight"
                      class="w-full -ml-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="" />
                  </div>
                </div>
              </div>
              <p v-if="errorMessage.weight" class="text-red-500">
                {{ errorMessage.weight }}
              </p>
            </div>

            <p
              v-else
              class="flex items-center text-lg border border-gold px-2 rounded-lg"
            >
              เลขบัตรประชาชน: {{ user.national_id }}
            </p>

            <!-- Save Button -->
            <button
              v-if="!user"
              @click="
                saveNationalId;
                checkUserByNationalId();
              "
              class="block ml-5 px-6 text-white bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg poin"
              :disabled="!isNationalIdValid"
            >
              บันทึก
            </button>

          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- popup modal -->
  <!-- เช็คถ้า weightและ purityไม่เป็นช่องว่าง -->
  <div>
    <div ref="modal" id="popup-modal" tabindex="-1"
      class="hidden bg-gray-500 bg-opacity-60 flex justify-center items-center fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal" @click="closeModal">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span @click="closeModal" class="sr-only">Close modal</span>
          </button>

          <div class="p-6 text-center">
            <svg class="mx-auto mb-4" width="50px" height="50px" viewBox="0 0 117 117" version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <title />

              <desc />

              <defs />

              <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                <g fill-rule="nonzero" id="correct">
                  <path
                    d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                    fill="#17AB13" id="Shape" />

                  <path
                    d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                    fill="#4A4A4A" id="Shape" />
                </g>
              </g>
            </svg>
            <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              บันทึกรายการสำเร็จ
            </h3>
            <button type="button" @click="closeModal"
              class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
              ตกลง
            </button>
          </div>
        </div>
      </div>
     
      <span v-if="!isNationalIdValid && !user" class="text-red-500">
        โปรดกรอกเลขบัตรประชาชนให้ครบ 13 หลัก
      </span>
      <span v-if="userNotFoundError && !user && isNationalIdValid" class="text-red-500">กรอกรหัสบัตรประชาชนให้ถูกต้อง</span>
      <span v-if="!userNotFoundError && user" class="text-green-500 ">พบผู้ใช้งาน</span>
      <!-- <p v-else-if="!userNotFoundError && isNationalIdValid " class="text-red-500">
      ไม่พบข้อมูลผู้ใช้งาน</p>
      <p v-else="userNotFoundError || isNationalIdValid" class="text-green-500">
      พบข้อมูลผู้ใช้งาน</p> -->
     

      <div
        v-if="!isSaveValid"
        class="flex items-center justify-center text-red-500 text-4xl mt-32"
      >
        <p>กรุณากรอกเลขบัตรประชาชนและเพิ่มรายการทองก่อนทำรายการ</p>
      </div>

      <!-- Table have data -->
      <table
        v-else
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
      >
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
        >
          <tr>
            <th scope="col" class="px-6 py-4">ลำดับข้อมูล</th>
            <th scope="col" class="px-6 py-4">น้ำหนัก</th>
            <th scope="col" class="px-6 py-4">ความบริสุทธิ์</th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="bg-white border-b border-gold"
            v-for="(gold, index) in goldItems"
          >
            <td
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ index + 1 }}
            </td>
            <td class="py-4 text-center">
              {{ gold.weight }}
            </td>
            <td class="py-4 text-center">
              {{ gold.purity }}
            </td>
          </tr>
        </tbody>
      </table>

      <!-- <div>
        <p v-if="successMessage" class="text-green-600">{{ successMessage }}</p>
      </div> -->

      <div v-if="isSaveValid" class="flex justify-center">
        <button
          @click="saveData"
          :disabled="!isSaveValid"
          class="px-6 py-3 mt-6 mb-6 text-center text-white bg-darkblue rounded-lg hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
        >
          บันทึกรายการตรวจสอบทอง
        </button>
      </div>
    </div>
  </section>
  <CompleteEvent></CompleteEvent>
</template>

<script>
import { ErrorMessage } from "vee-validate";
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: "authenticated", //Auth checker
});

export default {
  data() {
    return {
      image_path,
      previewUrl,
      selectedFile,
      dropzone,
      formData,
      errorMessage,
    };
  },
  computed: {
    isNationalIdValid() {
      // Check if the nationalId is a 13-digit number
      const validNationalId = /^\d{13}$/.test(this.nationalId);

      return validNationalId;
    },

    isSaveValid() {
      return (
        !!localStorage.getItem("user") &&
        !!localStorage.getItem("goldItems") &&
        JSON.parse(localStorage.getItem("goldItems")).length > 0
      );
    },
  },
  methods: {
    async saveNationalId() {
      if (this.isNationalIdValid) {
        // Use await to make sure checkUserByNationalId is called after storing the ID
        await this.checkUserByNationalId();
      } else {
        console.log("Invalid National ID");
      }
    },
    async checkUserByNationalId() {
      try {
        const { data: user } = await useMyFetch(
          `user/check/${this.nationalId}`,
          {}
        );

        if (user.value.national_id != null) {
          this.user = user;
          this.userNotFoundError = false;

          localStorage.setItem("user", JSON.stringify(this.user));
          this.nationalId = "";

          console.log("User found:", this.user);
        } else {
          this.user = null;
          this.userNotFoundError = true;
          // No user found
          console.log("No user found");
        }
      } catch (error) {
        // Handle the error, e.g., show an error message
        console.error("Error:", error);
      }
    },

    async saveData() {
      const customer_id = this.user.national_id;

      const loadingModal = document.getElementById("loading-modal");
      const paymentCompleteModal = document.getElementById(
        "payment-complete-modal"
      );

      if (loadingModal && paymentCompleteModal) {
        loadingModal.classList.remove("hidden");

        setTimeout(() => {
          loadingModal.classList.add("hidden");
          paymentCompleteModal.classList.remove("hidden");
        }, 3000);
      }

      const { data: response } = await useMyFetch("examination", {
        method: "POST",
        body: { customer_id },
      });

      const examination_id = response.value.id;

      for (const goldItem of this.goldItems) {
        const weight = goldItem.weight;
        const purity = goldItem.purity;
        let image = goldItem.image; // URL or file data

        // Check if the image is a URL
        if (typeof image === "string") {
          // Download the image from the URL
          const response = await fetch(image);
          if (response.ok) {
            const blob = await response.blob();
            image = new File([blob], "image.jpg"); // Create a File from the Blob
          } else {
            console.error(`Failed to download image from URL: ${image}`);
            continue; // Skip this gold item if image download fails
          }
        }

        const formData = new FormData();
        formData.append("weight", weight);
        formData.append("purity", purity);
        formData.append("image", image);
        formData.append("examination_id", examination_id);

        await useMyFetch("gold", {
          method: "POST",
          body: formData,
        });
      }

      this.successMessage = "Data saved successfully";

      setTimeout(() => {
        this.successMessage = "";
      }, 2000); // 2000 milliseconds = 2 seconds

      this.nationalId = "";
      this.user = null;
      this.userNotFoundError = false;
      this.goldItems = null;
      localStorage.removeItem("user");
      localStorage.removeItem("goldItems");
    },

    async closeModal() {
      const modal = document.getElementById("payment-complete-modal");
      const reload = document.getElementById("reload");
      if (modal) {
        modal.classList.add("hidden");
      }
      reload.classList.remove("hidden");
      reload.classList.add("hidden");
    },
  },

  beforeRouteEnter(to, from, next) {
    // This is a navigation guard that triggers before entering the route
    // You can check if 'goldItems' is present in localStorage and set it in the component's state
    const goldItems = JSON.parse(localStorage.getItem('goldItems'));
    

    next((vm) => {
      // Set goldItems in the component based on localStorage
      vm.goldItems = goldItems || '';
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.path !== '/examination/create') {
      // Clear the goldItems from localStorage only if not navigating to 'examination/create'
      localStorage.removeItem('goldItems');
      localStorage.removeItem('user');
    }

    // Clear the form fields and error messages
    this.formData.weight = '';
    this.formData.purity = '';
    this.selectedFile = null;
    this.previewUrl = null;
    this.errorMessage.weight = '';
    this.errorMessage.purity = '';

    next();
  },
};

</script>