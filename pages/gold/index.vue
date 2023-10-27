<template>
  <div class="max-w-7xl mx-auto px-10">
  
    <div class="flex justify-center mt-10" v-for="gold of golds" :key="gold.id">
      <a
        href="#"
        class="flex flex-col items-center  bg-white border border-darkgold rounded-lg shadow md:flex-row md:w-8/12 hover:bg-gray-100"
        
      >
        <img
          class="object-cover w-auto rounded h-60 md:h-auto md:w-[220px] md:rounded-none md:rounded-l-lg"
          src="@/assets/images/G00.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 ml-5 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ gold.id }}
          </h5>
          <p class="mb-3 font-normal text-sm text-gray-700 mr-5">
            {{ gold.weight }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            ความบริสุทธ์: {{ gold.purity }}
          </p>
          <p class="mb-3 font-normal text-gray-700 text-sm">
            สถานะ:
            <span class="p-1 font-semibold leading-tight text-blue-700 bg-blue-100 rounded">
              {{ gold.status }}
            </span>
          </p>
          <nuxt-link :to="`/gold/${gold.id}`">
            <button class="flex items-center justify-center mt-2 rounded-lg bg-darkblue text-sm text-white w-36 py-1 hover:bg-gradient-to-b from-gold to-darkgold focus:ring-2 focus:outline-none focus:ring-darkgold">
              รายละเอียด
              <span>
                <svg
                class="w-3 h-3 ml-2 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              </span>
            </button>
          </nuxt-link>
        </div>
        <div></div>
      </a>
    </div>

  </div>
</template>

<script setup lang="ts">
import useMyFetch from '~/composables/useMyFetch';
  const { data: golds, pending } = await useMyFetch<any>("gold", {})
</script>