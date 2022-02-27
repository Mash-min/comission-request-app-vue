<template>
  <div class="modal fade" id="sendOfferModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <form @submit.prevent="submitOffer">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Send Offer</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body" >
            <div class="request-item">
              <span class="request-name text-muted">
                <i class="fa fa-user-circle"></i> {{ request.user.username }}
              </span>
              <div class="d-flex justify-content-between mt-3">
                <span class="fw-bolder">
                  <i class="fa fa-chevron-right"></i> {{ request.title }}
                </span>
                <span class="request-price fw-bolder text-success">
                  ₱ {{ request.price }}
                </span>
              </div>
              <p class="request-description">{{ request.description }}</p>
              <small class="text-muted">Attached files: </small>
              <ul>
                <li 
                  v-for="image in request.images"
                  :key="image.id">
                  <a href="">
                    <i class="fa fa-image text-success"></i> {{ image.slug }}
                  </a>
                </li>
              </ul>
            </div>
            <hr>
            <div class="offer-form-container">
              <div class="mb-3">
                <small class="text-muted">Offer Description: </small>
                <textarea 
                  :class="{ 'is-invalid' : offerErrors.description }"
                  v-model="newOffer.description"
                  cols="30" rows="5" 
                  class="form-control" 
                  placeholder="Enter your offer description..."></textarea>
                <div class="invalid-feedback">
                  Offer description is required!
                </div>
              </div>
              <div class="mb-3">
                <small class="text-muted">Price: </small>
                <input 
                  :class="{ 'is-invalid' : offerErrors.price }"
                  v-model="newOffer.price"
                  type="text" 
                  class="form-control" 
                  placeholder="Enter your price...">
                <div class="invalid-feedback">
                  Offer price is required!
                </div>
              </div>
              <div class="mb-3">
                <small class="text-muted">Add image:</small>
                <input 
                  @change="handleImage"
                  class="form-control" 
                  type="file" multiple>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" class="btn btn-sm btn-outline-dark">Send offer <i class="fa fa-send"></i></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SendOfferModal',
  computed: {
    ...mapGetters([
      'request',
      'newOffer',
      'offerErrors'
    ])
  },
  methods: {
    ...mapActions(['addOffer']), 

    handleImage(e) {
      const images = e.target.files
      this.newOffer.images = [...images]
    },

    submitOffer() {
      const payload = {
        description: this.newOffer.description,
        price: this.newOffer.price,
        images: this.newOffer.images,
        commission_request_id: this.request.id
      }
      this.addOffer(payload)
    }
  }
}
</script>