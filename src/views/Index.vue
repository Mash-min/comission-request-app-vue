<template>
  <Navbar/>
  <div class="container">
    <div class="h-100 p-5 text-white bg-dark rounded-3">
      <h2>Commission/Request App</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, 
        perspiciatis explicabo maiores velit ipsam quam totam! Aliquam odio sapiente ducimus, 
        nisi consectetur, quisquam corporis doloribus adipisci laborum totam sunt eveniet. <br>
      </p>
      <router-link to="/register" class="btn btn-outline-light ms-1" type="button">Register</router-link>
      <router-link to="/login" class="btn btn-outline-light ms-1" type="button">Login</router-link>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Index',
  components: {
    Navbar
  }
}
</script>