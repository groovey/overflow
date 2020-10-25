<template>
  <div class="p-4">
    <div class="bg-green-100">Welcome to testing</div>

    <!-- Button -->
    <div class="w-64 bg-green-300">
      <x-button @click.prevent="test" color="primary" small>Sample</x-button>
    </div>

    <!-- Bullet -->
    <div><x-bullet color="success"></x-bullet>Sample</div>

    <!-- Alert -->
    <x-alert color="error">
      <template v-slot:header border>ALERT HEADER</template>
      This is the content of the alert
    </x-alert>

    <!-- Card -->
    <x-card border>
      <template v-slot:header>CARD HEADER</template>
      1234
    </x-card>
  </div>
</template>

<script>
import XButton from '@/components/Button.vue'
import XBullet from '@/components/Bullet.vue'
import XAlert from '@/components/Alert.vue'
import XCard from '@/components/Card.vue'
export default {
  components: {
    XButton,
    XBullet,
    XAlert,
    XCard
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

<style scoped>
div {
  margin-bottom: 10px;
}
</style>
