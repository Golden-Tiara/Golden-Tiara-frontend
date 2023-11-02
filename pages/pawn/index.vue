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
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                @click="confirmAction(pawn.id)"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <div v-if="showConfirmationModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded-lg">
      <h2 class="text-xl font-bold mb-4">Confirmation</h2>
      <p>Are you sure you want to delete this pawn?</p>
      <div class="mt-4 flex justify-end">
        <button @click="deleteConfirmed" class="px-4 py-2 bg-green-600 mr-2 border text-white rounded-lg">Yes</button>
        <button @click="cancelAction" class="px-4 py-2 bg-red-600 text-white rounded-lg">No</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import useMyFetch from '~/composables/useMyFetch';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const showConfirmationModal = ref(false);
const route = useRoute();
const { data: pawns, pending } = await useMyFetch<any>('pawn');
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
};
</script>
