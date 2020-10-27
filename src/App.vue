<template>
  <div id="app">
    <Nav />
    <div class="p-5 bg-gray-50">
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
