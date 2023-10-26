<template>
  <div>
    <!-- ส่วนของการเลือกจำนวนงวด -->
    <div>
      <label>เลือกจำนวนงวด: </label>
      <select v-model="selectedInstallment">
        <option v-for="n in 24" :key="n" :value="n">{{ n }}</option>
      </select>
    </div>

    <!-- ส่วนของรายละเอียดการจ่าย -->
    <div>
      <p>จำนวนเงินที่ต้องจ่าย: {{ amountDue }}</p>
      <!-- แสดงข้อมูลอื่น ๆ ตามที่คุณระบุ -->
    </div>

    <!-- ส่วนของประวัติการจ่าย -->
    <div>
      <!-- ใส่ตารางแสดงประวัติการจ่ายที่นี่ -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedInstallment: 1,
      amountDue: 0,  // ค่าเริ่มต้น, คุณอาจต้องดึงข้อมูลจาก backend
      // ข้อมูลอื่น ๆ ที่ต้องการ
    };
  },
  methods: {
    // คุณอาจต้องเพิ่มเมธอดที่นี่ เช่น การดึงข้อมูลจาก backend
  }
};
</script>

<style scoped>
/* สไตล์สำหรับหน้านี้ */
</style>
