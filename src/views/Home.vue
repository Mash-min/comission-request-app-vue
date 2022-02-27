<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3"> {{ 'Welcome back ' + user.username }}!</h4>
      <Navtabs 
        v-bind:tab="'home'"/>
      <div class="m-1">
        <form @submit.prevent="submitSearch">
          <div class="d-flex">
            <button class="btn btn-sm btn-outline-dark" type="submit">
              <i class="fa fa-search"></i>
            </button>
            <input type="text" class="ms-1 form-control" placeholder="Search request here..." v-model="search.request">
            <button class="btn btn-sm ms-1 btn-outline-dark" type="button" @click="fetchRequests(url)">
              <i class="fa fa-refresh"></i>
            </button>
          </div>
        </form>
      </div>
      <RequestItem 
        v-bind:requests="requests"/>
      <Pagination 
        v-bind:links="requestLinks"
        v-on:emitLink="fetchRequests"/>
      <SendOfferModal />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import RequestItem from '@/components/RequestItem'
import Pagination from '@/components/Pagination'
import SendOfferModal from '@/components/SendOfferModal'
import { mapActions, mapGetters } from 'vuex'
 
export default {
  name: 'Home',
  components: {
    Navbar,
    Navtabs,
    RequestItem,
    Pagination,
    SendOfferModal
  },
  data() {
    return {
      url: 'api/commission-requests',
    }
  },
  computed: {
    ...mapGetters([
      'requests',
      'requestLinks',
      'search',
      'user'
      ])
  },
  methods: {
    ...mapActions([
      'fetchRequests',
      'searchRequest',
      ]),

    submitSearch() {
      this.searchRequest(this.search.request)
    }
  },
  created() {
    this.fetchRequests(this.url)
  }
}
</script>