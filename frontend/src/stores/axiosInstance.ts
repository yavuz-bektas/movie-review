// axiosInstance.ts
import axios from 'axios' // Update the import statement
import Cookies from 'js-cookie'

// Customize your Axios instance here
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Replace this with your actual API host address
  timeout: 5000 // Set the request timeout (in milliseconds)
})

// Add any additional interceptors or configurations as needed
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')
    if (token) {
      config.headers['Authorization'] = token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
