import axios from "axios"
import Swal from "sweetalert2"
import showLoader from "@/loader"
import router from "../../router"

const state = {
  request: {
    user: {},
    offers: [],
    images: []
  },
  requests: [],
  newRequest: {
    title: '',
    description: '',
    price: '',
    images: []
  },
  requestLinks: [],
  requestErrors: [],
  search: {
    request: ''
  }
}

const getters = {
  request: (state) => state.request,
  requests: (state) => state.requests,
  requestLinks: (state) => state.requestLinks,
  newRequest: (state) => state.newRequest,
  requestErrors: (state) => state.requestErrors,
  requestOffers: (state) => state.requestOffers,
  search: (state) => state.search
}

const actions = {
  async fetchRequests({ commit }, url) {
    commit('setRequests', [])
    commit('setRequestLinks', [])
    showLoader("Loading...")
    try {
      const response = await axios.get(url)
      commit('setRequests', response.data.requests.data)
      commit('setRequestLinks', response.data.requests.links)
      Swal.close()
    } catch (e) {
      console.error(e.response)
    }
  },

  async findRequest({ commit }, id) {
    commit('setRequestErrors', [])
    showLoader("Loading...")
    try {
      const response = await axios.get(`api/commission-requests/${id}`)
      commit('setRequest', response.data.request)
      Swal.close()
    } catch (e) {
      console.error(e.response)
    }
  },

  async fetchUserRequests({ commit }, url) {
    showLoader("Loading...")
    commit('setRequests', [])
    commit('setRequestLinks', [])
    try {
      const response = await axios.get(url)
      commit('setRequests', response.data.requests.data)
      commit('setRequestLinks', response.data.requests.links)
      Swal.close()
    } catch (e) {
      console.error(e.response)
    }
  },

  async addRequest({ commit }, payload) {
    commit('setRequestErrors', [])
    try {
      const response = await axios.post('api/commission-requests', {
        title: payload.title,
        description: payload.description,
        price: payload.price,
        images: payload.images.length
      })

      // ============ Upload product image =============
      payload.images.forEach(image => {
        let formData = new FormData()
        formData.append('file', image)
        formData.append('upload_preset', 'grwsuw9d')
        fetch('https://api.cloudinary.com/v1_1/dv1tdnpbu/image/upload', {
          method: 'POST',
          body: formData
        })
        .then(res => { return res.json() })
        .then(data => {
          axios.post('api/commission-requests/images', {
            image: data.url,
            commission_request_id: response.data.request.id
          })
        })
        .catch(err => console.error(err.response))
      })

      commit('addRequest', response.data.request)
      commit('clearRequest')

      console.log(response)
      Swal.fire({ title: 'Request added!', icon: 'success' })
    } catch (e) {
      console.error(e.response)
      commit('setRequestErrors', e.response.data.errors)
    }
  },

  async deleteRequest({ commit }, payload) {
    try {
      const response = await axios.delete(`api/commission-requests/${payload.id}`)
      commit('removeRequest', payload.index)
      Swal.fire({ title: response.data.message, icon: 'success' })
    } catch (e) {
      console.error(e.response)
    }
  },

  async updateRequest({ commit }, payload) {
    commit('setRequestErrors', [])
    showLoader("Updating...")
    try {
      const response = await axios.put(`api/commission-requests/${payload.id}`, payload)
      Swal.fire({ title: response.data.message, icon: 'success' })
      commit('updateRequest', response.data.request)
      commit('setRequestErrors', [])
    } catch (e) {
      Swal.close()
      commit('setRequestErrors', e.response.data.errors)
    }
  },

  async viewRequest({ commit }, slug) {
    showLoader("Loading...")
    try {
      const response = await axios.get(`api/commission-requests/slug/${slug}`)
      commit('setRequest', response.data.request)
      Swal.close()
    } catch (e) {
      if(e.response.status == 404) {
        router.push({ path: '/home' })
      }
      console.clear()
    }
  },

  async searchRequest({ commit }, data) {
    showLoader("Searching...")
    try {
      const response = await axios.get(`api/commission-requests/search/${data}`)
      commit('setRequests', response.data.requests.data)
      commit('setRequestLinks', response.data.requests.links)
      Swal.close()
    } catch (e) {
      Swal.fire({ title: e.response.data.message, icon: 'error' })
      console.error(e.response)
    }
  }
}

const mutations = {
  setRequest: (state, request) => (state.request = request),
  setRequests: (state, requests) => (state.requests = requests),
  addRequest: (state, request) => (state.requests.unshift(request)),
  setRequestLinks: (state, links) => (state.requestLinks = links),
  removeRequest: (state, index) => (state.requests.splice(index, 1)),
  updateRequest: (state, request) => (state.requests[state.requests.findIndex(data => data.id == request.id)] = request),
  setRequestErrors: (state, errors) => (state.requestErrors = errors),
  clearRequest: (state) => {
    [state.newRequest.title, state.newRequest.description, state.newRequest.price] = '',
    state.newRequest.images = []
  }
}

export default {
  state,
  getters, 
  actions,
  mutations
}