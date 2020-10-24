<template>
  <div>
    <div class="bg-green-100">Welcome to testing</div>
    <div class="w-64 bg-green-300">
      <x-button @click.prevent="test" color="primary" small>Sample</x-button>
    </div>
    <div><x-bullet color="success"></x-bullet>Sample</div>
    <x-alert color="error">
      <template v-slot:header>MY HEADER</template>
      This is the content of the alert
    </x-alert>
  </div>
</template>

<script>
import XButton from '@/components/Button.vue'
import XBullet from '@/components/Bullet.vue'
import XAlert from '@/components/Alert.vue'
export default {
  components: {
    XButton,
    XBullet,
    XAlert
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
