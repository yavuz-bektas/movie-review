// authStore.ts
import { defineStore } from 'pinia'
import axiosInstance from './axiosInstance' // Update the import statement
import router from '../router/index' // Import the router
import { genericStore } from '../stores/genericStore' // Import the data store
import Cookies from 'js-cookie'

// Helper function to set the Authorization header for axios requests
function setAuthorizationHeader(token: string | null) {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `${token}`
  } else {
    delete axiosInstance.defaults.headers.common['Authorization']
  }
}

// Define the store
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null
  }),
  actions: {
    async register(username: string, password: string) {
      try {
        await axiosInstance.post('/api/users/register', { username, password })

        // Get the genericStore instance using useStore() function
        const genericStoreInstance = genericStore()

        // Now, you can call the setMessage action on the store instance
        genericStoreInstance.setMessage(
          'Successfully',
          'User has been successfully created.',
          true,
          'text-green-700',
          'bg-green-100'
        )

        setTimeout(() => {
          genericStoreInstance.messageVisible = false
        }, 3000)

        // Redirect to the dashboard or another page after registration
      } catch (error) {
        const genericStoreInstance = genericStore()

        // Set the error message with the appropriate colors
        genericStoreInstance.setMessage(
          'Register Error',
          'An error occurred while registering the user.',
          true,
          'text-red-700', // Red text color
          'bg-red-100' // Light red background color
        )
        setTimeout(() => {
          genericStoreInstance.messageVisible = false
        }, 3000)
      }
    },

    async login(username: string, password: string) {
      try {
        const response = await axiosInstance.post('/api/users/login', { username, password })
        const token = response.data.token
        Cookies.set('token', token, { expires: 1 })

        this.token = token
        setAuthorizationHeader(token)
        router.push('/')
      } catch (error) {
        const genericStoreInstance = genericStore()

        // Set the error message with the appropriate colors
        genericStoreInstance.setMessage(
          'Login Error',
          'Please re-check your username and password',
          true,
          'text-red-700', // Red text color
          'bg-red-100' // Light red background color
        )
        setTimeout(() => {
          genericStoreInstance.messageVisible = false
        }, 3000)
      }
    }
  }
})
