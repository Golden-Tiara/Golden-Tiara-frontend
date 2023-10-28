<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold">ข้อมูลการเบิกเงิน</h5>

    <div class="flex justify-center mt-10">
      <div class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12">
        <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
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
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse border-2 border-gold-400">
          <!-- ... thead ... -->

          <tbody>
          <tr  class="border-b-2 border-gold-400 hover:bg-gold-200">
            <td class="p-3">
              <button class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600">Accept</button>
            </td>
            <td>
              <button class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Reject</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
</script>