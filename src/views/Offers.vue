<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3"> {{ 'Welcome back ' + user.username }}!</h4>
      <Navtabs 
        v-bind:tab="'offers'"/>
      <MyOfferItem />
      <Pagination 
        v-bind:links="offerLinks"
        v-on:emitLink="fetchUserOffers"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import MyOfferItem from '@/components/MyOfferItem'
import Pagination from '@/components/Pagination'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Offers',
  components: {
    Navbar,
    Navtabs,
    MyOfferItem,
    Pagination
  },
  data() {
    return {
      url: 'api/users/offers'
    }
  },
  computed: {
    ...mapGetters([
      'offerLinks',
      'user'
      ])
  },
  methods: {
    ...mapActions(['fetchUserOffers'])
  },
  created() {
    this.fetchUserOffers(this.url)
  }
}
</script>