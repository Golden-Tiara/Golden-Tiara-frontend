<template>
    <div class="max-w-7xl mx-auto px-10">
    <div class="flex flex-wrap justify-start gap-10 mt-10">
      <!-- Card 1 -->
      <div class="max-w-sm flex-none bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg max-h-72 w-72 dark:bg-gray-800"
            src="@/assets/images/G00.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              G00
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            น้ำหนักทอง: 2 บาท 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            คำอธิบาย: ทองเก่ารับซื้อจากลูกค้า
          </p> 
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ความบริสุทธ์: 99% 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           ราคาปัจจุบัน: 60000 บาท 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            สถานะ: อยู่ระหว่างการจำนำ
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            เลือก
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
  
      <!-- Card 2 (You can add more cards as needed) -->
      <div class="max-w-sm flex-none bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg max-h-72 w-72 dark:bg-gray-800"
            src="@/assets/images/G00.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              G01
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            น้ำหนักทอง: ทอง 2 บาท 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            คำอธิบาย: ทองเก่ารับซื้อจากลูกค้า
          </p> 
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ความบริสุทธ์: 99% 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
           ราคาปัจจุบัน: 60000 บาท 
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            สถานะ: อยู่ระหว่างการจำนำ
          </p>
          <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-darkblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            เลือก
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">สัญญาตรวจสอบทอง</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="I00"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">สัญญาจำนำทอง</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="P00"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">เลขบัตรประชาชนลูกค้า</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">วันเซ็นสัญญา</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">วันหมดอายุสัญญา</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ราคาจำนำทอง</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">อัตราดอกเบี้ย</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">จำนวนงวด</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">ค่าปรับ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">รูปแบบการรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">สถานะการรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">เลขบัญชีรับเงินจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">สถานะการจำนำ</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
      <div class="flex justify-end">
        <button style="background-color: #FA2323;" class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" id="downloadButton">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Download PDF</span>
        </button>
      </div>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >ข้อมูลการจ่ายค่างวด</h5>
          </a>
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">จำนวนเงินที่จ่ายแล้ว</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div>
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">จำนวนงวดที่จ่ายแล้ว</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div class="justify-between items-center"> 
        <div class="items-center">
        <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">วันจ่ายค่างวดครั้งถัดไป</label>
        <input
            type="text"
            id="small-input"
            class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="123"
            readonly
        >
        </div>
        <div class="flex justify-end">
        <button style="background-color: #122345;" class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center" id="downloadButton">
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z"/>
          </svg>
          <span>จ่ายค่างวด</span>
        </button>
      </div>
        </div>


        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >ประวัติการจ่ายค่างวด</h5>
          </a>
        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center">
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
                                วันที่จ่าย
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600  border-b border-gold">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">
                                I00
                            </th>
                            <td class="px-6 py-4 text-center">
                                1890
                            </td>
                            <td class="px-6 py-4 text-center">
                                1890
                            </td>
                            <td class="px-6 py-4 text-center">
                                189
                            </td>
                            <td class="px-6 py-4 text-center">
                                18/09/2023
                            </td>
                        </tr>
                    </tbody>
                </table>
  </div>
</template>