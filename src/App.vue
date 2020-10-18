<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" />
    <div>{{ description }}</div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  },
  data () {
    return {
      description: 'The vue tailwind app'
    }
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
