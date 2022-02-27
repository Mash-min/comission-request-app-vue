<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <h4 class="greetings m-1 mb-3"> Notifications</h4>
      <Navtabs 
        v-bind:tab="'profile'"/>
      <div class="m-1">
        <div class="list-group">
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
              <small>
                <i class="fa fa-chevron-right text-muted"></i> 
                <a href="#" class="ms-1 text-black">Username accepted your request offer.</a>
              </small>
              <button class="btn btn-sm">
                <i class="fa fa-check"></i>
              </button>
            </div>
          </div>
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
              <small>
                <i class="fa fa-chevron-right text-muted"></i> 
                <a href="#" class="ms-1 text-black">Username accepted your request offer.</a>
              </small>
              <button class="btn btn-sm">
                <i class="fa fa-check"></i>
              </button>
            </div>
          </div>
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
              <small>
                <i class="fa fa-chevron-right text-muted"></i> 
                <a href="#" class="ms-1 text-black">Username accepted your request offer.</a>
              </small>
              <button class="btn btn-sm">
                <i class="fa fa-check"></i>
              </button>
            </div>
          </div>
          <div class="list-group-item">
            <div class="d-flex justify-content-between">
              <small>
                <i class="fa fa-chevron-right text-muted"></i> 
                <a href="#" class="ms-1 text-muted">Username accepted your request offer.</a>
              </small>
              <button class="btn btn-sm disabled">
                <i class="fa fa-check"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Navtabs from '@/components/Navtabs'

export default {
  name: 'Notifications',
  components: {
    Navbar,
    Navtabs
  }
}
</script>

<style scoped>
  .list-group-item a {
    text-decoration: none!important;
  }
</style>