<template>
  <div>
    <div class="filters">
      <input v-model="search" type="text" placeholder="Search..." @input="applyFilter" />
      <!-- สามารถเพิ่ม filters อื่นๆ ที่นี่ -->
    </div>

    <table>
      <thead>
      <tr>
        <th v-for="field in fields" :key="field.key" @click="sortTable(field.key)">
          {{ field.label }}
          <span v-if="sortKey === field.key">{{ sortOrder }}</span>
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in paginatedData" :key="item.contractCode">
        <td>{{ item.contractCode }}</td>
        <td>{{ item.loanNumber }}</td>
        <td>{{ item.employeeId }}</td>
        <td>{{ item.amount }}</td>
        <td>{{ item.status }}</td>
        <td>{{ item.withdrawalTime }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="page--" :disabled="page <= 1">Prev</button>
      <button @click="page++" :disabled="page >= pageCount">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      sortKey: '',
      sortOrder: 'asc',
      page: 1,
      perPage: 10,
      fields: [
        { key: 'contractCode', label: 'รหัสสัญญา' },
        { key: 'loanNumber', label: 'เลขสัญญาจำนำ' },
        { key: 'employeeId', label: 'รหัสพนักงาน' },
        { key: 'amount', label: 'จำนวนเงิน' },
        { key: 'status', label: 'สถานะ' },
        { key: 'withdrawalTime', label: 'วันเวลาเบิก' },
      ],
      withdrawals: [
        { contractCode: '001', loanNumber: 'LN-123', employeeId: 'E-001', amount: 5000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },
        // ... ข้อมูลอื่นๆ ...
      ],
    };
  },
  computed: {
    filteredData() {
      return this.withdrawals.filter((item) => {
        return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    sortedData() {
      return this.filteredData.sort((a, b) => {
        let modifier = 1;
        if (this.sortOrder === 'desc') modifier = -1;
        if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
        if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
        return 0;
      });
    },
    paginatedData() {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      return this.sortedData.slice(start, end);
    },
    pageCount() {
      return Math.ceil(this.sortedData.length / this.perPage);
    },
  },
  methods: {
    applyFilter() {
      this.page = 1; // Reset to first page on filter change
    },
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortKey = key;
        this.sortOrder = 'asc';
      }
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  cursor: pointer;
}
.filters input {
  margin-bottom: 10px;
}
.pagination button {
  margin-right: 5px;
}
</style>
