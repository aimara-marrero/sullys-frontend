import axios from 'axios'


const API = axios.create({
  baseURL: 'http://localhost:3000/api'
})

async function signup(newUser) {
  try {
    const { data } = await API.post('/auth/signup', newUser)
    return data
  } catch (error) {
    return { error: error.message }
  }
}

async function login(newUser) {
    try {
      const { data } = await API.post('/auth/login', newUser)
      return data
    } catch (error) {
      return { error: error.message }
    }
  }
  async function getAllUser() {
    try {
      const response = await API.get('/user')
      return response.data
  
    } catch (error) {
      return error
    }
  }


export default {
  signup,
  login,
  getAllUser

}
