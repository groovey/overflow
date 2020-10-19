<template>
  <div>
    <div>Props v-bind id value = {{ id }}</div>
    <div>Props title value as a string = {{ title }}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  props: {
    id: Number,
    title: String
  },
  methods: {},
  computed: {},
  components: {}
}
</script>

<style scoped>
</style>
