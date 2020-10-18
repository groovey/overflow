<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>{{ description }}</div>

    <Nav />
    <router-view />
    <User header="Listing of users"></User>
    <UserForm></UserForm>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import User from './components/User.vue'
import UserForm from './components/UserForm.vue'

export default {
  name: 'App',
  description: 'The opinionated vue js framework.',
  components: {
    User,
    Nav,
    UserForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
