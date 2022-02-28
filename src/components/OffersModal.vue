<template>
  <div class="modal fade" id="offersModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Offers</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body request-offers">
          <div class="m-2">
            <div 
              v-for="offer in offers"
              :key="offer.slug"
              class="request request-offer">
              <div class="card mb-1">
                <div class="card-body" :class="{ 'text-muted' : offer.status == 'declined' }">
                  <div class="d-flex justify-content-between mb-2">
                    <span class="request-name text-muted">
                      <i class="fa fa-user-circle"></i> {{ offer.user.username }}
                    </span>
                    <span class="request-price fw-bolder text-success">
                      ₱ {{ offer.price }}
                    </span>
                  </div>
                  <small class="text-muted"><i class="fa fa-chevron-right"></i> {{ offer.user.email }}</small>
                  <p class="request-description mt-3">{{ offer.description }}</p>
                  <small class="text-muted mb-2">Attached files: </small>
                  <ul>
                    <li 
                      v-for="image in offer.images"
                      :key="image.slug">
                      <a :href="image.image" target="_blank"><i class="fa fa-image text-success"></i> {{ image.slug }}</a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer">
                  <div v-if="offer.status == 'pending' ">
                    <button 
                      @click="acceptOffer(offer.id)"
                      class="btn btn-sm btn-outline-success">
                      Accept offer
                    </button>
                    <button 
                      @click="declineOffer(offer.id)"
                      class="btn btn-sm btn-outline-danger ms-1">
                      Decline offer
                    </button>
                  </div>
                  <div v-else-if="offer.status == 'accepted' ">
                    <button 
                      class="btn btn-sm btn-success disabled ms-1">
                      Accepted <i class="fa fa-check"></i>
                    </button>
                  </div>
                  <div v-else>
                    <button 
                      class="btn btn-sm btn-danger disabled ms-1">
                      Declined <i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'OffersModal',
  computed: {
    ...mapGetters(['offers'])
  },
  methods: {
    ...mapActions([
      'declineOffer',
      'acceptOffer'])
  }
}
</script>