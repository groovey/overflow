<template>
  <nav class="flex flex-wrap items-center bg-primary p-1 shadow-md">
    <a href="#" class="p-2 inline-flex items-center">
      <router-link to="/" class="text-xl text-white font-bold uppercase tracking-wide">CARDS</router-link>
    </a>
    <button @click="toggle" class="text-white inline-flex mr-1 p-1 rounded ml-auto hover:text-secondary outline-none sm:hidden" data-target="#navigation">
      <svg class="h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <div v-bind:class="{ hidden: !menu, flex: menu }" class="top-navbar text-white w-full sm:inline-flex sm:flex-grow sm:w-auto">
      <div class="w-full items-start flex flex-col lg:inline-flex sm:flex-row sm:ml-auto sm:w-auto sm:items-center sm:h-auto">
        <router-link to="/" class="w-full px-3 py-2 rounded items-center justify-center hover:text-secondary">Home</router-link>
        <router-link to="/contact" class="w-full px-3 py-2 rounded items-center justify-center hover:text-secondary">Contact</router-link>
        <router-link to="/about" class="w-full px-3 py-2 rounded items-center justify-center hover:text-secondary">About</router-link>
        <router-link to="/test" class="w-full px-3 py-2 rounded items-center justify-center hover:text-secondary">Test</router-link>
        <router-link to="/tutorials" class="w-full px-3 py-2 rounded items-center justify-center hover:text-secondary">Tutorials</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'
export default {

  setup (props, content) {
    var menu = ref(false)

    function toggle () {
      menu.value = !menu.value
    }

    return { menu, toggle }
  }

}

</script>

<style scoped>
</style>
