<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3"> {{ 'Welcome back ' + user.username }}!</h4>
      <Navtabs 
        v-bind:tab="'requests'"/>
      <div class="m-1">
        <div class="d-grid">
          <router-link 
            to="/requests/add" 
            class="btn btn-sm btn-outline-dark">
            Add request
          </router-link>
        </div>
      </div>
      <MyRequestItem />
      <OffersModal />
      <RequestEditModal />
      <Pagination 
        v-bind:links="requestLinks"
        v-on:emitLink="fetchUserRequests"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import MyRequestItem from '@/components/MyRequestItem'
import OffersModal from '@/components/OffersModal'
import RequestEditModal from '@/components/RequestEditModal'
import Pagination from '@/components/Pagination'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Requests',
  components: {
    Navbar,
    Navtabs,
    MyRequestItem,
    OffersModal,
    RequestEditModal,
    Pagination
  },
  computed: {
    ...mapGetters([
      'requestLinks',
      'user'
      ])
  },
  data() {
    return {
      url: 'api/users/commission-requests'
    }
  },
  methods: {
    ...mapActions(['fetchUserRequests'])
  },
  created() {
    this.fetchUserRequests(this.url)
  }
}
</script>