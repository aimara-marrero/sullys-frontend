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
  async function addUser(user) {
    try {
      const response = await API.post('/user', user)
      return response.data
  
    } catch (error) {
      return error
    }
  }

  async function updateuser(id,user) {
    try {
      const response = await API.put(`/user/${id}`, user, /*{
        headers: {
          token: authStore.userToken
        }
      }*/)
      return response.data
  
    } catch (error) {
      return error
    }
  }

  async function deleteUser(id) {
    try {
      //const authStore = useAuthStore();
      const response = await API.delete(`/user/${id}`, /*{
        headers: {
          //token: localStorage.getItem('token')
          token: authStore.userToken
        }
      }*/)
      return response.data
  
    } catch (error) {
      return error
    }
  }

export default {
  signup,
  login,
  getAllUser,
  addUser,
  updateuser,
  deleteUser
}
