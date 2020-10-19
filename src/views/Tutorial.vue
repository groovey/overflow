<template>
  <div>
    <Nav></Nav>

    <!-- <User header="Listing of users"></User> -->
    <!-- <Tutorial title="This is a vue tutorial" :id="id" v-on:relay="processRelay"></Tutorial> -->
  </div>
</template>

<script>
// import User from '@/components/User.vue'
// import Tutorial from '@/components/Tutorial.vue'
import Nav from '@/components/tutorials/Nav.vue'

export default {
  components: {
    Nav
    // User
    // Tutorial
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
