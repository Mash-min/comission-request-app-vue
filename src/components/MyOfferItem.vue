<template>
  <div 
    v-for="(offer, index) in offers"
    :key="offer.slug"
    class="request request-offer">
    <div 
      class="request request-offer">
      <div class="card mb-1 position-relative">
        <button class="btn position-absolute text-danger top-0 end-0" @click="deleteOffer({ id: offer.id, index })">
          <i class="fa fa-times"></i>
        </button>
        <div class="card-body" :class="{ 'text-muted' : offer.status == 'declined' }">
          <div class="d-flex justify-content-between mb-2">
            <span class="text-muted fw-bolder">
              <i class="fa fa-chevron-right"></i> 
              <router-link :to="'/requests/'+ offer.request.slug" class="text-muted ms-1">
                {{ offer.request.title }}
              </router-link>
              <small class="text-success ms-1">(₱ {{ offer.request.price }})</small>
            </span>
          </div>
          <small class="text-muted">Offer: </small> <small class="text-success fw-bolder">₱ {{ offer.price }}</small>
          <p class="request-description mt-3">{{ offer.description }}</p>
          <small class="text-muted mb-2">Attached files: </small>
          <ul>
            <li 
              v-for="image in offer.images"
              :key="image.slug">
              <a href=""><i class="fa fa-image text-success"></i> {{ image.slug }}</a>
            </li>
          </ul>
        </div>
        <div class="card-footer">
          <button 
            :class="{ 
                'btn-outline-success' : offer.status == 'accepted', 
                'btn-outline-danger' : offer.status == 'declined',
                'btn-outline-primary' : offer.status == 'pending'}"
            class="btn btn-sm disabled">
            {{ offer.status }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyOfferItem',
  computed: {
    ...mapGetters(['offers'])
  },
  methods: {
    ...mapActions(['deleteOffer'])
  }
}
</script>