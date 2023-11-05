<template>
    <section class="max-w-7xl mx-auto p-0">
      <div class="relative">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <div class="flex justify-between items-center mt-12">
            <h1 class="text-5xl text-gold">ตารางสัญญาตรวจสอบทอง</h1>
            <!-- Create new table -->
                </div>
    <!-- Search Box -->
    <div class="flex mt-20 mb-5">
          <!-- Search --><input
        v-model="searchIdDate"
        class="border border-gold rounded-md mr-5 px-5 py-2 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
        type="date"
        name=""
        id=""
      />
          <input
            v-model="searchIdText"
            @input="applyFilter_id"
            type="number"
            id="examination-id-search"
            class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-60 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขสัญญาตรวจสอบทอง"
          />

          <!-- Search -->
          <!-- Customer ID Input -->
          <select
            v-model="searchIdText1"
            @change="applyFilter_status"
            type="string"
            id="status-id-search"
            class="ml-4 px-4 border-2 rounded-lg border-gold"
          >
            <option value="" disabled selected hidden>กรุณาเลือกสถานะ</option>
            <option value="inprogress">inprogress</option>
            <option value="finish">finish</option>
          </select>
        </div>

      </div>
            <!-- Search Button -->
          </div>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border border-gold"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
          >
            <tr>
              <th scope="col" class="px-6">รหัสรายการ</th>
              <th scope="col" class="px-6 py-6">เลขบัตรประชาชน</th>
              <th scope="col" class="px-6 py-6">วันที่เซ็นสัญญา</th>
              <th scope="col" class="px-6">สถานะ</th>
            </tr>
          </thead>
                    <tbody>
          <tr class="bg-white border-b border-gold" v-for="examination of examinations" :key="examination.id" @click="sortTable(field.key)">
            <td v-if="examination.customer_id === user.national_id"
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.id }}</nuxt-link>
            </td>
            <td class="py-4 text-center"  v-if="examination.customer_id === user.national_id">
            <nuxt-link :to="`/examination/${examination.customer_id}`">{{ examination.customer_id }}</nuxt-link>
            </td>
            <td class="py-4 text-center"  v-if="examination.customer_id === user.national_id">
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.contract_date }}</nuxt-link>
            </td>
            <td class="py-4 text-center"  v-if="examination.customer_id === user.national_id">
            <nuxt-link :to="`/examination/${examination.id}`">{{ examination.status }}</nuxt-link>
            </td>  
          </tr>
        </tbody>
      </table>
</section>
</template>

<script setup lang="ts">
import useMyFetch from '~/composables/useMyFetch';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from "~/stores/useAuthStore";

// definePageMeta({
//   middleware: 'authenticated' //Auth checker
// })

const searchIdDate = ref('');
const searchIdText = ref('');
const searchIdText1 = ref('');
const authStore = useAuthStore();
  const user = computed(() => authStore.user);
const route = useRoute();
const { data: examinations, pending } = await useMyFetch<any>('examination', {});
  const applyFilter_id= () => {
  const filteredExaminations = examinations.value.filter(examination => {
    // Check if examination ID contains the searchIdText value
    return examination.id.toString().includes(searchIdText.value);
  });

  examinations.value = filteredExaminations;

  if (searchIdText.value === '') {
      // Reload the page if the text search field is empty
      window.location.reload();
    }
  // Set the filtered pawns back to the original pawns
  examinations.value = filteredExaminations;
};

const applyFilter_status = () => {
  if (searchIdText1.value === '') {
    // Reload the page if the select field is empty
    window.location.reload();
    return; // กลับออกจากฟังก์ชันเพื่อไม่ทำงานขั้นต่อไป
  }

  const filteredExaminations = examinations.value.filter(examinations => {
    // Check if examination status matches the selected status in searchIdText2
    return examinations.status === searchIdText1.value;
  });

  examinations.value = filteredExaminations;
};
</script>