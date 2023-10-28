<template>
  <div class="p-6">
    <div class="filters mb-4">
      <input v-model="search" type="text" placeholder="Search..." @input="applyFilter" class="border-2 border-gold1-400 p-2 rounded" />
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse border-2 border-gold1-400">
        <thead>
        <tr>
          <th v-for="field in fields" :key="field.key" @click="sortTable(field.key)" class="border-b-2 border-gold1-400 p-3 bg-gold-100">
            {{ field.label }}
            <span v-if="sortKey === field.key">{{ sortOrder }}</span>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in paginatedData" :key="item.contractCode" class="border-b-2 border-gold1-400 hover:bg-gold1-200">
          <td class="p-3">{{ item.contractCode }}</td>
          <td>{{ item.loanNumber }}</td>
          <td>{{ item.amount }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.withdrawalTime }}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination mt-4 flex">
      <button @click="page--" :disabled="page <= 1" class="mr-2 bg-gold1-400 text-white px-4 py-2 rounded disabled:bg-gold1-300 disabled:text-black disabled:cursor-not-allowed">Prev</button>
      <button @click="page++" :disabled="page >= pageCount" class="bg-gold1-400 text-white px-4 py-2 rounded disabled:bg-gold1-300 disabled:text-black disabled:cursor-not-allowed">Next</button>
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
        { key: 'amount', label: 'จำนวนเงิน' },
        { key: 'status', label: 'สถานะ' },
        { key: 'withdrawalTime', label: 'วันเวลาเบิก' },
      ],
      withdrawals: [
        { contractCode: '001', loanNumber: 'LN-123',  amount: 5000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },
        { contractCode: '002', loanNumber: 'LN-124',  amount: 3000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },
        { contractCode: '003', loanNumber: 'LN-125',  amount: 7000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },
        { contractCode: '004', loanNumber: 'LN-126',  amount: 5000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },
        { contractCode: '005', loanNumber: 'LN-127',  amount: 7000, status: 'Approved', withdrawalTime: '2023-10-01 10:00' },

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
