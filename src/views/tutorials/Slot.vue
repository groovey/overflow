<template>
  <div>
    <Nav></Nav>
    <Slot>
      <template v-slot:header> Here might be a page title </template>
      <template v-slot:footer>Copyright by Cards</template>

      The main content is here
    </Slot>
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'
import Slot from '@/components/tutorials/Slot.vue'

export default {
  components: {
    Nav,
    Slot
  }
}
</script>

<style scoped>
</style>
