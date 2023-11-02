
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
                    <img v-if="gold.image_path"
                      class="object-cover w-auto rounded h-60 md:h-[250px] md:w-[320px] md:rounded-none md:rounded-l-lg"
                      :src="`http://localhost/images/gold/${gold.image_path}`" alt="" />
                    <img v-else
                      class="object-cover w-auto rounded h-60 md:h-[250px] md:w-[320px] md:rounded-none md:rounded-l-lg"
                      src="@/assets/images/gold-default.png" alt="" />
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

                  <nuxt-link :to="`/gold/${gold.id}`">
                    <a href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-300 bg-darkblue rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      รายละเอียดทอง
                      <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </nuxt-link>
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
import { useAuthStore } from '~/stores/useAuthStore';
const auth = useAuthStore();
const route = useRoute()
const { data: examination } = await useMyFetch<any>(
  `examination/${route.params.id}`, {}
)

definePageMeta({
  middleware: 'authenticated' //Auth checker
})
</script>
