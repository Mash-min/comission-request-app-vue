import axios from 'axios'
import showLoader from '@/loader'
import Swal from 'sweetalert2'

const state = {
  offer: {},
  offers: [],
  newOffer: {
    description: '',
    price: '',
    images: []
  },
  offerErrors: [],
  offerLinks: []
}

const getters = {
  offer: (state) => state.offer,
  offers: (state) => state.offers,
  newOffer: (state) => state.newOffer,
  offerErrors: (state) => state.offerErrors,
  offerLinks: (state) => state.offerLinks
}

const actions = {
  async fetchRequestOffers({ commit }, id) {
    showLoader("Loading...")
    try {
      const response = await axios.get(`api/commission-requests/${id}/offers`)
      commit('setOffers', response.data.offers)
      Swal.close()
    } catch (e) {
      console.error(e.response)
    }
  },

  async addOffer({ commit }, payload) {
    commit('setOfferErrors', [])
    try {
      const response = await axios.post('api/offers', payload)
      commit('clearOffer')
      Swal.fire({ title: response.data.message })
    } catch (e) {
      Swal.close()
      commit('setOfferErrors', e.response.data.errors)
      console.error(e.response)
    }
  },

  async declineOffer({ commit }, id) {
    try {
      const response = await axios.put(`api/offers/${id}`, { status: 'declined' })
      Swal.fire({ title: 'Offer declined', icon: 'success' })
      commit('updateOffer', response.data.offer)
    } catch (e) {
      console.error(e.response)
    }
  },

  async acceptOffer({ commit }, id) {
    try {
      const response = await axios.put(`api/offers/${id}`, { status: 'accepted' })
      Swal.fire({ title: 'Offer accepted', icon: 'success' })
      commit('updateOffer', response.data.offer)
    } catch (e) {
      console.error(e.response)
    }
  },

  async fetchUserOffers({ commit }, url) {
    showLoader("Loading...")
    commit('setOffers', [])
    commit('setOfferLinks', [])
    try {
      const response = await axios.get(url)
      commit('setOffers', response.data.offers.data)
      commit('setOfferLinks', response.data.offers.links)
      Swal.close()
    } catch (e) {
      console.error(e.response)
    }
  },

  async deleteOffer({ commit }, payload) {
    showLoader("Canceling...")
    try {
      const response = await axios.delete(`api/offers/${payload.id}`)
      commit('removeOffer', payload.index)
      Swal.fire({ title: response.data.message, icon: 'success' })
    } catch (e) {
      console.error(e.response)
    }
  }
}

const mutations = {
  setOffers: (state, offers) => state.offers = offers,
  setOfferLinks: (state, links) => state.offerLinks = links,
  updateOffer: (state, offer) => (state.offers[state.offers.findIndex(data => data.id == offer.id)] = offer),
  clearOffer: (state) => {
    [state.newOffer.description, state.newOffer.price] = ''
    state.newOffer.images = []
  },
  removeOffer: (state, index) => (state.offers.splice(index, 1)),
  setOfferErrors: (state, errors) => (state.offerErrors = errors)
}

export default {
  state,
  getters,
  actions,
  mutations
}