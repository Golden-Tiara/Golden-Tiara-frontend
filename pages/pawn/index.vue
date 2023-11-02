<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">ตารางจำนำ</h1>
          <!-- Create new table -->
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
            เพิ่มของจำนำ
          </button>
        </div>

        <!-- Search Box -->
        <div class="flex mt-20 mb-5">
          <!-- Date -->
          <div>
            <input
              class="border border-gold rounded-md mr-5 px-5 py-2 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              type="date"
              name=""
              id=""
            />
          </div>
          <label for="table-search" class="sr-only">Search</label>
          <!-- Item Search -->
          <div class="relative">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <!-- Search -->
            <input
              type="text"
              id="table-search"
              class="block py-2.5 pl-10 text-sm text-gray-900 border border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="Search for items"
            />
          </div>
          <!-- Search Button -->
          <button
            class="px-4 text-base bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold ml-5 rounded-lg text-white"
          >
            ค้นหา
          </button>
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
            <th scope="col" class="px-6 py-4">รหัสรายการ</th>
            <th scope="col" class="px-6 py-4">เลขบัตรประชาชนของลูกค้า</th>
            <th scope="col" class="px-6 py-4">สถานะของรายการ</th>
            <th scope="col" class="px-6 py-4">วันทำสัญญา</th>
            <th scope="col" class="px-6 py-4">วันสิ้นสุดสัญญา</th>
            <th scope="col" class="px-6 py-4"></th>
            <th scope="col" class="px-6 py-4"></th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-white border-b border-gold" v-for="pawn of pawns" :key="pawn.id">
            <td
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.id }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
              <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.customer_id }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
              <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.status }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
              <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.contract_date }}</nuxt-link>
            </td>
            <td class="py-4 text-center text-green-600">
              <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.expiry_date }}</nuxt-link>
            </td>
            <td class="px-6 py-4">
              <a
              data-modal-target="popup-modal-remove"
                data-modal-toggle="popup-modal-remove"
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                @click="confirmAction(pawn.id)"
                >Remove</a
              >
            </td>
            <!-- popup modal -->
            <div
              id="popup-modal-remove"
              tabindex="-1"
              class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div v-if="showConfirmationModal" 
                class="relative w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow">
                  <button
                    type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="popup-modal-remove"
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
                      fill="#000000"
                      stroke="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title></title>
                        <desc></desc>
                        <defs></defs>
                        <g
                          fill="none"
                          fill-rule="evenodd"
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                        >
                          <g fill-rule="nonzero" id="cancel">
                            <path
                              d="M58.5,116.6 C90.5,116.6 116.6,90.6 116.6,58.5 C116.6,26.4 90.5,0.4 58.5,0.4 C26.5,0.4 0.4,26.5 0.4,58.5 C0.4,90.5 26.5,116.6 58.5,116.6 Z M58.5,8.6 C86,8.6 108.4,31 108.4,58.5 C108.4,86 86,108.4 58.5,108.4 C31,108.4 8.6,86 8.6,58.5 C8.6,31 31,8.6 58.5,8.6 Z"
                              fill="#4A4A4A"
                              id="Shape"
                            ></path>
                            <path
                              d="M36.7,79.7 C37.5,80.5 38.5,80.9 39.6,80.9 C40.7,80.9 41.7,80.5 42.5,79.7 L58.5,63.7 L74.5,79.7 C75.3,80.5 76.3,80.9 77.4,80.9 C78.5,80.9 79.5,80.5 80.3,79.7 C81.9,78.1 81.9,75.5 80.3,73.9 L64.3,57.9 L80.3,41.9 C81.9,40.3 81.9,37.7 80.3,36.1 C78.7,34.5 76.1,34.5 74.5,36.1 L58.5,52.1 L42.5,36.1 C40.9,34.5 38.3,34.5 36.7,36.1 C35.1,37.7 35.1,40.3 36.7,41.9 L52.7,57.9 L36.7,73.9 C35.1,75.5 35.1,78.1 36.7,79.7 Z"
                              fill="#ff0000"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <h3
                      class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                    >
                      ยืนยันการลบรายการชิ้นนี้หรือไม่?
                    </h3>
                      <button
                      data-modal-hide="popup-modal-remove"
                      type="button"
                      @click="deleteConfirmed"
                      class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-6 py-2.5 text-center mr-2"
                    >
                      ยืนยัน
                    </button>
                    <button 
                      @click="cancelAction"
                      class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      ยกเลิก
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>


<script setup lang="ts">
import useMyFetch from '~/composables/useMyFetch';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const showConfirmationModal = ref(false);
const route = useRoute();
const { data: pawns, pending } = await useMyFetch<any>('pawn', {});
const pawnToDelete = ref<number | null>(null);

const confirmAction = (pawnID: number) => {
  pawnToDelete.value = pawnID;
  showConfirmationModal.value = true;
};

const deleteConfirmed = async () => {
  try {
    const pawnID = pawnToDelete.value;
    const response = await useMyFetch<any>(`pawn/${pawnID}`, {
      method: "DELETE"
    });
    window.location.reload();
    if (response.status === 200) {
      const updatedPawns = pawns.value.filter((pawn: any) => pawn.id !== pawnID);
      pawns.value = updatedPawns;

      // Close the modal after successful deletion
      showConfirmationModal.value = false;
    }
  } catch (error) {
    alert("An error occurred while deleting the pawn.");
  }
};

const cancelAction = () => {
  showConfirmationModal.value = false;
  window.location.reload();
};
</script>
