import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: "",
      user: {
        name: "",
        national_id: "",
        surname: "",
        phone_number: "",
        image_path: "",
        role: "", // เพิ่มค่า role ไว้ใน state
      }
    }
  },
  getters: {
    isLogin: (state) => state.token !== "",
    getUserRole: (state) => state.user.role, // เพิ่ม Getter สำหรับการดึงข้อมูล role
  },
  actions: {
    setNewToken(token: string) {
      this.token = token
    },
    setUser(name: string,
            national_id: string,
            surname: string,
            phone_number: string,
            image_path: string,
            role: string) // เพิ่ม role ใน parameter
    {
      this.user.name = name
      this.user.surname = surname
      this.user.national_id = national_id
      this.user.phone_number = phone_number
      this.user.image_path = image_path
      this.user.role = role // กำหนดค่า role ที่ถูกส่งเข้ามาใน action
    },
    clear() {
      this.token = ''
      this.user.name = ''
      this.user.surname = ''
      this.user.national_id = ''
      this.user.phone_number = ''
      this.user.image_path = ''
      this.user.role = '' // เคลียร์ค่า role เมื่อทำการ clear ข้อมูล
    },
  },
  persist: true
})
