<template>
  <div>
    <Nav />
    <Composition-Api owner="steven jobs" />
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'
import CompositionApi from '@/components/tutorials/CompositionApi.vue'

export default {
  components: {
    Nav,
    CompositionApi
  }
}
</script>

<style>
</style>
