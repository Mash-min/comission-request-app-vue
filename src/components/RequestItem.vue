<template>
  <div 
    data-aos="fade-in" data-aos-offset="300" data-aos-easing="ease-out-back" data-aos-duration="1000"
    class="request card m-1"
    v-for="request in requests"
    :key="request.slug">
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
          :key="image.id">
          <a :href="image.image" target="_blank">
            <i class="fa fa-image text-success"></i> {{ image.slug }}
          </a>
        </li>
      </ul>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6 p-1">
          <div class="d-grid">
            <router-link :to="'/requests/' + request.slug" class="btn btn-sm btn-outline-dark">
              View request
            </router-link>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="d-grid">
            <button 
              class="btn btn-sm btn-outline-dark" 
              data-bs-toggle="modal" 
              data-bs-target="#sendOfferModal"
              @click="findRequest(request.id)">
              Send Offer <i class="fa fa-send"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'RequestItem',
  props: ['requests'],
  methods: {
    ...mapActions(['findRequest'])
  }
}
</script>