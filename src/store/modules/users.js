import axios from "axios"
import Swal from "sweetalert2"
import router from "@/router"

const state = {
  user: {
    username: '',
    email: ''
  },
  newUser: {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  },
  isAuthenticated: false
}

const getters = {
  user: (state) => state.user,
  newUser: (state) => state.newUser,
  isAuthenticated: (state) => state.isAuthenticated
}

const actions = {
  async loginUser(_, payload) {
    try {
      const response  = await axios.post('api/users/login', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = "/home"
    } catch(e) {
      console.clear()
      Swal.fire({ title: e.response.data.message, icon: 'warning' })
    }
  },

  async logoutUser() {
    try {
      await axios.post('api/users/logout')
      localStorage.removeItem('token')
      window.location.href = "/login"
    } catch (e) {
      console.error(e.response)
    }
  },

  authenticateUser({ commit }) {
    if(localStorage.getItem('token') != null) {
      commit('authenticateUser', true)
    } else {
      commit('authenticateUser', false)
    }
  },

  async registerUser(_, payload) {
    try {
      const response = await axios.post('api/users/register', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = '/home'
    } catch (e) {
      console.error(e.response)
    }
  },
  
  async getUser({ commit }) {
    try {
      const response = await axios.get('api/users')
      commit('setUser', response.data.user)
    } catch (e) {
      Swal.close()
      localStorage.removeItem('token')
      router.push({ path: '/login' })
      console.clear()
    }
  }
   
}

const mutations = {
  authenticateUser: (state, payload) => state.isAuthenticated = payload,
  setUser: (state, user) => (state.user = user)
}

export default {
  state,
  getters,
  actions,
  mutations
}