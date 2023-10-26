<template>
  <section class="max-w-7xl mx-auto p-0">
    <div class="relative overflow-x-auto">
      <div class="pb-4 bg-white dark:bg-gray-900">
        <div class="flex justify-between items-center mt-12">
          <h1 class="text-5xl text-gold">เพิ่มรายการตรวจสอบทอง Owner&Seller</h1>
          <!-- Create new table -->
          <button
            type="button"
            class="text-white flex justify-between bg-darkblue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-5 mr-2"
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
            เพิ่มรายากร
          </button>
        </div>

        <!-- Citizen ID Input Box -->
        <div class="flex mt-20 mb-5">
          <!-- Citizen ID Input -->
          <div class="relative">
            <!-- Search -->
            <input
              type="text"
              id="table-search"
              class="block py-2.5 text-sm text-gray-900 border-2 border-gold rounded-lg w-80 bg-gray-50 focus:ring-darkgold focus:border-darkgold"
              placeholder="เลขบัตรประชาชน"
            />
          </div>

          <!-- Add Button -->
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            class="block ml-5 text-white bg-darkblue hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            บันทึก
          </button>

          <!-- popup modal -->
          <div
            id="popup-modal"
            tabindex="-1"
            class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative w-full max-w-md max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="p-6 text-center">
                  <svg
                    class="mx-auto mb-4"
                    width="50px"
                    height="50px"
                    viewBox="0 0 117 117"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <title />

                    <desc />

                    <defs />

                    <g
                      fill="none"
                      fill-rule="evenodd"
                      id="Page-1"
                      stroke="none"
                      stroke-width="1"
                    >
                      <g fill-rule="nonzero" id="correct">
                        <path
                          d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z"
                          fill="#17AB13"
                          id="Shape"
                        />

                        <path
                          d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z"
                          fill="#4A4A4A"
                          id="Shape"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3
                    class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                  >
                    ยืนยันการบันทึกรายการหรือไม่?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                  >
                    บันทึกรายการ
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                  >
                    ยกเลิกรายการ
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- End popup modal -->
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
            <th scope="col" class="px-6 py-4">รหัส</th>
            <th scope="col" class="px-6 py-4">น้ำหนัก</th>
            <th scope="col" class="px-6 py-4">ความบริสุทธิ์</th>
            <th scope="col" class="px-6 py-4">คำอธิบาย</th>
            <th scope="col" class="px-6 py-4"></th>
            <th scope="col" class="px-6 py-4"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b border-gold">
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
            <td class="py-4 text-center">
              สมชาย
              <span>สมพร</span>
            </td>
            <td class="py-4 text-center">1908888</td>
            <td class="py-4 text-center">1908888</td>

            <td class="text-center py-4 px-6">
              <a
                href="#"
                class="font-medium text-purple-600 hover:text-purple-800 hover:underline"
                >แก้ไข</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                data-modal-target="popup-modal-remove"
                data-modal-toggle="popup-modal-remove"
                class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
              >
                ลบทิ้ง
              </a>
              <!-- popup modal -->
              <div
                id="popup-modal-remove"
                tabindex="-1"
                class="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
              >
                <div class="relative w-full max-w-md max-h-full">
                  <div
                    class="relative bg-white rounded-lg shadow dark:bg-gray-700"
                  >
                    <button
                      type="button"
                      class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="popup-modal-remove"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-6 text-center">
                      <svg
                        class="mx-auto mb-4"
                        width="50px"
                        height="50px"
                        viewBox="0 0 117 117"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        fill="#000000"
                        stroke="#000000"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <title></title>
                          <desc></desc>
                          <defs></defs>
                          <g
                            fill="none"
                            fill-rule="evenodd"
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                          >
                            <g fill-rule="nonzero" id="cancel">
                              <path
                                d="M58.5,116.6 C90.5,116.6 116.6,90.6 116.6,58.5 C116.6,26.4 90.5,0.4 58.5,0.4 C26.5,0.4 0.4,26.5 0.4,58.5 C0.4,90.5 26.5,116.6 58.5,116.6 Z M58.5,8.6 C86,8.6 108.4,31 108.4,58.5 C108.4,86 86,108.4 58.5,108.4 C31,108.4 8.6,86 8.6,58.5 C8.6,31 31,8.6 58.5,8.6 Z"
                                fill="#4A4A4A"
                                id="Shape"
                              ></path>
                              <path
                                d="M36.7,79.7 C37.5,80.5 38.5,80.9 39.6,80.9 C40.7,80.9 41.7,80.5 42.5,79.7 L58.5,63.7 L74.5,79.7 C75.3,80.5 76.3,80.9 77.4,80.9 C78.5,80.9 79.5,80.5 80.3,79.7 C81.9,78.1 81.9,75.5 80.3,73.9 L64.3,57.9 L80.3,41.9 C81.9,40.3 81.9,37.7 80.3,36.1 C78.7,34.5 76.1,34.5 74.5,36.1 L58.5,52.1 L42.5,36.1 C40.9,34.5 38.3,34.5 36.7,36.1 C35.1,37.7 35.1,40.3 36.7,41.9 L52.7,57.9 L36.7,73.9 C35.1,75.5 35.1,78.1 36.7,79.7 Z"
                                fill="#ff0000"
                                id="Shape"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <h3
                        class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
                      >
                        ยืนยันการลบรายการชิ้นนี้หรือไม่?
                      </h3>
                      <button
                        data-modal-hide="popup-modal-remove"
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-6 py-2.5 text-center mr-2"
                      >
                        ยืนยัน
                      </button>
                      <button
                        data-modal-hide="popup-modal-remove"
                        type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                      >
                        ยกเลิก
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End popup modal -->
            </td>
          </tr>
          <tr class="py-4 bg-white border-b border-gold">
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
            <td class="py-4 text-center">1908888</td>

            <td class="py-4 px-6 text-center">
              <a
                href="#"
                class="font-medium text-purple-600 hover:text-purple-800 hover:underline"
                >แก้ไข</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                class="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                data-modal-target="popup-modal-remove"
                data-modal-toggle="popup-modal-remove"
                >ลบทิ้ง
            </a>

            </td>
          </tr>
          <tr class="bg-white border-b border-gold">
            <td class="w-5 p-7">
              <div class="flex items-center">
                <input
                  id="checkbox-table-search-1"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
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
            <td class="py-4 text-center">1908888</td>

            <td class="py-4 text-center px-6">
              <a
                href="#"
                class="font-medium text-center text-purple-600 hover:text-purple-800 hover:underline"
                >แก้ไข</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-center text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                data-modal-target="popup-modal-remove"
                data-modal-toggle="popup-modal-remove"
                >ลบทิ้ง</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
