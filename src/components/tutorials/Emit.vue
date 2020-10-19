<template>
  <div>
    <input v-on:click="send" type="button" value="Emit Data" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      owner: 'Harold Kim Cantil',
      message: 'I approved this message'
    }
  },
  methods: {
    send () {
      this.$emit('relay', this.owner, this.message)
      console.log('SEND DATA : ' + this.owner, this.message)
    }
  }

}
</script>

<style>
</style>
