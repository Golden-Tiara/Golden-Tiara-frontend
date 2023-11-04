<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">รายการตรวจสอบทอง</h1>

          <nuxt-link :to="`/examination/create`">
            <button
              type="button"
              class="text-white flex justify-between bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold font-medium rounded-lg text-sm px-7 py-5"
            >
              <span class="mr-2">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 6V18"
                    stroke="#ffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              เพิ่มรายการตรวจสอบทอง
            </button>
          </nuxt-link>
        </div>

        <!-- Search -->
        <div class="flex mt-20 mb-5">
          <!-- Citizen ID Input Box -->
          <input
            v-model="searchIdText"
            @input="applyFilter_id"
            type="number"
            id="examination-id-search"
            class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-40 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขสัญญตรวจสอบ"
          />

          <!-- Customer ID Input -->
          <input
            v-model="searchIdText1"
            @input="applyFilter_customerid"
            type="number"
            id="customer-id-search"
            class="block py-2.5 ml-4 text-sm text-gray-900 border-2 border-gold rounded-lg w-40 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขบัตรประชาชน"
          />

          <!-- Date sort -->
          <select
            v-model="searchIdText2"
            @change="applyFilter_status"
            type="string"
            id="status-id-search"
            class="ml-4 px-4 border-2 rounded-lg border-gold text-gray-500 w-50"
          >
            <option value="" disabled selected hidden>กรุณาเลือกสถานะ</option>
            <option value="inprogress">inprogress</option>
            <option value="finish">finish</option>
          </select>
          <div
            class="flex ml-4 px-4 py-2 bg-darkblue text-white hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
          >
            <button @click="sortExaminationsByDate" class="flex items-center">
              <span id="date-sort">กดเพื่อเรียงวันที่</span>

              <span id="less-to-more" class="flex hidden px-1">
                น้อยไปมาก
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="ml-1 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 3C12.5523 3 13 3.44772 13 4V17.5858L18.2929 12.2929C18.6834 11.9024 19.3166 11.9024 19.7071 12.2929C20.0976 12.6834 20.0976 13.3166 19.7071 13.7071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L4.29289 13.7071C3.90237 13.3166 3.90237 12.6834 4.29289 12.2929C4.68342 11.9024 5.31658 11.9024 5.70711 12.2929L11 17.5858V4C11 3.44772 11.4477 3 12 3Z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
              </span>

              <span id="more-to-less" class="flex hidden px-1">
                มากไปน้อย
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1 h-6 w-6"
                >
                  <path
                    d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z"
                    fill="#ffffff"
                  />
                </svg>
              </span>
            </button>
          </div>
          <!-- End date sort -->
        </div>
      </div>

      <!-- Add Button -->
      <!-- popup modal -->
      <div
        id="popup-modal"
        tabindex="-1"
        class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative w-full max-w-md max-h-full">
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
              <svg
                class="mx-auto mb-4"
                width="50px"
                height="50px"
                viewBox="0 0 117 117"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title />

                <desc />

                <defs />

                <g
                  fill="none"
                  fill-rule="evenodd"
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                >
                  <g fill-rule="nonzero" id="correct">
                    <path
                      d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                      fill="#17AB13"
                      id="Shape"
                    />

                    <path
                      d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                      fill="#4A4A4A"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
              <h3
                class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
              >
                ยืนยันการบันทึกรายการหรือไม่?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              >
                บันทึกรายการ
              </button>
              <button
                data-modal-hide="popup-modal"
                type="button"
                class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
              >
                ยกเลิกรายการ
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End popup modal -->
    </div>

    <!-- Table -->
    <table
      class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold mb-6"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
      >
        <tr>
          <th scope="col" class="px-6 py-4">เลขสัญญา</th>
          <th scope="col" class="px-6 py-4">เลขบัตรประชาชน</th>
          <th scope="col" class="px-6 py-4">วันที่เซ็นสัญญา</th>
          <th scope="col" class="px-6 py-4">สถานะการตรวจสอบ</th>
        </tr>
      </thead>

      <tbody>
        <tr
          class="bg-white border-b border-gold"
          v-for="examination of paginatedExaminations"
          :key="examination.id"
        >
          <td
            scope="row"
            class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            <nuxt-link :to="`/examination/${examination.id}`">{{
              examination.id
            }}</nuxt-link>
          </td>
          <td class="py-4 text-center">
            <nuxt-link :to="`/examination/${examination.id}`">{{
              examination.customer_id
            }}</nuxt-link>
          </td>
          <td class="py-4 text-center">
            <nuxt-link :to="`/examination/${examination.id}`">
              {{
                new Date(examination.contract_date).toLocaleDateString(
                  "th-TH",
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  }
                )
              }}
            </nuxt-link>
          </td>
          <td class="py-4 text-center">
            <nuxt-link :to="`/examination/${examination.id}`">
              <span
                v-if="examination.status === 'inprogress'"
                class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
              >
                {{ examination.status }}
              </span>
              <span
                v-else
                class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
              >
                {{ examination.status }}
              </span>
            </nuxt-link>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="flex items-center justify-center mb-14">
      <button
        @click="page--"
        :disabled="page <= 1"
        class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
        :class="{
          'disabled:bg-gold disabled:text-white disabled:cursor-not-allowed':
            page <= 1,
        }"
      >
        หน้าก่อน
      </button>
      <button
        @click="page++"
        :disabled="page >= Math.ceil(examinations.length / perPage)"
        class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
        :class="{
          'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
            page >= Math.ceil(examinations.length / perPage),
        }"
      >
        หน้าถัดไป
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import useMyFetch from "~/composables/useMyFetch";
import { ref } from "vue";
import { useRoute } from "vue-router";

const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(10); // เพิ่ม ref สำหรับ perPage
const sortOrder = ref("less");
const searchIdDate = ref("");
const searchIdText = ref("");
const searchIdText1 = ref("");
const searchIdText2 = ref("");
const route = useRoute();

const { data: examinations, pending } = await useMyFetch<any>(
  "examination",
  {}
);

const paginatedExaminations = computed(() => {
  if (Array.isArray(examinations.value)) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return examinations.value.slice(start, end);
  } else {
    return [];
  }
});

const applyFilter_id = () => {
  const filteredExaminations = examinations.value.filter((examination) => {
    // Check if examination ID contains the searchIdText value
    return examination.id.toString().includes(searchIdText.value);
  });

  examinations.value = filteredExaminations;

  if (searchIdText.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
  }
  // Set the filtered pawns back to the original pawns
  examinations.value = filteredExaminations;
};

const applyFilter_customerid = () => {
  const filteredExaminations = examinations.value.filter((examination) => {
    // Check if examination ID contains the searchIdText value
    return examination.customer_id.toString().includes(searchIdText1.value);
  });

  examinations.value = filteredExaminations;

  if (searchIdText1.value === "") {
    // Reload the page if the text search field is empty
    window.location.reload();
  }
  // Set the filtered pawns back to the original pawns
  examinations.value = filteredExaminations;
};

const applyFilter_status = () => {
  if (searchIdText2.value === "") {
    // Reload the page if the select field is empty
    window.location.reload();
    return; // กลับออกจากฟังก์ชันเพื่อไม่ทำงานขั้นต่อไป
  }

  const filteredExaminations = examinations.value.filter((examination) => {
    // Check if examination status matches the selected status in searchIdText2
    return examination.status === searchIdText2.value;
  });

  examinations.value = filteredExaminations;
};

const sortExaminationsByDate = () => {
  const moreToLess = document.getElementById("more-to-less") as HTMLElement;
  const LessToMore = document.getElementById("less-to-more") as HTMLElement;
  const dateSort = document.getElementById("date-sort") as HTMLElement;

  if (examinations.value) {
    if (sortOrder.value === "less") {
      // Sort in ascending order น้อยไปมาก
      examinations.value.sort(
        (a, b) => new Date(a.contract_date) - new Date(b.contract_date),
        moreToLess.classList.add("hidden"),
        dateSort.classList.add("hidden"),
        LessToMore.classList.remove("hidden")
      );
      sortOrder.value = "more"; // Set sorting order to descending มากไปน้อย
    } else {
      LessToMore.classList.add("hidden"), moreToLess.classList.remove("hidden");
      // Sort in descending order มากไปน้อย
      examinations.value.sort(
        (a, b) => new Date(b.contract_date) - new Date(a.contract_date)
      );
      sortOrder.value = "less"; // Set sorting order to ascending น้อยไปมาก
    }
  }
};

const sortedExaminations = computed(() => {
  if (Array.isArray(examinations.value)) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return examinations.value.slice(start, end);
  } else {
    return [];
  }
});
</script>
