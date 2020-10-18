<template>
  <div>
    <div class="header">{{ header }}</div>

    <div v-for="(user, index) in users" v-bind:key="`user-${index}`" class="user">
      <div>
        Index = {{ index }} , id = {{ user.id }}, name = {{ user.name }}, email = {{ user.email }}
        <button v-on:click="hello(user)">Say Hello</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header'],
  data () {
    return {
      users: [
        { id: 1, name: 'Person 1', email: 'person1@gmail.com' },
        { id: 2, name: 'Person 2', email: 'person2@gmail.com' }
      ]
    }
  },

  methods: {
    hello (user) {
      const msg = `Hello, ${user.name}.`
      alert(msg)
      console.log(msg)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: cornsilk;
  padding: 10px;
  margin-bottom: 10px;
}
.user {
  background-color: yellow;
  width: 80%;
  margin: 0 auto;
  padding: 5px;
  margin-top: 10px;
}
</style>
