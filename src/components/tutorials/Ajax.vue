<template>
  <div>
    <div>Ajax</div>
    <div>
      <ul>
        <li v-for="user in users" :key="user">{{ user.id }} | {{ user.name }} | {{ user.email }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      users: []
    }
  },
  methods: {},
  computed: {},
  components: {},
  async mounted () {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log('STATUS', response.status)
      console.log('HEADERS', response.headers)
      console.log('CONFIG', response.config)

      this.users = response.data
    } catch (error) {
      console.error(error)
    }
  }
}
</script>

<style scoped>
</style>
