<template>
  <div>
    <Nav />
    <Slot>
      <template v-slot:header>{{ header }} </template>
      <template v-slot:footer>Copyright by Cards</template>
      {{ content }}
    </Slot>
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'
import Slot from '@/components/tutorials/Slot.vue'

export default {
  data () {
    return {
      content: 'the main content goes here.',
      header: 'The header title'

    }
  },
  methods: {

  },
  components: {
    Nav,
    Slot
  }
}
</script>

<style scoped>
</style>
