<template>
  <div
    class="request card m-1"
    v-for="(request, index) in requests"
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
          :key="image.slug">
          <a :href="image.image" target="_blank"><i class="fa fa-image text-success"></i> {{ image.slug }}</a>
        </li>
      </ul>
      <button 
        @click="fetchRequestOffers(request.id)"
        class="btn btn-sm btn-outline-success"
        :class="{ 'disabled btn-outline-dark' : request.offers.length == 0 }" 
        data-bs-toggle="modal" 
        data-bs-target="#offersModal">
        offers: <span class="fw-bolder">{{ request.offers.length }}</span>
      </button>
      <button class="btn btn-sm btn-outline-success disabled ms-1">
        status: {{ request.status }}
      </button>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-6 p-1">
          <div class="d-grid">
            <button 
              @click="findRequest(request.id)"
              class="btn btn-sm btn-outline-dark" 
              data-bs-toggle="modal" 
              data-bs-target="#exampleModal">
              Edit
            </button>
          </div>
        </div>
        <div class="col-6 p-1">
          <div class="d-grid">
            <button 
              class="btn btn-sm btn-outline-dark"
              @click="deleteRequest({ id: request.id, index })">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MyRequestItem',
  computed: {
    ...mapGetters([
      'requests'
    ])
  },
  methods: {
    ...mapActions([
      'deleteRequest', 
      'findRequest',
      'fetchRequestOffers'])
  }
}
</script>