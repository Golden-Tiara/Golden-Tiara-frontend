<template>
    <section class="max-w-7xl mx-auto p-0">
      <div class="relative overflow-x-auto">
        <div class="pb-4 bg-white dark:bg-gray-900">
          <div class="flex justify-between items-center mt-12">
            <h1 class="text-5xl text-gold">ตารางจำนำ</h1>
          </div>
  
          <!-- Search Box -->
         <!-- Search Box -->
    <!-- Date -->

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
            placeholder="เลขสัญญาจำนำ"
          />

          <!-- Search -->
          <!-- Customer ID Input -->
          <input
            v-model="searchIdText1"
            @input= "applyFilter_customerid"
            type="number"
            id="customer-id-search"
            class="block py-2.5 ml-4 text-sm text-gray-900 border-2 border-gold rounded-lg w-60 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
            placeholder="เลขบัตรประชาชน"
          />

          <select
            v-model="searchIdText2"
            @change="applyFilter_status"
            type="string"
            id="status-id-search"
            class="ml-4 px-4 border-2 rounded-lg border-gold"
          >
            <option value="" disabled selected hidden>กรุณาเลือกสถานะ</option>
            <option value="active">active</option>
            <option value="finish">finish</option>
          </select>
        </div>

      </div>

    <!-- Item Search -->
    <!-- Search Button -->
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
            <tr class="bg-white border-b border-gold" v-for="pawn of pawns" :key="pawn.id" @click="sortTable(field.key)" >
              <td v-if="pawn.customer_id === user.national_id"
                scope="row"
                class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
              <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.id }}</nuxt-link>
              </td>
              <td class="py-4 text-center" v-if="pawn.customer_id === user.national_id">
                <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.customer_id }}</nuxt-link>
              </td>
              <td class="py-4 text-center" v-if="pawn.customer_id === user.national_id">
                <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.status }}</nuxt-link>
              </td>
              <td class="py-4 text-center" v-if="pawn.customer_id === user.national_id">
                <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.contract_date }}</nuxt-link>
              </td>
              <td class="py-4 text-center text-green-600" v-if="pawn.customer_id === user.national_id">
                <nuxt-link :to="`/pawn/${pawn.id}`">{{ pawn.expiry_date }}</nuxt-link>
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
  
  const searchIdText = ref('');
const searchIdText1 = ref('');
const searchIdText2 = ref('');
const authStore = useAuthStore();
  const user = computed(() => authStore.user);
 const route = useRoute();  
  const { data: pawns, pending } = await useMyFetch<any>('pawn', {});
  const applyFilter_id= () => {
  const filteredPawns = pawns.value.filter(pawn => {
    // Check if examination ID contains the searchIdText value
    return pawn.id.toString().includes(searchIdText.value);
  });

  pawns.value = filteredPawns;

  if (searchIdText.value === '') {
      // Reload the page if the text search field is empty
      window.location.reload();
    }
  // Set the filtered pawns back to the original pawns
  pawns.value = filteredPawns;
};

const applyFilter_customerid= () => {
  const filteredPawns = pawns.value.filter(pawns => {
    // Check if examination ID contains the searchIdText value
    return pawns.customer_id.toString().includes(searchIdText1.value);
  });

  pawns.value = filteredPawns;

  if (searchIdText1.value === '') {
      // Reload the page if the text search field is empty
      window.location.reload();
    }
  // Set the filtered pawns back to the original pawns
  pawns.value = filteredPawns;
};

const applyFilter_status = () => {
  if (searchIdText2.value === '') {
    // Reload the page if the select field is empty
    window.location.reload();
    return; // กลับออกจากฟังก์ชันเพื่อไม่ทำงานขั้นต่อไป
  }

  const filteredPawns = pawns.value.filter(pawns => {
    // Check if examination status matches the selected status in searchIdText2
    return pawns.status === searchIdText2.value;
  });

  pawns.value = filteredPawns;
};

  
  
  </script>
  
  