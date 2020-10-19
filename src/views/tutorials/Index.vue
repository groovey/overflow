<template>
  <div>
    <Nav></Nav>

    <!-- <Tutorial title="This is a vue tutorial" :id="id" v-on:relay="processRelay"></Tutorial> -->
  </div>
</template>

<script>
import Nav from '@/components/tutorials/Nav.vue'

export default {
  components: {
    Nav

  },
  data () {
    return {
      id: this.$route.params.id,
      description: 'Welcome to the tutorial page.'
    }
  },
  methods: {
    processRelay (description, fullDescription) {
      console.log('description = ', description)
      console.log('full description = ', fullDescription)
      this.description = description
    }
  }

}
</script>

<style scoped>
</style>
