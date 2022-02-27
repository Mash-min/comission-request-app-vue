<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3">Welcome back Mashiyyat!</h4>
      
      <Navtabs 
        v-bind:tab="'requests'"/>
      <div class="m-1">
        <form @submit.prevent="submitRequest">
          <div class="mb-1">
            <small class="text-muted">Title: </small>
            <input 
              v-model="newRequest.title"
              :class="{ 'is-invalid' : requestErrors.title }"
              type="text" 
              class="form-control" 
              placeholder="Enter your request title...">
            <div class="invalid-feedback">
              Request title is required!
            </div>
          </div>
          <div class="mb-1">
            <small class="text-muted">Description: </small>
            <textarea 
              v-model="newRequest.description"
              :class="{ 'is-invalid' : requestErrors.description }"
              cols="30" rows="8" 
              class="form-control" 
              placeholder="Enter your request description..."></textarea>
            <div class="invalid-feedback">
              Request description is required!
            </div>
          </div>
          <div class="mb-1">
            <small class="text-muted">Price: </small>
            <input 
              v-model="newRequest.price"
              :class="{ 'is-invalid' : requestErrors.price }"
              type="text" 
              class="form-control" 
              placeholder="Enter your request price">
            <div class="invalid-feedback">
              Request price is required!
            </div>
          </div>
          <div class="mb-1">
            <small class="text-muted">Attach file:</small>
            <input 
              class="form-control" type="file" multiple 
              @change="handleFile"
              :class="{ 'is-invalid' : requestErrors.images }">
            <div class="invalid-feedback">
              Please attach some image!
            </div>
          </div>
          <div class="mb-3 mt-3">
            <div class="d-grid">
              <button class="btn btn-sm btn-outline-dark" type="submit">
                Save request <i class="fa fa-save"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'RequestAdd',
  components: {
    Navbar,
    Navtabs
  },
  computed: {
    ...mapGetters([
      'newRequest',
      'requestErrors'
    ])
  },
  methods: {
    ...mapActions(['addRequest']), 

    handleFile(e) {
      this.newRequest.images = e.target.files
    },

    submitRequest() {
      this.addRequest(this.newRequest)
    }
  }
}
</script>