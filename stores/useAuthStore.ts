import { defineStore } from 'pinia'
import { authAPI } from '@/service/authenticationService'
import {password} from "iron-webcrypto";


interface Auth {
  national_id?: string;
  // ... other properties
}
const auth_storage = {
  user: localStorage.getItem('auth.user'),
  national_id: localStorage.getItem('auth.national_id')
}

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => {
    return {
      auth: {
        user: auth_storage.user,
        national_id: auth_storage.national_id,
      }
    }
  },

  getters: {
    getAuth: (state) => state.auth,
    getUser: (state) => state.auth.user,
    getNational_id: (state) => state.auth.national_id,

    isAuthen (state) {
      return state.auth.national_id != null
    }
  },

  actions: {
    async login (national_id: any, password: any) {
      if (await authAPI.login(national_id, password)) {
        this.fetch()
        return true
      }
      return false
    },

    async fetch () {
      this.auth = await authAPI.me()
      if (this.auth ){
        if (this.auth && typeof window !== 'undefined') {
          localStorage.setItem('auth.national_id', this.auth.national_id!)
          localStorage.setItem('auth.user', JSON.stringify(this.auth))
        }

      }
    },

    logout () {
      authAPI.logout()
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth.national_id')
        localStorage.removeItem('auth.user')
      }
      this.auth = {
        national_id: null,
        user: null
      }
    }
  }
});
const authStore = useAuthStore();