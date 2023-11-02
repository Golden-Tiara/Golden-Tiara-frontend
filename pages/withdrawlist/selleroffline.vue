<template>
  <div class="payment-form">
    <form @submit.prevent="search">
      <div>
        <label for="customerId">เลขบัตรประชาชนลูกค้า:</label>
        <input type="text" id="customerId" v-model="customerId">
      </div>

      <div>
        <label for="contractId">เลขสัญญาจำนำทอง:</label>
        <input type="text" id="contractId" v-model="contractId">
      </div>

      <button type="submit">ยืนยัน</button>
    </form>

    <div v-if="showNotFound">
      ไม่พบข้อมูลโปรดกรอกข้อมูลใหม่อีกครั้ง
    </div>
  </div>
</template>

<script>
definePageMeta({
  middleware: 'authenticated' //Auth checker
})
export default {
  data() {
    return {
      customerId: '',
      contractId: '',
      showNotFound: false
    };
  },
  methods: {
    async search() {
      try {
        const response = await this.findPaymentInfo(this.customerId, this.contractId);
        // จัดการกับข้อมูลที่ได้จาก response
        if (!response) {
          this.showNotFound = true;
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    async findPaymentInfo(customerId, contractId) {
      // ตรงนี้ควรเป็นการเรียก API หรือวิธีการอื่นๆ ในการค้นหาข้อมูลในฐานข้อมูล
      // ตัวอย่าง: return await axios.get(`/api/payments?customerId=${customerId}&contractId=${contractId}`);
      return null; // สมมติว่าไม่พบข้อมูล
    }
  }
};
</script>

<style scoped>
.payment-form label {
  margin-right: 10px;
}

.payment-form input[type="text"] {
  margin-right: 20px;
}

.payment-form button {
  cursor: pointer;
}
</style>
