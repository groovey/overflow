<template>
  <div>
    <form @submit.prevent="add">
      <input type="text" placeholder="name" name="name" v-model="name" />
      <input type="text" placeholder="email" name="email" v-model="email" />
      <input type="submit" value="submit" />
    </form>

    <div>{{ users }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null,
      email: null,
      users: []
    }
  },
  methods: {
    add () {
      this.users.push({ name: this.name, email: this.email })
      this.name = ''
      this.email = ''
    }
  }
}
</script>

<style scoped>
div {
  padding: 10px;
  margin-bottom: 10px;
}
input[type='text'] {
  padding: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
