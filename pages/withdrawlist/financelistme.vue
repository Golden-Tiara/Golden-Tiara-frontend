<template>
  <div class="max-w-7xl mx-auto px-10 mt-20">
    <h1 class="text-gold mb-4 text-3xl">หน้าอะไรนิ</h1>

    <div class="flex mb-10">
      <div>
        <input
          v-model="search"
          type="text"
          placeholder="ค้นหาจากตัวเลข"
          @input="applyFilter"
          class="border border-gold p-2 rounded focus:ring-darkgold focus:border-darkgold"
        />
      </div>
      <button
        @click="sortItem"
        class="flex items-center bg-darkblue text-white px-4 py-2 rounded-xl ml-4"
      >
        <span id="date-sort">กดเพื่อเรียงข้อมูล</span>
        <span
          id="less-to-more"
          :class="{ hidden: sortOrder === 'asc' }"
          class="flex hidden px-1"
        >
          น้อยไปมาก
          <svg
            viewBox="0 0 24 24"
            fill="none"
            class="ml-1 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <!-- รายละเอียดของไอคอน "น้อยไปมาก" -->
          </svg>
        </span>
        <span
          id="more-to-less"
          :class="{ hidden: sortOrder === 'desc' }"
          class="flex hidden px-1"
        >
          มากไปน้อย
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-1 h-6 w-6"
          >
            <!-- รายละเอียดของไอคอน "มากไปน้อย" -->
          </svg>
        </span>
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse border border-gold">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold rounded-t-lg text-center"
        >
          <tr>
            <th class="px-6 py-4">รหัสสัญญา</th>
            <th class="px-6 py-4">เลขสัญญาจำนำ</th>
            <th class="px-6 py-4">จำนวนเงิน</th>
            <th class="px-6 py-4">สถานะ</th>
            <th class="px-6 py-4">วันเวลาเบิก</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in paginatedData"
            :key="item.contractCode"
            class="border border-gold text-gray-500 text-center hover:bg-gray-50"
          >
            <td class="p-3">{{ item.contractCode }}</td>
            <td>{{ item.loanNumber }}</td>
            <td class="text-green-500">{{ item.amount }}</td>
            <td>{{ item.status }}</td>
            <td class="text-purple-500">
              {{
                new Date(item.withdrawalTime).toLocaleDateString("th-TH", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pagination mt-4 flex">
      <button
        @click="page--"
        :disabled="page <= 1"
        class="mr-2 bg-gold text-white px-4 py-2 rounded disabled:bg-gold1-300 disabled:text-black disabled:cursor-not-allowed"
      >
        Prev
      </button>
      <button
        @click="page++"
        :disabled="page >= pageCount"
        class="bg-gold text-white px-4 py-2 rounded disabled:bg-gold1-300 disabled:text-black disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import upSvg from "@/assets/images/icons/up.svg";
import downSvg from "@/assets/images/icons/down.svg";
import { useAuthStore } from "~/stores/useAuthStore";
definePageMeta({
  middleware: "authenticated", //Auth checker
});
export default {
  data() {
    return {
      upSvg,
      downSvg,
      search: "",
      sortKey: "",
      sortOrder: "asc",
      page: 1,
      perPage: 10,
      fields: [
        { key: "contractCode", label: "รหัสสัญญา" },
        { key: "loanNumber", label: "เลขสัญญาจำนำ" },
        { key: "amount", label: "จำนวนเงิน" },
        { key: "status", label: "สถานะ" },
        { key: "withdrawalTime", label: "วันเวลาเบิก" },
      ],
      withdrawals: [
        {
          contractCode: "001",
          loanNumber: "LN-123",
          amount: 5000,
          status: "Approved",
          withdrawalTime: "2023-10-01 10:00",
        },
        {
          contractCode: "002",
          loanNumber: "LN-124",
          amount: 3000,
          status: "Approved",
          withdrawalTime: "2023-10-01 10:00",
        },
        {
          contractCode: "003",
          loanNumber: "LN-125",
          amount: 7000,
          status: "Approved",
          withdrawalTime: "2023-10-01 10:00",
        },
        {
          contractCode: "004",
          loanNumber: "LN-126",
          amount: 5000,
          status: "Approved",
          withdrawalTime: "2023-10-01 10:00",
        },
        {
          contractCode: "005",
          loanNumber: "LN-127",
          amount: 7000,
          status: "Approved",
          withdrawalTime: "2023-10-01 10:00",
        },
      ],
    };
  },
  setup() {
    let auth;
    onMounted(() => {
      auth = useAuthStore();
    });
    return {};
  },
  computed: {
    filteredData() {
      return this.withdrawals.filter((item) => {
        return Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(this.search.toLowerCase())
        );
      });
    },
    paginatedData() {
      if (this.filteredData) {
        let start = (this.page - 1) * this.perPage;
        let end = start + this.perPage;
        return this.filteredData.slice(start, end);
      } else {
        return [];
      }
    },

    pageCount() {
  if (this.filteredData) {
    return Math.ceil(this.filteredData.length / this.perPage);
  } else {
    return 0;
  }
},

  },
  methods: {
    applyFilter() {
      this.page = 1; // Reset to first page on filter change
    },
    sortTable(key) {
      if (this.sortKey === key) {
        this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
      } else {
        this.sortKey = key;
        this.sortOrder = "asc";
      }
    },

    toggleSortOrder() {
      this.sortOrder = this.sortOrder === "asc" ? "desc" : "asc";
    },
    sortItem() {
      console.log(this.sortOrder);
      if (this.sortOrder === "asc") {
        this.sortOrder = "desc"; // ถ้าเป็น 'asc' ให้เปลี่ยนเป็น 'desc'
      } else {
        this.sortOrder = "asc"; // ถ้าไม่ใช่ 'asc' ให้เปลี่ยนเป็น 'asc'
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

.pagination button {
  margin-right: 5px;
}
</style>
