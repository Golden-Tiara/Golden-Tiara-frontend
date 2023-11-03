<template>
    <section class="max-w-7xl mx-auto p-0">
      <div class="relative">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <div class="flex justify-between items-center mt-12">
            <h1 class="text-5xl text-gold">ตารางจำนำ</h1>
            <!-- Create new table -->
            
              
          </div>
  
          <!-- Search Box -->
          <div class="flex mt-20 mb-5">
            <!-- Date -->
            <div>
              <input
                v-model="searchIdDate"
                class="border text-gray-500 border-gold rounded-md mr-5 px-5 py-2 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
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
                  class="w-4 h-4 text-gray-500"
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
                v-model="searchIdText"
                type="text"
                id="table-search"
                @input="applyFilter"  
                class="block py-2.5 pl-10 text-sm text-gray-900 border border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
                placeholder="Search for items"
              />
            </div>
            <!-- Search Button -->
          </div>
        </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
          >
            <tr>
              <th scope="col" class="px-6">รหัสรายการ</th>
              <th scope="col" class="px-6 py-6">วันที่เซ็นสัญญา</th>
              <th scope="col" class="px-6">สถานะ</th>
            </tr>
          </thead>
                    <tbody>
          <tr class="bg-white border-b border-gold" v-for="examination of examinations" :key="examination.id" @click="sortTable(field.key)">
            <td
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.id }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.contract_date }}</nuxt-link>
            </td>
            <td class="py-4 text-center">
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.status }}</nuxt-link>
            </td>  
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

const searchIdDate = ref('');
const searchIdText = ref('');
const route = useRoute();
const { data: examinations, pending } = await useMyFetch<any>('examination', {});
  const applyFilter = () => {
  const filteredExaminations = examinations.value.filter(examination => {
    // Filtering by date and text
    const dateCondition = !searchIdDate.value || examination.contract_date === searchIdDate.value;
    const textCondition = !searchIdText.value || examination.id.toString().toLowerCase().includes(searchIdText.value.toLowerCase());
    if (searchIdText.value === '') {
      // Reload the page if the text search field is empty
      window.location.reload();
    }
    return dateCondition && textCondition;
  });
  if (filteredExaminations.length === 0){
    if (searchIdText.value === '') {
      // Reload the page if the text search field is empty
      window.location.reload();
    }
  }
  // Set the filtered pawns back to the original pawns
  examinations.value = filteredExaminations;
};
</script>

