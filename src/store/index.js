import { createStore } from 'vuex'
import requests from '@/store/modules/requests'
import users from '@/store/modules/users'
import offers from '@/store/modules/offers'

const store = createStore({
  modules: {
    requests,
    users,
    offers
  }
})

export default store