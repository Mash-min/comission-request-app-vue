<template>
  <!-- Nav tabs -->
  <div class="m-1">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link 
          to="/home" 
          class="nav-link"
          :class="{ 'active' : tab == 'home' }">
          <i class="fa fa-home"></i> Home
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/offers" 
          class="nav-link"
          :class="{ 'active' : tab == 'offers' }">
          <i class="fa fa-briefcase"></i> My Offers
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/requests" 
          class="nav-link"
          :class="{ 'active' : tab == 'requests' }">
          <i class="fa fa-list"></i> My Requests
        </router-link>
      </li>
      <li class="nav-item">
        <router-link 
          to="/profile" 
          class="nav-link"
          :class="{ 'active' : tab == 'profile' }">
          <i class="fa fa-user-circle"></i> Profile
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navtabs',
  props: ['tab']
}
</script>