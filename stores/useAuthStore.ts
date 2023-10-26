import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return { 
      token: "",
      user: {
        name: "",
        national_id: ""
      }
    }
  },
  getters: {
    isLogin: (state) => state.token !== ""
  },
  actions: {
    setNewToken(token: string) {
      this.token = token
    },
    setUser(name: string, national_id: string) {
      this.user.name = name
      this.user.national_id = national_id
    },
    clear() {
      this.token = ''
      this.user.name = ''
      this.user.national_id = ''
    },
  },
  persist: true
})