<template>
     <div class="max-w-7xl mx-auto px-10">
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">เลขสัญญาจำนำทอง</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="I00"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">เลขบัตรประชาชนลูกค้า</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="P00"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ราคาจำนำทอง</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">รูปแบบการรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">สถานะการรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">เลขบัญชีรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
    <div style="margin-top: 10px;">
        <button type="button" class="text-white bg-[#122345] hover:bg-[#122345]/80 focus:ring-4 focus:outline-none focus:ring-[#122345]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#122345]/80 dark:focus:ring-[#122345/40 mr-2 mb-2">
            เบิกเงินเพื่อจ่ายเงินจำนำ
        </button>

        <button type="button"  id="successButton" data-modal-toggle="successModal" class="text-white bg-gray-500 hover:bg-[gray]/80 focus:ring-4 focus:outline-none focus:ring-gray/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-gray/80 dark:focus:ring-[gray/40 mr-2 mb-2 flex" 
        @click="ShowModal"
        >
            จ่ายเงินจำนำแล้ว
        </button>
      <div
        id="successModal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        :class="{'hidden': !modalVisible}"
      >
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
          <!-- Modal content -->
          <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <button
              type="button"
              class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-black-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-black"
              @click="closeModal"
            >
              <svg
                aria-hidden="true"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 p-2 flex items-center justify-center mx-auto mb-3.5">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-green-500 dark:text-green-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="sr-only">Success</span>
            </div>
            <p class="mb-4 text-lg font-semibold text-gray-900 dark:text-black">
              Successfully.
            </p>
            <button
              type="button"
              class="bg-[#D2AC47] py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:focus:ring-primary-900"
              @click="closeModal"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    data() {
      return {
        modalVisible: false, // ตัวแปรเก็บสถานะของโมดอล
      };
    },
    methods: {
      openModal() {
        this.modalVisible = true; // เมื่อคลิกปุ่ม "Open Modal"
      },
      closeModal() {
        console.log("Closing modal");
        this.modalVisible = false; // เมื่อคลิกปุ่ม "Close modal" หรือ "Continue"
      },
    },
  };
  </script>
  

