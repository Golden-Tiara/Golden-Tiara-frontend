<template>
  <div class="max-w-7xl mx-auto px-10">
    <h5 class="mt-10 font-bold text-2xl text-center">ข้อมูลการเบิกเงิน</h5>

    <div class="mt-10">
      <div class="">
        <div
          class="bg-white border border-gold rounded-lg shadow md:flex-row mt-10"
          v-for="transaction in transactions"
          :key="transaction.id"
        >
          <div class="p-4 ml-7 leading-normal">
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัส: {{ transaction.id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขบัตรประชาชนลูกค้า: {{ transaction.customer_id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              รหัสพนักงานที่เบิก: {{ transaction.created_by }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              จำนวนเงิน: {{ transaction.amount }}
            </p>

            <p class="mb-3 font-normal text-gray-700 text-base">
              สถานะการเบิก:
              <span
                v-if="transaction.status === 'completed'"
                class="px-1 py-0.5 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                >{{ transaction.status }}</span
              >
              <span
                v-if="transaction.status === 'inprogress'"
                class="px-1 py-0.5 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                >{{ transaction.status }}</span
              >
              <span
                v-if="transaction.status === 'rejected'"
                class="px-1 py-0.5 font-semibold leading-tight text-red-700 bg-red-100 rounded"
                >{{ transaction.status }}</span
              >
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              เลขสัญญาการจำนำ: {{ transaction.pawn_id }}
            </p>
            <p class="mb-3 font-normal text-gray-700 text-base">
              วันเวลาเบิก: {{ transaction.transaction_dateTime }}
            </p>
            <div class="flex mb-4 mt-6">
              <button
                @click="confirmAction('completed', transaction)"
                class="px-10 py-2 bg-green-600 mr-2 border text-white rounded-lg"
              >
                ยืนยัน
              </button>
              <button
                @click="confirmAction('rejected', transaction)"
                class="px-2 py-2 bg-red-600 mr-2 border text-white rounded-lg"
              >
                ยกเลิกการเบิกเงิน
              </button>
            </div>

            <div
              v-if="showConfirmationModal"
              class="fixed inset-0 flex items-center justify-center bg-gray-500 overflow-x-hidden h-[calc(100%-1rem)]"
            >
              <div class="bg-white p-8 rounded-lg">
                <h2 class="text-xl font-bold mb-4">ยืนยันการดำเนินการ</h2>
                <p>คุณแน่ใจที่ต้องการดำเนินการนี้หรือไม่?</p>
                <div class="mt-4 flex justify-end">
                  <button
                    @click="updateStatus"
                    class="px-4 py-2 bg-green-600 mr-2 border text-white rounded-lg"
                  >
                    ยืนยัน
                  </button>
                  <button
                    @click="cancelAction"
                    class="px-4 py-2 bg-red-600 text-white rounded-lg"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
  middleware: "authenticated", //Auth checker
});

import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showConfirmationModal = ref(false);
const { data: transactions } = await useMyFetch<any>("transaction", {});

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
    }
  }
};
</script>
