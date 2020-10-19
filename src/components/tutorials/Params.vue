<template>
  <div>
    <div>Params id value = {{ id }}</div>
    <div>Param query name value = {{ name }}</div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      id: this.$route.params.id,
      name: this.$route.query.name
    }
  },
  props: {},
  methods: {},
  computed: {},
  components: {}
}
</script>

<style scoped>
</style>
