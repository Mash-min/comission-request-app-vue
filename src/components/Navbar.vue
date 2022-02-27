<template>
  <nav class="navbar navbar-dark bg-dark mb-5">
    <div class="container-fluid container">
      <router-link to="/" class="navbar-brand">
        Commission-Request App
      </router-link>
      <ul class="nav">
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/login" class="nav-link text-white">
            Login
          </router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/register" class="nav-link text-white">
            Register
          </router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link to="/notifications" class="nav-link text-white position-relative">
            <span class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger">
              99
            </span>
            <i class="fa fa-bell"></i>
          </router-link>
        </li>
        <li class="nav-item ms-4" v-if="isAuthenticated">
          <a class="nav-link text-white btn btn-sm btn-outline-danger" href="#" @click="logoutUser">
            Logout <i class="fa fa-sign-out"></i>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  methods: {
    ...mapActions([
      'authenticateUser',
      'logoutUser'])
  },
  created() {
    this.authenticateUser()
  }
}
</script>