<template>
  <div>
    <Nav />
    <Props id="123" title="The props title" />
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'
import Props from '@/components/tutorials/Props.vue'

export default {
  components: {
    Nav,
    Props
  }
}
</script>

<style>
</style>
