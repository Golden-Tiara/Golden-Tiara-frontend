<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold text-2xl text-center">ข้อมูลการเบิกเงิน</h5>

    <div class=" mt-10 flex items-center justify-center">
      <div class="  bg-white border border-gold rounded-lg shadow md:flex-row md:w-10/12">
        <div class="  p-4 ml-7 leading-normal">
          <p class="mb-3 font-normal text-gray-700 text-base ">
            รหัส: {{ }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขบัตรประชาชนลูกค้า: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            รหัสพนักงานที่เบิก: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            จำนวนเงิน: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            สถานะการเบิก: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขสัญญาการจำนำ: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            วันเวลาเบิก: {{  }}
          </p>
          <div class="flex mb-4 mt-6">
            <button class="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white ">ตกลงการเบิกเงิน</button>
            <button class="px-4 py-2 rounded-lg ml-5 bg-red-500 hover:bg-red-600 text-white ">ยกเลิกการเบิกเงิน</button>
          </div>
      </div>
        </div>
       
      
    </div>


  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore();
definePageMeta({
  middleware: 'authenticated' //Auth checker
})
</script>