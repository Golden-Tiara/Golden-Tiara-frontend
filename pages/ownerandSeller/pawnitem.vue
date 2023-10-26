<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">ตารางจำนำ</h1>
          <!-- Create new table -->
          <button
            type="button"
            class="text-white flex justify-between bg-darkblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-5"
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
            <input class="border border-gold rounded-md mr-5 px-5 py-2 bg-gray-50 focus:ring-darkgold focus:border-darkgold" 
            type="date" name="" id="">
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
              class="block py-2.5 pl-10 text-sm text-gray-900 border border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold "
              placeholder="Search for items"
            />
          </div>
          <!-- Search Button -->
          <button class="px-4 text-base bg-darkblue hover:bg-blue-800 ml-5 rounded-lg text-white">
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
            <th scope="col" class="px-6 py-4"></th>
            <th scope="col" class="px-6 py-4">รหัสรายการ</th>
            <th scope="col" class="px-6 py-4">ชื่อ</th>
            <th scope="col" class="px-6 py-4">เลขบัตรประชาชนของลูกค้า</th>
            <th scope="col" class="px-6 py-4">รหัสพนักงานที่รับรายการ</th>
            <th scope="col" class="px-6 py-4">วันที่ทำการจำนำ</th>
            <th scope="col" class="px-6 py-4">จำนวนเงินที่ได้รับ (บาท)</th>
            <th scope="col" class="px-6 py-4">อัตราดอกเบี้ย</th>
            <th scope="col" class="px-6 py-4">วันที่ครบกำหนด</th>
            <th scope="col" class="px-6 py-4">สถานะของรายการ</th>
            <th scope="col" class="px-6 py-4"></th>
            <th scope="col" class="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b border-gold"
          >
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              001
            </th>
            <td class="py-4 text-center">สมชาย
              <span>สมพร</span>
            </td>
            <td class="py-4 text-center">1908888</td>
            <td class="py-4 text-center">A01</td>
            <td class="py-4 text-center">12/08/2023</td>
            <td class="py-4 text-center text-green-600">20000</td>
            <td class="py-4 text-center">0.25%</td>
            <td class="py-4 text-center">13/09/2023</td>
            <td class="py-4  text-center">
              <span
                class="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-sm"
              >
                รอยืนยัน
              </span>
            </td>
            <td class="text-center py-4 px-6">
              <a
                href="#"
                class="font-medium text-purple-600 hover:text-purple-800 hover:underline"
                >Edit</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
          <tr
            class="py-4 bg-white border-b border-gold"
          >
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              002
            </th>
            <td class="py-4 text-center">จอน</td>
            <td class="py-4 text-center">1908888</td>
            <td class="py-4 text-center">A01</td>
            <td class="py-4 text-center">12/08/2023</td>
            <td class="py-4 text-center text-green-600">20000</td>
            <td class="py-4 text-center">0.25%</td>
            <td class="py-4 text-center">13/09/2023</td>
            <td class="py-4  text-center">
              <span
                class="px-2 py-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded-sm"
              >
                กำลังดำเนินการ</span
              >
            </td>
            <td class="py-4 px-6 text-center">
              <a
                href="#"
                class="font-medium text-purple-600 hover:text-purple-800 hover:underline"
                >Edit</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
          <tr
            class="bg-white border-b border-gold"
          >
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                <label for="checkbox-table-search-1" class="sr-only"
                  >checkbox</label
                >
              </div>
            </td>
            <th
              scope="row"
              class="py-4 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              003
            </th>
            <td class="py-4 text-center">เต้</td>
            <td class="py-4 text-center">1908888</td>
            <td class="py-4 text-center">A01</td>
            <td class="py-4 text-center">12/08/2023</td>
            <td class="py-4 text-center text-green-600">20000</td>
            <td class="py-4 text-center">0.25%</td>
            <td class="py-4 text-center">13/09/2023</td>
            <td class="py-4   text-center">
              <span
                class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
              >
                เสร็จสิ้น
              </span>
            </td>
            <td class="py-4 text-center px-6">
              <a
                href="#"
                class="font-medium text-center text-purple-600 hover:text-purple-800 hover:underline"
                >Edit</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-center text-red-600 dark:text-red-500 hover:underline"
                >Remove</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
