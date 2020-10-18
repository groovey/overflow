<template>
  <div class="nav">
    <router-link to="/"> Home</router-link>
    <router-link to="/contact">Contact </router-link>
    <router-link to="/about">About </router-link>
    <router-link to="/test">Test </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scope>
.nav {
  background-color: antiquewhite;
  padding: 10px;
}
.nav a {
  padding: 10px;
}
</style>
