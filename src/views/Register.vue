<template>
  <Navbar/>
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <ul class="list-group">
        <form @submit.prevent="submitUser">
          <li class="list-group-item" style="text-align: center;">
            <h3>Register</h3>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Username:</small>
              <input type="text" class="form-control" placeholder="Enter your username..." v-model="newUser.username">
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Email:</small>
              <input type="email" class="form-control" placeholder="Enter your email..." v-model="newUser.email">
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Password:</small>
              <input type="password" class="form-control" placeholder="Enter your password..." v-model="newUser.password">
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Password confirmation:</small>
              <input type="password" class="form-control" placeholder="Re-enter your password..." v-model="newUser.password_confirmation">
            </div>
          </li>
          <li class="list-group-item" style="text-align: center;">
            <div class="d-grid">
              <button class="btn btn-sm btn-outline-dark" type="submit">
                Register
              </button>
              <small>or</small>
              <router-link to="/login">
                Login
              </router-link>
            </div>
          </li>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Register',
  components: {
    Navbar
  },
  computed: {
    ...mapGetters(['newUser'])
  },
  methods: {
    ...mapActions(['registerUser']),

    submitUser() {
      // console.log(this.newUser)
      this.registerUser(this.newUser)
    }
  }
}
</script>