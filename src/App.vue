<template>
  <div id="app" class="bg-blue-500">
    <img alt="Vue logo" src="./assets/logo.png" width="50" />
    <div class="bg-green-400">{{ description }}</div>
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
/* @import 'http://localhost:8080/css/tailwind.css'; */
</style>

<style >
/* @import '@/styles/tailwind.css'; */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
