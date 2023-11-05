<template>
  <div class="p-5">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ประวัติการเบิกเงินของฉัน</h5>
  </div>

  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold">
    <thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center">
    <tr>
      <th scope="col" class="px-6 py-3">
        รหัส
      </th>
      <th scope="col" class="px-6 py-3">
        เลขสัญญาจำนำ
      </th>
      <th scope="col" class="px-6 py-3">
        รหัสพนักงาน
      </th>
      <th scope="col" class="px-6 py-3">
        จำนวนเงิน
      </th>
      <th scope="col" class="px-6 py-3">
        สถานะ
      </th>
      <th scope="col" class="px-6 py-3">
        วันเวลาที่จ่าย
      </th>
    </tr>
    </thead>>
    <tbody>
    <tr
        v-for="transaction in transactions"
        :key="transaction.id"

        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  border-b border-gold"
    >
      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
        {{ transaction.id }}
      </td>
      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
        {{ transaction.pawn_id }}
      </td>
      <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
        {{ transaction.created_by }}
      </td>
      <td class="px-6 py-4 text-center">
        {{ transaction.amount }}
      </td>
      <td class="px-6 py-4 text-center">
        {{ transaction.status  }}
      </td>
      <td class="px-6 py-4 text-center">
        {{ transaction.transaction_dateTime }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import upSvg from "@/assets/images/icons/up.svg";
import downSvg from "@/assets/images/icons/down.svg";
import { useAuthStore } from '~/stores/useAuthStore';
const { data: transactions } = await useMyFetch<any>("transaction",
    {
    });
definePageMeta({
  middleware: 'authenticated' //Auth checker
})

</script>
