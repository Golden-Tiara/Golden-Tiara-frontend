<template>
  <div>
    <h1>My Profile</h1>
    <p><strong>Name:</strong> {{ user.name }}</p>
    <p><strong>Surname:</strong> {{ user.surname }}</p>
    <p><strong>เลขบัตรประชาชน:</strong> {{ user.national_id }}</p>
    <!-- แสดงข้อมูลอื่นๆ ตามต้องการ -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${this.$store.state.auth.token}` // ใช้ Vuex สำหรับจัดการ token
        }
      });
      this.user = response.data;
    } catch (error) {
      console.error(error);
      // จัดการกับข้อผิดพลาด
    }
  }
};
</script>
