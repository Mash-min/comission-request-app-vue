<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form @submit.prevent="submitRequest">
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Request</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-1">
              <small class="text-muted">Title: </small>
              <input 
                v-model="request.title"
                :class="{ 'is-invalid' : requestErrors.title }"
                type="text" 
                class="form-control" >
              <div class="invalid-feedback">
                Request title is required!
              </div>
            </div>
            <div class="mb-1">
              <small class="text-muted">Description: </small>
              <textarea 
                :class="{ 'is-invalid' : requestErrors.description }"
                v-model="request.description"
                cols="30" rows="8" 
                class="form-control">
              </textarea>
              <div class="invalid-feedback">
                Request description is required!
              </div>
            </div>
            <div class="mb-1">
              <small class="text-muted">Price: </small>
              <input 
                :class="{ 'is-invalid' : requestErrors.price }"
                type="text" 
                class="form-control" 
                v-model="request.price">
              <div class="invalid-feedback">
                Request price is required!
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-sm btn-outline-dark">Save</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RequestEditModal',
  data() {
    return {
      modal: null
    }
  },
  computed: {
    ...mapGetters([
        'request',
        'requestErrors'
      ])
  },
  methods: {
    ...mapActions(['updateRequest']),

    submitRequest() {
      this.updateRequest(this.request)
    }
  }
}
</script>