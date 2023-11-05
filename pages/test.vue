<template>
  <p>login: {{ isLogin }}</p>
  <p>username: {{ userName }}</p>
  <p>surname: {{ surname }}</p>
  <p>phonenumber: {{ phonenumber }}</p>
  <p>imagepath: {{ imagepath }}</p>
  <p>role :{{ role }}</p>
  <p>nationid: {{ nationid }}</p>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";


definePageMeta({
  middleware: "authenticated", //Auth checker
});

interface AuthStore {
  isLogin: boolean;
  user: {
    name: string;
    surname: string;
    phonenumber: string;
    image_path: string;
    role: string;
    nation_id: string;
  };
  clear: () => void;
}

const authStore: AuthStore = useAuthStore();

const isLogin = computed(() => authStore.isLogin);
const userName = computed(() => authStore.user.name);
const surname = computed(() => authStore.user.surname);
const phonenumber = computed(() => authStore.user.phonenumber);
const imagepath = computed(() => authStore.user.image_path);
const role = computed(() => authStore.user.role);
const nationid = computed(() => authStore.user.nation_id);


</script>
