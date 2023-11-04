<template>
  <div class="max-w-7xl mx-auto px-10">
    <div class="mb-4 border-b border-gray-200 mt-10">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li
          id="profile-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation"
        >
          <button
            class="inline-block p-4 text-gold border-b-2 border-gold hover:text-gold rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            @click="profileTabs"
          >
            ข้อมูลจำนำทอง
          </button>
        </li>
        <li
          id="dashboard-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation"
        >
          <button
            class="inline-block p-4 rounded-t-lg hover:text-gold"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
            @click="dashboardTabs"
          >
            ข้อมูลการจ่ายค่างวด
          </button>
        </li>
        <li
          id="settings-tab-slide"
          class="mr-2 relative font-normal text w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gold after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
          role="presentation"
        >
          <button
            class="inline-block p-4 rounded-t-lg hover:text-gold"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
            @click="settingsTabs"
          >
            ประวัติการจ่ายค่างวด
          </button>
        </li>
        <li role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gold hover:border-gold"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Contacts
          </button>
        </li>
      </ul>
    </div>
    <div id="default-tab-content">
      <div
        class="hidden p-4 rounded-lg bg-gray-50 h-[500px]"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <div class="flex justify-center mt-10">
          <div
            class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12"
          >
            <!-- Pawn data -->
            <div class="p-4 ml-7 leading-normal">
              <p class="mb-3 font-normal text-gray-700 text-base">
                เลขบัตรประชาชนลูกค้า:
                <span class="text-gold">{{ pawn.customer_id }}</span>
              </p>
              <div class="flex justify-between w-[500px]">
                <div>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    เลขสัญญาจำนำทอง: {{ pawn.id }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    วันเซ็นสัญญา: {{ pawn.contract_date }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    ราคาจำนำทอง:
                    <span class="text-green-500">{{ pawn.loan_amount }}</span>
                  </p>
                  <p class="mb-3 font-normal text-base">
                    จำนวนงวด:
                    <span class="text-purple-500">{{ pawn.total_term }}</span>
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    รูปแบบการรับเงินจำนำ: {{ pawn.shop_payout_type }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    เลขบัญชีรับเงินจำนำ: {{ pawn.customer_account }}
                  </p>
                </div>
                <div>
                  <p class="mb-3 font-bold text-gray-700 text-base">
                    เลขสัญญาตรวจสอบทอง: {{ pawn.examination_id }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    วันสิ้นสุดสัญญา: {{ pawn.expiry_date }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    อัตราดอกเบี้ย:
                    <span class="text-blue-500">{{ pawn.interest_rate }}</span>
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    ค่าปรับ: <span class="text-red-500">{{ pawn.fine }}</span>
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    สถานะการรับเงินจำนำ: {{ pawn.shop_payout_status }}
                  </p>
                  <p class="mb-3 font-normal text-gray-700 text-base">
                    สถานะการจำนำ: {{ pawn.status }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-8">
          <button
            class="bg-darkblue text-white font-bold py-2 px-4 rounded inline-flex items-center hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
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
      <!-- End pawn data -->

      <!-- Pawn money -->
      <div
        class="hidden p-4 rounded-lg bg-gray-50 h-[500px] dark:bg-gray-800"
        id="dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <div class="flex justify-center mt-10">
          <div
            class="flex flex-col items-center bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-10/12"
          >
            <div class="flex flex-col justify-between px-4 py-8 ml-7 leading-normal">
              <p class="mb-3 font-normal text-gray-700 text-base">
                จำนวนเงินที่จ่ายแล้ว:
                <span class="text-green-500">{{ pawn.paid_amount }}</span>
              </p>
              <p class="mb-3 font-bold text-gray-700 text-base">
                จำนวนงวดที่จ่ายแล้ว:
                <span class="text-purple-500">{{ pawn.paid_term }}</span>
              </p>
              <p class="mb-3 font-normal text-gray-700 text-base">
                วันจ่ายค่างวดครั้งถัดไป:
                <span class="text-blue-500">{{ pawn.next_payment }}</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center mt-6">
          <button
            @click="qrPayment"
            class="bg-darkblue text-white font-bold py-2 px-4 inline-flex items-center hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg"
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
      <!-- End pawn money-->
      <div
        class="hidden p-4 rounded-lg bg-gray-50 h-[500px] dark:bg-gray-800"
        id="settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <table
          class="w-full text-sm text-left text-gray-500 mt-6 border border-gold"
        >
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 border border-gold rounded-t-lg text-center"
          >
            <tr>
              <th scope="col" class="px-6 py-3">รหัส</th>
              <th scope="col" class="px-6 py-3">ประเภทการจ่าย</th>
              <th scope="col" class="px-6 py-3">จำนวนงวด</th>
              <th scope="col" class="px-6 py-3">จำนวนเงิน</th>
              <th scope="col" class="px-6 py-3">วันเวลาที่จ่าย</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white hover:bg-gray-50 dark:hover:bg-gray-600 border-b border-gold"
              v-for="transaction of paginatedTranactions"
              :key="transaction.id"
            >
              <td
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {{ transaction.id }}
              </td>
              <td class="px-6 py-4 text-center">
                {{ transaction.type }}
              </td>
              <td class="px-6 py-4 text-center">
                <span class="text-purple-500">{{ transaction.term }}</span>
              </td>
              <td class="px-6 py-4 text-center">
                <span class="text-green-500">{{ transaction.amount }}</span>
              </td>
              <td class="px-6 py-4 text-center">
                {{ transaction.transaction_dateTime }}
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="mt-6 flex items-center justify-center mb-14"
          v-if="
            pawn.value &&
            pawn.value.transactions &&
            pawn.value.transactions.length >= 6
          "
        >
          <button
            @click="page--"
            :disabled="page <= 1"
            class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
            :class="{
              'disabled:bg-gold disabled:text-white disabled:cursor-not-allowed':
                page <= 1,
            }"
          >
            ก่อนหน้า
          </button>
          <button
            @click="page++"
            :disabled="
              page >=
              Math.ceil((pawn.value.transactions || []).length / perPage)
            "
            class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
            :class="{
              'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
                page >=
                Math.ceil((pawn.value.transactions || []).length / perPage),
            }"
          >
            หน้าถัดไป
          </button>
        </div>
      </div>
      <div
        class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p class="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong class="font-medium text-gray-800 dark:text-white"
            >Contacts tab's associated content</strong
          >. Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>

    <div class="flex flex-wrap justify-start gap-10 mt-10">
      <div v-for="gold of pawn.golds" :key="gold.id">
        <div
          class="max-w-sm flex-none bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              v-if="gold.image_path"
              class="rounded-t-lg max-h-72 w-72 dark:bg-gray-800"
              :src="`http://localhost/images/gold/${gold.image_path}`"
              alt=""
            />
            <img
              v-else
              class="rounded-t-lg max-h-72 w-72 dark:bg-gray-800"
              src="@/assets/images/gold-default.png"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ gold.id }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              น้ำหนักทอง: {{ gold.weight }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              ความบริสุทธ์: {{ gold.purity }}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              สถานะ: {{ gold.status }}
            </p>

            <nuxt-link :to="`/gold/${gold.id}`">
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
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <QrPayment></QrPayment>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
import useMyFetch from "~/composables/useMyFetch";
import { ref, computed } from "vue"; // นำเข้า ref และ computed

const page = ref(1); // เพิ่ม ref สำหรับ page
const perPage = ref(6); // เพิ่ม ref สำหรับ perPage

definePageMeta({
  middleware: "authenticated", //Auth checker
});

const qrPayment = function () {
  const qrPayment = document.getElementById("qr-payment-modal");
  qrPayment?.classList.remove("hidden");
};

const paginatedTranactions = computed(() => {
  if (pawn.value && pawn.value.transactions) {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return pawn.value.transactions.slice(start, end);
  } else {
    return [];
  }
});

const selectedTab = ref(""); // เพิ่ม ref สำหรับการเก็บ Tab ที่ถูกเลือก


const profileTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profileTabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");
  const settingTab = document.getElementById("settings-tab");
  const settingTabSlide = document.getElementById("settings-tab-slide");

  dashboardTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  settingTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  profileTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  profileTab?.classList.remove("border-b-2", "border-gold");
  profileTab?.classList.add("text-gold", "border-b-2", "border-gold");
  dashboardTab?.classList.remove('border-b-2')
  settingTab?.classList.remove('border-b-2')
};

const dashboardTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profileTabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");
  const settingTab = document.getElementById("settings-tab");
  const settingTabSlide = document.getElementById("settings-tab-slide");

  profileTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  settingTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  dashboardTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  dashboardTab?.classList.add("text-gold", "border-b-2", "border-gold");
  profileTab?.classList.remove('border-b-2')
  settingTab?.classList.remove('border-b-2')

};

const settingsTabs = function () {
  const profileTab = document.getElementById("profile-tab");
  const profiletabSlide = document.getElementById("profile-tab-slide");
  const dashboardTab = document.getElementById("dashboard-tab");
  const dashboardTabSlide = document.getElementById("dashboard-tab-slide");
  const settingTab = document.getElementById("settings-tab");
  const settingTabSlide = document.getElementById("settings-tab-slide");

  dashboardTabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  profiletabSlide?.classList.add(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );

  settingTabSlide?.classList.remove(
    "relative",
    "font-normal",
    "text",
    "w-fit",
    "block",
    "after:block",
    "after:content-['']",
    "after:absolute",
    "after:h-[2px]",
    "after:bg-gold",
    "after:w-full",
    "after:scale-x-0",
    "after:hover:scale-x-100",
    "after:transition",
    "after:duration-300",
    "after:origin-center"
  );
  
  settingTab?.classList.add("text-gold", "border-b-2", "border-gold");
  profileTab?.classList.remove('border-b-2')
  dashboardTab?.classList.remove('border-b-2')
};

const route = useRoute();
const { data: pawn } = await useMyFetch<any>(`pawn/${route.params.id}`, {});
console.log(pawn);
</script>
