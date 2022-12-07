import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      token: useStorage('token', null), // nombre en localStorage, valor inicial
      email: useStorage('email', null),
      role: useStorage('role', null)
    }
  },
  getters: {
    isLoggedIn() {
      return this.token != null
    },
    userEmail() {
      return this.email
    },
    userToken() {
      return this.token
    },
    isAdmin() {
      return this.role === 'admin'
    }
  },
  actions: {
    logout() {
      this.token = null
      this.email = null
      this.role = null
    },
    login({token, email, role}) {
      this.token = token
      this.email = email
      this.role = role
    },
  },
})