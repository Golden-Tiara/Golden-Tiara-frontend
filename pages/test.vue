
import { CompleteEvent } from '#build/components';
<template>
  <button class="bg-darkblue text-white"
  @click="confirm"
  >gihftoj</button>
  <CompleteEvent></CompleteEvent>
</template>

<script setup lang="ts">
const confirm = function () {
  const loadingModal = document.getElementById("loading-modal") as HTMLElement;
  const paymentCompleteModal = document.getElementById("payment-complete-modal") as HTMLElement;

  if (loadingModal && paymentCompleteModal) {
    loadingModal.classList.remove("hidden");

    setTimeout(() => {
      loadingModal.classList.add("hidden");
      paymentCompleteModal.classList.remove("hidden");
    }, 3000);
  }
};

const closeModal = () => {
  const modal = document.getElementById("payment-complete-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
  window.location.reload();
};
</script>