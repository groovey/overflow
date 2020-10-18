<template>
  <div>
    <div>The url parameter test/:id value = {{ id }}</div>
    <div>Tutorial description = {{ description }}</div>

    <User header="Listing of users"></User>
    <Tutorial title="This is a vue tutorial" :id="id" v-on:relay="processRelay"></Tutorial>
  </div>
</template>

<script>
import User from '@/components/User.vue'
import Tutorial from '@/components/Tutorial.vue'

export default {
  components: {
    User,
    Tutorial
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
div {
  padding: 5px;
  background-color: azure;
  margin-bottom: 5px;
}
</style>
