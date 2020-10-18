<template>
  <div>
    <div>The url parameter test/:id value = {{ id }}</div>
    <div>Value contains html code = <span v-html="html"></span></div>
    <div>The v bind image directive = <img v-bind:src="img" width="20" /></div>

    <User header="Listing of users"></User>
    <Test></Test>
  </div>
</template>

<script>
import User from '@/components/User.vue'
import Test from '@/components/Test.vue'

export default {
  components: {
    User,
    Test
  },
  data () {
    return {
      id: this.$route.params.id,
      html: '<b><u>Contains html code</u></b>',
      img: 'http://localhost:8080/img/logo.82b9c7a5.png'

    }
  }

}
</script>

<style scoped>
div {
  padding: 10px;
  background-color: azure;
}
</style>
