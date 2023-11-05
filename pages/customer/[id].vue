<template>
    <section class="max-w-7xl mx-auto p-0">
      <div ref="content">
        <div class="border border-darkgold w-3/6 mx-auto my-6" >
          <div class="flex justify-center mt-4">
            <div class="flex items-center">
              <img
                id="golden-tiara-icons"
                src="@/assets/images/logo.png"
                class="h-6 mr-3"
                alt="Golden Tiara"
              />
              <span class="text-2xl font-semibold whitespace-nowrap"
                ><span class="text-gold">G</span>olden
                <span class="text-gold">T</span>iara</span
              >
            </div>
          </div>
          <!-- Info -->
          <div class="flex justify-evenly mt-4">
            <div>
              <div class="flex text-xs">
                <p class="">เลขสัญญาตรวจสอบทอง:</p>
                <p class="ml-3">{{ user.national_id }}</p>
              </div>
              <div class="flex mt-2 text-xs">
                <p class="">วันที่เซ็นสัญญา:</p>
                <p class="ml-3 text-purple-500">
                  {{
                    new Date(user.contract_date).toLocaleDateString(
                      "th-TH",
                      {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                      }
                    )
                  }}
                </p>
              </div>
            </div>
  
            <div>
              <div class="flex text-xs">
                <p class="text">เลขบัตรประชาชนลูกค้า:</p>
                <p class="ml-3">{{ user.customer_id }}</p>
              </div>
              <div class="flex mt-2 text-xs">
                <p class="">สถานะการตรวจสอบ:</p>
                <p class="ml-3" >
                  <span
                    v-if="user.status === 'inprogress'"
                    id="user-status"
                    class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                  >
                    {{ user.status }}
                  </span>
                  <span
                    v-else
                    id="user-status"
                    class="px-5 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                  >
                    {{ user.status }}
                  </span>
                </p>
              </div>
            </div>
          </div>
  
          <table
            class="w-4/6 mx-auto mt-6 text-xs text-left text-gray-500 border border-gold mb-6"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 border border-gold text-center"
            >
              <tr>
                <th scope="col" class="px-6 py-4">รหัส</th>
                <th scope="col" class="px-6 py-4">น้ำหนัก</th>
                <th scope="col" class="px-6 py-4">ความบริสุทธิ์</th>
                <th scope="col" class="px-6 py-4">สถานะ</th>
              </tr>
            </thead>
  
            <tbody>
              <tr
                class="bg-white hover:bg-gray-50 border-b border-gold w-full"
                v-for="gold of user.golds"
                :key="gold.id"
              >
                <td
                  scope="row"
                  class="py-4 px-6 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <nuxt-link :to="`/gold/${gold.id}`">
                    {{ gold.id }}
                  </nuxt-link>
                </td>
  
                <td class="py-4 text-center">
                  <nuxt-link :to="`/gold/${gold.id}`">
                    {{ gold.weight }}
                  </nuxt-link>
                </td>
  
                <td class="py-4 text-center">
                  <nuxt-link :to="`/gold/${gold.id}`">
                    {{ gold.purity }}
                  </nuxt-link>
                </td>
                <td class="py-4 text-center">
                  <nuxt-link :to="`/gold/${gold.id}`">
                    <span
                      v-if="gold.status === 'examining'"
                      class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded"
                    >
                      {{ gold.status }}
                    </span>
                    <span
                      v-if="gold.status === 'verified'"
                      class="p-1 font-semibold leading-tight text-green-700 bg-green-100 rounded"
                    >
                      {{ gold.status }} </span
                    ><span
                      v-if="gold.status === 'unverified'"
                      class="p-1 font-semibold leading-tight text-red-700 bg-red-100 rounded"
                    >
                      {{ gold.status }}
                    </span>
                  </nuxt-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  
      
    </section>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from "~/stores/useAuthStore";
  
  const route = useRoute();
  const { data: user } = await useMyFetch<any>(
    `customer/${route.params.national_id}`,
    {}
  );
  
//   definePageMeta({
//     middleware: "authenticated",
//   });
  
  
  </script>
  