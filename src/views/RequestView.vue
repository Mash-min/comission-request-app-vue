<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3">Welcome back {{ user.username }}!</h4>
      <Navtabs 
        v-bind:tab="'home'"/>
      <div class="request card m-1" 
        data-aos="fade-in" data-aos-offset="300" data-aos-easing="ease-out-back" data-aos-duration="1000">
        <div class="card-body">
          <div class="d-flex justify-content-between mb-2">
            <span class="request-name text-muted">
              <i class="fa fa-user-circle"></i> {{ request.user.username }}
            </span>
            <span class="request-price fw-bolder text-success">
              ₱ {{ request.price }}
            </span>
          </div>
          <span class="request-title">
            <i class="fa fa-chevron-right"></i> <span class="fw-bolder">{{ request.title }}</span>
          </span>
          <p class="request-description">{{ request.description }}</p>
          <small class="text-muted mb-2">Attached files: </small>
          <ul>
            <li 
              v-for="image in request.images"
              :key="image.slug">
              <a href=""><i class="fa fa-image text-success"></i> {{ image.slug }}</a>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col-12 p-1">
              <div class="d-grid">
                <button 
                  class="btn btn-sm btn-outline-dark" 
                  data-bs-toggle="modal" 
                  data-bs-target="#sendOfferModal">
                  Send Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SendOfferModal />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import SendOfferModal from '@/components/SendOfferModal'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RequestView',
  components: {
    Navbar,
    Navtabs,
    SendOfferModal
  },
  computed: {
    ...mapGetters([
      'request',
      'user'])
  },
  methods: {
    ...mapActions(['viewRequest'])
  },
  created() {
    this.viewRequest(this.$route.params.slug)
  }
}
</script>