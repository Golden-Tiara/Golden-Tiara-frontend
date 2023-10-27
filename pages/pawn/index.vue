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
            <td class="text-center py-4 px-6">
              <a
                href="#"
                id="editButton" data-modal-toggle="editModal"
                class="font-medium text-purple-600 hover:text-purple-800 hover:underline"
                @click="editPawn(pawn.id)"
                >Edit</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                @click="deletePawn(pawn.id)"
                >Remove</a
              >
            </td>
            <div
        id="editModal"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full"
        :class="{'hidden': !modalVisible}"
      >
        
<form>
  <div class="mb-6">
    <label for="customer-id" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">เลขบัตรประชาชนของลูกค้า</label>
    <input type="text" id="customer-id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formData.customer_id">
  </div>
  <div class="mb-6">
    <label for="status" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">สถานะของรายการ</label>
    <input type="text" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formData.status">
  </div>
  <div class="mb-6">
    <label for="contract_date" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">วันทำสัญญา</label>
    <input type="text" id="contract_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formData.contract_date">
  </div>
  <div class="mb-6">
    <label for="expiry_date" class="block mb-2 text-sm font-medium text-gray-300 dark:text-white">วันสิ้นสุดสัญญา</label>
    <input type="text" id="expiry_date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="formData.expiry_date">
  </div>
  <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  @click="updatePawn(pawn, formData)"
  >Update</button>
</form>

       </div>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>


<script setup lang="ts">
import useMyFetch from '~/composables/useMyFetch';
import axios from 'axios'; // Import Axios
import { ref } from 'vue';

const { data: pawns, pending } = await useMyFetch<any>("pawn", {});

const formData = ref({
  customer_id: '',
  status: '',
  contract_date: '',
  expiry_date: '',
});
const editingPawnId = ref(null);
const modalVisible = ref(false);

const editPawn = (pawnID) => {
  editingPawnId.value = pawnID;
};

const deletePawn = async (pawnID: number) => {
  console.log(pawnID);
  if (confirm('Are you sure you want to delete this data')) {
    try {
      const response = await axios.delete(`http://localhost:3000/pawn/${pawnID}`);
      alert(response.data.message);

      // Update the data after deletion
      const updatedPawns = pawns.value.filter((pawn) => pawn.id !== pawnID);
      pawns.value = updatedPawns;
    } catch (error: any) {
      if (error.response) {
        if (error.response.status === 404) {
          alert(error.response.data.message);
        }
      }
    }
  }
};

const updatePawn = async (pawn, updatedData) => {
  try {
    const response = await axios.put(`http://localhost:3000/pawn/${pawn.id}`, updatedData);
    alert(response.data.message);

    // Update the pawn data in the list after a successful update
    pawns.value = pawns.value.map((currentPawn) => {
      if (currentPawn.id === pawn.id) {
        return { ...currentPawn, ...updatedData };
      }
      return currentPawn;
    });

    // Hide the modal after the update
    modalVisible.value = false;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        alert(error.response.data.message);
      }
    }
  }
};
</script>
