<template>

    <div class="promptpay-payment bg-white shadow-md p-4 rounded-md">
      <h1 class="text-2xl font-semibold mb-4">PromptPay Payment</h1>
      <div class="qr-code">
        <img
            class="rounded-t-md w-80 h-80 pb-4"
            src="@/assets/images/payment/qrcode.png"
            alt="PromptPay QR Code" />
      </div>
      <div class="payment-info">
        <h2 class="text-xl font-semibold mt-4 mb-2">Payment Information</h2>
        <p class="mb-2">Recipient Name: {{ recipientName }}</p>
        <p class="mb-2">Mobile Number: {{ mobileNumber }}</p>
        <p>Amount: {{ amount }}</p>
      </div>
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" @click="confirmPayment">
          Confirm Payment
        </button>

        <div v-if="isAlertVisible" class="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex items-center">
            <div>
              <p class="font-bold">Payment Success</p>
              <p class="text-sm">Your payment has been successfully processed.</p>
            </div>
          </div>
        </div>
      </div>


    </div>
</template>

<script>
export default {
  data() {
    return {
      recipientName: "John Doe",
      mobileNumber: "0812345678",
      amount: "100.00",
      isLoading: false,
      isAlertVisible: false,

    };
  },
  methods: {

    confirmPayment() {
      this.isAlertVisible = true;
      setTimeout(() => {
        this.isAlertVisible = false;
      }, 3000); // หน่วงเวลา 3 วินาที
    },
  },
};
</script>
