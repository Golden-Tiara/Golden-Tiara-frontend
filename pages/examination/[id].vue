
<template>
  <section class="max-w-7xl mx-auto p-0">
    <div ref="content">
      <div class="flex justify-center mt-10">
        <div class="flex items-center">
          <img src="@/assets/images/logo.png" class="h-10 mr-3" alt="Golden Tiara" />
          <span class=" text-3xl font-semibold whitespace-nowrap"><span class="text-gold">G</span>olden
            <span class="text-gold">T</span>iara</span>
        </div>
      </div>

      <div class="border border-yellow-500">
        <!-- Info -->
        <div class="flex justify-evenly  mt-14">
          <div>
            <div class="flex">
              <p>เลขสัญญาตรวจสอบทอง:</p>
              <p class="ml-3">{{ examination.id }}</p>
            </div>
            <div class="flex mt-7">
              <p>วันที่เซ็นสัญญา:</p>
              <p class="ml-3">{{ examination.contract_date }}</p>
            </div>
          </div>

          <div>
            <div class="flex">
              <p>เลขบัตรประชาชนลูกค้า:</p>
              <p class="ml-3">{{ examination.customer_id }}</p>
            </div>
            <div class="flex mt-7">
              <p>สถานะการตรวจสอบ:</p>
              <p class="ml-3">{{ examination.status }}</p>
            </div>
          </div>
        </div>

        <!-- Gold Card -->
        <div>
          <div class="grid-cols-3 grid gap-20 justify-around mt-20 px-auto  mb-20">

            <div v-for="gold of examination.golds" :key="gold.id">

              <div class="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                  <div class="rounded-t-lg max-h-72 w-72 object-cover">
                    <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <path fill="#e1c50e"
                          d="M435.7 558.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128z">
                        </path>
                        <path fill="#E6E6E6"
                          d="M592.7 276H433.2l-20.8 128h201zM217.2 620l-20.7 128h200.9l-20.7-128zm430 0l-20.7 128h200.9l-20.7-128z">
                        </path>
                      </g>
                    </svg>
                  </div>
                </a>
                <div class="p-5 border-t border-gold">
                  <a href="#">
                    <div class="flex">
                      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                        รหัส:
                      </h5>
                      <h5 class="ml-2 text-xl font-bold tracking-tight text-gray-900">
                        {{ gold.id }}
                      </h5>
                    </div>
                  </a>
                  <div class="mb-5 text-sm">
                    <div class="flex">
                      <p>น้ำหนัก:</p>
                      <p class="ml-2">{{ gold.weight }}</p>
                    </div>
                    <div class="flex mt-0.5">
                      <p>ความบริสุทธิ์:</p>
                      <p class="ml-2">{{ gold.purity }}</p>
                    </div>
                    <div class="flex mt-0.5">
                      <p>สถานะ:</p>
                      <p class="ml-2 text-blue-500">{{ gold.status }}</p>
                    </div>
                  </div>

                  <a href="#"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 bg-darkblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    รายละเอียดทอง
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>




          </div>
        </div>
      </div>


    </div>
    <div class="flex justify-center mb-20">
      <button @click="downloadWithCSS"
        class="px-6 py-2 bg-gold text-gray-100 rounded-lg text-xl mx-auto ">ดาวโหลดPDF</button>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const pageTitle = `Examination No. ${route.params.id}`
const { data: examination } = await useMyFetch<any>(
  `examination/${route.params.id}`, {}
)

</script>