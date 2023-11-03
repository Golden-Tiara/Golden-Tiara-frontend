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

        <!-- Citizen ID Input Box -->
        <div class="flex mt-20 mb-5">
          <!-- Search -->
          <input
            v-model="search"
            @input="applyFilter"
            type="number"
            id="table-search"
            class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-60 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขสัญญตรวจสอบ"
          />

          <!-- Search -->
          <!-- Citizen ID Input -->
          <input
            v-model="search"
            @input="applyFilter"
            type="number"
            id="table-search"
            class="block py-2.5 ml-4 text-sm text-gray-900 border-2 border-gold rounded-lg w-60 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขบัตรประชาชน"
          />

          <select
            name="cars"
            id="cars"
            class="ml-4 px-4 border-2 rounded-lg border-gold"
          >
            <option value="volvo">1</option>
            <option value="saab">2</option>
            <option value="opel">3</option>
          </select>

          <!-- Add Button -->
          <!-- <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"
            class="block ml-5 text-white bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">
            ค้นหาข้อมูล
          </button> -->
        </div>
      </div>

      <!-- Table -->
      <table
        class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
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
            v-for="examination of examinations"
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
              <nuxt-link :to="`/examination/${examination.id}`">{{
                examination.contract_date
              }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
              <nuxt-link :to="`/examination/${examination.id}`">{{
                examination.status
              }}</nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

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
          <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
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
</template>

<script setup lang="ts">
import useMyFetch from "~/composables/useMyFetch";
import { useAuthStore } from '~/stores/useAuthStore';
const { data: examinations, pending } = await useMyFetch<any>("examination", {});
</script>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  setup() {
    const search = ref("");
    const sortKey = ref("");
    const sortOrder = ref("asc");
    const page = ref(1);
    const perPage = ref(10);

    const fields = [
      { key: "contractCode", label: "รหัสสัญญา" },
      { key: "loanNumber", label: "เลขสัญญาจำนำ" },
      { key: "amount", label: "จำนวนเงิน" },
      { key: "status", label: "สถานะ" },
      { key: "withdrawalTime", label: "วันเวลาเบิก" },
    ];

    const withdrawals = [
      {
        contractCode: "001",
        loanNumber: "LN-123",
        amount: 5000,
        status: "Approved",
        withdrawalTime: "2023-10-01 10:00",
      },
      {
        contractCode: "002",
        loanNumber: "LN-124",
        amount: 3000,
        status: "Approved",
        withdrawalTime: "2023-10-01 10:00",
      },
      // ... รายการถอนเงินอื่น ๆ ...
    ];

    const filteredData = computed(() => {
      return withdrawals.filter((item) => {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(search.value.toLowerCase())
        );
      });
    });

    const sortedData = computed(() => {
      return filteredData.value.sort((a, b) => {
        let modifier = 1;
        if (sortOrder.value === "desc") modifier = -1;
        if (a[sortKey.value] < b[sortKey.value]) return -1 * modifier;
        if (a[sortKey.value] > b[sortKey.value]) return 1 * modifier;
        return 0;
      });
    });

    const paginatedData = computed(() => {
      let start = (page.value - 1) * perPage.value;
      let end = start + perPage.value;
      return sortedData.value.slice(start, end);
    });

    const pageCount = computed(() => {
      return Math.ceil(sortedData.value.length / perPage.value);
    });

    const applyFilter = () => {
      page.value = 1; // Reset to first page on filter change
    };

    const sortTable = (key: string) => {
      if (sortKey.value === key) {
        sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
      } else {
        sortKey.value = key;
        sortOrder.value = "asc";
      }
    };

    return {
      search,
      sortKey,
      sortOrder,
      page,
      perPage,
      fields,
      withdrawals,
      filteredData,
      sortedData,
      paginatedData,
      pageCount,
      applyFilter,
      sortTable,
    };
  },
});
definePageMeta({
  middleware: 'authenticated' //Auth checker
})
</script>
