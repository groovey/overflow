<template>
  <div>
    <Nav />
    <Emit v-on:relay="process" />

    <p>
      This is the date emitted: <b>{{ data }}</b>
    </p>
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'
import Emit from '@/components/tutorials/Emit.vue'

export default {
  data () {
    return {
      data: ''
    }
  },
  methods: {
    process (owner, message) {
      const msg = owner + ' ' + message
      console.log('GET DATA ', msg)
      this.data = msg
    }

  },
  components: {
    Nav,
    Emit
  }
}
</script>

<style>
</style>
