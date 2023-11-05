<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold text-4xl text-gold text-center">ข้อมูลการเบิกเงิน</h5>

    <div class=" mt-10 items-center justify-center md:flex md:flex-wrap" >
      <div class="bg-white border border-gold justify-center rounded-lg shadow  md:w-5/12 mt-6 mx-auto"
      v-for="transaction in paginatedTranactions"
        :key="transaction.id"
      >
        <div class="  p-4 ml-7 leading-normal">
          <p class="mb-3 font-normal text-gray-700 text-base ">
            รหัส: {{ transaction.id }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขบัตรประชาชนลูกค้า: {{ transaction.customer_id }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            รหัสพนักงานที่เบิก: {{ transaction.created_by }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base" >
            จำนวนเงิน: {{ transaction.amount }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            สถานะการเบิก: {{ transaction.status }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            เลขสัญญาการจำนำ: {{ transaction.pawn_id }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-base">
            วันเวลาเบิก: {{transaction.transaction_dateTime  }}
          </p>
          <div class="flex mb-4 mt-6">
            <button @click="confirmAction('completed', transaction)" class="px-10 py-2 bg-green-600 mr-2 border text-white rounded-lg">ยืนยัน</button>
            <button @click="confirmAction('rejected', transaction)" class="px-2 py-2 bg-red-600 mr-2 border text-white rounded-lg">ยกเลิกการเบิกเงิน</button>
          </div>
           <div v-if="showConfirmationModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div class="bg-white p-8 rounded-lg">
              <h2 class="text-xl font-bold mb-4">ยืนยันการดำเนินการ</h2>
              <p>คุณแน่ใจที่ต้องการดำเนินการนี้หรือไม่?</p>
              <div class="mt-4 flex justify-end"  >
                <button @click="updateStatus" class="px-4 py-2 bg-green-600 mr-2 border text-white rounded-lg">ยืนยัน</button>
                <button @click="cancelAction" class="px-4 py-2 bg-red-600 text-white rounded-lg">ยกเลิก</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center mb-14 mt-6">
       <button
         @click="page--"
         :disabled="page <= 1"
         class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
         :class="{
           'disabled:bg-gold disabled:text-white disabled:cursor-not-allowed':
             page <= 1,
         }"
       >
         หน้าก่อน
       </button>

       <button
         @click="page++"
         :disabled="page >= Math.ceil(transactions.length / perPage)"
         class="mr-2 text-lg bg-darkblue hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:ring-gold focus:outline-none rounded-lg text-white px-8 py-2"
         :class="{
           'disabled:bg-gold  disabled:text-white disabled:cursor-not-allowed':
             page >= Math.ceil(transactions.length / perPage),
         }"
       >
         หน้าถัดไป
       </button>
     </div>
     </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: ["authenticated"]  //Auth checker
});

import { ref } from "vue";
import { useRoute } from "vue-router";

definePageMeta({
  middleware: "authenticated", //Auth checker
});
const route = useRoute();
const showConfirmationModal = ref(false);
const store = useAuthStore();
const page = ref(1); // Initialize page to 1
 const perPage = ref(10);

const { data: transactions } = await useMyFetch<any>("transaction", {
});

let statusToUpdate = "";

let selectedTransaction = ref<any>(null);

const confirmAction = (status: string, transaction: any) => {
  statusToUpdate = status;
  selectedTransaction.value = transaction;
  showConfirmationModal.value = true;
};

const cancelAction = () => {
  showConfirmationModal.value = false;
};

const paginatedTranactions = computed(() => {
   if (Array.isArray(transactions.value)) {
     const start = (page.value - 1) * perPage.value;
     const end = start + perPage.value;
     return transactions.value.slice(start, end);
   } else {
     return [];
   }
 });

const updateStatus = async () => {
  if (selectedTransaction.value) {
    try {
      const transactionId = selectedTransaction.value.id;
      await useMyFetch<any>(`transaction/${transactionId}`, {
        method: "PUT",
        body: { status: statusToUpdate },
      });
      window.location.reload();

      const { data } = await useMyFetch<any>(
        `transaction/${transactionId}`,
        {}
      );
      selectedTransaction.value = data;
      showConfirmationModal.value = false;
    } catch (error) {
      console.error("Error updating status: ", error); 
      window.alert("ไม่สามารถ update สถานะได้");
    }
  }
};
</script>
