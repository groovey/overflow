<template>
  <div>
    <img class="object-cover object-center" :src="src" alt="" />
  </div>
</template>

<script>

export default {
  props: {
    src: String
  },

  components: {
  },

  setup (props) {
    return { }
  }

}
</script>

<style scoped>
</style>
