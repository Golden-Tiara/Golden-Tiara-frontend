<template>
  <button @click="getGoldPrice" class="bg-red-500">dfgdfg
    {{ text }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';

const text = ref('');

async function getGoldPrice() {
  try {
    const response = await axios.get('/puppeteer');
    text.value = response.data.goldPrice;
  } catch (error) {
    console.error(error);
  }
}
</script>
