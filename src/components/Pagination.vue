<template>
  <!-- Pagination -->
  <div class="m-1 mt-3 d-flex justify-content-center">
    <nav aria-label="...">
      <ul class="pagination text-dark">
        <li 
          class="page-item"
          :class="{ 'disabled' : link.url == null, 'active' : link.active == true }"
          v-for="link in links"
          :key="link.id">
          <button 
            class="page-link"
            @click="emitLink(link.url)">
            <span v-if="link.label == 'Previous' "><i class="fa fa-chevron-left"></i></span>
            <span v-else-if="link.label == 'Next' "><i class="fa fa-chevron-right"></i></span>
            <span v-else>{{ link.label }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: ['links'],
  methods: {
    emitLink(url) {
      this.$emit('emitLink', url)
    }
  }
}
</script>