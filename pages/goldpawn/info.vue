<template>
  <section class="max-w-7xl mx-auto px-10">
    <!-- Tabs -->
    <div class="mb-4 border-b border-gray-200  mt-10">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="mr-2 " role="presentation" >
          <button
            class="inline-block py-4 px-10 border-b-2 border-gold rounded-t-lg text-gold"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block py-4 px-10 border-b-2 border-gold rounded-t-lg text-gold hover:text-gray-600 hover:border-gray-300"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Dashboard
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block py-4 px-10 border-b-2 border-gold rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-gold"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            ข้อมูลการจ่ายงวด
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block py-4 px-10 border-b-2 border-gold rounded-t-lg hover:text-gray-600 hover:border-gray-300 text-gold"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            ประวัติการจ่ายค่างวด
          </button>
        </li>
      </ul>
    </div>
    <!-- End tabs -->

    <!-- Tabs info -->
    <div id="default-tab-content">
      <!-- Tabs profile -->
      <div
        class="hidden p-4 rounded-lg border border-gold"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <!-- Card 1 -->
        <div class="flex justify-center mt-10 mb-10">
          <a
            href="#"
            class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-8/12 hover:bg-gray-100"
          >
            <img
              class="object-cover w-auto rounded h-60 md:h-auto md:w-[220px] md:rounded-none md:rounded-l-lg"
              src="@/assets/images/G00.jpg"
              alt=""
            />
            <div class="flex flex-col justify-between p-4 ml-5 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                G00
              </h5>
              <div class="flex justify-between">
                <p class="mb-3 font-normal text-sm text-gray-700 mr-5">
                  น้ำหนักทอง: 2 บาท
                </p>

                <p class="mb-3 font-normal text-gray-700 text-sm">
                  ความบริสุทธ์: 99%
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-700 text-sm">
                คำอธิบาย: ทองเก่ารับซื้อจากลูกค้า
              </p>
              <p class="mb-3 font-normal text-gray-700 text-sm mr-5">
                ราคาปัจจุบัน:
                <span class="mb-3 font-normal text-green-500">60000</span> บาท
              </p>

              <p class="mb-3 font-normal text-gray-700 text-sm">
                สถานะ:
                <span
                  class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                >
                  อยู่ระหว่างจำนำ</span
                >
              </p>
              <button
                class="flex items-center justify-center mt-2 rounded-lg bg-darkblue text-sm text-white w-36 py-1 hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold"
              >
                รายละเอียด
                <span>
                  <svg
                    class="w-3 h-3 ml-2"
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
                </span>
              </button>
            </div>
          </a>
        </div>
        <!-- End Card 1 -->
      </div>
      <!-- End Tabs Profile -->

      <!-- Tabs Dashboard -->
      <div
        class="hidden p-4 rounded-lg border border-gold"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div class="px-20">
          <div class="flex justify-evenly">
            <p>สัญญาตรวจสอบทอง: 1231</p>
            <p>สัญญาจำนำ: 123</p>
          </div>
          <div class="flex justify-start">
            <p>เลขบัตรประชนลูกค้า: 1231</p>
          </div>
          <div class="flex justify-evenly">
            <p>วันเซ็นสัญญา: 1231</p>
            <p>วันหมดอายุสัญญา: 123</p>
          </div>
          <div class="flex justify-evenly">
            <p>ราคาจำนำทอง: 1231</p>
            <p>อัตราดอกเบี้ย: 123</p>
          </div>
          <div class="flex justify-evenly">
            <p>จำนวนงวด: 1231</p>
            <p>ค่าปรับ: 123</p>
          </div>
          <div class="flex justify-evenly">
            <p>รูปแบบการรับเงินจำนำ: 1231</p>
            <p>สถานะการรับเงินจำนำ: 123</p>
          </div>
          <div class="flex justify-evenly">
            <p>เลขบัญชีรับเงินจำนำ: 1231</p>
            <p>สถานะการจำนำ: 123</p>
          </div>
          <div class="flex justify-center ">
            <button
              style="background-color: #fa2323"
              class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              id="downloadButton"
            >
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
      <!-- End Tabs Dashboard -->

      <!-- Tabs การจ่ายงวด -->
      <div
        class="hidden p-4 rounded-lg border border-gold"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        ข้อมูลการจ่ายค่างวด
        <div class="flex">
          <p>จำนวนงวดที่จ่ายแล้ว: 1231</p>
          <p>จำนวนงวดที่จ่ายแล้ว: 123</p>
          <p>วันจ่ายค่างวดครั้งถัดไป: 123</p>
        </div>
        <div class="flex justify-center">
          <button
            style="background-color: #122345"
            class="hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            id="downloadButton"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M5.5 5c-.655 0-.66 1.01 0 1h22c.286 0 .5.214.5.5v13c0 .66 1 .66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2c-.654 0-.654 1 0 1h22c.286 0 .5.214.5.5v13c0 .665 1.01.66 1 0v-13c0-.822-.678-1.5-1.5-1.5h-22zm-2 2C.678 9 0 9.678 0 10.5v12c0 .822.678 1.5 1.5 1.5h22c.822 0 1.5-.678 1.5-1.5v-12c0-.822-.678-1.5-1.5-1.5h-22zm0 1h22c.286 0 .5.214.5.5v12c0 .286-.214.5-.5.5h-22c-.286 0-.5-.214-.5-.5v-12c0-.286.214-.5.5-.5zm1 1c-.276 0-.5.224-.5.5v2c0 .672 1 .656 1 0V12h1.5c.672 0 .656-1 0-1h-2zm10 0C9.468 11 7 13.468 7 16.5S9.468 22 12.5 22s5.5-2.468 5.5-5.5-2.468-5.5-5.5-5.5zm8 0c-.656 0-.672 1 0 1H22v1.5c0 .656 1 .672 1 0v-2c0-.276-.224-.5-.5-.5h-2zm-8 1c2.49 0 4.5 2.01 4.5 4.5S14.99 21 12.5 21 8 18.99 8 16.5s2.01-4.5 4.5-4.5zm0 1c-.277 0-.5.223-.5.5v.594c-.578.21-1 .76-1 1.406 0 .82.68 1.5 1.5 1.5.28 0 .5.212.5.5 0 .288-.22.5-.5.5h-1c-.338-.005-.5.248-.5.5s.162.505.5.5h.5v.5c0 .277.223.5.5.5s.5-.223.5-.5v-.594c.578-.21 1-.76 1-1.406 0-.82-.68-1.5-1.5-1.5-.28 0-.5-.212-.5-.5 0-.288.22-.5.5-.5h1c.338.005.5-.248.5-.5s-.162-.505-.5-.5H13v-.5c0-.277-.223-.5-.5-.5zm-10 6.002c-.25-.002-.5.162-.5.498v2c0 .276.224.5.5.5h2c.656 0 .672-1 0-1H3v-1.5c0-.328-.25-.496-.5-.498zm20 0c-.25.002-.5.17-.5.498V21h-1.5c-.672 0-.656 1 0 1h2c.276 0 .5-.224.5-.5v-2c0-.336-.25-.5-.5-.498z"
              />
            </svg>
            <span>จ่ายค่างวด</span>
          </button>
        </div>
      </div>
      <!-- End Tabs การจ่ายงวด -->

      <!-- Tabs ประวัติการจ่ายค่างวด -->
      <div
        class="hidden p-4 rounded-lg border border-gold"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p>ประวัติการจ่ายค่างวด</p>
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-6 border border-gold"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border border-gold rounded-t-lg text-center"
          >
            <tr>
              <th scope="col" class="px-6 py-3">รหัส</th>
              <th scope="col" class="px-6 py-3">ประเภทการจ่าย</th>
              <th scope="col" class="px-6 py-3">จำนวนงวด</th>
              <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
              <th scope="col" class="px-6 py-3">วันที่จ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border-b border-gold"
            >
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                I00
              </th>
              <td class="px-6 py-4 text-center">1890</td>
              <td class="px-6 py-4 text-center">1890</td>
              <td class="px-6 py-4 text-center">189</td>
              <td class="px-6 py-4 text-center">18/09/2023</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End Tabs ประวัติการจ่ายค่างวด -->
    </div>
    <!-- End Tabs info -->
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import { FwbTab, FwbTabs } from "flowbite-vue";

const activeTab = ref("first");
</script>
