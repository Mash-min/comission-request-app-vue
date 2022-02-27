<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3"> {{ 'Welcome back ' + user.username }}!</h4>
      <Navtabs 
        v-bind:tab="'profile'"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Navbar,
    Navtabs
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>