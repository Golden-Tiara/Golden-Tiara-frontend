<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold">กรอกข้อมูลการจ่ายค่างวดแบบ offline</h5>

    <div class="flex justify-center mt-10">
      <div class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12">
        <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
          <div class="mb-3">
            <label for="installment" class="block mb-2 text-sm font-medium text-gray-900">เลือกจำนวนงวดที่จะจ่าย:</label>
            <select id="installment" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option disabled value="">กรุณาเลือกจำนวนงวด</option>
              <option value="1">1 </option>
              <option value="2">2 </option>
              <option value="3">3 </option>
              <option value="4">4 </option>
              <option value="5">5</option>
              <option value="6">6 </option>
            </select>
          </div>
          <p class="mb-3 font-bold  text-gray-700 text-base">
            จำนวนเงินที่ต้องจ่าย: {{ 10000 }}
          </p>
          <p class="mb-3 font-bold  text-gray-700 text-base">
            เลขสัญญาจำนำทอง: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base ">
            วันหมดอายุสัญญา: {{ }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            ราคาจำนำทอง: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            อัตราดอกเบี้ย: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            จำนวนงวด: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            สถานะการจำนำ: {{  }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button style="background-color: #FA2323;"
              class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" id="downloadButton">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download PDF</span>
      </button>
    </div>
    <div class="flex justify-end">
    <button
        style="background-color: #4CAF50;"
        class="hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        id="saveInstallmentButton">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      </svg>
      <span>บันทึกการจ่ายค่างวด</span>
    </button>
    </div>

    <div class="p-5">
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ข้อมูลการจ่ายค่างวด</h5>
    </div>
    <div class="flex justify-center mt-10">
      <div class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12">
        <div class="flex flex-col justify-between p-4 ml-7 leading-normal">
          <p class="mb-3 font-normal text-gray-700 text-base">
            จำนวนเงินที่จ่ายแล้ว: {{  }}
          </p>
          <p class="mb-3 font-bold text-gray-700 text-base ">
            จำนวนงวดที่จ่ายแล้ว: {{  }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            วันจ่ายค่างวดครั้งถัดไป: {{  }}
          </p>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button style="background-color: #122345;"
              class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" id="downloadButton">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
              d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z" />
        </svg>
        <span>จ่ายค่างวด</span>
      </button>
    </div>


    <div class="p-5">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ประวัติการจ่ายค่างวด</h5>
    </div>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold">
      <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center">
      <tr>
        <th scope="col" class="px-6 py-3">
          รหัส
        </th>
        <th scope="col" class="px-6 py-3">
          ประเภทการจ่าย
        </th>
        <th scope="col" class="px-6 py-3">
          จำนวนงวด
        </th>
        <th scope="col" class="px-6 py-3">
          จำนวนเงิน
        </th>
        <th scope="col" class="px-6 py-3">
          วันเวลาที่จ่าย
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  border-b border-gold"
      >
        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
          {{  }}
        </td>
        <td class="px-6 py-4 text-center">
          {{  }}
        </td>
        <td class="px-6 py-4 text-center">
          {{}}
        </td>
        <td class="px-6 py-4 text-center">
          {{  }}
        </td>
        <td class="px-6 py-4 text-center">
          {{ }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore();

definePageMeta({
  middleware: 'authenticated' //Auth checker
})

</script>