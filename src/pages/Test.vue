<template>
  <div>
    <div class="bg-green-100">Welcome to testing</div>
    <x-button @click="test" large>Sample</x-button>
  </div>
</template>

<script>
import XButton from '@/components/XButton.vue'
export default {
  components: {
    XButton
  },
  data () {
    return {}
  },
  methods: {
    test () {
      alert('test')
    }
  }
}
</script>

<style>
</style>
