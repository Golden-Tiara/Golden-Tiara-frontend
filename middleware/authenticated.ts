import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isLogin) {

    if (to.name !== 'login') {
      return navigateTo('/auth/login');
    }
  }
});
