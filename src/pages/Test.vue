<template>
  <div>
    <div class="bg-green-100">Welcome to testing</div>
    <x-button @click.prevent="test" color="primary" small>Sample</x-button>
  </div>
</template>

<script>
import XButton from '@/components/Button.vue'
export default {
  components: {
    XButton
  },
  data () {
    return {}
  },
  methods: {
    test () {
      console.log('test')
      alert('test')
    }
  }
}
</script>

<style>
</style>
