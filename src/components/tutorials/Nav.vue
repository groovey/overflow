<template>
  <div class="nav">
    <router-link :to="{ name: 'tutorial-basic' }">Basic</router-link>
    <router-link :to="{ name: 'tutorial-slot' }">Slot</router-link>
    <router-link :to="{ name: 'tutorial-props' }">Props</router-link>
    <router-link :to="{ name: 'tutorial-params', params: { id: 123 }, query: { name: 'apple' } }">Params</router-link>
    <router-link :to="{ name: 'tutorial-emit' }">Emit</router-link>
    <router-link :to="{ name: 'tutorial-model' }">Model</router-link>
    <router-link :to="{ name: 'tutorial-computed' }">Computed</router-link>
    <router-link :to="{ name: 'tutorial-trans' }">Transition</router-link>
    <router-link :to="{ name: 'tutorial-ajax' }">Ajax</router-link>
    <router-link :to="{ name: 'tutorial-composition-api' }">Composition API</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav {
  margin-bottom: 20px;
}
a {
  padding: 10px;
}
a:hover {
  background-color: antiquewhite;
}
</style>
