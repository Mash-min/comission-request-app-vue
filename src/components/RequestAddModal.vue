<template>
  <div 
    class="modal fade" 
    id="addRequestModal" 
    tabindex="-1" 
    aria-labelledby="exampleModalLabel" 
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <form @submit.prevent="submitRequest">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add Request</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="m-1">
              <small class="text-muted">Title: </small>
              <input 
                type="text" 
                class="form-control" 
                :class="{ ' is-invalid': requestErrors.title }"
                placeholder="Enter your request title..."
                v-model="newRequest.title">
                <div class="invalid-feedback">
                  Request title is required!
                </div>
            </div>
            <div class="m-1">
              <small class="text-muted">Description: </small>
              <textarea 
                cols="30" rows="5" 
                class="form-control"
                :class="{ ' is-invalid': requestErrors.description }"
                v-model="newRequest.description"
                placeholder="Enter request description...">
              </textarea>
              <div class="invalid-feedback">
                Request description is required!
              </div>
            </div>
            <div class="m-1">
              <small class="text-muted">Price: </small>
              <input 
                type="text" 
                class="form-control" 
                :class="{ ' is-invalid': requestErrors.price }"
                placeholder="Enter your request title..."
                v-model="newRequest.price">
              <div class="invalid-feedback">
                Request price is required!
              </div>
            </div>
            <div class="mb-1">
              <small class="text-muted">Attach file:</small>
              <input class="form-control" type="file" multiple @change="handleFile">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-sm btn-outline-dark" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-sm btn-outline-dark">Save <i class="fa fa-save"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RequestAddModal',
  computed: {
    ...mapGetters([
      'newRequest',
      'requestErrors'
    ])
  },
  methods: {
    ...mapActions(['addRequest']),

    handleFile(e) {
      let files = e.target.files
      this.newRequest.images.push([...files])
    },

    submitRequest() {
      const payload = {
        title: this.newRequest.title,
        description: this.newRequest.description,
        price: this.newRequest.price
      }
      this.addRequest(payload)
    }
  }
}
</script>